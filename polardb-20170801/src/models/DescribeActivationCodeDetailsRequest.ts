// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActivationCodeDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the activation code.
   * 
   * @example
   * 123
   */
  activationCodeId?: number;
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
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      activationCodeId: 'ActivationCodeId',
      aliyunOrderId: 'AliyunOrderId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationCodeId: 'number',
      aliyunOrderId: 'string',
      ownerAccount: 'string',
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

