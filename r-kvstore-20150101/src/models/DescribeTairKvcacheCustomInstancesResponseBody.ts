// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairKVCacheCustomInstancesResponseBodyInstancesKVStoreInstanceTagsTag extends $dara.Model {
  /**
   * @example
   * tagkey
   */
  key?: string;
  /**
   * @example
   * tagvalue
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

export class DescribeTairKVCacheCustomInstancesResponseBodyInstancesKVStoreInstanceTags extends $dara.Model {
  tag?: DescribeTairKVCacheCustomInstancesResponseBodyInstancesKVStoreInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeTairKVCacheCustomInstancesResponseBodyInstancesKVStoreInstanceTagsTag },
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

export class DescribeTairKVCacheCustomInstancesResponseBodyInstancesKVStoreInstance extends $dara.Model {
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * 2018-11-07T08:49:00Z
   */
  createTime?: string;
  /**
   * @example
   * 2019-04-28T10:03:01Z
   */
  destroyTime?: string;
  /**
   * @example
   * 2024-05-21T00:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * tair.gpu.test.16g
   */
  instanceClass?: string;
  /**
   * @example
   * tc-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @example
   * testdb
   */
  instanceName?: string;
  /**
   * @example
   * Normal
   */
  instanceStatus?: string;
  /**
   * @example
   * TairCustom
   */
  instanceType?: string;
  /**
   * @example
   * VPC
   */
  networkType?: string;
  privateIp?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 50
   */
  storage?: number;
  /**
   * @example
   * essd_pl1
   */
  storageType?: string;
  tags?: DescribeTairKVCacheCustomInstancesResponseBodyInstancesKVStoreInstanceTags;
  useEni?: boolean;
  /**
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  vpcId?: string;
  /**
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      destroyTime: 'DestroyTime',
      endTime: 'EndTime',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      privateIp: 'PrivateIp',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      storage: 'Storage',
      storageType: 'StorageType',
      tags: 'Tags',
      useEni: 'UseEni',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      createTime: 'string',
      destroyTime: 'string',
      endTime: 'string',
      instanceClass: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      networkType: 'string',
      privateIp: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      storage: 'number',
      storageType: 'string',
      tags: DescribeTairKVCacheCustomInstancesResponseBodyInstancesKVStoreInstanceTags,
      useEni: 'boolean',
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

export class DescribeTairKVCacheCustomInstancesResponseBodyInstances extends $dara.Model {
  KVStoreInstance?: DescribeTairKVCacheCustomInstancesResponseBodyInstancesKVStoreInstance[];
  static names(): { [key: string]: string } {
    return {
      KVStoreInstance: 'KVStoreInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KVStoreInstance: { 'type': 'array', 'itemType': DescribeTairKVCacheCustomInstancesResponseBodyInstancesKVStoreInstance },
    };
  }

  validate() {
    if(Array.isArray(this.KVStoreInstance)) {
      $dara.Model.validateArray(this.KVStoreInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTairKVCacheCustomInstancesResponseBody extends $dara.Model {
  instances?: DescribeTairKVCacheCustomInstancesResponseBodyInstances;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * B79C1A90-495B-4E99-A2AA-A4DB13B8****
   */
  requestId?: string;
  /**
   * @example
   * 40
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
      instances: DescribeTairKVCacheCustomInstancesResponseBodyInstances,
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

