// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewRCInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true**: Automatic payment is enabled. Make sure that your account balance is sufficient.
   * - **false**: Only an order is generated. No payment is made.
   * 
   * 
   * 
   * 
   * > Default value: true. If your payment method has insufficient balance, set AutoPay to false. In this case, an unpaid order is generated. You can log on to the ApsaraDB RDS console to pay for the order.
   * >
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * * **true**: Auto-renewal is enabled.
   * * **false** (default): Auto-renewal is disabled.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * Specifies whether to use coupons. Valid values:
   * * **true** (default): Coupons are used.
   * * **false**: Coupons are not used.
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
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOC****
   */
  clientToken?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * <props="china">Default value: **rds_customprepaid_public_cn**.
   * 
   * 
   * 
   * <props="intl">Default value: **rds_customprepaid_public_intl**.
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
   * The billing method of the target instance. Only **Prepaid** (upfront, subscription) is supported.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * Specifies whether to use annual subscription. Valid values:
   * 
   * - **true**: Annual subscription is used.
   * - **false** (default): Annual subscription is not used.
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
   * The resource.
   * 
   * @example
   * buy
   */
  resource?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The unit of the renewal duration specified by the **UsedTime** parameter. Valid values:
   * 
   * - **1**: year
   * - **2** (default): month
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  timeType?: string;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * * If **TimeType** is set to **1** (year), the valid values of UsedTime are **1 to 5**.
   * * If **TimeType** is set to **2** (month), the valid values of UsedTime are **1 to 11**.
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

