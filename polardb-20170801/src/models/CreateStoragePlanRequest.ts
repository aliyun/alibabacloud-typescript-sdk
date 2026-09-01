// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStoragePlanRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically use coupons. Valid values:
   * * true (default): Uses coupons.
   * * false: Does not use coupons.
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token is case-sensitive and can contain only ASCII characters. The token can be up to 64 characters in length.
   * 
   * @example
   * 6000170000591aed949d0f5********************
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The unit of the storage plan duration. Valid values:
   * 
   * - **Month**: month.
   * 
   * - **Year**: year.
   * 
   * This parameter is required.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The coupon code. If this parameter is not specified, the default coupon is used.
   * 
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The capacity of the storage plan. Unit: GB. Valid values: 50, 100, 200, 300, 500, 1000, 2000, 3000, 5000, 10000, 15000, 20000, 25000, 30000, 50000, 100000, and 200000.
   * 
   * This parameter is required.
   * 
   * @example
   * 500
   */
  storageClass?: string;
  /**
   * @remarks
   * The type of the storage plan. Valid values:
   * 
   * - **Mainland**: general-purpose, applicable in the Chinese mainland.
   * 
   * - **Overseas**: general-purpose, applicable in Hong Kong (China) and outside China.
   * 
   * This parameter is required.
   * 
   * @example
   * Mainland
   */
  storageType?: string;
  /**
   * @remarks
   * The duration of the storage plan.
   * 
   * - If **Period** is set to **Month**, the value ranges from 1 to 9.
   * 
   * - If **Period** is set to **Year**, valid values are 1, 2, 3, and 5.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  usedTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoUseCoupon: 'AutoUseCoupon',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      promotionCode: 'PromotionCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageClass: 'StorageClass',
      storageType: 'StorageType',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUseCoupon: 'boolean',
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'string',
      promotionCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageClass: 'string',
      storageType: 'string',
      usedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

