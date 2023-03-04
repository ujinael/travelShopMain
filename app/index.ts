import {getTours} from "@rest/tours";
import './assets/styles/main.scss';
import {images} from "@services/img/img";
import {ITours} from "./models/tours";
import {initFooterTitle, initHeaderTitle} from "@services/general/general";
import { initToursDivElements } from "@services/app/app_services";

export let  toursDataArray: ITours[] = [];
const imagesStore = images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist

const initApp = async ()=>{
initHeaderTitle('Туры', 'h1');
initFooterTitle('Туры по всему миру', 'h2');
const tourData: Promise<ITours[]> = getTours();
toursDataArray = await tourData
initToursDivElements(toursDataArray);

}

initApp()

