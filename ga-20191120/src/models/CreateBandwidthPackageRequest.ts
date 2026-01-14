// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBandwidthPackageRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * The tag keys cannot be an empty string. The tag key can be up to 64 characters in length, and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * You can specify at most 20 tag keys.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * Each tag key corresponds to a tag value. Valid values of **N**: **1** to **20**.
   * 
   * The value cannot exceed 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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
   * *   **false** (default): disables automatic payment. If you select this option, you must go to the Order Center to complete the payment after an order is generated.
   * *   **true**: enables automatic payment. Payments are automatically completed.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the bandwidth plan. Valid values:
   * 
   * *   **true**: enables auto-renewal.
   * *   **false** (default): does not enable auto-renewal.
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
   * >  This parameter is required only if **AutoRenew** is set to **true**.
   * 
   * @example
   * 1
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * Specifies whether to automatically pay bills by using coupons. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * >  This parameter is required only if **AutoPay** is set to **true**.
   * 
   * @example
   * false
   */
  autoUseCoupon?: string;
  /**
   * @remarks
   * The bandwidth of the bandwidth plan. Unit: Mbit/s.
   * 
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
   * The type of the bandwidth. Valid values:
   * 
   * *   **Basic**: standard bandwidth
   * *   **Enhanced**: enhanced bandwidth
   * *   **Advanced**: premium bandwidth
   * 
   * If **Type** is set to **Basic**, this parameter is required.
   * 
   * @example
   * Basic
   */
  bandwidthType?: string;
  /**
   * @remarks
   * The metering method that is used when you use the pay-as-you-go billing method. Valid values:
   * 
   * *   **PayByTraffic** (default)
   * *   **PayBY95** By default, the pay-by-95th-percentile metering method is unavailable. If you want to use the metering method, contact your account manager.
   * 
   * >  This parameter takes effect only if you set **ChargeType** to **POSTPAY**.
   * 
   * @example
   * PayByTraffic
   */
  billingType?: string;
  /**
   * @remarks
   * Area A to be connected. Set the value to **China-mainland**.
   * 
   * You can set this parameter only if you call this operation on the international site (alibabacloud.com).
   * 
   * @example
   * China-mainland
   */
  cbnGeographicRegionIdA?: string;
  /**
   * @remarks
   * Area B to be connected. Set the value to **Global**.
   * 
   * You can set this parameter only if you call this operation on the international site (alibabacloud.com).
   * 
   * @example
   * Global
   */
  cbnGeographicRegionIdB?: string;
  /**
   * @remarks
   * The billing method of the bandwidth plan. Valid values:
   * 
   * *   **PREPAY** (default): subscription.
   * *   **POSTPAY**: pay-as-you-go. By default, the pay-as-you-go billing method is unavailable. If you want to use the billing method, contact your account manager.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567****
   */
  clientToken?: string;
  /**
   * @remarks
   * The subscription duration.
   * 
   * *   If the **PricingCycle** parameter is set to **Month**, the valid values for the **Duration** parameter are **1** to **9**.
   * *   If the **PricingCycle** parameter is set to **Year**, the valid values for the **Duration** parameter are **1** to **3**.
   * 
   * If **ChargeType** is set to **PREPAY**, this parameter is required.
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * The billing cycle. Valid values:
   * 
   * *   **Month**: billed on a monthly basis.
   * *   **Year**: billed on an annual basis.
   * 
   * If **ChargeType** is set to **PREPAY**, this parameter is required.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * >  This parameter is only available on the international site (alibabacloud.com).
   * 
   * @example
   * 50003298014****
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * The percentage of the minimum bandwidth guaranteed if the pay-by-95th-percentile-bandwidth metering method is used. Valid values: **30** to **100**.
   * 
   * >  This parameter is required only if **BillingType** is set to **PayBY95**.
   * 
   * @example
   * 30
   */
  ratio?: number;
  /**
   * @remarks
   * The ID of the region where the GA instance is deployed. **cn-hangzhou** is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzrnd67gq****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags to add to the bandwidth plan.
   */
  tag?: CreateBandwidthPackageRequestTag[];
  /**
   * @remarks
   * The type of the bandwidth plan. Valid values:
   * 
   * *   **Basic**: a basic bandwidth plan
   * *   **CrossDomain**: a cross-region acceleration bandwidth plan
   * 
   * If you call this operation on the Alibaba Cloud China site, only **Basic** is supported.
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

