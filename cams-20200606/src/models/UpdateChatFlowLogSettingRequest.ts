// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChatFlowLogSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The flow code. You can view the flow code in the [Flow Builder](https://chatapp.console.aliyun.com/ChatFlowBuilder).
   * 
   * @example
   * 9ccc41**************************
   */
  flowCode?: string;
  /**
   * @remarks
   * The unique ID of the setting. You can obtain this ID by calling the [ReadChatFlowLogSetting](https://help.aliyun.com/document_detail/2937212.html) operation.
   * 
   * @example
   * 100
   */
  id?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The log enabling status. Valid values:
   * - ENABLED: Enables log writing.
   * 
   * - DISABLED: Disables log writing but retains the Simple Log Service log instance.
   * 
   * - DELETED: Disables log writing and deletes the Simple Log Service log instance.
   * 
   * @example
   * ENABLED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      flowCode: 'FlowCode',
      id: 'Id',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowCode: 'string',
      id: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

