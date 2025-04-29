// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ElectronicItineraryBatchApplyResponseBodyModuleApplyFailedTicketList } from "./ElectronicItineraryBatchApplyResponseBodyModuleApplyFailedTicketList";


export class ElectronicItineraryBatchApplyResponseBodyModule extends $dara.Model {
  applyFailedTicketList?: ElectronicItineraryBatchApplyResponseBodyModuleApplyFailedTicketList[];
  batchNo?: string;
  static names(): { [key: string]: string } {
    return {
      applyFailedTicketList: 'apply_failed_ticket_list',
      batchNo: 'batch_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyFailedTicketList: { 'type': 'array', 'itemType': ElectronicItineraryBatchApplyResponseBodyModuleApplyFailedTicketList },
      batchNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applyFailedTicketList)) {
      $dara.Model.validateArray(this.applyFailedTicketList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

