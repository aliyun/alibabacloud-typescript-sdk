// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIncrementBackupListResponseBodyItemsIncrementBackupFile extends $dara.Model {
  backupSetExpiredTime?: number;
  backupSetId?: string;
  backupSetJobId?: string;
  backupSize?: number;
  backupStatus?: string;
  endTime?: number;
  /**
   * @example
   * 127.0.0.1
   */
  sourceEndpointHost?: string;
  /**
   * @example
   * rm-testxx
   */
  sourceEndpointInstanceId?: string;
  /**
   * @example
   * rds
   */
  sourceEndpointInstanceType?: string;
  sourceEndpointIpPort?: string;
  /**
   * @example
   * 3306
   */
  sourceEndpointPort?: string;
  /**
   * @example
   * cn-beijing
   */
  sourceEndpointRegion?: string;
  startTime?: number;
  storageMethod?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetExpiredTime: 'BackupSetExpiredTime',
      backupSetId: 'BackupSetId',
      backupSetJobId: 'BackupSetJobId',
      backupSize: 'BackupSize',
      backupStatus: 'BackupStatus',
      endTime: 'EndTime',
      sourceEndpointHost: 'SourceEndpointHost',
      sourceEndpointInstanceId: 'SourceEndpointInstanceId',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointIpPort: 'SourceEndpointIpPort',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
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
      sourceEndpointHost: 'string',
      sourceEndpointInstanceId: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointIpPort: 'string',
      sourceEndpointPort: 'string',
      sourceEndpointRegion: 'string',
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
  items?: DescribeIncrementBackupListResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 0
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5D52069-E8AA-5056-8C5C-654C3610****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
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
   * The total number of pages.
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

