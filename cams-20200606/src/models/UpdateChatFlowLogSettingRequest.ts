// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChatFlowLogSettingRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  flowCode?: string;
  /**
   * @example
   * 74
   */
  id?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值
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

