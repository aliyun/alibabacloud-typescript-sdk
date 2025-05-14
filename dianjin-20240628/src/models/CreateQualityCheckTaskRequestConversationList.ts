// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateQualityCheckTaskRequestConversationListDialogueList } from "./CreateQualityCheckTaskRequestConversationListDialogueList";


export class CreateQualityCheckTaskRequestConversationList extends $dara.Model {
  /**
   * @example
   * 1
   */
  callType?: string;
  /**
   * @example
   * 1
   */
  customerId?: string;
  customerName?: string;
  /**
   * @example
   * xxx
   */
  customerServiceId?: string;
  customerServiceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueList?: CreateQualityCheckTaskRequestConversationListDialogueList[];
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
      dialogueList: { 'type': 'array', 'itemType': CreateQualityCheckTaskRequestConversationListDialogueList },
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

