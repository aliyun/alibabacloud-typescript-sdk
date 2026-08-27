// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlowBindPhoneRequestMultiWabaPhoneNumbers extends $dara.Model {
  /**
   * @remarks
   * The channel code.
   * 
   * @example
   * 示例值示例值
   */
  channelCode?: string;
  /**
   * @remarks
   * The list of phone numbers.
   */
  phoneNumbers?: string[];
  /**
   * @remarks
   * wabaId
   * 
   * @example
   * 示例值示例值
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      channelCode: 'ChannelCode',
      phoneNumbers: 'PhoneNumbers',
      wabaId: 'WabaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCode: 'string',
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      wabaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.phoneNumbers)) {
      $dara.Model.validateArray(this.phoneNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlowBindPhoneRequest extends $dara.Model {
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
  multiWabaPhoneNumbers?: FlowBindPhoneRequestMultiWabaPhoneNumbers[];
  ownerId?: number;
  /**
   * @remarks
   * The list of phone numbers, PageIds, or AccountIds<props="intl">, or ServiceIds under the channel instance.
   */
  phoneNumbers?: string[];
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
      multiWabaPhoneNumbers: 'MultiWabaPhoneNumbers',
      ownerId: 'OwnerId',
      phoneNumbers: 'PhoneNumbers',
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
      multiWabaPhoneNumbers: { 'type': 'array', 'itemType': FlowBindPhoneRequestMultiWabaPhoneNumbers },
      ownerId: 'number',
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      wabaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multiWabaPhoneNumbers)) {
      $dara.Model.validateArray(this.multiWabaPhoneNumbers);
    }
    if(Array.isArray(this.phoneNumbers)) {
      $dara.Model.validateArray(this.phoneNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

