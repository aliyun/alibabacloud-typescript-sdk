// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceTagsTag extends $dara.Model {
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

export class DescribeInstancesResponseBodyInstancesInstanceTags extends $dara.Model {
  tag?: DescribeInstancesResponseBodyInstancesInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceTagsTag },
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

export class DescribeInstancesResponseBodyInstancesInstance extends $dara.Model {
  autoRenewal?: boolean;
  backupStatus?: string;
  clusterId?: string;
  clusterName?: string;
  clusterType?: string;
  coldStorageStatus?: string;
  coreDiskCount?: string;
  coreDiskSize?: number;
  coreDiskType?: string;
  coreInstanceType?: string;
  coreNodeCount?: number;
  createdTime?: string;
  createdTimeUTC?: string;
  duration?: number;
  engine?: string;
  expireTime?: string;
  expireTimeUTC?: string;
  instanceId?: string;
  instanceName?: string;
  isDeletionProtection?: boolean;
  isHa?: boolean;
  majorVersion?: string;
  masterDiskSize?: number;
  masterDiskType?: string;
  masterInstanceType?: string;
  masterNodeCount?: number;
  moduleId?: number;
  moduleStackVersion?: string;
  networkType?: string;
  parentId?: string;
  payType?: string;
  regionId?: string;
  resourceGroupId?: string;
  status?: string;
  tags?: DescribeInstancesResponseBodyInstancesInstanceTags;
  vpcId?: string;
  vswitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      backupStatus: 'BackupStatus',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      coldStorageStatus: 'ColdStorageStatus',
      coreDiskCount: 'CoreDiskCount',
      coreDiskSize: 'CoreDiskSize',
      coreDiskType: 'CoreDiskType',
      coreInstanceType: 'CoreInstanceType',
      coreNodeCount: 'CoreNodeCount',
      createdTime: 'CreatedTime',
      createdTimeUTC: 'CreatedTimeUTC',
      duration: 'Duration',
      engine: 'Engine',
      expireTime: 'ExpireTime',
      expireTimeUTC: 'ExpireTimeUTC',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isDeletionProtection: 'IsDeletionProtection',
      isHa: 'IsHa',
      majorVersion: 'MajorVersion',
      masterDiskSize: 'MasterDiskSize',
      masterDiskType: 'MasterDiskType',
      masterInstanceType: 'MasterInstanceType',
      masterNodeCount: 'MasterNodeCount',
      moduleId: 'ModuleId',
      moduleStackVersion: 'ModuleStackVersion',
      networkType: 'NetworkType',
      parentId: 'ParentId',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      backupStatus: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      coldStorageStatus: 'string',
      coreDiskCount: 'string',
      coreDiskSize: 'number',
      coreDiskType: 'string',
      coreInstanceType: 'string',
      coreNodeCount: 'number',
      createdTime: 'string',
      createdTimeUTC: 'string',
      duration: 'number',
      engine: 'string',
      expireTime: 'string',
      expireTimeUTC: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isDeletionProtection: 'boolean',
      isHa: 'boolean',
      majorVersion: 'string',
      masterDiskSize: 'number',
      masterDiskType: 'string',
      masterInstanceType: 'string',
      masterNodeCount: 'number',
      moduleId: 'number',
      moduleStackVersion: 'string',
      networkType: 'string',
      parentId: 'string',
      payType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: DescribeInstancesResponseBodyInstancesInstanceTags,
      vpcId: 'string',
      vswitchId: 'string',
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

export class DescribeInstancesResponseBodyInstances extends $dara.Model {
  instance?: DescribeInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $dara.Model {
  instances?: DescribeInstancesResponseBodyInstances;
  /**
   * @remarks
   * The page number of the instance list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of rows displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EBECBF12-2E34-41BE-8DE9-FC3700D4****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 18
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
      instances: DescribeInstancesResponseBodyInstances,
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

