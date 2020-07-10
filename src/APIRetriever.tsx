import axios from 'axios';

export async function getRoverNames()
{
  const url : string = "http://localHost:8000/roverNames";
  const roverNameData = await axios.get(url);
  const nrOfRovers : number = roverNameData.data.length;
  const roverNames : string[] = new Array<string>(nrOfRovers);
  let i : number;
  for(i = 0; i < nrOfRovers; i++)
  {
    roverNames[i] = roverNameData.data[i];
  }
  return roverNames;
}

export async function getCameraTypes(roverName : string)
{
  const url : string = "http://localHost:8000/" + roverName + "/cameraTypes";
  const cameraTypeData = await axios.get(url);
  const nrOfCameras : number = cameraTypeData.data.length;
  const cameraTypes : string[] = new Array<string>(nrOfCameras);
  let i : number;
  for(i = 0; i < nrOfCameras; i++)
  {
    cameraTypes[i] = cameraTypeData.data[i];
  }
  return cameraTypes;
}

export async function getPhotos(roverName : string, cameraType : string)
{
  const url : string = "http://localhost:8000/rover/" + roverName +"/photos/" + cameraType + "?sol=416";
  const imageData = await axios.get(url);
  const nrOfPhotos : number = imageData.data.photos.length;
  const imageURLs : string[] = new Array<string>(nrOfPhotos);
  let i : number;
  for(i = 0; i < nrOfPhotos; i++)
  {
    imageURLs[i] = imageData.data.photos[i].img_src;
  }
  return imageURLs;
}