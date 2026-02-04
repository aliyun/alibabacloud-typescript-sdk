// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairKVCacheInferInstancesResponseBodyInstancesTairInferInstanceDTOTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * thread
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 900
   */
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
  /**
   * @remarks
   * The ACK cluster ID corresponding to the virtual cluster instance.
   * 
   * @example
   * c809******************************
   */
  ackId?: string;
  /**
   * @remarks
   * The capacity of the KVCache. Unit: GB.
   * 
   * @example
   * 256
   */
  capacity?: number;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of compute units.
   * 
   * @example
   * 1
   */
  computeUnitNum?: number;
  /**
   * @remarks
   * The creation time of the instance.
   * 
   * @example
   * 2025-04-07T04:46Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the instance was deleted.
   * 
   * @example
   * 2025-04-07T04:46Z
   */
  destroyTime?: string;
  elasticVNodeCount?: number;
  /**
   * @remarks
   * The time when the subscription instance expires.
   * 
   * @example
   * 2025-11-04T02:09:26Z
   */
  endTime?: string;
  fixedVNodeCount?: number;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * kvcache.cu.g4b.2
   */
  instanceClass?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * tk-9dp7e37bab*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * kvcache-7
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance state. Valid values:
   * 
   * *   **Normal**: The instance is normal.
   * *   **Creating**: The instance is being created.
   * 
   * @example
   * Normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The type of the instance. Valid values:
   * 
   * *   **TairInfer**: the inference operator instance
   * *   **TairKVCacheVnode**: the virtual cluster instance.
   * *   **TairKVCacheService**: the cache service instance.
   * 
   * @example
   * TairInfer
   */
  instanceType?: string;
  /**
   * @remarks
   * The built-in model of the inference operator instance.
   * 
   * @example
   * DeepSeek-OCR
   */
  model?: string;
  /**
   * @remarks
   * The number of model services of the inference operator instance.
   * 
   * @example
   * 1
   */
  modelServiceNum?: number;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The private IP address of the instance. This parameter is deprecated.
   * 
   * @example
   * 172.16.49.***
   */
  privateIp?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm4bdru5z****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Details of the tags.
   */
  tags?: DescribeTairKVCacheInferInstancesResponseBodyInstancesTairInferInstanceDTOTags;
  /**
   * @remarks
   * The number of vNodes in the virtual cluster.
   * 
   * @example
   * 2
   */
  VNodeCount?: number;
  /**
   * @remarks
   * The list of vNode instance names under the virtual cluster instance. This parameter is deprecated.
   * 
   * @example
   * tv-xxxxx
   */
  VNodeName?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vbf0ksk774ai6q1d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * @example
   * vpc-2zef5w848p4j5g***
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-g
   */
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
  /**
   * @remarks
   * The information about the returned Tair (Redis OSS-compatible) KVCache instance.
   */
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

