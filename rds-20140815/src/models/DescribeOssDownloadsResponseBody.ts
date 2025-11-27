// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssDownloadsResponseBodyItemsOssDownload extends $dara.Model {
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * *   **Database**: full backup file
   * *   **Differential_Database**: incremental backup file
   * *   **Transaction_Log**: log backup file
   * 
   * @example
   * Database
   */
  backupMode?: string;
  /**
   * @remarks
   * The time when the backup file was created in the download list. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-08-17T12:45:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the backup file.
   * 
   * @example
   * App description
   */
  description?: string;
  /**
   * @remarks
   * The end of the time range during which data was queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-08-27T12:45:15Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the backup file stored in the Object Storage Service (OSS) bucket.
   * 
   * @example
   * test
   */
  fileName?: string;
  /**
   * @remarks
   * The size of the backup file. Unit: MB
   * 
   * @example
   * 2
   */
  fileSize?: string;
  /**
   * @remarks
   * Indicates whether the backup file is available. Valid values: **True and False**.
   * 
   * @example
   * True
   */
  isAvailable?: string;
  /**
   * @remarks
   * The state of the backup file. Valid values:
   * 
   * *   **NoStart**
   * *   **Downloading**
   * *   **Finished**
   * *   **DownloadFailed**
   * *   **VerifyFailed**
   * *   **Deleted**
   * *   **DeleteFailed**
   * *   **CheckSuccess**
   * *   **CheckFailed**
   * *   **Restoring**
   * *   **Restored**
   * *   **RestoreFailed**
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      backupMode: 'BackupMode',
      createTime: 'CreateTime',
      description: 'Description',
      endTime: 'EndTime',
      fileName: 'FileName',
      fileSize: 'FileSize',
      isAvailable: 'IsAvailable',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMode: 'string',
      createTime: 'string',
      description: 'string',
      endTime: 'string',
      fileName: 'string',
      fileSize: 'string',
      isAvailable: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssDownloadsResponseBodyItems extends $dara.Model {
  ossDownload?: DescribeOssDownloadsResponseBodyItemsOssDownload[];
  static names(): { [key: string]: string } {
    return {
      ossDownload: 'OssDownload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossDownload: { 'type': 'array', 'itemType': DescribeOssDownloadsResponseBodyItemsOssDownload },
    };
  }

  validate() {
    if(Array.isArray(this.ossDownload)) {
      $dara.Model.validateArray(this.ossDownload);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssDownloadsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Details of the backup file.
   */
  items?: DescribeOssDownloadsResponseBodyItems;
  /**
   * @remarks
   * The ID of the migration task.
   * 
   * @example
   * 562154852
   */
  migrateTaskId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5409D02-D661-4BF3-8F3D-0A814D0574E7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      items: 'Items',
      migrateTaskId: 'MigrateTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      items: DescribeOssDownloadsResponseBodyItems,
      migrateTaskId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

