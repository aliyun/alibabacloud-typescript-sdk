// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlowRebindPhoneRequest extends $dara.Model {
  /**
   * @remarks
   * Message channel code
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  channelCode?: string;
  /**
   * @remarks
   * Message channel type
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  channelType?: string;
  /**
   * @remarks
   * Flow code.
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  flowCode?: string;
  /**
   * @remarks
   * Flow version
   * 
   * @example
   * 示例值
   */
  flowVersion?: string;
  ownerId?: number;
  /**
   * @remarks
   * Phone numbers or PageIds under the channel instance, etc.
   */
  phoneNumbers?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * WABA account ID, or PageId for other channel types, etc.
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      channelCode: 'ChannelCode',
      channelType: 'ChannelType',
      flowCode: 'FlowCode',
      flowVersion: 'FlowVersion',
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
      ownerId: 'number',
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

