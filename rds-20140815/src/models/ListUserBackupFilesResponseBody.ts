// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserBackupFilesResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The user backup ID.
   * 
   * @example
   * b-kwwvr7v8t7of****
   */
  backupId?: string;
  /**
   * @remarks
   * The binary log file information in the backup file. This parameter is returned if incremental data exists during the backup process.
   * 
   * @example
   * {\\"binlogPosition\\":\\"154\\",\\"binlogFile\\":\\"0.000002\\"}
   */
  binlogInfo?: string;
  /**
   * @remarks
   * The comment of the user backup.
   * 
   * @example
   * BackupTest
   */
  comment?: string;
  /**
   * @remarks
   * The time when the user backup import started. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1623231084000
   */
  creationTime?: string;
  /**
   * @remarks
   * The database engine.
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
   * The time when the user backup was successfully imported. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1623231750000
   */
  finishTime?: string;
  /**
   * @remarks
   * The time when the user backup import was completed. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1623231750000
   */
  modificationTime?: string;
  /**
   * @remarks
   * The name of the OSS bucket in which the user backup file is stored.
   * 
   * @example
   * BackupTest
   */
  ossBucket?: string;
  /**
   * @remarks
   * The metadata of the user backup file. For more information, see [Manage object metadata](https://help.aliyun.com/document_detail/31859.html).
   * 
   * @example
   * {\\"Accept-Ranges\\":\\"bytes\\",\\"Connection\\":\\"keep-alive\\",\\"Content-Length\\":81014337,\\"Content-Type\\":\\"application/octet-stream\\",\\"Date\\":1623309548000,\\"ETag\\":\\"889FE9E5FCEBFE4781829488A352863B-1\\",\\"Last-Modified\\":1622186844000,\\"Server\\":\\"AliyunOSS\\",\\"x-oss-hash-crc64ecma\\":\\"5793608435727323129\\",\\"x-oss-object-type\\":\\"Multipart\\",\\"x-oss-request-id\\":\\"60C1BCEC92572F37318BD499\\",\\"x-oss-server-time\\":\\"166\\",\\"x-oss-storage-class\\":\\"Standard\\"}
   */
  ossFileMetaData?: string;
  /**
   * @remarks
   * The name of the user backup file in OSS.
   * 
   * @example
   * backup_qp.xb
   */
  ossFileName?: string;
  /**
   * @remarks
   * The path of the user backup file in OSS.
   * 
   * @example
   * test/backup_qp.xb
   */
  ossFilePath?: string;
  /**
   * @remarks
   * The size of the user backup file in OSS. Unit: KB.
   * 
   * @example
   * 79115
   */
  ossFileSize?: number;
  /**
   * @remarks
   * The OSS download URL of the user backup file.
   * 
   * @example
   * https://****.oss-ap-****.aliyuncs.com/backup_qp.xb
   */
  ossUrl?: string;
  /**
   * @remarks
   * The reason why the user backup file failed to be imported.
   * 
   * @example
   * success
   */
  reason?: string;
  /**
   * @remarks
   * The storage space required to restore the user backup. Unit: GB.
   * 
   * @example
   * 20
   */
  restoreSize?: string;
  /**
   * @remarks
   * The retention period of the user backup file. Unit: days.
   * 
   * @example
   * 3
   */
  retention?: number;
  /**
   * @remarks
   * The status of the user backup file. Valid values:
   * * **Importing**: The backup is being imported.
   * * **Failed**: The import failed.
   * * **CheckSuccess**: The verification passed.
   * * **BackupSuccess**: The import succeeded.
   * * **Deleted**: The backup is deleted.
   * 
   * @example
   * BackupSuccess
   */
  status?: string;
  /**
   * @remarks
   * The zone ID of the user backup.
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
   * The list of user backup file details.
   */
  records?: ListUserBackupFilesResponseBodyRecords[];
  /**
   * @remarks
   * The request ID.
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

