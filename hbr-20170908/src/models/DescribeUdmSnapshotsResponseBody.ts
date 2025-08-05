// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUdmSnapshotsResponseBodySnapshotsDetail extends $dara.Model {
  /**
   * @remarks
   * The consistency level.
   * 
   * @example
   * CRASH
   */
  consistentLevel?: string;
  /**
   * @remarks
   * Indicates whether the system disk is included.
   * 
   * @example
   * true
   */
  containOsDisk?: boolean;
  /**
   * @remarks
   * The type of the source disk.
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * /dev/xvdb
   */
  diskDevName?: string;
  /**
   * @remarks
   * The mapping between the device and the recovery point ID.
   * 
   * @example
   * {
   *     "/dev/xvdb":"s-0000u7y6wm3v1e7hxh5a",					 
   *     "/dev/xvda":"s-0004bl6yr5pt89jjsv5a"
   * }
   */
  diskHbrSnapshotIdWithDeviceMap?: { [key: string]: any };
  /**
   * @remarks
   * The IDs of the disks that are backed up at the recovery point.
   */
  diskIdList?: string[];
  /**
   * @remarks
   * The reason for the downgrade.
   * 
   * @example
   * HBR.NoRamRoleBound
   */
  downgradeReason?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * iZbpxxxxxxxxxxxxxxxxe2Z
   */
  hostName?: string;
  /**
   * @remarks
   * The mapping between the instance ID and the disk ID.
   * 
   * @example
   * {
   *     "i-bp1dlp0keohh7ids4uo6":"d-bp1e6427vhd320hifvs",					 
   *     "i-bp1dlp0keohh7ids4uo6":"d-bp1e6427vhd320hifvd"
   * }
   */
  instanceIdWithDiskIdListMap?: { [key: string]: any };
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * swh-hbr
   */
  instanceName?: string;
  /**
   * @remarks
   * The specifications of the source instance.
   * 
   * @example
   * ecs.c6.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Indicates whether the backup is created by the instant clone feature.
   * 
   * @example
   * false
   */
  instantAccess?: boolean;
  /**
   * @remarks
   * The list of snapshot IDs, corresponding to DiskIdList.
   */
  nativeSnapshotIdList?: string[];
  /**
   * @remarks
   * The ID of the system disk.
   * 
   * @example
   * d-bp1e6427vhd320hifvc
   */
  osDiskId?: string;
  /**
   * @remarks
   * The name of the operating system.
   * 
   * @example
   * Debian 10.10 64-bit (UEFI)
   */
  osName?: string;
  /**
   * @remarks
   * The English name of the operating system.
   * 
   * @example
   * Debian  11.1 64 bit
   */
  osNameEn?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values: linux and windows.
   * 
   * @example
   * windows
   */
  osType?: string;
  /**
   * @remarks
   * The performance level of the source disk.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The system platform.
   * 
   * @example
   * CentOS
   */
  platform?: string;
  /**
   * @remarks
   * The ID of the snapshot group.
   * 
   * @example
   * ssg-uf6856txcaq31uj***
   */
  snapshotGroupId?: string;
  /**
   * @remarks
   * Indicates whether the disk is a system disk.
   * 
   * @example
   * true
   */
  systemDisk?: boolean;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * BNSHSVR42 IPGUARD
   */
  vmName?: string;
  static names(): { [key: string]: string } {
    return {
      consistentLevel: 'ConsistentLevel',
      containOsDisk: 'ContainOsDisk',
      diskCategory: 'DiskCategory',
      diskDevName: 'DiskDevName',
      diskHbrSnapshotIdWithDeviceMap: 'DiskHbrSnapshotIdWithDeviceMap',
      diskIdList: 'DiskIdList',
      downgradeReason: 'DowngradeReason',
      hostName: 'HostName',
      instanceIdWithDiskIdListMap: 'InstanceIdWithDiskIdListMap',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      instantAccess: 'InstantAccess',
      nativeSnapshotIdList: 'NativeSnapshotIdList',
      osDiskId: 'OsDiskId',
      osName: 'OsName',
      osNameEn: 'OsNameEn',
      osType: 'OsType',
      performanceLevel: 'PerformanceLevel',
      platform: 'Platform',
      snapshotGroupId: 'SnapshotGroupId',
      systemDisk: 'SystemDisk',
      vmName: 'VmName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentLevel: 'string',
      containOsDisk: 'boolean',
      diskCategory: 'string',
      diskDevName: 'string',
      diskHbrSnapshotIdWithDeviceMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      diskIdList: { 'type': 'array', 'itemType': 'string' },
      downgradeReason: 'string',
      hostName: 'string',
      instanceIdWithDiskIdListMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceName: 'string',
      instanceType: 'string',
      instantAccess: 'boolean',
      nativeSnapshotIdList: { 'type': 'array', 'itemType': 'string' },
      osDiskId: 'string',
      osName: 'string',
      osNameEn: 'string',
      osType: 'string',
      performanceLevel: 'string',
      platform: 'string',
      snapshotGroupId: 'string',
      systemDisk: 'boolean',
      vmName: 'string',
    };
  }

  validate() {
    if(this.diskHbrSnapshotIdWithDeviceMap) {
      $dara.Model.validateMap(this.diskHbrSnapshotIdWithDeviceMap);
    }
    if(Array.isArray(this.diskIdList)) {
      $dara.Model.validateArray(this.diskIdList);
    }
    if(this.instanceIdWithDiskIdListMap) {
      $dara.Model.validateMap(this.instanceIdWithDiskIdListMap);
    }
    if(Array.isArray(this.nativeSnapshotIdList)) {
      $dara.Model.validateArray(this.nativeSnapshotIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUdmSnapshotsResponseBodySnapshots extends $dara.Model {
  /**
   * @remarks
   * The size of the backup snapshot. Unit: bytes.
   * 
   * @example
   * 600
   */
  actualBytes?: string;
  /**
   * @remarks
   * The special retention type, which is valid only for special backups. Valid values:
   * 
   * *   **WEEKLY**: weekly backups
   * *   **MONTHLY**: monthly backups
   * *   **YEARLY**: yearly backups
   * 
   * @example
   * WEEKLY
   */
  advancedRetentionType?: string;
  /**
   * @remarks
   * The backup type. Valid value: **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * The total amount of data. Unit: bytes.
   * 
   * @example
   * 1000
   */
  bytesTotal?: number;
  /**
   * @remarks
   * Indicates whether the disk backup point can be deleted. This parameter is valid only if the value of SourceType is UDM_ECS_DISK.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  canBeDeleted?: boolean;
  /**
   * @remarks
   * The time when the backup snapshot was completed. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1646895666
   */
  completeTime?: number;
  /**
   * @remarks
   * The time when the backup snapshot was created.
   * 
   * @example
   * 1607436917
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the backup snapshot was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642496679
   */
  createdTime?: number;
  /**
   * @remarks
   * The snapshot details.
   */
  detail?: DescribeUdmSnapshotsResponseBodySnapshotsDetail;
  /**
   * @remarks
   * The ID of the cloud disk or local disk.
   * 
   * @example
   * d-2ze86h5fga5rfwxxa8ef
   */
  diskId?: string;
  /**
   * @remarks
   * The expiration time of the backup.
   * 
   * @example
   * 1640334062
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp1f0pe78dxizrsdcgxd
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the backup job.
   * 
   * @example
   * job-00030j3chkt******2
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the backup snapshot.
   * 
   * @example
   * s-00047mg17p26x*****b
   */
  nativeSnapshotId?: string;
  /**
   * @remarks
   * The snapshot information.
   * 
   * @example
   * {
   * 					"sourceDiskId":"d-bp17misjuy636t82v7b0",
   * 					"lastModifiedTime":"2022-03-09T11:35:12Z",
   * 					"snapshotSN":"64588-429372675-857161235",
   * 					"snapshotId":"s-bp1fbtwv3e6xr6wpe9e0",
   * 					"creationTime":"2022-03-09T11:31:12Z",
   * 					"snapshotType":"user",
   * 					"usage":"none",
   * 					"description":"",
   * 					"sourceStorageType":"disk",
   * 					"tags":[
   * 						{
   * 							"tagValue":"job-0007e0wqjl0imbrtkmnm",
   * 							"tagKey":"HBR JobId"
   * 						}
   * 					],
   * 					"productCode":"",
   * 					"encrypted":false,
   * 					"sourceDiskType":"system",
   * 					"retentionDays":30,
   * 					"snapshotName":"Created-from-HBR-job:job-0007e0wqjl0imbrtkmnm",
   * 					"kMSKeyId":"",
   * 					"progress":"100%",
   * 					"category":"standard",
   * 					"sourceDiskSize":"20",
   * 					"status":"accomplished"
   * 				}
   */
  nativeSnapshotInfo?: string;
  /**
   * @remarks
   * The hash value of the parent backup snapshot.
   * 
   * @example
   * f2fe..
   */
  parentSnapshotHash?: string;
  /**
   * @remarks
   * The prefix of the backup snapshot.
   * 
   * @example
   * example/
   */
  prefix?: string;
  /**
   * @remarks
   * The timestamp of the backup snapshot. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642496679
   */
  realSnapshotTime?: number;
  /**
   * @remarks
   * The retention period of the backup snapshot. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The hash value of the backup snapshot.
   * 
   * @example
   * f2fe...
   */
  snapshotHash?: string;
  /**
   * @remarks
   * The ID of the backup snapshot.
   * 
   * @example
   * s-00047mxg17p26*****b
   */
  snapshotId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **UDM_ECS**: ECS instance backup
   * *   **UDM_ECS_DISK**: disk backup subtask of ECS instance backup
   * *   **UDM_DISK**: disk backup
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  /**
   * @remarks
   * The time when the backup snapshot was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the backup job. Valid values:
   * 
   * *   **COMPLETE**: The backup job is completed.
   * *   **PARTIAL_COMPLETE**: The backup job is partially completed.
   * *   **FAILED**: The backup job has failed.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The time when the backup snapshot was updated. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642496679
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      advancedRetentionType: 'AdvancedRetentionType',
      backupType: 'BackupType',
      bytesTotal: 'BytesTotal',
      canBeDeleted: 'CanBeDeleted',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      createdTime: 'CreatedTime',
      detail: 'Detail',
      diskId: 'DiskId',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      nativeSnapshotId: 'NativeSnapshotId',
      nativeSnapshotInfo: 'NativeSnapshotInfo',
      parentSnapshotHash: 'ParentSnapshotHash',
      prefix: 'Prefix',
      realSnapshotTime: 'RealSnapshotTime',
      retention: 'Retention',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'string',
      advancedRetentionType: 'string',
      backupType: 'string',
      bytesTotal: 'number',
      canBeDeleted: 'boolean',
      completeTime: 'number',
      createTime: 'number',
      createdTime: 'number',
      detail: DescribeUdmSnapshotsResponseBodySnapshotsDetail,
      diskId: 'string',
      expireTime: 'number',
      instanceId: 'string',
      jobId: 'string',
      nativeSnapshotId: 'string',
      nativeSnapshotInfo: 'string',
      parentSnapshotHash: 'string',
      prefix: 'string',
      realSnapshotTime: 'number',
      retention: 'number',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      startTime: 'number',
      status: 'string',
      updatedTime: 'number',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUdmSnapshotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 51CDEECB-7001-51CC-94AC-2A0F2A4B71D2
   */
  requestId?: string;
  /**
   * @remarks
   * The details about snapshots.
   */
  snapshots?: DescribeUdmSnapshotsResponseBodySnapshots[];
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of backup snapshots.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': DescribeUdmSnapshotsResponseBodySnapshots },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

