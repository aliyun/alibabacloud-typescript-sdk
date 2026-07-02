// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairKVCacheCustomInstanceAttributeResponseBodyDisksDisk extends $dara.Model {
  diskId?: string;
  size?: string;
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
  architectureType?: string;
  chargeType?: string;
  cpu?: number;
  createTime?: string;
  disks?: DescribeTairKVCacheCustomInstanceAttributeResponseBodyDisks;
  endTime?: string;
  imageId?: string;
  instanceClass?: string;
  instanceId?: string;
  instanceName?: string;
  instanceStatus?: string;
  instanceType?: string;
  isOrderCompleted?: boolean;
  memory?: number;
  networkType?: string;
  privateIp?: string;
  regionId?: string;
  requestId?: string;
  resourceGroupId?: string;
  securityGroupId?: string;
  storage?: number;
  storageType?: string;
  tags?: DescribeTairKVCacheCustomInstanceAttributeResponseBodyTags;
  useEni?: boolean;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
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

