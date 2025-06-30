// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketListPriceInfo } from "./IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketListPriceInfo";
import { IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketListTicketSegmentList } from "./IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketListTicketSegmentList";


export class IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketList extends $dara.Model {
  issueTime?: string;
  priceInfo?: IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketListPriceInfo;
  segmentKeyList?: string[];
  ticketNo?: string;
  ticketSegmentList?: IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketListTicketSegmentList[];
  static names(): { [key: string]: string } {
    return {
      issueTime: 'issue_time',
      priceInfo: 'price_info',
      segmentKeyList: 'segment_key_list',
      ticketNo: 'ticket_no',
      ticketSegmentList: 'ticket_segment_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueTime: 'string',
      priceInfo: IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketListPriceInfo,
      segmentKeyList: { 'type': 'array', 'itemType': 'string' },
      ticketNo: 'string',
      ticketSegmentList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketListTicketSegmentList },
    };
  }

  validate() {
    if(this.priceInfo && typeof (this.priceInfo as any).validate === 'function') {
      (this.priceInfo as any).validate();
    }
    if(Array.isArray(this.segmentKeyList)) {
      $dara.Model.validateArray(this.segmentKeyList);
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

