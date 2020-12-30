// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ConfigureBackupPlanRequest extends $tea.Model {
  backupPlanId?: string;
  sourceEndpointInstanceType?: string;
  sourceEndpointRegion?: string;
  sourceEndpointInstanceID?: string;
  sourceEndpointIP?: string;
  sourceEndpointPort?: number;
  sourceEndpointDatabaseName?: string;
  sourceEndpointUserName?: string;
  sourceEndpointPassword?: string;
  backupGatewayId?: number;
  OSSBucketName?: string;
  backupObjects?: string;
  backupPeriod?: string;
  backupStartTime?: string;
  enableBackupLog?: boolean;
  backupLogIntervalSeconds?: number;
  backupRetentionPeriod?: number;
  duplicationInfrequentAccessPeriod?: number;
  duplicationArchivePeriod?: number;
  backupPlanName?: string;
  sourceEndpointOracleSID?: string;
  backupStorageType?: string;
  backupSpeedLimit?: number;
  backupRateLimit?: number;
  backupStrategyType?: string;
  crossAliyunId?: string;
  crossRoleName?: string;
  autoStartBackup?: boolean;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointUserName: 'SourceEndpointUserName',
      sourceEndpointPassword: 'SourceEndpointPassword',
      backupGatewayId: 'BackupGatewayId',
      OSSBucketName: 'OSSBucketName',
      backupObjects: 'BackupObjects',
      backupPeriod: 'BackupPeriod',
      backupStartTime: 'BackupStartTime',
      enableBackupLog: 'EnableBackupLog',
      backupLogIntervalSeconds: 'BackupLogIntervalSeconds',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      duplicationInfrequentAccessPeriod: 'DuplicationInfrequentAccessPeriod',
      duplicationArchivePeriod: 'DuplicationArchivePeriod',
      backupPlanName: 'BackupPlanName',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      backupStorageType: 'BackupStorageType',
      backupSpeedLimit: 'BackupSpeedLimit',
      backupRateLimit: 'BackupRateLimit',
      backupStrategyType: 'BackupStrategyType',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      autoStartBackup: 'AutoStartBackup',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointPort: 'number',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointUserName: 'string',
      sourceEndpointPassword: 'string',
      backupGatewayId: 'number',
      OSSBucketName: 'string',
      backupObjects: 'string',
      backupPeriod: 'string',
      backupStartTime: 'string',
      enableBackupLog: 'boolean',
      backupLogIntervalSeconds: 'number',
      backupRetentionPeriod: 'number',
      duplicationInfrequentAccessPeriod: 'number',
      duplicationArchivePeriod: 'number',
      backupPlanName: 'string',
      sourceEndpointOracleSID: 'string',
      backupStorageType: 'string',
      backupSpeedLimit: 'number',
      backupRateLimit: 'number',
      backupStrategyType: 'string',
      crossAliyunId: 'string',
      crossRoleName: 'string',
      autoStartBackup: 'boolean',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureBackupPlanResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  backupPlanId?: string;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      backupPlanId: 'BackupPlanId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      backupPlanId: 'string',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigureBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigureBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanRequest extends $tea.Model {
  region?: string;
  instanceClass?: string;
  databaseType?: string;
  backupMethod?: string;
  period?: string;
  usedTime?: number;
  payType?: string;
  databaseRegion?: string;
  storageRegion?: string;
  instanceType?: string;
  storageType?: string;
  fromApp?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      instanceClass: 'InstanceClass',
      databaseType: 'DatabaseType',
      backupMethod: 'BackupMethod',
      period: 'Period',
      usedTime: 'UsedTime',
      payType: 'PayType',
      databaseRegion: 'DatabaseRegion',
      storageRegion: 'StorageRegion',
      instanceType: 'InstanceType',
      storageType: 'StorageType',
      fromApp: 'FromApp',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      instanceClass: 'string',
      databaseType: 'string',
      backupMethod: 'string',
      period: 'string',
      usedTime: 'number',
      payType: 'string',
      databaseRegion: 'string',
      storageRegion: 'string',
      instanceType: 'string',
      storageType: 'string',
      fromApp: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  backupPlanId?: string;
  errMessage?: string;
  orderId?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      backupPlanId: 'BackupPlanId',
      errMessage: 'ErrMessage',
      orderId: 'OrderId',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      backupPlanId: 'string',
      errMessage: 'string',
      orderId: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFullBackupSetDownloadRequest extends $tea.Model {
  backupSetId?: string;
  backupSetDataFormat?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      backupSetDataFormat: 'BackupSetDataFormat',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      backupSetDataFormat: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFullBackupSetDownloadResponseBody extends $tea.Model {
  requestId?: string;
  backupSetDownloadTaskId?: string;
  httpStatusCode?: number;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      backupSetDownloadTaskId: 'BackupSetDownloadTaskId',
      httpStatusCode: 'HttpStatusCode',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      backupSetDownloadTaskId: 'string',
      httpStatusCode: 'number',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFullBackupSetDownloadResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFullBackupSetDownloadResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFullBackupSetDownloadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGetDBListFromAgentTaskRequest extends $tea.Model {
  backupGatewayId?: number;
  databaseType?: string;
  sourceEndpointRegion?: string;
  sourceEndpointIP?: string;
  sourceEndpointPort?: number;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      databaseType: 'DatabaseType',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointPort: 'SourceEndpointPort',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      databaseType: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointPort: 'number',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGetDBListFromAgentTaskResponseBody extends $tea.Model {
  taskId?: number;
  requestId?: string;
  httpStatusCode?: number;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      requestId: 'string',
      httpStatusCode: 'number',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGetDBListFromAgentTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGetDBListFromAgentTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGetDBListFromAgentTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIncrementBackupSetDownloadRequest extends $tea.Model {
  backupSetId?: string;
  backupSetName?: string;
  backupSetDataFormat?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      backupSetName: 'BackupSetName',
      backupSetDataFormat: 'BackupSetDataFormat',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      backupSetName: 'string',
      backupSetDataFormat: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIncrementBackupSetDownloadResponseBody extends $tea.Model {
  requestId?: string;
  backupSetDownloadTaskId?: string;
  httpStatusCode?: number;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      backupSetDownloadTaskId: 'BackupSetDownloadTaskId',
      httpStatusCode: 'HttpStatusCode',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      backupSetDownloadTaskId: 'string',
      httpStatusCode: 'number',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIncrementBackupSetDownloadResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIncrementBackupSetDownloadResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIncrementBackupSetDownloadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestoreTaskRequest extends $tea.Model {
  backupPlanId?: string;
  destinationEndpointInstanceType?: string;
  destinationEndpointRegion?: string;
  destinationEndpointInstanceID?: string;
  destinationEndpointIP?: string;
  destinationEndpointPort?: number;
  destinationEndpointDatabaseName?: string;
  destinationEndpointUserName?: string;
  destinationEndpointPassword?: string;
  backupGatewayId?: number;
  restoreObjects?: string;
  restoreTime?: number;
  backupSetId?: string;
  restoreTaskName?: string;
  destinationEndpointOracleSID?: string;
  restoreDir?: string;
  restoreHome?: string;
  duplicateConflict?: string;
  crossAliyunId?: string;
  crossRoleName?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      destinationEndpointInstanceType: 'DestinationEndpointInstanceType',
      destinationEndpointRegion: 'DestinationEndpointRegion',
      destinationEndpointInstanceID: 'DestinationEndpointInstanceID',
      destinationEndpointIP: 'DestinationEndpointIP',
      destinationEndpointPort: 'DestinationEndpointPort',
      destinationEndpointDatabaseName: 'DestinationEndpointDatabaseName',
      destinationEndpointUserName: 'DestinationEndpointUserName',
      destinationEndpointPassword: 'DestinationEndpointPassword',
      backupGatewayId: 'BackupGatewayId',
      restoreObjects: 'RestoreObjects',
      restoreTime: 'RestoreTime',
      backupSetId: 'BackupSetId',
      restoreTaskName: 'RestoreTaskName',
      destinationEndpointOracleSID: 'DestinationEndpointOracleSID',
      restoreDir: 'RestoreDir',
      restoreHome: 'RestoreHome',
      duplicateConflict: 'DuplicateConflict',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      destinationEndpointInstanceType: 'string',
      destinationEndpointRegion: 'string',
      destinationEndpointInstanceID: 'string',
      destinationEndpointIP: 'string',
      destinationEndpointPort: 'number',
      destinationEndpointDatabaseName: 'string',
      destinationEndpointUserName: 'string',
      destinationEndpointPassword: 'string',
      backupGatewayId: 'number',
      restoreObjects: 'string',
      restoreTime: 'number',
      backupSetId: 'string',
      restoreTaskName: 'string',
      destinationEndpointOracleSID: 'string',
      restoreDir: 'string',
      restoreHome: 'string',
      duplicateConflict: 'string',
      crossAliyunId: 'string',
      crossRoleName: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestoreTaskResponseBody extends $tea.Model {
  restoreTaskId?: string;
  requestId?: string;
  httpStatusCode?: number;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      restoreTaskId: 'RestoreTaskId',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreTaskId: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestoreTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRestoreTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRestoreTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupGatewayListRequest extends $tea.Model {
  region?: string;
  identifier?: string;
  pageSize?: number;
  pageNum?: number;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      identifier: 'Identifier',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      identifier: 'string',
      pageSize: 'number',
      pageNum: 'number',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupGatewayListResponseBody extends $tea.Model {
  pageNum?: number;
  requestId?: string;
  pageSize?: number;
  httpStatusCode?: number;
  totalElements?: number;
  totalPages?: number;
  items?: DescribeBackupGatewayListResponseBodyItems;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      httpStatusCode: 'HttpStatusCode',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
      items: 'Items',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      httpStatusCode: 'number',
      totalElements: 'number',
      totalPages: 'number',
      items: DescribeBackupGatewayListResponseBodyItems,
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupGatewayListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupGatewayListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupGatewayListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanBillingRequest extends $tea.Model {
  backupPlanId?: string;
  ownerId?: string;
  clientToken?: string;
  showStorageType?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
      showStorageType: 'ShowStorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      ownerId: 'string',
      clientToken: 'string',
      showStorageType: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanBillingResponseBody extends $tea.Model {
  item?: DescribeBackupPlanBillingResponseBodyItem;
  requestId?: string;
  httpStatusCode?: number;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: DescribeBackupPlanBillingResponseBodyItem,
      requestId: 'string',
      httpStatusCode: 'number',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanBillingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupPlanBillingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupPlanBillingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanListRequest extends $tea.Model {
  backupPlanId?: string;
  region?: string;
  pageSize?: number;
  pageNum?: number;
  backupPlanName?: string;
  backupPlanStatus?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      region: 'Region',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      backupPlanName: 'BackupPlanName',
      backupPlanStatus: 'BackupPlanStatus',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      region: 'string',
      pageSize: 'number',
      pageNum: 'number',
      backupPlanName: 'string',
      backupPlanStatus: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanListResponseBody extends $tea.Model {
  pageNum?: number;
  requestId?: string;
  pageSize?: number;
  httpStatusCode?: number;
  totalElements?: number;
  totalPages?: number;
  items?: DescribeBackupPlanListResponseBodyItems;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      httpStatusCode: 'HttpStatusCode',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
      items: 'Items',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      httpStatusCode: 'number',
      totalElements: 'number',
      totalPages: 'number',
      items: DescribeBackupPlanListResponseBodyItems,
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupPlanListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupPlanListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetDownloadTaskListRequest extends $tea.Model {
  backupPlanId?: string;
  backupSetDownloadTaskId?: string;
  pageSize?: number;
  pageNum?: number;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupSetDownloadTaskId: 'BackupSetDownloadTaskId',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupSetDownloadTaskId: 'string',
      pageSize: 'number',
      pageNum: 'number',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetDownloadTaskListResponseBody extends $tea.Model {
  pageNum?: number;
  requestId?: string;
  pageSize?: number;
  httpStatusCode?: number;
  totalElements?: number;
  totalPages?: number;
  items?: DescribeBackupSetDownloadTaskListResponseBodyItems;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      httpStatusCode: 'HttpStatusCode',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
      items: 'Items',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      httpStatusCode: 'number',
      totalElements: 'number',
      totalPages: 'number',
      items: DescribeBackupSetDownloadTaskListResponseBodyItems,
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetDownloadTaskListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupSetDownloadTaskListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupSetDownloadTaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullBackupListRequest extends $tea.Model {
  backupPlanId?: string;
  pageSize?: number;
  pageNum?: number;
  ownerId?: string;
  clientToken?: string;
  showStorageType?: boolean;
  backupSetId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
      showStorageType: 'ShowStorageType',
      backupSetId: 'BackupSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      pageSize: 'number',
      pageNum: 'number',
      ownerId: 'string',
      clientToken: 'string',
      showStorageType: 'boolean',
      backupSetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullBackupListResponseBody extends $tea.Model {
  pageNum?: number;
  requestId?: string;
  pageSize?: number;
  httpStatusCode?: number;
  totalElements?: number;
  totalPages?: number;
  items?: DescribeFullBackupListResponseBodyItems;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      httpStatusCode: 'HttpStatusCode',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
      items: 'Items',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      httpStatusCode: 'number',
      totalElements: 'number',
      totalPages: 'number',
      items: DescribeFullBackupListResponseBodyItems,
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullBackupListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFullBackupListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFullBackupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIncrementBackupListRequest extends $tea.Model {
  backupPlanId?: string;
  pageSize?: number;
  pageNum?: number;
  ownerId?: string;
  clientToken?: string;
  showStorageType?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
      showStorageType: 'ShowStorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      pageSize: 'number',
      pageNum: 'number',
      ownerId: 'string',
      clientToken: 'string',
      showStorageType: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIncrementBackupListResponseBody extends $tea.Model {
  pageNum?: number;
  requestId?: string;
  pageSize?: number;
  httpStatusCode?: number;
  totalElements?: number;
  totalPages?: number;
  items?: DescribeIncrementBackupListResponseBodyItems;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      httpStatusCode: 'HttpStatusCode',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
      items: 'Items',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      httpStatusCode: 'number',
      totalElements: 'number',
      totalPages: 'number',
      items: DescribeIncrementBackupListResponseBodyItems,
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIncrementBackupListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIncrementBackupListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIncrementBackupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobErrorCodeRequest extends $tea.Model {
  taskId?: string;
  language?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      language: 'Language',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      language: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobErrorCodeResponseBody extends $tea.Model {
  item?: DescribeJobErrorCodeResponseBodyItem;
  requestId?: string;
  httpStatusCode?: number;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: DescribeJobErrorCodeResponseBodyItem,
      requestId: 'string',
      httpStatusCode: 'number',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobErrorCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeJobErrorCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeJobErrorCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeCidrListRequest extends $tea.Model {
  region?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeCidrListResponseBody extends $tea.Model {
  requestId?: string;
  internetIPs?: DescribeNodeCidrListResponseBodyInternetIPs;
  httpStatusCode?: number;
  intranetIPs?: DescribeNodeCidrListResponseBodyIntranetIPs;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      internetIPs: 'InternetIPs',
      httpStatusCode: 'HttpStatusCode',
      intranetIPs: 'IntranetIPs',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      internetIPs: DescribeNodeCidrListResponseBodyInternetIPs,
      httpStatusCode: 'number',
      intranetIPs: DescribeNodeCidrListResponseBodyIntranetIPs,
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeCidrListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNodeCidrListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNodeCidrListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckProgressListRequest extends $tea.Model {
  backupPlanId?: string;
  restoreTaskId?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      restoreTaskId: 'RestoreTaskId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      restoreTaskId: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckProgressListResponseBody extends $tea.Model {
  status?: string;
  progress?: number;
  requestId?: string;
  httpStatusCode?: number;
  items?: DescribePreCheckProgressListResponseBodyItems;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      progress: 'Progress',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      progress: 'number',
      requestId: 'string',
      httpStatusCode: 'number',
      items: DescribePreCheckProgressListResponseBodyItems,
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckProgressListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePreCheckProgressListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePreCheckProgressListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  regions?: DescribeRegionsResponseBodyRegions;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      regions: 'Regions',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      regions: DescribeRegionsResponseBodyRegions,
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreRangeInfoRequest extends $tea.Model {
  backupPlanId?: string;
  beginTimestampForRestore?: number;
  endTimestampForRestore?: number;
  ownerId?: string;
  clientToken?: string;
  recentlyRestore?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      beginTimestampForRestore: 'BeginTimestampForRestore',
      endTimestampForRestore: 'EndTimestampForRestore',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
      recentlyRestore: 'RecentlyRestore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      beginTimestampForRestore: 'number',
      endTimestampForRestore: 'number',
      ownerId: 'string',
      clientToken: 'string',
      recentlyRestore: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreRangeInfoResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  items?: DescribeRestoreRangeInfoResponseBodyItems;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      items: DescribeRestoreRangeInfoResponseBodyItems,
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreRangeInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRestoreRangeInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRestoreRangeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTaskListRequest extends $tea.Model {
  backupPlanId?: string;
  restoreTaskId?: string;
  pageSize?: number;
  pageNum?: number;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      restoreTaskId: 'RestoreTaskId',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      restoreTaskId: 'string',
      pageSize: 'number',
      pageNum: 'number',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTaskListResponseBody extends $tea.Model {
  pageNum?: number;
  requestId?: string;
  pageSize?: number;
  httpStatusCode?: number;
  totalElements?: number;
  totalPages?: number;
  items?: DescribeRestoreTaskListResponseBodyItems;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      httpStatusCode: 'HttpStatusCode',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
      items: 'Items',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      httpStatusCode: 'number',
      totalElements: 'number',
      totalPages: 'number',
      items: DescribeRestoreTaskListResponseBodyItems,
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTaskListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRestoreTaskListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRestoreTaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableBackupLogRequest extends $tea.Model {
  backupPlanId?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableBackupLogResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  backupPlanId?: string;
  needPrecheck?: boolean;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      backupPlanId: 'BackupPlanId',
      needPrecheck: 'NeedPrecheck',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      backupPlanId: 'string',
      needPrecheck: 'boolean',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableBackupLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableBackupLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableBackupLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBackupLogRequest extends $tea.Model {
  backupPlanId?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBackupLogResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  backupPlanId?: string;
  needPrecheck?: boolean;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      backupPlanId: 'BackupPlanId',
      needPrecheck: 'NeedPrecheck',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      backupPlanId: 'string',
      needPrecheck: 'boolean',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBackupLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableBackupLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableBackupLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBListFromAgentRequest extends $tea.Model {
  backupGatewayId?: number;
  sourceEndpointRegion?: string;
  taskId?: number;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      sourceEndpointRegion: 'SourceEndpointRegion',
      taskId: 'TaskId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      sourceEndpointRegion: 'string',
      taskId: 'number',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBListFromAgentResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  errMessage?: string;
  success?: boolean;
  dbList?: GetDBListFromAgentResponseBodyDbList;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      errMessage: 'ErrMessage',
      success: 'Success',
      dbList: 'DbList',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      errMessage: 'string',
      success: 'boolean',
      dbList: GetDBListFromAgentResponseBodyDbList,
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBListFromAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDBListFromAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDBListFromAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupObjectsRequest extends $tea.Model {
  backupPlanId?: string;
  backupObjects?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupObjects: 'BackupObjects',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupObjects: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupObjectsResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  backupPlanId?: string;
  needPrecheck?: boolean;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      backupPlanId: 'BackupPlanId',
      needPrecheck: 'NeedPrecheck',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      backupPlanId: 'string',
      needPrecheck: 'boolean',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupObjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBackupObjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBackupObjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPlanNameRequest extends $tea.Model {
  backupPlanId?: string;
  backupPlanName?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupPlanName: 'BackupPlanName',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupPlanName: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPlanNameResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  backupPlanId?: string;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      backupPlanId: 'BackupPlanId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      backupPlanId: 'string',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPlanNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBackupPlanNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBackupPlanNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupSetDownloadRulesRequest extends $tea.Model {
  backupPlanId?: string;
  openAutoDownload?: boolean;
  backupGatewayId?: number;
  fullDataFormat?: string;
  incrementDataFormat?: string;
  backupSetDownloadDir?: string;
  backupSetDownloadTargetType?: string;
  backupSetDownloadTargetTypeLocation?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      openAutoDownload: 'OpenAutoDownload',
      backupGatewayId: 'BackupGatewayId',
      fullDataFormat: 'FullDataFormat',
      incrementDataFormat: 'IncrementDataFormat',
      backupSetDownloadDir: 'BackupSetDownloadDir',
      backupSetDownloadTargetType: 'BackupSetDownloadTargetType',
      backupSetDownloadTargetTypeLocation: 'BackupSetDownloadTargetTypeLocation',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      openAutoDownload: 'boolean',
      backupGatewayId: 'number',
      fullDataFormat: 'string',
      incrementDataFormat: 'string',
      backupSetDownloadDir: 'string',
      backupSetDownloadTargetType: 'string',
      backupSetDownloadTargetTypeLocation: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupSetDownloadRulesResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  backupPlanId?: string;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      backupPlanId: 'BackupPlanId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      backupPlanId: 'string',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupSetDownloadRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBackupSetDownloadRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBackupSetDownloadRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupSourceEndpointRequest extends $tea.Model {
  backupPlanId?: string;
  sourceEndpointInstanceType?: string;
  sourceEndpointRegion?: string;
  sourceEndpointInstanceID?: string;
  sourceEndpointIP?: string;
  sourceEndpointPort?: number;
  sourceEndpointDatabaseName?: string;
  sourceEndpointUserName?: string;
  sourceEndpointPassword?: string;
  backupGatewayId?: number;
  backupObjects?: string;
  sourceEndpointOracleSID?: string;
  crossAliyunId?: string;
  crossRoleName?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointUserName: 'SourceEndpointUserName',
      sourceEndpointPassword: 'SourceEndpointPassword',
      backupGatewayId: 'BackupGatewayId',
      backupObjects: 'BackupObjects',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointPort: 'number',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointUserName: 'string',
      sourceEndpointPassword: 'string',
      backupGatewayId: 'number',
      backupObjects: 'string',
      sourceEndpointOracleSID: 'string',
      crossAliyunId: 'string',
      crossRoleName: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupSourceEndpointResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  backupPlanId?: string;
  needPrecheck?: boolean;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      backupPlanId: 'BackupPlanId',
      needPrecheck: 'NeedPrecheck',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      backupPlanId: 'string',
      needPrecheck: 'boolean',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupSourceEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBackupSourceEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBackupSourceEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupStrategyRequest extends $tea.Model {
  backupPlanId?: string;
  backupPeriod?: string;
  backupStartTime?: string;
  backupStrategyType?: string;
  backupLogIntervalSeconds?: number;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupPeriod: 'BackupPeriod',
      backupStartTime: 'BackupStartTime',
      backupStrategyType: 'BackupStrategyType',
      backupLogIntervalSeconds: 'BackupLogIntervalSeconds',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupPeriod: 'string',
      backupStartTime: 'string',
      backupStrategyType: 'string',
      backupLogIntervalSeconds: 'number',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupStrategyResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  backupPlanId?: string;
  needPrecheck?: boolean;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      backupPlanId: 'BackupPlanId',
      needPrecheck: 'NeedPrecheck',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      backupPlanId: 'string',
      needPrecheck: 'boolean',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBackupStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBackupStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStorageStrategyRequest extends $tea.Model {
  backupPlanId?: string;
  backupRetentionPeriod?: number;
  duplicationInfrequentAccessPeriod?: number;
  duplicationArchivePeriod?: number;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      duplicationInfrequentAccessPeriod: 'DuplicationInfrequentAccessPeriod',
      duplicationArchivePeriod: 'DuplicationArchivePeriod',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupRetentionPeriod: 'number',
      duplicationInfrequentAccessPeriod: 'number',
      duplicationArchivePeriod: 'number',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStorageStrategyResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  backupPlanId?: string;
  needPrecheck?: boolean;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      backupPlanId: 'BackupPlanId',
      needPrecheck: 'NeedPrecheck',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      backupPlanId: 'string',
      needPrecheck: 'boolean',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStorageStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyStorageStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyStorageStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseBackupPlanRequest extends $tea.Model {
  backupPlanId?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseBackupPlanResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  backupPlanId?: string;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      backupPlanId: 'BackupPlanId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      backupPlanId: 'string',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewBackupPlanRequest extends $tea.Model {
  backupPlanId?: string;
  period?: string;
  usedTime?: number;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      period: 'Period',
      usedTime: 'UsedTime',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      period: 'string',
      usedTime: 'number',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewBackupPlanResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  backupPlanId?: string;
  errMessage?: string;
  orderId?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      backupPlanId: 'BackupPlanId',
      errMessage: 'ErrMessage',
      orderId: 'OrderId',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      backupPlanId: 'string',
      errMessage: 'string',
      orderId: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenewBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenewBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBackupPlanRequest extends $tea.Model {
  backupPlanId?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBackupPlanResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  backupPlanId?: string;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      backupPlanId: 'BackupPlanId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      backupPlanId: 'string',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRestoreTaskRequest extends $tea.Model {
  restoreTaskId?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      restoreTaskId: 'RestoreTaskId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreTaskId: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRestoreTaskResponseBody extends $tea.Model {
  restoreTaskId?: string;
  requestId?: string;
  httpStatusCode?: number;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      restoreTaskId: 'RestoreTaskId',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreTaskId: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRestoreTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartRestoreTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartRestoreTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTaskRequest extends $tea.Model {
  taskId?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTaskResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  httpStatusCode?: number;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  jobTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
      jobTypeName: 'JobTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
      jobTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopBackupPlanRequest extends $tea.Model {
  backupPlanId?: string;
  stopMethod?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      stopMethod: 'StopMethod',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      stopMethod: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopBackupPlanResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  backupPlanId?: string;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      backupPlanId: 'BackupPlanId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      backupPlanId: 'string',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupPlanRequest extends $tea.Model {
  backupPlanId?: string;
  instanceClass?: string;
  ownerId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      instanceClass: 'InstanceClass',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      instanceClass: 'string',
      ownerId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupPlanResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  backupPlanId?: string;
  errMessage?: string;
  orderId?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      backupPlanId: 'BackupPlanId',
      errMessage: 'ErrMessage',
      orderId: 'OrderId',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      backupPlanId: 'string',
      errMessage: 'string',
      orderId: 'string',
      success: 'boolean',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupGatewayListResponseBodyItemsBackupGateway extends $tea.Model {
  displayName?: string;
  backupGatewayCreateTime?: number;
  backupGatewayId?: string;
  region?: string;
  identifier?: string;
  sourceEndpointInternetIP?: string;
  backupGatewayStatus?: string;
  sourceEndpointIntranetIP?: string;
  lastHeartbeatTime?: number;
  sourceEndpointHostname?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      backupGatewayCreateTime: 'BackupGatewayCreateTime',
      backupGatewayId: 'BackupGatewayId',
      region: 'Region',
      identifier: 'Identifier',
      sourceEndpointInternetIP: 'SourceEndpointInternetIP',
      backupGatewayStatus: 'BackupGatewayStatus',
      sourceEndpointIntranetIP: 'SourceEndpointIntranetIP',
      lastHeartbeatTime: 'LastHeartbeatTime',
      sourceEndpointHostname: 'SourceEndpointHostname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      backupGatewayCreateTime: 'number',
      backupGatewayId: 'string',
      region: 'string',
      identifier: 'string',
      sourceEndpointInternetIP: 'string',
      backupGatewayStatus: 'string',
      sourceEndpointIntranetIP: 'string',
      lastHeartbeatTime: 'number',
      sourceEndpointHostname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupGatewayListResponseBodyItems extends $tea.Model {
  backupGateway?: DescribeBackupGatewayListResponseBodyItemsBackupGateway[];
  static names(): { [key: string]: string } {
    return {
      backupGateway: 'BackupGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGateway: { 'type': 'array', 'itemType': DescribeBackupGatewayListResponseBodyItemsBackupGateway },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanBillingResponseBodyItem extends $tea.Model {
  fullStorageSize?: number;
  buyCreateTimestamp?: number;
  buyExpiredTimestamp?: number;
  quotaEndTimestamp?: number;
  buySpec?: string;
  quotaStartTimestamp?: number;
  isExpired?: boolean;
  paiedBytes?: number;
  totalFreeBytes?: number;
  usedFullBytes?: number;
  isFreeBytesUnlimited?: boolean;
  contStorageSize?: number;
  buyChargeType?: string;
  usedIncrementBytes?: number;
  static names(): { [key: string]: string } {
    return {
      fullStorageSize: 'FullStorageSize',
      buyCreateTimestamp: 'BuyCreateTimestamp',
      buyExpiredTimestamp: 'BuyExpiredTimestamp',
      quotaEndTimestamp: 'QuotaEndTimestamp',
      buySpec: 'BuySpec',
      quotaStartTimestamp: 'QuotaStartTimestamp',
      isExpired: 'IsExpired',
      paiedBytes: 'PaiedBytes',
      totalFreeBytes: 'TotalFreeBytes',
      usedFullBytes: 'UsedFullBytes',
      isFreeBytesUnlimited: 'IsFreeBytesUnlimited',
      contStorageSize: 'ContStorageSize',
      buyChargeType: 'BuyChargeType',
      usedIncrementBytes: 'UsedIncrementBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullStorageSize: 'number',
      buyCreateTimestamp: 'number',
      buyExpiredTimestamp: 'number',
      quotaEndTimestamp: 'number',
      buySpec: 'string',
      quotaStartTimestamp: 'number',
      isExpired: 'boolean',
      paiedBytes: 'number',
      totalFreeBytes: 'number',
      usedFullBytes: 'number',
      isFreeBytesUnlimited: 'boolean',
      contStorageSize: 'number',
      buyChargeType: 'string',
      usedIncrementBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanListResponseBodyItemsBackupPlanDetail extends $tea.Model {
  crossRoleName?: string;
  sourceEndpointInstanceType?: string;
  backupSetDownloadDir?: string;
  sourceEndpointIpPort?: string;
  crossAliyunId?: string;
  duplicationArchivePeriod?: number;
  backupPlanId?: string;
  endTimestampForRestore?: number;
  backupPlanStatus?: string;
  backupSetDownloadFullDataFormat?: string;
  backupRetentionPeriod?: number;
  OSSBucketRegion?: string;
  sourceEndpointOracleSID?: string;
  backupStorageType?: string;
  backupMethod?: string;
  sourceEndpointRegion?: string;
  sourceEndpointDatabaseName?: string;
  backupPeriod?: string;
  backupSetDownloadGatewayId?: number;
  instanceClass?: string;
  backupPlanCreateTime?: number;
  backupStartTime?: string;
  duplicationInfrequentAccessPeriod?: number;
  backupSetDownloadTargetType?: string;
  errMessage?: string;
  backupObjects?: string;
  beginTimestampForRestore?: number;
  sourceEndpointInstanceID?: string;
  openBackupSetAutoDownload?: boolean;
  backupPlanName?: string;
  OSSBucketName?: string;
  backupGatewayId?: number;
  sourceEndpointUserName?: string;
  backupSetDownloadIncrementDataFormat?: string;
  enableBackupLog?: boolean;
  static names(): { [key: string]: string } {
    return {
      crossRoleName: 'CrossRoleName',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      backupSetDownloadDir: 'BackupSetDownloadDir',
      sourceEndpointIpPort: 'SourceEndpointIpPort',
      crossAliyunId: 'CrossAliyunId',
      duplicationArchivePeriod: 'DuplicationArchivePeriod',
      backupPlanId: 'BackupPlanId',
      endTimestampForRestore: 'EndTimestampForRestore',
      backupPlanStatus: 'BackupPlanStatus',
      backupSetDownloadFullDataFormat: 'BackupSetDownloadFullDataFormat',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      OSSBucketRegion: 'OSSBucketRegion',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      backupStorageType: 'BackupStorageType',
      backupMethod: 'BackupMethod',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      backupPeriod: 'BackupPeriod',
      backupSetDownloadGatewayId: 'BackupSetDownloadGatewayId',
      instanceClass: 'InstanceClass',
      backupPlanCreateTime: 'BackupPlanCreateTime',
      backupStartTime: 'BackupStartTime',
      duplicationInfrequentAccessPeriod: 'DuplicationInfrequentAccessPeriod',
      backupSetDownloadTargetType: 'BackupSetDownloadTargetType',
      errMessage: 'ErrMessage',
      backupObjects: 'BackupObjects',
      beginTimestampForRestore: 'BeginTimestampForRestore',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      openBackupSetAutoDownload: 'OpenBackupSetAutoDownload',
      backupPlanName: 'BackupPlanName',
      OSSBucketName: 'OSSBucketName',
      backupGatewayId: 'BackupGatewayId',
      sourceEndpointUserName: 'SourceEndpointUserName',
      backupSetDownloadIncrementDataFormat: 'BackupSetDownloadIncrementDataFormat',
      enableBackupLog: 'EnableBackupLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossRoleName: 'string',
      sourceEndpointInstanceType: 'string',
      backupSetDownloadDir: 'string',
      sourceEndpointIpPort: 'string',
      crossAliyunId: 'string',
      duplicationArchivePeriod: 'number',
      backupPlanId: 'string',
      endTimestampForRestore: 'number',
      backupPlanStatus: 'string',
      backupSetDownloadFullDataFormat: 'string',
      backupRetentionPeriod: 'number',
      OSSBucketRegion: 'string',
      sourceEndpointOracleSID: 'string',
      backupStorageType: 'string',
      backupMethod: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointDatabaseName: 'string',
      backupPeriod: 'string',
      backupSetDownloadGatewayId: 'number',
      instanceClass: 'string',
      backupPlanCreateTime: 'number',
      backupStartTime: 'string',
      duplicationInfrequentAccessPeriod: 'number',
      backupSetDownloadTargetType: 'string',
      errMessage: 'string',
      backupObjects: 'string',
      beginTimestampForRestore: 'number',
      sourceEndpointInstanceID: 'string',
      openBackupSetAutoDownload: 'boolean',
      backupPlanName: 'string',
      OSSBucketName: 'string',
      backupGatewayId: 'number',
      sourceEndpointUserName: 'string',
      backupSetDownloadIncrementDataFormat: 'string',
      enableBackupLog: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanListResponseBodyItems extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetDownloadTaskListResponseBodyItemsBackupSetDownloadTaskDetail extends $tea.Model {
  backupSetDownloadStatus?: string;
  backupSetDataSize?: number;
  backupSetDownloadDir?: string;
  backupSetDownloadTargetType?: string;
  errMessage?: string;
  backupPlanId?: string;
  backupSetDownloadCreateTime?: number;
  backupSetDbType?: string;
  backupSetDownloadInternetUrl?: string;
  backupSetId?: string;
  backupGatewayId?: number;
  backupSetDownloadIntranetUrl?: string;
  backupSetDownloadWay?: string;
  backupSetDownloadFinishTime?: number;
  backupSetJobType?: string;
  backupSetDownloadTaskId?: string;
  backupSetDownloadTaskName?: string;
  backupSetDataFormat?: string;
  backupSetCode?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetDownloadStatus: 'BackupSetDownloadStatus',
      backupSetDataSize: 'BackupSetDataSize',
      backupSetDownloadDir: 'BackupSetDownloadDir',
      backupSetDownloadTargetType: 'BackupSetDownloadTargetType',
      errMessage: 'ErrMessage',
      backupPlanId: 'BackupPlanId',
      backupSetDownloadCreateTime: 'BackupSetDownloadCreateTime',
      backupSetDbType: 'BackupSetDbType',
      backupSetDownloadInternetUrl: 'BackupSetDownloadInternetUrl',
      backupSetId: 'BackupSetId',
      backupGatewayId: 'BackupGatewayId',
      backupSetDownloadIntranetUrl: 'BackupSetDownloadIntranetUrl',
      backupSetDownloadWay: 'BackupSetDownloadWay',
      backupSetDownloadFinishTime: 'BackupSetDownloadFinishTime',
      backupSetJobType: 'BackupSetJobType',
      backupSetDownloadTaskId: 'BackupSetDownloadTaskId',
      backupSetDownloadTaskName: 'BackupSetDownloadTaskName',
      backupSetDataFormat: 'BackupSetDataFormat',
      backupSetCode: 'BackupSetCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetDownloadStatus: 'string',
      backupSetDataSize: 'number',
      backupSetDownloadDir: 'string',
      backupSetDownloadTargetType: 'string',
      errMessage: 'string',
      backupPlanId: 'string',
      backupSetDownloadCreateTime: 'number',
      backupSetDbType: 'string',
      backupSetDownloadInternetUrl: 'string',
      backupSetId: 'string',
      backupGatewayId: 'number',
      backupSetDownloadIntranetUrl: 'string',
      backupSetDownloadWay: 'string',
      backupSetDownloadFinishTime: 'number',
      backupSetJobType: 'string',
      backupSetDownloadTaskId: 'string',
      backupSetDownloadTaskName: 'string',
      backupSetDataFormat: 'string',
      backupSetCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetDownloadTaskListResponseBodyItems extends $tea.Model {
  backupSetDownloadTaskDetail?: DescribeBackupSetDownloadTaskListResponseBodyItemsBackupSetDownloadTaskDetail[];
  static names(): { [key: string]: string } {
    return {
      backupSetDownloadTaskDetail: 'BackupSetDownloadTaskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetDownloadTaskDetail: { 'type': 'array', 'itemType': DescribeBackupSetDownloadTaskListResponseBodyItemsBackupSetDownloadTaskDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullBackupListResponseBodyItemsFullBackupFile extends $tea.Model {
  finishTime?: number;
  backupStatus?: string;
  createTime?: number;
  sourceEndpointIpPort?: string;
  backupObjects?: string;
  errMessage?: string;
  endTime?: number;
  backupSetExpiredTime?: number;
  startTime?: number;
  storageMethod?: string;
  backupSetId?: string;
  backupSize?: number;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'FinishTime',
      backupStatus: 'BackupStatus',
      createTime: 'CreateTime',
      sourceEndpointIpPort: 'SourceEndpointIpPort',
      backupObjects: 'BackupObjects',
      errMessage: 'ErrMessage',
      endTime: 'EndTime',
      backupSetExpiredTime: 'BackupSetExpiredTime',
      startTime: 'StartTime',
      storageMethod: 'StorageMethod',
      backupSetId: 'BackupSetId',
      backupSize: 'BackupSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'number',
      backupStatus: 'string',
      createTime: 'number',
      sourceEndpointIpPort: 'string',
      backupObjects: 'string',
      errMessage: 'string',
      endTime: 'number',
      backupSetExpiredTime: 'number',
      startTime: 'number',
      storageMethod: 'string',
      backupSetId: 'string',
      backupSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullBackupListResponseBodyItems extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIncrementBackupListResponseBodyItemsIncrementBackupFile extends $tea.Model {
  endTime?: number;
  backupSetExpiredTime?: number;
  startTime?: number;
  storageMethod?: string;
  backupSetJobId?: string;
  backupSetId?: string;
  backupStatus?: string;
  sourceEndpointIpPort?: string;
  backupSize?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      backupSetExpiredTime: 'BackupSetExpiredTime',
      startTime: 'StartTime',
      storageMethod: 'StorageMethod',
      backupSetJobId: 'BackupSetJobId',
      backupSetId: 'BackupSetId',
      backupStatus: 'BackupStatus',
      sourceEndpointIpPort: 'SourceEndpointIpPort',
      backupSize: 'BackupSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      backupSetExpiredTime: 'number',
      startTime: 'number',
      storageMethod: 'string',
      backupSetJobId: 'string',
      backupSetId: 'string',
      backupStatus: 'string',
      sourceEndpointIpPort: 'string',
      backupSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIncrementBackupListResponseBodyItems extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobErrorCodeResponseBodyItem extends $tea.Model {
  jobState?: string;
  errorMessage?: string;
  errorCode?: string;
  jobId?: string;
  jobType?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      jobState: 'JobState',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      jobId: 'JobId',
      jobType: 'JobType',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobState: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      jobId: 'string',
      jobType: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeCidrListResponseBodyInternetIPs extends $tea.Model {
  internetIP?: string[];
  static names(): { [key: string]: string } {
    return {
      internetIP: 'InternetIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetIP: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeCidrListResponseBodyIntranetIPs extends $tea.Model {
  intranetIP?: string[];
  static names(): { [key: string]: string } {
    return {
      intranetIP: 'IntranetIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intranetIP: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckProgressListResponseBodyItemsPreCheckProgressDetail extends $tea.Model {
  finishTime?: number;
  state?: string;
  bootTime?: number;
  jobId?: string;
  item?: string;
  errMsg?: string;
  orderNum?: string;
  names?: string;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'FinishTime',
      state: 'State',
      bootTime: 'BootTime',
      jobId: 'JobId',
      item: 'Item',
      errMsg: 'ErrMsg',
      orderNum: 'OrderNum',
      names: 'Names',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'number',
      state: 'string',
      bootTime: 'number',
      jobId: 'string',
      item: 'string',
      errMsg: 'string',
      orderNum: 'string',
      names: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckProgressListResponseBodyItems extends $tea.Model {
  preCheckProgressDetail?: DescribePreCheckProgressListResponseBodyItemsPreCheckProgressDetail[];
  static names(): { [key: string]: string } {
    return {
      preCheckProgressDetail: 'PreCheckProgressDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckProgressDetail: { 'type': 'array', 'itemType': DescribePreCheckProgressListResponseBodyItemsPreCheckProgressDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  regionCode?: string[];
  static names(): { [key: string]: string } {
    return {
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionCode: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRangeFullBackupListFullBackupDetail extends $tea.Model {
  endTime?: number;
  startTime?: number;
  backupSetId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      backupSetId: 'BackupSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      backupSetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRangeFullBackupList extends $tea.Model {
  fullBackupDetail?: DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRangeFullBackupListFullBackupDetail[];
  static names(): { [key: string]: string } {
    return {
      fullBackupDetail: 'FullBackupDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullBackupDetail: { 'type': 'array', 'itemType': DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRangeFullBackupListFullBackupDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRange extends $tea.Model {
  endTimestampForRestore?: number;
  sourceEndpointInstanceType?: string;
  fullBackupList?: DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRangeFullBackupList;
  rangeType?: string;
  beginTimestampForRestore?: number;
  sourceEndpointInstanceID?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestampForRestore: 'EndTimestampForRestore',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      fullBackupList: 'FullBackupList',
      rangeType: 'RangeType',
      beginTimestampForRestore: 'BeginTimestampForRestore',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestampForRestore: 'number',
      sourceEndpointInstanceType: 'string',
      fullBackupList: DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRangeFullBackupList,
      rangeType: 'string',
      beginTimestampForRestore: 'number',
      sourceEndpointInstanceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreRangeInfoResponseBodyItems extends $tea.Model {
  DBSRecoverRange?: DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRange[];
  static names(): { [key: string]: string } {
    return {
      DBSRecoverRange: 'DBSRecoverRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBSRecoverRange: { 'type': 'array', 'itemType': DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRange },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTaskListResponseBodyItemsRestoreTaskDetail extends $tea.Model {
  restoreStatus?: string;
  fullStruAfterRestoreProgress?: number;
  crossRoleName?: string;
  restoreDir?: string;
  crossAliyunId?: string;
  restoreObjects?: string;
  backupPlanId?: string;
  destinationEndpointRegion?: string;
  restoreTaskCreateTime?: number;
  destinationEndpointUserName?: string;
  restoreTaskFinishTime?: number;
  destinationEndpointIpPort?: string;
  destinationEndpointDatabaseName?: string;
  destinationEndpointOracleSID?: string;
  destinationEndpointInstanceType?: string;
  fullStruforeRestoreProgress?: number;
  errMessage?: string;
  restoreTaskId?: string;
  fullDataRestoreProgress?: number;
  continuousRestoreProgress?: number;
  destinationEndpointInstanceID?: string;
  backupSetId?: string;
  restoreTaskName?: string;
  backupGatewayId?: number;
  restoreTime?: number;
  static names(): { [key: string]: string } {
    return {
      restoreStatus: 'RestoreStatus',
      fullStruAfterRestoreProgress: 'FullStruAfterRestoreProgress',
      crossRoleName: 'CrossRoleName',
      restoreDir: 'RestoreDir',
      crossAliyunId: 'CrossAliyunId',
      restoreObjects: 'RestoreObjects',
      backupPlanId: 'BackupPlanId',
      destinationEndpointRegion: 'DestinationEndpointRegion',
      restoreTaskCreateTime: 'RestoreTaskCreateTime',
      destinationEndpointUserName: 'DestinationEndpointUserName',
      restoreTaskFinishTime: 'RestoreTaskFinishTime',
      destinationEndpointIpPort: 'DestinationEndpointIpPort',
      destinationEndpointDatabaseName: 'DestinationEndpointDatabaseName',
      destinationEndpointOracleSID: 'DestinationEndpointOracleSID',
      destinationEndpointInstanceType: 'DestinationEndpointInstanceType',
      fullStruforeRestoreProgress: 'FullStruforeRestoreProgress',
      errMessage: 'ErrMessage',
      restoreTaskId: 'RestoreTaskId',
      fullDataRestoreProgress: 'FullDataRestoreProgress',
      continuousRestoreProgress: 'ContinuousRestoreProgress',
      destinationEndpointInstanceID: 'DestinationEndpointInstanceID',
      backupSetId: 'BackupSetId',
      restoreTaskName: 'RestoreTaskName',
      backupGatewayId: 'BackupGatewayId',
      restoreTime: 'RestoreTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreStatus: 'string',
      fullStruAfterRestoreProgress: 'number',
      crossRoleName: 'string',
      restoreDir: 'string',
      crossAliyunId: 'string',
      restoreObjects: 'string',
      backupPlanId: 'string',
      destinationEndpointRegion: 'string',
      restoreTaskCreateTime: 'number',
      destinationEndpointUserName: 'string',
      restoreTaskFinishTime: 'number',
      destinationEndpointIpPort: 'string',
      destinationEndpointDatabaseName: 'string',
      destinationEndpointOracleSID: 'string',
      destinationEndpointInstanceType: 'string',
      fullStruforeRestoreProgress: 'number',
      errMessage: 'string',
      restoreTaskId: 'string',
      fullDataRestoreProgress: 'number',
      continuousRestoreProgress: 'number',
      destinationEndpointInstanceID: 'string',
      backupSetId: 'string',
      restoreTaskName: 'string',
      backupGatewayId: 'number',
      restoreTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTaskListResponseBodyItems extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBListFromAgentResponseBodyDbList extends $tea.Model {
  dbName?: string[];
  static names(): { [key: string]: string } {
    return {
      dbName: 'dbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-qingdao': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-beijing': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-chengdu': "dbs-api.cn-chengdu.aliyuncs.com",
      'cn-zhangjiakou': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-huhehaote': "dbs-api.cn-huhehaote.aliyuncs.com",
      'cn-hangzhou': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "dbs-api.cn-hangzhou.aliyuncs.com",
      'ap-southeast-1': "dbs-api.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "dbs-api.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "dbs-api.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "dbs-api.ap-southeast-5.aliyuncs.com",
      'ap-northeast-1': "dbs-api.ap-northeast-1.aliyuncs.com",
      'us-west-1': "dbs-api.cn-hangzhou.aliyuncs.com",
      'us-east-1': "dbs-api.cn-hangzhou.aliyuncs.com",
      'eu-central-1': "dbs-api.eu-central-1.aliyuncs.com",
      'cn-hangzhou-finance': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-shanghai-finance-1': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen-finance-1': "dbs-api.cn-hangzhou.aliyuncs.com",
      'ap-south-1': "dbs-api.ap-south-1.aliyuncs.com",
      'eu-west-1': "dbs-api.eu-west-1.aliyuncs.com",
      'me-east-1': "dbs-api.me-east-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dbs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async configureBackupPlanWithOptions(request: ConfigureBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureBackupPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigureBackupPlanResponse>(await this.doRPCRequest("ConfigureBackupPlan", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigureBackupPlanResponse({}));
  }

  async configureBackupPlan(request: ConfigureBackupPlanRequest): Promise<ConfigureBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureBackupPlanWithOptions(request, runtime);
  }

  async createBackupPlanWithOptions(request: CreateBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBackupPlanResponse>(await this.doRPCRequest("CreateBackupPlan", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBackupPlanResponse({}));
  }

  async createBackupPlan(request: CreateBackupPlanRequest): Promise<CreateBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupPlanWithOptions(request, runtime);
  }

  async createFullBackupSetDownloadWithOptions(request: CreateFullBackupSetDownloadRequest, runtime: $Util.RuntimeOptions): Promise<CreateFullBackupSetDownloadResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFullBackupSetDownloadResponse>(await this.doRPCRequest("CreateFullBackupSetDownload", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFullBackupSetDownloadResponse({}));
  }

  async createFullBackupSetDownload(request: CreateFullBackupSetDownloadRequest): Promise<CreateFullBackupSetDownloadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFullBackupSetDownloadWithOptions(request, runtime);
  }

  async createGetDBListFromAgentTaskWithOptions(request: CreateGetDBListFromAgentTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateGetDBListFromAgentTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGetDBListFromAgentTaskResponse>(await this.doRPCRequest("CreateGetDBListFromAgentTask", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGetDBListFromAgentTaskResponse({}));
  }

  async createGetDBListFromAgentTask(request: CreateGetDBListFromAgentTaskRequest): Promise<CreateGetDBListFromAgentTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGetDBListFromAgentTaskWithOptions(request, runtime);
  }

  async createIncrementBackupSetDownloadWithOptions(request: CreateIncrementBackupSetDownloadRequest, runtime: $Util.RuntimeOptions): Promise<CreateIncrementBackupSetDownloadResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIncrementBackupSetDownloadResponse>(await this.doRPCRequest("CreateIncrementBackupSetDownload", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIncrementBackupSetDownloadResponse({}));
  }

  async createIncrementBackupSetDownload(request: CreateIncrementBackupSetDownloadRequest): Promise<CreateIncrementBackupSetDownloadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIncrementBackupSetDownloadWithOptions(request, runtime);
  }

  async createRestoreTaskWithOptions(request: CreateRestoreTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateRestoreTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRestoreTaskResponse>(await this.doRPCRequest("CreateRestoreTask", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRestoreTaskResponse({}));
  }

  async createRestoreTask(request: CreateRestoreTaskRequest): Promise<CreateRestoreTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRestoreTaskWithOptions(request, runtime);
  }

  async describeBackupGatewayListWithOptions(request: DescribeBackupGatewayListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupGatewayListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupGatewayListResponse>(await this.doRPCRequest("DescribeBackupGatewayList", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupGatewayListResponse({}));
  }

  async describeBackupGatewayList(request: DescribeBackupGatewayListRequest): Promise<DescribeBackupGatewayListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupGatewayListWithOptions(request, runtime);
  }

  async describeBackupPlanBillingWithOptions(request: DescribeBackupPlanBillingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPlanBillingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupPlanBillingResponse>(await this.doRPCRequest("DescribeBackupPlanBilling", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupPlanBillingResponse({}));
  }

  async describeBackupPlanBilling(request: DescribeBackupPlanBillingRequest): Promise<DescribeBackupPlanBillingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPlanBillingWithOptions(request, runtime);
  }

  async describeBackupPlanListWithOptions(request: DescribeBackupPlanListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPlanListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupPlanListResponse>(await this.doRPCRequest("DescribeBackupPlanList", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupPlanListResponse({}));
  }

  async describeBackupPlanList(request: DescribeBackupPlanListRequest): Promise<DescribeBackupPlanListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPlanListWithOptions(request, runtime);
  }

  async describeBackupSetDownloadTaskListWithOptions(request: DescribeBackupSetDownloadTaskListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupSetDownloadTaskListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupSetDownloadTaskListResponse>(await this.doRPCRequest("DescribeBackupSetDownloadTaskList", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupSetDownloadTaskListResponse({}));
  }

  async describeBackupSetDownloadTaskList(request: DescribeBackupSetDownloadTaskListRequest): Promise<DescribeBackupSetDownloadTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupSetDownloadTaskListWithOptions(request, runtime);
  }

  async describeFullBackupListWithOptions(request: DescribeFullBackupListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFullBackupListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFullBackupListResponse>(await this.doRPCRequest("DescribeFullBackupList", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFullBackupListResponse({}));
  }

  async describeFullBackupList(request: DescribeFullBackupListRequest): Promise<DescribeFullBackupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFullBackupListWithOptions(request, runtime);
  }

  async describeIncrementBackupListWithOptions(request: DescribeIncrementBackupListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIncrementBackupListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIncrementBackupListResponse>(await this.doRPCRequest("DescribeIncrementBackupList", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIncrementBackupListResponse({}));
  }

  async describeIncrementBackupList(request: DescribeIncrementBackupListRequest): Promise<DescribeIncrementBackupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIncrementBackupListWithOptions(request, runtime);
  }

  async describeJobErrorCodeWithOptions(request: DescribeJobErrorCodeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJobErrorCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeJobErrorCodeResponse>(await this.doRPCRequest("DescribeJobErrorCode", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeJobErrorCodeResponse({}));
  }

  async describeJobErrorCode(request: DescribeJobErrorCodeRequest): Promise<DescribeJobErrorCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobErrorCodeWithOptions(request, runtime);
  }

  async describeNodeCidrListWithOptions(request: DescribeNodeCidrListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNodeCidrListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNodeCidrListResponse>(await this.doRPCRequest("DescribeNodeCidrList", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNodeCidrListResponse({}));
  }

  async describeNodeCidrList(request: DescribeNodeCidrListRequest): Promise<DescribeNodeCidrListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNodeCidrListWithOptions(request, runtime);
  }

  async describePreCheckProgressListWithOptions(request: DescribePreCheckProgressListRequest, runtime: $Util.RuntimeOptions): Promise<DescribePreCheckProgressListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePreCheckProgressListResponse>(await this.doRPCRequest("DescribePreCheckProgressList", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePreCheckProgressListResponse({}));
  }

  async describePreCheckProgressList(request: DescribePreCheckProgressListRequest): Promise<DescribePreCheckProgressListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePreCheckProgressListWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeRestoreRangeInfoWithOptions(request: DescribeRestoreRangeInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreRangeInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRestoreRangeInfoResponse>(await this.doRPCRequest("DescribeRestoreRangeInfo", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRestoreRangeInfoResponse({}));
  }

  async describeRestoreRangeInfo(request: DescribeRestoreRangeInfoRequest): Promise<DescribeRestoreRangeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreRangeInfoWithOptions(request, runtime);
  }

  async describeRestoreTaskListWithOptions(request: DescribeRestoreTaskListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreTaskListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRestoreTaskListResponse>(await this.doRPCRequest("DescribeRestoreTaskList", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRestoreTaskListResponse({}));
  }

  async describeRestoreTaskList(request: DescribeRestoreTaskListRequest): Promise<DescribeRestoreTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreTaskListWithOptions(request, runtime);
  }

  async disableBackupLogWithOptions(request: DisableBackupLogRequest, runtime: $Util.RuntimeOptions): Promise<DisableBackupLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableBackupLogResponse>(await this.doRPCRequest("DisableBackupLog", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new DisableBackupLogResponse({}));
  }

  async disableBackupLog(request: DisableBackupLogRequest): Promise<DisableBackupLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableBackupLogWithOptions(request, runtime);
  }

  async enableBackupLogWithOptions(request: EnableBackupLogRequest, runtime: $Util.RuntimeOptions): Promise<EnableBackupLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableBackupLogResponse>(await this.doRPCRequest("EnableBackupLog", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new EnableBackupLogResponse({}));
  }

  async enableBackupLog(request: EnableBackupLogRequest): Promise<EnableBackupLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableBackupLogWithOptions(request, runtime);
  }

  async getDBListFromAgentWithOptions(request: GetDBListFromAgentRequest, runtime: $Util.RuntimeOptions): Promise<GetDBListFromAgentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDBListFromAgentResponse>(await this.doRPCRequest("GetDBListFromAgent", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetDBListFromAgentResponse({}));
  }

  async getDBListFromAgent(request: GetDBListFromAgentRequest): Promise<GetDBListFromAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDBListFromAgentWithOptions(request, runtime);
  }

  async modifyBackupObjectsWithOptions(request: ModifyBackupObjectsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupObjectsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBackupObjectsResponse>(await this.doRPCRequest("ModifyBackupObjects", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBackupObjectsResponse({}));
  }

  async modifyBackupObjects(request: ModifyBackupObjectsRequest): Promise<ModifyBackupObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupObjectsWithOptions(request, runtime);
  }

  async modifyBackupPlanNameWithOptions(request: ModifyBackupPlanNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPlanNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBackupPlanNameResponse>(await this.doRPCRequest("ModifyBackupPlanName", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBackupPlanNameResponse({}));
  }

  async modifyBackupPlanName(request: ModifyBackupPlanNameRequest): Promise<ModifyBackupPlanNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPlanNameWithOptions(request, runtime);
  }

  async modifyBackupSetDownloadRulesWithOptions(request: ModifyBackupSetDownloadRulesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupSetDownloadRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBackupSetDownloadRulesResponse>(await this.doRPCRequest("ModifyBackupSetDownloadRules", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBackupSetDownloadRulesResponse({}));
  }

  async modifyBackupSetDownloadRules(request: ModifyBackupSetDownloadRulesRequest): Promise<ModifyBackupSetDownloadRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupSetDownloadRulesWithOptions(request, runtime);
  }

  async modifyBackupSourceEndpointWithOptions(request: ModifyBackupSourceEndpointRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupSourceEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBackupSourceEndpointResponse>(await this.doRPCRequest("ModifyBackupSourceEndpoint", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBackupSourceEndpointResponse({}));
  }

  async modifyBackupSourceEndpoint(request: ModifyBackupSourceEndpointRequest): Promise<ModifyBackupSourceEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupSourceEndpointWithOptions(request, runtime);
  }

  async modifyBackupStrategyWithOptions(request: ModifyBackupStrategyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBackupStrategyResponse>(await this.doRPCRequest("ModifyBackupStrategy", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBackupStrategyResponse({}));
  }

  async modifyBackupStrategy(request: ModifyBackupStrategyRequest): Promise<ModifyBackupStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupStrategyWithOptions(request, runtime);
  }

  async modifyStorageStrategyWithOptions(request: ModifyStorageStrategyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyStorageStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyStorageStrategyResponse>(await this.doRPCRequest("ModifyStorageStrategy", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyStorageStrategyResponse({}));
  }

  async modifyStorageStrategy(request: ModifyStorageStrategyRequest): Promise<ModifyStorageStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyStorageStrategyWithOptions(request, runtime);
  }

  async releaseBackupPlanWithOptions(request: ReleaseBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseBackupPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseBackupPlanResponse>(await this.doRPCRequest("ReleaseBackupPlan", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseBackupPlanResponse({}));
  }

  async releaseBackupPlan(request: ReleaseBackupPlanRequest): Promise<ReleaseBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseBackupPlanWithOptions(request, runtime);
  }

  async renewBackupPlanWithOptions(request: RenewBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<RenewBackupPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenewBackupPlanResponse>(await this.doRPCRequest("RenewBackupPlan", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new RenewBackupPlanResponse({}));
  }

  async renewBackupPlan(request: RenewBackupPlanRequest): Promise<RenewBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewBackupPlanWithOptions(request, runtime);
  }

  async startBackupPlanWithOptions(request: StartBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<StartBackupPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartBackupPlanResponse>(await this.doRPCRequest("StartBackupPlan", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new StartBackupPlanResponse({}));
  }

  async startBackupPlan(request: StartBackupPlanRequest): Promise<StartBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startBackupPlanWithOptions(request, runtime);
  }

  async startRestoreTaskWithOptions(request: StartRestoreTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartRestoreTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartRestoreTaskResponse>(await this.doRPCRequest("StartRestoreTask", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new StartRestoreTaskResponse({}));
  }

  async startRestoreTask(request: StartRestoreTaskRequest): Promise<StartRestoreTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRestoreTaskWithOptions(request, runtime);
  }

  async startTaskWithOptions(request: StartTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartTaskResponse>(await this.doRPCRequest("StartTask", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new StartTaskResponse({}));
  }

  async startTask(request: StartTaskRequest): Promise<StartTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startTaskWithOptions(request, runtime);
  }

  async stopBackupPlanWithOptions(request: StopBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<StopBackupPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopBackupPlanResponse>(await this.doRPCRequest("StopBackupPlan", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new StopBackupPlanResponse({}));
  }

  async stopBackupPlan(request: StopBackupPlanRequest): Promise<StopBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopBackupPlanWithOptions(request, runtime);
  }

  async upgradeBackupPlanWithOptions(request: UpgradeBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeBackupPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeBackupPlanResponse>(await this.doRPCRequest("UpgradeBackupPlan", "2019-03-06", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeBackupPlanResponse({}));
  }

  async upgradeBackupPlan(request: UpgradeBackupPlanRequest): Promise<UpgradeBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeBackupPlanWithOptions(request, runtime);
  }

}
