// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupFilesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
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
   * defaultInstanceName
   */
  androidInstanceName?: string;
  /**
   * @remarks
   * Indicates whether the whole instance is backed up.
   * 
   * @example
   * true
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
   * The directory in which the backup file is stored.
   * 
   * @example
   * oss://cloudphone-saved-bucket-cn-shanghai/backup/aic-58ftsoo90p0qa****.ab
   */
  backupFilePath?: string;
  /**
   * @remarks
   * The description of the backup file.
   * 
   * @example
   * This is default description.
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
   * The total size of the source files.
   * 
   * @example
   * 10227168
   */
  fileSize?: number;
  /**
   * @remarks
   * The time when the backup file was created.
   * 
   * @example
   * 2024-05-15 17:33:59
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the backup file was last updated.
   * 
   * @example
   * 2024-05-15 17:33:59
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the instance group.
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
   * The names of the application packages that are backed up.
   */
  sourceAppInfoList?: string[];
  /**
   * @remarks
   * The directories of the source files.
   */
  sourceFilePathList?: string[];
  /**
   * @remarks
   * The status of the backup file.
   * 
   * Valid values:
   * 
   * *   AVAILABLE
   * *   RECOVERING
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-bp67acfmxazb4p****
   */
  taskId?: string;
  /**
   * @remarks
   * The endpoint of the OSS bucket that stores the backup file.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * The type of the backup.
   * 
   * Valid values:
   * 
   * *   OSS: backup files are stored in OSS buckets. .
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
   * The backup files that are returned.
   */
  data?: DescribeBackupFilesResponseBodyData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request. If the request fails, provide this ID to technical support to assist in diagnosing the issue.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

