// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ElectronicItineraryGetApplyResultResponseBodyModuleApplyTicketList extends $dara.Model {
  /**
   * @example
   * 5001
   */
  failedCode?: number;
  failedReason?: string;
  itineraryStatus?: number;
  remark?: string;
  /**
   * @example
   * 781-6605285563
   */
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      failedCode: 'failed_code',
      failedReason: 'failed_reason',
      itineraryStatus: 'itinerary_status',
      remark: 'remark',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCode: 'number',
      failedReason: 'string',
      itineraryStatus: 'number',
      remark: 'string',
      ticketNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

