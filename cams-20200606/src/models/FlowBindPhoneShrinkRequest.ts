// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlowBindPhoneShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The message channel code, which is the channel ID. You can view the channel ID on the [Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
   * 
   * @example
   * cams-8c8*********
   */
  channelCode?: string;
  /**
   * @remarks
   * The message channel type. Valid values:
   * - INSTAGRAM
   * - WHATSAPP
   * - MESSENGER
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
   * The flow code. You can view the flow code in the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder).
   * 
   * This parameter is required.
   * 
   * @example
   * 9ccc41**************************
   */
  flowCode?: string;
  /**
   * @remarks
   * The flow version. To view the flow version, click the flow name in the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder) to go to the canvas page.
   * 
   * @example
   * 1
   */
  flowVersion?: string;
  /**
   * @remarks
   * The multi-WABA binding.
   */
  multiWabaPhoneNumbersShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * The list of phone numbers, Page IDs, or account IDs<props="intl">, or service IDs under the channel instance.
   */
  phoneNumbersShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The WABA account ID, Page ID, or account ID<props="intl">, or service ID.
   * 
   * - If the ChannelType parameter is set to WHATSAPP, specify the WABA account ID. You can view the WABA account ID by choosing [**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement) > **Management** > **WABA Management**.
   * 
   * - If the ChannelType parameter is not set to WHATSAPP, specify the Page ID for MESSENGER, the account ID for INSTAGRAM<props="intl">, or the service ID for VIBER.
   * 
   * @example
   * 1952************
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      channelCode: 'ChannelCode',
      channelType: 'ChannelType',
      flowCode: 'FlowCode',
      flowVersion: 'FlowVersion',
      multiWabaPhoneNumbersShrink: 'MultiWabaPhoneNumbers',
      ownerId: 'OwnerId',
      phoneNumbersShrink: 'PhoneNumbers',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      wabaId: 'WabaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCode: 'string',
      channelType: 'string',
      flowCode: 'string',
      flowVersion: 'string',
      multiWabaPhoneNumbersShrink: 'string',
      ownerId: 'number',
      phoneNumbersShrink: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      wabaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

