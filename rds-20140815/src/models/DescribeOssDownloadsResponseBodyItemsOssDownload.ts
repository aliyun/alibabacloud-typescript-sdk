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

