// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstashResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The number of data nodes.
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
   * The disk size of the node.
   * 
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * The instance type of the ECS instance.
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
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
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

export class ListLogstashResponseBodyResultNodeSpec extends $dara.Model {
  /**
   * @remarks
   * The network configurations.
   * 
   * @example
   * 50
   */
  disk?: number;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * false
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The zone where the cluster resides.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The type of the disk.
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
   * The configuration information of the data node.
   */
  tags?: ListLogstashResponseBodyResultTags[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 2018-07-13T03:58:07.253Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The time when the instance was last updated.
   * 
   * @example
   * ls-cn-abc
   */
  description?: string;
  /**
   * @remarks
   * The tag value of the cloud disk.
   * 
   * @example
   * ls-cn-n6w1o5jq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type. Currently, only Virtual Private Cloud (VPC) is supported.
   */
  networkConfig?: ListLogstashResponseBodyResultNetworkConfig;
  /**
   * @remarks
   * The state of the instance. Valid values: Normal, Active, Inactive, and Invalid.
   * 
   * @example
   * 2
   */
  nodeAmount?: number;
  /**
   * @remarks
   * Specifies whether to use disk encryption. Valid values:
   * 
   * *   true: Enables the concurrent query feature for queries other than aggregate queries.
   * *   false: Disables the concurrent query feature for queries other than aggregate queries.
   */
  nodeSpec?: ListLogstashResponseBodyResultNodeSpec;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The version of the instance. Currently, only 6.7.0_with_X-Pack and 7.4.0_with_X-Pack are supported.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The tag of the instance. Valid values:
   * 
   * @example
   * 2018-07-18T10:10:04.484Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The tag key of the cloud disk.
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
   * The billing method of the instance. Supported: prepaid (subscription) and postpaid (pay-as-you-go).
   */
  headers?: ListLogstashResponseBodyHeaders;
  /**
   * @remarks
   * Detailed information about the matching instances.
   * 
   * @example
   * AC442F2F-5068-4434-AA21-E78947A9****
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the VPC.
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

