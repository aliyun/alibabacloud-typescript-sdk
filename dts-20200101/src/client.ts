// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ConfigureMigrationJobRequest extends $tea.Model {
  sourceEndpoint?: ConfigureMigrationJobRequestSourceEndpoint;
  destinationEndpoint?: ConfigureMigrationJobRequestDestinationEndpoint;
  migrationMode?: ConfigureMigrationJobRequestMigrationMode;
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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

export class ConfigureSubscriptionInstanceRequest extends $tea.Model {
  sourceEndpoint?: ConfigureSubscriptionInstanceRequestSourceEndpoint;
  subscriptionDataType?: ConfigureSubscriptionInstanceRequestSubscriptionDataType;
  subscriptionInstance?: ConfigureSubscriptionInstanceRequestSubscriptionInstance;
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  synchronizationReplicatorCompareEnable?: boolean;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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

export class CreateConsumerGroupRequest extends $tea.Model {
  subscriptionInstanceId?: string;
  consumerGroupName?: string;
  consumerGroupUserName?: string;
  consumerGroupPassword?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupID: 'ConsumerGroupID',
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupID: 'string',
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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

export class CreateMigrationJobRequest extends $tea.Model {
  region?: string;
  migrationJobClass?: string;
  ownerId?: string;
  clientToken?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      migrationJobClass: 'MigrationJobClass',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errMessage?: string;
  success?: string;
  migrationJobId?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      migrationJobId: 'MigrationJobId',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      migrationJobId: 'string',
      errCode: 'string',
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subscriptionInstanceId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  synchronizationJobId?: string;
  requestId?: string;
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationJobId: 'SynchronizationJobId',
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronizationJobId: 'string',
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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

export class DeleteConsumerGroupRequest extends $tea.Model {
  subscriptionInstanceId?: string;
  consumerGroupID?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      subscriptionInstanceId: 'SubscriptionInstanceId',
      consumerGroupID: 'ConsumerGroupID',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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

export class DeleteMigrationJobRequest extends $tea.Model {
  migrationJobId?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  subscriptionInstanceId?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      subscriptionInstanceId: 'SubscriptionInstanceId',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  synchronizationJobId?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationJobId: 'SynchronizationJobId',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  destinationEndpointOracleSID?: boolean;
  destinationEndpointArchitecture?: boolean;
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
      destinationEndpointOracleSID: 'boolean',
      destinationEndpointArchitecture: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionStatusResponseBody extends $tea.Model {
  sourceConnectionStatus?: { [key: string]: any };
  requestId?: string;
  destinationConnectionStatus?: { [key: string]: any };
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      sourceConnectionStatus: 'SourceConnectionStatus',
      requestId: 'RequestId',
      destinationConnectionStatus: 'DestinationConnectionStatus',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceConnectionStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      destinationConnectionStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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

export class DescribeConsumerGroupRequest extends $tea.Model {
  pageSize?: number;
  pageNum?: number;
  subscriptionInstanceId?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  totalRecordCount?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  errMessage?: string;
  consumerChannels?: DescribeConsumerGroupResponseBodyConsumerChannels;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      errMessage: 'ErrMessage',
      consumerChannels: 'ConsumerChannels',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      pageNumber: 'number',
      errMessage: 'string',
      consumerChannels: DescribeConsumerGroupResponseBodyConsumerChannels,
      success: 'string',
      errCode: 'string',
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
  sourceEndpointRegion?: string;
  destinationEndpointRegion?: string;
  static names(): { [key: string]: string } {
    return {
      sourceEndpointRegion: 'SourceEndpointRegion',
      destinationEndpointRegion: 'DestinationEndpointRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  dynamicCode?: string;
  dynamicMessage?: string;
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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

export class DescribeEndpointSwitchStatusRequest extends $tea.Model {
  taskId?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  requestId?: string;
  errorMessage?: string;
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      errorMessage: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  synchronizationJobId?: string;
  pageSize?: number;
  pageNum?: number;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationJobId: 'SynchronizationJobId',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  structureInitializationDetails?: DescribeInitializationStatusResponseBodyStructureInitializationDetails[];
  requestId?: string;
  dataInitializationDetails?: DescribeInitializationStatusResponseBodyDataInitializationDetails[];
  errMessage?: string;
  success?: string;
  errCode?: string;
  dataSynchronizationDetails?: DescribeInitializationStatusResponseBodyDataSynchronizationDetails[];
  static names(): { [key: string]: string } {
    return {
      structureInitializationDetails: 'StructureInitializationDetails',
      requestId: 'RequestId',
      dataInitializationDetails: 'DataInitializationDetails',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
      dataSynchronizationDetails: 'DataSynchronizationDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      structureInitializationDetails: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyStructureInitializationDetails },
      requestId: 'string',
      dataInitializationDetails: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyDataInitializationDetails },
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
      dataSynchronizationDetails: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyDataSynchronizationDetails },
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

export class DescribeMigrationJobAlertRequest extends $tea.Model {
  migrationJobId?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      migrationJobId: 'MigrationJobId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errorAlertPhone?: string;
  requestId?: string;
  delayAlertPhone?: string;
  migrationJobName?: string;
  errorAlertStatus?: string;
  errMessage?: string;
  delayAlertStatus?: string;
  success?: string;
  delayOverSeconds?: string;
  errCode?: string;
  migrationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      errorAlertPhone: 'ErrorAlertPhone',
      requestId: 'RequestId',
      delayAlertPhone: 'DelayAlertPhone',
      migrationJobName: 'MigrationJobName',
      errorAlertStatus: 'ErrorAlertStatus',
      errMessage: 'ErrMessage',
      delayAlertStatus: 'DelayAlertStatus',
      success: 'Success',
      delayOverSeconds: 'DelayOverSeconds',
      errCode: 'ErrCode',
      migrationJobId: 'MigrationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorAlertPhone: 'string',
      requestId: 'string',
      delayAlertPhone: 'string',
      migrationJobName: 'string',
      errorAlertStatus: 'string',
      errMessage: 'string',
      delayAlertStatus: 'string',
      success: 'string',
      delayOverSeconds: 'string',
      errCode: 'string',
      migrationJobId: 'string',
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
  pageSize?: number;
  pageNum?: number;
  migrationJobId?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      migrationMode: 'MigrationMode',
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
  totalRecordCount?: number;
  pageRecordCount?: number;
  dataSynchronizationDetailList?: DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailList;
  requestId?: string;
  pageNumber?: number;
  dataInitializationDetailList?: DescribeMigrationJobDetailResponseBodyDataInitializationDetailList;
  errMessage?: string;
  success?: string;
  structureInitializationDetailList?: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailList;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      pageRecordCount: 'PageRecordCount',
      dataSynchronizationDetailList: 'DataSynchronizationDetailList',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      dataInitializationDetailList: 'DataInitializationDetailList',
      errMessage: 'ErrMessage',
      success: 'Success',
      structureInitializationDetailList: 'StructureInitializationDetailList',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      pageRecordCount: 'number',
      dataSynchronizationDetailList: DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailList,
      requestId: 'string',
      pageNumber: 'number',
      dataInitializationDetailList: DescribeMigrationJobDetailResponseBodyDataInitializationDetailList,
      errMessage: 'string',
      success: 'string',
      structureInitializationDetailList: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailList,
      errCode: 'string',
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
  pageSize?: number;
  pageNum?: number;
  migrationJobName?: string;
  ownerId?: string;
  accountId?: string;
  tag?: DescribeMigrationJobsRequestTag[];
  static names(): { [key: string]: string } {
    return {
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
  totalRecordCount?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  migrationJobs?: DescribeMigrationJobsResponseBodyMigrationJobs;
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      migrationJobs: 'MigrationJobs',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      pageNumber: 'number',
      migrationJobs: DescribeMigrationJobsResponseBodyMigrationJobs,
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  migrationJobId?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      migrationJobId: 'MigrationJobId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  dataInitializationStatus?: DescribeMigrationJobStatusResponseBodyDataInitializationStatus;
  requestId?: string;
  migrationJobName?: string;
  payType?: string;
  errMessage?: string;
  migrationJobStatus?: string;
  success?: string;
  migrationMode?: DescribeMigrationJobStatusResponseBodyMigrationMode;
  errCode?: string;
  migrationJobId?: string;
  precheckStatus?: DescribeMigrationJobStatusResponseBodyPrecheckStatus;
  migrationObject?: string;
  destinationEndpoint?: DescribeMigrationJobStatusResponseBodyDestinationEndpoint;
  migrationJobClass?: string;
  sourceEndpoint?: DescribeMigrationJobStatusResponseBodySourceEndpoint;
  structureInitializationStatus?: DescribeMigrationJobStatusResponseBodyStructureInitializationStatus;
  dataSynchronizationStatus?: DescribeMigrationJobStatusResponseBodyDataSynchronizationStatus;
  static names(): { [key: string]: string } {
    return {
      dataInitializationStatus: 'DataInitializationStatus',
      requestId: 'RequestId',
      migrationJobName: 'MigrationJobName',
      payType: 'PayType',
      errMessage: 'ErrMessage',
      migrationJobStatus: 'MigrationJobStatus',
      success: 'Success',
      migrationMode: 'MigrationMode',
      errCode: 'ErrCode',
      migrationJobId: 'MigrationJobId',
      precheckStatus: 'PrecheckStatus',
      migrationObject: 'MigrationObject',
      destinationEndpoint: 'DestinationEndpoint',
      migrationJobClass: 'MigrationJobClass',
      sourceEndpoint: 'SourceEndpoint',
      structureInitializationStatus: 'StructureInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationStatus: DescribeMigrationJobStatusResponseBodyDataInitializationStatus,
      requestId: 'string',
      migrationJobName: 'string',
      payType: 'string',
      errMessage: 'string',
      migrationJobStatus: 'string',
      success: 'string',
      migrationMode: DescribeMigrationJobStatusResponseBodyMigrationMode,
      errCode: 'string',
      migrationJobId: 'string',
      precheckStatus: DescribeMigrationJobStatusResponseBodyPrecheckStatus,
      migrationObject: 'string',
      destinationEndpoint: DescribeMigrationJobStatusResponseBodyDestinationEndpoint,
      migrationJobClass: 'string',
      sourceEndpoint: DescribeMigrationJobStatusResponseBodySourceEndpoint,
      structureInitializationStatus: DescribeMigrationJobStatusResponseBodyStructureInitializationStatus,
      dataSynchronizationStatus: DescribeMigrationJobStatusResponseBodyDataSynchronizationStatus,
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

export class DescribeSubscriptionInstanceAlertRequest extends $tea.Model {
  subscriptionInstanceId?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      subscriptionInstanceId: 'SubscriptionInstanceId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errorAlertPhone?: string;
  subscriptionInstanceName?: string;
  requestId?: string;
  delayAlertPhone?: string;
  errorAlertStatus?: string;
  errMessage?: string;
  subscriptionInstanceID?: string;
  delayAlertStatus?: string;
  success?: string;
  delayOverSeconds?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorAlertPhone: 'ErrorAlertPhone',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      requestId: 'RequestId',
      delayAlertPhone: 'DelayAlertPhone',
      errorAlertStatus: 'ErrorAlertStatus',
      errMessage: 'ErrMessage',
      subscriptionInstanceID: 'SubscriptionInstanceID',
      delayAlertStatus: 'DelayAlertStatus',
      success: 'Success',
      delayOverSeconds: 'DelayOverSeconds',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorAlertPhone: 'string',
      subscriptionInstanceName: 'string',
      requestId: 'string',
      delayAlertPhone: 'string',
      errorAlertStatus: 'string',
      errMessage: 'string',
      subscriptionInstanceID: 'string',
      delayAlertStatus: 'string',
      success: 'string',
      delayOverSeconds: 'string',
      errCode: 'string',
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
  pageSize?: number;
  pageNum?: number;
  subscriptionInstanceName?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  tag?: DescribeSubscriptionInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
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
  totalRecordCount?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  errMessage?: string;
  success?: string;
  subscriptionInstances?: DescribeSubscriptionInstancesResponseBodySubscriptionInstances;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      errMessage: 'ErrMessage',
      success: 'Success',
      subscriptionInstances: 'SubscriptionInstances',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      pageNumber: 'number',
      errMessage: 'string',
      success: 'string',
      subscriptionInstances: DescribeSubscriptionInstancesResponseBodySubscriptionInstances,
      errCode: 'string',
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
  subscriptionInstanceId?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      subscriptionInstanceId: 'SubscriptionInstanceId',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  beginTimestamp?: string;
  consumptionCheckpoint?: string;
  consumptionClient?: string;
  endTimestamp?: string;
  errMessage?: string;
  payType?: string;
  requestId?: string;
  status?: string;
  subscribeTopic?: string;
  subscriptionInstanceID?: string;
  subscriptionInstanceName?: string;
  errCode?: string;
  success?: string;
  errorMessage?: string;
  subscriptionObject?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObject;
  sourceEndpoint?: DescribeSubscriptionInstanceStatusResponseBodySourceEndpoint;
  subscriptionDataType?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionDataType;
  subscriptionHost?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionHost;
  static names(): { [key: string]: string } {
    return {
      beginTimestamp: 'BeginTimestamp',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      consumptionClient: 'ConsumptionClient',
      endTimestamp: 'EndTimestamp',
      errMessage: 'ErrMessage',
      payType: 'PayType',
      requestId: 'RequestId',
      status: 'Status',
      subscribeTopic: 'SubscribeTopic',
      subscriptionInstanceID: 'SubscriptionInstanceID',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      errCode: 'ErrCode',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      subscriptionObject: 'SubscriptionObject',
      sourceEndpoint: 'SourceEndpoint',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionHost: 'SubscriptionHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimestamp: 'string',
      consumptionCheckpoint: 'string',
      consumptionClient: 'string',
      endTimestamp: 'string',
      errMessage: 'string',
      payType: 'string',
      requestId: 'string',
      status: 'string',
      subscribeTopic: 'string',
      subscriptionInstanceID: 'string',
      subscriptionInstanceName: 'string',
      errCode: 'string',
      success: 'string',
      errorMessage: 'string',
      subscriptionObject: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObject,
      sourceEndpoint: DescribeSubscriptionInstanceStatusResponseBodySourceEndpoint,
      subscriptionDataType: DescribeSubscriptionInstanceStatusResponseBodySubscriptionDataType,
      subscriptionHost: DescribeSubscriptionInstanceStatusResponseBodySubscriptionHost,
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

export class DescribeSynchronizationJobAlertRequest extends $tea.Model {
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errorAlertPhone?: string;
  synchronizationJobId?: string;
  synchronizationJobName?: string;
  requestId?: string;
  delayAlertPhone?: string;
  errorAlertStatus?: string;
  errMessage?: string;
  delayAlertStatus?: string;
  success?: string;
  delayOverSeconds?: string;
  synchronizationDirection?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorAlertPhone: 'ErrorAlertPhone',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationJobName: 'SynchronizationJobName',
      requestId: 'RequestId',
      delayAlertPhone: 'DelayAlertPhone',
      errorAlertStatus: 'ErrorAlertStatus',
      errMessage: 'ErrMessage',
      delayAlertStatus: 'DelayAlertStatus',
      success: 'Success',
      delayOverSeconds: 'DelayOverSeconds',
      synchronizationDirection: 'SynchronizationDirection',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorAlertPhone: 'string',
      synchronizationJobId: 'string',
      synchronizationJobName: 'string',
      requestId: 'string',
      delayAlertPhone: 'string',
      errorAlertStatus: 'string',
      errMessage: 'string',
      delayAlertStatus: 'string',
      success: 'string',
      delayOverSeconds: 'string',
      synchronizationDirection: 'string',
      errCode: 'string',
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
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  requestId?: string;
  synchronizationReplicatorCompareEnable?: boolean;
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      synchronizationReplicatorCompareEnable: 'SynchronizationReplicatorCompareEnable',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      synchronizationReplicatorCompareEnable: 'boolean',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  pageSize?: number;
  pageNum?: number;
  synchronizationJobName?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  tag?: DescribeSynchronizationJobsRequestTag[];
  static names(): { [key: string]: string } {
    return {
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
  totalRecordCount?: number;
  synchronizationInstances?: DescribeSynchronizationJobsResponseBodySynchronizationInstances[];
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      synchronizationInstances: 'SynchronizationInstances',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      synchronizationInstances: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstances },
      pageRecordCount: 'number',
      requestId: 'string',
      pageNumber: 'number',
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
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  dataInitializationStatus?: DescribeSynchronizationJobStatusResponseBodyDataInitializationStatus;
  synchronizationObjects?: DescribeSynchronizationJobStatusResponseBodySynchronizationObjects[];
  delay?: string;
  success?: string;
  delayMillis?: number;
  dataInitialization?: string;
  synchronizationJobClass?: string;
  dataSynchronizationStatus?: DescribeSynchronizationJobStatusResponseBodyDataSynchronizationStatus;
  status?: string;
  synchronizationJobName?: string;
  requestId?: string;
  payType?: string;
  errMessage?: string;
  errCode?: string;
  precheckStatus?: DescribeSynchronizationJobStatusResponseBodyPrecheckStatus;
  synchronizationJobId?: string;
  checkpoint?: string;
  destinationEndpoint?: DescribeSynchronizationJobStatusResponseBodyDestinationEndpoint;
  sourceEndpoint?: DescribeSynchronizationJobStatusResponseBodySourceEndpoint;
  structureInitialization?: string;
  errorMessage?: string;
  expireTime?: string;
  performance?: DescribeSynchronizationJobStatusResponseBodyPerformance;
  synchronizationDirection?: string;
  structureInitializationStatus?: DescribeSynchronizationJobStatusResponseBodyStructureInitializationStatus;
  static names(): { [key: string]: string } {
    return {
      dataInitializationStatus: 'DataInitializationStatus',
      synchronizationObjects: 'SynchronizationObjects',
      delay: 'Delay',
      success: 'Success',
      delayMillis: 'DelayMillis',
      dataInitialization: 'DataInitialization',
      synchronizationJobClass: 'SynchronizationJobClass',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      status: 'Status',
      synchronizationJobName: 'SynchronizationJobName',
      requestId: 'RequestId',
      payType: 'PayType',
      errMessage: 'ErrMessage',
      errCode: 'ErrCode',
      precheckStatus: 'PrecheckStatus',
      synchronizationJobId: 'SynchronizationJobId',
      checkpoint: 'Checkpoint',
      destinationEndpoint: 'DestinationEndpoint',
      sourceEndpoint: 'SourceEndpoint',
      structureInitialization: 'StructureInitialization',
      errorMessage: 'ErrorMessage',
      expireTime: 'ExpireTime',
      performance: 'Performance',
      synchronizationDirection: 'SynchronizationDirection',
      structureInitializationStatus: 'StructureInitializationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationStatus: DescribeSynchronizationJobStatusResponseBodyDataInitializationStatus,
      synchronizationObjects: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodySynchronizationObjects },
      delay: 'string',
      success: 'string',
      delayMillis: 'number',
      dataInitialization: 'string',
      synchronizationJobClass: 'string',
      dataSynchronizationStatus: DescribeSynchronizationJobStatusResponseBodyDataSynchronizationStatus,
      status: 'string',
      synchronizationJobName: 'string',
      requestId: 'string',
      payType: 'string',
      errMessage: 'string',
      errCode: 'string',
      precheckStatus: DescribeSynchronizationJobStatusResponseBodyPrecheckStatus,
      synchronizationJobId: 'string',
      checkpoint: 'string',
      destinationEndpoint: DescribeSynchronizationJobStatusResponseBodyDestinationEndpoint,
      sourceEndpoint: DescribeSynchronizationJobStatusResponseBodySourceEndpoint,
      structureInitialization: 'string',
      errorMessage: 'string',
      expireTime: 'string',
      performance: DescribeSynchronizationJobStatusResponseBodyPerformance,
      synchronizationDirection: 'string',
      structureInitializationStatus: DescribeSynchronizationJobStatusResponseBodyStructureInitializationStatus,
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
  synchronizationJobIdListJsonStr?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationJobIdListJsonStr: 'SynchronizationJobIdListJsonStr',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  totalRecordCount?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  errMessage?: string;
  synchronizationJobListStatusList?: DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusList[];
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      errMessage: 'ErrMessage',
      synchronizationJobListStatusList: 'SynchronizationJobListStatusList',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      pageNumber: 'number',
      errMessage: 'string',
      synchronizationJobListStatusList: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusList },
      success: 'string',
      errCode: 'string',
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
  taskId?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  precheckStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatus;
  dataInitializationStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyDataInitializationStatus;
  requestId?: string;
  errorMessage?: string;
  errMessage?: string;
  success?: string;
  errCode?: string;
  structureInitializationStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyStructureInitializationStatus;
  dataSynchronizationStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyDataSynchronizationStatus;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      precheckStatus: 'PrecheckStatus',
      dataInitializationStatus: 'DataInitializationStatus',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
      structureInitializationStatus: 'StructureInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      precheckStatus: DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatus,
      dataInitializationStatus: DescribeSynchronizationObjectModifyStatusResponseBodyDataInitializationStatus,
      requestId: 'string',
      errorMessage: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
      structureInitializationStatus: DescribeSynchronizationObjectModifyStatusResponseBodyStructureInitializationStatus,
      dataSynchronizationStatus: DescribeSynchronizationObjectModifyStatusResponseBodyDataSynchronizationStatus,
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
  tagResources?: ListTagResourcesResponseBodyTagResources;
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
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

export class ModifyConsumerGroupPasswordRequest extends $tea.Model {
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  subscriptionInstanceId?: string;
  consumptionTimestamp?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      subscriptionInstanceId: 'SubscriptionInstanceId',
      consumptionTimestamp: 'ConsumptionTimestamp',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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

export class ModifySubscriptionObjectRequest extends $tea.Model {
  subscriptionInstanceId?: string;
  subscriptionObject?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      subscriptionInstanceId: 'SubscriptionInstanceId',
      subscriptionObject: 'SubscriptionObject',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  synchronizationJobId?: string;
  synchronizationObjects?: string;
  synchronizationDirection?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationObjects: 'SynchronizationObjects',
      synchronizationDirection: 'SynchronizationDirection',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  taskId?: string;
  requestId?: string;
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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

export class ResetSynchronizationJobRequest extends $tea.Model {
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  dtsInstanceId?: string;
  precheckItems?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      precheckItems: 'PrecheckItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
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

export class StartMigrationJobRequest extends $tea.Model {
  migrationJobId?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  subscriptionInstanceId?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      subscriptionInstanceId: 'SubscriptionInstanceId',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  taskId?: string;
  requestId?: string;
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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

export class StopMigrationJobRequest extends $tea.Model {
  migrationJobId?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      migrationJobId: 'MigrationJobId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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

export class SuspendMigrationJobRequest extends $tea.Model {
  migrationJobId?: string;
  clientToken?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      migrationJobId: 'MigrationJobId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
      ownerId: 'OwnerId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  ownerId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      sourceEndpoint: 'SourceEndpoint',
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
  taskId?: string;
  requestId?: string;
  errMessage?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      errMessage: 'string',
      success: 'string',
      errCode: 'string',
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
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
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
  errMessage?: string;
  success?: boolean;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMessage: 'ErrMessage',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMessage: 'string',
      success: 'boolean',
      errCode: 'string',
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
  constraints?: DescribeInitializationStatusResponseBodyStructureInitializationDetailsConstraints[];
  destinationOwnerDBName?: string;
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      sourceOwnerDBName: 'SourceOwnerDBName',
      objectDefinition: 'ObjectDefinition',
      objectType: 'ObjectType',
      errorMessage: 'ErrorMessage',
      constraints: 'Constraints',
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
      constraints: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyStructureInitializationDetailsConstraints },
      destinationOwnerDBName: 'string',
      objectName: 'string',
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
  constraintList?: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintList;
  objectDefinition?: string;
  objectType?: string;
  errorMessage?: string;
  destinationOwnerDBName?: string;
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      sourceOwnerDBName: 'SourceOwnerDBName',
      constraintList: 'ConstraintList',
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
      constraintList: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintList,
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

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization extends $tea.Model {
  percent?: string;
  errorMessage?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percent: 'string',
      errorMessage: 'string',
      progress: 'string',
      status: 'string',
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

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobStructureInitialization extends $tea.Model {
  percent?: string;
  errorMessage?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percent: 'string',
      errorMessage: 'string',
      progress: 'string',
      status: 'string',
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
  wholeDatabase?: string;
  databaseName?: string;
  tableList?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObjectTableList;
  static names(): { [key: string]: string } {
    return {
      wholeDatabase: 'WholeDatabase',
      databaseName: 'DatabaseName',
      tableList: 'TableList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wholeDatabase: 'string',
      databaseName: 'string',
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

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization extends $tea.Model {
  delay?: string;
  percent?: string;
  errorMessage?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      percent: 'Percent',
      errorMessage: 'ErrorMessage',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'string',
      percent: 'string',
      errorMessage: 'string',
      status: 'string',
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

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJob extends $tea.Model {
  dataInitialization?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization;
  precheck?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobPrecheck;
  migrationJobName?: string;
  structureInitialization?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobStructureInitialization;
  payType?: string;
  tags?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTags;
  migrationObject?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObject;
  dataSynchronization?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization;
  destinationEndpoint?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDestinationEndpoint;
  migrationJobStatus?: string;
  sourceEndpoint?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobSourceEndpoint;
  migrationMode?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationMode;
  migrationJobClass?: string;
  migrationJobID?: string;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      precheck: 'Precheck',
      migrationJobName: 'MigrationJobName',
      structureInitialization: 'StructureInitialization',
      payType: 'PayType',
      tags: 'Tags',
      migrationObject: 'MigrationObject',
      dataSynchronization: 'DataSynchronization',
      destinationEndpoint: 'DestinationEndpoint',
      migrationJobStatus: 'MigrationJobStatus',
      sourceEndpoint: 'SourceEndpoint',
      migrationMode: 'MigrationMode',
      migrationJobClass: 'MigrationJobClass',
      migrationJobID: 'MigrationJobID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization,
      precheck: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobPrecheck,
      migrationJobName: 'string',
      structureInitialization: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobStructureInitialization,
      payType: 'string',
      tags: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTags,
      migrationObject: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObject,
      dataSynchronization: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization,
      destinationEndpoint: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDestinationEndpoint,
      migrationJobStatus: 'string',
      sourceEndpoint: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobSourceEndpoint,
      migrationMode: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationMode,
      migrationJobClass: 'string',
      migrationJobID: 'string',
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

export class DescribeMigrationJobStatusResponseBodyMigrationMode extends $tea.Model {
  dataInitialization?: boolean;
  structureInitialization?: boolean;
  dataSynchronization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'dataInitialization',
      structureInitialization: 'structureInitialization',
      dataSynchronization: 'dataSynchronization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: 'boolean',
      structureInitialization: 'boolean',
      dataSynchronization: 'boolean',
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
  wholeDatabase?: string;
  databaseName?: string;
  tableList?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObjectSynchronousObjectTableList;
  static names(): { [key: string]: string } {
    return {
      wholeDatabase: 'WholeDatabase',
      databaseName: 'DatabaseName',
      tableList: 'TableList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wholeDatabase: 'string',
      databaseName: 'string',
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

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionHost extends $tea.Model {
  privateHost?: string;
  VPCHost?: string;
  publicHost?: string;
  static names(): { [key: string]: string } {
    return {
      privateHost: 'PrivateHost',
      VPCHost: 'VPCHost',
      publicHost: 'PublicHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateHost: 'string',
      VPCHost: 'string',
      publicHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSourceEndpoint extends $tea.Model {
  instanceID?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceID: 'string',
      instanceType: 'string',
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

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstance extends $tea.Model {
  status?: string;
  errorMessage?: string;
  payType?: string;
  tags?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceTags;
  consumptionClient?: string;
  subscriptionObject?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObject;
  subscriptionHost?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionHost;
  endTimestamp?: string;
  consumptionCheckpoint?: string;
  subscribeTopic?: string;
  beginTimestamp?: string;
  sourceEndpoint?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSourceEndpoint;
  subscriptionDataType?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionDataType;
  subscriptionInstanceName?: string;
  subscriptionInstanceID?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      errorMessage: 'ErrorMessage',
      payType: 'PayType',
      tags: 'Tags',
      consumptionClient: 'ConsumptionClient',
      subscriptionObject: 'SubscriptionObject',
      subscriptionHost: 'SubscriptionHost',
      endTimestamp: 'EndTimestamp',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      subscribeTopic: 'SubscribeTopic',
      beginTimestamp: 'BeginTimestamp',
      sourceEndpoint: 'SourceEndpoint',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      subscriptionInstanceID: 'SubscriptionInstanceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      errorMessage: 'string',
      payType: 'string',
      tags: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceTags,
      consumptionClient: 'string',
      subscriptionObject: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObject,
      subscriptionHost: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionHost,
      endTimestamp: 'string',
      consumptionCheckpoint: 'string',
      subscribeTopic: 'string',
      beginTimestamp: 'string',
      sourceEndpoint: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSourceEndpoint,
      subscriptionDataType: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionDataType,
      subscriptionInstanceName: 'string',
      subscriptionInstanceID: 'string',
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

export class DescribeSubscriptionInstanceStatusResponseBodySourceEndpoint extends $tea.Model {
  instanceID?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceID: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusResponseBodySubscriptionDataType extends $tea.Model {
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

export class DescribeSubscriptionInstanceStatusResponseBodySubscriptionHost extends $tea.Model {
  privateHost?: string;
  publicHost?: string;
  VPCHost?: string;
  static names(): { [key: string]: string } {
    return {
      privateHost: 'PrivateHost',
      publicHost: 'PublicHost',
      VPCHost: 'VPCHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateHost: 'string',
      publicHost: 'string',
      VPCHost: 'string',
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

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance extends $tea.Model {
  FLOW?: string;
  RPS?: string;
  static names(): { [key: string]: string } {
    return {
      FLOW: 'FLOW',
      RPS: 'RPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      FLOW: 'string',
      RPS: 'string',
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

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjects extends $tea.Model {
  newSchemaName?: string;
  tableIncludes?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjectsTableIncludes[];
  tableExcludes?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjectsTableExcludes[];
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      newSchemaName: 'NewSchemaName',
      tableIncludes: 'TableIncludes',
      tableExcludes: 'TableExcludes',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newSchemaName: 'string',
      tableIncludes: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjectsTableIncludes },
      tableExcludes: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjectsTableExcludes },
      schemaName: 'string',
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

export class DescribeSynchronizationJobsResponseBodySynchronizationInstances extends $tea.Model {
  synchronizationJobName?: string;
  status?: string;
  dataInitialization?: string;
  performance?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance;
  delay?: string;
  precheckStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatus;
  structureInitializationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesStructureInitializationStatus;
  errorMessage?: string;
  expireTime?: string;
  synchronizationObjects?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjects[];
  createTime?: string;
  payType?: string;
  structureInitialization?: string;
  synchronizationJobClass?: string;
  tags?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesTags[];
  dataInitializationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataInitializationStatus;
  destinationEndpoint?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDestinationEndpoint;
  dataSynchronizationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus;
  sourceEndpoint?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSourceEndpoint;
  synchronizationJobId?: string;
  synchronizationDirection?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationJobName: 'SynchronizationJobName',
      status: 'Status',
      dataInitialization: 'DataInitialization',
      performance: 'Performance',
      delay: 'Delay',
      precheckStatus: 'PrecheckStatus',
      structureInitializationStatus: 'StructureInitializationStatus',
      errorMessage: 'ErrorMessage',
      expireTime: 'ExpireTime',
      synchronizationObjects: 'SynchronizationObjects',
      createTime: 'CreateTime',
      payType: 'PayType',
      structureInitialization: 'StructureInitialization',
      synchronizationJobClass: 'SynchronizationJobClass',
      tags: 'Tags',
      dataInitializationStatus: 'DataInitializationStatus',
      destinationEndpoint: 'DestinationEndpoint',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      sourceEndpoint: 'SourceEndpoint',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationDirection: 'SynchronizationDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronizationJobName: 'string',
      status: 'string',
      dataInitialization: 'string',
      performance: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance,
      delay: 'string',
      precheckStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatus,
      structureInitializationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesStructureInitializationStatus,
      errorMessage: 'string',
      expireTime: 'string',
      synchronizationObjects: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjects },
      createTime: 'string',
      payType: 'string',
      structureInitialization: 'string',
      synchronizationJobClass: 'string',
      tags: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesTags },
      dataInitializationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataInitializationStatus,
      destinationEndpoint: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDestinationEndpoint,
      dataSynchronizationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus,
      sourceEndpoint: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSourceEndpoint,
      synchronizationJobId: 'string',
      synchronizationDirection: 'string',
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

export class DescribeSynchronizationJobStatusResponseBodySynchronizationObjects extends $tea.Model {
  newSchemaName?: string;
  tableIncludes?: DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableIncludes[];
  tableExcludes?: DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableExcludes[];
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      newSchemaName: 'NewSchemaName',
      tableIncludes: 'TableIncludes',
      tableExcludes: 'TableExcludes',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newSchemaName: 'string',
      tableIncludes: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableIncludes },
      tableExcludes: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableExcludes },
      schemaName: 'string',
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

export class DescribeSynchronizationJobStatusResponseBodyPerformance extends $tea.Model {
  FLOW?: string;
  RPS?: string;
  static names(): { [key: string]: string } {
    return {
      FLOW: 'FLOW',
      RPS: 'RPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      FLOW: 'string',
      RPS: 'string',
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
  resourceType?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagValue: 'string',
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

}
