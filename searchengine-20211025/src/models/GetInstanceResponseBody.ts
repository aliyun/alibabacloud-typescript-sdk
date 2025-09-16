// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyResultNetwork extends $dara.Model {
  /**
   * @remarks
   * The public domain name whitelist.
   * 
   * @example
   * 127.0.0.1
   */
  allow?: string;
  /**
   * @remarks
   * The instance endpoint.
   * 
   * @example
   * ha-cn-35t3r****.ha.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * ha-cn-35t3ni****.public.ha.aliyuncs.com
   */
  publicEndpoint?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp11ldcf59q2n****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
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
   * The category. Valid values: local_ssd, SSD, and cloud.
   * 
   * @example
   * local_ssd
   */
  category?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 100
   */
  disk?: number;
  /**
   * @remarks
   * The memory of the instance. Unit: GB.
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
   * The category. Valid values: local_ssd, SSD, and cloud.
   * 
   * @example
   * local_ssd
   */
  category?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 100
   */
  disk?: number;
  /**
   * @remarks
   * The memory of the instance. Unit: GB.
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
   * The QRS worker specifications.
   */
  qrsResource?: GetInstanceResponseBodyResultSpecQrsResource;
  /**
   * @remarks
   * The searcher worker specifications.
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
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * prod
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
   * The commodity code of the instance.
   * 
   * @example
   * commodityCode
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
   * ha3_test
   */
  description?: string;
  /**
   * @remarks
   * The edition of the instance. Valid values: vector and engine.
   * 
   * @example
   * vector
   */
  edition?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 1634609702
   */
  expiredTime?: string;
  /**
   * @remarks
   * Indicates whether an overdue payment is involved.
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
   * ha-cn-7mz2qsgq301
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
   * The network information of the instance.
   */
  network?: GetInstanceResponseBodyResultNetwork;
  /**
   * @remarks
   * Specifies whether the instance is of the new version.
   * 
   * @example
   * true
   */
  newMode?: boolean;
  /**
   * @remarks
   * Specifies whether the instance has only one node.
   * 
   * @example
   * false
   */
  noQrs?: boolean;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzjvw24el5lma
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The node specifications.
   */
  spec?: GetInstanceResponseBodyResultSpec;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   INIT: being initialized
   * *   WAIT_CONFIG: to be configured
   * *   CONFIG_UPDATING: configuration taking effect
   * *   READY: normal
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: GetInstanceResponseBodyResultTags[];
  /**
   * @remarks
   * The time when the instance was updated.
   * 
   * @example
   * 1634609702
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
   * The version of the engine.
   * 
   * @example
   * ha3_3.10.0
   */
  version?: string;
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
   * Response parameters
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

