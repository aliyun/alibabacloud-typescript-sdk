// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserBackupFilesResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The ID of the full backup file.
   * 
   * @example
   * b-kwwvr7v8t7of********
   */
  backupId?: string;
  /**
   * @remarks
   * The information about the binary log file that contains incremental data. If incremental data is generated during the full backup, this parameter is returned.
   * 
   * @example
   * {\\"binlogPosition\\":\\"154\\",\\"binlogFile\\":\\"0.000002\\"}
   */
  binlogInfo?: string;
  /**
   * @remarks
   * The description of the full backup file.
   * 
   * @example
   * BackupTest
   */
  comment?: string;
  /**
   * @remarks
   * The time when the system started to import the full backup file. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1623231084000
   */
  creationTime?: string;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * mysql
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the full backup file is successfully imported. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1623231750000
   */
  finishTime?: string;
  /**
   * @remarks
   * The time when the full backup file is successfully imported. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1623231750000
   */
  modificationTime?: string;
  /**
   * @remarks
   * The name of the OSS bucket in which the full backup file is stored as an object.
   * 
   * @example
   * BackupTest
   */
  ossBucket?: string;
  /**
   * @remarks
   * The metadata of the full backup file. For more information, see [Manage object metadata](https://help.aliyun.com/document_detail/31859.html).
   * 
   * @example
   * {\\"Accept-Ranges\\":\\"bytes\\",\\"Connection\\":\\"keep-alive\\",\\"Content-Length\\":81014337,\\"Content-Type\\":\\"application/octet-stream\\",\\"Date\\":1623309548000,\\"ETag\\":\\"889FE9E5FCEBFE4781829488A352863B-1\\",\\"Last-Modified\\":1622186844000,\\"Server\\":\\"AliyunOSS\\",\\"x-oss-hash-crc64ecma\\":\\"5793608435727323129\\",\\"x-oss-object-type\\":\\"Multipart\\",\\"x-oss-request-id\\":\\"60C1BCEC92572F37318BD499\\",\\"x-oss-server-time\\":\\"166\\",\\"x-oss-storage-class\\":\\"Standard\\"}
   */
  ossFileMetaData?: string;
  /**
   * @remarks
   * The name of the full backup file that is stored as an object in an OSS bucket.
   * 
   * @example
   * backup_qp.xb
   */
  ossFileName?: string;
  /**
   * @remarks
   * The path of the full backup file that is stored as an object in an OSS bucket.
   * 
   * @example
   * test/backup_qp.xb
   */
  ossFilePath?: string;
  /**
   * @remarks
   * The size of the full backup file that is stored as an object in an OSS bucket. Unit: KB.
   * 
   * @example
   * 79115
   */
  ossFileSize?: number;
  /**
   * @remarks
   * The URL to download the full backup file from the OSS bucket.
   * 
   * @example
   * https://******.oss-ap-********.aliyuncs.com/backup_qp.xb
   */
  ossUrl?: string;
  /**
   * @remarks
   * The reason why the full backup file failed to be imported.
   * 
   * @example
   * success
   */
  reason?: string;
  /**
   * @remarks
   * The amount of storage that is required to restore the data of the full backup file. Unit: GB.
   * 
   * @example
   * 20
   */
  restoreSize?: string;
  /**
   * @remarks
   * The retention period of the full backup file. Unit: days.
   * 
   * @example
   * 3
   */
  retention?: number;
  /**
   * @remarks
   * The status of the full backup file. Valid values:
   * 
   * *   **Importing**: The full backup file is being imported.
   * *   **Failed**: The full backup file fails to be imported.
   * *   **CheckSucccess**: The full backup file passes the check.
   * *   **BackupSuccess**: The full backup file is imported.
   * *   **Deleted**: The full backup file is deleted.
   * 
   * @example
   * BackupSuccess
   */
  status?: string;
  /**
   * @remarks
   * The zone ID of the full backup file.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      binlogInfo: 'BinlogInfo',
      comment: 'Comment',
      creationTime: 'CreationTime',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      finishTime: 'FinishTime',
      modificationTime: 'ModificationTime',
      ossBucket: 'OssBucket',
      ossFileMetaData: 'OssFileMetaData',
      ossFileName: 'OssFileName',
      ossFilePath: 'OssFilePath',
      ossFileSize: 'OssFileSize',
      ossUrl: 'OssUrl',
      reason: 'Reason',
      restoreSize: 'RestoreSize',
      retention: 'Retention',
      status: 'Status',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      binlogInfo: 'string',
      comment: 'string',
      creationTime: 'string',
      engine: 'string',
      engineVersion: 'string',
      finishTime: 'string',
      modificationTime: 'string',
      ossBucket: 'string',
      ossFileMetaData: 'string',
      ossFileName: 'string',
      ossFilePath: 'string',
      ossFileSize: 'number',
      ossUrl: 'string',
      reason: 'string',
      restoreSize: 'string',
      retention: 'number',
      status: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBackupFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the full backup files.
   */
  records?: ListUserBackupFilesResponseBodyRecords[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AD67C22F-64F3-4448-A9A8-D1606D242879
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': ListUserBackupFilesResponseBodyRecords },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

