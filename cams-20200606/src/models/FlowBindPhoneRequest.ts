// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlowBindPhoneRequestMultiWabaPhoneNumbers extends $dara.Model {
  /**
   * @remarks
   * The channel code.
   * 
   * @example
   * Sample value Sample value
   */
  channelCode?: string;
  /**
   * @remarks
   * The phone number list.
   */
  phoneNumbers?: string[];
  /**
   * @remarks
   * wabaId
   * 
   * @example
   * Sample value Sample value
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
  multiWabaPhoneNumbers?: FlowBindPhoneRequestMultiWabaPhoneNumbers[];
  ownerId?: number;
  /**
   * @remarks
   * The list of phone numbers, Page IDs, or account IDs<props="intl">, or service IDs under the channel instance.
   */
  phoneNumbers?: string[];
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

