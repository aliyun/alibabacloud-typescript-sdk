// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairKVCacheCustomInstanceAttributeResponseBodyDisksDisk extends $dara.Model {
  /**
   * @example
   * d-5v1aggi3ffoxufb57**
   */
  diskId?: string;
  /**
   * @example
   * 100
   */
  size?: string;
  /**
   * @example
   * data
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      size: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTairKVCacheCustomInstanceAttributeResponseBodyDisks extends $dara.Model {
  disk?: DescribeTairKVCacheCustomInstanceAttributeResponseBodyDisksDisk[];
  static names(): { [key: string]: string } {
    return {
      disk: 'Disk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: { 'type': 'array', 'itemType': DescribeTairKVCacheCustomInstanceAttributeResponseBodyDisksDisk },
    };
  }

  validate() {
    if(Array.isArray(this.disk)) {
      $dara.Model.validateArray(this.disk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTairKVCacheCustomInstanceAttributeResponseBodyTagsTag extends $dara.Model {
  /**
   * @example
   * tag1
   */
  key?: string;
  /**
   * @example
   * value1
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

export class DescribeTairKVCacheCustomInstanceAttributeResponseBodyTags extends $dara.Model {
  tag?: DescribeTairKVCacheCustomInstanceAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeTairKVCacheCustomInstanceAttributeResponseBodyTagsTag },
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

export class DescribeTairKVCacheCustomInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * tair_custom
   */
  architectureType?: string;
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @example
   * 2024-02-21T08:23Z
   */
  createTime?: string;
  disks?: DescribeTairKVCacheCustomInstanceAttributeResponseBodyDisks;
  /**
   * @example
   * 2024-05-28T00:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * m-bp10k5694v6yfevajw**
   */
  imageId?: string;
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
   * newinstancename
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
   * true
   */
  isOrderCompleted?: boolean;
  /**
   * @example
   * 262144
   */
  memory?: number;
  /**
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @example
   * 172.16.49.***
   */
  privateIp?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 2BE6E619-A657-42E3-AD2D-18F8428A****
   */
  requestId?: string;
  /**
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @example
   * sg-bpcfmyiu4ekp****
   */
  securityGroupId?: string;
  /**
   * @example
   * 60
   */
  storage?: number;
  /**
   * @example
   * essd_pl1
   */
  storageType?: string;
  tags?: DescribeTairKVCacheCustomInstanceAttributeResponseBodyTags;
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
   * cn-hangzhou-b
   */
  zoneId?: string;
  /**
   * @example
   * singlezone
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      disks: 'Disks',
      endTime: 'EndTime',
      imageId: 'ImageId',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      isOrderCompleted: 'IsOrderCompleted',
      memory: 'Memory',
      networkType: 'NetworkType',
      privateIp: 'PrivateIp',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      storage: 'Storage',
      storageType: 'StorageType',
      tags: 'Tags',
      useEni: 'UseEni',
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
      cpu: 'number',
      createTime: 'string',
      disks: DescribeTairKVCacheCustomInstanceAttributeResponseBodyDisks,
      endTime: 'string',
      imageId: 'string',
      instanceClass: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      isOrderCompleted: 'boolean',
      memory: 'number',
      networkType: 'string',
      privateIp: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      storage: 'number',
      storageType: 'string',
      tags: DescribeTairKVCacheCustomInstanceAttributeResponseBodyTags,
      useEni: 'boolean',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
      zoneType: 'string',
    };
  }

  validate() {
    if(this.disks && typeof (this.disks as any).validate === 'function') {
      (this.disks as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

