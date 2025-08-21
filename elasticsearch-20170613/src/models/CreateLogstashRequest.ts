// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLogstashRequestNetworkConfig extends $dara.Model {
  /**
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-bp16k1dvzxtmagcva****
   */
  vpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-i
   */
  vsArea?: string;
  /**
   * @remarks
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
   * @example
   * 50
   */
  disk?: number;
  /**
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * logstash.n4.small
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
   * @example
   * 3
   */
  autoRenewDuration?: number;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * false
   */
  isAutoRenew?: boolean;
  /**
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
   * @example
   * ls-cn-abc
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  networkConfig?: CreateLogstashRequestNetworkConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  nodeAmount?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeSpec?: CreateLogstashRequestNodeSpec;
  paymentInfo?: CreateLogstashRequestPaymentInfo;
  /**
   * @example
   * prepaid
   */
  paymentType?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6.7_with_X-Pack
   */
  version?: string;
  /**
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

