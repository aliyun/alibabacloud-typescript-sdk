// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogstashResponseBodyResultTags extends $dara.Model {
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * The information about the zones.
   * 
   * @example
   * dev
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstashResponseBodyResultZoneInfos extends $dara.Model {
  /**
   * @remarks
   * The zone ID of the new instance.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The configuration of cluster extension parameters.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstashResponseBodyResultEndpointList extends $dara.Model {
  /**
   * @remarks
   * The tags added to the ALB instance.
   * 
   * @example
   * ``172.16.**.**``
   */
  host?: string;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 9600
   */
  port?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'host',
      port: 'port',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstashResponseBodyResultNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the vSwitch to which the instance is connected.
   * 
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * The zone where the cluster resides.
   * 
   * @example
   * vpc-bp16k1dvzxtmagcva****
   */
  vpcId?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values: Currently, only Virtual Private Cloud (VPC) are supported.
   * 
   * @example
   * cn-hangzhou-*
   */
  vsArea?: string;
  /**
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

export class DescribeLogstashResponseBodyResultNodeSpec extends $dara.Model {
  /**
   * @remarks
   * Whether to use disk encryption:
   * 
   * *   true
   * *   false
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The disk type of the node.
   * 
   * @example
   * true
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The network configurations.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The disk size of the node.
   * 
   * @example
   * elasticsearch.sn1ne.large
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: 'number',
      diskEncryption: 'boolean',
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

export class DescribeLogstashResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The configuration information of the node.
   */
  extendConfigs?: { [key: string]: any }[];
  /**
   * @remarks
   * The number of data nodes.
   * 
   * @example
   * rg-aekzvowej3i****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The key of the tag.
   */
  tags?: DescribeLogstashResponseBodyResultTags[];
  /**
   * @remarks
   * The status of the zone. Valid values:
   * 
   * *   ISOLATION: offline
   * *   NORMAL
   */
  zoneInfos?: DescribeLogstashResponseBodyResultZoneInfos[];
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   prepaid: subscription
   * *   postpaid: pay-as-you-go
   * 
   * @example
   * {"slowlog.threshold.warn": "2s","slowlog.threshold.info": "1s","slowlog.threshold.debug": "500ms","slowlog.threshold.trace": "100ms" }
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The state of the instance. Four states are supported:
   * 
   * *   Normal: active
   * *   Active: activating
   * *   Freeze: inactive
   * *   Invalid: invalid
   * 
   * @example
   * 2020-02-06T14:12:03.672Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * ls-cn-abc
   */
  description?: string;
  /**
   * @remarks
   * The ID of the zone where the node resides.
   */
  endpointList?: DescribeLogstashResponseBodyResultEndpointList[];
  /**
   * @remarks
   * The access information of the node.
   * 
   * @example
   * ls-cn-abc
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   */
  networkConfig?: DescribeLogstashResponseBodyResultNetworkConfig;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * 2
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The specifications of the node.
   */
  nodeSpec?: DescribeLogstashResponseBodyResultNodeSpec;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * prepaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the elastic container instances belong.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The edition of the dedicated KMS instance.
   * 
   * @example
   * 2020-02-06T14:22:36.850Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 7.4.0_with_X-Pack
   */
  version?: string;
  /**
   * @remarks
   * The time when the instance was last updated.
   * 
   * @example
   * vpc-bp16k1dvzxtmagcva****
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      extendConfigs: 'ExtendConfigs',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      zoneInfos: 'ZoneInfos',
      config: 'config',
      createdAt: 'createdAt',
      description: 'description',
      endpointList: 'endpointList',
      instanceId: 'instanceId',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      status: 'status',
      updatedAt: 'updatedAt',
      version: 'version',
      vpcInstanceId: 'vpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeLogstashResponseBodyResultTags },
      zoneInfos: { 'type': 'array', 'itemType': DescribeLogstashResponseBodyResultZoneInfos },
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createdAt: 'string',
      description: 'string',
      endpointList: { 'type': 'array', 'itemType': DescribeLogstashResponseBodyResultEndpointList },
      instanceId: 'string',
      networkConfig: DescribeLogstashResponseBodyResultNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: DescribeLogstashResponseBodyResultNodeSpec,
      paymentType: 'string',
      status: 'string',
      updatedAt: 'string',
      version: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extendConfigs)) {
      $dara.Model.validateArray(this.extendConfigs);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.zoneInfos)) {
      $dara.Model.validateArray(this.zoneInfos);
    }
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(Array.isArray(this.endpointList)) {
      $dara.Model.validateArray(this.endpointList);
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    if(this.nodeSpec && typeof (this.nodeSpec as any).validate === 'function') {
      (this.nodeSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstashResponseBody extends $dara.Model {
  /**
   * @remarks
   * Detailed information about the instance.
   * 
   * @example
   * C9334241-4837-46C2-B24B-9BDC517318DE
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of the instance.
   */
  result?: DescribeLogstashResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeLogstashResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

