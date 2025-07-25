// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBindingRelationsForFlowVersionRequest extends $dara.Model {
  /**
   * @remarks
   * Channel type. Values:
   * - INSTAGRAM
   * - WHATSAPP
   * - MESSENGER
   * 
   * 
   * <props="intl">- VIBER
   * 
   * This parameter is required.
   * 
   * @example
   * WHATSAPP
   */
  channelType?: string;
  /**
   * @remarks
   * Process code. View the process code in the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 9ccc41**************************
   */
  flowCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      flowCode: 'FlowCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      flowCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

