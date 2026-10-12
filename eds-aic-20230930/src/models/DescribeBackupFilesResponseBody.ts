// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupFilesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * Test cloud phone
   */
  androidInstanceName?: string;
  /**
   * @remarks
   * Specifies whether the backup is a full-device backup.
   * 
   * @example
   * false
   */
  backupAll?: boolean;
  /**
   * @remarks
   * The ID of the backup file.
   * 
   * @example
   * bf-b0qbg3pbpjkn7****
   */
  backupFileId?: string;
  /**
   * @remarks
   * The name of the backup file.
   * 
   * @example
   * a-58ftsoo90p0qa****.ab
   */
  backupFileName?: string;
  /**
   * @remarks
   * The directory where the backup file is saved.
   * 
   * @example
   * oss://cloudphone-saved-bucket-cn-shanghai/backup/aic-58ftsoo90p0qa****.ab
   */
  backupFilePath?: string;
  /**
   * @remarks
   * The order source. A value of CLOUDPHONE indicates AI cloud phone.
   * 
   * @example
   * CLOUDPHONE
   */
  channel?: string;
  /**
   * @remarks
   * The description of the backup file.
   * 
   * @example
   * This is a backup file for the /data/media directory
   */
  description?: string;
  /**
   * @remarks
   * The owner of the backup file.
   * 
   * @example
   * test
   */
  endUserId?: string;
  /**
   * @remarks
   * The total size of the source backup files.
   * 
   * @example
   * 10227168
   */
  fileSize?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-05-15 17:33:59
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-05-15 17:33:59
   */
  gmtModified?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ag-58ftsoo90p0qi****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of package names of the backed-up applications.
   */
  sourceAppInfoList?: string[];
  /**
   * @remarks
   * The list of directories of the source backup files.
   */
  sourceFilePathList?: string[];
  /**
   * @remarks
   * The status of the backup file.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The Android system version.
   * 
   * @example
   * Android 11
   */
  systemVersion?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * t-bp67acfmxazb4p****
   */
  taskId?: string;
  /**
   * @remarks
   * The domain name of the upload endpoint.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * The backup type.
   * 
   * @example
   * OSS
   */
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      androidInstanceName: 'AndroidInstanceName',
      backupAll: 'BackupAll',
      backupFileId: 'BackupFileId',
      backupFileName: 'BackupFileName',
      backupFilePath: 'BackupFilePath',
      channel: 'Channel',
      description: 'Description',
      endUserId: 'EndUserId',
      fileSize: 'FileSize',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      instanceGroupId: 'InstanceGroupId',
      regionId: 'RegionId',
      sourceAppInfoList: 'SourceAppInfoList',
      sourceFilePathList: 'SourceFilePathList',
      status: 'Status',
      systemVersion: 'SystemVersion',
      taskId: 'TaskId',
      uploadEndpoint: 'UploadEndpoint',
      uploadType: 'UploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      androidInstanceName: 'string',
      backupAll: 'boolean',
      backupFileId: 'string',
      backupFileName: 'string',
      backupFilePath: 'string',
      channel: 'string',
      description: 'string',
      endUserId: 'string',
      fileSize: 'number',
      gmtCreated: 'string',
      gmtModified: 'string',
      instanceGroupId: 'string',
      regionId: 'string',
      sourceAppInfoList: { 'type': 'array', 'itemType': 'string' },
      sourceFilePathList: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      systemVersion: 'string',
      taskId: 'string',
      uploadEndpoint: 'string',
      uploadType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceAppInfoList)) {
      $dara.Model.validateArray(this.sourceAppInfoList);
    }
    if(Array.isArray(this.sourceFilePathList)) {
      $dara.Model.validateArray(this.sourceFilePathList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned result objects.
   */
  data?: DescribeBackupFilesResponseBodyData[];
  /**
   * @remarks
   * The maximum number of entries returned in this query.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * The token that specifies the position from which the next query starts. An empty value indicates that all data has been read.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique ID of the request. If you encounter any issues, provide this request ID to the technical support team for troubleshooting.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 91
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeBackupFilesResponseBodyData },
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

