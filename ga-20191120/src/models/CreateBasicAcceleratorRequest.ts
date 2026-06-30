// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBasicAcceleratorRequestTag extends $dara.Model {
  /**
   * @remarks
   * The label key of the basic Alibaba Cloud Global Accelerator (GA) instance. If you specify this parameter, the value cannot be an empty string.
   * 
   * The label key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 label keys.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The label value of the basic Alibaba Cloud Global Accelerator (GA) instance. If you specify this parameter, the value cannot be an empty string.
   * 
   * The label value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 label values.
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

export class CreateBasicAcceleratorRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **false** (default): disables automatic payment. After an order is generated, go to the Order Center to complete the payment.
   * 
   * - **true**: enables automatic payment. The order is automatically paid.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * - **true**: enables auto-renewal.
   * 
   * - **false** (default): disables auto-renewal.
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
   * > This parameter takes effect only when **AutoRenew** is set to **true**.
   * 
   * @example
   * 1
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * Specifies whether to use coupons for automatic payment of the bill. Valid values:
   * 
   * - **true**: uses coupons.
   * 
   * - **false** (default): does not use coupons.
   * 
   * > This parameter takes effect only when **AutoPay** is set to **true**.
   * 
   * @example
   * false
   */
  autoUseCoupon?: string;
  /**
   * @remarks
   * The bandwidth billing method. Valid values:
   * - **BandwidthPackage**: billed by bandwidth plan.
   * - **CDT**: billed by traffic and settled through unified settlement by Cloud Data Transfer (CDT).
   * - **CDT95**: billed by the 95th percentile bandwidth and settled through unified settlement by CDT. This bandwidth billing method is available only to users in the whitelist.
   * 
   * @example
   * CDT
   */
  bandwidthBillingType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * - **PREPAY (default)**: subscription.
   * - **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run without creating the resource. The system checks the required parameters, request syntax, and business limitations. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the check succeeds, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The subscription duration.
   * 
   * - If **PricingCycle** is set to **Month**, valid values of **Duration** are **1** to **9**.
   * 
   * - If **PricingCycle** is set to **Year**, valid values of **Duration** are **1** to **3**.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The billing cycle. Valid values:
   * 
   * - **Month**: billed on a monthly basis.
   * 
   * - **Year**: billed on a yearly basis.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The coupon number.
   * > This parameter is applicable only to the China site (aliyun.com).
   * 
   * @example
   * 50003298014****
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * The region ID of the basic Alibaba Cloud Global Accelerator (GA) instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the basic Alibaba Cloud Global Accelerator (GA) instance belongs.
   * 
   * @example
   * rg-acfmxshhcsn****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The labels of the basic Alibaba Cloud Global Accelerator (GA) instance.
   */
  tag?: CreateBasicAcceleratorRequestTag[];
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoUseCoupon: 'AutoUseCoupon',
      bandwidthBillingType: 'BandwidthBillingType',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      duration: 'Duration',
      pricingCycle: 'PricingCycle',
      promotionOptionNo: 'PromotionOptionNo',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoUseCoupon: 'string',
      bandwidthBillingType: 'string',
      chargeType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      duration: 'number',
      pricingCycle: 'string',
      promotionOptionNo: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateBasicAcceleratorRequestTag },
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

