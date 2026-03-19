// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPlanListResponseBodyItemsBackupPlanDetail extends $dara.Model {
  backupGatewayId?: number;
  /**
   * @example
   * TESTGATEWAY
   */
  backupGatewayIdentifier?: string;
  backupMethod?: string;
  backupObjects?: string;
  backupPeriod?: string;
  backupPlanCreateTime?: number;
  backupPlanId?: string;
  backupPlanName?: string;
  /**
   * @example
   * cn-beijing
   */
  backupPlanRegion?: string;
  backupPlanStatus?: string;
  backupRetentionPeriod?: number;
  backupSetDownloadDir?: string;
  backupSetDownloadFullDataFormat?: string;
  backupSetDownloadGatewayId?: number;
  backupSetDownloadIncrementDataFormat?: string;
  backupSetDownloadTargetType?: string;
  backupStartTime?: string;
  backupStorageType?: string;
  beginTimestampForRestore?: number;
  crossAliyunId?: string;
  crossRoleName?: string;
  databaseType?: string;
  duplicationArchivePeriod?: number;
  duplicationInfrequentAccessPeriod?: number;
  enableBackupLog?: boolean;
  enableMysqlPhysicalBackupBinLog?: boolean;
  endTimestampForRestore?: number;
  errMessage?: string;
  /**
   * @example
   * 365
   */
  incrementBackupRetentionPeriod?: string;
  /**
   * @example
   * 365
   */
  incrementDuplicationArchivePeriod?: string;
  /**
   * @example
   * 365
   */
  incrementDuplicationInfrequentAccessPeriod?: string;
  /**
   * @example
   * PREPAY
   */
  instanceChargeType?: string;
  instanceClass?: string;
  /**
   * @example
   * 1764051253000
   */
  instanceExpiredTimestamp?: number;
  /**
   * @example
   * 365
   */
  logBackupRetentionPeriod?: string;
  /**
   * @example
   * 365
   */
  logDuplicationArchivePeriod?: string;
  /**
   * @example
   * 365
   */
  logDuplicationInfrequentAccessPeriod?: string;
  OSSBucketName?: string;
  OSSBucketRegion?: string;
  openBackupSetAutoDownload?: boolean;
  resourceGroupId?: string;
  sourceEndpointDatabaseName?: string;
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
  sourceEndpointInstanceID?: string;
  sourceEndpointInstanceType?: string;
  sourceEndpointIpPort?: string;
  sourceEndpointOracleSID?: string;
  /**
   * @example
   * 3306
   */
  sourceEndpointPort?: string;
  sourceEndpointRegion?: string;
  sourceEndpointUserName?: string;
  /**
   * @example
   * encrypted
   */
  storageEncryptMethod?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      backupGatewayIdentifier: 'BackupGatewayIdentifier',
      backupMethod: 'BackupMethod',
      backupObjects: 'BackupObjects',
      backupPeriod: 'BackupPeriod',
      backupPlanCreateTime: 'BackupPlanCreateTime',
      backupPlanId: 'BackupPlanId',
      backupPlanName: 'BackupPlanName',
      backupPlanRegion: 'BackupPlanRegion',
      backupPlanStatus: 'BackupPlanStatus',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupSetDownloadDir: 'BackupSetDownloadDir',
      backupSetDownloadFullDataFormat: 'BackupSetDownloadFullDataFormat',
      backupSetDownloadGatewayId: 'BackupSetDownloadGatewayId',
      backupSetDownloadIncrementDataFormat: 'BackupSetDownloadIncrementDataFormat',
      backupSetDownloadTargetType: 'BackupSetDownloadTargetType',
      backupStartTime: 'BackupStartTime',
      backupStorageType: 'BackupStorageType',
      beginTimestampForRestore: 'BeginTimestampForRestore',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      databaseType: 'DatabaseType',
      duplicationArchivePeriod: 'DuplicationArchivePeriod',
      duplicationInfrequentAccessPeriod: 'DuplicationInfrequentAccessPeriod',
      enableBackupLog: 'EnableBackupLog',
      enableMysqlPhysicalBackupBinLog: 'EnableMysqlPhysicalBackupBinLog',
      endTimestampForRestore: 'EndTimestampForRestore',
      errMessage: 'ErrMessage',
      incrementBackupRetentionPeriod: 'IncrementBackupRetentionPeriod',
      incrementDuplicationArchivePeriod: 'IncrementDuplicationArchivePeriod',
      incrementDuplicationInfrequentAccessPeriod: 'IncrementDuplicationInfrequentAccessPeriod',
      instanceChargeType: 'InstanceChargeType',
      instanceClass: 'InstanceClass',
      instanceExpiredTimestamp: 'InstanceExpiredTimestamp',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      logDuplicationArchivePeriod: 'LogDuplicationArchivePeriod',
      logDuplicationInfrequentAccessPeriod: 'LogDuplicationInfrequentAccessPeriod',
      OSSBucketName: 'OSSBucketName',
      OSSBucketRegion: 'OSSBucketRegion',
      openBackupSetAutoDownload: 'OpenBackupSetAutoDownload',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointEnableSsl: 'SourceEndpointEnableSsl',
      sourceEndpointHost: 'SourceEndpointHost',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointIpPort: 'SourceEndpointIpPort',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointUserName: 'SourceEndpointUserName',
      storageEncryptMethod: 'StorageEncryptMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      backupGatewayIdentifier: 'string',
      backupMethod: 'string',
      backupObjects: 'string',
      backupPeriod: 'string',
      backupPlanCreateTime: 'number',
      backupPlanId: 'string',
      backupPlanName: 'string',
      backupPlanRegion: 'string',
      backupPlanStatus: 'string',
      backupRetentionPeriod: 'number',
      backupSetDownloadDir: 'string',
      backupSetDownloadFullDataFormat: 'string',
      backupSetDownloadGatewayId: 'number',
      backupSetDownloadIncrementDataFormat: 'string',
      backupSetDownloadTargetType: 'string',
      backupStartTime: 'string',
      backupStorageType: 'string',
      beginTimestampForRestore: 'number',
      crossAliyunId: 'string',
      crossRoleName: 'string',
      databaseType: 'string',
      duplicationArchivePeriod: 'number',
      duplicationInfrequentAccessPeriod: 'number',
      enableBackupLog: 'boolean',
      enableMysqlPhysicalBackupBinLog: 'boolean',
      endTimestampForRestore: 'number',
      errMessage: 'string',
      incrementBackupRetentionPeriod: 'string',
      incrementDuplicationArchivePeriod: 'string',
      incrementDuplicationInfrequentAccessPeriod: 'string',
      instanceChargeType: 'string',
      instanceClass: 'string',
      instanceExpiredTimestamp: 'number',
      logBackupRetentionPeriod: 'string',
      logDuplicationArchivePeriod: 'string',
      logDuplicationInfrequentAccessPeriod: 'string',
      OSSBucketName: 'string',
      OSSBucketRegion: 'string',
      openBackupSetAutoDownload: 'boolean',
      resourceGroupId: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointEnableSsl: 'string',
      sourceEndpointHost: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointIpPort: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointPort: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointUserName: 'string',
      storageEncryptMethod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanListResponseBodyItems extends $dara.Model {
  backupPlanDetail?: DescribeBackupPlanListResponseBodyItemsBackupPlanDetail[];
  static names(): { [key: string]: string } {
    return {
      backupPlanDetail: 'BackupPlanDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanDetail: { 'type': 'array', 'itemType': DescribeBackupPlanListResponseBodyItemsBackupPlanDetail },
    };
  }

  validate() {
    if(Array.isArray(this.backupPlanDetail)) {
      $dara.Model.validateArray(this.backupPlanDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * InvalidParameterValid
   */
  errCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  items?: DescribeBackupPlanListResponseBodyItems;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of records per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 4F1888AC-1138-4995-B9FE-D2734F61C058
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of backup plans.
   * 
   * @example
   * 100
   */
  totalElements?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 4
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
      items: DescribeBackupPlanListResponseBodyItems,
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

