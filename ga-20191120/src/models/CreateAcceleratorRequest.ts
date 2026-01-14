// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAcceleratorRequestIpSetConfig extends $dara.Model {
  /**
   * @remarks
   * The access mode of the acceleration area. Valid values:
   * 
   * *   **UserDefine:** custom nearby access mode. You can select acceleration areas and regions based on your business requirements. GA allocates a separate EIP to each acceleration region.
   * *   **Anycast:** automatic nearby access mode. You do not need to specify an acceleration area. GA allocates an Anycast EIP to multiple regions across the globe. Users can connect to the nearest access point of the Alibaba Cloud global transmission network by sending requests to the Anycast EIP.
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
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * You can specify up to 20 tag keys.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the GA instance. The tag value cannot be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
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
   * Specifies whether to enable automatic payment. Default value: false. Valid values:
   * 
   * *   **false:** disables automatic payment. If you select this option, you must go to the Order Center to complete the payment after an order is generated.
   * *   **true:** enables automatic payment. Payments are automatically completed.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the GA instance. Default value: false. Valid values:
   * 
   * *   **true:** enables auto-renewal.
   * *   **false:** disables auto-renewal.
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
   * >  This parameter takes effect only when **AutoRenew** is set to **true**.
   * 
   * @example
   * 1
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * Specifies whether to automatically use coupons when making payments. Default value: false. Valid values:
   * 
   * *   **true:** automatically pays bill by using coupons.
   * *   **false:** does not automatically pay bills by using coupons.
   * 
   * >  This parameter takes effect only when **AutoPay** is set to **true**.
   * 
   * @example
   * false
   */
  autoUseCoupon?: string;
  bandwidth?: number;
  /**
   * @remarks
   * The bandwidth billing method.
   * 
   * *   **BandwidthPackage:** billed based on bandwidth plans.
   * *   **CDT:** billed based on data transfer.
   * *   **CDT95:** billed based on the 95th percentile bandwidth. The billing is managed by Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information.
   * 
   * @example
   * BandwidthPackage
   */
  bandwidthBillingType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true:** performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The subscription duration of the GA instance.
   * 
   * *   If the **PricingCycle** parameter is set to **Month**, the valid values for the **Duration** parameter are **1** to **9**.
   * *   If the **PricingCycle** parameter is set to **Year**, the valid values for the **Duration** parameter are **1** to **3**.
   * 
   * >  If the **InstanceChargeType** parameter is set to **PREPAY**, you must configure this parameter.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The billing method of the GA instance.
   * 
   * *   PREPAY (default): subscription
   * *   POSTPAY: pay-as-you-go
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
   * The name must be 2 to 128 characters in length and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The billing cycle of the GA instance. Valid values:
   * 
   * *   **Month:** billed on a monthly basis.
   * *   **Year:** billed on an annual basis.
   * 
   * >  If the **InstanceChargeType** parameter is set to **PREPAY**, you must configure this parameter.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 50003298014****
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * The ID of the region in which to create the GA instance. Set the value to **cn-hangzhou**.
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
   * The type of the GA instance. Valid values:
   * 
   * *   **1**: Small Ⅰ.
   * *   **2**: Small Ⅱ.
   * *   **3**: Small Ⅲ.
   * *   **5**: Medium Ⅰ.
   * *   **8**: Medium Ⅱ.
   * *   **10**: Medium Ⅲ.
   * *   **20**: Large Ⅰ.
   * *   **30**: Large Ⅱ.
   * *   **40**: Large Ⅲ.
   * *   **50**: Large IV.
   * *   **60**: Large V.
   * *   **70**: Large VI.
   * *   **80**: Large VII.
   * *   **90**: Large VIII.
   * *   **100**: Super Large Ⅰ.
   * *   **200**: Super Large Ⅱ.
   * 
   * > *   GA instances Large III and above are not available by default. To use these instances, contact your Alibaba Cloud account manager.
   * >*   If the **InstanceChargeType** parameter is set to **PREPAY**, you must configure this parameter.
   * 
   * Different specifications provide different capabilities. For more information, see [Instance type](https://help.aliyun.com/document_detail/153127.html).
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

