// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetQualityCheckTaskResultResponseBodyDataConversationListDialogueList } from "./GetQualityCheckTaskResultResponseBodyDataConversationListDialogueList";


export class GetQualityCheckTaskResultResponseBodyDataConversationList extends $dara.Model {
  /**
   * @example
   * 1
   */
  callType?: string;
  /**
   * @example
   * 234234
   */
  customerId?: string;
  customerName?: string;
  /**
   * @example
   * 23984763826
   */
  customerServiceId?: string;
  customerServiceName?: string;
  dialogueList?: GetQualityCheckTaskResultResponseBodyDataConversationListDialogueList[];
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  gmtService?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'callType',
      customerId: 'customerId',
      customerName: 'customerName',
      customerServiceId: 'customerServiceId',
      customerServiceName: 'customerServiceName',
      dialogueList: 'dialogueList',
      gmtService: 'gmtService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      customerId: 'string',
      customerName: 'string',
      customerServiceId: 'string',
      customerServiceName: 'string',
      dialogueList: { 'type': 'array', 'itemType': GetQualityCheckTaskResultResponseBodyDataConversationListDialogueList },
      gmtService: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialogueList)) {
      $dara.Model.validateArray(this.dialogueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

