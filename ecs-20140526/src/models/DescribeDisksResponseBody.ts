// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisksResponseBodyDisksDiskAttachmentsAttachment extends $dara.Model {
  attachedTime?: string;
  device?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      attachedTime: 'AttachedTime',
      device: 'Device',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedTime: 'string',
      device: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisksDiskAttachments extends $dara.Model {
  attachment?: DescribeDisksResponseBodyDisksDiskAttachmentsAttachment[];
  static names(): { [key: string]: string } {
    return {
      attachment: 'Attachment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachment: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDiskAttachmentsAttachment },
    };
  }

  validate() {
    if(Array.isArray(this.attachment)) {
      $dara.Model.validateArray(this.attachment);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisksDiskMountInstancesMountInstance extends $dara.Model {
  attachedTime?: string;
  device?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      attachedTime: 'AttachedTime',
      device: 'Device',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedTime: 'string',
      device: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisksDiskMountInstances extends $dara.Model {
  mountInstance?: DescribeDisksResponseBodyDisksDiskMountInstancesMountInstance[];
  static names(): { [key: string]: string } {
    return {
      mountInstance: 'MountInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountInstance: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDiskMountInstancesMountInstance },
    };
  }

  validate() {
    if(Array.isArray(this.mountInstance)) {
      $dara.Model.validateArray(this.mountInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisksDiskOperationLocksOperationLock extends $dara.Model {
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisksDiskOperationLocks extends $dara.Model {
  operationLock?: DescribeDisksResponseBodyDisksDiskOperationLocksOperationLock[];
  static names(): { [key: string]: string } {
    return {
      operationLock: 'OperationLock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationLock: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDiskOperationLocksOperationLock },
    };
  }

  validate() {
    if(Array.isArray(this.operationLock)) {
      $dara.Model.validateArray(this.operationLock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisksDiskPlacement extends $dara.Model {
  zoneIds?: string;
  static names(): { [key: string]: string } {
    return {
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisksDiskTagsTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisksDiskTags extends $dara.Model {
  tag?: DescribeDisksResponseBodyDisksDiskTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDiskTagsTag },
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

export class DescribeDisksResponseBodyDisksDisk extends $dara.Model {
  attachedTime?: string;
  attachments?: DescribeDisksResponseBodyDisksDiskAttachments;
  autoSnapshotPolicyId?: string;
  bdfId?: string;
  burstingEnabled?: boolean;
  category?: string;
  creationTime?: string;
  deleteAutoSnapshot?: boolean;
  deleteWithInstance?: boolean;
  description?: string;
  detachedTime?: string;
  device?: string;
  diskChargeType?: string;
  diskId?: string;
  diskName?: string;
  enableAutoSnapshot?: boolean;
  enableAutomatedSnapshotPolicy?: boolean;
  encrypted?: boolean;
  expiredTime?: string;
  IOPS?: number;
  IOPSRead?: number;
  IOPSWrite?: number;
  imageId?: string;
  instanceId?: string;
  KMSKeyId?: string;
  mountInstanceNum?: number;
  mountInstances?: DescribeDisksResponseBodyDisksDiskMountInstances;
  multiAttach?: string;
  operationLocks?: DescribeDisksResponseBodyDisksDiskOperationLocks;
  performanceLevel?: string;
  placement?: DescribeDisksResponseBodyDisksDiskPlacement;
  portable?: boolean;
  productCode?: string;
  provisionedIops?: number;
  regionId?: string;
  resourceGroupId?: string;
  serialNumber?: string;
  size?: number;
  /**
   * @example
   * d-123*********
   */
  sourceDiskId?: string;
  sourceSnapshotId?: string;
  status?: string;
  storageClusterId?: string;
  storageSetId?: string;
  storageSetPartitionNumber?: number;
  tags?: DescribeDisksResponseBodyDisksDiskTags;
  throughput?: number;
  throughputRead?: number;
  throughputWrite?: number;
  type?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      attachedTime: 'AttachedTime',
      attachments: 'Attachments',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      bdfId: 'BdfId',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      creationTime: 'CreationTime',
      deleteAutoSnapshot: 'DeleteAutoSnapshot',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      detachedTime: 'DetachedTime',
      device: 'Device',
      diskChargeType: 'DiskChargeType',
      diskId: 'DiskId',
      diskName: 'DiskName',
      enableAutoSnapshot: 'EnableAutoSnapshot',
      enableAutomatedSnapshotPolicy: 'EnableAutomatedSnapshotPolicy',
      encrypted: 'Encrypted',
      expiredTime: 'ExpiredTime',
      IOPS: 'IOPS',
      IOPSRead: 'IOPSRead',
      IOPSWrite: 'IOPSWrite',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      KMSKeyId: 'KMSKeyId',
      mountInstanceNum: 'MountInstanceNum',
      mountInstances: 'MountInstances',
      multiAttach: 'MultiAttach',
      operationLocks: 'OperationLocks',
      performanceLevel: 'PerformanceLevel',
      placement: 'Placement',
      portable: 'Portable',
      productCode: 'ProductCode',
      provisionedIops: 'ProvisionedIops',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serialNumber: 'SerialNumber',
      size: 'Size',
      sourceDiskId: 'SourceDiskId',
      sourceSnapshotId: 'SourceSnapshotId',
      status: 'Status',
      storageClusterId: 'StorageClusterId',
      storageSetId: 'StorageSetId',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      tags: 'Tags',
      throughput: 'Throughput',
      throughputRead: 'ThroughputRead',
      throughputWrite: 'ThroughputWrite',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedTime: 'string',
      attachments: DescribeDisksResponseBodyDisksDiskAttachments,
      autoSnapshotPolicyId: 'string',
      bdfId: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      creationTime: 'string',
      deleteAutoSnapshot: 'boolean',
      deleteWithInstance: 'boolean',
      description: 'string',
      detachedTime: 'string',
      device: 'string',
      diskChargeType: 'string',
      diskId: 'string',
      diskName: 'string',
      enableAutoSnapshot: 'boolean',
      enableAutomatedSnapshotPolicy: 'boolean',
      encrypted: 'boolean',
      expiredTime: 'string',
      IOPS: 'number',
      IOPSRead: 'number',
      IOPSWrite: 'number',
      imageId: 'string',
      instanceId: 'string',
      KMSKeyId: 'string',
      mountInstanceNum: 'number',
      mountInstances: DescribeDisksResponseBodyDisksDiskMountInstances,
      multiAttach: 'string',
      operationLocks: DescribeDisksResponseBodyDisksDiskOperationLocks,
      performanceLevel: 'string',
      placement: DescribeDisksResponseBodyDisksDiskPlacement,
      portable: 'boolean',
      productCode: 'string',
      provisionedIops: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      serialNumber: 'string',
      size: 'number',
      sourceDiskId: 'string',
      sourceSnapshotId: 'string',
      status: 'string',
      storageClusterId: 'string',
      storageSetId: 'string',
      storageSetPartitionNumber: 'number',
      tags: DescribeDisksResponseBodyDisksDiskTags,
      throughput: 'number',
      throughputRead: 'number',
      throughputWrite: 'number',
      type: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.attachments && typeof (this.attachments as any).validate === 'function') {
      (this.attachments as any).validate();
    }
    if(this.mountInstances && typeof (this.mountInstances as any).validate === 'function') {
      (this.mountInstances as any).validate();
    }
    if(this.operationLocks && typeof (this.operationLocks as any).validate === 'function') {
      (this.operationLocks as any).validate();
    }
    if(this.placement && typeof (this.placement as any).validate === 'function') {
      (this.placement as any).validate();
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

export class DescribeDisksResponseBodyDisks extends $dara.Model {
  disk?: DescribeDisksResponseBodyDisksDisk[];
  static names(): { [key: string]: string } {
    return {
      disk: 'Disk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDisk },
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

export class DescribeDisksResponseBody extends $dara.Model {
  disks?: DescribeDisksResponseBodyDisks;
  /**
   * @remarks
   * The returned pagination token which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use `NextToken` and `MaxResults` for a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use `NextToken` and `MaxResults` for a paged query.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * > When using the `MaxResults` and `NextToken` parameters for a paginated query, the returned `TotalCount` parameter value is invalid.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      disks: 'Disks',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disks: DescribeDisksResponseBodyDisks,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.disks && typeof (this.disks as any).validate === 'function') {
      (this.disks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

