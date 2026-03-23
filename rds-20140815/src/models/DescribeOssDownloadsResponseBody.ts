// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssDownloadsResponseBodyItemsOssDownload extends $dara.Model {
  backupMode?: string;
  createTime?: string;
  description?: string;
  endTime?: string;
  fileName?: string;
  fileSize?: string;
  isAvailable?: string;
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
  DBInstanceId?: string;
  items?: DescribeOssDownloadsResponseBodyItems;
  migrateTaskId?: string;
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

