// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogstashEndpointList extends $dara.Model {
  /**
   * @example
   * 172.16.xx.xx
   */
  host?: string;
  /**
   * @example
   * 9200
   */
  port?: number;
  /**
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
   * @example
   * vpc
   */
  type?: string;
  /**
   * @example
   * vpc-abc
   */
  vpcId?: string;
  /**
   * @example
   * cn-hangzhou-*
   */
  vsArea?: string;
  /**
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
   * @example
   * env
   */
  tagKey?: string;
  /**
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
   * @example
   * NORMAL
   */
  status?: string;
  /**
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
  config?: { [key: string]: string };
  /**
   * @example
   * 2018-07-13T03:58:07.253Z
   */
  createdAt?: string;
  /**
   * @example
   * true
   */
  dataNode?: boolean;
  /**
   * @example
   * ls-cn-abc
   */
  description?: string;
  /**
   * @example
   * 4749897600000
   */
  endTime?: number;
  endpointList?: LogstashEndpointList[];
  /**
   * @example
   * ls-cn-n6w1o5jq****
   */
  instanceId?: string;
  networkConfig?: LogstashNetworkConfig;
  /**
   * @example
   * 2
   */
  nodeAmount?: number;
  nodeSpec?: LogstashNodeSpec;
  /**
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * rg-acfm2h5vbzd****
   */
  resourceGroupId?: string;
  /**
   * @example
   * NORMAL
   */
  status?: string;
  tags?: LogstashTags[];
  /**
   * @example
   * 2018-07-18T10:10:04.484Z
   */
  updatedAt?: string;
  /**
   * @example
   * 6.7.0_with_X-Pack
   */
  version?: string;
  /**
   * @example
   * 1
   */
  zoneCount?: number;
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

