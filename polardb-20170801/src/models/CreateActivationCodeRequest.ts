// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateActivationCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud order ID, including virtual order IDs. If you use a virtual order, you can call CreateOrGetVirtualLicenseOrder and specify the Engine parameter to obtain the returned AliyunOrderId.
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
   * The name of the activation code. The name can contain only letters, digits, underscores (_), and hyphens (-). This name is used to generate the activation code file name when you download the code from the console.
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
   * The unique identifier of the database. This field is required if the AllowEmptySystemIdentifier parameter of the order is set to false.
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

