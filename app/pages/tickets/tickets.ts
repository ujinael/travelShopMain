import {getTicketById, postTicketData} from "@rest/tickets";
import '@myCss'; // добавлена новая ссылка - ссылка ведет на один файл
import '@assets/styles/tickets.scss'
import { initTickets } from "@services/tickets/ticket";

const clientType = "custom";



// init main  data

initTickets()
