// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFullBackupListResponseBodyItemsFullBackupFile extends $dara.Model {
  /**
   * @example
   * TESTGATEWAY
   */
  backupGatewayIdentifier?: string;
  backupObjects?: string;
  backupSetExpiredTime?: number;
  backupSetId?: string;
  backupSize?: number;
  backupStatus?: string;
  createTime?: number;
  /**
   * @example
   * 2xxx7778xxxxxxxxxx
   */
  crossAliyunId?: string;
  /**
   * @example
   * ram-for-dbs
   */
  crossRoleName?: string;
  endTime?: number;
  errMessage?: string;
  finishTime?: number;
  /**
   * @example
   * 100
   */
  logicalFullBackupProgress?: number;
  /**
   * @example
   * 100
   */
  logicalStructureBackupProgress?: number;
  /**
   * @example
   * true
   */
  sourceEndpointEnableSsl?: string;
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
  /**
   * @example
   * dbs_backup
   */
  sourceEndpointUserName?: string;
  startTime?: number;
  /**
   * @example
   * encrypted
   */
  storageEncryptMethod?: string;
  storageMethod?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayIdentifier: 'BackupGatewayIdentifier',
      backupObjects: 'BackupObjects',
      backupSetExpiredTime: 'BackupSetExpiredTime',
      backupSetId: 'BackupSetId',
      backupSize: 'BackupSize',
      backupStatus: 'BackupStatus',
      createTime: 'CreateTime',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      endTime: 'EndTime',
      errMessage: 'ErrMessage',
      finishTime: 'FinishTime',
      logicalFullBackupProgress: 'LogicalFullBackupProgress',
      logicalStructureBackupProgress: 'LogicalStructureBackupProgress',
      sourceEndpointEnableSsl: 'SourceEndpointEnableSsl',
      sourceEndpointHost: 'SourceEndpointHost',
      sourceEndpointInstanceId: 'SourceEndpointInstanceId',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointIpPort: 'SourceEndpointIpPort',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointUserName: 'SourceEndpointUserName',
      startTime: 'StartTime',
      storageEncryptMethod: 'StorageEncryptMethod',
      storageMethod: 'StorageMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayIdentifier: 'string',
      backupObjects: 'string',
      backupSetExpiredTime: 'number',
      backupSetId: 'string',
      backupSize: 'number',
      backupStatus: 'string',
      createTime: 'number',
      crossAliyunId: 'string',
      crossRoleName: 'string',
      endTime: 'number',
      errMessage: 'string',
      finishTime: 'number',
      logicalFullBackupProgress: 'number',
      logicalStructureBackupProgress: 'number',
      sourceEndpointEnableSsl: 'string',
      sourceEndpointHost: 'string',
      sourceEndpointInstanceId: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointIpPort: 'string',
      sourceEndpointPort: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointUserName: 'string',
      startTime: 'number',
      storageEncryptMethod: 'string',
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
  items?: DescribeFullBackupListResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 636BC118-6080-4119-A6B5-C199CEC1037D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded. Valid values:
   * 
   * - **true**: The operation succeeded.
   * 
   * - **false**: The operation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of full backup jobs.
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

