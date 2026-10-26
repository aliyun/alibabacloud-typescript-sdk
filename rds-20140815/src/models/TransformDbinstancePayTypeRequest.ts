// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformDBInstancePayTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * * **true**: Enables auto-renewal.
   * * **false**: Disables auto-renewal.
   * 
   * > * This parameter takes effect only when you change the billing method from pay-as-you-go to subscription.
   * > * Any string other than **true** is processed as **false**.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * Specifies whether to use vouchers to offset fees. Valid values:
   * 
   * - **true**: Uses vouchers.
   * - **false**: Does not use vouchers. This is the default value.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The extended business parameters.
   * 
   * @example
   * 123456789
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method to which the instance is changed. Valid values:
   * * **Postpaid**: Pay-as-you-go.
   * * **Prepaid**: Subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription type of the subscription instance. Valid values:
   * * **Year**: Yearly subscription.
   * * **Month**: Monthly subscription.
   * 
   * > This parameter is required if the **PayType** parameter is set to **Prepaid**.
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
   * 726122650073
   */
  promotionCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * * If the **Period** parameter is set to **Year**, the value of the UsedTime parameter ranges from **1** to **5**.
   * * If the **Period** parameter is set to **Month**, the value of the UsedTime parameter ranges from **1** to **11**.
   * 
   * > This parameter is required if the **PayType** parameter is set to **Prepaid**.
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

