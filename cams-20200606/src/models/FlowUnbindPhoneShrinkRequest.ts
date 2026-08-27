// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlowUnbindPhoneShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The message channel type. Valid values:
   * 
   * - INSTAGRAM
   * 
   * - WHATSAPP
   * 
   * - MESSENGER
   * 
   * <props="intl">- VIBER
   * 
   * @example
   * WHATSAPP
   */
  channelType?: string;
  /**
   * @remarks
   * The flow code. You can view the flow code on the [Flow Builder](https://chatapp.console.aliyun.com/ChatFlowBuilder) page.
   * 
   * This parameter is required.
   * 
   * @example
   * 9ccc41**************************
   */
  flowCode?: string;
  /**
   * @remarks
   * The flow version. You can view the flow version by going to the [Flow Builder](https://chatapp.console.aliyun.com/ChatFlowBuilder) page, clicking the flow name, and entering the flow editor canvas page.
   * 
   * @example
   * 1
   */
  flowVersion?: string;
  ownerId?: number;
  /**
   * @remarks
   * The list of phone numbers, PageIds, AccountIds,<props="intl"> or ServiceIds under the channel instance.
   */
  phoneNumbersShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      flowCode: 'FlowCode',
      flowVersion: 'FlowVersion',
      ownerId: 'OwnerId',
      phoneNumbersShrink: 'PhoneNumbers',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      flowCode: 'string',
      flowVersion: 'string',
      ownerId: 'number',
      phoneNumbersShrink: 'string',
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

