// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ConfigurationSynchronizationJobRequest extends $tea.Model {
  destinationEndpoint?: ConfigurationSynchronizationJobRequestDestinationEndpoint;
  initialization?: ConfigurationSynchronizationJobRequestInitialization;
  sourceEndpoint?: ConfigurationSynchronizationJobRequestSourceEndpoint;
  ownerId?: string;
  synchronizationJobId?: string;
  synchronizationJobName?: string;
  synchronizationObject?: string;
  static names(): { [key: string]: string } {
    return {
      destinationEndpoint: 'DestinationEndpoint',
      initialization: 'Initialization',
      sourceEndpoint: 'SourceEndpoint',
      ownerId: 'OwnerId',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationJobName: 'SynchronizationJobName',
      synchronizationObject: 'SynchronizationObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationEndpoint: ConfigurationSynchronizationJobRequestDestinationEndpoint,
      initialization: ConfigurationSynchronizationJobRequestInitialization,
      sourceEndpoint: ConfigurationSynchronizationJobRequestSourceEndpoint,
      ownerId: 'string',
      synchronizationJobId: 'string',
      synchronizationJobName: 'string',
      synchronizationObject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigurationSynchronizationJobResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigurationSynchronizationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ConfigurationSynchronizationJobResponseBody;
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
      body: ConfigurationSynchronizationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureMigrationJobRequest extends $tea.Model {
  destinationEndpoint?: ConfigureMigrationJobRequestDestinationEndpoint;
  migrationMode?: ConfigureMigrationJobRequestMigrationMode;
  sourceEndpoint?: ConfigureMigrationJobRequestSourceEndpoint;
  checkpoint?: string;
  migrationJobId?: string;
  migrationJobName?: string;
  migrationObject?: string;
  migrationReserved?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationEndpoint: 'DestinationEndpoint',
      migrationMode: 'MigrationMode',
      sourceEndpoint: 'SourceEndpoint',
      checkpoint: 'Checkpoint',
      migrationJobId: 'MigrationJobId',
      migrationJobName: 'MigrationJobName',
      migrationObject: 'MigrationObject',
      migrationReserved: 'MigrationReserved',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationEndpoint: ConfigureMigrationJobRequestDestinationEndpoint,
      migrationMode: ConfigureMigrationJobRequestMigrationMode,
      sourceEndpoint: ConfigureMigrationJobRequestSourceEndpoint,
      checkpoint: 'string',
      migrationJobId: 'string',
      migrationJobName: 'string',
      migrationObject: 'string',
      migrationReserved: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureMigrationJobResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureMigrationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ConfigureMigrationJobResponseBody;
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
      body: ConfigureMigrationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionInstanceRequest extends $tea.Model {
  sourceEndpoint?: ConfigureSubscriptionInstanceRequestSourceEndpoint;
  subscriptionDataType?: ConfigureSubscriptionInstanceRequestSubscriptionDataType;
  ownerId?: string;
  subscriptionInstanceId?: string;
  subscriptionInstanceName?: string;
  subscriptionObject?: string;
  static names(): { [key: string]: string } {
    return {
      sourceEndpoint: 'SourceEndpoint',
      subscriptionDataType: 'SubscriptionDataType',
      ownerId: 'OwnerId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      subscriptionObject: 'SubscriptionObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceEndpoint: ConfigureSubscriptionInstanceRequestSourceEndpoint,
      subscriptionDataType: ConfigureSubscriptionInstanceRequestSubscriptionDataType,
      ownerId: 'string',
      subscriptionInstanceId: 'string',
      subscriptionInstanceName: 'string',
      subscriptionObject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionInstanceResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ConfigureSubscriptionInstanceResponseBody;
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
      body: ConfigureSubscriptionInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobRequest extends $tea.Model {
  destinationEndpoint?: ConfigureSynchronizationJobRequestDestinationEndpoint;
  partitionKey?: ConfigureSynchronizationJobRequestPartitionKey;
  sourceEndpoint?: ConfigureSynchronizationJobRequestSourceEndpoint;
  checkpoint?: string;
  dataInitialization?: boolean;
  migrationReserved?: string;
  ownerId?: string;
  structureInitialization?: boolean;
  synchronizationJobId?: string;
  synchronizationJobName?: string;
  synchronizationObjects?: string;
  static names(): { [key: string]: string } {
    return {
      destinationEndpoint: 'DestinationEndpoint',
      partitionKey: 'PartitionKey',
      sourceEndpoint: 'SourceEndpoint',
      checkpoint: 'Checkpoint',
      dataInitialization: 'DataInitialization',
      migrationReserved: 'MigrationReserved',
      ownerId: 'OwnerId',
      structureInitialization: 'StructureInitialization',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationJobName: 'SynchronizationJobName',
      synchronizationObjects: 'SynchronizationObjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationEndpoint: ConfigureSynchronizationJobRequestDestinationEndpoint,
      partitionKey: ConfigureSynchronizationJobRequestPartitionKey,
      sourceEndpoint: ConfigureSynchronizationJobRequestSourceEndpoint,
      checkpoint: 'string',
      dataInitialization: 'boolean',
      migrationReserved: 'string',
      ownerId: 'string',
      structureInitialization: 'boolean',
      synchronizationJobId: 'string',
      synchronizationJobName: 'string',
      synchronizationObjects: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ConfigureSynchronizationJobResponseBody;
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
      body: ConfigureSynchronizationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMigrationJobRequest extends $tea.Model {
  clientToken?: string;
  migrationJobClass?: string;
  ownerId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      migrationJobClass: 'MigrationJobClass',
      ownerId: 'OwnerId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      migrationJobClass: 'string',
      ownerId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMigrationJobResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  migrationJobId?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      migrationJobId: 'MigrationJobId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      migrationJobId: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMigrationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMigrationJobResponseBody;
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
      body: CreateMigrationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionInstanceRequest extends $tea.Model {
  clientToken?: string;
  ownerId?: string;
  payType?: string;
  period?: string;
  region?: string;
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      region: 'Region',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerId: 'string',
      payType: 'string',
      period: 'string',
      region: 'string',
      usedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionInstanceResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  subscriptionInstanceId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      subscriptionInstanceId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSubscriptionInstanceResponseBody;
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
      body: CreateSubscriptionInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSynchronizationJobRequest extends $tea.Model {
  destinationEndpoint?: CreateSynchronizationJobRequestDestinationEndpoint;
  sourceEndpoint?: CreateSynchronizationJobRequestSourceEndpoint;
  clientToken?: string;
  destRegion?: string;
  ownerId?: string;
  payType?: string;
  period?: string;
  sourceRegion?: string;
  synchronizationJobClass?: string;
  usedTime?: number;
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationEndpoint: 'DestinationEndpoint',
      sourceEndpoint: 'SourceEndpoint',
      clientToken: 'ClientToken',
      destRegion: 'DestRegion',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      sourceRegion: 'SourceRegion',
      synchronizationJobClass: 'SynchronizationJobClass',
      usedTime: 'UsedTime',
      networkType: 'networkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationEndpoint: CreateSynchronizationJobRequestDestinationEndpoint,
      sourceEndpoint: CreateSynchronizationJobRequestSourceEndpoint,
      clientToken: 'string',
      destRegion: 'string',
      ownerId: 'string',
      payType: 'string',
      period: 'string',
      sourceRegion: 'string',
      synchronizationJobClass: 'string',
      usedTime: 'number',
      networkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSynchronizationJobResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
      synchronizationJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSynchronizationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSynchronizationJobResponseBody;
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
      body: CreateSynchronizationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMigrationJobRequest extends $tea.Model {
  migrationJobId?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationJobId: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMigrationJobResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMigrationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMigrationJobResponseBody;
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
      body: DeleteMigrationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubscriptionInstanceRequest extends $tea.Model {
  ownerId?: string;
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      subscriptionInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubscriptionInstanceResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubscriptionInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSubscriptionInstanceResponseBody;
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
      body: DeleteSubscriptionInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSynchronizationJobRequest extends $tea.Model {
  ownerId?: string;
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      synchronizationJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSynchronizationJobResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSynchronizationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSynchronizationJobResponseBody;
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
      body: DeleteSynchronizationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeMigrationJobsRequest extends $tea.Model {
  migrationJobName?: string;
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      migrationJobName: 'MigrationJobName',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationJobName: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeMigrationJobsResponseBody extends $tea.Model {
  migrationJobs?: DescirbeMigrationJobsResponseBodyMigrationJobs;
  pageNumber?: number;
  pageRecordCount?: number;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      migrationJobs: 'MigrationJobs',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationJobs: DescirbeMigrationJobsResponseBodyMigrationJobs,
      pageNumber: 'number',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeMigrationJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescirbeMigrationJobsResponseBody;
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
      body: DescirbeMigrationJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusRequest extends $tea.Model {
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      synchronizationJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusResponseBody extends $tea.Model {
  dataInitializationDetails?: DescribeInitializationStatusResponseBodyDataInitializationDetails[];
  dataSynchronizationDetails?: DescribeInitializationStatusResponseBodyDataSynchronizationDetails[];
  structureInitializationDetails?: DescribeInitializationStatusResponseBodyStructureInitializationDetails[];
  static names(): { [key: string]: string } {
    return {
      dataInitializationDetails: 'DataInitializationDetails',
      dataSynchronizationDetails: 'DataSynchronizationDetails',
      structureInitializationDetails: 'StructureInitializationDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  statusCode: number;
  body: DescribeInitializationStatusResponseBody;
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
      body: DescribeInitializationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailRequest extends $tea.Model {
  migrationMode?: DescribeMigrationJobDetailRequestMigrationMode;
  clientToken?: string;
  migrationJobId?: string;
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      migrationMode: 'MigrationMode',
      clientToken: 'ClientToken',
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationMode: DescribeMigrationJobDetailRequestMigrationMode,
      clientToken: 'string',
      migrationJobId: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBody extends $tea.Model {
  dataInitializationDetailList?: DescribeMigrationJobDetailResponseBodyDataInitializationDetailList;
  dataSynchronizationDetailList?: DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailList;
  pageNumber?: number;
  pageRecordCount?: number;
  structureInitializationDetailList?: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailList;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataInitializationDetailList: 'DataInitializationDetailList',
      dataSynchronizationDetailList: 'DataSynchronizationDetailList',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      structureInitializationDetailList: 'StructureInitializationDetailList',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationDetailList: DescribeMigrationJobDetailResponseBodyDataInitializationDetailList,
      dataSynchronizationDetailList: DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailList,
      pageNumber: 'number',
      pageRecordCount: 'number',
      structureInitializationDetailList: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailList,
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMigrationJobDetailResponseBody;
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
      body: DescribeMigrationJobDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusRequest extends $tea.Model {
  clientToken?: string;
  migrationJobId?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      migrationJobId: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBody extends $tea.Model {
  dataInitializationStatus?: DescribeMigrationJobStatusResponseBodyDataInitializationStatus;
  dataSynchronizationStatus?: DescribeMigrationJobStatusResponseBodyDataSynchronizationStatus;
  destinationEndpoint?: DescribeMigrationJobStatusResponseBodyDestinationEndpoint;
  migrationJobClass?: string;
  migrationJobId?: string;
  migrationJobName?: string;
  migrationJobStatus?: string;
  migrationMode?: DescribeMigrationJobStatusResponseBodyMigrationMode;
  migrationObject?: string;
  payType?: string;
  precheckStatus?: DescribeMigrationJobStatusResponseBodyPrecheckStatus;
  sourceEndpoint?: DescribeMigrationJobStatusResponseBodySourceEndpoint;
  structureInitializationStatus?: DescribeMigrationJobStatusResponseBodyStructureInitializationStatus;
  static names(): { [key: string]: string } {
    return {
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      destinationEndpoint: 'DestinationEndpoint',
      migrationJobClass: 'MigrationJobClass',
      migrationJobId: 'MigrationJobId',
      migrationJobName: 'MigrationJobName',
      migrationJobStatus: 'MigrationJobStatus',
      migrationMode: 'MigrationMode',
      migrationObject: 'MigrationObject',
      payType: 'PayType',
      precheckStatus: 'PrecheckStatus',
      sourceEndpoint: 'SourceEndpoint',
      structureInitializationStatus: 'StructureInitializationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationStatus: DescribeMigrationJobStatusResponseBodyDataInitializationStatus,
      dataSynchronizationStatus: DescribeMigrationJobStatusResponseBodyDataSynchronizationStatus,
      destinationEndpoint: DescribeMigrationJobStatusResponseBodyDestinationEndpoint,
      migrationJobClass: 'string',
      migrationJobId: 'string',
      migrationJobName: 'string',
      migrationJobStatus: 'string',
      migrationMode: DescribeMigrationJobStatusResponseBodyMigrationMode,
      migrationObject: 'string',
      payType: 'string',
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
  statusCode: number;
  body: DescribeMigrationJobStatusResponseBody;
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
      body: DescribeMigrationJobStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsRequest extends $tea.Model {
  migrationJobName?: string;
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      migrationJobName: 'MigrationJobName',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationJobName: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBody extends $tea.Model {
  migrationJobs?: DescribeMigrationJobsResponseBodyMigrationJobs;
  pageNumber?: number;
  pageRecordCount?: number;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      migrationJobs: 'MigrationJobs',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationJobs: DescribeMigrationJobsResponseBodyMigrationJobs,
      pageNumber: 'number',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMigrationJobsResponseBody;
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
      body: DescribeMigrationJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusRequest extends $tea.Model {
  ownerId?: string;
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      subscriptionInstanceId: 'string',
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
  errorMessage?: string;
  payType?: string;
  sourceEndpoint?: DescribeSubscriptionInstanceStatusResponseBodySourceEndpoint;
  status?: string;
  subscriptionDataType?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionDataType;
  subscriptionInstanceID?: string;
  subscriptionInstanceName?: string;
  subscriptionObject?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObject;
  static names(): { [key: string]: string } {
    return {
      beginTimestamp: 'BeginTimestamp',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      consumptionClient: 'ConsumptionClient',
      endTimestamp: 'EndTimestamp',
      errorMessage: 'ErrorMessage',
      payType: 'PayType',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionInstanceID: 'SubscriptionInstanceID',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      subscriptionObject: 'SubscriptionObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimestamp: 'string',
      consumptionCheckpoint: 'string',
      consumptionClient: 'string',
      endTimestamp: 'string',
      errorMessage: 'string',
      payType: 'string',
      sourceEndpoint: DescribeSubscriptionInstanceStatusResponseBodySourceEndpoint,
      status: 'string',
      subscriptionDataType: DescribeSubscriptionInstanceStatusResponseBodySubscriptionDataType,
      subscriptionInstanceID: 'string',
      subscriptionInstanceName: 'string',
      subscriptionObject: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSubscriptionInstanceStatusResponseBody;
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
      body: DescribeSubscriptionInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesRequest extends $tea.Model {
  clientToken?: string;
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  subscriptionInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      subscriptionInstanceName: 'SubscriptionInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      subscriptionInstanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageRecordCount?: number;
  subscriptionInstances?: DescribeSubscriptionInstancesResponseBodySubscriptionInstances;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      subscriptionInstances: 'SubscriptionInstances',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageRecordCount: 'number',
      subscriptionInstances: DescribeSubscriptionInstancesResponseBodySubscriptionInstances,
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSubscriptionInstancesResponseBody;
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
      body: DescribeSubscriptionInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionObjectModifyStatusRequest extends $tea.Model {
  clientToken?: string;
  ownerId?: string;
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerId: 'string',
      subscriptionInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionObjectModifyStatusResponseBody extends $tea.Model {
  detail?: DescribeSubscriptionObjectModifyStatusResponseBodyDetail;
  percent?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      percent: 'Percent',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: DescribeSubscriptionObjectModifyStatusResponseBodyDetail,
      percent: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionObjectModifyStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSubscriptionObjectModifyStatusResponseBody;
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
      body: DescribeSubscriptionObjectModifyStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusRequest extends $tea.Model {
  clientToken?: string;
  ownerId?: string;
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerId: 'string',
      synchronizationJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBody extends $tea.Model {
  checkpoint?: string;
  dataInitialization?: string;
  dataInitializationStatus?: DescribeSynchronizationJobStatusResponseBodyDataInitializationStatus;
  dataSynchronizationStatus?: DescribeSynchronizationJobStatusResponseBodyDataSynchronizationStatus;
  delay?: string;
  destinationEndpoint?: DescribeSynchronizationJobStatusResponseBodyDestinationEndpoint;
  errorMessage?: string;
  expireTime?: string;
  payType?: string;
  performance?: DescribeSynchronizationJobStatusResponseBodyPerformance;
  precheckStatus?: DescribeSynchronizationJobStatusResponseBodyPrecheckStatus;
  requestId?: string;
  sourceEndpoint?: DescribeSynchronizationJobStatusResponseBodySourceEndpoint;
  status?: string;
  structureInitialization?: string;
  structureInitializationStatus?: DescribeSynchronizationJobStatusResponseBodyStructureInitializationStatus;
  synchronizationJobClass?: string;
  synchronizationJobId?: string;
  synchronizationJobName?: string;
  synchronizationObjects?: DescribeSynchronizationJobStatusResponseBodySynchronizationObjects[];
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      dataInitialization: 'DataInitialization',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      delay: 'Delay',
      destinationEndpoint: 'DestinationEndpoint',
      errorMessage: 'ErrorMessage',
      expireTime: 'ExpireTime',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      requestId: 'RequestId',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitialization: 'StructureInitialization',
      structureInitializationStatus: 'StructureInitializationStatus',
      synchronizationJobClass: 'SynchronizationJobClass',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationJobName: 'SynchronizationJobName',
      synchronizationObjects: 'SynchronizationObjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      dataInitialization: 'string',
      dataInitializationStatus: DescribeSynchronizationJobStatusResponseBodyDataInitializationStatus,
      dataSynchronizationStatus: DescribeSynchronizationJobStatusResponseBodyDataSynchronizationStatus,
      delay: 'string',
      destinationEndpoint: DescribeSynchronizationJobStatusResponseBodyDestinationEndpoint,
      errorMessage: 'string',
      expireTime: 'string',
      payType: 'string',
      performance: DescribeSynchronizationJobStatusResponseBodyPerformance,
      precheckStatus: DescribeSynchronizationJobStatusResponseBodyPrecheckStatus,
      requestId: 'string',
      sourceEndpoint: DescribeSynchronizationJobStatusResponseBodySourceEndpoint,
      status: 'string',
      structureInitialization: 'string',
      structureInitializationStatus: DescribeSynchronizationJobStatusResponseBodyStructureInitializationStatus,
      synchronizationJobClass: 'string',
      synchronizationJobId: 'string',
      synchronizationJobName: 'string',
      synchronizationObjects: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodySynchronizationObjects },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSynchronizationJobStatusResponseBody;
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
      body: DescribeSynchronizationJobStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsRequest extends $tea.Model {
  clientToken?: string;
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  synchronizationJobName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      synchronizationJobName: 'SynchronizationJobName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      synchronizationJobName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  synchronizationInstances?: DescribeSynchronizationJobsResponseBodySynchronizationInstances[];
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      synchronizationInstances: 'SynchronizationInstances',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      synchronizationInstances: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstances },
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSynchronizationJobsResponseBody;
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
      body: DescribeSynchronizationJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusRequest extends $tea.Model {
  clientToken?: string;
  ownerId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponseBody extends $tea.Model {
  dataInitializationStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyDataInitializationStatus;
  dataSynchronizationStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyDataSynchronizationStatus;
  errorMessage?: string;
  precheckStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatus;
  requestId?: string;
  status?: string;
  structureInitializationStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyStructureInitializationStatus;
  static names(): { [key: string]: string } {
    return {
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      errorMessage: 'ErrorMessage',
      precheckStatus: 'PrecheckStatus',
      requestId: 'RequestId',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationStatus: DescribeSynchronizationObjectModifyStatusResponseBodyDataInitializationStatus,
      dataSynchronizationStatus: DescribeSynchronizationObjectModifyStatusResponseBodyDataSynchronizationStatus,
      errorMessage: 'string',
      precheckStatus: DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatus,
      requestId: 'string',
      status: 'string',
      structureInitializationStatus: DescribeSynchronizationObjectModifyStatusResponseBodyStructureInitializationStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSynchronizationObjectModifyStatusResponseBody;
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
      body: DescribeSynchronizationObjectModifyStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumptionTimestampRequest extends $tea.Model {
  consumptionTimestamp?: string;
  ownerId?: string;
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      consumptionTimestamp: 'ConsumptionTimestamp',
      ownerId: 'OwnerId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumptionTimestamp: 'string',
      ownerId: 'string',
      subscriptionInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumptionTimestampResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumptionTimestampResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyConsumptionTimestampResponseBody;
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
      body: ModifyConsumptionTimestampResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMigrationObjectRequest extends $tea.Model {
  clientToken?: string;
  migrationJobId?: string;
  migrationObject?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      migrationJobId: 'MigrationJobId',
      migrationObject: 'MigrationObject',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      migrationJobId: 'string',
      migrationObject: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMigrationObjectResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMigrationObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyMigrationObjectResponseBody;
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
      body: ModifyMigrationObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubscriptionObjectRequest extends $tea.Model {
  ownerId?: string;
  subscriptionInstanceId?: string;
  subscriptionObject?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      subscriptionObject: 'SubscriptionObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      subscriptionInstanceId: 'string',
      subscriptionObject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubscriptionObjectResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubscriptionObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySubscriptionObjectResponseBody;
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
      body: ModifySubscriptionObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySynchronizationObjectRequest extends $tea.Model {
  ownerId?: string;
  synchronizationJobId?: string;
  synchronizationObjects?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationObjects: 'SynchronizationObjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      synchronizationJobId: 'string',
      synchronizationObjects: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySynchronizationObjectResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySynchronizationObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySynchronizationObjectResponseBody;
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
      body: ModifySynchronizationObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMigrationJobRequest extends $tea.Model {
  migrationJobId?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationJobId: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMigrationJobResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMigrationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartMigrationJobResponseBody;
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
      body: StartMigrationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSubscriptionInstanceRequest extends $tea.Model {
  ownerId?: string;
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      subscriptionInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSubscriptionInstanceResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSubscriptionInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartSubscriptionInstanceResponseBody;
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
      body: StartSubscriptionInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSynchronizationJobRequest extends $tea.Model {
  ownerId?: string;
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      synchronizationJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSynchronizationJobResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSynchronizationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartSynchronizationJobResponseBody;
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
      body: StartSynchronizationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMigrationJobRequest extends $tea.Model {
  clientToken?: string;
  migrationJobId?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      migrationJobId: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMigrationJobResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMigrationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopMigrationJobResponseBody;
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
      body: StopMigrationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendMigrationJobRequest extends $tea.Model {
  clientToken?: string;
  migrationJobId?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      migrationJobId: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendMigrationJobResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendMigrationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SuspendMigrationJobResponseBody;
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
      body: SuspendMigrationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendSynchronizationJobRequest extends $tea.Model {
  ownerId?: string;
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      synchronizationJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendSynchronizationJobResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendSynchronizationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SuspendSynchronizationJobResponseBody;
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
      body: SuspendSynchronizationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigurationSynchronizationJobRequestDestinationEndpoint extends $tea.Model {
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

export class ConfigurationSynchronizationJobRequestInitialization extends $tea.Model {
  dataLoad?: boolean;
  structureLoad?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataLoad: 'DataLoad',
      structureLoad: 'StructureLoad',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLoad: 'boolean',
      structureLoad: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigurationSynchronizationJobRequestSourceEndpoint extends $tea.Model {
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

export class ConfigureMigrationJobRequestDestinationEndpoint extends $tea.Model {
  dataBaseName?: string;
  engineName?: string;
  IP?: string;
  instanceID?: string;
  instanceType?: string;
  password?: string;
  port?: string;
  region?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dataBaseName: 'DataBaseName',
      engineName: 'EngineName',
      IP: 'IP',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      password: 'Password',
      port: 'Port',
      region: 'Region',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataBaseName: 'string',
      engineName: 'string',
      IP: 'string',
      instanceID: 'string',
      instanceType: 'string',
      password: 'string',
      port: 'string',
      region: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureMigrationJobRequestMigrationMode extends $tea.Model {
  dataIntialization?: boolean;
  dataSynchronization?: boolean;
  structureIntialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataIntialization: 'DataIntialization',
      dataSynchronization: 'DataSynchronization',
      structureIntialization: 'StructureIntialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIntialization: 'boolean',
      dataSynchronization: 'boolean',
      structureIntialization: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureMigrationJobRequestSourceEndpoint extends $tea.Model {
  databaseName?: string;
  engineName?: string;
  IP?: string;
  instanceID?: string;
  instanceType?: string;
  oracleSID?: string;
  ownerID?: string;
  password?: string;
  port?: string;
  region?: string;
  role?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      IP: 'IP',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      oracleSID: 'OracleSID',
      ownerID: 'OwnerID',
      password: 'Password',
      port: 'Port',
      region: 'Region',
      role: 'Role',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      IP: 'string',
      instanceID: 'string',
      instanceType: 'string',
      oracleSID: 'string',
      ownerID: 'string',
      password: 'string',
      port: 'string',
      region: 'string',
      role: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionInstanceRequestSourceEndpoint extends $tea.Model {
  instanceID?: string;
  instanceType?: string;
  ownerID?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ownerID: 'OwnerID',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceID: 'string',
      instanceType: 'string',
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

export class ConfigureSynchronizationJobRequestDestinationEndpoint extends $tea.Model {
  IP?: string;
  instanceId?: string;
  instanceType?: string;
  password?: string;
  port?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      password: 'Password',
      port: 'Port',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      password: 'string',
      port: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobRequestPartitionKey extends $tea.Model {
  modifyTimeDay?: boolean;
  modifyTimeHour?: boolean;
  modifyTimeMinute?: boolean;
  modifyTimeMonth?: boolean;
  modifyTimeYear?: boolean;
  static names(): { [key: string]: string } {
    return {
      modifyTimeDay: 'ModifyTime_Day',
      modifyTimeHour: 'ModifyTime_Hour',
      modifyTimeMinute: 'ModifyTime_Minute',
      modifyTimeMonth: 'ModifyTime_Month',
      modifyTimeYear: 'ModifyTime_Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTimeDay: 'boolean',
      modifyTimeHour: 'boolean',
      modifyTimeMinute: 'boolean',
      modifyTimeMonth: 'boolean',
      modifyTimeYear: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobRequestSourceEndpoint extends $tea.Model {
  IP?: string;
  instanceId?: string;
  instanceType?: string;
  ownerID?: string;
  password?: string;
  port?: string;
  role?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerID: 'OwnerID',
      password: 'Password',
      port: 'Port',
      role: 'Role',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      ownerID: 'string',
      password: 'string',
      port: 'string',
      role: 'string',
      userName: 'string',
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

export class DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization extends $tea.Model {
  errorMessage?: string;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization extends $tea.Model {
  delay?: string;
  errorMessage?: string;
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'string',
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobDestinationEndpoint extends $tea.Model {
  databaseName?: string;
  engineName?: string;
  IP?: string;
  instanceID?: string;
  instanceType?: string;
  oracleSID?: string;
  port?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      IP: 'IP',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      oracleSID: 'OracleSID',
      port: 'Port',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      IP: 'string',
      instanceID: 'string',
      instanceType: 'string',
      oracleSID: 'string',
      port: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationMode extends $tea.Model {
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

export class DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObjectTableList extends $tea.Model {
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

export class DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObject extends $tea.Model {
  databaseName?: string;
  tableList?: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObjectTableList;
  wholeDatabase?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      tableList: 'TableList',
      wholeDatabase: 'WholeDatabase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      tableList: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObjectTableList,
      wholeDatabase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObject extends $tea.Model {
  synchronousObject?: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObject[];
  static names(): { [key: string]: string } {
    return {
      synchronousObject: 'SynchronousObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronousObject: { 'type': 'array', 'itemType': DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObject },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobPrecheck extends $tea.Model {
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobSourceEndpoint extends $tea.Model {
  databaseName?: string;
  engineName?: string;
  IP?: string;
  instanceID?: string;
  instanceType?: string;
  oracleSID?: string;
  port?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      IP: 'IP',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      oracleSID: 'OracleSID',
      port: 'Port',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      IP: 'string',
      instanceID: 'string',
      instanceType: 'string',
      oracleSID: 'string',
      port: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobStructureInitialization extends $tea.Model {
  errorMessage?: string;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJob extends $tea.Model {
  dataInitialization?: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization;
  dataSynchronization?: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization;
  destinationEndpoint?: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobDestinationEndpoint;
  migrationJobClass?: string;
  migrationJobID?: string;
  migrationJobName?: string;
  migrationJobStatus?: string;
  migrationMode?: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationMode;
  migrationObject?: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObject;
  payType?: string;
  precheck?: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobPrecheck;
  sourceEndpoint?: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobSourceEndpoint;
  structureInitialization?: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobStructureInitialization;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      destinationEndpoint: 'DestinationEndpoint',
      migrationJobClass: 'MigrationJobClass',
      migrationJobID: 'MigrationJobID',
      migrationJobName: 'MigrationJobName',
      migrationJobStatus: 'MigrationJobStatus',
      migrationMode: 'MigrationMode',
      migrationObject: 'MigrationObject',
      payType: 'PayType',
      precheck: 'Precheck',
      sourceEndpoint: 'SourceEndpoint',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization,
      dataSynchronization: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization,
      destinationEndpoint: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobDestinationEndpoint,
      migrationJobClass: 'string',
      migrationJobID: 'string',
      migrationJobName: 'string',
      migrationJobStatus: 'string',
      migrationMode: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationMode,
      migrationObject: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObject,
      payType: 'string',
      precheck: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobPrecheck,
      sourceEndpoint: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobSourceEndpoint,
      structureInitialization: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJobStructureInitialization,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeMigrationJobsResponseBodyMigrationJobs extends $tea.Model {
  migrationJob?: DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJob[];
  static names(): { [key: string]: string } {
    return {
      migrationJob: 'MigrationJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationJob: { 'type': 'array', 'itemType': DescirbeMigrationJobsResponseBodyMigrationJobsMigrationJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusResponseBodyDataInitializationDetails extends $tea.Model {
  destinationOwnerDBName?: string;
  errorMessage?: string;
  finishRowNum?: string;
  sourceOwnerDBName?: string;
  status?: string;
  tableName?: string;
  totalRowNum?: string;
  usedTime?: string;
  static names(): { [key: string]: string } {
    return {
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      finishRowNum: 'FinishRowNum',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
      tableName: 'TableName',
      totalRowNum: 'TotalRowNum',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      finishRowNum: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
      tableName: 'string',
      totalRowNum: 'string',
      usedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusResponseBodyDataSynchronizationDetails extends $tea.Model {
  destinationOwnerDBName?: string;
  errorMessage?: string;
  sourceOwnerDBName?: string;
  status?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusResponseBodyStructureInitializationDetailsConstraints extends $tea.Model {
  destinationOwnerDBName?: string;
  errorMessage?: string;
  objectDefinition?: string;
  objectName?: string;
  objectType?: string;
  sourceOwnerDBName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      objectDefinition: 'ObjectDefinition',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      objectDefinition: 'string',
      objectName: 'string',
      objectType: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusResponseBodyStructureInitializationDetails extends $tea.Model {
  constraints?: DescribeInitializationStatusResponseBodyStructureInitializationDetailsConstraints[];
  destinationOwnerDBName?: string;
  errorMessage?: string;
  objectDefinition?: string;
  objectName?: string;
  objectType?: string;
  sourceOwnerDBName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      objectDefinition: 'ObjectDefinition',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyStructureInitializationDetailsConstraints },
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      objectDefinition: 'string',
      objectName: 'string',
      objectType: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailRequestMigrationMode extends $tea.Model {
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

export class DescribeMigrationJobDetailResponseBodyDataInitializationDetailListDataInitializationDetail extends $tea.Model {
  destinationOwnerDBName?: string;
  errorMessage?: string;
  finishRowNum?: string;
  migrationTime?: string;
  sourceOwnerDBName?: string;
  status?: string;
  tableName?: string;
  totalRowNum?: string;
  static names(): { [key: string]: string } {
    return {
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      finishRowNum: 'FinishRowNum',
      migrationTime: 'MigrationTime',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
      tableName: 'TableName',
      totalRowNum: 'TotalRowNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      finishRowNum: 'string',
      migrationTime: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
      tableName: 'string',
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
  destinationOwnerDBName?: string;
  errorMessage?: string;
  sourceOwnerDBName?: string;
  status?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
      tableName: 'string',
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
  destinationOwnerDBName?: string;
  errorMessage?: string;
  objectDefinition?: string;
  objectName?: string;
  objectType?: string;
  sourceOwnerDBName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      objectDefinition: 'ObjectDefinition',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      objectDefinition: 'string',
      objectName: 'string',
      objectType: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
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
  constraintList?: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintList;
  destinationOwnerDBName?: string;
  errorMessage?: string;
  objectDefinition?: string;
  objectName?: string;
  objectType?: string;
  sourceOwnerDBName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      constraintList: 'ConstraintList',
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      objectDefinition: 'ObjectDefinition',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraintList: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintList,
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      objectDefinition: 'string',
      objectName: 'string',
      objectType: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
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

export class DescribeMigrationJobStatusResponseBodyDataInitializationStatus extends $tea.Model {
  errorMessage?: string;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodyDataSynchronizationStatus extends $tea.Model {
  checkpoint?: string;
  delay?: string;
  errorMessage?: string;
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      delay: 'Delay',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      delay: 'string',
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodyDestinationEndpoint extends $tea.Model {
  databaseName?: string;
  engineName?: string;
  IP?: string;
  instanceId?: string;
  instanceType?: string;
  port?: string;
  userName?: string;
  oracleSID?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      port: 'Port',
      userName: 'UserName',
      oracleSID: 'oracleSID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      port: 'string',
      userName: 'string',
      oracleSID: 'string',
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
  detail?: DescribeMigrationJobStatusResponseBodyPrecheckStatusDetail;
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: DescribeMigrationJobStatusResponseBodyPrecheckStatusDetail,
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodySourceEndpoint extends $tea.Model {
  databaseName?: string;
  engineName?: string;
  IP?: string;
  instanceId?: string;
  instanceType?: string;
  port?: string;
  userName?: string;
  oracleSID?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      port: 'Port',
      userName: 'UserName',
      oracleSID: 'oracleSID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      port: 'string',
      userName: 'string',
      oracleSID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodyStructureInitializationStatus extends $tea.Model {
  errorMessage?: string;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization extends $tea.Model {
  errorMessage?: string;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization extends $tea.Model {
  delay?: string;
  errorMessage?: string;
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'string',
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDestinationEndpoint extends $tea.Model {
  databaseName?: string;
  engineName?: string;
  IP?: string;
  instanceID?: string;
  instanceType?: string;
  oracleSID?: string;
  port?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      IP: 'IP',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      oracleSID: 'OracleSID',
      port: 'Port',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      IP: 'string',
      instanceID: 'string',
      instanceType: 'string',
      oracleSID: 'string',
      port: 'string',
      userName: 'string',
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
  tableList?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObjectTableList;
  wholeDatabase?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      tableList: 'TableList',
      wholeDatabase: 'WholeDatabase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      tableList: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObjectTableList,
      wholeDatabase: 'string',
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

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobPrecheck extends $tea.Model {
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobSourceEndpoint extends $tea.Model {
  databaseName?: string;
  engineName?: string;
  IP?: string;
  instanceID?: string;
  instanceType?: string;
  oracleSID?: string;
  port?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      IP: 'IP',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      oracleSID: 'OracleSID',
      port: 'Port',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      IP: 'string',
      instanceID: 'string',
      instanceType: 'string',
      oracleSID: 'string',
      port: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobStructureInitialization extends $tea.Model {
  errorMessage?: string;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJob extends $tea.Model {
  dataInitialization?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization;
  dataSynchronization?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization;
  destinationEndpoint?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDestinationEndpoint;
  migrationJobClass?: string;
  migrationJobID?: string;
  migrationJobName?: string;
  migrationJobStatus?: string;
  migrationMode?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationMode;
  migrationObject?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObject;
  payType?: string;
  precheck?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobPrecheck;
  sourceEndpoint?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobSourceEndpoint;
  structureInitialization?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobStructureInitialization;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      destinationEndpoint: 'DestinationEndpoint',
      migrationJobClass: 'MigrationJobClass',
      migrationJobID: 'MigrationJobID',
      migrationJobName: 'MigrationJobName',
      migrationJobStatus: 'MigrationJobStatus',
      migrationMode: 'MigrationMode',
      migrationObject: 'MigrationObject',
      payType: 'PayType',
      precheck: 'Precheck',
      sourceEndpoint: 'SourceEndpoint',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization,
      dataSynchronization: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization,
      destinationEndpoint: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDestinationEndpoint,
      migrationJobClass: 'string',
      migrationJobID: 'string',
      migrationJobName: 'string',
      migrationJobStatus: 'string',
      migrationMode: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationMode,
      migrationObject: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObject,
      payType: 'string',
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
  tableList?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObjectTableList;
  wholeDatabase?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      tableList: 'TableList',
      wholeDatabase: 'WholeDatabase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      tableList: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObjectTableList,
      wholeDatabase: 'string',
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
  tableList?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObjectSynchronousObjectTableList;
  wholeDatabase?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      tableList: 'TableList',
      wholeDatabase: 'WholeDatabase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      tableList: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObjectSynchronousObjectTableList,
      wholeDatabase: 'string',
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

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstance extends $tea.Model {
  beginTimestamp?: string;
  consumptionCheckpoint?: string;
  consumptionClient?: string;
  endTimestamp?: string;
  errorMessage?: string;
  payType?: string;
  sourceEndpoint?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSourceEndpoint;
  status?: string;
  subscriptionDataType?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionDataType;
  subscriptionInstanceID?: string;
  subscriptionInstanceName?: string;
  subscriptionObject?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObject;
  static names(): { [key: string]: string } {
    return {
      beginTimestamp: 'BeginTimestamp',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      consumptionClient: 'ConsumptionClient',
      endTimestamp: 'EndTimestamp',
      errorMessage: 'ErrorMessage',
      payType: 'PayType',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionInstanceID: 'SubscriptionInstanceID',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      subscriptionObject: 'SubscriptionObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimestamp: 'string',
      consumptionCheckpoint: 'string',
      consumptionClient: 'string',
      endTimestamp: 'string',
      errorMessage: 'string',
      payType: 'string',
      sourceEndpoint: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSourceEndpoint,
      status: 'string',
      subscriptionDataType: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionDataType,
      subscriptionInstanceID: 'string',
      subscriptionInstanceName: 'string',
      subscriptionObject: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObject,
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

export class DescribeSubscriptionObjectModifyStatusResponseBodyDetailCheckItem extends $tea.Model {
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

export class DescribeSubscriptionObjectModifyStatusResponseBodyDetail extends $tea.Model {
  checkItem?: DescribeSubscriptionObjectModifyStatusResponseBodyDetailCheckItem[];
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: { 'type': 'array', 'itemType': DescribeSubscriptionObjectModifyStatusResponseBodyDetailCheckItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodyDataInitializationStatus extends $tea.Model {
  errorMessage?: string;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodyDataSynchronizationStatus extends $tea.Model {
  checkpoint?: string;
  delay?: string;
  errorMessage?: string;
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      delay: 'Delay',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      delay: 'string',
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodyDestinationEndpoint extends $tea.Model {
  instanceId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
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
  detail?: DescribeSynchronizationJobStatusResponseBodyPrecheckStatusDetail[];
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodyPrecheckStatusDetail },
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodySourceEndpoint extends $tea.Model {
  instanceId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodyStructureInitializationStatus extends $tea.Model {
  errorMessage?: string;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      percent: 'string',
      progress: 'string',
      status: 'string',
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

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataInitializationStatus extends $tea.Model {
  errorMessage?: string;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus extends $tea.Model {
  delay?: string;
  errorMessage?: string;
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'string',
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesDestinationEndpoint extends $tea.Model {
  instanceId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
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
  detail?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatusDetail[];
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatusDetail },
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesSourceEndpoint extends $tea.Model {
  instanceId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesStructureInitializationStatus extends $tea.Model {
  errorMessage?: string;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      percent: 'string',
      progress: 'string',
      status: 'string',
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

export class DescribeSynchronizationJobsResponseBodySynchronizationInstances extends $tea.Model {
  dataInitialization?: string;
  dataInitializationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataInitializationStatus;
  dataSynchronizationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus;
  delay?: string;
  destinationEndpoint?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDestinationEndpoint;
  errorMessage?: string;
  expireTime?: string;
  payType?: string;
  performance?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance;
  precheckStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatus;
  sourceEndpoint?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSourceEndpoint;
  status?: string;
  structureInitialization?: string;
  structureInitializationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesStructureInitializationStatus;
  synchronizationJobClass?: string;
  synchronizationJobId?: string;
  synchronizationJobName?: string;
  synchronizationObjects?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjects[];
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      delay: 'Delay',
      destinationEndpoint: 'DestinationEndpoint',
      errorMessage: 'ErrorMessage',
      expireTime: 'ExpireTime',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitialization: 'StructureInitialization',
      structureInitializationStatus: 'StructureInitializationStatus',
      synchronizationJobClass: 'SynchronizationJobClass',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationJobName: 'SynchronizationJobName',
      synchronizationObjects: 'SynchronizationObjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: 'string',
      dataInitializationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataInitializationStatus,
      dataSynchronizationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus,
      delay: 'string',
      destinationEndpoint: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDestinationEndpoint,
      errorMessage: 'string',
      expireTime: 'string',
      payType: 'string',
      performance: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance,
      precheckStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatus,
      sourceEndpoint: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSourceEndpoint,
      status: 'string',
      structureInitialization: 'string',
      structureInitializationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesStructureInitializationStatus,
      synchronizationJobClass: 'string',
      synchronizationJobId: 'string',
      synchronizationJobName: 'string',
      synchronizationObjects: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjects },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponseBodyDataInitializationStatus extends $tea.Model {
  errorMessage?: string;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponseBodyDataSynchronizationStatus extends $tea.Model {
  delay?: string;
  errorMessage?: string;
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'string',
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
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
  detail?: DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatusDetail[];
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatusDetail },
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponseBodyStructureInitializationStatus extends $tea.Model {
  errorMessage?: string;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      percent: 'string',
      progress: 'string',
      status: 'string',
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

  async configurationSynchronizationJobWithOptions(request: ConfigurationSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<ConfigurationSynchronizationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    if (!Util.isUnset(request.synchronizationJobName)) {
      query["SynchronizationJobName"] = request.synchronizationJobName;
    }

    if (!Util.isUnset(request.synchronizationObject)) {
      query["SynchronizationObject"] = request.synchronizationObject;
    }

    if (!Util.isUnset(request.destinationEndpoint)) {
      query["DestinationEndpoint"] = request.destinationEndpoint;
    }

    if (!Util.isUnset(request.initialization)) {
      query["Initialization"] = request.initialization;
    }

    if (!Util.isUnset(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigurationSynchronizationJob",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigurationSynchronizationJobResponse>(await this.callApi(params, req, runtime), new ConfigurationSynchronizationJobResponse({}));
  }

  async configurationSynchronizationJob(request: ConfigurationSynchronizationJobRequest): Promise<ConfigurationSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configurationSynchronizationJobWithOptions(request, runtime);
  }

  async configureMigrationJobWithOptions(request: ConfigureMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureMigrationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkpoint)) {
      query["Checkpoint"] = request.checkpoint;
    }

    if (!Util.isUnset(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!Util.isUnset(request.migrationJobName)) {
      query["MigrationJobName"] = request.migrationJobName;
    }

    if (!Util.isUnset(request.migrationObject)) {
      query["MigrationObject"] = request.migrationObject;
    }

    if (!Util.isUnset(request.migrationReserved)) {
      query["MigrationReserved"] = request.migrationReserved;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.destinationEndpoint)) {
      query["DestinationEndpoint"] = request.destinationEndpoint;
    }

    if (!Util.isUnset(request.migrationMode)) {
      query["MigrationMode"] = request.migrationMode;
    }

    if (!Util.isUnset(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigureMigrationJob",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigureMigrationJobResponse>(await this.callApi(params, req, runtime), new ConfigureMigrationJobResponse({}));
  }

  async configureMigrationJob(request: ConfigureMigrationJobRequest): Promise<ConfigureMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureMigrationJobWithOptions(request, runtime);
  }

  async configureSubscriptionInstanceWithOptions(request: ConfigureSubscriptionInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureSubscriptionInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    if (!Util.isUnset(request.subscriptionInstanceName)) {
      query["SubscriptionInstanceName"] = request.subscriptionInstanceName;
    }

    if (!Util.isUnset(request.subscriptionObject)) {
      query["SubscriptionObject"] = request.subscriptionObject;
    }

    if (!Util.isUnset(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    if (!Util.isUnset(request.subscriptionDataType)) {
      query["SubscriptionDataType"] = request.subscriptionDataType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigureSubscriptionInstance",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigureSubscriptionInstanceResponse>(await this.callApi(params, req, runtime), new ConfigureSubscriptionInstanceResponse({}));
  }

  async configureSubscriptionInstance(request: ConfigureSubscriptionInstanceRequest): Promise<ConfigureSubscriptionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureSubscriptionInstanceWithOptions(request, runtime);
  }

  async configureSynchronizationJobWithOptions(request: ConfigureSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureSynchronizationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkpoint)) {
      query["Checkpoint"] = request.checkpoint;
    }

    if (!Util.isUnset(request.dataInitialization)) {
      query["DataInitialization"] = request.dataInitialization;
    }

    if (!Util.isUnset(request.migrationReserved)) {
      query["MigrationReserved"] = request.migrationReserved;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.structureInitialization)) {
      query["StructureInitialization"] = request.structureInitialization;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    if (!Util.isUnset(request.synchronizationJobName)) {
      query["SynchronizationJobName"] = request.synchronizationJobName;
    }

    if (!Util.isUnset(request.synchronizationObjects)) {
      query["SynchronizationObjects"] = request.synchronizationObjects;
    }

    if (!Util.isUnset(request.destinationEndpoint)) {
      query["DestinationEndpoint"] = request.destinationEndpoint;
    }

    if (!Util.isUnset(request.partitionKey)) {
      query["PartitionKey"] = request.partitionKey;
    }

    if (!Util.isUnset(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigureSynchronizationJob",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigureSynchronizationJobResponse>(await this.callApi(params, req, runtime), new ConfigureSynchronizationJobResponse({}));
  }

  async configureSynchronizationJob(request: ConfigureSynchronizationJobRequest): Promise<ConfigureSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureSynchronizationJobWithOptions(request, runtime);
  }

  async createMigrationJobWithOptions(request: CreateMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateMigrationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.migrationJobClass)) {
      query["MigrationJobClass"] = request.migrationJobClass;
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
      action: "CreateMigrationJob",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMigrationJobResponse>(await this.callApi(params, req, runtime), new CreateMigrationJobResponse({}));
  }

  async createMigrationJob(request: CreateMigrationJobRequest): Promise<CreateMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMigrationJobWithOptions(request, runtime);
  }

  async createSubscriptionInstanceWithOptions(request: CreateSubscriptionInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateSubscriptionInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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

    if (!Util.isUnset(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSubscriptionInstance",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSubscriptionInstanceResponse>(await this.callApi(params, req, runtime), new CreateSubscriptionInstanceResponse({}));
  }

  async createSubscriptionInstance(request: CreateSubscriptionInstanceRequest): Promise<CreateSubscriptionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSubscriptionInstanceWithOptions(request, runtime);
  }

  async createSynchronizationJobWithOptions(request: CreateSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateSynchronizationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.destRegion)) {
      query["DestRegion"] = request.destRegion;
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

    if (!Util.isUnset(request.sourceRegion)) {
      query["SourceRegion"] = request.sourceRegion;
    }

    if (!Util.isUnset(request.synchronizationJobClass)) {
      query["SynchronizationJobClass"] = request.synchronizationJobClass;
    }

    if (!Util.isUnset(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!Util.isUnset(request.networkType)) {
      query["networkType"] = request.networkType;
    }

    if (!Util.isUnset(request.destinationEndpoint)) {
      query["DestinationEndpoint"] = request.destinationEndpoint;
    }

    if (!Util.isUnset(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSynchronizationJob",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSynchronizationJobResponse>(await this.callApi(params, req, runtime), new CreateSynchronizationJobResponse({}));
  }

  async createSynchronizationJob(request: CreateSynchronizationJobRequest): Promise<CreateSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSynchronizationJobWithOptions(request, runtime);
  }

  async deleteMigrationJobWithOptions(request: DeleteMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMigrationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMigrationJob",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMigrationJobResponse>(await this.callApi(params, req, runtime), new DeleteMigrationJobResponse({}));
  }

  async deleteMigrationJob(request: DeleteMigrationJobRequest): Promise<DeleteMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMigrationJobWithOptions(request, runtime);
  }

  async deleteSubscriptionInstanceWithOptions(request: DeleteSubscriptionInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSubscriptionInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSubscriptionInstance",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSubscriptionInstanceResponse>(await this.callApi(params, req, runtime), new DeleteSubscriptionInstanceResponse({}));
  }

  async deleteSubscriptionInstance(request: DeleteSubscriptionInstanceRequest): Promise<DeleteSubscriptionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSubscriptionInstanceWithOptions(request, runtime);
  }

  async deleteSynchronizationJobWithOptions(request: DeleteSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSynchronizationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSynchronizationJob",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSynchronizationJobResponse>(await this.callApi(params, req, runtime), new DeleteSynchronizationJobResponse({}));
  }

  async deleteSynchronizationJob(request: DeleteSynchronizationJobRequest): Promise<DeleteSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSynchronizationJobWithOptions(request, runtime);
  }

  async descirbeMigrationJobsWithOptions(request: DescirbeMigrationJobsRequest, runtime: $Util.RuntimeOptions): Promise<DescirbeMigrationJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.migrationJobName)) {
      query["MigrationJobName"] = request.migrationJobName;
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
      action: "DescirbeMigrationJobs",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescirbeMigrationJobsResponse>(await this.callApi(params, req, runtime), new DescirbeMigrationJobsResponse({}));
  }

  async descirbeMigrationJobs(request: DescirbeMigrationJobsRequest): Promise<DescirbeMigrationJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.descirbeMigrationJobsWithOptions(request, runtime);
  }

  async describeInitializationStatusWithOptions(request: DescribeInitializationStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInitializationStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInitializationStatus",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInitializationStatusResponse>(await this.callApi(params, req, runtime), new DescribeInitializationStatusResponse({}));
  }

  async describeInitializationStatus(request: DescribeInitializationStatusRequest): Promise<DescribeInitializationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInitializationStatusWithOptions(request, runtime);
  }

  async describeMigrationJobDetailWithOptions(request: DescribeMigrationJobDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMigrationJobDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
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

    if (!Util.isUnset(request.migrationMode)) {
      query["MigrationMode"] = request.migrationMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMigrationJobDetail",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMigrationJobDetailResponse>(await this.callApi(params, req, runtime), new DescribeMigrationJobDetailResponse({}));
  }

  async describeMigrationJobDetail(request: DescribeMigrationJobDetailRequest): Promise<DescribeMigrationJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMigrationJobDetailWithOptions(request, runtime);
  }

  async describeMigrationJobStatusWithOptions(request: DescribeMigrationJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMigrationJobStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMigrationJobStatus",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMigrationJobStatusResponse>(await this.callApi(params, req, runtime), new DescribeMigrationJobStatusResponse({}));
  }

  async describeMigrationJobStatus(request: DescribeMigrationJobStatusRequest): Promise<DescribeMigrationJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMigrationJobStatusWithOptions(request, runtime);
  }

  async describeMigrationJobsWithOptions(request: DescribeMigrationJobsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMigrationJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.migrationJobName)) {
      query["MigrationJobName"] = request.migrationJobName;
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
      action: "DescribeMigrationJobs",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMigrationJobsResponse>(await this.callApi(params, req, runtime), new DescribeMigrationJobsResponse({}));
  }

  async describeMigrationJobs(request: DescribeMigrationJobsRequest): Promise<DescribeMigrationJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMigrationJobsWithOptions(request, runtime);
  }

  async describeSubscriptionInstanceStatusWithOptions(request: DescribeSubscriptionInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubscriptionInstanceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSubscriptionInstanceStatus",
      version: "2016-08-01",
      protocol: "HTTP",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSubscriptionInstanceStatusResponse>(await this.callApi(params, req, runtime), new DescribeSubscriptionInstanceStatusResponse({}));
  }

  async describeSubscriptionInstanceStatus(request: DescribeSubscriptionInstanceStatusRequest): Promise<DescribeSubscriptionInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubscriptionInstanceStatusWithOptions(request, runtime);
  }

  async describeSubscriptionInstancesWithOptions(request: DescribeSubscriptionInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubscriptionInstancesResponse> {
    Util.validateModel(request);
    let query = { };
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

    if (!Util.isUnset(request.subscriptionInstanceName)) {
      query["SubscriptionInstanceName"] = request.subscriptionInstanceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSubscriptionInstances",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSubscriptionInstancesResponse>(await this.callApi(params, req, runtime), new DescribeSubscriptionInstancesResponse({}));
  }

  async describeSubscriptionInstances(request: DescribeSubscriptionInstancesRequest): Promise<DescribeSubscriptionInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubscriptionInstancesWithOptions(request, runtime);
  }

  async describeSubscriptionObjectModifyStatusWithOptions(request: DescribeSubscriptionObjectModifyStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubscriptionObjectModifyStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSubscriptionObjectModifyStatus",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSubscriptionObjectModifyStatusResponse>(await this.callApi(params, req, runtime), new DescribeSubscriptionObjectModifyStatusResponse({}));
  }

  async describeSubscriptionObjectModifyStatus(request: DescribeSubscriptionObjectModifyStatusRequest): Promise<DescribeSubscriptionObjectModifyStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubscriptionObjectModifyStatusWithOptions(request, runtime);
  }

  async describeSynchronizationJobStatusWithOptions(request: DescribeSynchronizationJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynchronizationJobStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSynchronizationJobStatus",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSynchronizationJobStatusResponse>(await this.callApi(params, req, runtime), new DescribeSynchronizationJobStatusResponse({}));
  }

  async describeSynchronizationJobStatus(request: DescribeSynchronizationJobStatusRequest): Promise<DescribeSynchronizationJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSynchronizationJobStatusWithOptions(request, runtime);
  }

  async describeSynchronizationJobsWithOptions(request: DescribeSynchronizationJobsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynchronizationJobsResponse> {
    Util.validateModel(request);
    let query = { };
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

    if (!Util.isUnset(request.synchronizationJobName)) {
      query["SynchronizationJobName"] = request.synchronizationJobName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSynchronizationJobs",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSynchronizationJobsResponse>(await this.callApi(params, req, runtime), new DescribeSynchronizationJobsResponse({}));
  }

  async describeSynchronizationJobs(request: DescribeSynchronizationJobsRequest): Promise<DescribeSynchronizationJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSynchronizationJobsWithOptions(request, runtime);
  }

  async describeSynchronizationObjectModifyStatusWithOptions(request: DescribeSynchronizationObjectModifyStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynchronizationObjectModifyStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      action: "DescribeSynchronizationObjectModifyStatus",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSynchronizationObjectModifyStatusResponse>(await this.callApi(params, req, runtime), new DescribeSynchronizationObjectModifyStatusResponse({}));
  }

  async describeSynchronizationObjectModifyStatus(request: DescribeSynchronizationObjectModifyStatusRequest): Promise<DescribeSynchronizationObjectModifyStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSynchronizationObjectModifyStatusWithOptions(request, runtime);
  }

  async modifyConsumptionTimestampWithOptions(request: ModifyConsumptionTimestampRequest, runtime: $Util.RuntimeOptions): Promise<ModifyConsumptionTimestampResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consumptionTimestamp)) {
      query["ConsumptionTimestamp"] = request.consumptionTimestamp;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyConsumptionTimestamp",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyConsumptionTimestampResponse>(await this.callApi(params, req, runtime), new ModifyConsumptionTimestampResponse({}));
  }

  async modifyConsumptionTimestamp(request: ModifyConsumptionTimestampRequest): Promise<ModifyConsumptionTimestampResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyConsumptionTimestampWithOptions(request, runtime);
  }

  async modifyMigrationObjectWithOptions(request: ModifyMigrationObjectRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMigrationObjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!Util.isUnset(request.migrationObject)) {
      query["MigrationObject"] = request.migrationObject;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMigrationObject",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMigrationObjectResponse>(await this.callApi(params, req, runtime), new ModifyMigrationObjectResponse({}));
  }

  async modifyMigrationObject(request: ModifyMigrationObjectRequest): Promise<ModifyMigrationObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMigrationObjectWithOptions(request, runtime);
  }

  async modifySubscriptionObjectWithOptions(request: ModifySubscriptionObjectRequest, runtime: $Util.RuntimeOptions): Promise<ModifySubscriptionObjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    if (!Util.isUnset(request.subscriptionObject)) {
      query["SubscriptionObject"] = request.subscriptionObject;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySubscriptionObject",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySubscriptionObjectResponse>(await this.callApi(params, req, runtime), new ModifySubscriptionObjectResponse({}));
  }

  async modifySubscriptionObject(request: ModifySubscriptionObjectRequest): Promise<ModifySubscriptionObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySubscriptionObjectWithOptions(request, runtime);
  }

  async modifySynchronizationObjectWithOptions(request: ModifySynchronizationObjectRequest, runtime: $Util.RuntimeOptions): Promise<ModifySynchronizationObjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    if (!Util.isUnset(request.synchronizationObjects)) {
      query["SynchronizationObjects"] = request.synchronizationObjects;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySynchronizationObject",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySynchronizationObjectResponse>(await this.callApi(params, req, runtime), new ModifySynchronizationObjectResponse({}));
  }

  async modifySynchronizationObject(request: ModifySynchronizationObjectRequest): Promise<ModifySynchronizationObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySynchronizationObjectWithOptions(request, runtime);
  }

  async startMigrationJobWithOptions(request: StartMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<StartMigrationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartMigrationJob",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartMigrationJobResponse>(await this.callApi(params, req, runtime), new StartMigrationJobResponse({}));
  }

  async startMigrationJob(request: StartMigrationJobRequest): Promise<StartMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startMigrationJobWithOptions(request, runtime);
  }

  async startSubscriptionInstanceWithOptions(request: StartSubscriptionInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartSubscriptionInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartSubscriptionInstance",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartSubscriptionInstanceResponse>(await this.callApi(params, req, runtime), new StartSubscriptionInstanceResponse({}));
  }

  async startSubscriptionInstance(request: StartSubscriptionInstanceRequest): Promise<StartSubscriptionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startSubscriptionInstanceWithOptions(request, runtime);
  }

  async startSynchronizationJobWithOptions(request: StartSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<StartSynchronizationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartSynchronizationJob",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartSynchronizationJobResponse>(await this.callApi(params, req, runtime), new StartSynchronizationJobResponse({}));
  }

  async startSynchronizationJob(request: StartSynchronizationJobRequest): Promise<StartSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startSynchronizationJobWithOptions(request, runtime);
  }

  async stopMigrationJobWithOptions(request: StopMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<StopMigrationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopMigrationJob",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopMigrationJobResponse>(await this.callApi(params, req, runtime), new StopMigrationJobResponse({}));
  }

  async stopMigrationJob(request: StopMigrationJobRequest): Promise<StopMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopMigrationJobWithOptions(request, runtime);
  }

  async suspendMigrationJobWithOptions(request: SuspendMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<SuspendMigrationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SuspendMigrationJob",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SuspendMigrationJobResponse>(await this.callApi(params, req, runtime), new SuspendMigrationJobResponse({}));
  }

  async suspendMigrationJob(request: SuspendMigrationJobRequest): Promise<SuspendMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendMigrationJobWithOptions(request, runtime);
  }

  async suspendSynchronizationJobWithOptions(request: SuspendSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<SuspendSynchronizationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SuspendSynchronizationJob",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SuspendSynchronizationJobResponse>(await this.callApi(params, req, runtime), new SuspendSynchronizationJobResponse({}));
  }

  async suspendSynchronizationJob(request: SuspendSynchronizationJobRequest): Promise<SuspendSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendSynchronizationJobWithOptions(request, runtime);
  }

}
