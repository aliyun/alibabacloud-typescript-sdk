// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderDetailV2ResponseBodyModulePassengerListTicketsSegmentOpenTicketList } from "./FlightOrderDetailV2responseBodyModulePassengerListTicketsSegmentOpenTicketList";


export class FlightOrderDetailV2ResponseBodyModulePassengerListTickets extends $dara.Model {
  channel?: string;
  journeyTitle?: string;
  /**
   * @example
   * OPEN_FOR_USE
   */
  openTicketStatus?: string;
  /**
   * @remarks
   * pcc/office
   * 
   * @example
   * pcc/office
   */
  pcc?: string;
  segmentOpenTicketList?: FlightOrderDetailV2ResponseBodyModulePassengerListTicketsSegmentOpenTicketList[];
  ticketAuthMemo?: string;
  /**
   * @example
   * 2
   */
  ticketAuthStatus?: number;
  /**
   * @example
   * 444-2023062999
   */
  ticketNo?: string;
  /**
   * @example
   * 4500
   */
  ticketPrice?: number;
  ticketStatus?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      journeyTitle: 'journey_title',
      openTicketStatus: 'open_ticket_status',
      pcc: 'pcc',
      segmentOpenTicketList: 'segment_open_ticket_list',
      ticketAuthMemo: 'ticket_auth_memo',
      ticketAuthStatus: 'ticket_auth_status',
      ticketNo: 'ticket_no',
      ticketPrice: 'ticket_price',
      ticketStatus: 'ticket_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      journeyTitle: 'string',
      openTicketStatus: 'string',
      pcc: 'string',
      segmentOpenTicketList: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModulePassengerListTicketsSegmentOpenTicketList },
      ticketAuthMemo: 'string',
      ticketAuthStatus: 'number',
      ticketNo: 'string',
      ticketPrice: 'number',
      ticketStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.segmentOpenTicketList)) {
      $dara.Model.validateArray(this.segmentOpenTicketList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

