import { initFooterTitle } from '@services/general/general';
import { initHeaderTitle } from '@services/general/general';
import { getTicketById } from '@rest/tickets';
import { initTicketElementTemplate } from '../../templates/ticketInfo';
import { TicketType, IVipTicket } from './../../models/ticket/ticket';
import { postTicketData } from "@services/rest/tickets";

let ticketInstance: TicketType ;
let ticketPostInstance:Record<string|symbol,any>;
const clientType = "custom";
function initTicketInfo(ticket: TicketType):void {
console.log(ticket);

    const targetElement = document.querySelector('.ticket-info');

    const ticketDescription = ticket?.description;
    const ticketOperator = ticket?.tourOperator;
        const vipClientType =  (ticket as IVipTicket).vipStatus;


    const ticketElemsArr: [string, string, string] = [ticketDescription, ticketOperator, vipClientType];

    let ticketElemTemplate:string;

    ticketElemsArr.forEach((el, i) => {
        ticketElemTemplate+= initTicketElementTemplate(el, i);
    });

    targetElement.innerHTML = ticketElemTemplate;

}

function initUserData() {
const userInfo = document.querySelectorAll('.user-info > p');
const userInfoObj:Record<string|symbol,any> = {};
    userInfo.forEach((el) => {
    const inputDataName = el.getAttribute('data-name');
    if (inputDataName) {
        const inputElems = el.querySelector('input');
        userInfoObj[inputDataName] = inputElems.value;
    }
    });

    console.log('userInfoObj',userInfoObj)
    return userInfoObj;
}

function initPostData(data:Record<string|symbol,any>):void {
    console.log(data);
    
    initUserData();
    postTicketData(data).then((data) => {
        if (data.success) {

        }
    })
}

function registerConfirmButton(): void {
    const targetEl = document.getElementById('accept-order-button');
    if (targetEl) {
        targetEl.addEventListener('click', () => {
            initPostData(ticketPostInstance);
        });
    }
}



export const initTickets = ()=>{
   const ticketData: Promise<IVipTicket[]> = getTicketById<IVipTicket>('someId');
    ticketData.then((data): void => {
        ticketInstance = data[0];
        const ticketName = typeof ticketInstance?.name === "string" ? ticketInstance?.name : '';
        initHeaderTitle(ticketName, 'h3');
        initFooterTitle('Туры по всему миру', 'h2');
        initTicketInfo(ticketInstance);
    });

    registerConfirmButton();

}