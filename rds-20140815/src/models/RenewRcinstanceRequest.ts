// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewRCInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true**: enables the feature. You must make sure that your account balance is sufficient.
   * *   **false**: disables the feature. An unpaid order is generated.
   * 
   * >  Default value: true. If your account balance is insufficient, you can set AutoPay to false to generate an unpaid order. Then, you can log on to the ApsaraDB RDS console to complete the payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Default value: false. Valid values:
   * 
   * *   **true**: uses a coupon.
   * *   **false**: does not use a coupon.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The additional information about the order.
   * 
   * @example
   * {\\"promotion_input_param\\":\\"{\\\\\\"promotionFilter\\\\\\":{},\\\\\\"promotionOptionCode\\\\\\":\\\\\\"youhui_quan\\\\\\"}\\"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOC****
   */
  clientToken?: string;
  /**
   * @remarks
   * The commodity code of the instance.
   * 
   * Default value: **rds_customprepaid_public_intl**.
   * 
   * This parameter is required.
   * 
   * @example
   * rds_customprepaid_public_**
   */
  commodityCode?: string;
  /**
   * @remarks
   * The ID of the RDS Custom instance.
   * 
   * @example
   * rc-dh2jf9n6j4s14926****
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the instance. Set the value to **PrePaid**, which indicates the subscription billing method.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * Specifies whether the instance is a subscription instance. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  periodAlign?: boolean;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 72329885****
   */
  promotionCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resources.
   * 
   * @example
   * buy
   */
  resource?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The unit of the renewal period specified by the **UsedTime** parameter. Valid values:
   * 
   * *   **1**: year
   * *   **2** (default): month
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  timeType?: string;
  /**
   * @remarks
   * The subscription duration of the instance. Valid values:
   * 
   * *   If you set the **TimeType** parameter to **1**, the value of the UsedTime parameter ranges from **1 to 5**. Unit: year.
   * *   If you set the **TimeType** parameter to **2**, the value of the UsedTime parameter ranges from **1 to 11**. Unit: month.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      commodityCode: 'CommodityCode',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      payType: 'PayType',
      periodAlign: 'PeriodAlign',
      promotionCode: 'PromotionCode',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      timeType: 'TimeType',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'string',
      autoUseCoupon: 'boolean',
      businessInfo: 'string',
      clientToken: 'string',
      commodityCode: 'string',
      instanceId: 'string',
      ownerId: 'number',
      payType: 'string',
      periodAlign: 'boolean',
      promotionCode: 'string',
      regionId: 'string',
      resource: 'string',
      resourceOwnerAccount: 'string',
      timeType: 'string',
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

