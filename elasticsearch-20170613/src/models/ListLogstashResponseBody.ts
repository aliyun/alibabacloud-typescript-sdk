// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstashResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 10
   */
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashResponseBodyResultTags extends $dara.Model {
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
      tagKey: 'TagKey',
      tagValue: 'TagValue',
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

export class ListLogstashResponseBodyResultNetworkConfig extends $dara.Model {
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
   * The zone where the instance resides.
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

export class ListLogstashResponseBodyResultNodeSpec extends $dara.Model {
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
   * Indicates whether disk encryption is enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * false
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The disk type.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The instance specification.
   * 
   * @example
   * logstash.n4.small
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

export class ListLogstashResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The instance tags.
   */
  tags?: ListLogstashResponseBodyResultTags[];
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
   * The instance name.
   * 
   * @example
   * ls-cn-abc
   */
  description?: string;
  /**
   * @example
   * 4928745600000
   */
  endTime?: number;
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
  networkConfig?: ListLogstashResponseBodyResultNetworkConfig;
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
   * The configuration information of data nodes.
   */
  nodeSpec?: ListLogstashResponseBodyResultNodeSpec;
  /**
   * @remarks
   * The billing method of the instance. Valid values: prepaid (subscription) and postpaid (pay-as-you-go).
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values: active (Normal), activating (Taking Effect), inactive (Frozen), and invalid (Expired).
   * 
   * @example
   * active
   */
  status?: string;
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
   * The instance version. Currently, only 6.7.0_with_X-Pack and 7.4.0_with_X-Pack are supported.
   * 
   * @example
   * 6.7.0_with_X-Pack
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
      createdAt: 'createdAt',
      description: 'description',
      endTime: 'endTime',
      instanceId: 'instanceId',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      updatedAt: 'updatedAt',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': ListLogstashResponseBodyResultTags },
      createdAt: 'string',
      description: 'string',
      endTime: 'number',
      instanceId: 'string',
      networkConfig: ListLogstashResponseBodyResultNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: ListLogstashResponseBodyResultNodeSpec,
      paymentType: 'string',
      resourceGroupId: 'string',
      status: 'string',
      updatedAt: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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

export class ListLogstashResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request header information.
   */
  headers?: ListLogstashResponseBodyHeaders;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC442F2F-5068-4434-AA21-E78947A9****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of instances returned by the current request.
   */
  result?: ListLogstashResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListLogstashResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListLogstashResponseBodyResult },
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

