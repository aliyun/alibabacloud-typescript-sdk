// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchHistoricalSnapshotsResponseBodySnapshotsSnapshotPaths extends $dara.Model {
  path?: string[];
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHistoricalSnapshotsResponseBodySnapshotsSnapshot extends $dara.Model {
  actualBytes?: number;
  actualItems?: number;
  archiveTime?: number;
  backupType?: string;
  bucket?: string;
  bytesDone?: number;
  bytesTotal?: number;
  clientId?: string;
  completeTime?: number;
  createTime?: number;
  createdTime?: number;
  errorFile?: string;
  exclude?: string;
  expireTime?: number;
  fileSystemId?: string;
  include?: string;
  instanceId?: string;
  instanceName?: string;
  itemsDone?: number;
  itemsTotal?: number;
  jobId?: string;
  parentSnapshotHash?: string;
  path?: string;
  paths?: SearchHistoricalSnapshotsResponseBodySnapshotsSnapshotPaths;
  prefix?: string;
  /**
   * @example
   * 42949672960
   */
  protectedDataSize?: number;
  rangeEnd?: number;
  rangeStart?: number;
  retention?: number;
  snapshotHash?: string;
  snapshotId?: string;
  sourceParentSnapshotHash?: string;
  sourceSnapshotHash?: string;
  sourceType?: string;
  startTime?: number;
  status?: string;
  storageClass?: string;
  tableName?: string;
  updatedTime?: number;
  useCommonNas?: boolean;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      actualItems: 'ActualItems',
      archiveTime: 'ArchiveTime',
      backupType: 'BackupType',
      bucket: 'Bucket',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
      clientId: 'ClientId',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      createdTime: 'CreatedTime',
      errorFile: 'ErrorFile',
      exclude: 'Exclude',
      expireTime: 'ExpireTime',
      fileSystemId: 'FileSystemId',
      include: 'Include',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      itemsDone: 'ItemsDone',
      itemsTotal: 'ItemsTotal',
      jobId: 'JobId',
      parentSnapshotHash: 'ParentSnapshotHash',
      path: 'Path',
      paths: 'Paths',
      prefix: 'Prefix',
      protectedDataSize: 'ProtectedDataSize',
      rangeEnd: 'RangeEnd',
      rangeStart: 'RangeStart',
      retention: 'Retention',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceParentSnapshotHash: 'SourceParentSnapshotHash',
      sourceSnapshotHash: 'SourceSnapshotHash',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      storageClass: 'StorageClass',
      tableName: 'TableName',
      updatedTime: 'UpdatedTime',
      useCommonNas: 'UseCommonNas',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      actualItems: 'number',
      archiveTime: 'number',
      backupType: 'string',
      bucket: 'string',
      bytesDone: 'number',
      bytesTotal: 'number',
      clientId: 'string',
      completeTime: 'number',
      createTime: 'number',
      createdTime: 'number',
      errorFile: 'string',
      exclude: 'string',
      expireTime: 'number',
      fileSystemId: 'string',
      include: 'string',
      instanceId: 'string',
      instanceName: 'string',
      itemsDone: 'number',
      itemsTotal: 'number',
      jobId: 'string',
      parentSnapshotHash: 'string',
      path: 'string',
      paths: SearchHistoricalSnapshotsResponseBodySnapshotsSnapshotPaths,
      prefix: 'string',
      protectedDataSize: 'number',
      rangeEnd: 'number',
      rangeStart: 'number',
      retention: 'number',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceParentSnapshotHash: 'string',
      sourceSnapshotHash: 'string',
      sourceType: 'string',
      startTime: 'number',
      status: 'string',
      storageClass: 'string',
      tableName: 'string',
      updatedTime: 'number',
      useCommonNas: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    if(this.paths && typeof (this.paths as any).validate === 'function') {
      (this.paths as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHistoricalSnapshotsResponseBodySnapshots extends $dara.Model {
  snapshot?: SearchHistoricalSnapshotsResponseBodySnapshotsSnapshot[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': SearchHistoricalSnapshotsResponseBodySnapshotsSnapshot },
    };
  }

  validate() {
    if(Array.isArray(this.snapshot)) {
      $dara.Model.validateArray(this.snapshot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHistoricalSnapshotsResponseBody extends $dara.Model {
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
   * The number of historical backup snapshots that are displayed on the current page.
   * 
   * @example
   * 10
   */
  limit?: number;
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
   * The token that is required to obtain the next page of backup snapshots.
   * 
   * @example
   * BE
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  snapshots?: SearchHistoricalSnapshotsResponseBodySnapshots;
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
   * The total number of returned backup snapshots that meet the specified conditions.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      limit: 'Limit',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      limit: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      snapshots: SearchHistoricalSnapshotsResponseBodySnapshots,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.snapshots && typeof (this.snapshots as any).validate === 'function') {
      (this.snapshots as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

