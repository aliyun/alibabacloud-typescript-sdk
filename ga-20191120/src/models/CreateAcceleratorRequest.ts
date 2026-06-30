// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAcceleratorRequestIpSetConfig extends $dara.Model {
  /**
   * @remarks
   * The access mode of the acceleration area. Valid values:
   * 
   * - **UserDefine**: Custom nearby access mode. Select acceleration areas and regions as needed. Global Accelerator provides a separate elastic IP address (EIP) for each acceleration region.
   * 
   * - **Anycast**: Automatic nearby access mode. You do not need to configure an acceleration area. Global Accelerator provides an Anycast EIP for multiple regions. Users connect to the nearest access point of the Alibaba Cloud network using the Anycast EIP.
   * 
   * @example
   * UserDefine
   */
  accessMode?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAcceleratorRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the GA instance. The tag key cannot be an empty string.
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
   * The tag value of the GA instance. The tag value can be an empty string.
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

export class CreateAcceleratorRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **false** (default): Disables automatic payment. After an order is generated, go to the Order Hub to complete the payment.
   * 
   * - **true**: Enables automatic payment. The system automatically completes the payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
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
   * The auto-renewal duration. Unit: month.
   * 
   * Valid values: **1** to **12**. Default value: **1**.
   * 
   * > This parameter is valid only when **AutoRenew** is set to **true**.
   * 
   * @example
   * 1
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * Specifies whether to automatically apply coupons to your bills. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false** (default): No.
   * 
   * > This parameter is valid only when **AutoPay** is set to **true**.
   * 
   * @example
   * false
   */
  autoUseCoupon?: string;
  /**
   * @remarks
   * The bandwidth of the standard GA instance. Unit: **Mbps**.
   * 
   * Valid values: 200 to 5000.
   * 
   * > This parameter is required and valid only when the access mode of the acceleration area is Anycast.
   * 
   * @example
   * 200
   */
  bandwidth?: number;
  /**
   * @remarks
   * The bandwidth billing method.
   * 
   * - **BandwidthPackage**: Billed by bandwidth plan.
   * 
   * - **CDT**: Billed by data transfer.
   * 
   * @example
   * BandwidthPackage
   */
  bandwidthBillingType?: string;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client to make sure that the value is unique among different requests. The ClientToken parameter can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.
   * 
   * @example
   * 123e4567****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): Sends a normal request. If the request passes the check, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The subscription duration.
   * 
   * - If **PricingCycle** is set to **Month**, the valid values for **Duration** are **1** to **9**.
   * 
   * - If **PricingCycle** is set to **Year**, the valid values for **Duration** are **1** to **3**.
   * 
   * > This parameter is required if **InstanceChargeType** (the billing method of the GA instance) is set to **PREPAY** (subscription).
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The billing method of the GA instance.
   * 
   * - PREPAY (default): subscription.
   * 
   * - POSTPAY: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The configurations of the acceleration area.
   */
  ipSetConfig?: CreateAcceleratorRequestIpSetConfig;
  /**
   * @remarks
   * The name of the GA instance.
   * 
   * The name must be 1 to 128 characters in length, start with a letter, and can contain digits, underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The billing cycle. Valid values:
   * 
   * - **Month**: Billed by month.
   * 
   * - **Year**: Billed by year.
   * 
   * > This parameter is required if **InstanceChargeType** (the billing method of the GA instance) is set to **PREPAY** (subscription).
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
   * The region ID of the GA instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   * 
   * @deprecated
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the standard GA instance belongs.
   * 
   * @example
   * rg-aekzrnd67gq****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance type of the GA instance. Valid values:
   * 
   * - **1**: Small I
   * 
   * - **2**: Small II
   * 
   * - **3**: Small III
   * 
   * - **5**: Medium I
   * 
   * - **8**: Medium II
   * 
   * - **10**: Medium III
   * 
   * - **20**: Large I
   * 
   * - **30**: Large II
   * 
   * - **40**: Large III
   * 
   * - **50**: Large IV
   * 
   * - **60**: Large V
   * 
   * - **70**: Large VI
   * 
   * - **80**: Large VII
   * 
   * - **90**: Large VIII
   * 
   * - **100**: Super Large I
   * 
   * - **200**: Super Large II
   * 
   * > * Currently, the Large III and higher instance types are available only to users on the whitelist. To use these instance types, contact your account manager.
   * >
   * > * This parameter is required if **InstanceChargeType** (the billing method of the GA instance) is set to **PREPAY** (subscription).
   * 
   * The definitions of different instance types are different. For more information, see [Instance types](https://help.aliyun.com/document_detail/153127.html).
   * 
   * @example
   * 1
   */
  spec?: string;
  /**
   * @remarks
   * The tags of the GA instance.
   */
  tag?: CreateAcceleratorRequestTag[];
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoUseCoupon: 'AutoUseCoupon',
      bandwidth: 'Bandwidth',
      bandwidthBillingType: 'BandwidthBillingType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      duration: 'Duration',
      instanceChargeType: 'InstanceChargeType',
      ipSetConfig: 'IpSetConfig',
      name: 'Name',
      pricingCycle: 'PricingCycle',
      promotionOptionNo: 'PromotionOptionNo',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoUseCoupon: 'string',
      bandwidth: 'number',
      bandwidthBillingType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      duration: 'number',
      instanceChargeType: 'string',
      ipSetConfig: CreateAcceleratorRequestIpSetConfig,
      name: 'string',
      pricingCycle: 'string',
      promotionOptionNo: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      tag: { 'type': 'array', 'itemType': CreateAcceleratorRequestTag },
    };
  }

  validate() {
    if(this.ipSetConfig && typeof (this.ipSetConfig as any).validate === 'function') {
      (this.ipSetConfig as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

