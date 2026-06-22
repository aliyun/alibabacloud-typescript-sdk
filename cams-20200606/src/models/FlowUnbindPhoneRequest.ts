// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlowUnbindPhoneRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  channelType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  flowCode?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  flowVersion?: string;
  ownerId?: number;
  phoneNumbers?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      flowCode: 'FlowCode',
      flowVersion: 'FlowVersion',
      ownerId: 'OwnerId',
      phoneNumbers: 'PhoneNumbers',
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
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

