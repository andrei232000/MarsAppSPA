import React, {createContext, useContext, useEffect, useState} from 'react';
import Select, {ValueType} from 'react-select';

import {getCameraTypes, getRoverNames, getPhotos} from './APIRetriever';

//let roverNames : string[] = [];
//let options : {value : string, label : string}[] = [];

/*function updateOptions(roverNameValues : string[])
{
  let i : number;
  for(i = 0; i < roverNameValues.length; i++)
  {
    options.push({value : roverNameValues[i], label : roverNameValues[i]});
  }
}*/

const emptyStringArray : string[] = [];

export const ImageSearchContext = createContext({
  imageURLs : emptyStringArray,
  setImageURLs : (imageURLs : string[]) => {}
})

export const RoverPhotos : React.FC = () => {

  const emptyStringArray : string[] = [];
  const [imageURLs, setImageURLs] = useState(emptyStringArray);

  function makeImages()
  {
    let i : number;
    let nrOfPhotos : number = 5;
    if(imageURLs.length < 5) nrOfPhotos = imageURLs.length;
    let images = [];
    console.log(nrOfPhotos);
    for(i = 0; i < nrOfPhotos; i++)
    {
      images.push(makeImage(imageURLs[i]));
    }
    return images;
  }

  function makeImage(imageURL : string)
  {
    return (<img src={imageURL}/>);
  }

  return(
    <div>
      <ImageSearchContext.Provider value={{imageURLs : imageURLs, setImageURLs : setImageURLs}}>
        <RoverPhotosForm/>
      </ImageSearchContext.Provider>
      <div>
        {makeImages()}
      </div>
    </div>
  )
}

const RoverFormContext = createContext({
  roverName : "select-rover",
  cameraType : "select-camera",
  setRoverName : (roverName : string) => {},
  setCameraType : (cameraType : string) => {}
});

const RoverPhotosForm : React.FC = () =>
{
  const [roverData, setRoverData] = useState({roverName : "select-rover", cameraType : "select-camera"});

  function setRoverName(roverName : string)
  {
    setRoverData({roverName : roverName, cameraType : roverData.cameraType});
  }

  function setCameraType(cameraType : string)
  {
    setRoverData({roverName : roverData.roverName, cameraType : cameraType});
  }

  return(
    <RoverFormContext.Provider value = {{roverName : roverData.roverName, cameraType : roverData.cameraType, setRoverName, setCameraType}}>
      <RoverNameSelect/>
      <CameraTypeSelect/>
      <SubmitButton/>
    </RoverFormContext.Provider>
  );
}

const RoverNameSelect : React.FC = () =>
{
  const [options, setOptions] = useState([{value : "select-rover", label : "Select Rover..."}])

  const updateRoverOptions = async () =>
  {
    const rovers : string[] = await getRoverNames();
    let newOptions : {value : string, label : string}[] = [];
    let i : number;
    for(i = 0; i < rovers.length; i++)
    {
      newOptions.push({value : rovers[i], label : rovers[i]});
    }
    console.log(newOptions);
    setOptions(newOptions);
  }

  const context = useContext(RoverFormContext);

  function getSelection(option : ValueType<any>)
  {
    context.setRoverName(option.value);
    console.log(option);
  }

  useEffect(() => {updateRoverOptions()}, []);
  return(
    <Select onChange = {getSelection} defaultValue = {options[0]} options = {options}>Select Rover</Select>
  );
}

const CameraTypeSelect : React.FC = () =>
{
  const [options, setOptions] = useState([{value : "select-camera", label : "Select Camera..."}]);

  const context = useContext(RoverFormContext);

  const updateCameraOptions = async (roverName : string) =>
  {
    const cameras : string[] = await getCameraTypes(roverName);
    let newOptions : {value : string, label : string}[] = [];
    let i : number;
    for(i = 0; i < cameras.length; i++)
    {
      newOptions.push({value : cameras[i], label : cameras[i]});
    }
    console.log(newOptions);
    setOptions(newOptions);
  }

  useEffect(() => {updateCameraOptions(context.roverName)}, [context.roverName]);

  const checkIfDisabled = () : boolean =>
  {
    return (context.roverName == "select-rover");
  }

  function getSelection(option : ValueType<any>)
  {
    context.setCameraType(option.value);
    console.log(option.value);
  }

  return(
    <Select options = {options} onChange = {getSelection} isDisabled = {checkIfDisabled()}>

    </Select>
  );
}

const SubmitButton : React.FC = () =>
{
  const context = useContext(RoverFormContext);
  const imageContext = useContext(ImageSearchContext)

  async function submitData()
  {
    console.log("click");
    if(context.roverName != "select-rover" && context.cameraType != "select-camera")
    {
      const imageURLs : string[] = await getPhotos(context.roverName, context.cameraType);
      console.log(imageURLs);
      imageContext.setImageURLs(imageURLs);
    }
    else
    {

    }
  }
  return(
    <button onClick={submitData}>Submit</button>
  );
}


