// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderDetailV2ResponseBodyModulePassengerListTicketsSegmentOpenTicketList extends $dara.Model {
  journeyIndex?: number;
  openTicketStatus?: number;
  segmentIndex?: number;
  static names(): { [key: string]: string } {
    return {
      journeyIndex: 'journey_index',
      openTicketStatus: 'open_ticket_status',
      segmentIndex: 'segment_index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journeyIndex: 'number',
      openTicketStatus: 'number',
      segmentIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

