// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateActivationCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud order ID (including the virtual order ID).
   * 
   * This parameter is required.
   * 
   * @example
   * 2233****445566
   */
  aliyunOrderId?: string;
  /**
   * @remarks
   * The description of the activation code.
   * 
   * @example
   * testCode
   */
  description?: string;
  /**
   * @remarks
   * The MAC address.
   * 
   * This parameter is required.
   * 
   * @example
   * 12:34:56:78:98:00
   */
  macAddress?: string;
  /**
   * @remarks
   * The name of the activation code. The name can contain only letters, digits, underscores (_), and hyphens (-). The activation code file downloaded from the console is named based on this name.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The system identifier of the database. This parameter is required if you set AllowEmptySystemIdentifier to false.
   * 
   * @example
   * 1234567890123456
   */
  systemIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunOrderId: 'AliyunOrderId',
      description: 'Description',
      macAddress: 'MacAddress',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      systemIdentifier: 'SystemIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunOrderId: 'string',
      description: 'string',
      macAddress: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      systemIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

