// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequestAclInfo extends $dara.Model {
  /**
   * @remarks
   * The authentication type of the instance.
   */
  aclTypes?: string[];
  /**
   * @remarks
   * Indicates whether password-free access is enabled for VPC connections under the intelligent identity recognition type.
   * 
   * @example
   * false
   */
  defaultVpcAuthFree?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclTypes: 'aclTypes',
      defaultVpcAuthFree: 'defaultVpcAuthFree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclTypes: { 'type': 'array', 'itemType': 'string' },
      defaultVpcAuthFree: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.aclTypes)) {
      $dara.Model.validateArray(this.aclTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestNetworkInfoInternetInfo extends $dara.Model {
  /**
   * @remarks
   * The public network access IP whitelist.
   * 
   * - If no IP whitelist is configured, all IP address ranges are allowed to access the ApsaraMQ for RocketMQ server over the public network by default.
   * - If an IP whitelist is configured, only the IP addresses in the whitelist are allowed to access the ApsaraMQ for RocketMQ server over the public network.
   */
  ipWhitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      ipWhitelist: 'ipWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipWhitelist)) {
      $dara.Model.validateArray(this.ipWhitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestNetworkInfo extends $dara.Model {
  /**
   * @remarks
   * The public network information. This parameter is valid only when the public network access feature is enabled for the instance.
   */
  internetInfo?: UpdateInstanceRequestNetworkInfoInternetInfo;
  static names(): { [key: string]: string } {
    return {
      internetInfo: 'internetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetInfo: UpdateInstanceRequestNetworkInfoInternetInfo,
    };
  }

  validate() {
    if(this.internetInfo && typeof (this.internetInfo as any).validate === 'function') {
      (this.internetInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestProductInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the adaptive elasticity capability. A value of true indicates enabled, and a value of false indicates shutdown.
   */
  adaptiveElasticity?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the burstable elastic capacity beyond the specification.
   * 
   * After the burstable elastic capacity is enabled, ApsaraMQ for RocketMQ allows the instance to exceed the TPS limit of the base specification within a certain range. The portion that exceeds the base specification incurs additional elastic specification fees. For more information about billing, see [Computing fee](https://help.aliyun.com/document_detail/427237.html).
   * 
   * 
   * > Only instances of specific specifications support the burstable elastic specification capability. For more information about supported instances, see [Instance specifications](https://help.aliyun.com/document_detail/444715.html).
   * 
   * @example
   * true
   */
  autoScaling?: boolean;
  /**
   * @remarks
   * The message retention period. Unit: hours.
   * 
   * For the valid values, see [Limits](https://help.aliyun.com/document_detail/440347.html) > Resource Quotas > Message retention period limit.
   * 
   * The log broker in ApsaraMQ for RocketMQ is fully serverless and elastic. Fees are charged based on the actual storage space used. You can control the storage capacity of messages by adjusting the message retention period. For more information, see [Storage fee](https://help.aliyun.com/document_detail/427238.html).
   * 
   * @example
   * 72
   */
  messageRetentionTime?: number;
  /**
   * @remarks
   * The ratio of messages sent to messages accepted.
   * 
   * Valid values: [0.25, 1]
   * 
   * @example
   * 0.5
   */
  sendReceiveRatio?: number;
  /**
   * @remarks
   * Specifies whether to enable the message trace feature.
   * 
   * <props="intl">This parameter does not take effect. Regardless of whether this parameter is enabled, the instance supports the message trace feature by default.
   * <props="china">This parameter takes effect only for Serverless instances. If the message trace feature is enabled, message trace fees are incurred. For more information about billing, see [Serverless billing](https://help.aliyun.com/document_detail/2586280.html).
   * <props="china">For pay-as-you-go and subscription instances, this parameter does not take effect. The message trace feature is supported by default regardless of whether this parameter is enabled.
   * 
   * @example
   * true
   */
  traceOn?: boolean;
  static names(): { [key: string]: string } {
    return {
      adaptiveElasticity: 'adaptiveElasticity',
      autoScaling: 'autoScaling',
      messageRetentionTime: 'messageRetentionTime',
      sendReceiveRatio: 'sendReceiveRatio',
      traceOn: 'traceOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptiveElasticity: 'boolean',
      autoScaling: 'boolean',
      messageRetentionTime: 'number',
      sendReceiveRatio: 'number',
      traceOn: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The access control information.
   */
  aclInfo?: UpdateInstanceRequestAclInfo;
  /**
   * @remarks
   * The updated instance name.
   * 
   * @example
   * test_instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The updated network information of the instance.
   */
  networkInfo?: UpdateInstanceRequestNetworkInfo;
  /**
   * @remarks
   * The extension configurations of the instance.
   */
  productInfo?: UpdateInstanceRequestProductInfo;
  /**
   * @remarks
   * The updated remarks for the instance.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      aclInfo: 'aclInfo',
      instanceName: 'instanceName',
      networkInfo: 'networkInfo',
      productInfo: 'productInfo',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclInfo: UpdateInstanceRequestAclInfo,
      instanceName: 'string',
      networkInfo: UpdateInstanceRequestNetworkInfo,
      productInfo: UpdateInstanceRequestProductInfo,
      remark: 'string',
    };
  }

  validate() {
    if(this.aclInfo && typeof (this.aclInfo as any).validate === 'function') {
      (this.aclInfo as any).validate();
    }
    if(this.networkInfo && typeof (this.networkInfo as any).validate === 'function') {
      (this.networkInfo as any).validate();
    }
    if(this.productInfo && typeof (this.productInfo as any).validate === 'function') {
      (this.productInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

