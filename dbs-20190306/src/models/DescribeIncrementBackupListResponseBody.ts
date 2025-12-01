// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIncrementBackupListResponseBodyItemsIncrementBackupFile extends $dara.Model {
  /**
   * @remarks
   * The point in time when the backup set expires.
   * 
   * @example
   * 1711506719000
   */
  backupSetExpiredTime?: number;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * mysql-bin.00****
   */
  backupSetId?: string;
  /**
   * @remarks
   * The ID of the incremental backup task.
   * 
   * @example
   * 1hv5g9wk4****
   */
  backupSetJobId?: string;
  /**
   * @remarks
   * The size of the backup set.
   * 
   * @example
   * 18535
   */
  backupSize?: number;
  /**
   * @remarks
   * The status of the incremental backup task. Valid values:
   * 
   * *   **INIT**: The incremental backup task is not started.
   * *   **FILLING**: The incremental backup task is in progress.
   * *   **COMPLETED**: The incremental backup task is complete.
   * *   **UNCOMPLETED**: The incremental backup task is not complete.
   * 
   * @example
   * FILLING
   */
  backupStatus?: string;
  /**
   * @remarks
   * The end time of the incremental backup task.
   * 
   * @example
   * 1648434713000
   */
  endTime?: number;
  /**
   * @remarks
   * The endpoint that is used to connect to the database.
   * 
   * @example
   * 172.1XX.103.1:4XXX
   */
  sourceEndpointIpPort?: string;
  /**
   * @remarks
   * The start time of the incremental backup task.
   * 
   * @example
   * 1648433764000
   */
  startTime?: number;
  /**
   * @remarks
   * The storage class of the backup data. Valid values:
   * 
   * *   **Standard**: The storage class is Standard.
   * *   **IA**: The storage class is Infrequent Access (IA).
   * *   **Archive**: The storage class is Archive.
   * *   **UNKNOWN**: The storage class is unknown. This value is returned because the task is not complete.
   * 
   * @example
   * Standard
   */
  storageMethod?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetExpiredTime: 'BackupSetExpiredTime',
      backupSetId: 'BackupSetId',
      backupSetJobId: 'BackupSetJobId',
      backupSize: 'BackupSize',
      backupStatus: 'BackupStatus',
      endTime: 'EndTime',
      sourceEndpointIpPort: 'SourceEndpointIpPort',
      startTime: 'StartTime',
      storageMethod: 'StorageMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetExpiredTime: 'number',
      backupSetId: 'string',
      backupSetJobId: 'string',
      backupSize: 'number',
      backupStatus: 'string',
      endTime: 'number',
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

export class DescribeIncrementBackupListResponseBodyItems extends $dara.Model {
  incrementBackupFile?: DescribeIncrementBackupListResponseBodyItemsIncrementBackupFile[];
  static names(): { [key: string]: string } {
    return {
      incrementBackupFile: 'IncrementBackupFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incrementBackupFile: { 'type': 'array', 'itemType': DescribeIncrementBackupListResponseBodyItemsIncrementBackupFile },
    };
  }

  validate() {
    if(Array.isArray(this.incrementBackupFile)) {
      $dara.Model.validateArray(this.incrementBackupFile);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIncrementBackupListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Param.NotFound
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of incremental backup tasks.
   */
  items?: DescribeIncrementBackupListResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 0
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A5D52069-E8AA-5056-8C5C-654C3610****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of incremental backup tasks.
   * 
   * @example
   * 1
   */
  totalElements?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
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
      items: DescribeIncrementBackupListResponseBodyItems,
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

