// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairKVCacheInferInstancesResponseBodyInstancesTairInferInstanceDTOTagsTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class DescribeTairKVCacheInferInstancesResponseBodyInstancesTairInferInstanceDTOTags extends $dara.Model {
  tag?: DescribeTairKVCacheInferInstancesResponseBodyInstancesTairInferInstanceDTOTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeTairKVCacheInferInstancesResponseBodyInstancesTairInferInstanceDTOTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTairKVCacheInferInstancesResponseBodyInstancesTairInferInstanceDTO extends $dara.Model {
  ackId?: string;
  capacity?: number;
  chargeType?: string;
  computeUnitNum?: number;
  createTime?: string;
  destroyTime?: string;
  elasticVNodeCount?: number;
  endTime?: string;
  fixedVNodeCount?: number;
  instanceClass?: string;
  instanceId?: string;
  instanceName?: string;
  instanceStatus?: string;
  instanceType?: string;
  model?: string;
  modelServiceNum?: number;
  networkType?: string;
  privateIp?: string;
  regionId?: string;
  resourceGroupId?: string;
  tags?: DescribeTairKVCacheInferInstancesResponseBodyInstancesTairInferInstanceDTOTags;
  VNodeCount?: number;
  VNodeName?: string;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ackId: 'AckId',
      capacity: 'Capacity',
      chargeType: 'ChargeType',
      computeUnitNum: 'ComputeUnitNum',
      createTime: 'CreateTime',
      destroyTime: 'DestroyTime',
      elasticVNodeCount: 'ElasticVNodeCount',
      endTime: 'EndTime',
      fixedVNodeCount: 'FixedVNodeCount',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      model: 'Model',
      modelServiceNum: 'ModelServiceNum',
      networkType: 'NetworkType',
      privateIp: 'PrivateIp',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      VNodeCount: 'VNodeCount',
      VNodeName: 'VNodeName',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackId: 'string',
      capacity: 'number',
      chargeType: 'string',
      computeUnitNum: 'number',
      createTime: 'string',
      destroyTime: 'string',
      elasticVNodeCount: 'number',
      endTime: 'string',
      fixedVNodeCount: 'number',
      instanceClass: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      model: 'string',
      modelServiceNum: 'number',
      networkType: 'string',
      privateIp: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: DescribeTairKVCacheInferInstancesResponseBodyInstancesTairInferInstanceDTOTags,
      VNodeCount: 'number',
      VNodeName: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTairKVCacheInferInstancesResponseBodyInstances extends $dara.Model {
  tairInferInstanceDTO?: DescribeTairKVCacheInferInstancesResponseBodyInstancesTairInferInstanceDTO[];
  static names(): { [key: string]: string } {
    return {
      tairInferInstanceDTO: 'TairInferInstanceDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tairInferInstanceDTO: { 'type': 'array', 'itemType': DescribeTairKVCacheInferInstancesResponseBodyInstancesTairInferInstanceDTO },
    };
  }

  validate() {
    if(Array.isArray(this.tairInferInstanceDTO)) {
      $dara.Model.validateArray(this.tairInferInstanceDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTairKVCacheInferInstancesResponseBody extends $dara.Model {
  instances?: DescribeTairKVCacheInferInstancesResponseBodyInstances;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD225838-7069-5CE4-89E1-67B83AC149C8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned records.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeTairKVCacheInferInstancesResponseBodyInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

