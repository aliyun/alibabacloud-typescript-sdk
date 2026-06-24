// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogstashEndpointList extends $dara.Model {
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 172.16.xx.xx
   */
  host?: string;
  /**
   * @remarks
   * The access port number of the node.
   * 
   * @example
   * 9200
   */
  port?: number;
  /**
   * @remarks
   * The zone ID of the node.
   * 
   * @example
   * cn-hangzhou-i
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
      port: 'number',
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

export class LogstashNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The network type. Currently, only Virtual Private Cloud (VPC) is supported.
   * 
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-abc
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone in which the instance resides.
   * 
   * @example
   * cn-hangzhou-*
   */
  vsArea?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-def
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

export class LogstashNodeSpec extends $dara.Model {
  /**
   * @remarks
   * The disk size of the node.
   * 
   * @example
   * 50
   */
  disk?: number;
  /**
   * @remarks
   * The disk type of the node.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The node specifications.
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

export class LogstashTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
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

export class LogstashZoneInfos extends $dara.Model {
  /**
   * @remarks
   * The zone status. Valid values:
   * 
   * - ISOLATION: offline
   * - NORMAL: Normal.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
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

export class Logstash extends $dara.Model {
  /**
   * @remarks
   * The instance configuration.
   */
  config?: { [key: string]: string };
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2018-07-13T03:58:07.253Z
   */
  createdAt?: string;
  /**
   * @remarks
   * Specifies whether to enable data nodes. This parameter must be set to true.
   * 
   * @example
   * true
   */
  dataNode?: boolean;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * ls-cn-abc
   */
  description?: string;
  /**
   * @remarks
   * The expiration time of the subscription instance.
   * 
   * @example
   * 4749897600000
   */
  endTime?: number;
  /**
   * @remarks
   * The node information.
   */
  endpointList?: LogstashEndpointList[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ls-cn-n6w1o5jq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network configuration.
   */
  networkConfig?: LogstashNetworkConfig;
  /**
   * @remarks
   * The number of nodes in the instance.
   * 
   * @example
   * 2
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The data node configuration.
   */
  nodeSpec?: LogstashNodeSpec;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - prepaid: subscription
   * - postpaid: pay-as-you-go.
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The access protocol of the instance.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfm2h5vbzd****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The zone status. Valid values:
   * 
   * - ISOLATION: offline
   * - NORMAL: Normal.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The instance tags.
   */
  tags?: LogstashTags[];
  /**
   * @remarks
   * The time when the instance was last updated.
   * 
   * @example
   * 2018-07-18T10:10:04.484Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The instance version. Valid values:
   * 
   * - 6.7.0_with_X-Pack
   * - 7.4.0_with_X-Pack.
   * 
   * @example
   * 6.7.0_with_X-Pack
   */
  version?: string;
  /**
   * @remarks
   * The number of zones for the instance.
   * 
   * @example
   * 1
   */
  zoneCount?: number;
  /**
   * @remarks
   * The zone information.
   */
  zoneInfos?: LogstashZoneInfos[];
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      createdAt: 'createdAt',
      dataNode: 'dataNode',
      description: 'description',
      endTime: 'endTime',
      endpointList: 'endpointList',
      instanceId: 'instanceId',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      protocol: 'protocol',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      tags: 'tags',
      updatedAt: 'updatedAt',
      version: 'version',
      zoneCount: 'zoneCount',
      zoneInfos: 'zoneInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createdAt: 'string',
      dataNode: 'boolean',
      description: 'string',
      endTime: 'number',
      endpointList: { 'type': 'array', 'itemType': LogstashEndpointList },
      instanceId: 'string',
      networkConfig: LogstashNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: LogstashNodeSpec,
      paymentType: 'string',
      protocol: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': LogstashTags },
      updatedAt: 'string',
      version: 'string',
      zoneCount: 'number',
      zoneInfos: { 'type': 'array', 'itemType': LogstashZoneInfos },
    };
  }

  validate() {
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.zoneInfos)) {
      $dara.Model.validateArray(this.zoneInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

