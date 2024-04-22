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

export class AllocateInstancePublicConnectionRequest extends $tea.Model {
  addressType?: string;
  connectionStringPrefix?: string;
  DBInstanceId?: string;
  ownerId?: number;
  port?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      port: 'Port',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      connectionStringPrefix: 'string',
      DBInstanceId: 'string',
      ownerId: 'number',
      port: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateInstancePublicConnectionResponseBody extends $tea.Model {
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

export class AllocateInstancePublicConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AllocateInstancePublicConnectionResponseBody;
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
      body: AllocateInstancePublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelUploadDocumentJobRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  jobId?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      jobId: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelUploadDocumentJobResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelUploadDocumentJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelUploadDocumentJobResponseBody;
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
      body: CancelUploadDocumentJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelUpsertCollectionDataJobRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  jobId?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      jobId: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelUpsertCollectionDataJobResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelUpsertCollectionDataJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelUpsertCollectionDataJobResponseBody;
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
      body: CancelUpsertCollectionDataJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleResponseBody extends $tea.Model {
  hasServiceLinkedRole?: string;
  regionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hasServiceLinkedRole: 'HasServiceLinkedRole',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasServiceLinkedRole: 'string',
      regionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckServiceLinkedRoleResponseBody;
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
      body: CheckServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountRequest extends $tea.Model {
  accountDescription?: string;
  accountName?: string;
  accountPassword?: string;
  DBInstanceId?: string;
  databaseName?: string;
  ownerId?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      DBInstanceId: 'DBInstanceId',
      databaseName: 'DatabaseName',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      DBInstanceId: 'string',
      databaseName: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponseBody extends $tea.Model {
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

export class CreateAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccountResponseBody;
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
      body: CreateAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCollectionRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  dimension?: number;
  externalStorage?: number;
  fullTextRetrievalFields?: string;
  hnswM?: number;
  managerAccount?: string;
  managerAccountPassword?: string;
  metadata?: string;
  metrics?: string;
  namespace?: string;
  ownerId?: number;
  parser?: string;
  pqEnable?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      dimension: 'Dimension',
      externalStorage: 'ExternalStorage',
      fullTextRetrievalFields: 'FullTextRetrievalFields',
      hnswM: 'HnswM',
      managerAccount: 'ManagerAccount',
      managerAccountPassword: 'ManagerAccountPassword',
      metadata: 'Metadata',
      metrics: 'Metrics',
      namespace: 'Namespace',
      ownerId: 'OwnerId',
      parser: 'Parser',
      pqEnable: 'PqEnable',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      dimension: 'number',
      externalStorage: 'number',
      fullTextRetrievalFields: 'string',
      hnswM: 'number',
      managerAccount: 'string',
      managerAccountPassword: 'string',
      metadata: 'string',
      metrics: 'string',
      namespace: 'string',
      ownerId: 'number',
      parser: 'string',
      pqEnable: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCollectionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCollectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCollectionResponseBody;
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
      body: CreateCollectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequest extends $tea.Model {
  backupId?: string;
  clientToken?: string;
  createSampleData?: boolean;
  DBInstanceCategory?: string;
  DBInstanceClass?: string;
  DBInstanceDescription?: string;
  DBInstanceGroupCount?: string;
  DBInstanceMode?: string;
  enableSSL?: boolean;
  encryptionKey?: string;
  encryptionType?: string;
  engine?: string;
  engineVersion?: string;
  idleTime?: number;
  instanceNetworkType?: string;
  instanceSpec?: string;
  masterCU?: number;
  masterNodeNum?: string;
  ownerId?: number;
  payType?: string;
  period?: string;
  privateIpAddress?: string;
  prodType?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityIPList?: string;
  segDiskPerformanceLevel?: string;
  segNodeNum?: string;
  segStorageType?: string;
  serverlessMode?: string;
  serverlessResource?: number;
  srcDbInstanceName?: string;
  storageSize?: number;
  storageType?: string;
  tag?: CreateDBInstanceRequestTag[];
  usedTime?: string;
  VPCId?: string;
  vSwitchId?: string;
  vectorConfigurationStatus?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      clientToken: 'ClientToken',
      createSampleData: 'CreateSampleData',
      DBInstanceCategory: 'DBInstanceCategory',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceGroupCount: 'DBInstanceGroupCount',
      DBInstanceMode: 'DBInstanceMode',
      enableSSL: 'EnableSSL',
      encryptionKey: 'EncryptionKey',
      encryptionType: 'EncryptionType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      idleTime: 'IdleTime',
      instanceNetworkType: 'InstanceNetworkType',
      instanceSpec: 'InstanceSpec',
      masterCU: 'MasterCU',
      masterNodeNum: 'MasterNodeNum',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      privateIpAddress: 'PrivateIpAddress',
      prodType: 'ProdType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityIPList: 'SecurityIPList',
      segDiskPerformanceLevel: 'SegDiskPerformanceLevel',
      segNodeNum: 'SegNodeNum',
      segStorageType: 'SegStorageType',
      serverlessMode: 'ServerlessMode',
      serverlessResource: 'ServerlessResource',
      srcDbInstanceName: 'SrcDbInstanceName',
      storageSize: 'StorageSize',
      storageType: 'StorageType',
      tag: 'Tag',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vectorConfigurationStatus: 'VectorConfigurationStatus',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      clientToken: 'string',
      createSampleData: 'boolean',
      DBInstanceCategory: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceGroupCount: 'string',
      DBInstanceMode: 'string',
      enableSSL: 'boolean',
      encryptionKey: 'string',
      encryptionType: 'string',
      engine: 'string',
      engineVersion: 'string',
      idleTime: 'number',
      instanceNetworkType: 'string',
      instanceSpec: 'string',
      masterCU: 'number',
      masterNodeNum: 'string',
      ownerId: 'number',
      payType: 'string',
      period: 'string',
      privateIpAddress: 'string',
      prodType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityIPList: 'string',
      segDiskPerformanceLevel: 'string',
      segNodeNum: 'string',
      segStorageType: 'string',
      serverlessMode: 'string',
      serverlessResource: 'number',
      srcDbInstanceName: 'string',
      storageSize: 'number',
      storageType: 'string',
      tag: { 'type': 'array', 'itemType': CreateDBInstanceRequestTag },
      usedTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vectorConfigurationStatus: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponseBody extends $tea.Model {
  connectionString?: string;
  DBInstanceId?: string;
  orderId?: string;
  port?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
      port: 'Port',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceId: 'string',
      orderId: 'string',
      port: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDBInstanceResponseBody;
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
      body: CreateDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstancePlanRequest extends $tea.Model {
  DBInstanceId?: string;
  ownerId?: number;
  planConfig?: string;
  planDesc?: string;
  planEndDate?: string;
  planName?: string;
  planScheduleType?: string;
  planStartDate?: string;
  planType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      planConfig: 'PlanConfig',
      planDesc: 'PlanDesc',
      planEndDate: 'PlanEndDate',
      planName: 'PlanName',
      planScheduleType: 'PlanScheduleType',
      planStartDate: 'PlanStartDate',
      planType: 'PlanType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      planConfig: 'string',
      planDesc: 'string',
      planEndDate: 'string',
      planName: 'string',
      planScheduleType: 'string',
      planStartDate: 'string',
      planType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstancePlanResponseBody extends $tea.Model {
  DBInstanceId?: string;
  errorMessage?: string;
  planId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      errorMessage: 'ErrorMessage',
      planId: 'PlanId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      errorMessage: 'string',
      planId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstancePlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDBInstancePlanResponseBody;
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
      body: CreateDBInstancePlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocumentCollectionRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  embeddingModel?: string;
  externalStorage?: number;
  fullTextRetrievalFields?: string;
  hnswM?: number;
  managerAccount?: string;
  managerAccountPassword?: string;
  metadata?: string;
  metrics?: string;
  namespace?: string;
  ownerId?: number;
  parser?: string;
  pqEnable?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      embeddingModel: 'EmbeddingModel',
      externalStorage: 'ExternalStorage',
      fullTextRetrievalFields: 'FullTextRetrievalFields',
      hnswM: 'HnswM',
      managerAccount: 'ManagerAccount',
      managerAccountPassword: 'ManagerAccountPassword',
      metadata: 'Metadata',
      metrics: 'Metrics',
      namespace: 'Namespace',
      ownerId: 'OwnerId',
      parser: 'Parser',
      pqEnable: 'PqEnable',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      embeddingModel: 'string',
      externalStorage: 'number',
      fullTextRetrievalFields: 'string',
      hnswM: 'number',
      managerAccount: 'string',
      managerAccountPassword: 'string',
      metadata: 'string',
      metrics: 'string',
      namespace: 'string',
      ownerId: 'number',
      parser: 'string',
      pqEnable: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocumentCollectionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocumentCollectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDocumentCollectionResponseBody;
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
      body: CreateDocumentCollectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceRequest extends $tea.Model {
  DBInstanceId?: string;
  managerAccount?: string;
  managerAccountPassword?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      managerAccount: 'ManagerAccount',
      managerAccountPassword: 'ManagerAccountPassword',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      managerAccount: 'string',
      managerAccountPassword: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNamespaceResponseBody;
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
      body: CreateNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSampleDataRequest extends $tea.Model {
  DBInstanceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSampleDataResponseBody extends $tea.Model {
  DBInstanceId?: string;
  errorMessage?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      errorMessage: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSampleDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSampleDataResponseBody;
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
      body: CreateSampleDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleRequest extends $tea.Model {
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponseBody extends $tea.Model {
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

export class CreateServiceLinkedRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceLinkedRoleResponseBody;
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
      body: CreateServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVectorIndexRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  dimension?: number;
  externalStorage?: number;
  hnswM?: number;
  managerAccount?: string;
  managerAccountPassword?: string;
  metrics?: string;
  namespace?: string;
  ownerId?: number;
  pqEnable?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      dimension: 'Dimension',
      externalStorage: 'ExternalStorage',
      hnswM: 'HnswM',
      managerAccount: 'ManagerAccount',
      managerAccountPassword: 'ManagerAccountPassword',
      metrics: 'Metrics',
      namespace: 'Namespace',
      ownerId: 'OwnerId',
      pqEnable: 'PqEnable',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      dimension: 'number',
      externalStorage: 'number',
      hnswM: 'number',
      managerAccount: 'string',
      managerAccountPassword: 'string',
      metrics: 'string',
      namespace: 'string',
      ownerId: 'number',
      pqEnable: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVectorIndexResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVectorIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVectorIndexResponseBody;
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
      body: CreateVectorIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCollectionRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCollectionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCollectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCollectionResponseBody;
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
      body: DeleteCollectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCollectionDataRequest extends $tea.Model {
  collection?: string;
  collectionData?: string;
  collectionDataFilter?: string;
  DBInstanceId?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      collectionData: 'CollectionData',
      collectionDataFilter: 'CollectionDataFilter',
      DBInstanceId: 'DBInstanceId',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      collectionData: 'string',
      collectionDataFilter: 'string',
      DBInstanceId: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCollectionDataResponseBody extends $tea.Model {
  appliedRows?: number;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appliedRows: 'AppliedRows',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedRows: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCollectionDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCollectionDataResponseBody;
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
      body: DeleteCollectionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceRequest extends $tea.Model {
  clientToken?: string;
  DBInstanceId?: string;
  ownerId?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceResponseBody extends $tea.Model {
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

export class DeleteDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDBInstanceResponseBody;
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
      body: DeleteDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstancePlanRequest extends $tea.Model {
  DBInstanceId?: string;
  ownerId?: number;
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstancePlanResponseBody extends $tea.Model {
  DBInstanceId?: string;
  errorMessage?: string;
  planId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      errorMessage: 'ErrorMessage',
      planId: 'PlanId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      errorMessage: 'string',
      planId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstancePlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDBInstancePlanResponseBody;
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
      body: DeleteDBInstancePlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocumentRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  fileName?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      fileName: 'FileName',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      fileName: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocumentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDocumentResponseBody;
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
      body: DeleteDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocumentCollectionRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocumentCollectionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocumentCollectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDocumentCollectionResponseBody;
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
      body: DeleteDocumentCollectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceRequest extends $tea.Model {
  DBInstanceId?: string;
  managerAccount?: string;
  managerAccountPassword?: string;
  namespace?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      managerAccount: 'ManagerAccount',
      managerAccountPassword: 'ManagerAccountPassword',
      namespace: 'Namespace',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      managerAccount: 'string',
      managerAccountPassword: 'string',
      namespace: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNamespaceResponseBody;
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
      body: DeleteNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVectorIndexRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  managerAccount?: string;
  managerAccountPassword?: string;
  namespace?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      managerAccount: 'ManagerAccount',
      managerAccountPassword: 'ManagerAccountPassword',
      namespace: 'Namespace',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      managerAccount: 'string',
      managerAccountPassword: 'string',
      namespace: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVectorIndexResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVectorIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVectorIndexResponseBody;
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
      body: DeleteVectorIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsRequest extends $tea.Model {
  accountName?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBody extends $tea.Model {
  accounts?: DescribeAccountsResponseBodyAccounts;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: DescribeAccountsResponseBodyAccounts,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountsResponseBody;
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
      body: DescribeAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveSQLRecordsRequest extends $tea.Model {
  DBInstanceId?: string;
  database?: string;
  endTime?: string;
  keyword?: string;
  maxDuration?: string;
  minDuration?: string;
  order?: string;
  startTime?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      keyword: 'Keyword',
      maxDuration: 'MaxDuration',
      minDuration: 'MinDuration',
      order: 'Order',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      keyword: 'string',
      maxDuration: 'string',
      minDuration: 'string',
      order: 'string',
      startTime: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveSQLRecordsResponseBody extends $tea.Model {
  DBInstanceId?: string;
  queries?: DescribeActiveSQLRecordsResponseBodyQueries[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      queries: 'Queries',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      queries: { 'type': 'array', 'itemType': DescribeActiveSQLRecordsResponseBodyQueries },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveSQLRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeActiveSQLRecordsResponseBody;
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
      body: DescribeActiveSQLRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesRequest extends $tea.Model {
  chargeType?: string;
  region?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      region: 'Region',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      region: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseBody extends $tea.Model {
  regionId?: string;
  requestId?: string;
  resources?: DescribeAvailableResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': DescribeAvailableResourcesResponseBodyResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAvailableResourcesResponseBody;
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
      body: DescribeAvailableResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyRequest extends $tea.Model {
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBody extends $tea.Model {
  backupRetentionPeriod?: number;
  enableRecoveryPoint?: boolean;
  preferredBackupPeriod?: string;
  preferredBackupTime?: string;
  recoveryPointPeriod?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      enableRecoveryPoint: 'EnableRecoveryPoint',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      recoveryPointPeriod: 'RecoveryPointPeriod',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'number',
      enableRecoveryPoint: 'boolean',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      recoveryPointPeriod: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupPolicyResponseBody;
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
      body: DescribeBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCollectionRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCollectionResponseBody extends $tea.Model {
  DBInstanceId?: string;
  dimension?: number;
  fullTextRetrievalFields?: string;
  message?: string;
  metadata?: { [key: string]: string };
  metrics?: string;
  namespace?: string;
  parser?: string;
  regionId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dimension: 'Dimension',
      fullTextRetrievalFields: 'FullTextRetrievalFields',
      message: 'Message',
      metadata: 'Metadata',
      metrics: 'Metrics',
      namespace: 'Namespace',
      parser: 'Parser',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dimension: 'number',
      fullTextRetrievalFields: 'string',
      message: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      metrics: 'string',
      namespace: 'string',
      parser: 'string',
      regionId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCollectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCollectionResponseBody;
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
      body: DescribeCollectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNodeRequest extends $tea.Model {
  DBInstanceId?: string;
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNodeResponseBody extends $tea.Model {
  DBClusterId?: string;
  nodes?: DescribeDBClusterNodeResponseBodyNodes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      nodes: 'Nodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeDBClusterNodeResponseBodyNodes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterNodeResponseBody;
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
      body: DescribeDBClusterNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceRequest extends $tea.Model {
  DBInstanceId?: string;
  endTime?: string;
  key?: string;
  nodeType?: string;
  nodes?: string;
  resourceGroupName?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      key: 'Key',
      nodeType: 'NodeType',
      nodes: 'Nodes',
      resourceGroupName: 'ResourceGroupName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      key: 'string',
      nodeType: 'string',
      nodes: 'string',
      resourceGroupName: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBody extends $tea.Model {
  DBClusterId?: string;
  endTime?: string;
  performanceKeys?: DescribeDBClusterPerformanceResponseBodyPerformanceKeys[];
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      performanceKeys: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformanceKeys },
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterPerformanceResponseBody;
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
      body: DescribeDBClusterPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeRequest extends $tea.Model {
  DBInstanceId?: string;
  ownerId?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBody extends $tea.Model {
  items?: DescribeDBInstanceAttributeResponseBodyItems;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBInstanceAttributeResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceAttributeResponseBody;
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
      body: DescribeDBInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDataBloatRequest extends $tea.Model {
  DBInstanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDataBloatResponseBody extends $tea.Model {
  items?: DescribeDBInstanceDataBloatResponseBodyItems[];
  pageNumber?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBInstanceDataBloatResponseBodyItems },
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDataBloatResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceDataBloatResponseBody;
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
      body: DescribeDBInstanceDataBloatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDataSkewRequest extends $tea.Model {
  DBInstanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDataSkewResponseBody extends $tea.Model {
  items?: DescribeDBInstanceDataSkewResponseBodyItems[];
  pageNumber?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBInstanceDataSkewResponseBodyItems },
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDataSkewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceDataSkewResponseBody;
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
      body: DescribeDBInstanceDataSkewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDiagnosisSummaryRequest extends $tea.Model {
  DBInstanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  rolePreferd?: string;
  startStatus?: string;
  syncMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rolePreferd: 'RolePreferd',
      startStatus: 'StartStatus',
      syncMode: 'SyncMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      rolePreferd: 'string',
      startStatus: 'string',
      syncMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDiagnosisSummaryResponseBody extends $tea.Model {
  items?: DescribeDBInstanceDiagnosisSummaryResponseBodyItems[];
  masterStatusInfo?: DescribeDBInstanceDiagnosisSummaryResponseBodyMasterStatusInfo;
  pageNumber?: string;
  requestId?: string;
  segmentStatusInfo?: DescribeDBInstanceDiagnosisSummaryResponseBodySegmentStatusInfo;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      masterStatusInfo: 'MasterStatusInfo',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      segmentStatusInfo: 'SegmentStatusInfo',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBInstanceDiagnosisSummaryResponseBodyItems },
      masterStatusInfo: DescribeDBInstanceDiagnosisSummaryResponseBodyMasterStatusInfo,
      pageNumber: 'string',
      requestId: 'string',
      segmentStatusInfo: DescribeDBInstanceDiagnosisSummaryResponseBodySegmentStatusInfo,
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDiagnosisSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceDiagnosisSummaryResponseBody;
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
      body: DescribeDBInstanceDiagnosisSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceErrorLogRequest extends $tea.Model {
  DBInstanceId?: string;
  database?: string;
  endTime?: string;
  host?: string;
  keywords?: string;
  logLevel?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      host: 'Host',
      keywords: 'Keywords',
      logLevel: 'LogLevel',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      host: 'string',
      keywords: 'string',
      logLevel: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceErrorLogResponseBody extends $tea.Model {
  items?: DescribeDBInstanceErrorLogResponseBodyItems[];
  pageNumber?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBInstanceErrorLogResponseBodyItems },
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceErrorLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceErrorLogResponseBody;
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
      body: DescribeDBInstanceErrorLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIPArrayListRequest extends $tea.Model {
  DBInstanceIPArrayName?: string;
  DBInstanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArrayName: 'DBInstanceIPArrayName',
      DBInstanceId: 'DBInstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArrayName: 'string',
      DBInstanceId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIPArrayListResponseBody extends $tea.Model {
  items?: DescribeDBInstanceIPArrayListResponseBodyItems;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBInstanceIPArrayListResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIPArrayListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceIPArrayListResponseBody;
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
      body: DescribeDBInstanceIPArrayListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIndexUsageRequest extends $tea.Model {
  DBInstanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIndexUsageResponseBody extends $tea.Model {
  items?: DescribeDBInstanceIndexUsageResponseBodyItems[];
  pageNumber?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBInstanceIndexUsageResponseBodyItems },
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIndexUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceIndexUsageResponseBody;
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
      body: DescribeDBInstanceIndexUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoRequest extends $tea.Model {
  connectionString?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBody extends $tea.Model {
  DBInstanceNetInfos?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos;
  instanceNetworkType?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceNetInfos: 'DBInstanceNetInfos',
      instanceNetworkType: 'InstanceNetworkType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceNetInfos: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos,
      instanceNetworkType: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceNetInfoResponseBody;
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
      body: DescribeDBInstanceNetInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceRequest extends $tea.Model {
  DBInstanceId?: string;
  endTime?: string;
  key?: string;
  resourceGroupId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      key: 'Key',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      key: 'string',
      resourceGroupId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponseBody extends $tea.Model {
  DBInstanceId?: string;
  endTime?: string;
  engine?: string;
  performanceKeys?: string[];
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      engine: 'Engine',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      engine: 'string',
      performanceKeys: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstancePerformanceResponseBody;
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
      body: DescribeDBInstancePerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePlansRequest extends $tea.Model {
  DBInstanceId?: string;
  ownerId?: number;
  planCreateDate?: string;
  planDesc?: string;
  planId?: string;
  planScheduleType?: string;
  planType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      planCreateDate: 'PlanCreateDate',
      planDesc: 'PlanDesc',
      planId: 'PlanId',
      planScheduleType: 'PlanScheduleType',
      planType: 'PlanType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      planCreateDate: 'string',
      planDesc: 'string',
      planId: 'string',
      planScheduleType: 'string',
      planType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePlansResponseBody extends $tea.Model {
  errorMessage?: string;
  items?: DescribeDBInstancePlansResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  status?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      status: 'Status',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      items: DescribeDBInstancePlansResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      status: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePlansResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstancePlansResponseBody;
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
      body: DescribeDBInstancePlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLRequest extends $tea.Model {
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLResponseBody extends $tea.Model {
  certCommonName?: string;
  DBInstanceId?: string;
  DBInstanceName?: string;
  requestId?: string;
  SSLEnabled?: boolean;
  SSLExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      certCommonName: 'CertCommonName',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      SSLEnabled: 'SSLEnabled',
      SSLExpiredTime: 'SSLExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certCommonName: 'string',
      DBInstanceId: 'string',
      DBInstanceName: 'string',
      requestId: 'string',
      SSLEnabled: 'boolean',
      SSLExpiredTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceSSLResponseBody;
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
      body: DescribeDBInstanceSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSupportMaxPerformanceRequest extends $tea.Model {
  DBInstanceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSupportMaxPerformanceResponseBody extends $tea.Model {
  DBInstanceId?: string;
  performances?: DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformances;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      performances: 'Performances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      performances: DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformances,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSupportMaxPerformanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceSupportMaxPerformanceResponseBody;
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
      body: DescribeDBInstanceSupportMaxPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesRequest extends $tea.Model {
  DBInstanceCategories?: string[];
  DBInstanceDescription?: string;
  DBInstanceIds?: string;
  DBInstanceModes?: string[];
  DBInstanceStatuses?: string[];
  instanceDeployTypes?: string[];
  instanceNetworkType?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  tag?: DescribeDBInstancesRequestTag[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceCategories: 'DBInstanceCategories',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceIds: 'DBInstanceIds',
      DBInstanceModes: 'DBInstanceModes',
      DBInstanceStatuses: 'DBInstanceStatuses',
      instanceDeployTypes: 'InstanceDeployTypes',
      instanceNetworkType: 'InstanceNetworkType',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceCategories: { 'type': 'array', 'itemType': 'string' },
      DBInstanceDescription: 'string',
      DBInstanceIds: 'string',
      DBInstanceModes: { 'type': 'array', 'itemType': 'string' },
      DBInstanceStatuses: { 'type': 'array', 'itemType': 'string' },
      instanceDeployTypes: { 'type': 'array', 'itemType': 'string' },
      instanceNetworkType: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesRequestTag },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesShrinkRequest extends $tea.Model {
  DBInstanceCategoriesShrink?: string;
  DBInstanceDescription?: string;
  DBInstanceIds?: string;
  DBInstanceModesShrink?: string;
  DBInstanceStatusesShrink?: string;
  instanceDeployTypesShrink?: string;
  instanceNetworkType?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  tag?: DescribeDBInstancesShrinkRequestTag[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceCategoriesShrink: 'DBInstanceCategories',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceIds: 'DBInstanceIds',
      DBInstanceModesShrink: 'DBInstanceModes',
      DBInstanceStatusesShrink: 'DBInstanceStatuses',
      instanceDeployTypesShrink: 'InstanceDeployTypes',
      instanceNetworkType: 'InstanceNetworkType',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceCategoriesShrink: 'string',
      DBInstanceDescription: 'string',
      DBInstanceIds: 'string',
      DBInstanceModesShrink: 'string',
      DBInstanceStatusesShrink: 'string',
      instanceDeployTypesShrink: 'string',
      instanceNetworkType: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesShrinkRequestTag },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBody extends $tea.Model {
  items?: DescribeDBInstancesResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBInstancesResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstancesResponseBody;
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
      body: DescribeDBInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBVersionInfosRequest extends $tea.Model {
  DBInstanceMode?: string;
  DBVersion?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceMode: 'DBInstanceMode',
      DBVersion: 'DBVersion',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceMode: 'string',
      DBVersion: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBVersionInfosResponseBody extends $tea.Model {
  requestId?: string;
  versionDetails?: DescribeDBVersionInfosResponseBodyVersionDetails;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionDetails: 'VersionDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      versionDetails: DescribeDBVersionInfosResponseBodyVersionDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBVersionInfosResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBVersionInfosResponseBody;
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
      body: DescribeDBVersionInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataBackupsRequest extends $tea.Model {
  backupId?: string;
  backupMode?: string;
  backupStatus?: string;
  DBInstanceId?: string;
  dataType?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupMode: 'BackupMode',
      backupStatus: 'BackupStatus',
      DBInstanceId: 'DBInstanceId',
      dataType: 'DataType',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupMode: 'string',
      backupStatus: 'string',
      DBInstanceId: 'string',
      dataType: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataBackupsResponseBody extends $tea.Model {
  items?: DescribeDataBackupsResponseBodyItems[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalBackupSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalBackupSize: 'TotalBackupSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDataBackupsResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalBackupSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataBackupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataBackupsResponseBody;
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
      body: DescribeDataBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataReDistributeInfoRequest extends $tea.Model {
  DBInstanceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataReDistributeInfoResponseBody extends $tea.Model {
  dataReDistributeInfo?: DescribeDataReDistributeInfoResponseBodyDataReDistributeInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataReDistributeInfo: 'DataReDistributeInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataReDistributeInfo: DescribeDataReDistributeInfoResponseBodyDataReDistributeInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataReDistributeInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataReDistributeInfoResponseBody;
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
      body: DescribeDataReDistributeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataShareInstancesRequest extends $tea.Model {
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  searchValue?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      searchValue: 'SearchValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      searchValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataShareInstancesResponseBody extends $tea.Model {
  items?: DescribeDataShareInstancesResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDataShareInstancesResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataShareInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataShareInstancesResponseBody;
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
      body: DescribeDataShareInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSharePerformanceRequest extends $tea.Model {
  endTime?: string;
  key?: string;
  regionId?: string;
  resourceGroupId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      key: 'Key',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      key: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSharePerformanceResponseBody extends $tea.Model {
  DBClusterId?: string;
  endTime?: string;
  performanceKeys?: DescribeDataSharePerformanceResponseBodyPerformanceKeys[];
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      performanceKeys: { 'type': 'array', 'itemType': DescribeDataSharePerformanceResponseBodyPerformanceKeys },
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSharePerformanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataSharePerformanceResponseBody;
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
      body: DescribeDataSharePerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisDimensionsRequest extends $tea.Model {
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisDimensionsResponseBody extends $tea.Model {
  databases?: string[];
  requestId?: string;
  userNames?: string[];
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      requestId: 'RequestId',
      userNames: 'UserNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      userNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisDimensionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiagnosisDimensionsResponseBody;
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
      body: DescribeDiagnosisDimensionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisMonitorPerformanceRequest extends $tea.Model {
  DBInstanceId?: string;
  database?: string;
  endTime?: string;
  queryCondition?: string;
  startTime?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      queryCondition: 'QueryCondition',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      queryCondition: 'string',
      startTime: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisMonitorPerformanceResponseBody extends $tea.Model {
  performances?: DescribeDiagnosisMonitorPerformanceResponseBodyPerformances[];
  performancesThreshold?: number;
  performancesTruncated?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      performances: 'Performances',
      performancesThreshold: 'PerformancesThreshold',
      performancesTruncated: 'PerformancesTruncated',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performances: { 'type': 'array', 'itemType': DescribeDiagnosisMonitorPerformanceResponseBodyPerformances },
      performancesThreshold: 'number',
      performancesTruncated: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisMonitorPerformanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiagnosisMonitorPerformanceResponseBody;
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
      body: DescribeDiagnosisMonitorPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsRequest extends $tea.Model {
  DBInstanceId?: string;
  database?: string;
  endTime?: string;
  keyword?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  queryCondition?: string;
  startTime?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      keyword: 'Keyword',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryCondition: 'QueryCondition',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      keyword: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryCondition: 'string',
      startTime: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsResponseBody extends $tea.Model {
  items?: DescribeDiagnosisRecordsResponseBodyItems[];
  pageNumber?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDiagnosisRecordsResponseBodyItems },
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiagnosisRecordsResponseBody;
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
      body: DescribeDiagnosisRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSQLInfoRequest extends $tea.Model {
  DBInstanceId?: string;
  database?: string;
  queryID?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      queryID: 'QueryID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      queryID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSQLInfoResponseBody extends $tea.Model {
  database?: string;
  duration?: number;
  maxOutputRows?: string;
  queryID?: string;
  queryPlan?: string;
  requestId?: string;
  SQLStmt?: string;
  sessionID?: string;
  sortedMetrics?: string;
  startTime?: number;
  status?: string;
  textPlan?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      duration: 'Duration',
      maxOutputRows: 'MaxOutputRows',
      queryID: 'QueryID',
      queryPlan: 'QueryPlan',
      requestId: 'RequestId',
      SQLStmt: 'SQLStmt',
      sessionID: 'SessionID',
      sortedMetrics: 'SortedMetrics',
      startTime: 'StartTime',
      status: 'Status',
      textPlan: 'TextPlan',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      duration: 'number',
      maxOutputRows: 'string',
      queryID: 'string',
      queryPlan: 'string',
      requestId: 'string',
      SQLStmt: 'string',
      sessionID: 'string',
      sortedMetrics: 'string',
      startTime: 'number',
      status: 'string',
      textPlan: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSQLInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiagnosisSQLInfoResponseBody;
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
      body: DescribeDiagnosisSQLInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocumentRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  fileName?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      fileName: 'FileName',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      fileName: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocumentResponseBody extends $tea.Model {
  docsCount?: number;
  documentLoader?: string;
  fileExt?: string;
  fileMd5?: string;
  fileMtime?: string;
  fileName?: string;
  fileSize?: number;
  fileVersion?: number;
  message?: string;
  requestId?: string;
  source?: string;
  status?: string;
  textSplitter?: string;
  static names(): { [key: string]: string } {
    return {
      docsCount: 'DocsCount',
      documentLoader: 'DocumentLoader',
      fileExt: 'FileExt',
      fileMd5: 'FileMd5',
      fileMtime: 'FileMtime',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileVersion: 'FileVersion',
      message: 'Message',
      requestId: 'RequestId',
      source: 'Source',
      status: 'Status',
      textSplitter: 'TextSplitter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docsCount: 'number',
      documentLoader: 'string',
      fileExt: 'string',
      fileMd5: 'string',
      fileMtime: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileVersion: 'number',
      message: 'string',
      requestId: 'string',
      source: 'string',
      status: 'string',
      textSplitter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDocumentResponseBody;
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
      body: DescribeDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadRecordsRequest extends $tea.Model {
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadRecordsResponseBody extends $tea.Model {
  records?: DescribeDownloadRecordsResponseBodyRecords[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': DescribeDownloadRecordsResponseBodyRecords },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDownloadRecordsResponseBody;
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
      body: DescribeDownloadRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadSQLLogsRequest extends $tea.Model {
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadSQLLogsResponseBody extends $tea.Model {
  records?: DescribeDownloadSQLLogsResponseBodyRecords[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': DescribeDownloadSQLLogsResponseBodyRecords },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadSQLLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDownloadSQLLogsResponseBody;
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
      body: DescribeDownloadSQLLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusRequest extends $tea.Model {
  DBInstanceId?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBody extends $tea.Model {
  DBClusterId?: string;
  requestId?: string;
  status?: DescribeHealthStatusResponseBodyStatus;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
      status: DescribeHealthStatusResponseBodyStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHealthStatusResponseBody;
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
      body: DescribeHealthStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIMVInfosRequest extends $tea.Model {
  DBInstanceId?: string;
  database?: string;
  MVName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      MVName: 'MVName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      MVName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIMVInfosResponseBody extends $tea.Model {
  DBInstanceId?: string;
  imvInfos?: DescribeIMVInfosResponseBodyImvInfos[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      imvInfos: 'ImvInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      imvInfos: { 'type': 'array', 'itemType': DescribeIMVInfosResponseBodyImvInfos },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIMVInfosResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeIMVInfosResponseBody;
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
      body: DescribeIMVInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupsRequest extends $tea.Model {
  DBInstanceId?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupsResponseBody extends $tea.Model {
  items?: DescribeLogBackupsResponseBodyItems[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  totalLogSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalLogSize: 'TotalLogSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeLogBackupsResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalLogSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLogBackupsResponseBody;
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
      body: DescribeLogBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyParameterLogRequest extends $tea.Model {
  DBInstanceId?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyParameterLogResponseBody extends $tea.Model {
  changelogs?: DescribeModifyParameterLogResponseBodyChangelogs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changelogs: 'Changelogs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changelogs: { 'type': 'array', 'itemType': DescribeModifyParameterLogResponseBodyChangelogs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyParameterLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeModifyParameterLogResponseBody;
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
      body: DescribeModifyParameterLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceRequest extends $tea.Model {
  DBInstanceId?: string;
  managerAccount?: string;
  managerAccountPassword?: string;
  namespace?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      managerAccount: 'ManagerAccount',
      managerAccountPassword: 'ManagerAccountPassword',
      namespace: 'Namespace',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      managerAccount: 'string',
      managerAccountPassword: 'string',
      namespace: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResponseBody extends $tea.Model {
  DBInstanceId?: string;
  message?: string;
  namespace?: string;
  namespaceInfo?: { [key: string]: string };
  regionId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      message: 'Message',
      namespace: 'Namespace',
      namespaceInfo: 'NamespaceInfo',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      message: 'string',
      namespace: 'string',
      namespaceInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNamespaceResponseBody;
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
      body: DescribeNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersRequest extends $tea.Model {
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBody extends $tea.Model {
  parameters?: DescribeParametersResponseBodyParameters[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': DescribeParametersResponseBodyParameters },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeParametersResponseBody;
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
      body: DescribeParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVSwitchsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVSwitchsResponseBody extends $tea.Model {
  requestId?: string;
  vSwitches?: DescribeRdsVSwitchsResponseBodyVSwitches;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vSwitches: DescribeRdsVSwitchsResponseBodyVSwitches,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVSwitchsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRdsVSwitchsResponseBody;
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
      body: DescribeRdsVSwitchsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsResponseBody extends $tea.Model {
  requestId?: string;
  vpcs?: DescribeRdsVpcsResponseBodyVpcs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcs: 'Vpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcs: DescribeRdsVpcsResponseBodyVpcs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRdsVpcsResponseBody;
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
      body: DescribeRdsVpcsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  region?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
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

export class DescribeSQLLogCountRequest extends $tea.Model {
  DBInstanceId?: string;
  database?: string;
  endTime?: string;
  executeCost?: string;
  executeState?: string;
  maxExecuteCost?: string;
  minExecuteCost?: string;
  operationClass?: string;
  operationType?: string;
  queryKeywords?: string;
  sourceIP?: string;
  startTime?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      executeCost: 'ExecuteCost',
      executeState: 'ExecuteState',
      maxExecuteCost: 'MaxExecuteCost',
      minExecuteCost: 'MinExecuteCost',
      operationClass: 'OperationClass',
      operationType: 'OperationType',
      queryKeywords: 'QueryKeywords',
      sourceIP: 'SourceIP',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      executeCost: 'string',
      executeState: 'string',
      maxExecuteCost: 'string',
      minExecuteCost: 'string',
      operationClass: 'string',
      operationType: 'string',
      queryKeywords: 'string',
      sourceIP: 'string',
      startTime: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogCountResponseBody extends $tea.Model {
  DBClusterId?: string;
  endTime?: string;
  items?: DescribeSQLLogCountResponseBodyItems[];
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      items: 'Items',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      items: { 'type': 'array', 'itemType': DescribeSQLLogCountResponseBodyItems },
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSQLLogCountResponseBody;
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
      body: DescribeSQLLogCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsRequest extends $tea.Model {
  DBInstanceId?: string;
  database?: string;
  endTime?: string;
  executeCost?: string;
  executeState?: string;
  maxExecuteCost?: string;
  minExecuteCost?: string;
  operationClass?: string;
  operationType?: string;
  pageNumber?: number;
  pageSize?: number;
  queryKeywords?: string;
  sourceIP?: string;
  startTime?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      executeCost: 'ExecuteCost',
      executeState: 'ExecuteState',
      maxExecuteCost: 'MaxExecuteCost',
      minExecuteCost: 'MinExecuteCost',
      operationClass: 'OperationClass',
      operationType: 'OperationType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeywords: 'QueryKeywords',
      sourceIP: 'SourceIP',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      executeCost: 'string',
      executeState: 'string',
      maxExecuteCost: 'string',
      minExecuteCost: 'string',
      operationClass: 'string',
      operationType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeywords: 'string',
      sourceIP: 'string',
      startTime: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsResponseBody extends $tea.Model {
  items?: DescribeSQLLogsResponseBodyItems[];
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeSQLLogsResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSQLLogsResponseBody;
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
      body: DescribeSQLLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsV2Request extends $tea.Model {
  DBInstanceId?: string;
  database?: string;
  endTime?: string;
  executeCost?: string;
  executeState?: string;
  maxExecuteCost?: string;
  minExecuteCost?: string;
  operationClass?: string;
  operationType?: string;
  pageNumber?: string;
  pageSize?: string;
  queryKeywords?: string;
  regionId?: string;
  resourceGroupId?: string;
  sourceIP?: string;
  startTime?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      executeCost: 'ExecuteCost',
      executeState: 'ExecuteState',
      maxExecuteCost: 'MaxExecuteCost',
      minExecuteCost: 'MinExecuteCost',
      operationClass: 'OperationClass',
      operationType: 'OperationType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeywords: 'QueryKeywords',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceIP: 'SourceIP',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      executeCost: 'string',
      executeState: 'string',
      maxExecuteCost: 'string',
      minExecuteCost: 'string',
      operationClass: 'string',
      operationType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      queryKeywords: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceIP: 'string',
      startTime: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsV2ResponseBody extends $tea.Model {
  items?: DescribeSQLLogsV2ResponseBodyItems[];
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeSQLLogsV2ResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsV2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSQLLogsV2ResponseBody;
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
      body: DescribeSQLLogsV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSampleDataRequest extends $tea.Model {
  DBInstanceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSampleDataResponseBody extends $tea.Model {
  DBInstanceId?: string;
  errorMessage?: string;
  hasSampleData?: boolean;
  requestId?: string;
  sampleDataStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      errorMessage: 'ErrorMessage',
      hasSampleData: 'HasSampleData',
      requestId: 'RequestId',
      sampleDataStatus: 'SampleDataStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      errorMessage: 'string',
      hasSampleData: 'boolean',
      requestId: 'string',
      sampleDataStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSampleDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSampleDataResponseBody;
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
      body: DescribeSampleDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportFeaturesRequest extends $tea.Model {
  DBInstanceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportFeaturesResponseBody extends $tea.Model {
  DBInstanceId?: string;
  requestId?: string;
  supportFeatureList?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      supportFeatureList: 'SupportFeatureList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      supportFeatureList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportFeaturesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSupportFeaturesResponseBody;
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
      body: DescribeSupportFeaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBody extends $tea.Model {
  requestId?: string;
  tags?: DescribeTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeTagsResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTagsResponseBody;
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
      body: DescribeTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserEncryptionKeyListRequest extends $tea.Model {
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserEncryptionKeyListResponseBody extends $tea.Model {
  kmsKeys?: DescribeUserEncryptionKeyListResponseBodyKmsKeys[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsKeys: 'KmsKeys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsKeys: { 'type': 'array', 'itemType': DescribeUserEncryptionKeyListResponseBodyKmsKeys },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserEncryptionKeyListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserEncryptionKeyListResponseBody;
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
      body: DescribeUserEncryptionKeyListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWaitingSQLInfoRequest extends $tea.Model {
  DBInstanceId?: string;
  database?: string;
  PID?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      PID: 'PID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      PID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWaitingSQLInfoResponseBody extends $tea.Model {
  database?: string;
  items?: DescribeWaitingSQLInfoResponseBodyItems[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      items: { 'type': 'array', 'itemType': DescribeWaitingSQLInfoResponseBodyItems },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWaitingSQLInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWaitingSQLInfoResponseBody;
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
      body: DescribeWaitingSQLInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWaitingSQLRecordsRequest extends $tea.Model {
  DBInstanceId?: string;
  database?: string;
  endTime?: string;
  keyword?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  queryCondition?: string;
  startTime?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      keyword: 'Keyword',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryCondition: 'QueryCondition',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      keyword: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryCondition: 'string',
      startTime: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWaitingSQLRecordsResponseBody extends $tea.Model {
  items?: DescribeWaitingSQLRecordsResponseBodyItems[];
  pageNumber?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeWaitingSQLRecordsResponseBodyItems },
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWaitingSQLRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWaitingSQLRecordsResponseBody;
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
      body: DescribeWaitingSQLRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDiagnosisRecordsRequest extends $tea.Model {
  DBInstanceId?: string;
  database?: string;
  endTime?: string;
  lang?: string;
  queryCondition?: string;
  resourceGroupId?: string;
  startTime?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      lang: 'Lang',
      queryCondition: 'QueryCondition',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      lang: 'string',
      queryCondition: 'string',
      resourceGroupId: 'string',
      startTime: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDiagnosisRecordsResponseBody extends $tea.Model {
  DBInstanceId?: string;
  downloadId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      downloadId: 'DownloadId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      downloadId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDiagnosisRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DownloadDiagnosisRecordsResponseBody;
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
      body: DownloadDiagnosisRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadSQLLogsRecordsRequest extends $tea.Model {
  DBInstanceId?: string;
  database?: string;
  endTime?: string;
  executeCost?: string;
  executeState?: string;
  lang?: string;
  maxExecuteCost?: string;
  minExecuteCost?: string;
  operationClass?: string;
  operationType?: string;
  pageNumber?: number;
  pageSize?: number;
  queryKeywords?: string;
  sourceIP?: string;
  startTime?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      executeCost: 'ExecuteCost',
      executeState: 'ExecuteState',
      lang: 'Lang',
      maxExecuteCost: 'MaxExecuteCost',
      minExecuteCost: 'MinExecuteCost',
      operationClass: 'OperationClass',
      operationType: 'OperationType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeywords: 'QueryKeywords',
      sourceIP: 'SourceIP',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      executeCost: 'string',
      executeState: 'string',
      lang: 'string',
      maxExecuteCost: 'string',
      minExecuteCost: 'string',
      operationClass: 'string',
      operationType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeywords: 'string',
      sourceIP: 'string',
      startTime: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadSQLLogsRecordsResponseBody extends $tea.Model {
  downloadId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadId: 'DownloadId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadSQLLogsRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DownloadSQLLogsRecordsResponseBody;
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
      body: DownloadSQLLogsRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadDocumentJobRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  jobId?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      jobId: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadDocumentJobResponseBody extends $tea.Model {
  chunkResult?: GetUploadDocumentJobResponseBodyChunkResult;
  job?: GetUploadDocumentJobResponseBodyJob;
  message?: string;
  requestId?: string;
  status?: string;
  usage?: GetUploadDocumentJobResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      chunkResult: 'ChunkResult',
      job: 'Job',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkResult: GetUploadDocumentJobResponseBodyChunkResult,
      job: GetUploadDocumentJobResponseBodyJob,
      message: 'string',
      requestId: 'string',
      status: 'string',
      usage: GetUploadDocumentJobResponseBodyUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadDocumentJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUploadDocumentJobResponseBody;
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
      body: GetUploadDocumentJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUpsertCollectionDataJobRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  jobId?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      jobId: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUpsertCollectionDataJobResponseBody extends $tea.Model {
  job?: GetUpsertCollectionDataJobResponseBodyJob;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: GetUpsertCollectionDataJobResponseBodyJob,
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUpsertCollectionDataJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUpsertCollectionDataJobResponseBody;
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
      body: GetUpsertCollectionDataJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantCollectionRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  grantToNamespace?: string;
  grantType?: string;
  managerAccount?: string;
  managerAccountPassword?: string;
  namespace?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      grantToNamespace: 'GrantToNamespace',
      grantType: 'GrantType',
      managerAccount: 'ManagerAccount',
      managerAccountPassword: 'ManagerAccountPassword',
      namespace: 'Namespace',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      grantToNamespace: 'string',
      grantType: 'string',
      managerAccount: 'string',
      managerAccountPassword: 'string',
      namespace: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantCollectionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantCollectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GrantCollectionResponseBody;
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
      body: GrantCollectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleActiveSQLRecordRequest extends $tea.Model {
  DBInstanceId?: string;
  operateType?: number;
  pids?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      operateType: 'OperateType',
      pids: 'Pids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      operateType: 'number',
      pids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleActiveSQLRecordResponseBody extends $tea.Model {
  DBInstanceId?: string;
  requestId?: string;
  results?: HandleActiveSQLRecordResponseBodyResults[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      results: 'Results',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': HandleActiveSQLRecordResponseBodyResults },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleActiveSQLRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HandleActiveSQLRecordResponseBody;
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
      body: HandleActiveSQLRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitVectorDatabaseRequest extends $tea.Model {
  DBInstanceId?: string;
  managerAccount?: string;
  managerAccountPassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      managerAccount: 'ManagerAccount',
      managerAccountPassword: 'ManagerAccountPassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      managerAccount: 'string',
      managerAccountPassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitVectorDatabaseResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitVectorDatabaseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitVectorDatabaseResponseBody;
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
      body: InitVectorDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionsRequest extends $tea.Model {
  DBInstanceId?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionsResponseBody extends $tea.Model {
  collections?: ListCollectionsResponseBodyCollections;
  count?: number;
  DBInstanceId?: string;
  message?: string;
  namespace?: string;
  regionId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      collections: 'Collections',
      count: 'Count',
      DBInstanceId: 'DBInstanceId',
      message: 'Message',
      namespace: 'Namespace',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collections: ListCollectionsResponseBodyCollections,
      count: 'number',
      DBInstanceId: 'string',
      message: 'string',
      namespace: 'string',
      regionId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCollectionsResponseBody;
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
      body: ListCollectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentCollectionsRequest extends $tea.Model {
  DBInstanceId?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentCollectionsResponseBody extends $tea.Model {
  count?: number;
  items?: ListDocumentCollectionsResponseBodyItems;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      items: 'Items',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      items: ListDocumentCollectionsResponseBodyItems,
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentCollectionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDocumentCollectionsResponseBody;
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
      body: ListDocumentCollectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentsRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentsResponseBody extends $tea.Model {
  items?: ListDocumentsResponseBodyItems;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: ListDocumentsResponseBodyItems,
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDocumentsResponseBody;
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
      body: ListDocumentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesRequest extends $tea.Model {
  DBInstanceId?: string;
  managerAccount?: string;
  managerAccountPassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      managerAccount: 'ManagerAccount',
      managerAccountPassword: 'ManagerAccountPassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      managerAccount: 'string',
      managerAccountPassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBody extends $tea.Model {
  count?: number;
  DBInstanceId?: string;
  message?: string;
  namespaces?: ListNamespacesResponseBodyNamespaces;
  regionId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      DBInstanceId: 'DBInstanceId',
      message: 'Message',
      namespaces: 'Namespaces',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      DBInstanceId: 'string',
      message: 'string',
      namespaces: ListNamespacesResponseBodyNamespaces,
      regionId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNamespacesResponseBody;
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
      body: ListNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
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
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
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

export class ModifyAccountDescriptionRequest extends $tea.Model {
  accountDescription?: string;
  accountName?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionResponseBody extends $tea.Model {
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

export class ModifyAccountDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccountDescriptionResponseBody;
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
      body: ModifyAccountDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyRequest extends $tea.Model {
  backupRetentionPeriod?: number;
  DBInstanceId?: string;
  enableRecoveryPoint?: boolean;
  preferredBackupPeriod?: string;
  preferredBackupTime?: string;
  recoveryPointPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      DBInstanceId: 'DBInstanceId',
      enableRecoveryPoint: 'EnableRecoveryPoint',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      recoveryPointPeriod: 'RecoveryPointPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'number',
      DBInstanceId: 'string',
      enableRecoveryPoint: 'boolean',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      recoveryPointPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyResponseBody extends $tea.Model {
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

export class ModifyBackupPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyBackupPolicyResponseBody;
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
      body: ModifyBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConfigRequest extends $tea.Model {
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  idleTime?: number;
  resourceGroupId?: string;
  serverlessResource?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      idleTime: 'IdleTime',
      resourceGroupId: 'ResourceGroupId',
      serverlessResource: 'ServerlessResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      idleTime: 'number',
      resourceGroupId: 'string',
      serverlessResource: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConfigResponseBody extends $tea.Model {
  dbInstanceId?: string;
  errorMessage?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      errorMessage: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceConfigResponseBody;
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
      body: ModifyDBInstanceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionStringRequest extends $tea.Model {
  connectionStringPrefix?: string;
  currentConnectionString?: string;
  DBInstanceId?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      currentConnectionString: 'CurrentConnectionString',
      DBInstanceId: 'DBInstanceId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      currentConnectionString: 'string',
      DBInstanceId: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionStringResponseBody extends $tea.Model {
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

export class ModifyDBInstanceConnectionStringResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceConnectionStringResponseBody;
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
      body: ModifyDBInstanceConnectionStringResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceDescriptionRequest extends $tea.Model {
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceDescriptionResponseBody extends $tea.Model {
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

export class ModifyDBInstanceDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceDescriptionResponseBody;
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
      body: ModifyDBInstanceDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMaintainTimeRequest extends $tea.Model {
  DBInstanceId?: string;
  endTime?: string;
  resourceGroupId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      resourceGroupId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMaintainTimeResponseBody extends $tea.Model {
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

export class ModifyDBInstanceMaintainTimeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceMaintainTimeResponseBody;
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
      body: ModifyDBInstanceMaintainTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceResourceGroupRequest extends $tea.Model {
  DBInstanceId?: string;
  newResourceGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      newResourceGroupId: 'NewResourceGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      newResourceGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceResourceGroupResponseBody extends $tea.Model {
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

export class ModifyDBInstanceResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceResourceGroupResponseBody;
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
      body: ModifyDBInstanceResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSSLRequest extends $tea.Model {
  connectionString?: string;
  DBInstanceId?: string;
  SSLEnabled?: number;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceId: 'DBInstanceId',
      SSLEnabled: 'SSLEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceId: 'string',
      SSLEnabled: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSSLResponseBody extends $tea.Model {
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

export class ModifyDBInstanceSSLResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceSSLResponseBody;
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
      body: ModifyDBInstanceSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMasterSpecRequest extends $tea.Model {
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  masterCU?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      masterCU: 'MasterCU',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      masterCU: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMasterSpecResponseBody extends $tea.Model {
  dbInstanceId?: string;
  errorMessage?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      errorMessage: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMasterSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMasterSpecResponseBody;
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
      body: ModifyMasterSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParametersRequest extends $tea.Model {
  DBInstanceId?: string;
  forceRestartInstance?: boolean;
  parameters?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      forceRestartInstance: 'ForceRestartInstance',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      forceRestartInstance: 'boolean',
      parameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParametersResponseBody extends $tea.Model {
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

export class ModifyParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyParametersResponseBody;
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
      body: ModifyParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySQLCollectorPolicyRequest extends $tea.Model {
  DBInstanceId?: string;
  SQLCollectorStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      SQLCollectorStatus: 'SQLCollectorStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      SQLCollectorStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySQLCollectorPolicyResponseBody extends $tea.Model {
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

export class ModifySQLCollectorPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySQLCollectorPolicyResponseBody;
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
      body: ModifySQLCollectorPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIpsRequest extends $tea.Model {
  DBInstanceIPArrayAttribute?: string;
  DBInstanceIPArrayName?: string;
  DBInstanceId?: string;
  modifyMode?: string;
  resourceGroupId?: string;
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArrayAttribute: 'DBInstanceIPArrayAttribute',
      DBInstanceIPArrayName: 'DBInstanceIPArrayName',
      DBInstanceId: 'DBInstanceId',
      modifyMode: 'ModifyMode',
      resourceGroupId: 'ResourceGroupId',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArrayAttribute: 'string',
      DBInstanceIPArrayName: 'string',
      DBInstanceId: 'string',
      modifyMode: 'string',
      resourceGroupId: 'string',
      securityIPList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIpsResponseBody extends $tea.Model {
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

export class ModifySecurityIpsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySecurityIpsResponseBody;
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
      body: ModifySecurityIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVectorConfigurationRequest extends $tea.Model {
  DBInstanceId?: string;
  ownerId?: number;
  vectorConfigurationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      vectorConfigurationStatus: 'VectorConfigurationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      vectorConfigurationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVectorConfigurationResponseBody extends $tea.Model {
  DBInstanceId?: string;
  errorMessage?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      errorMessage: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVectorConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyVectorConfigurationResponseBody;
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
      body: ModifyVectorConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseInstanceRequest extends $tea.Model {
  DBInstanceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseInstanceResponseBody extends $tea.Model {
  DBInstanceId?: string;
  errorMessage?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      errorMessage: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PauseInstanceResponseBody;
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
      body: PauseInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionDataRequest extends $tea.Model {
  collection?: string;
  content?: string;
  DBInstanceId?: string;
  filter?: string;
  hybridSearch?: string;
  hybridSearchArgs?: { [key: string]: {[key: string]: any} };
  includeValues?: boolean;
  metrics?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  topK?: number;
  vector?: number[];
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      content: 'Content',
      DBInstanceId: 'DBInstanceId',
      filter: 'Filter',
      hybridSearch: 'HybridSearch',
      hybridSearchArgs: 'HybridSearchArgs',
      includeValues: 'IncludeValues',
      metrics: 'Metrics',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      topK: 'TopK',
      vector: 'Vector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      content: 'string',
      DBInstanceId: 'string',
      filter: 'string',
      hybridSearch: 'string',
      hybridSearchArgs: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      includeValues: 'boolean',
      metrics: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
      topK: 'number',
      vector: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionDataShrinkRequest extends $tea.Model {
  collection?: string;
  content?: string;
  DBInstanceId?: string;
  filter?: string;
  hybridSearch?: string;
  hybridSearchArgsShrink?: string;
  includeValues?: boolean;
  metrics?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  topK?: number;
  vectorShrink?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      content: 'Content',
      DBInstanceId: 'DBInstanceId',
      filter: 'Filter',
      hybridSearch: 'HybridSearch',
      hybridSearchArgsShrink: 'HybridSearchArgs',
      includeValues: 'IncludeValues',
      metrics: 'Metrics',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      topK: 'TopK',
      vectorShrink: 'Vector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      content: 'string',
      DBInstanceId: 'string',
      filter: 'string',
      hybridSearch: 'string',
      hybridSearchArgsShrink: 'string',
      includeValues: 'boolean',
      metrics: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
      topK: 'number',
      vectorShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionDataResponseBody extends $tea.Model {
  matches?: QueryCollectionDataResponseBodyMatches;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      matches: 'Matches',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matches: QueryCollectionDataResponseBodyMatches,
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCollectionDataResponseBody;
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
      body: QueryCollectionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentRequest extends $tea.Model {
  collection?: string;
  content?: string;
  DBInstanceId?: string;
  fileName?: string;
  fileUrl?: string;
  filter?: string;
  hybridSearch?: string;
  hybridSearchArgs?: { [key: string]: {[key: string]: any} };
  includeVector?: boolean;
  metrics?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  recallWindow?: number[];
  regionId?: string;
  rerankFactor?: number;
  topK?: number;
  useFullTextRetrieval?: boolean;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      content: 'Content',
      DBInstanceId: 'DBInstanceId',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      filter: 'Filter',
      hybridSearch: 'HybridSearch',
      hybridSearchArgs: 'HybridSearchArgs',
      includeVector: 'IncludeVector',
      metrics: 'Metrics',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      recallWindow: 'RecallWindow',
      regionId: 'RegionId',
      rerankFactor: 'RerankFactor',
      topK: 'TopK',
      useFullTextRetrieval: 'UseFullTextRetrieval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      content: 'string',
      DBInstanceId: 'string',
      fileName: 'string',
      fileUrl: 'string',
      filter: 'string',
      hybridSearch: 'string',
      hybridSearchArgs: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      includeVector: 'boolean',
      metrics: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      recallWindow: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
      rerankFactor: 'number',
      topK: 'number',
      useFullTextRetrieval: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentAdvanceRequest extends $tea.Model {
  collection?: string;
  content?: string;
  DBInstanceId?: string;
  fileName?: string;
  fileUrlObject?: Readable;
  filter?: string;
  hybridSearch?: string;
  hybridSearchArgs?: { [key: string]: {[key: string]: any} };
  includeVector?: boolean;
  metrics?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  recallWindow?: number[];
  regionId?: string;
  rerankFactor?: number;
  topK?: number;
  useFullTextRetrieval?: boolean;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      content: 'Content',
      DBInstanceId: 'DBInstanceId',
      fileName: 'FileName',
      fileUrlObject: 'FileUrl',
      filter: 'Filter',
      hybridSearch: 'HybridSearch',
      hybridSearchArgs: 'HybridSearchArgs',
      includeVector: 'IncludeVector',
      metrics: 'Metrics',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      recallWindow: 'RecallWindow',
      regionId: 'RegionId',
      rerankFactor: 'RerankFactor',
      topK: 'TopK',
      useFullTextRetrieval: 'UseFullTextRetrieval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      content: 'string',
      DBInstanceId: 'string',
      fileName: 'string',
      fileUrlObject: 'Readable',
      filter: 'string',
      hybridSearch: 'string',
      hybridSearchArgs: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      includeVector: 'boolean',
      metrics: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      recallWindow: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
      rerankFactor: 'number',
      topK: 'number',
      useFullTextRetrieval: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentShrinkRequest extends $tea.Model {
  collection?: string;
  content?: string;
  DBInstanceId?: string;
  fileName?: string;
  fileUrl?: string;
  filter?: string;
  hybridSearch?: string;
  hybridSearchArgsShrink?: string;
  includeVector?: boolean;
  metrics?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  recallWindowShrink?: string;
  regionId?: string;
  rerankFactor?: number;
  topK?: number;
  useFullTextRetrieval?: boolean;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      content: 'Content',
      DBInstanceId: 'DBInstanceId',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      filter: 'Filter',
      hybridSearch: 'HybridSearch',
      hybridSearchArgsShrink: 'HybridSearchArgs',
      includeVector: 'IncludeVector',
      metrics: 'Metrics',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      recallWindowShrink: 'RecallWindow',
      regionId: 'RegionId',
      rerankFactor: 'RerankFactor',
      topK: 'TopK',
      useFullTextRetrieval: 'UseFullTextRetrieval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      content: 'string',
      DBInstanceId: 'string',
      fileName: 'string',
      fileUrl: 'string',
      filter: 'string',
      hybridSearch: 'string',
      hybridSearchArgsShrink: 'string',
      includeVector: 'boolean',
      metrics: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      recallWindowShrink: 'string',
      regionId: 'string',
      rerankFactor: 'number',
      topK: 'number',
      useFullTextRetrieval: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentResponseBody extends $tea.Model {
  embeddingTokens?: string;
  matches?: QueryContentResponseBodyMatches;
  message?: string;
  requestId?: string;
  status?: string;
  usage?: QueryContentResponseBodyUsage;
  windowMatches?: QueryContentResponseBodyWindowMatches;
  static names(): { [key: string]: string } {
    return {
      embeddingTokens: 'EmbeddingTokens',
      matches: 'Matches',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      usage: 'Usage',
      windowMatches: 'WindowMatches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddingTokens: 'string',
      matches: QueryContentResponseBodyMatches,
      message: 'string',
      requestId: 'string',
      status: 'string',
      usage: QueryContentResponseBodyUsage,
      windowMatches: QueryContentResponseBodyWindowMatches,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryContentResponseBody;
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
      body: QueryContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebalanceDBInstanceRequest extends $tea.Model {
  clientToken?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebalanceDBInstanceResponseBody extends $tea.Model {
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

export class RebalanceDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RebalanceDBInstanceResponseBody;
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
      body: RebalanceDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstancePublicConnectionRequest extends $tea.Model {
  addressType?: string;
  currentConnectionString?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      currentConnectionString: 'CurrentConnectionString',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      currentConnectionString: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstancePublicConnectionResponseBody extends $tea.Model {
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

export class ReleaseInstancePublicConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseInstancePublicConnectionResponseBody;
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
      body: ReleaseInstancePublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordRequest extends $tea.Model {
  accountName?: string;
  accountPassword?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponseBody extends $tea.Model {
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

export class ResetAccountPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetAccountPasswordResponseBody;
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
      body: ResetAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetIMVMonitorDataRequest extends $tea.Model {
  DBInstanceId?: string;
  database?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetIMVMonitorDataResponseBody extends $tea.Model {
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetIMVMonitorDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetIMVMonitorDataResponseBody;
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
      body: ResetIMVMonitorDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDBInstanceRequest extends $tea.Model {
  clientToken?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDBInstanceResponseBody extends $tea.Model {
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

export class RestartDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartDBInstanceResponseBody;
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
      body: RestartDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeInstanceRequest extends $tea.Model {
  DBInstanceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeInstanceResponseBody extends $tea.Model {
  DBInstanceId?: string;
  errorMessage?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      errorMessage: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResumeInstanceResponseBody;
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
      body: ResumeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDBInstancePlanStatusRequest extends $tea.Model {
  DBInstanceId?: string;
  ownerId?: number;
  planId?: string;
  planStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      planId: 'PlanId',
      planStatus: 'PlanStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      planId: 'string',
      planStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDBInstancePlanStatusResponseBody extends $tea.Model {
  errorMessage?: string;
  planId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      planId: 'PlanId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      planId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDBInstancePlanStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDBInstancePlanStatusResponseBody;
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
      body: SetDBInstancePlanStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataShareInstanceRequest extends $tea.Model {
  instanceList?: string[];
  operationType?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      operationType: 'OperationType',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: { 'type': 'array', 'itemType': 'string' },
      operationType: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataShareInstanceShrinkRequest extends $tea.Model {
  instanceListShrink?: string;
  operationType?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceListShrink: 'InstanceList',
      operationType: 'OperationType',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceListShrink: 'string',
      operationType: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataShareInstanceResponseBody extends $tea.Model {
  errMessage?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataShareInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDataShareInstanceResponseBody;
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
      body: SetDataShareInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDBInstanceNetTypeRequest extends $tea.Model {
  connectionStringPrefix?: string;
  DBInstanceId?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceId: 'DBInstanceId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBInstanceId: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDBInstanceNetTypeResponseBody extends $tea.Model {
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

export class SwitchDBInstanceNetTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchDBInstanceNetTypeResponseBody;
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
      body: SwitchDBInstanceNetTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
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

export class UnloadSampleDataRequest extends $tea.Model {
  DBInstanceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnloadSampleDataResponseBody extends $tea.Model {
  DBInstanceId?: string;
  errorMessage?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      errorMessage: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnloadSampleDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnloadSampleDataResponseBody;
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
      body: UnloadSampleDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
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

export class UpdateCollectionDataMetadataRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  filter?: string;
  ids?: string[];
  metadata?: { [key: string]: any };
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      filter: 'Filter',
      ids: 'Ids',
      metadata: 'Metadata',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      filter: 'string',
      ids: { 'type': 'array', 'itemType': 'string' },
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectionDataMetadataShrinkRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  filter?: string;
  idsShrink?: string;
  metadataShrink?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      filter: 'Filter',
      idsShrink: 'Ids',
      metadataShrink: 'Metadata',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      filter: 'string',
      idsShrink: 'string',
      metadataShrink: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectionDataMetadataResponseBody extends $tea.Model {
  appliedRows?: number;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appliedRows: 'AppliedRows',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedRows: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectionDataMetadataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCollectionDataMetadataResponseBody;
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
      body: UpdateCollectionDataMetadataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDBInstancePlanRequest extends $tea.Model {
  DBInstanceId?: string;
  ownerId?: number;
  planConfig?: string;
  planDesc?: string;
  planEndDate?: string;
  planId?: string;
  planName?: string;
  planStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      planConfig: 'PlanConfig',
      planDesc: 'PlanDesc',
      planEndDate: 'PlanEndDate',
      planId: 'PlanId',
      planName: 'PlanName',
      planStartDate: 'PlanStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      planConfig: 'string',
      planDesc: 'string',
      planEndDate: 'string',
      planId: 'string',
      planName: 'string',
      planStartDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDBInstancePlanResponseBody extends $tea.Model {
  DBInstanceId?: string;
  errorMessage?: string;
  planId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      errorMessage: 'ErrorMessage',
      planId: 'PlanId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      errorMessage: 'string',
      planId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDBInstancePlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDBInstancePlanResponseBody;
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
      body: UpdateDBInstancePlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceRequest extends $tea.Model {
  DBInstanceClass?: string;
  DBInstanceGroupCount?: string;
  DBInstanceId?: string;
  instanceSpec?: string;
  masterNodeNum?: string;
  ownerId?: number;
  payType?: string;
  regionId?: string;
  resourceGroupId?: string;
  segDiskPerformanceLevel?: string;
  segNodeNum?: string;
  segStorageType?: string;
  storageSize?: string;
  upgradeType?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceGroupCount: 'DBInstanceGroupCount',
      DBInstanceId: 'DBInstanceId',
      instanceSpec: 'InstanceSpec',
      masterNodeNum: 'MasterNodeNum',
      ownerId: 'OwnerId',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      segDiskPerformanceLevel: 'SegDiskPerformanceLevel',
      segNodeNum: 'SegNodeNum',
      segStorageType: 'SegStorageType',
      storageSize: 'StorageSize',
      upgradeType: 'UpgradeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceClass: 'string',
      DBInstanceGroupCount: 'string',
      DBInstanceId: 'string',
      instanceSpec: 'string',
      masterNodeNum: 'string',
      ownerId: 'number',
      payType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      segDiskPerformanceLevel: 'string',
      segNodeNum: 'string',
      segStorageType: 'string',
      storageSize: 'string',
      upgradeType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceResponseBody extends $tea.Model {
  DBInstanceId?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeDBInstanceResponseBody;
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
      body: UpgradeDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBVersionRequest extends $tea.Model {
  DBInstanceId?: string;
  majorVersion?: string;
  minorVersion?: string;
  ownerId?: number;
  regionId?: string;
  switchTime?: string;
  switchTimeMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      majorVersion: 'MajorVersion',
      minorVersion: 'MinorVersion',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      majorVersion: 'string',
      minorVersion: 'string',
      ownerId: 'number',
      regionId: 'string',
      switchTime: 'string',
      switchTimeMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBVersionResponseBody extends $tea.Model {
  DBInstanceId?: string;
  DBInstanceName?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBInstanceName: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeDBVersionResponseBody;
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
      body: UpgradeDBVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocumentAsyncRequest extends $tea.Model {
  chunkOverlap?: number;
  chunkSize?: number;
  collection?: string;
  DBInstanceId?: string;
  documentLoaderName?: string;
  dryRun?: boolean;
  fileName?: string;
  fileUrl?: string;
  metadata?: { [key: string]: any };
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  separators?: string[];
  textSplitterName?: string;
  zhTitleEnhance?: boolean;
  static names(): { [key: string]: string } {
    return {
      chunkOverlap: 'ChunkOverlap',
      chunkSize: 'ChunkSize',
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      documentLoaderName: 'DocumentLoaderName',
      dryRun: 'DryRun',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      metadata: 'Metadata',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      separators: 'Separators',
      textSplitterName: 'TextSplitterName',
      zhTitleEnhance: 'ZhTitleEnhance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkOverlap: 'number',
      chunkSize: 'number',
      collection: 'string',
      DBInstanceId: 'string',
      documentLoaderName: 'string',
      dryRun: 'boolean',
      fileName: 'string',
      fileUrl: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
      separators: { 'type': 'array', 'itemType': 'string' },
      textSplitterName: 'string',
      zhTitleEnhance: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocumentAsyncAdvanceRequest extends $tea.Model {
  chunkOverlap?: number;
  chunkSize?: number;
  collection?: string;
  DBInstanceId?: string;
  documentLoaderName?: string;
  dryRun?: boolean;
  fileName?: string;
  fileUrlObject?: Readable;
  metadata?: { [key: string]: any };
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  separators?: string[];
  textSplitterName?: string;
  zhTitleEnhance?: boolean;
  static names(): { [key: string]: string } {
    return {
      chunkOverlap: 'ChunkOverlap',
      chunkSize: 'ChunkSize',
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      documentLoaderName: 'DocumentLoaderName',
      dryRun: 'DryRun',
      fileName: 'FileName',
      fileUrlObject: 'FileUrl',
      metadata: 'Metadata',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      separators: 'Separators',
      textSplitterName: 'TextSplitterName',
      zhTitleEnhance: 'ZhTitleEnhance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkOverlap: 'number',
      chunkSize: 'number',
      collection: 'string',
      DBInstanceId: 'string',
      documentLoaderName: 'string',
      dryRun: 'boolean',
      fileName: 'string',
      fileUrlObject: 'Readable',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
      separators: { 'type': 'array', 'itemType': 'string' },
      textSplitterName: 'string',
      zhTitleEnhance: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocumentAsyncShrinkRequest extends $tea.Model {
  chunkOverlap?: number;
  chunkSize?: number;
  collection?: string;
  DBInstanceId?: string;
  documentLoaderName?: string;
  dryRun?: boolean;
  fileName?: string;
  fileUrl?: string;
  metadataShrink?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  separatorsShrink?: string;
  textSplitterName?: string;
  zhTitleEnhance?: boolean;
  static names(): { [key: string]: string } {
    return {
      chunkOverlap: 'ChunkOverlap',
      chunkSize: 'ChunkSize',
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      documentLoaderName: 'DocumentLoaderName',
      dryRun: 'DryRun',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      metadataShrink: 'Metadata',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      separatorsShrink: 'Separators',
      textSplitterName: 'TextSplitterName',
      zhTitleEnhance: 'ZhTitleEnhance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkOverlap: 'number',
      chunkSize: 'number',
      collection: 'string',
      DBInstanceId: 'string',
      documentLoaderName: 'string',
      dryRun: 'boolean',
      fileName: 'string',
      fileUrl: 'string',
      metadataShrink: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
      separatorsShrink: 'string',
      textSplitterName: 'string',
      zhTitleEnhance: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocumentAsyncResponseBody extends $tea.Model {
  jobId?: string;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocumentAsyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadDocumentAsyncResponseBody;
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
      body: UploadDocumentAsyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertChunksRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  fileName?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  textChunks?: UpsertChunksRequestTextChunks[];
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      fileName: 'FileName',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      textChunks: 'TextChunks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      fileName: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
      textChunks: { 'type': 'array', 'itemType': UpsertChunksRequestTextChunks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertChunksShrinkRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  fileName?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  textChunksShrink?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      fileName: 'FileName',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      textChunksShrink: 'TextChunks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      fileName: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
      textChunksShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertChunksResponseBody extends $tea.Model {
  embeddingTokens?: string;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      embeddingTokens: 'EmbeddingTokens',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddingTokens: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertChunksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpsertChunksResponseBody;
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
      body: UpsertChunksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertCollectionDataRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  rows?: UpsertCollectionDataRequestRows[];
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
      rows: { 'type': 'array', 'itemType': UpsertCollectionDataRequestRows },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertCollectionDataShrinkRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  rowsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      rowsShrink: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
      rowsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertCollectionDataResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertCollectionDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpsertCollectionDataResponseBody;
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
      body: UpsertCollectionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertCollectionDataAsyncRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  fileUrl?: string;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      fileUrl: 'FileUrl',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      fileUrl: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertCollectionDataAsyncAdvanceRequest extends $tea.Model {
  collection?: string;
  DBInstanceId?: string;
  fileUrlObject?: Readable;
  namespace?: string;
  namespacePassword?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      fileUrlObject: 'FileUrl',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      fileUrlObject: 'Readable',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertCollectionDataAsyncResponseBody extends $tea.Model {
  jobId?: string;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertCollectionDataAsyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpsertCollectionDataAsyncResponseBody;
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
      body: UpsertCollectionDataAsyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequestTag extends $tea.Model {
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

export class DescribeAccountsResponseBodyAccountsDBInstanceAccount extends $tea.Model {
  accountDescription?: string;
  accountName?: string;
  accountStatus?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccounts extends $tea.Model {
  DBInstanceAccount?: DescribeAccountsResponseBodyAccountsDBInstanceAccount[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceAccount: 'DBInstanceAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAccount: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsDBInstanceAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveSQLRecordsResponseBodyQueries extends $tea.Model {
  clientAddr?: string;
  database?: string;
  PID?: string;
  query?: string;
  queryDuration?: string;
  queryStart?: string;
  sessionID?: string;
  sqlTruncated?: string;
  sqlTruncatedThreshold?: string;
  state?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      clientAddr: 'ClientAddr',
      database: 'Database',
      PID: 'PID',
      query: 'Query',
      queryDuration: 'QueryDuration',
      queryStart: 'QueryStart',
      sessionID: 'SessionID',
      sqlTruncated: 'SqlTruncated',
      sqlTruncatedThreshold: 'SqlTruncatedThreshold',
      state: 'State',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientAddr: 'string',
      database: 'string',
      PID: 'string',
      query: 'string',
      queryDuration: 'string',
      queryStart: 'string',
      sessionID: 'string',
      sqlTruncated: 'string',
      sqlTruncatedThreshold: 'string',
      state: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesNodeCount extends $tea.Model {
  maxCount?: string;
  minCount?: string;
  step?: string;
  static names(): { [key: string]: string } {
    return {
      maxCount: 'MaxCount',
      minCount: 'MinCount',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCount: 'string',
      minCount: 'string',
      step: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesStorageSize extends $tea.Model {
  maxCount?: string;
  minCount?: string;
  step?: string;
  static names(): { [key: string]: string } {
    return {
      maxCount: 'MaxCount',
      minCount: 'MinCount',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCount: 'string',
      minCount: 'string',
      step: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClasses extends $tea.Model {
  category?: string;
  description?: string;
  displayClass?: string;
  instanceClass?: string;
  nodeCount?: DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesNodeCount;
  storageSize?: DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesStorageSize;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      displayClass: 'DisplayClass',
      instanceClass: 'InstanceClass',
      nodeCount: 'NodeCount',
      storageSize: 'StorageSize',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      displayClass: 'string',
      instanceClass: 'string',
      nodeCount: DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesNodeCount,
      storageSize: DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesStorageSize,
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseBodyResourcesSupportedEngines extends $tea.Model {
  mode?: string;
  supportedEngineVersion?: string;
  supportedInstanceClasses?: DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClasses[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      supportedEngineVersion: 'SupportedEngineVersion',
      supportedInstanceClasses: 'SupportedInstanceClasses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      supportedEngineVersion: 'string',
      supportedInstanceClasses: { 'type': 'array', 'itemType': DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClasses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseBodyResources extends $tea.Model {
  supportedEngines?: DescribeAvailableResourcesResponseBodyResourcesSupportedEngines[];
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      supportedEngines: 'SupportedEngines',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngines: { 'type': 'array', 'itemType': DescribeAvailableResourcesResponseBodyResourcesSupportedEngines },
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNodeResponseBodyNodes extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeriesValues extends $tea.Model {
  point?: string[];
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeries extends $tea.Model {
  name?: string;
  role?: string;
  values?: DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      role: 'Role',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      role: 'string',
      values: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeriesValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformanceKeys extends $tea.Model {
  name?: string;
  series?: DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeries[];
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      series: 'Series',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      series: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeries },
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTagsTag extends $tea.Model {
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

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTags extends $tea.Model {
  tag?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute extends $tea.Model {
  availabilityValue?: string;
  connectionMode?: string;
  connectionString?: string;
  coreVersion?: string;
  cpuCores?: number;
  cpuCoresPerNode?: number;
  creationTime?: string;
  DBInstanceCategory?: string;
  DBInstanceClass?: string;
  DBInstanceClassType?: string;
  DBInstanceCpuCores?: number;
  DBInstanceDescription?: string;
  DBInstanceDiskMBPS?: number;
  DBInstanceGroupCount?: string;
  DBInstanceId?: string;
  DBInstanceMemory?: number;
  DBInstanceMode?: string;
  DBInstanceNetType?: string;
  DBInstanceStatus?: string;
  DBInstanceStorage?: number;
  encryptionKey?: string;
  encryptionType?: string;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  hostType?: string;
  idleTime?: number;
  instanceNetworkType?: string;
  lockMode?: string;
  lockReason?: string;
  maintainEndTime?: string;
  maintainStartTime?: string;
  masterCU?: number;
  masterNodeNum?: number;
  maxConnections?: number;
  memoryPerNode?: number;
  memorySize?: number;
  memoryUnit?: string;
  minorVersion?: string;
  payType?: string;
  port?: string;
  prodType?: string;
  readDelayTime?: string;
  regionId?: string;
  resourceGroupId?: string;
  runningTime?: string;
  securityIPList?: string;
  segDiskPerformanceLevel?: string;
  segNodeNum?: number;
  segmentCounts?: number;
  serverlessMode?: string;
  serverlessResource?: number;
  startTime?: string;
  storagePerNode?: number;
  storageSize?: number;
  storageType?: string;
  storageUnit?: string;
  supportRestore?: boolean;
  tags?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTags;
  vSwitchId?: string;
  vectorConfigurationStatus?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availabilityValue: 'AvailabilityValue',
      connectionMode: 'ConnectionMode',
      connectionString: 'ConnectionString',
      coreVersion: 'CoreVersion',
      cpuCores: 'CpuCores',
      cpuCoresPerNode: 'CpuCoresPerNode',
      creationTime: 'CreationTime',
      DBInstanceCategory: 'DBInstanceCategory',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceClassType: 'DBInstanceClassType',
      DBInstanceCpuCores: 'DBInstanceCpuCores',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceDiskMBPS: 'DBInstanceDiskMBPS',
      DBInstanceGroupCount: 'DBInstanceGroupCount',
      DBInstanceId: 'DBInstanceId',
      DBInstanceMemory: 'DBInstanceMemory',
      DBInstanceMode: 'DBInstanceMode',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorage: 'DBInstanceStorage',
      encryptionKey: 'EncryptionKey',
      encryptionType: 'EncryptionType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      hostType: 'HostType',
      idleTime: 'IdleTime',
      instanceNetworkType: 'InstanceNetworkType',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      masterCU: 'MasterCU',
      masterNodeNum: 'MasterNodeNum',
      maxConnections: 'MaxConnections',
      memoryPerNode: 'MemoryPerNode',
      memorySize: 'MemorySize',
      memoryUnit: 'MemoryUnit',
      minorVersion: 'MinorVersion',
      payType: 'PayType',
      port: 'Port',
      prodType: 'ProdType',
      readDelayTime: 'ReadDelayTime',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      runningTime: 'RunningTime',
      securityIPList: 'SecurityIPList',
      segDiskPerformanceLevel: 'SegDiskPerformanceLevel',
      segNodeNum: 'SegNodeNum',
      segmentCounts: 'SegmentCounts',
      serverlessMode: 'ServerlessMode',
      serverlessResource: 'ServerlessResource',
      startTime: 'StartTime',
      storagePerNode: 'StoragePerNode',
      storageSize: 'StorageSize',
      storageType: 'StorageType',
      storageUnit: 'StorageUnit',
      supportRestore: 'SupportRestore',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vectorConfigurationStatus: 'VectorConfigurationStatus',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availabilityValue: 'string',
      connectionMode: 'string',
      connectionString: 'string',
      coreVersion: 'string',
      cpuCores: 'number',
      cpuCoresPerNode: 'number',
      creationTime: 'string',
      DBInstanceCategory: 'string',
      DBInstanceClass: 'string',
      DBInstanceClassType: 'string',
      DBInstanceCpuCores: 'number',
      DBInstanceDescription: 'string',
      DBInstanceDiskMBPS: 'number',
      DBInstanceGroupCount: 'string',
      DBInstanceId: 'string',
      DBInstanceMemory: 'number',
      DBInstanceMode: 'string',
      DBInstanceNetType: 'string',
      DBInstanceStatus: 'string',
      DBInstanceStorage: 'number',
      encryptionKey: 'string',
      encryptionType: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      hostType: 'string',
      idleTime: 'number',
      instanceNetworkType: 'string',
      lockMode: 'string',
      lockReason: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      masterCU: 'number',
      masterNodeNum: 'number',
      maxConnections: 'number',
      memoryPerNode: 'number',
      memorySize: 'number',
      memoryUnit: 'string',
      minorVersion: 'string',
      payType: 'string',
      port: 'string',
      prodType: 'string',
      readDelayTime: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      runningTime: 'string',
      securityIPList: 'string',
      segDiskPerformanceLevel: 'string',
      segNodeNum: 'number',
      segmentCounts: 'number',
      serverlessMode: 'string',
      serverlessResource: 'number',
      startTime: 'string',
      storagePerNode: 'number',
      storageSize: 'number',
      storageType: 'string',
      storageUnit: 'string',
      supportRestore: 'boolean',
      tags: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTags,
      vSwitchId: 'string',
      vectorConfigurationStatus: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItems extends $tea.Model {
  DBInstanceAttribute?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceAttribute: 'DBInstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAttribute: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDataBloatResponseBodyItems extends $tea.Model {
  bloatCeoff?: string;
  bloatSize?: string;
  databaseName?: string;
  expectTableSize?: string;
  realTableSize?: string;
  schemaName?: string;
  sequence?: number;
  storageType?: string;
  suggestedAction?: string;
  tableName?: string;
  timeLastUpdated?: string;
  timeLastVacuumed?: string;
  static names(): { [key: string]: string } {
    return {
      bloatCeoff: 'BloatCeoff',
      bloatSize: 'BloatSize',
      databaseName: 'DatabaseName',
      expectTableSize: 'ExpectTableSize',
      realTableSize: 'RealTableSize',
      schemaName: 'SchemaName',
      sequence: 'Sequence',
      storageType: 'StorageType',
      suggestedAction: 'SuggestedAction',
      tableName: 'TableName',
      timeLastUpdated: 'TimeLastUpdated',
      timeLastVacuumed: 'TimeLastVacuumed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bloatCeoff: 'string',
      bloatSize: 'string',
      databaseName: 'string',
      expectTableSize: 'string',
      realTableSize: 'string',
      schemaName: 'string',
      sequence: 'number',
      storageType: 'string',
      suggestedAction: 'string',
      tableName: 'string',
      timeLastUpdated: 'string',
      timeLastVacuumed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDataSkewResponseBodyItems extends $tea.Model {
  databaseName?: string;
  distributeKey?: string;
  owner?: string;
  schemaName?: string;
  sequence?: number;
  tableName?: string;
  tableSize?: string;
  tableSkew?: string;
  timeLastUpdated?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      distributeKey: 'DistributeKey',
      owner: 'Owner',
      schemaName: 'SchemaName',
      sequence: 'Sequence',
      tableName: 'TableName',
      tableSize: 'TableSize',
      tableSkew: 'TableSkew',
      timeLastUpdated: 'TimeLastUpdated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      distributeKey: 'string',
      owner: 'string',
      schemaName: 'string',
      sequence: 'number',
      tableName: 'string',
      tableSize: 'string',
      tableSkew: 'string',
      timeLastUpdated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDiagnosisSummaryResponseBodyItems extends $tea.Model {
  hostname?: string;
  nodeAddress?: string;
  nodeCID?: string;
  nodeID?: string;
  nodeName?: string;
  nodePort?: string;
  nodePreferredRole?: string;
  nodeReplicationMode?: string;
  nodeRole?: string;
  nodeStatus?: string;
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      hostname: 'Hostname',
      nodeAddress: 'NodeAddress',
      nodeCID: 'NodeCID',
      nodeID: 'NodeID',
      nodeName: 'NodeName',
      nodePort: 'NodePort',
      nodePreferredRole: 'NodePreferredRole',
      nodeReplicationMode: 'NodeReplicationMode',
      nodeRole: 'NodeRole',
      nodeStatus: 'NodeStatus',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      nodeAddress: 'string',
      nodeCID: 'string',
      nodeID: 'string',
      nodeName: 'string',
      nodePort: 'string',
      nodePreferredRole: 'string',
      nodeReplicationMode: 'string',
      nodeRole: 'string',
      nodeStatus: 'string',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDiagnosisSummaryResponseBodyMasterStatusInfo extends $tea.Model {
  exceptionNodeNum?: number;
  normalNodeNum?: number;
  notPreferredNodeNum?: number;
  notSyncingNodeNum?: number;
  preferredNodeNum?: number;
  syncedNodeNum?: number;
  static names(): { [key: string]: string } {
    return {
      exceptionNodeNum: 'ExceptionNodeNum',
      normalNodeNum: 'NormalNodeNum',
      notPreferredNodeNum: 'NotPreferredNodeNum',
      notSyncingNodeNum: 'NotSyncingNodeNum',
      preferredNodeNum: 'PreferredNodeNum',
      syncedNodeNum: 'SyncedNodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionNodeNum: 'number',
      normalNodeNum: 'number',
      notPreferredNodeNum: 'number',
      notSyncingNodeNum: 'number',
      preferredNodeNum: 'number',
      syncedNodeNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDiagnosisSummaryResponseBodySegmentStatusInfo extends $tea.Model {
  exceptionNodeNum?: number;
  normalNodeNum?: number;
  notPreferredNodeNum?: number;
  notSyncingNodeNum?: number;
  preferredNodeNum?: number;
  syncedNodeNum?: number;
  static names(): { [key: string]: string } {
    return {
      exceptionNodeNum: 'ExceptionNodeNum',
      normalNodeNum: 'NormalNodeNum',
      notPreferredNodeNum: 'NotPreferredNodeNum',
      notSyncingNodeNum: 'NotSyncingNodeNum',
      preferredNodeNum: 'PreferredNodeNum',
      syncedNodeNum: 'SyncedNodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionNodeNum: 'number',
      normalNodeNum: 'number',
      notPreferredNodeNum: 'number',
      notSyncingNodeNum: 'number',
      preferredNodeNum: 'number',
      syncedNodeNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceErrorLogResponseBodyItems extends $tea.Model {
  database?: string;
  host?: string;
  logContext?: string;
  logLevel?: string;
  time?: number;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      host: 'Host',
      logContext: 'LogContext',
      logLevel: 'LogLevel',
      time: 'Time',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      host: 'string',
      logContext: 'string',
      logLevel: 'string',
      time: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIPArrayListResponseBodyItemsDBInstanceIPArray extends $tea.Model {
  DBInstanceIPArrayAttribute?: string;
  DBInstanceIPArrayName?: string;
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArrayAttribute: 'DBInstanceIPArrayAttribute',
      DBInstanceIPArrayName: 'DBInstanceIPArrayName',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArrayAttribute: 'string',
      DBInstanceIPArrayName: 'string',
      securityIPList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIPArrayListResponseBodyItems extends $tea.Model {
  DBInstanceIPArray?: DescribeDBInstanceIPArrayListResponseBodyItemsDBInstanceIPArray[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArray: 'DBInstanceIPArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArray: { 'type': 'array', 'itemType': DescribeDBInstanceIPArrayListResponseBodyItemsDBInstanceIPArray },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIndexUsageResponseBodyItems extends $tea.Model {
  databaseName?: string;
  indexDef?: string;
  indexName?: string;
  indexScanTimes?: number;
  indexSize?: string;
  isPartitionTable?: boolean;
  parentTableName?: string;
  schemaName?: string;
  tableName?: string;
  timeLastUpdated?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      indexDef: 'IndexDef',
      indexName: 'IndexName',
      indexScanTimes: 'IndexScanTimes',
      indexSize: 'IndexSize',
      isPartitionTable: 'IsPartitionTable',
      parentTableName: 'ParentTableName',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      timeLastUpdated: 'TimeLastUpdated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      indexDef: 'string',
      indexName: 'string',
      indexScanTimes: 'number',
      indexSize: 'string',
      isPartitionTable: 'boolean',
      parentTableName: 'string',
      schemaName: 'string',
      tableName: 'string',
      timeLastUpdated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo extends $tea.Model {
  addressType?: string;
  connectionString?: string;
  IPAddress?: string;
  IPType?: string;
  port?: string;
  VPCId?: string;
  vSwitchId?: string;
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      connectionString: 'ConnectionString',
      IPAddress: 'IPAddress',
      IPType: 'IPType',
      port: 'Port',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      connectionString: 'string',
      IPAddress: 'string',
      IPType: 'string',
      port: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos extends $tea.Model {
  DBInstanceNetInfo?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceNetInfo: 'DBInstanceNetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceNetInfo: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePlansResponseBodyItemsPlanList extends $tea.Model {
  DBInstanceId?: string;
  planConfig?: string;
  planDesc?: string;
  planEndDate?: string;
  planId?: string;
  planName?: string;
  planScheduleType?: string;
  planStartDate?: string;
  planStatus?: string;
  planType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      planConfig: 'PlanConfig',
      planDesc: 'PlanDesc',
      planEndDate: 'PlanEndDate',
      planId: 'PlanId',
      planName: 'PlanName',
      planScheduleType: 'PlanScheduleType',
      planStartDate: 'PlanStartDate',
      planStatus: 'PlanStatus',
      planType: 'PlanType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      planConfig: 'string',
      planDesc: 'string',
      planEndDate: 'string',
      planId: 'string',
      planName: 'string',
      planScheduleType: 'string',
      planStartDate: 'string',
      planStatus: 'string',
      planType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePlansResponseBodyItems extends $tea.Model {
  planList?: DescribeDBInstancePlansResponseBodyItemsPlanList[];
  static names(): { [key: string]: string } {
    return {
      planList: 'PlanList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planList: { 'type': 'array', 'itemType': DescribeDBInstancePlansResponseBodyItemsPlanList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformancesPerformance extends $tea.Model {
  bottleneck?: string;
  key?: string;
  unit?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      bottleneck: 'Bottleneck',
      key: 'Key',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottleneck: 'string',
      key: 'string',
      unit: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformances extends $tea.Model {
  performance?: DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformancesPerformance[];
  static names(): { [key: string]: string } {
    return {
      performance: 'Performance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performance: { 'type': 'array', 'itemType': DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformancesPerformance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesRequestTag extends $tea.Model {
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

export class DescribeDBInstancesShrinkRequestTag extends $tea.Model {
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

export class DescribeDBInstancesResponseBodyItemsDBInstanceTagsTag extends $tea.Model {
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

export class DescribeDBInstancesResponseBodyItemsDBInstanceTags extends $tea.Model {
  tag?: DescribeDBInstancesResponseBodyItemsDBInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsDBInstanceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyItemsDBInstance extends $tea.Model {
  connectionMode?: string;
  createTime?: string;
  DBInstanceCategory?: string;
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  DBInstanceMode?: string;
  DBInstanceNetType?: string;
  DBInstanceStatus?: string;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  instanceDeployType?: string;
  instanceNetworkType?: string;
  lockMode?: string;
  lockReason?: string;
  masterNodeNum?: number;
  payType?: string;
  prodType?: string;
  regionId?: string;
  resourceGroupId?: string;
  segNodeNum?: string;
  serverlessMode?: string;
  storageSize?: string;
  storageType?: string;
  tags?: DescribeDBInstancesResponseBodyItemsDBInstanceTags;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionMode: 'ConnectionMode',
      createTime: 'CreateTime',
      DBInstanceCategory: 'DBInstanceCategory',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceMode: 'DBInstanceMode',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceStatus: 'DBInstanceStatus',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      instanceDeployType: 'InstanceDeployType',
      instanceNetworkType: 'InstanceNetworkType',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      masterNodeNum: 'MasterNodeNum',
      payType: 'PayType',
      prodType: 'ProdType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      segNodeNum: 'SegNodeNum',
      serverlessMode: 'ServerlessMode',
      storageSize: 'StorageSize',
      storageType: 'StorageType',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionMode: 'string',
      createTime: 'string',
      DBInstanceCategory: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceMode: 'string',
      DBInstanceNetType: 'string',
      DBInstanceStatus: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      instanceDeployType: 'string',
      instanceNetworkType: 'string',
      lockMode: 'string',
      lockReason: 'string',
      masterNodeNum: 'number',
      payType: 'string',
      prodType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      segNodeNum: 'string',
      serverlessMode: 'string',
      storageSize: 'string',
      storageType: 'string',
      tags: DescribeDBInstancesResponseBodyItemsDBInstanceTags,
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyItems extends $tea.Model {
  DBInstance?: DescribeDBInstancesResponseBodyItemsDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsDBInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBVersionInfosResponseBodyVersionDetails extends $tea.Model {
  serverless?: any;
  storageElastic?: any;
  static names(): { [key: string]: string } {
    return {
      serverless: 'Serverless',
      storageElastic: 'StorageElastic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverless: 'any',
      storageElastic: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataBackupsResponseBodyItems extends $tea.Model {
  backupEndTime?: string;
  backupEndTimeLocal?: string;
  backupMethod?: string;
  backupMode?: string;
  backupSetId?: string;
  backupSize?: number;
  backupStartTime?: string;
  backupStartTimeLocal?: string;
  backupStatus?: string;
  baksetName?: string;
  consistentTime?: number;
  DBInstanceId?: string;
  dataType?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupEndTimeLocal: 'BackupEndTimeLocal',
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupSetId: 'BackupSetId',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStartTimeLocal: 'BackupStartTimeLocal',
      backupStatus: 'BackupStatus',
      baksetName: 'BaksetName',
      consistentTime: 'ConsistentTime',
      DBInstanceId: 'DBInstanceId',
      dataType: 'DataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupEndTimeLocal: 'string',
      backupMethod: 'string',
      backupMode: 'string',
      backupSetId: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupStartTimeLocal: 'string',
      backupStatus: 'string',
      baksetName: 'string',
      consistentTime: 'number',
      DBInstanceId: 'string',
      dataType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataReDistributeInfoResponseBodyDataReDistributeInfo extends $tea.Model {
  message?: string;
  progress?: number;
  remainTime?: string;
  startTime?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      progress: 'Progress',
      remainTime: 'RemainTime',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      progress: 'number',
      remainTime: 'string',
      startTime: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataShareInstancesResponseBodyItemsDBInstance extends $tea.Model {
  DBInstanceId?: string;
  DBInstanceMode?: string;
  dataShareStatus?: string;
  description?: string;
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBInstanceMode: 'DBInstanceMode',
      dataShareStatus: 'DataShareStatus',
      description: 'Description',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBInstanceMode: 'string',
      dataShareStatus: 'string',
      description: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataShareInstancesResponseBodyItems extends $tea.Model {
  DBInstance?: DescribeDataShareInstancesResponseBodyItemsDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDataShareInstancesResponseBodyItemsDBInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSharePerformanceResponseBodyPerformanceKeysSeriesValues extends $tea.Model {
  point?: string[];
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSharePerformanceResponseBodyPerformanceKeysSeries extends $tea.Model {
  name?: string;
  values?: DescribeDataSharePerformanceResponseBodyPerformanceKeysSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': DescribeDataSharePerformanceResponseBodyPerformanceKeysSeriesValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSharePerformanceResponseBodyPerformanceKeys extends $tea.Model {
  name?: string;
  series?: DescribeDataSharePerformanceResponseBodyPerformanceKeysSeries[];
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      series: 'Series',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      series: { 'type': 'array', 'itemType': DescribeDataSharePerformanceResponseBodyPerformanceKeysSeries },
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisMonitorPerformanceResponseBodyPerformances extends $tea.Model {
  cost?: number;
  database?: string;
  queryID?: string;
  startTime?: number;
  status?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'Cost',
      database: 'Database',
      queryID: 'QueryID',
      startTime: 'StartTime',
      status: 'Status',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      database: 'string',
      queryID: 'string',
      startTime: 'number',
      status: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsResponseBodyItems extends $tea.Model {
  database?: string;
  duration?: number;
  queryID?: string;
  SQLStmt?: string;
  SQLTruncated?: boolean;
  SQLTruncatedThreshold?: number;
  sessionID?: string;
  startTime?: number;
  status?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      duration: 'Duration',
      queryID: 'QueryID',
      SQLStmt: 'SQLStmt',
      SQLTruncated: 'SQLTruncated',
      SQLTruncatedThreshold: 'SQLTruncatedThreshold',
      sessionID: 'SessionID',
      startTime: 'StartTime',
      status: 'Status',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      duration: 'number',
      queryID: 'string',
      SQLStmt: 'string',
      SQLTruncated: 'boolean',
      SQLTruncatedThreshold: 'number',
      sessionID: 'string',
      startTime: 'number',
      status: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadRecordsResponseBodyRecords extends $tea.Model {
  downloadId?: number;
  downloadUrl?: string;
  exceptionMsg?: string;
  fileName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      downloadId: 'DownloadId',
      downloadUrl: 'DownloadUrl',
      exceptionMsg: 'ExceptionMsg',
      fileName: 'FileName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadId: 'number',
      downloadUrl: 'string',
      exceptionMsg: 'string',
      fileName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadSQLLogsResponseBodyRecords extends $tea.Model {
  downloadId?: number;
  downloadUrl?: string;
  exceptionMsg?: string;
  fileName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      downloadId: 'DownloadId',
      downloadUrl: 'DownloadUrl',
      exceptionMsg: 'ExceptionMsg',
      fileName: 'FileName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadId: 'number',
      downloadUrl: 'string',
      exceptionMsg: 'string',
      fileName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbgpSegmentDiskUsagePercentMax extends $tea.Model {
  status?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgConnectionStatus extends $tea.Model {
  status?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgDiskStatus extends $tea.Model {
  status?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgDiskUsagePercent extends $tea.Model {
  status?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgInstanceColdDataGb extends $tea.Model {
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgInstanceHotDataGb extends $tea.Model {
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgInstanceTotalDataGb extends $tea.Model {
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgMasterDiskUsagePercentMax extends $tea.Model {
  status?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgMasterStatus extends $tea.Model {
  status?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgSegmentStatus extends $tea.Model {
  status?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgStatus extends $tea.Model {
  status?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusNodeMasterConnectionStatus extends $tea.Model {
  status?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusNodeMasterStatus extends $tea.Model {
  status?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusNodeSegmentConnectionStatus extends $tea.Model {
  status?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusNodeSegmentDiskStatus extends $tea.Model {
  status?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatus extends $tea.Model {
  adbgpSegmentDiskUsagePercentMax?: DescribeHealthStatusResponseBodyStatusAdbgpSegmentDiskUsagePercentMax;
  adbpgConnectionStatus?: DescribeHealthStatusResponseBodyStatusAdbpgConnectionStatus;
  adbpgDiskStatus?: DescribeHealthStatusResponseBodyStatusAdbpgDiskStatus;
  adbpgDiskUsagePercent?: DescribeHealthStatusResponseBodyStatusAdbpgDiskUsagePercent;
  adbpgInstanceColdDataGb?: DescribeHealthStatusResponseBodyStatusAdbpgInstanceColdDataGb;
  adbpgInstanceHotDataGb?: DescribeHealthStatusResponseBodyStatusAdbpgInstanceHotDataGb;
  adbpgInstanceTotalDataGb?: DescribeHealthStatusResponseBodyStatusAdbpgInstanceTotalDataGb;
  adbpgMasterDiskUsagePercentMax?: DescribeHealthStatusResponseBodyStatusAdbpgMasterDiskUsagePercentMax;
  adbpgMasterStatus?: DescribeHealthStatusResponseBodyStatusAdbpgMasterStatus;
  adbpgSegmentStatus?: DescribeHealthStatusResponseBodyStatusAdbpgSegmentStatus;
  adbpgStatus?: DescribeHealthStatusResponseBodyStatusAdbpgStatus;
  nodeMasterConnectionStatus?: DescribeHealthStatusResponseBodyStatusNodeMasterConnectionStatus;
  nodeMasterStatus?: DescribeHealthStatusResponseBodyStatusNodeMasterStatus;
  nodeSegmentConnectionStatus?: DescribeHealthStatusResponseBodyStatusNodeSegmentConnectionStatus;
  nodeSegmentDiskStatus?: DescribeHealthStatusResponseBodyStatusNodeSegmentDiskStatus;
  static names(): { [key: string]: string } {
    return {
      adbgpSegmentDiskUsagePercentMax: 'adbgp_segment_disk_usage_percent_max',
      adbpgConnectionStatus: 'adbpg_connection_status',
      adbpgDiskStatus: 'adbpg_disk_status',
      adbpgDiskUsagePercent: 'adbpg_disk_usage_percent',
      adbpgInstanceColdDataGb: 'adbpg_instance_cold_data_gb',
      adbpgInstanceHotDataGb: 'adbpg_instance_hot_data_gb',
      adbpgInstanceTotalDataGb: 'adbpg_instance_total_data_gb',
      adbpgMasterDiskUsagePercentMax: 'adbpg_master_disk_usage_percent_max',
      adbpgMasterStatus: 'adbpg_master_status',
      adbpgSegmentStatus: 'adbpg_segment_status',
      adbpgStatus: 'adbpg_status',
      nodeMasterConnectionStatus: 'node_master_connection_status',
      nodeMasterStatus: 'node_master_status',
      nodeSegmentConnectionStatus: 'node_segment_connection_status',
      nodeSegmentDiskStatus: 'node_segment_disk_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbgpSegmentDiskUsagePercentMax: DescribeHealthStatusResponseBodyStatusAdbgpSegmentDiskUsagePercentMax,
      adbpgConnectionStatus: DescribeHealthStatusResponseBodyStatusAdbpgConnectionStatus,
      adbpgDiskStatus: DescribeHealthStatusResponseBodyStatusAdbpgDiskStatus,
      adbpgDiskUsagePercent: DescribeHealthStatusResponseBodyStatusAdbpgDiskUsagePercent,
      adbpgInstanceColdDataGb: DescribeHealthStatusResponseBodyStatusAdbpgInstanceColdDataGb,
      adbpgInstanceHotDataGb: DescribeHealthStatusResponseBodyStatusAdbpgInstanceHotDataGb,
      adbpgInstanceTotalDataGb: DescribeHealthStatusResponseBodyStatusAdbpgInstanceTotalDataGb,
      adbpgMasterDiskUsagePercentMax: DescribeHealthStatusResponseBodyStatusAdbpgMasterDiskUsagePercentMax,
      adbpgMasterStatus: DescribeHealthStatusResponseBodyStatusAdbpgMasterStatus,
      adbpgSegmentStatus: DescribeHealthStatusResponseBodyStatusAdbpgSegmentStatus,
      adbpgStatus: DescribeHealthStatusResponseBodyStatusAdbpgStatus,
      nodeMasterConnectionStatus: DescribeHealthStatusResponseBodyStatusNodeMasterConnectionStatus,
      nodeMasterStatus: DescribeHealthStatusResponseBodyStatusNodeMasterStatus,
      nodeSegmentConnectionStatus: DescribeHealthStatusResponseBodyStatusNodeSegmentConnectionStatus,
      nodeSegmentDiskStatus: DescribeHealthStatusResponseBodyStatusNodeSegmentDiskStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIMVInfosResponseBodyImvInfos extends $tea.Model {
  base?: string;
  detailInfo?: string;
  MV?: string;
  static names(): { [key: string]: string } {
    return {
      base: 'Base',
      detailInfo: 'DetailInfo',
      MV: 'MV',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base: 'string',
      detailInfo: 'string',
      MV: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupsResponseBodyItems extends $tea.Model {
  backupId?: string;
  DBInstanceId?: string;
  logFileName?: string;
  logFileSize?: number;
  logTime?: string;
  segmentName?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBInstanceId: 'DBInstanceId',
      logFileName: 'LogFileName',
      logFileSize: 'LogFileSize',
      logTime: 'LogTime',
      segmentName: 'SegmentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      DBInstanceId: 'string',
      logFileName: 'string',
      logFileSize: 'number',
      logTime: 'string',
      segmentName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyParameterLogResponseBodyChangelogs extends $tea.Model {
  effectTime?: string;
  parameterName?: string;
  parameterValid?: string;
  parameterValueAfter?: string;
  parameterValueBefore?: string;
  static names(): { [key: string]: string } {
    return {
      effectTime: 'EffectTime',
      parameterName: 'ParameterName',
      parameterValid: 'ParameterValid',
      parameterValueAfter: 'ParameterValueAfter',
      parameterValueBefore: 'ParameterValueBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectTime: 'string',
      parameterName: 'string',
      parameterValid: 'string',
      parameterValueAfter: 'string',
      parameterValueBefore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyParameters extends $tea.Model {
  currentValue?: string;
  forceRestartInstance?: string;
  isChangeableConfig?: string;
  optionalRange?: string;
  parameterDescription?: string;
  parameterName?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      currentValue: 'CurrentValue',
      forceRestartInstance: 'ForceRestartInstance',
      isChangeableConfig: 'IsChangeableConfig',
      optionalRange: 'OptionalRange',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentValue: 'string',
      forceRestartInstance: 'string',
      isChangeableConfig: 'string',
      optionalRange: 'string',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch extends $tea.Model {
  aliUid?: string;
  bid?: string;
  cidrBlock?: string;
  gmtCreate?: string;
  gmtModified?: string;
  isDefault?: boolean;
  izNo?: string;
  regionNo?: string;
  status?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      cidrBlock: 'CidrBlock',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      isDefault: 'IsDefault',
      izNo: 'IzNo',
      regionNo: 'RegionNo',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bid: 'string',
      cidrBlock: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      isDefault: 'boolean',
      izNo: 'string',
      regionNo: 'string',
      status: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVSwitchsResponseBodyVSwitches extends $tea.Model {
  vSwitch?: DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch[];
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'VSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: { 'type': 'array', 'itemType': DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs extends $tea.Model {
  cidrBlock?: string;
  gmtCreate?: string;
  gmtModified?: string;
  isDefault?: boolean;
  izNo?: string;
  status?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      isDefault: 'IsDefault',
      izNo: 'IzNo',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      isDefault: 'boolean',
      izNo: 'string',
      status: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsResponseBodyVpcsVpc extends $tea.Model {
  aliUid?: string;
  bid?: string;
  cidrBlock?: string;
  gmtCreate?: string;
  gmtModified?: string;
  isDefault?: boolean;
  regionNo?: string;
  status?: string;
  vSwitchs?: DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs[];
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      cidrBlock: 'CidrBlock',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      isDefault: 'IsDefault',
      regionNo: 'RegionNo',
      status: 'Status',
      vSwitchs: 'VSwitchs',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bid: 'string',
      cidrBlock: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      isDefault: 'boolean',
      regionNo: 'string',
      status: 'string',
      vSwitchs: { 'type': 'array', 'itemType': DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsResponseBodyVpcs extends $tea.Model {
  vpc?: DescribeRdsVpcsResponseBodyVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeRdsVpcsResponseBodyVpcsVpc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegionZonesZone extends $tea.Model {
  vpcEnabled?: boolean;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcEnabled: 'VpcEnabled',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcEnabled: 'boolean',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegionZones extends $tea.Model {
  zone?: DescribeRegionsResponseBodyRegionsRegionZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegionZonesZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  regionId?: string;
  zones?: DescribeRegionsResponseBodyRegionsRegionZones;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zones: DescribeRegionsResponseBodyRegionsRegionZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogCountResponseBodyItemsSeriesValues extends $tea.Model {
  point?: string[];
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogCountResponseBodyItemsSeries extends $tea.Model {
  values?: DescribeSQLLogCountResponseBodyItemsSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': DescribeSQLLogCountResponseBodyItemsSeriesValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogCountResponseBodyItems extends $tea.Model {
  name?: string;
  series?: DescribeSQLLogCountResponseBodyItemsSeries[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      series: { 'type': 'array', 'itemType': DescribeSQLLogCountResponseBodyItemsSeries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsResponseBodyItems extends $tea.Model {
  accountName?: string;
  DBName?: string;
  DBRole?: string;
  executeCost?: number;
  executeState?: string;
  operationClass?: string;
  operationExecuteTime?: string;
  operationType?: string;
  returnRowCounts?: number;
  SQLPlan?: string;
  SQLText?: string;
  scanRowCounts?: number;
  sourceIP?: string;
  sourcePort?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBName: 'DBName',
      DBRole: 'DBRole',
      executeCost: 'ExecuteCost',
      executeState: 'ExecuteState',
      operationClass: 'OperationClass',
      operationExecuteTime: 'OperationExecuteTime',
      operationType: 'OperationType',
      returnRowCounts: 'ReturnRowCounts',
      SQLPlan: 'SQLPlan',
      SQLText: 'SQLText',
      scanRowCounts: 'ScanRowCounts',
      sourceIP: 'SourceIP',
      sourcePort: 'SourcePort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBName: 'string',
      DBRole: 'string',
      executeCost: 'number',
      executeState: 'string',
      operationClass: 'string',
      operationExecuteTime: 'string',
      operationType: 'string',
      returnRowCounts: 'number',
      SQLPlan: 'string',
      SQLText: 'string',
      scanRowCounts: 'number',
      sourceIP: 'string',
      sourcePort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsV2ResponseBodyItems extends $tea.Model {
  accountName?: string;
  DBName?: string;
  DBRole?: string;
  executeCost?: number;
  executeState?: string;
  operationClass?: string;
  operationExecuteTime?: string;
  operationType?: string;
  returnRowCounts?: number;
  SQLText?: string;
  scanRowCounts?: number;
  sourceIP?: string;
  sourcePort?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBName: 'DBName',
      DBRole: 'DBRole',
      executeCost: 'ExecuteCost',
      executeState: 'ExecuteState',
      operationClass: 'OperationClass',
      operationExecuteTime: 'OperationExecuteTime',
      operationType: 'OperationType',
      returnRowCounts: 'ReturnRowCounts',
      SQLText: 'SQLText',
      scanRowCounts: 'ScanRowCounts',
      sourceIP: 'SourceIP',
      sourcePort: 'SourcePort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBName: 'string',
      DBRole: 'string',
      executeCost: 'number',
      executeState: 'string',
      operationClass: 'string',
      operationExecuteTime: 'string',
      operationType: 'string',
      returnRowCounts: 'number',
      SQLText: 'string',
      scanRowCounts: 'number',
      sourceIP: 'string',
      sourcePort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyTags extends $tea.Model {
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

export class DescribeUserEncryptionKeyListResponseBodyKmsKeys extends $tea.Model {
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWaitingSQLInfoResponseBodyItems extends $tea.Model {
  application?: string;
  blockedByApplication?: string;
  blockedByPID?: string;
  blockedBySQLStmt?: string;
  blockedByUser?: string;
  grantLocks?: string;
  notGrantLocks?: string;
  PID?: string;
  SQLStmt?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      blockedByApplication: 'BlockedByApplication',
      blockedByPID: 'BlockedByPID',
      blockedBySQLStmt: 'BlockedBySQLStmt',
      blockedByUser: 'BlockedByUser',
      grantLocks: 'GrantLocks',
      notGrantLocks: 'NotGrantLocks',
      PID: 'PID',
      SQLStmt: 'SQLStmt',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: 'string',
      blockedByApplication: 'string',
      blockedByPID: 'string',
      blockedBySQLStmt: 'string',
      blockedByUser: 'string',
      grantLocks: 'string',
      notGrantLocks: 'string',
      PID: 'string',
      SQLStmt: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWaitingSQLRecordsResponseBodyItems extends $tea.Model {
  database?: string;
  PID?: string;
  SQLStmt?: string;
  sessionID?: string;
  startTime?: number;
  status?: string;
  user?: string;
  waitingTime?: number;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      PID: 'PID',
      SQLStmt: 'SQLStmt',
      sessionID: 'SessionID',
      startTime: 'StartTime',
      status: 'Status',
      user: 'User',
      waitingTime: 'WaitingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      PID: 'string',
      SQLStmt: 'string',
      sessionID: 'string',
      startTime: 'number',
      status: 'string',
      user: 'string',
      waitingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadDocumentJobResponseBodyChunkResult extends $tea.Model {
  chunkFileUrl?: string;
  plainChunkFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      chunkFileUrl: 'ChunkFileUrl',
      plainChunkFileUrl: 'PlainChunkFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkFileUrl: 'string',
      plainChunkFileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadDocumentJobResponseBodyJob extends $tea.Model {
  completed?: boolean;
  createTime?: string;
  error?: string;
  id?: string;
  progress?: number;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      id: 'Id',
      progress: 'Progress',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      id: 'string',
      progress: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadDocumentJobResponseBodyUsage extends $tea.Model {
  embeddingEntries?: number;
  embeddingTokens?: number;
  static names(): { [key: string]: string } {
    return {
      embeddingEntries: 'EmbeddingEntries',
      embeddingTokens: 'EmbeddingTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddingEntries: 'number',
      embeddingTokens: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUpsertCollectionDataJobResponseBodyJob extends $tea.Model {
  completed?: boolean;
  createTime?: string;
  error?: string;
  id?: string;
  progress?: number;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      id: 'Id',
      progress: 'Progress',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      id: 'string',
      progress: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleActiveSQLRecordResponseBodyResults extends $tea.Model {
  pid?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionsResponseBodyCollections extends $tea.Model {
  collection?: string[];
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentCollectionsResponseBodyItemsCollectionList extends $tea.Model {
  collectionName?: string;
  dimension?: number;
  embeddingModel?: string;
  fullTextRetrievalFields?: string;
  metadata?: string;
  metrics?: string;
  parser?: string;
  static names(): { [key: string]: string } {
    return {
      collectionName: 'CollectionName',
      dimension: 'Dimension',
      embeddingModel: 'EmbeddingModel',
      fullTextRetrievalFields: 'FullTextRetrievalFields',
      metadata: 'Metadata',
      metrics: 'Metrics',
      parser: 'Parser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionName: 'string',
      dimension: 'number',
      embeddingModel: 'string',
      fullTextRetrievalFields: 'string',
      metadata: 'string',
      metrics: 'string',
      parser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentCollectionsResponseBodyItems extends $tea.Model {
  collectionList?: ListDocumentCollectionsResponseBodyItemsCollectionList[];
  static names(): { [key: string]: string } {
    return {
      collectionList: 'CollectionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionList: { 'type': 'array', 'itemType': ListDocumentCollectionsResponseBodyItemsCollectionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentsResponseBodyItemsDocumentList extends $tea.Model {
  fileName?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentsResponseBodyItems extends $tea.Model {
  documentList?: ListDocumentsResponseBodyItemsDocumentList[];
  static names(): { [key: string]: string } {
    return {
      documentList: 'DocumentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentList: { 'type': 'array', 'itemType': ListDocumentsResponseBodyItemsDocumentList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBodyNamespaces extends $tea.Model {
  namespace?: string[];
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: { 'type': 'array', 'itemType': 'string' },
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

export class QueryCollectionDataResponseBodyMatchesMatchValues extends $tea.Model {
  value?: number[];
  static names(): { [key: string]: string } {
    return {
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionDataResponseBodyMatchesMatch extends $tea.Model {
  id?: string;
  metadata?: { [key: string]: string };
  score?: number;
  values?: QueryCollectionDataResponseBodyMatchesMatchValues;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      metadata: 'Metadata',
      score: 'Score',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      score: 'number',
      values: QueryCollectionDataResponseBodyMatchesMatchValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionDataResponseBodyMatches extends $tea.Model {
  match?: QueryCollectionDataResponseBodyMatchesMatch[];
  static names(): { [key: string]: string } {
    return {
      match: 'match',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: { 'type': 'array', 'itemType': QueryCollectionDataResponseBodyMatchesMatch },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentResponseBodyMatchesMatchListVector extends $tea.Model {
  vectorList?: number[];
  static names(): { [key: string]: string } {
    return {
      vectorList: 'VectorList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vectorList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentResponseBodyMatchesMatchList extends $tea.Model {
  content?: string;
  fileName?: string;
  fileURL?: string;
  id?: string;
  loaderMetadata?: string;
  metadata?: { [key: string]: string };
  rerankScore?: number;
  retrievalSource?: number;
  score?: number;
  vector?: QueryContentResponseBodyMatchesMatchListVector;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fileName: 'FileName',
      fileURL: 'FileURL',
      id: 'Id',
      loaderMetadata: 'LoaderMetadata',
      metadata: 'Metadata',
      rerankScore: 'RerankScore',
      retrievalSource: 'RetrievalSource',
      score: 'Score',
      vector: 'Vector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
      fileURL: 'string',
      id: 'string',
      loaderMetadata: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      rerankScore: 'number',
      retrievalSource: 'number',
      score: 'number',
      vector: QueryContentResponseBodyMatchesMatchListVector,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentResponseBodyMatches extends $tea.Model {
  matchList?: QueryContentResponseBodyMatchesMatchList[];
  static names(): { [key: string]: string } {
    return {
      matchList: 'MatchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchList: { 'type': 'array', 'itemType': QueryContentResponseBodyMatchesMatchList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentResponseBodyUsage extends $tea.Model {
  embeddingEntries?: string;
  embeddingTokens?: string;
  static names(): { [key: string]: string } {
    return {
      embeddingEntries: 'EmbeddingEntries',
      embeddingTokens: 'EmbeddingTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddingEntries: 'string',
      embeddingTokens: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatchWindowMatch extends $tea.Model {
  content?: string;
  fileName?: string;
  id?: string;
  loaderMetadata?: string;
  metadata?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fileName: 'FileName',
      id: 'Id',
      loaderMetadata: 'LoaderMetadata',
      metadata: 'Metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
      id: 'string',
      loaderMetadata: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatch extends $tea.Model {
  windowMatch?: QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatchWindowMatch[];
  static names(): { [key: string]: string } {
    return {
      windowMatch: 'windowMatch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      windowMatch: { 'type': 'array', 'itemType': QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatchWindowMatch },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentResponseBodyWindowMatchesWindowMatches extends $tea.Model {
  windowMatch?: QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatch;
  static names(): { [key: string]: string } {
    return {
      windowMatch: 'WindowMatch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      windowMatch: QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatch,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentResponseBodyWindowMatches extends $tea.Model {
  windowMatches?: QueryContentResponseBodyWindowMatchesWindowMatches[];
  static names(): { [key: string]: string } {
    return {
      windowMatches: 'windowMatches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      windowMatches: { 'type': 'array', 'itemType': QueryContentResponseBodyWindowMatchesWindowMatches },
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

export class UpsertChunksRequestTextChunks extends $tea.Model {
  content?: string;
  metadata?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      metadata: 'Metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertCollectionDataRequestRows extends $tea.Model {
  id?: string;
  metadata?: { [key: string]: string };
  vector?: number[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      metadata: 'Metadata',
      vector: 'Vector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      vector: { 'type': 'array', 'itemType': 'number' },
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
      'cn-beijing': "gpdb.aliyuncs.com",
      'cn-hangzhou': "gpdb.aliyuncs.com",
      'cn-shanghai': "gpdb.aliyuncs.com",
      'cn-shenzhen': "gpdb.aliyuncs.com",
      'cn-hongkong': "gpdb.aliyuncs.com",
      'ap-southeast-1': "gpdb.aliyuncs.com",
      'us-west-1': "gpdb.aliyuncs.com",
      'us-east-1': "gpdb.aliyuncs.com",
      'cn-hangzhou-finance': "gpdb.aliyuncs.com",
      'cn-shanghai-finance-1': "gpdb.aliyuncs.com",
      'cn-shenzhen-finance-1': "gpdb.aliyuncs.com",
      'cn-qingdao': "gpdb.aliyuncs.com",
      'cn-north-2-gov-1': "gpdb.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("gpdb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
    * You can call this operation to apply for a public endpoint for an AnalyticDB for PostgreSQL instance. Both the primary and instance endpoints of an AnalyticDB for PostgreSQL instance can be public endpoints. For more information, see [Endpoints of an instance and its primary coordinator node](~~204879~~).
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request AllocateInstancePublicConnectionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AllocateInstancePublicConnectionResponse
   */
  async allocateInstancePublicConnectionWithOptions(request: AllocateInstancePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<AllocateInstancePublicConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AllocateInstancePublicConnection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AllocateInstancePublicConnectionResponse>(await this.callApi(params, req, runtime), new AllocateInstancePublicConnectionResponse({}));
  }

  /**
    * You can call this operation to apply for a public endpoint for an AnalyticDB for PostgreSQL instance. Both the primary and instance endpoints of an AnalyticDB for PostgreSQL instance can be public endpoints. For more information, see [Endpoints of an instance and its primary coordinator node](~~204879~~).
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request AllocateInstancePublicConnectionRequest
    * @return AllocateInstancePublicConnectionResponse
   */
  async allocateInstancePublicConnection(request: AllocateInstancePublicConnectionRequest): Promise<AllocateInstancePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateInstancePublicConnectionWithOptions(request, runtime);
  }

  async cancelUploadDocumentJobWithOptions(request: CancelUploadDocumentJobRequest, runtime: $Util.RuntimeOptions): Promise<CancelUploadDocumentJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.collection)) {
      body["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      body["NamespacePassword"] = request.namespacePassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelUploadDocumentJob",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelUploadDocumentJobResponse>(await this.callApi(params, req, runtime), new CancelUploadDocumentJobResponse({}));
  }

  async cancelUploadDocumentJob(request: CancelUploadDocumentJobRequest): Promise<CancelUploadDocumentJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelUploadDocumentJobWithOptions(request, runtime);
  }

  async cancelUpsertCollectionDataJobWithOptions(request: CancelUpsertCollectionDataJobRequest, runtime: $Util.RuntimeOptions): Promise<CancelUpsertCollectionDataJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.collection)) {
      body["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      body["NamespacePassword"] = request.namespacePassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelUpsertCollectionDataJob",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelUpsertCollectionDataJobResponse>(await this.callApi(params, req, runtime), new CancelUpsertCollectionDataJobResponse({}));
  }

  async cancelUpsertCollectionDataJob(request: CancelUpsertCollectionDataJobRequest): Promise<CancelUpsertCollectionDataJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelUpsertCollectionDataJobWithOptions(request, runtime);
  }

  async checkServiceLinkedRoleWithOptions(request: CheckServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CheckServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckServiceLinkedRole",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new CheckServiceLinkedRoleResponse({}));
  }

  async checkServiceLinkedRole(request: CheckServiceLinkedRoleRequest): Promise<CheckServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
    * *   Before you can use an AnalyticDB for PostgreSQL instance, you must create a privileged account for the instance.
    * *   You can call this operation to create only privileged accounts. For information about how to create other types of accounts, see [Create a database account](~~50206~~).
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request CreateAccountRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateAccountResponse
   */
  async createAccountWithOptions(request: CreateAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountDescription)) {
      query["AccountDescription"] = request.accountDescription;
    }

    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccount",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAccountResponse>(await this.callApi(params, req, runtime), new CreateAccountResponse({}));
  }

  /**
    * *   Before you can use an AnalyticDB for PostgreSQL instance, you must create a privileged account for the instance.
    * *   You can call this operation to create only privileged accounts. For information about how to create other types of accounts, see [Create a database account](~~50206~~).
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request CreateAccountRequest
    * @return CreateAccountResponse
   */
  async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  async createCollectionWithOptions(request: CreateCollectionRequest, runtime: $Util.RuntimeOptions): Promise<CreateCollectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!Util.isUnset(request.externalStorage)) {
      query["ExternalStorage"] = request.externalStorage;
    }

    if (!Util.isUnset(request.fullTextRetrievalFields)) {
      query["FullTextRetrievalFields"] = request.fullTextRetrievalFields;
    }

    if (!Util.isUnset(request.hnswM)) {
      query["HnswM"] = request.hnswM;
    }

    if (!Util.isUnset(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!Util.isUnset(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!Util.isUnset(request.metadata)) {
      query["Metadata"] = request.metadata;
    }

    if (!Util.isUnset(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parser)) {
      query["Parser"] = request.parser;
    }

    if (!Util.isUnset(request.pqEnable)) {
      query["PqEnable"] = request.pqEnable;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCollection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCollectionResponse>(await this.callApi(params, req, runtime), new CreateCollectionResponse({}));
  }

  async createCollection(request: CreateCollectionRequest): Promise<CreateCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCollectionWithOptions(request, runtime);
  }

  /**
    * You can call this operation when you need to create AnalyticDB for PostgreSQL instances to meet the requirements of new applications or services.
    * Before you call this operation, make sure that you are familiar with the billing of AnalyticDB for PostgreSQL instances. For more information, see [Billing methods](~~35406~~) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds a limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limits when you call this operation.
    *
    * @param request CreateDBInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDBInstanceResponse
   */
  async createDBInstanceWithOptions(request: CreateDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.createSampleData)) {
      query["CreateSampleData"] = request.createSampleData;
    }

    if (!Util.isUnset(request.DBInstanceCategory)) {
      query["DBInstanceCategory"] = request.DBInstanceCategory;
    }

    if (!Util.isUnset(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!Util.isUnset(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!Util.isUnset(request.DBInstanceGroupCount)) {
      query["DBInstanceGroupCount"] = request.DBInstanceGroupCount;
    }

    if (!Util.isUnset(request.DBInstanceMode)) {
      query["DBInstanceMode"] = request.DBInstanceMode;
    }

    if (!Util.isUnset(request.enableSSL)) {
      query["EnableSSL"] = request.enableSSL;
    }

    if (!Util.isUnset(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!Util.isUnset(request.encryptionType)) {
      query["EncryptionType"] = request.encryptionType;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!Util.isUnset(request.idleTime)) {
      query["IdleTime"] = request.idleTime;
    }

    if (!Util.isUnset(request.instanceNetworkType)) {
      query["InstanceNetworkType"] = request.instanceNetworkType;
    }

    if (!Util.isUnset(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!Util.isUnset(request.masterCU)) {
      query["MasterCU"] = request.masterCU;
    }

    if (!Util.isUnset(request.masterNodeNum)) {
      query["MasterNodeNum"] = request.masterNodeNum;
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

    if (!Util.isUnset(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!Util.isUnset(request.prodType)) {
      query["ProdType"] = request.prodType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!Util.isUnset(request.segDiskPerformanceLevel)) {
      query["SegDiskPerformanceLevel"] = request.segDiskPerformanceLevel;
    }

    if (!Util.isUnset(request.segNodeNum)) {
      query["SegNodeNum"] = request.segNodeNum;
    }

    if (!Util.isUnset(request.segStorageType)) {
      query["SegStorageType"] = request.segStorageType;
    }

    if (!Util.isUnset(request.serverlessMode)) {
      query["ServerlessMode"] = request.serverlessMode;
    }

    if (!Util.isUnset(request.serverlessResource)) {
      query["ServerlessResource"] = request.serverlessResource;
    }

    if (!Util.isUnset(request.srcDbInstanceName)) {
      query["SrcDbInstanceName"] = request.srcDbInstanceName;
    }

    if (!Util.isUnset(request.storageSize)) {
      query["StorageSize"] = request.storageSize;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!Util.isUnset(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vectorConfigurationStatus)) {
      query["VectorConfigurationStatus"] = request.vectorConfigurationStatus;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDBInstance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBInstanceResponse>(await this.callApi(params, req, runtime), new CreateDBInstanceResponse({}));
  }

  /**
    * You can call this operation when you need to create AnalyticDB for PostgreSQL instances to meet the requirements of new applications or services.
    * Before you call this operation, make sure that you are familiar with the billing of AnalyticDB for PostgreSQL instances. For more information, see [Billing methods](~~35406~~) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds a limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limits when you call this operation.
    *
    * @param request CreateDBInstanceRequest
    * @return CreateDBInstanceResponse
   */
  async createDBInstance(request: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  /**
    * *   The plan management feature is supported only for pay-as-you-go instances.
    * *   When you change the compute node specifications or change the number of compute nodes, transient connections may occur. We recommend that you perform these operations during off-peak hours.
    * Before you call this operation, make sure that you are familiar with the billing of AnalyticDB for PostgreSQL. For more information, see [Billing methods](~~35406~~) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
    *
    * @param request CreateDBInstancePlanRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDBInstancePlanResponse
   */
  async createDBInstancePlanWithOptions(request: CreateDBInstancePlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBInstancePlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.planConfig)) {
      query["PlanConfig"] = request.planConfig;
    }

    if (!Util.isUnset(request.planDesc)) {
      query["PlanDesc"] = request.planDesc;
    }

    if (!Util.isUnset(request.planEndDate)) {
      query["PlanEndDate"] = request.planEndDate;
    }

    if (!Util.isUnset(request.planName)) {
      query["PlanName"] = request.planName;
    }

    if (!Util.isUnset(request.planScheduleType)) {
      query["PlanScheduleType"] = request.planScheduleType;
    }

    if (!Util.isUnset(request.planStartDate)) {
      query["PlanStartDate"] = request.planStartDate;
    }

    if (!Util.isUnset(request.planType)) {
      query["PlanType"] = request.planType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDBInstancePlan",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBInstancePlanResponse>(await this.callApi(params, req, runtime), new CreateDBInstancePlanResponse({}));
  }

  /**
    * *   The plan management feature is supported only for pay-as-you-go instances.
    * *   When you change the compute node specifications or change the number of compute nodes, transient connections may occur. We recommend that you perform these operations during off-peak hours.
    * Before you call this operation, make sure that you are familiar with the billing of AnalyticDB for PostgreSQL. For more information, see [Billing methods](~~35406~~) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
    *
    * @param request CreateDBInstancePlanRequest
    * @return CreateDBInstancePlanResponse
   */
  async createDBInstancePlan(request: CreateDBInstancePlanRequest): Promise<CreateDBInstancePlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBInstancePlanWithOptions(request, runtime);
  }

  async createDocumentCollectionWithOptions(request: CreateDocumentCollectionRequest, runtime: $Util.RuntimeOptions): Promise<CreateDocumentCollectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.embeddingModel)) {
      query["EmbeddingModel"] = request.embeddingModel;
    }

    if (!Util.isUnset(request.externalStorage)) {
      query["ExternalStorage"] = request.externalStorage;
    }

    if (!Util.isUnset(request.fullTextRetrievalFields)) {
      query["FullTextRetrievalFields"] = request.fullTextRetrievalFields;
    }

    if (!Util.isUnset(request.hnswM)) {
      query["HnswM"] = request.hnswM;
    }

    if (!Util.isUnset(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!Util.isUnset(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!Util.isUnset(request.metadata)) {
      query["Metadata"] = request.metadata;
    }

    if (!Util.isUnset(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parser)) {
      query["Parser"] = request.parser;
    }

    if (!Util.isUnset(request.pqEnable)) {
      query["PqEnable"] = request.pqEnable;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDocumentCollection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDocumentCollectionResponse>(await this.callApi(params, req, runtime), new CreateDocumentCollectionResponse({}));
  }

  async createDocumentCollection(request: CreateDocumentCollectionRequest): Promise<CreateDocumentCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDocumentCollectionWithOptions(request, runtime);
  }

  async createNamespaceWithOptions(request: CreateNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!Util.isUnset(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNamespace",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNamespaceResponse>(await this.callApi(params, req, runtime), new CreateNamespaceResponse({}));
  }

  async createNamespace(request: CreateNamespaceRequest): Promise<CreateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNamespaceWithOptions(request, runtime);
  }

  /**
    * You can call this operation to load a sample dataset to an AnalyticDB for PostgreSQL instance. Then, you can execute query statements on the sample dataset to experience or test your instance. For more information about query statements, see [Dataset information and query examples](~~452277~~).
    * ## Precautions
    * - If your instance is in elastic storage mode, the sample dataset is supported only for V6.3.10.3 or later. If your instance is in Serverless mode, the sample dataset is supported only for V1.0.4.0 or later. For more information about how to update the minor engine version of an instance, see [Update the minor engine version](/help/en/analyticdb-for-postgresql/latest/upgrade-the-engine-version).
    * - The sample dataset is about 10 GB in size. Make sure that your instance has sufficient storage space.
    * - The sample dataset contains a database named `ADB_SampleData_TPCH`. Make sure that your instance does not have a database with the same name. Otherwise, the dataset may fail to be loaded.
    * - It may take 6 to 8 minutes to load the sample dataset. During this period, operations on your instance such as adding nodes or changing node specifications may be affected.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request CreateSampleDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateSampleDataResponse
   */
  async createSampleDataWithOptions(request: CreateSampleDataRequest, runtime: $Util.RuntimeOptions): Promise<CreateSampleDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSampleData",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSampleDataResponse>(await this.callApi(params, req, runtime), new CreateSampleDataResponse({}));
  }

  /**
    * You can call this operation to load a sample dataset to an AnalyticDB for PostgreSQL instance. Then, you can execute query statements on the sample dataset to experience or test your instance. For more information about query statements, see [Dataset information and query examples](~~452277~~).
    * ## Precautions
    * - If your instance is in elastic storage mode, the sample dataset is supported only for V6.3.10.3 or later. If your instance is in Serverless mode, the sample dataset is supported only for V1.0.4.0 or later. For more information about how to update the minor engine version of an instance, see [Update the minor engine version](/help/en/analyticdb-for-postgresql/latest/upgrade-the-engine-version).
    * - The sample dataset is about 10 GB in size. Make sure that your instance has sufficient storage space.
    * - The sample dataset contains a database named `ADB_SampleData_TPCH`. Make sure that your instance does not have a database with the same name. Otherwise, the dataset may fail to be loaded.
    * - It may take 6 to 8 minutes to load the sample dataset. During this period, operations on your instance such as adding nodes or changing node specifications may be affected.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request CreateSampleDataRequest
    * @return CreateSampleDataResponse
   */
  async createSampleData(request: CreateSampleDataRequest): Promise<CreateSampleDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSampleDataWithOptions(request, runtime);
  }

  async createServiceLinkedRoleWithOptions(request: CreateServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceLinkedRole",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new CreateServiceLinkedRoleResponse({}));
  }

  async createServiceLinkedRole(request: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  async createVectorIndexWithOptions(request: CreateVectorIndexRequest, runtime: $Util.RuntimeOptions): Promise<CreateVectorIndexResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!Util.isUnset(request.externalStorage)) {
      query["ExternalStorage"] = request.externalStorage;
    }

    if (!Util.isUnset(request.hnswM)) {
      query["HnswM"] = request.hnswM;
    }

    if (!Util.isUnset(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!Util.isUnset(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!Util.isUnset(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pqEnable)) {
      query["PqEnable"] = request.pqEnable;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVectorIndex",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVectorIndexResponse>(await this.callApi(params, req, runtime), new CreateVectorIndexResponse({}));
  }

  async createVectorIndex(request: CreateVectorIndexRequest): Promise<CreateVectorIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVectorIndexWithOptions(request, runtime);
  }

  async deleteCollectionWithOptions(request: DeleteCollectionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCollectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCollection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCollectionResponse>(await this.callApi(params, req, runtime), new DeleteCollectionResponse({}));
  }

  async deleteCollection(request: DeleteCollectionRequest): Promise<DeleteCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCollectionWithOptions(request, runtime);
  }

  async deleteCollectionDataWithOptions(request: DeleteCollectionDataRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCollectionDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.collectionData)) {
      query["CollectionData"] = request.collectionData;
    }

    if (!Util.isUnset(request.collectionDataFilter)) {
      query["CollectionDataFilter"] = request.collectionDataFilter;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCollectionData",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCollectionDataResponse>(await this.callApi(params, req, runtime), new DeleteCollectionDataResponse({}));
  }

  async deleteCollectionData(request: DeleteCollectionDataRequest): Promise<DeleteCollectionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCollectionDataWithOptions(request, runtime);
  }

  /**
    * *   Subscription instances cannot be manually released. They are automatically released when they expire.
    * *   You can call this operation to release pay-as-you-go instances only when they are in the **Running** state.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DeleteDBInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDBInstanceResponse
   */
  async deleteDBInstanceWithOptions(request: DeleteDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDBInstance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDBInstanceResponse>(await this.callApi(params, req, runtime), new DeleteDBInstanceResponse({}));
  }

  /**
    * *   Subscription instances cannot be manually released. They are automatically released when they expire.
    * *   You can call this operation to release pay-as-you-go instances only when they are in the **Running** state.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DeleteDBInstanceRequest
    * @return DeleteDBInstanceResponse
   */
  async deleteDBInstance(request: DeleteDBInstanceRequest): Promise<DeleteDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBInstanceWithOptions(request, runtime);
  }

  /**
    * If you no longer need a plan, you can call this operation to delete the plan. The plan management feature is supported only for AnalyticDB for PostgreSQL instances in Serverless mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DeleteDBInstancePlanRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDBInstancePlanResponse
   */
  async deleteDBInstancePlanWithOptions(request: DeleteDBInstancePlanRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBInstancePlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDBInstancePlan",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDBInstancePlanResponse>(await this.callApi(params, req, runtime), new DeleteDBInstancePlanResponse({}));
  }

  /**
    * If you no longer need a plan, you can call this operation to delete the plan. The plan management feature is supported only for AnalyticDB for PostgreSQL instances in Serverless mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DeleteDBInstancePlanRequest
    * @return DeleteDBInstancePlanResponse
   */
  async deleteDBInstancePlan(request: DeleteDBInstancePlanRequest): Promise<DeleteDBInstancePlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBInstancePlanWithOptions(request, runtime);
  }

  async deleteDocumentWithOptions(request: DeleteDocumentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDocumentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDocument",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDocumentResponse>(await this.callApi(params, req, runtime), new DeleteDocumentResponse({}));
  }

  async deleteDocument(request: DeleteDocumentRequest): Promise<DeleteDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDocumentWithOptions(request, runtime);
  }

  async deleteDocumentCollectionWithOptions(request: DeleteDocumentCollectionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDocumentCollectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDocumentCollection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDocumentCollectionResponse>(await this.callApi(params, req, runtime), new DeleteDocumentCollectionResponse({}));
  }

  async deleteDocumentCollection(request: DeleteDocumentCollectionRequest): Promise<DeleteDocumentCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDocumentCollectionWithOptions(request, runtime);
  }

  async deleteNamespaceWithOptions(request: DeleteNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!Util.isUnset(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNamespace",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNamespaceResponse>(await this.callApi(params, req, runtime), new DeleteNamespaceResponse({}));
  }

  async deleteNamespace(request: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNamespaceWithOptions(request, runtime);
  }

  async deleteVectorIndexWithOptions(request: DeleteVectorIndexRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVectorIndexResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!Util.isUnset(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVectorIndex",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVectorIndexResponse>(await this.callApi(params, req, runtime), new DeleteVectorIndexResponse({}));
  }

  async deleteVectorIndex(request: DeleteVectorIndexRequest): Promise<DeleteVectorIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVectorIndexWithOptions(request, runtime);
  }

  /**
    * This operation is called to query the information of the privileged account in an AnalyticDB for PostgreSQL instance, such as its state, description, and the instance.
    * ## Limit
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeAccountsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeAccountsResponse
   */
  async describeAccountsWithOptions(request: DescribeAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccounts",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccountsResponse>(await this.callApi(params, req, runtime), new DescribeAccountsResponse({}));
  }

  /**
    * This operation is called to query the information of the privileged account in an AnalyticDB for PostgreSQL instance, such as its state, description, and the instance.
    * ## Limit
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeAccountsRequest
    * @return DescribeAccountsResponse
   */
  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  async describeActiveSQLRecordsWithOptions(request: DescribeActiveSQLRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeActiveSQLRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.maxDuration)) {
      query["MaxDuration"] = request.maxDuration;
    }

    if (!Util.isUnset(request.minDuration)) {
      query["MinDuration"] = request.minDuration;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeActiveSQLRecords",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeActiveSQLRecordsResponse>(await this.callApi(params, req, runtime), new DescribeActiveSQLRecordsResponse({}));
  }

  async describeActiveSQLRecords(request: DescribeActiveSQLRecordsRequest): Promise<DescribeActiveSQLRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActiveSQLRecordsWithOptions(request, runtime);
  }

  /**
    * When you create an AnalyticDB for PostgreSQL instance, you can call this operation to query the available resources within a zone.
    *
    * @param request DescribeAvailableResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeAvailableResourcesResponse
   */
  async describeAvailableResourcesWithOptions(request: DescribeAvailableResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableResources",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableResourcesResponse>(await this.callApi(params, req, runtime), new DescribeAvailableResourcesResponse({}));
  }

  /**
    * When you create an AnalyticDB for PostgreSQL instance, you can call this operation to query the available resources within a zone.
    *
    * @param request DescribeAvailableResourcesRequest
    * @return DescribeAvailableResourcesResponse
   */
  async describeAvailableResources(request: DescribeAvailableResourcesRequest): Promise<DescribeAvailableResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourcesWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the backup settings of an AnalyticDB for PostgreSQL instance in elastic storage mode. Periodically backing data can prevent data loss. For more information about how to modify backup policies, see [ModifyBackupPolicy](~~210095~~).
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeBackupPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupPolicy",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupPolicyResponse>(await this.callApi(params, req, runtime), new DescribeBackupPolicyResponse({}));
  }

  /**
    * You can call this operation to query the backup settings of an AnalyticDB for PostgreSQL instance in elastic storage mode. Periodically backing data can prevent data loss. For more information about how to modify backup policies, see [ModifyBackupPolicy](~~210095~~).
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeBackupPolicyRequest
    * @return DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  async describeCollectionWithOptions(request: DescribeCollectionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCollectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCollection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCollectionResponse>(await this.callApi(params, req, runtime), new DescribeCollectionResponse({}));
  }

  async describeCollection(request: DescribeCollectionRequest): Promise<DescribeCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCollectionWithOptions(request, runtime);
  }

  /**
    * ##
    * You can call this operation to query the information about coordinator and compute nodes in an AnalyticDB for PostgreSQL instance in elastic storage mode or Serverless mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDBClusterNodeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDBClusterNodeResponse
   */
  async describeDBClusterNodeWithOptions(request: DescribeDBClusterNodeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.nodeType)) {
      query["NodeType"] = request.nodeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterNode",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterNodeResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterNodeResponse({}));
  }

  /**
    * ##
    * You can call this operation to query the information about coordinator and compute nodes in an AnalyticDB for PostgreSQL instance in elastic storage mode or Serverless mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDBClusterNodeRequest
    * @return DescribeDBClusterNodeResponse
   */
  async describeDBClusterNode(request: DescribeDBClusterNodeRequest): Promise<DescribeDBClusterNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterNodeWithOptions(request, runtime);
  }

  /**
    * You can query monitoring information only within the last 30 days.
    *
    * @param request DescribeDBClusterPerformanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDBClusterPerformanceResponse
   */
  async describeDBClusterPerformanceWithOptions(request: DescribeDBClusterPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterPerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.nodeType)) {
      query["NodeType"] = request.nodeType;
    }

    if (!Util.isUnset(request.nodes)) {
      query["Nodes"] = request.nodes;
    }

    if (!Util.isUnset(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterPerformance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterPerformanceResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterPerformanceResponse({}));
  }

  /**
    * You can query monitoring information only within the last 30 days.
    *
    * @param request DescribeDBClusterPerformanceRequest
    * @return DescribeDBClusterPerformanceResponse
   */
  async describeDBClusterPerformance(request: DescribeDBClusterPerformanceRequest): Promise<DescribeDBClusterPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterPerformanceWithOptions(request, runtime);
  }

  /**
    * ##
    * You can call this operation to query the information about an AnalyticDB for PostgreSQL instance, such as the instance type, network type, and instance state.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDBInstanceAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttributeWithOptions(request: DescribeDBInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceAttribute",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceAttributeResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceAttributeResponse({}));
  }

  /**
    * ##
    * You can call this operation to query the information about an AnalyticDB for PostgreSQL instance, such as the instance type, network type, and instance state.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDBInstanceAttributeRequest
    * @return DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttribute(request: DescribeDBInstanceAttributeRequest): Promise<DescribeDBInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceAttributeWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the details of data bloat on an AnalyticDB for PostgreSQL instance in elastic storage mode. The minor version of the instance must be V6.3.10.1 or later. For more information about how to view and update the minor version of an instance, see [View the minor engine version](~~277424~~) and [Update the minor engine version](~~139271~~).
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDBInstanceDataBloatRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDBInstanceDataBloatResponse
   */
  async describeDBInstanceDataBloatWithOptions(request: DescribeDBInstanceDataBloatRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceDataBloatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceDataBloat",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceDataBloatResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceDataBloatResponse({}));
  }

  /**
    * You can call this operation to query the details of data bloat on an AnalyticDB for PostgreSQL instance in elastic storage mode. The minor version of the instance must be V6.3.10.1 or later. For more information about how to view and update the minor version of an instance, see [View the minor engine version](~~277424~~) and [Update the minor engine version](~~139271~~).
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDBInstanceDataBloatRequest
    * @return DescribeDBInstanceDataBloatResponse
   */
  async describeDBInstanceDataBloat(request: DescribeDBInstanceDataBloatRequest): Promise<DescribeDBInstanceDataBloatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceDataBloatWithOptions(request, runtime);
  }

  /**
    * To prevent data skew from affecting your database service, you can call this operation to query the details about data skew on an AnalyticDB for PostgreSQL instance.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDBInstanceDataSkewRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDBInstanceDataSkewResponse
   */
  async describeDBInstanceDataSkewWithOptions(request: DescribeDBInstanceDataSkewRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceDataSkewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceDataSkew",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceDataSkewResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceDataSkewResponse({}));
  }

  /**
    * To prevent data skew from affecting your database service, you can call this operation to query the details about data skew on an AnalyticDB for PostgreSQL instance.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDBInstanceDataSkewRequest
    * @return DescribeDBInstanceDataSkewResponse
   */
  async describeDBInstanceDataSkew(request: DescribeDBInstanceDataSkewRequest): Promise<DescribeDBInstanceDataSkewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceDataSkewWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the distribution and states of coordinator and compute nodes in an AnalyticDB for PostgreSQL instance.
    *
    * @param request DescribeDBInstanceDiagnosisSummaryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDBInstanceDiagnosisSummaryResponse
   */
  async describeDBInstanceDiagnosisSummaryWithOptions(request: DescribeDBInstanceDiagnosisSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceDiagnosisSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.rolePreferd)) {
      query["RolePreferd"] = request.rolePreferd;
    }

    if (!Util.isUnset(request.startStatus)) {
      query["StartStatus"] = request.startStatus;
    }

    if (!Util.isUnset(request.syncMode)) {
      query["SyncMode"] = request.syncMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceDiagnosisSummary",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceDiagnosisSummaryResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceDiagnosisSummaryResponse({}));
  }

  /**
    * You can call this operation to query the distribution and states of coordinator and compute nodes in an AnalyticDB for PostgreSQL instance.
    *
    * @param request DescribeDBInstanceDiagnosisSummaryRequest
    * @return DescribeDBInstanceDiagnosisSummaryResponse
   */
  async describeDBInstanceDiagnosisSummary(request: DescribeDBInstanceDiagnosisSummaryRequest): Promise<DescribeDBInstanceDiagnosisSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceDiagnosisSummaryWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the error logs of an AnalyticDB for PostgreSQL instance.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDBInstanceErrorLogRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDBInstanceErrorLogResponse
   */
  async describeDBInstanceErrorLogWithOptions(request: DescribeDBInstanceErrorLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceErrorLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.host)) {
      query["Host"] = request.host;
    }

    if (!Util.isUnset(request.keywords)) {
      query["Keywords"] = request.keywords;
    }

    if (!Util.isUnset(request.logLevel)) {
      query["LogLevel"] = request.logLevel;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceErrorLog",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceErrorLogResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceErrorLogResponse({}));
  }

  /**
    * You can call this operation to query the error logs of an AnalyticDB for PostgreSQL instance.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDBInstanceErrorLogRequest
    * @return DescribeDBInstanceErrorLogResponse
   */
  async describeDBInstanceErrorLog(request: DescribeDBInstanceErrorLogRequest): Promise<DescribeDBInstanceErrorLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceErrorLogWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the whitelists of IP addresses that are allowed to access an AnalyticDB for PostgreSQL instance.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDBInstanceIPArrayListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDBInstanceIPArrayListResponse
   */
  async describeDBInstanceIPArrayListWithOptions(request: DescribeDBInstanceIPArrayListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceIPArrayListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceIPArrayName)) {
      query["DBInstanceIPArrayName"] = request.DBInstanceIPArrayName;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceIPArrayList",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceIPArrayListResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceIPArrayListResponse({}));
  }

  /**
    * You can call this operation to query the whitelists of IP addresses that are allowed to access an AnalyticDB for PostgreSQL instance.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDBInstanceIPArrayListRequest
    * @return DescribeDBInstanceIPArrayListResponse
   */
  async describeDBInstanceIPArrayList(request: DescribeDBInstanceIPArrayListRequest): Promise<DescribeDBInstanceIPArrayListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceIPArrayListWithOptions(request, runtime);
  }

  /**
    * Appropriate indexes can accelerate database queries. You can call this operation to query the index usage of an AnalyticDB for PostgreSQL instance.
    * This operation is available only for instances of V6.3.10.1 or later in elastic storage mode. For information about how to view and update the minor version of an instance, see [View the minor engine version](~~277424~~) and [Update the minor engine version](~~139271~~).
    *
    * @param request DescribeDBInstanceIndexUsageRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDBInstanceIndexUsageResponse
   */
  async describeDBInstanceIndexUsageWithOptions(request: DescribeDBInstanceIndexUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceIndexUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceIndexUsage",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceIndexUsageResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceIndexUsageResponse({}));
  }

  /**
    * Appropriate indexes can accelerate database queries. You can call this operation to query the index usage of an AnalyticDB for PostgreSQL instance.
    * This operation is available only for instances of V6.3.10.1 or later in elastic storage mode. For information about how to view and update the minor version of an instance, see [View the minor engine version](~~277424~~) and [Update the minor engine version](~~139271~~).
    *
    * @param request DescribeDBInstanceIndexUsageRequest
    * @return DescribeDBInstanceIndexUsageResponse
   */
  async describeDBInstanceIndexUsage(request: DescribeDBInstanceIndexUsageRequest): Promise<DescribeDBInstanceIndexUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceIndexUsageWithOptions(request, runtime);
  }

  async describeDBInstanceNetInfoWithOptions(request: DescribeDBInstanceNetInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceNetInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceNetInfo",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceNetInfoResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceNetInfoResponse({}));
  }

  async describeDBInstanceNetInfo(request: DescribeDBInstanceNetInfoRequest): Promise<DescribeDBInstanceNetInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceNetInfoWithOptions(request, runtime);
  }

  async describeDBInstancePerformanceWithOptions(request: DescribeDBInstancePerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancePerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstancePerformance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstancePerformanceResponse>(await this.callApi(params, req, runtime), new DescribeDBInstancePerformanceResponse({}));
  }

  async describeDBInstancePerformance(request: DescribeDBInstancePerformanceRequest): Promise<DescribeDBInstancePerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancePerformanceWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the details of plans for an AnalyticDB for PostgreSQL instance in Serverless mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDBInstancePlansRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDBInstancePlansResponse
   */
  async describeDBInstancePlansWithOptions(request: DescribeDBInstancePlansRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancePlansResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.planCreateDate)) {
      query["PlanCreateDate"] = request.planCreateDate;
    }

    if (!Util.isUnset(request.planDesc)) {
      query["PlanDesc"] = request.planDesc;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.planScheduleType)) {
      query["PlanScheduleType"] = request.planScheduleType;
    }

    if (!Util.isUnset(request.planType)) {
      query["PlanType"] = request.planType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstancePlans",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstancePlansResponse>(await this.callApi(params, req, runtime), new DescribeDBInstancePlansResponse({}));
  }

  /**
    * You can call this operation to query the details of plans for an AnalyticDB for PostgreSQL instance in Serverless mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDBInstancePlansRequest
    * @return DescribeDBInstancePlansResponse
   */
  async describeDBInstancePlans(request: DescribeDBInstancePlansRequest): Promise<DescribeDBInstancePlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancePlansWithOptions(request, runtime);
  }

  async describeDBInstanceSSLWithOptions(request: DescribeDBInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceSSLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceSSL",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceSSLResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceSSLResponse({}));
  }

  async describeDBInstanceSSL(request: DescribeDBInstanceSSLRequest): Promise<DescribeDBInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceSSLWithOptions(request, runtime);
  }

  async describeDBInstanceSupportMaxPerformanceWithOptions(request: DescribeDBInstanceSupportMaxPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceSupportMaxPerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceSupportMaxPerformance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceSupportMaxPerformanceResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceSupportMaxPerformanceResponse({}));
  }

  async describeDBInstanceSupportMaxPerformance(request: DescribeDBInstanceSupportMaxPerformanceRequest): Promise<DescribeDBInstanceSupportMaxPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceSupportMaxPerformanceWithOptions(request, runtime);
  }

  /**
    * ##
    * You can call this operation to query the instance types, network types, and states of AnalyticDB for PostgreSQL instances within a region.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param tmpReq DescribeDBInstancesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDBInstancesResponse
   */
  async describeDBInstancesWithOptions(tmpReq: DescribeDBInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeDBInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.DBInstanceCategories)) {
      request.DBInstanceCategoriesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBInstanceCategories, "DBInstanceCategories", "simple");
    }

    if (!Util.isUnset(tmpReq.DBInstanceModes)) {
      request.DBInstanceModesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBInstanceModes, "DBInstanceModes", "simple");
    }

    if (!Util.isUnset(tmpReq.DBInstanceStatuses)) {
      request.DBInstanceStatusesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBInstanceStatuses, "DBInstanceStatuses", "simple");
    }

    if (!Util.isUnset(tmpReq.instanceDeployTypes)) {
      request.instanceDeployTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceDeployTypes, "InstanceDeployTypes", "simple");
    }

    let query = { };
    if (!Util.isUnset(request.DBInstanceCategoriesShrink)) {
      query["DBInstanceCategories"] = request.DBInstanceCategoriesShrink;
    }

    if (!Util.isUnset(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!Util.isUnset(request.DBInstanceIds)) {
      query["DBInstanceIds"] = request.DBInstanceIds;
    }

    if (!Util.isUnset(request.DBInstanceModesShrink)) {
      query["DBInstanceModes"] = request.DBInstanceModesShrink;
    }

    if (!Util.isUnset(request.DBInstanceStatusesShrink)) {
      query["DBInstanceStatuses"] = request.DBInstanceStatusesShrink;
    }

    if (!Util.isUnset(request.instanceDeployTypesShrink)) {
      query["InstanceDeployTypes"] = request.instanceDeployTypesShrink;
    }

    if (!Util.isUnset(request.instanceNetworkType)) {
      query["InstanceNetworkType"] = request.instanceNetworkType;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstances",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDBInstancesResponse({}));
  }

  /**
    * ##
    * You can call this operation to query the instance types, network types, and states of AnalyticDB for PostgreSQL instances within a region.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDBInstancesRequest
    * @return DescribeDBInstancesResponse
   */
  async describeDBInstances(request: DescribeDBInstancesRequest): Promise<DescribeDBInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancesWithOptions(request, runtime);
  }

  async describeDBVersionInfosWithOptions(request: DescribeDBVersionInfosRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBVersionInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceMode)) {
      query["DBInstanceMode"] = request.DBInstanceMode;
    }

    if (!Util.isUnset(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
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
      action: "DescribeDBVersionInfos",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBVersionInfosResponse>(await this.callApi(params, req, runtime), new DescribeDBVersionInfosResponse({}));
  }

  async describeDBVersionInfos(request: DescribeDBVersionInfosRequest): Promise<DescribeDBVersionInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBVersionInfosWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query a list of backup sets and backup details only for instances in elastic storage mode.
    *
    * @param request DescribeDataBackupsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDataBackupsResponse
   */
  async describeDataBackupsWithOptions(request: DescribeDataBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataBackupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!Util.isUnset(request.backupStatus)) {
      query["BackupStatus"] = request.backupStatus;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataBackups",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataBackupsResponse>(await this.callApi(params, req, runtime), new DescribeDataBackupsResponse({}));
  }

  /**
    * You can call this operation to query a list of backup sets and backup details only for instances in elastic storage mode.
    *
    * @param request DescribeDataBackupsRequest
    * @return DescribeDataBackupsResponse
   */
  async describeDataBackups(request: DescribeDataBackupsRequest): Promise<DescribeDataBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataBackupsWithOptions(request, runtime);
  }

  async describeDataReDistributeInfoWithOptions(request: DescribeDataReDistributeInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataReDistributeInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataReDistributeInfo",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataReDistributeInfoResponse>(await this.callApi(params, req, runtime), new DescribeDataReDistributeInfoResponse({}));
  }

  async describeDataReDistributeInfo(request: DescribeDataReDistributeInfoRequest): Promise<DescribeDataReDistributeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataReDistributeInfoWithOptions(request, runtime);
  }

  /**
    * Data sharing is supported only for instances in Serverless mode.
    *
    * @param request DescribeDataShareInstancesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDataShareInstancesResponse
   */
  async describeDataShareInstancesWithOptions(request: DescribeDataShareInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataShareInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.searchValue)) {
      query["SearchValue"] = request.searchValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataShareInstances",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataShareInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDataShareInstancesResponse({}));
  }

  /**
    * Data sharing is supported only for instances in Serverless mode.
    *
    * @param request DescribeDataShareInstancesRequest
    * @return DescribeDataShareInstancesResponse
   */
  async describeDataShareInstances(request: DescribeDataShareInstancesRequest): Promise<DescribeDataShareInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataShareInstancesWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the details of data sharing performance metrics for an AnalyticDB for PostgreSQL instance in Serverless mode, such as the number of shared topics and the amount of data shared.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDataSharePerformanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDataSharePerformanceResponse
   */
  async describeDataSharePerformanceWithOptions(request: DescribeDataSharePerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataSharePerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataSharePerformance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataSharePerformanceResponse>(await this.callApi(params, req, runtime), new DescribeDataSharePerformanceResponse({}));
  }

  /**
    * You can call this operation to query the details of data sharing performance metrics for an AnalyticDB for PostgreSQL instance in Serverless mode, such as the number of shared topics and the amount of data shared.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDataSharePerformanceRequest
    * @return DescribeDataSharePerformanceResponse
   */
  async describeDataSharePerformance(request: DescribeDataSharePerformanceRequest): Promise<DescribeDataSharePerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataSharePerformanceWithOptions(request, runtime);
  }

  /**
    * To facilitate management, you can call this operation to query all databases and database accounts on an AnalyticDB for PostgreSQL instance.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDiagnosisDimensionsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDiagnosisDimensionsResponse
   */
  async describeDiagnosisDimensionsWithOptions(request: DescribeDiagnosisDimensionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosisDimensionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiagnosisDimensions",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiagnosisDimensionsResponse>(await this.callApi(params, req, runtime), new DescribeDiagnosisDimensionsResponse({}));
  }

  /**
    * To facilitate management, you can call this operation to query all databases and database accounts on an AnalyticDB for PostgreSQL instance.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDiagnosisDimensionsRequest
    * @return DescribeDiagnosisDimensionsResponse
   */
  async describeDiagnosisDimensions(request: DescribeDiagnosisDimensionsRequest): Promise<DescribeDiagnosisDimensionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisDimensionsWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the details of query execution on an AnalyticDB for PostgreSQL instance in elastic storage mode within a specified time range.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDiagnosisMonitorPerformanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDiagnosisMonitorPerformanceResponse
   */
  async describeDiagnosisMonitorPerformanceWithOptions(request: DescribeDiagnosisMonitorPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosisMonitorPerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiagnosisMonitorPerformance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiagnosisMonitorPerformanceResponse>(await this.callApi(params, req, runtime), new DescribeDiagnosisMonitorPerformanceResponse({}));
  }

  /**
    * You can call this operation to query the details of query execution on an AnalyticDB for PostgreSQL instance in elastic storage mode within a specified time range.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDiagnosisMonitorPerformanceRequest
    * @return DescribeDiagnosisMonitorPerformanceResponse
   */
  async describeDiagnosisMonitorPerformance(request: DescribeDiagnosisMonitorPerformanceRequest): Promise<DescribeDiagnosisMonitorPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisMonitorPerformanceWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the details of SQL queries on an AnalyticDB for PostgreSQL instance within a specified time range.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDiagnosisRecordsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDiagnosisRecordsResponse
   */
  async describeDiagnosisRecordsWithOptions(request: DescribeDiagnosisRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosisRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiagnosisRecords",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiagnosisRecordsResponse>(await this.callApi(params, req, runtime), new DescribeDiagnosisRecordsResponse({}));
  }

  /**
    * You can call this operation to query the details of SQL queries on an AnalyticDB for PostgreSQL instance within a specified time range.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDiagnosisRecordsRequest
    * @return DescribeDiagnosisRecordsResponse
   */
  async describeDiagnosisRecords(request: DescribeDiagnosisRecordsRequest): Promise<DescribeDiagnosisRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisRecordsWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the information about a query for an AnalyticDB for PostgreSQL instance, including the SQL statement, execution plan text, and execution plan tree.
    * This operation is available only for instances of V6.3.10.1 or later in elastic storage mode. For information about how to view and update the minor version of an instance, see [View the minor engine version](~~277424~~) and [Update the minor engine version](~~139271~~).
    *
    * @param request DescribeDiagnosisSQLInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDiagnosisSQLInfoResponse
   */
  async describeDiagnosisSQLInfoWithOptions(request: DescribeDiagnosisSQLInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosisSQLInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.queryID)) {
      query["QueryID"] = request.queryID;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiagnosisSQLInfo",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiagnosisSQLInfoResponse>(await this.callApi(params, req, runtime), new DescribeDiagnosisSQLInfoResponse({}));
  }

  /**
    * You can call this operation to query the information about a query for an AnalyticDB for PostgreSQL instance, including the SQL statement, execution plan text, and execution plan tree.
    * This operation is available only for instances of V6.3.10.1 or later in elastic storage mode. For information about how to view and update the minor version of an instance, see [View the minor engine version](~~277424~~) and [Update the minor engine version](~~139271~~).
    *
    * @param request DescribeDiagnosisSQLInfoRequest
    * @return DescribeDiagnosisSQLInfoResponse
   */
  async describeDiagnosisSQLInfo(request: DescribeDiagnosisSQLInfoRequest): Promise<DescribeDiagnosisSQLInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisSQLInfoWithOptions(request, runtime);
  }

  async describeDocumentWithOptions(request: DescribeDocumentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDocumentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDocument",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDocumentResponse>(await this.callApi(params, req, runtime), new DescribeDocumentResponse({}));
  }

  async describeDocument(request: DescribeDocumentRequest): Promise<DescribeDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDocumentWithOptions(request, runtime);
  }

  /**
    * You must call the [DownloadDiagnosisRecords](~~447700~~) operation to download the query diagnostic information before you can call this operation to query the download records and download URLs.
    * This operation is available only for instances of V6.3.10.1 or later in elastic storage mode. For information about how to view and update the minor version of an instance, see [View the minor engine version](~~277424~~) and [Update the minor engine version](~~139271~~).
    *
    * @param request DescribeDownloadRecordsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDownloadRecordsResponse
   */
  async describeDownloadRecordsWithOptions(request: DescribeDownloadRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDownloadRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDownloadRecords",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDownloadRecordsResponse>(await this.callApi(params, req, runtime), new DescribeDownloadRecordsResponse({}));
  }

  /**
    * You must call the [DownloadDiagnosisRecords](~~447700~~) operation to download the query diagnostic information before you can call this operation to query the download records and download URLs.
    * This operation is available only for instances of V6.3.10.1 or later in elastic storage mode. For information about how to view and update the minor version of an instance, see [View the minor engine version](~~277424~~) and [Update the minor engine version](~~139271~~).
    *
    * @param request DescribeDownloadRecordsRequest
    * @return DescribeDownloadRecordsResponse
   */
  async describeDownloadRecords(request: DescribeDownloadRecordsRequest): Promise<DescribeDownloadRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDownloadRecordsWithOptions(request, runtime);
  }

  async describeDownloadSQLLogsWithOptions(request: DescribeDownloadSQLLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDownloadSQLLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDownloadSQLLogs",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDownloadSQLLogsResponse>(await this.callApi(params, req, runtime), new DescribeDownloadSQLLogsResponse({}));
  }

  async describeDownloadSQLLogs(request: DescribeDownloadSQLLogsRequest): Promise<DescribeDownloadSQLLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDownloadSQLLogsWithOptions(request, runtime);
  }

  /**
    * This operation is called to query the health status of an AnalyticDB for PostgreSQL instance in elastic storage mode or Serverless mode and its coordinator and compute nodes.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeHealthStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeHealthStatusResponse
   */
  async describeHealthStatusWithOptions(request: DescribeHealthStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHealthStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHealthStatus",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHealthStatusResponse>(await this.callApi(params, req, runtime), new DescribeHealthStatusResponse({}));
  }

  /**
    * This operation is called to query the health status of an AnalyticDB for PostgreSQL instance in elastic storage mode or Serverless mode and its coordinator and compute nodes.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeHealthStatusRequest
    * @return DescribeHealthStatusResponse
   */
  async describeHealthStatus(request: DescribeHealthStatusRequest): Promise<DescribeHealthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHealthStatusWithOptions(request, runtime);
  }

  async describeIMVInfosWithOptions(request: DescribeIMVInfosRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIMVInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.MVName)) {
      query["MVName"] = request.MVName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIMVInfos",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIMVInfosResponse>(await this.callApi(params, req, runtime), new DescribeIMVInfosResponse({}));
  }

  async describeIMVInfos(request: DescribeIMVInfosRequest): Promise<DescribeIMVInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIMVInfosWithOptions(request, runtime);
  }

  async describeLogBackupsWithOptions(request: DescribeLogBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogBackupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLogBackups",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogBackupsResponse>(await this.callApi(params, req, runtime), new DescribeLogBackupsResponse({}));
  }

  async describeLogBackups(request: DescribeLogBackupsRequest): Promise<DescribeLogBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogBackupsWithOptions(request, runtime);
  }

  async describeModifyParameterLogWithOptions(request: DescribeModifyParameterLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeModifyParameterLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeModifyParameterLog",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeModifyParameterLogResponse>(await this.callApi(params, req, runtime), new DescribeModifyParameterLogResponse({}));
  }

  async describeModifyParameterLog(request: DescribeModifyParameterLogRequest): Promise<DescribeModifyParameterLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeModifyParameterLogWithOptions(request, runtime);
  }

  async describeNamespaceWithOptions(request: DescribeNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!Util.isUnset(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNamespace",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNamespaceResponse>(await this.callApi(params, req, runtime), new DescribeNamespaceResponse({}));
  }

  async describeNamespace(request: DescribeNamespaceRequest): Promise<DescribeNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNamespaceWithOptions(request, runtime);
  }

  /**
    * This operation can be called to query the details of parameters in an AnalyticDB for PostgreSQL instance in elastic storage mode or Serverless mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeParametersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeParametersResponse
   */
  async describeParametersWithOptions(request: DescribeParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeParameters",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeParametersResponse>(await this.callApi(params, req, runtime), new DescribeParametersResponse({}));
  }

  /**
    * This operation can be called to query the details of parameters in an AnalyticDB for PostgreSQL instance in elastic storage mode or Serverless mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeParametersRequest
    * @return DescribeParametersResponse
   */
  async describeParameters(request: DescribeParametersRequest): Promise<DescribeParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
  }

  /**
    * When you create AnalyticDB for PostgreSQL instances, you can call this operation to query the details of vSwitches within a specified region or zone.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeRdsVSwitchsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeRdsVSwitchsResponse
   */
  async describeRdsVSwitchsWithOptions(request: DescribeRdsVSwitchsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsVSwitchsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRdsVSwitchs",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRdsVSwitchsResponse>(await this.callApi(params, req, runtime), new DescribeRdsVSwitchsResponse({}));
  }

  /**
    * When you create AnalyticDB for PostgreSQL instances, you can call this operation to query the details of vSwitches within a specified region or zone.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeRdsVSwitchsRequest
    * @return DescribeRdsVSwitchsResponse
   */
  async describeRdsVSwitchs(request: DescribeRdsVSwitchsRequest): Promise<DescribeRdsVSwitchsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsVSwitchsWithOptions(request, runtime);
  }

  /**
    * When you create an AnalyticDB for PostgreSQL instance, you can call this operation to query the available VPCs within a specified region or zone.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeRdsVpcsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeRdsVpcsResponse
   */
  async describeRdsVpcsWithOptions(request: DescribeRdsVpcsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsVpcsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRdsVpcs",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRdsVpcsResponse>(await this.callApi(params, req, runtime), new DescribeRdsVpcsResponse({}));
  }

  /**
    * When you create an AnalyticDB for PostgreSQL instance, you can call this operation to query the available VPCs within a specified region or zone.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeRdsVpcsRequest
    * @return DescribeRdsVpcsResponse
   */
  async describeRdsVpcs(request: DescribeRdsVpcsRequest): Promise<DescribeRdsVpcsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsVpcsWithOptions(request, runtime);
  }

  /**
    * Before you create an AnalyticDB for PostgreSQL instance, you must call this operation to query available regions and zones.
    * ## Limit
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeRegionsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2016-05-03",
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

  /**
    * Before you create an AnalyticDB for PostgreSQL instance, you must call this operation to query available regions and zones.
    * ## Limit
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeRegionsRequest
    * @return DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
    * This operation is not available for instances in reserved storage mode.
    *
    * @param request DescribeSQLLogCountRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSQLLogCountResponse
   */
  async describeSQLLogCountWithOptions(request: DescribeSQLLogCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLLogCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.executeCost)) {
      query["ExecuteCost"] = request.executeCost;
    }

    if (!Util.isUnset(request.executeState)) {
      query["ExecuteState"] = request.executeState;
    }

    if (!Util.isUnset(request.maxExecuteCost)) {
      query["MaxExecuteCost"] = request.maxExecuteCost;
    }

    if (!Util.isUnset(request.minExecuteCost)) {
      query["MinExecuteCost"] = request.minExecuteCost;
    }

    if (!Util.isUnset(request.operationClass)) {
      query["OperationClass"] = request.operationClass;
    }

    if (!Util.isUnset(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!Util.isUnset(request.queryKeywords)) {
      query["QueryKeywords"] = request.queryKeywords;
    }

    if (!Util.isUnset(request.sourceIP)) {
      query["SourceIP"] = request.sourceIP;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSQLLogCount",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSQLLogCountResponse>(await this.callApi(params, req, runtime), new DescribeSQLLogCountResponse({}));
  }

  /**
    * This operation is not available for instances in reserved storage mode.
    *
    * @param request DescribeSQLLogCountRequest
    * @return DescribeSQLLogCountResponse
   */
  async describeSQLLogCount(request: DescribeSQLLogCountRequest): Promise<DescribeSQLLogCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLLogCountWithOptions(request, runtime);
  }

  /**
    * > This operation is no longer used. To query SQL execution logs, call the [DescribeSQLLogsV2](~~453722~~) operation.
    *
    * @param request DescribeSQLLogsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSQLLogsResponse
   */
  async describeSQLLogsWithOptions(request: DescribeSQLLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.executeCost)) {
      query["ExecuteCost"] = request.executeCost;
    }

    if (!Util.isUnset(request.executeState)) {
      query["ExecuteState"] = request.executeState;
    }

    if (!Util.isUnset(request.maxExecuteCost)) {
      query["MaxExecuteCost"] = request.maxExecuteCost;
    }

    if (!Util.isUnset(request.minExecuteCost)) {
      query["MinExecuteCost"] = request.minExecuteCost;
    }

    if (!Util.isUnset(request.operationClass)) {
      query["OperationClass"] = request.operationClass;
    }

    if (!Util.isUnset(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryKeywords)) {
      query["QueryKeywords"] = request.queryKeywords;
    }

    if (!Util.isUnset(request.sourceIP)) {
      query["SourceIP"] = request.sourceIP;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSQLLogs",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSQLLogsResponse>(await this.callApi(params, req, runtime), new DescribeSQLLogsResponse({}));
  }

  /**
    * > This operation is no longer used. To query SQL execution logs, call the [DescribeSQLLogsV2](~~453722~~) operation.
    *
    * @param request DescribeSQLLogsRequest
    * @return DescribeSQLLogsResponse
   */
  async describeSQLLogs(request: DescribeSQLLogsRequest): Promise<DescribeSQLLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLLogsWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query SQL logs of an AnalyticDB for PostgreSQL instance within a specific time range.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeSQLLogsV2Request
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSQLLogsV2Response
   */
  async describeSQLLogsV2WithOptions(request: DescribeSQLLogsV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeSQLLogsV2Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.executeCost)) {
      query["ExecuteCost"] = request.executeCost;
    }

    if (!Util.isUnset(request.executeState)) {
      query["ExecuteState"] = request.executeState;
    }

    if (!Util.isUnset(request.maxExecuteCost)) {
      query["MaxExecuteCost"] = request.maxExecuteCost;
    }

    if (!Util.isUnset(request.minExecuteCost)) {
      query["MinExecuteCost"] = request.minExecuteCost;
    }

    if (!Util.isUnset(request.operationClass)) {
      query["OperationClass"] = request.operationClass;
    }

    if (!Util.isUnset(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryKeywords)) {
      query["QueryKeywords"] = request.queryKeywords;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourceIP)) {
      query["SourceIP"] = request.sourceIP;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSQLLogsV2",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSQLLogsV2Response>(await this.callApi(params, req, runtime), new DescribeSQLLogsV2Response({}));
  }

  /**
    * You can call this operation to query SQL logs of an AnalyticDB for PostgreSQL instance within a specific time range.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeSQLLogsV2Request
    * @return DescribeSQLLogsV2Response
   */
  async describeSQLLogsV2(request: DescribeSQLLogsV2Request): Promise<DescribeSQLLogsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLLogsV2WithOptions(request, runtime);
  }

  /**
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeSampleDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSampleDataResponse
   */
  async describeSampleDataWithOptions(request: DescribeSampleDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSampleDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSampleData",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSampleDataResponse>(await this.callApi(params, req, runtime), new DescribeSampleDataResponse({}));
  }

  /**
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeSampleDataRequest
    * @return DescribeSampleDataResponse
   */
  async describeSampleData(request: DescribeSampleDataRequest): Promise<DescribeSampleDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSampleDataWithOptions(request, runtime);
  }

  async describeSupportFeaturesWithOptions(request: DescribeSupportFeaturesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSupportFeaturesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSupportFeatures",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSupportFeaturesResponse>(await this.callApi(params, req, runtime), new DescribeSupportFeaturesResponse({}));
  }

  async describeSupportFeatures(request: DescribeSupportFeaturesRequest): Promise<DescribeSupportFeaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSupportFeaturesWithOptions(request, runtime);
  }

  async describeTagsWithOptions(request: DescribeTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTags",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagsResponse>(await this.callApi(params, req, runtime), new DescribeTagsResponse({}));
  }

  async describeTags(request: DescribeTagsRequest): Promise<DescribeTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  async describeUserEncryptionKeyListWithOptions(request: DescribeUserEncryptionKeyListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserEncryptionKeyListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserEncryptionKeyList",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserEncryptionKeyListResponse>(await this.callApi(params, req, runtime), new DescribeUserEncryptionKeyListResponse({}));
  }

  async describeUserEncryptionKeyList(request: DescribeUserEncryptionKeyListRequest): Promise<DescribeUserEncryptionKeyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserEncryptionKeyListWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the details of a lock-waiting query only for an AnalyticDB for PostgreSQL V6.0 instance in elastic storage mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeWaitingSQLInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeWaitingSQLInfoResponse
   */
  async describeWaitingSQLInfoWithOptions(request: DescribeWaitingSQLInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWaitingSQLInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.PID)) {
      query["PID"] = request.PID;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWaitingSQLInfo",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWaitingSQLInfoResponse>(await this.callApi(params, req, runtime), new DescribeWaitingSQLInfoResponse({}));
  }

  /**
    * You can call this operation to query the details of a lock-waiting query only for an AnalyticDB for PostgreSQL V6.0 instance in elastic storage mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeWaitingSQLInfoRequest
    * @return DescribeWaitingSQLInfoResponse
   */
  async describeWaitingSQLInfo(request: DescribeWaitingSQLInfoRequest): Promise<DescribeWaitingSQLInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWaitingSQLInfoWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the lock diagnostics records only for an AnalyticDB for PostgreSQL V6.0 instance in elastic storage mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeWaitingSQLRecordsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeWaitingSQLRecordsResponse
   */
  async describeWaitingSQLRecordsWithOptions(request: DescribeWaitingSQLRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWaitingSQLRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWaitingSQLRecords",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWaitingSQLRecordsResponse>(await this.callApi(params, req, runtime), new DescribeWaitingSQLRecordsResponse({}));
  }

  /**
    * You can call this operation to query the lock diagnostics records only for an AnalyticDB for PostgreSQL V6.0 instance in elastic storage mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeWaitingSQLRecordsRequest
    * @return DescribeWaitingSQLRecordsResponse
   */
  async describeWaitingSQLRecords(request: DescribeWaitingSQLRecordsRequest): Promise<DescribeWaitingSQLRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWaitingSQLRecordsWithOptions(request, runtime);
  }

  /**
    * You can call this operation to download the query diagnostic information of an AnalyticDB for PostgreSQL instance. After the download is complete, you can call the [DescribeDownloadRecords](~~447712~~) operation to query download records and download URLs.
    * This operation is available only for instances of V6.3.10.1 or later in elastic storage mode. For more information about how to view and update the minor engine version of an instance, see [View the minor engine version](~~277424~~) and [Update the minor engine version](~~139271~~).
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DownloadDiagnosisRecordsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DownloadDiagnosisRecordsResponse
   */
  async downloadDiagnosisRecordsWithOptions(request: DownloadDiagnosisRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DownloadDiagnosisRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DownloadDiagnosisRecords",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadDiagnosisRecordsResponse>(await this.callApi(params, req, runtime), new DownloadDiagnosisRecordsResponse({}));
  }

  /**
    * You can call this operation to download the query diagnostic information of an AnalyticDB for PostgreSQL instance. After the download is complete, you can call the [DescribeDownloadRecords](~~447712~~) operation to query download records and download URLs.
    * This operation is available only for instances of V6.3.10.1 or later in elastic storage mode. For more information about how to view and update the minor engine version of an instance, see [View the minor engine version](~~277424~~) and [Update the minor engine version](~~139271~~).
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DownloadDiagnosisRecordsRequest
    * @return DownloadDiagnosisRecordsResponse
   */
  async downloadDiagnosisRecords(request: DownloadDiagnosisRecordsRequest): Promise<DownloadDiagnosisRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadDiagnosisRecordsWithOptions(request, runtime);
  }

  async downloadSQLLogsRecordsWithOptions(request: DownloadSQLLogsRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DownloadSQLLogsRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.executeCost)) {
      query["ExecuteCost"] = request.executeCost;
    }

    if (!Util.isUnset(request.executeState)) {
      query["ExecuteState"] = request.executeState;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.maxExecuteCost)) {
      query["MaxExecuteCost"] = request.maxExecuteCost;
    }

    if (!Util.isUnset(request.minExecuteCost)) {
      query["MinExecuteCost"] = request.minExecuteCost;
    }

    if (!Util.isUnset(request.operationClass)) {
      query["OperationClass"] = request.operationClass;
    }

    if (!Util.isUnset(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryKeywords)) {
      query["QueryKeywords"] = request.queryKeywords;
    }

    if (!Util.isUnset(request.sourceIP)) {
      query["SourceIP"] = request.sourceIP;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DownloadSQLLogsRecords",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadSQLLogsRecordsResponse>(await this.callApi(params, req, runtime), new DownloadSQLLogsRecordsResponse({}));
  }

  async downloadSQLLogsRecords(request: DownloadSQLLogsRecordsRequest): Promise<DownloadSQLLogsRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadSQLLogsRecordsWithOptions(request, runtime);
  }

  async getUploadDocumentJobWithOptions(request: GetUploadDocumentJobRequest, runtime: $Util.RuntimeOptions): Promise<GetUploadDocumentJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.collection)) {
      body["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      body["NamespacePassword"] = request.namespacePassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUploadDocumentJob",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUploadDocumentJobResponse>(await this.callApi(params, req, runtime), new GetUploadDocumentJobResponse({}));
  }

  async getUploadDocumentJob(request: GetUploadDocumentJobRequest): Promise<GetUploadDocumentJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUploadDocumentJobWithOptions(request, runtime);
  }

  async getUpsertCollectionDataJobWithOptions(request: GetUpsertCollectionDataJobRequest, runtime: $Util.RuntimeOptions): Promise<GetUpsertCollectionDataJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.collection)) {
      body["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      body["NamespacePassword"] = request.namespacePassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUpsertCollectionDataJob",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUpsertCollectionDataJobResponse>(await this.callApi(params, req, runtime), new GetUpsertCollectionDataJobResponse({}));
  }

  async getUpsertCollectionDataJob(request: GetUpsertCollectionDataJobRequest): Promise<GetUpsertCollectionDataJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUpsertCollectionDataJobWithOptions(request, runtime);
  }

  async grantCollectionWithOptions(request: GrantCollectionRequest, runtime: $Util.RuntimeOptions): Promise<GrantCollectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.grantToNamespace)) {
      query["GrantToNamespace"] = request.grantToNamespace;
    }

    if (!Util.isUnset(request.grantType)) {
      query["GrantType"] = request.grantType;
    }

    if (!Util.isUnset(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!Util.isUnset(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GrantCollection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantCollectionResponse>(await this.callApi(params, req, runtime), new GrantCollectionResponse({}));
  }

  async grantCollection(request: GrantCollectionRequest): Promise<GrantCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantCollectionWithOptions(request, runtime);
  }

  async handleActiveSQLRecordWithOptions(request: HandleActiveSQLRecordRequest, runtime: $Util.RuntimeOptions): Promise<HandleActiveSQLRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.pids)) {
      query["Pids"] = request.pids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HandleActiveSQLRecord",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HandleActiveSQLRecordResponse>(await this.callApi(params, req, runtime), new HandleActiveSQLRecordResponse({}));
  }

  async handleActiveSQLRecord(request: HandleActiveSQLRecordRequest): Promise<HandleActiveSQLRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.handleActiveSQLRecordWithOptions(request, runtime);
  }

  async initVectorDatabaseWithOptions(request: InitVectorDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<InitVectorDatabaseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!Util.isUnset(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InitVectorDatabase",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitVectorDatabaseResponse>(await this.callApi(params, req, runtime), new InitVectorDatabaseResponse({}));
  }

  async initVectorDatabase(request: InitVectorDatabaseRequest): Promise<InitVectorDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initVectorDatabaseWithOptions(request, runtime);
  }

  async listCollectionsWithOptions(request: ListCollectionsRequest, runtime: $Util.RuntimeOptions): Promise<ListCollectionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCollections",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCollectionsResponse>(await this.callApi(params, req, runtime), new ListCollectionsResponse({}));
  }

  async listCollections(request: ListCollectionsRequest): Promise<ListCollectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCollectionsWithOptions(request, runtime);
  }

  async listDocumentCollectionsWithOptions(request: ListDocumentCollectionsRequest, runtime: $Util.RuntimeOptions): Promise<ListDocumentCollectionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDocumentCollections",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDocumentCollectionsResponse>(await this.callApi(params, req, runtime), new ListDocumentCollectionsResponse({}));
  }

  async listDocumentCollections(request: ListDocumentCollectionsRequest): Promise<ListDocumentCollectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDocumentCollectionsWithOptions(request, runtime);
  }

  async listDocumentsWithOptions(request: ListDocumentsRequest, runtime: $Util.RuntimeOptions): Promise<ListDocumentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDocuments",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDocumentsResponse>(await this.callApi(params, req, runtime), new ListDocumentsResponse({}));
  }

  async listDocuments(request: ListDocumentsRequest): Promise<ListDocumentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDocumentsWithOptions(request, runtime);
  }

  async listNamespacesWithOptions(request: ListNamespacesRequest, runtime: $Util.RuntimeOptions): Promise<ListNamespacesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!Util.isUnset(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNamespaces",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNamespacesResponse>(await this.callApi(params, req, runtime), new ListNamespacesResponse({}));
  }

  async listNamespaces(request: ListNamespacesRequest): Promise<ListNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNamespacesWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      version: "2016-05-03",
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

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async modifyAccountDescriptionWithOptions(request: ModifyAccountDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountDescription)) {
      query["AccountDescription"] = request.accountDescription;
    }

    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountDescription",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAccountDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyAccountDescriptionResponse({}));
  }

  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  async modifyBackupPolicyWithOptions(request: ModifyBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.enableRecoveryPoint)) {
      query["EnableRecoveryPoint"] = request.enableRecoveryPoint;
    }

    if (!Util.isUnset(request.preferredBackupPeriod)) {
      query["PreferredBackupPeriod"] = request.preferredBackupPeriod;
    }

    if (!Util.isUnset(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
    }

    if (!Util.isUnset(request.recoveryPointPeriod)) {
      query["RecoveryPointPeriod"] = request.recoveryPointPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBackupPolicy",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBackupPolicyResponse>(await this.callApi(params, req, runtime), new ModifyBackupPolicyResponse({}));
  }

  async modifyBackupPolicy(request: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  async modifyDBInstanceConfigWithOptions(request: ModifyDBInstanceConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.idleTime)) {
      query["IdleTime"] = request.idleTime;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serverlessResource)) {
      query["ServerlessResource"] = request.serverlessResource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceConfig",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceConfigResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceConfigResponse({}));
  }

  async modifyDBInstanceConfig(request: ModifyDBInstanceConfigRequest): Promise<ModifyDBInstanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceConfigWithOptions(request, runtime);
  }

  async modifyDBInstanceConnectionStringWithOptions(request: ModifyDBInstanceConnectionStringRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceConnectionStringResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!Util.isUnset(request.currentConnectionString)) {
      query["CurrentConnectionString"] = request.currentConnectionString;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceConnectionString",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceConnectionStringResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceConnectionStringResponse({}));
  }

  async modifyDBInstanceConnectionString(request: ModifyDBInstanceConnectionStringRequest): Promise<ModifyDBInstanceConnectionStringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceConnectionStringWithOptions(request, runtime);
  }

  /**
    * To make it easy to identify AnalyticDB for PostgreSQL instances, you can call this operation to modify the description of instances.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ModifyDBInstanceDescriptionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDBInstanceDescriptionResponse
   */
  async modifyDBInstanceDescriptionWithOptions(request: ModifyDBInstanceDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceDescription",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceDescriptionResponse({}));
  }

  /**
    * To make it easy to identify AnalyticDB for PostgreSQL instances, you can call this operation to modify the description of instances.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ModifyDBInstanceDescriptionRequest
    * @return ModifyDBInstanceDescriptionResponse
   */
  async modifyDBInstanceDescription(request: ModifyDBInstanceDescriptionRequest): Promise<ModifyDBInstanceDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceDescriptionWithOptions(request, runtime);
  }

  /**
    * The system maintains AnalyticDB for PostgreSQL instances during the maintenance window that you specify. We recommend that you set the maintenance window to off-peak hours to minimize the impact on your business.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ModifyDBInstanceMaintainTimeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDBInstanceMaintainTimeResponse
   */
  async modifyDBInstanceMaintainTimeWithOptions(request: ModifyDBInstanceMaintainTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceMaintainTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceMaintainTime",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceMaintainTimeResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceMaintainTimeResponse({}));
  }

  /**
    * The system maintains AnalyticDB for PostgreSQL instances during the maintenance window that you specify. We recommend that you set the maintenance window to off-peak hours to minimize the impact on your business.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ModifyDBInstanceMaintainTimeRequest
    * @return ModifyDBInstanceMaintainTimeResponse
   */
  async modifyDBInstanceMaintainTime(request: ModifyDBInstanceMaintainTimeRequest): Promise<ModifyDBInstanceMaintainTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceMaintainTimeWithOptions(request, runtime);
  }

  /**
    * Resource Management allows you to build an organizational structure for resources based on your business requirements. You can use resource directories, folders, accounts, and resource groups to hierarchically organize and manage resources. For more information, see [What is Resource Management?](~~94475~~)
    *
    * @param request ModifyDBInstanceResourceGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDBInstanceResourceGroupResponse
   */
  async modifyDBInstanceResourceGroupWithOptions(request: ModifyDBInstanceResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceResourceGroup",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceResourceGroupResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceResourceGroupResponse({}));
  }

  /**
    * Resource Management allows you to build an organizational structure for resources based on your business requirements. You can use resource directories, folders, accounts, and resource groups to hierarchically organize and manage resources. For more information, see [What is Resource Management?](~~94475~~)
    *
    * @param request ModifyDBInstanceResourceGroupRequest
    * @return ModifyDBInstanceResourceGroupResponse
   */
  async modifyDBInstanceResourceGroup(request: ModifyDBInstanceResourceGroupRequest): Promise<ModifyDBInstanceResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceResourceGroupWithOptions(request, runtime);
  }

  async modifyDBInstanceSSLWithOptions(request: ModifyDBInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceSSLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.SSLEnabled)) {
      query["SSLEnabled"] = request.SSLEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceSSL",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceSSLResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceSSLResponse({}));
  }

  async modifyDBInstanceSSL(request: ModifyDBInstanceSSLRequest): Promise<ModifyDBInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceSSLWithOptions(request, runtime);
  }

  async modifyMasterSpecWithOptions(request: ModifyMasterSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMasterSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.masterCU)) {
      query["MasterCU"] = request.masterCU;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMasterSpec",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMasterSpecResponse>(await this.callApi(params, req, runtime), new ModifyMasterSpecResponse({}));
  }

  async modifyMasterSpec(request: ModifyMasterSpecRequest): Promise<ModifyMasterSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMasterSpecWithOptions(request, runtime);
  }

  /**
    * This operation can be called to modify parameters of an AnalyticDB for PostgreSQL instance in elastic storage mode or Serverless mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ModifyParametersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyParametersResponse
   */
  async modifyParametersWithOptions(request: ModifyParametersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.forceRestartInstance)) {
      query["ForceRestartInstance"] = request.forceRestartInstance;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyParameters",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyParametersResponse>(await this.callApi(params, req, runtime), new ModifyParametersResponse({}));
  }

  /**
    * This operation can be called to modify parameters of an AnalyticDB for PostgreSQL instance in elastic storage mode or Serverless mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ModifyParametersRequest
    * @return ModifyParametersResponse
   */
  async modifyParameters(request: ModifyParametersRequest): Promise<ModifyParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyParametersWithOptions(request, runtime);
  }

  async modifySQLCollectorPolicyWithOptions(request: ModifySQLCollectorPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifySQLCollectorPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.SQLCollectorStatus)) {
      query["SQLCollectorStatus"] = request.SQLCollectorStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySQLCollectorPolicy",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySQLCollectorPolicyResponse>(await this.callApi(params, req, runtime), new ModifySQLCollectorPolicyResponse({}));
  }

  async modifySQLCollectorPolicy(request: ModifySQLCollectorPolicyRequest): Promise<ModifySQLCollectorPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySQLCollectorPolicyWithOptions(request, runtime);
  }

  /**
    * To ensure the security and stability of AnalyticDB for PostgreSQL instances, the system denies all external IP addresses to access AnalyticDB for PostgreSQL instances by default. Before you can use an AnalyticDB for PostgreSQL instance, you must add the IP address or CIDR block of your client to the IP address whitelist of the instance.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ModifySecurityIpsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifySecurityIpsResponse
   */
  async modifySecurityIpsWithOptions(request: ModifySecurityIpsRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityIpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceIPArrayAttribute)) {
      query["DBInstanceIPArrayAttribute"] = request.DBInstanceIPArrayAttribute;
    }

    if (!Util.isUnset(request.DBInstanceIPArrayName)) {
      query["DBInstanceIPArrayName"] = request.DBInstanceIPArrayName;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySecurityIps",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySecurityIpsResponse>(await this.callApi(params, req, runtime), new ModifySecurityIpsResponse({}));
  }

  /**
    * To ensure the security and stability of AnalyticDB for PostgreSQL instances, the system denies all external IP addresses to access AnalyticDB for PostgreSQL instances by default. Before you can use an AnalyticDB for PostgreSQL instance, you must add the IP address or CIDR block of your client to the IP address whitelist of the instance.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ModifySecurityIpsRequest
    * @return ModifySecurityIpsResponse
   */
  async modifySecurityIps(request: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityIpsWithOptions(request, runtime);
  }

  async modifyVectorConfigurationWithOptions(request: ModifyVectorConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVectorConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.vectorConfigurationStatus)) {
      query["VectorConfigurationStatus"] = request.vectorConfigurationStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVectorConfiguration",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVectorConfigurationResponse>(await this.callApi(params, req, runtime), new ModifyVectorConfigurationResponse({}));
  }

  async modifyVectorConfiguration(request: ModifyVectorConfigurationRequest): Promise<ModifyVectorConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVectorConfigurationWithOptions(request, runtime);
  }

  /**
    * You can call this operation to pause an AnalyticDB for PostgreSQL instance that is in the **Running** state.
    * This operation is available only for AnalyticDB for PostgreSQL instances in Serverless mode that run V1.0.2.1 or later. For more information about how to view and update the minor engine version of an instance, see [View the minor engine version](~~277424~~) and [Update the minor engine version](~~139271~~).
    * >  Before you call this operation, make sure that you are familiar with the billing methods and pricing of AnalyticDB for PostgreSQL instances. For more information, see [Billing methods](~~35406~~) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request PauseInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PauseInstanceResponse
   */
  async pauseInstanceWithOptions(request: PauseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<PauseInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PauseInstance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PauseInstanceResponse>(await this.callApi(params, req, runtime), new PauseInstanceResponse({}));
  }

  /**
    * You can call this operation to pause an AnalyticDB for PostgreSQL instance that is in the **Running** state.
    * This operation is available only for AnalyticDB for PostgreSQL instances in Serverless mode that run V1.0.2.1 or later. For more information about how to view and update the minor engine version of an instance, see [View the minor engine version](~~277424~~) and [Update the minor engine version](~~139271~~).
    * >  Before you call this operation, make sure that you are familiar with the billing methods and pricing of AnalyticDB for PostgreSQL instances. For more information, see [Billing methods](~~35406~~) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request PauseInstanceRequest
    * @return PauseInstanceResponse
   */
  async pauseInstance(request: PauseInstanceRequest): Promise<PauseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pauseInstanceWithOptions(request, runtime);
  }

  async queryCollectionDataWithOptions(tmpReq: QueryCollectionDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryCollectionDataResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryCollectionDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.hybridSearchArgs)) {
      request.hybridSearchArgsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hybridSearchArgs, "HybridSearchArgs", "json");
    }

    if (!Util.isUnset(tmpReq.vector)) {
      request.vectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vector, "Vector", "json");
    }

    let query = { };
    if (!Util.isUnset(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.hybridSearch)) {
      query["HybridSearch"] = request.hybridSearch;
    }

    if (!Util.isUnset(request.hybridSearchArgsShrink)) {
      query["HybridSearchArgs"] = request.hybridSearchArgsShrink;
    }

    if (!Util.isUnset(request.includeValues)) {
      query["IncludeValues"] = request.includeValues;
    }

    if (!Util.isUnset(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.topK)) {
      query["TopK"] = request.topK;
    }

    if (!Util.isUnset(request.vectorShrink)) {
      query["Vector"] = request.vectorShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCollectionData",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCollectionDataResponse>(await this.callApi(params, req, runtime), new QueryCollectionDataResponse({}));
  }

  async queryCollectionData(request: QueryCollectionDataRequest): Promise<QueryCollectionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCollectionDataWithOptions(request, runtime);
  }

  async queryContentWithOptions(tmpReq: QueryContentRequest, runtime: $Util.RuntimeOptions): Promise<QueryContentResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.hybridSearchArgs)) {
      request.hybridSearchArgsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hybridSearchArgs, "HybridSearchArgs", "json");
    }

    if (!Util.isUnset(tmpReq.recallWindow)) {
      request.recallWindowShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recallWindow, "RecallWindow", "json");
    }

    let query = { };
    if (!Util.isUnset(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.hybridSearch)) {
      query["HybridSearch"] = request.hybridSearch;
    }

    if (!Util.isUnset(request.hybridSearchArgsShrink)) {
      query["HybridSearchArgs"] = request.hybridSearchArgsShrink;
    }

    if (!Util.isUnset(request.includeVector)) {
      query["IncludeVector"] = request.includeVector;
    }

    if (!Util.isUnset(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.recallWindowShrink)) {
      query["RecallWindow"] = request.recallWindowShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rerankFactor)) {
      query["RerankFactor"] = request.rerankFactor;
    }

    if (!Util.isUnset(request.topK)) {
      query["TopK"] = request.topK;
    }

    if (!Util.isUnset(request.useFullTextRetrieval)) {
      query["UseFullTextRetrieval"] = request.useFullTextRetrieval;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryContent",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryContentResponse>(await this.callApi(params, req, runtime), new QueryContentResponse({}));
  }

  async queryContent(request: QueryContentRequest): Promise<QueryContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryContentWithOptions(request, runtime);
  }

  async queryContentAdvance(request: QueryContentAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<QueryContentResponse> {
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
      product: "gpdb",
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
    let queryContentReq = new QueryContentRequest({ });
    OpenApiUtil.convert(request, queryContentReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      queryContentReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let queryContentResp = await this.queryContentWithOptions(queryContentReq, runtime);
    return queryContentResp;
  }

  async rebalanceDBInstanceWithOptions(request: RebalanceDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RebalanceDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RebalanceDBInstance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RebalanceDBInstanceResponse>(await this.callApi(params, req, runtime), new RebalanceDBInstanceResponse({}));
  }

  async rebalanceDBInstance(request: RebalanceDBInstanceRequest): Promise<RebalanceDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebalanceDBInstanceWithOptions(request, runtime);
  }

  async releaseInstancePublicConnectionWithOptions(request: ReleaseInstancePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstancePublicConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.currentConnectionString)) {
      query["CurrentConnectionString"] = request.currentConnectionString;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseInstancePublicConnection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseInstancePublicConnectionResponse>(await this.callApi(params, req, runtime), new ReleaseInstancePublicConnectionResponse({}));
  }

  async releaseInstancePublicConnection(request: ReleaseInstancePublicConnectionRequest): Promise<ReleaseInstancePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstancePublicConnectionWithOptions(request, runtime);
  }

  async resetAccountPasswordWithOptions(request: ResetAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetAccountPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetAccountPassword",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetAccountPasswordResponse>(await this.callApi(params, req, runtime), new ResetAccountPasswordResponse({}));
  }

  async resetAccountPassword(request: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  async resetIMVMonitorDataWithOptions(request: ResetIMVMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<ResetIMVMonitorDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetIMVMonitorData",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetIMVMonitorDataResponse>(await this.callApi(params, req, runtime), new ResetIMVMonitorDataResponse({}));
  }

  async resetIMVMonitorData(request: ResetIMVMonitorDataRequest): Promise<ResetIMVMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetIMVMonitorDataWithOptions(request, runtime);
  }

  /**
    * A restart takes about 3 to 30 minutes. During the restart, services are unavailable. We recommend that you restart the instance during off-peak hours. After the instance is restarted and enters the running state, you can access the instance.
    * ## Limit
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
    *
    * @param request RestartDBInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RestartDBInstanceResponse
   */
  async restartDBInstanceWithOptions(request: RestartDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartDBInstance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartDBInstanceResponse>(await this.callApi(params, req, runtime), new RestartDBInstanceResponse({}));
  }

  /**
    * A restart takes about 3 to 30 minutes. During the restart, services are unavailable. We recommend that you restart the instance during off-peak hours. After the instance is restarted and enters the running state, you can access the instance.
    * ## Limit
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
    *
    * @param request RestartDBInstanceRequest
    * @return RestartDBInstanceResponse
   */
  async restartDBInstance(request: RestartDBInstanceRequest): Promise<RestartDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDBInstanceWithOptions(request, runtime);
  }

  /**
    * You can call this operation to resume an AnalyticDB for PostgreSQL instance that is in the **Paused** state.
    * This operation is available only for AnalyticDB for PostgreSQL instances in Serverless mode that run V1.0.2.1 or later. For more information about how to view and update the minor engine version of an instance, see [View the minor engine version](~~277424~~) and [Update the minor engine version](~~139271~~).
    * >  Before you call this operation, make sure that you are familiar with the billing methods and pricing of AnalyticDB for PostgreSQL instances. For more information, see [Billing methods](~~35406~~) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ResumeInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ResumeInstanceResponse
   */
  async resumeInstanceWithOptions(request: ResumeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ResumeInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResumeInstance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeInstanceResponse>(await this.callApi(params, req, runtime), new ResumeInstanceResponse({}));
  }

  /**
    * You can call this operation to resume an AnalyticDB for PostgreSQL instance that is in the **Paused** state.
    * This operation is available only for AnalyticDB for PostgreSQL instances in Serverless mode that run V1.0.2.1 or later. For more information about how to view and update the minor engine version of an instance, see [View the minor engine version](~~277424~~) and [Update the minor engine version](~~139271~~).
    * >  Before you call this operation, make sure that you are familiar with the billing methods and pricing of AnalyticDB for PostgreSQL instances. For more information, see [Billing methods](~~35406~~) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ResumeInstanceRequest
    * @return ResumeInstanceResponse
   */
  async resumeInstance(request: ResumeInstanceRequest): Promise<ResumeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeInstanceWithOptions(request, runtime);
  }

  /**
    * You can call this operation to enable or disable a specified plan. The plan management feature is supported only for AnalyticDB for PostgreSQL instances in Serverless mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request SetDBInstancePlanStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetDBInstancePlanStatusResponse
   */
  async setDBInstancePlanStatusWithOptions(request: SetDBInstancePlanStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetDBInstancePlanStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.planStatus)) {
      query["PlanStatus"] = request.planStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDBInstancePlanStatus",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDBInstancePlanStatusResponse>(await this.callApi(params, req, runtime), new SetDBInstancePlanStatusResponse({}));
  }

  /**
    * You can call this operation to enable or disable a specified plan. The plan management feature is supported only for AnalyticDB for PostgreSQL instances in Serverless mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request SetDBInstancePlanStatusRequest
    * @return SetDBInstancePlanStatusResponse
   */
  async setDBInstancePlanStatus(request: SetDBInstancePlanStatusRequest): Promise<SetDBInstancePlanStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDBInstancePlanStatusWithOptions(request, runtime);
  }

  /**
    * This operation is called to enable or disable data sharing for an AnalyticDB for PostgreSQL instance in Serverless mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation.
    *
    * @param tmpReq SetDataShareInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetDataShareInstanceResponse
   */
  async setDataShareInstanceWithOptions(tmpReq: SetDataShareInstanceRequest, runtime: $Util.RuntimeOptions): Promise<SetDataShareInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new SetDataShareInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceList)) {
      request.instanceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceList, "InstanceList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.instanceListShrink)) {
      query["InstanceList"] = request.instanceListShrink;
    }

    if (!Util.isUnset(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDataShareInstance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDataShareInstanceResponse>(await this.callApi(params, req, runtime), new SetDataShareInstanceResponse({}));
  }

  /**
    * This operation is called to enable or disable data sharing for an AnalyticDB for PostgreSQL instance in Serverless mode.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation.
    *
    * @param request SetDataShareInstanceRequest
    * @return SetDataShareInstanceResponse
   */
  async setDataShareInstance(request: SetDataShareInstanceRequest): Promise<SetDataShareInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDataShareInstanceWithOptions(request, runtime);
  }

  async switchDBInstanceNetTypeWithOptions(request: SwitchDBInstanceNetTypeRequest, runtime: $Util.RuntimeOptions): Promise<SwitchDBInstanceNetTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchDBInstanceNetType",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchDBInstanceNetTypeResponse>(await this.callApi(params, req, runtime), new SwitchDBInstanceNetTypeResponse({}));
  }

  async switchDBInstanceNetType(request: SwitchDBInstanceNetTypeRequest): Promise<SwitchDBInstanceNetTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchDBInstanceNetTypeWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      version: "2016-05-03",
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

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
    * You can call this operation to release a sample dataset from an AnalyticDB for PostgreSQL instance. You must have already loaded the sample dataset.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request UnloadSampleDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UnloadSampleDataResponse
   */
  async unloadSampleDataWithOptions(request: UnloadSampleDataRequest, runtime: $Util.RuntimeOptions): Promise<UnloadSampleDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnloadSampleData",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnloadSampleDataResponse>(await this.callApi(params, req, runtime), new UnloadSampleDataResponse({}));
  }

  /**
    * You can call this operation to release a sample dataset from an AnalyticDB for PostgreSQL instance. You must have already loaded the sample dataset.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request UnloadSampleDataRequest
    * @return UnloadSampleDataResponse
   */
  async unloadSampleData(request: UnloadSampleDataRequest): Promise<UnloadSampleDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unloadSampleDataWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      version: "2016-05-03",
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

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateCollectionDataMetadataWithOptions(tmpReq: UpdateCollectionDataMetadataRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCollectionDataMetadataResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateCollectionDataMetadataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    if (!Util.isUnset(tmpReq.metadata)) {
      request.metadataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metadata, "Metadata", "json");
    }

    let query = { };
    if (!Util.isUnset(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.idsShrink)) {
      query["Ids"] = request.idsShrink;
    }

    if (!Util.isUnset(request.metadataShrink)) {
      query["Metadata"] = request.metadataShrink;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCollectionDataMetadata",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCollectionDataMetadataResponse>(await this.callApi(params, req, runtime), new UpdateCollectionDataMetadataResponse({}));
  }

  async updateCollectionDataMetadata(request: UpdateCollectionDataMetadataRequest): Promise<UpdateCollectionDataMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCollectionDataMetadataWithOptions(request, runtime);
  }

  /**
    * You can call this operation to modify a plan for an AnalyticDB for PostgreSQL instance in Serverless mode. For example, you can modify a plan for periodically pausing and resuming an instance or scaling an instance.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request UpdateDBInstancePlanRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateDBInstancePlanResponse
   */
  async updateDBInstancePlanWithOptions(request: UpdateDBInstancePlanRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDBInstancePlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.planConfig)) {
      query["PlanConfig"] = request.planConfig;
    }

    if (!Util.isUnset(request.planDesc)) {
      query["PlanDesc"] = request.planDesc;
    }

    if (!Util.isUnset(request.planEndDate)) {
      query["PlanEndDate"] = request.planEndDate;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.planName)) {
      query["PlanName"] = request.planName;
    }

    if (!Util.isUnset(request.planStartDate)) {
      query["PlanStartDate"] = request.planStartDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDBInstancePlan",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDBInstancePlanResponse>(await this.callApi(params, req, runtime), new UpdateDBInstancePlanResponse({}));
  }

  /**
    * You can call this operation to modify a plan for an AnalyticDB for PostgreSQL instance in Serverless mode. For example, you can modify a plan for periodically pausing and resuming an instance or scaling an instance.
    * ## Limits
    * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request UpdateDBInstancePlanRequest
    * @return UpdateDBInstancePlanResponse
   */
  async updateDBInstancePlan(request: UpdateDBInstancePlanRequest): Promise<UpdateDBInstancePlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDBInstancePlanWithOptions(request, runtime);
  }

  /**
    * This operation is not available for instances in reserved storage mode.
    * Before you call this operation, make sure that you are familiar with the billing of AnalyticDB for PostgreSQL. For more information, see [Billing methods](~~35406~~) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
    *
    * @param request UpgradeDBInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpgradeDBInstanceResponse
   */
  async upgradeDBInstanceWithOptions(request: UpgradeDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!Util.isUnset(request.DBInstanceGroupCount)) {
      query["DBInstanceGroupCount"] = request.DBInstanceGroupCount;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!Util.isUnset(request.masterNodeNum)) {
      query["MasterNodeNum"] = request.masterNodeNum;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.segDiskPerformanceLevel)) {
      query["SegDiskPerformanceLevel"] = request.segDiskPerformanceLevel;
    }

    if (!Util.isUnset(request.segNodeNum)) {
      query["SegNodeNum"] = request.segNodeNum;
    }

    if (!Util.isUnset(request.segStorageType)) {
      query["SegStorageType"] = request.segStorageType;
    }

    if (!Util.isUnset(request.storageSize)) {
      query["StorageSize"] = request.storageSize;
    }

    if (!Util.isUnset(request.upgradeType)) {
      query["UpgradeType"] = request.upgradeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeDBInstance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeDBInstanceResponse>(await this.callApi(params, req, runtime), new UpgradeDBInstanceResponse({}));
  }

  /**
    * This operation is not available for instances in reserved storage mode.
    * Before you call this operation, make sure that you are familiar with the billing of AnalyticDB for PostgreSQL. For more information, see [Billing methods](~~35406~~) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
    *
    * @param request UpgradeDBInstanceRequest
    * @return UpgradeDBInstanceResponse
   */
  async upgradeDBInstance(request: UpgradeDBInstanceRequest): Promise<UpgradeDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBInstanceWithOptions(request, runtime);
  }

  async upgradeDBVersionWithOptions(request: UpgradeDBVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeDBVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.majorVersion)) {
      query["MajorVersion"] = request.majorVersion;
    }

    if (!Util.isUnset(request.minorVersion)) {
      query["MinorVersion"] = request.minorVersion;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    if (!Util.isUnset(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeDBVersion",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeDBVersionResponse>(await this.callApi(params, req, runtime), new UpgradeDBVersionResponse({}));
  }

  async upgradeDBVersion(request: UpgradeDBVersionRequest): Promise<UpgradeDBVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBVersionWithOptions(request, runtime);
  }

  async uploadDocumentAsyncWithOptions(tmpReq: UploadDocumentAsyncRequest, runtime: $Util.RuntimeOptions): Promise<UploadDocumentAsyncResponse> {
    Util.validateModel(tmpReq);
    let request = new UploadDocumentAsyncShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.metadata)) {
      request.metadataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metadata, "Metadata", "json");
    }

    if (!Util.isUnset(tmpReq.separators)) {
      request.separatorsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.separators, "Separators", "json");
    }

    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chunkOverlap)) {
      body["ChunkOverlap"] = request.chunkOverlap;
    }

    if (!Util.isUnset(request.chunkSize)) {
      body["ChunkSize"] = request.chunkSize;
    }

    if (!Util.isUnset(request.collection)) {
      body["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.documentLoaderName)) {
      body["DocumentLoaderName"] = request.documentLoaderName;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.metadataShrink)) {
      body["Metadata"] = request.metadataShrink;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      body["NamespacePassword"] = request.namespacePassword;
    }

    if (!Util.isUnset(request.separatorsShrink)) {
      body["Separators"] = request.separatorsShrink;
    }

    if (!Util.isUnset(request.textSplitterName)) {
      body["TextSplitterName"] = request.textSplitterName;
    }

    if (!Util.isUnset(request.zhTitleEnhance)) {
      body["ZhTitleEnhance"] = request.zhTitleEnhance;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UploadDocumentAsync",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadDocumentAsyncResponse>(await this.callApi(params, req, runtime), new UploadDocumentAsyncResponse({}));
  }

  async uploadDocumentAsync(request: UploadDocumentAsyncRequest): Promise<UploadDocumentAsyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadDocumentAsyncWithOptions(request, runtime);
  }

  async uploadDocumentAsyncAdvance(request: UploadDocumentAsyncAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<UploadDocumentAsyncResponse> {
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
      product: "gpdb",
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
    let uploadDocumentAsyncReq = new UploadDocumentAsyncRequest({ });
    OpenApiUtil.convert(request, uploadDocumentAsyncReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      uploadDocumentAsyncReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let uploadDocumentAsyncResp = await this.uploadDocumentAsyncWithOptions(uploadDocumentAsyncReq, runtime);
    return uploadDocumentAsyncResp;
  }

  async upsertChunksWithOptions(tmpReq: UpsertChunksRequest, runtime: $Util.RuntimeOptions): Promise<UpsertChunksResponse> {
    Util.validateModel(tmpReq);
    let request = new UpsertChunksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.textChunks)) {
      request.textChunksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.textChunks, "TextChunks", "json");
    }

    let query = { };
    if (!Util.isUnset(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.textChunksShrink)) {
      body["TextChunks"] = request.textChunksShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpsertChunks",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpsertChunksResponse>(await this.callApi(params, req, runtime), new UpsertChunksResponse({}));
  }

  async upsertChunks(request: UpsertChunksRequest): Promise<UpsertChunksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upsertChunksWithOptions(request, runtime);
  }

  async upsertCollectionDataWithOptions(tmpReq: UpsertCollectionDataRequest, runtime: $Util.RuntimeOptions): Promise<UpsertCollectionDataResponse> {
    Util.validateModel(tmpReq);
    let request = new UpsertCollectionDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.rows)) {
      request.rowsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rows, "Rows", "json");
    }

    let query = { };
    if (!Util.isUnset(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.rowsShrink)) {
      body["Rows"] = request.rowsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpsertCollectionData",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpsertCollectionDataResponse>(await this.callApi(params, req, runtime), new UpsertCollectionDataResponse({}));
  }

  async upsertCollectionData(request: UpsertCollectionDataRequest): Promise<UpsertCollectionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upsertCollectionDataWithOptions(request, runtime);
  }

  async upsertCollectionDataAsyncWithOptions(request: UpsertCollectionDataAsyncRequest, runtime: $Util.RuntimeOptions): Promise<UpsertCollectionDataAsyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.collection)) {
      body["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespacePassword)) {
      body["NamespacePassword"] = request.namespacePassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpsertCollectionDataAsync",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpsertCollectionDataAsyncResponse>(await this.callApi(params, req, runtime), new UpsertCollectionDataAsyncResponse({}));
  }

  async upsertCollectionDataAsync(request: UpsertCollectionDataAsyncRequest): Promise<UpsertCollectionDataAsyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upsertCollectionDataAsyncWithOptions(request, runtime);
  }

  async upsertCollectionDataAsyncAdvance(request: UpsertCollectionDataAsyncAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<UpsertCollectionDataAsyncResponse> {
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
      product: "gpdb",
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
    let upsertCollectionDataAsyncReq = new UpsertCollectionDataAsyncRequest({ });
    OpenApiUtil.convert(request, upsertCollectionDataAsyncReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      upsertCollectionDataAsyncReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let upsertCollectionDataAsyncResp = await this.upsertCollectionDataAsyncWithOptions(upsertCollectionDataAsyncReq, runtime);
    return upsertCollectionDataAsyncResp;
  }

}
