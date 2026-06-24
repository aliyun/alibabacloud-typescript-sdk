// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLogstashRequestNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The network type. Currently, only VPC is supported.
   * 
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp16k1dvzxtmagcva****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone where the instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-i
   */
  vsArea?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1k4ec6s7sjdbudw****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      vpcId: 'string',
      vsArea: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogstashRequestNodeSpec extends $dara.Model {
  /**
   * @remarks
   * The disk size of the node. Unit: GB.
   * 
   * @example
   * 50
   */
  disk?: number;
  /**
   * @remarks
   * The disk type of the node. Valid values:
   * 
   * - cloud_ssd
   * - cloud_efficiency.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The node specifications. For more information about specifications, see [Product specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * This parameter is required.
   * 
   * @example
   * elasticsearch.ic5.2xlarge
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogstashRequestPaymentInfo extends $dara.Model {
  /**
   * @remarks
   * The auto-renewal epoch. Unit: months. This parameter is required when **isAutoRenew** is set to **true**. The valid values are the same as those on the buy page.
   * 
   * @example
   * 3
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * The subscription duration. You can purchase the instance on a monthly or yearly basis. Unit: 1 to 9 months, or 1 to 3 years.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * false
   */
  isAutoRenew?: boolean;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * - Year: year.
   * - Month: month.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewDuration: 'autoRenewDuration',
      duration: 'duration',
      isAutoRenew: 'isAutoRenew',
      pricingCycle: 'pricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewDuration: 'number',
      duration: 'number',
      isAutoRenew: 'boolean',
      pricingCycle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogstashRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ls-cn-abc
   */
  description?: string;
  /**
   * @remarks
   * The network configuration.
   * 
   * This parameter is required.
   */
  networkConfig?: CreateLogstashRequestNetworkConfig;
  /**
   * @remarks
   * The number of nodes in the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The configuration of data nodes.
   * 
   * This parameter is required.
   */
  nodeSpec?: CreateLogstashRequestNodeSpec;
  /**
   * @remarks
   * The billing details of the subscription instance. This parameter is required when you create a subscription instance.
   */
  paymentInfo?: CreateLogstashRequestPaymentInfo;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - prepaid: subscription.
   * - postpaid: pay-as-you-go.
   * 
   * @example
   * prepaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmxxkk2p7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance version. Valid values:
   * 
   * - 6.7_with_X-Pack
   * - 7.4_with_X-Pack.
   * 
   * This parameter is required.
   * 
   * @example
   * 6.7_with_X-Pack
   */
  version?: string;
  /**
   * @remarks
   * A unique token that is used to ensure the idempotence of the request. The client generates this value. The value must be unique among different requests and cannot exceed 64 ASCII characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentInfo: 'paymentInfo',
      paymentType: 'paymentType',
      resourceGroupId: 'resourceGroupId',
      version: 'version',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      networkConfig: CreateLogstashRequestNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: CreateLogstashRequestNodeSpec,
      paymentInfo: CreateLogstashRequestPaymentInfo,
      paymentType: 'string',
      resourceGroupId: 'string',
      version: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    if(this.nodeSpec && typeof (this.nodeSpec as any).validate === 'function') {
      (this.nodeSpec as any).validate();
    }
    if(this.paymentInfo && typeof (this.paymentInfo as any).validate === 'function') {
      (this.paymentInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

