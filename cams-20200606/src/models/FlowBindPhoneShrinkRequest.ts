// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlowBindPhoneShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The message channel code, which is the channel ID. View the channel ID in the [Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
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
   * The flow code. View the flow code in the [Flow Builder](https://chatapp.console.aliyun.com/ChatFlowBuilder) page.
   * 
   * This parameter is required.
   * 
   * @example
   * 9ccc41**************************
   */
  flowCode?: string;
  /**
   * @remarks
   * The flow version. Click the flow name in the [Flow Builder](https://chatapp.console.aliyun.com/ChatFlowBuilder) page to enter the flow builder canvas and view the flow version.
   * 
   * @example
   * 1
   */
  flowVersion?: string;
  /**
   * @remarks
   * The multi-WABA binding configuration.
   */
  multiWabaPhoneNumbersShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * The list of phone numbers, PageIds, or AccountIds<props="intl">, or ServiceIds under the channel instance.
   */
  phoneNumbersShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The WABA account ID, PageId, or AccountId<props="intl">, or ServiceId.
   * 
   * - If the ChannelType parameter is set to WHATSAPP, specify the WABA account ID. View the WABA account ID in [**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement) > **Manage** > **WABA Management**.
   * 
   * - If the ChannelType parameter is not set to WHATSAPP, specify the PageId for MESSENGER, the AccountId for INSTAGRAM<props="intl">, or the ServiceId for VIBER.
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

