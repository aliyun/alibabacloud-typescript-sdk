// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformDBInstancePayTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the auto-renewal feature for the instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > - This parameter is valid only when you change the billing method from pay-as-you-go to subscription.
   * > - All strings except **true** are considered **false**.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * Specifies whether to use vouchers to offset fees. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The additional business information about the instance.
   * 
   * @example
   * None
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The new billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The renewal cycle of the instance. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * > This parameter must be specified if you set **PayType** to **Prepaid**.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 726702810223
   */
  promotionCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The subscription duration of the instance. Valid values:
   * 
   * *   If you set **Period** to **Year**, the value of UsedTime ranges from **1 to 5**.
   * *   If you set **Period** to **Month**, the value of UsedTime ranges from **1 to 11**.
   * 
   * > This parameter must be specified when **PayType** is set to **Prepaid**.
   * 
   * @example
   * 1
   */
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

