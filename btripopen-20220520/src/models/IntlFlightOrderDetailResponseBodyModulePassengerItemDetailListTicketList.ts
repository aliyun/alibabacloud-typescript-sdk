// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOrderDetailResponseBodyModulePassengerItemDetailListTicketListPriceInfo } from "./IntlFlightOrderDetailResponseBodyModulePassengerItemDetailListTicketListPriceInfo";
import { IntlFlightOrderDetailResponseBodyModulePassengerItemDetailListTicketListTicketSegmentList } from "./IntlFlightOrderDetailResponseBodyModulePassengerItemDetailListTicketListTicketSegmentList";


export class IntlFlightOrderDetailResponseBodyModulePassengerItemDetailListTicketList extends $dara.Model {
  /**
   * @example
   * 2024-03-05 00:00:00
   */
  issueTime?: string;
  priceInfo?: IntlFlightOrderDetailResponseBodyModulePassengerItemDetailListTicketListPriceInfo;
  /**
   * @example
   * 000-1709625883
   */
  ticketNo?: string;
  ticketSegmentList?: IntlFlightOrderDetailResponseBodyModulePassengerItemDetailListTicketListTicketSegmentList[];
  static names(): { [key: string]: string } {
    return {
      issueTime: 'issue_time',
      priceInfo: 'price_info',
      ticketNo: 'ticket_no',
      ticketSegmentList: 'ticket_segment_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueTime: 'string',
      priceInfo: IntlFlightOrderDetailResponseBodyModulePassengerItemDetailListTicketListPriceInfo,
      ticketNo: 'string',
      ticketSegmentList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModulePassengerItemDetailListTicketListTicketSegmentList },
    };
  }

  validate() {
    if(this.priceInfo && typeof (this.priceInfo as any).validate === 'function') {
      (this.priceInfo as any).validate();
    }
    if(Array.isArray(this.ticketSegmentList)) {
      $dara.Model.validateArray(this.ticketSegmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

