// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ElectronicItineraryGetApplyResultResponseBodyModuleApplyTicketList } from "./ElectronicItineraryGetApplyResultResponseBodyModuleApplyTicketList";


export class ElectronicItineraryGetApplyResultResponseBodyModule extends $dara.Model {
  applyTicketList?: ElectronicItineraryGetApplyResultResponseBodyModuleApplyTicketList[];
  batchApplyNo?: string;
  static names(): { [key: string]: string } {
    return {
      applyTicketList: 'apply_ticket_list',
      batchApplyNo: 'batch_apply_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyTicketList: { 'type': 'array', 'itemType': ElectronicItineraryGetApplyResultResponseBodyModuleApplyTicketList },
      batchApplyNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applyTicketList)) {
      $dara.Model.validateArray(this.applyTicketList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

