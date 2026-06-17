// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStoragePlanRequest extends $dara.Model {
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate this token on your client. The token must be unique across different requests. It is case-sensitive and can contain up to 64 ASCII characters.
   * 
   * @example
   * 6000170000591aed949d0f5********************
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The unit of the subscription duration for the storage plan. Valid values:
   * 
   * - **Month**
   * 
   * - **Year**
   * 
   * This parameter is required.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The capacity of the storage plan, in GB. Valid values: 50, 100, 200, 300, 500, 1,000, 2,000, 3,000, 5,000, 10,000, 15,000, 20,000, 25,000, 30,000, 50,000, 100,000, and 200,000.
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
   * - **Mainland**: For use in the Chinese mainland.
   * 
   * - **Overseas**: For use in China (Hong Kong) and regions outside China.
   * 
   * This parameter is required.
   * 
   * @example
   * Mainland
   */
  storageType?: string;
  /**
   * @remarks
   * The subscription duration of the storage plan.
   * 
   * - If **Period** is set to **Month**, the value ranges from 1 to 9.
   * 
   * - If **Period** is set to **Year**, the valid values are 1, 2, 3, and 5.
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

