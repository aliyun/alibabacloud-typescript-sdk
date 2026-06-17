// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLicenseOrderDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud order or virtual order.
   * 
   * This parameter is required.
   * 
   * @example
   * 239618016570503
   */
  aliyunOrderId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunOrderId: 'AliyunOrderId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

