// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ConfigureBackupPlanRequest extends $tea.Model {
  autoStartBackup?: boolean;
  backupGatewayId?: number;
  backupLogIntervalSeconds?: number;
  backupObjects?: string;
  backupPeriod?: string;
  backupPlanId?: string;
  backupPlanName?: string;
  backupRateLimit?: number;
  backupRetentionPeriod?: number;
  backupSpeedLimit?: number;
  backupStartTime?: string;
  backupStorageType?: string;
  backupStrategyType?: string;
  clientToken?: string;
  crossAliyunId?: string;
  crossRoleName?: string;
  duplicationArchivePeriod?: number;
  duplicationInfrequentAccessPeriod?: number;
  enableBackupLog?: boolean;
  OSSBucketName?: string;
  ownerId?: string;
  resourceGroupId?: string;
  sourceEndpointDatabaseName?: string;
  sourceEndpointIP?: string;
  sourceEndpointInstanceID?: string;
  sourceEndpointInstanceType?: string;
  sourceEndpointOracleSID?: string;
  sourceEndpointPassword?: string;
  sourceEndpointPort?: number;
  sourceEndpointRegion?: string;
  sourceEndpointUserName?: string;
  static names(): { [key: string]: string } {
    return {
      autoStartBackup: 'AutoStartBackup',
      backupGatewayId: 'BackupGatewayId',
      backupLogIntervalSeconds: 'BackupLogIntervalSeconds',
      backupObjects: 'BackupObjects',
      backupPeriod: 'BackupPeriod',
      backupPlanId: 'BackupPlanId',
      backupPlanName: 'BackupPlanName',
      backupRateLimit: 'BackupRateLimit',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupSpeedLimit: 'BackupSpeedLimit',
      backupStartTime: 'BackupStartTime',
      backupStorageType: 'BackupStorageType',
      backupStrategyType: 'BackupStrategyType',
      clientToken: 'ClientToken',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      duplicationArchivePeriod: 'DuplicationArchivePeriod',
      duplicationInfrequentAccessPeriod: 'DuplicationInfrequentAccessPeriod',
      enableBackupLog: 'EnableBackupLog',
      OSSBucketName: 'OSSBucketName',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointPassword: 'SourceEndpointPassword',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointUserName: 'SourceEndpointUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStartBackup: 'boolean',
      backupGatewayId: 'number',
      backupLogIntervalSeconds: 'number',
      backupObjects: 'string',
      backupPeriod: 'string',
      backupPlanId: 'string',
      backupPlanName: 'string',
      backupRateLimit: 'number',
      backupRetentionPeriod: 'number',
      backupSpeedLimit: 'number',
      backupStartTime: 'string',
      backupStorageType: 'string',
      backupStrategyType: 'string',
      clientToken: 'string',
      crossAliyunId: 'string',
      crossRoleName: 'string',
      duplicationArchivePeriod: 'number',
      duplicationInfrequentAccessPeriod: 'number',
      enableBackupLog: 'boolean',
      OSSBucketName: 'string',
      ownerId: 'string',
      resourceGroupId: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointPassword: 'string',
      sourceEndpointPort: 'number',
      sourceEndpointRegion: 'string',
      sourceEndpointUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureBackupPlanResponseBody extends $tea.Model {
  backupPlanId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ConfigureBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigureBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndStartBackupPlanRequest extends $tea.Model {
  backupGatewayId?: number;
  backupLogIntervalSeconds?: number;
  backupMethod?: string;
  backupObjects?: string;
  backupPeriod?: string;
  backupPlanId?: string;
  backupPlanName?: string;
  backupRateLimit?: number;
  backupRetentionPeriod?: number;
  backupSpeedLimit?: number;
  backupStartTime?: string;
  backupStorageType?: string;
  backupStrategyType?: string;
  clientToken?: string;
  crossAliyunId?: string;
  crossRoleName?: string;
  databaseRegion?: string;
  databaseType?: string;
  duplicationArchivePeriod?: number;
  duplicationInfrequentAccessPeriod?: number;
  enableBackupLog?: boolean;
  fromApp?: string;
  instanceClass?: string;
  instanceType?: string;
  OSSBucketName?: string;
  ownerId?: string;
  payType?: string;
  period?: string;
  region?: string;
  resourceGroupId?: string;
  sourceEndpointDatabaseName?: string;
  sourceEndpointIP?: string;
  sourceEndpointInstanceID?: string;
  sourceEndpointInstanceType?: string;
  sourceEndpointOracleSID?: string;
  sourceEndpointPassword?: string;
  sourceEndpointPort?: number;
  sourceEndpointRegion?: string;
  sourceEndpointUserName?: string;
  storageRegion?: string;
  storageType?: string;
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      backupLogIntervalSeconds: 'BackupLogIntervalSeconds',
      backupMethod: 'BackupMethod',
      backupObjects: 'BackupObjects',
      backupPeriod: 'BackupPeriod',
      backupPlanId: 'BackupPlanId',
      backupPlanName: 'BackupPlanName',
      backupRateLimit: 'BackupRateLimit',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupSpeedLimit: 'BackupSpeedLimit',
      backupStartTime: 'BackupStartTime',
      backupStorageType: 'BackupStorageType',
      backupStrategyType: 'BackupStrategyType',
      clientToken: 'ClientToken',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      databaseRegion: 'DatabaseRegion',
      databaseType: 'DatabaseType',
      duplicationArchivePeriod: 'DuplicationArchivePeriod',
      duplicationInfrequentAccessPeriod: 'DuplicationInfrequentAccessPeriod',
      enableBackupLog: 'EnableBackupLog',
      fromApp: 'FromApp',
      instanceClass: 'InstanceClass',
      instanceType: 'InstanceType',
      OSSBucketName: 'OSSBucketName',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointPassword: 'SourceEndpointPassword',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointUserName: 'SourceEndpointUserName',
      storageRegion: 'StorageRegion',
      storageType: 'StorageType',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      backupLogIntervalSeconds: 'number',
      backupMethod: 'string',
      backupObjects: 'string',
      backupPeriod: 'string',
      backupPlanId: 'string',
      backupPlanName: 'string',
      backupRateLimit: 'number',
      backupRetentionPeriod: 'number',
      backupSpeedLimit: 'number',
      backupStartTime: 'string',
      backupStorageType: 'string',
      backupStrategyType: 'string',
      clientToken: 'string',
      crossAliyunId: 'string',
      crossRoleName: 'string',
      databaseRegion: 'string',
      databaseType: 'string',
      duplicationArchivePeriod: 'number',
      duplicationInfrequentAccessPeriod: 'number',
      enableBackupLog: 'boolean',
      fromApp: 'string',
      instanceClass: 'string',
      instanceType: 'string',
      OSSBucketName: 'string',
      ownerId: 'string',
      payType: 'string',
      period: 'string',
      region: 'string',
      resourceGroupId: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointPassword: 'string',
      sourceEndpointPort: 'number',
      sourceEndpointRegion: 'string',
      sourceEndpointUserName: 'string',
      storageRegion: 'string',
      storageType: 'string',
      usedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndStartBackupPlanResponseBody extends $tea.Model {
  backupPlanId?: string;
  createBackupSet?: boolean;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  orderId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      createBackupSet: 'CreateBackupSet',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      createBackupSet: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      orderId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndStartBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAndStartBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAndStartBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanRequest extends $tea.Model {
  backupMethod?: string;
  clientToken?: string;
  databaseRegion?: string;
  databaseType?: string;
  fromApp?: string;
  instanceClass?: string;
  instanceType?: string;
  ownerId?: string;
  payType?: string;
  period?: string;
  region?: string;
  resourceGroupId?: string;
  storageRegion?: string;
  storageType?: string;
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      backupMethod: 'BackupMethod',
      clientToken: 'ClientToken',
      databaseRegion: 'DatabaseRegion',
      databaseType: 'DatabaseType',
      fromApp: 'FromApp',
      instanceClass: 'InstanceClass',
      instanceType: 'InstanceType',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      storageRegion: 'StorageRegion',
      storageType: 'StorageType',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMethod: 'string',
      clientToken: 'string',
      databaseRegion: 'string',
      databaseType: 'string',
      fromApp: 'string',
      instanceClass: 'string',
      instanceType: 'string',
      ownerId: 'string',
      payType: 'string',
      period: 'string',
      region: 'string',
      resourceGroupId: 'string',
      storageRegion: 'string',
      storageType: 'string',
      usedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanResponseBody extends $tea.Model {
  backupPlanId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  orderId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      orderId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFullBackupSetDownloadRequest extends $tea.Model {
  backupSetDataFormat?: string;
  backupSetId?: string;
  clientToken?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetDataFormat: 'BackupSetDataFormat',
      backupSetId: 'BackupSetId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetDataFormat: 'string',
      backupSetId: 'string',
      clientToken: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFullBackupSetDownloadResponseBody extends $tea.Model {
  backupSetDownloadTaskId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupSetDownloadTaskId: 'BackupSetDownloadTaskId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetDownloadTaskId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFullBackupSetDownloadResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFullBackupSetDownloadResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFullBackupSetDownloadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGetDBListFromAgentTaskRequest extends $tea.Model {
  backupGatewayId?: number;
  clientToken?: string;
  databaseType?: string;
  ownerId?: string;
  sourceEndpointIP?: string;
  sourceEndpointPort?: number;
  sourceEndpointRegion?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      clientToken: 'ClientToken',
      databaseType: 'DatabaseType',
      ownerId: 'OwnerId',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      clientToken: 'string',
      databaseType: 'string',
      ownerId: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointPort: 'number',
      sourceEndpointRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGetDBListFromAgentTaskResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGetDBListFromAgentTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateGetDBListFromAgentTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGetDBListFromAgentTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIncrementBackupSetDownloadRequest extends $tea.Model {
  backupSetDataFormat?: string;
  backupSetId?: string;
  backupSetName?: string;
  clientToken?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetDataFormat: 'BackupSetDataFormat',
      backupSetId: 'BackupSetId',
      backupSetName: 'BackupSetName',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetDataFormat: 'string',
      backupSetId: 'string',
      backupSetName: 'string',
      clientToken: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIncrementBackupSetDownloadResponseBody extends $tea.Model {
  backupSetDownloadTaskId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupSetDownloadTaskId: 'BackupSetDownloadTaskId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetDownloadTaskId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIncrementBackupSetDownloadResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateIncrementBackupSetDownloadResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIncrementBackupSetDownloadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestoreTaskRequest extends $tea.Model {
  backupGatewayId?: number;
  backupPlanId?: string;
  backupSetId?: string;
  clientToken?: string;
  crossAliyunId?: string;
  crossRoleName?: string;
  destinationEndpointDatabaseName?: string;
  destinationEndpointIP?: string;
  destinationEndpointInstanceID?: string;
  destinationEndpointInstanceType?: string;
  destinationEndpointOracleSID?: string;
  destinationEndpointPassword?: string;
  destinationEndpointPort?: number;
  destinationEndpointRegion?: string;
  destinationEndpointUserName?: string;
  duplicateConflict?: string;
  ownerId?: string;
  restoreDir?: string;
  restoreHome?: string;
  restoreObjects?: string;
  restoreTaskName?: string;
  restoreTime?: number;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      backupPlanId: 'BackupPlanId',
      backupSetId: 'BackupSetId',
      clientToken: 'ClientToken',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      destinationEndpointDatabaseName: 'DestinationEndpointDatabaseName',
      destinationEndpointIP: 'DestinationEndpointIP',
      destinationEndpointInstanceID: 'DestinationEndpointInstanceID',
      destinationEndpointInstanceType: 'DestinationEndpointInstanceType',
      destinationEndpointOracleSID: 'DestinationEndpointOracleSID',
      destinationEndpointPassword: 'DestinationEndpointPassword',
      destinationEndpointPort: 'DestinationEndpointPort',
      destinationEndpointRegion: 'DestinationEndpointRegion',
      destinationEndpointUserName: 'DestinationEndpointUserName',
      duplicateConflict: 'DuplicateConflict',
      ownerId: 'OwnerId',
      restoreDir: 'RestoreDir',
      restoreHome: 'RestoreHome',
      restoreObjects: 'RestoreObjects',
      restoreTaskName: 'RestoreTaskName',
      restoreTime: 'RestoreTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      backupPlanId: 'string',
      backupSetId: 'string',
      clientToken: 'string',
      crossAliyunId: 'string',
      crossRoleName: 'string',
      destinationEndpointDatabaseName: 'string',
      destinationEndpointIP: 'string',
      destinationEndpointInstanceID: 'string',
      destinationEndpointInstanceType: 'string',
      destinationEndpointOracleSID: 'string',
      destinationEndpointPassword: 'string',
      destinationEndpointPort: 'number',
      destinationEndpointRegion: 'string',
      destinationEndpointUserName: 'string',
      duplicateConflict: 'string',
      ownerId: 'string',
      restoreDir: 'string',
      restoreHome: 'string',
      restoreObjects: 'string',
      restoreTaskName: 'string',
      restoreTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestoreTaskResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  restoreTaskId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      restoreTaskId: 'RestoreTaskId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      restoreTaskId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestoreTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRestoreTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRestoreTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupGatewayListRequest extends $tea.Model {
  clientToken?: string;
  identifier?: string;
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      identifier: 'Identifier',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      identifier: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupGatewayListResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  items?: DescribeBackupGatewayListResponseBodyItems;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalElements?: number;
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
      items: DescribeBackupGatewayListResponseBodyItems,
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupGatewayListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBackupGatewayListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBackupGatewayListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanBillingRequest extends $tea.Model {
  backupPlanId?: string;
  clientToken?: string;
  ownerId?: string;
  showStorageType?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      showStorageType: 'ShowStorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      showStorageType: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanBillingResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  item?: DescribeBackupPlanBillingResponseBodyItem;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      item: 'Item',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      item: DescribeBackupPlanBillingResponseBodyItem,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanBillingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBackupPlanBillingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBackupPlanBillingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanListRequest extends $tea.Model {
  backupPlanId?: string;
  backupPlanName?: string;
  backupPlanStatus?: string;
  clientToken?: string;
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  region?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupPlanName: 'BackupPlanName',
      backupPlanStatus: 'BackupPlanStatus',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupPlanName: 'string',
      backupPlanStatus: 'string',
      clientToken: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      region: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanListResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  items?: DescribeBackupPlanListResponseBodyItems;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalElements?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBackupPlanListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  clientToken?: string;
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupSetDownloadTaskId: 'BackupSetDownloadTaskId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupSetDownloadTaskId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetDownloadTaskListResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  items?: DescribeBackupSetDownloadTaskListResponseBodyItems;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalElements?: number;
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
      items: DescribeBackupSetDownloadTaskListResponseBodyItems,
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetDownloadTaskListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBackupSetDownloadTaskListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBackupSetDownloadTaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDLAServiceRequest extends $tea.Model {
  backupPlanId?: string;
  clientToken?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDLAServiceResponseBody extends $tea.Model {
  autoAdd?: boolean;
  errCode?: string;
  errMessage?: string;
  haveJobFailed?: boolean;
  httpStatusCode?: number;
  requestId?: string;
  state?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoAdd: 'AutoAdd',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      haveJobFailed: 'HaveJobFailed',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      state: 'State',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAdd: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      haveJobFailed: 'boolean',
      httpStatusCode: 'number',
      requestId: 'string',
      state: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDLAServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDLAServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDLAServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullBackupListRequest extends $tea.Model {
  backupPlanId?: string;
  backupSetId?: string;
  clientToken?: string;
  endTimestamp?: number;
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  showStorageType?: boolean;
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupSetId: 'BackupSetId',
      clientToken: 'ClientToken',
      endTimestamp: 'EndTimestamp',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      showStorageType: 'ShowStorageType',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupSetId: 'string',
      clientToken: 'string',
      endTimestamp: 'number',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      showStorageType: 'boolean',
      startTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullBackupListResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  items?: DescribeFullBackupListResponseBodyItems;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalElements?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullBackupListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFullBackupListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFullBackupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIncrementBackupListRequest extends $tea.Model {
  backupPlanId?: string;
  clientToken?: string;
  endTimestamp?: number;
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  showStorageType?: boolean;
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      endTimestamp: 'EndTimestamp',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      showStorageType: 'ShowStorageType',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      endTimestamp: 'number',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      showStorageType: 'boolean',
      startTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIncrementBackupListResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  items?: DescribeIncrementBackupListResponseBodyItems;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalElements?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIncrementBackupListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIncrementBackupListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeIncrementBackupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobErrorCodeRequest extends $tea.Model {
  clientToken?: string;
  language?: string;
  ownerId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      language: 'Language',
      ownerId: 'OwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      language: 'string',
      ownerId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobErrorCodeResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  item?: DescribeJobErrorCodeResponseBodyItem;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      item: 'Item',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      item: DescribeJobErrorCodeResponseBodyItem,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobErrorCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeJobErrorCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeJobErrorCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeCidrListRequest extends $tea.Model {
  clientToken?: string;
  ownerId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeCidrListResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  internetIPs?: DescribeNodeCidrListResponseBodyInternetIPs;
  intranetIPs?: DescribeNodeCidrListResponseBodyIntranetIPs;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      internetIPs: 'InternetIPs',
      intranetIPs: 'IntranetIPs',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      internetIPs: DescribeNodeCidrListResponseBodyInternetIPs,
      intranetIPs: DescribeNodeCidrListResponseBodyIntranetIPs,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeCidrListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeNodeCidrListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNodeCidrListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckProgressListRequest extends $tea.Model {
  backupPlanId?: string;
  clientToken?: string;
  ownerId?: string;
  restoreTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      restoreTaskId: 'RestoreTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      restoreTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckProgressListResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  items?: DescribePreCheckProgressListResponseBodyItems;
  progress?: number;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      progress: 'Progress',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      items: DescribePreCheckProgressListResponseBodyItems,
      progress: 'number',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckProgressListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePreCheckProgressListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePreCheckProgressListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  clientToken?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  regions?: DescribeRegionsResponseBodyRegions;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      regions: 'Regions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  clientToken?: string;
  endTimestampForRestore?: number;
  ownerId?: string;
  recentlyRestore?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      beginTimestampForRestore: 'BeginTimestampForRestore',
      clientToken: 'ClientToken',
      endTimestampForRestore: 'EndTimestampForRestore',
      ownerId: 'OwnerId',
      recentlyRestore: 'RecentlyRestore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      beginTimestampForRestore: 'number',
      clientToken: 'string',
      endTimestampForRestore: 'number',
      ownerId: 'string',
      recentlyRestore: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreRangeInfoResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  items?: DescribeRestoreRangeInfoResponseBodyItems;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      items: DescribeRestoreRangeInfoResponseBodyItems,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreRangeInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRestoreRangeInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRestoreRangeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTaskListRequest extends $tea.Model {
  backupPlanId?: string;
  clientToken?: string;
  endTimestamp?: number;
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  restoreTaskId?: string;
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      endTimestamp: 'EndTimestamp',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      restoreTaskId: 'RestoreTaskId',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      endTimestamp: 'number',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      restoreTaskId: 'string',
      startTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTaskListResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  items?: DescribeRestoreTaskListResponseBodyItems;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalElements?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTaskListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRestoreTaskListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRestoreTaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableBackupLogRequest extends $tea.Model {
  backupPlanId?: string;
  clientToken?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableBackupLogResponseBody extends $tea.Model {
  backupPlanId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  needPrecheck?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      needPrecheck: 'NeedPrecheck',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      needPrecheck: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableBackupLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableBackupLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableBackupLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBackupLogRequest extends $tea.Model {
  backupPlanId?: string;
  clientToken?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBackupLogResponseBody extends $tea.Model {
  backupPlanId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  needPrecheck?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      needPrecheck: 'NeedPrecheck',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      needPrecheck: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBackupLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableBackupLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableBackupLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBListFromAgentRequest extends $tea.Model {
  backupGatewayId?: number;
  clientToken?: string;
  ownerId?: string;
  sourceEndpointRegion?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      sourceEndpointRegion: 'SourceEndpointRegion',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      clientToken: 'string',
      ownerId: 'string',
      sourceEndpointRegion: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBListFromAgentResponseBody extends $tea.Model {
  dbList?: GetDBListFromAgentResponseBodyDbList;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbList: 'DbList',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbList: GetDBListFromAgentResponseBodyDbList,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBListFromAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDBListFromAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDBListFromAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeDbsServiceLinkedRoleResponseBody extends $tea.Model {
  data?: string;
  errMessage?: string;
  errorCode?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errMessage: 'ErrMessage',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errMessage: 'string',
      errorCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeDbsServiceLinkedRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InitializeDbsServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InitializeDbsServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupObjectsRequest extends $tea.Model {
  backupObjects?: string;
  backupPlanId?: string;
  clientToken?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupObjects: 'BackupObjects',
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupObjects: 'string',
      backupPlanId: 'string',
      clientToken: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupObjectsResponseBody extends $tea.Model {
  backupPlanId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  needPrecheck?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      needPrecheck: 'NeedPrecheck',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      needPrecheck: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupObjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyBackupObjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  clientToken?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupPlanName: 'BackupPlanName',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupPlanName: 'string',
      clientToken: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPlanNameResponseBody extends $tea.Model {
  backupPlanId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPlanNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyBackupPlanNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyBackupPlanNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupSetDownloadRulesRequest extends $tea.Model {
  backupGatewayId?: number;
  backupPlanId?: string;
  backupSetDownloadDir?: string;
  backupSetDownloadTargetType?: string;
  backupSetDownloadTargetTypeLocation?: string;
  clientToken?: string;
  fullDataFormat?: string;
  incrementDataFormat?: string;
  openAutoDownload?: boolean;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      backupPlanId: 'BackupPlanId',
      backupSetDownloadDir: 'BackupSetDownloadDir',
      backupSetDownloadTargetType: 'BackupSetDownloadTargetType',
      backupSetDownloadTargetTypeLocation: 'BackupSetDownloadTargetTypeLocation',
      clientToken: 'ClientToken',
      fullDataFormat: 'FullDataFormat',
      incrementDataFormat: 'IncrementDataFormat',
      openAutoDownload: 'OpenAutoDownload',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      backupPlanId: 'string',
      backupSetDownloadDir: 'string',
      backupSetDownloadTargetType: 'string',
      backupSetDownloadTargetTypeLocation: 'string',
      clientToken: 'string',
      fullDataFormat: 'string',
      incrementDataFormat: 'string',
      openAutoDownload: 'boolean',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupSetDownloadRulesResponseBody extends $tea.Model {
  backupPlanId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupSetDownloadRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyBackupSetDownloadRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyBackupSetDownloadRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupSourceEndpointRequest extends $tea.Model {
  backupGatewayId?: number;
  backupObjects?: string;
  backupPlanId?: string;
  clientToken?: string;
  crossAliyunId?: string;
  crossRoleName?: string;
  ownerId?: string;
  sourceEndpointDatabaseName?: string;
  sourceEndpointIP?: string;
  sourceEndpointInstanceID?: string;
  sourceEndpointInstanceType?: string;
  sourceEndpointOracleSID?: string;
  sourceEndpointPassword?: string;
  sourceEndpointPort?: number;
  sourceEndpointRegion?: string;
  sourceEndpointUserName?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      backupObjects: 'BackupObjects',
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      ownerId: 'OwnerId',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointPassword: 'SourceEndpointPassword',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointUserName: 'SourceEndpointUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      backupObjects: 'string',
      backupPlanId: 'string',
      clientToken: 'string',
      crossAliyunId: 'string',
      crossRoleName: 'string',
      ownerId: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointPassword: 'string',
      sourceEndpointPort: 'number',
      sourceEndpointRegion: 'string',
      sourceEndpointUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupSourceEndpointResponseBody extends $tea.Model {
  backupPlanId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  needPrecheck?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      needPrecheck: 'NeedPrecheck',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      needPrecheck: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupSourceEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyBackupSourceEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyBackupSourceEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupStrategyRequest extends $tea.Model {
  backupLogIntervalSeconds?: number;
  backupPeriod?: string;
  backupPlanId?: string;
  backupStartTime?: string;
  backupStrategyType?: string;
  clientToken?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupLogIntervalSeconds: 'BackupLogIntervalSeconds',
      backupPeriod: 'BackupPeriod',
      backupPlanId: 'BackupPlanId',
      backupStartTime: 'BackupStartTime',
      backupStrategyType: 'BackupStrategyType',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupLogIntervalSeconds: 'number',
      backupPeriod: 'string',
      backupPlanId: 'string',
      backupStartTime: 'string',
      backupStrategyType: 'string',
      clientToken: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupStrategyResponseBody extends $tea.Model {
  backupPlanId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  needPrecheck?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      needPrecheck: 'NeedPrecheck',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      needPrecheck: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyBackupStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  clientToken?: string;
  duplicationArchivePeriod?: number;
  duplicationInfrequentAccessPeriod?: number;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      clientToken: 'ClientToken',
      duplicationArchivePeriod: 'DuplicationArchivePeriod',
      duplicationInfrequentAccessPeriod: 'DuplicationInfrequentAccessPeriod',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupRetentionPeriod: 'number',
      clientToken: 'string',
      duplicationArchivePeriod: 'number',
      duplicationInfrequentAccessPeriod: 'number',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStorageStrategyResponseBody extends $tea.Model {
  backupPlanId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  needPrecheck?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      needPrecheck: 'NeedPrecheck',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      needPrecheck: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStorageStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyStorageStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyStorageStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseBackupPlanRequest extends $tea.Model {
  backupPlanId?: string;
  clientToken?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseBackupPlanResponseBody extends $tea.Model {
  backupPlanId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleaseBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewBackupPlanRequest extends $tea.Model {
  backupPlanId?: string;
  clientToken?: string;
  ownerId?: string;
  period?: string;
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      period: 'Period',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      period: 'string',
      usedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewBackupPlanResponseBody extends $tea.Model {
  backupPlanId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  orderId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      orderId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RenewBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenewBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBackupPlanRequest extends $tea.Model {
  backupPlanId?: string;
  clientToken?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBackupPlanResponseBody extends $tea.Model {
  backupPlanId?: string;
  createdFullBackupsetId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      createdFullBackupsetId: 'CreatedFullBackupsetId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      createdFullBackupsetId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRestoreTaskRequest extends $tea.Model {
  clientToken?: string;
  ownerId?: string;
  restoreTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      restoreTaskId: 'RestoreTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerId: 'string',
      restoreTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRestoreTaskResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  restoreTaskId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      restoreTaskId: 'RestoreTaskId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      restoreTaskId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRestoreTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartRestoreTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartRestoreTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopBackupPlanRequest extends $tea.Model {
  backupPlanId?: string;
  clientToken?: string;
  ownerId?: string;
  stopMethod?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      stopMethod: 'StopMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      stopMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopBackupPlanResponseBody extends $tea.Model {
  backupPlanId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupPlanRequest extends $tea.Model {
  backupPlanId?: string;
  clientToken?: string;
  instanceClass?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      instanceClass: 'InstanceClass',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      instanceClass: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupPlanResponseBody extends $tea.Model {
  backupPlanId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  orderId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      orderId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradeBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupGatewayListResponseBodyItemsBackupGateway extends $tea.Model {
  backupGatewayCreateTime?: number;
  backupGatewayId?: string;
  backupGatewayStatus?: string;
  displayName?: string;
  identifier?: string;
  lastHeartbeatTime?: number;
  region?: string;
  sourceEndpointHostname?: string;
  sourceEndpointInternetIP?: string;
  sourceEndpointIntranetIP?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayCreateTime: 'BackupGatewayCreateTime',
      backupGatewayId: 'BackupGatewayId',
      backupGatewayStatus: 'BackupGatewayStatus',
      displayName: 'DisplayName',
      identifier: 'Identifier',
      lastHeartbeatTime: 'LastHeartbeatTime',
      region: 'Region',
      sourceEndpointHostname: 'SourceEndpointHostname',
      sourceEndpointInternetIP: 'SourceEndpointInternetIP',
      sourceEndpointIntranetIP: 'SourceEndpointIntranetIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayCreateTime: 'number',
      backupGatewayId: 'string',
      backupGatewayStatus: 'string',
      displayName: 'string',
      identifier: 'string',
      lastHeartbeatTime: 'number',
      region: 'string',
      sourceEndpointHostname: 'string',
      sourceEndpointInternetIP: 'string',
      sourceEndpointIntranetIP: 'string',
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
  buyChargeType?: string;
  buyCreateTimestamp?: number;
  buyExpiredTimestamp?: number;
  buySpec?: string;
  contStorageSize?: number;
  fullStorageSize?: number;
  isExpired?: boolean;
  isFreeBytesUnlimited?: boolean;
  paiedBytes?: number;
  quotaEndTimestamp?: number;
  quotaStartTimestamp?: number;
  resourceGroupId?: string;
  totalFreeBytes?: number;
  usedFullBytes?: number;
  usedIncrementBytes?: number;
  static names(): { [key: string]: string } {
    return {
      buyChargeType: 'BuyChargeType',
      buyCreateTimestamp: 'BuyCreateTimestamp',
      buyExpiredTimestamp: 'BuyExpiredTimestamp',
      buySpec: 'BuySpec',
      contStorageSize: 'ContStorageSize',
      fullStorageSize: 'FullStorageSize',
      isExpired: 'IsExpired',
      isFreeBytesUnlimited: 'IsFreeBytesUnlimited',
      paiedBytes: 'PaiedBytes',
      quotaEndTimestamp: 'QuotaEndTimestamp',
      quotaStartTimestamp: 'QuotaStartTimestamp',
      resourceGroupId: 'ResourceGroupId',
      totalFreeBytes: 'TotalFreeBytes',
      usedFullBytes: 'UsedFullBytes',
      usedIncrementBytes: 'UsedIncrementBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyChargeType: 'string',
      buyCreateTimestamp: 'number',
      buyExpiredTimestamp: 'number',
      buySpec: 'string',
      contStorageSize: 'number',
      fullStorageSize: 'number',
      isExpired: 'boolean',
      isFreeBytesUnlimited: 'boolean',
      paiedBytes: 'number',
      quotaEndTimestamp: 'number',
      quotaStartTimestamp: 'number',
      resourceGroupId: 'string',
      totalFreeBytes: 'number',
      usedFullBytes: 'number',
      usedIncrementBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanListResponseBodyItemsBackupPlanDetail extends $tea.Model {
  backupGatewayId?: number;
  backupMethod?: string;
  backupObjects?: string;
  backupPeriod?: string;
  backupPlanCreateTime?: number;
  backupPlanId?: string;
  backupPlanName?: string;
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
  duplicationArchivePeriod?: number;
  duplicationInfrequentAccessPeriod?: number;
  enableBackupLog?: boolean;
  endTimestampForRestore?: number;
  errMessage?: string;
  instanceClass?: string;
  OSSBucketName?: string;
  OSSBucketRegion?: string;
  openBackupSetAutoDownload?: boolean;
  resourceGroupId?: string;
  sourceEndpointDatabaseName?: string;
  sourceEndpointInstanceID?: string;
  sourceEndpointInstanceType?: string;
  sourceEndpointIpPort?: string;
  sourceEndpointOracleSID?: string;
  sourceEndpointRegion?: string;
  sourceEndpointUserName?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      backupMethod: 'BackupMethod',
      backupObjects: 'BackupObjects',
      backupPeriod: 'BackupPeriod',
      backupPlanCreateTime: 'BackupPlanCreateTime',
      backupPlanId: 'BackupPlanId',
      backupPlanName: 'BackupPlanName',
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
      duplicationArchivePeriod: 'DuplicationArchivePeriod',
      duplicationInfrequentAccessPeriod: 'DuplicationInfrequentAccessPeriod',
      enableBackupLog: 'EnableBackupLog',
      endTimestampForRestore: 'EndTimestampForRestore',
      errMessage: 'ErrMessage',
      instanceClass: 'InstanceClass',
      OSSBucketName: 'OSSBucketName',
      OSSBucketRegion: 'OSSBucketRegion',
      openBackupSetAutoDownload: 'OpenBackupSetAutoDownload',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointIpPort: 'SourceEndpointIpPort',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointUserName: 'SourceEndpointUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      backupMethod: 'string',
      backupObjects: 'string',
      backupPeriod: 'string',
      backupPlanCreateTime: 'number',
      backupPlanId: 'string',
      backupPlanName: 'string',
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
      duplicationArchivePeriod: 'number',
      duplicationInfrequentAccessPeriod: 'number',
      enableBackupLog: 'boolean',
      endTimestampForRestore: 'number',
      errMessage: 'string',
      instanceClass: 'string',
      OSSBucketName: 'string',
      OSSBucketRegion: 'string',
      openBackupSetAutoDownload: 'boolean',
      resourceGroupId: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointIpPort: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointUserName: 'string',
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
  backupGatewayId?: number;
  backupPlanId?: string;
  backupSetCode?: string;
  backupSetDataFormat?: string;
  backupSetDataSize?: number;
  backupSetDbType?: string;
  backupSetDownloadCreateTime?: number;
  backupSetDownloadDir?: string;
  backupSetDownloadFinishTime?: number;
  backupSetDownloadInternetUrl?: string;
  backupSetDownloadIntranetUrl?: string;
  backupSetDownloadStatus?: string;
  backupSetDownloadTargetType?: string;
  backupSetDownloadTaskId?: string;
  backupSetDownloadTaskName?: string;
  backupSetDownloadWay?: string;
  backupSetId?: string;
  backupSetJobType?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      backupPlanId: 'BackupPlanId',
      backupSetCode: 'BackupSetCode',
      backupSetDataFormat: 'BackupSetDataFormat',
      backupSetDataSize: 'BackupSetDataSize',
      backupSetDbType: 'BackupSetDbType',
      backupSetDownloadCreateTime: 'BackupSetDownloadCreateTime',
      backupSetDownloadDir: 'BackupSetDownloadDir',
      backupSetDownloadFinishTime: 'BackupSetDownloadFinishTime',
      backupSetDownloadInternetUrl: 'BackupSetDownloadInternetUrl',
      backupSetDownloadIntranetUrl: 'BackupSetDownloadIntranetUrl',
      backupSetDownloadStatus: 'BackupSetDownloadStatus',
      backupSetDownloadTargetType: 'BackupSetDownloadTargetType',
      backupSetDownloadTaskId: 'BackupSetDownloadTaskId',
      backupSetDownloadTaskName: 'BackupSetDownloadTaskName',
      backupSetDownloadWay: 'BackupSetDownloadWay',
      backupSetId: 'BackupSetId',
      backupSetJobType: 'BackupSetJobType',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      backupPlanId: 'string',
      backupSetCode: 'string',
      backupSetDataFormat: 'string',
      backupSetDataSize: 'number',
      backupSetDbType: 'string',
      backupSetDownloadCreateTime: 'number',
      backupSetDownloadDir: 'string',
      backupSetDownloadFinishTime: 'number',
      backupSetDownloadInternetUrl: 'string',
      backupSetDownloadIntranetUrl: 'string',
      backupSetDownloadStatus: 'string',
      backupSetDownloadTargetType: 'string',
      backupSetDownloadTaskId: 'string',
      backupSetDownloadTaskName: 'string',
      backupSetDownloadWay: 'string',
      backupSetId: 'string',
      backupSetJobType: 'string',
      errMessage: 'string',
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
  backupObjects?: string;
  backupSetExpiredTime?: number;
  backupSetId?: string;
  backupSize?: number;
  backupStatus?: string;
  createTime?: number;
  endTime?: number;
  errMessage?: string;
  finishTime?: number;
  sourceEndpointIpPort?: string;
  startTime?: number;
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
  backupSetExpiredTime?: number;
  backupSetId?: string;
  backupSetJobId?: string;
  backupSize?: number;
  backupStatus?: string;
  endTime?: number;
  sourceEndpointIpPort?: string;
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
  errorCode?: string;
  errorMessage?: string;
  jobId?: string;
  jobState?: string;
  jobType?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      jobState: 'JobState',
      jobType: 'JobType',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobId: 'string',
      jobState: 'string',
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
  bootTime?: number;
  errMsg?: string;
  finishTime?: number;
  item?: string;
  jobId?: string;
  names?: string;
  orderNum?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      bootTime: 'BootTime',
      errMsg: 'ErrMsg',
      finishTime: 'FinishTime',
      item: 'Item',
      jobId: 'JobId',
      names: 'Names',
      orderNum: 'OrderNum',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootTime: 'number',
      errMsg: 'string',
      finishTime: 'number',
      item: 'string',
      jobId: 'string',
      names: 'string',
      orderNum: 'string',
      state: 'string',
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
  backupSetId?: string;
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      endTime: 'number',
      startTime: 'number',
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
  beginTimestampForRestore?: number;
  endTimestampForRestore?: number;
  fullBackupList?: DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRangeFullBackupList;
  rangeType?: string;
  sourceEndpointInstanceID?: string;
  sourceEndpointInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      beginTimestampForRestore: 'BeginTimestampForRestore',
      endTimestampForRestore: 'EndTimestampForRestore',
      fullBackupList: 'FullBackupList',
      rangeType: 'RangeType',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimestampForRestore: 'number',
      endTimestampForRestore: 'number',
      fullBackupList: DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRangeFullBackupList,
      rangeType: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
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
  backupGatewayId?: number;
  backupPlanId?: string;
  backupSetId?: string;
  continuousRestoreProgress?: number;
  crossAliyunId?: string;
  crossRoleName?: string;
  destinationEndpointDatabaseName?: string;
  destinationEndpointInstanceID?: string;
  destinationEndpointInstanceType?: string;
  destinationEndpointIpPort?: string;
  destinationEndpointOracleSID?: string;
  destinationEndpointRegion?: string;
  destinationEndpointUserName?: string;
  errMessage?: string;
  fullDataRestoreProgress?: number;
  fullStruAfterRestoreProgress?: number;
  fullStruforeRestoreProgress?: number;
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
      backupPlanId: 'BackupPlanId',
      backupSetId: 'BackupSetId',
      continuousRestoreProgress: 'ContinuousRestoreProgress',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      destinationEndpointDatabaseName: 'DestinationEndpointDatabaseName',
      destinationEndpointInstanceID: 'DestinationEndpointInstanceID',
      destinationEndpointInstanceType: 'DestinationEndpointInstanceType',
      destinationEndpointIpPort: 'DestinationEndpointIpPort',
      destinationEndpointOracleSID: 'DestinationEndpointOracleSID',
      destinationEndpointRegion: 'DestinationEndpointRegion',
      destinationEndpointUserName: 'DestinationEndpointUserName',
      errMessage: 'ErrMessage',
      fullDataRestoreProgress: 'FullDataRestoreProgress',
      fullStruAfterRestoreProgress: 'FullStruAfterRestoreProgress',
      fullStruforeRestoreProgress: 'FullStruforeRestoreProgress',
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
      backupPlanId: 'string',
      backupSetId: 'string',
      continuousRestoreProgress: 'number',
      crossAliyunId: 'string',
      crossRoleName: 'string',
      destinationEndpointDatabaseName: 'string',
      destinationEndpointInstanceID: 'string',
      destinationEndpointInstanceType: 'string',
      destinationEndpointIpPort: 'string',
      destinationEndpointOracleSID: 'string',
      destinationEndpointRegion: 'string',
      destinationEndpointUserName: 'string',
      errMessage: 'string',
      fullDataRestoreProgress: 'number',
      fullStruAfterRestoreProgress: 'number',
      fullStruforeRestoreProgress: 'number',
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
    let query = { };
    if (!Util.isUnset(request.autoStartBackup)) {
      query["AutoStartBackup"] = request.autoStartBackup;
    }

    if (!Util.isUnset(request.backupGatewayId)) {
      query["BackupGatewayId"] = request.backupGatewayId;
    }

    if (!Util.isUnset(request.backupLogIntervalSeconds)) {
      query["BackupLogIntervalSeconds"] = request.backupLogIntervalSeconds;
    }

    if (!Util.isUnset(request.backupObjects)) {
      query["BackupObjects"] = request.backupObjects;
    }

    if (!Util.isUnset(request.backupPeriod)) {
      query["BackupPeriod"] = request.backupPeriod;
    }

    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.backupPlanName)) {
      query["BackupPlanName"] = request.backupPlanName;
    }

    if (!Util.isUnset(request.backupRateLimit)) {
      query["BackupRateLimit"] = request.backupRateLimit;
    }

    if (!Util.isUnset(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!Util.isUnset(request.backupSpeedLimit)) {
      query["BackupSpeedLimit"] = request.backupSpeedLimit;
    }

    if (!Util.isUnset(request.backupStartTime)) {
      query["BackupStartTime"] = request.backupStartTime;
    }

    if (!Util.isUnset(request.backupStorageType)) {
      query["BackupStorageType"] = request.backupStorageType;
    }

    if (!Util.isUnset(request.backupStrategyType)) {
      query["BackupStrategyType"] = request.backupStrategyType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.crossAliyunId)) {
      query["CrossAliyunId"] = request.crossAliyunId;
    }

    if (!Util.isUnset(request.crossRoleName)) {
      query["CrossRoleName"] = request.crossRoleName;
    }

    if (!Util.isUnset(request.duplicationArchivePeriod)) {
      query["DuplicationArchivePeriod"] = request.duplicationArchivePeriod;
    }

    if (!Util.isUnset(request.duplicationInfrequentAccessPeriod)) {
      query["DuplicationInfrequentAccessPeriod"] = request.duplicationInfrequentAccessPeriod;
    }

    if (!Util.isUnset(request.enableBackupLog)) {
      query["EnableBackupLog"] = request.enableBackupLog;
    }

    if (!Util.isUnset(request.OSSBucketName)) {
      query["OSSBucketName"] = request.OSSBucketName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourceEndpointDatabaseName)) {
      query["SourceEndpointDatabaseName"] = request.sourceEndpointDatabaseName;
    }

    if (!Util.isUnset(request.sourceEndpointIP)) {
      query["SourceEndpointIP"] = request.sourceEndpointIP;
    }

    if (!Util.isUnset(request.sourceEndpointInstanceID)) {
      query["SourceEndpointInstanceID"] = request.sourceEndpointInstanceID;
    }

    if (!Util.isUnset(request.sourceEndpointInstanceType)) {
      query["SourceEndpointInstanceType"] = request.sourceEndpointInstanceType;
    }

    if (!Util.isUnset(request.sourceEndpointOracleSID)) {
      query["SourceEndpointOracleSID"] = request.sourceEndpointOracleSID;
    }

    if (!Util.isUnset(request.sourceEndpointPassword)) {
      query["SourceEndpointPassword"] = request.sourceEndpointPassword;
    }

    if (!Util.isUnset(request.sourceEndpointPort)) {
      query["SourceEndpointPort"] = request.sourceEndpointPort;
    }

    if (!Util.isUnset(request.sourceEndpointRegion)) {
      query["SourceEndpointRegion"] = request.sourceEndpointRegion;
    }

    if (!Util.isUnset(request.sourceEndpointUserName)) {
      query["SourceEndpointUserName"] = request.sourceEndpointUserName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigureBackupPlan",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigureBackupPlanResponse>(await this.callApi(params, req, runtime), new ConfigureBackupPlanResponse({}));
  }

  async configureBackupPlan(request: ConfigureBackupPlanRequest): Promise<ConfigureBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureBackupPlanWithOptions(request, runtime);
  }

  async createAndStartBackupPlanWithOptions(request: CreateAndStartBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateAndStartBackupPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupGatewayId)) {
      query["BackupGatewayId"] = request.backupGatewayId;
    }

    if (!Util.isUnset(request.backupLogIntervalSeconds)) {
      query["BackupLogIntervalSeconds"] = request.backupLogIntervalSeconds;
    }

    if (!Util.isUnset(request.backupMethod)) {
      query["BackupMethod"] = request.backupMethod;
    }

    if (!Util.isUnset(request.backupObjects)) {
      query["BackupObjects"] = request.backupObjects;
    }

    if (!Util.isUnset(request.backupPeriod)) {
      query["BackupPeriod"] = request.backupPeriod;
    }

    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.backupPlanName)) {
      query["BackupPlanName"] = request.backupPlanName;
    }

    if (!Util.isUnset(request.backupRateLimit)) {
      query["BackupRateLimit"] = request.backupRateLimit;
    }

    if (!Util.isUnset(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!Util.isUnset(request.backupSpeedLimit)) {
      query["BackupSpeedLimit"] = request.backupSpeedLimit;
    }

    if (!Util.isUnset(request.backupStartTime)) {
      query["BackupStartTime"] = request.backupStartTime;
    }

    if (!Util.isUnset(request.backupStorageType)) {
      query["BackupStorageType"] = request.backupStorageType;
    }

    if (!Util.isUnset(request.backupStrategyType)) {
      query["BackupStrategyType"] = request.backupStrategyType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.crossAliyunId)) {
      query["CrossAliyunId"] = request.crossAliyunId;
    }

    if (!Util.isUnset(request.crossRoleName)) {
      query["CrossRoleName"] = request.crossRoleName;
    }

    if (!Util.isUnset(request.databaseRegion)) {
      query["DatabaseRegion"] = request.databaseRegion;
    }

    if (!Util.isUnset(request.databaseType)) {
      query["DatabaseType"] = request.databaseType;
    }

    if (!Util.isUnset(request.duplicationArchivePeriod)) {
      query["DuplicationArchivePeriod"] = request.duplicationArchivePeriod;
    }

    if (!Util.isUnset(request.duplicationInfrequentAccessPeriod)) {
      query["DuplicationInfrequentAccessPeriod"] = request.duplicationInfrequentAccessPeriod;
    }

    if (!Util.isUnset(request.enableBackupLog)) {
      query["EnableBackupLog"] = request.enableBackupLog;
    }

    if (!Util.isUnset(request.fromApp)) {
      query["FromApp"] = request.fromApp;
    }

    if (!Util.isUnset(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.OSSBucketName)) {
      query["OSSBucketName"] = request.OSSBucketName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourceEndpointDatabaseName)) {
      query["SourceEndpointDatabaseName"] = request.sourceEndpointDatabaseName;
    }

    if (!Util.isUnset(request.sourceEndpointIP)) {
      query["SourceEndpointIP"] = request.sourceEndpointIP;
    }

    if (!Util.isUnset(request.sourceEndpointInstanceID)) {
      query["SourceEndpointInstanceID"] = request.sourceEndpointInstanceID;
    }

    if (!Util.isUnset(request.sourceEndpointInstanceType)) {
      query["SourceEndpointInstanceType"] = request.sourceEndpointInstanceType;
    }

    if (!Util.isUnset(request.sourceEndpointOracleSID)) {
      query["SourceEndpointOracleSID"] = request.sourceEndpointOracleSID;
    }

    if (!Util.isUnset(request.sourceEndpointPassword)) {
      query["SourceEndpointPassword"] = request.sourceEndpointPassword;
    }

    if (!Util.isUnset(request.sourceEndpointPort)) {
      query["SourceEndpointPort"] = request.sourceEndpointPort;
    }

    if (!Util.isUnset(request.sourceEndpointRegion)) {
      query["SourceEndpointRegion"] = request.sourceEndpointRegion;
    }

    if (!Util.isUnset(request.sourceEndpointUserName)) {
      query["SourceEndpointUserName"] = request.sourceEndpointUserName;
    }

    if (!Util.isUnset(request.storageRegion)) {
      query["StorageRegion"] = request.storageRegion;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!Util.isUnset(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAndStartBackupPlan",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAndStartBackupPlanResponse>(await this.callApi(params, req, runtime), new CreateAndStartBackupPlanResponse({}));
  }

  async createAndStartBackupPlan(request: CreateAndStartBackupPlanRequest): Promise<CreateAndStartBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAndStartBackupPlanWithOptions(request, runtime);
  }

  async createBackupPlanWithOptions(request: CreateBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupMethod)) {
      query["BackupMethod"] = request.backupMethod;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.databaseRegion)) {
      query["DatabaseRegion"] = request.databaseRegion;
    }

    if (!Util.isUnset(request.databaseType)) {
      query["DatabaseType"] = request.databaseType;
    }

    if (!Util.isUnset(request.fromApp)) {
      query["FromApp"] = request.fromApp;
    }

    if (!Util.isUnset(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.storageRegion)) {
      query["StorageRegion"] = request.storageRegion;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!Util.isUnset(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBackupPlan",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBackupPlanResponse>(await this.callApi(params, req, runtime), new CreateBackupPlanResponse({}));
  }

  async createBackupPlan(request: CreateBackupPlanRequest): Promise<CreateBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupPlanWithOptions(request, runtime);
  }

  async createFullBackupSetDownloadWithOptions(request: CreateFullBackupSetDownloadRequest, runtime: $Util.RuntimeOptions): Promise<CreateFullBackupSetDownloadResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupSetDataFormat)) {
      query["BackupSetDataFormat"] = request.backupSetDataFormat;
    }

    if (!Util.isUnset(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFullBackupSetDownload",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFullBackupSetDownloadResponse>(await this.callApi(params, req, runtime), new CreateFullBackupSetDownloadResponse({}));
  }

  async createFullBackupSetDownload(request: CreateFullBackupSetDownloadRequest): Promise<CreateFullBackupSetDownloadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFullBackupSetDownloadWithOptions(request, runtime);
  }

  async createGetDBListFromAgentTaskWithOptions(request: CreateGetDBListFromAgentTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateGetDBListFromAgentTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupGatewayId)) {
      query["BackupGatewayId"] = request.backupGatewayId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.databaseType)) {
      query["DatabaseType"] = request.databaseType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.sourceEndpointIP)) {
      query["SourceEndpointIP"] = request.sourceEndpointIP;
    }

    if (!Util.isUnset(request.sourceEndpointPort)) {
      query["SourceEndpointPort"] = request.sourceEndpointPort;
    }

    if (!Util.isUnset(request.sourceEndpointRegion)) {
      query["SourceEndpointRegion"] = request.sourceEndpointRegion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGetDBListFromAgentTask",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGetDBListFromAgentTaskResponse>(await this.callApi(params, req, runtime), new CreateGetDBListFromAgentTaskResponse({}));
  }

  async createGetDBListFromAgentTask(request: CreateGetDBListFromAgentTaskRequest): Promise<CreateGetDBListFromAgentTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGetDBListFromAgentTaskWithOptions(request, runtime);
  }

  async createIncrementBackupSetDownloadWithOptions(request: CreateIncrementBackupSetDownloadRequest, runtime: $Util.RuntimeOptions): Promise<CreateIncrementBackupSetDownloadResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupSetDataFormat)) {
      query["BackupSetDataFormat"] = request.backupSetDataFormat;
    }

    if (!Util.isUnset(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!Util.isUnset(request.backupSetName)) {
      query["BackupSetName"] = request.backupSetName;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateIncrementBackupSetDownload",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIncrementBackupSetDownloadResponse>(await this.callApi(params, req, runtime), new CreateIncrementBackupSetDownloadResponse({}));
  }

  async createIncrementBackupSetDownload(request: CreateIncrementBackupSetDownloadRequest): Promise<CreateIncrementBackupSetDownloadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIncrementBackupSetDownloadWithOptions(request, runtime);
  }

  async createRestoreTaskWithOptions(request: CreateRestoreTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateRestoreTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupGatewayId)) {
      query["BackupGatewayId"] = request.backupGatewayId;
    }

    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.crossAliyunId)) {
      query["CrossAliyunId"] = request.crossAliyunId;
    }

    if (!Util.isUnset(request.crossRoleName)) {
      query["CrossRoleName"] = request.crossRoleName;
    }

    if (!Util.isUnset(request.destinationEndpointDatabaseName)) {
      query["DestinationEndpointDatabaseName"] = request.destinationEndpointDatabaseName;
    }

    if (!Util.isUnset(request.destinationEndpointIP)) {
      query["DestinationEndpointIP"] = request.destinationEndpointIP;
    }

    if (!Util.isUnset(request.destinationEndpointInstanceID)) {
      query["DestinationEndpointInstanceID"] = request.destinationEndpointInstanceID;
    }

    if (!Util.isUnset(request.destinationEndpointInstanceType)) {
      query["DestinationEndpointInstanceType"] = request.destinationEndpointInstanceType;
    }

    if (!Util.isUnset(request.destinationEndpointOracleSID)) {
      query["DestinationEndpointOracleSID"] = request.destinationEndpointOracleSID;
    }

    if (!Util.isUnset(request.destinationEndpointPassword)) {
      query["DestinationEndpointPassword"] = request.destinationEndpointPassword;
    }

    if (!Util.isUnset(request.destinationEndpointPort)) {
      query["DestinationEndpointPort"] = request.destinationEndpointPort;
    }

    if (!Util.isUnset(request.destinationEndpointRegion)) {
      query["DestinationEndpointRegion"] = request.destinationEndpointRegion;
    }

    if (!Util.isUnset(request.destinationEndpointUserName)) {
      query["DestinationEndpointUserName"] = request.destinationEndpointUserName;
    }

    if (!Util.isUnset(request.duplicateConflict)) {
      query["DuplicateConflict"] = request.duplicateConflict;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.restoreDir)) {
      query["RestoreDir"] = request.restoreDir;
    }

    if (!Util.isUnset(request.restoreHome)) {
      query["RestoreHome"] = request.restoreHome;
    }

    if (!Util.isUnset(request.restoreObjects)) {
      query["RestoreObjects"] = request.restoreObjects;
    }

    if (!Util.isUnset(request.restoreTaskName)) {
      query["RestoreTaskName"] = request.restoreTaskName;
    }

    if (!Util.isUnset(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRestoreTask",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRestoreTaskResponse>(await this.callApi(params, req, runtime), new CreateRestoreTaskResponse({}));
  }

  async createRestoreTask(request: CreateRestoreTaskRequest): Promise<CreateRestoreTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRestoreTaskWithOptions(request, runtime);
  }

  async describeBackupGatewayListWithOptions(request: DescribeBackupGatewayListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupGatewayListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupGatewayList",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupGatewayListResponse>(await this.callApi(params, req, runtime), new DescribeBackupGatewayListResponse({}));
  }

  async describeBackupGatewayList(request: DescribeBackupGatewayListRequest): Promise<DescribeBackupGatewayListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupGatewayListWithOptions(request, runtime);
  }

  async describeBackupPlanBillingWithOptions(request: DescribeBackupPlanBillingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPlanBillingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.showStorageType)) {
      query["ShowStorageType"] = request.showStorageType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupPlanBilling",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupPlanBillingResponse>(await this.callApi(params, req, runtime), new DescribeBackupPlanBillingResponse({}));
  }

  async describeBackupPlanBilling(request: DescribeBackupPlanBillingRequest): Promise<DescribeBackupPlanBillingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPlanBillingWithOptions(request, runtime);
  }

  async describeBackupPlanListWithOptions(request: DescribeBackupPlanListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPlanListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.backupPlanName)) {
      query["BackupPlanName"] = request.backupPlanName;
    }

    if (!Util.isUnset(request.backupPlanStatus)) {
      query["BackupPlanStatus"] = request.backupPlanStatus;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupPlanList",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupPlanListResponse>(await this.callApi(params, req, runtime), new DescribeBackupPlanListResponse({}));
  }

  async describeBackupPlanList(request: DescribeBackupPlanListRequest): Promise<DescribeBackupPlanListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPlanListWithOptions(request, runtime);
  }

  async describeBackupSetDownloadTaskListWithOptions(request: DescribeBackupSetDownloadTaskListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupSetDownloadTaskListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.backupSetDownloadTaskId)) {
      query["BackupSetDownloadTaskId"] = request.backupSetDownloadTaskId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupSetDownloadTaskList",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupSetDownloadTaskListResponse>(await this.callApi(params, req, runtime), new DescribeBackupSetDownloadTaskListResponse({}));
  }

  async describeBackupSetDownloadTaskList(request: DescribeBackupSetDownloadTaskListRequest): Promise<DescribeBackupSetDownloadTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupSetDownloadTaskListWithOptions(request, runtime);
  }

  async describeDLAServiceWithOptions(request: DescribeDLAServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDLAServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDLAService",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDLAServiceResponse>(await this.callApi(params, req, runtime), new DescribeDLAServiceResponse({}));
  }

  async describeDLAService(request: DescribeDLAServiceRequest): Promise<DescribeDLAServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDLAServiceWithOptions(request, runtime);
  }

  async describeFullBackupListWithOptions(request: DescribeFullBackupListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFullBackupListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.showStorageType)) {
      query["ShowStorageType"] = request.showStorageType;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFullBackupList",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFullBackupListResponse>(await this.callApi(params, req, runtime), new DescribeFullBackupListResponse({}));
  }

  async describeFullBackupList(request: DescribeFullBackupListRequest): Promise<DescribeFullBackupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFullBackupListWithOptions(request, runtime);
  }

  async describeIncrementBackupListWithOptions(request: DescribeIncrementBackupListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIncrementBackupListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.showStorageType)) {
      query["ShowStorageType"] = request.showStorageType;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIncrementBackupList",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIncrementBackupListResponse>(await this.callApi(params, req, runtime), new DescribeIncrementBackupListResponse({}));
  }

  async describeIncrementBackupList(request: DescribeIncrementBackupListRequest): Promise<DescribeIncrementBackupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIncrementBackupListWithOptions(request, runtime);
  }

  async describeJobErrorCodeWithOptions(request: DescribeJobErrorCodeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJobErrorCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeJobErrorCode",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeJobErrorCodeResponse>(await this.callApi(params, req, runtime), new DescribeJobErrorCodeResponse({}));
  }

  async describeJobErrorCode(request: DescribeJobErrorCodeRequest): Promise<DescribeJobErrorCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobErrorCodeWithOptions(request, runtime);
  }

  async describeNodeCidrListWithOptions(request: DescribeNodeCidrListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNodeCidrListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNodeCidrList",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNodeCidrListResponse>(await this.callApi(params, req, runtime), new DescribeNodeCidrListResponse({}));
  }

  async describeNodeCidrList(request: DescribeNodeCidrListRequest): Promise<DescribeNodeCidrListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNodeCidrListWithOptions(request, runtime);
  }

  async describePreCheckProgressListWithOptions(request: DescribePreCheckProgressListRequest, runtime: $Util.RuntimeOptions): Promise<DescribePreCheckProgressListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.restoreTaskId)) {
      query["RestoreTaskId"] = request.restoreTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePreCheckProgressList",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePreCheckProgressListResponse>(await this.callApi(params, req, runtime), new DescribePreCheckProgressListResponse({}));
  }

  async describePreCheckProgressList(request: DescribePreCheckProgressListRequest): Promise<DescribePreCheckProgressListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePreCheckProgressListWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeRestoreRangeInfoWithOptions(request: DescribeRestoreRangeInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreRangeInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.beginTimestampForRestore)) {
      query["BeginTimestampForRestore"] = request.beginTimestampForRestore;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endTimestampForRestore)) {
      query["EndTimestampForRestore"] = request.endTimestampForRestore;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.recentlyRestore)) {
      query["RecentlyRestore"] = request.recentlyRestore;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRestoreRangeInfo",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRestoreRangeInfoResponse>(await this.callApi(params, req, runtime), new DescribeRestoreRangeInfoResponse({}));
  }

  async describeRestoreRangeInfo(request: DescribeRestoreRangeInfoRequest): Promise<DescribeRestoreRangeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreRangeInfoWithOptions(request, runtime);
  }

  async describeRestoreTaskListWithOptions(request: DescribeRestoreTaskListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreTaskListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.restoreTaskId)) {
      query["RestoreTaskId"] = request.restoreTaskId;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRestoreTaskList",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRestoreTaskListResponse>(await this.callApi(params, req, runtime), new DescribeRestoreTaskListResponse({}));
  }

  async describeRestoreTaskList(request: DescribeRestoreTaskListRequest): Promise<DescribeRestoreTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreTaskListWithOptions(request, runtime);
  }

  async disableBackupLogWithOptions(request: DisableBackupLogRequest, runtime: $Util.RuntimeOptions): Promise<DisableBackupLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableBackupLog",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableBackupLogResponse>(await this.callApi(params, req, runtime), new DisableBackupLogResponse({}));
  }

  async disableBackupLog(request: DisableBackupLogRequest): Promise<DisableBackupLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableBackupLogWithOptions(request, runtime);
  }

  async enableBackupLogWithOptions(request: EnableBackupLogRequest, runtime: $Util.RuntimeOptions): Promise<EnableBackupLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableBackupLog",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableBackupLogResponse>(await this.callApi(params, req, runtime), new EnableBackupLogResponse({}));
  }

  async enableBackupLog(request: EnableBackupLogRequest): Promise<EnableBackupLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableBackupLogWithOptions(request, runtime);
  }

  async getDBListFromAgentWithOptions(request: GetDBListFromAgentRequest, runtime: $Util.RuntimeOptions): Promise<GetDBListFromAgentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupGatewayId)) {
      query["BackupGatewayId"] = request.backupGatewayId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.sourceEndpointRegion)) {
      query["SourceEndpointRegion"] = request.sourceEndpointRegion;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDBListFromAgent",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDBListFromAgentResponse>(await this.callApi(params, req, runtime), new GetDBListFromAgentResponse({}));
  }

  async getDBListFromAgent(request: GetDBListFromAgentRequest): Promise<GetDBListFromAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDBListFromAgentWithOptions(request, runtime);
  }

  async initializeDbsServiceLinkedRoleWithOptions(runtime: $Util.RuntimeOptions): Promise<InitializeDbsServiceLinkedRoleResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "InitializeDbsServiceLinkedRole",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitializeDbsServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new InitializeDbsServiceLinkedRoleResponse({}));
  }

  async initializeDbsServiceLinkedRole(): Promise<InitializeDbsServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initializeDbsServiceLinkedRoleWithOptions(runtime);
  }

  async modifyBackupObjectsWithOptions(request: ModifyBackupObjectsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupObjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupObjects)) {
      query["BackupObjects"] = request.backupObjects;
    }

    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBackupObjects",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBackupObjectsResponse>(await this.callApi(params, req, runtime), new ModifyBackupObjectsResponse({}));
  }

  async modifyBackupObjects(request: ModifyBackupObjectsRequest): Promise<ModifyBackupObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupObjectsWithOptions(request, runtime);
  }

  async modifyBackupPlanNameWithOptions(request: ModifyBackupPlanNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPlanNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.backupPlanName)) {
      query["BackupPlanName"] = request.backupPlanName;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBackupPlanName",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBackupPlanNameResponse>(await this.callApi(params, req, runtime), new ModifyBackupPlanNameResponse({}));
  }

  async modifyBackupPlanName(request: ModifyBackupPlanNameRequest): Promise<ModifyBackupPlanNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPlanNameWithOptions(request, runtime);
  }

  async modifyBackupSetDownloadRulesWithOptions(request: ModifyBackupSetDownloadRulesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupSetDownloadRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupGatewayId)) {
      query["BackupGatewayId"] = request.backupGatewayId;
    }

    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.backupSetDownloadDir)) {
      query["BackupSetDownloadDir"] = request.backupSetDownloadDir;
    }

    if (!Util.isUnset(request.backupSetDownloadTargetType)) {
      query["BackupSetDownloadTargetType"] = request.backupSetDownloadTargetType;
    }

    if (!Util.isUnset(request.backupSetDownloadTargetTypeLocation)) {
      query["BackupSetDownloadTargetTypeLocation"] = request.backupSetDownloadTargetTypeLocation;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.fullDataFormat)) {
      query["FullDataFormat"] = request.fullDataFormat;
    }

    if (!Util.isUnset(request.incrementDataFormat)) {
      query["IncrementDataFormat"] = request.incrementDataFormat;
    }

    if (!Util.isUnset(request.openAutoDownload)) {
      query["OpenAutoDownload"] = request.openAutoDownload;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBackupSetDownloadRules",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBackupSetDownloadRulesResponse>(await this.callApi(params, req, runtime), new ModifyBackupSetDownloadRulesResponse({}));
  }

  async modifyBackupSetDownloadRules(request: ModifyBackupSetDownloadRulesRequest): Promise<ModifyBackupSetDownloadRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupSetDownloadRulesWithOptions(request, runtime);
  }

  async modifyBackupSourceEndpointWithOptions(request: ModifyBackupSourceEndpointRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupSourceEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupGatewayId)) {
      query["BackupGatewayId"] = request.backupGatewayId;
    }

    if (!Util.isUnset(request.backupObjects)) {
      query["BackupObjects"] = request.backupObjects;
    }

    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.crossAliyunId)) {
      query["CrossAliyunId"] = request.crossAliyunId;
    }

    if (!Util.isUnset(request.crossRoleName)) {
      query["CrossRoleName"] = request.crossRoleName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.sourceEndpointDatabaseName)) {
      query["SourceEndpointDatabaseName"] = request.sourceEndpointDatabaseName;
    }

    if (!Util.isUnset(request.sourceEndpointIP)) {
      query["SourceEndpointIP"] = request.sourceEndpointIP;
    }

    if (!Util.isUnset(request.sourceEndpointInstanceID)) {
      query["SourceEndpointInstanceID"] = request.sourceEndpointInstanceID;
    }

    if (!Util.isUnset(request.sourceEndpointInstanceType)) {
      query["SourceEndpointInstanceType"] = request.sourceEndpointInstanceType;
    }

    if (!Util.isUnset(request.sourceEndpointOracleSID)) {
      query["SourceEndpointOracleSID"] = request.sourceEndpointOracleSID;
    }

    if (!Util.isUnset(request.sourceEndpointPassword)) {
      query["SourceEndpointPassword"] = request.sourceEndpointPassword;
    }

    if (!Util.isUnset(request.sourceEndpointPort)) {
      query["SourceEndpointPort"] = request.sourceEndpointPort;
    }

    if (!Util.isUnset(request.sourceEndpointRegion)) {
      query["SourceEndpointRegion"] = request.sourceEndpointRegion;
    }

    if (!Util.isUnset(request.sourceEndpointUserName)) {
      query["SourceEndpointUserName"] = request.sourceEndpointUserName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBackupSourceEndpoint",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBackupSourceEndpointResponse>(await this.callApi(params, req, runtime), new ModifyBackupSourceEndpointResponse({}));
  }

  async modifyBackupSourceEndpoint(request: ModifyBackupSourceEndpointRequest): Promise<ModifyBackupSourceEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupSourceEndpointWithOptions(request, runtime);
  }

  async modifyBackupStrategyWithOptions(request: ModifyBackupStrategyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupLogIntervalSeconds)) {
      query["BackupLogIntervalSeconds"] = request.backupLogIntervalSeconds;
    }

    if (!Util.isUnset(request.backupPeriod)) {
      query["BackupPeriod"] = request.backupPeriod;
    }

    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.backupStartTime)) {
      query["BackupStartTime"] = request.backupStartTime;
    }

    if (!Util.isUnset(request.backupStrategyType)) {
      query["BackupStrategyType"] = request.backupStrategyType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBackupStrategy",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBackupStrategyResponse>(await this.callApi(params, req, runtime), new ModifyBackupStrategyResponse({}));
  }

  async modifyBackupStrategy(request: ModifyBackupStrategyRequest): Promise<ModifyBackupStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupStrategyWithOptions(request, runtime);
  }

  async modifyStorageStrategyWithOptions(request: ModifyStorageStrategyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyStorageStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.duplicationArchivePeriod)) {
      query["DuplicationArchivePeriod"] = request.duplicationArchivePeriod;
    }

    if (!Util.isUnset(request.duplicationInfrequentAccessPeriod)) {
      query["DuplicationInfrequentAccessPeriod"] = request.duplicationInfrequentAccessPeriod;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyStorageStrategy",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyStorageStrategyResponse>(await this.callApi(params, req, runtime), new ModifyStorageStrategyResponse({}));
  }

  async modifyStorageStrategy(request: ModifyStorageStrategyRequest): Promise<ModifyStorageStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyStorageStrategyWithOptions(request, runtime);
  }

  async releaseBackupPlanWithOptions(request: ReleaseBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseBackupPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseBackupPlan",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseBackupPlanResponse>(await this.callApi(params, req, runtime), new ReleaseBackupPlanResponse({}));
  }

  async releaseBackupPlan(request: ReleaseBackupPlanRequest): Promise<ReleaseBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseBackupPlanWithOptions(request, runtime);
  }

  async renewBackupPlanWithOptions(request: RenewBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<RenewBackupPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewBackupPlan",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewBackupPlanResponse>(await this.callApi(params, req, runtime), new RenewBackupPlanResponse({}));
  }

  async renewBackupPlan(request: RenewBackupPlanRequest): Promise<RenewBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewBackupPlanWithOptions(request, runtime);
  }

  async startBackupPlanWithOptions(request: StartBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<StartBackupPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartBackupPlan",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartBackupPlanResponse>(await this.callApi(params, req, runtime), new StartBackupPlanResponse({}));
  }

  async startBackupPlan(request: StartBackupPlanRequest): Promise<StartBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startBackupPlanWithOptions(request, runtime);
  }

  async startRestoreTaskWithOptions(request: StartRestoreTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartRestoreTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.restoreTaskId)) {
      query["RestoreTaskId"] = request.restoreTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartRestoreTask",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartRestoreTaskResponse>(await this.callApi(params, req, runtime), new StartRestoreTaskResponse({}));
  }

  async startRestoreTask(request: StartRestoreTaskRequest): Promise<StartRestoreTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRestoreTaskWithOptions(request, runtime);
  }

  async stopBackupPlanWithOptions(request: StopBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<StopBackupPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.stopMethod)) {
      query["StopMethod"] = request.stopMethod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopBackupPlan",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopBackupPlanResponse>(await this.callApi(params, req, runtime), new StopBackupPlanResponse({}));
  }

  async stopBackupPlan(request: StopBackupPlanRequest): Promise<StopBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopBackupPlanWithOptions(request, runtime);
  }

  async upgradeBackupPlanWithOptions(request: UpgradeBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeBackupPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeBackupPlan",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeBackupPlanResponse>(await this.callApi(params, req, runtime), new UpgradeBackupPlanResponse({}));
  }

  async upgradeBackupPlan(request: UpgradeBackupPlanRequest): Promise<UpgradeBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeBackupPlanWithOptions(request, runtime);
  }

}
