// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairKVCacheInferInstanceAttributeResponseBodyInstancesDBInstanceAttributeTagsTag extends $dara.Model {
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

export class DescribeTairKVCacheInferInstanceAttributeResponseBodyInstancesDBInstanceAttributeTags extends $dara.Model {
  tag?: DescribeTairKVCacheInferInstanceAttributeResponseBodyInstancesDBInstanceAttributeTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeTairKVCacheInferInstanceAttributeResponseBodyInstancesDBInstanceAttributeTagsTag },
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

export class DescribeTairKVCacheInferInstanceAttributeResponseBodyInstancesDBInstanceAttribute extends $dara.Model {
  architectureType?: string;
  chargeType?: string;
  computeUnitNum?: number;
  connectionString?: string;
  createTime?: string;
  endTime?: string;
  instanceClass?: string;
  instanceId?: string;
  instanceName?: string;
  instanceStatus?: string;
  instanceType?: string;
  isDelete?: number;
  isOrderCompleted?: string;
  model?: string;
  modelServiceNum?: number;
  networkType?: string;
  privateIp?: string;
  regionId?: string;
  replicaNum?: string;
  resourceGroupId?: string;
  storage?: number;
  tags?: DescribeTairKVCacheInferInstanceAttributeResponseBodyInstancesDBInstanceAttributeTags;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      chargeType: 'ChargeType',
      computeUnitNum: 'ComputeUnitNum',
      connectionString: 'ConnectionString',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      isDelete: 'IsDelete',
      isOrderCompleted: 'IsOrderCompleted',
      model: 'Model',
      modelServiceNum: 'ModelServiceNum',
      networkType: 'NetworkType',
      privateIp: 'PrivateIp',
      regionId: 'RegionId',
      replicaNum: 'ReplicaNum',
      resourceGroupId: 'ResourceGroupId',
      storage: 'Storage',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureType: 'string',
      chargeType: 'string',
      computeUnitNum: 'number',
      connectionString: 'string',
      createTime: 'string',
      endTime: 'string',
      instanceClass: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      isDelete: 'number',
      isOrderCompleted: 'string',
      model: 'string',
      modelServiceNum: 'number',
      networkType: 'string',
      privateIp: 'string',
      regionId: 'string',
      replicaNum: 'string',
      resourceGroupId: 'string',
      storage: 'number',
      tags: DescribeTairKVCacheInferInstanceAttributeResponseBodyInstancesDBInstanceAttributeTags,
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
      zoneType: 'string',
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

export class DescribeTairKVCacheInferInstanceAttributeResponseBodyInstances extends $dara.Model {
  DBInstanceAttribute?: DescribeTairKVCacheInferInstanceAttributeResponseBodyInstancesDBInstanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceAttribute: 'DBInstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAttribute: { 'type': 'array', 'itemType': DescribeTairKVCacheInferInstanceAttributeResponseBodyInstancesDBInstanceAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceAttribute)) {
      $dara.Model.validateArray(this.DBInstanceAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTairKVCacheInferInstanceAttributeResponseBody extends $dara.Model {
  instances?: DescribeTairKVCacheInferInstanceAttributeResponseBodyInstances;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeTairKVCacheInferInstanceAttributeResponseBodyInstances,
      requestId: 'string',
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

