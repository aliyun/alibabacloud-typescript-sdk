// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenewalPriceRequest extends $dara.Model {
  businessInfo?: string;
  clientToken?: string;
  DBInstanceClass?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  payType?: string;
  quantity?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  timeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      quantity: 'Quantity',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      timeType: 'TimeType',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessInfo: 'string',
      clientToken: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      quantity: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      timeType: 'string',
      usedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

