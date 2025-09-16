// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyResultDataSourceDetailsConfig extends $dara.Model {
  accessKey?: string;
  bucket?: string;
  catalog?: string;
  database?: string;
  endpoint?: string;
  namespace?: string;
  ossPath?: string;
  partition?: string;
  path?: string;
  project?: string;
  table?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      bucket: 'bucket',
      catalog: 'catalog',
      database: 'database',
      endpoint: 'endpoint',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      bucket: 'string',
      catalog: 'string',
      database: 'string',
      endpoint: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyResultDataSourceDetails extends $dara.Model {
  config?: ListInstancesResponseBodyResultDataSourceDetailsConfig;
  indexName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      indexName: 'indexName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ListInstancesResponseBodyResultDataSourceDetailsConfig,
      indexName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyResultNetwork extends $dara.Model {
  allow?: string;
  /**
   * @remarks
   * The instance endpoint.
   * 
   * @example
   * ""
   */
  endpoint?: string;
  publicEndpoint?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp11ldcf59q2nbwkqgj6z
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the instance is deployed.
   * 
   * @example
   * vpc-wz9axk41d9vffoc79x0oe
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

export class ListInstancesResponseBodyResultSpecQrsResource extends $dara.Model {
  category?: string;
  cpu?: number;
  disk?: number;
  mem?: number;
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

export class ListInstancesResponseBodyResultSpecSearchResource extends $dara.Model {
  category?: string;
  cpu?: number;
  disk?: number;
  mem?: number;
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

export class ListInstancesResponseBodyResultSpec extends $dara.Model {
  qrsResource?: ListInstancesResponseBodyResultSpecQrsResource;
  searchResource?: ListInstancesResponseBodyResultSpecSearchResource;
  static names(): { [key: string]: string } {
    return {
      qrsResource: 'qrsResource',
      searchResource: 'searchResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qrsResource: ListInstancesResponseBodyResultSpecQrsResource,
      searchResource: ListInstancesResponseBodyResultSpecSearchResource,
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

export class ListInstancesResponseBodyResultTags extends $dara.Model {
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
   * oboms-disk
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

export class ListInstancesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code of the instance.
   * 
   * @example
   * ""
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2022-06-04T02:03:21Z
   */
  createTime?: string;
  dataSourceDetails?: ListInstancesResponseBodyResultDataSourceDetails[];
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * Emergency test
   */
  description?: string;
  edition?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 1634885083
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
   * ha-cn-2r42n8oh001
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock state of the instance.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The network information of the instance.
   */
  network?: ListInstancesResponseBodyResultNetwork;
  noQrs?: boolean;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzgpiswzbksdi
   */
  resourceGroupId?: string;
  spec?: ListInstancesResponseBodyResultSpec;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * 2
   */
  status?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: ListInstancesResponseBodyResultTags[];
  /**
   * @remarks
   * The time when the instance was updated.
   * 
   * @example
   * 2018-12-06T11:17:49.0
   */
  updateTime?: string;
  userName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      createTime: 'createTime',
      dataSourceDetails: 'dataSourceDetails',
      description: 'description',
      edition: 'edition',
      expiredTime: 'expiredTime',
      inDebt: 'inDebt',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      network: 'network',
      noQrs: 'noQrs',
      resourceGroupId: 'resourceGroupId',
      spec: 'spec',
      status: 'status',
      tags: 'tags',
      updateTime: 'updateTime',
      userName: 'userName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      createTime: 'string',
      dataSourceDetails: { 'type': 'array', 'itemType': ListInstancesResponseBodyResultDataSourceDetails },
      description: 'string',
      edition: 'string',
      expiredTime: 'string',
      inDebt: 'boolean',
      instanceId: 'string',
      lockMode: 'string',
      network: ListInstancesResponseBodyResultNetwork,
      noQrs: 'boolean',
      resourceGroupId: 'string',
      spec: ListInstancesResponseBodyResultSpec,
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyResultTags },
      updateTime: 'string',
      userName: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceDetails)) {
      $dara.Model.validateArray(this.dataSourceDetails);
    }
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

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * 89B968E6-1E41-58DF-BB25-5F98ECC759CE
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   */
  result?: ListInstancesResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries returned
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInstancesResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

