// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddUserHdfsInfoRequest extends $tea.Model {
  /**
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp16o0pd5****582s
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"dfs.nameservices":"hdfs_test","dfs.ha.namenodes":"nn1,nn2","dfs.namenode.http-address.hdfs_test.nn1":"TEST-xxx1.com:50070","dfs.namenode.http-address.hdfs_test.nn2":"TEST-xxx2.com:50070","dfs.namenode.rpc-address.hdfs_test.nn1":"TEST-xxx1.com:8020","dfs.namenode.rpc-address.hdfs_test.nn2":"TEST-xxx2.com:8020"}
   */
  extInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterId: 'string',
      extInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserHdfsInfoResponseBody extends $tea.Model {
  /**
   * @example
   * FB0B7918-198C-46A8-AB9B-FE15403B1F0A
   */
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

export class AddUserHdfsInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserHdfsInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUserHdfsInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePublicNetworkAddressRequest extends $tea.Model {
  /**
   * @example
   * 83b2b5e117a5b8bce0fae88d90576a84_6452320_82718582
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn******
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePublicNetworkAddressResponseBody extends $tea.Model {
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

export class AllocatePublicNetworkAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AllocatePublicNetworkAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AllocatePublicNetworkAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelActiveOperationTasksRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11111,22222
   */
  ids?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelActiveOperationTasksResponseBody extends $tea.Model {
  /**
   * @example
   * 11111,22222
   */
  ids?: string;
  /**
   * @example
   * AE4F6C34-065F-45AA-F5BN-4B8D816F6305
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelActiveOperationTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelActiveOperationTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelActiveOperationTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckComponentsVersionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HBASE,HADOOP
   */
  components?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      components: 'Components',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      components: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckComponentsVersionResponseBody extends $tea.Model {
  components?: CheckComponentsVersionResponseBodyComponents;
  /**
   * @example
   * E3537EB4-1100-41CA-A147-C74CCC8BB12C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: CheckComponentsVersionResponseBodyComponents,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckComponentsVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckComponentsVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckComponentsVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseBackupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseBackupResponseBody extends $tea.Model {
  /**
   * @example
   * F1A11940-0C34-4385-864F-A01E29B55F6A
   */
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

export class CloseBackupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloseBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloseBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp16o0pd52e3y****
   */
  clusterId?: string;
  /**
   * @example
   * 7
   */
  duration?: number;
  /**
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @example
   * month
   */
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      duration: 'Duration',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      duration: 'number',
      payType: 'string',
      pricingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * 54124548879
   */
  orderId?: number;
  /**
   * @example
   * 50373857-C47B-4B64-9332-D0B5280B59EA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConvertInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConvertInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test01
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * **********
   */
  accountPassword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponseBody extends $tea.Model {
  /**
   * @example
   * 50373857-C47B-4B64-9332-D0B5280B59EA
   */
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

export class CreateBackupPlanRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-wz94lbcqc****4x93
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanResponseBody extends $tea.Model {
  /**
   * @example
   * 50373857-C47B-4B64-9332-D0B5280B59EA
   */
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

export class CreateBackupPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateClusterRequest extends $tea.Model {
  /**
   * @example
   * 2
   */
  autoRenewPeriod?: number;
  /**
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @example
   * hbase_test
   */
  clusterName?: string;
  /**
   * @example
   * 1024
   */
  coldStorageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase.sn1.medium
   */
  coreInstanceType?: string;
  /**
   * @example
   * 400
   */
  diskSize?: number;
  /**
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @example
   * 0d2470df-da7b-4786-b981-9a164dae****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase
   */
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  engineVersion?: string;
  /**
   * @example
   * hbase.sn1.medium
   */
  masterInstanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  nodeCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @example
   * 6
   */
  period?: number;
  /**
   * @example
   * month
   */
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-j4d53glb3****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 116.62.XX.XX/24
   */
  securityIPList?: string;
  /**
   * @example
   * vsw-bp191otqj1ssyl****
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-bp120k6ixs4eog****
   */
  vpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      clusterName: 'ClusterName',
      coldStorageSize: 'ColdStorageSize',
      coreInstanceType: 'CoreInstanceType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      encryptionKey: 'EncryptionKey',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      masterInstanceType: 'MasterInstanceType',
      nodeCount: 'NodeCount',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityIPList: 'SecurityIPList',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewPeriod: 'number',
      clientToken: 'string',
      clusterName: 'string',
      coldStorageSize: 'number',
      coreInstanceType: 'string',
      diskSize: 'number',
      diskType: 'string',
      encryptionKey: 'string',
      engine: 'string',
      engineVersion: 'string',
      masterInstanceType: 'string',
      nodeCount: 'number',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityIPList: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $tea.Model {
  /**
   * @example
   * hb-bp1hy2sjf8gd****
   */
  clusterId?: string;
  /**
   * @example
   * 23232069786****
   */
  orderId?: string;
  /**
   * @example
   * 3E19E345-101D-4014-946C-A205
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalResourceRequest extends $tea.Model {
  /**
   * @example
   * xxxxx-xxxxx-xxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PubPhoenixSLBQueryServerVip
   */
  resourceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GLOBAL_VIP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterId: 'string',
      regionId: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 1AB9ABDF-7E1E-44AD-8610-70A005115DD1
   */
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

export class CreateGlobalResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGlobalResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGlobalResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHBaseSlbServerRequest extends $tea.Model {
  /**
   * @example
   * xxxxx-xxxxx-xxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * thrift
   */
  slbServer?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      slbServer: 'SlbServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterId: 'string',
      slbServer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHBaseSlbServerResponseBody extends $tea.Model {
  /**
   * @example
   * 61FC5B21-87B0-41BC-9686-9DA395EB40B6
   */
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

export class CreateHBaseSlbServerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHBaseSlbServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateHBaseSlbServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHbaseHaSlbRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bds-t4n3496whj23****
   */
  bdsId?: string;
  /**
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ha-v21tmnxjwh2yu****
   */
  haId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * thrift
   */
  haTypes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Active
   */
  hbaseType?: string;
  static names(): { [key: string]: string } {
    return {
      bdsId: 'BdsId',
      clientToken: 'ClientToken',
      haId: 'HaId',
      haTypes: 'HaTypes',
      hbaseType: 'HbaseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bdsId: 'string',
      clientToken: 'string',
      haId: 'string',
      haTypes: 'string',
      hbaseType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHbaseHaSlbResponseBody extends $tea.Model {
  /**
   * @example
   * C9D568D9-A59C-4AF2-8FBB-F086A841D58E
   */
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

export class CreateHbaseHaSlbResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHbaseHaSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateHbaseHaSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMultiZoneClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-hangxzhouxb*****
   */
  arbiterVSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  arbiterZoneId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  archVersion?: string;
  /**
   * @example
   * 0
   */
  autoRenewPeriod?: number;
  /**
   * @example
   * dfh3sf5gslfksfk****
   */
  clientToken?: string;
  /**
   * @example
   * hbaseue_test
   */
  clusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 400
   */
  coreDiskSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cloud_ssd
   */
  coreDiskType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase.sn1.medium
   */
  coreInstanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  coreNodeCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbaseue
   */
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 400
   */
  logDiskSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cloud_ssd
   */
  logDiskType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase.sn1.medium
   */
  logInstanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  logNodeCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase.sn1.medium
   */
  masterInstanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-bef-aliyun-com
   */
  multiZoneCombination?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * month
   */
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-hangxzhouxe****
   */
  primaryVSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-e
   */
  primaryZoneId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-gg3f4f5d5g5w****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-hangxzhouxf****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-f
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-bp120k6ixs4eog****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      arbiterVSwitchId: 'ArbiterVSwitchId',
      arbiterZoneId: 'ArbiterZoneId',
      archVersion: 'ArchVersion',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      clusterName: 'ClusterName',
      coreDiskSize: 'CoreDiskSize',
      coreDiskType: 'CoreDiskType',
      coreInstanceType: 'CoreInstanceType',
      coreNodeCount: 'CoreNodeCount',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      logDiskSize: 'LogDiskSize',
      logDiskType: 'LogDiskType',
      logInstanceType: 'LogInstanceType',
      logNodeCount: 'LogNodeCount',
      masterInstanceType: 'MasterInstanceType',
      multiZoneCombination: 'MultiZoneCombination',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      primaryVSwitchId: 'PrimaryVSwitchId',
      primaryZoneId: 'PrimaryZoneId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityIPList: 'SecurityIPList',
      standbyVSwitchId: 'StandbyVSwitchId',
      standbyZoneId: 'StandbyZoneId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arbiterVSwitchId: 'string',
      arbiterZoneId: 'string',
      archVersion: 'string',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      clusterName: 'string',
      coreDiskSize: 'number',
      coreDiskType: 'string',
      coreInstanceType: 'string',
      coreNodeCount: 'number',
      engine: 'string',
      engineVersion: 'string',
      logDiskSize: 'number',
      logDiskType: 'string',
      logInstanceType: 'string',
      logNodeCount: 'number',
      masterInstanceType: 'string',
      multiZoneCombination: 'string',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      primaryVSwitchId: 'string',
      primaryZoneId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityIPList: 'string',
      standbyVSwitchId: 'string',
      standbyZoneId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMultiZoneClusterResponseBody extends $tea.Model {
  /**
   * @example
   * ld-t4nn71xa0yn56****
   */
  clusterId?: string;
  /**
   * @example
   * 23232453****
   */
  orderId?: string;
  /**
   * @example
   * 7F68E8F5-0377-4CF8-8B1D-FFFD6F5804D5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMultiZoneClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMultiZoneClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMultiZoneClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestorePlanRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  restoreAllTable?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  restoreByCopy?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-11-05T05:49:42Z
   */
  restoreToDate?: string;
  /**
   * @example
   * test_ns:test_table/test_ns:test_table2
   */
  tables?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp169l540vc6c****
   */
  targetClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      restoreAllTable: 'RestoreAllTable',
      restoreByCopy: 'RestoreByCopy',
      restoreToDate: 'RestoreToDate',
      tables: 'Tables',
      targetClusterId: 'TargetClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      restoreAllTable: 'boolean',
      restoreByCopy: 'boolean',
      restoreToDate: 'string',
      tables: 'string',
      targetClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestorePlanResponseBody extends $tea.Model {
  /**
   * @example
   * A0598673-EB6E-4F6D-9961-E0F2012090C0
   */
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

export class CreateRestorePlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRestorePlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRestorePlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerlessClusterRequest extends $tea.Model {
  /**
   * @example
   * 2
   */
  autoRenewPeriod?: number;
  /**
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @example
   * xx
   */
  clientType?: string;
  /**
   * @example
   * serverless-name
   */
  clusterName?: string;
  /**
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @example
   * serverlesshbase
   */
  engine?: string;
  /**
   * @example
   * 2.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @example
   * 6
   */
  period?: number;
  /**
   * @example
   * month
   */
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-j4d53glb3****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1000
   */
  serverlessCapability?: number;
  /**
   * @example
   * serverless.small
   */
  serverlessSpec?: string;
  /**
   * @example
   * 100
   */
  serverlessStorage?: number;
  /**
   * @example
   * vsw-bp191ipotqj1ssyl*****
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-bp120k6ixs4eog****
   */
  vpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      clientType: 'ClientType',
      clusterName: 'ClusterName',
      diskType: 'DiskType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serverlessCapability: 'ServerlessCapability',
      serverlessSpec: 'ServerlessSpec',
      serverlessStorage: 'ServerlessStorage',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewPeriod: 'number',
      clientToken: 'string',
      clientType: 'string',
      clusterName: 'string',
      diskType: 'string',
      engine: 'string',
      engineVersion: 'string',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serverlessCapability: 'number',
      serverlessSpec: 'string',
      serverlessStorage: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerlessClusterResponseBody extends $tea.Model {
  /**
   * @example
   * sh-bp1a969y7681****
   */
  clusterId?: string;
  /**
   * @example
   * 23232453233*****
   */
  orderId?: string;
  /**
   * @example
   * *********
   */
  passWord?: string;
  /**
   * @example
   * 3E19E345-101D-4014-946C-************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      orderId: 'OrderId',
      passWord: 'PassWord',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      orderId: 'string',
      passWord: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerlessClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServerlessClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServerlessClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test01
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountResponseBody extends $tea.Model {
  /**
   * @example
   * 729CB2A7-3065-53A9-B27C-7033CA4881D9
   */
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

export class DeleteAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn******
   */
  clusterId?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PubPhoenixSLBQueryServerVip
   */
  resourceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GLOBAL_VIP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalResourceResponseBody extends $tea.Model {
  /**
   * @example
   * BD0B0B9A-79E8-4FDD-9C51-93443490B784
   */
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

export class DeleteGlobalResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGlobalResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGlobalResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHBaseHaDBRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bds-bp14112fd7g52s1****
   */
  bdsId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ha-sw2o0l01s4r76****
   */
  haId?: string;
  static names(): { [key: string]: string } {
    return {
      bdsId: 'BdsId',
      haId: 'HaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bdsId: 'string',
      haId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHBaseHaDBResponseBody extends $tea.Model {
  /**
   * @example
   * B409CF51-E01F-4551-BE40-123678FA9026
   */
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

export class DeleteHBaseHaDBResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHBaseHaDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteHBaseHaDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHBaseSlbServerRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * thrift
   */
  slbServer?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      slbServer: 'SlbServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      slbServer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHBaseSlbServerResponseBody extends $tea.Model {
  /**
   * @example
   * 7242130A-82CF-49BF-AB32-30DCB819EBA6
   */
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

export class DeleteHBaseSlbServerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHBaseSlbServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteHBaseSlbServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHbaseHaSlbRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bds-t4n3496whj23ia4k
   */
  bdsId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ha-v21tmnxjwh2yuy1il
   */
  haId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * thrift
   */
  haTypes?: string;
  static names(): { [key: string]: string } {
    return {
      bdsId: 'BdsId',
      haId: 'HaId',
      haTypes: 'HaTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bdsId: 'string',
      haId: 'string',
      haTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHbaseHaSlbResponseBody extends $tea.Model {
  /**
   * @example
   * C9D568D9-A59C-4AF2-8FBB-F086A841D58E
   */
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

export class DeleteHbaseHaSlbResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHbaseHaSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteHbaseHaSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp16o0pd52e3y****
   */
  clusterId?: string;
  /**
   * @example
   * false
   */
  immediateDeleteFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      immediateDeleteFlag: 'ImmediateDeleteFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      immediateDeleteFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * 50373857-C47B-4B64-9332-D0B5280B59EA
   */
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

export class DeleteInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMultiZoneClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d-t4nn71xa0yn56****
   */
  clusterId?: string;
  /**
   * @example
   * false
   */
  immediateDeleteFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      immediateDeleteFlag: 'ImmediateDeleteFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      immediateDeleteFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMultiZoneClusterResponseBody extends $tea.Model {
  /**
   * @example
   * 169A3910-A39E-4BC2-AA9F-E7AD8D473527
   */
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

export class DeleteMultiZoneClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMultiZoneClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMultiZoneClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerlessClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sh-bp1pj13wh9****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerlessClusterResponseBody extends $tea.Model {
  /**
   * @example
   * 46950E74-59C4-4E3E-9B38-A33B*********
   */
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

export class DeleteServerlessClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServerlessClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServerlessClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserHdfsInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp16o0pd52e3y****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hdfs_test
   */
  nameService?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nameService: 'NameService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nameService: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserHdfsInfoResponseBody extends $tea.Model {
  /**
   * @example
   * 50373857-C47B-4B64-9332-D0B5280B59EA
   */
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

export class DeleteUserHdfsInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserHdfsInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserHdfsInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp1uoihlf82e8****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBody extends $tea.Model {
  accounts?: DescribeAccountsResponseBodyAccounts;
  /**
   * @example
   * F744E939-D08D-5623-82C8-9D1F9F7685D1
   */
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

export class DescribeActiveOperationTaskTypeRequest extends $tea.Model {
  /**
   * @example
   * 0
   */
  isHistory?: number;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      isHistory: 'IsHistory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHistory: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskTypeResponseBody extends $tea.Model {
  /**
   * @example
   * EC7E27FC-58F8-4722-89CF-D1B6B0971956
   */
  requestId?: string;
  typeList?: DescribeActiveOperationTaskTypeResponseBodyTypeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      typeList: { 'type': 'array', 'itemType': DescribeActiveOperationTaskTypeResponseBodyTypeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeActiveOperationTaskTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeActiveOperationTaskTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTasksRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  allowCancel?: number;
  /**
   * @example
   * 1
   */
  allowChange?: number;
  /**
   * @example
   * S1
   */
  changeLevel?: string;
  /**
   * @example
   * hbaseue
   */
  dbType?: string;
  /**
   * @example
   * ld-bp150tns0sjxs****
   */
  insName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * hbase
   */
  productId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @example
   * 5
   */
  status?: number;
  /**
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      allowChange: 'AllowChange',
      changeLevel: 'ChangeLevel',
      dbType: 'DbType',
      insName: 'InsName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productId: 'ProductId',
      region: 'Region',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      status: 'Status',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'number',
      allowChange: 'number',
      changeLevel: 'string',
      dbType: 'string',
      insName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      productId: 'string',
      region: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      status: 'number',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTasksResponseBody extends $tea.Model {
  items?: DescribeActiveOperationTasksResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * C634E813-42FA-53D2-A7EB-B881C4B264CC
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeActiveOperationTasksResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeActiveOperationTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeActiveOperationTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @example
   * hbase.sn1.large
   */
  coreInstanceType?: string;
  /**
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @example
   * hbaseue
   */
  engine?: string;
  /**
   * @example
   * 2.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      coreInstanceType: 'CoreInstanceType',
      diskType: 'DiskType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      coreInstanceType: 'string',
      diskType: 'string',
      engine: 'string',
      engineVersion: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBody extends $tea.Model {
  availableZones?: DescribeAvailableResourceResponseBodyAvailableZones;
  /**
   * @example
   * EA76F208-E334-592A-A0C6-41E15EC87ED0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: DescribeAvailableResourceResponseBodyAvailableZones,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAvailableResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAvailableResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanConfigResponseBody extends $tea.Model {
  /**
   * @example
   * 7
   */
  fullBackupCycle?: number;
  /**
   * @example
   * 3
   */
  minHFileBackupCount?: number;
  /**
   * @example
   * 2020-11-09T18:00:00Z
   */
  nextFullBackupDate?: string;
  /**
   * @example
   * 33A23201-6038-4A6A-B76A-61047EA04E6A
   */
  requestId?: string;
  tables?: DescribeBackupPlanConfigResponseBodyTables;
  static names(): { [key: string]: string } {
    return {
      fullBackupCycle: 'FullBackupCycle',
      minHFileBackupCount: 'MinHFileBackupCount',
      nextFullBackupDate: 'NextFullBackupDate',
      requestId: 'RequestId',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullBackupCycle: 'number',
      minHFileBackupCount: 'number',
      nextFullBackupDate: 'string',
      requestId: 'string',
      tables: DescribeBackupPlanConfigResponseBodyTables,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupPlanConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBackupPlanConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn******
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBody extends $tea.Model {
  /**
   * @example
   * 10
   */
  backupRetentionPeriod?: string;
  /**
   * @example
   * 18:00Z
   */
  preferredBackupEndTimeUTC?: string;
  /**
   * @example
   * Friday
   */
  preferredBackupPeriod?: string;
  /**
   * @example
   * 17:00Z
   */
  preferredBackupStartTimeUTC?: string;
  /**
   * @example
   * 01:00-02:00
   */
  preferredBackupTime?: string;
  /**
   * @example
   * 94AC38B6-7C6D-45B2-BC03-B8750071A482
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      preferredBackupEndTimeUTC: 'PreferredBackupEndTimeUTC',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupStartTimeUTC: 'PreferredBackupStartTimeUTC',
      preferredBackupTime: 'PreferredBackupTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'string',
      preferredBackupEndTimeUTC: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupStartTimeUTC: 'string',
      preferredBackupTime: 'string',
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

export class DescribeBackupStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupStatusResponseBody extends $tea.Model {
  /**
   * @example
   * opened
   */
  backupStatus?: string;
  /**
   * @example
   * bds-m5e54q06ceyhxxxx
   */
  bdsClusterId?: string;
  /**
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  clusterId?: string;
  /**
   * @example
   * F7E71430-A825-470A-B40B-DF3F3AAC9BEE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupStatus: 'BackupStatus',
      bdsClusterId: 'BdsClusterId',
      clusterId: 'ClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupStatus: 'string',
      bdsClusterId: 'string',
      clusterId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBackupStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp169l540vc6c****
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSummaryResponseBody extends $tea.Model {
  full?: DescribeBackupSummaryResponseBodyFull;
  incr?: DescribeBackupSummaryResponseBodyIncr;
  /**
   * @example
   * 168793CB-7B31-43E7-ADAB-FE3E8D584D6E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      full: 'Full',
      incr: 'Incr',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      full: DescribeBackupSummaryResponseBodyFull,
      incr: DescribeBackupSummaryResponseBodyIncr,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBackupSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTablesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020110302xxxx
   */
  backupRecordId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      backupRecordId: 'BackupRecordId',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRecordId: 'string',
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTablesResponseBody extends $tea.Model {
  backupRecords?: DescribeBackupTablesResponseBodyBackupRecords;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 01262E9C-B0CC-4663-82FA-D50173649F92
   */
  requestId?: string;
  tables?: DescribeBackupTablesResponseBodyTables;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      backupRecords: 'BackupRecords',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tables: 'Tables',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRecords: DescribeBackupTablesResponseBodyBackupRecords,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tables: DescribeBackupTablesResponseBodyTables,
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBackupTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsRequest extends $tea.Model {
  /**
   * @example
   * job-xxxx
   */
  backupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @example
   * 2020-12-23 23:59:59
   */
  endTime?: string;
  /**
   * @example
   * 2020-12-23T15:59:59Z
   */
  endTimeUTC?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 2020-12-13 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * 2020-12-12T16:00:00Z
   */
  startTimeUTC?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      endTimeUTC: 'EndTimeUTC',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      startTimeUTC: 'StartTimeUTC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      clusterId: 'string',
      endTime: 'string',
      endTimeUTC: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      startTime: 'string',
      startTimeUTC: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBody extends $tea.Model {
  backups?: DescribeBackupsResponseBodyBackups;
  /**
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * A93CE373-0FDE-4CCB-9DBA-6700906825ED
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      backups: 'Backups',
      enableStatus: 'EnableStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backups: DescribeBackupsResponseBodyBackups,
      enableStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBody extends $tea.Model {
  /**
   * @example
   * hbaseue
   */
  dbType?: string;
  /**
   * @example
   * true
   */
  isMultimod?: string;
  /**
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @example
   * 70220050-A465-5DCC-8C0C-C38C6E3DB24D
   */
  requestId?: string;
  serviceConnAddrs?: DescribeClusterConnectionResponseBodyServiceConnAddrs;
  slbConnAddrs?: DescribeClusterConnectionResponseBodySlbConnAddrs;
  thriftConn?: DescribeClusterConnectionResponseBodyThriftConn;
  uiProxyConnAddrInfo?: DescribeClusterConnectionResponseBodyUiProxyConnAddrInfo;
  /**
   * @example
   * vsw-bp1foll427ze3d4ps****
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-bp15s22y1a7sff5gj****
   */
  vpcId?: string;
  zkConnAddrs?: DescribeClusterConnectionResponseBodyZkConnAddrs;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      isMultimod: 'IsMultimod',
      netType: 'NetType',
      requestId: 'RequestId',
      serviceConnAddrs: 'ServiceConnAddrs',
      slbConnAddrs: 'SlbConnAddrs',
      thriftConn: 'ThriftConn',
      uiProxyConnAddrInfo: 'UiProxyConnAddrInfo',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zkConnAddrs: 'ZkConnAddrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      isMultimod: 'string',
      netType: 'string',
      requestId: 'string',
      serviceConnAddrs: DescribeClusterConnectionResponseBodyServiceConnAddrs,
      slbConnAddrs: DescribeClusterConnectionResponseBodySlbConnAddrs,
      thriftConn: DescribeClusterConnectionResponseBodyThriftConn,
      uiProxyConnAddrInfo: DescribeClusterConnectionResponseBodyUiProxyConnAddrInfo,
      vSwitchId: 'string',
      vpcId: 'string',
      zkConnAddrs: DescribeClusterConnectionResponseBodyZkConnAddrs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColdStorageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp1uoihlf82e8****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColdStorageResponseBody extends $tea.Model {
  /**
   * @example
   * ld-bp1uoihlf82e8****
   */
  clusterId?: string;
  /**
   * @example
   * 800
   */
  coldStorageSize?: string;
  /**
   * @example
   * BdsColdStorage
   */
  coldStorageType?: string;
  /**
   * @example
   * 20.00
   */
  coldStorageUseAmount?: string;
  /**
   * @example
   * 20.00
   */
  coldStorageUsePercent?: string;
  /**
   * @example
   * open
   */
  openStatus?: string;
  /**
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @example
   * DCB9479E-F05F-4D1C-AFB7-C639B87764B7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      coldStorageSize: 'ColdStorageSize',
      coldStorageType: 'ColdStorageType',
      coldStorageUseAmount: 'ColdStorageUseAmount',
      coldStorageUsePercent: 'ColdStorageUsePercent',
      openStatus: 'OpenStatus',
      payType: 'PayType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      coldStorageSize: 'string',
      coldStorageType: 'string',
      coldStorageUseAmount: 'string',
      coldStorageUsePercent: 'string',
      openStatus: 'string',
      payType: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColdStorageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeColdStorageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeColdStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceUsageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp1u0639js2h7****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceUsageResponseBody extends $tea.Model {
  /**
   * @example
   * A2D841CE-D066-53E8-B9AC-3731DCC85397
   */
  requestId?: string;
  /**
   * @example
   * {\\"disk_usage_record\\":{\\"disk_used\\":\\"0.9GB\\",\\"disk_total\\":\\"1156.1GB\\",\\"usage_rate\\":\\"1%\\"}}
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBInstanceUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeletedInstancesRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-hangzhou
   */
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
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeletedInstancesResponseBody extends $tea.Model {
  instances?: DescribeDeletedInstancesResponseBodyInstances;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0CAC5702-C862-44C0-AD54-C9CE70F4B246
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeDeletedInstancesResponseBodyInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeletedInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDeletedInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDeletedInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskWarningLineRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp1bl7iqzkahmyxxxx
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskWarningLineResponseBody extends $tea.Model {
  /**
   * @example
   * 08DF8283-D290-4107-931E-7913D6D3480D
   */
  requestId?: string;
  /**
   * @example
   * 80
   */
  warningLine?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      warningLine: 'WarningLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      warningLine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskWarningLineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiskWarningLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDiskWarningLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponseBody extends $tea.Model {
  connAddrs?: DescribeEndpointsResponseBodyConnAddrs;
  /**
   * @example
   * hbaseue
   */
  engine?: string;
  /**
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @example
   * F072593C-5234-5B56-9F63-3C7A3AD85D66
   */
  requestId?: string;
  /**
   * @example
   * vsw-bp1foll427ze3d4ps****
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-bp15s22y1a7sff5gj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connAddrs: 'ConnAddrs',
      engine: 'Engine',
      netType: 'NetType',
      requestId: 'RequestId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrs: DescribeEndpointsResponseBodyConnAddrs,
      engine: 'string',
      netType: 'string',
      requestId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @example
   * open
   */
  backupStatus?: string;
  /**
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  /**
   * @example
   * testhbase
   */
  clusterName?: string;
  /**
   * @example
   * cluster
   */
  clusterType?: string;
  /**
   * @example
   * 800
   */
  coldStorageSize?: number;
  /**
   * @example
   * open
   */
  coldStorageStatus?: string;
  /**
   * @example
   * true
   */
  confirmMaintainTime?: string;
  /**
   * @example
   * 4
   */
  coreDiskCount?: string;
  /**
   * @example
   * 100
   */
  coreDiskSize?: number;
  /**
   * @example
   * cloud_ssd
   */
  coreDiskType?: string;
  /**
   * @example
   * hbase.sn2.2xlarge
   */
  coreInstanceType?: string;
  /**
   * @example
   * 2
   */
  coreNodeCount?: number;
  /**
   * @example
   * 2021-07-19T11:23:22
   */
  createdTime?: string;
  /**
   * @example
   * 2021-07-19T03:23:22Z
   */
  createdTimeUTC?: string;
  /**
   * @example
   * 12
   */
  duration?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  enableHbaseProxy?: boolean;
  /**
   * @example
   * 0d2470df-da7b-4786-b981-9a164dae****
   */
  encryptionKey?: string;
  /**
   * @example
   * NoEncryption
   */
  encryptionType?: string;
  /**
   * @example
   * hbaseue
   */
  engine?: string;
  /**
   * @example
   * 2022-02-24T00:00:00
   */
  expireTime?: string;
  /**
   * @example
   * 2022-02-23T16:00:00Z
   */
  expireTimeUTC?: string;
  /**
   * @example
   * ld-bp150tns0sjxs****
   */
  instanceId?: string;
  /**
   * @example
   * testhbase
   */
  instanceName?: string;
  /**
   * @example
   * false
   */
  isDeletionProtection?: boolean;
  /**
   * @example
   * true
   */
  isHa?: boolean;
  /**
   * @example
   * true
   */
  isLatestVersion?: boolean;
  /**
   * @example
   * true
   */
  isMultiModel?: boolean;
  /**
   * @example
   * 2.3.2
   */
  lproxyMinorVersion?: string;
  /**
   * @example
   * 22:00Z
   */
  maintainEndTime?: string;
  /**
   * @example
   * 18:00Z
   */
  maintainStartTime?: string;
  /**
   * @example
   * 2.0
   */
  majorVersion?: string;
  /**
   * @example
   * 0
   */
  masterDiskSize?: number;
  /**
   * @example
   * cloud_efficiency
   */
  masterDiskType?: string;
  /**
   * @example
   * hbase.sn2.large
   */
  masterInstanceType?: string;
  /**
   * @example
   * 2
   */
  masterNodeCount?: number;
  /**
   * @example
   * 2.2.9.1
   */
  minorVersion?: string;
  /**
   * @example
   * 0
   */
  moduleId?: number;
  /**
   * @example
   * phoenxi:4.0
   */
  moduleStackVersion?: string;
  /**
   * @example
   * false
   */
  needUpgrade?: boolean;
  needUpgradeComps?: DescribeInstanceResponseBodyNeedUpgradeComps;
  /**
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @example
   * ld-uf699153o1m2l****
   */
  parentId?: string;
  /**
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 3F429923-B6F6-52C5-9C2A-5B8A8C6BBA66
   */
  requestId?: string;
  /**
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @example
   * ACTIVATION
   */
  status?: string;
  tags?: DescribeInstanceResponseBodyTags;
  /**
   * @example
   * 25.00
   */
  taskProgress?: string;
  taskStatus?: string;
  /**
   * @example
   * vpc-bp15s22y1a7sff5gj****
   */
  vpcId?: string;
  /**
   * @example
   * vsw-bp1foll427ze3d4ps****
   */
  vswitchId?: string;
  /**
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      backupStatus: 'BackupStatus',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      coldStorageSize: 'ColdStorageSize',
      coldStorageStatus: 'ColdStorageStatus',
      confirmMaintainTime: 'ConfirmMaintainTime',
      coreDiskCount: 'CoreDiskCount',
      coreDiskSize: 'CoreDiskSize',
      coreDiskType: 'CoreDiskType',
      coreInstanceType: 'CoreInstanceType',
      coreNodeCount: 'CoreNodeCount',
      createdTime: 'CreatedTime',
      createdTimeUTC: 'CreatedTimeUTC',
      duration: 'Duration',
      enableHbaseProxy: 'EnableHbaseProxy',
      encryptionKey: 'EncryptionKey',
      encryptionType: 'EncryptionType',
      engine: 'Engine',
      expireTime: 'ExpireTime',
      expireTimeUTC: 'ExpireTimeUTC',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isDeletionProtection: 'IsDeletionProtection',
      isHa: 'IsHa',
      isLatestVersion: 'IsLatestVersion',
      isMultiModel: 'IsMultiModel',
      lproxyMinorVersion: 'LproxyMinorVersion',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      majorVersion: 'MajorVersion',
      masterDiskSize: 'MasterDiskSize',
      masterDiskType: 'MasterDiskType',
      masterInstanceType: 'MasterInstanceType',
      masterNodeCount: 'MasterNodeCount',
      minorVersion: 'MinorVersion',
      moduleId: 'ModuleId',
      moduleStackVersion: 'ModuleStackVersion',
      needUpgrade: 'NeedUpgrade',
      needUpgradeComps: 'NeedUpgradeComps',
      networkType: 'NetworkType',
      parentId: 'ParentId',
      payType: 'PayType',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      taskProgress: 'TaskProgress',
      taskStatus: 'TaskStatus',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      backupStatus: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      coldStorageSize: 'number',
      coldStorageStatus: 'string',
      confirmMaintainTime: 'string',
      coreDiskCount: 'string',
      coreDiskSize: 'number',
      coreDiskType: 'string',
      coreInstanceType: 'string',
      coreNodeCount: 'number',
      createdTime: 'string',
      createdTimeUTC: 'string',
      duration: 'number',
      enableHbaseProxy: 'boolean',
      encryptionKey: 'string',
      encryptionType: 'string',
      engine: 'string',
      expireTime: 'string',
      expireTimeUTC: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isDeletionProtection: 'boolean',
      isHa: 'boolean',
      isLatestVersion: 'boolean',
      isMultiModel: 'boolean',
      lproxyMinorVersion: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      majorVersion: 'string',
      masterDiskSize: 'number',
      masterDiskType: 'string',
      masterInstanceType: 'string',
      masterNodeCount: 'number',
      minorVersion: 'string',
      moduleId: 'number',
      moduleStackVersion: 'string',
      needUpgrade: 'boolean',
      needUpgradeComps: DescribeInstanceResponseBodyNeedUpgradeComps,
      networkType: 'string',
      parentId: 'string',
      payType: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: DescribeInstanceResponseBodyTags,
      taskProgress: 'string',
      taskStatus: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypeRequest extends $tea.Model {
  /**
   * @example
   * hbase.n2.4xlarge
   */
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

export class DescribeInstanceTypeResponseBody extends $tea.Model {
  instanceTypeSpecList?: DescribeInstanceTypeResponseBodyInstanceTypeSpecList;
  /**
   * @example
   * DD23BBB4-64C2-42A4-B2E2-7E56C7AA815A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypeSpecList: 'InstanceTypeSpecList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeSpecList: DescribeInstanceTypeResponseBodyInstanceTypeSpecList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  /**
   * @example
   * hb-bp1u0639js2h7****
   */
  clusterId?: string;
  /**
   * @example
   * test
   */
  clusterName?: string;
  /**
   * @example
   * hbase
   */
  dbType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-4f51d54g5****
   */
  resourceGroupId?: string;
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      dbType: 'DbType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      dbType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  instances?: DescribeInstancesResponseBodyInstances;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * EBECBF12-2E34-41BE-8DE9-FC3700D4****
   */
  requestId?: string;
  /**
   * @example
   * 18
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeInstancesResponseBodyInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistResponseBody extends $tea.Model {
  groups?: DescribeIpWhitelistResponseBodyGroups;
  /**
   * @example
   * AFAA617B-3268-5883-982B-DB8EC8CC1F1B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: DescribeIpWhitelistResponseBodyGroups,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeIpWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeIpWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsRequest extends $tea.Model {
  /**
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsResponseBody extends $tea.Model {
  regions?: DescribeMultiZoneAvailableRegionsResponseBodyRegions;
  /**
   * @example
   * F03BB273-45EE-4B6C-A329-A6E6A8D15856
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeMultiZoneAvailableRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMultiZoneAvailableRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMultiZoneAvailableRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * cn-hangzhou-bef-aliyun
   */
  zoneCombination?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      regionId: 'RegionId',
      zoneCombination: 'ZoneCombination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      regionId: 'string',
      zoneCombination: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBody extends $tea.Model {
  availableZones?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZones;
  /**
   * @example
   * B2EEBBA9-C627-4415-81A0-B77BC54F1D52
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: DescribeMultiZoneAvailableResourceResponseBodyAvailableZones,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMultiZoneAvailableResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMultiZoneAvailableResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-t4nn71xa0yn****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneClusterResponseBody extends $tea.Model {
  /**
   * @example
   * vsw-t4nax9mp3wk0czn****
   */
  arbiterVSwitchIds?: string;
  /**
   * @example
   * ap-southeast-1c
   */
  arbiterZoneId?: string;
  /**
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @example
   * ld-t4nn71xa0yn****
   */
  clusterId?: string;
  /**
   * @example
   * mz_test
   */
  clusterName?: string;
  coldStorageSize?: number;
  /**
   * @example
   * 4
   */
  coreDiskCount?: string;
  /**
   * @example
   * 100
   */
  coreDiskSize?: number;
  /**
   * @example
   * cloud_efficiency
   */
  coreDiskType?: string;
  /**
   * @example
   * hbase.sn1.large
   */
  coreInstanceType?: string;
  /**
   * @example
   * 6
   */
  coreNodeCount?: number;
  /**
   * @example
   * 2020-10-15T18:04:52
   */
  createdTime?: string;
  /**
   * @example
   * 2020-10-15T10:04:52Z
   */
  createdTimeUTC?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * 2a****
   */
  encryptionKey?: string;
  /**
   * @example
   * CloudDisk
   */
  encryptionType?: string;
  /**
   * @example
   * hbaseue
   */
  engine?: string;
  /**
   * @example
   * 2020-11-16T08:00:00
   */
  expireTime?: string;
  /**
   * @example
   * 2020-11-16T00:00:00Z
   */
  expireTimeUTC?: string;
  /**
   * @example
   * ld-t4nn71xa0yn****
   */
  instanceId?: string;
  /**
   * @example
   * mz_test
   */
  instanceName?: string;
  /**
   * @example
   * false
   */
  isDeletionProtection?: boolean;
  /**
   * @example
   * 4
   */
  logDiskCount?: string;
  /**
   * @example
   * 100
   */
  logDiskSize?: number;
  /**
   * @example
   * cloud_efficiency
   */
  logDiskType?: string;
  /**
   * @example
   * hbase.sn1.large
   */
  logInstanceType?: string;
  /**
   * @example
   * 4
   */
  logNodeCount?: number;
  /**
   * @example
   * 06:00:00
   */
  maintainEndTime?: string;
  /**
   * @example
   * 02:00:00
   */
  maintainStartTime?: string;
  /**
   * @example
   * 2.0
   */
  majorVersion?: string;
  /**
   * @example
   * 50
   */
  masterDiskSize?: number;
  /**
   * @example
   * cloud_efficiency
   */
  masterDiskType?: string;
  /**
   * @example
   * hbase.sn1.large
   */
  masterInstanceType?: string;
  /**
   * @example
   * 2
   */
  masterNodeCount?: number;
  /**
   * @example
   * 0
   */
  moduleId?: number;
  /**
   * @example
   * 2.0
   */
  moduleStackVersion?: string;
  /**
   * @example
   * ap-southeast-1-abc-aliyun
   */
  multiZoneCombination?: string;
  multiZoneInstanceModels?: DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModels;
  /**
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @example
   * ld-fls1gf31y5s35****
   */
  parentId?: string;
  /**
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @example
   * vsw-t4n3s1zd2gtidg****
   */
  primaryVSwitchIds?: string;
  /**
   * @example
   * ap-southeast-1a
   */
  primaryZoneId?: string;
  /**
   * @example
   * ap-southeast-1
   */
  regionId?: string;
  /**
   * @example
   * A02C0E6D-3A47-4FA0-BA7E-60793CE256DA
   */
  requestId?: string;
  /**
   * @example
   * rg-lk51f5fer315e****
   */
  resourceGroupId?: string;
  /**
   * @example
   * vsw-t4nvvk7xur3rdi****
   */
  standbyVSwitchIds?: string;
  /**
   * @example
   * ap-southeast-1b
   */
  standbyZoneId?: string;
  /**
   * @example
   * ACTIVATION
   */
  status?: string;
  tags?: DescribeMultiZoneClusterResponseBodyTags;
  taskProgress?: string;
  taskStatus?: string;
  /**
   * @example
   * vpc-t4nx81tmlixcq5****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      arbiterVSwitchIds: 'ArbiterVSwitchIds',
      arbiterZoneId: 'ArbiterZoneId',
      autoRenewal: 'AutoRenewal',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      coldStorageSize: 'ColdStorageSize',
      coreDiskCount: 'CoreDiskCount',
      coreDiskSize: 'CoreDiskSize',
      coreDiskType: 'CoreDiskType',
      coreInstanceType: 'CoreInstanceType',
      coreNodeCount: 'CoreNodeCount',
      createdTime: 'CreatedTime',
      createdTimeUTC: 'CreatedTimeUTC',
      duration: 'Duration',
      encryptionKey: 'EncryptionKey',
      encryptionType: 'EncryptionType',
      engine: 'Engine',
      expireTime: 'ExpireTime',
      expireTimeUTC: 'ExpireTimeUTC',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isDeletionProtection: 'IsDeletionProtection',
      logDiskCount: 'LogDiskCount',
      logDiskSize: 'LogDiskSize',
      logDiskType: 'LogDiskType',
      logInstanceType: 'LogInstanceType',
      logNodeCount: 'LogNodeCount',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      majorVersion: 'MajorVersion',
      masterDiskSize: 'MasterDiskSize',
      masterDiskType: 'MasterDiskType',
      masterInstanceType: 'MasterInstanceType',
      masterNodeCount: 'MasterNodeCount',
      moduleId: 'ModuleId',
      moduleStackVersion: 'ModuleStackVersion',
      multiZoneCombination: 'MultiZoneCombination',
      multiZoneInstanceModels: 'MultiZoneInstanceModels',
      networkType: 'NetworkType',
      parentId: 'ParentId',
      payType: 'PayType',
      primaryVSwitchIds: 'PrimaryVSwitchIds',
      primaryZoneId: 'PrimaryZoneId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      standbyVSwitchIds: 'StandbyVSwitchIds',
      standbyZoneId: 'StandbyZoneId',
      status: 'Status',
      tags: 'Tags',
      taskProgress: 'TaskProgress',
      taskStatus: 'TaskStatus',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arbiterVSwitchIds: 'string',
      arbiterZoneId: 'string',
      autoRenewal: 'boolean',
      clusterId: 'string',
      clusterName: 'string',
      coldStorageSize: 'number',
      coreDiskCount: 'string',
      coreDiskSize: 'number',
      coreDiskType: 'string',
      coreInstanceType: 'string',
      coreNodeCount: 'number',
      createdTime: 'string',
      createdTimeUTC: 'string',
      duration: 'number',
      encryptionKey: 'string',
      encryptionType: 'string',
      engine: 'string',
      expireTime: 'string',
      expireTimeUTC: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isDeletionProtection: 'boolean',
      logDiskCount: 'string',
      logDiskSize: 'number',
      logDiskType: 'string',
      logInstanceType: 'string',
      logNodeCount: 'number',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      majorVersion: 'string',
      masterDiskSize: 'number',
      masterDiskType: 'string',
      masterInstanceType: 'string',
      masterNodeCount: 'number',
      moduleId: 'number',
      moduleStackVersion: 'string',
      multiZoneCombination: 'string',
      multiZoneInstanceModels: DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModels,
      networkType: 'string',
      parentId: 'string',
      payType: 'string',
      primaryVSwitchIds: 'string',
      primaryZoneId: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      standbyVSwitchIds: 'string',
      standbyZoneId: 'string',
      status: 'string',
      tags: DescribeMultiZoneClusterResponseBodyTags,
      taskProgress: 'string',
      taskStatus: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMultiZoneClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMultiZoneClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoverableTimeRangeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoverableTimeRangeResponseBody extends $tea.Model {
  /**
   * @example
   * A1A51D18-96DC-465C-9F1B-47180CA22524
   */
  requestId?: string;
  /**
   * @example
   * 2020-10-26T18:02:03Z
   */
  timeBegin?: string;
  /**
   * @example
   * 2020-11-05T01:20:31Z
   */
  timeEnd?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeBegin: 'TimeBegin',
      timeEnd: 'TimeEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeBegin: 'string',
      timeEnd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoverableTimeRangeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRecoverableTimeRangeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRecoverableTimeRangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  /**
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @example
   * hbase
   */
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions;
  /**
   * @example
   * 14D3924C-4FD8-4EE9-9B34-DA949D104F42
   */
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

export class DescribeRestoreFullDetailsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020110514xxxx
   */
  restoreRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      restoreRecordId: 'RestoreRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      restoreRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreFullDetailsResponseBody extends $tea.Model {
  /**
   * @example
   * CFE525CF-C691-4140-A981-D004DAA7A840
   */
  requestId?: string;
  restoreFull?: DescribeRestoreFullDetailsResponseBodyRestoreFull;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreFull: 'RestoreFull',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreFull: DescribeRestoreFullDetailsResponseBodyRestoreFull,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreFullDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRestoreFullDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRestoreFullDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreIncrDetailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-m5eyf188hw481xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020110514xxxx
   */
  restoreRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      restoreRecordId: 'RestoreRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      restoreRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreIncrDetailResponseBody extends $tea.Model {
  /**
   * @example
   * D0FE2717-E194-465A-B27B-7373F96E580B
   */
  requestId?: string;
  restoreIncrDetail?: DescribeRestoreIncrDetailResponseBodyRestoreIncrDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreIncrDetail: 'RestoreIncrDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreIncrDetail: DescribeRestoreIncrDetailResponseBodyRestoreIncrDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreIncrDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRestoreIncrDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRestoreIncrDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSchemaDetailsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020110514xxxx
   */
  restoreRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      restoreRecordId: 'RestoreRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      restoreRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSchemaDetailsResponseBody extends $tea.Model {
  /**
   * @example
   * BC682A80-7677-4294-975C-CFEA425381DE
   */
  requestId?: string;
  restoreSchema?: DescribeRestoreSchemaDetailsResponseBodyRestoreSchema;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreSchema: 'RestoreSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreSchema: DescribeRestoreSchemaDetailsResponseBodyRestoreSchema,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSchemaDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRestoreSchemaDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRestoreSchemaDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSummaryResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  hasMoreRestoreRecord?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * AE639ED7-F0F3-4A71-911E-CF8EC088816E
   */
  requestId?: string;
  rescords?: DescribeRestoreSummaryResponseBodyRescords;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      hasMoreRestoreRecord: 'HasMoreRestoreRecord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rescords: 'Rescords',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMoreRestoreRecord: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rescords: DescribeRestoreSummaryResponseBodyRescords,
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRestoreSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRestoreSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020110514xxxx
   */
  restoreRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      restoreRecordId: 'RestoreRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      restoreRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBody extends $tea.Model {
  /**
   * @example
   * 18D9CC47-D913-48BF-AB6B-4FA9B28FBDB1
   */
  requestId?: string;
  restoreFull?: DescribeRestoreTablesResponseBodyRestoreFull;
  restoreIncrDetail?: DescribeRestoreTablesResponseBodyRestoreIncrDetail;
  restoreSchema?: DescribeRestoreTablesResponseBodyRestoreSchema;
  restoreSummary?: DescribeRestoreTablesResponseBodyRestoreSummary;
  tables?: DescribeRestoreTablesResponseBodyTables;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreFull: 'RestoreFull',
      restoreIncrDetail: 'RestoreIncrDetail',
      restoreSchema: 'RestoreSchema',
      restoreSummary: 'RestoreSummary',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreFull: DescribeRestoreTablesResponseBodyRestoreFull,
      restoreIncrDetail: DescribeRestoreTablesResponseBodyRestoreIncrDetail,
      restoreSchema: DescribeRestoreTablesResponseBodyRestoreSchema,
      restoreSummary: DescribeRestoreTablesResponseBodyRestoreSummary,
      tables: DescribeRestoreTablesResponseBodyTables,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRestoreTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRestoreTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp161ax8i03c4uq**
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseBody extends $tea.Model {
  /**
   * @example
   * 50373857-C47B-4B64-9332-D0B5280B59EA
   */
  requestId?: string;
  securityGroupIds?: DescribeSecurityGroupsResponseBodySecurityGroupIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityGroupIds: DescribeSecurityGroupsResponseBodySecurityGroupIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSecurityGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSecurityGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp16f1441y6p2****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sdh0b7f4k5f****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessClusterResponseBody extends $tea.Model {
  /**
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @example
   * single
   */
  clusterType?: string;
  /**
   * @example
   * 2019-10-12T14:40:46
   */
  createTime?: string;
  /**
   * @example
   * 150
   */
  cuSize?: string;
  /**
   * @example
   * 200
   */
  diskSize?: string;
  /**
   * @example
   * 2019-10-12T14:40:46
   */
  expireTime?: string;
  /**
   * @example
   * false
   */
  haType?: string;
  /**
   * @example
   * false
   */
  hasUser?: string;
  /**
   * @example
   * https://sh-wz91452kg946i****-lindorm-serverless-in.lindorm.rds.aliyuncs.com:443
   */
  innerEndpoint?: string;
  /**
   * @example
   * hb-bp16f1441y6p2****
   */
  instanceId?: string;
  /**
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @example
   * true
   */
  isDeletionProtection?: string;
  lockMode?: string;
  /**
   * @example
   * 2.0.8
   */
  mainVersion?: string;
  /**
   * @example
   * https://sh-wz91452kg946i****-lindorm-serverless.lindorm.rds.aliyuncs.com:443
   */
  outerEndpoint?: string;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 89F81C30-320B-4550-91DB-C37C81D2358F
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  reserverMaxQpsNum?: string;
  /**
   * @example
   * 50
   */
  reserverMinQpsNum?: string;
  /**
   * @example
   * rg-fjm2d4v7sf****
   */
  resourceGroupId?: string;
  /**
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @example
   * NO
   */
  updateStatus?: string;
  /**
   * @example
   * vsw-bp191ipotqf****
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-bp120k6ixs4eoghz****
   */
  vpcId?: string;
  /**
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      cuSize: 'CuSize',
      diskSize: 'DiskSize',
      expireTime: 'ExpireTime',
      haType: 'HaType',
      hasUser: 'HasUser',
      innerEndpoint: 'InnerEndpoint',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isDeletionProtection: 'IsDeletionProtection',
      lockMode: 'LockMode',
      mainVersion: 'MainVersion',
      outerEndpoint: 'OuterEndpoint',
      payType: 'PayType',
      regionId: 'RegionId',
      requestId: 'RequestId',
      reserverMaxQpsNum: 'ReserverMaxQpsNum',
      reserverMinQpsNum: 'ReserverMinQpsNum',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      updateStatus: 'UpdateStatus',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      clusterType: 'string',
      createTime: 'string',
      cuSize: 'string',
      diskSize: 'string',
      expireTime: 'string',
      haType: 'string',
      hasUser: 'string',
      innerEndpoint: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isDeletionProtection: 'string',
      lockMode: 'string',
      mainVersion: 'string',
      outerEndpoint: 'string',
      payType: 'string',
      regionId: 'string',
      requestId: 'string',
      reserverMaxQpsNum: 'string',
      reserverMinQpsNum: 'string',
      resourceGroupId: 'string',
      status: 'string',
      updateStatus: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServerlessClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServerlessClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubDomainRequest extends $tea.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubDomainResponseBody extends $tea.Model {
  /**
   * @example
   * F4208C83-B9BC-4A64-A739-8F88E98DA469
   */
  requestId?: string;
  /**
   * @example
   * cn-hangzhou-h-aliyun
   */
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSubDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSubDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHBaseueBackupRequest extends $tea.Model {
  /**
   * @example
   * xxx
   */
  clientToken?: string;
  /**
   * @example
   * 800
   */
  coldStorageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  hbaseueClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  nodeCount?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      coldStorageSize: 'ColdStorageSize',
      hbaseueClusterId: 'HbaseueClusterId',
      nodeCount: 'NodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      coldStorageSize: 'number',
      hbaseueClusterId: 'string',
      nodeCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHBaseueBackupResponseBody extends $tea.Model {
  /**
   * @example
   * bds-m5e54q06ceyhxxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1449xxx
   */
  orderId?: string;
  /**
   * @example
   * 15272D5D-46E8-4400-9CC8-A7E7B589F575
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHBaseueBackupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableHBaseueBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableHBaseueBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHBaseueModuleRequest extends $tea.Model {
  /**
   * @example
   * 2
   */
  autoRenewPeriod?: number;
  /**
   * @example
   * bds-bp174pm3tsk3****
   */
  bdsId?: string;
  /**
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase.sn1.large
   */
  coreInstanceType?: string;
  /**
   * @example
   * 400
   */
  diskSize?: number;
  /**
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  hbaseueClusterId?: string;
  /**
   * @example
   * hbase.sn1.large
   */
  masterInstanceType?: string;
  /**
   * @example
   * cluster-name
   */
  moduleClusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * solr
   */
  moduleTypeName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  nodeCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @example
   * 6
   */
  period?: number;
  /**
   * @example
   * month
   */
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-bp120k6ixs4eog*****
   */
  vpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-bp191ipotqj1ssyl*****
   */
  vswitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewPeriod: 'AutoRenewPeriod',
      bdsId: 'BdsId',
      clientToken: 'ClientToken',
      coreInstanceType: 'CoreInstanceType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      hbaseueClusterId: 'HbaseueClusterId',
      masterInstanceType: 'MasterInstanceType',
      moduleClusterName: 'ModuleClusterName',
      moduleTypeName: 'ModuleTypeName',
      nodeCount: 'NodeCount',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewPeriod: 'number',
      bdsId: 'string',
      clientToken: 'string',
      coreInstanceType: 'string',
      diskSize: 'number',
      diskType: 'string',
      hbaseueClusterId: 'string',
      masterInstanceType: 'string',
      moduleClusterName: 'string',
      moduleTypeName: 'string',
      nodeCount: 'number',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHBaseueModuleResponseBody extends $tea.Model {
  /**
   * @example
   * ld-bp150tns0sjxs****-m1-ps
   */
  clusterId?: string;
  /**
   * @example
   * 21474915573****
   */
  orderId?: string;
  /**
   * @example
   * 407075EA-47F5-5A2D-888F-C1F90B8F3FCA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHBaseueModuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableHBaseueModuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableHBaseueModuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateMultiZoneResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-hangxzhouxb****
   */
  arbiterVSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  arbiterZoneId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  archVersion?: string;
  /**
   * @example
   * 0
   */
  autoRenewPeriod?: number;
  /**
   * @example
   * f4g8t5rd2gr94****
   */
  clientToken?: string;
  /**
   * @example
   * hbaseue_test
   */
  clusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 400
   */
  coreDiskSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cloud_ssd
   */
  coreDiskType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase.sn1.medium
   */
  coreInstanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  coreNodeCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbaseue
   */
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  engineVersion?: string;
  /**
   * @example
   * 400
   */
  logDiskSize?: number;
  /**
   * @example
   * cloud_ssd
   */
  logDiskType?: string;
  /**
   * @example
   * hbase.sn1.medium
   */
  logInstanceType?: string;
  /**
   * @example
   * 4
   */
  logNodeCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase.sn1.medium
   */
  masterInstanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-bef-aliyun-com
   */
  multiZoneCombination?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * month
   */
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-hangxzhouxe*****
   */
  primaryVSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-e
   */
  primaryZoneId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-hangxzhouxf****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-f
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-bp120k6ixs4eog*****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      arbiterVSwitchId: 'ArbiterVSwitchId',
      arbiterZoneId: 'ArbiterZoneId',
      archVersion: 'ArchVersion',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      clusterName: 'ClusterName',
      coreDiskSize: 'CoreDiskSize',
      coreDiskType: 'CoreDiskType',
      coreInstanceType: 'CoreInstanceType',
      coreNodeCount: 'CoreNodeCount',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      logDiskSize: 'LogDiskSize',
      logDiskType: 'LogDiskType',
      logInstanceType: 'LogInstanceType',
      logNodeCount: 'LogNodeCount',
      masterInstanceType: 'MasterInstanceType',
      multiZoneCombination: 'MultiZoneCombination',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      primaryVSwitchId: 'PrimaryVSwitchId',
      primaryZoneId: 'PrimaryZoneId',
      regionId: 'RegionId',
      securityIPList: 'SecurityIPList',
      standbyVSwitchId: 'StandbyVSwitchId',
      standbyZoneId: 'StandbyZoneId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arbiterVSwitchId: 'string',
      arbiterZoneId: 'string',
      archVersion: 'string',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      clusterName: 'string',
      coreDiskSize: 'number',
      coreDiskType: 'string',
      coreInstanceType: 'string',
      coreNodeCount: 'number',
      engine: 'string',
      engineVersion: 'string',
      logDiskSize: 'number',
      logDiskType: 'string',
      logInstanceType: 'string',
      logNodeCount: 'number',
      masterInstanceType: 'string',
      multiZoneCombination: 'string',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      primaryVSwitchId: 'string',
      primaryZoneId: 'string',
      regionId: 'string',
      securityIPList: 'string',
      standbyVSwitchId: 'string',
      standbyZoneId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateMultiZoneResourceResponseBody extends $tea.Model {
  /**
   * @example
   * FB703B69-D4D4-4879-B9FE-6A37F67C46FD
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateMultiZoneResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EvaluateMultiZoneResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EvaluateMultiZoneResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultimodeCmsUrlRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn******
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultimodeCmsUrlResponseBody extends $tea.Model {
  /**
   * @example
   * hb-t4naqsay5gn******
   */
  clusterId?: string;
  /**
   * @example
   * htpp://***********
   */
  multimodCmsUrl?: string;
  /**
   * @example
   * 44183B05-852E-4716-B902-52977140190F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      multimodCmsUrl: 'MultimodCmsUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      multimodCmsUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultimodeCmsUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMultimodeCmsUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMultimodeCmsUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test01
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * READ,WRITE
   */
  aclActions?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      aclActions: 'AclActions',
      clusterId: 'ClusterId',
      namespace: 'Namespace',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      aclActions: 'string',
      clusterId: 'string',
      namespace: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantResponseBody extends $tea.Model {
  /**
   * @example
   * 9CBF8DF0-4931-4A54-9B60-4C6E1AB5****
   */
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

export class GrantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GrantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GrantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHBaseInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-t4nx81tmlixcq5i****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHBaseInstancesResponseBody extends $tea.Model {
  instances?: ListHBaseInstancesResponseBodyInstances;
  /**
   * @example
   * 89F81C30-320B-4550-91DB-C37C81D2358F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: ListHBaseInstancesResponseBodyInstances,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHBaseInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHBaseInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHBaseInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigHistoriesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn******
   */
  clusterId?: string;
  /**
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigHistoriesResponseBody extends $tea.Model {
  configureHistoryList?: ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryList;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageRecordCount?: number;
  /**
   * @example
   * 658C1549-2C02-4FD9-9490-EB3B285F9DCA
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      configureHistoryList: 'ConfigureHistoryList',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureHistoryList: ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryList,
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

export class ListInstanceServiceConfigHistoriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceServiceConfigHistoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceServiceConfigHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigurationsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigurationsResponseBody extends $tea.Model {
  configureList?: ListInstanceServiceConfigurationsResponseBodyConfigureList;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageRecordCount?: number;
  /**
   * @example
   * 5B381E36-BCA3-4377-8638-B65C236617D5
   */
  requestId?: string;
  /**
   * @example
   * 42
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      configureList: 'ConfigureList',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureList: ListInstanceServiceConfigurationsResponseBodyConfigureList,
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

export class ListInstanceServiceConfigurationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceServiceConfigurationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceServiceConfigurationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @example
   * NextToken
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * bds-bp15e022622f****
   */
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * 1d2db86sca4384811e0b5e8707e68****
   */
  nextToken?: string;
  /**
   * @example
   * 74F02441-9A8D-48F6-933F-E317AEB28DBF
   */
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

export class ListTagsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
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

export class ListTagsResponseBody extends $tea.Model {
  /**
   * @example
   * 36D1BE9B-3C4A-425B-947A-69E3D77999C4
   */
  requestId?: string;
  tags?: ListTagsResponseBodyTags;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: ListTagsResponseBodyTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPasswordRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test01
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * **********
   */
  newAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clusterId: 'ClusterId',
      newAccountPassword: 'NewAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clusterId: 'string',
      newAccountPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPasswordResponseBody extends $tea.Model {
  /**
   * @example
   * AFAA617B-3268-5883-982B-DB8EC8CC1F1B
   */
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

export class ModifyAccountPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccountPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyActiveOperationTasksRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1111,2222
   */
  ids?: string;
  /**
   * @example
   * 1
   */
  immediateStart?: number;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-02-17T18:50:00Z
   */
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      immediateStart: 'ImmediateStart',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      immediateStart: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      switchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyActiveOperationTasksResponseBody extends $tea.Model {
  /**
   * @example
   * 1111,2222
   */
  ids?: string;
  /**
   * @example
   * 8C9CC46A-9532-4752-B59F-580112C5A45B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyActiveOperationTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyActiveOperationTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyActiveOperationTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPlanConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7
   */
  fullBackupCycle?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  minHFileBackupCount?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-11-09T18:00:00Z
   */
  nextFullBackupDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * *
   */
  tables?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      fullBackupCycle: 'FullBackupCycle',
      minHFileBackupCount: 'MinHFileBackupCount',
      nextFullBackupDate: 'NextFullBackupDate',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      fullBackupCycle: 'string',
      minHFileBackupCount: 'string',
      nextFullBackupDate: 'string',
      tables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPlanConfigResponseBody extends $tea.Model {
  /**
   * @example
   * 50F4A8C2-076F-4703-9813-2FCD7FBB91C2
   */
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

export class ModifyBackupPlanConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyBackupPlanConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyBackupPlanConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @example
   * 18:00Z
   */
  preferredBackupEndTimeUTC?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Thursday
   */
  preferredBackupPeriod?: string;
  /**
   * @example
   * 17:00Z
   */
  preferredBackupStartTimeUTC?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 01:00-02:00
   */
  preferredBackupTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      preferredBackupEndTimeUTC: 'PreferredBackupEndTimeUTC',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupStartTimeUTC: 'PreferredBackupStartTimeUTC',
      preferredBackupTime: 'PreferredBackupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      preferredBackupEndTimeUTC: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupStartTimeUTC: 'string',
      preferredBackupTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyResponseBody extends $tea.Model {
  /**
   * @example
   * 17E3AC63-300D-4B69-9108-45EC20E50E85
   */
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

export class ModifyClusterDeletionProtectionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-****************
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  protection?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      protection: 'Protection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      protection: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterDeletionProtectionResponseBody extends $tea.Model {
  /**
   * @example
   * 24C80BD8-C710-4138-893A-D2AFED4FC13D
   */
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

export class ModifyClusterDeletionProtectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyClusterDeletionProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyClusterDeletionProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskWarningLineRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 80
   */
  warningLine?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      warningLine: 'WarningLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      warningLine: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskWarningLineResponseBody extends $tea.Model {
  /**
   * @example
   * FC4A930D-3AEE-4C9D-BC70-C0F2EEEAA174
   */
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

export class ModifyDiskWarningLineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDiskWarningLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDiskWarningLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMaintainTimeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp1b**6jco89****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 06:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 02:00Z
   */
  maintainStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMaintainTimeResponseBody extends $tea.Model {
  /**
   * @example
   * C9085433-A56A-4089-B49A-DF5A4E2B7B06
   */
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

export class ModifyInstanceMaintainTimeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceMaintainTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceMaintainTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNameRequest extends $tea.Model {
  /**
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testhbaseone
   */
  clusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterId: 'string',
      clusterName: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNameResponseBody extends $tea.Model {
  /**
   * @example
   * 959DA199-54E5-569D-AD46-92BED8515E62
   */
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

export class ModifyInstanceNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceServiceConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase#hbase-site.xml#hbase.client.keyvalue.maxsize
   */
  configureName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10485770
   */
  configureValue?: string;
  /**
   * @example
   * {"key1=value1", "key2=value2"}
   */
  parameters?: string;
  /**
   * @example
   * false
   */
  restart?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      configureName: 'ConfigureName',
      configureValue: 'ConfigureValue',
      parameters: 'Parameters',
      restart: 'Restart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      configureName: 'string',
      configureValue: 'string',
      parameters: 'string',
      restart: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceServiceConfigResponseBody extends $tea.Model {
  /**
   * @example
   * F008B7AB-025D-4C20-AE12-047C8F8C3D97
   */
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

export class ModifyInstanceServiceConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceServiceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceServiceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceTypeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp1x940uh********
   */
  clusterId?: string;
  /**
   * @example
   * hbase.sn1.8xlarge
   */
  coreInstanceType?: string;
  /**
   * @example
   * hbase.sn1.large
   */
  masterInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      coreInstanceType: 'CoreInstanceType',
      masterInstanceType: 'MasterInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      coreInstanceType: 'string',
      masterInstanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceTypeResponseBody extends $tea.Model {
  /**
   * @example
   * 123412341234123
   */
  orderId?: string;
  /**
   * @example
   * 3E19E345-101D-4014-946C-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpWhitelistRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp1uoihlf82e8****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * group_01
   */
  groupName?: string;
  /**
   * @example
   * 42.120.XX.XX
   */
  ipList?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  ipVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      groupName: 'GroupName',
      ipList: 'IpList',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      groupName: 'string',
      ipList: 'string',
      ipVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpWhitelistResponseBody extends $tea.Model {
  /**
   * @example
   * 101CFA8A-FB88-5014-A10C-3A0DA9AD8B0B
   */
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

export class ModifyIpWhitelistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyIpWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyIpWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMultiZoneClusterNodeTypeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-dj45g7d6rbrd****
   */
  clusterId?: string;
  /**
   * @example
   * hbase.sn1.large
   */
  coreInstanceType?: string;
  /**
   * @example
   * hbase.sn1.2xlarge
   */
  logInstanceType?: string;
  /**
   * @example
   * hbase.sn1.8xlarge
   */
  masterInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      coreInstanceType: 'CoreInstanceType',
      logInstanceType: 'LogInstanceType',
      masterInstanceType: 'MasterInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      coreInstanceType: 'string',
      logInstanceType: 'string',
      masterInstanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMultiZoneClusterNodeTypeResponseBody extends $tea.Model {
  /**
   * @example
   * 12341234123****
   */
  orderId?: string;
  /**
   * @example
   * 06CF7A6F-A81C-431D-BACD-793F24A67C54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMultiZoneClusterNodeTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMultiZoneClusterNodeTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyMultiZoneClusterNodeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp16f1441y6p2kv**
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-t4ng4yyc916o81nu****,sg-x4gg4dyc9d6w********
   */
  securityGroupIds?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      securityGroupIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupsResponseBody extends $tea.Model {
  /**
   * @example
   * F4AD2E65-482B-46B6-942E-765989B1C8A3
   */
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

export class ModifySecurityGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySecurityGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifySecurityGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUIAccountPasswordRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test01
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * **********
   */
  accountPassword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUIAccountPasswordResponseBody extends $tea.Model {
  /**
   * @example
   * BED4ADEB-4EA9-507E-892C-84112D6AC7C1
   */
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

export class ModifyUIAccountPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyUIAccountPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyUIAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp169l540vc6c****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rg-aekzrk6zzsy****
   */
  newResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      newResourceGroupId: 'NewResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      newResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $tea.Model {
  /**
   * @example
   * 8CD9BFBC-D575-5FCC-BA7E-956BF0D0****
   */
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

export class MoveResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenBackupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn******
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenBackupResponseBody extends $tea.Model {
  /**
   * @example
   * C977DF60-7D06-4E34-A27D-8BC696C5112A
   */
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

export class OpenBackupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurgeInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-m5ek15uzs7613xxxx
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurgeInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * 276F899F-E952-496F-81B8-BD46D86854E3
   */
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

export class PurgeInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PurgeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PurgeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bds-t4n3496whj23ia4k
   */
  bdsId?: string;
  static names(): { [key: string]: string } {
    return {
      bdsId: 'BdsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bdsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBResponseBody extends $tea.Model {
  clusterList?: QueryHBaseHaDBResponseBodyClusterList;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 963355AD-A3B1-4654-AFFC-B5186EB8F889
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterList: 'ClusterList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: QueryHBaseHaDBResponseBodyClusterList,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryHBaseHaDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryHBaseHaDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryXpackRelateDBRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ap-bp1qtz9rcbbt3p6ng
   */
  clusterId?: string;
  /**
   * @example
   * false
   */
  hasSingleNode?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase
   */
  relateDbType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hasSingleNode: 'HasSingleNode',
      relateDbType: 'RelateDbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      hasSingleNode: 'boolean',
      relateDbType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryXpackRelateDBResponseBody extends $tea.Model {
  clusterList?: QueryXpackRelateDBResponseBodyClusterList;
  /**
   * @example
   * 288E9010-36DD-499C-B4DA-61E4362DA4CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterList: 'ClusterList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: QueryXpackRelateDBResponseBodyClusterList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryXpackRelateDBResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryXpackRelateDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryXpackRelateDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelateDbForHBaseHaRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bds-t4nj9v2x85******
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp1w6krp539******
   */
  haActive?: string;
  /**
   * @example
   * hb-t4naqsay5gn******-master1-001.hbase.singapore.rds.aliyuncs.com,hb-t4naqsay5gn******-master3-001.hbase.singapore.rds.aliyuncs.com,hb-t4naqsay5gn******-master2-001.hbase.singapore.rds.aliyuncs.com:2181:/hbase
   */
  haActiveClusterKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase
   */
  haActiveDBType?: string;
  /**
   * @example
   * /hbase
   */
  haActiveHbaseFsDir?: string;
  /**
   * @example
   * hdfs://hb-t4naqsay5gn******-master1-001.hbase.rds.aliyuncs.com:8020,hb-t4naqsay5gn******-master2-001.hbase.rds.aliyuncs.com:8020
   */
  haActiveHdfsUri?: string;
  /**
   * @example
   * root
   */
  haActivePassword?: string;
  /**
   * @example
   * root
   */
  haActiveUser?: string;
  /**
   * @example
   * HBase2x
   */
  haActiveVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CLUSTER
   */
  haMigrateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp1bl7iqzka******
   */
  haStandby?: string;
  /**
   * @example
   * hb-bp1w6krp539******-master1-001.hbase.singapore.rds.aliyuncs.com,hb-bp1w6krp539******-master3-001.hbase.singapore.rds.aliyuncs.com,hb-t4naqsay5gn******-master2-001.hbase.singapore.rds.aliyuncs.com:2181:/hbase
   */
  haStandbyClusterKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase
   */
  haStandbyDBType?: string;
  /**
   * @example
   * /hbase
   */
  haStandbyHbaseFsDir?: string;
  /**
   * @example
   * hdfs://hb-bp1w6krp539******-master1-001.hbase.rds.aliyuncs.com:8020,hb-bp1w6krp539******-master2-001.hbase.rds.aliyuncs.com:8020
   */
  haStandbyHdfsUri?: string;
  /**
   * @example
   * root
   */
  haStandbyPassword?: string;
  /**
   * @example
   * root
   */
  haStandbyUser?: string;
  /**
   * @example
   * HBase2x
   */
  haStandbyVersion?: string;
  /**
   * @example
   * test,test1
   */
  haTables?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  isActiveStandard?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  isStandbyStandard?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      haActive: 'HaActive',
      haActiveClusterKey: 'HaActiveClusterKey',
      haActiveDBType: 'HaActiveDBType',
      haActiveHbaseFsDir: 'HaActiveHbaseFsDir',
      haActiveHdfsUri: 'HaActiveHdfsUri',
      haActivePassword: 'HaActivePassword',
      haActiveUser: 'HaActiveUser',
      haActiveVersion: 'HaActiveVersion',
      haMigrateType: 'HaMigrateType',
      haStandby: 'HaStandby',
      haStandbyClusterKey: 'HaStandbyClusterKey',
      haStandbyDBType: 'HaStandbyDBType',
      haStandbyHbaseFsDir: 'HaStandbyHbaseFsDir',
      haStandbyHdfsUri: 'HaStandbyHdfsUri',
      haStandbyPassword: 'HaStandbyPassword',
      haStandbyUser: 'HaStandbyUser',
      haStandbyVersion: 'HaStandbyVersion',
      haTables: 'HaTables',
      isActiveStandard: 'IsActiveStandard',
      isStandbyStandard: 'IsStandbyStandard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      haActive: 'string',
      haActiveClusterKey: 'string',
      haActiveDBType: 'string',
      haActiveHbaseFsDir: 'string',
      haActiveHdfsUri: 'string',
      haActivePassword: 'string',
      haActiveUser: 'string',
      haActiveVersion: 'string',
      haMigrateType: 'string',
      haStandby: 'string',
      haStandbyClusterKey: 'string',
      haStandbyDBType: 'string',
      haStandbyHbaseFsDir: 'string',
      haStandbyHdfsUri: 'string',
      haStandbyPassword: 'string',
      haStandbyUser: 'string',
      haStandbyVersion: 'string',
      haTables: 'string',
      isActiveStandard: 'boolean',
      isStandbyStandard: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelateDbForHBaseHaResponseBody extends $tea.Model {
  /**
   * @example
   * DC654531-0799-4502-AFA5-80EE1C16829A
   */
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

export class RelateDbForHBaseHaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RelateDbForHBaseHaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RelateDbForHBaseHaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicNetworkAddressRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn******
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicNetworkAddressResponseBody extends $tea.Model {
  /**
   * @example
   * B18D4390-A968-4444-B323-4360B8E5DA3E
   */
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

export class ReleasePublicNetworkAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleasePublicNetworkAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleasePublicNetworkAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp1u0639js2h7****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  duration?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * month
   */
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      duration: 'Duration',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      duration: 'number',
      pricingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * 211235614240728
   */
  orderId?: number;
  /**
   * @example
   * 729CB2A7-3065-53A9-B27C-7033CA4881D9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
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

export class ResizeColdStorageSizeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp169l540vc6c****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 900
   */
  coldStorageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      coldStorageSize: 'ColdStorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      coldStorageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeColdStorageSizeResponseBody extends $tea.Model {
  /**
   * @example
   * 21711518427****
   */
  orderId?: string;
  /**
   * @example
   * 5AA6F80E-535C-5611-BD13-3832D96A4D0E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeColdStorageSizeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResizeColdStorageSizeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResizeColdStorageSizeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeDiskSizeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp16o0pd52e3y****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 120
   */
  nodeDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodeDiskSize: 'NodeDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodeDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeDiskSizeResponseBody extends $tea.Model {
  /**
   * @example
   * 3C22622B-8555-42BF-AD8A-1B960743****
   */
  orderId?: string;
  /**
   * @example
   * 493A762B-E4A6-44E9-B877-CA6D0CAF8B29
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeDiskSizeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResizeDiskSizeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResizeDiskSizeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeMultiZoneClusterDiskSizeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-f5d6vc2r8d6****
   */
  clusterId?: string;
  /**
   * @example
   * 480
   */
  coreDiskSize?: number;
  /**
   * @example
   * 440
   */
  logDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      coreDiskSize: 'CoreDiskSize',
      logDiskSize: 'LogDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      coreDiskSize: 'number',
      logDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeMultiZoneClusterDiskSizeResponseBody extends $tea.Model {
  /**
   * @example
   * 123412341****
   */
  orderId?: string;
  /**
   * @example
   * 568339C4-9F71-43D0-994E-E039CD826E56
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeMultiZoneClusterDiskSizeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResizeMultiZoneClusterDiskSizeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResizeMultiZoneClusterDiskSizeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeMultiZoneClusterNodeCountRequest extends $tea.Model {
  /**
   * @example
   * vsw-hangxzhouxb*****
   */
  arbiterVSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-f5d8d6s4s2a1****
   */
  clusterId?: string;
  /**
   * @example
   * 6
   */
  coreNodeCount?: number;
  /**
   * @example
   * 8
   */
  logNodeCount?: number;
  /**
   * @example
   * 6
   */
  primaryCoreNodeCount?: number;
  /**
   * @example
   * vsw-hangxzhouxe*****
   */
  primaryVSwitchId?: string;
  /**
   * @example
   * 6
   */
  standbyCoreNodeCount?: number;
  /**
   * @example
   * vsw-hangxzhouxf****
   */
  standbyVSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      arbiterVSwitchId: 'ArbiterVSwitchId',
      clusterId: 'ClusterId',
      coreNodeCount: 'CoreNodeCount',
      logNodeCount: 'LogNodeCount',
      primaryCoreNodeCount: 'PrimaryCoreNodeCount',
      primaryVSwitchId: 'PrimaryVSwitchId',
      standbyCoreNodeCount: 'StandbyCoreNodeCount',
      standbyVSwitchId: 'StandbyVSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arbiterVSwitchId: 'string',
      clusterId: 'string',
      coreNodeCount: 'number',
      logNodeCount: 'number',
      primaryCoreNodeCount: 'number',
      primaryVSwitchId: 'string',
      standbyCoreNodeCount: 'number',
      standbyVSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeMultiZoneClusterNodeCountResponseBody extends $tea.Model {
  /**
   * @example
   * 1234123412****
   */
  orderId?: string;
  /**
   * @example
   * E2B7E9DA-1575-4B9D-A0E4-9468BAC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeMultiZoneClusterNodeCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResizeMultiZoneClusterNodeCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResizeMultiZoneClusterNodeCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeNodeCountRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp16o0pd52e3y****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  nodeCount?: number;
  /**
   * @example
   * vsw-bp191otqj1ssyl****
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodeCount: 'NodeCount',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodeCount: 'number',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeNodeCountResponseBody extends $tea.Model {
  /**
   * @example
   * 20470860005****
   */
  orderId?: string;
  /**
   * @example
   * B288B41F-6681-42A6-8905-47C3C42B19B0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeNodeCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResizeNodeCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResizeNodeCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  /**
   * @example
   * THRIFT
   */
  components?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      components: 'Components',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      components: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * F744E939-D08D-5623-82C8-9D1F9F7685D1
   */
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

export class RestartInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test01
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * READ,WRITE
   */
  aclActions?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      aclActions: 'AclActions',
      clusterId: 'ClusterId',
      namespace: 'Namespace',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      aclActions: 'string',
      clusterId: 'string',
      namespace: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeResponseBody extends $tea.Model {
  /**
   * @example
   * C9085433-A56A-4089-B49A-DF5A4E2B7B06
   */
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

export class RevokeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchHbaseHaSlbRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bds-t4n3496whj23ia4k
   */
  bdsId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ha-v21tmnxjwh2yuy1il
   */
  haId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * thrift
   */
  haTypes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Active
   */
  hbaseType?: string;
  static names(): { [key: string]: string } {
    return {
      bdsId: 'BdsId',
      haId: 'HaId',
      haTypes: 'HaTypes',
      hbaseType: 'HbaseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bdsId: 'string',
      haId: 'string',
      haTypes: 'string',
      hbaseType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchHbaseHaSlbResponseBody extends $tea.Model {
  /**
   * @example
   * C9D568D9-A59C-4AF2-8FBB-F086A841D58E
   */
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

export class SwitchHbaseHaSlbResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchHbaseHaSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SwitchHbaseHaSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchServiceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-uf6r2hn2zrxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * open
   */
  operate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HBaseProxy
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      operate: 'Operate',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      operate: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchServiceResponseBody extends $tea.Model {
  /**
   * @example
   * F1005DE4-D981-559F-9E37-5172DXXXXXX
   */
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

export class SwitchServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SwitchServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bds-bp15e022622fk0w1
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * 2656FA19-6059-40C8-A157-3FFBEAEC2369
   */
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

export class UnTagResourcesRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bds-bp15e022622fk0w1
   */
  resourceId?: string[];
  /**
   * @example
   * key1
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * 9CBF8DF0-4931-4A54-9B60-4C6E1AB59286
   */
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

export class UnTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMinorVersionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @example
   * HADOOP
   */
  components?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      components: 'Components',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      components: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMinorVersionResponseBody extends $tea.Model {
  /**
   * @example
   * 7B8EC240-BB13-4DBC-B955-F90170E82609
   */
  requestId?: string;
  /**
   * @example
   * HADOOP
   */
  upgradingComponents?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      upgradingComponents: 'UpgradingComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      upgradingComponents: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMinorVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeMinorVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeMinorVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMultiZoneClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-***************
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LINDORM
   */
  components?: string;
  /**
   * @example
   * LPROXY
   */
  restartComponents?: string;
  /**
   * @example
   * serial
   */
  runMode?: string;
  /**
   * @example
   * ld-t4n40m3171t4******-az-b
   */
  upgradeInsName?: string;
  /**
   * @example
   * t-apsara-lindorm-2.1.20-20200518175539.alios7.x86_64
   */
  versions?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      components: 'Components',
      restartComponents: 'RestartComponents',
      runMode: 'RunMode',
      upgradeInsName: 'UpgradeInsName',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      components: 'string',
      restartComponents: 'string',
      runMode: 'string',
      upgradeInsName: 'string',
      versions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMultiZoneClusterResponseBody extends $tea.Model {
  /**
   * @example
   * C532A4D4-9451-4460-BB3E-300FEC852D3F
   */
  requestId?: string;
  /**
   * @example
   * LINDORM
   */
  upgradingComponents?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      upgradingComponents: 'UpgradingComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      upgradingComponents: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMultiZoneClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeMultiZoneClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeMultiZoneClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class XpackRelateDBRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ap-bp1qtz9rcbbt3****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp16o0pd52e3****
   */
  dbClusterIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase
   */
  relateDbType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dbClusterIds: 'DbClusterIds',
      relateDbType: 'RelateDbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dbClusterIds: 'string',
      relateDbType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class XpackRelateDBResponseBody extends $tea.Model {
  /**
   * @example
   * 50373857-C47B-4B64-9332-D0B5280B59EA
   */
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

export class XpackRelateDBResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: XpackRelateDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: XpackRelateDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckComponentsVersionResponseBodyComponentsComponent extends $tea.Model {
  /**
   * @example
   * HBASE
   */
  component?: string;
  /**
   * @example
   * true
   */
  isLatestVersion?: string;
  static names(): { [key: string]: string } {
    return {
      component: 'Component',
      isLatestVersion: 'IsLatestVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: 'string',
      isLatestVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckComponentsVersionResponseBodyComponents extends $tea.Model {
  component?: CheckComponentsVersionResponseBodyComponentsComponent[];
  static names(): { [key: string]: string } {
    return {
      component: 'Component',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: { 'type': 'array', 'itemType': CheckComponentsVersionResponseBodyComponentsComponent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccounts extends $tea.Model {
  account?: string[];
  static names(): { [key: string]: string } {
    return {
      account: 'account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskTypeResponseBodyTypeList extends $tea.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  /**
   * @example
   * rds_apsaradb_upgrade
   */
  taskTypeInfoEn?: string;
  taskTypeInfoZh?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      taskType: 'TaskType',
      taskTypeInfoEn: 'TaskTypeInfoEn',
      taskTypeInfoZh: 'TaskTypeInfoZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      taskType: 'string',
      taskTypeInfoEn: 'string',
      taskTypeInfoZh: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTasksResponseBodyItems extends $tea.Model {
  /**
   * @example
   * 1
   */
  allowCancel?: string;
  /**
   * @example
   * 1
   */
  allowChange?: string;
  /**
   * @example
   * all
   */
  changeLevel?: string;
  /**
   * @example
   * Risk repairment
   */
  changeLevelEn?: string;
  changeLevelZh?: string;
  /**
   * @example
   * 2022-02-15 23:59:59
   */
  createdTime?: string;
  /**
   * @example
   * cn-shanghai-et-a
   */
  currentAVZ?: string;
  /**
   * @example
   * hbaseue
   */
  dbType?: string;
  /**
   * @example
   * 2.0
   */
  dbVersion?: string;
  /**
   * @example
   * 2022-02-19 23:59:59
   */
  deadline?: string;
  /**
   * @example
   * 111111
   */
  id?: number;
  /**
   * @example
   * Transient instance disconnection
   */
  impactEn?: string;
  impactZh?: string;
  /**
   * @example
   * --
   */
  insComment?: string;
  /**
   * @example
   * ld-bp150tns0sjxs****
   */
  insName?: string;
  /**
   * @example
   * 2022-02-19 14:00:00
   */
  modifiedTime?: string;
  /**
   * @example
   * 14:00:00
   */
  prepareInterval?: string;
  /**
   * @example
   * cn-hanghzou
   */
  region?: string;
  /**
   * @example
   * --
   */
  resultInfo?: string;
  /**
   * @example
   * 2022-02-19 10:00:00
   */
  startTime?: string;
  /**
   * @example
   * 5
   */
  status?: number;
  subInsNames?: string[];
  /**
   * @example
   * 2022-02-19 14:00:00
   */
  switchTime?: string;
  /**
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  /**
   * @example
   * rds_apsaradb_upgrade
   */
  taskTypeEn?: string;
  taskTypeZh?: string;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      allowChange: 'AllowChange',
      changeLevel: 'ChangeLevel',
      changeLevelEn: 'ChangeLevelEn',
      changeLevelZh: 'ChangeLevelZh',
      createdTime: 'CreatedTime',
      currentAVZ: 'CurrentAVZ',
      dbType: 'DbType',
      dbVersion: 'DbVersion',
      deadline: 'Deadline',
      id: 'Id',
      impactEn: 'ImpactEn',
      impactZh: 'ImpactZh',
      insComment: 'InsComment',
      insName: 'InsName',
      modifiedTime: 'ModifiedTime',
      prepareInterval: 'PrepareInterval',
      region: 'Region',
      resultInfo: 'ResultInfo',
      startTime: 'StartTime',
      status: 'Status',
      subInsNames: 'SubInsNames',
      switchTime: 'SwitchTime',
      taskType: 'TaskType',
      taskTypeEn: 'TaskTypeEn',
      taskTypeZh: 'TaskTypeZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'string',
      allowChange: 'string',
      changeLevel: 'string',
      changeLevelEn: 'string',
      changeLevelZh: 'string',
      createdTime: 'string',
      currentAVZ: 'string',
      dbType: 'string',
      dbVersion: 'string',
      deadline: 'string',
      id: 'number',
      impactEn: 'string',
      impactZh: 'string',
      insComment: 'string',
      insName: 'string',
      modifiedTime: 'string',
      prepareInterval: 'string',
      region: 'string',
      resultInfo: 'string',
      startTime: 'string',
      status: 'number',
      subInsNames: { 'type': 'array', 'itemType': 'string' },
      switchTime: 'string',
      taskType: 'string',
      taskTypeEn: 'string',
      taskTypeZh: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResourceInstanceTypeDetail extends $tea.Model {
  /**
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @example
   * 8
   */
  mem?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      mem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResource extends $tea.Model {
  /**
   * @example
   * hbase.sn1.medium
   */
  instanceType?: string;
  instanceTypeDetail?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResourceInstanceTypeDetail;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      instanceTypeDetail: 'InstanceTypeDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      instanceTypeDetail: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResourceInstanceTypeDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResources extends $tea.Model {
  masterResource?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResource[];
  static names(): { [key: string]: string } {
    return {
      masterResource: 'MasterResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceDBInstanceStorageRange extends $tea.Model {
  /**
   * @example
   * 8000
   */
  maxSize?: number;
  /**
   * @example
   * 400
   */
  minSize?: number;
  /**
   * @example
   * 40
   */
  stepSize?: number;
  static names(): { [key: string]: string } {
    return {
      maxSize: 'MaxSize',
      minSize: 'MinSize',
      stepSize: 'StepSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSize: 'number',
      minSize: 'number',
      stepSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceInstanceTypeDetail extends $tea.Model {
  /**
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @example
   * 8
   */
  mem?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      mem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResource extends $tea.Model {
  DBInstanceStorageRange?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceDBInstanceStorageRange;
  /**
   * @example
   * hbase.sn1.large
   */
  instanceType?: string;
  instanceTypeDetail?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceInstanceTypeDetail;
  /**
   * @example
   * 16
   */
  maxCoreCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceStorageRange: 'DBInstanceStorageRange',
      instanceType: 'InstanceType',
      instanceTypeDetail: 'InstanceTypeDetail',
      maxCoreCount: 'MaxCoreCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceStorageRange: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceDBInstanceStorageRange,
      instanceType: 'string',
      instanceTypeDetail: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceInstanceTypeDetail,
      maxCoreCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResources extends $tea.Model {
  coreResource?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResource[];
  static names(): { [key: string]: string } {
    return {
      coreResource: 'CoreResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageType extends $tea.Model {
  coreResources?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResources;
  /**
   * @example
   * cloud_ssd
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      coreResources: 'CoreResources',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreResources: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResources,
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypes extends $tea.Model {
  supportedStorageType?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageType[];
  static names(): { [key: string]: string } {
    return {
      supportedStorageType: 'SupportedStorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedStorageType: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategories extends $tea.Model {
  /**
   * @example
   * cluster
   */
  category?: string;
  supportedStorageTypes?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypes;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      supportedStorageTypes: 'SupportedStorageTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      supportedStorageTypes: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategories extends $tea.Model {
  supportedCategories?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategories[];
  static names(): { [key: string]: string } {
    return {
      supportedCategories: 'SupportedCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedCategories: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion extends $tea.Model {
  supportedCategories?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategories;
  /**
   * @example
   * 2.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      supportedCategories: 'SupportedCategories',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedCategories: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategories,
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions extends $tea.Model {
  supportedEngineVersion?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion[];
  static names(): { [key: string]: string } {
    return {
      supportedEngineVersion: 'SupportedEngineVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngineVersion: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine extends $tea.Model {
  /**
   * @example
   * hbase
   */
  engine?: string;
  supportedEngineVersions?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      supportedEngineVersions: 'SupportedEngineVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      supportedEngineVersions: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines extends $tea.Model {
  supportedEngine?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine[];
  static names(): { [key: string]: string } {
    return {
      supportedEngine: 'SupportedEngine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngine: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone extends $tea.Model {
  masterResources?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResources;
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  supportedEngines?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines;
  /**
   * @example
   * cn-shenzhen-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      masterResources: 'MasterResources',
      regionId: 'RegionId',
      supportedEngines: 'SupportedEngines',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterResources: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResources,
      regionId: 'string',
      supportedEngines: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines,
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZones extends $tea.Model {
  availableZone?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone[];
  static names(): { [key: string]: string } {
    return {
      availableZone: 'AvailableZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZone: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanConfigResponseBodyTables extends $tea.Model {
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

export class DescribeBackupSummaryResponseBodyFullRecordsRecord extends $tea.Model {
  /**
   * @example
   * 2020-11-02T18:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * 1.2 kB
   */
  dataSize?: string;
  /**
   * @example
   * 2020-11-02T18:02:04Z
   */
  finishTime?: string;
  /**
   * @example
   * 1/1
   */
  process?: string;
  /**
   * @example
   * 20201103020000
   */
  recordId?: string;
  /**
   * @example
   * 0.00 MB/s
   */
  speed?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSize: 'DataSize',
      finishTime: 'FinishTime',
      process: 'Process',
      recordId: 'RecordId',
      speed: 'Speed',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataSize: 'string',
      finishTime: 'string',
      process: 'string',
      recordId: 'string',
      speed: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSummaryResponseBodyFullRecords extends $tea.Model {
  record?: DescribeBackupSummaryResponseBodyFullRecordsRecord[];
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: { 'type': 'array', 'itemType': DescribeBackupSummaryResponseBodyFullRecordsRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSummaryResponseBodyFull extends $tea.Model {
  /**
   * @example
   * false
   */
  hasMore?: string;
  /**
   * @example
   * 2020-11-09T18:00:00Z
   */
  nextFullBackupDate?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: DescribeBackupSummaryResponseBodyFullRecords;
  /**
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      nextFullBackupDate: 'NextFullBackupDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'string',
      nextFullBackupDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      records: DescribeBackupSummaryResponseBodyFullRecords,
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSummaryResponseBodyIncr extends $tea.Model {
  /**
   * @example
   * 266 B
   */
  backupLogSize?: string;
  /**
   * @example
   * 2020-11-05T01:20:31Z
   */
  pos?: string;
  /**
   * @example
   * 0
   */
  queueLogNum?: string;
  /**
   * @example
   * 2
   */
  runningLogNum?: string;
  /**
   * @example
   * 0.00 MB/s
   */
  speed?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      backupLogSize: 'BackupLogSize',
      pos: 'Pos',
      queueLogNum: 'QueueLogNum',
      runningLogNum: 'RunningLogNum',
      speed: 'Speed',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupLogSize: 'string',
      pos: 'string',
      queueLogNum: 'string',
      runningLogNum: 'string',
      speed: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTablesResponseBodyBackupRecordsBackupRecord extends $tea.Model {
  /**
   * @example
   * 1.2 kB
   */
  dataSize?: string;
  /**
   * @example
   * 2020-11-02T18:00:05Z
   */
  endTime?: string;
  /**
   * @example
   * null
   */
  message?: string;
  /**
   * @example
   * 14/14
   */
  process?: string;
  /**
   * @example
   * 0.00 MB/s
   */
  speed?: string;
  /**
   * @example
   * 2020-11-02T18:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * SUCCEEDED
   */
  state?: string;
  /**
   * @example
   * default:test1
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      endTime: 'EndTime',
      message: 'Message',
      process: 'Process',
      speed: 'Speed',
      startTime: 'StartTime',
      state: 'State',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'string',
      endTime: 'string',
      message: 'string',
      process: 'string',
      speed: 'string',
      startTime: 'string',
      state: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTablesResponseBodyBackupRecords extends $tea.Model {
  backupRecord?: DescribeBackupTablesResponseBodyBackupRecordsBackupRecord[];
  static names(): { [key: string]: string } {
    return {
      backupRecord: 'BackupRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRecord: { 'type': 'array', 'itemType': DescribeBackupTablesResponseBodyBackupRecordsBackupRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTablesResponseBodyTables extends $tea.Model {
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

export class DescribeBackupsResponseBodyBackupsBackup extends $tea.Model {
  /**
   * @example
   * 1
   */
  backupDBNames?: string;
  /**
   * @example
   * 1
   */
  backupDownloadURL?: string;
  /**
   * @example
   * 2020-12-23 17:25:24
   */
  backupEndTime?: string;
  /**
   * @example
   * 2020-12-23T09:25:24Z
   */
  backupEndTimeUTC?: string;
  /**
   * @example
   * 511876087
   */
  backupId?: number;
  /**
   * @example
   * P
   */
  backupMethod?: string;
  /**
   * @example
   * 0
   */
  backupMode?: string;
  /**
   * @example
   * 0.00
   */
  backupSize?: string;
  /**
   * @example
   * 2020-12-23 17:25:08
   */
  backupStartTime?: string;
  /**
   * @example
   * 2020-12-23T09:25:08Z
   */
  backupStartTimeUTC?: string;
  /**
   * @example
   * 0
   */
  backupStatus?: string;
  /**
   * @example
   * F
   */
  backupType?: string;
  static names(): { [key: string]: string } {
    return {
      backupDBNames: 'BackupDBNames',
      backupDownloadURL: 'BackupDownloadURL',
      backupEndTime: 'BackupEndTime',
      backupEndTimeUTC: 'BackupEndTimeUTC',
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStartTimeUTC: 'BackupStartTimeUTC',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDBNames: 'string',
      backupDownloadURL: 'string',
      backupEndTime: 'string',
      backupEndTimeUTC: 'string',
      backupId: 'number',
      backupMethod: 'string',
      backupMode: 'string',
      backupSize: 'string',
      backupStartTime: 'string',
      backupStartTimeUTC: 'string',
      backupStatus: 'string',
      backupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyBackups extends $tea.Model {
  backup?: DescribeBackupsResponseBodyBackupsBackup[];
  static names(): { [key: string]: string } {
    return {
      backup: 'Backup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backup: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyBackupsBackup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddrConnAddrInfo extends $tea.Model {
  /**
   * @example
   * hb-****-proxy-phoenix.hbase.rds.aliyuncs.com
   */
  connAddr?: string;
  /**
   * @example
   * 8765
   */
  connAddrPort?: string;
  /**
   * @example
   * 2
   */
  netType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddr: 'ConnAddr',
      connAddrPort: 'ConnAddrPort',
      netType: 'NetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddr: 'string',
      connAddrPort: 'string',
      netType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddr extends $tea.Model {
  connAddrInfo?: DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddrConnAddrInfo;
  /**
   * @example
   * PhoenixConnAddr
   */
  connType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddrInfo: 'ConnAddrInfo',
      connType: 'ConnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrInfo: DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddrConnAddrInfo,
      connType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodyServiceConnAddrs extends $tea.Model {
  serviceConnAddr?: DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddr[];
  static names(): { [key: string]: string } {
    return {
      serviceConnAddr: 'ServiceConnAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceConnAddr: { 'type': 'array', 'itemType': DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddrConnAddrInfo extends $tea.Model {
  /**
   * @example
   * ld-bp150tns0sjxs****-proxy-hbaseue-pub.hbaseue.rds.aliyuncs.com
   */
  connAddr?: string;
  /**
   * @example
   * 9190
   */
  connAddrPort?: string;
  /**
   * @example
   * 0
   */
  netType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddr: 'ConnAddr',
      connAddrPort: 'ConnAddrPort',
      netType: 'NetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddr: 'string',
      connAddrPort: 'string',
      netType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddr extends $tea.Model {
  connAddrInfo?: DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddrConnAddrInfo;
  /**
   * @example
   * hbaseue
   */
  slbType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddrInfo: 'ConnAddrInfo',
      slbType: 'SlbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrInfo: DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddrConnAddrInfo,
      slbType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodySlbConnAddrs extends $tea.Model {
  slbConnAddr?: DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddr[];
  static names(): { [key: string]: string } {
    return {
      slbConnAddr: 'SlbConnAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbConnAddr: { 'type': 'array', 'itemType': DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodyThriftConn extends $tea.Model {
  /**
   * @example
   * hb-bp1u0639js2h7****-proxy-thrift.hbase.rds.aliyuncs.com
   */
  connAddr?: string;
  /**
   * @example
   * 9099
   */
  connAddrPort?: string;
  /**
   * @example
   * 2
   */
  netType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddr: 'ConnAddr',
      connAddrPort: 'ConnAddrPort',
      netType: 'NetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddr: 'string',
      connAddrPort: 'string',
      netType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodyUiProxyConnAddrInfo extends $tea.Model {
  /**
   * @example
   * ld-bp150tns0sjxs****-master1-001.hbaseue.rds.aliyuncs.com
   */
  connAddr?: string;
  /**
   * @example
   * 443
   */
  connAddrPort?: string;
  /**
   * @example
   * PUBLIC
   */
  netType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddr: 'ConnAddr',
      connAddrPort: 'ConnAddrPort',
      netType: 'NetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddr: 'string',
      connAddrPort: 'string',
      netType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodyZkConnAddrsZkConnAddr extends $tea.Model {
  /**
   * @example
   * ld-bp150tns0sjxs****-master1-001.hbaseue.rds.aliyuncs.com
   */
  connAddr?: string;
  /**
   * @example
   * 2181
   */
  connAddrPort?: string;
  /**
   * @example
   * 2
   */
  netType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddr: 'ConnAddr',
      connAddrPort: 'ConnAddrPort',
      netType: 'NetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddr: 'string',
      connAddrPort: 'string',
      netType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionResponseBodyZkConnAddrs extends $tea.Model {
  zkConnAddr?: DescribeClusterConnectionResponseBodyZkConnAddrsZkConnAddr[];
  static names(): { [key: string]: string } {
    return {
      zkConnAddr: 'ZkConnAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zkConnAddr: { 'type': 'array', 'itemType': DescribeClusterConnectionResponseBodyZkConnAddrsZkConnAddr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeletedInstancesResponseBodyInstancesInstance extends $tea.Model {
  /**
   * @example
   * cluster
   */
  clusterType?: string;
  /**
   * @example
   * 2020-11-02T07:16:07Z
   */
  createdTime?: string;
  /**
   * @example
   * 2020-11-02T07:27:24Z
   */
  deleteTime?: string;
  /**
   * @example
   * hbase
   */
  engine?: string;
  /**
   * @example
   * hb-bp10q7n2zdw12xxxx
   */
  instanceId?: string;
  /**
   * @example
   * e2e-test
   */
  instanceName?: string;
  /**
   * @example
   * 2.0
   */
  majorVersion?: string;
  /**
   * @example
   * null
   */
  moduleStackVersion?: string;
  /**
   * @example
   * null
   */
  parentId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * DELETED
   */
  status?: string;
  /**
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      createdTime: 'CreatedTime',
      deleteTime: 'DeleteTime',
      engine: 'Engine',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      majorVersion: 'MajorVersion',
      moduleStackVersion: 'ModuleStackVersion',
      parentId: 'ParentId',
      regionId: 'RegionId',
      status: 'Status',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      createdTime: 'string',
      deleteTime: 'string',
      engine: 'string',
      instanceId: 'string',
      instanceName: 'string',
      majorVersion: 'string',
      moduleStackVersion: 'string',
      parentId: 'string',
      regionId: 'string',
      status: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeletedInstancesResponseBodyInstances extends $tea.Model {
  instance?: DescribeDeletedInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeDeletedInstancesResponseBodyInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponseBodyConnAddrsConnAddrInfo extends $tea.Model {
  /**
   * @example
   * ****
   */
  connAddr?: string;
  /**
   * @example
   * ****
   */
  connAddrPort?: string;
  /**
   * @example
   * zkConn
   */
  connType?: string;
  /**
   * @example
   * 2
   */
  netType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddr: 'ConnAddr',
      connAddrPort: 'ConnAddrPort',
      connType: 'ConnType',
      netType: 'NetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddr: 'string',
      connAddrPort: 'string',
      connType: 'string',
      netType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponseBodyConnAddrs extends $tea.Model {
  connAddrInfo?: DescribeEndpointsResponseBodyConnAddrsConnAddrInfo[];
  static names(): { [key: string]: string } {
    return {
      connAddrInfo: 'ConnAddrInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrInfo: { 'type': 'array', 'itemType': DescribeEndpointsResponseBodyConnAddrsConnAddrInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyNeedUpgradeComps extends $tea.Model {
  comps?: string[];
  static names(): { [key: string]: string } {
    return {
      comps: 'Comps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comps: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyTagsTag extends $tea.Model {
  /**
   * @example
   * test_key
   */
  key?: string;
  /**
   * @example
   * test_value
   */
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

export class DescribeInstanceResponseBodyTags extends $tea.Model {
  tag?: DescribeInstanceResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypeResponseBodyInstanceTypeSpecListInstanceTypeSpec extends $tea.Model {
  /**
   * @example
   * 8
   */
  cpuSize?: number;
  /**
   * @example
   * hbase.n2.4xlarge
   */
  instanceType?: string;
  /**
   * @example
   * 16
   */
  memSize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuSize: 'CpuSize',
      instanceType: 'InstanceType',
      memSize: 'MemSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuSize: 'number',
      instanceType: 'string',
      memSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypeResponseBodyInstanceTypeSpecList extends $tea.Model {
  instanceTypeSpec?: DescribeInstanceTypeResponseBodyInstanceTypeSpecListInstanceTypeSpec[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeSpec: 'InstanceTypeSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeSpec: { 'type': 'array', 'itemType': DescribeInstanceTypeResponseBodyInstanceTypeSpecListInstanceTypeSpec },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequestTag extends $tea.Model {
  /**
   * @example
   * key
   */
  key?: string;
  /**
   * @example
   * value
   */
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

export class DescribeInstancesResponseBodyInstancesInstanceTagsTag extends $tea.Model {
  /**
   * @example
   * test-key
   */
  key?: string;
  /**
   * @example
   * test-value
   */
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

export class DescribeInstancesResponseBodyInstancesInstanceTags extends $tea.Model {
  tag?: DescribeInstancesResponseBodyInstancesInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstance extends $tea.Model {
  /**
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @example
   * open
   */
  backupStatus?: string;
  /**
   * @example
   * hb-bp1u0639js2h7****
   */
  clusterId?: string;
  /**
   * @example
   * test
   */
  clusterName?: string;
  /**
   * @example
   * cluster
   */
  clusterType?: string;
  /**
   * @example
   * open
   */
  coldStorageStatus?: string;
  /**
   * @example
   * 2
   */
  coreDiskCount?: string;
  /**
   * @example
   * 100
   */
  coreDiskSize?: number;
  /**
   * @example
   * cloud_efficiency
   */
  coreDiskType?: string;
  /**
   * @example
   * hbase.sn1.large
   */
  coreInstanceType?: string;
  /**
   * @example
   * 2
   */
  coreNodeCount?: number;
  /**
   * @example
   * 2019-09-12T14:40:46
   */
  createdTime?: string;
  /**
   * @example
   * 2019-09-12T14:40:46Z
   */
  createdTimeUTC?: string;
  /**
   * @example
   * 12
   */
  duration?: number;
  /**
   * @example
   * hbase
   */
  engine?: string;
  /**
   * @example
   * 2019-10-12T14:40:46
   */
  expireTime?: string;
  /**
   * @example
   * 2019-10-12T14:40:46Z
   */
  expireTimeUTC?: string;
  /**
   * @example
   * hb-bp1u0639js2h7****
   */
  instanceId?: string;
  /**
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @example
   * true
   */
  isDeletionProtection?: boolean;
  /**
   * @example
   * true
   */
  isHa?: boolean;
  /**
   * @example
   * 2.0
   */
  majorVersion?: string;
  /**
   * @example
   * 100
   */
  masterDiskSize?: number;
  /**
   * @example
   * cloud_efficiency
   */
  masterDiskType?: string;
  /**
   * @example
   * hbase.sn1.large
   */
  masterInstanceType?: string;
  /**
   * @example
   * 2
   */
  masterNodeCount?: number;
  /**
   * @example
   * 0
   */
  moduleId?: number;
  /**
   * @example
   * 1.0
   */
  moduleStackVersion?: string;
  /**
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @example
   * 2980****2123
   */
  parentId?: string;
  /**
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-4f51d54g5****
   */
  resourceGroupId?: string;
  /**
   * @example
   * ACTIVATION
   */
  status?: string;
  tags?: DescribeInstancesResponseBodyInstancesInstanceTags;
  /**
   * @example
   * vpc-bp120k6ixs4eoghz*****
   */
  vpcId?: string;
  /**
   * @example
   * vsw-bp191ipotq****dbqf
   */
  vswitchId?: string;
  /**
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      backupStatus: 'BackupStatus',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      coldStorageStatus: 'ColdStorageStatus',
      coreDiskCount: 'CoreDiskCount',
      coreDiskSize: 'CoreDiskSize',
      coreDiskType: 'CoreDiskType',
      coreInstanceType: 'CoreInstanceType',
      coreNodeCount: 'CoreNodeCount',
      createdTime: 'CreatedTime',
      createdTimeUTC: 'CreatedTimeUTC',
      duration: 'Duration',
      engine: 'Engine',
      expireTime: 'ExpireTime',
      expireTimeUTC: 'ExpireTimeUTC',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isDeletionProtection: 'IsDeletionProtection',
      isHa: 'IsHa',
      majorVersion: 'MajorVersion',
      masterDiskSize: 'MasterDiskSize',
      masterDiskType: 'MasterDiskType',
      masterInstanceType: 'MasterInstanceType',
      masterNodeCount: 'MasterNodeCount',
      moduleId: 'ModuleId',
      moduleStackVersion: 'ModuleStackVersion',
      networkType: 'NetworkType',
      parentId: 'ParentId',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      backupStatus: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      coldStorageStatus: 'string',
      coreDiskCount: 'string',
      coreDiskSize: 'number',
      coreDiskType: 'string',
      coreInstanceType: 'string',
      coreNodeCount: 'number',
      createdTime: 'string',
      createdTimeUTC: 'string',
      duration: 'number',
      engine: 'string',
      expireTime: 'string',
      expireTimeUTC: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isDeletionProtection: 'boolean',
      isHa: 'boolean',
      majorVersion: 'string',
      masterDiskSize: 'number',
      masterDiskType: 'string',
      masterInstanceType: 'string',
      masterNodeCount: 'number',
      moduleId: 'number',
      moduleStackVersion: 'string',
      networkType: 'string',
      parentId: 'string',
      payType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: DescribeInstancesResponseBodyInstancesInstanceTags,
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstances extends $tea.Model {
  instance?: DescribeInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistResponseBodyGroupsGroupIpList extends $tea.Model {
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistResponseBodyGroupsGroup extends $tea.Model {
  /**
   * @example
   * default
   */
  groupName?: string;
  ipList?: DescribeIpWhitelistResponseBodyGroupsGroupIpList;
  /**
   * @example
   * 4
   */
  ipVersion?: number;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      ipList: 'IpList',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ipList: DescribeIpWhitelistResponseBodyGroupsGroupIpList,
      ipVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistResponseBodyGroups extends $tea.Model {
  group?: DescribeIpWhitelistResponseBodyGroupsGroup[];
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: { 'type': 'array', 'itemType': DescribeIpWhitelistResponseBodyGroupsGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombineZones extends $tea.Model {
  zone?: string[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombine extends $tea.Model {
  /**
   * @example
   * cn-shenzhen-****-aliyun
   */
  id?: string;
  zones?: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombineZones;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      zones: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombineZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombines extends $tea.Model {
  availableCombine?: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombine[];
  static names(): { [key: string]: string } {
    return {
      availableCombine: 'AvailableCombine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCombine: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegion extends $tea.Model {
  availableCombines?: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombines;
  localName?: string;
  /**
   * @example
   * hbase.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      availableCombines: 'AvailableCombines',
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCombines: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombines,
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResourceInstanceTypeDetail extends $tea.Model {
  /**
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @example
   * 16
   */
  mem?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      mem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResource extends $tea.Model {
  /**
   * @example
   * hbase.sn2.large
   */
  instanceType?: string;
  instanceTypeDetail?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResourceInstanceTypeDetail;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      instanceTypeDetail: 'InstanceTypeDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      instanceTypeDetail: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResourceInstanceTypeDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResources extends $tea.Model {
  masterResource?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResource[];
  static names(): { [key: string]: string } {
    return {
      masterResource: 'MasterResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterResource: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceDBInstanceStorageRange extends $tea.Model {
  /**
   * @example
   * 64000
   */
  maxSize?: number;
  /**
   * @example
   * 400
   */
  minSize?: number;
  /**
   * @example
   * 40
   */
  stepSize?: number;
  static names(): { [key: string]: string } {
    return {
      maxSize: 'MaxSize',
      minSize: 'MinSize',
      stepSize: 'StepSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSize: 'number',
      minSize: 'number',
      stepSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceInstanceTypeDetail extends $tea.Model {
  /**
   * @example
   * 32
   */
  cpu?: number;
  /**
   * @example
   * 8
   */
  mem?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      mem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResource extends $tea.Model {
  DBInstanceStorageRange?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceDBInstanceStorageRange;
  /**
   * @example
   * hbase.sn2.2xlarge
   */
  instanceType?: string;
  instanceTypeDetail?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceInstanceTypeDetail;
  /**
   * @example
   * 30
   */
  maxCoreCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceStorageRange: 'DBInstanceStorageRange',
      instanceType: 'InstanceType',
      instanceTypeDetail: 'InstanceTypeDetail',
      maxCoreCount: 'MaxCoreCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceStorageRange: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceDBInstanceStorageRange,
      instanceType: 'string',
      instanceTypeDetail: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceInstanceTypeDetail,
      maxCoreCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResources extends $tea.Model {
  coreResource?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResource[];
  static names(): { [key: string]: string } {
    return {
      coreResource: 'CoreResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreResource: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageType extends $tea.Model {
  coreResources?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResources;
  /**
   * @example
   * cloud_efficiency
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      coreResources: 'CoreResources',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreResources: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResources,
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypes extends $tea.Model {
  supportedStorageType?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageType[];
  static names(): { [key: string]: string } {
    return {
      supportedStorageType: 'SupportedStorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedStorageType: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategories extends $tea.Model {
  /**
   * @example
   * cluster
   */
  category?: string;
  supportedStorageTypes?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypes;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      supportedStorageTypes: 'SupportedStorageTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      supportedStorageTypes: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategories extends $tea.Model {
  supportedCategories?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategories[];
  static names(): { [key: string]: string } {
    return {
      supportedCategories: 'SupportedCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedCategories: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion extends $tea.Model {
  supportedCategories?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategories;
  /**
   * @example
   * 2.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      supportedCategories: 'SupportedCategories',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedCategories: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategories,
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions extends $tea.Model {
  supportedEngineVersion?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion[];
  static names(): { [key: string]: string } {
    return {
      supportedEngineVersion: 'SupportedEngineVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngineVersion: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine extends $tea.Model {
  /**
   * @example
   * hbaseue
   */
  engine?: string;
  supportedEngineVersions?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      supportedEngineVersions: 'SupportedEngineVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      supportedEngineVersions: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines extends $tea.Model {
  supportedEngine?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine[];
  static names(): { [key: string]: string } {
    return {
      supportedEngine: 'SupportedEngine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngine: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZone extends $tea.Model {
  masterResources?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResources;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  supportedEngines?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines;
  /**
   * @example
   * cn-hangzhou-bef-aliyun
   */
  zoneCombination?: string;
  static names(): { [key: string]: string } {
    return {
      masterResources: 'MasterResources',
      regionId: 'RegionId',
      supportedEngines: 'SupportedEngines',
      zoneCombination: 'ZoneCombination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterResources: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResources,
      regionId: 'string',
      supportedEngines: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines,
      zoneCombination: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZones extends $tea.Model {
  availableZone?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZone[];
  static names(): { [key: string]: string } {
    return {
      availableZone: 'AvailableZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZone: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModelsMultiZoneInstanceModel extends $tea.Model {
  hdfsMinorVersion?: string;
  /**
   * @example
   * ld-t4nn71xa0yn****-az-a
   */
  insName?: string;
  isHdfsLatestVersion?: string;
  /**
   * @example
   * true
   */
  isLatestVersion?: boolean;
  latestHdfsMinorVersion?: string;
  latestMinorVersion?: string;
  /**
   * @example
   * 2.1.24
   */
  minorVersion?: string;
  /**
   * @example
   * primary
   */
  role?: string;
  /**
   * @example
   * ACTIVATION
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      hdfsMinorVersion: 'HdfsMinorVersion',
      insName: 'InsName',
      isHdfsLatestVersion: 'IsHdfsLatestVersion',
      isLatestVersion: 'IsLatestVersion',
      latestHdfsMinorVersion: 'LatestHdfsMinorVersion',
      latestMinorVersion: 'LatestMinorVersion',
      minorVersion: 'MinorVersion',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hdfsMinorVersion: 'string',
      insName: 'string',
      isHdfsLatestVersion: 'string',
      isLatestVersion: 'boolean',
      latestHdfsMinorVersion: 'string',
      latestMinorVersion: 'string',
      minorVersion: 'string',
      role: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModels extends $tea.Model {
  multiZoneInstanceModel?: DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModelsMultiZoneInstanceModel[];
  static names(): { [key: string]: string } {
    return {
      multiZoneInstanceModel: 'MultiZoneInstanceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiZoneInstanceModel: { 'type': 'array', 'itemType': DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModelsMultiZoneInstanceModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneClusterResponseBodyTagsTag extends $tea.Model {
  /**
   * @example
   * test_key
   */
  key?: string;
  /**
   * @example
   * test_value
   */
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

export class DescribeMultiZoneClusterResponseBodyTags extends $tea.Model {
  tag?: DescribeMultiZoneClusterResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeMultiZoneClusterResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegionZonesZone extends $tea.Model {
  /**
   * @example
   * cn-hangzhou-b
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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
  localName?: string;
  /**
   * @example
   * hbase.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  zones?: DescribeRegionsResponseBodyRegionsRegionZones;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
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

export class DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail extends $tea.Model {
  /**
   * @example
   * 1.2 kB
   */
  dataSize?: string;
  /**
   * @example
   * 2020-11-05T06:45:51Z
   */
  endTime?: string;
  /**
   * @example
   * null
   */
  message?: string;
  /**
   * @example
   * 14/14
   */
  process?: string;
  /**
   * @example
   * 0.00 MB/s
   */
  speed?: string;
  /**
   * @example
   * 2020-11-05T06:45:45Z
   */
  startTime?: string;
  /**
   * @example
   * SUCCEEDED
   */
  state?: string;
  /**
   * @example
   * default:test1
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      endTime: 'EndTime',
      message: 'Message',
      process: 'Process',
      speed: 'Speed',
      startTime: 'StartTime',
      state: 'State',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'string',
      endTime: 'string',
      message: 'string',
      process: 'string',
      speed: 'string',
      startTime: 'string',
      state: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetails extends $tea.Model {
  restoreFullDetail?: DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail[];
  static names(): { [key: string]: string } {
    return {
      restoreFullDetail: 'RestoreFullDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreFullDetail: { 'type': 'array', 'itemType': DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreFullDetailsResponseBodyRestoreFull extends $tea.Model {
  /**
   * @example
   * 1.2 kB
   */
  dataSize?: string;
  /**
   * @example
   * 0
   */
  fail?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  restoreFullDetails?: DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetails;
  /**
   * @example
   * 0.00 MB/s
   */
  speed?: string;
  /**
   * @example
   * 1
   */
  succeed?: number;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      fail: 'Fail',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      restoreFullDetails: 'RestoreFullDetails',
      speed: 'Speed',
      succeed: 'Succeed',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'string',
      fail: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      restoreFullDetails: DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetails,
      speed: 'string',
      succeed: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreIncrDetailResponseBodyRestoreIncrDetail extends $tea.Model {
  /**
   * @example
   * 2020-11-05T06:45:44Z
   */
  endTime?: string;
  /**
   * @example
   * 0/0
   */
  process?: string;
  /**
   * @example
   * 0 ms
   */
  restoreDelay?: string;
  /**
   * @example
   * 2020-11-02T18:00:00Z
   */
  restoreStartTs?: string;
  /**
   * @example
   * \\"\\"
   */
  restoredTs?: string;
  /**
   * @example
   * 2020-11-05T06:45:44Z
   */
  startTime?: string;
  /**
   * @example
   * SUCCEEDED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      process: 'Process',
      restoreDelay: 'RestoreDelay',
      restoreStartTs: 'RestoreStartTs',
      restoredTs: 'RestoredTs',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      process: 'string',
      restoreDelay: 'string',
      restoreStartTs: 'string',
      restoredTs: 'string',
      startTime: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail extends $tea.Model {
  /**
   * @example
   * 2020-11-05T06:45:18Z
   */
  endTime?: string;
  /**
   * @example
   * null
   */
  message?: string;
  /**
   * @example
   * 2020-11-05T06:45:14Z
   */
  startTime?: string;
  /**
   * @example
   * SUCCEEDED
   */
  state?: string;
  /**
   * @example
   * default:test1
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      message: 'Message',
      startTime: 'StartTime',
      state: 'State',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      message: 'string',
      startTime: 'string',
      state: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetails extends $tea.Model {
  restoreSchemaDetail?: DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail[];
  static names(): { [key: string]: string } {
    return {
      restoreSchemaDetail: 'RestoreSchemaDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreSchemaDetail: { 'type': 'array', 'itemType': DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSchemaDetailsResponseBodyRestoreSchema extends $tea.Model {
  /**
   * @example
   * 0
   */
  fail?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  restoreSchemaDetails?: DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetails;
  /**
   * @example
   * 1
   */
  succeed?: number;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      fail: 'Fail',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      restoreSchemaDetails: 'RestoreSchemaDetails',
      succeed: 'Succeed',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fail: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      restoreSchemaDetails: DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetails,
      succeed: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSummaryResponseBodyRescordsRescord extends $tea.Model {
  /**
   * @example
   * 1/1
   */
  bulkLoadProcess?: string;
  /**
   * @example
   * 2020-11-05T06:45:14Z
   */
  createTime?: string;
  /**
   * @example
   * 2020-11-05T06:45:51Z
   */
  finishTime?: string;
  /**
   * @example
   * 1/1
   */
  hfileRestoreProcess?: string;
  /**
   * @example
   * 0/0
   */
  logProcess?: string;
  /**
   * @example
   * 20201105144514
   */
  recordId?: string;
  /**
   * @example
   * 1/1
   */
  schemaProcess?: string;
  /**
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bulkLoadProcess: 'BulkLoadProcess',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      hfileRestoreProcess: 'HfileRestoreProcess',
      logProcess: 'LogProcess',
      recordId: 'RecordId',
      schemaProcess: 'SchemaProcess',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bulkLoadProcess: 'string',
      createTime: 'string',
      finishTime: 'string',
      hfileRestoreProcess: 'string',
      logProcess: 'string',
      recordId: 'string',
      schemaProcess: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSummaryResponseBodyRescords extends $tea.Model {
  rescord?: DescribeRestoreSummaryResponseBodyRescordsRescord[];
  static names(): { [key: string]: string } {
    return {
      rescord: 'Rescord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rescord: { 'type': 'array', 'itemType': DescribeRestoreSummaryResponseBodyRescordsRescord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail extends $tea.Model {
  /**
   * @example
   * 1.2 kB
   */
  dataSize?: string;
  /**
   * @example
   * 2020-11-05T06:45:51Z
   */
  endTime?: string;
  /**
   * @example
   * “”
   */
  message?: string;
  /**
   * @example
   * 14/14
   */
  process?: string;
  /**
   * @example
   * 0.00 MB/s
   */
  speed?: string;
  /**
   * @example
   * 2020-11-05T06:45:45Z
   */
  startTime?: string;
  /**
   * @example
   * SUCCEEDED
   */
  state?: string;
  /**
   * @example
   * default:test1
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      endTime: 'EndTime',
      message: 'Message',
      process: 'Process',
      speed: 'Speed',
      startTime: 'StartTime',
      state: 'State',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'string',
      endTime: 'string',
      message: 'string',
      process: 'string',
      speed: 'string',
      startTime: 'string',
      state: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetails extends $tea.Model {
  restoreFullDetail?: DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail[];
  static names(): { [key: string]: string } {
    return {
      restoreFullDetail: 'RestoreFullDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreFullDetail: { 'type': 'array', 'itemType': DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreFull extends $tea.Model {
  /**
   * @example
   * 1.2 kB
   */
  dataSize?: string;
  /**
   * @example
   * 0
   */
  fail?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  restoreFullDetails?: DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetails;
  /**
   * @example
   * 0.00 MB/s
   */
  speed?: string;
  /**
   * @example
   * 1
   */
  succeed?: number;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      fail: 'Fail',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      restoreFullDetails: 'RestoreFullDetails',
      speed: 'Speed',
      succeed: 'Succeed',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'string',
      fail: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      restoreFullDetails: DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetails,
      speed: 'string',
      succeed: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreIncrDetail extends $tea.Model {
  /**
   * @example
   * 2020-11-05T06:45:44Z
   */
  endTime?: string;
  /**
   * @example
   * 0/0
   */
  process?: string;
  /**
   * @example
   * 0 ms
   */
  restoreDelay?: string;
  /**
   * @example
   * 2020-11-02T18:00:00Z
   */
  restoreStartTs?: string;
  /**
   * @example
   * “”
   */
  restoredTs?: string;
  /**
   * @example
   * 2020-11-05T06:45:44Z
   */
  startTime?: string;
  /**
   * @example
   * SUCCEEDED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      process: 'Process',
      restoreDelay: 'RestoreDelay',
      restoreStartTs: 'RestoreStartTs',
      restoredTs: 'RestoredTs',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      process: 'string',
      restoreDelay: 'string',
      restoreStartTs: 'string',
      restoredTs: 'string',
      startTime: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail extends $tea.Model {
  /**
   * @example
   * 2020-11-05T06:45:18Z
   */
  endTime?: string;
  /**
   * @example
   * null
   */
  message?: string;
  /**
   * @example
   * 2020-11-05T06:45:14Z
   */
  startTime?: string;
  /**
   * @example
   * SUCCEEDED
   */
  state?: string;
  /**
   * @example
   * default:test1
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      message: 'Message',
      startTime: 'StartTime',
      state: 'State',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      message: 'string',
      startTime: 'string',
      state: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetails extends $tea.Model {
  restoreSchemaDetail?: DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail[];
  static names(): { [key: string]: string } {
    return {
      restoreSchemaDetail: 'RestoreSchemaDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreSchemaDetail: { 'type': 'array', 'itemType': DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreSchema extends $tea.Model {
  /**
   * @example
   * 0
   */
  fail?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  restoreSchemaDetails?: DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetails;
  /**
   * @example
   * 1
   */
  succeed?: number;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      fail: 'Fail',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      restoreSchemaDetails: 'RestoreSchemaDetails',
      succeed: 'Succeed',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fail: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      restoreSchemaDetails: DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetails,
      succeed: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreSummary extends $tea.Model {
  /**
   * @example
   * 2020-11-05T06:45:51Z
   */
  endTime?: string;
  /**
   * @example
   * 20201105144514
   */
  recordId?: string;
  /**
   * @example
   * 2020-11-04T05:15:00Z
   */
  restoreToDate?: string;
  /**
   * @example
   * 2020-11-05T06:45:14Z
   */
  startTime?: string;
  /**
   * @example
   * SUCCEEDED
   */
  state?: string;
  /**
   * @example
   * ld-m5e2t34kr54wgxxxx
   */
  targetCluster?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      recordId: 'RecordId',
      restoreToDate: 'RestoreToDate',
      startTime: 'StartTime',
      state: 'State',
      targetCluster: 'TargetCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      recordId: 'string',
      restoreToDate: 'string',
      startTime: 'string',
      state: 'string',
      targetCluster: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyTables extends $tea.Model {
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

export class DescribeSecurityGroupsResponseBodySecurityGroupIds extends $tea.Model {
  securityGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHBaseInstancesResponseBodyInstancesInstance extends $tea.Model {
  /**
   * @example
   * hb-t4naqsay5gn****
   */
  instanceId?: string;
  /**
   * @example
   * name_test
   */
  instanceName?: string;
  /**
   * @example
   * false
   */
  isDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isDefault: 'IsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      isDefault: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHBaseInstancesResponseBodyInstances extends $tea.Model {
  instance?: ListHBaseInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': ListHBaseInstancesResponseBodyInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryListConfig extends $tea.Model {
  /**
   * @example
   * hbase#hbase-site.xml#hbase.client.keyvalue.maxsize
   */
  configureName?: string;
  /**
   * @example
   * 1608708923000
   */
  createTime?: string;
  /**
   * @example
   * false
   */
  effective?: string;
  /**
   * @example
   * 10485770
   */
  newValue?: string;
  /**
   * @example
   * 10485760
   */
  oldValue?: string;
  static names(): { [key: string]: string } {
    return {
      configureName: 'ConfigureName',
      createTime: 'CreateTime',
      effective: 'Effective',
      newValue: 'NewValue',
      oldValue: 'OldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureName: 'string',
      createTime: 'string',
      effective: 'string',
      newValue: 'string',
      oldValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryList extends $tea.Model {
  config?: ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryListConfig[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryListConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigurationsResponseBodyConfigureListConfig extends $tea.Model {
  /**
   * @example
   * hbase#hbase-site.xml#hbase.client.keyvalue.maxsize
   */
  configureName?: string;
  /**
   * @example
   * INT
   */
  configureUnit?: string;
  /**
   * @example
   * 10485760
   */
  defaultValue?: string;
  /**
   * @example
   * hbase client keyvalue maxsize
   */
  description?: string;
  /**
   * @example
   * true
   */
  needRestart?: string;
  /**
   * @example
   * 10485760
   */
  runningValue?: string;
  /**
   * @example
   * R[10485760,52428800]
   */
  valueRange?: string;
  static names(): { [key: string]: string } {
    return {
      configureName: 'ConfigureName',
      configureUnit: 'ConfigureUnit',
      defaultValue: 'DefaultValue',
      description: 'Description',
      needRestart: 'NeedRestart',
      runningValue: 'RunningValue',
      valueRange: 'ValueRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureName: 'string',
      configureUnit: 'string',
      defaultValue: 'string',
      description: 'string',
      needRestart: 'string',
      runningValue: 'string',
      valueRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigurationsResponseBodyConfigureList extends $tea.Model {
  config?: ListInstanceServiceConfigurationsResponseBodyConfigureListConfig[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': ListInstanceServiceConfigurationsResponseBodyConfigureListConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @example
   * key1
   */
  key?: string;
  /**
   * @example
   * value1
   */
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
  /**
   * @example
   * bds-bp15e022622f****
   */
  resourceId?: string;
  /**
   * @example
   * ALIYUN::MULTIMOD::CLUSTER
   */
  resourceType?: string;
  /**
   * @example
   * k1
   */
  tagKey?: string;
  /**
   * @example
   * v2
   */
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

export class ListTagsResponseBodyTagsTag extends $tea.Model {
  /**
   * @example
   * k1
   */
  tagKey?: string;
  /**
   * @example
   * v2
   */
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

export class ListTagsResponseBodyTags extends $tea.Model {
  tag?: ListTagsResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListTagsResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnListHaSlbConn extends $tea.Model {
  /**
   * @example
   * Standby
   */
  hbaseType?: string;
  /**
   * @example
   * ha-v21tmnxjwh2yuy1il-phoenix.bds.9b78df04-b.rds.aliyuncs.com:8765
   */
  slbConnAddr?: string;
  /**
   * @example
   * phoenix
   */
  slbType?: string;
  static names(): { [key: string]: string } {
    return {
      hbaseType: 'HbaseType',
      slbConnAddr: 'SlbConnAddr',
      slbType: 'SlbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hbaseType: 'string',
      slbConnAddr: 'string',
      slbType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnList extends $tea.Model {
  haSlbConn?: QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnListHaSlbConn[];
  static names(): { [key: string]: string } {
    return {
      haSlbConn: 'HaSlbConn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haSlbConn: { 'type': 'array', 'itemType': QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnListHaSlbConn },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBResponseBodyClusterListCluster extends $tea.Model {
  /**
   * @example
   * hb-t4nn7dy1u1etbzmzm
   */
  activeName?: string;
  /**
   * @remarks
   * bdsId
   * 
   * @example
   * bds-t4n3496whj23ia4k
   */
  bdsName?: string;
  /**
   * @example
   * ha-v21tmnxjwh2yuy1il
   */
  haName?: string;
  haSlbConnList?: QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnList;
  /**
   * @example
   * hb-t4n0ye37832tx22vz
   */
  standbyName?: string;
  static names(): { [key: string]: string } {
    return {
      activeName: 'ActiveName',
      bdsName: 'BdsName',
      haName: 'HaName',
      haSlbConnList: 'HaSlbConnList',
      standbyName: 'StandbyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeName: 'string',
      bdsName: 'string',
      haName: 'string',
      haSlbConnList: QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnList,
      standbyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBResponseBodyClusterList extends $tea.Model {
  cluster?: QueryHBaseHaDBResponseBodyClusterListCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': QueryHBaseHaDBResponseBodyClusterListCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryXpackRelateDBResponseBodyClusterListCluster extends $tea.Model {
  /**
   * @example
   * hb-bp16o0pd52e3y582s
   */
  clusterId?: string;
  /**
   * @example
   * hbase_test
   */
  clusterName?: string;
  /**
   * @example
   * hbase
   */
  DBType?: string;
  /**
   * @example
   * 2.0
   */
  DBVersion?: string;
  /**
   * @example
   * false
   */
  isRelated?: boolean;
  /**
   * @example
   * ..
   */
  lockMode?: string;
  /**
   * @example
   * ACTIVATION
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      isRelated: 'IsRelated',
      lockMode: 'LockMode',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      DBType: 'string',
      DBVersion: 'string',
      isRelated: 'boolean',
      lockMode: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryXpackRelateDBResponseBodyClusterList extends $tea.Model {
  cluster?: QueryXpackRelateDBResponseBodyClusterListCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': QueryXpackRelateDBResponseBodyClusterListCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @example
   * key1
   */
  key?: string;
  /**
   * @example
   * value1
   */
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
      'ap-northeast-2-pop': "hbase.aliyuncs.com",
      'ap-south-1': "hbase.aliyuncs.com",
      'ap-southeast-2': "hbase.aliyuncs.com",
      'cn-beijing-finance-1': "hbase.aliyuncs.com",
      'cn-beijing-finance-pop': "hbase.aliyuncs.com",
      'cn-beijing-gov-1': "hbase.aliyuncs.com",
      'cn-beijing-nu16-b01': "hbase.aliyuncs.com",
      'cn-edge-1': "hbase.aliyuncs.com",
      'cn-fujian': "hbase.aliyuncs.com",
      'cn-haidian-cm12-c01': "hbase.aliyuncs.com",
      'cn-hangzhou-bj-b01': "hbase.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "hbase.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "hbase.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "hbase.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "hbase.aliyuncs.com",
      'cn-hangzhou-test-306': "hbase.aliyuncs.com",
      'cn-hongkong-finance-pop': "hbase.aliyuncs.com",
      'cn-qingdao-nebula': "hbase.aliyuncs.com",
      'cn-shanghai-et15-b01': "hbase.aliyuncs.com",
      'cn-shanghai-et2-b01': "hbase.aliyuncs.com",
      'cn-shanghai-inner': "hbase.aliyuncs.com",
      'cn-shanghai-internal-test-1': "hbase.aliyuncs.com",
      'cn-shenzhen-inner': "hbase.aliyuncs.com",
      'cn-shenzhen-st4-d01': "hbase.aliyuncs.com",
      'cn-shenzhen-su18-b01': "hbase.aliyuncs.com",
      'cn-wuhan': "hbase.aliyuncs.com",
      'cn-wulanchabu': "hbase.aliyuncs.com",
      'cn-yushanfang': "hbase.aliyuncs.com",
      'cn-zhangbei': "hbase.aliyuncs.com",
      'cn-zhangbei-na61-b01': "hbase.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "hbase.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "hbase.aliyuncs.com",
      'eu-west-1-oxs': "hbase.aliyuncs.com",
      'rus-west-1-pop': "hbase.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("hbase", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AddUserHdfsInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserHdfsInfoResponse
   */
  async addUserHdfsInfoWithOptions(request: AddUserHdfsInfoRequest, runtime: $Util.RuntimeOptions): Promise<AddUserHdfsInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.extInfo)) {
      query["ExtInfo"] = request.extInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddUserHdfsInfo",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddUserHdfsInfoResponse>(await this.callApi(params, req, runtime), new AddUserHdfsInfoResponse({}));
  }

  /**
   * @param request - AddUserHdfsInfoRequest
   * @returns AddUserHdfsInfoResponse
   */
  async addUserHdfsInfo(request: AddUserHdfsInfoRequest): Promise<AddUserHdfsInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserHdfsInfoWithOptions(request, runtime);
  }

  /**
   * @param request - AllocatePublicNetworkAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocatePublicNetworkAddressResponse
   */
  async allocatePublicNetworkAddressWithOptions(request: AllocatePublicNetworkAddressRequest, runtime: $Util.RuntimeOptions): Promise<AllocatePublicNetworkAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AllocatePublicNetworkAddress",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AllocatePublicNetworkAddressResponse>(await this.callApi(params, req, runtime), new AllocatePublicNetworkAddressResponse({}));
  }

  /**
   * @param request - AllocatePublicNetworkAddressRequest
   * @returns AllocatePublicNetworkAddressResponse
   */
  async allocatePublicNetworkAddress(request: AllocatePublicNetworkAddressRequest): Promise<AllocatePublicNetworkAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocatePublicNetworkAddressWithOptions(request, runtime);
  }

  /**
   * @param request - CancelActiveOperationTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelActiveOperationTasksResponse
   */
  async cancelActiveOperationTasksWithOptions(request: CancelActiveOperationTasksRequest, runtime: $Util.RuntimeOptions): Promise<CancelActiveOperationTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelActiveOperationTasks",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelActiveOperationTasksResponse>(await this.callApi(params, req, runtime), new CancelActiveOperationTasksResponse({}));
  }

  /**
   * @param request - CancelActiveOperationTasksRequest
   * @returns CancelActiveOperationTasksResponse
   */
  async cancelActiveOperationTasks(request: CancelActiveOperationTasksRequest): Promise<CancelActiveOperationTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * @param request - CheckComponentsVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckComponentsVersionResponse
   */
  async checkComponentsVersionWithOptions(request: CheckComponentsVersionRequest, runtime: $Util.RuntimeOptions): Promise<CheckComponentsVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.components)) {
      query["Components"] = request.components;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckComponentsVersion",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckComponentsVersionResponse>(await this.callApi(params, req, runtime), new CheckComponentsVersionResponse({}));
  }

  /**
   * @param request - CheckComponentsVersionRequest
   * @returns CheckComponentsVersionResponse
   */
  async checkComponentsVersion(request: CheckComponentsVersionRequest): Promise<CheckComponentsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkComponentsVersionWithOptions(request, runtime);
  }

  /**
   * @param request - CloseBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseBackupResponse
   */
  async closeBackupWithOptions(request: CloseBackupRequest, runtime: $Util.RuntimeOptions): Promise<CloseBackupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloseBackup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseBackupResponse>(await this.callApi(params, req, runtime), new CloseBackupResponse({}));
  }

  /**
   * @param request - CloseBackupRequest
   * @returns CloseBackupResponse
   */
  async closeBackup(request: CloseBackupRequest): Promise<CloseBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeBackupWithOptions(request, runtime);
  }

  /**
   * @param request - ConvertInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertInstanceResponse
   */
  async convertInstanceWithOptions(request: ConvertInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ConvertInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConvertInstance",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConvertInstanceResponse>(await this.callApi(params, req, runtime), new ConvertInstanceResponse({}));
  }

  /**
   * @param request - ConvertInstanceRequest
   * @returns ConvertInstanceResponse
   */
  async convertInstance(request: ConvertInstanceRequest): Promise<ConvertInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.convertInstanceWithOptions(request, runtime);
  }

  /**
   * 新建账户
   * 
   * @param request - CreateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountResponse
   */
  async createAccountWithOptions(request: CreateAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccount",
      version: "2019-01-01",
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
   * 新建账户
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * @param request - CreateBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupPlanResponse
   */
  async createBackupPlanWithOptions(request: CreateBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBackupPlan",
      version: "2019-01-01",
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

  /**
   * @param request - CreateBackupPlanRequest
   * @returns CreateBackupPlanResponse
   */
  async createBackupPlan(request: CreateBackupPlanRequest): Promise<CreateBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupPlanWithOptions(request, runtime);
  }

  /**
   * @param request - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(request: CreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.coldStorageSize)) {
      query["ColdStorageSize"] = request.coldStorageSize;
    }

    if (!Util.isUnset(request.coreInstanceType)) {
      query["CoreInstanceType"] = request.coreInstanceType;
    }

    if (!Util.isUnset(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!Util.isUnset(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!Util.isUnset(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!Util.isUnset(request.masterInstanceType)) {
      query["MasterInstanceType"] = request.masterInstanceType;
    }

    if (!Util.isUnset(request.nodeCount)) {
      query["NodeCount"] = request.nodeCount;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
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

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
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
      action: "CreateCluster",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
  }

  /**
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * @param request - CreateGlobalResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGlobalResourceResponse
   */
  async createGlobalResourceWithOptions(request: CreateGlobalResourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateGlobalResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGlobalResource",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGlobalResourceResponse>(await this.callApi(params, req, runtime), new CreateGlobalResourceResponse({}));
  }

  /**
   * @param request - CreateGlobalResourceRequest
   * @returns CreateGlobalResourceResponse
   */
  async createGlobalResource(request: CreateGlobalResourceRequest): Promise<CreateGlobalResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGlobalResourceWithOptions(request, runtime);
  }

  /**
   * @param request - CreateHBaseSlbServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHBaseSlbServerResponse
   */
  async createHBaseSlbServerWithOptions(request: CreateHBaseSlbServerRequest, runtime: $Util.RuntimeOptions): Promise<CreateHBaseSlbServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.slbServer)) {
      query["SlbServer"] = request.slbServer;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateHBaseSlbServer",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHBaseSlbServerResponse>(await this.callApi(params, req, runtime), new CreateHBaseSlbServerResponse({}));
  }

  /**
   * @param request - CreateHBaseSlbServerRequest
   * @returns CreateHBaseSlbServerResponse
   */
  async createHBaseSlbServer(request: CreateHBaseSlbServerRequest): Promise<CreateHBaseSlbServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHBaseSlbServerWithOptions(request, runtime);
  }

  /**
   * @param request - CreateHbaseHaSlbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHbaseHaSlbResponse
   */
  async createHbaseHaSlbWithOptions(request: CreateHbaseHaSlbRequest, runtime: $Util.RuntimeOptions): Promise<CreateHbaseHaSlbResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bdsId)) {
      query["BdsId"] = request.bdsId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.haId)) {
      query["HaId"] = request.haId;
    }

    if (!Util.isUnset(request.haTypes)) {
      query["HaTypes"] = request.haTypes;
    }

    if (!Util.isUnset(request.hbaseType)) {
      query["HbaseType"] = request.hbaseType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateHbaseHaSlb",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHbaseHaSlbResponse>(await this.callApi(params, req, runtime), new CreateHbaseHaSlbResponse({}));
  }

  /**
   * @param request - CreateHbaseHaSlbRequest
   * @returns CreateHbaseHaSlbResponse
   */
  async createHbaseHaSlb(request: CreateHbaseHaSlbRequest): Promise<CreateHbaseHaSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHbaseHaSlbWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMultiZoneClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMultiZoneClusterResponse
   */
  async createMultiZoneClusterWithOptions(request: CreateMultiZoneClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateMultiZoneClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.arbiterVSwitchId)) {
      query["ArbiterVSwitchId"] = request.arbiterVSwitchId;
    }

    if (!Util.isUnset(request.arbiterZoneId)) {
      query["ArbiterZoneId"] = request.arbiterZoneId;
    }

    if (!Util.isUnset(request.archVersion)) {
      query["ArchVersion"] = request.archVersion;
    }

    if (!Util.isUnset(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.coreDiskSize)) {
      query["CoreDiskSize"] = request.coreDiskSize;
    }

    if (!Util.isUnset(request.coreDiskType)) {
      query["CoreDiskType"] = request.coreDiskType;
    }

    if (!Util.isUnset(request.coreInstanceType)) {
      query["CoreInstanceType"] = request.coreInstanceType;
    }

    if (!Util.isUnset(request.coreNodeCount)) {
      query["CoreNodeCount"] = request.coreNodeCount;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!Util.isUnset(request.logDiskSize)) {
      query["LogDiskSize"] = request.logDiskSize;
    }

    if (!Util.isUnset(request.logDiskType)) {
      query["LogDiskType"] = request.logDiskType;
    }

    if (!Util.isUnset(request.logInstanceType)) {
      query["LogInstanceType"] = request.logInstanceType;
    }

    if (!Util.isUnset(request.logNodeCount)) {
      query["LogNodeCount"] = request.logNodeCount;
    }

    if (!Util.isUnset(request.masterInstanceType)) {
      query["MasterInstanceType"] = request.masterInstanceType;
    }

    if (!Util.isUnset(request.multiZoneCombination)) {
      query["MultiZoneCombination"] = request.multiZoneCombination;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.primaryVSwitchId)) {
      query["PrimaryVSwitchId"] = request.primaryVSwitchId;
    }

    if (!Util.isUnset(request.primaryZoneId)) {
      query["PrimaryZoneId"] = request.primaryZoneId;
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

    if (!Util.isUnset(request.standbyVSwitchId)) {
      query["StandbyVSwitchId"] = request.standbyVSwitchId;
    }

    if (!Util.isUnset(request.standbyZoneId)) {
      query["StandbyZoneId"] = request.standbyZoneId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMultiZoneCluster",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMultiZoneClusterResponse>(await this.callApi(params, req, runtime), new CreateMultiZoneClusterResponse({}));
  }

  /**
   * @param request - CreateMultiZoneClusterRequest
   * @returns CreateMultiZoneClusterResponse
   */
  async createMultiZoneCluster(request: CreateMultiZoneClusterRequest): Promise<CreateMultiZoneClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMultiZoneClusterWithOptions(request, runtime);
  }

  /**
   * @param request - CreateRestorePlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRestorePlanResponse
   */
  async createRestorePlanWithOptions(request: CreateRestorePlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateRestorePlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.restoreAllTable)) {
      query["RestoreAllTable"] = request.restoreAllTable;
    }

    if (!Util.isUnset(request.restoreByCopy)) {
      query["RestoreByCopy"] = request.restoreByCopy;
    }

    if (!Util.isUnset(request.restoreToDate)) {
      query["RestoreToDate"] = request.restoreToDate;
    }

    if (!Util.isUnset(request.tables)) {
      query["Tables"] = request.tables;
    }

    if (!Util.isUnset(request.targetClusterId)) {
      query["TargetClusterId"] = request.targetClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRestorePlan",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRestorePlanResponse>(await this.callApi(params, req, runtime), new CreateRestorePlanResponse({}));
  }

  /**
   * @param request - CreateRestorePlanRequest
   * @returns CreateRestorePlanResponse
   */
  async createRestorePlan(request: CreateRestorePlanRequest): Promise<CreateRestorePlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRestorePlanWithOptions(request, runtime);
  }

  /**
   * @param request - CreateServerlessClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServerlessClusterResponse
   */
  async createServerlessClusterWithOptions(request: CreateServerlessClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateServerlessClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serverlessCapability)) {
      query["ServerlessCapability"] = request.serverlessCapability;
    }

    if (!Util.isUnset(request.serverlessSpec)) {
      query["ServerlessSpec"] = request.serverlessSpec;
    }

    if (!Util.isUnset(request.serverlessStorage)) {
      query["ServerlessStorage"] = request.serverlessStorage;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
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
      action: "CreateServerlessCluster",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServerlessClusterResponse>(await this.callApi(params, req, runtime), new CreateServerlessClusterResponse({}));
  }

  /**
   * @param request - CreateServerlessClusterRequest
   * @returns CreateServerlessClusterResponse
   */
  async createServerlessCluster(request: CreateServerlessClusterRequest): Promise<CreateServerlessClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServerlessClusterWithOptions(request, runtime);
  }

  /**
   * 删除账户
   * 
   * @param request - DeleteAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccountResponse
   */
  async deleteAccountWithOptions(request: DeleteAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccount",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccountResponse>(await this.callApi(params, req, runtime), new DeleteAccountResponse({}));
  }

  /**
   * 删除账户
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteGlobalResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGlobalResourceResponse
   */
  async deleteGlobalResourceWithOptions(request: DeleteGlobalResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGlobalResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGlobalResource",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGlobalResourceResponse>(await this.callApi(params, req, runtime), new DeleteGlobalResourceResponse({}));
  }

  /**
   * @param request - DeleteGlobalResourceRequest
   * @returns DeleteGlobalResourceResponse
   */
  async deleteGlobalResource(request: DeleteGlobalResourceRequest): Promise<DeleteGlobalResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGlobalResourceWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteHBaseHaDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHBaseHaDBResponse
   */
  async deleteHBaseHaDBWithOptions(request: DeleteHBaseHaDBRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHBaseHaDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bdsId)) {
      query["BdsId"] = request.bdsId;
    }

    if (!Util.isUnset(request.haId)) {
      query["HaId"] = request.haId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHBaseHaDB",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHBaseHaDBResponse>(await this.callApi(params, req, runtime), new DeleteHBaseHaDBResponse({}));
  }

  /**
   * @param request - DeleteHBaseHaDBRequest
   * @returns DeleteHBaseHaDBResponse
   */
  async deleteHBaseHaDB(request: DeleteHBaseHaDBRequest): Promise<DeleteHBaseHaDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHBaseHaDBWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteHBaseSlbServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHBaseSlbServerResponse
   */
  async deleteHBaseSlbServerWithOptions(request: DeleteHBaseSlbServerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHBaseSlbServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.slbServer)) {
      query["SlbServer"] = request.slbServer;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHBaseSlbServer",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHBaseSlbServerResponse>(await this.callApi(params, req, runtime), new DeleteHBaseSlbServerResponse({}));
  }

  /**
   * @param request - DeleteHBaseSlbServerRequest
   * @returns DeleteHBaseSlbServerResponse
   */
  async deleteHBaseSlbServer(request: DeleteHBaseSlbServerRequest): Promise<DeleteHBaseSlbServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHBaseSlbServerWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteHbaseHaSlbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHbaseHaSlbResponse
   */
  async deleteHbaseHaSlbWithOptions(request: DeleteHbaseHaSlbRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHbaseHaSlbResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bdsId)) {
      query["BdsId"] = request.bdsId;
    }

    if (!Util.isUnset(request.haId)) {
      query["HaId"] = request.haId;
    }

    if (!Util.isUnset(request.haTypes)) {
      query["HaTypes"] = request.haTypes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHbaseHaSlb",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHbaseHaSlbResponse>(await this.callApi(params, req, runtime), new DeleteHbaseHaSlbResponse({}));
  }

  /**
   * @param request - DeleteHbaseHaSlbRequest
   * @returns DeleteHbaseHaSlbResponse
   */
  async deleteHbaseHaSlb(request: DeleteHbaseHaSlbRequest): Promise<DeleteHbaseHaSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHbaseHaSlbWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.immediateDeleteFlag)) {
      query["ImmediateDeleteFlag"] = request.immediateDeleteFlag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstance",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
  }

  /**
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteMultiZoneClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMultiZoneClusterResponse
   */
  async deleteMultiZoneClusterWithOptions(request: DeleteMultiZoneClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMultiZoneClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.immediateDeleteFlag)) {
      query["ImmediateDeleteFlag"] = request.immediateDeleteFlag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMultiZoneCluster",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMultiZoneClusterResponse>(await this.callApi(params, req, runtime), new DeleteMultiZoneClusterResponse({}));
  }

  /**
   * @param request - DeleteMultiZoneClusterRequest
   * @returns DeleteMultiZoneClusterResponse
   */
  async deleteMultiZoneCluster(request: DeleteMultiZoneClusterRequest): Promise<DeleteMultiZoneClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMultiZoneClusterWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteServerlessClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServerlessClusterResponse
   */
  async deleteServerlessClusterWithOptions(request: DeleteServerlessClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServerlessClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServerlessCluster",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServerlessClusterResponse>(await this.callApi(params, req, runtime), new DeleteServerlessClusterResponse({}));
  }

  /**
   * @param request - DeleteServerlessClusterRequest
   * @returns DeleteServerlessClusterResponse
   */
  async deleteServerlessCluster(request: DeleteServerlessClusterRequest): Promise<DeleteServerlessClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServerlessClusterWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteUserHdfsInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserHdfsInfoResponse
   */
  async deleteUserHdfsInfoWithOptions(request: DeleteUserHdfsInfoRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserHdfsInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.nameService)) {
      query["NameService"] = request.nameService;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserHdfsInfo",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserHdfsInfoResponse>(await this.callApi(params, req, runtime), new DeleteUserHdfsInfoResponse({}));
  }

  /**
   * @param request - DeleteUserHdfsInfoRequest
   * @returns DeleteUserHdfsInfoResponse
   */
  async deleteUserHdfsInfo(request: DeleteUserHdfsInfoRequest): Promise<DeleteUserHdfsInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserHdfsInfoWithOptions(request, runtime);
  }

  /**
   * 查询账户列表
   * 
   * @param request - DescribeAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountsResponse
   */
  async describeAccountsWithOptions(request: DescribeAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccounts",
      version: "2019-01-01",
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
   * 查询账户列表
   * 
   * @param request - DescribeAccountsRequest
   * @returns DescribeAccountsResponse
   */
  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeActiveOperationTaskTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveOperationTaskTypeResponse
   */
  async describeActiveOperationTaskTypeWithOptions(request: DescribeActiveOperationTaskTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeActiveOperationTaskTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isHistory)) {
      query["IsHistory"] = request.isHistory;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeActiveOperationTaskType",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeActiveOperationTaskTypeResponse>(await this.callApi(params, req, runtime), new DescribeActiveOperationTaskTypeResponse({}));
  }

  /**
   * @param request - DescribeActiveOperationTaskTypeRequest
   * @returns DescribeActiveOperationTaskTypeResponse
   */
  async describeActiveOperationTaskType(request: DescribeActiveOperationTaskTypeRequest): Promise<DescribeActiveOperationTaskTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActiveOperationTaskTypeWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeActiveOperationTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveOperationTasksResponse
   */
  async describeActiveOperationTasksWithOptions(request: DescribeActiveOperationTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeActiveOperationTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowCancel)) {
      query["AllowCancel"] = request.allowCancel;
    }

    if (!Util.isUnset(request.allowChange)) {
      query["AllowChange"] = request.allowChange;
    }

    if (!Util.isUnset(request.changeLevel)) {
      query["ChangeLevel"] = request.changeLevel;
    }

    if (!Util.isUnset(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!Util.isUnset(request.insName)) {
      query["InsName"] = request.insName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
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

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeActiveOperationTasks",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeActiveOperationTasksResponse>(await this.callApi(params, req, runtime), new DescribeActiveOperationTasksResponse({}));
  }

  /**
   * @param request - DescribeActiveOperationTasksRequest
   * @returns DescribeActiveOperationTasksResponse
   */
  async describeActiveOperationTasks(request: DescribeActiveOperationTasksRequest): Promise<DescribeActiveOperationTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeAvailableResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResourceWithOptions(request: DescribeAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.coreInstanceType)) {
      query["CoreInstanceType"] = request.coreInstanceType;
    }

    if (!Util.isUnset(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableResource",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableResourceResponse>(await this.callApi(params, req, runtime), new DescribeAvailableResourceResponse({}));
  }

  /**
   * @param request - DescribeAvailableResourceRequest
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResource(request: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupPlanConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPlanConfigResponse
   */
  async describeBackupPlanConfigWithOptions(request: DescribeBackupPlanConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPlanConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupPlanConfig",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupPlanConfigResponse>(await this.callApi(params, req, runtime), new DescribeBackupPlanConfigResponse({}));
  }

  /**
   * @param request - DescribeBackupPlanConfigRequest
   * @returns DescribeBackupPlanConfigResponse
   */
  async describeBackupPlanConfig(request: DescribeBackupPlanConfigRequest): Promise<DescribeBackupPlanConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPlanConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupPolicy",
      version: "2019-01-01",
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
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupStatusResponse
   */
  async describeBackupStatusWithOptions(request: DescribeBackupStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupStatus",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupStatusResponse>(await this.callApi(params, req, runtime), new DescribeBackupStatusResponse({}));
  }

  /**
   * @param request - DescribeBackupStatusRequest
   * @returns DescribeBackupStatusResponse
   */
  async describeBackupStatus(request: DescribeBackupStatusRequest): Promise<DescribeBackupStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupStatusWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupSummaryResponse
   */
  async describeBackupSummaryWithOptions(request: DescribeBackupSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "DescribeBackupSummary",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupSummaryResponse>(await this.callApi(params, req, runtime), new DescribeBackupSummaryResponse({}));
  }

  /**
   * @param request - DescribeBackupSummaryRequest
   * @returns DescribeBackupSummaryResponse
   */
  async describeBackupSummary(request: DescribeBackupSummaryRequest): Promise<DescribeBackupSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupSummaryWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupTablesResponse
   */
  async describeBackupTablesWithOptions(request: DescribeBackupTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupRecordId)) {
      query["BackupRecordId"] = request.backupRecordId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "DescribeBackupTables",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupTablesResponse>(await this.callApi(params, req, runtime), new DescribeBackupTablesResponse({}));
  }

  /**
   * @param request - DescribeBackupTablesRequest
   * @returns DescribeBackupTablesResponse
   */
  async describeBackupTables(request: DescribeBackupTablesRequest): Promise<DescribeBackupTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupTablesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupsResponse
   */
  async describeBackupsWithOptions(request: DescribeBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.endTimeUTC)) {
      query["EndTimeUTC"] = request.endTimeUTC;
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

    if (!Util.isUnset(request.startTimeUTC)) {
      query["StartTimeUTC"] = request.startTimeUTC;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackups",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupsResponse>(await this.callApi(params, req, runtime), new DescribeBackupsResponse({}));
  }

  /**
   * @param request - DescribeBackupsRequest
   * @returns DescribeBackupsResponse
   */
  async describeBackups(request: DescribeBackupsRequest): Promise<DescribeBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeClusterConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterConnectionResponse
   */
  async describeClusterConnectionWithOptions(request: DescribeClusterConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterConnection",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterConnectionResponse>(await this.callApi(params, req, runtime), new DescribeClusterConnectionResponse({}));
  }

  /**
   * @param request - DescribeClusterConnectionRequest
   * @returns DescribeClusterConnectionResponse
   */
  async describeClusterConnection(request: DescribeClusterConnectionRequest): Promise<DescribeClusterConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterConnectionWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeColdStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeColdStorageResponse
   */
  async describeColdStorageWithOptions(request: DescribeColdStorageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeColdStorageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeColdStorage",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeColdStorageResponse>(await this.callApi(params, req, runtime), new DescribeColdStorageResponse({}));
  }

  /**
   * @param request - DescribeColdStorageRequest
   * @returns DescribeColdStorageResponse
   */
  async describeColdStorage(request: DescribeColdStorageRequest): Promise<DescribeColdStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeColdStorageWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDBInstanceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceUsageResponse
   */
  async describeDBInstanceUsageWithOptions(request: DescribeDBInstanceUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceUsage",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceUsageResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceUsageResponse({}));
  }

  /**
   * @param request - DescribeDBInstanceUsageRequest
   * @returns DescribeDBInstanceUsageResponse
   */
  async describeDBInstanceUsage(request: DescribeDBInstanceUsageRequest): Promise<DescribeDBInstanceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceUsageWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDeletedInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeletedInstancesResponse
   */
  async describeDeletedInstancesWithOptions(request: DescribeDeletedInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeletedInstancesResponse> {
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
      action: "DescribeDeletedInstances",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDeletedInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDeletedInstancesResponse({}));
  }

  /**
   * @param request - DescribeDeletedInstancesRequest
   * @returns DescribeDeletedInstancesResponse
   */
  async describeDeletedInstances(request: DescribeDeletedInstancesRequest): Promise<DescribeDeletedInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeletedInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDiskWarningLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskWarningLineResponse
   */
  async describeDiskWarningLineWithOptions(request: DescribeDiskWarningLineRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiskWarningLineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiskWarningLine",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiskWarningLineResponse>(await this.callApi(params, req, runtime), new DescribeDiskWarningLineResponse({}));
  }

  /**
   * @param request - DescribeDiskWarningLineRequest
   * @returns DescribeDiskWarningLineResponse
   */
  async describeDiskWarningLine(request: DescribeDiskWarningLineRequest): Promise<DescribeDiskWarningLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiskWarningLineWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEndpointsResponse
   */
  async describeEndpointsWithOptions(request: DescribeEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEndpointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEndpoints",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEndpointsResponse>(await this.callApi(params, req, runtime), new DescribeEndpointsResponse({}));
  }

  /**
   * @param request - DescribeEndpointsRequest
   * @returns DescribeEndpointsResponse
   */
  async describeEndpoints(request: DescribeEndpointsRequest): Promise<DescribeEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEndpointsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceResponse
   */
  async describeInstanceWithOptions(request: DescribeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstance",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceResponse>(await this.callApi(params, req, runtime), new DescribeInstanceResponse({}));
  }

  /**
   * @param request - DescribeInstanceRequest
   * @returns DescribeInstanceResponse
   */
  async describeInstance(request: DescribeInstanceRequest): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeInstanceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceTypeResponse
   */
  async describeInstanceTypeWithOptions(request: DescribeInstanceTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceType",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceTypeResponse>(await this.callApi(params, req, runtime), new DescribeInstanceTypeResponse({}));
  }

  /**
   * @param request - DescribeInstanceTypeRequest
   * @returns DescribeInstanceTypeResponse
   */
  async describeInstanceType(request: DescribeInstanceTypeRequest): Promise<DescribeInstanceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTypeWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
   */
  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.dbType)) {
      query["DbType"] = request.dbType;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstances",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstancesResponse>(await this.callApi(params, req, runtime), new DescribeInstancesResponse({}));
  }

  /**
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeIpWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIpWhitelistResponse
   */
  async describeIpWhitelistWithOptions(request: DescribeIpWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpWhitelistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIpWhitelist",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIpWhitelistResponse>(await this.callApi(params, req, runtime), new DescribeIpWhitelistResponse({}));
  }

  /**
   * @param request - DescribeIpWhitelistRequest
   * @returns DescribeIpWhitelistResponse
   */
  async describeIpWhitelist(request: DescribeIpWhitelistRequest): Promise<DescribeIpWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpWhitelistWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeMultiZoneAvailableRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMultiZoneAvailableRegionsResponse
   */
  async describeMultiZoneAvailableRegionsWithOptions(request: DescribeMultiZoneAvailableRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMultiZoneAvailableRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMultiZoneAvailableRegions",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMultiZoneAvailableRegionsResponse>(await this.callApi(params, req, runtime), new DescribeMultiZoneAvailableRegionsResponse({}));
  }

  /**
   * @param request - DescribeMultiZoneAvailableRegionsRequest
   * @returns DescribeMultiZoneAvailableRegionsResponse
   */
  async describeMultiZoneAvailableRegions(request: DescribeMultiZoneAvailableRegionsRequest): Promise<DescribeMultiZoneAvailableRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMultiZoneAvailableRegionsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeMultiZoneAvailableResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMultiZoneAvailableResourceResponse
   */
  async describeMultiZoneAvailableResourceWithOptions(request: DescribeMultiZoneAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMultiZoneAvailableResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneCombination)) {
      query["ZoneCombination"] = request.zoneCombination;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMultiZoneAvailableResource",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMultiZoneAvailableResourceResponse>(await this.callApi(params, req, runtime), new DescribeMultiZoneAvailableResourceResponse({}));
  }

  /**
   * @param request - DescribeMultiZoneAvailableResourceRequest
   * @returns DescribeMultiZoneAvailableResourceResponse
   */
  async describeMultiZoneAvailableResource(request: DescribeMultiZoneAvailableResourceRequest): Promise<DescribeMultiZoneAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMultiZoneAvailableResourceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeMultiZoneClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMultiZoneClusterResponse
   */
  async describeMultiZoneClusterWithOptions(request: DescribeMultiZoneClusterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMultiZoneClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMultiZoneCluster",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMultiZoneClusterResponse>(await this.callApi(params, req, runtime), new DescribeMultiZoneClusterResponse({}));
  }

  /**
   * @param request - DescribeMultiZoneClusterRequest
   * @returns DescribeMultiZoneClusterResponse
   */
  async describeMultiZoneCluster(request: DescribeMultiZoneClusterRequest): Promise<DescribeMultiZoneClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMultiZoneClusterWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRecoverableTimeRangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecoverableTimeRangeResponse
   */
  async describeRecoverableTimeRangeWithOptions(request: DescribeRecoverableTimeRangeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecoverableTimeRangeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRecoverableTimeRange",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRecoverableTimeRangeResponse>(await this.callApi(params, req, runtime), new DescribeRecoverableTimeRangeResponse({}));
  }

  /**
   * @param request - DescribeRecoverableTimeRangeRequest
   * @returns DescribeRecoverableTimeRangeResponse
   */
  async describeRecoverableTimeRange(request: DescribeRecoverableTimeRangeRequest): Promise<DescribeRecoverableTimeRangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecoverableTimeRangeWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2019-01-01",
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
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRestoreFullDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestoreFullDetailsResponse
   */
  async describeRestoreFullDetailsWithOptions(request: DescribeRestoreFullDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreFullDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.restoreRecordId)) {
      query["RestoreRecordId"] = request.restoreRecordId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRestoreFullDetails",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRestoreFullDetailsResponse>(await this.callApi(params, req, runtime), new DescribeRestoreFullDetailsResponse({}));
  }

  /**
   * @param request - DescribeRestoreFullDetailsRequest
   * @returns DescribeRestoreFullDetailsResponse
   */
  async describeRestoreFullDetails(request: DescribeRestoreFullDetailsRequest): Promise<DescribeRestoreFullDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreFullDetailsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRestoreIncrDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestoreIncrDetailResponse
   */
  async describeRestoreIncrDetailWithOptions(request: DescribeRestoreIncrDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreIncrDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.restoreRecordId)) {
      query["RestoreRecordId"] = request.restoreRecordId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRestoreIncrDetail",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRestoreIncrDetailResponse>(await this.callApi(params, req, runtime), new DescribeRestoreIncrDetailResponse({}));
  }

  /**
   * @param request - DescribeRestoreIncrDetailRequest
   * @returns DescribeRestoreIncrDetailResponse
   */
  async describeRestoreIncrDetail(request: DescribeRestoreIncrDetailRequest): Promise<DescribeRestoreIncrDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreIncrDetailWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRestoreSchemaDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestoreSchemaDetailsResponse
   */
  async describeRestoreSchemaDetailsWithOptions(request: DescribeRestoreSchemaDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreSchemaDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.restoreRecordId)) {
      query["RestoreRecordId"] = request.restoreRecordId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRestoreSchemaDetails",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRestoreSchemaDetailsResponse>(await this.callApi(params, req, runtime), new DescribeRestoreSchemaDetailsResponse({}));
  }

  /**
   * @param request - DescribeRestoreSchemaDetailsRequest
   * @returns DescribeRestoreSchemaDetailsResponse
   */
  async describeRestoreSchemaDetails(request: DescribeRestoreSchemaDetailsRequest): Promise<DescribeRestoreSchemaDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreSchemaDetailsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRestoreSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestoreSummaryResponse
   */
  async describeRestoreSummaryWithOptions(request: DescribeRestoreSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "DescribeRestoreSummary",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRestoreSummaryResponse>(await this.callApi(params, req, runtime), new DescribeRestoreSummaryResponse({}));
  }

  /**
   * @param request - DescribeRestoreSummaryRequest
   * @returns DescribeRestoreSummaryResponse
   */
  async describeRestoreSummary(request: DescribeRestoreSummaryRequest): Promise<DescribeRestoreSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreSummaryWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRestoreTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestoreTablesResponse
   */
  async describeRestoreTablesWithOptions(request: DescribeRestoreTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.restoreRecordId)) {
      query["RestoreRecordId"] = request.restoreRecordId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRestoreTables",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRestoreTablesResponse>(await this.callApi(params, req, runtime), new DescribeRestoreTablesResponse({}));
  }

  /**
   * @param request - DescribeRestoreTablesRequest
   * @returns DescribeRestoreTablesResponse
   */
  async describeRestoreTables(request: DescribeRestoreTablesRequest): Promise<DescribeRestoreTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreTablesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSecurityGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityGroupsResponse
   */
  async describeSecurityGroupsWithOptions(request: DescribeSecurityGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecurityGroups",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecurityGroupsResponse>(await this.callApi(params, req, runtime), new DescribeSecurityGroupsResponse({}));
  }

  /**
   * @param request - DescribeSecurityGroupsRequest
   * @returns DescribeSecurityGroupsResponse
   */
  async describeSecurityGroups(request: DescribeSecurityGroupsRequest): Promise<DescribeSecurityGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityGroupsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeServerlessClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServerlessClusterResponse
   */
  async describeServerlessClusterWithOptions(request: DescribeServerlessClusterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServerlessClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServerlessCluster",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServerlessClusterResponse>(await this.callApi(params, req, runtime), new DescribeServerlessClusterResponse({}));
  }

  /**
   * @param request - DescribeServerlessClusterRequest
   * @returns DescribeServerlessClusterResponse
   */
  async describeServerlessCluster(request: DescribeServerlessClusterRequest): Promise<DescribeServerlessClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServerlessClusterWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSubDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubDomainResponse
   */
  async describeSubDomainWithOptions(request: DescribeSubDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSubDomain",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSubDomainResponse>(await this.callApi(params, req, runtime), new DescribeSubDomainResponse({}));
  }

  /**
   * @param request - DescribeSubDomainRequest
   * @returns DescribeSubDomainResponse
   */
  async describeSubDomain(request: DescribeSubDomainRequest): Promise<DescribeSubDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubDomainWithOptions(request, runtime);
  }

  /**
   * @param request - EnableHBaseueBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableHBaseueBackupResponse
   */
  async enableHBaseueBackupWithOptions(request: EnableHBaseueBackupRequest, runtime: $Util.RuntimeOptions): Promise<EnableHBaseueBackupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.coldStorageSize)) {
      query["ColdStorageSize"] = request.coldStorageSize;
    }

    if (!Util.isUnset(request.hbaseueClusterId)) {
      query["HbaseueClusterId"] = request.hbaseueClusterId;
    }

    if (!Util.isUnset(request.nodeCount)) {
      query["NodeCount"] = request.nodeCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableHBaseueBackup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableHBaseueBackupResponse>(await this.callApi(params, req, runtime), new EnableHBaseueBackupResponse({}));
  }

  /**
   * @param request - EnableHBaseueBackupRequest
   * @returns EnableHBaseueBackupResponse
   */
  async enableHBaseueBackup(request: EnableHBaseueBackupRequest): Promise<EnableHBaseueBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableHBaseueBackupWithOptions(request, runtime);
  }

  /**
   * @param request - EnableHBaseueModuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableHBaseueModuleResponse
   */
  async enableHBaseueModuleWithOptions(request: EnableHBaseueModuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableHBaseueModuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.bdsId)) {
      query["BdsId"] = request.bdsId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.coreInstanceType)) {
      query["CoreInstanceType"] = request.coreInstanceType;
    }

    if (!Util.isUnset(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!Util.isUnset(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!Util.isUnset(request.hbaseueClusterId)) {
      query["HbaseueClusterId"] = request.hbaseueClusterId;
    }

    if (!Util.isUnset(request.masterInstanceType)) {
      query["MasterInstanceType"] = request.masterInstanceType;
    }

    if (!Util.isUnset(request.moduleClusterName)) {
      query["ModuleClusterName"] = request.moduleClusterName;
    }

    if (!Util.isUnset(request.moduleTypeName)) {
      query["ModuleTypeName"] = request.moduleTypeName;
    }

    if (!Util.isUnset(request.nodeCount)) {
      query["NodeCount"] = request.nodeCount;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableHBaseueModule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableHBaseueModuleResponse>(await this.callApi(params, req, runtime), new EnableHBaseueModuleResponse({}));
  }

  /**
   * @param request - EnableHBaseueModuleRequest
   * @returns EnableHBaseueModuleResponse
   */
  async enableHBaseueModule(request: EnableHBaseueModuleRequest): Promise<EnableHBaseueModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableHBaseueModuleWithOptions(request, runtime);
  }

  /**
   * @param request - EvaluateMultiZoneResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EvaluateMultiZoneResourceResponse
   */
  async evaluateMultiZoneResourceWithOptions(request: EvaluateMultiZoneResourceRequest, runtime: $Util.RuntimeOptions): Promise<EvaluateMultiZoneResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.arbiterVSwitchId)) {
      query["ArbiterVSwitchId"] = request.arbiterVSwitchId;
    }

    if (!Util.isUnset(request.arbiterZoneId)) {
      query["ArbiterZoneId"] = request.arbiterZoneId;
    }

    if (!Util.isUnset(request.archVersion)) {
      query["ArchVersion"] = request.archVersion;
    }

    if (!Util.isUnset(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.coreDiskSize)) {
      query["CoreDiskSize"] = request.coreDiskSize;
    }

    if (!Util.isUnset(request.coreDiskType)) {
      query["CoreDiskType"] = request.coreDiskType;
    }

    if (!Util.isUnset(request.coreInstanceType)) {
      query["CoreInstanceType"] = request.coreInstanceType;
    }

    if (!Util.isUnset(request.coreNodeCount)) {
      query["CoreNodeCount"] = request.coreNodeCount;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!Util.isUnset(request.logDiskSize)) {
      query["LogDiskSize"] = request.logDiskSize;
    }

    if (!Util.isUnset(request.logDiskType)) {
      query["LogDiskType"] = request.logDiskType;
    }

    if (!Util.isUnset(request.logInstanceType)) {
      query["LogInstanceType"] = request.logInstanceType;
    }

    if (!Util.isUnset(request.logNodeCount)) {
      query["LogNodeCount"] = request.logNodeCount;
    }

    if (!Util.isUnset(request.masterInstanceType)) {
      query["MasterInstanceType"] = request.masterInstanceType;
    }

    if (!Util.isUnset(request.multiZoneCombination)) {
      query["MultiZoneCombination"] = request.multiZoneCombination;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.primaryVSwitchId)) {
      query["PrimaryVSwitchId"] = request.primaryVSwitchId;
    }

    if (!Util.isUnset(request.primaryZoneId)) {
      query["PrimaryZoneId"] = request.primaryZoneId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!Util.isUnset(request.standbyVSwitchId)) {
      query["StandbyVSwitchId"] = request.standbyVSwitchId;
    }

    if (!Util.isUnset(request.standbyZoneId)) {
      query["StandbyZoneId"] = request.standbyZoneId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EvaluateMultiZoneResource",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EvaluateMultiZoneResourceResponse>(await this.callApi(params, req, runtime), new EvaluateMultiZoneResourceResponse({}));
  }

  /**
   * @param request - EvaluateMultiZoneResourceRequest
   * @returns EvaluateMultiZoneResourceResponse
   */
  async evaluateMultiZoneResource(request: EvaluateMultiZoneResourceRequest): Promise<EvaluateMultiZoneResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.evaluateMultiZoneResourceWithOptions(request, runtime);
  }

  /**
   * @param request - GetMultimodeCmsUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultimodeCmsUrlResponse
   */
  async getMultimodeCmsUrlWithOptions(request: GetMultimodeCmsUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetMultimodeCmsUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMultimodeCmsUrl",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMultimodeCmsUrlResponse>(await this.callApi(params, req, runtime), new GetMultimodeCmsUrlResponse({}));
  }

  /**
   * @param request - GetMultimodeCmsUrlRequest
   * @returns GetMultimodeCmsUrlResponse
   */
  async getMultimodeCmsUrl(request: GetMultimodeCmsUrlRequest): Promise<GetMultimodeCmsUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMultimodeCmsUrlWithOptions(request, runtime);
  }

  /**
   * 授权账户权限
   * 
   * @param request - GrantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantResponse
   */
  async grantWithOptions(request: GrantRequest, runtime: $Util.RuntimeOptions): Promise<GrantResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.aclActions)) {
      query["AclActions"] = request.aclActions;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Grant",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantResponse>(await this.callApi(params, req, runtime), new GrantResponse({}));
  }

  /**
   * 授权账户权限
   * 
   * @param request - GrantRequest
   * @returns GrantResponse
   */
  async grant(request: GrantRequest): Promise<GrantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantWithOptions(request, runtime);
  }

  /**
   * @param request - ListHBaseInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHBaseInstancesResponse
   */
  async listHBaseInstancesWithOptions(request: ListHBaseInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListHBaseInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHBaseInstances",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHBaseInstancesResponse>(await this.callApi(params, req, runtime), new ListHBaseInstancesResponse({}));
  }

  /**
   * @param request - ListHBaseInstancesRequest
   * @returns ListHBaseInstancesResponse
   */
  async listHBaseInstances(request: ListHBaseInstancesRequest): Promise<ListHBaseInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHBaseInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - ListInstanceServiceConfigHistoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceServiceConfigHistoriesResponse
   */
  async listInstanceServiceConfigHistoriesWithOptions(request: ListInstanceServiceConfigHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceServiceConfigHistoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "ListInstanceServiceConfigHistories",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceServiceConfigHistoriesResponse>(await this.callApi(params, req, runtime), new ListInstanceServiceConfigHistoriesResponse({}));
  }

  /**
   * @param request - ListInstanceServiceConfigHistoriesRequest
   * @returns ListInstanceServiceConfigHistoriesResponse
   */
  async listInstanceServiceConfigHistories(request: ListInstanceServiceConfigHistoriesRequest): Promise<ListInstanceServiceConfigHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceServiceConfigHistoriesWithOptions(request, runtime);
  }

  /**
   * @param request - ListInstanceServiceConfigurationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceServiceConfigurationsResponse
   */
  async listInstanceServiceConfigurationsWithOptions(request: ListInstanceServiceConfigurationsRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceServiceConfigurationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "ListInstanceServiceConfigurations",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceServiceConfigurationsResponse>(await this.callApi(params, req, runtime), new ListInstanceServiceConfigurationsResponse({}));
  }

  /**
   * @param request - ListInstanceServiceConfigurationsRequest
   * @returns ListInstanceServiceConfigurationsResponse
   */
  async listInstanceServiceConfigurations(request: ListInstanceServiceConfigurationsRequest): Promise<ListInstanceServiceConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceServiceConfigurationsWithOptions(request, runtime);
  }

  /**
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
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

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2019-01-01",
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
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - ListTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagsResponse
   */
  async listTagsWithOptions(request: ListTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTags",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagsResponse>(await this.callApi(params, req, runtime), new ListTagsResponse({}));
  }

  /**
   * @param request - ListTagsRequest
   * @returns ListTagsResponse
   */
  async listTags(request: ListTagsRequest): Promise<ListTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagsWithOptions(request, runtime);
  }

  /**
   * 更改账户密码
   * 
   * @param request - ModifyAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountPasswordResponse
   */
  async modifyAccountPasswordWithOptions(request: ModifyAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.newAccountPassword)) {
      query["NewAccountPassword"] = request.newAccountPassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountPassword",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAccountPasswordResponse>(await this.callApi(params, req, runtime), new ModifyAccountPasswordResponse({}));
  }

  /**
   * 更改账户密码
   * 
   * @param request - ModifyAccountPasswordRequest
   * @returns ModifyAccountPasswordResponse
   */
  async modifyAccountPassword(request: ModifyAccountPasswordRequest): Promise<ModifyAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountPasswordWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyActiveOperationTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyActiveOperationTasksResponse
   */
  async modifyActiveOperationTasksWithOptions(request: ModifyActiveOperationTasksRequest, runtime: $Util.RuntimeOptions): Promise<ModifyActiveOperationTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.immediateStart)) {
      query["ImmediateStart"] = request.immediateStart;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyActiveOperationTasks",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyActiveOperationTasksResponse>(await this.callApi(params, req, runtime), new ModifyActiveOperationTasksResponse({}));
  }

  /**
   * @param request - ModifyActiveOperationTasksRequest
   * @returns ModifyActiveOperationTasksResponse
   */
  async modifyActiveOperationTasks(request: ModifyActiveOperationTasksRequest): Promise<ModifyActiveOperationTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyBackupPlanConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupPlanConfigResponse
   */
  async modifyBackupPlanConfigWithOptions(request: ModifyBackupPlanConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPlanConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.fullBackupCycle)) {
      query["FullBackupCycle"] = request.fullBackupCycle;
    }

    if (!Util.isUnset(request.minHFileBackupCount)) {
      query["MinHFileBackupCount"] = request.minHFileBackupCount;
    }

    if (!Util.isUnset(request.nextFullBackupDate)) {
      query["NextFullBackupDate"] = request.nextFullBackupDate;
    }

    if (!Util.isUnset(request.tables)) {
      query["Tables"] = request.tables;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBackupPlanConfig",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBackupPlanConfigResponse>(await this.callApi(params, req, runtime), new ModifyBackupPlanConfigResponse({}));
  }

  /**
   * @param request - ModifyBackupPlanConfigRequest
   * @returns ModifyBackupPlanConfigResponse
   */
  async modifyBackupPlanConfig(request: ModifyBackupPlanConfigRequest): Promise<ModifyBackupPlanConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPlanConfigWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicyWithOptions(request: ModifyBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.preferredBackupEndTimeUTC)) {
      query["PreferredBackupEndTimeUTC"] = request.preferredBackupEndTimeUTC;
    }

    if (!Util.isUnset(request.preferredBackupPeriod)) {
      query["PreferredBackupPeriod"] = request.preferredBackupPeriod;
    }

    if (!Util.isUnset(request.preferredBackupStartTimeUTC)) {
      query["PreferredBackupStartTimeUTC"] = request.preferredBackupStartTimeUTC;
    }

    if (!Util.isUnset(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBackupPolicy",
      version: "2019-01-01",
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

  /**
   * @param request - ModifyBackupPolicyRequest
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicy(request: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyClusterDeletionProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterDeletionProtectionResponse
   */
  async modifyClusterDeletionProtectionWithOptions(request: ModifyClusterDeletionProtectionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterDeletionProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.protection)) {
      query["Protection"] = request.protection;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyClusterDeletionProtection",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyClusterDeletionProtectionResponse>(await this.callApi(params, req, runtime), new ModifyClusterDeletionProtectionResponse({}));
  }

  /**
   * @param request - ModifyClusterDeletionProtectionRequest
   * @returns ModifyClusterDeletionProtectionResponse
   */
  async modifyClusterDeletionProtection(request: ModifyClusterDeletionProtectionRequest): Promise<ModifyClusterDeletionProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterDeletionProtectionWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDiskWarningLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDiskWarningLineResponse
   */
  async modifyDiskWarningLineWithOptions(request: ModifyDiskWarningLineRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDiskWarningLineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.warningLine)) {
      query["WarningLine"] = request.warningLine;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDiskWarningLine",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDiskWarningLineResponse>(await this.callApi(params, req, runtime), new ModifyDiskWarningLineResponse({}));
  }

  /**
   * @param request - ModifyDiskWarningLineRequest
   * @returns ModifyDiskWarningLineResponse
   */
  async modifyDiskWarningLine(request: ModifyDiskWarningLineRequest): Promise<ModifyDiskWarningLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDiskWarningLineWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyInstanceMaintainTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceMaintainTimeResponse
   */
  async modifyInstanceMaintainTimeWithOptions(request: ModifyInstanceMaintainTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceMaintainTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.maintainEndTime)) {
      query["MaintainEndTime"] = request.maintainEndTime;
    }

    if (!Util.isUnset(request.maintainStartTime)) {
      query["MaintainStartTime"] = request.maintainStartTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceMaintainTime",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceMaintainTimeResponse>(await this.callApi(params, req, runtime), new ModifyInstanceMaintainTimeResponse({}));
  }

  /**
   * @param request - ModifyInstanceMaintainTimeRequest
   * @returns ModifyInstanceMaintainTimeResponse
   */
  async modifyInstanceMaintainTime(request: ModifyInstanceMaintainTimeRequest): Promise<ModifyInstanceMaintainTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceMaintainTimeWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyInstanceNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceNameResponse
   */
  async modifyInstanceNameWithOptions(request: ModifyInstanceNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceName",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceNameResponse>(await this.callApi(params, req, runtime), new ModifyInstanceNameResponse({}));
  }

  /**
   * @param request - ModifyInstanceNameRequest
   * @returns ModifyInstanceNameResponse
   */
  async modifyInstanceName(request: ModifyInstanceNameRequest): Promise<ModifyInstanceNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceNameWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyInstanceServiceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceServiceConfigResponse
   */
  async modifyInstanceServiceConfigWithOptions(request: ModifyInstanceServiceConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceServiceConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.configureName)) {
      query["ConfigureName"] = request.configureName;
    }

    if (!Util.isUnset(request.configureValue)) {
      query["ConfigureValue"] = request.configureValue;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.restart)) {
      query["Restart"] = request.restart;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceServiceConfig",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceServiceConfigResponse>(await this.callApi(params, req, runtime), new ModifyInstanceServiceConfigResponse({}));
  }

  /**
   * @param request - ModifyInstanceServiceConfigRequest
   * @returns ModifyInstanceServiceConfigResponse
   */
  async modifyInstanceServiceConfig(request: ModifyInstanceServiceConfigRequest): Promise<ModifyInstanceServiceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceServiceConfigWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyInstanceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceTypeResponse
   */
  async modifyInstanceTypeWithOptions(request: ModifyInstanceTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.coreInstanceType)) {
      query["CoreInstanceType"] = request.coreInstanceType;
    }

    if (!Util.isUnset(request.masterInstanceType)) {
      query["MasterInstanceType"] = request.masterInstanceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceType",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceTypeResponse>(await this.callApi(params, req, runtime), new ModifyInstanceTypeResponse({}));
  }

  /**
   * @param request - ModifyInstanceTypeRequest
   * @returns ModifyInstanceTypeResponse
   */
  async modifyInstanceType(request: ModifyInstanceTypeRequest): Promise<ModifyInstanceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceTypeWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyIpWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIpWhitelistResponse
   */
  async modifyIpWhitelistWithOptions(request: ModifyIpWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIpWhitelistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.ipList)) {
      query["IpList"] = request.ipList;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyIpWhitelist",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyIpWhitelistResponse>(await this.callApi(params, req, runtime), new ModifyIpWhitelistResponse({}));
  }

  /**
   * @param request - ModifyIpWhitelistRequest
   * @returns ModifyIpWhitelistResponse
   */
  async modifyIpWhitelist(request: ModifyIpWhitelistRequest): Promise<ModifyIpWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIpWhitelistWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyMultiZoneClusterNodeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMultiZoneClusterNodeTypeResponse
   */
  async modifyMultiZoneClusterNodeTypeWithOptions(request: ModifyMultiZoneClusterNodeTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMultiZoneClusterNodeTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.coreInstanceType)) {
      query["CoreInstanceType"] = request.coreInstanceType;
    }

    if (!Util.isUnset(request.logInstanceType)) {
      query["LogInstanceType"] = request.logInstanceType;
    }

    if (!Util.isUnset(request.masterInstanceType)) {
      query["MasterInstanceType"] = request.masterInstanceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMultiZoneClusterNodeType",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMultiZoneClusterNodeTypeResponse>(await this.callApi(params, req, runtime), new ModifyMultiZoneClusterNodeTypeResponse({}));
  }

  /**
   * @param request - ModifyMultiZoneClusterNodeTypeRequest
   * @returns ModifyMultiZoneClusterNodeTypeResponse
   */
  async modifyMultiZoneClusterNodeType(request: ModifyMultiZoneClusterNodeTypeRequest): Promise<ModifyMultiZoneClusterNodeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMultiZoneClusterNodeTypeWithOptions(request, runtime);
  }

  /**
   * @param request - ModifySecurityGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityGroupsResponse
   */
  async modifySecurityGroupsWithOptions(request: ModifySecurityGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.securityGroupIds)) {
      query["SecurityGroupIds"] = request.securityGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySecurityGroups",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySecurityGroupsResponse>(await this.callApi(params, req, runtime), new ModifySecurityGroupsResponse({}));
  }

  /**
   * @param request - ModifySecurityGroupsRequest
   * @returns ModifySecurityGroupsResponse
   */
  async modifySecurityGroups(request: ModifySecurityGroupsRequest): Promise<ModifySecurityGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityGroupsWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyUIAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUIAccountPasswordResponse
   */
  async modifyUIAccountPasswordWithOptions(request: ModifyUIAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUIAccountPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyUIAccountPassword",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyUIAccountPasswordResponse>(await this.callApi(params, req, runtime), new ModifyUIAccountPasswordResponse({}));
  }

  /**
   * @param request - ModifyUIAccountPasswordRequest
   * @returns ModifyUIAccountPasswordResponse
   */
  async modifyUIAccountPassword(request: ModifyUIAccountPasswordRequest): Promise<ModifyUIAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUIAccountPasswordWithOptions(request, runtime);
  }

  /**
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MoveResourceGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new MoveResourceGroupResponse({}));
  }

  /**
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * @param request - OpenBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenBackupResponse
   */
  async openBackupWithOptions(request: OpenBackupRequest, runtime: $Util.RuntimeOptions): Promise<OpenBackupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OpenBackup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenBackupResponse>(await this.callApi(params, req, runtime), new OpenBackupResponse({}));
  }

  /**
   * @param request - OpenBackupRequest
   * @returns OpenBackupResponse
   */
  async openBackup(request: OpenBackupRequest): Promise<OpenBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openBackupWithOptions(request, runtime);
  }

  /**
   * @param request - PurgeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PurgeInstanceResponse
   */
  async purgeInstanceWithOptions(request: PurgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<PurgeInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PurgeInstance",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PurgeInstanceResponse>(await this.callApi(params, req, runtime), new PurgeInstanceResponse({}));
  }

  /**
   * @param request - PurgeInstanceRequest
   * @returns PurgeInstanceResponse
   */
  async purgeInstance(request: PurgeInstanceRequest): Promise<PurgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.purgeInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - QueryHBaseHaDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryHBaseHaDBResponse
   */
  async queryHBaseHaDBWithOptions(request: QueryHBaseHaDBRequest, runtime: $Util.RuntimeOptions): Promise<QueryHBaseHaDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bdsId)) {
      query["BdsId"] = request.bdsId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryHBaseHaDB",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryHBaseHaDBResponse>(await this.callApi(params, req, runtime), new QueryHBaseHaDBResponse({}));
  }

  /**
   * @param request - QueryHBaseHaDBRequest
   * @returns QueryHBaseHaDBResponse
   */
  async queryHBaseHaDB(request: QueryHBaseHaDBRequest): Promise<QueryHBaseHaDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryHBaseHaDBWithOptions(request, runtime);
  }

  /**
   * @param request - QueryXpackRelateDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryXpackRelateDBResponse
   */
  async queryXpackRelateDBWithOptions(request: QueryXpackRelateDBRequest, runtime: $Util.RuntimeOptions): Promise<QueryXpackRelateDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.hasSingleNode)) {
      query["HasSingleNode"] = request.hasSingleNode;
    }

    if (!Util.isUnset(request.relateDbType)) {
      query["RelateDbType"] = request.relateDbType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryXpackRelateDB",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryXpackRelateDBResponse>(await this.callApi(params, req, runtime), new QueryXpackRelateDBResponse({}));
  }

  /**
   * @param request - QueryXpackRelateDBRequest
   * @returns QueryXpackRelateDBResponse
   */
  async queryXpackRelateDB(request: QueryXpackRelateDBRequest): Promise<QueryXpackRelateDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryXpackRelateDBWithOptions(request, runtime);
  }

  /**
   * @param request - RelateDbForHBaseHaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RelateDbForHBaseHaResponse
   */
  async relateDbForHBaseHaWithOptions(request: RelateDbForHBaseHaRequest, runtime: $Util.RuntimeOptions): Promise<RelateDbForHBaseHaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.haActive)) {
      query["HaActive"] = request.haActive;
    }

    if (!Util.isUnset(request.haActiveClusterKey)) {
      query["HaActiveClusterKey"] = request.haActiveClusterKey;
    }

    if (!Util.isUnset(request.haActiveDBType)) {
      query["HaActiveDBType"] = request.haActiveDBType;
    }

    if (!Util.isUnset(request.haActiveHbaseFsDir)) {
      query["HaActiveHbaseFsDir"] = request.haActiveHbaseFsDir;
    }

    if (!Util.isUnset(request.haActiveHdfsUri)) {
      query["HaActiveHdfsUri"] = request.haActiveHdfsUri;
    }

    if (!Util.isUnset(request.haActivePassword)) {
      query["HaActivePassword"] = request.haActivePassword;
    }

    if (!Util.isUnset(request.haActiveUser)) {
      query["HaActiveUser"] = request.haActiveUser;
    }

    if (!Util.isUnset(request.haActiveVersion)) {
      query["HaActiveVersion"] = request.haActiveVersion;
    }

    if (!Util.isUnset(request.haMigrateType)) {
      query["HaMigrateType"] = request.haMigrateType;
    }

    if (!Util.isUnset(request.haStandby)) {
      query["HaStandby"] = request.haStandby;
    }

    if (!Util.isUnset(request.haStandbyClusterKey)) {
      query["HaStandbyClusterKey"] = request.haStandbyClusterKey;
    }

    if (!Util.isUnset(request.haStandbyDBType)) {
      query["HaStandbyDBType"] = request.haStandbyDBType;
    }

    if (!Util.isUnset(request.haStandbyHbaseFsDir)) {
      query["HaStandbyHbaseFsDir"] = request.haStandbyHbaseFsDir;
    }

    if (!Util.isUnset(request.haStandbyHdfsUri)) {
      query["HaStandbyHdfsUri"] = request.haStandbyHdfsUri;
    }

    if (!Util.isUnset(request.haStandbyPassword)) {
      query["HaStandbyPassword"] = request.haStandbyPassword;
    }

    if (!Util.isUnset(request.haStandbyUser)) {
      query["HaStandbyUser"] = request.haStandbyUser;
    }

    if (!Util.isUnset(request.haStandbyVersion)) {
      query["HaStandbyVersion"] = request.haStandbyVersion;
    }

    if (!Util.isUnset(request.haTables)) {
      query["HaTables"] = request.haTables;
    }

    if (!Util.isUnset(request.isActiveStandard)) {
      query["IsActiveStandard"] = request.isActiveStandard;
    }

    if (!Util.isUnset(request.isStandbyStandard)) {
      query["IsStandbyStandard"] = request.isStandbyStandard;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RelateDbForHBaseHa",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RelateDbForHBaseHaResponse>(await this.callApi(params, req, runtime), new RelateDbForHBaseHaResponse({}));
  }

  /**
   * @param request - RelateDbForHBaseHaRequest
   * @returns RelateDbForHBaseHaResponse
   */
  async relateDbForHBaseHa(request: RelateDbForHBaseHaRequest): Promise<RelateDbForHBaseHaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.relateDbForHBaseHaWithOptions(request, runtime);
  }

  /**
   * @param request - ReleasePublicNetworkAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleasePublicNetworkAddressResponse
   */
  async releasePublicNetworkAddressWithOptions(request: ReleasePublicNetworkAddressRequest, runtime: $Util.RuntimeOptions): Promise<ReleasePublicNetworkAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleasePublicNetworkAddress",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleasePublicNetworkAddressResponse>(await this.callApi(params, req, runtime), new ReleasePublicNetworkAddressResponse({}));
  }

  /**
   * @param request - ReleasePublicNetworkAddressRequest
   * @returns ReleasePublicNetworkAddressResponse
   */
  async releasePublicNetworkAddress(request: ReleasePublicNetworkAddressRequest): Promise<ReleasePublicNetworkAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releasePublicNetworkAddressWithOptions(request, runtime);
  }

  /**
   * @param request - RenewInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewInstanceResponse
   */
  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewInstance",
      version: "2019-01-01",
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

  /**
   * @param request - RenewInstanceRequest
   * @returns RenewInstanceResponse
   */
  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - ResizeColdStorageSizeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResizeColdStorageSizeResponse
   */
  async resizeColdStorageSizeWithOptions(request: ResizeColdStorageSizeRequest, runtime: $Util.RuntimeOptions): Promise<ResizeColdStorageSizeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.coldStorageSize)) {
      query["ColdStorageSize"] = request.coldStorageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResizeColdStorageSize",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResizeColdStorageSizeResponse>(await this.callApi(params, req, runtime), new ResizeColdStorageSizeResponse({}));
  }

  /**
   * @param request - ResizeColdStorageSizeRequest
   * @returns ResizeColdStorageSizeResponse
   */
  async resizeColdStorageSize(request: ResizeColdStorageSizeRequest): Promise<ResizeColdStorageSizeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resizeColdStorageSizeWithOptions(request, runtime);
  }

  /**
   * @param request - ResizeDiskSizeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResizeDiskSizeResponse
   */
  async resizeDiskSizeWithOptions(request: ResizeDiskSizeRequest, runtime: $Util.RuntimeOptions): Promise<ResizeDiskSizeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.nodeDiskSize)) {
      query["NodeDiskSize"] = request.nodeDiskSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResizeDiskSize",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResizeDiskSizeResponse>(await this.callApi(params, req, runtime), new ResizeDiskSizeResponse({}));
  }

  /**
   * @param request - ResizeDiskSizeRequest
   * @returns ResizeDiskSizeResponse
   */
  async resizeDiskSize(request: ResizeDiskSizeRequest): Promise<ResizeDiskSizeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resizeDiskSizeWithOptions(request, runtime);
  }

  /**
   * @param request - ResizeMultiZoneClusterDiskSizeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResizeMultiZoneClusterDiskSizeResponse
   */
  async resizeMultiZoneClusterDiskSizeWithOptions(request: ResizeMultiZoneClusterDiskSizeRequest, runtime: $Util.RuntimeOptions): Promise<ResizeMultiZoneClusterDiskSizeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.coreDiskSize)) {
      query["CoreDiskSize"] = request.coreDiskSize;
    }

    if (!Util.isUnset(request.logDiskSize)) {
      query["LogDiskSize"] = request.logDiskSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResizeMultiZoneClusterDiskSize",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResizeMultiZoneClusterDiskSizeResponse>(await this.callApi(params, req, runtime), new ResizeMultiZoneClusterDiskSizeResponse({}));
  }

  /**
   * @param request - ResizeMultiZoneClusterDiskSizeRequest
   * @returns ResizeMultiZoneClusterDiskSizeResponse
   */
  async resizeMultiZoneClusterDiskSize(request: ResizeMultiZoneClusterDiskSizeRequest): Promise<ResizeMultiZoneClusterDiskSizeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resizeMultiZoneClusterDiskSizeWithOptions(request, runtime);
  }

  /**
   * @param request - ResizeMultiZoneClusterNodeCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResizeMultiZoneClusterNodeCountResponse
   */
  async resizeMultiZoneClusterNodeCountWithOptions(request: ResizeMultiZoneClusterNodeCountRequest, runtime: $Util.RuntimeOptions): Promise<ResizeMultiZoneClusterNodeCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.arbiterVSwitchId)) {
      query["ArbiterVSwitchId"] = request.arbiterVSwitchId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.coreNodeCount)) {
      query["CoreNodeCount"] = request.coreNodeCount;
    }

    if (!Util.isUnset(request.logNodeCount)) {
      query["LogNodeCount"] = request.logNodeCount;
    }

    if (!Util.isUnset(request.primaryCoreNodeCount)) {
      query["PrimaryCoreNodeCount"] = request.primaryCoreNodeCount;
    }

    if (!Util.isUnset(request.primaryVSwitchId)) {
      query["PrimaryVSwitchId"] = request.primaryVSwitchId;
    }

    if (!Util.isUnset(request.standbyCoreNodeCount)) {
      query["StandbyCoreNodeCount"] = request.standbyCoreNodeCount;
    }

    if (!Util.isUnset(request.standbyVSwitchId)) {
      query["StandbyVSwitchId"] = request.standbyVSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResizeMultiZoneClusterNodeCount",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResizeMultiZoneClusterNodeCountResponse>(await this.callApi(params, req, runtime), new ResizeMultiZoneClusterNodeCountResponse({}));
  }

  /**
   * @param request - ResizeMultiZoneClusterNodeCountRequest
   * @returns ResizeMultiZoneClusterNodeCountResponse
   */
  async resizeMultiZoneClusterNodeCount(request: ResizeMultiZoneClusterNodeCountRequest): Promise<ResizeMultiZoneClusterNodeCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resizeMultiZoneClusterNodeCountWithOptions(request, runtime);
  }

  /**
   * @param request - ResizeNodeCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResizeNodeCountResponse
   */
  async resizeNodeCountWithOptions(request: ResizeNodeCountRequest, runtime: $Util.RuntimeOptions): Promise<ResizeNodeCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.nodeCount)) {
      query["NodeCount"] = request.nodeCount;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResizeNodeCount",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResizeNodeCountResponse>(await this.callApi(params, req, runtime), new ResizeNodeCountResponse({}));
  }

  /**
   * @param request - ResizeNodeCountRequest
   * @returns ResizeNodeCountResponse
   */
  async resizeNodeCount(request: ResizeNodeCountRequest): Promise<ResizeNodeCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resizeNodeCountWithOptions(request, runtime);
  }

  /**
   * @param request - RestartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartInstanceResponse
   */
  async restartInstanceWithOptions(request: RestartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.components)) {
      query["Components"] = request.components;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartInstance",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartInstanceResponse>(await this.callApi(params, req, runtime), new RestartInstanceResponse({}));
  }

  /**
   * @param request - RestartInstanceRequest
   * @returns RestartInstanceResponse
   */
  async restartInstance(request: RestartInstanceRequest): Promise<RestartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartInstanceWithOptions(request, runtime);
  }

  /**
   * 回收账户权限
   * 
   * @param request - RevokeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeResponse
   */
  async revokeWithOptions(request: RevokeRequest, runtime: $Util.RuntimeOptions): Promise<RevokeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.aclActions)) {
      query["AclActions"] = request.aclActions;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Revoke",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeResponse>(await this.callApi(params, req, runtime), new RevokeResponse({}));
  }

  /**
   * 回收账户权限
   * 
   * @param request - RevokeRequest
   * @returns RevokeResponse
   */
  async revoke(request: RevokeRequest): Promise<RevokeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeWithOptions(request, runtime);
  }

  /**
   * @param request - SwitchHbaseHaSlbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchHbaseHaSlbResponse
   */
  async switchHbaseHaSlbWithOptions(request: SwitchHbaseHaSlbRequest, runtime: $Util.RuntimeOptions): Promise<SwitchHbaseHaSlbResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bdsId)) {
      query["BdsId"] = request.bdsId;
    }

    if (!Util.isUnset(request.haId)) {
      query["HaId"] = request.haId;
    }

    if (!Util.isUnset(request.haTypes)) {
      query["HaTypes"] = request.haTypes;
    }

    if (!Util.isUnset(request.hbaseType)) {
      query["HbaseType"] = request.hbaseType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchHbaseHaSlb",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchHbaseHaSlbResponse>(await this.callApi(params, req, runtime), new SwitchHbaseHaSlbResponse({}));
  }

  /**
   * @param request - SwitchHbaseHaSlbRequest
   * @returns SwitchHbaseHaSlbResponse
   */
  async switchHbaseHaSlb(request: SwitchHbaseHaSlbRequest): Promise<SwitchHbaseHaSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchHbaseHaSlbWithOptions(request, runtime);
  }

  /**
   * 开通/关闭 扩展服务
   * 
   * @param request - SwitchServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchServiceResponse
   */
  async switchServiceWithOptions(request: SwitchServiceRequest, runtime: $Util.RuntimeOptions): Promise<SwitchServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.operate)) {
      query["Operate"] = request.operate;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchService",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchServiceResponse>(await this.callApi(params, req, runtime), new SwitchServiceResponse({}));
  }

  /**
   * 开通/关闭 扩展服务
   * 
   * @param request - SwitchServiceRequest
   * @returns SwitchServiceResponse
   */
  async switchService(request: SwitchServiceRequest): Promise<SwitchServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchServiceWithOptions(request, runtime);
  }

  /**
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2019-01-01",
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
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - UnTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnTagResourcesResponse
   */
  async unTagResourcesWithOptions(request: UnTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UnTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnTagResources",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnTagResourcesResponse>(await this.callApi(params, req, runtime), new UnTagResourcesResponse({}));
  }

  /**
   * @param request - UnTagResourcesRequest
   * @returns UnTagResourcesResponse
   */
  async unTagResources(request: UnTagResourcesRequest): Promise<UnTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - UpgradeMinorVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeMinorVersionResponse
   */
  async upgradeMinorVersionWithOptions(request: UpgradeMinorVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeMinorVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.components)) {
      query["Components"] = request.components;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeMinorVersion",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeMinorVersionResponse>(await this.callApi(params, req, runtime), new UpgradeMinorVersionResponse({}));
  }

  /**
   * @param request - UpgradeMinorVersionRequest
   * @returns UpgradeMinorVersionResponse
   */
  async upgradeMinorVersion(request: UpgradeMinorVersionRequest): Promise<UpgradeMinorVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeMinorVersionWithOptions(request, runtime);
  }

  /**
   * @param request - UpgradeMultiZoneClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeMultiZoneClusterResponse
   */
  async upgradeMultiZoneClusterWithOptions(request: UpgradeMultiZoneClusterRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeMultiZoneClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.components)) {
      query["Components"] = request.components;
    }

    if (!Util.isUnset(request.restartComponents)) {
      query["RestartComponents"] = request.restartComponents;
    }

    if (!Util.isUnset(request.runMode)) {
      query["RunMode"] = request.runMode;
    }

    if (!Util.isUnset(request.upgradeInsName)) {
      query["UpgradeInsName"] = request.upgradeInsName;
    }

    if (!Util.isUnset(request.versions)) {
      query["Versions"] = request.versions;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeMultiZoneCluster",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeMultiZoneClusterResponse>(await this.callApi(params, req, runtime), new UpgradeMultiZoneClusterResponse({}));
  }

  /**
   * @param request - UpgradeMultiZoneClusterRequest
   * @returns UpgradeMultiZoneClusterResponse
   */
  async upgradeMultiZoneCluster(request: UpgradeMultiZoneClusterRequest): Promise<UpgradeMultiZoneClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeMultiZoneClusterWithOptions(request, runtime);
  }

  /**
   * @param request - XpackRelateDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns XpackRelateDBResponse
   */
  async xpackRelateDBWithOptions(request: XpackRelateDBRequest, runtime: $Util.RuntimeOptions): Promise<XpackRelateDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dbClusterIds)) {
      query["DbClusterIds"] = request.dbClusterIds;
    }

    if (!Util.isUnset(request.relateDbType)) {
      query["RelateDbType"] = request.relateDbType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "XpackRelateDB",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<XpackRelateDBResponse>(await this.callApi(params, req, runtime), new XpackRelateDBResponse({}));
  }

  /**
   * @param request - XpackRelateDBRequest
   * @returns XpackRelateDBResponse
   */
  async xpackRelateDB(request: XpackRelateDBRequest): Promise<XpackRelateDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.xpackRelateDBWithOptions(request, runtime);
  }

}
