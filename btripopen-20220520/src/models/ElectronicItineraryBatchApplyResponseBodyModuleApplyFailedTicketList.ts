// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ElectronicItineraryBatchApplyResponseBodyModuleApplyFailedTicketList extends $dara.Model {
  failedCode?: number;
  failedReason?: string;
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      failedCode: 'failed_code',
      failedReason: 'failed_reason',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCode: 'number',
      failedReason: 'string',
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

