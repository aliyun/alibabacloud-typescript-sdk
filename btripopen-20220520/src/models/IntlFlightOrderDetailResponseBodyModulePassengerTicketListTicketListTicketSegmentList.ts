// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketListTicketSegmentList extends $dara.Model {
  cabin?: string;
  cabinClass?: string;
  modified?: boolean;
  openTicketStatus?: string;
  refunded?: boolean;
  segmentKey?: string;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      modified: 'modified',
      openTicketStatus: 'open_ticket_status',
      refunded: 'refunded',
      segmentKey: 'segment_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabin: 'string',
      cabinClass: 'string',
      modified: 'boolean',
      openTicketStatus: 'string',
      refunded: 'boolean',
      segmentKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

