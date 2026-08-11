// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyResultNetwork extends $dara.Model {
  /**
   * @remarks
   * The whitelist for the public domain name.
   * 
   * @example
   * 127.0.0.1
   */
  allow?: string;
  /**
   * @remarks
   * The gateway endpoint.
   * 
   * @example
   * ha-cn-35t3r****.ha.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The public domain name.
   * 
   * @example
   * ha-cn-35t3ni****.public.ha.aliyuncs.com
   */
  publicEndpoint?: string;
  /**
   * @remarks
   * The ID of the virtual switch.
   * 
   * @example
   * vsw-bp11ldcf59q2n****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-wz9axk41d9vff****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      allow: 'allow',
      endpoint: 'endpoint',
      publicEndpoint: 'publicEndpoint',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allow: 'string',
      endpoint: 'string',
      publicEndpoint: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyResultSpecQrsResource extends $dara.Model {
  /**
   * @remarks
   * The type of the instance. The value local_ssd indicates the local SSD type, and the value cloud indicates the disk type.
   * 
   * @example
   * local_ssd
   */
  category?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The storage space of the node in GB.
   * 
   * @example
   * 100
   */
  disk?: number;
  /**
   * @remarks
   * The memory size in GB.
   * 
   * @example
   * 10
   */
  mem?: number;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 1
   */
  nodeCount?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      cpu: 'cpu',
      disk: 'disk',
      mem: 'mem',
      nodeCount: 'nodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      cpu: 'number',
      disk: 'number',
      mem: 'number',
      nodeCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyResultSpecSearchResource extends $dara.Model {
  /**
   * @remarks
   * The machine type. Valid values:
   * 
   * @example
   * local_ssd
   */
  category?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The storage space of the node in GB.
   * 
   * @example
   * 100
   */
  disk?: number;
  /**
   * @remarks
   * The memory size in GB.
   * 
   * @example
   * 10
   */
  mem?: number;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 1
   */
  nodeCount?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      cpu: 'cpu',
      disk: 'disk',
      mem: 'mem',
      nodeCount: 'nodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      cpu: 'number',
      disk: 'number',
      mem: 'number',
      nodeCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyResultSpec extends $dara.Model {
  /**
   * @remarks
   * The specifications of the query node.
   */
  qrsResource?: GetInstanceResponseBodyResultSpecQrsResource;
  /**
   * @remarks
   * The specifications of the data node.
   */
  searchResource?: GetInstanceResponseBodyResultSpecSearchResource;
  static names(): { [key: string]: string } {
    return {
      qrsResource: 'qrsResource',
      searchResource: 'searchResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qrsResource: GetInstanceResponseBodyResultSpecQrsResource,
      searchResource: GetInstanceResponseBodyResultSpecSearchResource,
    };
  }

  validate() {
    if(this.qrsResource && typeof (this.qrsResource as any).validate === 'function') {
      (this.qrsResource as any).validate();
    }
    if(this.searchResource && typeof (this.searchResource as any).validate === 'function') {
      (this.searchResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyResultTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * opensearch
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * opensearch
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class GetInstanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The BS version number.
   * 
   * @example
   * bs_3.13.2
   */
  bsVersion?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * POSYPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * opensearch_ha3post_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2022-06-17T02:01:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The edition of the instance. Valid values: - vector: Vector Search Edition - engine: Recall Engine Edition
   * 
   * @example
   * vector
   */
  edition?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 024-05-21 16:49:31.0
   */
  expiredTime?: string;
  /**
   * @remarks
   * Indicates whether the payment for the instance is overdue.
   * 
   * @example
   * false
   */
  inDebt?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ha-cn-pl32rf0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock status.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The network information of the search engine instance.
   */
  network?: GetInstanceResponseBodyResultNetwork;
  /**
   * @remarks
   * Indicates whether the new version of the console is used.
   * 
   * @example
   * true
   */
  newMode?: boolean;
  /**
   * @remarks
   * Indicates whether the instance is a standalone instance.
   * 
   * @example
   * false
   */
  noQrs?: boolean;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzjvw24****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The node specifications.
   */
  spec?: GetInstanceResponseBodyResultSpec;
  /**
   * @remarks
   * The status of the instance.
   * 
   * - INIT: The instance is being initialized.
   * 
   * - WAIT_CONFIG: The instance is pending configuration.
   * 
   * - CONFIG_UPDATING: The configuration is being applied.
   * 
   * - READY: The instance is running.
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetInstanceResponseBodyResultTags[];
  /**
   * @remarks
   * The time when the instance was last updated.
   * 
   * @example
   * 024-05-21 16:49:31.0
   */
  updateTime?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * admin
   */
  userName?: string;
  /**
   * @remarks
   * The engine version number.
   * 
   * @example
   * ha3_3.10.0
   */
  version?: string;
  /**
   * @remarks
   * The number of zones.
   * 
   * @example
   * 1
   */
  zoneCount?: number;
  static names(): { [key: string]: string } {
    return {
      bsVersion: 'bsVersion',
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      createTime: 'createTime',
      description: 'description',
      edition: 'edition',
      expiredTime: 'expiredTime',
      inDebt: 'inDebt',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      network: 'network',
      newMode: 'newMode',
      noQrs: 'noQrs',
      resourceGroupId: 'resourceGroupId',
      spec: 'spec',
      status: 'status',
      tags: 'tags',
      updateTime: 'updateTime',
      userName: 'userName',
      version: 'version',
      zoneCount: 'zoneCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bsVersion: 'string',
      chargeType: 'string',
      commodityCode: 'string',
      createTime: 'string',
      description: 'string',
      edition: 'string',
      expiredTime: 'string',
      inDebt: 'boolean',
      instanceId: 'string',
      lockMode: 'string',
      network: GetInstanceResponseBodyResultNetwork,
      newMode: 'boolean',
      noQrs: 'boolean',
      resourceGroupId: 'string',
      spec: GetInstanceResponseBodyResultSpec,
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetInstanceResponseBodyResultTags },
      updateTime: 'string',
      userName: 'string',
      version: 'string',
      zoneCount: 'number',
    };
  }

  validate() {
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: GetInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetInstanceResponseBodyResult,
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

