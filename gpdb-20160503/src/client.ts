// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeUserEncryptionKeyListRequest extends $tea.Model {
  regionId: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserEncryptionKeyListResponse extends $tea.Model {
  requestId: string;
  kmsKeys: DescribeUserEncryptionKeyListResponseKmsKeys[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      kmsKeys: 'KmsKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      kmsKeys: { 'type': 'array', 'itemType': DescribeUserEncryptionKeyListResponseKmsKeys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyParameterLogRequest extends $tea.Model {
  DBInstanceId: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyParameterLogResponse extends $tea.Model {
  requestId: string;
  changelogs: DescribeModifyParameterLogResponseChangelogs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      changelogs: 'Changelogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      changelogs: { 'type': 'array', 'itemType': DescribeModifyParameterLogResponseChangelogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersRequest extends $tea.Model {
  DBInstanceId: string;
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

export class DescribeParametersResponse extends $tea.Model {
  requestId: string;
  parameters: DescribeParametersResponseParameters[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      parameters: { 'type': 'array', 'itemType': DescribeParametersResponseParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParametersRequest extends $tea.Model {
  DBInstanceId: string;
  parameters: string;
  forceRestartInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      parameters: 'Parameters',
      forceRestartInstance: 'ForceRestartInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      parameters: 'string',
      forceRestartInstance: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParametersResponse extends $tea.Model {
  requestId: string;
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

export class CreateServiceLinkedRoleRequest extends $tea.Model {
  regionId: string;
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

export class CreateServiceLinkedRoleResponse extends $tea.Model {
  requestId: string;
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

export class CheckServiceLinkedRoleResponse extends $tea.Model {
  requestId: string;
  hasServiceLinkedRole: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hasServiceLinkedRole: 'HasServiceLinkedRole',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hasServiceLinkedRole: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogCountRequest extends $tea.Model {
  DBInstanceId: string;
  queryKeywords?: string;
  startTime: string;
  database?: string;
  user?: string;
  endTime: string;
  executeCost?: string;
  sourceIP?: string;
  executeState?: string;
  operationClass?: string;
  operationType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      queryKeywords: 'QueryKeywords',
      startTime: 'StartTime',
      database: 'Database',
      user: 'User',
      endTime: 'EndTime',
      executeCost: 'ExecuteCost',
      sourceIP: 'SourceIP',
      executeState: 'ExecuteState',
      operationClass: 'OperationClass',
      operationType: 'OperationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      queryKeywords: 'string',
      startTime: 'string',
      database: 'string',
      user: 'string',
      endTime: 'string',
      executeCost: 'string',
      sourceIP: 'string',
      executeState: 'string',
      operationClass: 'string',
      operationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogCountResponse extends $tea.Model {
  requestId: string;
  DBClusterId: string;
  startTime: string;
  endTime: string;
  items: DescribeSQLLogCountResponseItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBClusterId: 'DBClusterId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBClusterId: 'string',
      startTime: 'string',
      endTime: 'string',
      items: { 'type': 'array', 'itemType': DescribeSQLLogCountResponseItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsRequest extends $tea.Model {
  DBInstanceId: string;
  queryKeywords?: string;
  startTime: string;
  database?: string;
  user?: string;
  endTime: string;
  pageSize?: number;
  pageNumber?: number;
  executeCost?: string;
  sourceIP?: string;
  executeState?: string;
  operationClass?: string;
  operationType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      queryKeywords: 'QueryKeywords',
      startTime: 'StartTime',
      database: 'Database',
      user: 'User',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      executeCost: 'ExecuteCost',
      sourceIP: 'SourceIP',
      executeState: 'ExecuteState',
      operationClass: 'OperationClass',
      operationType: 'OperationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      queryKeywords: 'string',
      startTime: 'string',
      database: 'string',
      user: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      executeCost: 'string',
      sourceIP: 'string',
      executeState: 'string',
      operationClass: 'string',
      operationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsResponse extends $tea.Model {
  requestId: string;
  pageNumber: number;
  pageRecordCount: number;
  items: DescribeSQLLogsResponseItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeSQLLogsResponseItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateECSDBInstanceRequest extends $tea.Model {
  ownerId?: number;
  regionId: string;
  zoneId: string;
  engineVersion: string;
  engine: string;
  instanceSpec: string;
  segNodeNum: number;
  segStorageType: string;
  storageSize: number;
  DBInstanceDescription?: string;
  securityIPList?: string;
  payType?: string;
  period?: string;
  usedTime?: string;
  clientToken?: string;
  instanceNetworkType?: string;
  VPCId?: string;
  vSwitchId?: string;
  privateIpAddress?: string;
  encryptionKey?: string;
  encryptionType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      engineVersion: 'EngineVersion',
      engine: 'Engine',
      instanceSpec: 'InstanceSpec',
      segNodeNum: 'SegNodeNum',
      segStorageType: 'SegStorageType',
      storageSize: 'StorageSize',
      DBInstanceDescription: 'DBInstanceDescription',
      securityIPList: 'SecurityIPList',
      payType: 'PayType',
      period: 'Period',
      usedTime: 'UsedTime',
      clientToken: 'ClientToken',
      instanceNetworkType: 'InstanceNetworkType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      privateIpAddress: 'PrivateIpAddress',
      encryptionKey: 'EncryptionKey',
      encryptionType: 'EncryptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      zoneId: 'string',
      engineVersion: 'string',
      engine: 'string',
      instanceSpec: 'string',
      segNodeNum: 'number',
      segStorageType: 'string',
      storageSize: 'number',
      DBInstanceDescription: 'string',
      securityIPList: 'string',
      payType: 'string',
      period: 'string',
      usedTime: 'string',
      clientToken: 'string',
      instanceNetworkType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      privateIpAddress: 'string',
      encryptionKey: 'string',
      encryptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateECSDBInstanceResponse extends $tea.Model {
  requestId: string;
  DBInstanceId: string;
  orderId: string;
  connectionString: string;
  port: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
      connectionString: 'ConnectionString',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceId: 'string',
      orderId: 'string',
      connectionString: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceRequest extends $tea.Model {
  DBInstanceId: string;
  key: string;
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      key: 'Key',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      key: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponse extends $tea.Model {
  requestId: string;
  DBClusterId: string;
  startTime: string;
  endTime: string;
  performanceKeys: DescribeDBClusterPerformanceResponsePerformanceKeys[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBClusterId: 'DBClusterId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      performanceKeys: 'PerformanceKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBClusterId: 'string',
      startTime: 'string',
      endTime: 'string',
      performanceKeys: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponsePerformanceKeys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceOnECSAttributeRequest extends $tea.Model {
  ownerId?: number;
  DBInstanceId: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceOnECSAttributeResponse extends $tea.Model {
  requestId: string;
  items: DescribeDBInstanceOnECSAttributeResponseItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: DescribeDBInstanceOnECSAttributeResponseItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesRequest extends $tea.Model {
  region: string;
  zoneId: string;
  chargeType?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      zoneId: 'ZoneId',
      chargeType: 'ChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      zoneId: 'string',
      chargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  resources: DescribeAvailableResourcesResponseResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      resources: { 'type': 'array', 'itemType': DescribeAvailableResourcesResponseResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLRequest extends $tea.Model {
  DBInstanceId: string;
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

export class DescribeDBInstanceSSLResponse extends $tea.Model {
  requestId: string;
  DBInstanceId: string;
  DBInstanceName: string;
  certCommonName: string;
  SSLExpiredTime: string;
  SSLEnabled: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      certCommonName: 'CertCommonName',
      SSLExpiredTime: 'SSLExpiredTime',
      SSLEnabled: 'SSLEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceId: 'string',
      DBInstanceName: 'string',
      certCommonName: 'string',
      SSLExpiredTime: 'string',
      SSLEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSSLRequest extends $tea.Model {
  DBInstanceId: string;
  connectionString?: string;
  SSLEnabled: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      connectionString: 'ConnectionString',
      SSLEnabled: 'SSLEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      connectionString: 'string',
      SSLEnabled: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSSLResponse extends $tea.Model {
  requestId: string;
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

export class DescribeTagsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId: string;
  resourceType: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponse extends $tea.Model {
  requestId: string;
  tags: DescribeTagsResponseTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeTagsResponseTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpecificationRequest extends $tea.Model {
  ownerId?: number;
  DBInstanceId?: string;
  storageType: string;
  cpuCores: number;
  totalNodeNum: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      DBInstanceId: 'DBInstanceId',
      storageType: 'StorageType',
      cpuCores: 'CpuCores',
      totalNodeNum: 'TotalNodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      DBInstanceId: 'string',
      storageType: 'string',
      cpuCores: 'number',
      totalNodeNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpecificationResponse extends $tea.Model {
  requestId: string;
  DBInstanceClass: DescribeSpecificationResponseDBInstanceClass[];
  DBInstanceGroupCount: DescribeSpecificationResponseDBInstanceGroupCount[];
  storageNotice: DescribeSpecificationResponseStorageNotice[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceGroupCount: 'DBInstanceGroupCount',
      storageNotice: 'StorageNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceClass: { 'type': 'array', 'itemType': DescribeSpecificationResponseDBInstanceClass },
      DBInstanceGroupCount: { 'type': 'array', 'itemType': DescribeSpecificationResponseDBInstanceGroupCount },
      storageNotice: { 'type': 'array', 'itemType': DescribeSpecificationResponseStorageNotice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBVersionRequest extends $tea.Model {
  ownerId?: number;
  regionId?: string;
  DBInstanceId: string;
  minorVersion?: string;
  majorVersion?: string;
  switchTimeMode?: string;
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
      minorVersion: 'MinorVersion',
      majorVersion: 'MajorVersion',
      switchTimeMode: 'SwitchTimeMode',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      DBInstanceId: 'string',
      minorVersion: 'string',
      majorVersion: 'string',
      switchTimeMode: 'string',
      switchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBVersionResponse extends $tea.Model {
  requestId: string;
  DBInstanceId: string;
  DBInstanceName: string;
  taskId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceId: 'string',
      DBInstanceName: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceRequest extends $tea.Model {
  ownerId?: number;
  regionId: string;
  DBInstanceClass: string;
  DBInstanceGroupCount: string;
  DBInstanceId: string;
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceGroupCount: 'DBInstanceGroupCount',
      DBInstanceId: 'DBInstanceId',
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      DBInstanceClass: 'string',
      DBInstanceGroupCount: 'string',
      DBInstanceId: 'string',
      payType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceResponse extends $tea.Model {
  requestId: string;
  DBInstanceId: string;
  orderId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId: string;
  resourceType: string;
  resourceId: string[];
  tagKey?: string[];
  all?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
      all: 'All',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
      all: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  requestId: string;
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

export class TagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId: string;
  resourceType: string;
  resourceId: string[];
  tag: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
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

export class TagResourcesResponse extends $tea.Model {
  requestId: string;
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

export class ListTagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId: string;
  resourceType: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  tagResources: ListTagResourcesResponseTagResources;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      tagResources: ListTagResourcesResponseTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVSwitchsRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVSwitchsResponse extends $tea.Model {
  requestId: string;
  vSwitches: DescribeRdsVSwitchsResponseVSwitches;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vSwitches: DescribeRdsVSwitchsResponseVSwitches,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsResponse extends $tea.Model {
  requestId: string;
  vpcs: DescribeRdsVpcsResponseVpcs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcs: 'Vpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcs: DescribeRdsVpcsResponseVpcs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBuDBInstanceRelationRequest extends $tea.Model {
  ownerId?: number;
  DBInstanceId: string;
  businessUnit: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      DBInstanceId: 'DBInstanceId',
      businessUnit: 'BusinessUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      DBInstanceId: 'string',
      businessUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBuDBInstanceRelationResponse extends $tea.Model {
  requestId: string;
  businessUnit: string;
  DBInstanceName: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      businessUnit: 'BusinessUnit',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      businessUnit: 'string',
      DBInstanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogRecordsRequest extends $tea.Model {
  DBInstanceId: string;
  queryKeywords?: string;
  startTime: string;
  database?: string;
  user?: string;
  form?: string;
  endTime: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      queryKeywords: 'QueryKeywords',
      startTime: 'StartTime',
      database: 'Database',
      user: 'User',
      form: 'Form',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      queryKeywords: 'string',
      startTime: 'string',
      database: 'string',
      user: 'string',
      form: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogRecordsResponse extends $tea.Model {
  requestId: string;
  totalRecordCount: number;
  pageNumber: number;
  pageRecordCount: number;
  items: DescribeSQLLogRecordsResponseItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalRecordCount: 'number',
      pageNumber: 'number',
      pageRecordCount: 'number',
      items: DescribeSQLLogRecordsResponseItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySQLCollectorPolicyRequest extends $tea.Model {
  DBInstanceId: string;
  SQLCollectorStatus: string;
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

export class ModifySQLCollectorPolicyResponse extends $tea.Model {
  requestId: string;
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

export class DescribeSQLLogFilesRequest extends $tea.Model {
  DBInstanceId: string;
  fileName?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      fileName: 'FileName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      fileName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogFilesResponse extends $tea.Model {
  requestId: string;
  totalRecordCount: number;
  pageNumber: number;
  pageRecordCount: number;
  items: DescribeSQLLogFilesResponseItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalRecordCount: 'number',
      pageNumber: 'number',
      pageRecordCount: 'number',
      items: DescribeSQLLogFilesResponseItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLCollectorPolicyRequest extends $tea.Model {
  DBInstanceId: string;
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

export class DescribeSQLCollectorPolicyResponse extends $tea.Model {
  requestId: string;
  SQLCollectorStatus: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SQLCollectorStatus: 'SQLCollectorStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SQLCollectorStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsRequest extends $tea.Model {
  DBInstanceId: string;
  SQLId?: number;
  startTime: string;
  endTime: string;
  DBName?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      SQLId: 'SQLId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      DBName: 'DBName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      SQLId: 'number',
      startTime: 'string',
      endTime: 'string',
      DBName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponse extends $tea.Model {
  requestId: string;
  engine: string;
  totalRecordCount: number;
  pageNumber: number;
  pageRecordCount: number;
  items: DescribeSlowLogRecordsResponseItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      engine: 'Engine',
      totalRecordCount: 'TotalRecordCount',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      engine: 'string',
      totalRecordCount: 'number',
      pageNumber: 'number',
      pageRecordCount: 'number',
      items: DescribeSlowLogRecordsResponseItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDBInstanceNetTypeRequest extends $tea.Model {
  DBInstanceId: string;
  connectionStringPrefix: string;
  port: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      connectionStringPrefix: 'ConnectionStringPrefix',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      connectionStringPrefix: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDBInstanceNetTypeResponse extends $tea.Model {
  requestId: string;
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

export class RestartDBInstanceRequest extends $tea.Model {
  clientToken?: string;
  DBInstanceId: string;
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

export class RestartDBInstanceResponse extends $tea.Model {
  requestId: string;
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

export class ResetAccountPasswordRequest extends $tea.Model {
  DBInstanceId: string;
  accountName: string;
  accountPassword: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      accountName: 'string',
      accountPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponse extends $tea.Model {
  requestId: string;
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

export class ReleaseInstancePublicConnectionRequest extends $tea.Model {
  DBInstanceId: string;
  currentConnectionString: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      currentConnectionString: 'CurrentConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      currentConnectionString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstancePublicConnectionResponse extends $tea.Model {
  requestId: string;
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

export class ModifySecurityIpsRequest extends $tea.Model {
  DBInstanceId: string;
  securityIPList: string;
  DBInstanceIPArrayName?: string;
  DBInstanceIPArrayAttribute?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      securityIPList: 'SecurityIPList',
      DBInstanceIPArrayName: 'DBInstanceIPArrayName',
      DBInstanceIPArrayAttribute: 'DBInstanceIPArrayAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      securityIPList: 'string',
      DBInstanceIPArrayName: 'string',
      DBInstanceIPArrayAttribute: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIpsResponse extends $tea.Model {
  requestId: string;
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

export class ModifyDBInstanceNetworkTypeRequest extends $tea.Model {
  DBInstanceId: string;
  instanceNetworkType: string;
  VPCId?: string;
  vSwitchId?: string;
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      instanceNetworkType: 'InstanceNetworkType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      instanceNetworkType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      privateIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceNetworkTypeResponse extends $tea.Model {
  requestId: string;
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

export class ModifyDBInstanceMaintainTimeRequest extends $tea.Model {
  DBInstanceId: string;
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMaintainTimeResponse extends $tea.Model {
  requestId: string;
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

export class ModifyDBInstanceDescriptionRequest extends $tea.Model {
  DBInstanceId: string;
  DBInstanceDescription: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBInstanceDescription: 'DBInstanceDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBInstanceDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceDescriptionResponse extends $tea.Model {
  requestId: string;
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

export class ModifyDBInstanceConnectionStringRequest extends $tea.Model {
  DBInstanceId: string;
  connectionStringPrefix: string;
  port: string;
  currentConnectionString: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      connectionStringPrefix: 'ConnectionStringPrefix',
      port: 'Port',
      currentConnectionString: 'CurrentConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      connectionStringPrefix: 'string',
      port: 'string',
      currentConnectionString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionStringResponse extends $tea.Model {
  requestId: string;
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

export class ModifyDBInstanceConnectionModeRequest extends $tea.Model {
  DBInstanceId: string;
  connectionMode: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      connectionMode: 'ConnectionMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      connectionMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionModeResponse extends $tea.Model {
  requestId: string;
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

export class ModifyAccountDescriptionRequest extends $tea.Model {
  DBInstanceId: string;
  accountName: string;
  accountDescription: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
      accountDescription: 'AccountDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      accountName: 'string',
      accountDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionResponse extends $tea.Model {
  requestId: string;
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

export class DescribeResourceUsageRequest extends $tea.Model {
  DBInstanceId: string;
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

export class DescribeResourceUsageResponse extends $tea.Model {
  requestId: string;
  DBInstanceId: string;
  engine: string;
  diskUsed: number;
  dataSize: number;
  logSize: number;
  backupSize: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      diskUsed: 'DiskUsed',
      dataSize: 'DataSize',
      logSize: 'LogSize',
      backupSize: 'BackupSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      diskUsed: 'number',
      dataSize: 'number',
      logSize: 'number',
      backupSize: 'number',
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

export class DescribeRegionsResponse extends $tea.Model {
  requestId: string;
  regions: DescribeRegionsResponseRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionsResponseRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesRequest extends $tea.Model {
  ownerId?: number;
  regionId: string;
  DBInstanceDescription?: string;
  instanceNetworkType?: string;
  DBInstanceIds?: string;
  tag?: DescribeDBInstancesRequestTag[];
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      DBInstanceDescription: 'DBInstanceDescription',
      instanceNetworkType: 'InstanceNetworkType',
      DBInstanceIds: 'DBInstanceIds',
      tag: 'Tag',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      DBInstanceDescription: 'string',
      instanceNetworkType: 'string',
      DBInstanceIds: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesRequestTag },
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponse extends $tea.Model {
  requestId: string;
  pageNumber: number;
  totalRecordCount: number;
  pageRecordCount: number;
  items: DescribeDBInstancesResponseItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalRecordCount: 'TotalRecordCount',
      pageRecordCount: 'PageRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      totalRecordCount: 'number',
      pageRecordCount: 'number',
      items: DescribeDBInstancesResponseItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceRequest extends $tea.Model {
  DBInstanceId: string;
  key: string;
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      key: 'Key',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      key: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponse extends $tea.Model {
  requestId: string;
  DBInstanceId: string;
  engine: string;
  startTime: string;
  endTime: string;
  performanceKeys: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      startTime: 'StartTime',
      endTime: 'EndTime',
      performanceKeys: 'PerformanceKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      startTime: 'string',
      endTime: 'string',
      performanceKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoRequest extends $tea.Model {
  DBInstanceId: string;
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

export class DescribeDBInstanceNetInfoResponse extends $tea.Model {
  requestId: string;
  instanceNetworkType: string;
  DBInstanceNetInfos: DescribeDBInstanceNetInfoResponseDBInstanceNetInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceNetworkType: 'InstanceNetworkType',
      DBInstanceNetInfos: 'DBInstanceNetInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceNetworkType: 'string',
      DBInstanceNetInfos: DescribeDBInstanceNetInfoResponseDBInstanceNetInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIPArrayListRequest extends $tea.Model {
  DBInstanceId: string;
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

export class DescribeDBInstanceIPArrayListResponse extends $tea.Model {
  requestId: string;
  items: DescribeDBInstanceIPArrayListResponseItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: DescribeDBInstanceIPArrayListResponseItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeRequest extends $tea.Model {
  ownerId?: number;
  DBInstanceId: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponse extends $tea.Model {
  requestId: string;
  items: DescribeDBInstanceAttributeResponseItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: DescribeDBInstanceAttributeResponseItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsRequest extends $tea.Model {
  DBInstanceId: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponse extends $tea.Model {
  requestId: string;
  accounts: DescribeAccountsResponseAccounts;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      accounts: DescribeAccountsResponseAccounts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceRequest extends $tea.Model {
  ownerId?: number;
  clientToken?: string;
  DBInstanceId: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceResponse extends $tea.Model {
  requestId: string;
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

export class DeleteDatabaseRequest extends $tea.Model {
  DBInstanceId: string;
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseResponse extends $tea.Model {
  requestId: string;
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

export class CreateDBInstanceRequest extends $tea.Model {
  ownerId?: number;
  regionId: string;
  zoneId: string;
  engineVersion: string;
  engine: string;
  DBInstanceClass: string;
  DBInstanceGroupCount: string;
  DBInstanceDescription?: string;
  securityIPList: string;
  payType?: string;
  period?: string;
  usedTime?: string;
  clientToken: string;
  instanceNetworkType?: string;
  VPCId?: string;
  vSwitchId?: string;
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      engineVersion: 'EngineVersion',
      engine: 'Engine',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceGroupCount: 'DBInstanceGroupCount',
      DBInstanceDescription: 'DBInstanceDescription',
      securityIPList: 'SecurityIPList',
      payType: 'PayType',
      period: 'Period',
      usedTime: 'UsedTime',
      clientToken: 'ClientToken',
      instanceNetworkType: 'InstanceNetworkType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      zoneId: 'string',
      engineVersion: 'string',
      engine: 'string',
      DBInstanceClass: 'string',
      DBInstanceGroupCount: 'string',
      DBInstanceDescription: 'string',
      securityIPList: 'string',
      payType: 'string',
      period: 'string',
      usedTime: 'string',
      clientToken: 'string',
      instanceNetworkType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      privateIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponse extends $tea.Model {
  requestId: string;
  DBInstanceId: string;
  orderId: string;
  connectionString: string;
  port: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
      connectionString: 'ConnectionString',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceId: 'string',
      orderId: 'string',
      connectionString: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountRequest extends $tea.Model {
  ownerId?: number;
  DBInstanceId: string;
  databaseName?: string;
  accountName: string;
  accountPassword: string;
  accountDescription?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      DBInstanceId: 'DBInstanceId',
      databaseName: 'DatabaseName',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountDescription: 'AccountDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      DBInstanceId: 'string',
      databaseName: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponse extends $tea.Model {
  requestId: string;
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

export class AllocateInstancePublicConnectionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId: string;
  connectionStringPrefix: string;
  port: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      connectionStringPrefix: 'ConnectionStringPrefix',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      connectionStringPrefix: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateInstancePublicConnectionResponse extends $tea.Model {
  requestId: string;
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

export class DescribeUserEncryptionKeyListResponseKmsKeys extends $tea.Model {
  keyId: string;
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

export class DescribeModifyParameterLogResponseChangelogs extends $tea.Model {
  parameterName: string;
  parameterValueBefore: string;
  parameterValueAfter: string;
  parameterValid: string;
  effectTime: string;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValueBefore: 'ParameterValueBefore',
      parameterValueAfter: 'ParameterValueAfter',
      parameterValid: 'ParameterValid',
      effectTime: 'EffectTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterValueBefore: 'string',
      parameterValueAfter: 'string',
      parameterValid: 'string',
      effectTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseParameters extends $tea.Model {
  parameterName: string;
  parameterValue: string;
  currentValue: string;
  parameterDescription: string;
  forceRestartInstance: string;
  isChangeableConfig: string;
  optionalRange: string;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      currentValue: 'CurrentValue',
      parameterDescription: 'ParameterDescription',
      forceRestartInstance: 'ForceRestartInstance',
      isChangeableConfig: 'IsChangeableConfig',
      optionalRange: 'OptionalRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterValue: 'string',
      currentValue: 'string',
      parameterDescription: 'string',
      forceRestartInstance: 'string',
      isChangeableConfig: 'string',
      optionalRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogCountResponseItemsSeriesValues extends $tea.Model {
  point: string[];
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

export class DescribeSQLLogCountResponseItemsSeries extends $tea.Model {
  values: DescribeSQLLogCountResponseItemsSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': DescribeSQLLogCountResponseItemsSeriesValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogCountResponseItems extends $tea.Model {
  name: string;
  series: DescribeSQLLogCountResponseItemsSeries[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      series: { 'type': 'array', 'itemType': DescribeSQLLogCountResponseItemsSeries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsResponseItems extends $tea.Model {
  DBName: string;
  accountName: string;
  operationExecuteTime: string;
  SQLText: string;
  returnRowCounts: number;
  executeCost: number;
  DBRole: string;
  sourceIP: string;
  sourcePort: number;
  executeState: string;
  operationClass: string;
  operationType: string;
  scanRowCounts: number;
  SQLPlan: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      accountName: 'AccountName',
      operationExecuteTime: 'OperationExecuteTime',
      SQLText: 'SQLText',
      returnRowCounts: 'ReturnRowCounts',
      executeCost: 'ExecuteCost',
      DBRole: 'DBRole',
      sourceIP: 'SourceIP',
      sourcePort: 'SourcePort',
      executeState: 'ExecuteState',
      operationClass: 'OperationClass',
      operationType: 'OperationType',
      scanRowCounts: 'ScanRowCounts',
      SQLPlan: 'SQLPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      accountName: 'string',
      operationExecuteTime: 'string',
      SQLText: 'string',
      returnRowCounts: 'number',
      executeCost: 'number',
      DBRole: 'string',
      sourceIP: 'string',
      sourcePort: 'number',
      executeState: 'string',
      operationClass: 'string',
      operationType: 'string',
      scanRowCounts: 'number',
      SQLPlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponsePerformanceKeysSeriesValues extends $tea.Model {
  point: string[];
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

export class DescribeDBClusterPerformanceResponsePerformanceKeysSeries extends $tea.Model {
  name: string;
  role: string;
  values: DescribeDBClusterPerformanceResponsePerformanceKeysSeriesValues[];
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
      values: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponsePerformanceKeysSeriesValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponsePerformanceKeys extends $tea.Model {
  unit: string;
  name: string;
  series: DescribeDBClusterPerformanceResponsePerformanceKeysSeries[];
  static names(): { [key: string]: string } {
    return {
      unit: 'Unit',
      name: 'Name',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unit: 'string',
      name: 'string',
      series: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponsePerformanceKeysSeries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceOnECSAttributeResponseItemsDBInstanceAttributeTagsTag extends $tea.Model {
  key: string;
  value: string;
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

export class DescribeDBInstanceOnECSAttributeResponseItemsDBInstanceAttributeTags extends $tea.Model {
  tag: DescribeDBInstanceOnECSAttributeResponseItemsDBInstanceAttributeTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstanceOnECSAttributeResponseItemsDBInstanceAttributeTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceOnECSAttributeResponseItemsDBInstanceAttribute extends $tea.Model {
  DBInstanceId: string;
  payType: string;
  regionId: string;
  engine: string;
  engineVersion: string;
  DBInstanceClass: string;
  DBInstanceStatus: string;
  DBInstanceDescription: string;
  lockMode: string;
  creationTime: string;
  expireTime: string;
  zoneId: string;
  instanceNetworkType: string;
  vpcId: string;
  connectionMode: string;
  storageType: string;
  instanceDeployType: string;
  segNodeNum: number;
  memorySize: number;
  cpuCores: number;
  storageSize: number;
  vSwitchId: string;
  connectionString: string;
  port: string;
  encryptionType: string;
  encryptionKey: string;
  tags: DescribeDBInstanceOnECSAttributeResponseItemsDBInstanceAttributeTags;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      payType: 'PayType',
      regionId: 'RegionId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceDescription: 'DBInstanceDescription',
      lockMode: 'LockMode',
      creationTime: 'CreationTime',
      expireTime: 'ExpireTime',
      zoneId: 'ZoneId',
      instanceNetworkType: 'InstanceNetworkType',
      vpcId: 'VpcId',
      connectionMode: 'ConnectionMode',
      storageType: 'StorageType',
      instanceDeployType: 'InstanceDeployType',
      segNodeNum: 'SegNodeNum',
      memorySize: 'MemorySize',
      cpuCores: 'CpuCores',
      storageSize: 'StorageSize',
      vSwitchId: 'VSwitchId',
      connectionString: 'ConnectionString',
      port: 'Port',
      encryptionType: 'EncryptionType',
      encryptionKey: 'EncryptionKey',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      payType: 'string',
      regionId: 'string',
      engine: 'string',
      engineVersion: 'string',
      DBInstanceClass: 'string',
      DBInstanceStatus: 'string',
      DBInstanceDescription: 'string',
      lockMode: 'string',
      creationTime: 'string',
      expireTime: 'string',
      zoneId: 'string',
      instanceNetworkType: 'string',
      vpcId: 'string',
      connectionMode: 'string',
      storageType: 'string',
      instanceDeployType: 'string',
      segNodeNum: 'number',
      memorySize: 'number',
      cpuCores: 'number',
      storageSize: 'number',
      vSwitchId: 'string',
      connectionString: 'string',
      port: 'string',
      encryptionType: 'string',
      encryptionKey: 'string',
      tags: DescribeDBInstanceOnECSAttributeResponseItemsDBInstanceAttributeTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceOnECSAttributeResponseItems extends $tea.Model {
  DBInstanceAttribute: DescribeDBInstanceOnECSAttributeResponseItemsDBInstanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceAttribute: 'DBInstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAttribute: { 'type': 'array', 'itemType': DescribeDBInstanceOnECSAttributeResponseItemsDBInstanceAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseResourcesSupportedEnginesSupportedInstanceClassesNodeCount extends $tea.Model {
  minCount: string;
  maxCount: string;
  step: string;
  static names(): { [key: string]: string } {
    return {
      minCount: 'MinCount',
      maxCount: 'MaxCount',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minCount: 'string',
      maxCount: 'string',
      step: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseResourcesSupportedEnginesSupportedInstanceClassesStorageSize extends $tea.Model {
  minCount: string;
  maxCount: string;
  step: string;
  static names(): { [key: string]: string } {
    return {
      minCount: 'MinCount',
      maxCount: 'MaxCount',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minCount: 'string',
      maxCount: 'string',
      step: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseResourcesSupportedEnginesSupportedInstanceClasses extends $tea.Model {
  displayClass: string;
  instanceClass: string;
  description: string;
  storageType: string;
  nodeCount: DescribeAvailableResourcesResponseResourcesSupportedEnginesSupportedInstanceClassesNodeCount;
  storageSize: DescribeAvailableResourcesResponseResourcesSupportedEnginesSupportedInstanceClassesStorageSize;
  static names(): { [key: string]: string } {
    return {
      displayClass: 'DisplayClass',
      instanceClass: 'InstanceClass',
      description: 'Description',
      storageType: 'StorageType',
      nodeCount: 'NodeCount',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayClass: 'string',
      instanceClass: 'string',
      description: 'string',
      storageType: 'string',
      nodeCount: DescribeAvailableResourcesResponseResourcesSupportedEnginesSupportedInstanceClassesNodeCount,
      storageSize: DescribeAvailableResourcesResponseResourcesSupportedEnginesSupportedInstanceClassesStorageSize,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseResourcesSupportedEngines extends $tea.Model {
  supportedEngineVersion: string;
  mode: string;
  supportedInstanceClasses: DescribeAvailableResourcesResponseResourcesSupportedEnginesSupportedInstanceClasses[];
  static names(): { [key: string]: string } {
    return {
      supportedEngineVersion: 'SupportedEngineVersion',
      mode: 'Mode',
      supportedInstanceClasses: 'SupportedInstanceClasses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngineVersion: 'string',
      mode: 'string',
      supportedInstanceClasses: { 'type': 'array', 'itemType': DescribeAvailableResourcesResponseResourcesSupportedEnginesSupportedInstanceClasses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseResources extends $tea.Model {
  zoneId: string;
  supportedEngines: DescribeAvailableResourcesResponseResourcesSupportedEngines[];
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      supportedEngines: 'SupportedEngines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      supportedEngines: { 'type': 'array', 'itemType': DescribeAvailableResourcesResponseResourcesSupportedEngines },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseTags extends $tea.Model {
  tagKey: string;
  tagValue: string;
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

export class DescribeSpecificationResponseDBInstanceClass extends $tea.Model {
  text: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpecificationResponseDBInstanceGroupCount extends $tea.Model {
  text: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpecificationResponseStorageNotice extends $tea.Model {
  text: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      value: 'string',
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

export class ListTagResourcesResponseTagResourcesTagResource extends $tea.Model {
  tagKey: string;
  tagValue: string;
  resourceType: string;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
      resourceType: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseTagResources extends $tea.Model {
  tagResource: ListTagResourcesResponseTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVSwitchsResponseVSwitchesVSwitch extends $tea.Model {
  vSwitchId: string;
  vSwitchName: string;
  izNo: string;
  bid: string;
  aliUid: string;
  regionNo: string;
  cidrBlock: string;
  isDefault: boolean;
  status: string;
  gmtCreate: string;
  gmtModified: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      izNo: 'IzNo',
      bid: 'Bid',
      aliUid: 'AliUid',
      regionNo: 'RegionNo',
      cidrBlock: 'CidrBlock',
      isDefault: 'IsDefault',
      status: 'Status',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      vSwitchName: 'string',
      izNo: 'string',
      bid: 'string',
      aliUid: 'string',
      regionNo: 'string',
      cidrBlock: 'string',
      isDefault: 'boolean',
      status: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVSwitchsResponseVSwitches extends $tea.Model {
  vSwitch: DescribeRdsVSwitchsResponseVSwitchesVSwitch[];
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'VSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: { 'type': 'array', 'itemType': DescribeRdsVSwitchsResponseVSwitchesVSwitch },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsResponseVpcsVpcVSwitchs extends $tea.Model {
  vSwitchId: string;
  vSwitchName: string;
  izNo: string;
  cidrBlock: string;
  isDefault: boolean;
  status: string;
  gmtCreate: string;
  gmtModified: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      izNo: 'IzNo',
      cidrBlock: 'CidrBlock',
      isDefault: 'IsDefault',
      status: 'Status',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      vSwitchName: 'string',
      izNo: 'string',
      cidrBlock: 'string',
      isDefault: 'boolean',
      status: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsResponseVpcsVpc extends $tea.Model {
  vpcId: string;
  vpcName: string;
  bid: string;
  aliUid: string;
  regionNo: string;
  cidrBlock: string;
  isDefault: boolean;
  status: string;
  gmtCreate: string;
  gmtModified: string;
  vSwitchs: DescribeRdsVpcsResponseVpcsVpcVSwitchs[];
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      bid: 'Bid',
      aliUid: 'AliUid',
      regionNo: 'RegionNo',
      cidrBlock: 'CidrBlock',
      isDefault: 'IsDefault',
      status: 'Status',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      vSwitchs: 'VSwitchs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vpcName: 'string',
      bid: 'string',
      aliUid: 'string',
      regionNo: 'string',
      cidrBlock: 'string',
      isDefault: 'boolean',
      status: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      vSwitchs: { 'type': 'array', 'itemType': DescribeRdsVpcsResponseVpcsVpcVSwitchs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsResponseVpcs extends $tea.Model {
  vpc: DescribeRdsVpcsResponseVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeRdsVpcsResponseVpcsVpc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogRecordsResponseItemsSQLRecord extends $tea.Model {
  DBName: string;
  accountName: string;
  hostAddress: string;
  SQLText: string;
  totalExecutionTimes: number;
  returnRowCounts: number;
  executeTime: string;
  threadID: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      accountName: 'AccountName',
      hostAddress: 'HostAddress',
      SQLText: 'SQLText',
      totalExecutionTimes: 'TotalExecutionTimes',
      returnRowCounts: 'ReturnRowCounts',
      executeTime: 'ExecuteTime',
      threadID: 'ThreadID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      accountName: 'string',
      hostAddress: 'string',
      SQLText: 'string',
      totalExecutionTimes: 'number',
      returnRowCounts: 'number',
      executeTime: 'string',
      threadID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogRecordsResponseItems extends $tea.Model {
  SQLRecord: DescribeSQLLogRecordsResponseItemsSQLRecord[];
  static names(): { [key: string]: string } {
    return {
      SQLRecord: 'SQLRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLRecord: { 'type': 'array', 'itemType': DescribeSQLLogRecordsResponseItemsSQLRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogFilesResponseItemsLogFile extends $tea.Model {
  fileID: string;
  logStatus: string;
  logDownloadURL: string;
  logSize: string;
  logStartTime: string;
  logEndTime: string;
  static names(): { [key: string]: string } {
    return {
      fileID: 'FileID',
      logStatus: 'LogStatus',
      logDownloadURL: 'LogDownloadURL',
      logSize: 'LogSize',
      logStartTime: 'LogStartTime',
      logEndTime: 'LogEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileID: 'string',
      logStatus: 'string',
      logDownloadURL: 'string',
      logSize: 'string',
      logStartTime: 'string',
      logEndTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogFilesResponseItems extends $tea.Model {
  logFile: DescribeSQLLogFilesResponseItemsLogFile[];
  static names(): { [key: string]: string } {
    return {
      logFile: 'LogFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logFile: { 'type': 'array', 'itemType': DescribeSQLLogFilesResponseItemsLogFile },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseItemsSQLSlowRecord extends $tea.Model {
  hostAddress: string;
  DBName: string;
  SQLText: string;
  queryTimes: number;
  lockTimes: number;
  parseRowCounts: number;
  returnRowCounts: number;
  executionStartTime: string;
  static names(): { [key: string]: string } {
    return {
      hostAddress: 'HostAddress',
      DBName: 'DBName',
      SQLText: 'SQLText',
      queryTimes: 'QueryTimes',
      lockTimes: 'LockTimes',
      parseRowCounts: 'ParseRowCounts',
      returnRowCounts: 'ReturnRowCounts',
      executionStartTime: 'ExecutionStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAddress: 'string',
      DBName: 'string',
      SQLText: 'string',
      queryTimes: 'number',
      lockTimes: 'number',
      parseRowCounts: 'number',
      returnRowCounts: 'number',
      executionStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseItems extends $tea.Model {
  SQLSlowRecord: DescribeSlowLogRecordsResponseItemsSQLSlowRecord[];
  static names(): { [key: string]: string } {
    return {
      SQLSlowRecord: 'SQLSlowRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLSlowRecord: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseItemsSQLSlowRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseRegionsRegionZonesZone extends $tea.Model {
  zoneId: string;
  vpcEnabled: boolean;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      vpcEnabled: 'VpcEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      vpcEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseRegionsRegionZones extends $tea.Model {
  zone: DescribeRegionsResponseRegionsRegionZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeRegionsResponseRegionsRegionZonesZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseRegionsRegion extends $tea.Model {
  regionId: string;
  zones: DescribeRegionsResponseRegionsRegionZones;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zones: DescribeRegionsResponseRegionsRegionZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseRegions extends $tea.Model {
  region: DescribeRegionsResponseRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseRegionsRegion },
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

export class DescribeDBInstancesResponseItemsDBInstanceTagsTag extends $tea.Model {
  key: string;
  value: string;
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

export class DescribeDBInstancesResponseItemsDBInstanceTags extends $tea.Model {
  tag: DescribeDBInstancesResponseItemsDBInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesResponseItemsDBInstanceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseItemsDBInstance extends $tea.Model {
  DBInstanceId: string;
  DBInstanceDescription: string;
  payType: string;
  instanceNetworkType: string;
  connectionMode: string;
  regionId: string;
  zoneId: string;
  expireTime: string;
  DBInstanceStatus: string;
  engine: string;
  engineVersion: string;
  DBInstanceNetType: string;
  lockMode: string;
  lockReason: string;
  createTime: string;
  vpcId: string;
  vSwitchId: string;
  instanceDeployType: string;
  tags: DescribeDBInstancesResponseItemsDBInstanceTags;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBInstanceDescription: 'DBInstanceDescription',
      payType: 'PayType',
      instanceNetworkType: 'InstanceNetworkType',
      connectionMode: 'ConnectionMode',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      expireTime: 'ExpireTime',
      DBInstanceStatus: 'DBInstanceStatus',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      DBInstanceNetType: 'DBInstanceNetType',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      createTime: 'CreateTime',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      instanceDeployType: 'InstanceDeployType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBInstanceDescription: 'string',
      payType: 'string',
      instanceNetworkType: 'string',
      connectionMode: 'string',
      regionId: 'string',
      zoneId: 'string',
      expireTime: 'string',
      DBInstanceStatus: 'string',
      engine: 'string',
      engineVersion: 'string',
      DBInstanceNetType: 'string',
      lockMode: 'string',
      lockReason: 'string',
      createTime: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      instanceDeployType: 'string',
      tags: DescribeDBInstancesResponseItemsDBInstanceTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseItems extends $tea.Model {
  DBInstance: DescribeDBInstancesResponseItemsDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDBInstancesResponseItemsDBInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseDBInstanceNetInfosDBInstanceNetInfo extends $tea.Model {
  connectionString: string;
  IPAddress: string;
  IPType: string;
  port: string;
  VPCId: string;
  vSwitchId: string;
  vpcInstanceId: string;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeDBInstanceNetInfoResponseDBInstanceNetInfos extends $tea.Model {
  DBInstanceNetInfo: DescribeDBInstanceNetInfoResponseDBInstanceNetInfosDBInstanceNetInfo[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceNetInfo: 'DBInstanceNetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceNetInfo: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseDBInstanceNetInfosDBInstanceNetInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIPArrayListResponseItemsDBInstanceIPArray extends $tea.Model {
  DBInstanceIPArrayName: string;
  DBInstanceIPArrayAttribute: string;
  securityIPList: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArrayName: 'DBInstanceIPArrayName',
      DBInstanceIPArrayAttribute: 'DBInstanceIPArrayAttribute',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArrayName: 'string',
      DBInstanceIPArrayAttribute: 'string',
      securityIPList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIPArrayListResponseItems extends $tea.Model {
  DBInstanceIPArray: DescribeDBInstanceIPArrayListResponseItemsDBInstanceIPArray[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArray: 'DBInstanceIPArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArray: { 'type': 'array', 'itemType': DescribeDBInstanceIPArrayListResponseItemsDBInstanceIPArray },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseItemsDBInstanceAttributeTagsTag extends $tea.Model {
  key: string;
  value: string;
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

export class DescribeDBInstanceAttributeResponseItemsDBInstanceAttributeTags extends $tea.Model {
  tag: DescribeDBInstanceAttributeResponseItemsDBInstanceAttributeTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseItemsDBInstanceAttributeTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseItemsDBInstanceAttribute extends $tea.Model {
  DBInstanceId: string;
  payType: string;
  DBInstanceClassType: string;
  regionId: string;
  connectionString: string;
  port: string;
  engine: string;
  engineVersion: string;
  DBInstanceClass: string;
  DBInstanceCpuCores: number;
  DBInstanceMemory: number;
  DBInstanceStorage: number;
  DBInstanceDiskMBPS: number;
  hostType: string;
  DBInstanceGroupCount: string;
  DBInstanceNetType: string;
  DBInstanceStatus: string;
  DBInstanceDescription: string;
  lockMode: string;
  lockReason: string;
  readDelayTime: string;
  creationTime: string;
  expireTime: string;
  maintainStartTime: string;
  maintainEndTime: string;
  availabilityValue: string;
  maxConnections: number;
  securityIPList: string;
  zoneId: string;
  instanceNetworkType: string;
  vpcId: string;
  connectionMode: string;
  storageType: string;
  cpuCoresPerNode: number;
  segmentCounts: number;
  storagePerNode: number;
  memoryPerNode: number;
  storageUnit: string;
  memoryUnit: string;
  tags: DescribeDBInstanceAttributeResponseItemsDBInstanceAttributeTags;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      payType: 'PayType',
      DBInstanceClassType: 'DBInstanceClassType',
      regionId: 'RegionId',
      connectionString: 'ConnectionString',
      port: 'Port',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceCpuCores: 'DBInstanceCpuCores',
      DBInstanceMemory: 'DBInstanceMemory',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceDiskMBPS: 'DBInstanceDiskMBPS',
      hostType: 'HostType',
      DBInstanceGroupCount: 'DBInstanceGroupCount',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceDescription: 'DBInstanceDescription',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      readDelayTime: 'ReadDelayTime',
      creationTime: 'CreationTime',
      expireTime: 'ExpireTime',
      maintainStartTime: 'MaintainStartTime',
      maintainEndTime: 'MaintainEndTime',
      availabilityValue: 'AvailabilityValue',
      maxConnections: 'MaxConnections',
      securityIPList: 'SecurityIPList',
      zoneId: 'ZoneId',
      instanceNetworkType: 'InstanceNetworkType',
      vpcId: 'VpcId',
      connectionMode: 'ConnectionMode',
      storageType: 'StorageType',
      cpuCoresPerNode: 'CpuCoresPerNode',
      segmentCounts: 'SegmentCounts',
      storagePerNode: 'StoragePerNode',
      memoryPerNode: 'MemoryPerNode',
      storageUnit: 'StorageUnit',
      memoryUnit: 'MemoryUnit',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      payType: 'string',
      DBInstanceClassType: 'string',
      regionId: 'string',
      connectionString: 'string',
      port: 'string',
      engine: 'string',
      engineVersion: 'string',
      DBInstanceClass: 'string',
      DBInstanceCpuCores: 'number',
      DBInstanceMemory: 'number',
      DBInstanceStorage: 'number',
      DBInstanceDiskMBPS: 'number',
      hostType: 'string',
      DBInstanceGroupCount: 'string',
      DBInstanceNetType: 'string',
      DBInstanceStatus: 'string',
      DBInstanceDescription: 'string',
      lockMode: 'string',
      lockReason: 'string',
      readDelayTime: 'string',
      creationTime: 'string',
      expireTime: 'string',
      maintainStartTime: 'string',
      maintainEndTime: 'string',
      availabilityValue: 'string',
      maxConnections: 'number',
      securityIPList: 'string',
      zoneId: 'string',
      instanceNetworkType: 'string',
      vpcId: 'string',
      connectionMode: 'string',
      storageType: 'string',
      cpuCoresPerNode: 'number',
      segmentCounts: 'number',
      storagePerNode: 'number',
      memoryPerNode: 'number',
      storageUnit: 'string',
      memoryUnit: 'string',
      tags: DescribeDBInstanceAttributeResponseItemsDBInstanceAttributeTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseItems extends $tea.Model {
  DBInstanceAttribute: DescribeDBInstanceAttributeResponseItemsDBInstanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceAttribute: 'DBInstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAttribute: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseItemsDBInstanceAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseAccountsDBInstanceAccount extends $tea.Model {
  DBInstanceId: string;
  accountName: string;
  accountStatus: string;
  accountDescription: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      accountDescription: 'AccountDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      accountName: 'string',
      accountStatus: 'string',
      accountDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseAccounts extends $tea.Model {
  DBInstanceAccount: DescribeAccountsResponseAccountsDBInstanceAccount[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceAccount: 'DBInstanceAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAccount: { 'type': 'array', 'itemType': DescribeAccountsResponseAccountsDBInstanceAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
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


  async describeUserEncryptionKeyListWithOptions(request: DescribeUserEncryptionKeyListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserEncryptionKeyListResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeUserEncryptionKeyListResponse>(await this.doRequest("DescribeUserEncryptionKeyList", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeUserEncryptionKeyListResponse({}));
  }

  async describeUserEncryptionKeyList(request: DescribeUserEncryptionKeyListRequest): Promise<DescribeUserEncryptionKeyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserEncryptionKeyListWithOptions(request, runtime);
  }

  async describeModifyParameterLogWithOptions(request: DescribeModifyParameterLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeModifyParameterLogResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeModifyParameterLogResponse>(await this.doRequest("DescribeModifyParameterLog", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeModifyParameterLogResponse({}));
  }

  async describeModifyParameterLog(request: DescribeModifyParameterLogRequest): Promise<DescribeModifyParameterLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeModifyParameterLogWithOptions(request, runtime);
  }

  async describeParametersWithOptions(request: DescribeParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParametersResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeParametersResponse>(await this.doRequest("DescribeParameters", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeParametersResponse({}));
  }

  async describeParameters(request: DescribeParametersRequest): Promise<DescribeParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
  }

  async modifyParametersWithOptions(request: ModifyParametersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyParametersResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyParametersResponse>(await this.doRequest("ModifyParameters", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new ModifyParametersResponse({}));
  }

  async modifyParameters(request: ModifyParametersRequest): Promise<ModifyParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyParametersWithOptions(request, runtime);
  }

  async createServiceLinkedRoleWithOptions(request: CreateServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateServiceLinkedRoleResponse>(await this.doRequest("CreateServiceLinkedRole", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new CreateServiceLinkedRoleResponse({}));
  }

  async createServiceLinkedRole(request: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  async checkServiceLinkedRoleWithOptions(request: CheckServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CheckServiceLinkedRoleResponse> {
    Util.validateModel(request);
    return $tea.cast<CheckServiceLinkedRoleResponse>(await this.doRequest("CheckServiceLinkedRole", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new CheckServiceLinkedRoleResponse({}));
  }

  async checkServiceLinkedRole(request: CheckServiceLinkedRoleRequest): Promise<CheckServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleWithOptions(request, runtime);
  }

  async describeSQLLogCountWithOptions(request: DescribeSQLLogCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLLogCountResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSQLLogCountResponse>(await this.doRequest("DescribeSQLLogCount", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeSQLLogCountResponse({}));
  }

  async describeSQLLogCount(request: DescribeSQLLogCountRequest): Promise<DescribeSQLLogCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLLogCountWithOptions(request, runtime);
  }

  async describeSQLLogsWithOptions(request: DescribeSQLLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLLogsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSQLLogsResponse>(await this.doRequest("DescribeSQLLogs", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeSQLLogsResponse({}));
  }

  async describeSQLLogs(request: DescribeSQLLogsRequest): Promise<DescribeSQLLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLLogsWithOptions(request, runtime);
  }

  async createECSDBInstanceWithOptions(request: CreateECSDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateECSDBInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateECSDBInstanceResponse>(await this.doRequest("CreateECSDBInstance", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new CreateECSDBInstanceResponse({}));
  }

  async createECSDBInstance(request: CreateECSDBInstanceRequest): Promise<CreateECSDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createECSDBInstanceWithOptions(request, runtime);
  }

  async describeDBClusterPerformanceWithOptions(request: DescribeDBClusterPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterPerformanceResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDBClusterPerformanceResponse>(await this.doRequest("DescribeDBClusterPerformance", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeDBClusterPerformanceResponse({}));
  }

  async describeDBClusterPerformance(request: DescribeDBClusterPerformanceRequest): Promise<DescribeDBClusterPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterPerformanceWithOptions(request, runtime);
  }

  async describeDBInstanceOnECSAttributeWithOptions(request: DescribeDBInstanceOnECSAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceOnECSAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDBInstanceOnECSAttributeResponse>(await this.doRequest("DescribeDBInstanceOnECSAttribute", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeDBInstanceOnECSAttributeResponse({}));
  }

  async describeDBInstanceOnECSAttribute(request: DescribeDBInstanceOnECSAttributeRequest): Promise<DescribeDBInstanceOnECSAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceOnECSAttributeWithOptions(request, runtime);
  }

  async describeAvailableResourcesWithOptions(request: DescribeAvailableResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeAvailableResourcesResponse>(await this.doRequest("DescribeAvailableResources", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeAvailableResourcesResponse({}));
  }

  async describeAvailableResources(request: DescribeAvailableResourcesRequest): Promise<DescribeAvailableResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourcesWithOptions(request, runtime);
  }

  async describeDBInstanceSSLWithOptions(request: DescribeDBInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceSSLResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDBInstanceSSLResponse>(await this.doRequest("DescribeDBInstanceSSL", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeDBInstanceSSLResponse({}));
  }

  async describeDBInstanceSSL(request: DescribeDBInstanceSSLRequest): Promise<DescribeDBInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceSSLWithOptions(request, runtime);
  }

  async modifyDBInstanceSSLWithOptions(request: ModifyDBInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceSSLResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDBInstanceSSLResponse>(await this.doRequest("ModifyDBInstanceSSL", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new ModifyDBInstanceSSLResponse({}));
  }

  async modifyDBInstanceSSL(request: ModifyDBInstanceSSLRequest): Promise<ModifyDBInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceSSLWithOptions(request, runtime);
  }

  async describeTagsWithOptions(request: DescribeTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeTagsResponse>(await this.doRequest("DescribeTags", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeTagsResponse({}));
  }

  async describeTags(request: DescribeTagsRequest): Promise<DescribeTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  async describeSpecificationWithOptions(request: DescribeSpecificationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSpecificationResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSpecificationResponse>(await this.doRequest("DescribeSpecification", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeSpecificationResponse({}));
  }

  async describeSpecification(request: DescribeSpecificationRequest): Promise<DescribeSpecificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSpecificationWithOptions(request, runtime);
  }

  async upgradeDBVersionWithOptions(request: UpgradeDBVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeDBVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<UpgradeDBVersionResponse>(await this.doRequest("UpgradeDBVersion", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new UpgradeDBVersionResponse({}));
  }

  async upgradeDBVersion(request: UpgradeDBVersionRequest): Promise<UpgradeDBVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBVersionWithOptions(request, runtime);
  }

  async upgradeDBInstanceWithOptions(request: UpgradeDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeDBInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<UpgradeDBInstanceResponse>(await this.doRequest("UpgradeDBInstance", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new UpgradeDBInstanceResponse({}));
  }

  async upgradeDBInstance(request: UpgradeDBInstanceRequest): Promise<UpgradeDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBInstanceWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<UntagResourcesResponse>(await this.doRequest("UntagResources", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<TagResourcesResponse>(await this.doRequest("TagResources", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListTagResourcesResponse>(await this.doRequest("ListTagResources", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async describeRdsVSwitchsWithOptions(request: DescribeRdsVSwitchsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsVSwitchsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRdsVSwitchsResponse>(await this.doRequest("DescribeRdsVSwitchs", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeRdsVSwitchsResponse({}));
  }

  async describeRdsVSwitchs(request: DescribeRdsVSwitchsRequest): Promise<DescribeRdsVSwitchsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsVSwitchsWithOptions(request, runtime);
  }

  async describeRdsVpcsWithOptions(request: DescribeRdsVpcsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsVpcsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRdsVpcsResponse>(await this.doRequest("DescribeRdsVpcs", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeRdsVpcsResponse({}));
  }

  async describeRdsVpcs(request: DescribeRdsVpcsRequest): Promise<DescribeRdsVpcsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsVpcsWithOptions(request, runtime);
  }

  async addBuDBInstanceRelationWithOptions(request: AddBuDBInstanceRelationRequest, runtime: $Util.RuntimeOptions): Promise<AddBuDBInstanceRelationResponse> {
    Util.validateModel(request);
    return $tea.cast<AddBuDBInstanceRelationResponse>(await this.doRequest("AddBuDBInstanceRelation", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new AddBuDBInstanceRelationResponse({}));
  }

  async addBuDBInstanceRelation(request: AddBuDBInstanceRelationRequest): Promise<AddBuDBInstanceRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBuDBInstanceRelationWithOptions(request, runtime);
  }

  async describeSQLLogRecordsWithOptions(request: DescribeSQLLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLLogRecordsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSQLLogRecordsResponse>(await this.doRequest("DescribeSQLLogRecords", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeSQLLogRecordsResponse({}));
  }

  async describeSQLLogRecords(request: DescribeSQLLogRecordsRequest): Promise<DescribeSQLLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLLogRecordsWithOptions(request, runtime);
  }

  async modifySQLCollectorPolicyWithOptions(request: ModifySQLCollectorPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifySQLCollectorPolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifySQLCollectorPolicyResponse>(await this.doRequest("ModifySQLCollectorPolicy", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new ModifySQLCollectorPolicyResponse({}));
  }

  async modifySQLCollectorPolicy(request: ModifySQLCollectorPolicyRequest): Promise<ModifySQLCollectorPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySQLCollectorPolicyWithOptions(request, runtime);
  }

  async describeSQLLogFilesWithOptions(request: DescribeSQLLogFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLLogFilesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSQLLogFilesResponse>(await this.doRequest("DescribeSQLLogFiles", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeSQLLogFilesResponse({}));
  }

  async describeSQLLogFiles(request: DescribeSQLLogFilesRequest): Promise<DescribeSQLLogFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLLogFilesWithOptions(request, runtime);
  }

  async describeSQLCollectorPolicyWithOptions(request: DescribeSQLCollectorPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLCollectorPolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSQLCollectorPolicyResponse>(await this.doRequest("DescribeSQLCollectorPolicy", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeSQLCollectorPolicyResponse({}));
  }

  async describeSQLCollectorPolicy(request: DescribeSQLCollectorPolicyRequest): Promise<DescribeSQLCollectorPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLCollectorPolicyWithOptions(request, runtime);
  }

  async describeSlowLogRecordsWithOptions(request: DescribeSlowLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowLogRecordsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSlowLogRecordsResponse>(await this.doRequest("DescribeSlowLogRecords", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeSlowLogRecordsResponse({}));
  }

  async describeSlowLogRecords(request: DescribeSlowLogRecordsRequest): Promise<DescribeSlowLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  async switchDBInstanceNetTypeWithOptions(request: SwitchDBInstanceNetTypeRequest, runtime: $Util.RuntimeOptions): Promise<SwitchDBInstanceNetTypeResponse> {
    Util.validateModel(request);
    return $tea.cast<SwitchDBInstanceNetTypeResponse>(await this.doRequest("SwitchDBInstanceNetType", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new SwitchDBInstanceNetTypeResponse({}));
  }

  async switchDBInstanceNetType(request: SwitchDBInstanceNetTypeRequest): Promise<SwitchDBInstanceNetTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchDBInstanceNetTypeWithOptions(request, runtime);
  }

  async restartDBInstanceWithOptions(request: RestartDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartDBInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<RestartDBInstanceResponse>(await this.doRequest("RestartDBInstance", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new RestartDBInstanceResponse({}));
  }

  async restartDBInstance(request: RestartDBInstanceRequest): Promise<RestartDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDBInstanceWithOptions(request, runtime);
  }

  async resetAccountPasswordWithOptions(request: ResetAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetAccountPasswordResponse> {
    Util.validateModel(request);
    return $tea.cast<ResetAccountPasswordResponse>(await this.doRequest("ResetAccountPassword", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new ResetAccountPasswordResponse({}));
  }

  async resetAccountPassword(request: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  async releaseInstancePublicConnectionWithOptions(request: ReleaseInstancePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstancePublicConnectionResponse> {
    Util.validateModel(request);
    return $tea.cast<ReleaseInstancePublicConnectionResponse>(await this.doRequest("ReleaseInstancePublicConnection", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new ReleaseInstancePublicConnectionResponse({}));
  }

  async releaseInstancePublicConnection(request: ReleaseInstancePublicConnectionRequest): Promise<ReleaseInstancePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstancePublicConnectionWithOptions(request, runtime);
  }

  async modifySecurityIpsWithOptions(request: ModifySecurityIpsRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityIpsResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifySecurityIpsResponse>(await this.doRequest("ModifySecurityIps", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new ModifySecurityIpsResponse({}));
  }

  async modifySecurityIps(request: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityIpsWithOptions(request, runtime);
  }

  async modifyDBInstanceNetworkTypeWithOptions(request: ModifyDBInstanceNetworkTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceNetworkTypeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDBInstanceNetworkTypeResponse>(await this.doRequest("ModifyDBInstanceNetworkType", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new ModifyDBInstanceNetworkTypeResponse({}));
  }

  async modifyDBInstanceNetworkType(request: ModifyDBInstanceNetworkTypeRequest): Promise<ModifyDBInstanceNetworkTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceNetworkTypeWithOptions(request, runtime);
  }

  async modifyDBInstanceMaintainTimeWithOptions(request: ModifyDBInstanceMaintainTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceMaintainTimeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDBInstanceMaintainTimeResponse>(await this.doRequest("ModifyDBInstanceMaintainTime", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new ModifyDBInstanceMaintainTimeResponse({}));
  }

  async modifyDBInstanceMaintainTime(request: ModifyDBInstanceMaintainTimeRequest): Promise<ModifyDBInstanceMaintainTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceMaintainTimeWithOptions(request, runtime);
  }

  async modifyDBInstanceDescriptionWithOptions(request: ModifyDBInstanceDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceDescriptionResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDBInstanceDescriptionResponse>(await this.doRequest("ModifyDBInstanceDescription", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new ModifyDBInstanceDescriptionResponse({}));
  }

  async modifyDBInstanceDescription(request: ModifyDBInstanceDescriptionRequest): Promise<ModifyDBInstanceDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceDescriptionWithOptions(request, runtime);
  }

  async modifyDBInstanceConnectionStringWithOptions(request: ModifyDBInstanceConnectionStringRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceConnectionStringResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDBInstanceConnectionStringResponse>(await this.doRequest("ModifyDBInstanceConnectionString", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new ModifyDBInstanceConnectionStringResponse({}));
  }

  async modifyDBInstanceConnectionString(request: ModifyDBInstanceConnectionStringRequest): Promise<ModifyDBInstanceConnectionStringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceConnectionStringWithOptions(request, runtime);
  }

  async modifyDBInstanceConnectionModeWithOptions(request: ModifyDBInstanceConnectionModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceConnectionModeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDBInstanceConnectionModeResponse>(await this.doRequest("ModifyDBInstanceConnectionMode", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new ModifyDBInstanceConnectionModeResponse({}));
  }

  async modifyDBInstanceConnectionMode(request: ModifyDBInstanceConnectionModeRequest): Promise<ModifyDBInstanceConnectionModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceConnectionModeWithOptions(request, runtime);
  }

  async modifyAccountDescriptionWithOptions(request: ModifyAccountDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountDescriptionResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyAccountDescriptionResponse>(await this.doRequest("ModifyAccountDescription", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new ModifyAccountDescriptionResponse({}));
  }

  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  async describeResourceUsageWithOptions(request: DescribeResourceUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceUsageResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeResourceUsageResponse>(await this.doRequest("DescribeResourceUsage", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeResourceUsageResponse({}));
  }

  async describeResourceUsage(request: DescribeResourceUsageRequest): Promise<DescribeResourceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceUsageWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRegionsResponse>(await this.doRequest("DescribeRegions", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeDBInstancesWithOptions(request: DescribeDBInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDBInstancesResponse>(await this.doRequest("DescribeDBInstances", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeDBInstancesResponse({}));
  }

  async describeDBInstances(request: DescribeDBInstancesRequest): Promise<DescribeDBInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancesWithOptions(request, runtime);
  }

  async describeDBInstancePerformanceWithOptions(request: DescribeDBInstancePerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancePerformanceResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDBInstancePerformanceResponse>(await this.doRequest("DescribeDBInstancePerformance", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeDBInstancePerformanceResponse({}));
  }

  async describeDBInstancePerformance(request: DescribeDBInstancePerformanceRequest): Promise<DescribeDBInstancePerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancePerformanceWithOptions(request, runtime);
  }

  async describeDBInstanceNetInfoWithOptions(request: DescribeDBInstanceNetInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceNetInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDBInstanceNetInfoResponse>(await this.doRequest("DescribeDBInstanceNetInfo", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeDBInstanceNetInfoResponse({}));
  }

  async describeDBInstanceNetInfo(request: DescribeDBInstanceNetInfoRequest): Promise<DescribeDBInstanceNetInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceNetInfoWithOptions(request, runtime);
  }

  async describeDBInstanceIPArrayListWithOptions(request: DescribeDBInstanceIPArrayListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceIPArrayListResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDBInstanceIPArrayListResponse>(await this.doRequest("DescribeDBInstanceIPArrayList", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeDBInstanceIPArrayListResponse({}));
  }

  async describeDBInstanceIPArrayList(request: DescribeDBInstanceIPArrayListRequest): Promise<DescribeDBInstanceIPArrayListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceIPArrayListWithOptions(request, runtime);
  }

  async describeDBInstanceAttributeWithOptions(request: DescribeDBInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDBInstanceAttributeResponse>(await this.doRequest("DescribeDBInstanceAttribute", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeDBInstanceAttributeResponse({}));
  }

  async describeDBInstanceAttribute(request: DescribeDBInstanceAttributeRequest): Promise<DescribeDBInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceAttributeWithOptions(request, runtime);
  }

  async describeAccountsWithOptions(request: DescribeAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeAccountsResponse>(await this.doRequest("DescribeAccounts", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DescribeAccountsResponse({}));
  }

  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  async deleteDBInstanceWithOptions(request: DeleteDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDBInstanceResponse>(await this.doRequest("DeleteDBInstance", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DeleteDBInstanceResponse({}));
  }

  async deleteDBInstance(request: DeleteDBInstanceRequest): Promise<DeleteDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBInstanceWithOptions(request, runtime);
  }

  async deleteDatabaseWithOptions(request: DeleteDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatabaseResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDatabaseResponse>(await this.doRequest("DeleteDatabase", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new DeleteDatabaseResponse({}));
  }

  async deleteDatabase(request: DeleteDatabaseRequest): Promise<DeleteDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatabaseWithOptions(request, runtime);
  }

  async createDBInstanceWithOptions(request: CreateDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDBInstanceResponse>(await this.doRequest("CreateDBInstance", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new CreateDBInstanceResponse({}));
  }

  async createDBInstance(request: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  async createAccountWithOptions(request: CreateAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccountResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateAccountResponse>(await this.doRequest("CreateAccount", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new CreateAccountResponse({}));
  }

  async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  async allocateInstancePublicConnectionWithOptions(request: AllocateInstancePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<AllocateInstancePublicConnectionResponse> {
    Util.validateModel(request);
    return $tea.cast<AllocateInstancePublicConnectionResponse>(await this.doRequest("AllocateInstancePublicConnection", "HTTPS", "POST", "2016-05-03", "AK", null, $tea.toMap(request), runtime), new AllocateInstancePublicConnectionResponse({}));
  }

  async allocateInstancePublicConnection(request: AllocateInstancePublicConnectionRequest): Promise<AllocateInstancePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateInstancePublicConnectionWithOptions(request, runtime);
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

}
