// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ConfigureDtsJobRequest extends $tea.Model {
  dtsJobName?: string;
  sourceEndpointInstanceType?: string;
  sourceEndpointInstanceID?: string;
  sourceEndpointEngineName?: string;
  sourceEndpointRegion?: string;
  sourceEndpointIP?: string;
  sourceEndpointPort?: string;
  sourceEndpointOracleSID?: string;
  sourceEndpointDatabaseName?: string;
  sourceEndpointUserName?: string;
  sourceEndpointPassword?: string;
  sourceEndpointOwnerID?: string;
  sourceEndpointRole?: string;
  destinationEndpointInstanceType?: string;
  destinationEndpointInstanceID?: string;
  destinationEndpointEngineName?: string;
  destinationEndpointRegion?: string;
  destinationEndpointIP?: string;
  destinationEndpointPort?: string;
  destinationEndpointDataBaseName?: string;
  destinationEndpointUserName?: string;
  destinationEndpointPassword?: string;
  structureInitialization?: boolean;
  dataInitialization?: boolean;
  dataSynchronization?: boolean;
  dbList?: string;
  reserve?: string;
  checkpoint?: string;
  ownerId?: string;
  destinationEndpointOracleSID?: string;
  jobType?: string;
  dtsJobId?: string;
  dtsInstanceId?: string;
  delayPhone?: string;
  delayRuleTime?: number;
  delayNotice?: boolean;
  errorPhone?: string;
  errorNotice?: boolean;
  synchronizationDirection?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobName: 'DtsJobName',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointEngineName: 'SourceEndpointEngineName',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointUserName: 'SourceEndpointUserName',
      sourceEndpointPassword: 'SourceEndpointPassword',
      sourceEndpointOwnerID: 'SourceEndpointOwnerID',
      sourceEndpointRole: 'SourceEndpointRole',
      destinationEndpointInstanceType: 'DestinationEndpointInstanceType',
      destinationEndpointInstanceID: 'DestinationEndpointInstanceID',
      destinationEndpointEngineName: 'DestinationEndpointEngineName',
      destinationEndpointRegion: 'DestinationEndpointRegion',
      destinationEndpointIP: 'DestinationEndpointIP',
      destinationEndpointPort: 'DestinationEndpointPort',
      destinationEndpointDataBaseName: 'DestinationEndpointDataBaseName',
      destinationEndpointUserName: 'DestinationEndpointUserName',
      destinationEndpointPassword: 'DestinationEndpointPassword',
      structureInitialization: 'StructureInitialization',
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      dbList: 'DbList',
      reserve: 'Reserve',
      checkpoint: 'Checkpoint',
      ownerId: 'OwnerId',
      destinationEndpointOracleSID: 'DestinationEndpointOracleSID',
      jobType: 'JobType',
      dtsJobId: 'DtsJobId',
      dtsInstanceId: 'DtsInstanceId',
      delayPhone: 'DelayPhone',
      delayRuleTime: 'DelayRuleTime',
      delayNotice: 'DelayNotice',
      errorPhone: 'ErrorPhone',
      errorNotice: 'ErrorNotice',
      synchronizationDirection: 'SynchronizationDirection',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobName: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointEngineName: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointPort: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointUserName: 'string',
      sourceEndpointPassword: 'string',
      sourceEndpointOwnerID: 'string',
      sourceEndpointRole: 'string',
      destinationEndpointInstanceType: 'string',
      destinationEndpointInstanceID: 'string',
      destinationEndpointEngineName: 'string',
      destinationEndpointRegion: 'string',
      destinationEndpointIP: 'string',
      destinationEndpointPort: 'string',
      destinationEndpointDataBaseName: 'string',
      destinationEndpointUserName: 'string',
      destinationEndpointPassword: 'string',
      structureInitialization: 'boolean',
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      dbList: 'string',
      reserve: 'string',
      checkpoint: 'string',
      ownerId: 'string',
      destinationEndpointOracleSID: 'string',
      jobType: 'string',
      dtsJobId: 'string',
      dtsInstanceId: 'string',
      delayPhone: 'string',
      delayRuleTime: 'number',
      delayNotice: 'boolean',
      errorPhone: 'string',
      errorNotice: 'boolean',
      synchronizationDirection: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureDtsJobResponseBody extends $tea.Model {
  httpStatusCode?: string;
  requestId?: string;
  errCode?: string;
  dtsJobId?: string;
  dtsInstanceId?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      dtsJobId: 'DtsJobId',
      dtsInstanceId: 'DtsInstanceId',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'string',
      requestId: 'string',
      errCode: 'string',
      dtsJobId: 'string',
      dtsInstanceId: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureDtsJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigureDtsJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigureDtsJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureMigrationJobRequest extends $tea.Model {
  sourceEndpoint?: ConfigureMigrationJobRequestSourceEndpoint;
  destinationEndpoint?: ConfigureMigrationJobRequestDestinationEndpoint;
  migrationMode?: ConfigureMigrationJobRequestMigrationMode;
  regionId?: string;
  migrationJobId?: string;
  migrationJobName?: string;
  migrationObject?: string;
  migrationReserved?: string;
  checkpoint?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceEndpoint: 'SourceEndpoint',
      destinationEndpoint: 'DestinationEndpoint',
      migrationMode: 'MigrationMode',
      regionId: 'RegionId',
      migrationJobId: 'MigrationJobId',
      migrationJobName: 'MigrationJobName',
      migrationObject: 'MigrationObject',
      migrationReserved: 'MigrationReserved',
      checkpoint: 'Checkpoint',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceEndpoint: ConfigureMigrationJobRequestSourceEndpoint,
      destinationEndpoint: ConfigureMigrationJobRequestDestinationEndpoint,
      migrationMode: ConfigureMigrationJobRequestMigrationMode,
      regionId: 'string',
      migrationJobId: 'string',
      migrationJobName: 'string',
      migrationObject: 'string',
      migrationReserved: 'string',
      checkpoint: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureMigrationJobResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureMigrationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigureMigrationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigureMigrationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureMigrationJobAlertRequest extends $tea.Model {
  regionId?: string;
  migrationJobId?: string;
  delayAlertStatus?: string;
  delayAlertPhone?: string;
  errorAlertStatus?: string;
  errorAlertPhone?: string;
  delayOverSeconds?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      migrationJobId: 'MigrationJobId',
      delayAlertStatus: 'DelayAlertStatus',
      delayAlertPhone: 'DelayAlertPhone',
      errorAlertStatus: 'ErrorAlertStatus',
      errorAlertPhone: 'ErrorAlertPhone',
      delayOverSeconds: 'DelayOverSeconds',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      migrationJobId: 'string',
      delayAlertStatus: 'string',
      delayAlertPhone: 'string',
      errorAlertStatus: 'string',
      errorAlertPhone: 'string',
      delayOverSeconds: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureMigrationJobAlertResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureMigrationJobAlertResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigureMigrationJobAlertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigureMigrationJobAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionRequest extends $tea.Model {
  regionId?: string;
  dtsJobName?: string;
  dtsInstanceId?: string;
  dtsJobId?: string;
  sourceEndpointEngineName?: string;
  sourceEndpointInstanceType?: string;
  sourceEndpointRegion?: string;
  sourceEndpointInstanceID?: string;
  sourceEndpointIP?: string;
  sourceEndpointPort?: string;
  sourceEndpointOracleSID?: string;
  sourceEndpointDatabaseName?: string;
  sourceEndpointUserName?: string;
  sourceEndpointPassword?: string;
  sourceEndpointOwnerID?: string;
  sourceEndpointRole?: string;
  dbList?: string;
  reserve?: string;
  checkpoint?: string;
  subscriptionInstanceNetworkType?: string;
  subscriptionInstanceVPCId?: string;
  subscriptionInstanceVSwitchId?: string;
  subscriptionDataTypeDDL?: boolean;
  subscriptionDataTypeDML?: boolean;
  delayPhone?: string;
  delayRuleTime?: number;
  delayNotice?: boolean;
  errorPhone?: string;
  errorNotice?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dtsJobName: 'DtsJobName',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      sourceEndpointEngineName: 'SourceEndpointEngineName',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointUserName: 'SourceEndpointUserName',
      sourceEndpointPassword: 'SourceEndpointPassword',
      sourceEndpointOwnerID: 'SourceEndpointOwnerID',
      sourceEndpointRole: 'SourceEndpointRole',
      dbList: 'DbList',
      reserve: 'Reserve',
      checkpoint: 'Checkpoint',
      subscriptionInstanceNetworkType: 'SubscriptionInstanceNetworkType',
      subscriptionInstanceVPCId: 'SubscriptionInstanceVPCId',
      subscriptionInstanceVSwitchId: 'SubscriptionInstanceVSwitchId',
      subscriptionDataTypeDDL: 'SubscriptionDataTypeDDL',
      subscriptionDataTypeDML: 'SubscriptionDataTypeDML',
      delayPhone: 'DelayPhone',
      delayRuleTime: 'DelayRuleTime',
      delayNotice: 'DelayNotice',
      errorPhone: 'ErrorPhone',
      errorNotice: 'ErrorNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dtsJobName: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      sourceEndpointEngineName: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointPort: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointUserName: 'string',
      sourceEndpointPassword: 'string',
      sourceEndpointOwnerID: 'string',
      sourceEndpointRole: 'string',
      dbList: 'string',
      reserve: 'string',
      checkpoint: 'string',
      subscriptionInstanceNetworkType: 'string',
      subscriptionInstanceVPCId: 'string',
      subscriptionInstanceVSwitchId: 'string',
      subscriptionDataTypeDDL: 'boolean',
      subscriptionDataTypeDML: 'boolean',
      delayPhone: 'string',
      delayRuleTime: 'number',
      delayNotice: 'boolean',
      errorPhone: 'string',
      errorNotice: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionResponseBody extends $tea.Model {
  httpStatusCode?: string;
  requestId?: string;
  errCode?: string;
  dtsJobId?: string;
  success?: string;
  dtsInstanceId?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      dtsJobId: 'DtsJobId',
      success: 'Success',
      dtsInstanceId: 'DtsInstanceId',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'string',
      requestId: 'string',
      errCode: 'string',
      dtsJobId: 'string',
      success: 'string',
      dtsInstanceId: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigureSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigureSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionInstanceRequest extends $tea.Model {
  sourceEndpoint?: ConfigureSubscriptionInstanceRequestSourceEndpoint;
  subscriptionDataType?: ConfigureSubscriptionInstanceRequestSubscriptionDataType;
  subscriptionInstance?: ConfigureSubscriptionInstanceRequestSubscriptionInstance;
  regionId?: string;
  subscriptionInstanceId?: string;
  subscriptionInstanceName?: string;
  subscriptionObject?: string;
  subscriptionInstanceNetworkType?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceEndpoint: 'SourceEndpoint',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionInstance: 'SubscriptionInstance',
      regionId: 'RegionId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      subscriptionObject: 'SubscriptionObject',
      subscriptionInstanceNetworkType: 'SubscriptionInstanceNetworkType',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceEndpoint: ConfigureSubscriptionInstanceRequestSourceEndpoint,
      subscriptionDataType: ConfigureSubscriptionInstanceRequestSubscriptionDataType,
      subscriptionInstance: ConfigureSubscriptionInstanceRequestSubscriptionInstance,
      regionId: 'string',
      subscriptionInstanceId: 'string',
      subscriptionInstanceName: 'string',
      subscriptionObject: 'string',
      subscriptionInstanceNetworkType: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionInstanceResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigureSubscriptionInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigureSubscriptionInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionInstanceAlertRequest extends $tea.Model {
  regionId?: string;
  subscriptionInstanceId?: string;
  delayAlertStatus?: string;
  delayAlertPhone?: string;
  errorAlertStatus?: string;
  errorAlertPhone?: string;
  delayOverSeconds?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      delayAlertStatus: 'DelayAlertStatus',
      delayAlertPhone: 'DelayAlertPhone',
      errorAlertStatus: 'ErrorAlertStatus',
      errorAlertPhone: 'ErrorAlertPhone',
      delayOverSeconds: 'DelayOverSeconds',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subscriptionInstanceId: 'string',
      delayAlertStatus: 'string',
      delayAlertPhone: 'string',
      errorAlertStatus: 'string',
      errorAlertPhone: 'string',
      delayOverSeconds: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionInstanceAlertResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionInstanceAlertResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigureSubscriptionInstanceAlertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigureSubscriptionInstanceAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobRequest extends $tea.Model {
  sourceEndpoint?: ConfigureSynchronizationJobRequestSourceEndpoint;
  destinationEndpoint?: ConfigureSynchronizationJobRequestDestinationEndpoint;
  partitionKey?: ConfigureSynchronizationJobRequestPartitionKey;
  regionId?: string;
  synchronizationJobName?: string;
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  structureInitialization?: boolean;
  dataInitialization?: boolean;
  synchronizationObjects?: string;
  migrationReserved?: string;
  checkpoint?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceEndpoint: 'SourceEndpoint',
      destinationEndpoint: 'DestinationEndpoint',
      partitionKey: 'PartitionKey',
      regionId: 'RegionId',
      synchronizationJobName: 'SynchronizationJobName',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
      structureInitialization: 'StructureInitialization',
      dataInitialization: 'DataInitialization',
      synchronizationObjects: 'SynchronizationObjects',
      migrationReserved: 'MigrationReserved',
      checkpoint: 'Checkpoint',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceEndpoint: ConfigureSynchronizationJobRequestSourceEndpoint,
      destinationEndpoint: ConfigureSynchronizationJobRequestDestinationEndpoint,
      partitionKey: ConfigureSynchronizationJobRequestPartitionKey,
      regionId: 'string',
      synchronizationJobName: 'string',
      synchronizationJobId: 'string',
      synchronizationDirection: 'string',
      structureInitialization: 'boolean',
      dataInitialization: 'boolean',
      synchronizationObjects: 'string',
      migrationReserved: 'string',
      checkpoint: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigureSynchronizationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigureSynchronizationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobAlertRequest extends $tea.Model {
  regionId?: string;
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  delayAlertStatus?: string;
  delayAlertPhone?: string;
  errorAlertStatus?: string;
  errorAlertPhone?: string;
  delayOverSeconds?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
      delayAlertStatus: 'DelayAlertStatus',
      delayAlertPhone: 'DelayAlertPhone',
      errorAlertStatus: 'ErrorAlertStatus',
      errorAlertPhone: 'ErrorAlertPhone',
      delayOverSeconds: 'DelayOverSeconds',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      synchronizationJobId: 'string',
      synchronizationDirection: 'string',
      delayAlertStatus: 'string',
      delayAlertPhone: 'string',
      errorAlertStatus: 'string',
      errorAlertPhone: 'string',
      delayOverSeconds: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobAlertResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobAlertResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigureSynchronizationJobAlertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigureSynchronizationJobAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobReplicatorCompareRequest extends $tea.Model {
  regionId?: string;
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  synchronizationReplicatorCompareEnable?: boolean;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationReplicatorCompareEnable: 'SynchronizationReplicatorCompareEnable',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      synchronizationJobId: 'string',
      synchronizationDirection: 'string',
      synchronizationReplicatorCompareEnable: 'boolean',
      clientToken: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobReplicatorCompareResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobReplicatorCompareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigureSynchronizationJobReplicatorCompareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigureSynchronizationJobReplicatorCompareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerChannelRequest extends $tea.Model {
  regionId?: string;
  dtsInstanceId?: string;
  dtsJobId?: string;
  consumerGroupName?: string;
  consumerGroupPassword?: string;
  consumerGroupUserName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      consumerGroupName: 'ConsumerGroupName',
      consumerGroupPassword: 'ConsumerGroupPassword',
      consumerGroupUserName: 'ConsumerGroupUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      consumerGroupName: 'string',
      consumerGroupPassword: 'string',
      consumerGroupUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerChannelResponseBody extends $tea.Model {
  httpStatusCode?: string;
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  consumerGroupID?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      consumerGroupID: 'ConsumerGroupID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'string',
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
      consumerGroupID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConsumerChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConsumerChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupRequest extends $tea.Model {
  regionId?: string;
  subscriptionInstanceId?: string;
  consumerGroupName?: string;
  consumerGroupUserName?: string;
  consumerGroupPassword?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      consumerGroupName: 'ConsumerGroupName',
      consumerGroupUserName: 'ConsumerGroupUserName',
      consumerGroupPassword: 'ConsumerGroupPassword',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subscriptionInstanceId: 'string',
      consumerGroupName: 'string',
      consumerGroupUserName: 'string',
      consumerGroupPassword: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupResponseBody extends $tea.Model {
  consumerGroupID?: string;
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupID: 'ConsumerGroupID',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupID: 'string',
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConsumerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConsumerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDtsInstanceRequest extends $tea.Model {
  jobId?: string;
  instanceClass?: string;
  payType?: string;
  period?: string;
  syncArchitecture?: string;
  autoStart?: boolean;
  usedTime?: number;
  quantity?: number;
  autoPay?: boolean;
  type?: string;
  databaseCount?: number;
  sourceRegion?: string;
  destinationRegion?: string;
  sourceEndpointEngineName?: string;
  destinationEndpointEngineName?: string;
  computeUnit?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      instanceClass: 'InstanceClass',
      payType: 'PayType',
      period: 'Period',
      syncArchitecture: 'SyncArchitecture',
      autoStart: 'AutoStart',
      usedTime: 'UsedTime',
      quantity: 'Quantity',
      autoPay: 'AutoPay',
      type: 'Type',
      databaseCount: 'DatabaseCount',
      sourceRegion: 'SourceRegion',
      destinationRegion: 'DestinationRegion',
      sourceEndpointEngineName: 'SourceEndpointEngineName',
      destinationEndpointEngineName: 'DestinationEndpointEngineName',
      computeUnit: 'ComputeUnit',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      instanceClass: 'string',
      payType: 'string',
      period: 'string',
      syncArchitecture: 'string',
      autoStart: 'boolean',
      usedTime: 'number',
      quantity: 'number',
      autoPay: 'boolean',
      type: 'string',
      databaseCount: 'number',
      sourceRegion: 'string',
      destinationRegion: 'string',
      sourceEndpointEngineName: 'string',
      destinationEndpointEngineName: 'string',
      computeUnit: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDtsInstanceResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  jobId?: string;
  errMessage?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      jobId: 'JobId',
      errMessage: 'ErrMessage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      jobId: 'string',
      errMessage: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDtsInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDtsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDtsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobMonitorRuleRequest extends $tea.Model {
  dtsJobId?: string;
  type?: string;
  state?: string;
  phone?: string;
  delayRuleTime?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      type: 'Type',
      state: 'State',
      phone: 'Phone',
      delayRuleTime: 'DelayRuleTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      type: 'string',
      state: 'string',
      phone: 'string',
      delayRuleTime: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobMonitorRuleResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  dtsJobId?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: string;
  code?: string;
  dynamicMessage?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      dtsJobId: 'DtsJobId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      dtsJobId: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'string',
      code: 'string',
      dynamicMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobMonitorRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateJobMonitorRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateJobMonitorRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMigrationJobRequest extends $tea.Model {
  regionId?: string;
  region?: string;
  migrationJobClass?: string;
  ownerId?: string;
  clientToken?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      region: 'Region',
      migrationJobClass: 'MigrationJobClass',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      region: 'string',
      migrationJobClass: 'string',
      ownerId: 'string',
      clientToken: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMigrationJobResponseBody extends $tea.Model {
  requestId?: string;
  migrationJobId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      migrationJobId: 'MigrationJobId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      migrationJobId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMigrationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMigrationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMigrationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionInstanceRequest extends $tea.Model {
  sourceEndpoint?: CreateSubscriptionInstanceRequestSourceEndpoint;
  regionId?: string;
  region?: string;
  payType?: string;
  period?: string;
  usedTime?: number;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceEndpoint: 'SourceEndpoint',
      regionId: 'RegionId',
      region: 'Region',
      payType: 'PayType',
      period: 'Period',
      usedTime: 'UsedTime',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceEndpoint: CreateSubscriptionInstanceRequestSourceEndpoint,
      regionId: 'string',
      region: 'string',
      payType: 'string',
      period: 'string',
      usedTime: 'number',
      clientToken: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionInstanceResponseBody extends $tea.Model {
  requestId?: string;
  subscriptionInstanceId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subscriptionInstanceId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSubscriptionInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSubscriptionInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSynchronizationJobRequest extends $tea.Model {
  sourceEndpoint?: CreateSynchronizationJobRequestSourceEndpoint;
  destinationEndpoint?: CreateSynchronizationJobRequestDestinationEndpoint;
  regionId?: string;
  sourceRegion?: string;
  destRegion?: string;
  topology?: string;
  synchronizationJobClass?: string;
  payType?: string;
  period?: string;
  usedTime?: number;
  clientToken?: string;
  networkType?: string;
  ownerId?: string;
  accountId?: string;
  DBInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      sourceEndpoint: 'SourceEndpoint',
      destinationEndpoint: 'DestinationEndpoint',
      regionId: 'RegionId',
      sourceRegion: 'SourceRegion',
      destRegion: 'DestRegion',
      topology: 'Topology',
      synchronizationJobClass: 'SynchronizationJobClass',
      payType: 'PayType',
      period: 'Period',
      usedTime: 'UsedTime',
      clientToken: 'ClientToken',
      networkType: 'networkType',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
      DBInstanceCount: 'DBInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceEndpoint: CreateSynchronizationJobRequestSourceEndpoint,
      destinationEndpoint: CreateSynchronizationJobRequestDestinationEndpoint,
      regionId: 'string',
      sourceRegion: 'string',
      destRegion: 'string',
      topology: 'string',
      synchronizationJobClass: 'string',
      payType: 'string',
      period: 'string',
      usedTime: 'number',
      clientToken: 'string',
      networkType: 'string',
      ownerId: 'string',
      accountId: 'string',
      DBInstanceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSynchronizationJobResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  synchronizationJobId?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      synchronizationJobId: 'SynchronizationJobId',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      synchronizationJobId: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSynchronizationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSynchronizationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSynchronizationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerChannelRequest extends $tea.Model {
  regionId?: string;
  dtsInstanceId?: string;
  dtsJobId?: string;
  consumerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      consumerGroupId: 'ConsumerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      consumerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerChannelResponseBody extends $tea.Model {
  httpStatusCode?: string;
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'string',
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConsumerChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConsumerChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupRequest extends $tea.Model {
  regionId?: string;
  subscriptionInstanceId?: string;
  consumerGroupID?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      consumerGroupID: 'ConsumerGroupID',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subscriptionInstanceId: 'string',
      consumerGroupID: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConsumerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConsumerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDtsJobRequest extends $tea.Model {
  dtsJobId?: string;
  dtsInstanceId?: string;
  synchronizationDirection?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      dtsInstanceId: 'DtsInstanceId',
      synchronizationDirection: 'SynchronizationDirection',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      dtsInstanceId: 'string',
      synchronizationDirection: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDtsJobResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: string;
  dynamicMessage?: string;
  dynamicCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      dynamicMessage: 'DynamicMessage',
      dynamicCode: 'DynamicCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'string',
      dynamicMessage: 'string',
      dynamicCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDtsJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDtsJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDtsJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMigrationJobRequest extends $tea.Model {
  regionId?: string;
  migrationJobId?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      migrationJobId: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMigrationJobResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMigrationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMigrationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMigrationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubscriptionInstanceRequest extends $tea.Model {
  regionId?: string;
  subscriptionInstanceId?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subscriptionInstanceId: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubscriptionInstanceResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubscriptionInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSubscriptionInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSubscriptionInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSynchronizationJobRequest extends $tea.Model {
  regionId?: string;
  synchronizationJobId?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      synchronizationJobId: 'SynchronizationJobId',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      synchronizationJobId: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSynchronizationJobResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSynchronizationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSynchronizationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSynchronizationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionStatusRequest extends $tea.Model {
  sourceEndpointArchitecture?: string;
  sourceEndpointInstanceType?: string;
  sourceEndpointInstanceID?: string;
  sourceEndpointEngineName?: string;
  sourceEndpointRegion?: string;
  sourceEndpointIP?: string;
  sourceEndpointPort?: string;
  sourceEndpointOracleSID?: string;
  sourceEndpointDatabaseName?: string;
  sourceEndpointUserName?: string;
  sourceEndpointPassword?: string;
  destinationEndpointInstanceType?: string;
  destinationEndpointInstanceID?: string;
  destinationEndpointEngineName?: string;
  destinationEndpointRegion?: string;
  destinationEndpointIP?: string;
  destinationEndpointPort?: string;
  destinationEndpointDatabaseName?: string;
  destinationEndpointUserName?: string;
  destinationEndpointPassword?: string;
  destinationEndpointOracleSID?: string;
  destinationEndpointArchitecture?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceEndpointArchitecture: 'SourceEndpointArchitecture',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointEngineName: 'SourceEndpointEngineName',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointUserName: 'SourceEndpointUserName',
      sourceEndpointPassword: 'SourceEndpointPassword',
      destinationEndpointInstanceType: 'DestinationEndpointInstanceType',
      destinationEndpointInstanceID: 'DestinationEndpointInstanceID',
      destinationEndpointEngineName: 'DestinationEndpointEngineName',
      destinationEndpointRegion: 'DestinationEndpointRegion',
      destinationEndpointIP: 'DestinationEndpointIP',
      destinationEndpointPort: 'DestinationEndpointPort',
      destinationEndpointDatabaseName: 'DestinationEndpointDatabaseName',
      destinationEndpointUserName: 'DestinationEndpointUserName',
      destinationEndpointPassword: 'DestinationEndpointPassword',
      destinationEndpointOracleSID: 'DestinationEndpointOracleSID',
      destinationEndpointArchitecture: 'DestinationEndpointArchitecture',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceEndpointArchitecture: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointEngineName: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointPort: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointUserName: 'string',
      sourceEndpointPassword: 'string',
      destinationEndpointInstanceType: 'string',
      destinationEndpointInstanceID: 'string',
      destinationEndpointEngineName: 'string',
      destinationEndpointRegion: 'string',
      destinationEndpointIP: 'string',
      destinationEndpointPort: 'string',
      destinationEndpointDatabaseName: 'string',
      destinationEndpointUserName: 'string',
      destinationEndpointPassword: 'string',
      destinationEndpointOracleSID: 'string',
      destinationEndpointArchitecture: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionStatusResponseBody extends $tea.Model {
  sourceConnectionStatus?: { [key: string]: any };
  destinationConnectionStatus?: { [key: string]: any };
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      sourceConnectionStatus: 'SourceConnectionStatus',
      destinationConnectionStatus: 'DestinationConnectionStatus',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceConnectionStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      destinationConnectionStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConnectionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConnectionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerChannelRequest extends $tea.Model {
  regionId?: string;
  dtsInstanceId?: string;
  dtsJobId?: string;
  pageSize?: number;
  pageNumber?: number;
  parentChannelId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      parentChannelId: 'ParentChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      parentChannelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerChannelResponseBody extends $tea.Model {
  httpStatusCode?: string;
  requestId?: string;
  errCode?: string;
  pageRecordCount?: number;
  success?: string;
  totalRecordCount?: number;
  errMessage?: string;
  pageNumber?: number;
  consumerChannels?: DescribeConsumerChannelResponseBodyConsumerChannels[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      pageRecordCount: 'PageRecordCount',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
      errMessage: 'ErrMessage',
      pageNumber: 'PageNumber',
      consumerChannels: 'ConsumerChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'string',
      requestId: 'string',
      errCode: 'string',
      pageRecordCount: 'number',
      success: 'string',
      totalRecordCount: 'number',
      errMessage: 'string',
      pageNumber: 'number',
      consumerChannels: { 'type': 'array', 'itemType': DescribeConsumerChannelResponseBodyConsumerChannels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConsumerChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConsumerChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerGroupRequest extends $tea.Model {
  regionId?: string;
  pageSize?: number;
  pageNum?: number;
  subscriptionInstanceId?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageSize: 'number',
      pageNum: 'number',
      subscriptionInstanceId: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerGroupResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  pageRecordCount?: number;
  totalRecordCount?: number;
  errMessage?: string;
  pageNumber?: number;
  consumerChannels?: DescribeConsumerGroupResponseBodyConsumerChannels;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      errMessage: 'ErrMessage',
      pageNumber: 'PageNumber',
      consumerChannels: 'ConsumerChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      errMessage: 'string',
      pageNumber: 'number',
      consumerChannels: DescribeConsumerGroupResponseBodyConsumerChannels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConsumerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConsumerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDTSIPRequest extends $tea.Model {
  regionId?: string;
  sourceEndpointRegion?: string;
  destinationEndpointRegion?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sourceEndpointRegion: 'SourceEndpointRegion',
      destinationEndpointRegion: 'DestinationEndpointRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sourceEndpointRegion: 'string',
      destinationEndpointRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDTSIPResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  dynamicMessage?: string;
  dynamicCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      dynamicMessage: 'DynamicMessage',
      dynamicCode: 'DynamicCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
      dynamicMessage: 'string',
      dynamicCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDTSIPResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDTSIPResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDTSIPResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailRequest extends $tea.Model {
  dtsJobId?: string;
  dtsInstanceID?: string;
  synchronizationDirection?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      dtsInstanceID: 'DtsInstanceID',
      synchronizationDirection: 'SynchronizationDirection',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      dtsInstanceID: 'string',
      synchronizationDirection: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBody extends $tea.Model {
  status?: string;
  dtsJobName?: string;
  finishTime?: string;
  errorMessage?: string;
  dtsJobId?: string;
  createTime?: string;
  payType?: string;
  reserved?: string;
  databaseCount?: number;
  dtsJobClass?: string;
  endTimestamp?: string;
  appName?: string;
  destNetType?: string;
  subscribeTopic?: string;
  dtsInstanceID?: string;
  requestId?: string;
  code?: number;
  checkpoint?: number;
  delay?: number;
  expireTime?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: string;
  consumptionClient?: string;
  dbObject?: string;
  dynamicMessage?: string;
  consumptionCheckpoint?: string;
  etlCalculator?: string;
  httpStatusCode?: number;
  beginTimestamp?: string;
  groupId?: string;
  synchronizationDirection?: string;
  dtsJobDirection?: string;
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySourceEndpoint;
  destinationEndpoint?: DescribeDtsJobDetailResponseBodyDestinationEndpoint;
  migrationMode?: DescribeDtsJobDetailResponseBodyMigrationMode;
  subscriptionHost?: DescribeDtsJobDetailResponseBodySubscriptionHost;
  subscriptionDataType?: DescribeDtsJobDetailResponseBodySubscriptionDataType;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      dtsJobName: 'DtsJobName',
      finishTime: 'FinishTime',
      errorMessage: 'ErrorMessage',
      dtsJobId: 'DtsJobId',
      createTime: 'CreateTime',
      payType: 'PayType',
      reserved: 'Reserved',
      databaseCount: 'DatabaseCount',
      dtsJobClass: 'DtsJobClass',
      endTimestamp: 'EndTimestamp',
      appName: 'AppName',
      destNetType: 'DestNetType',
      subscribeTopic: 'SubscribeTopic',
      dtsInstanceID: 'DtsInstanceID',
      requestId: 'RequestId',
      code: 'Code',
      checkpoint: 'Checkpoint',
      delay: 'Delay',
      expireTime: 'ExpireTime',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      consumptionClient: 'ConsumptionClient',
      dbObject: 'DbObject',
      dynamicMessage: 'DynamicMessage',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      etlCalculator: 'EtlCalculator',
      httpStatusCode: 'HttpStatusCode',
      beginTimestamp: 'BeginTimestamp',
      groupId: 'GroupId',
      synchronizationDirection: 'SynchronizationDirection',
      dtsJobDirection: 'DtsJobDirection',
      sourceEndpoint: 'SourceEndpoint',
      destinationEndpoint: 'DestinationEndpoint',
      migrationMode: 'MigrationMode',
      subscriptionHost: 'SubscriptionHost',
      subscriptionDataType: 'SubscriptionDataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      dtsJobName: 'string',
      finishTime: 'string',
      errorMessage: 'string',
      dtsJobId: 'string',
      createTime: 'string',
      payType: 'string',
      reserved: 'string',
      databaseCount: 'number',
      dtsJobClass: 'string',
      endTimestamp: 'string',
      appName: 'string',
      destNetType: 'string',
      subscribeTopic: 'string',
      dtsInstanceID: 'string',
      requestId: 'string',
      code: 'number',
      checkpoint: 'number',
      delay: 'number',
      expireTime: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'string',
      consumptionClient: 'string',
      dbObject: 'string',
      dynamicMessage: 'string',
      consumptionCheckpoint: 'string',
      etlCalculator: 'string',
      httpStatusCode: 'number',
      beginTimestamp: 'string',
      groupId: 'string',
      synchronizationDirection: 'string',
      dtsJobDirection: 'string',
      sourceEndpoint: DescribeDtsJobDetailResponseBodySourceEndpoint,
      destinationEndpoint: DescribeDtsJobDetailResponseBodyDestinationEndpoint,
      migrationMode: DescribeDtsJobDetailResponseBodyMigrationMode,
      subscriptionHost: DescribeDtsJobDetailResponseBodySubscriptionHost,
      subscriptionDataType: DescribeDtsJobDetailResponseBodySubscriptionDataType,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDtsJobDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDtsJobDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsRequest extends $tea.Model {
  type?: string;
  params?: string;
  region?: string;
  status?: string;
  orderDirection?: string;
  orderColumn?: string;
  tags?: string;
  pageSize?: number;
  pageNumber?: number;
  jobType?: string;
  regionId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      params: 'Params',
      region: 'Region',
      status: 'Status',
      orderDirection: 'OrderDirection',
      orderColumn: 'OrderColumn',
      tags: 'Tags',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      jobType: 'JobType',
      regionId: 'RegionId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      params: 'string',
      region: 'string',
      status: 'string',
      orderDirection: 'string',
      orderColumn: 'string',
      tags: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      jobType: 'string',
      regionId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errCode?: string;
  success?: boolean;
  pageRecordCount?: number;
  totalRecordCount?: number;
  errMessage?: string;
  dynamicMessage?: string;
  pageNumber?: number;
  dynamicCode?: string;
  dtsJobList?: DescribeDtsJobsResponseBodyDtsJobList[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      errMessage: 'ErrMessage',
      dynamicMessage: 'DynamicMessage',
      pageNumber: 'PageNumber',
      dynamicCode: 'DynamicCode',
      dtsJobList: 'DtsJobList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errCode: 'string',
      success: 'boolean',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      errMessage: 'string',
      dynamicMessage: 'string',
      pageNumber: 'number',
      dynamicCode: 'string',
      dtsJobList: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDtsJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDtsJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointSwitchStatusRequest extends $tea.Model {
  regionId?: string;
  taskId?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskId: 'TaskId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointSwitchStatusResponseBody extends $tea.Model {
  status?: string;
  errorMessage?: string;
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      errorMessage: 'string',
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointSwitchStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEndpointSwitchStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEndpointSwitchStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusRequest extends $tea.Model {
  regionId?: string;
  synchronizationJobId?: string;
  pageSize?: number;
  pageNum?: number;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      synchronizationJobId: 'SynchronizationJobId',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      synchronizationJobId: 'string',
      pageSize: 'number',
      pageNum: 'number',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  dataInitializationDetails?: DescribeInitializationStatusResponseBodyDataInitializationDetails[];
  dataSynchronizationDetails?: DescribeInitializationStatusResponseBodyDataSynchronizationDetails[];
  structureInitializationDetails?: DescribeInitializationStatusResponseBodyStructureInitializationDetails[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      dataInitializationDetails: 'DataInitializationDetails',
      dataSynchronizationDetails: 'DataSynchronizationDetails',
      structureInitializationDetails: 'StructureInitializationDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
      dataInitializationDetails: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyDataInitializationDetails },
      dataSynchronizationDetails: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyDataSynchronizationDetails },
      structureInitializationDetails: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyStructureInitializationDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInitializationStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInitializationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMonitorRuleRequest extends $tea.Model {
  dtsJobId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMonitorRuleResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  dtsJobId?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: string;
  code?: string;
  dynamicMessage?: string;
  monitorRules?: DescribeJobMonitorRuleResponseBodyMonitorRules[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      dtsJobId: 'DtsJobId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      monitorRules: 'MonitorRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      dtsJobId: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'string',
      code: 'string',
      dynamicMessage: 'string',
      monitorRules: { 'type': 'array', 'itemType': DescribeJobMonitorRuleResponseBodyMonitorRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMonitorRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeJobMonitorRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeJobMonitorRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobAlertRequest extends $tea.Model {
  regionId?: string;
  migrationJobId?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      migrationJobId: 'MigrationJobId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      migrationJobId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobAlertResponseBody extends $tea.Model {
  requestId?: string;
  migrationJobName?: string;
  errorAlertStatus?: string;
  errCode?: string;
  success?: string;
  errorAlertPhone?: string;
  errMessage?: string;
  delayAlertStatus?: string;
  delayAlertPhone?: string;
  migrationJobId?: string;
  delayOverSeconds?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      migrationJobName: 'MigrationJobName',
      errorAlertStatus: 'ErrorAlertStatus',
      errCode: 'ErrCode',
      success: 'Success',
      errorAlertPhone: 'ErrorAlertPhone',
      errMessage: 'ErrMessage',
      delayAlertStatus: 'DelayAlertStatus',
      delayAlertPhone: 'DelayAlertPhone',
      migrationJobId: 'MigrationJobId',
      delayOverSeconds: 'DelayOverSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      migrationJobName: 'string',
      errorAlertStatus: 'string',
      errCode: 'string',
      success: 'string',
      errorAlertPhone: 'string',
      errMessage: 'string',
      delayAlertStatus: 'string',
      delayAlertPhone: 'string',
      migrationJobId: 'string',
      delayOverSeconds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobAlertResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMigrationJobAlertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMigrationJobAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailRequest extends $tea.Model {
  migrationMode?: DescribeMigrationJobDetailRequestMigrationMode;
  regionId?: string;
  pageSize?: number;
  pageNum?: number;
  migrationJobId?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      migrationMode: 'MigrationMode',
      regionId: 'RegionId',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      migrationJobId: 'MigrationJobId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationMode: DescribeMigrationJobDetailRequestMigrationMode,
      regionId: 'string',
      pageSize: 'number',
      pageNum: 'number',
      migrationJobId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  pageRecordCount?: number;
  success?: string;
  totalRecordCount?: number;
  errMessage?: string;
  pageNumber?: number;
  dataInitializationDetailList?: DescribeMigrationJobDetailResponseBodyDataInitializationDetailList;
  dataSynchronizationDetailList?: DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailList;
  structureInitializationDetailList?: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      pageRecordCount: 'PageRecordCount',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
      errMessage: 'ErrMessage',
      pageNumber: 'PageNumber',
      dataInitializationDetailList: 'DataInitializationDetailList',
      dataSynchronizationDetailList: 'DataSynchronizationDetailList',
      structureInitializationDetailList: 'StructureInitializationDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      pageRecordCount: 'number',
      success: 'string',
      totalRecordCount: 'number',
      errMessage: 'string',
      pageNumber: 'number',
      dataInitializationDetailList: DescribeMigrationJobDetailResponseBodyDataInitializationDetailList,
      dataSynchronizationDetailList: DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailList,
      structureInitializationDetailList: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMigrationJobDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMigrationJobDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsRequest extends $tea.Model {
  regionId?: string;
  pageSize?: number;
  pageNum?: number;
  migrationJobName?: string;
  ownerId?: string;
  accountId?: string;
  tag?: DescribeMigrationJobsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      migrationJobName: 'MigrationJobName',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageSize: 'number',
      pageNum: 'number',
      migrationJobName: 'string',
      ownerId: 'string',
      accountId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeMigrationJobsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  pageRecordCount?: number;
  success?: string;
  totalRecordCount?: number;
  errMessage?: string;
  pageNumber?: number;
  migrationJobs?: DescribeMigrationJobsResponseBodyMigrationJobs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      pageRecordCount: 'PageRecordCount',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
      errMessage: 'ErrMessage',
      pageNumber: 'PageNumber',
      migrationJobs: 'MigrationJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      pageRecordCount: 'number',
      success: 'string',
      totalRecordCount: 'number',
      errMessage: 'string',
      pageNumber: 'number',
      migrationJobs: DescribeMigrationJobsResponseBodyMigrationJobs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMigrationJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMigrationJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusRequest extends $tea.Model {
  regionId?: string;
  migrationJobId?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      migrationJobId: 'MigrationJobId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      migrationJobId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBody extends $tea.Model {
  requestId?: string;
  migrationJobName?: string;
  migrationJobStatus?: string;
  errCode?: string;
  success?: string;
  payType?: string;
  errMessage?: string;
  migrationObject?: string;
  migrationJobId?: string;
  taskId?: string;
  migrationJobClass?: string;
  dataInitializationStatus?: DescribeMigrationJobStatusResponseBodyDataInitializationStatus;
  dataSynchronizationStatus?: DescribeMigrationJobStatusResponseBodyDataSynchronizationStatus;
  destinationEndpoint?: DescribeMigrationJobStatusResponseBodyDestinationEndpoint;
  migrationMode?: DescribeMigrationJobStatusResponseBodyMigrationMode;
  precheckStatus?: DescribeMigrationJobStatusResponseBodyPrecheckStatus;
  sourceEndpoint?: DescribeMigrationJobStatusResponseBodySourceEndpoint;
  structureInitializationStatus?: DescribeMigrationJobStatusResponseBodyStructureInitializationStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      migrationJobName: 'MigrationJobName',
      migrationJobStatus: 'MigrationJobStatus',
      errCode: 'ErrCode',
      success: 'Success',
      payType: 'PayType',
      errMessage: 'ErrMessage',
      migrationObject: 'MigrationObject',
      migrationJobId: 'MigrationJobId',
      taskId: 'TaskId',
      migrationJobClass: 'MigrationJobClass',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      destinationEndpoint: 'DestinationEndpoint',
      migrationMode: 'MigrationMode',
      precheckStatus: 'PrecheckStatus',
      sourceEndpoint: 'SourceEndpoint',
      structureInitializationStatus: 'StructureInitializationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      migrationJobName: 'string',
      migrationJobStatus: 'string',
      errCode: 'string',
      success: 'string',
      payType: 'string',
      errMessage: 'string',
      migrationObject: 'string',
      migrationJobId: 'string',
      taskId: 'string',
      migrationJobClass: 'string',
      dataInitializationStatus: DescribeMigrationJobStatusResponseBodyDataInitializationStatus,
      dataSynchronizationStatus: DescribeMigrationJobStatusResponseBodyDataSynchronizationStatus,
      destinationEndpoint: DescribeMigrationJobStatusResponseBodyDestinationEndpoint,
      migrationMode: DescribeMigrationJobStatusResponseBodyMigrationMode,
      precheckStatus: DescribeMigrationJobStatusResponseBodyPrecheckStatus,
      sourceEndpoint: DescribeMigrationJobStatusResponseBodySourceEndpoint,
      structureInitializationStatus: DescribeMigrationJobStatusResponseBodyStructureInitializationStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMigrationJobStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMigrationJobStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusRequest extends $tea.Model {
  dtsJobId?: string;
  pageNo?: string;
  pageSize?: string;
  jobCode?: string;
  structType?: string;
  regionId?: string;
  structPhase?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      jobCode: 'JobCode',
      structType: 'StructType',
      regionId: 'RegionId',
      structPhase: 'StructPhase',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      pageNo: 'string',
      pageSize: 'string',
      jobCode: 'string',
      structType: 'string',
      regionId: 'string',
      structPhase: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBody extends $tea.Model {
  state?: string;
  success?: boolean;
  pageRecordCount?: number;
  total?: number;
  httpStatusCode?: number;
  requestId?: string;
  jobName?: string;
  jobId?: string;
  errorItem?: number;
  totalRecordCount?: number;
  code?: string;
  pageNumber?: number;
  jobProgress?: DescribePreCheckStatusResponseBodyJobProgress[];
  subDistributedJobStatus?: DescribePreCheckStatusResponseBodySubDistributedJobStatus[];
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      success: 'Success',
      pageRecordCount: 'PageRecordCount',
      total: 'Total',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      jobName: 'JobName',
      jobId: 'JobId',
      errorItem: 'ErrorItem',
      totalRecordCount: 'TotalRecordCount',
      code: 'Code',
      pageNumber: 'PageNumber',
      jobProgress: 'JobProgress',
      subDistributedJobStatus: 'SubDistributedJobStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      success: 'boolean',
      pageRecordCount: 'number',
      total: 'number',
      httpStatusCode: 'number',
      requestId: 'string',
      jobName: 'string',
      jobId: 'string',
      errorItem: 'number',
      totalRecordCount: 'number',
      code: 'string',
      pageNumber: 'number',
      jobProgress: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyJobProgress },
      subDistributedJobStatus: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodySubDistributedJobStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePreCheckStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePreCheckStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceAlertRequest extends $tea.Model {
  regionId?: string;
  subscriptionInstanceId?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subscriptionInstanceId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceAlertResponseBody extends $tea.Model {
  requestId?: string;
  errorAlertStatus?: string;
  errCode?: string;
  success?: string;
  errorAlertPhone?: string;
  errMessage?: string;
  delayAlertStatus?: string;
  subscriptionInstanceName?: string;
  delayAlertPhone?: string;
  subscriptionInstanceID?: string;
  delayOverSeconds?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorAlertStatus: 'ErrorAlertStatus',
      errCode: 'ErrCode',
      success: 'Success',
      errorAlertPhone: 'ErrorAlertPhone',
      errMessage: 'ErrMessage',
      delayAlertStatus: 'DelayAlertStatus',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      delayAlertPhone: 'DelayAlertPhone',
      subscriptionInstanceID: 'SubscriptionInstanceID',
      delayOverSeconds: 'DelayOverSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorAlertStatus: 'string',
      errCode: 'string',
      success: 'string',
      errorAlertPhone: 'string',
      errMessage: 'string',
      delayAlertStatus: 'string',
      subscriptionInstanceName: 'string',
      delayAlertPhone: 'string',
      subscriptionInstanceID: 'string',
      delayOverSeconds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceAlertResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSubscriptionInstanceAlertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSubscriptionInstanceAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesRequest extends $tea.Model {
  regionId?: string;
  pageSize?: number;
  pageNum?: number;
  subscriptionInstanceName?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  tag?: DescribeSubscriptionInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageSize: 'number',
      pageNum: 'number',
      subscriptionInstanceName: 'string',
      clientToken: 'string',
      ownerId: 'string',
      accountId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeSubscriptionInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  pageRecordCount?: number;
  success?: string;
  totalRecordCount?: number;
  errMessage?: string;
  pageNumber?: number;
  subscriptionInstances?: DescribeSubscriptionInstancesResponseBodySubscriptionInstances;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      pageRecordCount: 'PageRecordCount',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
      errMessage: 'ErrMessage',
      pageNumber: 'PageNumber',
      subscriptionInstances: 'SubscriptionInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      pageRecordCount: 'number',
      success: 'string',
      totalRecordCount: 'number',
      errMessage: 'string',
      pageNumber: 'number',
      subscriptionInstances: DescribeSubscriptionInstancesResponseBodySubscriptionInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSubscriptionInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSubscriptionInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusRequest extends $tea.Model {
  regionId?: string;
  subscriptionInstanceId?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subscriptionInstanceId: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusResponseBody extends $tea.Model {
  status?: string;
  errorMessage?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  payType?: string;
  consumptionClient?: string;
  consumptionCheckpoint?: string;
  endTimestamp?: string;
  beginTimestamp?: string;
  requestId?: string;
  subscribeTopic?: string;
  subscriptionInstanceName?: string;
  subscriptionInstanceID?: string;
  taskId?: string;
  sourceEndpoint?: DescribeSubscriptionInstanceStatusResponseBodySourceEndpoint;
  subscriptionDataType?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionDataType;
  subscriptionHost?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionHost;
  subscriptionObject?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObject;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      errorMessage: 'ErrorMessage',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      payType: 'PayType',
      consumptionClient: 'ConsumptionClient',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      endTimestamp: 'EndTimestamp',
      beginTimestamp: 'BeginTimestamp',
      requestId: 'RequestId',
      subscribeTopic: 'SubscribeTopic',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      subscriptionInstanceID: 'SubscriptionInstanceID',
      taskId: 'TaskId',
      sourceEndpoint: 'SourceEndpoint',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionHost: 'SubscriptionHost',
      subscriptionObject: 'SubscriptionObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      errorMessage: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
      payType: 'string',
      consumptionClient: 'string',
      consumptionCheckpoint: 'string',
      endTimestamp: 'string',
      beginTimestamp: 'string',
      requestId: 'string',
      subscribeTopic: 'string',
      subscriptionInstanceName: 'string',
      subscriptionInstanceID: 'string',
      taskId: 'string',
      sourceEndpoint: DescribeSubscriptionInstanceStatusResponseBodySourceEndpoint,
      subscriptionDataType: DescribeSubscriptionInstanceStatusResponseBodySubscriptionDataType,
      subscriptionHost: DescribeSubscriptionInstanceStatusResponseBodySubscriptionHost,
      subscriptionObject: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSubscriptionInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSubscriptionInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionMetaRequest extends $tea.Model {
  sid?: string;
  dtsInstanceId?: string;
  subMigrationJobIds?: { [key: string]: any };
  topics?: { [key: string]: any };
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sid: 'Sid',
      dtsInstanceId: 'DtsInstanceId',
      subMigrationJobIds: 'SubMigrationJobIds',
      topics: 'Topics',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sid: 'string',
      dtsInstanceId: 'string',
      subMigrationJobIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      topics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionMetaShrinkRequest extends $tea.Model {
  sid?: string;
  dtsInstanceId?: string;
  subMigrationJobIdsShrink?: string;
  topicsShrink?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sid: 'Sid',
      dtsInstanceId: 'DtsInstanceId',
      subMigrationJobIdsShrink: 'SubMigrationJobIds',
      topicsShrink: 'Topics',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sid: 'string',
      dtsInstanceId: 'string',
      subMigrationJobIdsShrink: 'string',
      topicsShrink: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionMetaResponseBody extends $tea.Model {
  httpStatusCode?: string;
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  subscriptionMetaList?: DescribeSubscriptionMetaResponseBodySubscriptionMetaList[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      subscriptionMetaList: 'SubscriptionMetaList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'string',
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
      subscriptionMetaList: { 'type': 'array', 'itemType': DescribeSubscriptionMetaResponseBodySubscriptionMetaList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSubscriptionMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSubscriptionMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobAlertRequest extends $tea.Model {
  regionId?: string;
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      synchronizationJobId: 'string',
      synchronizationDirection: 'string',
      clientToken: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobAlertResponseBody extends $tea.Model {
  synchronizationJobName?: string;
  errorAlertStatus?: string;
  errCode?: string;
  success?: string;
  errorAlertPhone?: string;
  errMessage?: string;
  delayAlertStatus?: string;
  delayAlertPhone?: string;
  delayOverSeconds?: string;
  requestId?: string;
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationJobName: 'SynchronizationJobName',
      errorAlertStatus: 'ErrorAlertStatus',
      errCode: 'ErrCode',
      success: 'Success',
      errorAlertPhone: 'ErrorAlertPhone',
      errMessage: 'ErrMessage',
      delayAlertStatus: 'DelayAlertStatus',
      delayAlertPhone: 'DelayAlertPhone',
      delayOverSeconds: 'DelayOverSeconds',
      requestId: 'RequestId',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronizationJobName: 'string',
      errorAlertStatus: 'string',
      errCode: 'string',
      success: 'string',
      errorAlertPhone: 'string',
      errMessage: 'string',
      delayAlertStatus: 'string',
      delayAlertPhone: 'string',
      delayOverSeconds: 'string',
      requestId: 'string',
      synchronizationJobId: 'string',
      synchronizationDirection: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobAlertResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSynchronizationJobAlertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSynchronizationJobAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobReplicatorCompareRequest extends $tea.Model {
  regionId?: string;
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      synchronizationJobId: 'string',
      synchronizationDirection: 'string',
      clientToken: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobReplicatorCompareResponseBody extends $tea.Model {
  synchronizationReplicatorCompareEnable?: boolean;
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationReplicatorCompareEnable: 'SynchronizationReplicatorCompareEnable',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronizationReplicatorCompareEnable: 'boolean',
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobReplicatorCompareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSynchronizationJobReplicatorCompareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSynchronizationJobReplicatorCompareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsRequest extends $tea.Model {
  regionId?: string;
  pageSize?: number;
  pageNum?: number;
  synchronizationJobName?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  tag?: DescribeSynchronizationJobsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      synchronizationJobName: 'SynchronizationJobName',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageSize: 'number',
      pageNum: 'number',
      synchronizationJobName: 'string',
      clientToken: 'string',
      ownerId: 'string',
      accountId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeSynchronizationJobsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageRecordCount?: number;
  totalRecordCount?: number;
  synchronizationInstances?: DescribeSynchronizationJobsResponseBodySynchronizationInstances[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      synchronizationInstances: 'SynchronizationInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      synchronizationInstances: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSynchronizationJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSynchronizationJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusRequest extends $tea.Model {
  regionId?: string;
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      synchronizationJobId: 'string',
      synchronizationDirection: 'string',
      clientToken: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBody extends $tea.Model {
  synchronizationJobName?: string;
  status?: string;
  dataInitialization?: string;
  delay?: string;
  errorMessage?: string;
  expireTime?: string;
  errCode?: string;
  success?: string;
  structureInitialization?: string;
  payType?: string;
  errMessage?: string;
  synchronizationJobClass?: string;
  requestId?: string;
  synchronizationJobId?: string;
  delayMillis?: number;
  synchronizationDirection?: string;
  taskId?: string;
  checkpoint?: string;
  dataInitializationStatus?: DescribeSynchronizationJobStatusResponseBodyDataInitializationStatus;
  dataSynchronizationStatus?: DescribeSynchronizationJobStatusResponseBodyDataSynchronizationStatus;
  destinationEndpoint?: DescribeSynchronizationJobStatusResponseBodyDestinationEndpoint;
  performance?: DescribeSynchronizationJobStatusResponseBodyPerformance;
  precheckStatus?: DescribeSynchronizationJobStatusResponseBodyPrecheckStatus;
  sourceEndpoint?: DescribeSynchronizationJobStatusResponseBodySourceEndpoint;
  structureInitializationStatus?: DescribeSynchronizationJobStatusResponseBodyStructureInitializationStatus;
  synchronizationObjects?: DescribeSynchronizationJobStatusResponseBodySynchronizationObjects[];
  static names(): { [key: string]: string } {
    return {
      synchronizationJobName: 'SynchronizationJobName',
      status: 'Status',
      dataInitialization: 'DataInitialization',
      delay: 'Delay',
      errorMessage: 'ErrorMessage',
      expireTime: 'ExpireTime',
      errCode: 'ErrCode',
      success: 'Success',
      structureInitialization: 'StructureInitialization',
      payType: 'PayType',
      errMessage: 'ErrMessage',
      synchronizationJobClass: 'SynchronizationJobClass',
      requestId: 'RequestId',
      synchronizationJobId: 'SynchronizationJobId',
      delayMillis: 'DelayMillis',
      synchronizationDirection: 'SynchronizationDirection',
      taskId: 'TaskId',
      checkpoint: 'Checkpoint',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      destinationEndpoint: 'DestinationEndpoint',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      sourceEndpoint: 'SourceEndpoint',
      structureInitializationStatus: 'StructureInitializationStatus',
      synchronizationObjects: 'SynchronizationObjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronizationJobName: 'string',
      status: 'string',
      dataInitialization: 'string',
      delay: 'string',
      errorMessage: 'string',
      expireTime: 'string',
      errCode: 'string',
      success: 'string',
      structureInitialization: 'string',
      payType: 'string',
      errMessage: 'string',
      synchronizationJobClass: 'string',
      requestId: 'string',
      synchronizationJobId: 'string',
      delayMillis: 'number',
      synchronizationDirection: 'string',
      taskId: 'string',
      checkpoint: 'string',
      dataInitializationStatus: DescribeSynchronizationJobStatusResponseBodyDataInitializationStatus,
      dataSynchronizationStatus: DescribeSynchronizationJobStatusResponseBodyDataSynchronizationStatus,
      destinationEndpoint: DescribeSynchronizationJobStatusResponseBodyDestinationEndpoint,
      performance: DescribeSynchronizationJobStatusResponseBodyPerformance,
      precheckStatus: DescribeSynchronizationJobStatusResponseBodyPrecheckStatus,
      sourceEndpoint: DescribeSynchronizationJobStatusResponseBodySourceEndpoint,
      structureInitializationStatus: DescribeSynchronizationJobStatusResponseBodyStructureInitializationStatus,
      synchronizationObjects: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodySynchronizationObjects },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSynchronizationJobStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSynchronizationJobStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusListRequest extends $tea.Model {
  regionId?: string;
  synchronizationJobIdListJsonStr?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      synchronizationJobIdListJsonStr: 'SynchronizationJobIdListJsonStr',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      synchronizationJobIdListJsonStr: 'string',
      clientToken: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusListResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  pageRecordCount?: number;
  success?: string;
  totalRecordCount?: number;
  errMessage?: string;
  pageNumber?: number;
  synchronizationJobListStatusList?: DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      pageRecordCount: 'PageRecordCount',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
      errMessage: 'ErrMessage',
      pageNumber: 'PageNumber',
      synchronizationJobListStatusList: 'SynchronizationJobListStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      pageRecordCount: 'number',
      success: 'string',
      totalRecordCount: 'number',
      errMessage: 'string',
      pageNumber: 'number',
      synchronizationJobListStatusList: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSynchronizationJobStatusListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSynchronizationJobStatusListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusRequest extends $tea.Model {
  regionId?: string;
  taskId?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskId: 'TaskId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponseBody extends $tea.Model {
  status?: string;
  errorMessage?: string;
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  dataInitializationStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyDataInitializationStatus;
  dataSynchronizationStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyDataSynchronizationStatus;
  precheckStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatus;
  structureInitializationStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyStructureInitializationStatus;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      precheckStatus: 'PrecheckStatus',
      structureInitializationStatus: 'StructureInitializationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      errorMessage: 'string',
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
      dataInitializationStatus: DescribeSynchronizationObjectModifyStatusResponseBodyDataInitializationStatus,
      dataSynchronizationStatus: DescribeSynchronizationObjectModifyStatusResponseBodyDataSynchronizationStatus,
      precheckStatus: DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatus,
      structureInitializationStatus: DescribeSynchronizationObjectModifyStatusResponseBodyStructureInitializationStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSynchronizationObjectModifyStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSynchronizationObjectModifyStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreJobDetailRequest extends $tea.Model {
  dtsJobId?: string;
  jobCode?: string;
  id?: string;
  regionId?: string;
  synchronizationDirection?: string;
  dtsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      jobCode: 'JobCode',
      id: 'Id',
      regionId: 'RegionId',
      synchronizationDirection: 'SynchronizationDirection',
      dtsInstanceId: 'DtsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      jobCode: 'string',
      id: 'string',
      regionId: 'string',
      synchronizationDirection: 'string',
      dtsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreJobDetailResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreJobDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: IgnoreJobDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: IgnoreJobDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitDtsRdsInstanceRequest extends $tea.Model {
  regionId?: string;
  endpointInstanceType?: string;
  endpointRegion?: string;
  endpointInstanceId?: string;
  endpointCenId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      endpointInstanceType: 'EndpointInstanceType',
      endpointRegion: 'EndpointRegion',
      endpointInstanceId: 'EndpointInstanceId',
      endpointCenId: 'EndpointCenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      endpointInstanceType: 'string',
      endpointRegion: 'string',
      endpointInstanceId: 'string',
      endpointCenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitDtsRdsInstanceResponseBody extends $tea.Model {
  httpStatusCode?: string;
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  adminAccount?: string;
  adminPassword?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      adminAccount: 'AdminAccount',
      adminPassword: 'AdminPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'string',
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
      adminAccount: 'string',
      adminPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitDtsRdsInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InitDtsRdsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InitDtsRdsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumerChannelRequest extends $tea.Model {
  regionId?: string;
  dtsInstanceId?: string;
  dtsJobId?: string;
  consumerGroupId?: string;
  consumerGroupPassword?: string;
  consumerGroupUserName?: string;
  consumerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      consumerGroupId: 'ConsumerGroupId',
      consumerGroupPassword: 'ConsumerGroupPassword',
      consumerGroupUserName: 'ConsumerGroupUserName',
      consumerGroupName: 'ConsumerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      consumerGroupId: 'string',
      consumerGroupPassword: 'string',
      consumerGroupUserName: 'string',
      consumerGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumerChannelResponseBody extends $tea.Model {
  httpStatusCode?: string;
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'string',
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumerChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyConsumerChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyConsumerChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumerGroupPasswordRequest extends $tea.Model {
  regionId?: string;
  subscriptionInstanceId?: string;
  consumerGroupID?: string;
  consumerGroupName?: string;
  consumerGroupUserName?: string;
  consumerGroupPassword?: string;
  consumerGroupNewPassword?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      consumerGroupID: 'ConsumerGroupID',
      consumerGroupName: 'ConsumerGroupName',
      consumerGroupUserName: 'ConsumerGroupUserName',
      consumerGroupPassword: 'ConsumerGroupPassword',
      consumerGroupNewPassword: 'consumerGroupNewPassword',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subscriptionInstanceId: 'string',
      consumerGroupID: 'string',
      consumerGroupName: 'string',
      consumerGroupUserName: 'string',
      consumerGroupPassword: 'string',
      consumerGroupNewPassword: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumerGroupPasswordResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumerGroupPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyConsumerGroupPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyConsumerGroupPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumptionTimestampRequest extends $tea.Model {
  regionId?: string;
  subscriptionInstanceId?: string;
  consumptionTimestamp?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      consumptionTimestamp: 'ConsumptionTimestamp',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subscriptionInstanceId: 'string',
      consumptionTimestamp: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumptionTimestampResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumptionTimestampResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyConsumptionTimestampResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyConsumptionTimestampResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobRequest extends $tea.Model {
  regionId?: string;
  dtsInstanceId?: string;
  synchronizationDirection?: string;
  clientToken?: string;
  dbList?: { [key: string]: any };
  etlOperatorColumnReference?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dtsInstanceId: 'DtsInstanceId',
      synchronizationDirection: 'SynchronizationDirection',
      clientToken: 'ClientToken',
      dbList: 'DbList',
      etlOperatorColumnReference: 'EtlOperatorColumnReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dtsInstanceId: 'string',
      synchronizationDirection: 'string',
      clientToken: 'string',
      dbList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      etlOperatorColumnReference: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobShrinkRequest extends $tea.Model {
  regionId?: string;
  dtsInstanceId?: string;
  synchronizationDirection?: string;
  clientToken?: string;
  dbListShrink?: string;
  etlOperatorColumnReference?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dtsInstanceId: 'DtsInstanceId',
      synchronizationDirection: 'SynchronizationDirection',
      clientToken: 'ClientToken',
      dbListShrink: 'DbList',
      etlOperatorColumnReference: 'EtlOperatorColumnReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dtsInstanceId: 'string',
      synchronizationDirection: 'string',
      clientToken: 'string',
      dbListShrink: 'string',
      etlOperatorColumnReference: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  dtsJobId?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: boolean;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      dtsJobId: 'DtsJobId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      dtsJobId: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDtsJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDtsJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobNameRequest extends $tea.Model {
  dtsJobId?: string;
  dtsJobName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      dtsJobName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobNameResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: string;
  code?: string;
  dynamicMessage?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'string',
      code: 'string',
      dynamicMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDtsJobNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDtsJobNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobPasswordRequest extends $tea.Model {
  dtsJobId?: string;
  userName?: string;
  password?: string;
  endpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      userName: 'UserName',
      password: 'Password',
      endpoint: 'Endpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      userName: 'string',
      password: 'string',
      endpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobPasswordResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: string;
  code?: string;
  dynamicMessage?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'string',
      code: 'string',
      dynamicMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDtsJobPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDtsJobPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubscriptionRequest extends $tea.Model {
  regionId?: string;
  dtsInstanceId?: string;
  dbList?: string;
  dtsJobId?: string;
  subscriptionDataTypeDDL?: boolean;
  subscriptionDataTypeDML?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dtsInstanceId: 'DtsInstanceId',
      dbList: 'DbList',
      dtsJobId: 'DtsJobId',
      subscriptionDataTypeDDL: 'SubscriptionDataTypeDDL',
      subscriptionDataTypeDML: 'SubscriptionDataTypeDML',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dtsInstanceId: 'string',
      dbList: 'string',
      dtsJobId: 'string',
      subscriptionDataTypeDDL: 'boolean',
      subscriptionDataTypeDML: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubscriptionResponseBody extends $tea.Model {
  httpStatusCode?: string;
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'string',
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubscriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubscriptionObjectRequest extends $tea.Model {
  regionId?: string;
  subscriptionInstanceId?: string;
  subscriptionObject?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      subscriptionObject: 'SubscriptionObject',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subscriptionInstanceId: 'string',
      subscriptionObject: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubscriptionObjectResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubscriptionObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySubscriptionObjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySubscriptionObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySynchronizationObjectRequest extends $tea.Model {
  regionId?: string;
  synchronizationJobId?: string;
  synchronizationObjects?: string;
  synchronizationDirection?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationObjects: 'SynchronizationObjects',
      synchronizationDirection: 'SynchronizationDirection',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      synchronizationJobId: 'string',
      synchronizationObjects: 'string',
      synchronizationDirection: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySynchronizationObjectResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  taskId?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      taskId: 'TaskId',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      taskId: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySynchronizationObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySynchronizationObjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySynchronizationObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  dtsJobId?: string;
  chargeType?: string;
  period?: string;
  buyCount?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      chargeType: 'ChargeType',
      period: 'Period',
      buyCount: 'BuyCount',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      chargeType: 'string',
      period: 'string',
      buyCount: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
  httpStatusCode?: number;
  endTime?: string;
  requestId?: string;
  errCode?: string;
  dtsJobId?: string;
  success?: boolean;
  errMessage?: string;
  chargeType?: string;
  code?: string;
  dynamicMessage?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      endTime: 'EndTime',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      dtsJobId: 'DtsJobId',
      success: 'Success',
      errMessage: 'ErrMessage',
      chargeType: 'ChargeType',
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      endTime: 'string',
      requestId: 'string',
      errCode: 'string',
      dtsJobId: 'string',
      success: 'boolean',
      errMessage: 'string',
      chargeType: 'string',
      code: 'string',
      dynamicMessage: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenewInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDtsJobRequest extends $tea.Model {
  dtsJobId?: string;
  dtsInstanceId?: string;
  synchronizationDirection?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      dtsInstanceId: 'DtsInstanceId',
      synchronizationDirection: 'SynchronizationDirection',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      dtsInstanceId: 'string',
      synchronizationDirection: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDtsJobResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: string;
  dynamicMessage?: string;
  dynamicCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      dynamicMessage: 'DynamicMessage',
      dynamicCode: 'DynamicCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'string',
      dynamicMessage: 'string',
      dynamicCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDtsJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetDtsJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetDtsJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSynchronizationJobRequest extends $tea.Model {
  regionId?: string;
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      synchronizationJobId: 'string',
      synchronizationDirection: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSynchronizationJobResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSynchronizationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetSynchronizationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetSynchronizationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShieldPrecheckRequest extends $tea.Model {
  regionId?: string;
  dtsInstanceId?: string;
  precheckItems?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dtsInstanceId: 'DtsInstanceId',
      precheckItems: 'PrecheckItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dtsInstanceId: 'string',
      precheckItems: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShieldPrecheckResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShieldPrecheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ShieldPrecheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ShieldPrecheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkipPreCheckRequest extends $tea.Model {
  jobId?: string;
  skip?: boolean;
  skipPreCheckItems?: string;
  skipPreCheckNames?: string;
  dtsJobId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      skip: 'Skip',
      skipPreCheckItems: 'SkipPreCheckItems',
      skipPreCheckNames: 'SkipPreCheckNames',
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      skip: 'boolean',
      skipPreCheckItems: 'string',
      skipPreCheckNames: 'string',
      dtsJobId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkipPreCheckResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: string;
  skipNames?: string;
  code?: string;
  scheduleJobId?: string;
  dynamicMessage?: string;
  migrationJobId?: string;
  skipItems?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      skipNames: 'SkipNames',
      code: 'Code',
      scheduleJobId: 'ScheduleJobId',
      dynamicMessage: 'DynamicMessage',
      migrationJobId: 'MigrationJobId',
      skipItems: 'SkipItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'string',
      skipNames: 'string',
      code: 'string',
      scheduleJobId: 'string',
      dynamicMessage: 'string',
      migrationJobId: 'string',
      skipItems: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkipPreCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SkipPreCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SkipPreCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDtsJobRequest extends $tea.Model {
  dtsJobId?: string;
  dtsInstanceId?: string;
  synchronizationDirection?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      dtsInstanceId: 'DtsInstanceId',
      synchronizationDirection: 'SynchronizationDirection',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      dtsInstanceId: 'string',
      synchronizationDirection: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDtsJobResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: string;
  dynamicMessage?: string;
  dynamicCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      dynamicMessage: 'DynamicMessage',
      dynamicCode: 'DynamicCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'string',
      dynamicMessage: 'string',
      dynamicCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDtsJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartDtsJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartDtsJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMigrationJobRequest extends $tea.Model {
  regionId?: string;
  migrationJobId?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      migrationJobId: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMigrationJobResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMigrationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartMigrationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartMigrationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSubscriptionInstanceRequest extends $tea.Model {
  regionId?: string;
  subscriptionInstanceId?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subscriptionInstanceId: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSubscriptionInstanceResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  taskId?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      taskId: 'TaskId',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      taskId: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSubscriptionInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartSubscriptionInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartSubscriptionInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSynchronizationJobRequest extends $tea.Model {
  regionId?: string;
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      synchronizationJobId: 'string',
      synchronizationDirection: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSynchronizationJobResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSynchronizationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartSynchronizationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartSynchronizationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDtsJobRequest extends $tea.Model {
  dtsJobId?: string;
  dtsInstanceId?: string;
  synchronizationDirection?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      dtsInstanceId: 'DtsInstanceId',
      synchronizationDirection: 'SynchronizationDirection',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      dtsInstanceId: 'string',
      synchronizationDirection: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDtsJobResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: string;
  dynamicMessage?: string;
  dynamicCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      dynamicMessage: 'DynamicMessage',
      dynamicCode: 'DynamicCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'string',
      dynamicMessage: 'string',
      dynamicCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDtsJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopDtsJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopDtsJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMigrationJobRequest extends $tea.Model {
  regionId?: string;
  migrationJobId?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      migrationJobId: 'MigrationJobId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      migrationJobId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMigrationJobResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMigrationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopMigrationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopMigrationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SummaryJobDetailRequest extends $tea.Model {
  dtsJobId?: string;
  jobCode?: string;
  synchronizationDirection?: string;
  regionId?: string;
  dtsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      jobCode: 'JobCode',
      synchronizationDirection: 'SynchronizationDirection',
      regionId: 'RegionId',
      dtsInstanceId: 'DtsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      jobCode: 'string',
      synchronizationDirection: 'string',
      regionId: 'string',
      dtsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SummaryJobDetailResponseBody extends $tea.Model {
  httpStatusCode?: number;
  code?: string;
  requestId?: string;
  success?: boolean;
  jobId?: string;
  progressSummaryDetails?: SummaryJobDetailResponseBodyProgressSummaryDetails[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      requestId: 'RequestId',
      success: 'Success',
      jobId: 'JobId',
      progressSummaryDetails: 'ProgressSummaryDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      code: 'string',
      requestId: 'string',
      success: 'boolean',
      jobId: 'string',
      progressSummaryDetails: { 'type': 'array', 'itemType': SummaryJobDetailResponseBodyProgressSummaryDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SummaryJobDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SummaryJobDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SummaryJobDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendDtsJobRequest extends $tea.Model {
  dtsJobId?: string;
  dtsInstanceId?: string;
  synchronizationDirection?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      dtsInstanceId: 'DtsInstanceId',
      synchronizationDirection: 'SynchronizationDirection',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      dtsInstanceId: 'string',
      synchronizationDirection: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendDtsJobResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: string;
  dynamicMessage?: string;
  dynamicCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      dynamicMessage: 'DynamicMessage',
      dynamicCode: 'DynamicCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'string',
      dynamicMessage: 'string',
      dynamicCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendDtsJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SuspendDtsJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SuspendDtsJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendMigrationJobRequest extends $tea.Model {
  regionId?: string;
  migrationJobId?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      migrationJobId: 'MigrationJobId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      migrationJobId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendMigrationJobResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendMigrationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SuspendMigrationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SuspendMigrationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendSynchronizationJobRequest extends $tea.Model {
  regionId?: string;
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      synchronizationJobId: 'string',
      synchronizationDirection: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendSynchronizationJobResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendSynchronizationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SuspendSynchronizationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SuspendSynchronizationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchSynchronizationEndpointRequest extends $tea.Model {
  endpoint?: SwitchSynchronizationEndpointRequestEndpoint;
  sourceEndpoint?: SwitchSynchronizationEndpointRequestSourceEndpoint;
  regionId?: string;
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      sourceEndpoint: 'SourceEndpoint',
      regionId: 'RegionId',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: SwitchSynchronizationEndpointRequestEndpoint,
      sourceEndpoint: SwitchSynchronizationEndpointRequestSourceEndpoint,
      regionId: 'string',
      synchronizationJobId: 'string',
      synchronizationDirection: 'string',
      ownerId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchSynchronizationEndpointResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  taskId?: string;
  success?: string;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      taskId: 'TaskId',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      taskId: 'string',
      success: 'string',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchSynchronizationEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SwitchSynchronizationEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SwitchSynchronizationEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInstanceClassRequest extends $tea.Model {
  orderType?: string;
  instanceClass?: string;
  regionId?: string;
  dtsJobId?: string;
  static names(): { [key: string]: string } {
    return {
      orderType: 'OrderType',
      instanceClass: 'InstanceClass',
      regionId: 'RegionId',
      dtsJobId: 'DtsJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderType: 'string',
      instanceClass: 'string',
      regionId: 'string',
      dtsJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInstanceClassResponseBody extends $tea.Model {
  endTime?: string;
  httpStatusCode?: number;
  requestId?: string;
  dtsJobId?: string;
  errCode?: string;
  success?: boolean;
  chargeType?: string;
  errMessage?: string;
  code?: string;
  dynamicMessage?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      dtsJobId: 'DtsJobId',
      errCode: 'ErrCode',
      success: 'Success',
      chargeType: 'ChargeType',
      errMessage: 'ErrMessage',
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      dtsJobId: 'string',
      errCode: 'string',
      success: 'boolean',
      chargeType: 'string',
      errMessage: 'string',
      code: 'string',
      dynamicMessage: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInstanceClassResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TransferInstanceClassResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TransferInstanceClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferPayTypeRequest extends $tea.Model {
  dtsJobId?: string;
  chargeType?: string;
  period?: string;
  buyCount?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      chargeType: 'ChargeType',
      period: 'Period',
      buyCount: 'BuyCount',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      chargeType: 'string',
      period: 'string',
      buyCount: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferPayTypeResponseBody extends $tea.Model {
  endTime?: string;
  httpStatusCode?: number;
  requestId?: string;
  dtsJobId?: string;
  errCode?: string;
  success?: boolean;
  chargeType?: string;
  errMessage?: string;
  code?: string;
  dynamicMessage?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      dtsJobId: 'DtsJobId',
      errCode: 'ErrCode',
      success: 'Success',
      chargeType: 'ChargeType',
      errMessage: 'ErrMessage',
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      dtsJobId: 'string',
      errCode: 'string',
      success: 'boolean',
      chargeType: 'string',
      errMessage: 'string',
      code: 'string',
      dynamicMessage: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferPayTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TransferPayTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TransferPayTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeTwoWayRequest extends $tea.Model {
  instanceId?: string;
  instanceClass?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceClass: 'InstanceClass',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceClass: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeTwoWayResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: string;
  dynamicMessage?: string;
  dynamicCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      dynamicMessage: 'DynamicMessage',
      dynamicCode: 'DynamicCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'string',
      dynamicMessage: 'string',
      dynamicCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeTwoWayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeTwoWayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeTwoWayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WhiteIpListRequest extends $tea.Model {
  type?: string;
  region?: string;
  destinationRegion?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      region: 'Region',
      destinationRegion: 'DestinationRegion',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      region: 'string',
      destinationRegion: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WhiteIpListResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errCode?: string;
  success?: boolean;
  errMessage?: string;
  ipList?: string;
  dynamicMessage?: string;
  dynamicCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errCode: 'ErrCode',
      success: 'Success',
      errMessage: 'ErrMessage',
      ipList: 'IpList',
      dynamicMessage: 'DynamicMessage',
      dynamicCode: 'DynamicCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errCode: 'string',
      success: 'boolean',
      errMessage: 'string',
      ipList: 'string',
      dynamicMessage: 'string',
      dynamicCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WhiteIpListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: WhiteIpListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: WhiteIpListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureMigrationJobRequestSourceEndpoint extends $tea.Model {
  instanceType?: string;
  instanceID?: string;
  engineName?: string;
  region?: string;
  IP?: string;
  port?: string;
  oracleSID?: string;
  databaseName?: string;
  userName?: string;
  password?: string;
  ownerID?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      instanceID: 'InstanceID',
      engineName: 'EngineName',
      region: 'Region',
      IP: 'IP',
      port: 'Port',
      oracleSID: 'OracleSID',
      databaseName: 'DatabaseName',
      userName: 'UserName',
      password: 'Password',
      ownerID: 'OwnerID',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      instanceID: 'string',
      engineName: 'string',
      region: 'string',
      IP: 'string',
      port: 'string',
      oracleSID: 'string',
      databaseName: 'string',
      userName: 'string',
      password: 'string',
      ownerID: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureMigrationJobRequestDestinationEndpoint extends $tea.Model {
  instanceType?: string;
  instanceID?: string;
  engineName?: string;
  region?: string;
  IP?: string;
  port?: string;
  dataBaseName?: string;
  userName?: string;
  password?: string;
  oracleSID?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      instanceID: 'InstanceID',
      engineName: 'EngineName',
      region: 'Region',
      IP: 'IP',
      port: 'Port',
      dataBaseName: 'DataBaseName',
      userName: 'UserName',
      password: 'Password',
      oracleSID: 'OracleSID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      instanceID: 'string',
      engineName: 'string',
      region: 'string',
      IP: 'string',
      port: 'string',
      dataBaseName: 'string',
      userName: 'string',
      password: 'string',
      oracleSID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureMigrationJobRequestMigrationMode extends $tea.Model {
  structureIntialization?: boolean;
  dataIntialization?: boolean;
  dataSynchronization?: boolean;
  static names(): { [key: string]: string } {
    return {
      structureIntialization: 'StructureIntialization',
      dataIntialization: 'DataIntialization',
      dataSynchronization: 'DataSynchronization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      structureIntialization: 'boolean',
      dataIntialization: 'boolean',
      dataSynchronization: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionInstanceRequestSourceEndpoint extends $tea.Model {
  instanceType?: string;
  instanceID?: string;
  IP?: string;
  port?: string;
  userName?: string;
  password?: string;
  oracleSID?: string;
  databaseName?: string;
  ownerID?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      instanceID: 'InstanceID',
      IP: 'IP',
      port: 'Port',
      userName: 'UserName',
      password: 'Password',
      oracleSID: 'OracleSID',
      databaseName: 'DatabaseName',
      ownerID: 'OwnerID',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      instanceID: 'string',
      IP: 'string',
      port: 'string',
      userName: 'string',
      password: 'string',
      oracleSID: 'string',
      databaseName: 'string',
      ownerID: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionInstanceRequestSubscriptionDataType extends $tea.Model {
  DDL?: boolean;
  DML?: boolean;
  static names(): { [key: string]: string } {
    return {
      DDL: 'DDL',
      DML: 'DML',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDL: 'boolean',
      DML: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionInstanceRequestSubscriptionInstance extends $tea.Model {
  VPCId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobRequestSourceEndpoint extends $tea.Model {
  instanceId?: string;
  instanceType?: string;
  IP?: string;
  port?: string;
  userName?: string;
  password?: string;
  ownerID?: string;
  role?: string;
  databaseName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      IP: 'IP',
      port: 'Port',
      userName: 'UserName',
      password: 'Password',
      ownerID: 'OwnerID',
      role: 'Role',
      databaseName: 'DatabaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      IP: 'string',
      port: 'string',
      userName: 'string',
      password: 'string',
      ownerID: 'string',
      role: 'string',
      databaseName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobRequestDestinationEndpoint extends $tea.Model {
  instanceId?: string;
  instanceType?: string;
  IP?: string;
  port?: string;
  userName?: string;
  password?: string;
  dataBaseName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      IP: 'IP',
      port: 'Port',
      userName: 'UserName',
      password: 'Password',
      dataBaseName: 'DataBaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      IP: 'string',
      port: 'string',
      userName: 'string',
      password: 'string',
      dataBaseName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobRequestPartitionKey extends $tea.Model {
  modifyTimeYear?: boolean;
  modifyTimeMonth?: boolean;
  modifyTimeDay?: boolean;
  modifyTimeHour?: boolean;
  modifyTimeMinute?: boolean;
  static names(): { [key: string]: string } {
    return {
      modifyTimeYear: 'ModifyTime_Year',
      modifyTimeMonth: 'ModifyTime_Month',
      modifyTimeDay: 'ModifyTime_Day',
      modifyTimeHour: 'ModifyTime_Hour',
      modifyTimeMinute: 'ModifyTime_Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTimeYear: 'boolean',
      modifyTimeMonth: 'boolean',
      modifyTimeDay: 'boolean',
      modifyTimeHour: 'boolean',
      modifyTimeMinute: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionInstanceRequestSourceEndpoint extends $tea.Model {
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSynchronizationJobRequestSourceEndpoint extends $tea.Model {
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSynchronizationJobRequestDestinationEndpoint extends $tea.Model {
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerChannelResponseBodyConsumerChannels extends $tea.Model {
  consumerGroupUserName?: string;
  consumerGroupId?: string;
  messageDelay?: number;
  consumerGroupName?: string;
  consumptionCheckpoint?: string;
  unconsumedData?: number;
  static names(): { [key: string]: string } {
    return {
      consumerGroupUserName: 'ConsumerGroupUserName',
      consumerGroupId: 'ConsumerGroupId',
      messageDelay: 'MessageDelay',
      consumerGroupName: 'ConsumerGroupName',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      unconsumedData: 'UnconsumedData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupUserName: 'string',
      consumerGroupId: 'string',
      messageDelay: 'number',
      consumerGroupName: 'string',
      consumptionCheckpoint: 'string',
      unconsumedData: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerGroupResponseBodyConsumerChannelsDescribeConsumerChannel extends $tea.Model {
  consumerGroupUserName?: string;
  consumerGroupID?: string;
  messageDelay?: number;
  consumerGroupName?: string;
  consumptionCheckpoint?: string;
  unconsumedData?: number;
  static names(): { [key: string]: string } {
    return {
      consumerGroupUserName: 'ConsumerGroupUserName',
      consumerGroupID: 'ConsumerGroupID',
      messageDelay: 'MessageDelay',
      consumerGroupName: 'ConsumerGroupName',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      unconsumedData: 'UnconsumedData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupUserName: 'string',
      consumerGroupID: 'string',
      messageDelay: 'number',
      consumerGroupName: 'string',
      consumptionCheckpoint: 'string',
      unconsumedData: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerGroupResponseBodyConsumerChannels extends $tea.Model {
  describeConsumerChannel?: DescribeConsumerGroupResponseBodyConsumerChannelsDescribeConsumerChannel[];
  static names(): { [key: string]: string } {
    return {
      describeConsumerChannel: 'DescribeConsumerChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeConsumerChannel: { 'type': 'array', 'itemType': DescribeConsumerGroupResponseBodyConsumerChannelsDescribeConsumerChannel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySourceEndpoint extends $tea.Model {
  oracleSID?: string;
  sslSolutionEnum?: string;
  ip?: string;
  instanceID?: string;
  roleName?: string;
  instanceType?: string;
  port?: string;
  engineName?: string;
  region?: string;
  databaseName?: string;
  aliyunUid?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      oracleSID: 'OracleSID',
      sslSolutionEnum: 'SslSolutionEnum',
      ip: 'Ip',
      instanceID: 'InstanceID',
      roleName: 'RoleName',
      instanceType: 'InstanceType',
      port: 'Port',
      engineName: 'EngineName',
      region: 'Region',
      databaseName: 'DatabaseName',
      aliyunUid: 'AliyunUid',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oracleSID: 'string',
      sslSolutionEnum: 'string',
      ip: 'string',
      instanceID: 'string',
      roleName: 'string',
      instanceType: 'string',
      port: 'string',
      engineName: 'string',
      region: 'string',
      databaseName: 'string',
      aliyunUid: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodyDestinationEndpoint extends $tea.Model {
  sslSolutionEnum?: string;
  oracleSID?: string;
  databaseName?: string;
  region?: string;
  ip?: string;
  instanceID?: string;
  port?: string;
  instanceType?: string;
  userName?: string;
  engineName?: string;
  static names(): { [key: string]: string } {
    return {
      sslSolutionEnum: 'SslSolutionEnum',
      oracleSID: 'OracleSID',
      databaseName: 'DatabaseName',
      region: 'Region',
      ip: 'Ip',
      instanceID: 'InstanceID',
      port: 'Port',
      instanceType: 'InstanceType',
      userName: 'UserName',
      engineName: 'EngineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sslSolutionEnum: 'string',
      oracleSID: 'string',
      databaseName: 'string',
      region: 'string',
      ip: 'string',
      instanceID: 'string',
      port: 'string',
      instanceType: 'string',
      userName: 'string',
      engineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodyMigrationMode extends $tea.Model {
  dataExtractTransformLoad?: boolean;
  dataInitialization?: boolean;
  dataSynchronization?: boolean;
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataExtractTransformLoad: 'DataExtractTransformLoad',
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataExtractTransformLoad: 'boolean',
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      structureInitialization: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubscriptionHost extends $tea.Model {
  vpcHost?: string;
  publicHost?: string;
  privateHost?: string;
  static names(): { [key: string]: string } {
    return {
      vpcHost: 'VpcHost',
      publicHost: 'PublicHost',
      privateHost: 'PrivateHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcHost: 'string',
      publicHost: 'string',
      privateHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubscriptionDataType extends $tea.Model {
  dml?: boolean;
  ddl?: boolean;
  static names(): { [key: string]: string } {
    return {
      dml: 'Dml',
      ddl: 'Ddl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dml: 'boolean',
      ddl: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListTagList extends $tea.Model {
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListDataInitializationStatus extends $tea.Model {
  status?: string;
  percent?: string;
  errorMessage?: string;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      errorMessage: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListDataSynchronizationStatus extends $tea.Model {
  status?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListDataEtlStatus extends $tea.Model {
  status?: string;
  percent?: string;
  errorMessage?: string;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      errorMessage: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListDestinationEndpoint extends $tea.Model {
  sslSolutionEnum?: string;
  oracleSID?: string;
  region?: string;
  databaseName?: string;
  ip?: string;
  instanceID?: string;
  port?: string;
  instanceType?: string;
  userName?: string;
  engineName?: string;
  static names(): { [key: string]: string } {
    return {
      sslSolutionEnum: 'SslSolutionEnum',
      oracleSID: 'OracleSID',
      region: 'Region',
      databaseName: 'DatabaseName',
      ip: 'Ip',
      instanceID: 'InstanceID',
      port: 'Port',
      instanceType: 'InstanceType',
      userName: 'UserName',
      engineName: 'EngineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sslSolutionEnum: 'string',
      oracleSID: 'string',
      region: 'string',
      databaseName: 'string',
      ip: 'string',
      instanceID: 'string',
      port: 'string',
      instanceType: 'string',
      userName: 'string',
      engineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListMigrationMode extends $tea.Model {
  dataInitialization?: boolean;
  dataSynchronization?: boolean;
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      structureInitialization: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListPerformance extends $tea.Model {
  rps?: string;
  flow?: string;
  static names(): { [key: string]: string } {
    return {
      rps: 'Rps',
      flow: 'Flow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rps: 'string',
      flow: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListPrecheckStatusDetail extends $tea.Model {
  checkResult?: string;
  checkItemDescription?: string;
  checkItem?: string;
  repairMethod?: string;
  failedReason?: string;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'CheckResult',
      checkItemDescription: 'CheckItemDescription',
      checkItem: 'CheckItem',
      repairMethod: 'RepairMethod',
      failedReason: 'FailedReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: 'string',
      checkItemDescription: 'string',
      checkItem: 'string',
      repairMethod: 'string',
      failedReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListPrecheckStatus extends $tea.Model {
  status?: string;
  percent?: string;
  errorMessage?: string;
  detail?: DescribeDtsJobsResponseBodyDtsJobListPrecheckStatusDetail[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      errorMessage: 'string',
      detail: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobListPrecheckStatusDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobDataInitializationStatus extends $tea.Model {
  status?: string;
  percent?: string;
  errorMessage?: string;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      errorMessage: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobDataSynchronizationStatus extends $tea.Model {
  status?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobDestinationEndpoint extends $tea.Model {
  sslSolutionEnum?: string;
  oracleSID?: string;
  region?: string;
  databaseName?: string;
  ip?: string;
  instanceID?: string;
  port?: string;
  instanceType?: string;
  userName?: string;
  engineName?: string;
  static names(): { [key: string]: string } {
    return {
      sslSolutionEnum: 'SslSolutionEnum',
      oracleSID: 'OracleSID',
      region: 'Region',
      databaseName: 'DatabaseName',
      ip: 'Ip',
      instanceID: 'InstanceID',
      port: 'Port',
      instanceType: 'InstanceType',
      userName: 'UserName',
      engineName: 'EngineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sslSolutionEnum: 'string',
      oracleSID: 'string',
      region: 'string',
      databaseName: 'string',
      ip: 'string',
      instanceID: 'string',
      port: 'string',
      instanceType: 'string',
      userName: 'string',
      engineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobMigrationMode extends $tea.Model {
  dataInitialization?: boolean;
  dataSynchronization?: boolean;
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      structureInitialization: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobPerformance extends $tea.Model {
  rps?: string;
  flow?: string;
  static names(): { [key: string]: string } {
    return {
      rps: 'Rps',
      flow: 'Flow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rps: 'string',
      flow: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatusDetail extends $tea.Model {
  checkResult?: string;
  checkItemDescription?: string;
  checkItem?: string;
  repairMethod?: string;
  failedReason?: string;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'CheckResult',
      checkItemDescription: 'CheckItemDescription',
      checkItem: 'CheckItem',
      repairMethod: 'RepairMethod',
      failedReason: 'FailedReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: 'string',
      checkItemDescription: 'string',
      checkItem: 'string',
      repairMethod: 'string',
      failedReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatus extends $tea.Model {
  status?: string;
  percent?: string;
  errorMessage?: string;
  detail?: DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatusDetail[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      errorMessage: 'string',
      detail: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatusDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobSourceEndpoint extends $tea.Model {
  sslSolutionEnum?: string;
  oracleSID?: string;
  region?: string;
  databaseName?: string;
  ip?: string;
  instanceID?: string;
  port?: string;
  instanceType?: string;
  userName?: string;
  engineName?: string;
  static names(): { [key: string]: string } {
    return {
      sslSolutionEnum: 'SslSolutionEnum',
      oracleSID: 'OracleSID',
      region: 'Region',
      databaseName: 'DatabaseName',
      ip: 'Ip',
      instanceID: 'InstanceID',
      port: 'Port',
      instanceType: 'InstanceType',
      userName: 'UserName',
      engineName: 'EngineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sslSolutionEnum: 'string',
      oracleSID: 'string',
      region: 'string',
      databaseName: 'string',
      ip: 'string',
      instanceID: 'string',
      port: 'string',
      instanceType: 'string',
      userName: 'string',
      engineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureInitializationStatus extends $tea.Model {
  status?: string;
  percent?: string;
  errorMessage?: string;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      errorMessage: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJob extends $tea.Model {
  status?: string;
  dtsJobName?: string;
  delay?: number;
  errorMessage?: string;
  dtsJobId?: string;
  expireTime?: string;
  createTime?: string;
  payType?: string;
  reserved?: string;
  dbObject?: string;
  dtsJobClass?: string;
  dtsInstanceID?: string;
  dtsJobDirection?: string;
  checkpoint?: string;
  dataInitializationStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataInitializationStatus;
  dataSynchronizationStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataSynchronizationStatus;
  destinationEndpoint?: DescribeDtsJobsResponseBodyDtsJobListReverseJobDestinationEndpoint;
  migrationMode?: DescribeDtsJobsResponseBodyDtsJobListReverseJobMigrationMode;
  performance?: DescribeDtsJobsResponseBodyDtsJobListReverseJobPerformance;
  precheckStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatus;
  sourceEndpoint?: DescribeDtsJobsResponseBodyDtsJobListReverseJobSourceEndpoint;
  structureInitializationStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureInitializationStatus;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      dtsJobName: 'DtsJobName',
      delay: 'Delay',
      errorMessage: 'ErrorMessage',
      dtsJobId: 'DtsJobId',
      expireTime: 'ExpireTime',
      createTime: 'CreateTime',
      payType: 'PayType',
      reserved: 'Reserved',
      dbObject: 'DbObject',
      dtsJobClass: 'DtsJobClass',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobDirection: 'DtsJobDirection',
      checkpoint: 'Checkpoint',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      destinationEndpoint: 'DestinationEndpoint',
      migrationMode: 'MigrationMode',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      sourceEndpoint: 'SourceEndpoint',
      structureInitializationStatus: 'StructureInitializationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      dtsJobName: 'string',
      delay: 'number',
      errorMessage: 'string',
      dtsJobId: 'string',
      expireTime: 'string',
      createTime: 'string',
      payType: 'string',
      reserved: 'string',
      dbObject: 'string',
      dtsJobClass: 'string',
      dtsInstanceID: 'string',
      dtsJobDirection: 'string',
      checkpoint: 'string',
      dataInitializationStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataSynchronizationStatus,
      destinationEndpoint: DescribeDtsJobsResponseBodyDtsJobListReverseJobDestinationEndpoint,
      migrationMode: DescribeDtsJobsResponseBodyDtsJobListReverseJobMigrationMode,
      performance: DescribeDtsJobsResponseBodyDtsJobListReverseJobPerformance,
      precheckStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatus,
      sourceEndpoint: DescribeDtsJobsResponseBodyDtsJobListReverseJobSourceEndpoint,
      structureInitializationStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureInitializationStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListSourceEndpoint extends $tea.Model {
  sslSolutionEnum?: string;
  oracleSID?: string;
  region?: string;
  databaseName?: string;
  ip?: string;
  instanceID?: string;
  port?: string;
  instanceType?: string;
  userName?: string;
  engineName?: string;
  static names(): { [key: string]: string } {
    return {
      sslSolutionEnum: 'SslSolutionEnum',
      oracleSID: 'OracleSID',
      region: 'Region',
      databaseName: 'DatabaseName',
      ip: 'Ip',
      instanceID: 'InstanceID',
      port: 'Port',
      instanceType: 'InstanceType',
      userName: 'UserName',
      engineName: 'EngineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sslSolutionEnum: 'string',
      oracleSID: 'string',
      region: 'string',
      databaseName: 'string',
      ip: 'string',
      instanceID: 'string',
      port: 'string',
      instanceType: 'string',
      userName: 'string',
      engineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListStructureInitializationStatus extends $tea.Model {
  status?: string;
  percent?: string;
  errorMessage?: string;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      errorMessage: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListRetryState extends $tea.Model {
  retryCount?: number;
  maxRetryTime?: number;
  errMessage?: string;
  retryTarget?: string;
  retryTime?: number;
  static names(): { [key: string]: string } {
    return {
      retryCount: 'RetryCount',
      maxRetryTime: 'MaxRetryTime',
      errMessage: 'ErrMessage',
      retryTarget: 'RetryTarget',
      retryTime: 'RetryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retryCount: 'number',
      maxRetryTime: 'number',
      errMessage: 'string',
      retryTarget: 'string',
      retryTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobList extends $tea.Model {
  status?: string;
  dtsJobName?: string;
  delay?: number;
  errorMessage?: string;
  expireTime?: string;
  dtsJobId?: string;
  createTime?: string;
  payType?: string;
  reserved?: string;
  consumptionClient?: string;
  dbObject?: string;
  dtsJobClass?: string;
  consumptionCheckpoint?: string;
  endTimestamp?: string;
  appName?: string;
  beginTimestamp?: string;
  dtsInstanceID?: string;
  dtsJobDirection?: string;
  checkpoint?: string;
  tagList?: DescribeDtsJobsResponseBodyDtsJobListTagList[];
  dataInitializationStatus?: DescribeDtsJobsResponseBodyDtsJobListDataInitializationStatus;
  dataSynchronizationStatus?: DescribeDtsJobsResponseBodyDtsJobListDataSynchronizationStatus;
  dataEtlStatus?: DescribeDtsJobsResponseBodyDtsJobListDataEtlStatus;
  destinationEndpoint?: DescribeDtsJobsResponseBodyDtsJobListDestinationEndpoint;
  migrationMode?: DescribeDtsJobsResponseBodyDtsJobListMigrationMode;
  performance?: DescribeDtsJobsResponseBodyDtsJobListPerformance;
  precheckStatus?: DescribeDtsJobsResponseBodyDtsJobListPrecheckStatus;
  reverseJob?: DescribeDtsJobsResponseBodyDtsJobListReverseJob;
  sourceEndpoint?: DescribeDtsJobsResponseBodyDtsJobListSourceEndpoint;
  structureInitializationStatus?: DescribeDtsJobsResponseBodyDtsJobListStructureInitializationStatus;
  retryState?: DescribeDtsJobsResponseBodyDtsJobListRetryState;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      dtsJobName: 'DtsJobName',
      delay: 'Delay',
      errorMessage: 'ErrorMessage',
      expireTime: 'ExpireTime',
      dtsJobId: 'DtsJobId',
      createTime: 'CreateTime',
      payType: 'PayType',
      reserved: 'Reserved',
      consumptionClient: 'ConsumptionClient',
      dbObject: 'DbObject',
      dtsJobClass: 'DtsJobClass',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      endTimestamp: 'EndTimestamp',
      appName: 'AppName',
      beginTimestamp: 'BeginTimestamp',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobDirection: 'DtsJobDirection',
      checkpoint: 'Checkpoint',
      tagList: 'TagList',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      dataEtlStatus: 'DataEtlStatus',
      destinationEndpoint: 'DestinationEndpoint',
      migrationMode: 'MigrationMode',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reverseJob: 'ReverseJob',
      sourceEndpoint: 'SourceEndpoint',
      structureInitializationStatus: 'StructureInitializationStatus',
      retryState: 'RetryState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      dtsJobName: 'string',
      delay: 'number',
      errorMessage: 'string',
      expireTime: 'string',
      dtsJobId: 'string',
      createTime: 'string',
      payType: 'string',
      reserved: 'string',
      consumptionClient: 'string',
      dbObject: 'string',
      dtsJobClass: 'string',
      consumptionCheckpoint: 'string',
      endTimestamp: 'string',
      appName: 'string',
      beginTimestamp: 'string',
      dtsInstanceID: 'string',
      dtsJobDirection: 'string',
      checkpoint: 'string',
      tagList: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobListTagList },
      dataInitializationStatus: DescribeDtsJobsResponseBodyDtsJobListDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobsResponseBodyDtsJobListDataSynchronizationStatus,
      dataEtlStatus: DescribeDtsJobsResponseBodyDtsJobListDataEtlStatus,
      destinationEndpoint: DescribeDtsJobsResponseBodyDtsJobListDestinationEndpoint,
      migrationMode: DescribeDtsJobsResponseBodyDtsJobListMigrationMode,
      performance: DescribeDtsJobsResponseBodyDtsJobListPerformance,
      precheckStatus: DescribeDtsJobsResponseBodyDtsJobListPrecheckStatus,
      reverseJob: DescribeDtsJobsResponseBodyDtsJobListReverseJob,
      sourceEndpoint: DescribeDtsJobsResponseBodyDtsJobListSourceEndpoint,
      structureInitializationStatus: DescribeDtsJobsResponseBodyDtsJobListStructureInitializationStatus,
      retryState: DescribeDtsJobsResponseBodyDtsJobListRetryState,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusResponseBodyDataInitializationDetails extends $tea.Model {
  sourceOwnerDBName?: string;
  status?: string;
  usedTime?: string;
  tableName?: string;
  errorMessage?: string;
  finishRowNum?: string;
  destinationOwnerDBName?: string;
  totalRowNum?: string;
  static names(): { [key: string]: string } {
    return {
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
      usedTime: 'UsedTime',
      tableName: 'TableName',
      errorMessage: 'ErrorMessage',
      finishRowNum: 'FinishRowNum',
      destinationOwnerDBName: 'DestinationOwnerDBName',
      totalRowNum: 'TotalRowNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceOwnerDBName: 'string',
      status: 'string',
      usedTime: 'string',
      tableName: 'string',
      errorMessage: 'string',
      finishRowNum: 'string',
      destinationOwnerDBName: 'string',
      totalRowNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusResponseBodyDataSynchronizationDetails extends $tea.Model {
  status?: string;
  sourceOwnerDBName?: string;
  tableName?: string;
  errorMessage?: string;
  destinationOwnerDBName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      sourceOwnerDBName: 'SourceOwnerDBName',
      tableName: 'TableName',
      errorMessage: 'ErrorMessage',
      destinationOwnerDBName: 'DestinationOwnerDBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      sourceOwnerDBName: 'string',
      tableName: 'string',
      errorMessage: 'string',
      destinationOwnerDBName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusResponseBodyStructureInitializationDetailsConstraints extends $tea.Model {
  status?: string;
  sourceOwnerDBName?: string;
  objectDefinition?: string;
  objectType?: string;
  errorMessage?: string;
  destinationOwnerDBName?: string;
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      sourceOwnerDBName: 'SourceOwnerDBName',
      objectDefinition: 'ObjectDefinition',
      objectType: 'ObjectType',
      errorMessage: 'ErrorMessage',
      destinationOwnerDBName: 'DestinationOwnerDBName',
      objectName: 'ObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      sourceOwnerDBName: 'string',
      objectDefinition: 'string',
      objectType: 'string',
      errorMessage: 'string',
      destinationOwnerDBName: 'string',
      objectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusResponseBodyStructureInitializationDetails extends $tea.Model {
  status?: string;
  sourceOwnerDBName?: string;
  objectDefinition?: string;
  objectType?: string;
  errorMessage?: string;
  destinationOwnerDBName?: string;
  objectName?: string;
  constraints?: DescribeInitializationStatusResponseBodyStructureInitializationDetailsConstraints[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      sourceOwnerDBName: 'SourceOwnerDBName',
      objectDefinition: 'ObjectDefinition',
      objectType: 'ObjectType',
      errorMessage: 'ErrorMessage',
      destinationOwnerDBName: 'DestinationOwnerDBName',
      objectName: 'ObjectName',
      constraints: 'Constraints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      sourceOwnerDBName: 'string',
      objectDefinition: 'string',
      objectType: 'string',
      errorMessage: 'string',
      destinationOwnerDBName: 'string',
      objectName: 'string',
      constraints: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyStructureInitializationDetailsConstraints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMonitorRuleResponseBodyMonitorRules extends $tea.Model {
  type?: string;
  delayRuleTime?: number;
  state?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      delayRuleTime: 'DelayRuleTime',
      state: 'State',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      delayRuleTime: 'number',
      state: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailRequestMigrationMode extends $tea.Model {
  structureInitialization?: boolean;
  dataInitialization?: boolean;
  dataSynchronization?: boolean;
  static names(): { [key: string]: string } {
    return {
      structureInitialization: 'StructureInitialization',
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      structureInitialization: 'boolean',
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBodyDataInitializationDetailListDataInitializationDetail extends $tea.Model {
  sourceOwnerDBName?: string;
  status?: string;
  tableName?: string;
  errorMessage?: string;
  finishRowNum?: string;
  migrationTime?: string;
  destinationOwnerDBName?: string;
  totalRowNum?: string;
  static names(): { [key: string]: string } {
    return {
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
      tableName: 'TableName',
      errorMessage: 'ErrorMessage',
      finishRowNum: 'FinishRowNum',
      migrationTime: 'MigrationTime',
      destinationOwnerDBName: 'DestinationOwnerDBName',
      totalRowNum: 'TotalRowNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceOwnerDBName: 'string',
      status: 'string',
      tableName: 'string',
      errorMessage: 'string',
      finishRowNum: 'string',
      migrationTime: 'string',
      destinationOwnerDBName: 'string',
      totalRowNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBodyDataInitializationDetailList extends $tea.Model {
  dataInitializationDetail?: DescribeMigrationJobDetailResponseBodyDataInitializationDetailListDataInitializationDetail[];
  static names(): { [key: string]: string } {
    return {
      dataInitializationDetail: 'DataInitializationDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationDetail: { 'type': 'array', 'itemType': DescribeMigrationJobDetailResponseBodyDataInitializationDetailListDataInitializationDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailListDataSynchronizationDetail extends $tea.Model {
  status?: string;
  sourceOwnerDBName?: string;
  tableName?: string;
  errorMessage?: string;
  destinationOwnerDBName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      sourceOwnerDBName: 'SourceOwnerDBName',
      tableName: 'TableName',
      errorMessage: 'ErrorMessage',
      destinationOwnerDBName: 'DestinationOwnerDBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      sourceOwnerDBName: 'string',
      tableName: 'string',
      errorMessage: 'string',
      destinationOwnerDBName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailList extends $tea.Model {
  dataSynchronizationDetail?: DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailListDataSynchronizationDetail[];
  static names(): { [key: string]: string } {
    return {
      dataSynchronizationDetail: 'DataSynchronizationDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSynchronizationDetail: { 'type': 'array', 'itemType': DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailListDataSynchronizationDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintListStructureInitializationDetail extends $tea.Model {
  status?: string;
  sourceOwnerDBName?: string;
  objectDefinition?: string;
  objectType?: string;
  errorMessage?: string;
  destinationOwnerDBName?: string;
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      sourceOwnerDBName: 'SourceOwnerDBName',
      objectDefinition: 'ObjectDefinition',
      objectType: 'ObjectType',
      errorMessage: 'ErrorMessage',
      destinationOwnerDBName: 'DestinationOwnerDBName',
      objectName: 'ObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      sourceOwnerDBName: 'string',
      objectDefinition: 'string',
      objectType: 'string',
      errorMessage: 'string',
      destinationOwnerDBName: 'string',
      objectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintList extends $tea.Model {
  structureInitializationDetail?: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintListStructureInitializationDetail[];
  static names(): { [key: string]: string } {
    return {
      structureInitializationDetail: 'StructureInitializationDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      structureInitializationDetail: { 'type': 'array', 'itemType': DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintListStructureInitializationDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetail extends $tea.Model {
  status?: string;
  sourceOwnerDBName?: string;
  objectDefinition?: string;
  objectType?: string;
  errorMessage?: string;
  destinationOwnerDBName?: string;
  objectName?: string;
  constraintList?: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintList;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      sourceOwnerDBName: 'SourceOwnerDBName',
      objectDefinition: 'ObjectDefinition',
      objectType: 'ObjectType',
      errorMessage: 'ErrorMessage',
      destinationOwnerDBName: 'DestinationOwnerDBName',
      objectName: 'ObjectName',
      constraintList: 'ConstraintList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      sourceOwnerDBName: 'string',
      objectDefinition: 'string',
      objectType: 'string',
      errorMessage: 'string',
      destinationOwnerDBName: 'string',
      objectName: 'string',
      constraintList: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBodyStructureInitializationDetailList extends $tea.Model {
  structureInitializationDetail?: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetail[];
  static names(): { [key: string]: string } {
    return {
      structureInitializationDetail: 'StructureInitializationDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      structureInitializationDetail: { 'type': 'array', 'itemType': DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObjectTableList extends $tea.Model {
  table?: string[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObject extends $tea.Model {
  databaseName?: string;
  wholeDatabase?: string;
  tableList?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObjectTableList;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      wholeDatabase: 'WholeDatabase',
      tableList: 'TableList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      wholeDatabase: 'string',
      tableList: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObjectTableList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObject extends $tea.Model {
  synchronousObject?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObject[];
  static names(): { [key: string]: string } {
    return {
      synchronousObject: 'SynchronousObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronousObject: { 'type': 'array', 'itemType': DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObject },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTagsTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTags extends $tea.Model {
  tag?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization extends $tea.Model {
  percent?: string;
  status?: string;
  errorMessage?: string;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      percent: 'Percent',
      status: 'status',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percent: 'string',
      status: 'string',
      errorMessage: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization extends $tea.Model {
  delay?: string;
  percent?: string;
  status?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      percent: 'Percent',
      status: 'status',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'string',
      percent: 'string',
      status: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDestinationEndpoint extends $tea.Model {
  oracleSID?: string;
  databaseName?: string;
  instanceID?: string;
  port?: string;
  IP?: string;
  instanceType?: string;
  userName?: string;
  engineName?: string;
  static names(): { [key: string]: string } {
    return {
      oracleSID: 'OracleSID',
      databaseName: 'DatabaseName',
      instanceID: 'InstanceID',
      port: 'Port',
      IP: 'IP',
      instanceType: 'InstanceType',
      userName: 'UserName',
      engineName: 'EngineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oracleSID: 'string',
      databaseName: 'string',
      instanceID: 'string',
      port: 'string',
      IP: 'string',
      instanceType: 'string',
      userName: 'string',
      engineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationMode extends $tea.Model {
  dataInitialization?: boolean;
  dataSynchronization?: boolean;
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      structureInitialization: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobPrecheck extends $tea.Model {
  status?: string;
  percent?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobSourceEndpoint extends $tea.Model {
  oracleSID?: string;
  databaseName?: string;
  instanceID?: string;
  port?: string;
  IP?: string;
  instanceType?: string;
  userName?: string;
  engineName?: string;
  static names(): { [key: string]: string } {
    return {
      oracleSID: 'OracleSID',
      databaseName: 'DatabaseName',
      instanceID: 'InstanceID',
      port: 'Port',
      IP: 'IP',
      instanceType: 'InstanceType',
      userName: 'UserName',
      engineName: 'EngineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oracleSID: 'string',
      databaseName: 'string',
      instanceID: 'string',
      port: 'string',
      IP: 'string',
      instanceType: 'string',
      userName: 'string',
      engineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobStructureInitialization extends $tea.Model {
  percent?: string;
  status?: string;
  errorMessage?: string;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      percent: 'Percent',
      status: 'status',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percent: 'string',
      status: 'string',
      errorMessage: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJob extends $tea.Model {
  migrationJobName?: string;
  migrationJobStatus?: string;
  payType?: string;
  migrationJobClass?: string;
  instanceCreateTime?: string;
  migrationJobID?: string;
  jobCreateTime?: string;
  migrationObject?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObject;
  tags?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTags;
  dataInitialization?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization;
  dataSynchronization?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization;
  destinationEndpoint?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDestinationEndpoint;
  migrationMode?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationMode;
  precheck?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobPrecheck;
  sourceEndpoint?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobSourceEndpoint;
  structureInitialization?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobStructureInitialization;
  static names(): { [key: string]: string } {
    return {
      migrationJobName: 'MigrationJobName',
      migrationJobStatus: 'MigrationJobStatus',
      payType: 'PayType',
      migrationJobClass: 'MigrationJobClass',
      instanceCreateTime: 'InstanceCreateTime',
      migrationJobID: 'MigrationJobID',
      jobCreateTime: 'JobCreateTime',
      migrationObject: 'MigrationObject',
      tags: 'Tags',
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      destinationEndpoint: 'DestinationEndpoint',
      migrationMode: 'MigrationMode',
      precheck: 'Precheck',
      sourceEndpoint: 'SourceEndpoint',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationJobName: 'string',
      migrationJobStatus: 'string',
      payType: 'string',
      migrationJobClass: 'string',
      instanceCreateTime: 'string',
      migrationJobID: 'string',
      jobCreateTime: 'string',
      migrationObject: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObject,
      tags: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTags,
      dataInitialization: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization,
      dataSynchronization: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization,
      destinationEndpoint: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDestinationEndpoint,
      migrationMode: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationMode,
      precheck: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobPrecheck,
      sourceEndpoint: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobSourceEndpoint,
      structureInitialization: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobStructureInitialization,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobs extends $tea.Model {
  migrationJob?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJob[];
  static names(): { [key: string]: string } {
    return {
      migrationJob: 'MigrationJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationJob: { 'type': 'array', 'itemType': DescribeMigrationJobsResponseBodyMigrationJobsMigrationJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodyDataInitializationStatus extends $tea.Model {
  status?: string;
  percent?: string;
  errorMessage?: string;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      errorMessage: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodyDataSynchronizationStatus extends $tea.Model {
  status?: string;
  percent?: string;
  delay?: string;
  errorMessage?: string;
  checkpoint?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      delay: 'Delay',
      errorMessage: 'ErrorMessage',
      checkpoint: 'Checkpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      delay: 'string',
      errorMessage: 'string',
      checkpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodyDestinationEndpoint extends $tea.Model {
  databaseName?: string;
  instanceId?: string;
  IP?: string;
  instanceType?: string;
  port?: string;
  userName?: string;
  oracleSID?: string;
  engineName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      instanceId: 'InstanceId',
      IP: 'IP',
      instanceType: 'InstanceType',
      port: 'Port',
      userName: 'UserName',
      oracleSID: 'oracleSID',
      engineName: 'EngineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      instanceId: 'string',
      IP: 'string',
      instanceType: 'string',
      port: 'string',
      userName: 'string',
      oracleSID: 'string',
      engineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodyMigrationMode extends $tea.Model {
  dataInitialization?: boolean;
  dataSynchronization?: boolean;
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'dataInitialization',
      dataSynchronization: 'dataSynchronization',
      structureInitialization: 'structureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      structureInitialization: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodyPrecheckStatusDetailCheckItem extends $tea.Model {
  checkStatus?: string;
  errorMessage?: string;
  itemName?: string;
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      errorMessage: 'ErrorMessage',
      itemName: 'ItemName',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      errorMessage: 'string',
      itemName: 'string',
      repairMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodyPrecheckStatusDetail extends $tea.Model {
  checkItem?: DescribeMigrationJobStatusResponseBodyPrecheckStatusDetailCheckItem[];
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: { 'type': 'array', 'itemType': DescribeMigrationJobStatusResponseBodyPrecheckStatusDetailCheckItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodyPrecheckStatus extends $tea.Model {
  status?: string;
  percent?: string;
  detail?: DescribeMigrationJobStatusResponseBodyPrecheckStatusDetail;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      detail: DescribeMigrationJobStatusResponseBodyPrecheckStatusDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodySourceEndpoint extends $tea.Model {
  databaseName?: string;
  instanceId?: string;
  IP?: string;
  instanceType?: string;
  port?: string;
  userName?: string;
  oracleSID?: string;
  engineName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      instanceId: 'InstanceId',
      IP: 'IP',
      instanceType: 'InstanceType',
      port: 'Port',
      userName: 'UserName',
      oracleSID: 'oracleSID',
      engineName: 'EngineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      instanceId: 'string',
      IP: 'string',
      instanceType: 'string',
      port: 'string',
      userName: 'string',
      oracleSID: 'string',
      engineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodyStructureInitializationStatus extends $tea.Model {
  status?: string;
  percent?: string;
  errorMessage?: string;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      errorMessage: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodyJobProgressLogs extends $tea.Model {
  errData?: string;
  errMsg?: string;
  logLevel?: string;
  errType?: string;
  static names(): { [key: string]: string } {
    return {
      errData: 'ErrData',
      errMsg: 'ErrMsg',
      logLevel: 'LogLevel',
      errType: 'ErrType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errData: 'string',
      errMsg: 'string',
      logLevel: 'string',
      errType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodyJobProgress extends $tea.Model {
  skip?: boolean;
  finishTime?: string;
  ignoreFlag?: string;
  delaySeconds?: number;
  ddlSql?: string;
  state?: string;
  bootTime?: string;
  item?: string;
  sub?: string;
  total?: number;
  targetNames?: string;
  canSkip?: boolean;
  names?: string;
  errDetail?: string;
  diffRow?: number;
  jobId?: string;
  sourceSchema?: string;
  destSchema?: string;
  parentObj?: string;
  errMsg?: string;
  orderNum?: number;
  repairMethod?: string;
  id?: string;
  logs?: DescribePreCheckStatusResponseBodyJobProgressLogs[];
  static names(): { [key: string]: string } {
    return {
      skip: 'Skip',
      finishTime: 'FinishTime',
      ignoreFlag: 'IgnoreFlag',
      delaySeconds: 'DelaySeconds',
      ddlSql: 'DdlSql',
      state: 'State',
      bootTime: 'BootTime',
      item: 'Item',
      sub: 'Sub',
      total: 'Total',
      targetNames: 'TargetNames',
      canSkip: 'CanSkip',
      names: 'Names',
      errDetail: 'ErrDetail',
      diffRow: 'DiffRow',
      jobId: 'JobId',
      sourceSchema: 'SourceSchema',
      destSchema: 'DestSchema',
      parentObj: 'ParentObj',
      errMsg: 'ErrMsg',
      orderNum: 'OrderNum',
      repairMethod: 'RepairMethod',
      id: 'Id',
      logs: 'Logs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skip: 'boolean',
      finishTime: 'string',
      ignoreFlag: 'string',
      delaySeconds: 'number',
      ddlSql: 'string',
      state: 'string',
      bootTime: 'string',
      item: 'string',
      sub: 'string',
      total: 'number',
      targetNames: 'string',
      canSkip: 'boolean',
      names: 'string',
      errDetail: 'string',
      diffRow: 'number',
      jobId: 'string',
      sourceSchema: 'string',
      destSchema: 'string',
      parentObj: 'string',
      errMsg: 'string',
      orderNum: 'number',
      repairMethod: 'string',
      id: 'string',
      logs: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyJobProgressLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgressLogs extends $tea.Model {
  errData?: string;
  errMsg?: string;
  logLevel?: string;
  errType?: string;
  static names(): { [key: string]: string } {
    return {
      errData: 'ErrData',
      errMsg: 'ErrMsg',
      logLevel: 'LogLevel',
      errType: 'ErrType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errData: 'string',
      errMsg: 'string',
      logLevel: 'string',
      errType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgress extends $tea.Model {
  skip?: boolean;
  finishTime?: string;
  ignoreFlag?: string;
  delaySeconds?: number;
  ddlSql?: string;
  state?: string;
  bootTime?: string;
  item?: string;
  sub?: string;
  total?: number;
  targetNames?: string;
  canSkip?: boolean;
  names?: string;
  errDetail?: string;
  diffRow?: number;
  jobId?: string;
  sourceSchema?: string;
  destSchema?: string;
  parentObj?: string;
  errMsg?: string;
  orderNum?: number;
  repairMethod?: string;
  id?: string;
  logs?: DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgressLogs[];
  static names(): { [key: string]: string } {
    return {
      skip: 'Skip',
      finishTime: 'FinishTime',
      ignoreFlag: 'IgnoreFlag',
      delaySeconds: 'DelaySeconds',
      ddlSql: 'DdlSql',
      state: 'State',
      bootTime: 'BootTime',
      item: 'Item',
      sub: 'Sub',
      total: 'Total',
      targetNames: 'TargetNames',
      canSkip: 'CanSkip',
      names: 'Names',
      errDetail: 'ErrDetail',
      diffRow: 'DiffRow',
      jobId: 'JobId',
      sourceSchema: 'SourceSchema',
      destSchema: 'DestSchema',
      parentObj: 'ParentObj',
      errMsg: 'ErrMsg',
      orderNum: 'OrderNum',
      repairMethod: 'RepairMethod',
      id: 'Id',
      logs: 'Logs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skip: 'boolean',
      finishTime: 'string',
      ignoreFlag: 'string',
      delaySeconds: 'number',
      ddlSql: 'string',
      state: 'string',
      bootTime: 'string',
      item: 'string',
      sub: 'string',
      total: 'number',
      targetNames: 'string',
      canSkip: 'boolean',
      names: 'string',
      errDetail: 'string',
      diffRow: 'number',
      jobId: 'string',
      sourceSchema: 'string',
      destSchema: 'string',
      parentObj: 'string',
      errMsg: 'string',
      orderNum: 'number',
      repairMethod: 'string',
      id: 'string',
      logs: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgressLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodySubDistributedJobStatus extends $tea.Model {
  jobName?: string;
  state?: string;
  jobId?: string;
  errorItem?: number;
  code?: string;
  total?: number;
  jobProgress?: DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgress[];
  static names(): { [key: string]: string } {
    return {
      jobName: 'JobName',
      state: 'State',
      jobId: 'JobId',
      errorItem: 'ErrorItem',
      code: 'Code',
      total: 'Total',
      jobProgress: 'JobProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobName: 'string',
      state: 'string',
      jobId: 'string',
      errorItem: 'number',
      code: 'string',
      total: 'number',
      jobProgress: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObjectSynchronousObjectTableList extends $tea.Model {
  table?: string[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObjectSynchronousObject extends $tea.Model {
  databaseName?: string;
  wholeDatabase?: string;
  tableList?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObjectSynchronousObjectTableList;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      wholeDatabase: 'WholeDatabase',
      tableList: 'TableList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      wholeDatabase: 'string',
      tableList: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObjectSynchronousObjectTableList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObject extends $tea.Model {
  synchronousObject?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObjectSynchronousObject[];
  static names(): { [key: string]: string } {
    return {
      synchronousObject: 'SynchronousObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronousObject: { 'type': 'array', 'itemType': DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObjectSynchronousObject },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceTagsTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceTags extends $tea.Model {
  tag?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSourceEndpoint extends $tea.Model {
  instanceType?: string;
  instanceID?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      instanceID: 'InstanceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      instanceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionDataType extends $tea.Model {
  DML?: boolean;
  DDL?: boolean;
  static names(): { [key: string]: string } {
    return {
      DML: 'DML',
      DDL: 'DDL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DML: 'boolean',
      DDL: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionHost extends $tea.Model {
  VPCHost?: string;
  publicHost?: string;
  privateHost?: string;
  static names(): { [key: string]: string } {
    return {
      VPCHost: 'VPCHost',
      publicHost: 'PublicHost',
      privateHost: 'PrivateHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VPCHost: 'string',
      publicHost: 'string',
      privateHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstance extends $tea.Model {
  status?: string;
  errorMessage?: string;
  payType?: string;
  consumptionClient?: string;
  consumptionCheckpoint?: string;
  endTimestamp?: string;
  instanceCreateTime?: string;
  beginTimestamp?: string;
  subscribeTopic?: string;
  subscriptionInstanceName?: string;
  subscriptionInstanceID?: string;
  jobCreateTime?: string;
  subscriptionObject?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObject;
  tags?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceTags;
  sourceEndpoint?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSourceEndpoint;
  subscriptionDataType?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionDataType;
  subscriptionHost?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionHost;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      errorMessage: 'ErrorMessage',
      payType: 'PayType',
      consumptionClient: 'ConsumptionClient',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      endTimestamp: 'EndTimestamp',
      instanceCreateTime: 'InstanceCreateTime',
      beginTimestamp: 'BeginTimestamp',
      subscribeTopic: 'SubscribeTopic',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      subscriptionInstanceID: 'SubscriptionInstanceID',
      jobCreateTime: 'JobCreateTime',
      subscriptionObject: 'SubscriptionObject',
      tags: 'Tags',
      sourceEndpoint: 'SourceEndpoint',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionHost: 'SubscriptionHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      errorMessage: 'string',
      payType: 'string',
      consumptionClient: 'string',
      consumptionCheckpoint: 'string',
      endTimestamp: 'string',
      instanceCreateTime: 'string',
      beginTimestamp: 'string',
      subscribeTopic: 'string',
      subscriptionInstanceName: 'string',
      subscriptionInstanceID: 'string',
      jobCreateTime: 'string',
      subscriptionObject: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObject,
      tags: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceTags,
      sourceEndpoint: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSourceEndpoint,
      subscriptionDataType: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionDataType,
      subscriptionHost: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionHost,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstances extends $tea.Model {
  subscriptionInstance?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstance[];
  static names(): { [key: string]: string } {
    return {
      subscriptionInstance: 'SubscriptionInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionInstance: { 'type': 'array', 'itemType': DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusResponseBodySourceEndpoint extends $tea.Model {
  instanceType?: string;
  instanceID?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      instanceID: 'InstanceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      instanceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusResponseBodySubscriptionDataType extends $tea.Model {
  DML?: boolean;
  DDL?: boolean;
  static names(): { [key: string]: string } {
    return {
      DML: 'DML',
      DDL: 'DDL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DML: 'boolean',
      DDL: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusResponseBodySubscriptionHost extends $tea.Model {
  VPCHost?: string;
  publicHost?: string;
  privateHost?: string;
  static names(): { [key: string]: string } {
    return {
      VPCHost: 'VPCHost',
      publicHost: 'PublicHost',
      privateHost: 'PrivateHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VPCHost: 'string',
      publicHost: 'string',
      privateHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObjectTableList extends $tea.Model {
  table?: string[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObject extends $tea.Model {
  databaseName?: string;
  wholeDatabase?: string;
  tableList?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObjectTableList;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      wholeDatabase: 'WholeDatabase',
      tableList: 'TableList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      wholeDatabase: 'string',
      tableList: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObjectTableList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusResponseBodySubscriptionObject extends $tea.Model {
  synchronousObject?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObject[];
  static names(): { [key: string]: string } {
    return {
      synchronousObject: 'SynchronousObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronousObject: { 'type': 'array', 'itemType': DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObject },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionMetaResponseBodySubscriptionMetaList extends $tea.Model {
  sid?: string;
  checkpoint?: number;
  DProxyUrl?: string;
  DBList?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      sid: 'Sid',
      checkpoint: 'Checkpoint',
      DProxyUrl: 'DProxyUrl',
      DBList: 'DBList',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sid: 'string',
      checkpoint: 'number',
      DProxyUrl: 'string',
      DBList: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjectsTableExcludes extends $tea.Model {
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjectsTableIncludes extends $tea.Model {
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjects extends $tea.Model {
  newSchemaName?: string;
  schemaName?: string;
  tableExcludes?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjectsTableExcludes[];
  tableIncludes?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjectsTableIncludes[];
  static names(): { [key: string]: string } {
    return {
      newSchemaName: 'NewSchemaName',
      schemaName: 'SchemaName',
      tableExcludes: 'TableExcludes',
      tableIncludes: 'TableIncludes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newSchemaName: 'string',
      schemaName: 'string',
      tableExcludes: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjectsTableExcludes },
      tableIncludes: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjectsTableIncludes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataInitializationStatus extends $tea.Model {
  status?: string;
  percent?: string;
  errorMessage?: string;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      errorMessage: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus extends $tea.Model {
  status?: string;
  delay?: string;
  percent?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      delay: 'Delay',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      delay: 'string',
      percent: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesDestinationEndpoint extends $tea.Model {
  instanceId?: string;
  IP?: string;
  instanceType?: string;
  port?: string;
  userName?: string;
  engineName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      IP: 'IP',
      instanceType: 'InstanceType',
      port: 'Port',
      userName: 'UserName',
      engineName: 'EngineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      IP: 'string',
      instanceType: 'string',
      port: 'string',
      userName: 'string',
      engineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance extends $tea.Model {
  RPS?: string;
  FLOW?: string;
  static names(): { [key: string]: string } {
    return {
      RPS: 'RPS',
      FLOW: 'FLOW',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RPS: 'string',
      FLOW: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatusDetail extends $tea.Model {
  checkStatus?: string;
  errorMessage?: string;
  itemName?: string;
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      errorMessage: 'ErrorMessage',
      itemName: 'ItemName',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      errorMessage: 'string',
      itemName: 'string',
      repairMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatus extends $tea.Model {
  status?: string;
  percent?: string;
  detail?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatusDetail[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      detail: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatusDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesSourceEndpoint extends $tea.Model {
  instanceId?: string;
  IP?: string;
  instanceType?: string;
  port?: string;
  userName?: string;
  engineName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      IP: 'IP',
      instanceType: 'InstanceType',
      port: 'Port',
      userName: 'UserName',
      engineName: 'EngineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      IP: 'string',
      instanceType: 'string',
      port: 'string',
      userName: 'string',
      engineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesStructureInitializationStatus extends $tea.Model {
  status?: string;
  percent?: string;
  errorMessage?: string;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      errorMessage: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstances extends $tea.Model {
  dataInitialization?: string;
  status?: string;
  synchronizationJobName?: string;
  delay?: string;
  errorMessage?: string;
  expireTime?: string;
  createTime?: string;
  payType?: string;
  structureInitialization?: string;
  synchronizationJobClass?: string;
  instanceCreateTime?: string;
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  jobCreateTime?: string;
  tags?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesTags[];
  synchronizationObjects?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjects[];
  dataInitializationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataInitializationStatus;
  dataSynchronizationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus;
  destinationEndpoint?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDestinationEndpoint;
  performance?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance;
  precheckStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatus;
  sourceEndpoint?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSourceEndpoint;
  structureInitializationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesStructureInitializationStatus;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      status: 'Status',
      synchronizationJobName: 'SynchronizationJobName',
      delay: 'Delay',
      errorMessage: 'ErrorMessage',
      expireTime: 'ExpireTime',
      createTime: 'CreateTime',
      payType: 'PayType',
      structureInitialization: 'StructureInitialization',
      synchronizationJobClass: 'SynchronizationJobClass',
      instanceCreateTime: 'InstanceCreateTime',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
      jobCreateTime: 'JobCreateTime',
      tags: 'Tags',
      synchronizationObjects: 'SynchronizationObjects',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      destinationEndpoint: 'DestinationEndpoint',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      sourceEndpoint: 'SourceEndpoint',
      structureInitializationStatus: 'StructureInitializationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: 'string',
      status: 'string',
      synchronizationJobName: 'string',
      delay: 'string',
      errorMessage: 'string',
      expireTime: 'string',
      createTime: 'string',
      payType: 'string',
      structureInitialization: 'string',
      synchronizationJobClass: 'string',
      instanceCreateTime: 'string',
      synchronizationJobId: 'string',
      synchronizationDirection: 'string',
      jobCreateTime: 'string',
      tags: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesTags },
      synchronizationObjects: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjects },
      dataInitializationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataInitializationStatus,
      dataSynchronizationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus,
      destinationEndpoint: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDestinationEndpoint,
      performance: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance,
      precheckStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatus,
      sourceEndpoint: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSourceEndpoint,
      structureInitializationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesStructureInitializationStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodyDataInitializationStatus extends $tea.Model {
  status?: string;
  percent?: string;
  errorMessage?: string;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      errorMessage: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodyDataSynchronizationStatus extends $tea.Model {
  status?: string;
  delay?: string;
  percent?: string;
  errorMessage?: string;
  delayMillis?: number;
  checkpoint?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      delay: 'Delay',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      delayMillis: 'DelayMillis',
      checkpoint: 'Checkpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      delay: 'string',
      percent: 'string',
      errorMessage: 'string',
      delayMillis: 'number',
      checkpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodyDestinationEndpoint extends $tea.Model {
  instanceId?: string;
  IP?: string;
  instanceType?: string;
  port?: string;
  userName?: string;
  engineName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      IP: 'IP',
      instanceType: 'InstanceType',
      port: 'Port',
      userName: 'UserName',
      engineName: 'EngineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      IP: 'string',
      instanceType: 'string',
      port: 'string',
      userName: 'string',
      engineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodyPerformance extends $tea.Model {
  RPS?: string;
  FLOW?: string;
  static names(): { [key: string]: string } {
    return {
      RPS: 'RPS',
      FLOW: 'FLOW',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RPS: 'string',
      FLOW: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodyPrecheckStatusDetail extends $tea.Model {
  checkStatus?: string;
  errorMessage?: string;
  itemName?: string;
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      errorMessage: 'ErrorMessage',
      itemName: 'ItemName',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      errorMessage: 'string',
      itemName: 'string',
      repairMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodyPrecheckStatus extends $tea.Model {
  status?: string;
  percent?: string;
  detail?: DescribeSynchronizationJobStatusResponseBodyPrecheckStatusDetail[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      detail: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodyPrecheckStatusDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodySourceEndpoint extends $tea.Model {
  instanceId?: string;
  IP?: string;
  instanceType?: string;
  port?: string;
  userName?: string;
  engineName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      IP: 'IP',
      instanceType: 'InstanceType',
      port: 'Port',
      userName: 'UserName',
      engineName: 'EngineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      IP: 'string',
      instanceType: 'string',
      port: 'string',
      userName: 'string',
      engineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodyStructureInitializationStatus extends $tea.Model {
  status?: string;
  percent?: string;
  errorMessage?: string;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      errorMessage: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableExcludes extends $tea.Model {
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableIncludes extends $tea.Model {
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodySynchronizationObjects extends $tea.Model {
  newSchemaName?: string;
  schemaName?: string;
  tableExcludes?: DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableExcludes[];
  tableIncludes?: DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableIncludes[];
  static names(): { [key: string]: string } {
    return {
      newSchemaName: 'NewSchemaName',
      schemaName: 'SchemaName',
      tableExcludes: 'TableExcludes',
      tableIncludes: 'TableIncludes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newSchemaName: 'string',
      schemaName: 'string',
      tableExcludes: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableExcludes },
      tableIncludes: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableIncludes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusListSynchronizationDirectionInfoList extends $tea.Model {
  status?: string;
  synchronizationDirection?: string;
  checkpoint?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      synchronizationDirection: 'SynchronizationDirection',
      checkpoint: 'Checkpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      synchronizationDirection: 'string',
      checkpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusList extends $tea.Model {
  synchronizationJobId?: string;
  synchronizationDirectionInfoList?: DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusListSynchronizationDirectionInfoList[];
  static names(): { [key: string]: string } {
    return {
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirectionInfoList: 'SynchronizationDirectionInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronizationJobId: 'string',
      synchronizationDirectionInfoList: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusListSynchronizationDirectionInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponseBodyDataInitializationStatus extends $tea.Model {
  status?: string;
  percent?: string;
  errorMessage?: string;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      errorMessage: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponseBodyDataSynchronizationStatus extends $tea.Model {
  status?: string;
  delay?: string;
  percent?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      delay: 'Delay',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      delay: 'string',
      percent: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatusDetail extends $tea.Model {
  checkStatus?: string;
  errorMessage?: string;
  itemName?: string;
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      errorMessage: 'ErrorMessage',
      itemName: 'ItemName',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      errorMessage: 'string',
      itemName: 'string',
      repairMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatus extends $tea.Model {
  status?: string;
  percent?: string;
  detail?: DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatusDetail[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      detail: { 'type': 'array', 'itemType': DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatusDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponseBodyStructureInitializationStatus extends $tea.Model {
  status?: string;
  percent?: string;
  errorMessage?: string;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'string',
      errorMessage: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  tagValue?: string;
  resourceType?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      resourceType: 'string',
      resourceId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SummaryJobDetailResponseBodyProgressSummaryDetails extends $tea.Model {
  key?: string;
  totalCount?: number;
  state?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      totalCount: 'TotalCount',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      totalCount: 'number',
      state: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchSynchronizationEndpointRequestEndpoint extends $tea.Model {
  type?: string;
  instanceType?: string;
  instanceId?: string;
  IP?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      instanceType: 'InstanceType',
      instanceId: 'InstanceId',
      IP: 'IP',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      instanceType: 'string',
      instanceId: 'string',
      IP: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchSynchronizationEndpointRequestSourceEndpoint extends $tea.Model {
  ownerID?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      ownerID: 'OwnerID',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerID: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
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
      'cn-qingdao': "dts.aliyuncs.com",
      'cn-beijing': "dts.aliyuncs.com",
      'cn-zhangjiakou': "dts.aliyuncs.com",
      'cn-huhehaote': "dts.aliyuncs.com",
      'cn-hangzhou': "dts.aliyuncs.com",
      'cn-shanghai': "dts.aliyuncs.com",
      'cn-shenzhen': "dts.aliyuncs.com",
      'cn-hongkong': "dts.aliyuncs.com",
      'ap-southeast-1': "dts.aliyuncs.com",
      'ap-southeast-2': "dts.aliyuncs.com",
      'ap-southeast-3': "dts.aliyuncs.com",
      'ap-southeast-5': "dts.aliyuncs.com",
      'eu-west-1': "dts.aliyuncs.com",
      'us-west-1': "dts.aliyuncs.com",
      'us-east-1': "dts.aliyuncs.com",
      'eu-central-1': "dts.aliyuncs.com",
      'me-east-1': "dts.aliyuncs.com",
      'ap-south-1': "dts.aliyuncs.com",
      'cn-hangzhou-finance': "dts.aliyuncs.com",
      'cn-shanghai-finance-1': "dts.aliyuncs.com",
      'cn-shenzhen-finance-1': "dts.aliyuncs.com",
      'cn-north-2-gov-1': "dts.aliyuncs.com",
      'ap-northeast-2-pop': "dts.aliyuncs.com",
      'cn-beijing-finance-1': "dts.aliyuncs.com",
      'cn-beijing-finance-pop': "dts.aliyuncs.com",
      'cn-beijing-gov-1': "dts.aliyuncs.com",
      'cn-beijing-nu16-b01': "dts.aliyuncs.com",
      'cn-chengdu': "dts.aliyuncs.com",
      'cn-edge-1': "dts.aliyuncs.com",
      'cn-fujian': "dts.aliyuncs.com",
      'cn-haidian-cm12-c01': "dts.aliyuncs.com",
      'cn-hangzhou-bj-b01': "dts.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "dts.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "dts.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "dts.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "dts.aliyuncs.com",
      'cn-hangzhou-test-306': "dts.aliyuncs.com",
      'cn-hongkong-finance-pop': "dts.aliyuncs.com",
      'cn-huhehaote-nebula-1': "dts.aliyuncs.com",
      'cn-qingdao-nebula': "dts.aliyuncs.com",
      'cn-shanghai-et15-b01': "dts.aliyuncs.com",
      'cn-shanghai-et2-b01': "dts.aliyuncs.com",
      'cn-shanghai-inner': "dts.aliyuncs.com",
      'cn-shanghai-internal-test-1': "dts.aliyuncs.com",
      'cn-shenzhen-inner': "dts.aliyuncs.com",
      'cn-shenzhen-st4-d01': "dts.aliyuncs.com",
      'cn-shenzhen-su18-b01': "dts.aliyuncs.com",
      'cn-wuhan': "dts.aliyuncs.com",
      'cn-wulanchabu': "dts.aliyuncs.com",
      'cn-yushanfang': "dts.aliyuncs.com",
      'cn-zhangbei-na61-b01': "dts.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "dts.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "dts.aliyuncs.com",
      'eu-west-1-oxs': "dts.aliyuncs.com",
      'rus-west-1-pop': "dts.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dts", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async configureDtsJobWithOptions(request: ConfigureDtsJobRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureDtsJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigureDtsJobResponse>(await this.doRPCRequest("ConfigureDtsJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigureDtsJobResponse({}));
  }

  async configureDtsJob(request: ConfigureDtsJobRequest): Promise<ConfigureDtsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureDtsJobWithOptions(request, runtime);
  }

  async configureMigrationJobWithOptions(request: ConfigureMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureMigrationJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigureMigrationJobResponse>(await this.doRPCRequest("ConfigureMigrationJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigureMigrationJobResponse({}));
  }

  async configureMigrationJob(request: ConfigureMigrationJobRequest): Promise<ConfigureMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureMigrationJobWithOptions(request, runtime);
  }

  async configureMigrationJobAlertWithOptions(request: ConfigureMigrationJobAlertRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureMigrationJobAlertResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigureMigrationJobAlertResponse>(await this.doRPCRequest("ConfigureMigrationJobAlert", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigureMigrationJobAlertResponse({}));
  }

  async configureMigrationJobAlert(request: ConfigureMigrationJobAlertRequest): Promise<ConfigureMigrationJobAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureMigrationJobAlertWithOptions(request, runtime);
  }

  async configureSubscriptionWithOptions(request: ConfigureSubscriptionRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureSubscriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigureSubscriptionResponse>(await this.doRPCRequest("ConfigureSubscription", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigureSubscriptionResponse({}));
  }

  async configureSubscription(request: ConfigureSubscriptionRequest): Promise<ConfigureSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureSubscriptionWithOptions(request, runtime);
  }

  async configureSubscriptionInstanceWithOptions(request: ConfigureSubscriptionInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureSubscriptionInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigureSubscriptionInstanceResponse>(await this.doRPCRequest("ConfigureSubscriptionInstance", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigureSubscriptionInstanceResponse({}));
  }

  async configureSubscriptionInstance(request: ConfigureSubscriptionInstanceRequest): Promise<ConfigureSubscriptionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureSubscriptionInstanceWithOptions(request, runtime);
  }

  async configureSubscriptionInstanceAlertWithOptions(request: ConfigureSubscriptionInstanceAlertRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureSubscriptionInstanceAlertResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigureSubscriptionInstanceAlertResponse>(await this.doRPCRequest("ConfigureSubscriptionInstanceAlert", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigureSubscriptionInstanceAlertResponse({}));
  }

  async configureSubscriptionInstanceAlert(request: ConfigureSubscriptionInstanceAlertRequest): Promise<ConfigureSubscriptionInstanceAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureSubscriptionInstanceAlertWithOptions(request, runtime);
  }

  async configureSynchronizationJobWithOptions(request: ConfigureSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureSynchronizationJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigureSynchronizationJobResponse>(await this.doRPCRequest("ConfigureSynchronizationJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigureSynchronizationJobResponse({}));
  }

  async configureSynchronizationJob(request: ConfigureSynchronizationJobRequest): Promise<ConfigureSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureSynchronizationJobWithOptions(request, runtime);
  }

  async configureSynchronizationJobAlertWithOptions(request: ConfigureSynchronizationJobAlertRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureSynchronizationJobAlertResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigureSynchronizationJobAlertResponse>(await this.doRPCRequest("ConfigureSynchronizationJobAlert", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigureSynchronizationJobAlertResponse({}));
  }

  async configureSynchronizationJobAlert(request: ConfigureSynchronizationJobAlertRequest): Promise<ConfigureSynchronizationJobAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureSynchronizationJobAlertWithOptions(request, runtime);
  }

  async configureSynchronizationJobReplicatorCompareWithOptions(request: ConfigureSynchronizationJobReplicatorCompareRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureSynchronizationJobReplicatorCompareResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigureSynchronizationJobReplicatorCompareResponse>(await this.doRPCRequest("ConfigureSynchronizationJobReplicatorCompare", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigureSynchronizationJobReplicatorCompareResponse({}));
  }

  async configureSynchronizationJobReplicatorCompare(request: ConfigureSynchronizationJobReplicatorCompareRequest): Promise<ConfigureSynchronizationJobReplicatorCompareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureSynchronizationJobReplicatorCompareWithOptions(request, runtime);
  }

  async createConsumerChannelWithOptions(request: CreateConsumerChannelRequest, runtime: $Util.RuntimeOptions): Promise<CreateConsumerChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateConsumerChannelResponse>(await this.doRPCRequest("CreateConsumerChannel", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateConsumerChannelResponse({}));
  }

  async createConsumerChannel(request: CreateConsumerChannelRequest): Promise<CreateConsumerChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConsumerChannelWithOptions(request, runtime);
  }

  async createConsumerGroupWithOptions(request: CreateConsumerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateConsumerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateConsumerGroupResponse>(await this.doRPCRequest("CreateConsumerGroup", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateConsumerGroupResponse({}));
  }

  async createConsumerGroup(request: CreateConsumerGroupRequest): Promise<CreateConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConsumerGroupWithOptions(request, runtime);
  }

  async createDtsInstanceWithOptions(request: CreateDtsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDtsInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDtsInstanceResponse>(await this.doRPCRequest("CreateDtsInstance", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDtsInstanceResponse({}));
  }

  async createDtsInstance(request: CreateDtsInstanceRequest): Promise<CreateDtsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDtsInstanceWithOptions(request, runtime);
  }

  async createJobMonitorRuleWithOptions(request: CreateJobMonitorRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobMonitorRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateJobMonitorRuleResponse>(await this.doRPCRequest("CreateJobMonitorRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateJobMonitorRuleResponse({}));
  }

  async createJobMonitorRule(request: CreateJobMonitorRuleRequest): Promise<CreateJobMonitorRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobMonitorRuleWithOptions(request, runtime);
  }

  async createMigrationJobWithOptions(request: CreateMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateMigrationJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMigrationJobResponse>(await this.doRPCRequest("CreateMigrationJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMigrationJobResponse({}));
  }

  async createMigrationJob(request: CreateMigrationJobRequest): Promise<CreateMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMigrationJobWithOptions(request, runtime);
  }

  async createSubscriptionInstanceWithOptions(request: CreateSubscriptionInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateSubscriptionInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSubscriptionInstanceResponse>(await this.doRPCRequest("CreateSubscriptionInstance", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSubscriptionInstanceResponse({}));
  }

  async createSubscriptionInstance(request: CreateSubscriptionInstanceRequest): Promise<CreateSubscriptionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSubscriptionInstanceWithOptions(request, runtime);
  }

  async createSynchronizationJobWithOptions(request: CreateSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateSynchronizationJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSynchronizationJobResponse>(await this.doRPCRequest("CreateSynchronizationJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSynchronizationJobResponse({}));
  }

  async createSynchronizationJob(request: CreateSynchronizationJobRequest): Promise<CreateSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSynchronizationJobWithOptions(request, runtime);
  }

  async deleteConsumerChannelWithOptions(request: DeleteConsumerChannelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConsumerChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteConsumerChannelResponse>(await this.doRPCRequest("DeleteConsumerChannel", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteConsumerChannelResponse({}));
  }

  async deleteConsumerChannel(request: DeleteConsumerChannelRequest): Promise<DeleteConsumerChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConsumerChannelWithOptions(request, runtime);
  }

  async deleteConsumerGroupWithOptions(request: DeleteConsumerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConsumerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteConsumerGroupResponse>(await this.doRPCRequest("DeleteConsumerGroup", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteConsumerGroupResponse({}));
  }

  async deleteConsumerGroup(request: DeleteConsumerGroupRequest): Promise<DeleteConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConsumerGroupWithOptions(request, runtime);
  }

  async deleteDtsJobWithOptions(request: DeleteDtsJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDtsJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDtsJobResponse>(await this.doRPCRequest("DeleteDtsJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDtsJobResponse({}));
  }

  async deleteDtsJob(request: DeleteDtsJobRequest): Promise<DeleteDtsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDtsJobWithOptions(request, runtime);
  }

  async deleteMigrationJobWithOptions(request: DeleteMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMigrationJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMigrationJobResponse>(await this.doRPCRequest("DeleteMigrationJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMigrationJobResponse({}));
  }

  async deleteMigrationJob(request: DeleteMigrationJobRequest): Promise<DeleteMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMigrationJobWithOptions(request, runtime);
  }

  async deleteSubscriptionInstanceWithOptions(request: DeleteSubscriptionInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSubscriptionInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSubscriptionInstanceResponse>(await this.doRPCRequest("DeleteSubscriptionInstance", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSubscriptionInstanceResponse({}));
  }

  async deleteSubscriptionInstance(request: DeleteSubscriptionInstanceRequest): Promise<DeleteSubscriptionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSubscriptionInstanceWithOptions(request, runtime);
  }

  async deleteSynchronizationJobWithOptions(request: DeleteSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSynchronizationJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSynchronizationJobResponse>(await this.doRPCRequest("DeleteSynchronizationJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSynchronizationJobResponse({}));
  }

  async deleteSynchronizationJob(request: DeleteSynchronizationJobRequest): Promise<DeleteSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSynchronizationJobWithOptions(request, runtime);
  }

  async describeConnectionStatusWithOptions(request: DescribeConnectionStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConnectionStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeConnectionStatusResponse>(await this.doRPCRequest("DescribeConnectionStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeConnectionStatusResponse({}));
  }

  async describeConnectionStatus(request: DescribeConnectionStatusRequest): Promise<DescribeConnectionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConnectionStatusWithOptions(request, runtime);
  }

  async describeConsumerChannelWithOptions(request: DescribeConsumerChannelRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConsumerChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeConsumerChannelResponse>(await this.doRPCRequest("DescribeConsumerChannel", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeConsumerChannelResponse({}));
  }

  async describeConsumerChannel(request: DescribeConsumerChannelRequest): Promise<DescribeConsumerChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConsumerChannelWithOptions(request, runtime);
  }

  async describeConsumerGroupWithOptions(request: DescribeConsumerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConsumerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeConsumerGroupResponse>(await this.doRPCRequest("DescribeConsumerGroup", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeConsumerGroupResponse({}));
  }

  async describeConsumerGroup(request: DescribeConsumerGroupRequest): Promise<DescribeConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConsumerGroupWithOptions(request, runtime);
  }

  async describeDTSIPWithOptions(request: DescribeDTSIPRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDTSIPResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDTSIPResponse>(await this.doRPCRequest("DescribeDTSIP", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDTSIPResponse({}));
  }

  async describeDTSIP(request: DescribeDTSIPRequest): Promise<DescribeDTSIPResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDTSIPWithOptions(request, runtime);
  }

  async describeDtsJobDetailWithOptions(request: DescribeDtsJobDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDtsJobDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDtsJobDetailResponse>(await this.doRPCRequest("DescribeDtsJobDetail", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDtsJobDetailResponse({}));
  }

  async describeDtsJobDetail(request: DescribeDtsJobDetailRequest): Promise<DescribeDtsJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDtsJobDetailWithOptions(request, runtime);
  }

  async describeDtsJobsWithOptions(request: DescribeDtsJobsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDtsJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDtsJobsResponse>(await this.doRPCRequest("DescribeDtsJobs", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDtsJobsResponse({}));
  }

  async describeDtsJobs(request: DescribeDtsJobsRequest): Promise<DescribeDtsJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDtsJobsWithOptions(request, runtime);
  }

  async describeEndpointSwitchStatusWithOptions(request: DescribeEndpointSwitchStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEndpointSwitchStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEndpointSwitchStatusResponse>(await this.doRPCRequest("DescribeEndpointSwitchStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEndpointSwitchStatusResponse({}));
  }

  async describeEndpointSwitchStatus(request: DescribeEndpointSwitchStatusRequest): Promise<DescribeEndpointSwitchStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEndpointSwitchStatusWithOptions(request, runtime);
  }

  async describeInitializationStatusWithOptions(request: DescribeInitializationStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInitializationStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInitializationStatusResponse>(await this.doRPCRequest("DescribeInitializationStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInitializationStatusResponse({}));
  }

  async describeInitializationStatus(request: DescribeInitializationStatusRequest): Promise<DescribeInitializationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInitializationStatusWithOptions(request, runtime);
  }

  async describeJobMonitorRuleWithOptions(request: DescribeJobMonitorRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJobMonitorRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeJobMonitorRuleResponse>(await this.doRPCRequest("DescribeJobMonitorRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeJobMonitorRuleResponse({}));
  }

  async describeJobMonitorRule(request: DescribeJobMonitorRuleRequest): Promise<DescribeJobMonitorRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobMonitorRuleWithOptions(request, runtime);
  }

  async describeMigrationJobAlertWithOptions(request: DescribeMigrationJobAlertRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMigrationJobAlertResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMigrationJobAlertResponse>(await this.doRPCRequest("DescribeMigrationJobAlert", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMigrationJobAlertResponse({}));
  }

  async describeMigrationJobAlert(request: DescribeMigrationJobAlertRequest): Promise<DescribeMigrationJobAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMigrationJobAlertWithOptions(request, runtime);
  }

  async describeMigrationJobDetailWithOptions(request: DescribeMigrationJobDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMigrationJobDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMigrationJobDetailResponse>(await this.doRPCRequest("DescribeMigrationJobDetail", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMigrationJobDetailResponse({}));
  }

  async describeMigrationJobDetail(request: DescribeMigrationJobDetailRequest): Promise<DescribeMigrationJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMigrationJobDetailWithOptions(request, runtime);
  }

  async describeMigrationJobsWithOptions(request: DescribeMigrationJobsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMigrationJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMigrationJobsResponse>(await this.doRPCRequest("DescribeMigrationJobs", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMigrationJobsResponse({}));
  }

  async describeMigrationJobs(request: DescribeMigrationJobsRequest): Promise<DescribeMigrationJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMigrationJobsWithOptions(request, runtime);
  }

  async describeMigrationJobStatusWithOptions(request: DescribeMigrationJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMigrationJobStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMigrationJobStatusResponse>(await this.doRPCRequest("DescribeMigrationJobStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMigrationJobStatusResponse({}));
  }

  async describeMigrationJobStatus(request: DescribeMigrationJobStatusRequest): Promise<DescribeMigrationJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMigrationJobStatusWithOptions(request, runtime);
  }

  async describePreCheckStatusWithOptions(request: DescribePreCheckStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribePreCheckStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePreCheckStatusResponse>(await this.doRPCRequest("DescribePreCheckStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePreCheckStatusResponse({}));
  }

  async describePreCheckStatus(request: DescribePreCheckStatusRequest): Promise<DescribePreCheckStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePreCheckStatusWithOptions(request, runtime);
  }

  async describeSubscriptionInstanceAlertWithOptions(request: DescribeSubscriptionInstanceAlertRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubscriptionInstanceAlertResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSubscriptionInstanceAlertResponse>(await this.doRPCRequest("DescribeSubscriptionInstanceAlert", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSubscriptionInstanceAlertResponse({}));
  }

  async describeSubscriptionInstanceAlert(request: DescribeSubscriptionInstanceAlertRequest): Promise<DescribeSubscriptionInstanceAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubscriptionInstanceAlertWithOptions(request, runtime);
  }

  async describeSubscriptionInstancesWithOptions(request: DescribeSubscriptionInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubscriptionInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSubscriptionInstancesResponse>(await this.doRPCRequest("DescribeSubscriptionInstances", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSubscriptionInstancesResponse({}));
  }

  async describeSubscriptionInstances(request: DescribeSubscriptionInstancesRequest): Promise<DescribeSubscriptionInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubscriptionInstancesWithOptions(request, runtime);
  }

  async describeSubscriptionInstanceStatusWithOptions(request: DescribeSubscriptionInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubscriptionInstanceStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSubscriptionInstanceStatusResponse>(await this.doRPCRequest("DescribeSubscriptionInstanceStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSubscriptionInstanceStatusResponse({}));
  }

  async describeSubscriptionInstanceStatus(request: DescribeSubscriptionInstanceStatusRequest): Promise<DescribeSubscriptionInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubscriptionInstanceStatusWithOptions(request, runtime);
  }

  async describeSubscriptionMetaWithOptions(tmpReq: DescribeSubscriptionMetaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubscriptionMetaResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeSubscriptionMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.subMigrationJobIds)) {
      request.subMigrationJobIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subMigrationJobIds, "SubMigrationJobIds", "json");
    }

    if (!Util.isUnset(tmpReq.topics)) {
      request.topicsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.topics, "Topics", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSubscriptionMetaResponse>(await this.doRPCRequest("DescribeSubscriptionMeta", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSubscriptionMetaResponse({}));
  }

  async describeSubscriptionMeta(request: DescribeSubscriptionMetaRequest): Promise<DescribeSubscriptionMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubscriptionMetaWithOptions(request, runtime);
  }

  async describeSynchronizationJobAlertWithOptions(request: DescribeSynchronizationJobAlertRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynchronizationJobAlertResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSynchronizationJobAlertResponse>(await this.doRPCRequest("DescribeSynchronizationJobAlert", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSynchronizationJobAlertResponse({}));
  }

  async describeSynchronizationJobAlert(request: DescribeSynchronizationJobAlertRequest): Promise<DescribeSynchronizationJobAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSynchronizationJobAlertWithOptions(request, runtime);
  }

  async describeSynchronizationJobReplicatorCompareWithOptions(request: DescribeSynchronizationJobReplicatorCompareRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynchronizationJobReplicatorCompareResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSynchronizationJobReplicatorCompareResponse>(await this.doRPCRequest("DescribeSynchronizationJobReplicatorCompare", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSynchronizationJobReplicatorCompareResponse({}));
  }

  async describeSynchronizationJobReplicatorCompare(request: DescribeSynchronizationJobReplicatorCompareRequest): Promise<DescribeSynchronizationJobReplicatorCompareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSynchronizationJobReplicatorCompareWithOptions(request, runtime);
  }

  async describeSynchronizationJobsWithOptions(request: DescribeSynchronizationJobsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynchronizationJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSynchronizationJobsResponse>(await this.doRPCRequest("DescribeSynchronizationJobs", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSynchronizationJobsResponse({}));
  }

  async describeSynchronizationJobs(request: DescribeSynchronizationJobsRequest): Promise<DescribeSynchronizationJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSynchronizationJobsWithOptions(request, runtime);
  }

  async describeSynchronizationJobStatusWithOptions(request: DescribeSynchronizationJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynchronizationJobStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSynchronizationJobStatusResponse>(await this.doRPCRequest("DescribeSynchronizationJobStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSynchronizationJobStatusResponse({}));
  }

  async describeSynchronizationJobStatus(request: DescribeSynchronizationJobStatusRequest): Promise<DescribeSynchronizationJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSynchronizationJobStatusWithOptions(request, runtime);
  }

  async describeSynchronizationJobStatusListWithOptions(request: DescribeSynchronizationJobStatusListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynchronizationJobStatusListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSynchronizationJobStatusListResponse>(await this.doRPCRequest("DescribeSynchronizationJobStatusList", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSynchronizationJobStatusListResponse({}));
  }

  async describeSynchronizationJobStatusList(request: DescribeSynchronizationJobStatusListRequest): Promise<DescribeSynchronizationJobStatusListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSynchronizationJobStatusListWithOptions(request, runtime);
  }

  async describeSynchronizationObjectModifyStatusWithOptions(request: DescribeSynchronizationObjectModifyStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynchronizationObjectModifyStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSynchronizationObjectModifyStatusResponse>(await this.doRPCRequest("DescribeSynchronizationObjectModifyStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSynchronizationObjectModifyStatusResponse({}));
  }

  async describeSynchronizationObjectModifyStatus(request: DescribeSynchronizationObjectModifyStatusRequest): Promise<DescribeSynchronizationObjectModifyStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSynchronizationObjectModifyStatusWithOptions(request, runtime);
  }

  async ignoreJobDetailWithOptions(request: IgnoreJobDetailRequest, runtime: $Util.RuntimeOptions): Promise<IgnoreJobDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<IgnoreJobDetailResponse>(await this.doRPCRequest("IgnoreJobDetail", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new IgnoreJobDetailResponse({}));
  }

  async ignoreJobDetail(request: IgnoreJobDetailRequest): Promise<IgnoreJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ignoreJobDetailWithOptions(request, runtime);
  }

  async initDtsRdsInstanceWithOptions(request: InitDtsRdsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<InitDtsRdsInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InitDtsRdsInstanceResponse>(await this.doRPCRequest("InitDtsRdsInstance", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new InitDtsRdsInstanceResponse({}));
  }

  async initDtsRdsInstance(request: InitDtsRdsInstanceRequest): Promise<InitDtsRdsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initDtsRdsInstanceWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async modifyConsumerChannelWithOptions(request: ModifyConsumerChannelRequest, runtime: $Util.RuntimeOptions): Promise<ModifyConsumerChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyConsumerChannelResponse>(await this.doRPCRequest("ModifyConsumerChannel", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyConsumerChannelResponse({}));
  }

  async modifyConsumerChannel(request: ModifyConsumerChannelRequest): Promise<ModifyConsumerChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyConsumerChannelWithOptions(request, runtime);
  }

  async modifyConsumerGroupPasswordWithOptions(request: ModifyConsumerGroupPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifyConsumerGroupPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyConsumerGroupPasswordResponse>(await this.doRPCRequest("ModifyConsumerGroupPassword", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyConsumerGroupPasswordResponse({}));
  }

  async modifyConsumerGroupPassword(request: ModifyConsumerGroupPasswordRequest): Promise<ModifyConsumerGroupPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyConsumerGroupPasswordWithOptions(request, runtime);
  }

  async modifyConsumptionTimestampWithOptions(request: ModifyConsumptionTimestampRequest, runtime: $Util.RuntimeOptions): Promise<ModifyConsumptionTimestampResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyConsumptionTimestampResponse>(await this.doRPCRequest("ModifyConsumptionTimestamp", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyConsumptionTimestampResponse({}));
  }

  async modifyConsumptionTimestamp(request: ModifyConsumptionTimestampRequest): Promise<ModifyConsumptionTimestampResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyConsumptionTimestampWithOptions(request, runtime);
  }

  async modifyDtsJobWithOptions(tmpReq: ModifyDtsJobRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDtsJobResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyDtsJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dbList)) {
      request.dbListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dbList, "DbList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDtsJobResponse>(await this.doRPCRequest("ModifyDtsJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDtsJobResponse({}));
  }

  async modifyDtsJob(request: ModifyDtsJobRequest): Promise<ModifyDtsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDtsJobWithOptions(request, runtime);
  }

  async modifyDtsJobNameWithOptions(request: ModifyDtsJobNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDtsJobNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDtsJobNameResponse>(await this.doRPCRequest("ModifyDtsJobName", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDtsJobNameResponse({}));
  }

  async modifyDtsJobName(request: ModifyDtsJobNameRequest): Promise<ModifyDtsJobNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDtsJobNameWithOptions(request, runtime);
  }

  async modifyDtsJobPasswordWithOptions(request: ModifyDtsJobPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDtsJobPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDtsJobPasswordResponse>(await this.doRPCRequest("ModifyDtsJobPassword", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDtsJobPasswordResponse({}));
  }

  async modifyDtsJobPassword(request: ModifyDtsJobPasswordRequest): Promise<ModifyDtsJobPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDtsJobPasswordWithOptions(request, runtime);
  }

  async modifySubscriptionWithOptions(request: ModifySubscriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifySubscriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySubscriptionResponse>(await this.doRPCRequest("ModifySubscription", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySubscriptionResponse({}));
  }

  async modifySubscription(request: ModifySubscriptionRequest): Promise<ModifySubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySubscriptionWithOptions(request, runtime);
  }

  async modifySubscriptionObjectWithOptions(request: ModifySubscriptionObjectRequest, runtime: $Util.RuntimeOptions): Promise<ModifySubscriptionObjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySubscriptionObjectResponse>(await this.doRPCRequest("ModifySubscriptionObject", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySubscriptionObjectResponse({}));
  }

  async modifySubscriptionObject(request: ModifySubscriptionObjectRequest): Promise<ModifySubscriptionObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySubscriptionObjectWithOptions(request, runtime);
  }

  async modifySynchronizationObjectWithOptions(request: ModifySynchronizationObjectRequest, runtime: $Util.RuntimeOptions): Promise<ModifySynchronizationObjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySynchronizationObjectResponse>(await this.doRPCRequest("ModifySynchronizationObject", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySynchronizationObjectResponse({}));
  }

  async modifySynchronizationObject(request: ModifySynchronizationObjectRequest): Promise<ModifySynchronizationObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySynchronizationObjectWithOptions(request, runtime);
  }

  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenewInstanceResponse>(await this.doRPCRequest("RenewInstance", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new RenewInstanceResponse({}));
  }

  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  async resetDtsJobWithOptions(request: ResetDtsJobRequest, runtime: $Util.RuntimeOptions): Promise<ResetDtsJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetDtsJobResponse>(await this.doRPCRequest("ResetDtsJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ResetDtsJobResponse({}));
  }

  async resetDtsJob(request: ResetDtsJobRequest): Promise<ResetDtsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetDtsJobWithOptions(request, runtime);
  }

  async resetSynchronizationJobWithOptions(request: ResetSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<ResetSynchronizationJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetSynchronizationJobResponse>(await this.doRPCRequest("ResetSynchronizationJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ResetSynchronizationJobResponse({}));
  }

  async resetSynchronizationJob(request: ResetSynchronizationJobRequest): Promise<ResetSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetSynchronizationJobWithOptions(request, runtime);
  }

  async shieldPrecheckWithOptions(request: ShieldPrecheckRequest, runtime: $Util.RuntimeOptions): Promise<ShieldPrecheckResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ShieldPrecheckResponse>(await this.doRPCRequest("ShieldPrecheck", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ShieldPrecheckResponse({}));
  }

  async shieldPrecheck(request: ShieldPrecheckRequest): Promise<ShieldPrecheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.shieldPrecheckWithOptions(request, runtime);
  }

  async skipPreCheckWithOptions(request: SkipPreCheckRequest, runtime: $Util.RuntimeOptions): Promise<SkipPreCheckResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SkipPreCheckResponse>(await this.doRPCRequest("SkipPreCheck", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new SkipPreCheckResponse({}));
  }

  async skipPreCheck(request: SkipPreCheckRequest): Promise<SkipPreCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.skipPreCheckWithOptions(request, runtime);
  }

  async startDtsJobWithOptions(request: StartDtsJobRequest, runtime: $Util.RuntimeOptions): Promise<StartDtsJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartDtsJobResponse>(await this.doRPCRequest("StartDtsJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new StartDtsJobResponse({}));
  }

  async startDtsJob(request: StartDtsJobRequest): Promise<StartDtsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDtsJobWithOptions(request, runtime);
  }

  async startMigrationJobWithOptions(request: StartMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<StartMigrationJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartMigrationJobResponse>(await this.doRPCRequest("StartMigrationJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new StartMigrationJobResponse({}));
  }

  async startMigrationJob(request: StartMigrationJobRequest): Promise<StartMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startMigrationJobWithOptions(request, runtime);
  }

  async startSubscriptionInstanceWithOptions(request: StartSubscriptionInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartSubscriptionInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartSubscriptionInstanceResponse>(await this.doRPCRequest("StartSubscriptionInstance", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new StartSubscriptionInstanceResponse({}));
  }

  async startSubscriptionInstance(request: StartSubscriptionInstanceRequest): Promise<StartSubscriptionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startSubscriptionInstanceWithOptions(request, runtime);
  }

  async startSynchronizationJobWithOptions(request: StartSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<StartSynchronizationJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartSynchronizationJobResponse>(await this.doRPCRequest("StartSynchronizationJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new StartSynchronizationJobResponse({}));
  }

  async startSynchronizationJob(request: StartSynchronizationJobRequest): Promise<StartSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startSynchronizationJobWithOptions(request, runtime);
  }

  async stopDtsJobWithOptions(request: StopDtsJobRequest, runtime: $Util.RuntimeOptions): Promise<StopDtsJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopDtsJobResponse>(await this.doRPCRequest("StopDtsJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new StopDtsJobResponse({}));
  }

  async stopDtsJob(request: StopDtsJobRequest): Promise<StopDtsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDtsJobWithOptions(request, runtime);
  }

  async stopMigrationJobWithOptions(request: StopMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<StopMigrationJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopMigrationJobResponse>(await this.doRPCRequest("StopMigrationJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new StopMigrationJobResponse({}));
  }

  async stopMigrationJob(request: StopMigrationJobRequest): Promise<StopMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopMigrationJobWithOptions(request, runtime);
  }

  async summaryJobDetailWithOptions(request: SummaryJobDetailRequest, runtime: $Util.RuntimeOptions): Promise<SummaryJobDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SummaryJobDetailResponse>(await this.doRPCRequest("SummaryJobDetail", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new SummaryJobDetailResponse({}));
  }

  async summaryJobDetail(request: SummaryJobDetailRequest): Promise<SummaryJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.summaryJobDetailWithOptions(request, runtime);
  }

  async suspendDtsJobWithOptions(request: SuspendDtsJobRequest, runtime: $Util.RuntimeOptions): Promise<SuspendDtsJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SuspendDtsJobResponse>(await this.doRPCRequest("SuspendDtsJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new SuspendDtsJobResponse({}));
  }

  async suspendDtsJob(request: SuspendDtsJobRequest): Promise<SuspendDtsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendDtsJobWithOptions(request, runtime);
  }

  async suspendMigrationJobWithOptions(request: SuspendMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<SuspendMigrationJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SuspendMigrationJobResponse>(await this.doRPCRequest("SuspendMigrationJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new SuspendMigrationJobResponse({}));
  }

  async suspendMigrationJob(request: SuspendMigrationJobRequest): Promise<SuspendMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendMigrationJobWithOptions(request, runtime);
  }

  async suspendSynchronizationJobWithOptions(request: SuspendSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<SuspendSynchronizationJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SuspendSynchronizationJobResponse>(await this.doRPCRequest("SuspendSynchronizationJob", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new SuspendSynchronizationJobResponse({}));
  }

  async suspendSynchronizationJob(request: SuspendSynchronizationJobRequest): Promise<SuspendSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendSynchronizationJobWithOptions(request, runtime);
  }

  async switchSynchronizationEndpointWithOptions(request: SwitchSynchronizationEndpointRequest, runtime: $Util.RuntimeOptions): Promise<SwitchSynchronizationEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SwitchSynchronizationEndpointResponse>(await this.doRPCRequest("SwitchSynchronizationEndpoint", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new SwitchSynchronizationEndpointResponse({}));
  }

  async switchSynchronizationEndpoint(request: SwitchSynchronizationEndpointRequest): Promise<SwitchSynchronizationEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchSynchronizationEndpointWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async transferInstanceClassWithOptions(request: TransferInstanceClassRequest, runtime: $Util.RuntimeOptions): Promise<TransferInstanceClassResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransferInstanceClassResponse>(await this.doRPCRequest("TransferInstanceClass", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new TransferInstanceClassResponse({}));
  }

  async transferInstanceClass(request: TransferInstanceClassRequest): Promise<TransferInstanceClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInstanceClassWithOptions(request, runtime);
  }

  async transferPayTypeWithOptions(request: TransferPayTypeRequest, runtime: $Util.RuntimeOptions): Promise<TransferPayTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransferPayTypeResponse>(await this.doRPCRequest("TransferPayType", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new TransferPayTypeResponse({}));
  }

  async transferPayType(request: TransferPayTypeRequest): Promise<TransferPayTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferPayTypeWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async upgradeTwoWayWithOptions(request: UpgradeTwoWayRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeTwoWayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeTwoWayResponse>(await this.doRPCRequest("UpgradeTwoWay", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeTwoWayResponse({}));
  }

  async upgradeTwoWay(request: UpgradeTwoWayRequest): Promise<UpgradeTwoWayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeTwoWayWithOptions(request, runtime);
  }

  async whiteIpListWithOptions(request: WhiteIpListRequest, runtime: $Util.RuntimeOptions): Promise<WhiteIpListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<WhiteIpListResponse>(await this.doRPCRequest("WhiteIpList", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new WhiteIpListResponse({}));
  }

  async whiteIpList(request: WhiteIpListRequest): Promise<WhiteIpListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.whiteIpListWithOptions(request, runtime);
  }

}
