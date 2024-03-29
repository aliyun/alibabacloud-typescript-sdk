// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class ConfigureDtsJobRequest extends $tea.Model {
  checkpoint?: string;
  dataCheckConfigure?: string;
  dataInitialization?: boolean;
  dataSynchronization?: boolean;
  dbList?: string;
  dedicatedClusterId?: string;
  delayNotice?: boolean;
  delayPhone?: string;
  delayRuleTime?: number;
  destCaCertificateOssUrl?: string;
  destCaCertificatePassword?: string;
  destinationEndpointDataBaseName?: string;
  destinationEndpointEngineName?: string;
  destinationEndpointIP?: string;
  destinationEndpointInstanceID?: string;
  destinationEndpointInstanceType?: string;
  destinationEndpointOracleSID?: string;
  destinationEndpointOwnerID?: string;
  destinationEndpointPassword?: string;
  destinationEndpointPort?: string;
  destinationEndpointRegion?: string;
  destinationEndpointRole?: string;
  destinationEndpointUserName?: string;
  disasterRecoveryJob?: boolean;
  dtsBisLabel?: string;
  dtsInstanceId?: string;
  dtsJobId?: string;
  dtsJobName?: string;
  errorNotice?: boolean;
  errorPhone?: string;
  fileOssUrl?: string;
  jobType?: string;
  maxDu?: number;
  minDu?: number;
  ownerId?: string;
  regionId?: string;
  reserve?: string;
  resourceGroupId?: string;
  sourceEndpointDatabaseName?: string;
  sourceEndpointEngineName?: string;
  sourceEndpointIP?: string;
  sourceEndpointInstanceID?: string;
  sourceEndpointInstanceType?: string;
  sourceEndpointOracleSID?: string;
  sourceEndpointOwnerID?: string;
  sourceEndpointPassword?: string;
  sourceEndpointPort?: string;
  sourceEndpointRegion?: string;
  sourceEndpointRole?: string;
  sourceEndpointUserName?: string;
  sourceEndpointVSwitchID?: string;
  srcCaCertificateOssUrl?: string;
  srcCaCertificatePassword?: string;
  structureInitialization?: boolean;
  synchronizationDirection?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      dataCheckConfigure: 'DataCheckConfigure',
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      dbList: 'DbList',
      dedicatedClusterId: 'DedicatedClusterId',
      delayNotice: 'DelayNotice',
      delayPhone: 'DelayPhone',
      delayRuleTime: 'DelayRuleTime',
      destCaCertificateOssUrl: 'DestCaCertificateOssUrl',
      destCaCertificatePassword: 'DestCaCertificatePassword',
      destinationEndpointDataBaseName: 'DestinationEndpointDataBaseName',
      destinationEndpointEngineName: 'DestinationEndpointEngineName',
      destinationEndpointIP: 'DestinationEndpointIP',
      destinationEndpointInstanceID: 'DestinationEndpointInstanceID',
      destinationEndpointInstanceType: 'DestinationEndpointInstanceType',
      destinationEndpointOracleSID: 'DestinationEndpointOracleSID',
      destinationEndpointOwnerID: 'DestinationEndpointOwnerID',
      destinationEndpointPassword: 'DestinationEndpointPassword',
      destinationEndpointPort: 'DestinationEndpointPort',
      destinationEndpointRegion: 'DestinationEndpointRegion',
      destinationEndpointRole: 'DestinationEndpointRole',
      destinationEndpointUserName: 'DestinationEndpointUserName',
      disasterRecoveryJob: 'DisasterRecoveryJob',
      dtsBisLabel: 'DtsBisLabel',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      errorNotice: 'ErrorNotice',
      errorPhone: 'ErrorPhone',
      fileOssUrl: 'FileOssUrl',
      jobType: 'JobType',
      maxDu: 'MaxDu',
      minDu: 'MinDu',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      reserve: 'Reserve',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointEngineName: 'SourceEndpointEngineName',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointOwnerID: 'SourceEndpointOwnerID',
      sourceEndpointPassword: 'SourceEndpointPassword',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointRole: 'SourceEndpointRole',
      sourceEndpointUserName: 'SourceEndpointUserName',
      sourceEndpointVSwitchID: 'SourceEndpointVSwitchID',
      srcCaCertificateOssUrl: 'SrcCaCertificateOssUrl',
      srcCaCertificatePassword: 'SrcCaCertificatePassword',
      structureInitialization: 'StructureInitialization',
      synchronizationDirection: 'SynchronizationDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      dataCheckConfigure: 'string',
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      dbList: 'string',
      dedicatedClusterId: 'string',
      delayNotice: 'boolean',
      delayPhone: 'string',
      delayRuleTime: 'number',
      destCaCertificateOssUrl: 'string',
      destCaCertificatePassword: 'string',
      destinationEndpointDataBaseName: 'string',
      destinationEndpointEngineName: 'string',
      destinationEndpointIP: 'string',
      destinationEndpointInstanceID: 'string',
      destinationEndpointInstanceType: 'string',
      destinationEndpointOracleSID: 'string',
      destinationEndpointOwnerID: 'string',
      destinationEndpointPassword: 'string',
      destinationEndpointPort: 'string',
      destinationEndpointRegion: 'string',
      destinationEndpointRole: 'string',
      destinationEndpointUserName: 'string',
      disasterRecoveryJob: 'boolean',
      dtsBisLabel: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      errorNotice: 'boolean',
      errorPhone: 'string',
      fileOssUrl: 'string',
      jobType: 'string',
      maxDu: 'number',
      minDu: 'number',
      ownerId: 'string',
      regionId: 'string',
      reserve: 'string',
      resourceGroupId: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointEngineName: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointOwnerID: 'string',
      sourceEndpointPassword: 'string',
      sourceEndpointPort: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointRole: 'string',
      sourceEndpointUserName: 'string',
      sourceEndpointVSwitchID: 'string',
      srcCaCertificateOssUrl: 'string',
      srcCaCertificatePassword: 'string',
      structureInitialization: 'boolean',
      synchronizationDirection: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureDtsJobAdvanceRequest extends $tea.Model {
  checkpoint?: string;
  dataCheckConfigure?: string;
  dataInitialization?: boolean;
  dataSynchronization?: boolean;
  dbList?: string;
  dedicatedClusterId?: string;
  delayNotice?: boolean;
  delayPhone?: string;
  delayRuleTime?: number;
  destCaCertificateOssUrl?: string;
  destCaCertificatePassword?: string;
  destinationEndpointDataBaseName?: string;
  destinationEndpointEngineName?: string;
  destinationEndpointIP?: string;
  destinationEndpointInstanceID?: string;
  destinationEndpointInstanceType?: string;
  destinationEndpointOracleSID?: string;
  destinationEndpointOwnerID?: string;
  destinationEndpointPassword?: string;
  destinationEndpointPort?: string;
  destinationEndpointRegion?: string;
  destinationEndpointRole?: string;
  destinationEndpointUserName?: string;
  disasterRecoveryJob?: boolean;
  dtsBisLabel?: string;
  dtsInstanceId?: string;
  dtsJobId?: string;
  dtsJobName?: string;
  errorNotice?: boolean;
  errorPhone?: string;
  fileOssUrlObject?: Readable;
  jobType?: string;
  maxDu?: number;
  minDu?: number;
  ownerId?: string;
  regionId?: string;
  reserve?: string;
  resourceGroupId?: string;
  sourceEndpointDatabaseName?: string;
  sourceEndpointEngineName?: string;
  sourceEndpointIP?: string;
  sourceEndpointInstanceID?: string;
  sourceEndpointInstanceType?: string;
  sourceEndpointOracleSID?: string;
  sourceEndpointOwnerID?: string;
  sourceEndpointPassword?: string;
  sourceEndpointPort?: string;
  sourceEndpointRegion?: string;
  sourceEndpointRole?: string;
  sourceEndpointUserName?: string;
  sourceEndpointVSwitchID?: string;
  srcCaCertificateOssUrl?: string;
  srcCaCertificatePassword?: string;
  structureInitialization?: boolean;
  synchronizationDirection?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      dataCheckConfigure: 'DataCheckConfigure',
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      dbList: 'DbList',
      dedicatedClusterId: 'DedicatedClusterId',
      delayNotice: 'DelayNotice',
      delayPhone: 'DelayPhone',
      delayRuleTime: 'DelayRuleTime',
      destCaCertificateOssUrl: 'DestCaCertificateOssUrl',
      destCaCertificatePassword: 'DestCaCertificatePassword',
      destinationEndpointDataBaseName: 'DestinationEndpointDataBaseName',
      destinationEndpointEngineName: 'DestinationEndpointEngineName',
      destinationEndpointIP: 'DestinationEndpointIP',
      destinationEndpointInstanceID: 'DestinationEndpointInstanceID',
      destinationEndpointInstanceType: 'DestinationEndpointInstanceType',
      destinationEndpointOracleSID: 'DestinationEndpointOracleSID',
      destinationEndpointOwnerID: 'DestinationEndpointOwnerID',
      destinationEndpointPassword: 'DestinationEndpointPassword',
      destinationEndpointPort: 'DestinationEndpointPort',
      destinationEndpointRegion: 'DestinationEndpointRegion',
      destinationEndpointRole: 'DestinationEndpointRole',
      destinationEndpointUserName: 'DestinationEndpointUserName',
      disasterRecoveryJob: 'DisasterRecoveryJob',
      dtsBisLabel: 'DtsBisLabel',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      errorNotice: 'ErrorNotice',
      errorPhone: 'ErrorPhone',
      fileOssUrlObject: 'FileOssUrl',
      jobType: 'JobType',
      maxDu: 'MaxDu',
      minDu: 'MinDu',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      reserve: 'Reserve',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointEngineName: 'SourceEndpointEngineName',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointOwnerID: 'SourceEndpointOwnerID',
      sourceEndpointPassword: 'SourceEndpointPassword',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointRole: 'SourceEndpointRole',
      sourceEndpointUserName: 'SourceEndpointUserName',
      sourceEndpointVSwitchID: 'SourceEndpointVSwitchID',
      srcCaCertificateOssUrl: 'SrcCaCertificateOssUrl',
      srcCaCertificatePassword: 'SrcCaCertificatePassword',
      structureInitialization: 'StructureInitialization',
      synchronizationDirection: 'SynchronizationDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      dataCheckConfigure: 'string',
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      dbList: 'string',
      dedicatedClusterId: 'string',
      delayNotice: 'boolean',
      delayPhone: 'string',
      delayRuleTime: 'number',
      destCaCertificateOssUrl: 'string',
      destCaCertificatePassword: 'string',
      destinationEndpointDataBaseName: 'string',
      destinationEndpointEngineName: 'string',
      destinationEndpointIP: 'string',
      destinationEndpointInstanceID: 'string',
      destinationEndpointInstanceType: 'string',
      destinationEndpointOracleSID: 'string',
      destinationEndpointOwnerID: 'string',
      destinationEndpointPassword: 'string',
      destinationEndpointPort: 'string',
      destinationEndpointRegion: 'string',
      destinationEndpointRole: 'string',
      destinationEndpointUserName: 'string',
      disasterRecoveryJob: 'boolean',
      dtsBisLabel: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      errorNotice: 'boolean',
      errorPhone: 'string',
      fileOssUrlObject: 'Readable',
      jobType: 'string',
      maxDu: 'number',
      minDu: 'number',
      ownerId: 'string',
      regionId: 'string',
      reserve: 'string',
      resourceGroupId: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointEngineName: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointOwnerID: 'string',
      sourceEndpointPassword: 'string',
      sourceEndpointPort: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointRole: 'string',
      sourceEndpointUserName: 'string',
      sourceEndpointVSwitchID: 'string',
      srcCaCertificateOssUrl: 'string',
      srcCaCertificatePassword: 'string',
      structureInitialization: 'boolean',
      synchronizationDirection: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureDtsJobResponseBody extends $tea.Model {
  dtsInstanceId?: string;
  dtsJobId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureDtsJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigureDtsJobResponseBody;
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
      body: ConfigureDtsJobResponseBody,
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
  accountId?: string;
  checkpoint?: string;
  migrationJobId?: string;
  migrationJobName?: string;
  migrationObject?: string;
  migrationReserved?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationEndpoint: 'DestinationEndpoint',
      migrationMode: 'MigrationMode',
      sourceEndpoint: 'SourceEndpoint',
      accountId: 'AccountId',
      checkpoint: 'Checkpoint',
      migrationJobId: 'MigrationJobId',
      migrationJobName: 'MigrationJobName',
      migrationObject: 'MigrationObject',
      migrationReserved: 'MigrationReserved',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationEndpoint: ConfigureMigrationJobRequestDestinationEndpoint,
      migrationMode: ConfigureMigrationJobRequestMigrationMode,
      sourceEndpoint: ConfigureMigrationJobRequestSourceEndpoint,
      accountId: 'string',
      checkpoint: 'string',
      migrationJobId: 'string',
      migrationJobName: 'string',
      migrationObject: 'string',
      migrationReserved: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigureMigrationJobResponseBody;
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

export class ConfigureMigrationJobAlertRequest extends $tea.Model {
  accountId?: string;
  delayAlertPhone?: string;
  delayAlertStatus?: string;
  delayOverSeconds?: string;
  errorAlertPhone?: string;
  errorAlertStatus?: string;
  migrationJobId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      delayAlertPhone: 'DelayAlertPhone',
      delayAlertStatus: 'DelayAlertStatus',
      delayOverSeconds: 'DelayOverSeconds',
      errorAlertPhone: 'ErrorAlertPhone',
      errorAlertStatus: 'ErrorAlertStatus',
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      delayAlertPhone: 'string',
      delayAlertStatus: 'string',
      delayOverSeconds: 'string',
      errorAlertPhone: 'string',
      errorAlertStatus: 'string',
      migrationJobId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureMigrationJobAlertResponseBody extends $tea.Model {
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

export class ConfigureMigrationJobAlertResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigureMigrationJobAlertResponseBody;
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
      body: ConfigureMigrationJobAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionRequest extends $tea.Model {
  checkpoint?: string;
  dbList?: string;
  dedicatedClusterId?: string;
  delayNotice?: boolean;
  delayPhone?: string;
  delayRuleTime?: number;
  dtsBisLabel?: string;
  dtsInstanceId?: string;
  dtsJobId?: string;
  dtsJobName?: string;
  errorNotice?: boolean;
  errorPhone?: string;
  maxDu?: number;
  minDu?: number;
  regionId?: string;
  reserve?: string;
  resourceGroupId?: string;
  sourceEndpointDatabaseName?: string;
  sourceEndpointEngineName?: string;
  sourceEndpointIP?: string;
  sourceEndpointInstanceID?: string;
  sourceEndpointInstanceType?: string;
  sourceEndpointOracleSID?: string;
  sourceEndpointOwnerID?: string;
  sourceEndpointPassword?: string;
  sourceEndpointPort?: string;
  sourceEndpointRegion?: string;
  sourceEndpointRole?: string;
  sourceEndpointUserName?: string;
  subscriptionDataTypeDDL?: boolean;
  subscriptionDataTypeDML?: boolean;
  subscriptionInstanceNetworkType?: string;
  subscriptionInstanceVPCId?: string;
  subscriptionInstanceVSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      dbList: 'DbList',
      dedicatedClusterId: 'DedicatedClusterId',
      delayNotice: 'DelayNotice',
      delayPhone: 'DelayPhone',
      delayRuleTime: 'DelayRuleTime',
      dtsBisLabel: 'DtsBisLabel',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      errorNotice: 'ErrorNotice',
      errorPhone: 'ErrorPhone',
      maxDu: 'MaxDu',
      minDu: 'MinDu',
      regionId: 'RegionId',
      reserve: 'Reserve',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointEngineName: 'SourceEndpointEngineName',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointOwnerID: 'SourceEndpointOwnerID',
      sourceEndpointPassword: 'SourceEndpointPassword',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointRole: 'SourceEndpointRole',
      sourceEndpointUserName: 'SourceEndpointUserName',
      subscriptionDataTypeDDL: 'SubscriptionDataTypeDDL',
      subscriptionDataTypeDML: 'SubscriptionDataTypeDML',
      subscriptionInstanceNetworkType: 'SubscriptionInstanceNetworkType',
      subscriptionInstanceVPCId: 'SubscriptionInstanceVPCId',
      subscriptionInstanceVSwitchId: 'SubscriptionInstanceVSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      dbList: 'string',
      dedicatedClusterId: 'string',
      delayNotice: 'boolean',
      delayPhone: 'string',
      delayRuleTime: 'number',
      dtsBisLabel: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      errorNotice: 'boolean',
      errorPhone: 'string',
      maxDu: 'number',
      minDu: 'number',
      regionId: 'string',
      reserve: 'string',
      resourceGroupId: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointEngineName: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointOwnerID: 'string',
      sourceEndpointPassword: 'string',
      sourceEndpointPort: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointRole: 'string',
      sourceEndpointUserName: 'string',
      subscriptionDataTypeDDL: 'boolean',
      subscriptionDataTypeDML: 'boolean',
      subscriptionInstanceNetworkType: 'string',
      subscriptionInstanceVPCId: 'string',
      subscriptionInstanceVSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionResponseBody extends $tea.Model {
  dtsInstanceId?: string;
  dtsJobId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigureSubscriptionResponseBody;
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
  accountId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  subscriptionInstanceId?: string;
  subscriptionInstanceName?: string;
  subscriptionInstanceNetworkType?: string;
  subscriptionObject?: string;
  static names(): { [key: string]: string } {
    return {
      sourceEndpoint: 'SourceEndpoint',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionInstance: 'SubscriptionInstance',
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      subscriptionInstanceNetworkType: 'SubscriptionInstanceNetworkType',
      subscriptionObject: 'SubscriptionObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceEndpoint: ConfigureSubscriptionInstanceRequestSourceEndpoint,
      subscriptionDataType: ConfigureSubscriptionInstanceRequestSubscriptionDataType,
      subscriptionInstance: ConfigureSubscriptionInstanceRequestSubscriptionInstance,
      accountId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subscriptionInstanceId: 'string',
      subscriptionInstanceName: 'string',
      subscriptionInstanceNetworkType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigureSubscriptionInstanceResponseBody;
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

export class ConfigureSubscriptionInstanceAlertRequest extends $tea.Model {
  accountId?: string;
  delayAlertPhone?: string;
  delayAlertStatus?: string;
  delayOverSeconds?: string;
  errorAlertPhone?: string;
  errorAlertStatus?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      delayAlertPhone: 'DelayAlertPhone',
      delayAlertStatus: 'DelayAlertStatus',
      delayOverSeconds: 'DelayOverSeconds',
      errorAlertPhone: 'ErrorAlertPhone',
      errorAlertStatus: 'ErrorAlertStatus',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      delayAlertPhone: 'string',
      delayAlertStatus: 'string',
      delayOverSeconds: 'string',
      errorAlertPhone: 'string',
      errorAlertStatus: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subscriptionInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionInstanceAlertResponseBody extends $tea.Model {
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

export class ConfigureSubscriptionInstanceAlertResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigureSubscriptionInstanceAlertResponseBody;
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
      body: ConfigureSubscriptionInstanceAlertResponseBody,
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
  accountId?: string;
  checkpoint?: string;
  dataInitialization?: boolean;
  migrationReserved?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  structureInitialization?: boolean;
  synchronizationDirection?: string;
  synchronizationJobId?: string;
  synchronizationJobName?: string;
  synchronizationObjects?: string;
  static names(): { [key: string]: string } {
    return {
      destinationEndpoint: 'DestinationEndpoint',
      partitionKey: 'PartitionKey',
      sourceEndpoint: 'SourceEndpoint',
      accountId: 'AccountId',
      checkpoint: 'Checkpoint',
      dataInitialization: 'DataInitialization',
      migrationReserved: 'MigrationReserved',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      structureInitialization: 'StructureInitialization',
      synchronizationDirection: 'SynchronizationDirection',
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
      accountId: 'string',
      checkpoint: 'string',
      dataInitialization: 'boolean',
      migrationReserved: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      structureInitialization: 'boolean',
      synchronizationDirection: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigureSynchronizationJobResponseBody;
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

export class ConfigureSynchronizationJobAlertRequest extends $tea.Model {
  accountId?: string;
  delayAlertPhone?: string;
  delayAlertStatus?: string;
  delayOverSeconds?: string;
  errorAlertPhone?: string;
  errorAlertStatus?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationDirection?: string;
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      delayAlertPhone: 'DelayAlertPhone',
      delayAlertStatus: 'DelayAlertStatus',
      delayOverSeconds: 'DelayOverSeconds',
      errorAlertPhone: 'ErrorAlertPhone',
      errorAlertStatus: 'ErrorAlertStatus',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      delayAlertPhone: 'string',
      delayAlertStatus: 'string',
      delayOverSeconds: 'string',
      errorAlertPhone: 'string',
      errorAlertStatus: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
      synchronizationJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobAlertResponseBody extends $tea.Model {
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

export class ConfigureSynchronizationJobAlertResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigureSynchronizationJobAlertResponseBody;
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
      body: ConfigureSynchronizationJobAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobReplicatorCompareRequest extends $tea.Model {
  accountId?: string;
  clientToken?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationDirection?: string;
  synchronizationJobId?: string;
  synchronizationReplicatorCompareEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationReplicatorCompareEnable: 'SynchronizationReplicatorCompareEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
      synchronizationJobId: 'string',
      synchronizationReplicatorCompareEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSynchronizationJobReplicatorCompareResponseBody extends $tea.Model {
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

export class ConfigureSynchronizationJobReplicatorCompareResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigureSynchronizationJobReplicatorCompareResponseBody;
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
      body: ConfigureSynchronizationJobReplicatorCompareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountJobByConditionRequest extends $tea.Model {
  destDbType?: string;
  groupId?: string;
  jobType?: string;
  params?: string;
  region?: string;
  regionId?: string;
  resourceGroupId?: string;
  srcDbType?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      destDbType: 'DestDbType',
      groupId: 'GroupId',
      jobType: 'JobType',
      params: 'Params',
      region: 'Region',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      srcDbType: 'SrcDbType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destDbType: 'string',
      groupId: 'string',
      jobType: 'string',
      params: 'string',
      region: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      srcDbType: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountJobByConditionResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountJobByConditionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CountJobByConditionResponseBody;
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
      body: CountJobByConditionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerChannelRequest extends $tea.Model {
  consumerGroupName?: string;
  consumerGroupPassword?: string;
  consumerGroupUserName?: string;
  dtsInstanceId?: string;
  dtsJobId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupName: 'ConsumerGroupName',
      consumerGroupPassword: 'ConsumerGroupPassword',
      consumerGroupUserName: 'ConsumerGroupUserName',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupName: 'string',
      consumerGroupPassword: 'string',
      consumerGroupUserName: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerChannelResponseBody extends $tea.Model {
  consumerGroupID?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupID: 'ConsumerGroupID',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupID: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerChannelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateConsumerChannelResponseBody;
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
      body: CreateConsumerChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupRequest extends $tea.Model {
  accountId?: string;
  consumerGroupName?: string;
  consumerGroupPassword?: string;
  consumerGroupUserName?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      consumerGroupName: 'ConsumerGroupName',
      consumerGroupPassword: 'ConsumerGroupPassword',
      consumerGroupUserName: 'ConsumerGroupUserName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      consumerGroupName: 'string',
      consumerGroupPassword: 'string',
      consumerGroupUserName: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subscriptionInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupResponseBody extends $tea.Model {
  consumerGroupID?: string;
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupID: 'ConsumerGroupID',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupID: 'string',
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

export class CreateConsumerGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateConsumerGroupResponseBody;
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
      body: CreateConsumerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedClusterMonitorRuleRequest extends $tea.Model {
  cpuAlarmThreshold?: number;
  dedicatedClusterId?: string;
  diskAlarmThreshold?: number;
  duAlarmThreshold?: number;
  instanceId?: string;
  memAlarmThreshold?: number;
  noticeSwitch?: number;
  ownerId?: string;
  phones?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cpuAlarmThreshold: 'CpuAlarmThreshold',
      dedicatedClusterId: 'DedicatedClusterId',
      diskAlarmThreshold: 'DiskAlarmThreshold',
      duAlarmThreshold: 'DuAlarmThreshold',
      instanceId: 'InstanceId',
      memAlarmThreshold: 'MemAlarmThreshold',
      noticeSwitch: 'NoticeSwitch',
      ownerId: 'OwnerId',
      phones: 'Phones',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuAlarmThreshold: 'number',
      dedicatedClusterId: 'string',
      diskAlarmThreshold: 'number',
      duAlarmThreshold: 'number',
      instanceId: 'string',
      memAlarmThreshold: 'number',
      noticeSwitch: 'number',
      ownerId: 'string',
      phones: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedClusterMonitorRuleResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedClusterMonitorRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDedicatedClusterMonitorRuleResponseBody;
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
      body: CreateDedicatedClusterMonitorRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDtsInstanceRequest extends $tea.Model {
  autoPay?: boolean;
  autoStart?: boolean;
  computeUnit?: number;
  databaseCount?: number;
  destinationEndpointEngineName?: string;
  destinationRegion?: string;
  du?: number;
  feeType?: string;
  instanceClass?: string;
  jobId?: string;
  maxDu?: number;
  minDu?: number;
  payType?: string;
  period?: string;
  quantity?: number;
  regionId?: string;
  resourceGroupId?: string;
  sourceEndpointEngineName?: string;
  sourceRegion?: string;
  syncArchitecture?: string;
  type?: string;
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoStart: 'AutoStart',
      computeUnit: 'ComputeUnit',
      databaseCount: 'DatabaseCount',
      destinationEndpointEngineName: 'DestinationEndpointEngineName',
      destinationRegion: 'DestinationRegion',
      du: 'Du',
      feeType: 'FeeType',
      instanceClass: 'InstanceClass',
      jobId: 'JobId',
      maxDu: 'MaxDu',
      minDu: 'MinDu',
      payType: 'PayType',
      period: 'Period',
      quantity: 'Quantity',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointEngineName: 'SourceEndpointEngineName',
      sourceRegion: 'SourceRegion',
      syncArchitecture: 'SyncArchitecture',
      type: 'Type',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoStart: 'boolean',
      computeUnit: 'number',
      databaseCount: 'number',
      destinationEndpointEngineName: 'string',
      destinationRegion: 'string',
      du: 'number',
      feeType: 'string',
      instanceClass: 'string',
      jobId: 'string',
      maxDu: 'number',
      minDu: 'number',
      payType: 'string',
      period: 'string',
      quantity: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceEndpointEngineName: 'string',
      sourceRegion: 'string',
      syncArchitecture: 'string',
      type: 'string',
      usedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDtsInstanceResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  instanceId?: string;
  jobId?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      instanceId: 'string',
      jobId: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDtsInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDtsInstanceResponseBody;
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
      body: CreateDtsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobMonitorRuleRequest extends $tea.Model {
  delayRuleTime?: number;
  dtsJobId?: string;
  noticeValue?: number;
  period?: number;
  phone?: string;
  regionId?: string;
  resourceGroupId?: string;
  state?: string;
  times?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      delayRuleTime: 'DelayRuleTime',
      dtsJobId: 'DtsJobId',
      noticeValue: 'NoticeValue',
      period: 'Period',
      phone: 'Phone',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      times: 'Times',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayRuleTime: 'number',
      dtsJobId: 'string',
      noticeValue: 'number',
      period: 'number',
      phone: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      state: 'string',
      times: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobMonitorRuleResponseBody extends $tea.Model {
  code?: string;
  dtsJobId?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dtsJobId: 'DtsJobId',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dtsJobId: 'string',
      dynamicMessage: 'string',
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

export class CreateJobMonitorRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateJobMonitorRuleResponseBody;
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
      body: CreateJobMonitorRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMigrationJobRequest extends $tea.Model {
  accountId?: string;
  clientToken?: string;
  migrationJobClass?: string;
  ownerId?: string;
  region?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      migrationJobClass: 'MigrationJobClass',
      ownerId: 'OwnerId',
      region: 'Region',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      migrationJobClass: 'string',
      ownerId: 'string',
      region: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMigrationJobResponseBody;
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

export class CreateReverseDtsJobRequest extends $tea.Model {
  dtsJobId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReverseDtsJobResponseBody extends $tea.Model {
  dtsInstanceId?: string;
  dtsJobId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReverseDtsJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateReverseDtsJobResponseBody;
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
      body: CreateReverseDtsJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionInstanceRequest extends $tea.Model {
  sourceEndpoint?: CreateSubscriptionInstanceRequestSourceEndpoint;
  accountId?: string;
  clientToken?: string;
  ownerId?: string;
  payType?: string;
  period?: string;
  region?: string;
  regionId?: string;
  resourceGroupId?: string;
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceEndpoint: 'SourceEndpoint',
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      region: 'Region',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceEndpoint: CreateSubscriptionInstanceRequestSourceEndpoint,
      accountId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      payType: 'string',
      period: 'string',
      region: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSubscriptionInstanceResponseBody;
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
  accountId?: string;
  clientToken?: string;
  DBInstanceCount?: number;
  destRegion?: string;
  ownerId?: string;
  payType?: string;
  period?: string;
  regionId?: string;
  resourceGroupId?: string;
  sourceRegion?: string;
  synchronizationJobClass?: string;
  topology?: string;
  usedTime?: number;
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationEndpoint: 'DestinationEndpoint',
      sourceEndpoint: 'SourceEndpoint',
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      DBInstanceCount: 'DBInstanceCount',
      destRegion: 'DestRegion',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceRegion: 'SourceRegion',
      synchronizationJobClass: 'SynchronizationJobClass',
      topology: 'Topology',
      usedTime: 'UsedTime',
      networkType: 'networkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationEndpoint: CreateSynchronizationJobRequestDestinationEndpoint,
      sourceEndpoint: CreateSynchronizationJobRequestSourceEndpoint,
      accountId: 'string',
      clientToken: 'string',
      DBInstanceCount: 'number',
      destRegion: 'string',
      ownerId: 'string',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceRegion: 'string',
      synchronizationJobClass: 'string',
      topology: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSynchronizationJobResponseBody;
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

export class DeleteConsumerChannelRequest extends $tea.Model {
  consumerGroupId?: string;
  dtsInstanceId?: string;
  dtsJobId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'ConsumerGroupId',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerChannelResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerChannelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConsumerChannelResponseBody;
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
      body: DeleteConsumerChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupRequest extends $tea.Model {
  accountId?: string;
  consumerGroupID?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      consumerGroupID: 'ConsumerGroupID',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      consumerGroupID: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subscriptionInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupResponseBody extends $tea.Model {
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

export class DeleteConsumerGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConsumerGroupResponseBody;
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
      body: DeleteConsumerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDtsJobRequest extends $tea.Model {
  dtsInstanceId?: string;
  dtsJobId?: string;
  jobType?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationDirection?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      jobType: 'JobType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      jobType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDtsJobResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class DeleteDtsJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDtsJobResponseBody;
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
      body: DeleteDtsJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDtsJobsRequest extends $tea.Model {
  dtsJobIds?: string;
  regionId?: string;
  resourceGroupId?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsJobIds: 'DtsJobIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobIds: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDtsJobsResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class DeleteDtsJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDtsJobsResponseBody;
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
      body: DeleteDtsJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMigrationJobRequest extends $tea.Model {
  accountId?: string;
  migrationJobId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      migrationJobId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMigrationJobResponseBody;
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
  accountId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSubscriptionInstanceResponseBody;
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
  accountId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSynchronizationJobResponseBody;
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

export class DescribeChannelAccountRequest extends $tea.Model {
  dtsJobId?: string;
  ownerId?: string;
  region?: string;
  regionId?: string;
  resourceGroupId?: string;
  tags?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      ownerId: 'OwnerId',
      region: 'Region',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      ownerId: 'string',
      region: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAccountResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  password?: string;
  requestId?: string;
  success?: boolean;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      password: 'Password',
      requestId: 'RequestId',
      success: 'Success',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      password: 'string',
      requestId: 'string',
      success: 'boolean',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelAccountResponseBody;
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
      body: DescribeChannelAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckJobsRequest extends $tea.Model {
  checkType?: number;
  instanceId?: string;
  jobName?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      instanceId: 'InstanceId',
      jobName: 'JobName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      instanceId: 'string',
      jobName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckJobsResponseBody extends $tea.Model {
  checkJobs?: DescribeCheckJobsResponseBodyCheckJobs[];
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  success?: boolean;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkJobs: 'CheckJobs',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkJobs: { 'type': 'array', 'itemType': DescribeCheckJobsResponseBodyCheckJobs },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'boolean',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCheckJobsResponseBody;
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
      body: DescribeCheckJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterOperateLogsRequest extends $tea.Model {
  accountId?: string;
  clientToken?: string;
  dedicatedClusterId?: string;
  dtsJobId?: string;
  endTime?: number;
  ownerID?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      dedicatedClusterId: 'DedicatedClusterId',
      dtsJobId: 'DtsJobId',
      endTime: 'EndTime',
      ownerID: 'OwnerID',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      dedicatedClusterId: 'string',
      dtsJobId: 'string',
      endTime: 'number',
      ownerID: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterOperateLogsResponseBody extends $tea.Model {
  code?: string;
  dataPoints?: DescribeClusterOperateLogsResponseBodyDataPoints[];
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  success?: boolean;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataPoints: 'DataPoints',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataPoints: { 'type': 'array', 'itemType': DescribeClusterOperateLogsResponseBodyDataPoints },
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'boolean',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterOperateLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterOperateLogsResponseBody;
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
      body: DescribeClusterOperateLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterUsedUtilizationRequest extends $tea.Model {
  accountId?: string;
  clientToken?: string;
  dedicatedClusterId?: string;
  dtsJobId?: string;
  env?: string;
  metricType?: string;
  ownerID?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      dedicatedClusterId: 'DedicatedClusterId',
      dtsJobId: 'DtsJobId',
      env: 'Env',
      metricType: 'MetricType',
      ownerID: 'OwnerID',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      dedicatedClusterId: 'string',
      dtsJobId: 'string',
      env: 'string',
      metricType: 'string',
      ownerID: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterUsedUtilizationResponseBody extends $tea.Model {
  code?: string;
  cpuTotal?: number;
  dedicatedClusterId?: string;
  diskTotal?: number;
  diskUsed?: number;
  duTotal?: number;
  duUsed?: number;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  memoryTotal?: number;
  memoryUsed?: number;
  memoryUsedPercentage?: number;
  requestId?: string;
  success?: boolean;
  taskRunning?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cpuTotal: 'CpuTotal',
      dedicatedClusterId: 'DedicatedClusterId',
      diskTotal: 'DiskTotal',
      diskUsed: 'DiskUsed',
      duTotal: 'DuTotal',
      duUsed: 'DuUsed',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      memoryTotal: 'MemoryTotal',
      memoryUsed: 'MemoryUsed',
      memoryUsedPercentage: 'MemoryUsedPercentage',
      requestId: 'RequestId',
      success: 'Success',
      taskRunning: 'TaskRunning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cpuTotal: 'number',
      dedicatedClusterId: 'string',
      diskTotal: 'number',
      diskUsed: 'number',
      duTotal: 'number',
      duUsed: 'number',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      memoryTotal: 'number',
      memoryUsed: 'number',
      memoryUsedPercentage: 'number',
      requestId: 'string',
      success: 'boolean',
      taskRunning: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterUsedUtilizationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterUsedUtilizationResponseBody;
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
      body: DescribeClusterUsedUtilizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionStatusRequest extends $tea.Model {
  destinationEndpointArchitecture?: string;
  destinationEndpointDatabaseName?: string;
  destinationEndpointEngineName?: string;
  destinationEndpointIP?: string;
  destinationEndpointInstanceID?: string;
  destinationEndpointInstanceType?: string;
  destinationEndpointOracleSID?: string;
  destinationEndpointPassword?: string;
  destinationEndpointPort?: string;
  destinationEndpointRegion?: string;
  destinationEndpointUserName?: string;
  regionId?: string;
  resourceGroupId?: string;
  sourceEndpointArchitecture?: string;
  sourceEndpointDatabaseName?: string;
  sourceEndpointEngineName?: string;
  sourceEndpointIP?: string;
  sourceEndpointInstanceID?: string;
  sourceEndpointInstanceType?: string;
  sourceEndpointOracleSID?: string;
  sourceEndpointPassword?: string;
  sourceEndpointPort?: string;
  sourceEndpointRegion?: string;
  sourceEndpointUserName?: string;
  static names(): { [key: string]: string } {
    return {
      destinationEndpointArchitecture: 'DestinationEndpointArchitecture',
      destinationEndpointDatabaseName: 'DestinationEndpointDatabaseName',
      destinationEndpointEngineName: 'DestinationEndpointEngineName',
      destinationEndpointIP: 'DestinationEndpointIP',
      destinationEndpointInstanceID: 'DestinationEndpointInstanceID',
      destinationEndpointInstanceType: 'DestinationEndpointInstanceType',
      destinationEndpointOracleSID: 'DestinationEndpointOracleSID',
      destinationEndpointPassword: 'DestinationEndpointPassword',
      destinationEndpointPort: 'DestinationEndpointPort',
      destinationEndpointRegion: 'DestinationEndpointRegion',
      destinationEndpointUserName: 'DestinationEndpointUserName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointArchitecture: 'SourceEndpointArchitecture',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointEngineName: 'SourceEndpointEngineName',
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
      destinationEndpointArchitecture: 'string',
      destinationEndpointDatabaseName: 'string',
      destinationEndpointEngineName: 'string',
      destinationEndpointIP: 'string',
      destinationEndpointInstanceID: 'string',
      destinationEndpointInstanceType: 'string',
      destinationEndpointOracleSID: 'string',
      destinationEndpointPassword: 'string',
      destinationEndpointPort: 'string',
      destinationEndpointRegion: 'string',
      destinationEndpointUserName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceEndpointArchitecture: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointEngineName: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointPassword: 'string',
      sourceEndpointPort: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionStatusResponseBody extends $tea.Model {
  destinationConnectionStatus?: { [key: string]: any };
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  sourceConnectionStatus?: { [key: string]: any };
  success?: string;
  static names(): { [key: string]: string } {
    return {
      destinationConnectionStatus: 'DestinationConnectionStatus',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      sourceConnectionStatus: 'SourceConnectionStatus',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationConnectionStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      sourceConnectionStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeConnectionStatusResponseBody;
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
      body: DescribeConnectionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerChannelRequest extends $tea.Model {
  dtsInstanceId?: string;
  dtsJobId?: string;
  pageNumber?: number;
  pageSize?: number;
  parentChannelId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentChannelId: 'ParentChannelId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentChannelId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerChannelResponseBody extends $tea.Model {
  consumerChannels?: DescribeConsumerChannelResponseBodyConsumerChannels[];
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  success?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      consumerChannels: 'ConsumerChannels',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerChannels: { 'type': 'array', 'itemType': DescribeConsumerChannelResponseBodyConsumerChannels },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerChannelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeConsumerChannelResponseBody;
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
      body: DescribeConsumerChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerGroupRequest extends $tea.Model {
  accountId?: string;
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      subscriptionInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerGroupResponseBody extends $tea.Model {
  consumerChannels?: DescribeConsumerGroupResponseBodyConsumerChannels;
  errCode?: string;
  errMessage?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  success?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      consumerChannels: 'ConsumerChannels',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerChannels: DescribeConsumerGroupResponseBodyConsumerChannels,
      errCode: 'string',
      errMessage: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeConsumerGroupResponseBody;
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
      body: DescribeConsumerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDTSIPRequest extends $tea.Model {
  destinationEndpointRegion?: string;
  regionId?: string;
  resourceGroupId?: string;
  sourceEndpointRegion?: string;
  static names(): { [key: string]: string } {
    return {
      destinationEndpointRegion: 'DestinationEndpointRegion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointRegion: 'SourceEndpointRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationEndpointRegion: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceEndpointRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDTSIPResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class DescribeDTSIPResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDTSIPResponseBody;
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
      body: DescribeDTSIPResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCheckReportUrlRequest extends $tea.Model {
  checkType?: number;
  dbName?: string;
  dtsJobId?: string;
  resourceGroupId?: string;
  tbName?: string;
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      dbName: 'DbName',
      dtsJobId: 'DtsJobId',
      resourceGroupId: 'ResourceGroupId',
      tbName: 'TbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      dbName: 'string',
      dtsJobId: 'string',
      resourceGroupId: 'string',
      tbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCheckReportUrlResponseBody extends $tea.Model {
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCheckReportUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataCheckReportUrlResponseBody;
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
      body: DescribeDataCheckReportUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCheckTableDetailsRequest extends $tea.Model {
  checkType?: number;
  dtsJobId?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  schemaName?: string;
  status?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      dtsJobId: 'DtsJobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      schemaName: 'SchemaName',
      status: 'Status',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      dtsJobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      schemaName: 'string',
      status: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCheckTableDetailsResponseBody extends $tea.Model {
  diffTableCount?: number;
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  finishedCount?: number;
  httpStatusCode?: number;
  pageNumber?: number;
  requestId?: string;
  success?: boolean;
  tableDetails?: DescribeDataCheckTableDetailsResponseBodyTableDetails[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      diffTableCount: 'DiffTableCount',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      finishedCount: 'FinishedCount',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      success: 'Success',
      tableDetails: 'TableDetails',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diffTableCount: 'number',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      finishedCount: 'number',
      httpStatusCode: 'number',
      pageNumber: 'number',
      requestId: 'string',
      success: 'boolean',
      tableDetails: { 'type': 'array', 'itemType': DescribeDataCheckTableDetailsResponseBodyTableDetails },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCheckTableDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataCheckTableDetailsResponseBody;
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
      body: DescribeDataCheckTableDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCheckTableDiffDetailsRequest extends $tea.Model {
  checkType?: number;
  dbName?: string;
  dtsJobId?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  tbName?: string;
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      dbName: 'DbName',
      dtsJobId: 'DtsJobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      tbName: 'TbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      dbName: 'string',
      dtsJobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      tbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCheckTableDiffDetailsResponseBody extends $tea.Model {
  dbName?: string;
  diffCount?: number;
  diffDetails?: DescribeDataCheckTableDiffDetailsResponseBodyDiffDetails[];
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  instanceId?: string;
  requestId?: string;
  success?: boolean;
  tbName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      diffCount: 'DiffCount',
      diffDetails: 'DiffDetails',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      success: 'Success',
      tbName: 'TbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      diffCount: 'number',
      diffDetails: { 'type': 'array', 'itemType': DescribeDataCheckTableDiffDetailsResponseBodyDiffDetails },
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      requestId: 'string',
      success: 'boolean',
      tbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCheckTableDiffDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataCheckTableDiffDetailsResponseBody;
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
      body: DescribeDataCheckTableDiffDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterRequest extends $tea.Model {
  dedicatedClusterId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedClusterId: 'DedicatedClusterId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedClusterId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterResponseBody extends $tea.Model {
  cpuUtilization?: number;
  dedicatedClusterId?: string;
  dedicatedClusterName?: string;
  diskUtilization?: number;
  dtsInstanceID?: string;
  du?: number;
  duUtilization?: number;
  errCode?: string;
  errMessage?: string;
  gmtCreated?: number;
  gmtFinished?: number;
  httpStatusCode?: string;
  memUtilization?: number;
  nodeCount?: number;
  oversoldDu?: number;
  regionId?: string;
  requestId?: string;
  state?: string;
  success?: string;
  totalCpuCore?: number;
  totalDiskGBSize?: number;
  totalMemGBSize?: number;
  usedCpuCore?: number;
  usedDiskGBSize?: number;
  usedDu?: number;
  usedMemGBSize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuUtilization: 'CpuUtilization',
      dedicatedClusterId: 'DedicatedClusterId',
      dedicatedClusterName: 'DedicatedClusterName',
      diskUtilization: 'DiskUtilization',
      dtsInstanceID: 'DtsInstanceID',
      du: 'Du',
      duUtilization: 'DuUtilization',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      gmtCreated: 'GmtCreated',
      gmtFinished: 'GmtFinished',
      httpStatusCode: 'HttpStatusCode',
      memUtilization: 'MemUtilization',
      nodeCount: 'NodeCount',
      oversoldDu: 'OversoldDu',
      regionId: 'RegionId',
      requestId: 'RequestId',
      state: 'State',
      success: 'Success',
      totalCpuCore: 'TotalCpuCore',
      totalDiskGBSize: 'TotalDiskGBSize',
      totalMemGBSize: 'TotalMemGBSize',
      usedCpuCore: 'UsedCpuCore',
      usedDiskGBSize: 'UsedDiskGBSize',
      usedDu: 'UsedDu',
      usedMemGBSize: 'UsedMemGBSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuUtilization: 'number',
      dedicatedClusterId: 'string',
      dedicatedClusterName: 'string',
      diskUtilization: 'number',
      dtsInstanceID: 'string',
      du: 'number',
      duUtilization: 'number',
      errCode: 'string',
      errMessage: 'string',
      gmtCreated: 'number',
      gmtFinished: 'number',
      httpStatusCode: 'string',
      memUtilization: 'number',
      nodeCount: 'number',
      oversoldDu: 'number',
      regionId: 'string',
      requestId: 'string',
      state: 'string',
      success: 'string',
      totalCpuCore: 'number',
      totalDiskGBSize: 'number',
      totalMemGBSize: 'number',
      usedCpuCore: 'number',
      usedDiskGBSize: 'number',
      usedDu: 'number',
      usedMemGBSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDedicatedClusterResponseBody;
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
      body: DescribeDedicatedClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterMonitorRuleRequest extends $tea.Model {
  dedicatedClusterId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedClusterId: 'DedicatedClusterId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedClusterId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterMonitorRuleResponseBody extends $tea.Model {
  cpuAlarmThreshold?: string;
  dedicatedClusterId?: string;
  diskAlarmThreshold?: string;
  duAlarmThreshold?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  memAlarmThreshold?: string;
  noticeSwitch?: string;
  phones?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      cpuAlarmThreshold: 'CpuAlarmThreshold',
      dedicatedClusterId: 'DedicatedClusterId',
      diskAlarmThreshold: 'DiskAlarmThreshold',
      duAlarmThreshold: 'DuAlarmThreshold',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      memAlarmThreshold: 'MemAlarmThreshold',
      noticeSwitch: 'NoticeSwitch',
      phones: 'Phones',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuAlarmThreshold: 'string',
      dedicatedClusterId: 'string',
      diskAlarmThreshold: 'string',
      duAlarmThreshold: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      memAlarmThreshold: 'string',
      noticeSwitch: 'string',
      phones: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterMonitorRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDedicatedClusterMonitorRuleResponseBody;
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
      body: DescribeDedicatedClusterMonitorRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsEtlJobVersionInfoRequest extends $tea.Model {
  dtsInstanceId?: string;
  dtsJobId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsEtlJobVersionInfoResponseBody extends $tea.Model {
  dtsEtlJobVersionInfos?: DescribeDtsEtlJobVersionInfoResponseBodyDtsEtlJobVersionInfos[];
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  success?: boolean;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      dtsEtlJobVersionInfos: 'DtsEtlJobVersionInfos',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsEtlJobVersionInfos: { 'type': 'array', 'itemType': DescribeDtsEtlJobVersionInfoResponseBodyDtsEtlJobVersionInfos },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'boolean',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsEtlJobVersionInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDtsEtlJobVersionInfoResponseBody;
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
      body: DescribeDtsEtlJobVersionInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailRequest extends $tea.Model {
  dtsInstanceID?: string;
  dtsJobId?: string;
  regionId?: string;
  resourceGroupId?: string;
  syncSubJobHistory?: boolean;
  synchronizationDirection?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceID: 'DtsInstanceID',
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      syncSubJobHistory: 'SyncSubJobHistory',
      synchronizationDirection: 'SynchronizationDirection',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceID: 'string',
      dtsJobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      syncSubJobHistory: 'boolean',
      synchronizationDirection: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBody extends $tea.Model {
  appName?: string;
  beginTimestamp?: string;
  binlog?: string;
  binlogSite?: string;
  binlogTime?: string;
  bootTime?: string;
  checkpoint?: number;
  code?: number;
  consumptionCheckpoint?: string;
  consumptionClient?: string;
  createTime?: string;
  dataDeliveryChannelInfo?: DescribeDtsJobDetailResponseBodyDataDeliveryChannelInfo;
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodyDataSynchronizationStatus;
  databaseCount?: number;
  dbObject?: string;
  dedicatedClusterId?: string;
  delay?: number;
  demoJob?: boolean;
  destNetType?: string;
  destinationEndpoint?: DescribeDtsJobDetailResponseBodyDestinationEndpoint;
  dtsBisLabel?: string;
  dtsInstanceID?: string;
  dtsJobClass?: string;
  dtsJobDirection?: string;
  dtsJobId?: string;
  dtsJobName?: string;
  dynamicMessage?: string;
  endTimestamp?: string;
  errCode?: string;
  errMessage?: string;
  errorMessage?: string;
  etlCalculator?: string;
  expireTime?: string;
  finishTime?: string;
  groupId?: string;
  httpStatusCode?: number;
  jobType?: string;
  lastUpdateTime?: string;
  maxDu?: number;
  migrationMode?: DescribeDtsJobDetailResponseBodyMigrationMode;
  minDu?: number;
  payType?: string;
  requestId?: string;
  reserved?: string;
  resourceGroupDisplayName?: string;
  resourceGroupId?: string;
  retryState?: DescribeDtsJobDetailResponseBodyRetryState;
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySourceEndpoint;
  status?: string;
  subDistributedJob?: DescribeDtsJobDetailResponseBodySubDistributedJob[];
  subSyncJob?: DescribeDtsJobDetailResponseBodySubSyncJob[];
  subscribeTopic?: string;
  subscriptionDataType?: DescribeDtsJobDetailResponseBodySubscriptionDataType;
  subscriptionHost?: DescribeDtsJobDetailResponseBodySubscriptionHost;
  success?: boolean;
  synchronizationDirection?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      beginTimestamp: 'BeginTimestamp',
      binlog: 'Binlog',
      binlogSite: 'BinlogSite',
      binlogTime: 'BinlogTime',
      bootTime: 'BootTime',
      checkpoint: 'Checkpoint',
      code: 'Code',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      consumptionClient: 'ConsumptionClient',
      createTime: 'CreateTime',
      dataDeliveryChannelInfo: 'DataDeliveryChannelInfo',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      databaseCount: 'DatabaseCount',
      dbObject: 'DbObject',
      dedicatedClusterId: 'DedicatedClusterId',
      delay: 'Delay',
      demoJob: 'DemoJob',
      destNetType: 'DestNetType',
      destinationEndpoint: 'DestinationEndpoint',
      dtsBisLabel: 'DtsBisLabel',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      dynamicMessage: 'DynamicMessage',
      endTimestamp: 'EndTimestamp',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      errorMessage: 'ErrorMessage',
      etlCalculator: 'EtlCalculator',
      expireTime: 'ExpireTime',
      finishTime: 'FinishTime',
      groupId: 'GroupId',
      httpStatusCode: 'HttpStatusCode',
      jobType: 'JobType',
      lastUpdateTime: 'LastUpdateTime',
      maxDu: 'MaxDu',
      migrationMode: 'MigrationMode',
      minDu: 'MinDu',
      payType: 'PayType',
      requestId: 'RequestId',
      reserved: 'Reserved',
      resourceGroupDisplayName: 'ResourceGroupDisplayName',
      resourceGroupId: 'ResourceGroupId',
      retryState: 'RetryState',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      subDistributedJob: 'SubDistributedJob',
      subSyncJob: 'SubSyncJob',
      subscribeTopic: 'SubscribeTopic',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionHost: 'SubscriptionHost',
      success: 'Success',
      synchronizationDirection: 'SynchronizationDirection',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      beginTimestamp: 'string',
      binlog: 'string',
      binlogSite: 'string',
      binlogTime: 'string',
      bootTime: 'string',
      checkpoint: 'number',
      code: 'number',
      consumptionCheckpoint: 'string',
      consumptionClient: 'string',
      createTime: 'string',
      dataDeliveryChannelInfo: DescribeDtsJobDetailResponseBodyDataDeliveryChannelInfo,
      dataSynchronizationStatus: DescribeDtsJobDetailResponseBodyDataSynchronizationStatus,
      databaseCount: 'number',
      dbObject: 'string',
      dedicatedClusterId: 'string',
      delay: 'number',
      demoJob: 'boolean',
      destNetType: 'string',
      destinationEndpoint: DescribeDtsJobDetailResponseBodyDestinationEndpoint,
      dtsBisLabel: 'string',
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      dynamicMessage: 'string',
      endTimestamp: 'string',
      errCode: 'string',
      errMessage: 'string',
      errorMessage: 'string',
      etlCalculator: 'string',
      expireTime: 'string',
      finishTime: 'string',
      groupId: 'string',
      httpStatusCode: 'number',
      jobType: 'string',
      lastUpdateTime: 'string',
      maxDu: 'number',
      migrationMode: DescribeDtsJobDetailResponseBodyMigrationMode,
      minDu: 'number',
      payType: 'string',
      requestId: 'string',
      reserved: 'string',
      resourceGroupDisplayName: 'string',
      resourceGroupId: 'string',
      retryState: DescribeDtsJobDetailResponseBodyRetryState,
      sourceEndpoint: DescribeDtsJobDetailResponseBodySourceEndpoint,
      status: 'string',
      subDistributedJob: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubDistributedJob },
      subSyncJob: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubSyncJob },
      subscribeTopic: 'string',
      subscriptionDataType: DescribeDtsJobDetailResponseBodySubscriptionDataType,
      subscriptionHost: DescribeDtsJobDetailResponseBodySubscriptionHost,
      success: 'boolean',
      synchronizationDirection: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDtsJobDetailResponseBody;
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
      body: DescribeDtsJobDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsRequest extends $tea.Model {
  dedicatedClusterId?: string;
  dtsBisLabel?: string;
  dtsInstanceId?: string;
  dtsJobId?: string;
  groupId?: string;
  instanceId?: string;
  instanceType?: string;
  jobType?: string;
  orderColumn?: string;
  orderDirection?: string;
  ownerId?: string;
  pageNumber?: number;
  pageSize?: number;
  params?: string;
  region?: string;
  regionId?: string;
  resourceGroupId?: string;
  status?: string;
  tags?: string;
  type?: string;
  withoutDbList?: boolean;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dedicatedClusterId: 'DedicatedClusterId',
      dtsBisLabel: 'DtsBisLabel',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      jobType: 'JobType',
      orderColumn: 'OrderColumn',
      orderDirection: 'OrderDirection',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      params: 'Params',
      region: 'Region',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
      withoutDbList: 'WithoutDbList',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedClusterId: 'string',
      dtsBisLabel: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      groupId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      jobType: 'string',
      orderColumn: 'string',
      orderDirection: 'string',
      ownerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      params: 'string',
      region: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: 'string',
      type: 'string',
      withoutDbList: 'boolean',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBody extends $tea.Model {
  dtsJobList?: DescribeDtsJobsResponseBodyDtsJobList[];
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  etlDemoList?: DescribeDtsJobsResponseBodyEtlDemoList[];
  httpStatusCode?: number;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  success?: boolean;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      dtsJobList: 'DtsJobList',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      etlDemoList: 'EtlDemoList',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobList: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobList },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      etlDemoList: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyEtlDemoList },
      httpStatusCode: 'number',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'boolean',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDtsJobsResponseBody;
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
      body: DescribeDtsJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsServiceLogRequest extends $tea.Model {
  dtsJobId?: string;
  endTime?: number;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  startTime?: number;
  status?: string;
  subJobType?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      endTime: 'EndTime',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      status: 'Status',
      subJobType: 'SubJobType',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      endTime: 'number',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      status: 'string',
      subJobType: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsServiceLogResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  serviceLogContexts?: DescribeDtsServiceLogResponseBodyServiceLogContexts[];
  success?: boolean;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      serviceLogContexts: 'ServiceLogContexts',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      serviceLogContexts: { 'type': 'array', 'itemType': DescribeDtsServiceLogResponseBodyServiceLogContexts },
      success: 'boolean',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsServiceLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDtsServiceLogResponseBody;
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
      body: DescribeDtsServiceLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointSwitchStatusRequest extends $tea.Model {
  accountId?: string;
  clientToken?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointSwitchStatusResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  errorMessage?: string;
  requestId?: string;
  status?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      errorMessage: 'string',
      requestId: 'string',
      status: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointSwitchStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEndpointSwitchStatusResponseBody;
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
      body: DescribeEndpointSwitchStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEtlJobLogsRequest extends $tea.Model {
  dtsJobId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEtlJobLogsResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  etlRunningLogs?: DescribeEtlJobLogsResponseBodyEtlRunningLogs[];
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      etlRunningLogs: 'EtlRunningLogs',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      etlRunningLogs: { 'type': 'array', 'itemType': DescribeEtlJobLogsResponseBodyEtlRunningLogs },
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEtlJobLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEtlJobLogsResponseBody;
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
      body: DescribeEtlJobLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusRequest extends $tea.Model {
  accountId?: string;
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
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
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  structureInitializationDetails?: DescribeInitializationStatusResponseBodyStructureInitializationDetails[];
  success?: string;
  static names(): { [key: string]: string } {
    return {
      dataInitializationDetails: 'DataInitializationDetails',
      dataSynchronizationDetails: 'DataSynchronizationDetails',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      structureInitializationDetails: 'StructureInitializationDetails',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationDetails: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyDataInitializationDetails },
      dataSynchronizationDetails: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyDataSynchronizationDetails },
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      structureInitializationDetails: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyStructureInitializationDetails },
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInitializationStatusResponseBody;
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

export class DescribeJobMonitorRuleRequest extends $tea.Model {
  dtsJobId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMonitorRuleResponseBody extends $tea.Model {
  code?: string;
  dtsJobId?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  monitorRules?: DescribeJobMonitorRuleResponseBodyMonitorRules[];
  requestId?: string;
  success?: boolean;
  topics?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dtsJobId: 'DtsJobId',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      monitorRules: 'MonitorRules',
      requestId: 'RequestId',
      success: 'Success',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dtsJobId: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      monitorRules: { 'type': 'array', 'itemType': DescribeJobMonitorRuleResponseBodyMonitorRules },
      requestId: 'string',
      success: 'boolean',
      topics: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMonitorRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeJobMonitorRuleResponseBody;
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
      body: DescribeJobMonitorRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricListRequest extends $tea.Model {
  accountId?: string;
  clientToken?: string;
  dtsJobId?: string;
  endTime?: number;
  env?: string;
  metricName?: string;
  metricType?: string;
  ownerID?: string;
  param?: string;
  period?: number;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      dtsJobId: 'DtsJobId',
      endTime: 'EndTime',
      env: 'Env',
      metricName: 'MetricName',
      metricType: 'MetricType',
      ownerID: 'OwnerID',
      param: 'Param',
      period: 'Period',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      dtsJobId: 'string',
      endTime: 'number',
      env: 'string',
      metricName: 'string',
      metricType: 'string',
      ownerID: 'string',
      param: 'string',
      period: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricListResponseBody extends $tea.Model {
  code?: string;
  dataPoints?: DescribeMetricListResponseBodyDataPoints[];
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  metricName?: string;
  metricType?: string;
  param?: string;
  period?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataPoints: 'DataPoints',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      metricName: 'MetricName',
      metricType: 'MetricType',
      param: 'Param',
      period: 'Period',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataPoints: { 'type': 'array', 'itemType': DescribeMetricListResponseBodyDataPoints },
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      metricName: 'string',
      metricType: 'string',
      param: 'string',
      period: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMetricListResponseBody;
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
      body: DescribeMetricListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobAlertRequest extends $tea.Model {
  accountId?: string;
  clientToken?: string;
  migrationJobId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      migrationJobId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobAlertResponseBody extends $tea.Model {
  delayAlertPhone?: string;
  delayAlertStatus?: string;
  delayOverSeconds?: string;
  errCode?: string;
  errMessage?: string;
  errorAlertPhone?: string;
  errorAlertStatus?: string;
  migrationJobId?: string;
  migrationJobName?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      delayAlertPhone: 'DelayAlertPhone',
      delayAlertStatus: 'DelayAlertStatus',
      delayOverSeconds: 'DelayOverSeconds',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      errorAlertPhone: 'ErrorAlertPhone',
      errorAlertStatus: 'ErrorAlertStatus',
      migrationJobId: 'MigrationJobId',
      migrationJobName: 'MigrationJobName',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayAlertPhone: 'string',
      delayAlertStatus: 'string',
      delayOverSeconds: 'string',
      errCode: 'string',
      errMessage: 'string',
      errorAlertPhone: 'string',
      errorAlertStatus: 'string',
      migrationJobId: 'string',
      migrationJobName: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobAlertResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMigrationJobAlertResponseBody;
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
      body: DescribeMigrationJobAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailRequest extends $tea.Model {
  migrationMode?: DescribeMigrationJobDetailRequestMigrationMode;
  accountId?: string;
  clientToken?: string;
  migrationJobId?: string;
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      migrationMode: 'MigrationMode',
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationMode: DescribeMigrationJobDetailRequestMigrationMode,
      accountId: 'string',
      clientToken: 'string',
      migrationJobId: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBody extends $tea.Model {
  dataInitializationDetailList?: DescribeMigrationJobDetailResponseBodyDataInitializationDetailList;
  dataSynchronizationDetailList?: DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailList;
  errCode?: string;
  errMessage?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  structureInitializationDetailList?: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailList;
  success?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataInitializationDetailList: 'DataInitializationDetailList',
      dataSynchronizationDetailList: 'DataSynchronizationDetailList',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      structureInitializationDetailList: 'StructureInitializationDetailList',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationDetailList: DescribeMigrationJobDetailResponseBodyDataInitializationDetailList,
      dataSynchronizationDetailList: DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailList,
      errCode: 'string',
      errMessage: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      structureInitializationDetailList: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailList,
      success: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMigrationJobDetailResponseBody;
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
  accountId?: string;
  clientToken?: string;
  migrationJobId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      migrationJobId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  errCode?: string;
  errMessage?: string;
  migrationJobClass?: string;
  migrationJobId?: string;
  migrationJobName?: string;
  migrationJobStatus?: string;
  migrationMode?: DescribeMigrationJobStatusResponseBodyMigrationMode;
  migrationObject?: string;
  payType?: string;
  precheckStatus?: DescribeMigrationJobStatusResponseBodyPrecheckStatus;
  requestId?: string;
  sourceEndpoint?: DescribeMigrationJobStatusResponseBodySourceEndpoint;
  structureInitializationStatus?: DescribeMigrationJobStatusResponseBodyStructureInitializationStatus;
  success?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      destinationEndpoint: 'DestinationEndpoint',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      migrationJobClass: 'MigrationJobClass',
      migrationJobId: 'MigrationJobId',
      migrationJobName: 'MigrationJobName',
      migrationJobStatus: 'MigrationJobStatus',
      migrationMode: 'MigrationMode',
      migrationObject: 'MigrationObject',
      payType: 'PayType',
      precheckStatus: 'PrecheckStatus',
      requestId: 'RequestId',
      sourceEndpoint: 'SourceEndpoint',
      structureInitializationStatus: 'StructureInitializationStatus',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationStatus: DescribeMigrationJobStatusResponseBodyDataInitializationStatus,
      dataSynchronizationStatus: DescribeMigrationJobStatusResponseBodyDataSynchronizationStatus,
      destinationEndpoint: DescribeMigrationJobStatusResponseBodyDestinationEndpoint,
      errCode: 'string',
      errMessage: 'string',
      migrationJobClass: 'string',
      migrationJobId: 'string',
      migrationJobName: 'string',
      migrationJobStatus: 'string',
      migrationMode: DescribeMigrationJobStatusResponseBodyMigrationMode,
      migrationObject: 'string',
      payType: 'string',
      precheckStatus: DescribeMigrationJobStatusResponseBodyPrecheckStatus,
      requestId: 'string',
      sourceEndpoint: DescribeMigrationJobStatusResponseBodySourceEndpoint,
      structureInitializationStatus: DescribeMigrationJobStatusResponseBodyStructureInitializationStatus,
      success: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMigrationJobStatusResponseBody;
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
  accountId?: string;
  migrationJobName?: string;
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  tag?: DescribeMigrationJobsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      migrationJobName: 'MigrationJobName',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      migrationJobName: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeMigrationJobsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  migrationJobs?: DescribeMigrationJobsResponseBodyMigrationJobs;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  success?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      migrationJobs: 'MigrationJobs',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      migrationJobs: DescribeMigrationJobsResponseBodyMigrationJobs,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMigrationJobsResponseBody;
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

export class DescribePreCheckStatusRequest extends $tea.Model {
  dtsJobId?: string;
  jobCode?: string;
  name?: string;
  pageNo?: string;
  pageSize?: string;
  regionId?: string;
  resourceGroupId?: string;
  structPhase?: string;
  structType?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      jobCode: 'JobCode',
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      structPhase: 'StructPhase',
      structType: 'StructType',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      jobCode: 'string',
      name: 'string',
      pageNo: 'string',
      pageSize: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      structPhase: 'string',
      structType: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBody extends $tea.Model {
  analysisJobProgress?: DescribePreCheckStatusResponseBodyAnalysisJobProgress[];
  code?: string;
  errorAnalysisItem?: number;
  errorItem?: number;
  fullNetCheckJobStatus?: DescribePreCheckStatusResponseBodyFullNetCheckJobStatus[];
  httpStatusCode?: number;
  jobId?: string;
  jobName?: string;
  jobProgress?: DescribePreCheckStatusResponseBodyJobProgress[];
  networkDiagnosisResult?: DescribePreCheckStatusResponseBodyNetworkDiagnosisResult;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  state?: string;
  subDistributedJobStatus?: DescribePreCheckStatusResponseBodySubDistributedJobStatus[];
  success?: boolean;
  total?: number;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      analysisJobProgress: 'AnalysisJobProgress',
      code: 'Code',
      errorAnalysisItem: 'ErrorAnalysisItem',
      errorItem: 'ErrorItem',
      fullNetCheckJobStatus: 'FullNetCheckJobStatus',
      httpStatusCode: 'HttpStatusCode',
      jobId: 'JobId',
      jobName: 'JobName',
      jobProgress: 'JobProgress',
      networkDiagnosisResult: 'NetworkDiagnosisResult',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      state: 'State',
      subDistributedJobStatus: 'SubDistributedJobStatus',
      success: 'Success',
      total: 'Total',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisJobProgress: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyAnalysisJobProgress },
      code: 'string',
      errorAnalysisItem: 'number',
      errorItem: 'number',
      fullNetCheckJobStatus: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyFullNetCheckJobStatus },
      httpStatusCode: 'number',
      jobId: 'string',
      jobName: 'string',
      jobProgress: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyJobProgress },
      networkDiagnosisResult: DescribePreCheckStatusResponseBodyNetworkDiagnosisResult,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      state: 'string',
      subDistributedJobStatus: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodySubDistributedJobStatus },
      success: 'boolean',
      total: 'number',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePreCheckStatusResponseBody;
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
      body: DescribePreCheckStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceAlertRequest extends $tea.Model {
  accountId?: string;
  clientToken?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subscriptionInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceAlertResponseBody extends $tea.Model {
  delayAlertPhone?: string;
  delayAlertStatus?: string;
  delayOverSeconds?: string;
  errCode?: string;
  errMessage?: string;
  errorAlertPhone?: string;
  errorAlertStatus?: string;
  requestId?: string;
  subscriptionInstanceID?: string;
  subscriptionInstanceName?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      delayAlertPhone: 'DelayAlertPhone',
      delayAlertStatus: 'DelayAlertStatus',
      delayOverSeconds: 'DelayOverSeconds',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      errorAlertPhone: 'ErrorAlertPhone',
      errorAlertStatus: 'ErrorAlertStatus',
      requestId: 'RequestId',
      subscriptionInstanceID: 'SubscriptionInstanceID',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayAlertPhone: 'string',
      delayAlertStatus: 'string',
      delayOverSeconds: 'string',
      errCode: 'string',
      errMessage: 'string',
      errorAlertPhone: 'string',
      errorAlertStatus: 'string',
      requestId: 'string',
      subscriptionInstanceID: 'string',
      subscriptionInstanceName: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceAlertResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSubscriptionInstanceAlertResponseBody;
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
      body: DescribeSubscriptionInstanceAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusRequest extends $tea.Model {
  accountId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  errCode?: string;
  errMessage?: string;
  errorMessage?: string;
  payType?: string;
  requestId?: string;
  sourceEndpoint?: DescribeSubscriptionInstanceStatusResponseBodySourceEndpoint;
  status?: string;
  subscribeTopic?: string;
  subscriptionDataType?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionDataType;
  subscriptionHost?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionHost;
  subscriptionInstanceID?: string;
  subscriptionInstanceName?: string;
  subscriptionObject?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObject;
  success?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTimestamp: 'BeginTimestamp',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      consumptionClient: 'ConsumptionClient',
      endTimestamp: 'EndTimestamp',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      errorMessage: 'ErrorMessage',
      payType: 'PayType',
      requestId: 'RequestId',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      subscribeTopic: 'SubscribeTopic',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionHost: 'SubscriptionHost',
      subscriptionInstanceID: 'SubscriptionInstanceID',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      subscriptionObject: 'SubscriptionObject',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimestamp: 'string',
      consumptionCheckpoint: 'string',
      consumptionClient: 'string',
      endTimestamp: 'string',
      errCode: 'string',
      errMessage: 'string',
      errorMessage: 'string',
      payType: 'string',
      requestId: 'string',
      sourceEndpoint: DescribeSubscriptionInstanceStatusResponseBodySourceEndpoint,
      status: 'string',
      subscribeTopic: 'string',
      subscriptionDataType: DescribeSubscriptionInstanceStatusResponseBodySubscriptionDataType,
      subscriptionHost: DescribeSubscriptionInstanceStatusResponseBodySubscriptionHost,
      subscriptionInstanceID: 'string',
      subscriptionInstanceName: 'string',
      subscriptionObject: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObject,
      success: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstanceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSubscriptionInstanceStatusResponseBody;
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
  accountId?: string;
  clientToken?: string;
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  subscriptionInstanceName?: string;
  tag?: DescribeSubscriptionInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      subscriptionInstanceName: 'string',
      tag: { 'type': 'array', 'itemType': DescribeSubscriptionInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  subscriptionInstances?: DescribeSubscriptionInstancesResponseBodySubscriptionInstances;
  success?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      subscriptionInstances: 'SubscriptionInstances',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      subscriptionInstances: DescribeSubscriptionInstancesResponseBodySubscriptionInstances,
      success: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSubscriptionInstancesResponseBody;
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

export class DescribeSubscriptionMetaRequest extends $tea.Model {
  dtsInstanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  sid?: string;
  subMigrationJobIds?: { [key: string]: any };
  topics?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sid: 'Sid',
      subMigrationJobIds: 'SubMigrationJobIds',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sid: 'string',
      subMigrationJobIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      topics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionMetaShrinkRequest extends $tea.Model {
  dtsInstanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  sid?: string;
  subMigrationJobIdsShrink?: string;
  topicsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sid: 'Sid',
      subMigrationJobIdsShrink: 'SubMigrationJobIds',
      topicsShrink: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sid: 'string',
      subMigrationJobIdsShrink: 'string',
      topicsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionMetaResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
  subscriptionMetaList?: DescribeSubscriptionMetaResponseBodySubscriptionMetaList[];
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      subscriptionMetaList: 'SubscriptionMetaList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      subscriptionMetaList: { 'type': 'array', 'itemType': DescribeSubscriptionMetaResponseBodySubscriptionMetaList },
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionMetaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSubscriptionMetaResponseBody;
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
      body: DescribeSubscriptionMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobAlertRequest extends $tea.Model {
  accountId?: string;
  clientToken?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationDirection?: string;
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
      synchronizationJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobAlertResponseBody extends $tea.Model {
  delayAlertPhone?: string;
  delayAlertStatus?: string;
  delayOverSeconds?: string;
  errCode?: string;
  errMessage?: string;
  errorAlertPhone?: string;
  errorAlertStatus?: string;
  requestId?: string;
  success?: string;
  synchronizationDirection?: string;
  synchronizationJobId?: string;
  synchronizationJobName?: string;
  static names(): { [key: string]: string } {
    return {
      delayAlertPhone: 'DelayAlertPhone',
      delayAlertStatus: 'DelayAlertStatus',
      delayOverSeconds: 'DelayOverSeconds',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      errorAlertPhone: 'ErrorAlertPhone',
      errorAlertStatus: 'ErrorAlertStatus',
      requestId: 'RequestId',
      success: 'Success',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationJobName: 'SynchronizationJobName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayAlertPhone: 'string',
      delayAlertStatus: 'string',
      delayOverSeconds: 'string',
      errCode: 'string',
      errMessage: 'string',
      errorAlertPhone: 'string',
      errorAlertStatus: 'string',
      requestId: 'string',
      success: 'string',
      synchronizationDirection: 'string',
      synchronizationJobId: 'string',
      synchronizationJobName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobAlertResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSynchronizationJobAlertResponseBody;
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
      body: DescribeSynchronizationJobAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobReplicatorCompareRequest extends $tea.Model {
  accountId?: string;
  clientToken?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationDirection?: string;
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
      synchronizationJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobReplicatorCompareResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: string;
  synchronizationReplicatorCompareEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
      synchronizationReplicatorCompareEnable: 'SynchronizationReplicatorCompareEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
      synchronizationReplicatorCompareEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobReplicatorCompareResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSynchronizationJobReplicatorCompareResponseBody;
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
      body: DescribeSynchronizationJobReplicatorCompareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusRequest extends $tea.Model {
  accountId?: string;
  clientToken?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationDirection?: string;
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
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
  delayMillis?: number;
  destinationEndpoint?: DescribeSynchronizationJobStatusResponseBodyDestinationEndpoint;
  errCode?: string;
  errMessage?: string;
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
  success?: string;
  synchronizationDirection?: string;
  synchronizationJobClass?: string;
  synchronizationJobId?: string;
  synchronizationJobName?: string;
  synchronizationObjects?: DescribeSynchronizationJobStatusResponseBodySynchronizationObjects[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      dataInitialization: 'DataInitialization',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      delay: 'Delay',
      delayMillis: 'DelayMillis',
      destinationEndpoint: 'DestinationEndpoint',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
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
      success: 'Success',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobClass: 'SynchronizationJobClass',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationJobName: 'SynchronizationJobName',
      synchronizationObjects: 'SynchronizationObjects',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      dataInitialization: 'string',
      dataInitializationStatus: DescribeSynchronizationJobStatusResponseBodyDataInitializationStatus,
      dataSynchronizationStatus: DescribeSynchronizationJobStatusResponseBodyDataSynchronizationStatus,
      delay: 'string',
      delayMillis: 'number',
      destinationEndpoint: DescribeSynchronizationJobStatusResponseBodyDestinationEndpoint,
      errCode: 'string',
      errMessage: 'string',
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
      success: 'string',
      synchronizationDirection: 'string',
      synchronizationJobClass: 'string',
      synchronizationJobId: 'string',
      synchronizationJobName: 'string',
      synchronizationObjects: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodySynchronizationObjects },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSynchronizationJobStatusResponseBody;
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

export class DescribeSynchronizationJobStatusListRequest extends $tea.Model {
  accountId?: string;
  clientToken?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationJobIdListJsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationJobIdListJsonStr: 'SynchronizationJobIdListJsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationJobIdListJsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusListResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  success?: string;
  synchronizationJobListStatusList?: DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusList[];
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      synchronizationJobListStatusList: 'SynchronizationJobListStatusList',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'string',
      synchronizationJobListStatusList: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusList },
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSynchronizationJobStatusListResponseBody;
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
      body: DescribeSynchronizationJobStatusListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsRequest extends $tea.Model {
  accountId?: string;
  clientToken?: string;
  ownerId?: string;
  pageNum?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationJobName?: string;
  tag?: DescribeSynchronizationJobsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationJobName: 'SynchronizationJobName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationJobName: 'string',
      tag: { 'type': 'array', 'itemType': DescribeSynchronizationJobsRequestTag },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSynchronizationJobsResponseBody;
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
  accountId?: string;
  clientToken?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  errCode?: string;
  errMessage?: string;
  errorMessage?: string;
  precheckStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatus;
  requestId?: string;
  status?: string;
  structureInitializationStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyStructureInitializationStatus;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      errorMessage: 'ErrorMessage',
      precheckStatus: 'PrecheckStatus',
      requestId: 'RequestId',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationStatus: DescribeSynchronizationObjectModifyStatusResponseBodyDataInitializationStatus,
      dataSynchronizationStatus: DescribeSynchronizationObjectModifyStatusResponseBodyDataSynchronizationStatus,
      errCode: 'string',
      errMessage: 'string',
      errorMessage: 'string',
      precheckStatus: DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatus,
      requestId: 'string',
      status: 'string',
      structureInitializationStatus: DescribeSynchronizationObjectModifyStatusResponseBodyStructureInitializationStatus,
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSynchronizationObjectModifyStatusResponseBody;
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

export class DescribeTagKeysRequest extends $tea.Model {
  category?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeysResponseBody extends $tea.Model {
  category?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  tagKeys?: string[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTagKeysResponseBody;
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
      body: DescribeTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagValuesRequest extends $tea.Model {
  category?: string;
  key?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      key: 'Key',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      key: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagValuesResponseBody extends $tea.Model {
  category?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  tagValues?: string[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagValues: 'TagValues',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagValuesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTagValuesResponseBody;
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
      body: DescribeTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitDtsRdsInstanceRequest extends $tea.Model {
  dtsInstanceId?: string;
  endpointCenId?: string;
  endpointInstanceId?: string;
  endpointInstanceType?: string;
  endpointRegion?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      endpointCenId: 'EndpointCenId',
      endpointInstanceId: 'EndpointInstanceId',
      endpointInstanceType: 'EndpointInstanceType',
      endpointRegion: 'EndpointRegion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      endpointCenId: 'string',
      endpointInstanceId: 'string',
      endpointInstanceType: 'string',
      endpointRegion: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitDtsRdsInstanceResponseBody extends $tea.Model {
  adminAccount?: string;
  adminPassword?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      adminAccount: 'AdminAccount',
      adminPassword: 'AdminPassword',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminAccount: 'string',
      adminPassword: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitDtsRdsInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitDtsRdsInstanceResponseBody;
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
      body: InitDtsRdsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDedicatedClusterRequest extends $tea.Model {
  orderColumn?: string;
  orderDirection?: string;
  ownerId?: string;
  pageNumber?: number;
  pageSize?: number;
  params?: string;
  regionId?: string;
  resourceGroupId?: string;
  state?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      orderColumn: 'OrderColumn',
      orderDirection: 'OrderDirection',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      params: 'Params',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderColumn: 'string',
      orderDirection: 'string',
      ownerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      params: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      state: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDedicatedClusterResponseBody extends $tea.Model {
  dedicatedClusterStatusList?: ListDedicatedClusterResponseBodyDedicatedClusterStatusList;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  success?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedClusterStatusList: 'DedicatedClusterStatusList',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedClusterStatusList: ListDedicatedClusterResponseBodyDedicatedClusterStatusList,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDedicatedClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDedicatedClusterResponseBody;
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
      body: ListDedicatedClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
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
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumerChannelRequest extends $tea.Model {
  consumerGroupId?: string;
  consumerGroupName?: string;
  consumerGroupPassword?: string;
  consumerGroupUserName?: string;
  dtsInstanceId?: string;
  dtsJobId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'ConsumerGroupId',
      consumerGroupName: 'ConsumerGroupName',
      consumerGroupPassword: 'ConsumerGroupPassword',
      consumerGroupUserName: 'ConsumerGroupUserName',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      consumerGroupName: 'string',
      consumerGroupPassword: 'string',
      consumerGroupUserName: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumerChannelResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumerChannelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyConsumerChannelResponseBody;
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
      body: ModifyConsumerChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumerGroupPasswordRequest extends $tea.Model {
  accountId?: string;
  consumerGroupID?: string;
  consumerGroupName?: string;
  consumerGroupPassword?: string;
  consumerGroupUserName?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  subscriptionInstanceId?: string;
  consumerGroupNewPassword?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      consumerGroupID: 'ConsumerGroupID',
      consumerGroupName: 'ConsumerGroupName',
      consumerGroupPassword: 'ConsumerGroupPassword',
      consumerGroupUserName: 'ConsumerGroupUserName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      consumerGroupNewPassword: 'consumerGroupNewPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      consumerGroupID: 'string',
      consumerGroupName: 'string',
      consumerGroupPassword: 'string',
      consumerGroupUserName: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subscriptionInstanceId: 'string',
      consumerGroupNewPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumerGroupPasswordResponseBody extends $tea.Model {
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

export class ModifyConsumerGroupPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyConsumerGroupPasswordResponseBody;
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
      body: ModifyConsumerGroupPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConsumptionTimestampRequest extends $tea.Model {
  accountId?: string;
  consumptionTimestamp?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      consumptionTimestamp: 'ConsumptionTimestamp',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      consumptionTimestamp: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyConsumptionTimestampResponseBody;
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

export class ModifyDedicatedClusterRequest extends $tea.Model {
  dedicatedClusterId?: string;
  dedicatedClusterName?: string;
  instanceId?: string;
  oversoldRatio?: number;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedClusterId: 'DedicatedClusterId',
      dedicatedClusterName: 'DedicatedClusterName',
      instanceId: 'InstanceId',
      oversoldRatio: 'OversoldRatio',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedClusterId: 'string',
      dedicatedClusterName: 'string',
      instanceId: 'string',
      oversoldRatio: 'number',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedClusterResponseBody extends $tea.Model {
  dedicatedClusterId?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedClusterId: 'DedicatedClusterId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedClusterId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDedicatedClusterResponseBody;
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
      body: ModifyDedicatedClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobRequest extends $tea.Model {
  clientToken?: string;
  dataInitialization?: boolean;
  dataSynchronization?: boolean;
  dbList?: { [key: string]: any };
  dtsInstanceId?: string;
  dtsJobId?: string;
  etlOperatorColumnReference?: string;
  fileOssUrl?: string;
  filterTableName?: string;
  modifyTypeEnum?: string;
  regionId?: string;
  reserved?: string;
  resourceGroupId?: string;
  structureInitialization?: boolean;
  synchronizationDirection?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      dbList: 'DbList',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      etlOperatorColumnReference: 'EtlOperatorColumnReference',
      fileOssUrl: 'FileOssUrl',
      filterTableName: 'FilterTableName',
      modifyTypeEnum: 'ModifyTypeEnum',
      regionId: 'RegionId',
      reserved: 'Reserved',
      resourceGroupId: 'ResourceGroupId',
      structureInitialization: 'StructureInitialization',
      synchronizationDirection: 'SynchronizationDirection',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      dbList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      etlOperatorColumnReference: 'string',
      fileOssUrl: 'string',
      filterTableName: 'string',
      modifyTypeEnum: 'string',
      regionId: 'string',
      reserved: 'string',
      resourceGroupId: 'string',
      structureInitialization: 'boolean',
      synchronizationDirection: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobAdvanceRequest extends $tea.Model {
  clientToken?: string;
  dataInitialization?: boolean;
  dataSynchronization?: boolean;
  dbList?: { [key: string]: any };
  dtsInstanceId?: string;
  dtsJobId?: string;
  etlOperatorColumnReference?: string;
  fileOssUrlObject?: Readable;
  filterTableName?: string;
  modifyTypeEnum?: string;
  regionId?: string;
  reserved?: string;
  resourceGroupId?: string;
  structureInitialization?: boolean;
  synchronizationDirection?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      dbList: 'DbList',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      etlOperatorColumnReference: 'EtlOperatorColumnReference',
      fileOssUrlObject: 'FileOssUrl',
      filterTableName: 'FilterTableName',
      modifyTypeEnum: 'ModifyTypeEnum',
      regionId: 'RegionId',
      reserved: 'Reserved',
      resourceGroupId: 'ResourceGroupId',
      structureInitialization: 'StructureInitialization',
      synchronizationDirection: 'SynchronizationDirection',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      dbList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      etlOperatorColumnReference: 'string',
      fileOssUrlObject: 'Readable',
      filterTableName: 'string',
      modifyTypeEnum: 'string',
      regionId: 'string',
      reserved: 'string',
      resourceGroupId: 'string',
      structureInitialization: 'boolean',
      synchronizationDirection: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobShrinkRequest extends $tea.Model {
  clientToken?: string;
  dataInitialization?: boolean;
  dataSynchronization?: boolean;
  dbListShrink?: string;
  dtsInstanceId?: string;
  dtsJobId?: string;
  etlOperatorColumnReference?: string;
  fileOssUrl?: string;
  filterTableName?: string;
  modifyTypeEnum?: string;
  regionId?: string;
  reserved?: string;
  resourceGroupId?: string;
  structureInitialization?: boolean;
  synchronizationDirection?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      dbListShrink: 'DbList',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      etlOperatorColumnReference: 'EtlOperatorColumnReference',
      fileOssUrl: 'FileOssUrl',
      filterTableName: 'FilterTableName',
      modifyTypeEnum: 'ModifyTypeEnum',
      regionId: 'RegionId',
      reserved: 'Reserved',
      resourceGroupId: 'ResourceGroupId',
      structureInitialization: 'StructureInitialization',
      synchronizationDirection: 'SynchronizationDirection',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      dbListShrink: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      etlOperatorColumnReference: 'string',
      fileOssUrl: 'string',
      filterTableName: 'string',
      modifyTypeEnum: 'string',
      regionId: 'string',
      reserved: 'string',
      resourceGroupId: 'string',
      structureInitialization: 'boolean',
      synchronizationDirection: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobResponseBody extends $tea.Model {
  dtsJobId?: string;
  errCode?: string;
  errMessage?: boolean;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      errCode: 'string',
      errMessage: 'boolean',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDtsJobResponseBody;
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
      body: ModifyDtsJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobConfigRequest extends $tea.Model {
  dtsJobId?: string;
  ownerId?: string;
  parameters?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      ownerId: 'OwnerId',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      ownerId: 'string',
      parameters: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDtsJobConfigResponseBody;
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
      body: ModifyDtsJobConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobDedicatedClusterRequest extends $tea.Model {
  dedicatedClusterId?: string;
  dtsJobIds?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedClusterId: 'DedicatedClusterId',
      dtsJobIds: 'DtsJobIds',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedClusterId: 'string',
      dtsJobIds: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobDedicatedClusterResponseBody extends $tea.Model {
  code?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicMessage: 'string',
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

export class ModifyDtsJobDedicatedClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDtsJobDedicatedClusterResponseBody;
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
      body: ModifyDtsJobDedicatedClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobDuLimitRequest extends $tea.Model {
  dtsJobId?: string;
  duLimit?: number;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      duLimit: 'DuLimit',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      duLimit: 'number',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobDuLimitResponseBody extends $tea.Model {
  code?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicMessage: 'string',
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

export class ModifyDtsJobDuLimitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDtsJobDuLimitResponseBody;
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
      body: ModifyDtsJobDuLimitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobEndpointRequest extends $tea.Model {
  aliyunUid?: string;
  database?: string;
  dryRun?: boolean;
  dtsInstanceId?: string;
  dtsJobId?: string;
  endpoint?: string;
  endpointInstanceId?: string;
  endpointInstanceType?: string;
  endpointIp?: string;
  endpointPort?: string;
  password?: string;
  regionId?: string;
  resourceGroupId?: string;
  roleName?: string;
  shardPassword?: string;
  shardUsername?: string;
  synchronizationDirection?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      database: 'Database',
      dryRun: 'DryRun',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      endpoint: 'Endpoint',
      endpointInstanceId: 'EndpointInstanceId',
      endpointInstanceType: 'EndpointInstanceType',
      endpointIp: 'EndpointIp',
      endpointPort: 'EndpointPort',
      password: 'Password',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      roleName: 'RoleName',
      shardPassword: 'ShardPassword',
      shardUsername: 'ShardUsername',
      synchronizationDirection: 'SynchronizationDirection',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      database: 'string',
      dryRun: 'boolean',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      endpoint: 'string',
      endpointInstanceId: 'string',
      endpointInstanceType: 'string',
      endpointIp: 'string',
      endpointPort: 'string',
      password: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      roleName: 'string',
      shardPassword: 'string',
      shardUsername: 'string',
      synchronizationDirection: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobEndpointResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDtsJobEndpointResponseBody;
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
      body: ModifyDtsJobEndpointResponseBody,
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
  resourceGroupId?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      dtsJobName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobNameResponseBody extends $tea.Model {
  code?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicMessage: 'string',
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

export class ModifyDtsJobNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDtsJobNameResponseBody;
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
      body: ModifyDtsJobNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobPasswordRequest extends $tea.Model {
  dtsJobId?: string;
  endpoint?: string;
  password?: string;
  regionId?: string;
  resourceGroupId?: string;
  userName?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      endpoint: 'Endpoint',
      password: 'Password',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      userName: 'UserName',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      endpoint: 'string',
      password: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      userName: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDtsJobPasswordResponseBody extends $tea.Model {
  code?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicMessage: 'string',
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

export class ModifyDtsJobPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDtsJobPasswordResponseBody;
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
      body: ModifyDtsJobPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDynamicConfigRequest extends $tea.Model {
  configList?: string;
  dtsJobId?: string;
  enableLimit?: boolean;
  jobCode?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
      dtsJobId: 'DtsJobId',
      enableLimit: 'EnableLimit',
      jobCode: 'JobCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: 'string',
      dtsJobId: 'string',
      enableLimit: 'boolean',
      jobCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDynamicConfigResponseBody extends $tea.Model {
  code?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicMessage: 'string',
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

export class ModifyDynamicConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDynamicConfigResponseBody;
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
      body: ModifyDynamicConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubscriptionRequest extends $tea.Model {
  dbList?: string;
  dtsInstanceId?: string;
  dtsJobId?: string;
  regionId?: string;
  resourceGroupId?: string;
  subscriptionDataTypeDDL?: boolean;
  subscriptionDataTypeDML?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbList: 'DbList',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionDataTypeDDL: 'SubscriptionDataTypeDDL',
      subscriptionDataTypeDML: 'SubscriptionDataTypeDML',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbList: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subscriptionDataTypeDDL: 'boolean',
      subscriptionDataTypeDML: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubscriptionResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubscriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySubscriptionResponseBody;
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
      body: ModifySubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubscriptionObjectRequest extends $tea.Model {
  accountId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  subscriptionInstanceId?: string;
  subscriptionObject?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      subscriptionObject: 'SubscriptionObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySubscriptionObjectResponseBody;
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
  accountId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationDirection?: string;
  synchronizationJobId?: string;
  synchronizationObjects?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationObjects: 'SynchronizationObjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySynchronizationObjectResponseBody;
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

export class RenewInstanceRequest extends $tea.Model {
  buyCount?: string;
  chargeType?: string;
  dtsJobId?: string;
  period?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      buyCount: 'BuyCount',
      chargeType: 'ChargeType',
      dtsJobId: 'DtsJobId',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyCount: 'string',
      chargeType: 'string',
      dtsJobId: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
  chargeType?: string;
  code?: string;
  dtsJobId?: string;
  dynamicMessage?: string;
  endTime?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  instanceId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      code: 'Code',
      dtsJobId: 'DtsJobId',
      dynamicMessage: 'DynamicMessage',
      endTime: 'EndTime',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      code: 'string',
      dtsJobId: 'string',
      dynamicMessage: 'string',
      endTime: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewInstanceResponseBody;
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
      body: RenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDtsJobRequest extends $tea.Model {
  dtsInstanceId?: string;
  dtsJobId?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationDirection?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDtsJobResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class ResetDtsJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetDtsJobResponseBody;
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
      body: ResetDtsJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSynchronizationJobRequest extends $tea.Model {
  accountId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationDirection?: string;
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
      synchronizationJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSynchronizationJobResponseBody extends $tea.Model {
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

export class ResetSynchronizationJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetSynchronizationJobResponseBody;
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
      body: ResetSynchronizationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReverseTwoWayDirectionRequest extends $tea.Model {
  dtsInstanceId?: string;
  ignoreErrorSubJob?: boolean;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      ignoreErrorSubJob: 'IgnoreErrorSubJob',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      ignoreErrorSubJob: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReverseTwoWayDirectionResponseBody extends $tea.Model {
  code?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicMessage: 'string',
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

export class ReverseTwoWayDirectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReverseTwoWayDirectionResponseBody;
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
      body: ReverseTwoWayDirectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShieldPrecheckRequest extends $tea.Model {
  dtsInstanceId?: string;
  precheckItems?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      precheckItems: 'PrecheckItems',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      precheckItems: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShieldPrecheckResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: boolean;
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
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShieldPrecheckResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ShieldPrecheckResponseBody;
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
      body: ShieldPrecheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkipPreCheckRequest extends $tea.Model {
  dtsJobId?: string;
  jobId?: string;
  regionId?: string;
  resourceGroupId?: string;
  skip?: boolean;
  skipPreCheckItems?: string;
  skipPreCheckNames?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      jobId: 'JobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      skip: 'Skip',
      skipPreCheckItems: 'SkipPreCheckItems',
      skipPreCheckNames: 'SkipPreCheckNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      jobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      skip: 'boolean',
      skipPreCheckItems: 'string',
      skipPreCheckNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkipPreCheckResponseBody extends $tea.Model {
  code?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  migrationJobId?: string;
  requestId?: string;
  scheduleJobId?: string;
  skipItems?: string;
  skipNames?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      migrationJobId: 'MigrationJobId',
      requestId: 'RequestId',
      scheduleJobId: 'ScheduleJobId',
      skipItems: 'SkipItems',
      skipNames: 'SkipNames',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      migrationJobId: 'string',
      requestId: 'string',
      scheduleJobId: 'string',
      skipItems: 'string',
      skipNames: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkipPreCheckResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SkipPreCheckResponseBody;
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
      body: SkipPreCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDtsJobRequest extends $tea.Model {
  dtsInstanceId?: string;
  dtsJobId?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationDirection?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDtsJobResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class StartDtsJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDtsJobResponseBody;
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
      body: StartDtsJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDtsJobsRequest extends $tea.Model {
  dtsJobIds?: string;
  regionId?: string;
  resourceGroupId?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsJobIds: 'DtsJobIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobIds: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDtsJobsResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class StartDtsJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDtsJobsResponseBody;
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
      body: StartDtsJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMigrationJobRequest extends $tea.Model {
  accountId?: string;
  migrationJobId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      migrationJobId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartMigrationJobResponseBody;
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

export class StartReverseWriterRequest extends $tea.Model {
  checkPoint?: string;
  dtsJobId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      checkPoint: 'CheckPoint',
      dtsJobId: 'DtsJobId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkPoint: 'string',
      dtsJobId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartReverseWriterResponseBody extends $tea.Model {
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

export class StartReverseWriterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartReverseWriterResponseBody;
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
      body: StartReverseWriterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSubscriptionInstanceRequest extends $tea.Model {
  accountId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartSubscriptionInstanceResponseBody;
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
  accountId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationDirection?: string;
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartSynchronizationJobResponseBody;
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

export class StopDedicatedClusterRequest extends $tea.Model {
  dedicatedClusterId?: string;
  dedicatedClusterName?: string;
  instanceId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedClusterId: 'DedicatedClusterId',
      dedicatedClusterName: 'DedicatedClusterName',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedClusterId: 'string',
      dedicatedClusterName: 'string',
      instanceId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDedicatedClusterResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDedicatedClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDedicatedClusterResponseBody;
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
      body: StopDedicatedClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDtsJobRequest extends $tea.Model {
  dtsInstanceId?: string;
  dtsJobId?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationDirection?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDtsJobResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class StopDtsJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDtsJobResponseBody;
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
      body: StopDtsJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDtsJobsRequest extends $tea.Model {
  dtsJobIds?: string;
  regionId?: string;
  resourceGroupId?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsJobIds: 'DtsJobIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobIds: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDtsJobsResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class StopDtsJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDtsJobsResponseBody;
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
      body: StopDtsJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMigrationJobRequest extends $tea.Model {
  accountId?: string;
  clientToken?: string;
  migrationJobId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      migrationJobId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopMigrationJobResponseBody;
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

export class SummaryJobDetailRequest extends $tea.Model {
  dtsInstanceId?: string;
  dtsJobId?: string;
  jobCode?: string;
  regionId?: string;
  resourceGroupId?: string;
  structType?: string;
  synchronizationDirection?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      jobCode: 'JobCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      structType: 'StructType',
      synchronizationDirection: 'SynchronizationDirection',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      jobCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      structType: 'string',
      synchronizationDirection: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SummaryJobDetailResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobId?: string;
  progressSummaryDetails?: SummaryJobDetailResponseBodyProgressSummaryDetails[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobId: 'JobId',
      progressSummaryDetails: 'ProgressSummaryDetails',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobId: 'string',
      progressSummaryDetails: { 'type': 'array', 'itemType': SummaryJobDetailResponseBodyProgressSummaryDetails },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SummaryJobDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SummaryJobDetailResponseBody;
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
      body: SummaryJobDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendDtsJobRequest extends $tea.Model {
  dtsInstanceId?: string;
  dtsJobId?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationDirection?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendDtsJobResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class SuspendDtsJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SuspendDtsJobResponseBody;
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
      body: SuspendDtsJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendDtsJobsRequest extends $tea.Model {
  dtsJobIds?: string;
  regionId?: string;
  resourceGroupId?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsJobIds: 'DtsJobIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobIds: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendDtsJobsResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class SuspendDtsJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SuspendDtsJobsResponseBody;
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
      body: SuspendDtsJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendMigrationJobRequest extends $tea.Model {
  accountId?: string;
  clientToken?: string;
  migrationJobId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      migrationJobId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SuspendMigrationJobResponseBody;
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
  accountId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationDirection?: string;
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SuspendSynchronizationJobResponseBody;
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

export class SwitchPhysicalDtsJobToCloudRequest extends $tea.Model {
  dtsInstanceId?: string;
  dtsJobId?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationDirection?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchPhysicalDtsJobToCloudResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class SwitchPhysicalDtsJobToCloudResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchPhysicalDtsJobToCloudResponseBody;
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
      body: SwitchPhysicalDtsJobToCloudResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchSynchronizationEndpointRequest extends $tea.Model {
  endpoint?: SwitchSynchronizationEndpointRequestEndpoint;
  sourceEndpoint?: SwitchSynchronizationEndpointRequestSourceEndpoint;
  accountId?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  synchronizationDirection?: string;
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      sourceEndpoint: 'SourceEndpoint',
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: SwitchSynchronizationEndpointRequestEndpoint,
      sourceEndpoint: SwitchSynchronizationEndpointRequestSourceEndpoint,
      accountId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
      synchronizationJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchSynchronizationEndpointResponseBody extends $tea.Model {
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

export class SwitchSynchronizationEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchSynchronizationEndpointResponseBody;
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
      body: SwitchSynchronizationEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: boolean;
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
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
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
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInstanceClassRequest extends $tea.Model {
  dtsJobId?: string;
  instanceClass?: string;
  orderType?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      instanceClass: 'InstanceClass',
      orderType: 'OrderType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      instanceClass: 'string',
      orderType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInstanceClassResponseBody extends $tea.Model {
  chargeType?: string;
  code?: string;
  dtsJobId?: string;
  dynamicMessage?: string;
  endTime?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  instanceId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      code: 'Code',
      dtsJobId: 'DtsJobId',
      dynamicMessage: 'DynamicMessage',
      endTime: 'EndTime',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      code: 'string',
      dtsJobId: 'string',
      dynamicMessage: 'string',
      endTime: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferInstanceClassResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransferInstanceClassResponseBody;
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
      body: TransferInstanceClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferPayTypeRequest extends $tea.Model {
  buyCount?: string;
  chargeType?: string;
  dtsJobId?: string;
  period?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      buyCount: 'BuyCount',
      chargeType: 'ChargeType',
      dtsJobId: 'DtsJobId',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyCount: 'string',
      chargeType: 'string',
      dtsJobId: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferPayTypeResponseBody extends $tea.Model {
  chargeType?: string;
  code?: string;
  dtsJobId?: string;
  dynamicMessage?: string;
  endTime?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  instanceId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      code: 'Code',
      dtsJobId: 'DtsJobId',
      dynamicMessage: 'DynamicMessage',
      endTime: 'EndTime',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      code: 'string',
      dtsJobId: 'string',
      dynamicMessage: 'string',
      endTime: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferPayTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransferPayTypeResponseBody;
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
      body: TransferPayTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  success?: boolean;
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
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeTwoWayRequest extends $tea.Model {
  instanceClass?: string;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClass: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeTwoWayResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class UpgradeTwoWayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeTwoWayResponseBody;
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
      body: UpgradeTwoWayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WhiteIpListRequest extends $tea.Model {
  destinationRegion?: string;
  region?: string;
  regionId?: string;
  resourceGroupId?: string;
  type?: string;
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      destinationRegion: 'DestinationRegion',
      region: 'Region',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      type: 'Type',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegion: 'string',
      region: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      type: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WhiteIpListResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  ipList?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      ipList: 'IpList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      ipList: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WhiteIpListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WhiteIpListResponseBody;
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
      body: WhiteIpListResponseBody,
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
  oracleSID?: string;
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
      oracleSID: 'OracleSID',
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
      oracleSID: 'string',
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
  databaseName?: string;
  IP?: string;
  instanceID?: string;
  instanceType?: string;
  oracleSID?: string;
  ownerID?: string;
  password?: string;
  port?: string;
  role?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      IP: 'IP',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      oracleSID: 'OracleSID',
      ownerID: 'OwnerID',
      password: 'Password',
      port: 'Port',
      role: 'Role',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      IP: 'string',
      instanceID: 'string',
      instanceType: 'string',
      oracleSID: 'string',
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

export class ConfigureSynchronizationJobRequestDestinationEndpoint extends $tea.Model {
  dataBaseName?: string;
  IP?: string;
  instanceId?: string;
  instanceType?: string;
  password?: string;
  port?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dataBaseName: 'DataBaseName',
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
      dataBaseName: 'string',
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
  databaseName?: string;
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
      databaseName: 'DatabaseName',
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
      databaseName: 'string',
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

export class DescribeCheckJobsResponseBodyCheckJobs extends $tea.Model {
  chargeType?: string;
  checkPoint?: number;
  checkType?: number;
  diffCount?: number;
  diffSum?: number;
  dtsInstanceID?: string;
  dtsJobId?: string;
  finishCount?: number;
  groupId?: string;
  instanceClass?: string;
  jobName?: string;
  jobStepId?: string;
  parentJobType?: string;
  regionId?: string;
  status?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      checkPoint: 'CheckPoint',
      checkType: 'CheckType',
      diffCount: 'DiffCount',
      diffSum: 'DiffSum',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobId: 'DtsJobId',
      finishCount: 'FinishCount',
      groupId: 'GroupId',
      instanceClass: 'InstanceClass',
      jobName: 'JobName',
      jobStepId: 'JobStepId',
      parentJobType: 'ParentJobType',
      regionId: 'RegionId',
      status: 'Status',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      checkPoint: 'number',
      checkType: 'number',
      diffCount: 'number',
      diffSum: 'number',
      dtsInstanceID: 'string',
      dtsJobId: 'string',
      finishCount: 'number',
      groupId: 'string',
      instanceClass: 'string',
      jobName: 'string',
      jobStepId: 'string',
      parentJobType: 'string',
      regionId: 'string',
      status: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterOperateLogsResponseBodyDataPoints extends $tea.Model {
  content?: string;
  id?: string;
  logDatetime?: number;
  newValue?: string;
  oldValue?: string;
  operationName?: string;
  operationUser?: string;
  success?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      logDatetime: 'LogDatetime',
      newValue: 'NewValue',
      oldValue: 'OldValue',
      operationName: 'OperationName',
      operationUser: 'OperationUser',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'string',
      logDatetime: 'number',
      newValue: 'string',
      oldValue: 'string',
      operationName: 'string',
      operationUser: 'string',
      success: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerChannelResponseBodyConsumerChannels extends $tea.Model {
  consumerGroupId?: string;
  consumerGroupName?: string;
  consumerGroupUserName?: string;
  consumptionCheckpoint?: string;
  messageDelay?: number;
  unconsumedData?: number;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'ConsumerGroupId',
      consumerGroupName: 'ConsumerGroupName',
      consumerGroupUserName: 'ConsumerGroupUserName',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      messageDelay: 'MessageDelay',
      unconsumedData: 'UnconsumedData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      consumerGroupName: 'string',
      consumerGroupUserName: 'string',
      consumptionCheckpoint: 'string',
      messageDelay: 'number',
      unconsumedData: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerGroupResponseBodyConsumerChannelsDescribeConsumerChannel extends $tea.Model {
  consumerGroupID?: string;
  consumerGroupName?: string;
  consumerGroupUserName?: string;
  consumptionCheckpoint?: string;
  messageDelay?: number;
  unconsumedData?: number;
  static names(): { [key: string]: string } {
    return {
      consumerGroupID: 'ConsumerGroupID',
      consumerGroupName: 'ConsumerGroupName',
      consumerGroupUserName: 'ConsumerGroupUserName',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      messageDelay: 'MessageDelay',
      unconsumedData: 'UnconsumedData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupID: 'string',
      consumerGroupName: 'string',
      consumerGroupUserName: 'string',
      consumptionCheckpoint: 'string',
      messageDelay: 'number',
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

export class DescribeDataCheckTableDetailsResponseBodyTableDetails extends $tea.Model {
  bootTime?: string;
  diffCount?: number;
  errorCode?: number;
  finishCount?: number;
  id?: number;
  sourceDbName?: string;
  sourceTbName?: string;
  status?: string;
  targetDbName?: string;
  targetTbName?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bootTime: 'BootTime',
      diffCount: 'DiffCount',
      errorCode: 'ErrorCode',
      finishCount: 'FinishCount',
      id: 'Id',
      sourceDbName: 'SourceDbName',
      sourceTbName: 'SourceTbName',
      status: 'Status',
      targetDbName: 'TargetDbName',
      targetTbName: 'TargetTbName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootTime: 'string',
      diffCount: 'number',
      errorCode: 'number',
      finishCount: 'number',
      id: 'number',
      sourceDbName: 'string',
      sourceTbName: 'string',
      status: 'string',
      targetDbName: 'string',
      targetTbName: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCheckTableDiffDetailsResponseBodyDiffDetails extends $tea.Model {
  diff?: string;
  gmtCreated?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      diff: 'Diff',
      gmtCreated: 'GmtCreated',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diff: 'string',
      gmtCreated: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsEtlJobVersionInfoResponseBodyDtsEtlJobVersionInfos extends $tea.Model {
  createTime?: string;
  creator?: string;
  creatorName?: string;
  dtsInstanceId?: string;
  dtsJobId?: string;
  dtsJobName?: string;
  modifyTime?: string;
  safeCheckpoint?: string;
  status?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      modifyTime: 'ModifyTime',
      safeCheckpoint: 'SafeCheckpoint',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creator: 'string',
      creatorName: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      modifyTime: 'string',
      safeCheckpoint: 'string',
      status: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodyDataDeliveryChannelInfo extends $tea.Model {
  partitionNum?: number;
  publicDproxyUrl?: string;
  region?: string;
  topic?: string;
  vpcDproxyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      partitionNum: 'PartitionNum',
      publicDproxyUrl: 'PublicDproxyUrl',
      region: 'Region',
      topic: 'Topic',
      vpcDproxyUrl: 'VpcDproxyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitionNum: 'number',
      publicDproxyUrl: 'string',
      region: 'string',
      topic: 'string',
      vpcDproxyUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodyDataSynchronizationStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodyDestinationEndpoint extends $tea.Model {
  canModifyPassword?: boolean;
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      canModifyPassword: 'CanModifyPassword',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canModifyPassword: 'boolean',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
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

export class DescribeDtsJobDetailResponseBodyRetryState extends $tea.Model {
  errMessage?: string;
  jobId?: string;
  maxRetryTime?: number;
  module?: string;
  retryCount?: number;
  retryTarget?: string;
  retryTime?: number;
  retrying?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      jobId: 'JobId',
      maxRetryTime: 'MaxRetryTime',
      module: 'Module',
      retryCount: 'RetryCount',
      retryTarget: 'RetryTarget',
      retryTime: 'RetryTime',
      retrying: 'Retrying',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      jobId: 'string',
      maxRetryTime: 'number',
      module: 'string',
      retryCount: 'number',
      retryTarget: 'string',
      retryTime: 'number',
      retrying: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySourceEndpoint extends $tea.Model {
  aliyunUid?: string;
  canModifyPassword?: boolean;
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  roleName?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      canModifyPassword: 'CanModifyPassword',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      canModifyPassword: 'boolean',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobDataEtlStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobDataInitializationStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobDataSynchronizationStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobDestinationEndpoint extends $tea.Model {
  aliyunUid?: string;
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  roleName?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobMigrationMode extends $tea.Model {
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobPerformance extends $tea.Model {
  flow?: string;
  rps?: string;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      rps: 'Rps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      rps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobPrecheckStatusDetail extends $tea.Model {
  checkItem?: string;
  checkItemDescription?: string;
  checkResult?: string;
  failedReason?: string;
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
      checkItemDescription: 'CheckItemDescription',
      checkResult: 'CheckResult',
      failedReason: 'FailedReason',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: 'string',
      checkItemDescription: 'string',
      checkResult: 'string',
      failedReason: 'string',
      repairMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobPrecheckStatus extends $tea.Model {
  detail?: DescribeDtsJobDetailResponseBodySubDistributedJobPrecheckStatusDetail[];
  errorMessage?: string;
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubDistributedJobPrecheckStatusDetail },
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobRetryState extends $tea.Model {
  errMsg?: string;
  jobId?: string;
  maxRetryTime?: number;
  module?: string;
  retryCount?: number;
  retryTarget?: string;
  retryTime?: number;
  retrying?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      jobId: 'JobId',
      maxRetryTime: 'MaxRetryTime',
      module: 'Module',
      retryCount: 'RetryCount',
      retryTarget: 'RetryTarget',
      retryTime: 'RetryTime',
      retrying: 'Retrying',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      jobId: 'string',
      maxRetryTime: 'number',
      module: 'string',
      retryCount: 'number',
      retryTarget: 'string',
      retryTime: 'number',
      retrying: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataEtlStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataInitializationStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataSynchronizationStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDestinationEndpoint extends $tea.Model {
  aliyunUid?: string;
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  roleName?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobMigrationMode extends $tea.Model {
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPerformance extends $tea.Model {
  flow?: string;
  rps?: string;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      rps: 'Rps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      rps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatusDetail extends $tea.Model {
  checkItem?: string;
  checkItemDescription?: string;
  checkResult?: string;
  failedReason?: string;
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
      checkItemDescription: 'CheckItemDescription',
      checkResult: 'CheckResult',
      failedReason: 'FailedReason',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: 'string',
      checkItemDescription: 'string',
      checkResult: 'string',
      failedReason: 'string',
      repairMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatus extends $tea.Model {
  detail?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatusDetail[];
  errorMessage?: string;
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatusDetail },
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobRetryState extends $tea.Model {
  errMsg?: string;
  jobId?: string;
  maxRetryTime?: number;
  module?: string;
  retryCount?: number;
  retryTarget?: string;
  retryTime?: number;
  retrying?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      jobId: 'JobId',
      maxRetryTime: 'MaxRetryTime',
      module: 'Module',
      retryCount: 'RetryCount',
      retryTarget: 'RetryTarget',
      retryTime: 'RetryTime',
      retrying: 'Retrying',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      jobId: 'string',
      maxRetryTime: 'number',
      module: 'string',
      retryCount: 'number',
      retryTarget: 'string',
      retryTime: 'number',
      retrying: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSourceEndpoint extends $tea.Model {
  aliyunUid?: string;
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  roleName?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobStructureInitializationStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSubscriptionDataType extends $tea.Model {
  ddl?: boolean;
  dml?: boolean;
  static names(): { [key: string]: string } {
    return {
      ddl: 'Ddl',
      dml: 'Dml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddl: 'boolean',
      dml: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSubscriptionHost extends $tea.Model {
  privateHost?: string;
  publicHost?: string;
  vpcHost?: string;
  static names(): { [key: string]: string } {
    return {
      privateHost: 'PrivateHost',
      publicHost: 'PublicHost',
      vpcHost: 'VpcHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateHost: 'string',
      publicHost: 'string',
      vpcHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobTagList extends $tea.Model {
  aliUid?: number;
  creator?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  regionId?: string;
  resourceId?: string;
  resourceType?: string;
  scope?: string;
  srcRegion?: string;
  tagCategory?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      srcRegion: 'SrcRegion',
      tagCategory: 'TagCategory',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      creator: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      scope: 'string',
      srcRegion: 'string',
      tagCategory: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJob extends $tea.Model {
  appName?: string;
  beginTimestamp?: string;
  checkpoint?: string;
  consumptionCheckpoint?: string;
  consumptionClient?: string;
  createTime?: string;
  dataEtlStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataEtlStatus;
  dataInitializationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataInitializationStatus;
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataSynchronizationStatus;
  databaseCount?: number;
  dbObject?: string;
  delay?: number;
  destNetType?: string;
  destinationEndpoint?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDestinationEndpoint;
  dtsInstanceID?: string;
  dtsJobClass?: string;
  dtsJobDirection?: string;
  dtsJobId?: string;
  dtsJobName?: string;
  endTimestamp?: string;
  errorMessage?: string;
  etlCalculator?: string;
  expireTime?: string;
  finishTime?: string;
  groupId?: string;
  isDemoJob?: boolean;
  jobType?: string;
  maxDu?: number;
  migrationMode?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobMigrationMode;
  minDu?: number;
  originType?: string;
  payType?: string;
  performance?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPerformance;
  precheckStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatus;
  reserved?: string;
  retryState?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobRetryState;
  reverseJob?: any;
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSourceEndpoint;
  status?: string;
  structureInitializationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobStructureInitializationStatus;
  subscribeTopic?: string;
  subscriptionDataType?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSubscriptionDataType;
  subscriptionHost?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSubscriptionHost;
  synchronizationDirection?: string;
  tagList?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobTagList[];
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      beginTimestamp: 'BeginTimestamp',
      checkpoint: 'Checkpoint',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      consumptionClient: 'ConsumptionClient',
      createTime: 'CreateTime',
      dataEtlStatus: 'DataEtlStatus',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      databaseCount: 'DatabaseCount',
      dbObject: 'DbObject',
      delay: 'Delay',
      destNetType: 'DestNetType',
      destinationEndpoint: 'DestinationEndpoint',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      endTimestamp: 'EndTimestamp',
      errorMessage: 'ErrorMessage',
      etlCalculator: 'EtlCalculator',
      expireTime: 'ExpireTime',
      finishTime: 'FinishTime',
      groupId: 'GroupId',
      isDemoJob: 'IsDemoJob',
      jobType: 'JobType',
      maxDu: 'MaxDu',
      migrationMode: 'MigrationMode',
      minDu: 'MinDu',
      originType: 'OriginType',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      retryState: 'RetryState',
      reverseJob: 'ReverseJob',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
      subscribeTopic: 'SubscribeTopic',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionHost: 'SubscriptionHost',
      synchronizationDirection: 'SynchronizationDirection',
      tagList: 'TagList',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      beginTimestamp: 'string',
      checkpoint: 'string',
      consumptionCheckpoint: 'string',
      consumptionClient: 'string',
      createTime: 'string',
      dataEtlStatus: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataEtlStatus,
      dataInitializationStatus: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataSynchronizationStatus,
      databaseCount: 'number',
      dbObject: 'string',
      delay: 'number',
      destNetType: 'string',
      destinationEndpoint: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDestinationEndpoint,
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      endTimestamp: 'string',
      errorMessage: 'string',
      etlCalculator: 'string',
      expireTime: 'string',
      finishTime: 'string',
      groupId: 'string',
      isDemoJob: 'boolean',
      jobType: 'string',
      maxDu: 'number',
      migrationMode: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobMigrationMode,
      minDu: 'number',
      originType: 'string',
      payType: 'string',
      performance: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPerformance,
      precheckStatus: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatus,
      reserved: 'string',
      retryState: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobRetryState,
      reverseJob: 'any',
      sourceEndpoint: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSourceEndpoint,
      status: 'string',
      structureInitializationStatus: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobStructureInitializationStatus,
      subscribeTopic: 'string',
      subscriptionDataType: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSubscriptionDataType,
      subscriptionHost: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSubscriptionHost,
      synchronizationDirection: 'string',
      tagList: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobTagList },
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobSourceEndpoint extends $tea.Model {
  aliyunUid?: string;
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  roleName?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobStructureInitializationStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobSubscriptionDataType extends $tea.Model {
  ddl?: boolean;
  dml?: boolean;
  static names(): { [key: string]: string } {
    return {
      ddl: 'Ddl',
      dml: 'Dml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddl: 'boolean',
      dml: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobSubscriptionHost extends $tea.Model {
  privateHost?: string;
  publicHost?: string;
  vpcHost?: string;
  static names(): { [key: string]: string } {
    return {
      privateHost: 'PrivateHost',
      publicHost: 'PublicHost',
      vpcHost: 'VpcHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateHost: 'string',
      publicHost: 'string',
      vpcHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobTagList extends $tea.Model {
  aliUid?: number;
  creator?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  regionId?: string;
  resourceId?: string;
  resourceType?: string;
  scope?: string;
  srcRegion?: string;
  tagCategory?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      srcRegion: 'SrcRegion',
      tagCategory: 'TagCategory',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      creator: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      scope: 'string',
      srcRegion: 'string',
      tagCategory: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJob extends $tea.Model {
  appName?: string;
  beginTimestamp?: string;
  checkpoint?: string;
  consumptionCheckpoint?: string;
  consumptionClient?: string;
  createTime?: string;
  dataEtlStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobDataEtlStatus;
  dataInitializationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobDataInitializationStatus;
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobDataSynchronizationStatus;
  databaseCount?: number;
  dbObject?: string;
  delay?: number;
  destNetType?: string;
  destinationEndpoint?: DescribeDtsJobDetailResponseBodySubDistributedJobDestinationEndpoint;
  dtsInstanceID?: string;
  dtsJobClass?: string;
  dtsJobDirection?: string;
  dtsJobId?: string;
  dtsJobName?: string;
  endTimestamp?: string;
  errorMessage?: string;
  etlCalculator?: string;
  expireTime?: string;
  finishTime?: string;
  groupId?: string;
  isDemoJob?: boolean;
  jobType?: string;
  maxDu?: number;
  migrationMode?: DescribeDtsJobDetailResponseBodySubDistributedJobMigrationMode;
  minDu?: number;
  originType?: string;
  payType?: string;
  performance?: DescribeDtsJobDetailResponseBodySubDistributedJobPerformance;
  precheckStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobPrecheckStatus;
  reserved?: string;
  retryState?: DescribeDtsJobDetailResponseBodySubDistributedJobRetryState;
  reverseJob?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJob;
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySubDistributedJobSourceEndpoint;
  status?: string;
  structureInitializationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobStructureInitializationStatus;
  subSyncJob?: any[];
  subscribeTopic?: string;
  subscriptionDataType?: DescribeDtsJobDetailResponseBodySubDistributedJobSubscriptionDataType;
  subscriptionHost?: DescribeDtsJobDetailResponseBodySubDistributedJobSubscriptionHost;
  synchronizationDirection?: string;
  tagList?: DescribeDtsJobDetailResponseBodySubDistributedJobTagList[];
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      beginTimestamp: 'BeginTimestamp',
      checkpoint: 'Checkpoint',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      consumptionClient: 'ConsumptionClient',
      createTime: 'CreateTime',
      dataEtlStatus: 'DataEtlStatus',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      databaseCount: 'DatabaseCount',
      dbObject: 'DbObject',
      delay: 'Delay',
      destNetType: 'DestNetType',
      destinationEndpoint: 'DestinationEndpoint',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      endTimestamp: 'EndTimestamp',
      errorMessage: 'ErrorMessage',
      etlCalculator: 'EtlCalculator',
      expireTime: 'ExpireTime',
      finishTime: 'FinishTime',
      groupId: 'GroupId',
      isDemoJob: 'IsDemoJob',
      jobType: 'JobType',
      maxDu: 'MaxDu',
      migrationMode: 'MigrationMode',
      minDu: 'MinDu',
      originType: 'OriginType',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      retryState: 'RetryState',
      reverseJob: 'ReverseJob',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
      subSyncJob: 'SubSyncJob',
      subscribeTopic: 'SubscribeTopic',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionHost: 'SubscriptionHost',
      synchronizationDirection: 'SynchronizationDirection',
      tagList: 'TagList',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      beginTimestamp: 'string',
      checkpoint: 'string',
      consumptionCheckpoint: 'string',
      consumptionClient: 'string',
      createTime: 'string',
      dataEtlStatus: DescribeDtsJobDetailResponseBodySubDistributedJobDataEtlStatus,
      dataInitializationStatus: DescribeDtsJobDetailResponseBodySubDistributedJobDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobDetailResponseBodySubDistributedJobDataSynchronizationStatus,
      databaseCount: 'number',
      dbObject: 'string',
      delay: 'number',
      destNetType: 'string',
      destinationEndpoint: DescribeDtsJobDetailResponseBodySubDistributedJobDestinationEndpoint,
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      endTimestamp: 'string',
      errorMessage: 'string',
      etlCalculator: 'string',
      expireTime: 'string',
      finishTime: 'string',
      groupId: 'string',
      isDemoJob: 'boolean',
      jobType: 'string',
      maxDu: 'number',
      migrationMode: DescribeDtsJobDetailResponseBodySubDistributedJobMigrationMode,
      minDu: 'number',
      originType: 'string',
      payType: 'string',
      performance: DescribeDtsJobDetailResponseBodySubDistributedJobPerformance,
      precheckStatus: DescribeDtsJobDetailResponseBodySubDistributedJobPrecheckStatus,
      reserved: 'string',
      retryState: DescribeDtsJobDetailResponseBodySubDistributedJobRetryState,
      reverseJob: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJob,
      sourceEndpoint: DescribeDtsJobDetailResponseBodySubDistributedJobSourceEndpoint,
      status: 'string',
      structureInitializationStatus: DescribeDtsJobDetailResponseBodySubDistributedJobStructureInitializationStatus,
      subSyncJob: { 'type': 'array', 'itemType': 'any' },
      subscribeTopic: 'string',
      subscriptionDataType: DescribeDtsJobDetailResponseBodySubDistributedJobSubscriptionDataType,
      subscriptionHost: DescribeDtsJobDetailResponseBodySubDistributedJobSubscriptionHost,
      synchronizationDirection: 'string',
      tagList: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubDistributedJobTagList },
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobDataEtlStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobDataInitializationStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobDataSynchronizationStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobDestinationEndpoint extends $tea.Model {
  aliyunUid?: string;
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  roleName?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobMigrationMode extends $tea.Model {
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

export class DescribeDtsJobDetailResponseBodySubSyncJobPerformance extends $tea.Model {
  flow?: string;
  rps?: string;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      rps: 'Rps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      rps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobPrecheckStatusDetail extends $tea.Model {
  checkItem?: string;
  checkItemDescription?: string;
  checkResult?: string;
  failedReason?: string;
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
      checkItemDescription: 'CheckItemDescription',
      checkResult: 'CheckResult',
      failedReason: 'FailedReason',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: 'string',
      checkItemDescription: 'string',
      checkResult: 'string',
      failedReason: 'string',
      repairMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobPrecheckStatus extends $tea.Model {
  detail?: DescribeDtsJobDetailResponseBodySubSyncJobPrecheckStatusDetail[];
  errorMessage?: string;
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubSyncJobPrecheckStatusDetail },
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobRetryState extends $tea.Model {
  errMsg?: string;
  jobId?: string;
  maxRetryTime?: number;
  module?: string;
  retryCount?: number;
  retryTarget?: string;
  retryTime?: number;
  retrying?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      jobId: 'JobId',
      maxRetryTime: 'MaxRetryTime',
      module: 'Module',
      retryCount: 'RetryCount',
      retryTarget: 'RetryTarget',
      retryTime: 'RetryTime',
      retrying: 'Retrying',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      jobId: 'string',
      maxRetryTime: 'number',
      module: 'string',
      retryCount: 'number',
      retryTarget: 'string',
      retryTime: 'number',
      retrying: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataEtlStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataInitializationStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataSynchronizationStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDestinationEndpoint extends $tea.Model {
  aliyunUid?: string;
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  roleName?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobMigrationMode extends $tea.Model {
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

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPerformance extends $tea.Model {
  flow?: string;
  rps?: string;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      rps: 'Rps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      rps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPrecheckStatusDetail extends $tea.Model {
  checkItem?: string;
  checkItemDescription?: string;
  checkResult?: string;
  failedReason?: string;
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
      checkItemDescription: 'CheckItemDescription',
      checkResult: 'CheckResult',
      failedReason: 'FailedReason',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: 'string',
      checkItemDescription: 'string',
      checkResult: 'string',
      failedReason: 'string',
      repairMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPrecheckStatus extends $tea.Model {
  detail?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPrecheckStatusDetail[];
  errorMessage?: string;
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPrecheckStatusDetail },
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobRetryState extends $tea.Model {
  errMsg?: string;
  jobId?: string;
  maxRetryTime?: number;
  module?: string;
  retryCount?: number;
  retryTarget?: string;
  retryTime?: number;
  retrying?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      jobId: 'JobId',
      maxRetryTime: 'MaxRetryTime',
      module: 'Module',
      retryCount: 'RetryCount',
      retryTarget: 'RetryTarget',
      retryTime: 'RetryTime',
      retrying: 'Retrying',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      jobId: 'string',
      maxRetryTime: 'number',
      module: 'string',
      retryCount: 'number',
      retryTarget: 'string',
      retryTime: 'number',
      retrying: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSourceEndpoint extends $tea.Model {
  aliyunUid?: string;
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  roleName?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobStructureInitializationStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSubscriptionDataType extends $tea.Model {
  ddl?: boolean;
  dml?: boolean;
  static names(): { [key: string]: string } {
    return {
      ddl: 'Ddl',
      dml: 'Dml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddl: 'boolean',
      dml: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSubscriptionHost extends $tea.Model {
  privateHost?: string;
  publicHost?: string;
  vpcHost?: string;
  static names(): { [key: string]: string } {
    return {
      privateHost: 'PrivateHost',
      publicHost: 'PublicHost',
      vpcHost: 'VpcHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateHost: 'string',
      publicHost: 'string',
      vpcHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobTagList extends $tea.Model {
  aliUid?: number;
  creator?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  regionId?: string;
  resourceId?: string;
  resourceType?: string;
  scope?: string;
  srcRegion?: string;
  tagCategory?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      srcRegion: 'SrcRegion',
      tagCategory: 'TagCategory',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      creator: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      scope: 'string',
      srcRegion: 'string',
      tagCategory: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJob extends $tea.Model {
  appName?: string;
  beginTimestamp?: string;
  checkpoint?: string;
  consumptionCheckpoint?: string;
  consumptionClient?: string;
  createTime?: string;
  dataEtlStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataEtlStatus;
  dataInitializationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataInitializationStatus;
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataSynchronizationStatus;
  databaseCount?: number;
  dbObject?: string;
  delay?: number;
  destNetType?: string;
  destinationEndpoint?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDestinationEndpoint;
  dtsInstanceID?: string;
  dtsJobClass?: string;
  dtsJobDirection?: string;
  dtsJobId?: string;
  dtsJobName?: string;
  endTimestamp?: string;
  errorMessage?: string;
  etlCalculator?: string;
  expireTime?: string;
  finishTime?: string;
  groupId?: string;
  isDemoJob?: boolean;
  jobType?: string;
  migrationMode?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobMigrationMode;
  originType?: string;
  payType?: string;
  performance?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPerformance;
  precheckStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPrecheckStatus;
  reserved?: string;
  retryState?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobRetryState;
  reverseJob?: any;
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSourceEndpoint;
  status?: string;
  structureInitializationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobStructureInitializationStatus;
  subscribeTopic?: string;
  subscriptionDataType?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSubscriptionDataType;
  subscriptionHost?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSubscriptionHost;
  synchronizationDirection?: string;
  tagList?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobTagList[];
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      beginTimestamp: 'BeginTimestamp',
      checkpoint: 'Checkpoint',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      consumptionClient: 'ConsumptionClient',
      createTime: 'CreateTime',
      dataEtlStatus: 'DataEtlStatus',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      databaseCount: 'DatabaseCount',
      dbObject: 'DbObject',
      delay: 'Delay',
      destNetType: 'DestNetType',
      destinationEndpoint: 'DestinationEndpoint',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      endTimestamp: 'EndTimestamp',
      errorMessage: 'ErrorMessage',
      etlCalculator: 'EtlCalculator',
      expireTime: 'ExpireTime',
      finishTime: 'FinishTime',
      groupId: 'GroupId',
      isDemoJob: 'IsDemoJob',
      jobType: 'JobType',
      migrationMode: 'MigrationMode',
      originType: 'OriginType',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      retryState: 'RetryState',
      reverseJob: 'ReverseJob',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
      subscribeTopic: 'SubscribeTopic',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionHost: 'SubscriptionHost',
      synchronizationDirection: 'SynchronizationDirection',
      tagList: 'TagList',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      beginTimestamp: 'string',
      checkpoint: 'string',
      consumptionCheckpoint: 'string',
      consumptionClient: 'string',
      createTime: 'string',
      dataEtlStatus: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataEtlStatus,
      dataInitializationStatus: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataSynchronizationStatus,
      databaseCount: 'number',
      dbObject: 'string',
      delay: 'number',
      destNetType: 'string',
      destinationEndpoint: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDestinationEndpoint,
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      endTimestamp: 'string',
      errorMessage: 'string',
      etlCalculator: 'string',
      expireTime: 'string',
      finishTime: 'string',
      groupId: 'string',
      isDemoJob: 'boolean',
      jobType: 'string',
      migrationMode: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobMigrationMode,
      originType: 'string',
      payType: 'string',
      performance: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPerformance,
      precheckStatus: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPrecheckStatus,
      reserved: 'string',
      retryState: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobRetryState,
      reverseJob: 'any',
      sourceEndpoint: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSourceEndpoint,
      status: 'string',
      structureInitializationStatus: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobStructureInitializationStatus,
      subscribeTopic: 'string',
      subscriptionDataType: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSubscriptionDataType,
      subscriptionHost: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSubscriptionHost,
      synchronizationDirection: 'string',
      tagList: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubSyncJobReverseJobTagList },
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobSourceEndpoint extends $tea.Model {
  aliyunUid?: string;
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  roleName?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobStructureInitializationStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobSubscriptionDataType extends $tea.Model {
  ddl?: boolean;
  dml?: boolean;
  static names(): { [key: string]: string } {
    return {
      ddl: 'Ddl',
      dml: 'Dml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddl: 'boolean',
      dml: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobSubscriptionHost extends $tea.Model {
  privateHost?: string;
  publicHost?: string;
  vpcHost?: string;
  static names(): { [key: string]: string } {
    return {
      privateHost: 'PrivateHost',
      publicHost: 'PublicHost',
      vpcHost: 'VpcHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateHost: 'string',
      publicHost: 'string',
      vpcHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobTagList extends $tea.Model {
  aliUid?: number;
  creator?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  regionId?: string;
  resourceId?: string;
  resourceType?: string;
  scope?: string;
  srcRegion?: string;
  tagCategory?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      srcRegion: 'SrcRegion',
      tagCategory: 'TagCategory',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      creator: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      scope: 'string',
      srcRegion: 'string',
      tagCategory: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJob extends $tea.Model {
  appName?: string;
  beginTimestamp?: string;
  checkpoint?: string;
  consumptionCheckpoint?: string;
  consumptionClient?: string;
  createTime?: string;
  dataEtlStatus?: DescribeDtsJobDetailResponseBodySubSyncJobDataEtlStatus;
  dataInitializationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobDataInitializationStatus;
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobDataSynchronizationStatus;
  databaseCount?: number;
  dbObject?: string;
  delay?: number;
  destNetType?: string;
  destinationEndpoint?: DescribeDtsJobDetailResponseBodySubSyncJobDestinationEndpoint;
  dtsInstanceID?: string;
  dtsJobClass?: string;
  dtsJobDirection?: string;
  dtsJobId?: string;
  dtsJobName?: string;
  endTimestamp?: string;
  errorMessage?: string;
  etlCalculator?: string;
  expireTime?: string;
  finishTime?: string;
  groupId?: string;
  isDemoJob?: boolean;
  jobType?: string;
  maxDu?: number;
  migrationMode?: DescribeDtsJobDetailResponseBodySubSyncJobMigrationMode;
  minDu?: number;
  originType?: string;
  payType?: string;
  performance?: DescribeDtsJobDetailResponseBodySubSyncJobPerformance;
  precheckStatus?: DescribeDtsJobDetailResponseBodySubSyncJobPrecheckStatus;
  reserved?: string;
  retryState?: DescribeDtsJobDetailResponseBodySubSyncJobRetryState;
  reverseJob?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJob;
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySubSyncJobSourceEndpoint;
  status?: string;
  structureInitializationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobStructureInitializationStatus;
  subSyncJob?: any[];
  subscribeTopic?: string;
  subscriptionDataType?: DescribeDtsJobDetailResponseBodySubSyncJobSubscriptionDataType;
  subscriptionHost?: DescribeDtsJobDetailResponseBodySubSyncJobSubscriptionHost;
  synchronizationDirection?: string;
  tagList?: DescribeDtsJobDetailResponseBodySubSyncJobTagList[];
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      beginTimestamp: 'BeginTimestamp',
      checkpoint: 'Checkpoint',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      consumptionClient: 'ConsumptionClient',
      createTime: 'CreateTime',
      dataEtlStatus: 'DataEtlStatus',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      databaseCount: 'DatabaseCount',
      dbObject: 'DbObject',
      delay: 'Delay',
      destNetType: 'DestNetType',
      destinationEndpoint: 'DestinationEndpoint',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      endTimestamp: 'EndTimestamp',
      errorMessage: 'ErrorMessage',
      etlCalculator: 'EtlCalculator',
      expireTime: 'ExpireTime',
      finishTime: 'FinishTime',
      groupId: 'GroupId',
      isDemoJob: 'IsDemoJob',
      jobType: 'JobType',
      maxDu: 'MaxDu',
      migrationMode: 'MigrationMode',
      minDu: 'MinDu',
      originType: 'OriginType',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      retryState: 'RetryState',
      reverseJob: 'ReverseJob',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
      subSyncJob: 'SubSyncJob',
      subscribeTopic: 'SubscribeTopic',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionHost: 'SubscriptionHost',
      synchronizationDirection: 'SynchronizationDirection',
      tagList: 'TagList',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      beginTimestamp: 'string',
      checkpoint: 'string',
      consumptionCheckpoint: 'string',
      consumptionClient: 'string',
      createTime: 'string',
      dataEtlStatus: DescribeDtsJobDetailResponseBodySubSyncJobDataEtlStatus,
      dataInitializationStatus: DescribeDtsJobDetailResponseBodySubSyncJobDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobDetailResponseBodySubSyncJobDataSynchronizationStatus,
      databaseCount: 'number',
      dbObject: 'string',
      delay: 'number',
      destNetType: 'string',
      destinationEndpoint: DescribeDtsJobDetailResponseBodySubSyncJobDestinationEndpoint,
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      endTimestamp: 'string',
      errorMessage: 'string',
      etlCalculator: 'string',
      expireTime: 'string',
      finishTime: 'string',
      groupId: 'string',
      isDemoJob: 'boolean',
      jobType: 'string',
      maxDu: 'number',
      migrationMode: DescribeDtsJobDetailResponseBodySubSyncJobMigrationMode,
      minDu: 'number',
      originType: 'string',
      payType: 'string',
      performance: DescribeDtsJobDetailResponseBodySubSyncJobPerformance,
      precheckStatus: DescribeDtsJobDetailResponseBodySubSyncJobPrecheckStatus,
      reserved: 'string',
      retryState: DescribeDtsJobDetailResponseBodySubSyncJobRetryState,
      reverseJob: DescribeDtsJobDetailResponseBodySubSyncJobReverseJob,
      sourceEndpoint: DescribeDtsJobDetailResponseBodySubSyncJobSourceEndpoint,
      status: 'string',
      structureInitializationStatus: DescribeDtsJobDetailResponseBodySubSyncJobStructureInitializationStatus,
      subSyncJob: { 'type': 'array', 'itemType': 'any' },
      subscribeTopic: 'string',
      subscriptionDataType: DescribeDtsJobDetailResponseBodySubSyncJobSubscriptionDataType,
      subscriptionHost: DescribeDtsJobDetailResponseBodySubSyncJobSubscriptionHost,
      synchronizationDirection: 'string',
      tagList: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubSyncJobTagList },
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubscriptionDataType extends $tea.Model {
  ddl?: boolean;
  dml?: boolean;
  static names(): { [key: string]: string } {
    return {
      ddl: 'Ddl',
      dml: 'Dml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddl: 'boolean',
      dml: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubscriptionHost extends $tea.Model {
  privateHost?: string;
  publicHost?: string;
  vpcHost?: string;
  static names(): { [key: string]: string } {
    return {
      privateHost: 'PrivateHost',
      publicHost: 'PublicHost',
      vpcHost: 'VpcHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateHost: 'string',
      publicHost: 'string',
      vpcHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListDataCloudStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListDataEtlStatus extends $tea.Model {
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

export class DescribeDtsJobsResponseBodyDtsJobListDataInitializationStatus extends $tea.Model {
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

export class DescribeDtsJobsResponseBodyDtsJobListDataSynchronizationStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListDestinationEndpoint extends $tea.Model {
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListErrorDetails extends $tea.Model {
  errorCode?: string;
  helpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      helpUrl: 'HelpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      helpUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListFullDataCheckStatus extends $tea.Model {
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

export class DescribeDtsJobsResponseBodyDtsJobListIncDataCheckStatus extends $tea.Model {
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

export class DescribeDtsJobsResponseBodyDtsJobListMigrationMode extends $tea.Model {
  dataInitialization?: boolean;
  dataSynchronization?: boolean;
  fullDataCheck?: boolean;
  incDataCheck?: boolean;
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      fullDataCheck: 'FullDataCheck',
      incDataCheck: 'IncDataCheck',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      fullDataCheck: 'boolean',
      incDataCheck: 'boolean',
      structureInitialization: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListPerformance extends $tea.Model {
  flow?: string;
  rps?: string;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      rps: 'Rps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      rps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListPrecheckStatusDetail extends $tea.Model {
  checkItem?: string;
  checkItemDescription?: string;
  checkResult?: string;
  failedReason?: string;
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
      checkItemDescription: 'CheckItemDescription',
      checkResult: 'CheckResult',
      failedReason: 'FailedReason',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: 'string',
      checkItemDescription: 'string',
      checkResult: 'string',
      failedReason: 'string',
      repairMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListPrecheckStatus extends $tea.Model {
  detail?: DescribeDtsJobsResponseBodyDtsJobListPrecheckStatusDetail[];
  errorMessage?: string;
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobListPrecheckStatusDetail },
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListRetryState extends $tea.Model {
  errMessage?: string;
  jobId?: string;
  maxRetryTime?: number;
  migrationErrCode?: string;
  migrationErrHelpDocId?: string;
  migrationErrHelpDocKey?: string;
  migrationErrMsg?: string;
  migrationErrType?: string;
  migrationErrWorkaround?: string;
  module?: string;
  retryCount?: number;
  retryTarget?: string;
  retryTime?: number;
  retrying?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      jobId: 'JobId',
      maxRetryTime: 'MaxRetryTime',
      migrationErrCode: 'MigrationErrCode',
      migrationErrHelpDocId: 'MigrationErrHelpDocId',
      migrationErrHelpDocKey: 'MigrationErrHelpDocKey',
      migrationErrMsg: 'MigrationErrMsg',
      migrationErrType: 'MigrationErrType',
      migrationErrWorkaround: 'MigrationErrWorkaround',
      module: 'Module',
      retryCount: 'RetryCount',
      retryTarget: 'RetryTarget',
      retryTime: 'RetryTime',
      retrying: 'Retrying',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      jobId: 'string',
      maxRetryTime: 'number',
      migrationErrCode: 'string',
      migrationErrHelpDocId: 'string',
      migrationErrHelpDocKey: 'string',
      migrationErrMsg: 'string',
      migrationErrType: 'string',
      migrationErrWorkaround: 'string',
      module: 'string',
      retryCount: 'number',
      retryTarget: 'string',
      retryTime: 'number',
      retrying: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobDataInitializationStatus extends $tea.Model {
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

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobDataSynchronizationStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobDestinationEndpoint extends $tea.Model {
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobErrorDetails extends $tea.Model {
  errorCode?: string;
  helpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      helpUrl: 'HelpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      helpUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobFullDataCheckStatus extends $tea.Model {
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

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobIncDataCheckStatus extends $tea.Model {
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

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobMigrationMode extends $tea.Model {
  dataInitialization?: boolean;
  dataSynchronization?: boolean;
  fullDataCheck?: boolean;
  incDataCheck?: boolean;
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      fullDataCheck: 'FullDataCheck',
      incDataCheck: 'IncDataCheck',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      fullDataCheck: 'boolean',
      incDataCheck: 'boolean',
      structureInitialization: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobPerformance extends $tea.Model {
  flow?: string;
  rps?: string;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      rps: 'Rps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      rps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatusDetail extends $tea.Model {
  checkItem?: string;
  checkItemDescription?: string;
  checkResult?: string;
  failedReason?: string;
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
      checkItemDescription: 'CheckItemDescription',
      checkResult: 'CheckResult',
      failedReason: 'FailedReason',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: 'string',
      checkItemDescription: 'string',
      checkResult: 'string',
      failedReason: 'string',
      repairMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatus extends $tea.Model {
  detail?: DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatusDetail[];
  errorMessage?: string;
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatusDetail },
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobSourceEndpoint extends $tea.Model {
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureInitializationStatus extends $tea.Model {
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

export class DescribeDtsJobsResponseBodyDtsJobListReverseJob extends $tea.Model {
  checkpoint?: string;
  cpuUsage?: string;
  createTime?: string;
  dataInitializationStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataInitializationStatus;
  dataSynchronizationStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataSynchronizationStatus;
  dbObject?: string;
  dedicatedClusterId?: string;
  delay?: number;
  destinationEndpoint?: DescribeDtsJobsResponseBodyDtsJobListReverseJobDestinationEndpoint;
  dtsInstanceID?: string;
  dtsJobClass?: string;
  dtsJobDirection?: string;
  dtsJobId?: string;
  dtsJobName?: string;
  duUsage?: number;
  errorDetails?: DescribeDtsJobsResponseBodyDtsJobListReverseJobErrorDetails[];
  errorMessage?: string;
  etlSafeCheckpoint?: string;
  expireTime?: string;
  fullDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobFullDataCheckStatus;
  incDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobIncDataCheckStatus;
  maxDu?: number;
  memUsage?: string;
  migrationMode?: DescribeDtsJobsResponseBodyDtsJobListReverseJobMigrationMode;
  minDu?: number;
  payType?: string;
  performance?: DescribeDtsJobsResponseBodyDtsJobListReverseJobPerformance;
  precheckStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatus;
  reserved?: string;
  sourceEndpoint?: DescribeDtsJobsResponseBodyDtsJobListReverseJobSourceEndpoint;
  status?: string;
  structureInitializationStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureInitializationStatus;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      cpuUsage: 'CpuUsage',
      createTime: 'CreateTime',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      dbObject: 'DbObject',
      dedicatedClusterId: 'DedicatedClusterId',
      delay: 'Delay',
      destinationEndpoint: 'DestinationEndpoint',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      duUsage: 'DuUsage',
      errorDetails: 'ErrorDetails',
      errorMessage: 'ErrorMessage',
      etlSafeCheckpoint: 'EtlSafeCheckpoint',
      expireTime: 'ExpireTime',
      fullDataCheckStatus: 'FullDataCheckStatus',
      incDataCheckStatus: 'IncDataCheckStatus',
      maxDu: 'MaxDu',
      memUsage: 'MemUsage',
      migrationMode: 'MigrationMode',
      minDu: 'MinDu',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      cpuUsage: 'string',
      createTime: 'string',
      dataInitializationStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataSynchronizationStatus,
      dbObject: 'string',
      dedicatedClusterId: 'string',
      delay: 'number',
      destinationEndpoint: DescribeDtsJobsResponseBodyDtsJobListReverseJobDestinationEndpoint,
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      duUsage: 'number',
      errorDetails: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobListReverseJobErrorDetails },
      errorMessage: 'string',
      etlSafeCheckpoint: 'string',
      expireTime: 'string',
      fullDataCheckStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobFullDataCheckStatus,
      incDataCheckStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobIncDataCheckStatus,
      maxDu: 'number',
      memUsage: 'string',
      migrationMode: DescribeDtsJobsResponseBodyDtsJobListReverseJobMigrationMode,
      minDu: 'number',
      payType: 'string',
      performance: DescribeDtsJobsResponseBodyDtsJobListReverseJobPerformance,
      precheckStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatus,
      reserved: 'string',
      sourceEndpoint: DescribeDtsJobsResponseBodyDtsJobListReverseJobSourceEndpoint,
      status: 'string',
      structureInitializationStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureInitializationStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListSourceEndpoint extends $tea.Model {
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListStructureInitializationStatus extends $tea.Model {
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

export class DescribeDtsJobsResponseBodyDtsJobListTagList extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobList extends $tea.Model {
  appName?: string;
  beginTimestamp?: string;
  checkpoint?: string;
  consumptionCheckpoint?: string;
  consumptionClient?: string;
  cpuUsage?: string;
  createTime?: string;
  dataCloudStatus?: DescribeDtsJobsResponseBodyDtsJobListDataCloudStatus;
  dataEtlStatus?: DescribeDtsJobsResponseBodyDtsJobListDataEtlStatus;
  dataInitializationStatus?: DescribeDtsJobsResponseBodyDtsJobListDataInitializationStatus;
  dataSynchronizationStatus?: DescribeDtsJobsResponseBodyDtsJobListDataSynchronizationStatus;
  dbObject?: string;
  dedicatedClusterId?: string;
  delay?: number;
  destinationEndpoint?: DescribeDtsJobsResponseBodyDtsJobListDestinationEndpoint;
  dtsBisLabel?: string;
  dtsInstanceID?: string;
  dtsJobClass?: string;
  dtsJobDirection?: string;
  dtsJobId?: string;
  dtsJobName?: string;
  duUsage?: number;
  endTimestamp?: string;
  errorDetails?: DescribeDtsJobsResponseBodyDtsJobListErrorDetails[];
  errorMessage?: string;
  etlSafeCheckpoint?: string;
  expireTime?: string;
  fullDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListFullDataCheckStatus;
  incDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListIncDataCheckStatus;
  jobType?: string;
  maxDu?: number;
  memUsage?: string;
  migrationErrCode?: string;
  migrationErrHelpDocId?: string;
  migrationErrHelpDocKey?: string;
  migrationErrMsg?: string;
  migrationErrType?: string;
  migrationErrWorkaround?: string;
  migrationMode?: DescribeDtsJobsResponseBodyDtsJobListMigrationMode;
  minDu?: number;
  originType?: string;
  payType?: string;
  performance?: DescribeDtsJobsResponseBodyDtsJobListPerformance;
  precheckStatus?: DescribeDtsJobsResponseBodyDtsJobListPrecheckStatus;
  reserved?: string;
  resourceGroupDisplayName?: string;
  resourceGroupId?: string;
  retryState?: DescribeDtsJobsResponseBodyDtsJobListRetryState;
  reverseJob?: DescribeDtsJobsResponseBodyDtsJobListReverseJob;
  sourceEndpoint?: DescribeDtsJobsResponseBodyDtsJobListSourceEndpoint;
  status?: string;
  structureInitializationStatus?: DescribeDtsJobsResponseBodyDtsJobListStructureInitializationStatus;
  tagList?: DescribeDtsJobsResponseBodyDtsJobListTagList[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      beginTimestamp: 'BeginTimestamp',
      checkpoint: 'Checkpoint',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      consumptionClient: 'ConsumptionClient',
      cpuUsage: 'CpuUsage',
      createTime: 'CreateTime',
      dataCloudStatus: 'DataCloudStatus',
      dataEtlStatus: 'DataEtlStatus',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      dbObject: 'DbObject',
      dedicatedClusterId: 'DedicatedClusterId',
      delay: 'Delay',
      destinationEndpoint: 'DestinationEndpoint',
      dtsBisLabel: 'DtsBisLabel',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      duUsage: 'DuUsage',
      endTimestamp: 'EndTimestamp',
      errorDetails: 'ErrorDetails',
      errorMessage: 'ErrorMessage',
      etlSafeCheckpoint: 'EtlSafeCheckpoint',
      expireTime: 'ExpireTime',
      fullDataCheckStatus: 'FullDataCheckStatus',
      incDataCheckStatus: 'IncDataCheckStatus',
      jobType: 'JobType',
      maxDu: 'MaxDu',
      memUsage: 'MemUsage',
      migrationErrCode: 'MigrationErrCode',
      migrationErrHelpDocId: 'MigrationErrHelpDocId',
      migrationErrHelpDocKey: 'MigrationErrHelpDocKey',
      migrationErrMsg: 'MigrationErrMsg',
      migrationErrType: 'MigrationErrType',
      migrationErrWorkaround: 'MigrationErrWorkaround',
      migrationMode: 'MigrationMode',
      minDu: 'MinDu',
      originType: 'OriginType',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      resourceGroupDisplayName: 'ResourceGroupDisplayName',
      resourceGroupId: 'ResourceGroupId',
      retryState: 'RetryState',
      reverseJob: 'ReverseJob',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
      tagList: 'TagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      beginTimestamp: 'string',
      checkpoint: 'string',
      consumptionCheckpoint: 'string',
      consumptionClient: 'string',
      cpuUsage: 'string',
      createTime: 'string',
      dataCloudStatus: DescribeDtsJobsResponseBodyDtsJobListDataCloudStatus,
      dataEtlStatus: DescribeDtsJobsResponseBodyDtsJobListDataEtlStatus,
      dataInitializationStatus: DescribeDtsJobsResponseBodyDtsJobListDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobsResponseBodyDtsJobListDataSynchronizationStatus,
      dbObject: 'string',
      dedicatedClusterId: 'string',
      delay: 'number',
      destinationEndpoint: DescribeDtsJobsResponseBodyDtsJobListDestinationEndpoint,
      dtsBisLabel: 'string',
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      duUsage: 'number',
      endTimestamp: 'string',
      errorDetails: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobListErrorDetails },
      errorMessage: 'string',
      etlSafeCheckpoint: 'string',
      expireTime: 'string',
      fullDataCheckStatus: DescribeDtsJobsResponseBodyDtsJobListFullDataCheckStatus,
      incDataCheckStatus: DescribeDtsJobsResponseBodyDtsJobListIncDataCheckStatus,
      jobType: 'string',
      maxDu: 'number',
      memUsage: 'string',
      migrationErrCode: 'string',
      migrationErrHelpDocId: 'string',
      migrationErrHelpDocKey: 'string',
      migrationErrMsg: 'string',
      migrationErrType: 'string',
      migrationErrWorkaround: 'string',
      migrationMode: DescribeDtsJobsResponseBodyDtsJobListMigrationMode,
      minDu: 'number',
      originType: 'string',
      payType: 'string',
      performance: DescribeDtsJobsResponseBodyDtsJobListPerformance,
      precheckStatus: DescribeDtsJobsResponseBodyDtsJobListPrecheckStatus,
      reserved: 'string',
      resourceGroupDisplayName: 'string',
      resourceGroupId: 'string',
      retryState: DescribeDtsJobsResponseBodyDtsJobListRetryState,
      reverseJob: DescribeDtsJobsResponseBodyDtsJobListReverseJob,
      sourceEndpoint: DescribeDtsJobsResponseBodyDtsJobListSourceEndpoint,
      status: 'string',
      structureInitializationStatus: DescribeDtsJobsResponseBodyDtsJobListStructureInitializationStatus,
      tagList: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobListTagList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListDataEtlStatus extends $tea.Model {
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

export class DescribeDtsJobsResponseBodyEtlDemoListDataInitializationStatus extends $tea.Model {
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

export class DescribeDtsJobsResponseBodyEtlDemoListDataSynchronizationStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListDestinationEndpoint extends $tea.Model {
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListMigrationMode extends $tea.Model {
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

export class DescribeDtsJobsResponseBodyEtlDemoListPerformance extends $tea.Model {
  flow?: string;
  rps?: string;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      rps: 'Rps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      rps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListPrecheckStatusDetail extends $tea.Model {
  checkItem?: string;
  checkItemDescription?: string;
  checkResult?: string;
  failedReason?: string;
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
      checkItemDescription: 'CheckItemDescription',
      checkResult: 'CheckResult',
      failedReason: 'FailedReason',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: 'string',
      checkItemDescription: 'string',
      checkResult: 'string',
      failedReason: 'string',
      repairMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListPrecheckStatus extends $tea.Model {
  detail?: DescribeDtsJobsResponseBodyEtlDemoListPrecheckStatusDetail[];
  errorMessage?: string;
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyEtlDemoListPrecheckStatusDetail },
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListRetryState extends $tea.Model {
  errMessage?: string;
  jobId?: string;
  maxRetryTime?: number;
  module?: string;
  retryCount?: number;
  retryTarget?: string;
  retryTime?: number;
  retrying?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      jobId: 'JobId',
      maxRetryTime: 'MaxRetryTime',
      module: 'Module',
      retryCount: 'RetryCount',
      retryTarget: 'RetryTarget',
      retryTime: 'RetryTime',
      retrying: 'Retrying',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      jobId: 'string',
      maxRetryTime: 'number',
      module: 'string',
      retryCount: 'number',
      retryTarget: 'string',
      retryTime: 'number',
      retrying: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataInitializationStatus extends $tea.Model {
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

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataSynchronizationStatus extends $tea.Model {
  errorMessage?: string;
  needUpgrade?: boolean;
  percent?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobDestinationEndpoint extends $tea.Model {
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobMigrationMode extends $tea.Model {
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

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobPerformance extends $tea.Model {
  flow?: string;
  rps?: string;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      rps: 'Rps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      rps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatusDetail extends $tea.Model {
  checkItem?: string;
  checkItemDescription?: string;
  checkResult?: string;
  failedReason?: string;
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
      checkItemDescription: 'CheckItemDescription',
      checkResult: 'CheckResult',
      failedReason: 'FailedReason',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: 'string',
      checkItemDescription: 'string',
      checkResult: 'string',
      failedReason: 'string',
      repairMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatus extends $tea.Model {
  detail?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatusDetail[];
  errorMessage?: string;
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatusDetail },
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobSourceEndpoint extends $tea.Model {
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobStructureInitializationStatus extends $tea.Model {
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

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJob extends $tea.Model {
  checkpoint?: string;
  createTime?: string;
  dataInitializationStatus?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataInitializationStatus;
  dataSynchronizationStatus?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataSynchronizationStatus;
  dbObject?: string;
  delay?: number;
  destinationEndpoint?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDestinationEndpoint;
  dtsInstanceID?: string;
  dtsJobClass?: string;
  dtsJobDirection?: string;
  dtsJobId?: string;
  dtsJobName?: string;
  errorMessage?: string;
  etlSafeCheckpoint?: string;
  expireTime?: string;
  migrationMode?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobMigrationMode;
  payType?: string;
  performance?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobPerformance;
  precheckStatus?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatus;
  reserved?: string;
  sourceEndpoint?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobSourceEndpoint;
  status?: string;
  structureInitializationStatus?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobStructureInitializationStatus;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      createTime: 'CreateTime',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      dbObject: 'DbObject',
      delay: 'Delay',
      destinationEndpoint: 'DestinationEndpoint',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      errorMessage: 'ErrorMessage',
      etlSafeCheckpoint: 'EtlSafeCheckpoint',
      expireTime: 'ExpireTime',
      migrationMode: 'MigrationMode',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      createTime: 'string',
      dataInitializationStatus: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataSynchronizationStatus,
      dbObject: 'string',
      delay: 'number',
      destinationEndpoint: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDestinationEndpoint,
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      errorMessage: 'string',
      etlSafeCheckpoint: 'string',
      expireTime: 'string',
      migrationMode: DescribeDtsJobsResponseBodyEtlDemoListReverseJobMigrationMode,
      payType: 'string',
      performance: DescribeDtsJobsResponseBodyEtlDemoListReverseJobPerformance,
      precheckStatus: DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatus,
      reserved: 'string',
      sourceEndpoint: DescribeDtsJobsResponseBodyEtlDemoListReverseJobSourceEndpoint,
      status: 'string',
      structureInitializationStatus: DescribeDtsJobsResponseBodyEtlDemoListReverseJobStructureInitializationStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListSourceEndpoint extends $tea.Model {
  databaseName?: string;
  engineName?: string;
  instanceID?: string;
  instanceType?: string;
  ip?: string;
  oracleSID?: string;
  port?: string;
  region?: string;
  sslSolutionEnum?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListStructureInitializationStatus extends $tea.Model {
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

export class DescribeDtsJobsResponseBodyEtlDemoListTagList extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoList extends $tea.Model {
  appName?: string;
  beginTimestamp?: string;
  checkpoint?: string;
  consumptionCheckpoint?: string;
  consumptionClient?: string;
  createTime?: string;
  dataEtlStatus?: DescribeDtsJobsResponseBodyEtlDemoListDataEtlStatus;
  dataInitializationStatus?: DescribeDtsJobsResponseBodyEtlDemoListDataInitializationStatus;
  dataSynchronizationStatus?: DescribeDtsJobsResponseBodyEtlDemoListDataSynchronizationStatus;
  dbObject?: string;
  delay?: number;
  destinationEndpoint?: DescribeDtsJobsResponseBodyEtlDemoListDestinationEndpoint;
  dtsInstanceID?: string;
  dtsJobClass?: string;
  dtsJobDirection?: string;
  dtsJobId?: string;
  dtsJobName?: string;
  endTimestamp?: string;
  errorMessage?: string;
  etlSafeCheckpoint?: string;
  expireTime?: string;
  jobType?: string;
  migrationMode?: DescribeDtsJobsResponseBodyEtlDemoListMigrationMode;
  originType?: string;
  payType?: string;
  performance?: DescribeDtsJobsResponseBodyEtlDemoListPerformance;
  precheckStatus?: DescribeDtsJobsResponseBodyEtlDemoListPrecheckStatus;
  reserved?: string;
  resourceGroupDisplayName?: string;
  resourceGroupId?: string;
  retryState?: DescribeDtsJobsResponseBodyEtlDemoListRetryState;
  reverseJob?: DescribeDtsJobsResponseBodyEtlDemoListReverseJob;
  sourceEndpoint?: DescribeDtsJobsResponseBodyEtlDemoListSourceEndpoint;
  status?: string;
  structureInitializationStatus?: DescribeDtsJobsResponseBodyEtlDemoListStructureInitializationStatus;
  tagList?: DescribeDtsJobsResponseBodyEtlDemoListTagList[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      beginTimestamp: 'BeginTimestamp',
      checkpoint: 'Checkpoint',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      consumptionClient: 'ConsumptionClient',
      createTime: 'CreateTime',
      dataEtlStatus: 'DataEtlStatus',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      dbObject: 'DbObject',
      delay: 'Delay',
      destinationEndpoint: 'DestinationEndpoint',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      endTimestamp: 'EndTimestamp',
      errorMessage: 'ErrorMessage',
      etlSafeCheckpoint: 'EtlSafeCheckpoint',
      expireTime: 'ExpireTime',
      jobType: 'JobType',
      migrationMode: 'MigrationMode',
      originType: 'OriginType',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      resourceGroupDisplayName: 'ResourceGroupDisplayName',
      resourceGroupId: 'ResourceGroupId',
      retryState: 'RetryState',
      reverseJob: 'ReverseJob',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
      tagList: 'TagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      beginTimestamp: 'string',
      checkpoint: 'string',
      consumptionCheckpoint: 'string',
      consumptionClient: 'string',
      createTime: 'string',
      dataEtlStatus: DescribeDtsJobsResponseBodyEtlDemoListDataEtlStatus,
      dataInitializationStatus: DescribeDtsJobsResponseBodyEtlDemoListDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobsResponseBodyEtlDemoListDataSynchronizationStatus,
      dbObject: 'string',
      delay: 'number',
      destinationEndpoint: DescribeDtsJobsResponseBodyEtlDemoListDestinationEndpoint,
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      endTimestamp: 'string',
      errorMessage: 'string',
      etlSafeCheckpoint: 'string',
      expireTime: 'string',
      jobType: 'string',
      migrationMode: DescribeDtsJobsResponseBodyEtlDemoListMigrationMode,
      originType: 'string',
      payType: 'string',
      performance: DescribeDtsJobsResponseBodyEtlDemoListPerformance,
      precheckStatus: DescribeDtsJobsResponseBodyEtlDemoListPrecheckStatus,
      reserved: 'string',
      resourceGroupDisplayName: 'string',
      resourceGroupId: 'string',
      retryState: DescribeDtsJobsResponseBodyEtlDemoListRetryState,
      reverseJob: DescribeDtsJobsResponseBodyEtlDemoListReverseJob,
      sourceEndpoint: DescribeDtsJobsResponseBodyEtlDemoListSourceEndpoint,
      status: 'string',
      structureInitializationStatus: DescribeDtsJobsResponseBodyEtlDemoListStructureInitializationStatus,
      tagList: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyEtlDemoListTagList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsServiceLogResponseBodyServiceLogContexts extends $tea.Model {
  context?: string;
  state?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      state: 'State',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      state: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEtlJobLogsResponseBodyEtlRunningLogs extends $tea.Model {
  content?: string;
  contentKey?: string;
  etlId?: string;
  logDatetime?: string;
  status?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentKey: 'ContentKey',
      etlId: 'EtlId',
      logDatetime: 'LogDatetime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentKey: 'string',
      etlId: 'string',
      logDatetime: 'string',
      status: 'string',
      userId: 'string',
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

export class DescribeJobMonitorRuleResponseBodyMonitorRules extends $tea.Model {
  delayRuleTime?: number;
  jobId?: string;
  jobType?: string;
  noticeValue?: number;
  period?: number;
  phone?: string;
  state?: string;
  times?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      delayRuleTime: 'DelayRuleTime',
      jobId: 'JobId',
      jobType: 'JobType',
      noticeValue: 'NoticeValue',
      period: 'Period',
      phone: 'Phone',
      state: 'State',
      times: 'Times',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayRuleTime: 'number',
      jobId: 'string',
      jobType: 'string',
      noticeValue: 'number',
      period: 'number',
      phone: 'string',
      state: 'string',
      times: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricListResponseBodyDataPoints extends $tea.Model {
  statistics?: number;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: 'number',
      timestamp: 'number',
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

export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJob extends $tea.Model {
  dataInitialization?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization;
  dataSynchronization?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization;
  destinationEndpoint?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDestinationEndpoint;
  instanceCreateTime?: string;
  jobCreateTime?: string;
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
  tags?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTags;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      destinationEndpoint: 'DestinationEndpoint',
      instanceCreateTime: 'InstanceCreateTime',
      jobCreateTime: 'JobCreateTime',
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
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization,
      dataSynchronization: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization,
      destinationEndpoint: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDestinationEndpoint,
      instanceCreateTime: 'string',
      jobCreateTime: 'string',
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
      tags: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTags,
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

export class DescribePreCheckStatusResponseBodyAnalysisJobProgressLogs extends $tea.Model {
  errData?: string;
  errMsg?: string;
  errType?: string;
  logLevel?: string;
  static names(): { [key: string]: string } {
    return {
      errData: 'ErrData',
      errMsg: 'ErrMsg',
      errType: 'ErrType',
      logLevel: 'LogLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errData: 'string',
      errMsg: 'string',
      errType: 'string',
      logLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodyAnalysisJobProgress extends $tea.Model {
  bootTime?: string;
  canSkip?: boolean;
  current?: string;
  ddlSql?: string;
  delaySeconds?: number;
  destSchema?: string;
  diffRow?: number;
  errDetail?: string;
  errMsg?: string;
  finishTime?: string;
  id?: string;
  ignoreFlag?: string;
  item?: string;
  jobId?: string;
  logs?: DescribePreCheckStatusResponseBodyAnalysisJobProgressLogs[];
  names?: string;
  orderNum?: number;
  parentObj?: string;
  repairMethod?: string;
  skip?: boolean;
  sourceSchema?: string;
  state?: string;
  sub?: string;
  targetNames?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      bootTime: 'BootTime',
      canSkip: 'CanSkip',
      current: 'Current',
      ddlSql: 'DdlSql',
      delaySeconds: 'DelaySeconds',
      destSchema: 'DestSchema',
      diffRow: 'DiffRow',
      errDetail: 'ErrDetail',
      errMsg: 'ErrMsg',
      finishTime: 'FinishTime',
      id: 'Id',
      ignoreFlag: 'IgnoreFlag',
      item: 'Item',
      jobId: 'JobId',
      logs: 'Logs',
      names: 'Names',
      orderNum: 'OrderNum',
      parentObj: 'ParentObj',
      repairMethod: 'RepairMethod',
      skip: 'Skip',
      sourceSchema: 'SourceSchema',
      state: 'State',
      sub: 'Sub',
      targetNames: 'TargetNames',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootTime: 'string',
      canSkip: 'boolean',
      current: 'string',
      ddlSql: 'string',
      delaySeconds: 'number',
      destSchema: 'string',
      diffRow: 'number',
      errDetail: 'string',
      errMsg: 'string',
      finishTime: 'string',
      id: 'string',
      ignoreFlag: 'string',
      item: 'string',
      jobId: 'string',
      logs: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyAnalysisJobProgressLogs },
      names: 'string',
      orderNum: 'number',
      parentObj: 'string',
      repairMethod: 'string',
      skip: 'boolean',
      sourceSchema: 'string',
      state: 'string',
      sub: 'string',
      targetNames: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgressLogs extends $tea.Model {
  errData?: string;
  errMsg?: string;
  errType?: string;
  logLevel?: string;
  static names(): { [key: string]: string } {
    return {
      errData: 'ErrData',
      errMsg: 'ErrMsg',
      errType: 'ErrType',
      logLevel: 'LogLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errData: 'string',
      errMsg: 'string',
      errType: 'string',
      logLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgress extends $tea.Model {
  bootTime?: string;
  canSkip?: boolean;
  current?: string;
  ddlSql?: string;
  delaySeconds?: number;
  destSchema?: string;
  diffRow?: number;
  errDetail?: string;
  errMsg?: string;
  finishTime?: string;
  id?: string;
  ignoreFlag?: string;
  item?: string;
  jobId?: string;
  logs?: DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgressLogs[];
  names?: string;
  orderNum?: number;
  parentObj?: string;
  repairMethod?: string;
  skip?: boolean;
  sourceSchema?: string;
  state?: string;
  sub?: string;
  targetNames?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      bootTime: 'BootTime',
      canSkip: 'CanSkip',
      current: 'Current',
      ddlSql: 'DdlSql',
      delaySeconds: 'DelaySeconds',
      destSchema: 'DestSchema',
      diffRow: 'DiffRow',
      errDetail: 'ErrDetail',
      errMsg: 'ErrMsg',
      finishTime: 'FinishTime',
      id: 'Id',
      ignoreFlag: 'IgnoreFlag',
      item: 'Item',
      jobId: 'JobId',
      logs: 'Logs',
      names: 'Names',
      orderNum: 'OrderNum',
      parentObj: 'ParentObj',
      repairMethod: 'RepairMethod',
      skip: 'Skip',
      sourceSchema: 'SourceSchema',
      state: 'State',
      sub: 'Sub',
      targetNames: 'TargetNames',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootTime: 'string',
      canSkip: 'boolean',
      current: 'string',
      ddlSql: 'string',
      delaySeconds: 'number',
      destSchema: 'string',
      diffRow: 'number',
      errDetail: 'string',
      errMsg: 'string',
      finishTime: 'string',
      id: 'string',
      ignoreFlag: 'string',
      item: 'string',
      jobId: 'string',
      logs: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgressLogs },
      names: 'string',
      orderNum: 'number',
      parentObj: 'string',
      repairMethod: 'string',
      skip: 'boolean',
      sourceSchema: 'string',
      state: 'string',
      sub: 'string',
      targetNames: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodyFullNetCheckJobStatus extends $tea.Model {
  code?: string;
  destRegion?: string;
  destRegionCidr?: string;
  destinationEndpointType?: string;
  errorItem?: number;
  hostRegion?: string;
  jobId?: string;
  jobName?: string;
  jobProgress?: DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgress[];
  sourceEndpointType?: string;
  srcRegion?: string;
  srcRegionCidr?: string;
  state?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      destRegion: 'DestRegion',
      destRegionCidr: 'DestRegionCidr',
      destinationEndpointType: 'DestinationEndpointType',
      errorItem: 'ErrorItem',
      hostRegion: 'HostRegion',
      jobId: 'JobId',
      jobName: 'JobName',
      jobProgress: 'JobProgress',
      sourceEndpointType: 'SourceEndpointType',
      srcRegion: 'SrcRegion',
      srcRegionCidr: 'SrcRegionCidr',
      state: 'State',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      destRegion: 'string',
      destRegionCidr: 'string',
      destinationEndpointType: 'string',
      errorItem: 'number',
      hostRegion: 'string',
      jobId: 'string',
      jobName: 'string',
      jobProgress: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgress },
      sourceEndpointType: 'string',
      srcRegion: 'string',
      srcRegionCidr: 'string',
      state: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodyJobProgressLogs extends $tea.Model {
  errData?: string;
  errMsg?: string;
  errType?: string;
  logLevel?: string;
  static names(): { [key: string]: string } {
    return {
      errData: 'ErrData',
      errMsg: 'ErrMsg',
      errType: 'ErrType',
      logLevel: 'LogLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errData: 'string',
      errMsg: 'string',
      errType: 'string',
      logLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodyJobProgress extends $tea.Model {
  bootTime?: string;
  canSkip?: boolean;
  current?: string;
  ddlSql?: string;
  delaySeconds?: number;
  destSchema?: string;
  diffRow?: number;
  errDetail?: string;
  errMsg?: string;
  finishTime?: string;
  id?: string;
  ignoreFlag?: string;
  item?: string;
  jobId?: string;
  logs?: DescribePreCheckStatusResponseBodyJobProgressLogs[];
  names?: string;
  orderNum?: number;
  parentObj?: string;
  repairMethod?: string;
  skip?: boolean;
  sourceSchema?: string;
  state?: string;
  sub?: string;
  targetNames?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      bootTime: 'BootTime',
      canSkip: 'CanSkip',
      current: 'Current',
      ddlSql: 'DdlSql',
      delaySeconds: 'DelaySeconds',
      destSchema: 'DestSchema',
      diffRow: 'DiffRow',
      errDetail: 'ErrDetail',
      errMsg: 'ErrMsg',
      finishTime: 'FinishTime',
      id: 'Id',
      ignoreFlag: 'IgnoreFlag',
      item: 'Item',
      jobId: 'JobId',
      logs: 'Logs',
      names: 'Names',
      orderNum: 'OrderNum',
      parentObj: 'ParentObj',
      repairMethod: 'RepairMethod',
      skip: 'Skip',
      sourceSchema: 'SourceSchema',
      state: 'State',
      sub: 'Sub',
      targetNames: 'TargetNames',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootTime: 'string',
      canSkip: 'boolean',
      current: 'string',
      ddlSql: 'string',
      delaySeconds: 'number',
      destSchema: 'string',
      diffRow: 'number',
      errDetail: 'string',
      errMsg: 'string',
      finishTime: 'string',
      id: 'string',
      ignoreFlag: 'string',
      item: 'string',
      jobId: 'string',
      logs: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyJobProgressLogs },
      names: 'string',
      orderNum: 'number',
      parentObj: 'string',
      repairMethod: 'string',
      skip: 'boolean',
      sourceSchema: 'string',
      state: 'string',
      sub: 'string',
      targetNames: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodyNetworkDiagnosisResultDiagnosis extends $tea.Model {
  cnDocUrl?: string;
  code?: string;
  endpointType?: string;
  internationalDocUrl?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      cnDocUrl: 'CnDocUrl',
      code: 'Code',
      endpointType: 'EndpointType',
      internationalDocUrl: 'InternationalDocUrl',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnDocUrl: 'string',
      code: 'string',
      endpointType: 'string',
      internationalDocUrl: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodyNetworkDiagnosisResult extends $tea.Model {
  diagnosis?: DescribePreCheckStatusResponseBodyNetworkDiagnosisResultDiagnosis[];
  modelVersion?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosis: 'Diagnosis',
      modelVersion: 'ModelVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosis: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyNetworkDiagnosisResultDiagnosis },
      modelVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgressLogs extends $tea.Model {
  errData?: string;
  errMsg?: string;
  errType?: string;
  logLevel?: string;
  static names(): { [key: string]: string } {
    return {
      errData: 'ErrData',
      errMsg: 'ErrMsg',
      errType: 'ErrType',
      logLevel: 'LogLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errData: 'string',
      errMsg: 'string',
      errType: 'string',
      logLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgress extends $tea.Model {
  bootTime?: string;
  canSkip?: boolean;
  current?: string;
  ddlSql?: string;
  delaySeconds?: number;
  destSchema?: string;
  diffRow?: number;
  errDetail?: string;
  errMsg?: string;
  finishTime?: string;
  id?: string;
  ignoreFlag?: string;
  item?: string;
  jobId?: string;
  logs?: DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgressLogs[];
  names?: string;
  orderNum?: number;
  parentObj?: string;
  repairMethod?: string;
  skip?: boolean;
  sourceSchema?: string;
  state?: string;
  sub?: string;
  targetNames?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      bootTime: 'BootTime',
      canSkip: 'CanSkip',
      current: 'Current',
      ddlSql: 'DdlSql',
      delaySeconds: 'DelaySeconds',
      destSchema: 'DestSchema',
      diffRow: 'DiffRow',
      errDetail: 'ErrDetail',
      errMsg: 'ErrMsg',
      finishTime: 'FinishTime',
      id: 'Id',
      ignoreFlag: 'IgnoreFlag',
      item: 'Item',
      jobId: 'JobId',
      logs: 'Logs',
      names: 'Names',
      orderNum: 'OrderNum',
      parentObj: 'ParentObj',
      repairMethod: 'RepairMethod',
      skip: 'Skip',
      sourceSchema: 'SourceSchema',
      state: 'State',
      sub: 'Sub',
      targetNames: 'TargetNames',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootTime: 'string',
      canSkip: 'boolean',
      current: 'string',
      ddlSql: 'string',
      delaySeconds: 'number',
      destSchema: 'string',
      diffRow: 'number',
      errDetail: 'string',
      errMsg: 'string',
      finishTime: 'string',
      id: 'string',
      ignoreFlag: 'string',
      item: 'string',
      jobId: 'string',
      logs: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgressLogs },
      names: 'string',
      orderNum: 'number',
      parentObj: 'string',
      repairMethod: 'string',
      skip: 'boolean',
      sourceSchema: 'string',
      state: 'string',
      sub: 'string',
      targetNames: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodySubDistributedJobStatus extends $tea.Model {
  code?: string;
  errorItem?: number;
  jobId?: string;
  jobName?: string;
  jobProgress?: DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgress[];
  state?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorItem: 'ErrorItem',
      jobId: 'JobId',
      jobName: 'JobName',
      jobProgress: 'JobProgress',
      state: 'State',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorItem: 'number',
      jobId: 'string',
      jobName: 'string',
      jobProgress: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgress },
      state: 'string',
      total: 'number',
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

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionHost extends $tea.Model {
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

export class DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstance extends $tea.Model {
  beginTimestamp?: string;
  consumptionCheckpoint?: string;
  consumptionClient?: string;
  endTimestamp?: string;
  errorMessage?: string;
  instanceCreateTime?: string;
  jobCreateTime?: string;
  payType?: string;
  sourceEndpoint?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSourceEndpoint;
  status?: string;
  subscribeTopic?: string;
  subscriptionDataType?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionDataType;
  subscriptionHost?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionHost;
  subscriptionInstanceID?: string;
  subscriptionInstanceName?: string;
  subscriptionObject?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObject;
  tags?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceTags;
  static names(): { [key: string]: string } {
    return {
      beginTimestamp: 'BeginTimestamp',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      consumptionClient: 'ConsumptionClient',
      endTimestamp: 'EndTimestamp',
      errorMessage: 'ErrorMessage',
      instanceCreateTime: 'InstanceCreateTime',
      jobCreateTime: 'JobCreateTime',
      payType: 'PayType',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      subscribeTopic: 'SubscribeTopic',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionHost: 'SubscriptionHost',
      subscriptionInstanceID: 'SubscriptionInstanceID',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      subscriptionObject: 'SubscriptionObject',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimestamp: 'string',
      consumptionCheckpoint: 'string',
      consumptionClient: 'string',
      endTimestamp: 'string',
      errorMessage: 'string',
      instanceCreateTime: 'string',
      jobCreateTime: 'string',
      payType: 'string',
      sourceEndpoint: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSourceEndpoint,
      status: 'string',
      subscribeTopic: 'string',
      subscriptionDataType: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionDataType,
      subscriptionHost: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionHost,
      subscriptionInstanceID: 'string',
      subscriptionInstanceName: 'string',
      subscriptionObject: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceSubscriptionObject,
      tags: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstanceTags,
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

export class DescribeSubscriptionMetaResponseBodySubscriptionMetaList extends $tea.Model {
  checkpoint?: number;
  DBList?: string;
  DProxyUrl?: string;
  sid?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      DBList: 'DBList',
      DProxyUrl: 'DProxyUrl',
      sid: 'Sid',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'number',
      DBList: 'string',
      DProxyUrl: 'string',
      sid: 'string',
      topic: 'string',
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
  delayMillis?: number;
  errorMessage?: string;
  percent?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      delay: 'Delay',
      delayMillis: 'DelayMillis',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      delay: 'string',
      delayMillis: 'number',
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
  engineName?: string;
  IP?: string;
  instanceId?: string;
  instanceType?: string;
  port?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      engineName: 'EngineName',
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      port: 'Port',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineName: 'string',
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      port: 'string',
      userName: 'string',
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
  engineName?: string;
  IP?: string;
  instanceId?: string;
  instanceType?: string;
  port?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      engineName: 'EngineName',
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      port: 'Port',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineName: 'string',
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      port: 'string',
      userName: 'string',
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

export class DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusListSynchronizationDirectionInfoList extends $tea.Model {
  checkpoint?: string;
  status?: string;
  synchronizationDirection?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      status: 'Status',
      synchronizationDirection: 'SynchronizationDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      status: 'string',
      synchronizationDirection: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusList extends $tea.Model {
  synchronizationDirectionInfoList?: DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusListSynchronizationDirectionInfoList[];
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationDirectionInfoList: 'SynchronizationDirectionInfoList',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronizationDirectionInfoList: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusListResponseBodySynchronizationJobListStatusListSynchronizationDirectionInfoList },
      synchronizationJobId: 'string',
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
  engineName?: string;
  IP?: string;
  instanceId?: string;
  instanceType?: string;
  port?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      engineName: 'EngineName',
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      port: 'Port',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineName: 'string',
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      port: 'string',
      userName: 'string',
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
  engineName?: string;
  IP?: string;
  instanceId?: string;
  instanceType?: string;
  port?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      engineName: 'EngineName',
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      port: 'Port',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineName: 'string',
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      port: 'string',
      userName: 'string',
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

export class DescribeSynchronizationJobsResponseBodySynchronizationInstances extends $tea.Model {
  createTime?: string;
  dataInitialization?: string;
  dataInitializationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataInitializationStatus;
  dataSynchronizationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus;
  delay?: string;
  destinationEndpoint?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDestinationEndpoint;
  errorMessage?: string;
  expireTime?: string;
  instanceCreateTime?: string;
  jobCreateTime?: string;
  payType?: string;
  performance?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance;
  precheckStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatus;
  sourceEndpoint?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSourceEndpoint;
  status?: string;
  structureInitialization?: string;
  structureInitializationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesStructureInitializationStatus;
  synchronizationDirection?: string;
  synchronizationJobClass?: string;
  synchronizationJobId?: string;
  synchronizationJobName?: string;
  synchronizationObjects?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjects[];
  tags?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesTags[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataInitialization: 'DataInitialization',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      delay: 'Delay',
      destinationEndpoint: 'DestinationEndpoint',
      errorMessage: 'ErrorMessage',
      expireTime: 'ExpireTime',
      instanceCreateTime: 'InstanceCreateTime',
      jobCreateTime: 'JobCreateTime',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitialization: 'StructureInitialization',
      structureInitializationStatus: 'StructureInitializationStatus',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobClass: 'SynchronizationJobClass',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationJobName: 'SynchronizationJobName',
      synchronizationObjects: 'SynchronizationObjects',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataInitialization: 'string',
      dataInitializationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataInitializationStatus,
      dataSynchronizationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus,
      delay: 'string',
      destinationEndpoint: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDestinationEndpoint,
      errorMessage: 'string',
      expireTime: 'string',
      instanceCreateTime: 'string',
      jobCreateTime: 'string',
      payType: 'string',
      performance: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance,
      precheckStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatus,
      sourceEndpoint: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSourceEndpoint,
      status: 'string',
      structureInitialization: 'string',
      structureInitializationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesStructureInitializationStatus,
      synchronizationDirection: 'string',
      synchronizationJobClass: 'string',
      synchronizationJobId: 'string',
      synchronizationJobName: 'string',
      synchronizationObjects: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjects },
      tags: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesTags },
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

export class ListDedicatedClusterResponseBodyDedicatedClusterStatusListDedicatedClusterStatus extends $tea.Model {
  cpuUtilization?: number;
  dedicatedClusterId?: string;
  dedicatedClusterName?: string;
  diskUtilization?: number;
  dtsInstanceID?: string;
  du?: number;
  duUtilization?: number;
  gmtCreated?: number;
  memUtilization?: number;
  nodeCount?: number;
  oversoldDu?: number;
  regionId?: string;
  state?: string;
  totalCpuCore?: number;
  totalDiskGBSize?: number;
  totalMemGBSize?: number;
  usedCpuCore?: number;
  usedDiskGBSize?: number;
  usedDu?: number;
  usedMemGBSize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuUtilization: 'CpuUtilization',
      dedicatedClusterId: 'DedicatedClusterId',
      dedicatedClusterName: 'DedicatedClusterName',
      diskUtilization: 'DiskUtilization',
      dtsInstanceID: 'DtsInstanceID',
      du: 'Du',
      duUtilization: 'DuUtilization',
      gmtCreated: 'GmtCreated',
      memUtilization: 'MemUtilization',
      nodeCount: 'NodeCount',
      oversoldDu: 'OversoldDu',
      regionId: 'RegionId',
      state: 'State',
      totalCpuCore: 'TotalCpuCore',
      totalDiskGBSize: 'TotalDiskGBSize',
      totalMemGBSize: 'TotalMemGBSize',
      usedCpuCore: 'UsedCpuCore',
      usedDiskGBSize: 'UsedDiskGBSize',
      usedDu: 'UsedDu',
      usedMemGBSize: 'UsedMemGBSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuUtilization: 'number',
      dedicatedClusterId: 'string',
      dedicatedClusterName: 'string',
      diskUtilization: 'number',
      dtsInstanceID: 'string',
      du: 'number',
      duUtilization: 'number',
      gmtCreated: 'number',
      memUtilization: 'number',
      nodeCount: 'number',
      oversoldDu: 'number',
      regionId: 'string',
      state: 'string',
      totalCpuCore: 'number',
      totalDiskGBSize: 'number',
      totalMemGBSize: 'number',
      usedCpuCore: 'number',
      usedDiskGBSize: 'number',
      usedDu: 'number',
      usedMemGBSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDedicatedClusterResponseBodyDedicatedClusterStatusList extends $tea.Model {
  dedicatedClusterStatus?: ListDedicatedClusterResponseBodyDedicatedClusterStatusListDedicatedClusterStatus[];
  static names(): { [key: string]: string } {
    return {
      dedicatedClusterStatus: 'DedicatedClusterStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedClusterStatus: { 'type': 'array', 'itemType': ListDedicatedClusterResponseBodyDedicatedClusterStatusListDedicatedClusterStatus },
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
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
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
  state?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      state: 'State',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      state: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchSynchronizationEndpointRequestEndpoint extends $tea.Model {
  IP?: string;
  instanceId?: string;
  instanceType?: string;
  port?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      port: 'Port',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      port: 'string',
      type: 'string',
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

  /**
    * The name of the DTS instance.
    *
    * @param request ConfigureDtsJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ConfigureDtsJobResponse
   */
  async configureDtsJobWithOptions(request: ConfigureDtsJobRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureDtsJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkpoint)) {
      query["Checkpoint"] = request.checkpoint;
    }

    if (!Util.isUnset(request.dataCheckConfigure)) {
      query["DataCheckConfigure"] = request.dataCheckConfigure;
    }

    if (!Util.isUnset(request.dataInitialization)) {
      query["DataInitialization"] = request.dataInitialization;
    }

    if (!Util.isUnset(request.dataSynchronization)) {
      query["DataSynchronization"] = request.dataSynchronization;
    }

    if (!Util.isUnset(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!Util.isUnset(request.delayNotice)) {
      query["DelayNotice"] = request.delayNotice;
    }

    if (!Util.isUnset(request.delayPhone)) {
      query["DelayPhone"] = request.delayPhone;
    }

    if (!Util.isUnset(request.delayRuleTime)) {
      query["DelayRuleTime"] = request.delayRuleTime;
    }

    if (!Util.isUnset(request.destCaCertificateOssUrl)) {
      query["DestCaCertificateOssUrl"] = request.destCaCertificateOssUrl;
    }

    if (!Util.isUnset(request.destCaCertificatePassword)) {
      query["DestCaCertificatePassword"] = request.destCaCertificatePassword;
    }

    if (!Util.isUnset(request.destinationEndpointDataBaseName)) {
      query["DestinationEndpointDataBaseName"] = request.destinationEndpointDataBaseName;
    }

    if (!Util.isUnset(request.destinationEndpointEngineName)) {
      query["DestinationEndpointEngineName"] = request.destinationEndpointEngineName;
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

    if (!Util.isUnset(request.destinationEndpointOwnerID)) {
      query["DestinationEndpointOwnerID"] = request.destinationEndpointOwnerID;
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

    if (!Util.isUnset(request.destinationEndpointRole)) {
      query["DestinationEndpointRole"] = request.destinationEndpointRole;
    }

    if (!Util.isUnset(request.destinationEndpointUserName)) {
      query["DestinationEndpointUserName"] = request.destinationEndpointUserName;
    }

    if (!Util.isUnset(request.disasterRecoveryJob)) {
      query["DisasterRecoveryJob"] = request.disasterRecoveryJob;
    }

    if (!Util.isUnset(request.dtsBisLabel)) {
      query["DtsBisLabel"] = request.dtsBisLabel;
    }

    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.dtsJobName)) {
      query["DtsJobName"] = request.dtsJobName;
    }

    if (!Util.isUnset(request.errorNotice)) {
      query["ErrorNotice"] = request.errorNotice;
    }

    if (!Util.isUnset(request.errorPhone)) {
      query["ErrorPhone"] = request.errorPhone;
    }

    if (!Util.isUnset(request.fileOssUrl)) {
      query["FileOssUrl"] = request.fileOssUrl;
    }

    if (!Util.isUnset(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!Util.isUnset(request.maxDu)) {
      query["MaxDu"] = request.maxDu;
    }

    if (!Util.isUnset(request.minDu)) {
      query["MinDu"] = request.minDu;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourceEndpointDatabaseName)) {
      query["SourceEndpointDatabaseName"] = request.sourceEndpointDatabaseName;
    }

    if (!Util.isUnset(request.sourceEndpointEngineName)) {
      query["SourceEndpointEngineName"] = request.sourceEndpointEngineName;
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

    if (!Util.isUnset(request.sourceEndpointOwnerID)) {
      query["SourceEndpointOwnerID"] = request.sourceEndpointOwnerID;
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

    if (!Util.isUnset(request.sourceEndpointRole)) {
      query["SourceEndpointRole"] = request.sourceEndpointRole;
    }

    if (!Util.isUnset(request.sourceEndpointUserName)) {
      query["SourceEndpointUserName"] = request.sourceEndpointUserName;
    }

    if (!Util.isUnset(request.sourceEndpointVSwitchID)) {
      query["SourceEndpointVSwitchID"] = request.sourceEndpointVSwitchID;
    }

    if (!Util.isUnset(request.srcCaCertificateOssUrl)) {
      query["SrcCaCertificateOssUrl"] = request.srcCaCertificateOssUrl;
    }

    if (!Util.isUnset(request.srcCaCertificatePassword)) {
      query["SrcCaCertificatePassword"] = request.srcCaCertificatePassword;
    }

    if (!Util.isUnset(request.structureInitialization)) {
      query["StructureInitialization"] = request.structureInitialization;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbList)) {
      body["DbList"] = request.dbList;
    }

    if (!Util.isUnset(request.reserve)) {
      body["Reserve"] = request.reserve;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConfigureDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigureDtsJobResponse>(await this.callApi(params, req, runtime), new ConfigureDtsJobResponse({}));
  }

  /**
    * The name of the DTS instance.
    *
    * @param request ConfigureDtsJobRequest
    * @return ConfigureDtsJobResponse
   */
  async configureDtsJob(request: ConfigureDtsJobRequest): Promise<ConfigureDtsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureDtsJobWithOptions(request, runtime);
  }

  async configureDtsJobAdvance(request: ConfigureDtsJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureDtsJobResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "Dts",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let configureDtsJobReq = new ConfigureDtsJobRequest({ });
    OpenApiUtil.convert(request, configureDtsJobReq);
    if (!Util.isUnset(request.fileOssUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileOssUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      configureDtsJobReq.fileOssUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let configureDtsJobResp = await this.configureDtsJobWithOptions(configureDtsJobReq, runtime);
    return configureDtsJobResp;
  }

  /**
    * After you call this operation to configure a data migration task, the task will be automatically started. You do not need to call the [StartMigrationJob](~~49429~~) operation to start the task.
    * A data migration task may fail to be started due to precheck failures. You can call the [DescribeMigrationJobStatus](~~49433~~) operation to query the error messages about precheck failures. Then, you can fix the issue based on the error messages. After you fix the issue, you must call the [StartMigrationJob](~~49429~~) operation to restart the data migration task.
    *
    * @param request ConfigureMigrationJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ConfigureMigrationJobResponse
   */
  async configureMigrationJobWithOptions(request: ConfigureMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureMigrationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.checkpoint)) {
      query["Checkpoint"] = request.checkpoint;
    }

    if (!Util.isUnset(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!Util.isUnset(request.migrationJobName)) {
      query["MigrationJobName"] = request.migrationJobName;
    }

    if (!Util.isUnset(request.migrationReserved)) {
      query["MigrationReserved"] = request.migrationReserved;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.migrationObject)) {
      body["MigrationObject"] = request.migrationObject;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConfigureMigrationJob",
      version: "2020-01-01",
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

  /**
    * After you call this operation to configure a data migration task, the task will be automatically started. You do not need to call the [StartMigrationJob](~~49429~~) operation to start the task.
    * A data migration task may fail to be started due to precheck failures. You can call the [DescribeMigrationJobStatus](~~49433~~) operation to query the error messages about precheck failures. Then, you can fix the issue based on the error messages. After you fix the issue, you must call the [StartMigrationJob](~~49429~~) operation to restart the data migration task.
    *
    * @param request ConfigureMigrationJobRequest
    * @return ConfigureMigrationJobResponse
   */
  async configureMigrationJob(request: ConfigureMigrationJobRequest): Promise<ConfigureMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureMigrationJobWithOptions(request, runtime);
  }

  async configureMigrationJobAlertWithOptions(request: ConfigureMigrationJobAlertRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureMigrationJobAlertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.delayAlertPhone)) {
      query["DelayAlertPhone"] = request.delayAlertPhone;
    }

    if (!Util.isUnset(request.delayAlertStatus)) {
      query["DelayAlertStatus"] = request.delayAlertStatus;
    }

    if (!Util.isUnset(request.delayOverSeconds)) {
      query["DelayOverSeconds"] = request.delayOverSeconds;
    }

    if (!Util.isUnset(request.errorAlertPhone)) {
      query["ErrorAlertPhone"] = request.errorAlertPhone;
    }

    if (!Util.isUnset(request.errorAlertStatus)) {
      query["ErrorAlertStatus"] = request.errorAlertStatus;
    }

    if (!Util.isUnset(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigureMigrationJobAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigureMigrationJobAlertResponse>(await this.callApi(params, req, runtime), new ConfigureMigrationJobAlertResponse({}));
  }

  async configureMigrationJobAlert(request: ConfigureMigrationJobAlertRequest): Promise<ConfigureMigrationJobAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureMigrationJobAlertWithOptions(request, runtime);
  }

  async configureSubscriptionWithOptions(request: ConfigureSubscriptionRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureSubscriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkpoint)) {
      query["Checkpoint"] = request.checkpoint;
    }

    if (!Util.isUnset(request.dbList)) {
      query["DbList"] = request.dbList;
    }

    if (!Util.isUnset(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!Util.isUnset(request.delayNotice)) {
      query["DelayNotice"] = request.delayNotice;
    }

    if (!Util.isUnset(request.delayPhone)) {
      query["DelayPhone"] = request.delayPhone;
    }

    if (!Util.isUnset(request.delayRuleTime)) {
      query["DelayRuleTime"] = request.delayRuleTime;
    }

    if (!Util.isUnset(request.dtsBisLabel)) {
      query["DtsBisLabel"] = request.dtsBisLabel;
    }

    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.dtsJobName)) {
      query["DtsJobName"] = request.dtsJobName;
    }

    if (!Util.isUnset(request.errorNotice)) {
      query["ErrorNotice"] = request.errorNotice;
    }

    if (!Util.isUnset(request.errorPhone)) {
      query["ErrorPhone"] = request.errorPhone;
    }

    if (!Util.isUnset(request.maxDu)) {
      query["MaxDu"] = request.maxDu;
    }

    if (!Util.isUnset(request.minDu)) {
      query["MinDu"] = request.minDu;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.reserve)) {
      query["Reserve"] = request.reserve;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourceEndpointDatabaseName)) {
      query["SourceEndpointDatabaseName"] = request.sourceEndpointDatabaseName;
    }

    if (!Util.isUnset(request.sourceEndpointEngineName)) {
      query["SourceEndpointEngineName"] = request.sourceEndpointEngineName;
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

    if (!Util.isUnset(request.sourceEndpointOwnerID)) {
      query["SourceEndpointOwnerID"] = request.sourceEndpointOwnerID;
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

    if (!Util.isUnset(request.sourceEndpointRole)) {
      query["SourceEndpointRole"] = request.sourceEndpointRole;
    }

    if (!Util.isUnset(request.sourceEndpointUserName)) {
      query["SourceEndpointUserName"] = request.sourceEndpointUserName;
    }

    if (!Util.isUnset(request.subscriptionDataTypeDDL)) {
      query["SubscriptionDataTypeDDL"] = request.subscriptionDataTypeDDL;
    }

    if (!Util.isUnset(request.subscriptionDataTypeDML)) {
      query["SubscriptionDataTypeDML"] = request.subscriptionDataTypeDML;
    }

    if (!Util.isUnset(request.subscriptionInstanceNetworkType)) {
      query["SubscriptionInstanceNetworkType"] = request.subscriptionInstanceNetworkType;
    }

    if (!Util.isUnset(request.subscriptionInstanceVPCId)) {
      query["SubscriptionInstanceVPCId"] = request.subscriptionInstanceVPCId;
    }

    if (!Util.isUnset(request.subscriptionInstanceVSwitchId)) {
      query["SubscriptionInstanceVSwitchId"] = request.subscriptionInstanceVSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigureSubscription",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigureSubscriptionResponse>(await this.callApi(params, req, runtime), new ConfigureSubscriptionResponse({}));
  }

  async configureSubscription(request: ConfigureSubscriptionRequest): Promise<ConfigureSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureSubscriptionWithOptions(request, runtime);
  }

  /**
    * The operation that you want to perform. Set the value to **ConfigureSubscriptionInstance**.
    *
    * @param request ConfigureSubscriptionInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ConfigureSubscriptionInstanceResponse
   */
  async configureSubscriptionInstanceWithOptions(request: ConfigureSubscriptionInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureSubscriptionInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    if (!Util.isUnset(request.subscriptionInstanceName)) {
      query["SubscriptionInstanceName"] = request.subscriptionInstanceName;
    }

    if (!Util.isUnset(request.subscriptionInstanceNetworkType)) {
      query["SubscriptionInstanceNetworkType"] = request.subscriptionInstanceNetworkType;
    }

    if (!Util.isUnset(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    if (!Util.isUnset(request.subscriptionDataType)) {
      query["SubscriptionDataType"] = request.subscriptionDataType;
    }

    if (!Util.isUnset(request.subscriptionInstance)) {
      query["SubscriptionInstance"] = request.subscriptionInstance;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.subscriptionObject)) {
      body["SubscriptionObject"] = request.subscriptionObject;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConfigureSubscriptionInstance",
      version: "2020-01-01",
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

  /**
    * The operation that you want to perform. Set the value to **ConfigureSubscriptionInstance**.
    *
    * @param request ConfigureSubscriptionInstanceRequest
    * @return ConfigureSubscriptionInstanceResponse
   */
  async configureSubscriptionInstance(request: ConfigureSubscriptionInstanceRequest): Promise<ConfigureSubscriptionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureSubscriptionInstanceWithOptions(request, runtime);
  }

  async configureSubscriptionInstanceAlertWithOptions(request: ConfigureSubscriptionInstanceAlertRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureSubscriptionInstanceAlertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.delayAlertPhone)) {
      query["DelayAlertPhone"] = request.delayAlertPhone;
    }

    if (!Util.isUnset(request.delayAlertStatus)) {
      query["DelayAlertStatus"] = request.delayAlertStatus;
    }

    if (!Util.isUnset(request.delayOverSeconds)) {
      query["DelayOverSeconds"] = request.delayOverSeconds;
    }

    if (!Util.isUnset(request.errorAlertPhone)) {
      query["ErrorAlertPhone"] = request.errorAlertPhone;
    }

    if (!Util.isUnset(request.errorAlertStatus)) {
      query["ErrorAlertStatus"] = request.errorAlertStatus;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigureSubscriptionInstanceAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigureSubscriptionInstanceAlertResponse>(await this.callApi(params, req, runtime), new ConfigureSubscriptionInstanceAlertResponse({}));
  }

  async configureSubscriptionInstanceAlert(request: ConfigureSubscriptionInstanceAlertRequest): Promise<ConfigureSubscriptionInstanceAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureSubscriptionInstanceAlertWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, you must call the [CreateSynchronizationJob](~~49446~~) operation to create a data synchronization instance.
    * > 
    * *   After you call this operation to configure a data synchronization task, the task will be automatically started and prechecked. You do not need to call the [StartSynchronizationJob](~~49448~~) operation to start the task.
    * *   A data synchronization task may fail to be started due to precheck failures. You can call the [DescribeSynchronizationJobStatus](~~49453~~) operation to query the status of the task. Then, you can change parameter settings based on the error messages about the precheck failures. After you fix the issue, you must call the [StartSynchronizationJob](~~49448~~) operation to restart the data synchronization task.
    *
    * @param request ConfigureSynchronizationJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ConfigureSynchronizationJobResponse
   */
  async configureSynchronizationJobWithOptions(request: ConfigureSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureSynchronizationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.structureInitialization)) {
      query["StructureInitialization"] = request.structureInitialization;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    if (!Util.isUnset(request.synchronizationJobName)) {
      query["SynchronizationJobName"] = request.synchronizationJobName;
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.synchronizationObjects)) {
      body["SynchronizationObjects"] = request.synchronizationObjects;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConfigureSynchronizationJob",
      version: "2020-01-01",
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

  /**
    * Before you call this operation, you must call the [CreateSynchronizationJob](~~49446~~) operation to create a data synchronization instance.
    * > 
    * *   After you call this operation to configure a data synchronization task, the task will be automatically started and prechecked. You do not need to call the [StartSynchronizationJob](~~49448~~) operation to start the task.
    * *   A data synchronization task may fail to be started due to precheck failures. You can call the [DescribeSynchronizationJobStatus](~~49453~~) operation to query the status of the task. Then, you can change parameter settings based on the error messages about the precheck failures. After you fix the issue, you must call the [StartSynchronizationJob](~~49448~~) operation to restart the data synchronization task.
    *
    * @param request ConfigureSynchronizationJobRequest
    * @return ConfigureSynchronizationJobResponse
   */
  async configureSynchronizationJob(request: ConfigureSynchronizationJobRequest): Promise<ConfigureSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureSynchronizationJobWithOptions(request, runtime);
  }

  async configureSynchronizationJobAlertWithOptions(request: ConfigureSynchronizationJobAlertRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureSynchronizationJobAlertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.delayAlertPhone)) {
      query["DelayAlertPhone"] = request.delayAlertPhone;
    }

    if (!Util.isUnset(request.delayAlertStatus)) {
      query["DelayAlertStatus"] = request.delayAlertStatus;
    }

    if (!Util.isUnset(request.delayOverSeconds)) {
      query["DelayOverSeconds"] = request.delayOverSeconds;
    }

    if (!Util.isUnset(request.errorAlertPhone)) {
      query["ErrorAlertPhone"] = request.errorAlertPhone;
    }

    if (!Util.isUnset(request.errorAlertStatus)) {
      query["ErrorAlertStatus"] = request.errorAlertStatus;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigureSynchronizationJobAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigureSynchronizationJobAlertResponse>(await this.callApi(params, req, runtime), new ConfigureSynchronizationJobAlertResponse({}));
  }

  async configureSynchronizationJobAlert(request: ConfigureSynchronizationJobAlertRequest): Promise<ConfigureSynchronizationJobAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureSynchronizationJobAlertWithOptions(request, runtime);
  }

  /**
    * When you use Data Transmission Service (DTS) to synchronize data, other data sources may write data to the destination instance. In this case, data may become inconsistent between the source and destination instances. To ensure data consistency, you can enable image matching.
    * After you call this operation, you can call the [DescribeSynchronizationJobReplicatorCompare](~~199183~~) operation to verify whether image matching is enabled for the data synchronization instance.
    *
    * @param request ConfigureSynchronizationJobReplicatorCompareRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ConfigureSynchronizationJobReplicatorCompareResponse
   */
  async configureSynchronizationJobReplicatorCompareWithOptions(request: ConfigureSynchronizationJobReplicatorCompareRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureSynchronizationJobReplicatorCompareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    if (!Util.isUnset(request.synchronizationReplicatorCompareEnable)) {
      query["SynchronizationReplicatorCompareEnable"] = request.synchronizationReplicatorCompareEnable;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigureSynchronizationJobReplicatorCompare",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigureSynchronizationJobReplicatorCompareResponse>(await this.callApi(params, req, runtime), new ConfigureSynchronizationJobReplicatorCompareResponse({}));
  }

  /**
    * When you use Data Transmission Service (DTS) to synchronize data, other data sources may write data to the destination instance. In this case, data may become inconsistent between the source and destination instances. To ensure data consistency, you can enable image matching.
    * After you call this operation, you can call the [DescribeSynchronizationJobReplicatorCompare](~~199183~~) operation to verify whether image matching is enabled for the data synchronization instance.
    *
    * @param request ConfigureSynchronizationJobReplicatorCompareRequest
    * @return ConfigureSynchronizationJobReplicatorCompareResponse
   */
  async configureSynchronizationJobReplicatorCompare(request: ConfigureSynchronizationJobReplicatorCompareRequest): Promise<ConfigureSynchronizationJobReplicatorCompareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureSynchronizationJobReplicatorCompareWithOptions(request, runtime);
  }

  async countJobByConditionWithOptions(request: CountJobByConditionRequest, runtime: $Util.RuntimeOptions): Promise<CountJobByConditionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destDbType)) {
      query["DestDbType"] = request.destDbType;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.srcDbType)) {
      query["SrcDbType"] = request.srcDbType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CountJobByCondition",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CountJobByConditionResponse>(await this.callApi(params, req, runtime), new CountJobByConditionResponse({}));
  }

  async countJobByCondition(request: CountJobByConditionRequest): Promise<CountJobByConditionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.countJobByConditionWithOptions(request, runtime);
  }

  async createConsumerChannelWithOptions(request: CreateConsumerChannelRequest, runtime: $Util.RuntimeOptions): Promise<CreateConsumerChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consumerGroupName)) {
      query["ConsumerGroupName"] = request.consumerGroupName;
    }

    if (!Util.isUnset(request.consumerGroupPassword)) {
      query["ConsumerGroupPassword"] = request.consumerGroupPassword;
    }

    if (!Util.isUnset(request.consumerGroupUserName)) {
      query["ConsumerGroupUserName"] = request.consumerGroupUserName;
    }

    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateConsumerChannel",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConsumerChannelResponse>(await this.callApi(params, req, runtime), new CreateConsumerChannelResponse({}));
  }

  async createConsumerChannel(request: CreateConsumerChannelRequest): Promise<CreateConsumerChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConsumerChannelWithOptions(request, runtime);
  }

  async createConsumerGroupWithOptions(request: CreateConsumerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateConsumerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.consumerGroupName)) {
      query["ConsumerGroupName"] = request.consumerGroupName;
    }

    if (!Util.isUnset(request.consumerGroupPassword)) {
      query["ConsumerGroupPassword"] = request.consumerGroupPassword;
    }

    if (!Util.isUnset(request.consumerGroupUserName)) {
      query["ConsumerGroupUserName"] = request.consumerGroupUserName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateConsumerGroup",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConsumerGroupResponse>(await this.callApi(params, req, runtime), new CreateConsumerGroupResponse({}));
  }

  async createConsumerGroup(request: CreateConsumerGroupRequest): Promise<CreateConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConsumerGroupWithOptions(request, runtime);
  }

  async createDedicatedClusterMonitorRuleWithOptions(request: CreateDedicatedClusterMonitorRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateDedicatedClusterMonitorRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cpuAlarmThreshold)) {
      query["CpuAlarmThreshold"] = request.cpuAlarmThreshold;
    }

    if (!Util.isUnset(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!Util.isUnset(request.diskAlarmThreshold)) {
      query["DiskAlarmThreshold"] = request.diskAlarmThreshold;
    }

    if (!Util.isUnset(request.duAlarmThreshold)) {
      query["DuAlarmThreshold"] = request.duAlarmThreshold;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.memAlarmThreshold)) {
      query["MemAlarmThreshold"] = request.memAlarmThreshold;
    }

    if (!Util.isUnset(request.noticeSwitch)) {
      query["NoticeSwitch"] = request.noticeSwitch;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phones)) {
      query["Phones"] = request.phones;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDedicatedClusterMonitorRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDedicatedClusterMonitorRuleResponse>(await this.callApi(params, req, runtime), new CreateDedicatedClusterMonitorRuleResponse({}));
  }

  async createDedicatedClusterMonitorRule(request: CreateDedicatedClusterMonitorRuleRequest): Promise<CreateDedicatedClusterMonitorRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDedicatedClusterMonitorRuleWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of DTS.
    * *   If you want to run a DTS task on a DTS dedicated cluster, you must configure the task before you purchase a DTS instance. You can call the [ConfigureDtsJob](~~208399~~) operation to configure a DTS task.
    *
    * @param request CreateDtsInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDtsInstanceResponse
   */
  async createDtsInstanceWithOptions(request: CreateDtsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDtsInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!Util.isUnset(request.computeUnit)) {
      query["ComputeUnit"] = request.computeUnit;
    }

    if (!Util.isUnset(request.databaseCount)) {
      query["DatabaseCount"] = request.databaseCount;
    }

    if (!Util.isUnset(request.destinationEndpointEngineName)) {
      query["DestinationEndpointEngineName"] = request.destinationEndpointEngineName;
    }

    if (!Util.isUnset(request.destinationRegion)) {
      query["DestinationRegion"] = request.destinationRegion;
    }

    if (!Util.isUnset(request.du)) {
      query["Du"] = request.du;
    }

    if (!Util.isUnset(request.feeType)) {
      query["FeeType"] = request.feeType;
    }

    if (!Util.isUnset(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.maxDu)) {
      query["MaxDu"] = request.maxDu;
    }

    if (!Util.isUnset(request.minDu)) {
      query["MinDu"] = request.minDu;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourceEndpointEngineName)) {
      query["SourceEndpointEngineName"] = request.sourceEndpointEngineName;
    }

    if (!Util.isUnset(request.sourceRegion)) {
      query["SourceRegion"] = request.sourceRegion;
    }

    if (!Util.isUnset(request.syncArchitecture)) {
      query["SyncArchitecture"] = request.syncArchitecture;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDtsInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDtsInstanceResponse>(await this.callApi(params, req, runtime), new CreateDtsInstanceResponse({}));
  }

  /**
    * *   Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of DTS.
    * *   If you want to run a DTS task on a DTS dedicated cluster, you must configure the task before you purchase a DTS instance. You can call the [ConfigureDtsJob](~~208399~~) operation to configure a DTS task.
    *
    * @param request CreateDtsInstanceRequest
    * @return CreateDtsInstanceResponse
   */
  async createDtsInstance(request: CreateDtsInstanceRequest): Promise<CreateDtsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDtsInstanceWithOptions(request, runtime);
  }

  /**
    * DTS provides the following metrics for DTS tasks:************
    * *   **Latency**: DTS monitors the latency of a DTS task. If the latency of the task exceeds the specified threshold, an alert is triggered. Unit: seconds.
    * *   **Status**: DTS monitors the status of a DTS task. If the state of the task changes to **Error** or **Restore**, an alert is triggered.
    * *   **Full Timeout**: DTS monitors the duration of a DTS task. If the duration of the task exceeds the specified threshold, an alert is triggered. Unit: hours.
    *
    * @param request CreateJobMonitorRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateJobMonitorRuleResponse
   */
  async createJobMonitorRuleWithOptions(request: CreateJobMonitorRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobMonitorRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.delayRuleTime)) {
      query["DelayRuleTime"] = request.delayRuleTime;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.noticeValue)) {
      query["NoticeValue"] = request.noticeValue;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.times)) {
      query["Times"] = request.times;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateJobMonitorRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateJobMonitorRuleResponse>(await this.callApi(params, req, runtime), new CreateJobMonitorRuleResponse({}));
  }

  /**
    * DTS provides the following metrics for DTS tasks:************
    * *   **Latency**: DTS monitors the latency of a DTS task. If the latency of the task exceeds the specified threshold, an alert is triggered. Unit: seconds.
    * *   **Status**: DTS monitors the status of a DTS task. If the state of the task changes to **Error** or **Restore**, an alert is triggered.
    * *   **Full Timeout**: DTS monitors the duration of a DTS task. If the duration of the task exceeds the specified threshold, an alert is triggered. Unit: hours.
    *
    * @param request CreateJobMonitorRuleRequest
    * @return CreateJobMonitorRuleResponse
   */
  async createJobMonitorRule(request: CreateJobMonitorRuleRequest): Promise<CreateJobMonitorRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobMonitorRuleWithOptions(request, runtime);
  }

  /**
    * >  This API operation is outdated. We recommend that you use the new version. For more information, see [CreateDtsInstance](~~208270~~).
    * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of Data Transmission Service (DTS).
    * After you purchase a data migration instance, you must call the [ConfigureMigrationJob](~~324260~~) operation to configure a data migration task.
    *
    * @param request CreateMigrationJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateMigrationJobResponse
   */
  async createMigrationJobWithOptions(request: CreateMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateMigrationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMigrationJob",
      version: "2020-01-01",
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

  /**
    * >  This API operation is outdated. We recommend that you use the new version. For more information, see [CreateDtsInstance](~~208270~~).
    * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of Data Transmission Service (DTS).
    * After you purchase a data migration instance, you must call the [ConfigureMigrationJob](~~324260~~) operation to configure a data migration task.
    *
    * @param request CreateMigrationJobRequest
    * @return CreateMigrationJobResponse
   */
  async createMigrationJob(request: CreateMigrationJobRequest): Promise<CreateMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMigrationJobWithOptions(request, runtime);
  }

  async createReverseDtsJobWithOptions(request: CreateReverseDtsJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateReverseDtsJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateReverseDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateReverseDtsJobResponse>(await this.callApi(params, req, runtime), new CreateReverseDtsJobResponse({}));
  }

  async createReverseDtsJob(request: CreateReverseDtsJobRequest): Promise<CreateReverseDtsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createReverseDtsJobWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of Data Transmission Service (DTS).
    *
    * @param request CreateSubscriptionInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateSubscriptionInstanceResponse
   */
  async createSubscriptionInstanceWithOptions(request: CreateSubscriptionInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateSubscriptionInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!Util.isUnset(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSubscriptionInstance",
      version: "2020-01-01",
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

  /**
    * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of Data Transmission Service (DTS).
    *
    * @param request CreateSubscriptionInstanceRequest
    * @return CreateSubscriptionInstanceResponse
   */
  async createSubscriptionInstance(request: CreateSubscriptionInstanceRequest): Promise<CreateSubscriptionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSubscriptionInstanceWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of Data Transmission Service (DTS).
    * After you purchase a data synchronization instance, you must call the [ConfigureSynchronizationJob](~~49447~~) operation to configure a data synchronization task. Then, the task is automatically started.
    *
    * @param request CreateSynchronizationJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateSynchronizationJobResponse
   */
  async createSynchronizationJobWithOptions(request: CreateSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateSynchronizationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBInstanceCount)) {
      query["DBInstanceCount"] = request.DBInstanceCount;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourceRegion)) {
      query["SourceRegion"] = request.sourceRegion;
    }

    if (!Util.isUnset(request.synchronizationJobClass)) {
      query["SynchronizationJobClass"] = request.synchronizationJobClass;
    }

    if (!Util.isUnset(request.topology)) {
      query["Topology"] = request.topology;
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
      version: "2020-01-01",
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

  /**
    * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of Data Transmission Service (DTS).
    * After you purchase a data synchronization instance, you must call the [ConfigureSynchronizationJob](~~49447~~) operation to configure a data synchronization task. Then, the task is automatically started.
    *
    * @param request CreateSynchronizationJobRequest
    * @return CreateSynchronizationJobResponse
   */
  async createSynchronizationJob(request: CreateSynchronizationJobRequest): Promise<CreateSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSynchronizationJobWithOptions(request, runtime);
  }

  async deleteConsumerChannelWithOptions(request: DeleteConsumerChannelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConsumerChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consumerGroupId)) {
      query["ConsumerGroupId"] = request.consumerGroupId;
    }

    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConsumerChannel",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteConsumerChannelResponse>(await this.callApi(params, req, runtime), new DeleteConsumerChannelResponse({}));
  }

  async deleteConsumerChannel(request: DeleteConsumerChannelRequest): Promise<DeleteConsumerChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConsumerChannelWithOptions(request, runtime);
  }

  async deleteConsumerGroupWithOptions(request: DeleteConsumerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConsumerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.consumerGroupID)) {
      query["ConsumerGroupID"] = request.consumerGroupID;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConsumerGroup",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteConsumerGroupResponse>(await this.callApi(params, req, runtime), new DeleteConsumerGroupResponse({}));
  }

  async deleteConsumerGroup(request: DeleteConsumerGroupRequest): Promise<DeleteConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConsumerGroupWithOptions(request, runtime);
  }

  async deleteDtsJobWithOptions(request: DeleteDtsJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDtsJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDtsJobResponse>(await this.callApi(params, req, runtime), new DeleteDtsJobResponse({}));
  }

  async deleteDtsJob(request: DeleteDtsJobRequest): Promise<DeleteDtsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDtsJobWithOptions(request, runtime);
  }

  async deleteDtsJobsWithOptions(request: DeleteDtsJobsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDtsJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsJobIds)) {
      query["DtsJobIds"] = request.dtsJobIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDtsJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDtsJobsResponse>(await this.callApi(params, req, runtime), new DeleteDtsJobsResponse({}));
  }

  async deleteDtsJobs(request: DeleteDtsJobsRequest): Promise<DeleteDtsJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDtsJobsWithOptions(request, runtime);
  }

  /**
    * >  After a data migration instance is released, it cannot be recovered.
    *
    * @param request DeleteMigrationJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteMigrationJobResponse
   */
  async deleteMigrationJobWithOptions(request: DeleteMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMigrationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMigrationJob",
      version: "2020-01-01",
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

  /**
    * >  After a data migration instance is released, it cannot be recovered.
    *
    * @param request DeleteMigrationJobRequest
    * @return DeleteMigrationJobResponse
   */
  async deleteMigrationJob(request: DeleteMigrationJobRequest): Promise<DeleteMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMigrationJobWithOptions(request, runtime);
  }

  /**
    * >  After a change tracking instance is released, it cannot be recovered.
    *
    * @param request DeleteSubscriptionInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteSubscriptionInstanceResponse
   */
  async deleteSubscriptionInstanceWithOptions(request: DeleteSubscriptionInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSubscriptionInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSubscriptionInstance",
      version: "2020-01-01",
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

  /**
    * >  After a change tracking instance is released, it cannot be recovered.
    *
    * @param request DeleteSubscriptionInstanceRequest
    * @return DeleteSubscriptionInstanceResponse
   */
  async deleteSubscriptionInstance(request: DeleteSubscriptionInstanceRequest): Promise<DeleteSubscriptionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSubscriptionInstanceWithOptions(request, runtime);
  }

  /**
    * >  After a data synchronization instance is released, it cannot be recovered.
    *
    * @param request DeleteSynchronizationJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteSynchronizationJobResponse
   */
  async deleteSynchronizationJobWithOptions(request: DeleteSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSynchronizationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSynchronizationJob",
      version: "2020-01-01",
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

  /**
    * >  After a data synchronization instance is released, it cannot be recovered.
    *
    * @param request DeleteSynchronizationJobRequest
    * @return DeleteSynchronizationJobResponse
   */
  async deleteSynchronizationJob(request: DeleteSynchronizationJobRequest): Promise<DeleteSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSynchronizationJobWithOptions(request, runtime);
  }

  async describeChannelAccountWithOptions(request: DescribeChannelAccountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChannelAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeChannelAccount",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelAccountResponse>(await this.callApi(params, req, runtime), new DescribeChannelAccountResponse({}));
  }

  async describeChannelAccount(request: DescribeChannelAccountRequest): Promise<DescribeChannelAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelAccountWithOptions(request, runtime);
  }

  async describeCheckJobsWithOptions(request: DescribeCheckJobsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCheckJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkType)) {
      query["CheckType"] = request.checkType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCheckJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCheckJobsResponse>(await this.callApi(params, req, runtime), new DescribeCheckJobsResponse({}));
  }

  async describeCheckJobs(request: DescribeCheckJobsRequest): Promise<DescribeCheckJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCheckJobsWithOptions(request, runtime);
  }

  async describeClusterOperateLogsWithOptions(request: DescribeClusterOperateLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterOperateLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dedicatedClusterId)) {
      body["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      body["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerID)) {
      body["OwnerID"] = request.ownerID;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterOperateLogs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterOperateLogsResponse>(await this.callApi(params, req, runtime), new DescribeClusterOperateLogsResponse({}));
  }

  async describeClusterOperateLogs(request: DescribeClusterOperateLogsRequest): Promise<DescribeClusterOperateLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterOperateLogsWithOptions(request, runtime);
  }

  async describeClusterUsedUtilizationWithOptions(request: DescribeClusterUsedUtilizationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterUsedUtilizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dedicatedClusterId)) {
      body["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      body["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.env)) {
      body["Env"] = request.env;
    }

    if (!Util.isUnset(request.metricType)) {
      body["MetricType"] = request.metricType;
    }

    if (!Util.isUnset(request.ownerID)) {
      body["OwnerID"] = request.ownerID;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityToken)) {
      body["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterUsedUtilization",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterUsedUtilizationResponse>(await this.callApi(params, req, runtime), new DescribeClusterUsedUtilizationResponse({}));
  }

  async describeClusterUsedUtilization(request: DescribeClusterUsedUtilizationRequest): Promise<DescribeClusterUsedUtilizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterUsedUtilizationWithOptions(request, runtime);
  }

  async describeConnectionStatusWithOptions(request: DescribeConnectionStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConnectionStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destinationEndpointArchitecture)) {
      query["DestinationEndpointArchitecture"] = request.destinationEndpointArchitecture;
    }

    if (!Util.isUnset(request.destinationEndpointDatabaseName)) {
      query["DestinationEndpointDatabaseName"] = request.destinationEndpointDatabaseName;
    }

    if (!Util.isUnset(request.destinationEndpointEngineName)) {
      query["DestinationEndpointEngineName"] = request.destinationEndpointEngineName;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourceEndpointArchitecture)) {
      query["SourceEndpointArchitecture"] = request.sourceEndpointArchitecture;
    }

    if (!Util.isUnset(request.sourceEndpointDatabaseName)) {
      query["SourceEndpointDatabaseName"] = request.sourceEndpointDatabaseName;
    }

    if (!Util.isUnset(request.sourceEndpointEngineName)) {
      query["SourceEndpointEngineName"] = request.sourceEndpointEngineName;
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
      action: "DescribeConnectionStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeConnectionStatusResponse>(await this.callApi(params, req, runtime), new DescribeConnectionStatusResponse({}));
  }

  async describeConnectionStatus(request: DescribeConnectionStatusRequest): Promise<DescribeConnectionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConnectionStatusWithOptions(request, runtime);
  }

  async describeConsumerChannelWithOptions(request: DescribeConsumerChannelRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConsumerChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentChannelId)) {
      query["ParentChannelId"] = request.parentChannelId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeConsumerChannel",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeConsumerChannelResponse>(await this.callApi(params, req, runtime), new DescribeConsumerChannelResponse({}));
  }

  async describeConsumerChannel(request: DescribeConsumerChannelRequest): Promise<DescribeConsumerChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConsumerChannelWithOptions(request, runtime);
  }

  async describeConsumerGroupWithOptions(request: DescribeConsumerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConsumerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeConsumerGroup",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeConsumerGroupResponse>(await this.callApi(params, req, runtime), new DescribeConsumerGroupResponse({}));
  }

  async describeConsumerGroup(request: DescribeConsumerGroupRequest): Promise<DescribeConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConsumerGroupWithOptions(request, runtime);
  }

  /**
    * If the **source or destination instance** is an **on-premises database**, you need to call this operation to query the CIDR blocks of DTS servers. Then, you need to add the CIDR blocks of DTS servers to the security settings of the source or destination instance, for example, the firewall of your database. For more information, see [Add the CIDR blocks of DTS servers to the security settings of on-premises databases](~~176627~~).
    * >  If the **source or destination database** is an **ApsaraDB database instance** (such as RDS instance and ApsaraDB for MongoDB instance) or a **self-managed database hosted on ECS**, you do not need to add the CIDR blocks. When you click **Set Whitelist and Next** in the DTS console, DTS automatically add the CIDR blocks of DTS servers to the security settings of the source or destination instance.
    *
    * @param request DescribeDTSIPRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDTSIPResponse
   */
  async describeDTSIPWithOptions(request: DescribeDTSIPRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDTSIPResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destinationEndpointRegion)) {
      query["DestinationEndpointRegion"] = request.destinationEndpointRegion;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourceEndpointRegion)) {
      query["SourceEndpointRegion"] = request.sourceEndpointRegion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDTSIP",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDTSIPResponse>(await this.callApi(params, req, runtime), new DescribeDTSIPResponse({}));
  }

  /**
    * If the **source or destination instance** is an **on-premises database**, you need to call this operation to query the CIDR blocks of DTS servers. Then, you need to add the CIDR blocks of DTS servers to the security settings of the source or destination instance, for example, the firewall of your database. For more information, see [Add the CIDR blocks of DTS servers to the security settings of on-premises databases](~~176627~~).
    * >  If the **source or destination database** is an **ApsaraDB database instance** (such as RDS instance and ApsaraDB for MongoDB instance) or a **self-managed database hosted on ECS**, you do not need to add the CIDR blocks. When you click **Set Whitelist and Next** in the DTS console, DTS automatically add the CIDR blocks of DTS servers to the security settings of the source or destination instance.
    *
    * @param request DescribeDTSIPRequest
    * @return DescribeDTSIPResponse
   */
  async describeDTSIP(request: DescribeDTSIPRequest): Promise<DescribeDTSIPResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDTSIPWithOptions(request, runtime);
  }

  async describeDataCheckReportUrlWithOptions(request: DescribeDataCheckReportUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataCheckReportUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkType)) {
      query["CheckType"] = request.checkType;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tbName)) {
      query["TbName"] = request.tbName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataCheckReportUrl",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataCheckReportUrlResponse>(await this.callApi(params, req, runtime), new DescribeDataCheckReportUrlResponse({}));
  }

  async describeDataCheckReportUrl(request: DescribeDataCheckReportUrlRequest): Promise<DescribeDataCheckReportUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataCheckReportUrlWithOptions(request, runtime);
  }

  async describeDataCheckTableDetailsWithOptions(request: DescribeDataCheckTableDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataCheckTableDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkType)) {
      query["CheckType"] = request.checkType;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataCheckTableDetails",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataCheckTableDetailsResponse>(await this.callApi(params, req, runtime), new DescribeDataCheckTableDetailsResponse({}));
  }

  async describeDataCheckTableDetails(request: DescribeDataCheckTableDetailsRequest): Promise<DescribeDataCheckTableDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataCheckTableDetailsWithOptions(request, runtime);
  }

  async describeDataCheckTableDiffDetailsWithOptions(request: DescribeDataCheckTableDiffDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataCheckTableDiffDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkType)) {
      query["CheckType"] = request.checkType;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tbName)) {
      query["TbName"] = request.tbName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataCheckTableDiffDetails",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataCheckTableDiffDetailsResponse>(await this.callApi(params, req, runtime), new DescribeDataCheckTableDiffDetailsResponse({}));
  }

  async describeDataCheckTableDiffDetails(request: DescribeDataCheckTableDiffDetailsRequest): Promise<DescribeDataCheckTableDiffDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataCheckTableDiffDetailsWithOptions(request, runtime);
  }

  async describeDedicatedClusterWithOptions(request: DescribeDedicatedClusterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDedicatedCluster",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDedicatedClusterResponse>(await this.callApi(params, req, runtime), new DescribeDedicatedClusterResponse({}));
  }

  async describeDedicatedCluster(request: DescribeDedicatedClusterRequest): Promise<DescribeDedicatedClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedClusterWithOptions(request, runtime);
  }

  async describeDedicatedClusterMonitorRuleWithOptions(request: DescribeDedicatedClusterMonitorRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedClusterMonitorRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDedicatedClusterMonitorRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDedicatedClusterMonitorRuleResponse>(await this.callApi(params, req, runtime), new DescribeDedicatedClusterMonitorRuleResponse({}));
  }

  async describeDedicatedClusterMonitorRule(request: DescribeDedicatedClusterMonitorRuleRequest): Promise<DescribeDedicatedClusterMonitorRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedClusterMonitorRuleWithOptions(request, runtime);
  }

  async describeDtsEtlJobVersionInfoWithOptions(request: DescribeDtsEtlJobVersionInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDtsEtlJobVersionInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDtsEtlJobVersionInfo",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDtsEtlJobVersionInfoResponse>(await this.callApi(params, req, runtime), new DescribeDtsEtlJobVersionInfoResponse({}));
  }

  async describeDtsEtlJobVersionInfo(request: DescribeDtsEtlJobVersionInfoRequest): Promise<DescribeDtsEtlJobVersionInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDtsEtlJobVersionInfoWithOptions(request, runtime);
  }

  async describeDtsJobDetailWithOptions(request: DescribeDtsJobDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDtsJobDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsInstanceID)) {
      query["DtsInstanceID"] = request.dtsInstanceID;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.syncSubJobHistory)) {
      query["SyncSubJobHistory"] = request.syncSubJobHistory;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDtsJobDetail",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDtsJobDetailResponse>(await this.callApi(params, req, runtime), new DescribeDtsJobDetailResponse({}));
  }

  async describeDtsJobDetail(request: DescribeDtsJobDetailRequest): Promise<DescribeDtsJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDtsJobDetailWithOptions(request, runtime);
  }

  /**
    * ## Debugging
    * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Dts\\&api=DescribeDtsJobs\\&type=RPC\\&version=2020-01-01)
    *
    * @param request DescribeDtsJobsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDtsJobsResponse
   */
  async describeDtsJobsWithOptions(request: DescribeDtsJobsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDtsJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!Util.isUnset(request.dtsBisLabel)) {
      query["DtsBisLabel"] = request.dtsBisLabel;
    }

    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!Util.isUnset(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!Util.isUnset(request.orderDirection)) {
      query["OrderDirection"] = request.orderDirection;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.withoutDbList)) {
      query["WithoutDbList"] = request.withoutDbList;
    }

    if (!Util.isUnset(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDtsJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDtsJobsResponse>(await this.callApi(params, req, runtime), new DescribeDtsJobsResponse({}));
  }

  /**
    * ## Debugging
    * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Dts\\&api=DescribeDtsJobs\\&type=RPC\\&version=2020-01-01)
    *
    * @param request DescribeDtsJobsRequest
    * @return DescribeDtsJobsResponse
   */
  async describeDtsJobs(request: DescribeDtsJobsRequest): Promise<DescribeDtsJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDtsJobsWithOptions(request, runtime);
  }

  async describeDtsServiceLogWithOptions(request: DescribeDtsServiceLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDtsServiceLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.subJobType)) {
      query["SubJobType"] = request.subJobType;
    }

    if (!Util.isUnset(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDtsServiceLog",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDtsServiceLogResponse>(await this.callApi(params, req, runtime), new DescribeDtsServiceLogResponse({}));
  }

  async describeDtsServiceLog(request: DescribeDtsServiceLogRequest): Promise<DescribeDtsServiceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDtsServiceLogWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, you must call the [SwitchSynchronizationEndpoint](~~201858~~) operation to change the database connection settings.
    *
    * @param request DescribeEndpointSwitchStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeEndpointSwitchStatusResponse
   */
  async describeEndpointSwitchStatusWithOptions(request: DescribeEndpointSwitchStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEndpointSwitchStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEndpointSwitchStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEndpointSwitchStatusResponse>(await this.callApi(params, req, runtime), new DescribeEndpointSwitchStatusResponse({}));
  }

  /**
    * Before you call this operation, you must call the [SwitchSynchronizationEndpoint](~~201858~~) operation to change the database connection settings.
    *
    * @param request DescribeEndpointSwitchStatusRequest
    * @return DescribeEndpointSwitchStatusResponse
   */
  async describeEndpointSwitchStatus(request: DescribeEndpointSwitchStatusRequest): Promise<DescribeEndpointSwitchStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEndpointSwitchStatusWithOptions(request, runtime);
  }

  async describeEtlJobLogsWithOptions(request: DescribeEtlJobLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEtlJobLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEtlJobLogs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEtlJobLogsResponse>(await this.callApi(params, req, runtime), new DescribeEtlJobLogsResponse({}));
  }

  async describeEtlJobLogs(request: DescribeEtlJobLogsRequest): Promise<DescribeEtlJobLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEtlJobLogsWithOptions(request, runtime);
  }

  async describeInitializationStatusWithOptions(request: DescribeInitializationStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInitializationStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInitializationStatus",
      version: "2020-01-01",
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

  async describeJobMonitorRuleWithOptions(request: DescribeJobMonitorRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJobMonitorRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeJobMonitorRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeJobMonitorRuleResponse>(await this.callApi(params, req, runtime), new DescribeJobMonitorRuleResponse({}));
  }

  async describeJobMonitorRule(request: DescribeJobMonitorRuleRequest): Promise<DescribeJobMonitorRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobMonitorRuleWithOptions(request, runtime);
  }

  async describeMetricListWithOptions(request: DescribeMetricListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      body["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.env)) {
      body["Env"] = request.env;
    }

    if (!Util.isUnset(request.metricName)) {
      body["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.metricType)) {
      body["MetricType"] = request.metricType;
    }

    if (!Util.isUnset(request.ownerID)) {
      body["OwnerID"] = request.ownerID;
    }

    if (!Util.isUnset(request.param)) {
      body["Param"] = request.param;
    }

    if (!Util.isUnset(request.period)) {
      body["Period"] = request.period;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricListResponse>(await this.callApi(params, req, runtime), new DescribeMetricListResponse({}));
  }

  async describeMetricList(request: DescribeMetricListRequest): Promise<DescribeMetricListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricListWithOptions(request, runtime);
  }

  async describeMigrationJobAlertWithOptions(request: DescribeMigrationJobAlertRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMigrationJobAlertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMigrationJobAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMigrationJobAlertResponse>(await this.callApi(params, req, runtime), new DescribeMigrationJobAlertResponse({}));
  }

  async describeMigrationJobAlert(request: DescribeMigrationJobAlertRequest): Promise<DescribeMigrationJobAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMigrationJobAlertWithOptions(request, runtime);
  }

  /**
    * When you call this operation, the data migration task must be in the Migrating, Failed, Paused, or Finished state.
    *
    * @param request DescribeMigrationJobDetailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeMigrationJobDetailResponse
   */
  async describeMigrationJobDetailWithOptions(request: DescribeMigrationJobDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMigrationJobDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.migrationMode)) {
      query["MigrationMode"] = request.migrationMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMigrationJobDetail",
      version: "2020-01-01",
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

  /**
    * When you call this operation, the data migration task must be in the Migrating, Failed, Paused, or Finished state.
    *
    * @param request DescribeMigrationJobDetailRequest
    * @return DescribeMigrationJobDetailResponse
   */
  async describeMigrationJobDetail(request: DescribeMigrationJobDetailRequest): Promise<DescribeMigrationJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMigrationJobDetailWithOptions(request, runtime);
  }

  async describeMigrationJobStatusWithOptions(request: DescribeMigrationJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMigrationJobStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMigrationJobStatus",
      version: "2020-01-01",
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
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMigrationJobs",
      version: "2020-01-01",
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

  async describePreCheckStatusWithOptions(request: DescribePreCheckStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribePreCheckStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.jobCode)) {
      query["JobCode"] = request.jobCode;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.structPhase)) {
      query["StructPhase"] = request.structPhase;
    }

    if (!Util.isUnset(request.structType)) {
      query["StructType"] = request.structType;
    }

    if (!Util.isUnset(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePreCheckStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePreCheckStatusResponse>(await this.callApi(params, req, runtime), new DescribePreCheckStatusResponse({}));
  }

  async describePreCheckStatus(request: DescribePreCheckStatusRequest): Promise<DescribePreCheckStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePreCheckStatusWithOptions(request, runtime);
  }

  async describeSubscriptionInstanceAlertWithOptions(request: DescribeSubscriptionInstanceAlertRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubscriptionInstanceAlertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSubscriptionInstanceAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSubscriptionInstanceAlertResponse>(await this.callApi(params, req, runtime), new DescribeSubscriptionInstanceAlertResponse({}));
  }

  async describeSubscriptionInstanceAlert(request: DescribeSubscriptionInstanceAlertRequest): Promise<DescribeSubscriptionInstanceAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubscriptionInstanceAlertWithOptions(request, runtime);
  }

  async describeSubscriptionInstanceStatusWithOptions(request: DescribeSubscriptionInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubscriptionInstanceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSubscriptionInstanceStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
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
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.subscriptionInstanceName)) {
      query["SubscriptionInstanceName"] = request.subscriptionInstanceName;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSubscriptionInstances",
      version: "2020-01-01",
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

  /**
    * *   When Data Transmission Service (DTS) tracks data changes from a PolarDB-X 1.0 instance, data is distributed across the attached ApsaraDB RDS for MySQL instances. DTS runs a subtask for each ApsaraDB RDS for MySQL instance. You can call this operation to query the details of the subtasks in a distributed change tracking task.
    * *   You can call the [DescribeDtsJobs](~~209702~~) operation to query the ID of the change tracking instance and the ID of the consumer group.
    *
    * @param tmpReq DescribeSubscriptionMetaRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSubscriptionMetaResponse
   */
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

    let query = { };
    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!Util.isUnset(request.subMigrationJobIdsShrink)) {
      query["SubMigrationJobIds"] = request.subMigrationJobIdsShrink;
    }

    if (!Util.isUnset(request.topicsShrink)) {
      query["Topics"] = request.topicsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSubscriptionMeta",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSubscriptionMetaResponse>(await this.callApi(params, req, runtime), new DescribeSubscriptionMetaResponse({}));
  }

  /**
    * *   When Data Transmission Service (DTS) tracks data changes from a PolarDB-X 1.0 instance, data is distributed across the attached ApsaraDB RDS for MySQL instances. DTS runs a subtask for each ApsaraDB RDS for MySQL instance. You can call this operation to query the details of the subtasks in a distributed change tracking task.
    * *   You can call the [DescribeDtsJobs](~~209702~~) operation to query the ID of the change tracking instance and the ID of the consumer group.
    *
    * @param request DescribeSubscriptionMetaRequest
    * @return DescribeSubscriptionMetaResponse
   */
  async describeSubscriptionMeta(request: DescribeSubscriptionMetaRequest): Promise<DescribeSubscriptionMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubscriptionMetaWithOptions(request, runtime);
  }

  async describeSynchronizationJobAlertWithOptions(request: DescribeSynchronizationJobAlertRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynchronizationJobAlertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSynchronizationJobAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSynchronizationJobAlertResponse>(await this.callApi(params, req, runtime), new DescribeSynchronizationJobAlertResponse({}));
  }

  async describeSynchronizationJobAlert(request: DescribeSynchronizationJobAlertRequest): Promise<DescribeSynchronizationJobAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSynchronizationJobAlertWithOptions(request, runtime);
  }

  async describeSynchronizationJobReplicatorCompareWithOptions(request: DescribeSynchronizationJobReplicatorCompareRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynchronizationJobReplicatorCompareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSynchronizationJobReplicatorCompare",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSynchronizationJobReplicatorCompareResponse>(await this.callApi(params, req, runtime), new DescribeSynchronizationJobReplicatorCompareResponse({}));
  }

  async describeSynchronizationJobReplicatorCompare(request: DescribeSynchronizationJobReplicatorCompareRequest): Promise<DescribeSynchronizationJobReplicatorCompareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSynchronizationJobReplicatorCompareWithOptions(request, runtime);
  }

  async describeSynchronizationJobStatusWithOptions(request: DescribeSynchronizationJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynchronizationJobStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSynchronizationJobStatus",
      version: "2020-01-01",
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

  async describeSynchronizationJobStatusListWithOptions(request: DescribeSynchronizationJobStatusListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynchronizationJobStatusListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationJobIdListJsonStr)) {
      query["SynchronizationJobIdListJsonStr"] = request.synchronizationJobIdListJsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSynchronizationJobStatusList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSynchronizationJobStatusListResponse>(await this.callApi(params, req, runtime), new DescribeSynchronizationJobStatusListResponse({}));
  }

  async describeSynchronizationJobStatusList(request: DescribeSynchronizationJobStatusListRequest): Promise<DescribeSynchronizationJobStatusListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSynchronizationJobStatusListWithOptions(request, runtime);
  }

  async describeSynchronizationJobsWithOptions(request: DescribeSynchronizationJobsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynchronizationJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationJobName)) {
      query["SynchronizationJobName"] = request.synchronizationJobName;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSynchronizationJobs",
      version: "2020-01-01",
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

  /**
    * Before you call this operation, you must call the [ModifySynchronizationObject](~~49451~~) operation to obtain the task ID.
    *
    * @param request DescribeSynchronizationObjectModifyStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSynchronizationObjectModifyStatusResponse
   */
  async describeSynchronizationObjectModifyStatusWithOptions(request: DescribeSynchronizationObjectModifyStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynchronizationObjectModifyStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSynchronizationObjectModifyStatus",
      version: "2020-01-01",
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

  /**
    * Before you call this operation, you must call the [ModifySynchronizationObject](~~49451~~) operation to obtain the task ID.
    *
    * @param request DescribeSynchronizationObjectModifyStatusRequest
    * @return DescribeSynchronizationObjectModifyStatusResponse
   */
  async describeSynchronizationObjectModifyStatus(request: DescribeSynchronizationObjectModifyStatusRequest): Promise<DescribeSynchronizationObjectModifyStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSynchronizationObjectModifyStatusWithOptions(request, runtime);
  }

  async describeTagKeysWithOptions(request: DescribeTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTagKeys",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagKeysResponse>(await this.callApi(params, req, runtime), new DescribeTagKeysResponse({}));
  }

  async describeTagKeys(request: DescribeTagKeysRequest): Promise<DescribeTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagKeysWithOptions(request, runtime);
  }

  async describeTagValuesWithOptions(request: DescribeTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagValuesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTagValues",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagValuesResponse>(await this.callApi(params, req, runtime), new DescribeTagValuesResponse({}));
  }

  async describeTagValues(request: DescribeTagValuesRequest): Promise<DescribeTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagValuesWithOptions(request, runtime);
  }

  /**
    * *   The node must be an ApsaraDB RDS for MySQL instance or a self-managed MySQL database that is connected over Cloud Enterprise Network (CEN).
    * *   This operation is used to initialize the built-in account named rdsdt_dtsacct on a node of an active geo-redundancy database cluster. DTS uses this account to connect to the node and perform data synchronization tasks.
    *
    * @param request InitDtsRdsInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return InitDtsRdsInstanceResponse
   */
  async initDtsRdsInstanceWithOptions(request: InitDtsRdsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<InitDtsRdsInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.endpointCenId)) {
      query["EndpointCenId"] = request.endpointCenId;
    }

    if (!Util.isUnset(request.endpointInstanceId)) {
      query["EndpointInstanceId"] = request.endpointInstanceId;
    }

    if (!Util.isUnset(request.endpointInstanceType)) {
      query["EndpointInstanceType"] = request.endpointInstanceType;
    }

    if (!Util.isUnset(request.endpointRegion)) {
      query["EndpointRegion"] = request.endpointRegion;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InitDtsRdsInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitDtsRdsInstanceResponse>(await this.callApi(params, req, runtime), new InitDtsRdsInstanceResponse({}));
  }

  /**
    * *   The node must be an ApsaraDB RDS for MySQL instance or a self-managed MySQL database that is connected over Cloud Enterprise Network (CEN).
    * *   This operation is used to initialize the built-in account named rdsdt_dtsacct on a node of an active geo-redundancy database cluster. DTS uses this account to connect to the node and perform data synchronization tasks.
    *
    * @param request InitDtsRdsInstanceRequest
    * @return InitDtsRdsInstanceResponse
   */
  async initDtsRdsInstance(request: InitDtsRdsInstanceRequest): Promise<InitDtsRdsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initDtsRdsInstanceWithOptions(request, runtime);
  }

  async listDedicatedClusterWithOptions(request: ListDedicatedClusterRequest, runtime: $Util.RuntimeOptions): Promise<ListDedicatedClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!Util.isUnset(request.orderDirection)) {
      query["OrderDirection"] = request.orderDirection;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDedicatedCluster",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDedicatedClusterResponse>(await this.callApi(params, req, runtime), new ListDedicatedClusterResponse({}));
  }

  async listDedicatedCluster(request: ListDedicatedClusterRequest): Promise<ListDedicatedClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDedicatedClusterWithOptions(request, runtime);
  }

  /**
    * ****
    *
    * @param request ListTagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
    * ****
    *
    * @param request ListTagResourcesRequest
    * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async modifyConsumerChannelWithOptions(request: ModifyConsumerChannelRequest, runtime: $Util.RuntimeOptions): Promise<ModifyConsumerChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consumerGroupId)) {
      query["ConsumerGroupId"] = request.consumerGroupId;
    }

    if (!Util.isUnset(request.consumerGroupName)) {
      query["ConsumerGroupName"] = request.consumerGroupName;
    }

    if (!Util.isUnset(request.consumerGroupPassword)) {
      query["ConsumerGroupPassword"] = request.consumerGroupPassword;
    }

    if (!Util.isUnset(request.consumerGroupUserName)) {
      query["ConsumerGroupUserName"] = request.consumerGroupUserName;
    }

    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyConsumerChannel",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyConsumerChannelResponse>(await this.callApi(params, req, runtime), new ModifyConsumerChannelResponse({}));
  }

  async modifyConsumerChannel(request: ModifyConsumerChannelRequest): Promise<ModifyConsumerChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyConsumerChannelWithOptions(request, runtime);
  }

  /**
    * > 
    * *   This operation is applicable to only the new version of the change tracking feature. To use the new version, you must specify the SubscriptionInstanceNetworkType parameter when you call the ConfigureSubscriptionInstance operation. If you use the previous version, you do not need to specify the **SubscriptionInstanceNetworkType** parameter.
    * *   When you call this operation, the change tracking task must be in the NotStarted, Failed, Normal, or Abnormal state.
    *
    * @param request ModifyConsumerGroupPasswordRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyConsumerGroupPasswordResponse
   */
  async modifyConsumerGroupPasswordWithOptions(request: ModifyConsumerGroupPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifyConsumerGroupPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.consumerGroupID)) {
      query["ConsumerGroupID"] = request.consumerGroupID;
    }

    if (!Util.isUnset(request.consumerGroupName)) {
      query["ConsumerGroupName"] = request.consumerGroupName;
    }

    if (!Util.isUnset(request.consumerGroupPassword)) {
      query["ConsumerGroupPassword"] = request.consumerGroupPassword;
    }

    if (!Util.isUnset(request.consumerGroupUserName)) {
      query["ConsumerGroupUserName"] = request.consumerGroupUserName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    if (!Util.isUnset(request.consumerGroupNewPassword)) {
      query["consumerGroupNewPassword"] = request.consumerGroupNewPassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyConsumerGroupPassword",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyConsumerGroupPasswordResponse>(await this.callApi(params, req, runtime), new ModifyConsumerGroupPasswordResponse({}));
  }

  /**
    * > 
    * *   This operation is applicable to only the new version of the change tracking feature. To use the new version, you must specify the SubscriptionInstanceNetworkType parameter when you call the ConfigureSubscriptionInstance operation. If you use the previous version, you do not need to specify the **SubscriptionInstanceNetworkType** parameter.
    * *   When you call this operation, the change tracking task must be in the NotStarted, Failed, Normal, or Abnormal state.
    *
    * @param request ModifyConsumerGroupPasswordRequest
    * @return ModifyConsumerGroupPasswordResponse
   */
  async modifyConsumerGroupPassword(request: ModifyConsumerGroupPasswordRequest): Promise<ModifyConsumerGroupPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyConsumerGroupPasswordWithOptions(request, runtime);
  }

  /**
    * > 
    * *   This operation is applicable to only the previous version of the change tracking feature. To use the new version, you must specify the SubscriptionInstanceNetworkType parameter when you call the [ConfigureSubscriptionInstance](~~49437~~) operation. If you use the previous version, you do not need to specify the **SubscriptionInstanceNetworkType** parameter.
    * *   If you use the new version, you need to set the consumption checkpoint on the change tracking client.
    * *   When you call this operation, you must stop the change tracking client, and the change tracking task must be in the Normal state.
    *
    * @param request ModifyConsumptionTimestampRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyConsumptionTimestampResponse
   */
  async modifyConsumptionTimestampWithOptions(request: ModifyConsumptionTimestampRequest, runtime: $Util.RuntimeOptions): Promise<ModifyConsumptionTimestampResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.consumptionTimestamp)) {
      query["ConsumptionTimestamp"] = request.consumptionTimestamp;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyConsumptionTimestamp",
      version: "2020-01-01",
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

  /**
    * > 
    * *   This operation is applicable to only the previous version of the change tracking feature. To use the new version, you must specify the SubscriptionInstanceNetworkType parameter when you call the [ConfigureSubscriptionInstance](~~49437~~) operation. If you use the previous version, you do not need to specify the **SubscriptionInstanceNetworkType** parameter.
    * *   If you use the new version, you need to set the consumption checkpoint on the change tracking client.
    * *   When you call this operation, you must stop the change tracking client, and the change tracking task must be in the Normal state.
    *
    * @param request ModifyConsumptionTimestampRequest
    * @return ModifyConsumptionTimestampResponse
   */
  async modifyConsumptionTimestamp(request: ModifyConsumptionTimestampRequest): Promise<ModifyConsumptionTimestampResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyConsumptionTimestampWithOptions(request, runtime);
  }

  /**
    * You can modify only the overcommit ratio.
    *
    * @param request ModifyDedicatedClusterRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDedicatedClusterResponse
   */
  async modifyDedicatedClusterWithOptions(request: ModifyDedicatedClusterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!Util.isUnset(request.dedicatedClusterName)) {
      query["DedicatedClusterName"] = request.dedicatedClusterName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.oversoldRatio)) {
      query["OversoldRatio"] = request.oversoldRatio;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDedicatedCluster",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDedicatedClusterResponse>(await this.callApi(params, req, runtime), new ModifyDedicatedClusterResponse({}));
  }

  /**
    * You can modify only the overcommit ratio.
    *
    * @param request ModifyDedicatedClusterRequest
    * @return ModifyDedicatedClusterResponse
   */
  async modifyDedicatedCluster(request: ModifyDedicatedClusterRequest): Promise<ModifyDedicatedClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedClusterWithOptions(request, runtime);
  }

  /**
    * When you configure a data synchronization task in the Data Transmission Service (DTS) console, you can move the pointer over **Next: Save Task Settings and Precheck** in the **Advanced Settings** step and click **Preview OpenAPI parameters** to view the parameters that are used to configure the task by calling an API operation.
    *
    * @param tmpReq ModifyDtsJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDtsJobResponse
   */
  async modifyDtsJobWithOptions(tmpReq: ModifyDtsJobRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDtsJobResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyDtsJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dbList)) {
      request.dbListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dbList, "DbList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dataInitialization)) {
      query["DataInitialization"] = request.dataInitialization;
    }

    if (!Util.isUnset(request.dataSynchronization)) {
      query["DataSynchronization"] = request.dataSynchronization;
    }

    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.fileOssUrl)) {
      query["FileOssUrl"] = request.fileOssUrl;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.structureInitialization)) {
      query["StructureInitialization"] = request.structureInitialization;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbListShrink)) {
      body["DbList"] = request.dbListShrink;
    }

    if (!Util.isUnset(request.etlOperatorColumnReference)) {
      body["EtlOperatorColumnReference"] = request.etlOperatorColumnReference;
    }

    if (!Util.isUnset(request.filterTableName)) {
      body["FilterTableName"] = request.filterTableName;
    }

    if (!Util.isUnset(request.modifyTypeEnum)) {
      body["ModifyTypeEnum"] = request.modifyTypeEnum;
    }

    if (!Util.isUnset(request.reserved)) {
      body["Reserved"] = request.reserved;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDtsJobResponse>(await this.callApi(params, req, runtime), new ModifyDtsJobResponse({}));
  }

  /**
    * When you configure a data synchronization task in the Data Transmission Service (DTS) console, you can move the pointer over **Next: Save Task Settings and Precheck** in the **Advanced Settings** step and click **Preview OpenAPI parameters** to view the parameters that are used to configure the task by calling an API operation.
    *
    * @param request ModifyDtsJobRequest
    * @return ModifyDtsJobResponse
   */
  async modifyDtsJob(request: ModifyDtsJobRequest): Promise<ModifyDtsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDtsJobWithOptions(request, runtime);
  }

  async modifyDtsJobAdvance(request: ModifyDtsJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDtsJobResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "Dts",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let modifyDtsJobReq = new ModifyDtsJobRequest({ });
    OpenApiUtil.convert(request, modifyDtsJobReq);
    if (!Util.isUnset(request.fileOssUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileOssUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      modifyDtsJobReq.fileOssUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let modifyDtsJobResp = await this.modifyDtsJobWithOptions(modifyDtsJobReq, runtime);
    return modifyDtsJobResp;
  }

  async modifyDtsJobConfigWithOptions(request: ModifyDtsJobConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDtsJobConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDtsJobConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDtsJobConfigResponse>(await this.callApi(params, req, runtime), new ModifyDtsJobConfigResponse({}));
  }

  async modifyDtsJobConfig(request: ModifyDtsJobConfigRequest): Promise<ModifyDtsJobConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDtsJobConfigWithOptions(request, runtime);
  }

  async modifyDtsJobDedicatedClusterWithOptions(request: ModifyDtsJobDedicatedClusterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDtsJobDedicatedClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!Util.isUnset(request.dtsJobIds)) {
      query["DtsJobIds"] = request.dtsJobIds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDtsJobDedicatedCluster",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDtsJobDedicatedClusterResponse>(await this.callApi(params, req, runtime), new ModifyDtsJobDedicatedClusterResponse({}));
  }

  async modifyDtsJobDedicatedCluster(request: ModifyDtsJobDedicatedClusterRequest): Promise<ModifyDtsJobDedicatedClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDtsJobDedicatedClusterWithOptions(request, runtime);
  }

  /**
    * *   DTS allows you to upgrade or downgrade the configurations of DTS instances in a dedicated cluster. You can adjust the resources that are occupied for task execution to dynamically adjust the number of tasks that can be scheduled in the cluster. This way, you can reduce the total number of DUs required for the cluster or release DUs.
    * *   Before you modify the upper limit of DUs for a DTS task, make sure that sufficient DUs are available.
    *
    * @param request ModifyDtsJobDuLimitRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDtsJobDuLimitResponse
   */
  async modifyDtsJobDuLimitWithOptions(request: ModifyDtsJobDuLimitRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDtsJobDuLimitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.duLimit)) {
      query["DuLimit"] = request.duLimit;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDtsJobDuLimit",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDtsJobDuLimitResponse>(await this.callApi(params, req, runtime), new ModifyDtsJobDuLimitResponse({}));
  }

  /**
    * *   DTS allows you to upgrade or downgrade the configurations of DTS instances in a dedicated cluster. You can adjust the resources that are occupied for task execution to dynamically adjust the number of tasks that can be scheduled in the cluster. This way, you can reduce the total number of DUs required for the cluster or release DUs.
    * *   Before you modify the upper limit of DUs for a DTS task, make sure that sufficient DUs are available.
    *
    * @param request ModifyDtsJobDuLimitRequest
    * @return ModifyDtsJobDuLimitResponse
   */
  async modifyDtsJobDuLimit(request: ModifyDtsJobDuLimitRequest): Promise<ModifyDtsJobDuLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDtsJobDuLimitWithOptions(request, runtime);
  }

  async modifyDtsJobEndpointWithOptions(request: ModifyDtsJobEndpointRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDtsJobEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliyunUid)) {
      query["AliyunUid"] = request.aliyunUid;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.endpoint)) {
      query["Endpoint"] = request.endpoint;
    }

    if (!Util.isUnset(request.endpointInstanceId)) {
      query["EndpointInstanceId"] = request.endpointInstanceId;
    }

    if (!Util.isUnset(request.endpointInstanceType)) {
      query["EndpointInstanceType"] = request.endpointInstanceType;
    }

    if (!Util.isUnset(request.endpointIp)) {
      query["EndpointIp"] = request.endpointIp;
    }

    if (!Util.isUnset(request.endpointPort)) {
      query["EndpointPort"] = request.endpointPort;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    if (!Util.isUnset(request.shardPassword)) {
      query["ShardPassword"] = request.shardPassword;
    }

    if (!Util.isUnset(request.shardUsername)) {
      query["ShardUsername"] = request.shardUsername;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDtsJobEndpoint",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDtsJobEndpointResponse>(await this.callApi(params, req, runtime), new ModifyDtsJobEndpointResponse({}));
  }

  async modifyDtsJobEndpoint(request: ModifyDtsJobEndpointRequest): Promise<ModifyDtsJobEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDtsJobEndpointWithOptions(request, runtime);
  }

  async modifyDtsJobNameWithOptions(request: ModifyDtsJobNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDtsJobNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.dtsJobName)) {
      query["DtsJobName"] = request.dtsJobName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDtsJobName",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDtsJobNameResponse>(await this.callApi(params, req, runtime), new ModifyDtsJobNameResponse({}));
  }

  async modifyDtsJobName(request: ModifyDtsJobNameRequest): Promise<ModifyDtsJobNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDtsJobNameWithOptions(request, runtime);
  }

  async modifyDtsJobPasswordWithOptions(request: ModifyDtsJobPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDtsJobPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.endpoint)) {
      query["Endpoint"] = request.endpoint;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDtsJobPassword",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDtsJobPasswordResponse>(await this.callApi(params, req, runtime), new ModifyDtsJobPasswordResponse({}));
  }

  async modifyDtsJobPassword(request: ModifyDtsJobPasswordRequest): Promise<ModifyDtsJobPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDtsJobPasswordWithOptions(request, runtime);
  }

  async modifyDynamicConfigWithOptions(request: ModifyDynamicConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDynamicConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configList)) {
      query["ConfigList"] = request.configList;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.enableLimit)) {
      query["EnableLimit"] = request.enableLimit;
    }

    if (!Util.isUnset(request.jobCode)) {
      query["JobCode"] = request.jobCode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDynamicConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDynamicConfigResponse>(await this.callApi(params, req, runtime), new ModifyDynamicConfigResponse({}));
  }

  async modifyDynamicConfig(request: ModifyDynamicConfigRequest): Promise<ModifyDynamicConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDynamicConfigWithOptions(request, runtime);
  }

  async modifySubscriptionWithOptions(request: ModifySubscriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifySubscriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbList)) {
      query["DbList"] = request.dbList;
    }

    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.subscriptionDataTypeDDL)) {
      query["SubscriptionDataTypeDDL"] = request.subscriptionDataTypeDDL;
    }

    if (!Util.isUnset(request.subscriptionDataTypeDML)) {
      query["SubscriptionDataTypeDML"] = request.subscriptionDataTypeDML;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySubscription",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySubscriptionResponse>(await this.callApi(params, req, runtime), new ModifySubscriptionResponse({}));
  }

  async modifySubscription(request: ModifySubscriptionRequest): Promise<ModifySubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySubscriptionWithOptions(request, runtime);
  }

  /**
    * When you call this operation, the change tracking task must be in the Normal, NotStarted, or Failed state.
    * > 
    * *   If you call this operation to modify the objects of a change tracking task that is in the Normal state, DTS automatically calls the [StartSubscriptionInstance](~~49438~~) to restart the task.
    * *   If you call this operation to modify the objects of a change tracking task that is in the NotStarted or Failed state, DTS does not automatically start the task. You must call the [StartSubscriptionInstance](~~49438~~) to restart the task.
    *
    * @param request ModifySubscriptionObjectRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifySubscriptionObjectResponse
   */
  async modifySubscriptionObjectWithOptions(request: ModifySubscriptionObjectRequest, runtime: $Util.RuntimeOptions): Promise<ModifySubscriptionObjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      version: "2020-01-01",
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

  /**
    * When you call this operation, the change tracking task must be in the Normal, NotStarted, or Failed state.
    * > 
    * *   If you call this operation to modify the objects of a change tracking task that is in the Normal state, DTS automatically calls the [StartSubscriptionInstance](~~49438~~) to restart the task.
    * *   If you call this operation to modify the objects of a change tracking task that is in the NotStarted or Failed state, DTS does not automatically start the task. You must call the [StartSubscriptionInstance](~~49438~~) to restart the task.
    *
    * @param request ModifySubscriptionObjectRequest
    * @return ModifySubscriptionObjectResponse
   */
  async modifySubscriptionObject(request: ModifySubscriptionObjectRequest): Promise<ModifySubscriptionObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySubscriptionObjectWithOptions(request, runtime);
  }

  /**
    * >  When you call this operation, the data synchronization task must be in the Not Started or Synchronizing state.
    *
    * @param request ModifySynchronizationObjectRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifySynchronizationObjectResponse
   */
  async modifySynchronizationObjectWithOptions(request: ModifySynchronizationObjectRequest, runtime: $Util.RuntimeOptions): Promise<ModifySynchronizationObjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.synchronizationObjects)) {
      body["SynchronizationObjects"] = request.synchronizationObjects;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifySynchronizationObject",
      version: "2020-01-01",
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

  /**
    * >  When you call this operation, the data synchronization task must be in the Not Started or Synchronizing state.
    *
    * @param request ModifySynchronizationObjectRequest
    * @return ModifySynchronizationObjectResponse
   */
  async modifySynchronizationObject(request: ModifySynchronizationObjectRequest): Promise<ModifySynchronizationObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySynchronizationObjectWithOptions(request, runtime);
  }

  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.buyCount)) {
      query["BuyCount"] = request.buyCount;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewInstanceResponse>(await this.callApi(params, req, runtime), new RenewInstanceResponse({}));
  }

  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  /**
    * >  If you clear the configurations of a data synchronization or change tracking task, DTS deletes the task. Then, DTS creates another task. The task is in the Not Configured state. You must call the [ConfigureDtsJob](~~208399~~) operation reconfigure the task.
    *
    * @param request ResetDtsJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ResetDtsJobResponse
   */
  async resetDtsJobWithOptions(request: ResetDtsJobRequest, runtime: $Util.RuntimeOptions): Promise<ResetDtsJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetDtsJobResponse>(await this.callApi(params, req, runtime), new ResetDtsJobResponse({}));
  }

  /**
    * >  If you clear the configurations of a data synchronization or change tracking task, DTS deletes the task. Then, DTS creates another task. The task is in the Not Configured state. You must call the [ConfigureDtsJob](~~208399~~) operation reconfigure the task.
    *
    * @param request ResetDtsJobRequest
    * @return ResetDtsJobResponse
   */
  async resetDtsJob(request: ResetDtsJobRequest): Promise<ResetDtsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetDtsJobWithOptions(request, runtime);
  }

  /**
    * >  If you clear the configurations of a data synchronization task, the task will be released. To start the task again, you must call the **ConfigureSynchronizationJob** operation to reconfigure the task.
    *
    * @param request ResetSynchronizationJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ResetSynchronizationJobResponse
   */
  async resetSynchronizationJobWithOptions(request: ResetSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<ResetSynchronizationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetSynchronizationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetSynchronizationJobResponse>(await this.callApi(params, req, runtime), new ResetSynchronizationJobResponse({}));
  }

  /**
    * >  If you clear the configurations of a data synchronization task, the task will be released. To start the task again, you must call the **ConfigureSynchronizationJob** operation to reconfigure the task.
    *
    * @param request ResetSynchronizationJobRequest
    * @return ResetSynchronizationJobResponse
   */
  async resetSynchronizationJob(request: ResetSynchronizationJobRequest): Promise<ResetSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetSynchronizationJobWithOptions(request, runtime);
  }

  async reverseTwoWayDirectionWithOptions(request: ReverseTwoWayDirectionRequest, runtime: $Util.RuntimeOptions): Promise<ReverseTwoWayDirectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.ignoreErrorSubJob)) {
      query["IgnoreErrorSubJob"] = request.ignoreErrorSubJob;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReverseTwoWayDirection",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReverseTwoWayDirectionResponse>(await this.callApi(params, req, runtime), new ReverseTwoWayDirectionResponse({}));
  }

  async reverseTwoWayDirection(request: ReverseTwoWayDirectionRequest): Promise<ReverseTwoWayDirectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reverseTwoWayDirectionWithOptions(request, runtime);
  }

  /**
    * If you call this operation to ignore all precheck items, you must call the [StartMigrationJob](https://www.alibabacloud.com/help/zh/doc-detail/49429.htm) or [StartSynchronizationJob](https://www.alibabacloud.com/help/zh/doc-detail/49448.htm) operation. DTS performs a precheck again. After the data migration or synchronization task passes the precheck, the task will be automatically started.
    *
    * @param request ShieldPrecheckRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ShieldPrecheckResponse
   */
  async shieldPrecheckWithOptions(request: ShieldPrecheckRequest, runtime: $Util.RuntimeOptions): Promise<ShieldPrecheckResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.precheckItems)) {
      query["PrecheckItems"] = request.precheckItems;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ShieldPrecheck",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ShieldPrecheckResponse>(await this.callApi(params, req, runtime), new ShieldPrecheckResponse({}));
  }

  /**
    * If you call this operation to ignore all precheck items, you must call the [StartMigrationJob](https://www.alibabacloud.com/help/zh/doc-detail/49429.htm) or [StartSynchronizationJob](https://www.alibabacloud.com/help/zh/doc-detail/49448.htm) operation. DTS performs a precheck again. After the data migration or synchronization task passes the precheck, the task will be automatically started.
    *
    * @param request ShieldPrecheckRequest
    * @return ShieldPrecheckResponse
   */
  async shieldPrecheck(request: ShieldPrecheckRequest): Promise<ShieldPrecheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.shieldPrecheckWithOptions(request, runtime);
  }

  async skipPreCheckWithOptions(request: SkipPreCheckRequest, runtime: $Util.RuntimeOptions): Promise<SkipPreCheckResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.skip)) {
      query["Skip"] = request.skip;
    }

    if (!Util.isUnset(request.skipPreCheckItems)) {
      query["SkipPreCheckItems"] = request.skipPreCheckItems;
    }

    if (!Util.isUnset(request.skipPreCheckNames)) {
      query["SkipPreCheckNames"] = request.skipPreCheckNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SkipPreCheck",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SkipPreCheckResponse>(await this.callApi(params, req, runtime), new SkipPreCheckResponse({}));
  }

  async skipPreCheck(request: SkipPreCheckRequest): Promise<SkipPreCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.skipPreCheckWithOptions(request, runtime);
  }

  async startDtsJobWithOptions(request: StartDtsJobRequest, runtime: $Util.RuntimeOptions): Promise<StartDtsJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartDtsJobResponse>(await this.callApi(params, req, runtime), new StartDtsJobResponse({}));
  }

  async startDtsJob(request: StartDtsJobRequest): Promise<StartDtsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDtsJobWithOptions(request, runtime);
  }

  async startDtsJobsWithOptions(request: StartDtsJobsRequest, runtime: $Util.RuntimeOptions): Promise<StartDtsJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsJobIds)) {
      query["DtsJobIds"] = request.dtsJobIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartDtsJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartDtsJobsResponse>(await this.callApi(params, req, runtime), new StartDtsJobsResponse({}));
  }

  async startDtsJobs(request: StartDtsJobsRequest): Promise<StartDtsJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDtsJobsWithOptions(request, runtime);
  }

  /**
    * >  When you call this operation, the data migration task must be in the Not Started, Paused, or Migration Failed state.
    *
    * @param request StartMigrationJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartMigrationJobResponse
   */
  async startMigrationJobWithOptions(request: StartMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<StartMigrationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartMigrationJob",
      version: "2020-01-01",
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

  /**
    * >  When you call this operation, the data migration task must be in the Not Started, Paused, or Migration Failed state.
    *
    * @param request StartMigrationJobRequest
    * @return StartMigrationJobResponse
   */
  async startMigrationJob(request: StartMigrationJobRequest): Promise<StartMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startMigrationJobWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, make sure that your instance is not released and is paused. You can check the status of the instance in the Data Transmission Service (DTS) console or by calling the [DescribeDtsJobDetail](~~208925~~) operation.
    *
    * @param request StartReverseWriterRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartReverseWriterResponse
   */
  async startReverseWriterWithOptions(request: StartReverseWriterRequest, runtime: $Util.RuntimeOptions): Promise<StartReverseWriterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkPoint)) {
      query["CheckPoint"] = request.checkPoint;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartReverseWriter",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartReverseWriterResponse>(await this.callApi(params, req, runtime), new StartReverseWriterResponse({}));
  }

  /**
    * Before you call this operation, make sure that your instance is not released and is paused. You can check the status of the instance in the Data Transmission Service (DTS) console or by calling the [DescribeDtsJobDetail](~~208925~~) operation.
    *
    * @param request StartReverseWriterRequest
    * @return StartReverseWriterResponse
   */
  async startReverseWriter(request: StartReverseWriterRequest): Promise<StartReverseWriterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startReverseWriterWithOptions(request, runtime);
  }

  /**
    * When you call this operation, the change tracking task must be in the NotStarted or Failed state.
    *
    * @param request StartSubscriptionInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartSubscriptionInstanceResponse
   */
  async startSubscriptionInstanceWithOptions(request: StartSubscriptionInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartSubscriptionInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartSubscriptionInstance",
      version: "2020-01-01",
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

  /**
    * When you call this operation, the change tracking task must be in the NotStarted or Failed state.
    *
    * @param request StartSubscriptionInstanceRequest
    * @return StartSubscriptionInstanceResponse
   */
  async startSubscriptionInstance(request: StartSubscriptionInstanceRequest): Promise<StartSubscriptionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startSubscriptionInstanceWithOptions(request, runtime);
  }

  async startSynchronizationJobWithOptions(request: StartSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<StartSynchronizationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartSynchronizationJob",
      version: "2020-01-01",
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

  async stopDedicatedClusterWithOptions(request: StopDedicatedClusterRequest, runtime: $Util.RuntimeOptions): Promise<StopDedicatedClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!Util.isUnset(request.dedicatedClusterName)) {
      query["DedicatedClusterName"] = request.dedicatedClusterName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopDedicatedCluster",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopDedicatedClusterResponse>(await this.callApi(params, req, runtime), new StopDedicatedClusterResponse({}));
  }

  async stopDedicatedCluster(request: StopDedicatedClusterRequest): Promise<StopDedicatedClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDedicatedClusterWithOptions(request, runtime);
  }

  async stopDtsJobWithOptions(request: StopDtsJobRequest, runtime: $Util.RuntimeOptions): Promise<StopDtsJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopDtsJobResponse>(await this.callApi(params, req, runtime), new StopDtsJobResponse({}));
  }

  async stopDtsJob(request: StopDtsJobRequest): Promise<StopDtsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDtsJobWithOptions(request, runtime);
  }

  async stopDtsJobsWithOptions(request: StopDtsJobsRequest, runtime: $Util.RuntimeOptions): Promise<StopDtsJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsJobIds)) {
      query["DtsJobIds"] = request.dtsJobIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopDtsJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopDtsJobsResponse>(await this.callApi(params, req, runtime), new StopDtsJobsResponse({}));
  }

  async stopDtsJobs(request: StopDtsJobsRequest): Promise<StopDtsJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDtsJobsWithOptions(request, runtime);
  }

  /**
    * >  After you call this operation to stop a data migration task, the status of the task changes to Finished and you cannot restart the task by calling the [StartMigrationJob](~~49429~~) operation.
    *
    * @param request StopMigrationJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopMigrationJobResponse
   */
  async stopMigrationJobWithOptions(request: StopMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<StopMigrationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopMigrationJob",
      version: "2020-01-01",
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

  /**
    * >  After you call this operation to stop a data migration task, the status of the task changes to Finished and you cannot restart the task by calling the [StartMigrationJob](~~49429~~) operation.
    *
    * @param request StopMigrationJobRequest
    * @return StopMigrationJobResponse
   */
  async stopMigrationJob(request: StopMigrationJobRequest): Promise<StopMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopMigrationJobWithOptions(request, runtime);
  }

  async summaryJobDetailWithOptions(request: SummaryJobDetailRequest, runtime: $Util.RuntimeOptions): Promise<SummaryJobDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.jobCode)) {
      query["JobCode"] = request.jobCode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.structType)) {
      query["StructType"] = request.structType;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SummaryJobDetail",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SummaryJobDetailResponse>(await this.callApi(params, req, runtime), new SummaryJobDetailResponse({}));
  }

  async summaryJobDetail(request: SummaryJobDetailRequest): Promise<SummaryJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.summaryJobDetailWithOptions(request, runtime);
  }

  /**
    * ****
    *
    * @param request SuspendDtsJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SuspendDtsJobResponse
   */
  async suspendDtsJobWithOptions(request: SuspendDtsJobRequest, runtime: $Util.RuntimeOptions): Promise<SuspendDtsJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SuspendDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SuspendDtsJobResponse>(await this.callApi(params, req, runtime), new SuspendDtsJobResponse({}));
  }

  /**
    * ****
    *
    * @param request SuspendDtsJobRequest
    * @return SuspendDtsJobResponse
   */
  async suspendDtsJob(request: SuspendDtsJobRequest): Promise<SuspendDtsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendDtsJobWithOptions(request, runtime);
  }

  async suspendDtsJobsWithOptions(request: SuspendDtsJobsRequest, runtime: $Util.RuntimeOptions): Promise<SuspendDtsJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsJobIds)) {
      query["DtsJobIds"] = request.dtsJobIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SuspendDtsJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SuspendDtsJobsResponse>(await this.callApi(params, req, runtime), new SuspendDtsJobsResponse({}));
  }

  async suspendDtsJobs(request: SuspendDtsJobsRequest): Promise<SuspendDtsJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendDtsJobsWithOptions(request, runtime);
  }

  /**
    * > 
    * *   If a data migration task is performing incremental data migration, we recommend that you do not pause the task for more than 6 hours. Otherwise, you will not be able to call the [StartMigrationJob](~~49429~~) operation to restart the task.
    * *   If you select incremental data migration as the migration type for a pay-as-you-go instance, DTS charges a fee even when the task is paused. This is because DTS only stops writing data to the destination database. DTS continues to pull the logs of the source database so that the task can resume quickly after it is restarted. Therefore, incremental data migration consumes resources such as the bandwidth of the source database.
    *
    * @param request SuspendMigrationJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SuspendMigrationJobResponse
   */
  async suspendMigrationJobWithOptions(request: SuspendMigrationJobRequest, runtime: $Util.RuntimeOptions): Promise<SuspendMigrationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SuspendMigrationJob",
      version: "2020-01-01",
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

  /**
    * > 
    * *   If a data migration task is performing incremental data migration, we recommend that you do not pause the task for more than 6 hours. Otherwise, you will not be able to call the [StartMigrationJob](~~49429~~) operation to restart the task.
    * *   If you select incremental data migration as the migration type for a pay-as-you-go instance, DTS charges a fee even when the task is paused. This is because DTS only stops writing data to the destination database. DTS continues to pull the logs of the source database so that the task can resume quickly after it is restarted. Therefore, incremental data migration consumes resources such as the bandwidth of the source database.
    *
    * @param request SuspendMigrationJobRequest
    * @return SuspendMigrationJobResponse
   */
  async suspendMigrationJob(request: SuspendMigrationJobRequest): Promise<SuspendMigrationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendMigrationJobWithOptions(request, runtime);
  }

  /**
    * > 
    * *   When you call this operation, the data synchronization task must be in the Synchronizing state.
    * *   We recommend that you do not pause a data synchronization task for more than 6 hours. Otherwise, the task cannot be started again.
    * *   If the billing method is pay-as-you-go, DTS charges a fee even when the task is paused. This is because DTS only stops writing data to the destination database. DTS continues to pull the logs of the source database so that the task can resume quickly after it is restarted. Therefore, data synchronization consumes resources such as the bandwidth of the source database.
    *
    * @param request SuspendSynchronizationJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SuspendSynchronizationJobResponse
   */
  async suspendSynchronizationJobWithOptions(request: SuspendSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<SuspendSynchronizationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SuspendSynchronizationJob",
      version: "2020-01-01",
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

  /**
    * > 
    * *   When you call this operation, the data synchronization task must be in the Synchronizing state.
    * *   We recommend that you do not pause a data synchronization task for more than 6 hours. Otherwise, the task cannot be started again.
    * *   If the billing method is pay-as-you-go, DTS charges a fee even when the task is paused. This is because DTS only stops writing data to the destination database. DTS continues to pull the logs of the source database so that the task can resume quickly after it is restarted. Therefore, data synchronization consumes resources such as the bandwidth of the source database.
    *
    * @param request SuspendSynchronizationJobRequest
    * @return SuspendSynchronizationJobResponse
   */
  async suspendSynchronizationJob(request: SuspendSynchronizationJobRequest): Promise<SuspendSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendSynchronizationJobWithOptions(request, runtime);
  }

  async switchPhysicalDtsJobToCloudWithOptions(request: SwitchPhysicalDtsJobToCloudRequest, runtime: $Util.RuntimeOptions): Promise<SwitchPhysicalDtsJobToCloudResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchPhysicalDtsJobToCloud",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchPhysicalDtsJobToCloudResponse>(await this.callApi(params, req, runtime), new SwitchPhysicalDtsJobToCloudResponse({}));
  }

  async switchPhysicalDtsJobToCloud(request: SwitchPhysicalDtsJobToCloudRequest): Promise<SwitchPhysicalDtsJobToCloudResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchPhysicalDtsJobToCloudWithOptions(request, runtime);
  }

  /**
    * *   If the source or destination database is a self-managed MySQL database connected over the Internet, Elastic Compute Service (ECS) or Express Connect, you must call this operation to update the connection settings.
    * *   If the source or destination database is hosted on an ApsaraDB instance (such as ApsaraDB RDS instance and ApsaraDB for MongoDB instance), DTS automatically updates the connection settings. You do not need to call this operation.
    * > *   For two-way synchronization tasks, if you perform a primary/secondary switchover on the source or destination database, you must call this operation twice to update the connection settings.
    *         For example, if you perform a primary/secondary switchover on the destination database of the forward direction, you must call this operation twice. In the first call, set the **SynchronizationDirection** parameter to **Forward**, set the **Endpoint.Type **parameter to **Destination**, and configure the connection settings. In the second call, set the **SynchronizationDirection** parameter to **Reverse**, set the **Endpoint.Type **parameter to **Source**, and configure the connection settings.
    *
    * @param request SwitchSynchronizationEndpointRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SwitchSynchronizationEndpointResponse
   */
  async switchSynchronizationEndpointWithOptions(request: SwitchSynchronizationEndpointRequest, runtime: $Util.RuntimeOptions): Promise<SwitchSynchronizationEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    if (!Util.isUnset(request.endpoint)) {
      query["Endpoint"] = request.endpoint;
    }

    if (!Util.isUnset(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchSynchronizationEndpoint",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchSynchronizationEndpointResponse>(await this.callApi(params, req, runtime), new SwitchSynchronizationEndpointResponse({}));
  }

  /**
    * *   If the source or destination database is a self-managed MySQL database connected over the Internet, Elastic Compute Service (ECS) or Express Connect, you must call this operation to update the connection settings.
    * *   If the source or destination database is hosted on an ApsaraDB instance (such as ApsaraDB RDS instance and ApsaraDB for MongoDB instance), DTS automatically updates the connection settings. You do not need to call this operation.
    * > *   For two-way synchronization tasks, if you perform a primary/secondary switchover on the source or destination database, you must call this operation twice to update the connection settings.
    *         For example, if you perform a primary/secondary switchover on the destination database of the forward direction, you must call this operation twice. In the first call, set the **SynchronizationDirection** parameter to **Forward**, set the **Endpoint.Type **parameter to **Destination**, and configure the connection settings. In the second call, set the **SynchronizationDirection** parameter to **Reverse**, set the **Endpoint.Type **parameter to **Source**, and configure the connection settings.
    *
    * @param request SwitchSynchronizationEndpointRequest
    * @return SwitchSynchronizationEndpointResponse
   */
  async switchSynchronizationEndpoint(request: SwitchSynchronizationEndpointRequest): Promise<SwitchSynchronizationEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchSynchronizationEndpointWithOptions(request, runtime);
  }

  /**
    * If you have a large number of instances, you can create multiple tags and bind these tags to the instances. Then, you can filter the instances by tag.
    * *   A tag consists of a key and a value. Each key must be unique in a region for an Alibaba Cloud account. Different keys can be mapped to the same value.
    * *   If the tag that you specify does not exist, this tag is automatically created and bound to the specified instance.
    * *   If the key of the specified tag is the same as that of an existing tag, the specified tag overwrites the existing tag.
    * *   You can bind up to 20 tags to each instance.
    * *   You can bind tags to up to 50 instances in each call.
    *
    * @param request TagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
    * If you have a large number of instances, you can create multiple tags and bind these tags to the instances. Then, you can filter the instances by tag.
    * *   A tag consists of a key and a value. Each key must be unique in a region for an Alibaba Cloud account. Different keys can be mapped to the same value.
    * *   If the tag that you specify does not exist, this tag is automatically created and bound to the specified instance.
    * *   If the key of the specified tag is the same as that of an existing tag, the specified tag overwrites the existing tag.
    * *   You can bind up to 20 tags to each instance.
    * *   You can bind tags to up to 50 instances in each call.
    *
    * @param request TagResourcesRequest
    * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async transferInstanceClassWithOptions(request: TransferInstanceClassRequest, runtime: $Util.RuntimeOptions): Promise<TransferInstanceClassResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransferInstanceClass",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransferInstanceClassResponse>(await this.callApi(params, req, runtime), new TransferInstanceClassResponse({}));
  }

  async transferInstanceClass(request: TransferInstanceClassRequest): Promise<TransferInstanceClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferInstanceClassWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of DTS.
    * *   The billing method of subscription instances cannot be changed to pay-as-you-go. To prevent resource waste, determine whether you need to change the billing method of your resources.
    * *   Data migration instances are all pay-as-you-go instances. You do not need to change the billing method of data migration instances.
    * *   After you change the billing method from pay-as-you-go to subscription, the DTS instance is not affected.
    *
    * @param request TransferPayTypeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return TransferPayTypeResponse
   */
  async transferPayTypeWithOptions(request: TransferPayTypeRequest, runtime: $Util.RuntimeOptions): Promise<TransferPayTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.buyCount)) {
      query["BuyCount"] = request.buyCount;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransferPayType",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransferPayTypeResponse>(await this.callApi(params, req, runtime), new TransferPayTypeResponse({}));
  }

  /**
    * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of DTS.
    * *   The billing method of subscription instances cannot be changed to pay-as-you-go. To prevent resource waste, determine whether you need to change the billing method of your resources.
    * *   Data migration instances are all pay-as-you-go instances. You do not need to change the billing method of data migration instances.
    * *   After you change the billing method from pay-as-you-go to subscription, the DTS instance is not affected.
    *
    * @param request TransferPayTypeRequest
    * @return TransferPayTypeResponse
   */
  async transferPayType(request: TransferPayTypeRequest): Promise<TransferPayTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferPayTypeWithOptions(request, runtime);
  }

  /**
    * >  If a tag is unbound from an instance and is not bound to other instances, the tag is deleted.
    *
    * @param request UntagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
    * >  If a tag is unbound from an instance and is not bound to other instances, the tag is deleted.
    *
    * @param request UntagResourcesRequest
    * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of Data Transmission Service (DTS)
    * When you call this operation, take note of the following information:
    * *   The source and destination databases of the data synchronization task are both **MySQL** databases.
    * *   The synchronization topology of the data synchronization task is **one-way synchronization**.
    * *   The data synchronization task is in the **Synchronizing** state.
    * *   The upgrade operation causes data synchronization latency of about 5 seconds. We recommend that you perform this operation during off-peak hours.
    *
    * @param request UpgradeTwoWayRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpgradeTwoWayResponse
   */
  async upgradeTwoWayWithOptions(request: UpgradeTwoWayRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeTwoWayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeTwoWay",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeTwoWayResponse>(await this.callApi(params, req, runtime), new UpgradeTwoWayResponse({}));
  }

  /**
    * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of Data Transmission Service (DTS)
    * When you call this operation, take note of the following information:
    * *   The source and destination databases of the data synchronization task are both **MySQL** databases.
    * *   The synchronization topology of the data synchronization task is **one-way synchronization**.
    * *   The data synchronization task is in the **Synchronizing** state.
    * *   The upgrade operation causes data synchronization latency of about 5 seconds. We recommend that you perform this operation during off-peak hours.
    *
    * @param request UpgradeTwoWayRequest
    * @return UpgradeTwoWayResponse
   */
  async upgradeTwoWay(request: UpgradeTwoWayRequest): Promise<UpgradeTwoWayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeTwoWayWithOptions(request, runtime);
  }

  /**
    * The operation that you want to perform. Set the value to **WhiteIpList**.
    *
    * @param request WhiteIpListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return WhiteIpListResponse
   */
  async whiteIpListWithOptions(request: WhiteIpListRequest, runtime: $Util.RuntimeOptions): Promise<WhiteIpListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destinationRegion)) {
      query["DestinationRegion"] = request.destinationRegion;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "WhiteIpList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<WhiteIpListResponse>(await this.callApi(params, req, runtime), new WhiteIpListResponse({}));
  }

  /**
    * The operation that you want to perform. Set the value to **WhiteIpList**.
    *
    * @param request WhiteIpListRequest
    * @return WhiteIpListResponse
   */
  async whiteIpList(request: WhiteIpListRequest): Promise<WhiteIpListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.whiteIpListWithOptions(request, runtime);
  }

}
