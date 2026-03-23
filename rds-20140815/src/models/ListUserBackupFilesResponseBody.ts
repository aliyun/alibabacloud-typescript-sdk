// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserBackupFilesResponseBodyRecords extends $dara.Model {
  backupId?: string;
  binlogInfo?: string;
  comment?: string;
  creationTime?: string;
  engine?: string;
  engineVersion?: string;
  finishTime?: string;
  modificationTime?: string;
  ossBucket?: string;
  ossFileMetaData?: string;
  ossFileName?: string;
  ossFilePath?: string;
  ossFileSize?: number;
  ossUrl?: string;
  reason?: string;
  restoreSize?: string;
  retention?: number;
  status?: string;
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
  records?: ListUserBackupFilesResponseBodyRecords[];
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

