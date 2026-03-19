// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreTaskListResponseBodyItemsRestoreTaskDetail extends $dara.Model {
  backupGatewayId?: number;
  /**
   * @example
   * TESTGATEWAY
   */
  backupGatewayIdentifier?: string;
  backupPlanId?: string;
  backupSetId?: string;
  /**
   * @example
   * cn-beijing
   */
  backupSourceOssRegion?: string;
  continuousRestoreProgress?: number;
  crossAliyunId?: string;
  crossRoleName?: string;
  destinationEndpointDatabaseName?: string;
  /**
   * @example
   * true
   */
  destinationEndpointEnableSsl?: string;
  /**
   * @example
   * 127.0.0.1
   */
  destinationEndpointHost?: string;
  destinationEndpointInstanceID?: string;
  destinationEndpointInstanceType?: string;
  destinationEndpointIpPort?: string;
  destinationEndpointOracleSID?: string;
  /**
   * @example
   * 3306
   */
  destinationEndpointPort?: string;
  destinationEndpointRegion?: string;
  destinationEndpointUserName?: string;
  errMessage?: string;
  fullDataRestoreProgress?: number;
  fullStruAfterRestoreProgress?: number;
  fullStruforeRestoreProgress?: number;
  physicalBackupRecoverProgress?: number;
  physicalDatabaseOnlineProgress?: number;
  physicalFullAndIncrementBackupRecoverProgress?: number;
  physicalFullBackupRecoverProgress?: number;
  physicalIncrementBackupRecoverProgress?: number;
  /**
   * @example
   * EXIST_INSTANCE
   */
  restoreDestinationMode?: string;
  restoreDir?: string;
  restoreObjects?: string;
  restoreStatus?: string;
  restoreTaskCreateTime?: number;
  restoreTaskFinishTime?: number;
  restoreTaskId?: string;
  restoreTaskName?: string;
  restoreTime?: number;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      backupGatewayIdentifier: 'BackupGatewayIdentifier',
      backupPlanId: 'BackupPlanId',
      backupSetId: 'BackupSetId',
      backupSourceOssRegion: 'BackupSourceOssRegion',
      continuousRestoreProgress: 'ContinuousRestoreProgress',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      destinationEndpointDatabaseName: 'DestinationEndpointDatabaseName',
      destinationEndpointEnableSsl: 'DestinationEndpointEnableSsl',
      destinationEndpointHost: 'DestinationEndpointHost',
      destinationEndpointInstanceID: 'DestinationEndpointInstanceID',
      destinationEndpointInstanceType: 'DestinationEndpointInstanceType',
      destinationEndpointIpPort: 'DestinationEndpointIpPort',
      destinationEndpointOracleSID: 'DestinationEndpointOracleSID',
      destinationEndpointPort: 'DestinationEndpointPort',
      destinationEndpointRegion: 'DestinationEndpointRegion',
      destinationEndpointUserName: 'DestinationEndpointUserName',
      errMessage: 'ErrMessage',
      fullDataRestoreProgress: 'FullDataRestoreProgress',
      fullStruAfterRestoreProgress: 'FullStruAfterRestoreProgress',
      fullStruforeRestoreProgress: 'FullStruforeRestoreProgress',
      physicalBackupRecoverProgress: 'PhysicalBackupRecoverProgress',
      physicalDatabaseOnlineProgress: 'PhysicalDatabaseOnlineProgress',
      physicalFullAndIncrementBackupRecoverProgress: 'PhysicalFullAndIncrementBackupRecoverProgress',
      physicalFullBackupRecoverProgress: 'PhysicalFullBackupRecoverProgress',
      physicalIncrementBackupRecoverProgress: 'PhysicalIncrementBackupRecoverProgress',
      restoreDestinationMode: 'RestoreDestinationMode',
      restoreDir: 'RestoreDir',
      restoreObjects: 'RestoreObjects',
      restoreStatus: 'RestoreStatus',
      restoreTaskCreateTime: 'RestoreTaskCreateTime',
      restoreTaskFinishTime: 'RestoreTaskFinishTime',
      restoreTaskId: 'RestoreTaskId',
      restoreTaskName: 'RestoreTaskName',
      restoreTime: 'RestoreTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      backupGatewayIdentifier: 'string',
      backupPlanId: 'string',
      backupSetId: 'string',
      backupSourceOssRegion: 'string',
      continuousRestoreProgress: 'number',
      crossAliyunId: 'string',
      crossRoleName: 'string',
      destinationEndpointDatabaseName: 'string',
      destinationEndpointEnableSsl: 'string',
      destinationEndpointHost: 'string',
      destinationEndpointInstanceID: 'string',
      destinationEndpointInstanceType: 'string',
      destinationEndpointIpPort: 'string',
      destinationEndpointOracleSID: 'string',
      destinationEndpointPort: 'string',
      destinationEndpointRegion: 'string',
      destinationEndpointUserName: 'string',
      errMessage: 'string',
      fullDataRestoreProgress: 'number',
      fullStruAfterRestoreProgress: 'number',
      fullStruforeRestoreProgress: 'number',
      physicalBackupRecoverProgress: 'number',
      physicalDatabaseOnlineProgress: 'number',
      physicalFullAndIncrementBackupRecoverProgress: 'number',
      physicalFullBackupRecoverProgress: 'number',
      physicalIncrementBackupRecoverProgress: 'number',
      restoreDestinationMode: 'string',
      restoreDir: 'string',
      restoreObjects: 'string',
      restoreStatus: 'string',
      restoreTaskCreateTime: 'number',
      restoreTaskFinishTime: 'number',
      restoreTaskId: 'string',
      restoreTaskName: 'string',
      restoreTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTaskListResponseBodyItems extends $dara.Model {
  restoreTaskDetail?: DescribeRestoreTaskListResponseBodyItemsRestoreTaskDetail[];
  static names(): { [key: string]: string } {
    return {
      restoreTaskDetail: 'RestoreTaskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreTaskDetail: { 'type': 'array', 'itemType': DescribeRestoreTaskListResponseBodyItemsRestoreTaskDetail },
    };
  }

  validate() {
    if(Array.isArray(this.restoreTaskDetail)) {
      $dara.Model.validateArray(this.restoreTaskDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTaskListResponseBody extends $dara.Model {
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
  items?: DescribeRestoreTaskListResponseBodyItems;
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
   * The number of entries returned per page.
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
   * 9C397502-B4F2-4E22-AD97-C81F0049F3F3
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of restore jobs.
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
      items: DescribeRestoreTaskListResponseBodyItems,
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

