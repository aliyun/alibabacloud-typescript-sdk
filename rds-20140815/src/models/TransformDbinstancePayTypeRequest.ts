// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformDBInstancePayTypeRequest extends $dara.Model {
  autoRenew?: string;
  autoUseCoupon?: boolean;
  businessInfo?: string;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  payType?: string;
  period?: string;
  promotionCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      promotionCode: 'PromotionCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      autoUseCoupon: 'boolean',
      businessInfo: 'string',
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      period: 'string',
      promotionCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

