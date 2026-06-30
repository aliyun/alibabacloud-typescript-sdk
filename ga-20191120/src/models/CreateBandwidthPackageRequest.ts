// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBandwidthPackageRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the bandwidth plan. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the bandwidth plan. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag values.
   * 
   * @example
   * tag-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBandwidthPackageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **false** (default): Disables automatic payment. After an order is generated, go to the Order Hub to complete the payment.
   * 
   * - **true**: Enables automatic payment. Payments are automatically completed.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false** (default): No.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. Unit: months.
   * 
   * Valid values: **1** to **12**. Default value: **1**.
   * 
   * > This parameter takes effect only if **AutoRenew** is set to **true**.
   * 
   * @example
   * 1
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * Specifies whether to use a coupon to automatically pay for the bill. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false** (default): No.
   * 
   * > This parameter takes effect only if **AutoPay** is set to **true**.
   * 
   * @example
   * false
   */
  autoUseCoupon?: string;
  /**
   * @remarks
   * The bandwidth of the bandwidth plan. Unit: Mbps.
   * Valid values: **2** to **2000**.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The type of bandwidth. Valid values:
   * 
   * - **Basic**: Basic bandwidth.
   * 
   * - **Enhanced**: Enhanced bandwidth.
   * 
   * - **Advanced**: Advanced bandwidth.
   * 
   * This parameter is required if you set **Type** to **Basic**.
   * 
   * @example
   * Basic
   */
  bandwidthType?: string;
  /**
   * @remarks
   * The billing method for a pay-as-you-go bandwidth plan. Valid values:
   * 
   * - **PayByTraffic** (default): pay-by-traffic.
   * 
   * - **PayBY95**: pay-by-95th-percentile. This billing method is not available by default. Contact your account manager to use this billing method.
   * 
   * > This parameter takes effect only if **ChargeType** is set to **POSTPAY**.
   * 
   * @example
   * PayByTraffic
   */
  billingType?: string;
  /**
   * @remarks
   * Connected area A of the cross-region acceleration bandwidth plan. Set the value to **China-mainland**.
   * 
   * This parameter is available only on the Alibaba Cloud International Website (www\\.alibabacloud.com).
   * 
   * @example
   * China-mainland
   */
  cbnGeographicRegionIdA?: string;
  /**
   * @remarks
   * Connected area B of the cross-region acceleration bandwidth plan. Set the value to **Global**.
   * 
   * This parameter is available only on the Alibaba Cloud International Website (www\\.alibabacloud.com).
   * 
   * @example
   * Global
   */
  cbnGeographicRegionIdB?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **PREPAY** (default): subscription.
   * 
   * - **POSTPAY**: pay-as-you-go. The pay-as-you-go billing method is not available by default. Contact your account manager to use this billing method.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a client token from your client to make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.
   * 
   * @example
   * 123e4567****
   */
  clientToken?: string;
  /**
   * @remarks
   * The subscription duration.
   * 
   * - If you set **PricingCycle** to **Month**, valid values for **Duration** are **1** to **9**.
   * 
   * - If you set **PricingCycle** to **Year**, valid values for **Duration** are **1** to **3**.
   * 
   * This parameter is required if you set **ChargeType** to **PREPAY**.
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * The billing cycle. Valid values:
   * 
   * - **Month**: monthly billing.
   * 
   * - **Year**: yearly billing.
   * 
   * This parameter is required if you set **ChargeType** to **PREPAY**.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * > This parameter is available only on the Alibaba Cloud International Website (www\\.alibabacloud.com).
   * 
   * @example
   * 50003298014****
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * The percentage of the guaranteed minimum bandwidth if you use the pay-by-95th-percentile metering method. Valid values: **30** to **100**.
   * 
   * > This parameter takes effect only if **BillingType** is set to **PayBY95**.
   * 
   * @example
   * 30
   */
  ratio?: number;
  /**
   * @remarks
   * The region ID of the GA instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzrnd67gq****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the bandwidth plan.
   */
  tag?: CreateBandwidthPackageRequestTag[];
  /**
   * @remarks
   * The type of the bandwidth plan. Valid values:
   * 
   * - **Basic**: a basic bandwidth plan.
   * 
   * - **CrossDomain**: a cross-region acceleration bandwidth plan.
   * 
   * Only **Basic** is supported on the Alibaba Cloud China Website (www\\.aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * Basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoUseCoupon: 'AutoUseCoupon',
      bandwidth: 'Bandwidth',
      bandwidthType: 'BandwidthType',
      billingType: 'BillingType',
      cbnGeographicRegionIdA: 'CbnGeographicRegionIdA',
      cbnGeographicRegionIdB: 'CbnGeographicRegionIdB',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      duration: 'Duration',
      pricingCycle: 'PricingCycle',
      promotionOptionNo: 'PromotionOptionNo',
      ratio: 'Ratio',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoUseCoupon: 'string',
      bandwidth: 'number',
      bandwidthType: 'string',
      billingType: 'string',
      cbnGeographicRegionIdA: 'string',
      cbnGeographicRegionIdB: 'string',
      chargeType: 'string',
      clientToken: 'string',
      duration: 'string',
      pricingCycle: 'string',
      promotionOptionNo: 'string',
      ratio: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateBandwidthPackageRequestTag },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

