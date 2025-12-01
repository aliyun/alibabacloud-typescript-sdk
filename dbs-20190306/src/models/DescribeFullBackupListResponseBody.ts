// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFullBackupListResponseBodyItemsFullBackupFile extends $dara.Model {
  /**
   * @example
   * [{\\"DBName\\":\\"test\\"}]
   */
  backupObjects?: string;
  backupSetExpiredTime?: number;
  backupSetId?: string;
  backupSize?: number;
  /**
   * @example
   * finish
   */
  backupStatus?: string;
  createTime?: number;
  endTime?: number;
  /**
   * @example
   * NULL
   */
  errMessage?: string;
  finishTime?: number;
  sourceEndpointIpPort?: string;
  startTime?: number;
  /**
   * @example
   * Standard
   */
  storageMethod?: string;
  static names(): { [key: string]: string } {
    return {
      backupObjects: 'BackupObjects',
      backupSetExpiredTime: 'BackupSetExpiredTime',
      backupSetId: 'BackupSetId',
      backupSize: 'BackupSize',
      backupStatus: 'BackupStatus',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      errMessage: 'ErrMessage',
      finishTime: 'FinishTime',
      sourceEndpointIpPort: 'SourceEndpointIpPort',
      startTime: 'StartTime',
      storageMethod: 'StorageMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupObjects: 'string',
      backupSetExpiredTime: 'number',
      backupSetId: 'string',
      backupSize: 'number',
      backupStatus: 'string',
      createTime: 'number',
      endTime: 'number',
      errMessage: 'string',
      finishTime: 'number',
      sourceEndpointIpPort: 'string',
      startTime: 'number',
      storageMethod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullBackupListResponseBodyItems extends $dara.Model {
  fullBackupFile?: DescribeFullBackupListResponseBodyItemsFullBackupFile[];
  static names(): { [key: string]: string } {
    return {
      fullBackupFile: 'FullBackupFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullBackupFile: { 'type': 'array', 'itemType': DescribeFullBackupListResponseBodyItemsFullBackupFile },
    };
  }

  validate() {
    if(Array.isArray(this.fullBackupFile)) {
      $dara.Model.validateArray(this.fullBackupFile);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullBackupListResponseBody extends $dara.Model {
  /**
   * @example
   * Param.NotFound
   */
  errCode?: string;
  /**
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  items?: DescribeFullBackupListResponseBodyItems;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 636BC118-6080-4119-A6B5-C199CEC1037D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1
   */
  totalElements?: number;
  /**
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      items: DescribeFullBackupListResponseBodyItems,
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalElements: 'number',
      totalPages: 'number',
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

