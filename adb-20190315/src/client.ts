// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AllocateClusterPublicConnectionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  connectionStringPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      connectionStringPrefix: 'ConnectionStringPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      connectionStringPrefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateClusterPublicConnectionResponseBody extends $tea.Model {
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

export class AllocateClusterPublicConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AllocateClusterPublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AllocateClusterPublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDBResourcePoolWithUserRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  poolName?: string;
  poolUser?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      poolName: 'PoolName',
      poolUser: 'PoolUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      poolName: 'string',
      poolUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDBResourcePoolWithUserResponseBody extends $tea.Model {
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

export class BindDBResourcePoolWithUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindDBResourcePoolWithUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindDBResourcePoolWithUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  accountName?: string;
  accountPassword?: string;
  accountDescription?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountDescription: 'AccountDescription',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountDescription: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponseBody extends $tea.Model {
  requestId?: string;
  DBClusterId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBClusterId: 'DBClusterId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBClusterId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  zoneId?: string;
  DBClusterVersion?: string;
  DBClusterCategory?: string;
  DBClusterClass?: string;
  DBNodeGroupCount?: string;
  DBNodeStorage?: string;
  DBClusterNetworkType?: string;
  DBClusterDescription?: string;
  payType?: string;
  period?: string;
  usedTime?: string;
  VPCId?: string;
  vSwitchId?: string;
  clientToken?: string;
  executorCount?: string;
  resourceGroupId?: string;
  mode?: string;
  storageResource?: string;
  storageType?: string;
  computeResource?: string;
  restoreType?: string;
  sourceDBInstanceName?: string;
  backupSetID?: string;
  restoreTime?: string;
  elasticIOResource?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      DBClusterVersion: 'DBClusterVersion',
      DBClusterCategory: 'DBClusterCategory',
      DBClusterClass: 'DBClusterClass',
      DBNodeGroupCount: 'DBNodeGroupCount',
      DBNodeStorage: 'DBNodeStorage',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterDescription: 'DBClusterDescription',
      payType: 'PayType',
      period: 'Period',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      clientToken: 'ClientToken',
      executorCount: 'ExecutorCount',
      resourceGroupId: 'ResourceGroupId',
      mode: 'Mode',
      storageResource: 'StorageResource',
      storageType: 'StorageType',
      computeResource: 'ComputeResource',
      restoreType: 'RestoreType',
      sourceDBInstanceName: 'SourceDBInstanceName',
      backupSetID: 'BackupSetID',
      restoreTime: 'RestoreTime',
      elasticIOResource: 'ElasticIOResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      zoneId: 'string',
      DBClusterVersion: 'string',
      DBClusterCategory: 'string',
      DBClusterClass: 'string',
      DBNodeGroupCount: 'string',
      DBNodeStorage: 'string',
      DBClusterNetworkType: 'string',
      DBClusterDescription: 'string',
      payType: 'string',
      period: 'string',
      usedTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      clientToken: 'string',
      executorCount: 'string',
      resourceGroupId: 'string',
      mode: 'string',
      storageResource: 'string',
      storageType: 'string',
      computeResource: 'string',
      restoreType: 'string',
      sourceDBInstanceName: 'string',
      backupSetID: 'string',
      restoreTime: 'string',
      elasticIOResource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterResponseBody extends $tea.Model {
  requestId?: string;
  resourceGroupId?: string;
  DBClusterId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupId: 'string',
      DBClusterId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResourcePoolRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  poolName?: string;
  queryType?: string;
  nodeNum?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      poolName: 'PoolName',
      queryType: 'QueryType',
      nodeNum: 'NodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      poolName: 'string',
      queryType: 'string',
      nodeNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResourcePoolResponseBody extends $tea.Model {
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

export class CreateDBResourcePoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDBResourcePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDBResourcePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticPlanRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  elasticPlanName?: string;
  resourcePoolName?: string;
  elasticPlanNodeNum?: number;
  elasticPlanTimeStart?: string;
  elasticPlanTimeEnd?: string;
  elasticPlanWeeklyRepeat?: string;
  elasticPlanStartDay?: string;
  elasticPlanEndDay?: string;
  elasticPlanEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
      resourcePoolName: 'ResourcePoolName',
      elasticPlanNodeNum: 'ElasticPlanNodeNum',
      elasticPlanTimeStart: 'ElasticPlanTimeStart',
      elasticPlanTimeEnd: 'ElasticPlanTimeEnd',
      elasticPlanWeeklyRepeat: 'ElasticPlanWeeklyRepeat',
      elasticPlanStartDay: 'ElasticPlanStartDay',
      elasticPlanEndDay: 'ElasticPlanEndDay',
      elasticPlanEnable: 'ElasticPlanEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      elasticPlanName: 'string',
      resourcePoolName: 'string',
      elasticPlanNodeNum: 'number',
      elasticPlanTimeStart: 'string',
      elasticPlanTimeEnd: 'string',
      elasticPlanWeeklyRepeat: 'string',
      elasticPlanStartDay: 'string',
      elasticPlanEndDay: 'string',
      elasticPlanEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticPlanResponseBody extends $tea.Model {
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

export class CreateElasticPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateElasticPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  accountName?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      accountName: 'AccountName',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      accountName: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  body: DeleteAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterResponseBody extends $tea.Model {
  requestId?: string;
  DBClusterId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBClusterId: 'DBClusterId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBClusterId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBResourcePoolRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  poolName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      poolName: 'PoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      poolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBResourcePoolResponseBody extends $tea.Model {
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

export class DeleteDBResourcePoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDBResourcePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDBResourcePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteElasticPlanRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  elasticPlanName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      elasticPlanName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteElasticPlanResponseBody extends $tea.Model {
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

export class DeleteElasticPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteElasticPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  accountName?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      accountName: 'AccountName',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      accountName: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBody extends $tea.Model {
  requestId?: string;
  accountList?: DescribeAccountsResponseBodyAccountList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      accountList: 'AccountList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      accountList: DescribeAccountsResponseBodyAccountList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllAccountsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllAccountsResponseBody extends $tea.Model {
  requestId?: string;
  accountList?: DescribeAllAccountsResponseBodyAccountList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      accountList: 'AccountList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      accountList: { 'type': 'array', 'itemType': DescribeAllAccountsResponseBodyAccountList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllAccountsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAllAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAllAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  schemaName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceResponseBody extends $tea.Model {
  requestId?: string;
  schemas?: DescribeAllDataSourceResponseBodySchemas;
  tables?: DescribeAllDataSourceResponseBodyTables;
  columns?: DescribeAllDataSourceResponseBodyColumns;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schemas: 'Schemas',
      tables: 'Tables',
      columns: 'Columns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schemas: DescribeAllDataSourceResponseBodySchemas,
      tables: DescribeAllDataSourceResponseBodyTables,
      columns: DescribeAllDataSourceResponseBodyColumns,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAllDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAllDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogConfigRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogConfigResponseBody extends $tea.Model {
  auditLogStatus?: string;
  requestId?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      auditLogStatus: 'AuditLogStatus',
      requestId: 'RequestId',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditLogStatus: 'string',
      requestId: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAuditLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAuditLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogRecordsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  regionId?: string;
  startTime?: string;
  endTime?: string;
  DBName?: string;
  queryKeyword?: string;
  sqlType?: string;
  succeed?: string;
  hostAddress?: string;
  orderType?: string;
  user?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      DBName: 'DBName',
      queryKeyword: 'QueryKeyword',
      sqlType: 'SqlType',
      succeed: 'Succeed',
      hostAddress: 'HostAddress',
      orderType: 'OrderType',
      user: 'User',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      regionId: 'string',
      startTime: 'string',
      endTime: 'string',
      DBName: 'string',
      queryKeyword: 'string',
      sqlType: 'string',
      succeed: 'string',
      hostAddress: 'string',
      orderType: 'string',
      user: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogRecordsResponseBody extends $tea.Model {
  DBClusterId?: string;
  pageSize?: string;
  pageNumber?: string;
  requestId?: string;
  totalCount?: string;
  items?: DescribeAuditLogRecordsResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      pageSize: 'string',
      pageNumber: 'string',
      requestId: 'string',
      totalCount: 'string',
      items: { 'type': 'array', 'itemType': DescribeAuditLogRecordsResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAuditLogRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAuditLogRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  DBClusterIds?: string;
  pageSize?: number;
  pageNumber?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      DBClusterIds: 'DBClusterIds',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      DBClusterIds: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  totalRecordCount?: number;
  items?: DescribeAutoRenewAttributeResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      items: DescribeAutoRenewAttributeResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAutoRenewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAutoRenewAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequest extends $tea.Model {
  regionId?: string;
  zoneId?: string;
  chargeType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      chargeType: 'ChargeType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
      chargeType: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBody extends $tea.Model {
  regionId?: string;
  requestId?: string;
  availableZoneList?: DescribeAvailableResourceResponseBodyAvailableZoneList[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      requestId: 'RequestId',
      availableZoneList: 'AvailableZoneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      requestId: 'string',
      availableZoneList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAvailableResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAvailableResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBody extends $tea.Model {
  logBackupRetentionPeriod?: number;
  backupRetentionPeriod?: number;
  requestId?: string;
  preferredBackupPeriod?: string;
  preferredBackupTime?: string;
  enableBackupLog?: string;
  static names(): { [key: string]: string } {
    return {
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      requestId: 'RequestId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      enableBackupLog: 'EnableBackupLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logBackupRetentionPeriod: 'number',
      backupRetentionPeriod: 'number',
      requestId: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      enableBackupLog: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  backupId?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      backupId: 'BackupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      backupId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBody extends $tea.Model {
  pageSize?: string;
  requestId?: string;
  pageNumber?: string;
  totalCount?: string;
  items?: DescribeBackupsResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'string',
      requestId: 'string',
      pageNumber: 'string',
      totalCount: 'string',
      items: DescribeBackupsResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  schemaName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeColumnsResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: DescribeColumnsResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeColumnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeColumnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionCountRecordsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionCountRecordsResponseBody extends $tea.Model {
  requestId?: string;
  DBClusterId?: string;
  accessIpRecords?: DescribeConnectionCountRecordsResponseBodyAccessIpRecords[];
  userRecords?: DescribeConnectionCountRecordsResponseBodyUserRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBClusterId: 'DBClusterId',
      accessIpRecords: 'AccessIpRecords',
      userRecords: 'UserRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBClusterId: 'string',
      accessIpRecords: { 'type': 'array', 'itemType': DescribeConnectionCountRecordsResponseBodyAccessIpRecords },
      userRecords: { 'type': 'array', 'itemType': DescribeConnectionCountRecordsResponseBodyUserRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionCountRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConnectionCountRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConnectionCountRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhiteListRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhiteListResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeDBClusterAccessWhiteListResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: DescribeDBClusterAccessWhiteListResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterAccessWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterAccessWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeDBClusterAttributeResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: DescribeDBClusterAttributeResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterForecastRequest extends $tea.Model {
  startTime?: string;
  DBClusterId?: string;
  regionId?: string;
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      DBClusterId: 'string',
      regionId: 'string',
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterForecastResponseBody extends $tea.Model {
  performances?: DescribeDBClusterForecastResponseBodyPerformances[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      performances: 'Performances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performances: { 'type': 'array', 'itemType': DescribeDBClusterForecastResponseBodyPerformances },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterForecastResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterForecastResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterForecastResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthReportRequest extends $tea.Model {
  startTime?: string;
  DBClusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthReportResponseBody extends $tea.Model {
  items?: DescribeDBClusterHealthReportResponseBodyItems[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBClusterHealthReportResponseBodyItems },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterHealthReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterHealthReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoResponseBody extends $tea.Model {
  clusterNetworkType?: string;
  requestId?: string;
  items?: DescribeDBClusterNetInfoResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      clusterNetworkType: 'ClusterNetworkType',
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNetworkType: 'string',
      requestId: 'string',
      items: DescribeDBClusterNetInfoResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterNetInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterNetInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  key?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      key: 'Key',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      key: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  startTime?: string;
  DBClusterId?: string;
  performances?: DescribeDBClusterPerformanceResponseBodyPerformances[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      DBClusterId: 'DBClusterId',
      performances: 'Performances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      DBClusterId: 'string',
      performances: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterResourcePoolPerformanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  key?: string;
  resourcePools?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      key: 'Key',
      resourcePools: 'ResourcePools',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      key: 'string',
      resourcePools: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterResourcePoolPerformanceResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  startTime?: string;
  DBClusterId?: string;
  performances?: DescribeDBClusterResourcePoolPerformanceResponseBodyPerformances[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      DBClusterId: 'DBClusterId',
      performances: 'Performances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      DBClusterId: 'string',
      performances: { 'type': 'array', 'itemType': DescribeDBClusterResourcePoolPerformanceResponseBodyPerformances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterResourcePoolPerformanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterResourcePoolPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterResourcePoolPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  DBClusterIds?: string;
  DBClusterDescription?: string;
  DBClusterStatus?: string;
  pageSize?: number;
  pageNumber?: number;
  resourceGroupId?: string;
  tag?: DescribeDBClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      DBClusterIds: 'DBClusterIds',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterStatus: 'DBClusterStatus',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      resourceGroupId: 'ResourceGroupId',
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
      DBClusterIds: 'string',
      DBClusterDescription: 'string',
      DBClusterStatus: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDBClustersRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  items?: DescribeDBClustersResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      items: DescribeDBClustersResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourcePoolRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  poolName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      poolName: 'PoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      poolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourcePoolResponseBody extends $tea.Model {
  requestId?: string;
  poolsInfo?: DescribeDBResourcePoolResponseBodyPoolsInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      poolsInfo: 'PoolsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      poolsInfo: { 'type': 'array', 'itemType': DescribeDBResourcePoolResponseBodyPoolsInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourcePoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBResourcePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBResourcePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisDimensionsRequest extends $tea.Model {
  DBClusterId?: string;
  startTime?: string;
  endTime?: string;
  regionId?: string;
  queryCondition?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      regionId: 'RegionId',
      queryCondition: 'QueryCondition',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      startTime: 'string',
      endTime: 'string',
      regionId: 'string',
      queryCondition: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisDimensionsResponseBody extends $tea.Model {
  clientIps?: string[];
  resourceGroups?: string[];
  userNames?: string[];
  databases?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientIps: 'ClientIps',
      resourceGroups: 'ResourceGroups',
      userNames: 'UserNames',
      databases: 'Databases',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIps: { 'type': 'array', 'itemType': 'string' },
      resourceGroups: { 'type': 'array', 'itemType': 'string' },
      userNames: { 'type': 'array', 'itemType': 'string' },
      databases: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisDimensionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDiagnosisDimensionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDiagnosisDimensionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsRequest extends $tea.Model {
  DBClusterId?: string;
  startTime?: string;
  endTime?: string;
  regionId?: string;
  queryCondition?: string;
  keyword?: string;
  minPeakMemory?: number;
  maxPeakMemory?: number;
  minScanSize?: number;
  maxScanSize?: number;
  resourceGroup?: string;
  userName?: string;
  database?: string;
  clientIp?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  lang?: string;
  patternId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      regionId: 'RegionId',
      queryCondition: 'QueryCondition',
      keyword: 'Keyword',
      minPeakMemory: 'MinPeakMemory',
      maxPeakMemory: 'MaxPeakMemory',
      minScanSize: 'MinScanSize',
      maxScanSize: 'MaxScanSize',
      resourceGroup: 'ResourceGroup',
      userName: 'UserName',
      database: 'Database',
      clientIp: 'ClientIp',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      lang: 'Lang',
      patternId: 'PatternId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      startTime: 'string',
      endTime: 'string',
      regionId: 'string',
      queryCondition: 'string',
      keyword: 'string',
      minPeakMemory: 'number',
      maxPeakMemory: 'number',
      minScanSize: 'number',
      maxScanSize: 'number',
      resourceGroup: 'string',
      userName: 'string',
      database: 'string',
      clientIp: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      lang: 'string',
      patternId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  querys?: DescribeDiagnosisRecordsResponseBodyQuerys[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      querys: 'Querys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      querys: { 'type': 'array', 'itemType': DescribeDiagnosisRecordsResponseBodyQuerys },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDiagnosisRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDiagnosisRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSQLInfoRequest extends $tea.Model {
  DBClusterId?: string;
  regionId?: string;
  processId?: string;
  processStartTime?: number;
  processState?: string;
  lang?: string;
  processRcHost?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      processId: 'ProcessId',
      processStartTime: 'ProcessStartTime',
      processState: 'ProcessState',
      lang: 'Lang',
      processRcHost: 'ProcessRcHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      processId: 'string',
      processStartTime: 'number',
      processState: 'string',
      lang: 'string',
      processRcHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSQLInfoResponseBody extends $tea.Model {
  diagnosisSQLInfo?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosisSQLInfo: 'DiagnosisSQLInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosisSQLInfo: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSQLInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDiagnosisSQLInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDiagnosisSQLInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadRecordsRequest extends $tea.Model {
  DBClusterId?: string;
  regionId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      lang: 'string',
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
  headers: { [key: string]: string };
  body: DescribeDownloadRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDownloadRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticDailyPlanRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  elasticPlanName?: string;
  resourcePoolName?: string;
  elasticDailyPlanDay?: string;
  elasticDailyPlanStatusList?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
      resourcePoolName: 'ResourcePoolName',
      elasticDailyPlanDay: 'ElasticDailyPlanDay',
      elasticDailyPlanStatusList: 'ElasticDailyPlanStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      elasticPlanName: 'string',
      resourcePoolName: 'string',
      elasticDailyPlanDay: 'string',
      elasticDailyPlanStatusList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticDailyPlanResponseBody extends $tea.Model {
  requestId?: string;
  elasticDailyPlanList?: DescribeElasticDailyPlanResponseBodyElasticDailyPlanList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      elasticDailyPlanList: 'ElasticDailyPlanList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      elasticDailyPlanList: { 'type': 'array', 'itemType': DescribeElasticDailyPlanResponseBodyElasticDailyPlanList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticDailyPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeElasticDailyPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeElasticDailyPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  elasticPlanName?: string;
  resourcePoolName?: string;
  elasticPlanEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
      resourcePoolName: 'ResourcePoolName',
      elasticPlanEnable: 'ElasticPlanEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      elasticPlanName: 'string',
      resourcePoolName: 'string',
      elasticPlanEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanResponseBody extends $tea.Model {
  requestId?: string;
  elasticPlanList?: DescribeElasticPlanResponseBodyElasticPlanList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      elasticPlanList: 'ElasticPlanList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      elasticPlanList: { 'type': 'array', 'itemType': DescribeElasticPlanResponseBodyElasticPlanList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeElasticPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInclinedTablesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  tableType?: string;
  order?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      tableType: 'TableType',
      order: 'Order',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      tableType: 'string',
      order: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInclinedTablesResponseBody extends $tea.Model {
  pageSize?: string;
  requestId?: string;
  pageNumber?: string;
  totalCount?: string;
  items?: DescribeInclinedTablesResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'string',
      requestId: 'string',
      pageNumber: 'string',
      totalCount: 'string',
      items: DescribeInclinedTablesResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInclinedTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInclinedTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInclinedTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadTasksRecordsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  startTime?: string;
  endTime?: string;
  DBName?: string;
  pageSize?: number;
  pageNumber?: number;
  order?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      DBName: 'DBName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      order: 'Order',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      startTime: 'string',
      endTime: 'string',
      DBName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      order: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadTasksRecordsResponseBody extends $tea.Model {
  totalCount?: string;
  pageSize?: string;
  requestId?: string;
  pageNumber?: string;
  DBClusterId?: string;
  loadTasksRecords?: DescribeLoadTasksRecordsResponseBodyLoadTasksRecords[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      DBClusterId: 'DBClusterId',
      loadTasksRecords: 'LoadTasksRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'string',
      pageSize: 'string',
      requestId: 'string',
      pageNumber: 'string',
      DBClusterId: 'string',
      loadTasksRecords: { 'type': 'array', 'itemType': DescribeLoadTasksRecordsResponseBodyLoadTasksRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadTasksRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLoadTasksRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLoadTasksRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaintenanceActionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  region?: string;
  taskType?: string;
  isHistory?: number;
  pageSize?: number;
  pageNumber?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      region: 'Region',
      taskType: 'TaskType',
      isHistory: 'IsHistory',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      region: 'string',
      taskType: 'string',
      isHistory: 'number',
      pageSize: 'number',
      pageNumber: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaintenanceActionResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalRecordCount?: number;
  items?: DescribeMaintenanceActionResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalRecordCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeMaintenanceActionResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaintenanceActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMaintenanceActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMaintenanceActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOperatorPermissionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOperatorPermissionResponseBody extends $tea.Model {
  privileges?: string;
  DBClusterId?: string;
  requestId?: string;
  expiredTime?: string;
  createdTime?: string;
  static names(): { [key: string]: string } {
    return {
      privileges: 'Privileges',
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      expiredTime: 'ExpiredTime',
      createdTime: 'CreatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privileges: 'string',
      DBClusterId: 'string',
      requestId: 'string',
      expiredTime: 'string',
      createdTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOperatorPermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOperatorPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOperatorPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternPerformanceRequest extends $tea.Model {
  DBClusterId?: string;
  startTime?: string;
  endTime?: string;
  regionId?: string;
  patternId?: number;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      regionId: 'RegionId',
      patternId: 'PatternId',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      startTime: 'string',
      endTime: 'string',
      regionId: 'string',
      patternId: 'number',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternPerformanceResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  startTime?: string;
  performances?: DescribePatternPerformanceResponseBodyPerformances[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      performances: 'Performances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      performances: { 'type': 'array', 'itemType': DescribePatternPerformanceResponseBodyPerformances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternPerformanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePatternPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePatternPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  showFull?: boolean;
  runningTime?: number;
  user?: string;
  keyword?: string;
  order?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      showFull: 'ShowFull',
      runningTime: 'RunningTime',
      user: 'User',
      keyword: 'Keyword',
      order: 'Order',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      showFull: 'boolean',
      runningTime: 'number',
      user: 'string',
      keyword: 'string',
      order: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBody extends $tea.Model {
  pageSize?: string;
  requestId?: string;
  pageNumber?: string;
  totalCount?: string;
  items?: DescribeProcessListResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'string',
      requestId: 'string',
      pageNumber: 'string',
      totalCount: 'string',
      items: DescribeProcessListResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProcessListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProcessListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionsResponseBodyRegions,
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

export class DescribeSchemasRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchemasResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeSchemasResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: DescribeSchemasResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchemasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSchemasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSchemasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  startTime?: string;
  endTime?: string;
  DBName?: string;
  pageSize?: number;
  pageNumber?: number;
  processID?: string;
  order?: string;
  range?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      DBName: 'DBName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      processID: 'ProcessID',
      order: 'Order',
      range: 'Range',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      startTime: 'string',
      endTime: 'string',
      DBName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      processID: 'string',
      order: 'string',
      range: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBody extends $tea.Model {
  totalCount?: string;
  pageSize?: string;
  requestId?: string;
  pageNumber?: string;
  DBClusterId?: string;
  items?: DescribeSlowLogRecordsResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      DBClusterId: 'DBClusterId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'string',
      pageSize: 'string',
      requestId: 'string',
      pageNumber: 'string',
      DBClusterId: 'string',
      items: DescribeSlowLogRecordsResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSlowLogRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSlowLogRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  startTime?: string;
  endTime?: string;
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      startTime: 'string',
      endTime: 'string',
      DBName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBody extends $tea.Model {
  endTime?: string;
  startTime?: string;
  requestId?: string;
  DBClusterId?: string;
  items?: DescribeSlowLogTrendResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      requestId: 'RequestId',
      DBClusterId: 'DBClusterId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      requestId: 'string',
      DBClusterId: 'string',
      items: DescribeSlowLogTrendResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSlowLogTrendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSlowLogTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlPatternRequest extends $tea.Model {
  startTime?: string;
  order?: string;
  pageNumber?: number;
  sqlPattern?: string;
  type?: string;
  DBClusterId?: string;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      order: 'Order',
      pageNumber: 'PageNumber',
      sqlPattern: 'SqlPattern',
      type: 'Type',
      DBClusterId: 'DBClusterId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      order: 'string',
      pageNumber: 'number',
      sqlPattern: 'string',
      type: 'string',
      DBClusterId: 'string',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlPatternResponseBody extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  items?: DescribeSqlPatternResponseBodyItems[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeSqlPatternResponseBodyItems },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlPatternResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSqlPatternResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSqlPatternResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPatternAttributeRequest extends $tea.Model {
  DBClusterId?: string;
  startTime?: string;
  endTime?: string;
  regionId?: string;
  patternId?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      regionId: 'RegionId',
      patternId: 'PatternId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      startTime: 'string',
      endTime: 'string',
      regionId: 'string',
      patternId: 'number',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPatternAttributeResponseBody extends $tea.Model {
  patternDetail?: DescribeSQLPatternAttributeResponseBodyPatternDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patternDetail: 'PatternDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patternDetail: DescribeSQLPatternAttributeResponseBodyPatternDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPatternAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSQLPatternAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSQLPatternAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPatternsRequest extends $tea.Model {
  DBClusterId?: string;
  startTime?: string;
  endTime?: string;
  regionId?: string;
  keyword?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      regionId: 'RegionId',
      keyword: 'Keyword',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      startTime: 'string',
      endTime: 'string',
      regionId: 'string',
      keyword: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPatternsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  patternDetails?: DescribeSQLPatternsResponseBodyPatternDetails[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      patternDetails: 'PatternDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      patternDetails: { 'type': 'array', 'itemType': DescribeSQLPatternsResponseBodyPatternDetails },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPatternsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSQLPatternsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSQLPatternsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  processId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      processId: 'ProcessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      processId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanResponseBody extends $tea.Model {
  originInfo?: string;
  requestId?: string;
  detail?: DescribeSQLPlanResponseBodyDetail;
  stageList?: DescribeSQLPlanResponseBodyStageList[];
  static names(): { [key: string]: string } {
    return {
      originInfo: 'OriginInfo',
      requestId: 'RequestId',
      detail: 'Detail',
      stageList: 'StageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originInfo: 'string',
      requestId: 'string',
      detail: DescribeSQLPlanResponseBodyDetail,
      stageList: { 'type': 'array', 'itemType': DescribeSQLPlanResponseBodyStageList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSQLPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSQLPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  processId?: string;
  stageId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      processId: 'ProcessId',
      stageId: 'StageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      processId: 'string',
      stageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanTaskResponseBody extends $tea.Model {
  requestId?: string;
  taskList?: DescribeSQLPlanTaskResponseBodyTaskList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': DescribeSQLPlanTaskResponseBodyTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSQLPlanTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSQLPlanTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableAccessCountRequest extends $tea.Model {
  DBClusterId?: string;
  tableName?: string;
  startTime?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      tableName: 'TableName',
      startTime: 'StartTime',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      tableName: 'string',
      startTime: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableAccessCountResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  items?: DescribeTableAccessCountResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeTableAccessCountResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableAccessCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTableAccessCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTableAccessCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableDetailRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  schemaName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableDetailResponseBody extends $tea.Model {
  avgSize?: number;
  requestId?: string;
  items?: DescribeTableDetailResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      avgSize: 'AvgSize',
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgSize: 'number',
      requestId: 'string',
      items: DescribeTableDetailResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTableDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTableDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablePartitionDiagnoseRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  DBClusterId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      DBClusterId: 'DBClusterId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      DBClusterId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablePartitionDiagnoseResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  DBClusterId?: string;
  suggestMaxRecordsPerPartition?: number;
  suggestMinRecordsPerPartition?: number;
  items?: DescribeTablePartitionDiagnoseResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      DBClusterId: 'DBClusterId',
      suggestMaxRecordsPerPartition: 'SuggestMaxRecordsPerPartition',
      suggestMinRecordsPerPartition: 'SuggestMinRecordsPerPartition',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      DBClusterId: 'string',
      suggestMaxRecordsPerPartition: 'number',
      suggestMinRecordsPerPartition: 'number',
      items: { 'type': 'array', 'itemType': DescribeTablePartitionDiagnoseResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablePartitionDiagnoseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTablePartitionDiagnoseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTablePartitionDiagnoseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeTablesResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: DescribeTablesResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableStatisticsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  pageSize?: number;
  pageNumber?: number;
  order?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      order: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableStatisticsResponseBody extends $tea.Model {
  totalCount?: string;
  pageSize?: string;
  requestId?: string;
  pageNumber?: string;
  DBClusterId?: string;
  items?: DescribeTableStatisticsResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      DBClusterId: 'DBClusterId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'string',
      pageSize: 'string',
      requestId: 'string',
      pageNumber: 'string',
      DBClusterId: 'string',
      items: DescribeTableStatisticsResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTableStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTableStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoResponseBody extends $tea.Model {
  requestId?: string;
  taskInfo?: DescribeTaskInfoResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfo: DescribeTaskInfoResponseBodyTaskInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTaskInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTaskInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDiagnosisRecordsRequest extends $tea.Model {
  DBClusterId?: string;
  startTime?: string;
  endTime?: string;
  regionId?: string;
  queryCondition?: string;
  keyword?: string;
  minPeakMemory?: number;
  maxPeakMemory?: number;
  minScanSize?: number;
  maxScanSize?: number;
  resourceGroup?: string;
  userName?: string;
  database?: string;
  clientIp?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      regionId: 'RegionId',
      queryCondition: 'QueryCondition',
      keyword: 'Keyword',
      minPeakMemory: 'MinPeakMemory',
      maxPeakMemory: 'MaxPeakMemory',
      minScanSize: 'MinScanSize',
      maxScanSize: 'MaxScanSize',
      resourceGroup: 'ResourceGroup',
      userName: 'UserName',
      database: 'Database',
      clientIp: 'ClientIp',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      startTime: 'string',
      endTime: 'string',
      regionId: 'string',
      queryCondition: 'string',
      keyword: 'string',
      minPeakMemory: 'number',
      maxPeakMemory: 'number',
      minScanSize: 'number',
      maxScanSize: 'number',
      resourceGroup: 'string',
      userName: 'string',
      database: 'string',
      clientIp: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDiagnosisRecordsResponseBody extends $tea.Model {
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

export class DownloadDiagnosisRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DownloadDiagnosisRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DownloadDiagnosisRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantOperatorPermissionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  expiredTime?: string;
  privileges?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      expiredTime: 'ExpiredTime',
      privileges: 'Privileges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      expiredTime: 'string',
      privileges: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantOperatorPermissionResponseBody extends $tea.Model {
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

export class GrantOperatorPermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GrantOperatorPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GrantOperatorPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillProcessRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  processId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      processId: 'ProcessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      processId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillProcessResponseBody extends $tea.Model {
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

export class KillProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: KillProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: KillProcessResponseBody,
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
  regionId?: string;
  resourceType?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
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

export class ModifyAccountDescriptionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  accountName?: string;
  accountDescription?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      accountName: 'AccountName',
      accountDescription: 'AccountDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      accountName: 'string',
      accountDescription: 'string',
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
  headers: { [key: string]: string };
  body: ModifyAccountDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAccountDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAuditLogConfigRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  regionId?: string;
  auditLogStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      auditLogStatus: 'AuditLogStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      regionId: 'string',
      auditLogStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAuditLogConfigResponseBody extends $tea.Model {
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

export class ModifyAuditLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAuditLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAuditLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoRenewAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  regionId?: string;
  renewalStatus?: string;
  duration?: string;
  periodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
      duration: 'Duration',
      periodUnit: 'PeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      regionId: 'string',
      renewalStatus: 'string',
      duration: 'string',
      periodUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoRenewAttributeResponseBody extends $tea.Model {
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

export class ModifyAutoRenewAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAutoRenewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAutoRenewAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  preferredBackupTime?: string;
  preferredBackupPeriod?: string;
  backupRetentionPeriod?: string;
  enableBackupLog?: string;
  logBackupRetentionPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      preferredBackupTime: 'PreferredBackupTime',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      enableBackupLog: 'EnableBackupLog',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      preferredBackupTime: 'string',
      preferredBackupPeriod: 'string',
      backupRetentionPeriod: 'string',
      enableBackupLog: 'string',
      logBackupRetentionPeriod: 'number',
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
  headers: { [key: string]: string };
  body: ModifyBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterConnectionStringRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  connectionStringPrefix?: string;
  currentConnectionString?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      connectionStringPrefix: 'ConnectionStringPrefix',
      currentConnectionString: 'CurrentConnectionString',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      connectionStringPrefix: 'string',
      currentConnectionString: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterConnectionStringResponseBody extends $tea.Model {
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

export class ModifyClusterConnectionStringResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClusterConnectionStringResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClusterConnectionStringResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  DBNodeGroupCount?: string;
  DBNodeStorage?: string;
  DBNodeClass?: string;
  modifyType?: string;
  executorCount?: string;
  regionId?: string;
  storageResource?: string;
  computeResource?: string;
  elasticIOResource?: number;
  DBClusterCategory?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBNodeGroupCount: 'DBNodeGroupCount',
      DBNodeStorage: 'DBNodeStorage',
      DBNodeClass: 'DBNodeClass',
      modifyType: 'ModifyType',
      executorCount: 'ExecutorCount',
      regionId: 'RegionId',
      storageResource: 'StorageResource',
      computeResource: 'ComputeResource',
      elasticIOResource: 'ElasticIOResource',
      DBClusterCategory: 'DBClusterCategory',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      DBNodeGroupCount: 'string',
      DBNodeStorage: 'string',
      DBNodeClass: 'string',
      modifyType: 'string',
      executorCount: 'string',
      regionId: 'string',
      storageResource: 'string',
      computeResource: 'string',
      elasticIOResource: 'number',
      DBClusterCategory: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResponseBody extends $tea.Model {
  requestId?: string;
  DBClusterId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBClusterId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterAccessWhiteListRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  securityIps?: string;
  DBClusterIPArrayName?: string;
  DBClusterIPArrayAttribute?: string;
  modifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      securityIps: 'SecurityIps',
      DBClusterIPArrayName: 'DBClusterIPArrayName',
      DBClusterIPArrayAttribute: 'DBClusterIPArrayAttribute',
      modifyMode: 'ModifyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      securityIps: 'string',
      DBClusterIPArrayName: 'string',
      DBClusterIPArrayAttribute: 'string',
      modifyMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterAccessWhiteListResponseBody extends $tea.Model {
  requestId?: string;
  DBClusterId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBClusterId: 'DBClusterId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBClusterId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterAccessWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBClusterAccessWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterAccessWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterDescriptionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  DBClusterDescription?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBClusterDescription: 'DBClusterDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      DBClusterDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterDescriptionResponseBody extends $tea.Model {
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

export class ModifyDBClusterDescriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBClusterDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterMaintainTimeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  maintainTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      maintainTime: 'MaintainTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      maintainTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterMaintainTimeResponseBody extends $tea.Model {
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

export class ModifyDBClusterMaintainTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBClusterMaintainTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterMaintainTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResourceGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  newResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      newResourceGroupId: 'NewResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      newResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResourceGroupResponseBody extends $tea.Model {
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

export class ModifyDBClusterResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBClusterResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBResourcePoolRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  poolName?: string;
  queryType?: string;
  nodeNum?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      poolName: 'PoolName',
      queryType: 'QueryType',
      nodeNum: 'NodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      poolName: 'string',
      queryType: 'string',
      nodeNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBResourcePoolResponseBody extends $tea.Model {
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

export class ModifyDBResourcePoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBResourcePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBResourcePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticPlanRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  elasticPlanName?: string;
  resourcePoolName?: string;
  elasticPlanNodeNum?: number;
  elasticPlanTimeStart?: string;
  elasticPlanTimeEnd?: string;
  elasticPlanWeeklyRepeat?: string;
  elasticPlanStartDay?: string;
  elasticPlanEndDay?: string;
  elasticPlanEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
      resourcePoolName: 'ResourcePoolName',
      elasticPlanNodeNum: 'ElasticPlanNodeNum',
      elasticPlanTimeStart: 'ElasticPlanTimeStart',
      elasticPlanTimeEnd: 'ElasticPlanTimeEnd',
      elasticPlanWeeklyRepeat: 'ElasticPlanWeeklyRepeat',
      elasticPlanStartDay: 'ElasticPlanStartDay',
      elasticPlanEndDay: 'ElasticPlanEndDay',
      elasticPlanEnable: 'ElasticPlanEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      elasticPlanName: 'string',
      resourcePoolName: 'string',
      elasticPlanNodeNum: 'number',
      elasticPlanTimeStart: 'string',
      elasticPlanTimeEnd: 'string',
      elasticPlanWeeklyRepeat: 'string',
      elasticPlanStartDay: 'string',
      elasticPlanEndDay: 'string',
      elasticPlanEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticPlanResponseBody extends $tea.Model {
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

export class ModifyElasticPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyElasticPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogBackupPolicyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  enableBackupLog?: string;
  logBackupRetentionPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      enableBackupLog: 'EnableBackupLog',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      enableBackupLog: 'string',
      logBackupRetentionPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogBackupPolicyResponseBody extends $tea.Model {
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

export class ModifyLogBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyLogBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyLogBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMaintenanceActionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  ids?: string;
  switchTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      ids: 'Ids',
      switchTime: 'SwitchTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      ids: 'string',
      switchTime: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMaintenanceActionResponseBody extends $tea.Model {
  ids?: string;
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

export class ModifyMaintenanceActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyMaintenanceActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyMaintenanceActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterPublicConnectionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterPublicConnectionResponseBody extends $tea.Model {
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

export class ReleaseClusterPublicConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseClusterPublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseClusterPublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  accountName?: string;
  accountPassword?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponseBody extends $tea.Model {
  requestId?: string;
  DBClusterId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBClusterId: 'DBClusterId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBClusterId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetAccountPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeOperatorPermissionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeOperatorPermissionResponseBody extends $tea.Model {
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

export class RevokeOperatorPermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RevokeOperatorPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RevokeOperatorPermissionResponseBody,
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
  regionId?: string;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
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

export class UnbindDBResourcePoolWithUserRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  poolName?: string;
  poolUser?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      poolName: 'PoolName',
      poolUser: 'PoolUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      poolName: 'string',
      poolUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDBResourcePoolWithUserResponseBody extends $tea.Model {
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

export class UnbindDBResourcePoolWithUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindDBResourcePoolWithUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindDBResourcePoolWithUserResponseBody,
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
  regionId?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
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

export class DescribeAccountsResponseBodyAccountListDBAccount extends $tea.Model {
  accountDescription?: string;
  accountType?: string;
  accountStatus?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountType: 'AccountType',
      accountStatus: 'AccountStatus',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountType: 'string',
      accountStatus: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountList extends $tea.Model {
  DBAccount?: DescribeAccountsResponseBodyAccountListDBAccount[];
  static names(): { [key: string]: string } {
    return {
      DBAccount: 'DBAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBAccount: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountListDBAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllAccountsResponseBodyAccountList extends $tea.Model {
  user?: string;
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceResponseBodySchemasSchema extends $tea.Model {
  schemaName?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      schemaName: 'SchemaName',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemaName: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceResponseBodySchemas extends $tea.Model {
  schema?: DescribeAllDataSourceResponseBodySchemasSchema[];
  static names(): { [key: string]: string } {
    return {
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schema: { 'type': 'array', 'itemType': DescribeAllDataSourceResponseBodySchemasSchema },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceResponseBodyTablesTable extends $tea.Model {
  schemaName?: string;
  tableName?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      schemaName: 'SchemaName',
      tableName: 'TableName',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemaName: 'string',
      tableName: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceResponseBodyTables extends $tea.Model {
  table?: DescribeAllDataSourceResponseBodyTablesTable[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': DescribeAllDataSourceResponseBodyTablesTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceResponseBodyColumnsColumn extends $tea.Model {
  type?: string;
  columnName?: string;
  tableName?: string;
  autoIncrementColumn?: boolean;
  DBClusterId?: string;
  primaryKey?: boolean;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      columnName: 'ColumnName',
      tableName: 'TableName',
      autoIncrementColumn: 'AutoIncrementColumn',
      DBClusterId: 'DBClusterId',
      primaryKey: 'PrimaryKey',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      columnName: 'string',
      tableName: 'string',
      autoIncrementColumn: 'boolean',
      DBClusterId: 'string',
      primaryKey: 'boolean',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceResponseBodyColumns extends $tea.Model {
  column?: DescribeAllDataSourceResponseBodyColumnsColumn[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: { 'type': 'array', 'itemType': DescribeAllDataSourceResponseBodyColumnsColumn },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogRecordsResponseBodyItems extends $tea.Model {
  hostAddress?: string;
  succeed?: string;
  SQLText?: string;
  totalTime?: string;
  connId?: string;
  DBName?: string;
  SQLType?: string;
  executeTime?: string;
  processID?: string;
  static names(): { [key: string]: string } {
    return {
      hostAddress: 'HostAddress',
      succeed: 'Succeed',
      SQLText: 'SQLText',
      totalTime: 'TotalTime',
      connId: 'ConnId',
      DBName: 'DBName',
      SQLType: 'SQLType',
      executeTime: 'ExecuteTime',
      processID: 'ProcessID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAddress: 'string',
      succeed: 'string',
      SQLText: 'string',
      totalTime: 'string',
      connId: 'string',
      DBName: 'string',
      SQLType: 'string',
      executeTime: 'string',
      processID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute extends $tea.Model {
  DBClusterId?: string;
  periodUnit?: string;
  duration?: number;
  renewalStatus?: string;
  autoRenewEnabled?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      periodUnit: 'PeriodUnit',
      duration: 'Duration',
      renewalStatus: 'RenewalStatus',
      autoRenewEnabled: 'AutoRenewEnabled',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      periodUnit: 'string',
      duration: 'number',
      renewalStatus: 'string',
      autoRenewEnabled: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeResponseBodyItems extends $tea.Model {
  autoRenewAttribute?: DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute[];
  static names(): { [key: string]: string } {
    return {
      autoRenewAttribute: 'AutoRenewAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewAttribute: { 'type': 'array', 'itemType': DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResourceSupportedElasticIOResource extends $tea.Model {
  step?: string;
  minCount?: string;
  maxCount?: string;
  static names(): { [key: string]: string } {
    return {
      step: 'Step',
      minCount: 'MinCount',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      step: 'string',
      minCount: 'string',
      maxCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResource extends $tea.Model {
  storageType?: string;
  supportedComputeResource?: string[];
  supportedStorageResource?: string[];
  supportedElasticIOResource?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResourceSupportedElasticIOResource;
  static names(): { [key: string]: string } {
    return {
      storageType: 'StorageType',
      supportedComputeResource: 'SupportedComputeResource',
      supportedStorageResource: 'SupportedStorageResource',
      supportedElasticIOResource: 'SupportedElasticIOResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageType: 'string',
      supportedComputeResource: { 'type': 'array', 'itemType': 'string' },
      supportedStorageResource: { 'type': 'array', 'itemType': 'string' },
      supportedElasticIOResource: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResourceSupportedElasticIOResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountListNodeCount extends $tea.Model {
  step?: string;
  minCount?: string;
  maxCount?: string;
  static names(): { [key: string]: string } {
    return {
      step: 'Step',
      minCount: 'MinCount',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      step: 'string',
      minCount: 'string',
      maxCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountList extends $tea.Model {
  storageSize?: string[];
  nodeCount?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountListNodeCount;
  static names(): { [key: string]: string } {
    return {
      storageSize: 'StorageSize',
      nodeCount: 'NodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageSize: { 'type': 'array', 'itemType': 'string' },
      nodeCount: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountListNodeCount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorListNodeCount extends $tea.Model {
  step?: string;
  minCount?: string;
  maxCount?: string;
  static names(): { [key: string]: string } {
    return {
      step: 'Step',
      minCount: 'MinCount',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      step: 'string',
      minCount: 'string',
      maxCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorList extends $tea.Model {
  nodeCount?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorListNodeCount;
  static names(): { [key: string]: string } {
    return {
      nodeCount: 'NodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeCount: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorListNodeCount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassList extends $tea.Model {
  instanceClass?: string;
  tips?: string;
  supportedNodeCountList?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountList[];
  supportedExecutorList?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorList[];
  static names(): { [key: string]: string } {
    return {
      instanceClass: 'InstanceClass',
      tips: 'Tips',
      supportedNodeCountList: 'SupportedNodeCountList',
      supportedExecutorList: 'SupportedExecutorList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClass: 'string',
      tips: 'string',
      supportedNodeCountList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountList },
      supportedExecutorList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialList extends $tea.Model {
  serial?: string;
  supportedFlexibleResource?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResource[];
  supportedInstanceClassList?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassList[];
  static names(): { [key: string]: string } {
    return {
      serial: 'Serial',
      supportedFlexibleResource: 'SupportedFlexibleResource',
      supportedInstanceClassList: 'SupportedInstanceClassList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serial: 'string',
      supportedFlexibleResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResource },
      supportedInstanceClassList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedMode extends $tea.Model {
  mode?: string;
  supportedSerialList?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialList[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      supportedSerialList: 'SupportedSerialList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      supportedSerialList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneList extends $tea.Model {
  zoneId?: string;
  supportedMode?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedMode[];
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      supportedMode: 'SupportedMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      supportedMode: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedMode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyItemsBackup extends $tea.Model {
  DBClusterId?: string;
  backupType?: string;
  backupStartTime?: string;
  backupSize?: number;
  backupEndTime?: string;
  backupId?: string;
  backupMethod?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      backupType: 'BackupType',
      backupStartTime: 'BackupStartTime',
      backupSize: 'BackupSize',
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      backupType: 'string',
      backupStartTime: 'string',
      backupSize: 'number',
      backupEndTime: 'string',
      backupId: 'string',
      backupMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyItems extends $tea.Model {
  backup?: DescribeBackupsResponseBodyItemsBackup[];
  static names(): { [key: string]: string } {
    return {
      backup: 'Backup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backup: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyItemsBackup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponseBodyItemsColumn extends $tea.Model {
  type?: string;
  columnName?: string;
  tableName?: string;
  autoIncrementColumn?: boolean;
  DBClusterId?: string;
  primaryKey?: boolean;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      columnName: 'ColumnName',
      tableName: 'TableName',
      autoIncrementColumn: 'AutoIncrementColumn',
      DBClusterId: 'DBClusterId',
      primaryKey: 'PrimaryKey',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      columnName: 'string',
      tableName: 'string',
      autoIncrementColumn: 'boolean',
      DBClusterId: 'string',
      primaryKey: 'boolean',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponseBodyItems extends $tea.Model {
  column?: DescribeColumnsResponseBodyItemsColumn[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: { 'type': 'array', 'itemType': DescribeColumnsResponseBodyItemsColumn },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionCountRecordsResponseBodyAccessIpRecords extends $tea.Model {
  accessIp?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      accessIp: 'AccessIp',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIp: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionCountRecordsResponseBodyUserRecords extends $tea.Model {
  user?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      user: 'User',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhiteListResponseBodyItemsIPArray extends $tea.Model {
  DBClusterIPArrayName?: string;
  DBClusterIPArrayAttribute?: string;
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterIPArrayName: 'DBClusterIPArrayName',
      DBClusterIPArrayAttribute: 'DBClusterIPArrayAttribute',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIPArrayName: 'string',
      DBClusterIPArrayAttribute: 'string',
      securityIPList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhiteListResponseBodyItems extends $tea.Model {
  IPArray?: DescribeDBClusterAccessWhiteListResponseBodyItemsIPArray[];
  static names(): { [key: string]: string } {
    return {
      IPArray: 'IPArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPArray: { 'type': 'array', 'itemType': DescribeDBClusterAccessWhiteListResponseBodyItemsIPArray },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyItemsDBClusterTagsTag extends $tea.Model {
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

export class DescribeDBClusterAttributeResponseBodyItemsDBClusterTags extends $tea.Model {
  tag?: DescribeDBClusterAttributeResponseBodyItemsDBClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyItemsDBClusterTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyItemsDBCluster extends $tea.Model {
  creationTime?: string;
  enableSpark?: boolean;
  dtsJobId?: string;
  DBNodeCount?: number;
  expired?: string;
  maintainTime?: string;
  payType?: string;
  diskType?: string;
  tags?: DescribeDBClusterAttributeResponseBodyItemsDBClusterTags;
  mode?: string;
  port?: number;
  lockMode?: string;
  engineVersion?: string;
  enableAirflow?: boolean;
  executorCount?: string;
  storageResource?: string;
  DBClusterId?: string;
  connectionString?: string;
  rdsInstanceId?: string;
  DBClusterType?: string;
  commodityCode?: string;
  expireTime?: string;
  DBNodeStorage?: number;
  DBNodeClass?: string;
  lockReason?: string;
  VPCId?: string;
  computeResource?: string;
  regionId?: string;
  elasticIOResource?: number;
  vSwitchId?: string;
  DBVersion?: string;
  VPCCloudInstanceId?: string;
  DBClusterStatus?: string;
  resourceGroupId?: string;
  DBClusterNetworkType?: string;
  DBClusterDescription?: string;
  userENIStatus?: boolean;
  zoneId?: string;
  category?: string;
  engine?: string;
  kmsId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      enableSpark: 'EnableSpark',
      dtsJobId: 'DtsJobId',
      DBNodeCount: 'DBNodeCount',
      expired: 'Expired',
      maintainTime: 'MaintainTime',
      payType: 'PayType',
      diskType: 'DiskType',
      tags: 'Tags',
      mode: 'Mode',
      port: 'Port',
      lockMode: 'LockMode',
      engineVersion: 'EngineVersion',
      enableAirflow: 'EnableAirflow',
      executorCount: 'ExecutorCount',
      storageResource: 'StorageResource',
      DBClusterId: 'DBClusterId',
      connectionString: 'ConnectionString',
      rdsInstanceId: 'RdsInstanceId',
      DBClusterType: 'DBClusterType',
      commodityCode: 'CommodityCode',
      expireTime: 'ExpireTime',
      DBNodeStorage: 'DBNodeStorage',
      DBNodeClass: 'DBNodeClass',
      lockReason: 'LockReason',
      VPCId: 'VPCId',
      computeResource: 'ComputeResource',
      regionId: 'RegionId',
      elasticIOResource: 'ElasticIOResource',
      vSwitchId: 'VSwitchId',
      DBVersion: 'DBVersion',
      VPCCloudInstanceId: 'VPCCloudInstanceId',
      DBClusterStatus: 'DBClusterStatus',
      resourceGroupId: 'ResourceGroupId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterDescription: 'DBClusterDescription',
      userENIStatus: 'UserENIStatus',
      zoneId: 'ZoneId',
      category: 'Category',
      engine: 'Engine',
      kmsId: 'KmsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      enableSpark: 'boolean',
      dtsJobId: 'string',
      DBNodeCount: 'number',
      expired: 'string',
      maintainTime: 'string',
      payType: 'string',
      diskType: 'string',
      tags: DescribeDBClusterAttributeResponseBodyItemsDBClusterTags,
      mode: 'string',
      port: 'number',
      lockMode: 'string',
      engineVersion: 'string',
      enableAirflow: 'boolean',
      executorCount: 'string',
      storageResource: 'string',
      DBClusterId: 'string',
      connectionString: 'string',
      rdsInstanceId: 'string',
      DBClusterType: 'string',
      commodityCode: 'string',
      expireTime: 'string',
      DBNodeStorage: 'number',
      DBNodeClass: 'string',
      lockReason: 'string',
      VPCId: 'string',
      computeResource: 'string',
      regionId: 'string',
      elasticIOResource: 'number',
      vSwitchId: 'string',
      DBVersion: 'string',
      VPCCloudInstanceId: 'string',
      DBClusterStatus: 'string',
      resourceGroupId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterDescription: 'string',
      userENIStatus: 'boolean',
      zoneId: 'string',
      category: 'string',
      engine: 'string',
      kmsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyItems extends $tea.Model {
  DBCluster?: DescribeDBClusterAttributeResponseBodyItemsDBCluster[];
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyItemsDBCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterForecastResponseBodyPerformancesSeries extends $tea.Model {
  name?: string;
  values?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterForecastResponseBodyPerformances extends $tea.Model {
  key?: string;
  unit?: string;
  series?: DescribeDBClusterForecastResponseBodyPerformancesSeries[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      unit: 'Unit',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      unit: 'string',
      series: { 'type': 'array', 'itemType': DescribeDBClusterForecastResponseBodyPerformancesSeries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthReportResponseBodyItems extends $tea.Model {
  key?: string;
  max?: string;
  name?: string;
  avg?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      max: 'Max',
      name: 'Name',
      avg: 'Avg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      max: 'string',
      name: 'string',
      avg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoResponseBodyItemsAddress extends $tea.Model {
  vSwitchId?: string;
  connectionString?: string;
  netType?: string;
  port?: string;
  VPCId?: string;
  IPAddress?: string;
  connectionStringPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      connectionString: 'ConnectionString',
      netType: 'NetType',
      port: 'Port',
      VPCId: 'VPCId',
      IPAddress: 'IPAddress',
      connectionStringPrefix: 'ConnectionStringPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      connectionString: 'string',
      netType: 'string',
      port: 'string',
      VPCId: 'string',
      IPAddress: 'string',
      connectionStringPrefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoResponseBodyItems extends $tea.Model {
  address?: DescribeDBClusterNetInfoResponseBodyItemsAddress[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: { 'type': 'array', 'itemType': DescribeDBClusterNetInfoResponseBodyItemsAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformancesSeries extends $tea.Model {
  values?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformances extends $tea.Model {
  key?: string;
  unit?: string;
  series?: DescribeDBClusterPerformanceResponseBodyPerformancesSeries[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      unit: 'Unit',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      unit: 'string',
      series: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformancesSeries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformancesResourcePoolSeries extends $tea.Model {
  values?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformances extends $tea.Model {
  resourcePoolName?: string;
  resourcePoolSeries?: DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformancesResourcePoolSeries[];
  static names(): { [key: string]: string } {
    return {
      resourcePoolName: 'ResourcePoolName',
      resourcePoolSeries: 'ResourcePoolSeries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePoolName: 'string',
      resourcePoolSeries: { 'type': 'array', 'itemType': DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformancesResourcePoolSeries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterResourcePoolPerformanceResponseBodyPerformances extends $tea.Model {
  key?: string;
  unit?: string;
  resourcePoolPerformances?: DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformances[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      unit: 'Unit',
      resourcePoolPerformances: 'ResourcePoolPerformances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      unit: 'string',
      resourcePoolPerformances: { 'type': 'array', 'itemType': DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersRequestTag extends $tea.Model {
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

export class DescribeDBClustersResponseBodyItemsDBClusterTagsTag extends $tea.Model {
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

export class DescribeDBClustersResponseBodyItemsDBClusterTags extends $tea.Model {
  tag?: DescribeDBClustersResponseBodyItemsDBClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBClusterTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItemsDBCluster extends $tea.Model {
  dtsJobId?: string;
  DBNodeCount?: number;
  expired?: string;
  createTime?: string;
  payType?: string;
  diskType?: string;
  tags?: DescribeDBClustersResponseBodyItemsDBClusterTags;
  mode?: string;
  port?: string;
  lockMode?: string;
  storageResource?: string;
  executorCount?: string;
  DBClusterId?: string;
  connectionString?: string;
  rdsInstanceId?: string;
  DBClusterType?: string;
  commodityCode?: string;
  expireTime?: string;
  DBNodeStorage?: number;
  DBNodeClass?: string;
  lockReason?: string;
  VPCId?: string;
  regionId?: string;
  computeResource?: string;
  elasticIOResource?: number;
  vSwitchId?: string;
  DBVersion?: string;
  VPCCloudInstanceId?: string;
  DBClusterStatus?: string;
  resourceGroupId?: string;
  DBClusterNetworkType?: string;
  DBClusterDescription?: string;
  zoneId?: string;
  category?: string;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      DBNodeCount: 'DBNodeCount',
      expired: 'Expired',
      createTime: 'CreateTime',
      payType: 'PayType',
      diskType: 'DiskType',
      tags: 'Tags',
      mode: 'Mode',
      port: 'Port',
      lockMode: 'LockMode',
      storageResource: 'StorageResource',
      executorCount: 'ExecutorCount',
      DBClusterId: 'DBClusterId',
      connectionString: 'ConnectionString',
      rdsInstanceId: 'RdsInstanceId',
      DBClusterType: 'DBClusterType',
      commodityCode: 'CommodityCode',
      expireTime: 'ExpireTime',
      DBNodeStorage: 'DBNodeStorage',
      DBNodeClass: 'DBNodeClass',
      lockReason: 'LockReason',
      VPCId: 'VPCId',
      regionId: 'RegionId',
      computeResource: 'ComputeResource',
      elasticIOResource: 'ElasticIOResource',
      vSwitchId: 'VSwitchId',
      DBVersion: 'DBVersion',
      VPCCloudInstanceId: 'VPCCloudInstanceId',
      DBClusterStatus: 'DBClusterStatus',
      resourceGroupId: 'ResourceGroupId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterDescription: 'DBClusterDescription',
      zoneId: 'ZoneId',
      category: 'Category',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      DBNodeCount: 'number',
      expired: 'string',
      createTime: 'string',
      payType: 'string',
      diskType: 'string',
      tags: DescribeDBClustersResponseBodyItemsDBClusterTags,
      mode: 'string',
      port: 'string',
      lockMode: 'string',
      storageResource: 'string',
      executorCount: 'string',
      DBClusterId: 'string',
      connectionString: 'string',
      rdsInstanceId: 'string',
      DBClusterType: 'string',
      commodityCode: 'string',
      expireTime: 'string',
      DBNodeStorage: 'number',
      DBNodeClass: 'string',
      lockReason: 'string',
      VPCId: 'string',
      regionId: 'string',
      computeResource: 'string',
      elasticIOResource: 'number',
      vSwitchId: 'string',
      DBVersion: 'string',
      VPCCloudInstanceId: 'string',
      DBClusterStatus: 'string',
      resourceGroupId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterDescription: 'string',
      zoneId: 'string',
      category: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItems extends $tea.Model {
  DBCluster?: DescribeDBClustersResponseBodyItemsDBCluster[];
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourcePoolResponseBodyPoolsInfo extends $tea.Model {
  queryType?: string;
  updateTime?: string;
  poolName?: string;
  createTime?: string;
  poolUsers?: string;
  nodeNum?: number;
  static names(): { [key: string]: string } {
    return {
      queryType: 'QueryType',
      updateTime: 'UpdateTime',
      poolName: 'PoolName',
      createTime: 'CreateTime',
      poolUsers: 'PoolUsers',
      nodeNum: 'NodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryType: 'string',
      updateTime: 'string',
      poolName: 'string',
      createTime: 'string',
      poolUsers: 'string',
      nodeNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsResponseBodyQuerys extends $tea.Model {
  SQL?: string;
  SQLTruncatedThreshold?: number;
  status?: string;
  outputDataSize?: number;
  cost?: number;
  outputRows?: number;
  rcHost?: string;
  scanSize?: number;
  processId?: string;
  startTime?: number;
  SQLTruncated?: boolean;
  database?: string;
  scanRows?: number;
  resourceCostRank?: number;
  clientIp?: string;
  peakMemory?: number;
  queueTime?: number;
  resourceGroup?: string;
  userName?: string;
  executionTime?: number;
  totalPlanningTime?: number;
  etlWriteRows?: number;
  totalStages?: number;
  static names(): { [key: string]: string } {
    return {
      SQL: 'SQL',
      SQLTruncatedThreshold: 'SQLTruncatedThreshold',
      status: 'Status',
      outputDataSize: 'OutputDataSize',
      cost: 'Cost',
      outputRows: 'OutputRows',
      rcHost: 'RcHost',
      scanSize: 'ScanSize',
      processId: 'ProcessId',
      startTime: 'StartTime',
      SQLTruncated: 'SQLTruncated',
      database: 'Database',
      scanRows: 'ScanRows',
      resourceCostRank: 'ResourceCostRank',
      clientIp: 'ClientIp',
      peakMemory: 'PeakMemory',
      queueTime: 'QueueTime',
      resourceGroup: 'ResourceGroup',
      userName: 'UserName',
      executionTime: 'ExecutionTime',
      totalPlanningTime: 'TotalPlanningTime',
      etlWriteRows: 'EtlWriteRows',
      totalStages: 'TotalStages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQL: 'string',
      SQLTruncatedThreshold: 'number',
      status: 'string',
      outputDataSize: 'number',
      cost: 'number',
      outputRows: 'number',
      rcHost: 'string',
      scanSize: 'number',
      processId: 'string',
      startTime: 'number',
      SQLTruncated: 'boolean',
      database: 'string',
      scanRows: 'number',
      resourceCostRank: 'number',
      clientIp: 'string',
      peakMemory: 'number',
      queueTime: 'number',
      resourceGroup: 'string',
      userName: 'string',
      executionTime: 'number',
      totalPlanningTime: 'number',
      etlWriteRows: 'number',
      totalStages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadRecordsResponseBodyRecords extends $tea.Model {
  status?: string;
  downloadId?: number;
  exceptionMsg?: string;
  url?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      downloadId: 'DownloadId',
      exceptionMsg: 'ExceptionMsg',
      url: 'Url',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      downloadId: 'number',
      exceptionMsg: 'string',
      url: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticDailyPlanResponseBodyElasticDailyPlanList extends $tea.Model {
  status?: number;
  day?: string;
  resourcePoolName?: string;
  startTs?: string;
  planEndTs?: string;
  planStartTs?: string;
  elasticNodeNum?: number;
  endTs?: string;
  planName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      day: 'Day',
      resourcePoolName: 'ResourcePoolName',
      startTs: 'StartTs',
      planEndTs: 'PlanEndTs',
      planStartTs: 'PlanStartTs',
      elasticNodeNum: 'ElasticNodeNum',
      endTs: 'EndTs',
      planName: 'PlanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      day: 'string',
      resourcePoolName: 'string',
      startTs: 'string',
      planEndTs: 'string',
      planStartTs: 'string',
      elasticNodeNum: 'number',
      endTs: 'string',
      planName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanResponseBodyElasticPlanList extends $tea.Model {
  endTime?: string;
  weeklyRepeat?: string;
  startTime?: string;
  resourcePoolName?: string;
  startDay?: string;
  elasticNodeNum?: number;
  enable?: boolean;
  endDay?: string;
  planName?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      weeklyRepeat: 'WeeklyRepeat',
      startTime: 'StartTime',
      resourcePoolName: 'ResourcePoolName',
      startDay: 'StartDay',
      elasticNodeNum: 'ElasticNodeNum',
      enable: 'Enable',
      endDay: 'EndDay',
      planName: 'PlanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      weeklyRepeat: 'string',
      startTime: 'string',
      resourcePoolName: 'string',
      startDay: 'string',
      elasticNodeNum: 'number',
      enable: 'boolean',
      endDay: 'string',
      planName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInclinedTablesResponseBodyItemsTable extends $tea.Model {
  type?: string;
  name?: string;
  schema?: string;
  isIncline?: boolean;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      name: 'Name',
      schema: 'Schema',
      isIncline: 'IsIncline',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      name: 'string',
      schema: 'string',
      isIncline: 'boolean',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInclinedTablesResponseBodyItems extends $tea.Model {
  table?: DescribeInclinedTablesResponseBodyItemsTable[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': DescribeInclinedTablesResponseBodyItemsTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadTasksRecordsResponseBodyLoadTasksRecords extends $tea.Model {
  sql?: string;
  state?: string;
  createTime?: string;
  DBName?: string;
  processID?: string;
  updateTime?: string;
  jobName?: string;
  processRows?: number;
  static names(): { [key: string]: string } {
    return {
      sql: 'Sql',
      state: 'State',
      createTime: 'CreateTime',
      DBName: 'DBName',
      processID: 'ProcessID',
      updateTime: 'UpdateTime',
      jobName: 'JobName',
      processRows: 'ProcessRows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sql: 'string',
      state: 'string',
      createTime: 'string',
      DBName: 'string',
      processID: 'string',
      updateTime: 'string',
      jobName: 'string',
      processRows: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaintenanceActionResponseBodyItems extends $tea.Model {
  status?: string;
  deadline?: string;
  prepareInterval?: string;
  DBType?: string;
  startTime?: string;
  taskType?: string;
  DBVersion?: string;
  DBClusterId?: string;
  modifiedTime?: string;
  region?: string;
  resultInfo?: string;
  createdTime?: string;
  id?: number;
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      deadline: 'Deadline',
      prepareInterval: 'PrepareInterval',
      DBType: 'DBType',
      startTime: 'StartTime',
      taskType: 'TaskType',
      DBVersion: 'DBVersion',
      DBClusterId: 'DBClusterId',
      modifiedTime: 'ModifiedTime',
      region: 'Region',
      resultInfo: 'ResultInfo',
      createdTime: 'CreatedTime',
      id: 'Id',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      deadline: 'string',
      prepareInterval: 'string',
      DBType: 'string',
      startTime: 'string',
      taskType: 'string',
      DBVersion: 'string',
      DBClusterId: 'string',
      modifiedTime: 'string',
      region: 'string',
      resultInfo: 'string',
      createdTime: 'string',
      id: 'number',
      switchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternPerformanceResponseBodyPerformancesSeries extends $tea.Model {
  values?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternPerformanceResponseBodyPerformances extends $tea.Model {
  key?: string;
  unit?: string;
  series?: DescribePatternPerformanceResponseBodyPerformancesSeries[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      unit: 'Unit',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      unit: 'string',
      series: { 'type': 'array', 'itemType': DescribePatternPerformanceResponseBodyPerformancesSeries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBodyItemsProcess extends $tea.Model {
  startTime?: string;
  time?: number;
  processId?: string;
  host?: string;
  DB?: string;
  command?: string;
  user?: string;
  id?: number;
  info?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      time: 'Time',
      processId: 'ProcessId',
      host: 'Host',
      DB: 'DB',
      command: 'Command',
      user: 'User',
      id: 'Id',
      info: 'Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      time: 'number',
      processId: 'string',
      host: 'string',
      DB: 'string',
      command: 'string',
      user: 'string',
      id: 'number',
      info: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBodyItems extends $tea.Model {
  process?: DescribeProcessListResponseBodyItemsProcess[];
  static names(): { [key: string]: string } {
    return {
      process: 'Process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      process: { 'type': 'array', 'itemType': DescribeProcessListResponseBodyItemsProcess },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegionZonesZone extends $tea.Model {
  zoneId?: string;
  vpcEnabled?: boolean;
  localName?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      vpcEnabled: 'VpcEnabled',
      localName: 'LocalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      vpcEnabled: 'boolean',
      localName: 'string',
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
  regionEndpoint?: string;
  localName?: string;
  regionId?: string;
  zones?: DescribeRegionsResponseBodyRegionsRegionZones;
  static names(): { [key: string]: string } {
    return {
      regionEndpoint: 'RegionEndpoint',
      localName: 'LocalName',
      regionId: 'RegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEndpoint: 'string',
      localName: 'string',
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

export class DescribeSchemasResponseBodyItemsSchema extends $tea.Model {
  schemaName?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      schemaName: 'SchemaName',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemaName: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchemasResponseBodyItems extends $tea.Model {
  schema?: DescribeSchemasResponseBodyItemsSchema[];
  static names(): { [key: string]: string } {
    return {
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schema: { 'type': 'array', 'itemType': DescribeSchemasResponseBodyItemsSchema },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodyItemsSlowLogRecord extends $tea.Model {
  hostAddress?: string;
  scanTime?: number;
  SQLText?: string;
  outputSize?: string;
  peakMemoryUsage?: string;
  state?: string;
  wallTime?: number;
  scanSize?: string;
  executionStartTime?: string;
  queryTime?: number;
  returnRowCounts?: number;
  scanRows?: number;
  parseRowCounts?: number;
  DBName?: string;
  planningTime?: number;
  queueTime?: number;
  userName?: string;
  processID?: string;
  static names(): { [key: string]: string } {
    return {
      hostAddress: 'HostAddress',
      scanTime: 'ScanTime',
      SQLText: 'SQLText',
      outputSize: 'OutputSize',
      peakMemoryUsage: 'PeakMemoryUsage',
      state: 'State',
      wallTime: 'WallTime',
      scanSize: 'ScanSize',
      executionStartTime: 'ExecutionStartTime',
      queryTime: 'QueryTime',
      returnRowCounts: 'ReturnRowCounts',
      scanRows: 'ScanRows',
      parseRowCounts: 'ParseRowCounts',
      DBName: 'DBName',
      planningTime: 'PlanningTime',
      queueTime: 'QueueTime',
      userName: 'UserName',
      processID: 'ProcessID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAddress: 'string',
      scanTime: 'number',
      SQLText: 'string',
      outputSize: 'string',
      peakMemoryUsage: 'string',
      state: 'string',
      wallTime: 'number',
      scanSize: 'string',
      executionStartTime: 'string',
      queryTime: 'number',
      returnRowCounts: 'number',
      scanRows: 'number',
      parseRowCounts: 'number',
      DBName: 'string',
      planningTime: 'number',
      queueTime: 'number',
      userName: 'string',
      processID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodyItems extends $tea.Model {
  slowLogRecord?: DescribeSlowLogRecordsResponseBodyItemsSlowLogRecord[];
  static names(): { [key: string]: string } {
    return {
      slowLogRecord: 'SlowLogRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slowLogRecord: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyItemsSlowLogRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBodyItemsSlowLogTrendItemSeriesSeriesItem extends $tea.Model {
  name?: string;
  values?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBodyItemsSlowLogTrendItemSeries extends $tea.Model {
  seriesItem?: DescribeSlowLogTrendResponseBodyItemsSlowLogTrendItemSeriesSeriesItem[];
  static names(): { [key: string]: string } {
    return {
      seriesItem: 'SeriesItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      seriesItem: { 'type': 'array', 'itemType': DescribeSlowLogTrendResponseBodyItemsSlowLogTrendItemSeriesSeriesItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBodyItemsSlowLogTrendItem extends $tea.Model {
  key?: string;
  unit?: string;
  series?: DescribeSlowLogTrendResponseBodyItemsSlowLogTrendItemSeries;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      unit: 'Unit',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      unit: 'string',
      series: DescribeSlowLogTrendResponseBodyItemsSlowLogTrendItemSeries,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBodyItems extends $tea.Model {
  slowLogTrendItem?: DescribeSlowLogTrendResponseBodyItemsSlowLogTrendItem[];
  static names(): { [key: string]: string } {
    return {
      slowLogTrendItem: 'SlowLogTrendItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slowLogTrendItem: { 'type': 'array', 'itemType': DescribeSlowLogTrendResponseBodyItemsSlowLogTrendItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlPatternResponseBodyItems extends $tea.Model {
  avgStageCount?: string;
  maxCpuTime?: string;
  accessIP?: string;
  avgScanSize?: string;
  maxScanSize?: string;
  maxPeakMemory?: string;
  avgCpuTime?: string;
  user?: string;
  avgPeakMemory?: string;
  maxStageCount?: string;
  maxTaskCount?: string;
  instanceName?: string;
  queryCount?: string;
  reportDate?: string;
  pattern?: string;
  avgTaskCount?: string;
  static names(): { [key: string]: string } {
    return {
      avgStageCount: 'AvgStageCount',
      maxCpuTime: 'MaxCpuTime',
      accessIP: 'AccessIP',
      avgScanSize: 'AvgScanSize',
      maxScanSize: 'MaxScanSize',
      maxPeakMemory: 'MaxPeakMemory',
      avgCpuTime: 'AvgCpuTime',
      user: 'User',
      avgPeakMemory: 'AvgPeakMemory',
      maxStageCount: 'MaxStageCount',
      maxTaskCount: 'MaxTaskCount',
      instanceName: 'InstanceName',
      queryCount: 'QueryCount',
      reportDate: 'ReportDate',
      pattern: 'Pattern',
      avgTaskCount: 'AvgTaskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgStageCount: 'string',
      maxCpuTime: 'string',
      accessIP: 'string',
      avgScanSize: 'string',
      maxScanSize: 'string',
      maxPeakMemory: 'string',
      avgCpuTime: 'string',
      user: 'string',
      avgPeakMemory: 'string',
      maxStageCount: 'string',
      maxTaskCount: 'string',
      instanceName: 'string',
      queryCount: 'string',
      reportDate: 'string',
      pattern: 'string',
      avgTaskCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPatternAttributeResponseBodyPatternDetail extends $tea.Model {
  SQLPattern?: string;
  queryCount?: number;
  totalQueryTime?: string;
  averageQueryTime?: string;
  averageMemory?: string;
  static names(): { [key: string]: string } {
    return {
      SQLPattern: 'SQLPattern',
      queryCount: 'QueryCount',
      totalQueryTime: 'TotalQueryTime',
      averageQueryTime: 'AverageQueryTime',
      averageMemory: 'AverageMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLPattern: 'string',
      queryCount: 'number',
      totalQueryTime: 'string',
      averageQueryTime: 'string',
      averageMemory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPatternsResponseBodyPatternDetails extends $tea.Model {
  SQLPattern?: string;
  patternId?: string;
  tables?: string;
  patternCreationDate?: string;
  totalQueryTime?: string;
  averageQueryTime?: string;
  queryTimePercentage?: string;
  averageMemory?: string;
  totalScanSize?: string;
  scanSizePercentage?: string;
  queryCount?: number;
  errorCount?: number;
  blockable?: boolean;
  static names(): { [key: string]: string } {
    return {
      SQLPattern: 'SQLPattern',
      patternId: 'PatternId',
      tables: 'Tables',
      patternCreationDate: 'PatternCreationDate',
      totalQueryTime: 'TotalQueryTime',
      averageQueryTime: 'AverageQueryTime',
      queryTimePercentage: 'QueryTimePercentage',
      averageMemory: 'AverageMemory',
      totalScanSize: 'TotalScanSize',
      scanSizePercentage: 'ScanSizePercentage',
      queryCount: 'QueryCount',
      errorCount: 'ErrorCount',
      blockable: 'Blockable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLPattern: 'string',
      patternId: 'string',
      tables: 'string',
      patternCreationDate: 'string',
      totalQueryTime: 'string',
      averageQueryTime: 'string',
      queryTimePercentage: 'string',
      averageMemory: 'string',
      totalScanSize: 'string',
      scanSizePercentage: 'string',
      queryCount: 'number',
      errorCount: 'number',
      blockable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanResponseBodyDetail extends $tea.Model {
  SQL?: string;
  outputSize?: number;
  state?: string;
  outputRows?: number;
  user?: string;
  startTime?: string;
  totalStage?: number;
  totalTime?: number;
  queuedTime?: number;
  database?: string;
  totalTask?: number;
  peakMemory?: number;
  clientIP?: string;
  planningTime?: number;
  CPUTime?: number;
  static names(): { [key: string]: string } {
    return {
      SQL: 'SQL',
      outputSize: 'OutputSize',
      state: 'State',
      outputRows: 'OutputRows',
      user: 'User',
      startTime: 'StartTime',
      totalStage: 'TotalStage',
      totalTime: 'TotalTime',
      queuedTime: 'QueuedTime',
      database: 'Database',
      totalTask: 'TotalTask',
      peakMemory: 'PeakMemory',
      clientIP: 'ClientIP',
      planningTime: 'PlanningTime',
      CPUTime: 'CPUTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQL: 'string',
      outputSize: 'number',
      state: 'string',
      outputRows: 'number',
      user: 'string',
      startTime: 'string',
      totalStage: 'number',
      totalTime: 'number',
      queuedTime: 'number',
      database: 'string',
      totalTask: 'number',
      peakMemory: 'number',
      clientIP: 'string',
      planningTime: 'number',
      CPUTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanResponseBodyStageList extends $tea.Model {
  state?: string;
  CPUTimeMax?: number;
  CPUTimeAvg?: number;
  operatorCost?: number;
  scanTimeMax?: number;
  stageId?: number;
  inputSizeMax?: number;
  scanSizeMax?: number;
  CPUTimeMin?: number;
  scanTimeMin?: number;
  scanSizeMin?: number;
  inputSizeMin?: number;
  peakMemory?: number;
  scanTimeAvg?: number;
  scanSizeAvg?: number;
  inputSizeAvg?: number;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      CPUTimeMax: 'CPUTimeMax',
      CPUTimeAvg: 'CPUTimeAvg',
      operatorCost: 'OperatorCost',
      scanTimeMax: 'ScanTimeMax',
      stageId: 'StageId',
      inputSizeMax: 'InputSizeMax',
      scanSizeMax: 'ScanSizeMax',
      CPUTimeMin: 'CPUTimeMin',
      scanTimeMin: 'ScanTimeMin',
      scanSizeMin: 'ScanSizeMin',
      inputSizeMin: 'InputSizeMin',
      peakMemory: 'PeakMemory',
      scanTimeAvg: 'ScanTimeAvg',
      scanSizeAvg: 'ScanSizeAvg',
      inputSizeAvg: 'InputSizeAvg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      CPUTimeMax: 'number',
      CPUTimeAvg: 'number',
      operatorCost: 'number',
      scanTimeMax: 'number',
      stageId: 'number',
      inputSizeMax: 'number',
      scanSizeMax: 'number',
      CPUTimeMin: 'number',
      scanTimeMin: 'number',
      scanSizeMin: 'number',
      inputSizeMin: 'number',
      peakMemory: 'number',
      scanTimeAvg: 'number',
      scanSizeAvg: 'number',
      inputSizeAvg: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanTaskResponseBodyTaskList extends $tea.Model {
  outputSize?: number;
  scanCost?: number;
  inputSize?: number;
  state?: string;
  operatorCost?: number;
  outputRows?: number;
  scanSize?: number;
  elapsedTime?: number;
  scanRows?: number;
  peakMemory?: number;
  taskId?: number;
  inputRows?: number;
  static names(): { [key: string]: string } {
    return {
      outputSize: 'OutputSize',
      scanCost: 'ScanCost',
      inputSize: 'InputSize',
      state: 'State',
      operatorCost: 'OperatorCost',
      outputRows: 'OutputRows',
      scanSize: 'ScanSize',
      elapsedTime: 'ElapsedTime',
      scanRows: 'ScanRows',
      peakMemory: 'PeakMemory',
      taskId: 'TaskId',
      inputRows: 'InputRows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputSize: 'number',
      scanCost: 'number',
      inputSize: 'number',
      state: 'string',
      operatorCost: 'number',
      outputRows: 'number',
      scanSize: 'number',
      elapsedTime: 'number',
      scanRows: 'number',
      peakMemory: 'number',
      taskId: 'number',
      inputRows: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableAccessCountResponseBodyItems extends $tea.Model {
  reportDate?: string;
  tableSchema?: string;
  accessCount?: string;
  tableName?: string;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      reportDate: 'ReportDate',
      tableSchema: 'TableSchema',
      accessCount: 'AccessCount',
      tableName: 'TableName',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportDate: 'string',
      tableSchema: 'string',
      accessCount: 'string',
      tableName: 'string',
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableDetailResponseBodyItemsShard extends $tea.Model {
  size?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableDetailResponseBodyItems extends $tea.Model {
  shard?: DescribeTableDetailResponseBodyItemsShard[];
  static names(): { [key: string]: string } {
    return {
      shard: 'Shard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shard: { 'type': 'array', 'itemType': DescribeTableDetailResponseBodyItemsShard },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablePartitionDiagnoseResponseBodyItems extends $tea.Model {
  tableName?: string;
  partitionDetail?: string;
  schemaName?: string;
  partitionNumber?: number;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      partitionDetail: 'PartitionDetail',
      schemaName: 'SchemaName',
      partitionNumber: 'PartitionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      partitionDetail: 'string',
      schemaName: 'string',
      partitionNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBodyItemsTable extends $tea.Model {
  schemaName?: string;
  tableName?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      schemaName: 'SchemaName',
      tableName: 'TableName',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemaName: 'string',
      tableName: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBodyItems extends $tea.Model {
  table?: DescribeTablesResponseBodyItemsTable[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': DescribeTablesResponseBodyItemsTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableStatisticsResponseBodyItemsTableStatisticRecords extends $tea.Model {
  schemaName?: string;
  tableName?: string;
  rowCount?: number;
  dataSize?: number;
  indexSize?: number;
  primaryKeyIndexSize?: number;
  partitionCount?: number;
  coldDataSize?: number;
  static names(): { [key: string]: string } {
    return {
      schemaName: 'SchemaName',
      tableName: 'TableName',
      rowCount: 'RowCount',
      dataSize: 'DataSize',
      indexSize: 'IndexSize',
      primaryKeyIndexSize: 'PrimaryKeyIndexSize',
      partitionCount: 'PartitionCount',
      coldDataSize: 'ColdDataSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemaName: 'string',
      tableName: 'string',
      rowCount: 'number',
      dataSize: 'number',
      indexSize: 'number',
      primaryKeyIndexSize: 'number',
      partitionCount: 'number',
      coldDataSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableStatisticsResponseBodyItems extends $tea.Model {
  tableStatisticRecords?: DescribeTableStatisticsResponseBodyItemsTableStatisticRecords[];
  static names(): { [key: string]: string } {
    return {
      tableStatisticRecords: 'TableStatisticRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableStatisticRecords: { 'type': 'array', 'itemType': DescribeTableStatisticsResponseBodyItemsTableStatisticRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoResponseBodyTaskInfo extends $tea.Model {
  status?: string;
  finishTime?: string;
  progress?: string;
  taskId?: number;
  beginTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      finishTime: 'FinishTime',
      progress: 'Progress',
      taskId: 'TaskId',
      beginTime: 'BeginTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      finishTime: 'string',
      progress: 'string',
      taskId: 'number',
      beginTime: 'string',
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
      'cn-qingdao': "adb.aliyuncs.com",
      'cn-beijing': "adb.aliyuncs.com",
      'cn-hangzhou': "adb.aliyuncs.com",
      'cn-shanghai': "adb.aliyuncs.com",
      'cn-shenzhen': "adb.aliyuncs.com",
      'cn-hongkong': "adb.aliyuncs.com",
      'ap-southeast-1': "adb.aliyuncs.com",
      'us-west-1': "adb.aliyuncs.com",
      'us-east-1': "adb.aliyuncs.com",
      'cn-hangzhou-finance': "adb.aliyuncs.com",
      'cn-north-2-gov-1': "adb.aliyuncs.com",
      'ap-northeast-2-pop': "adb.ap-northeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "adb.aliyuncs.com",
      'cn-beijing-finance-pop': "adb.aliyuncs.com",
      'cn-beijing-gov-1': "adb.aliyuncs.com",
      'cn-beijing-nu16-b01': "adb.aliyuncs.com",
      'cn-edge-1': "adb.aliyuncs.com",
      'cn-fujian': "adb.aliyuncs.com",
      'cn-haidian-cm12-c01': "adb.aliyuncs.com",
      'cn-hangzhou-bj-b01': "adb.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "adb.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "adb.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "adb.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "adb.aliyuncs.com",
      'cn-hangzhou-test-306': "adb.aliyuncs.com",
      'cn-hongkong-finance-pop': "adb.aliyuncs.com",
      'cn-qingdao-nebula': "adb.aliyuncs.com",
      'cn-shanghai-et15-b01': "adb.aliyuncs.com",
      'cn-shanghai-et2-b01': "adb.aliyuncs.com",
      'cn-shanghai-finance-1': "adb.aliyuncs.com",
      'cn-shanghai-inner': "adb.aliyuncs.com",
      'cn-shanghai-internal-test-1': "adb.aliyuncs.com",
      'cn-shenzhen-finance-1': "adb.aliyuncs.com",
      'cn-shenzhen-inner': "adb.aliyuncs.com",
      'cn-shenzhen-st4-d01': "adb.aliyuncs.com",
      'cn-shenzhen-su18-b01': "adb.aliyuncs.com",
      'cn-wuhan': "adb.aliyuncs.com",
      'cn-yushanfang': "adb.aliyuncs.com",
      'cn-zhangbei-na61-b01': "adb.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "adb.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "adb.aliyuncs.com",
      'eu-west-1-oxs': "adb.ap-northeast-1.aliyuncs.com",
      'me-east-1': "adb.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "adb.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("adb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async allocateClusterPublicConnectionWithOptions(request: AllocateClusterPublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<AllocateClusterPublicConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocateClusterPublicConnectionResponse>(await this.doRPCRequest("AllocateClusterPublicConnection", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new AllocateClusterPublicConnectionResponse({}));
  }

  async allocateClusterPublicConnection(request: AllocateClusterPublicConnectionRequest): Promise<AllocateClusterPublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateClusterPublicConnectionWithOptions(request, runtime);
  }

  async bindDBResourcePoolWithUserWithOptions(request: BindDBResourcePoolWithUserRequest, runtime: $Util.RuntimeOptions): Promise<BindDBResourcePoolWithUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindDBResourcePoolWithUserResponse>(await this.doRPCRequest("BindDBResourcePoolWithUser", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new BindDBResourcePoolWithUserResponse({}));
  }

  async bindDBResourcePoolWithUser(request: BindDBResourcePoolWithUserRequest): Promise<BindDBResourcePoolWithUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindDBResourcePoolWithUserWithOptions(request, runtime);
  }

  async createAccountWithOptions(request: CreateAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAccountResponse>(await this.doRPCRequest("CreateAccount", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAccountResponse({}));
  }

  async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  async createDBClusterWithOptions(request: CreateDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDBClusterResponse>(await this.doRPCRequest("CreateDBCluster", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDBClusterResponse({}));
  }

  async createDBCluster(request: CreateDBClusterRequest): Promise<CreateDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBClusterWithOptions(request, runtime);
  }

  async createDBResourcePoolWithOptions(request: CreateDBResourcePoolRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBResourcePoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDBResourcePoolResponse>(await this.doRPCRequest("CreateDBResourcePool", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDBResourcePoolResponse({}));
  }

  async createDBResourcePool(request: CreateDBResourcePoolRequest): Promise<CreateDBResourcePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBResourcePoolWithOptions(request, runtime);
  }

  async createElasticPlanWithOptions(request: CreateElasticPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateElasticPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateElasticPlanResponse>(await this.doRPCRequest("CreateElasticPlan", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateElasticPlanResponse({}));
  }

  async createElasticPlan(request: CreateElasticPlanRequest): Promise<CreateElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createElasticPlanWithOptions(request, runtime);
  }

  async deleteAccountWithOptions(request: DeleteAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAccountResponse>(await this.doRPCRequest("DeleteAccount", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAccountResponse({}));
  }

  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  async deleteDBClusterWithOptions(request: DeleteDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDBClusterResponse>(await this.doRPCRequest("DeleteDBCluster", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDBClusterResponse({}));
  }

  async deleteDBCluster(request: DeleteDBClusterRequest): Promise<DeleteDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBClusterWithOptions(request, runtime);
  }

  async deleteDBResourcePoolWithOptions(request: DeleteDBResourcePoolRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBResourcePoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDBResourcePoolResponse>(await this.doRPCRequest("DeleteDBResourcePool", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDBResourcePoolResponse({}));
  }

  async deleteDBResourcePool(request: DeleteDBResourcePoolRequest): Promise<DeleteDBResourcePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBResourcePoolWithOptions(request, runtime);
  }

  async deleteElasticPlanWithOptions(request: DeleteElasticPlanRequest, runtime: $Util.RuntimeOptions): Promise<DeleteElasticPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteElasticPlanResponse>(await this.doRPCRequest("DeleteElasticPlan", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteElasticPlanResponse({}));
  }

  async deleteElasticPlan(request: DeleteElasticPlanRequest): Promise<DeleteElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteElasticPlanWithOptions(request, runtime);
  }

  async describeAccountsWithOptions(request: DescribeAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccountsResponse>(await this.doRPCRequest("DescribeAccounts", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccountsResponse({}));
  }

  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  async describeAllAccountsWithOptions(request: DescribeAllAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllAccountsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAllAccountsResponse>(await this.doRPCRequest("DescribeAllAccounts", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAllAccountsResponse({}));
  }

  async describeAllAccounts(request: DescribeAllAccountsRequest): Promise<DescribeAllAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllAccountsWithOptions(request, runtime);
  }

  async describeAllDataSourceWithOptions(request: DescribeAllDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllDataSourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAllDataSourceResponse>(await this.doRPCRequest("DescribeAllDataSource", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAllDataSourceResponse({}));
  }

  async describeAllDataSource(request: DescribeAllDataSourceRequest): Promise<DescribeAllDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllDataSourceWithOptions(request, runtime);
  }

  async describeAuditLogConfigWithOptions(request: DescribeAuditLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuditLogConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAuditLogConfigResponse>(await this.doRPCRequest("DescribeAuditLogConfig", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAuditLogConfigResponse({}));
  }

  async describeAuditLogConfig(request: DescribeAuditLogConfigRequest): Promise<DescribeAuditLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditLogConfigWithOptions(request, runtime);
  }

  async describeAuditLogRecordsWithOptions(request: DescribeAuditLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuditLogRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAuditLogRecordsResponse>(await this.doRPCRequest("DescribeAuditLogRecords", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAuditLogRecordsResponse({}));
  }

  async describeAuditLogRecords(request: DescribeAuditLogRecordsRequest): Promise<DescribeAuditLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditLogRecordsWithOptions(request, runtime);
  }

  async describeAutoRenewAttributeWithOptions(request: DescribeAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoRenewAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAutoRenewAttributeResponse>(await this.doRPCRequest("DescribeAutoRenewAttribute", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAutoRenewAttributeResponse({}));
  }

  async describeAutoRenewAttribute(request: DescribeAutoRenewAttributeRequest): Promise<DescribeAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoRenewAttributeWithOptions(request, runtime);
  }

  async describeAvailableResourceWithOptions(request: DescribeAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAvailableResourceResponse>(await this.doRPCRequest("DescribeAvailableResource", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableResourceResponse({}));
  }

  async describeAvailableResource(request: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupPolicyResponse>(await this.doRPCRequest("DescribeBackupPolicy", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupPolicyResponse({}));
  }

  async describeBackupPolicy(request: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  async describeBackupsWithOptions(request: DescribeBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupsResponse>(await this.doRPCRequest("DescribeBackups", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupsResponse({}));
  }

  async describeBackups(request: DescribeBackupsRequest): Promise<DescribeBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  async describeColumnsWithOptions(request: DescribeColumnsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeColumnsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeColumnsResponse>(await this.doRPCRequest("DescribeColumns", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeColumnsResponse({}));
  }

  async describeColumns(request: DescribeColumnsRequest): Promise<DescribeColumnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeColumnsWithOptions(request, runtime);
  }

  async describeConnectionCountRecordsWithOptions(request: DescribeConnectionCountRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConnectionCountRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeConnectionCountRecordsResponse>(await this.doRPCRequest("DescribeConnectionCountRecords", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeConnectionCountRecordsResponse({}));
  }

  async describeConnectionCountRecords(request: DescribeConnectionCountRecordsRequest): Promise<DescribeConnectionCountRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConnectionCountRecordsWithOptions(request, runtime);
  }

  async describeDBClusterAccessWhiteListWithOptions(request: DescribeDBClusterAccessWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterAccessWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterAccessWhiteListResponse>(await this.doRPCRequest("DescribeDBClusterAccessWhiteList", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterAccessWhiteListResponse({}));
  }

  async describeDBClusterAccessWhiteList(request: DescribeDBClusterAccessWhiteListRequest): Promise<DescribeDBClusterAccessWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterAccessWhiteListWithOptions(request, runtime);
  }

  async describeDBClusterAttributeWithOptions(request: DescribeDBClusterAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterAttributeResponse>(await this.doRPCRequest("DescribeDBClusterAttribute", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterAttributeResponse({}));
  }

  async describeDBClusterAttribute(request: DescribeDBClusterAttributeRequest): Promise<DescribeDBClusterAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterAttributeWithOptions(request, runtime);
  }

  async describeDBClusterForecastWithOptions(request: DescribeDBClusterForecastRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterForecastResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterForecastResponse>(await this.doRPCRequest("DescribeDBClusterForecast", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterForecastResponse({}));
  }

  async describeDBClusterForecast(request: DescribeDBClusterForecastRequest): Promise<DescribeDBClusterForecastResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterForecastWithOptions(request, runtime);
  }

  async describeDBClusterHealthReportWithOptions(request: DescribeDBClusterHealthReportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterHealthReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterHealthReportResponse>(await this.doRPCRequest("DescribeDBClusterHealthReport", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterHealthReportResponse({}));
  }

  async describeDBClusterHealthReport(request: DescribeDBClusterHealthReportRequest): Promise<DescribeDBClusterHealthReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterHealthReportWithOptions(request, runtime);
  }

  async describeDBClusterNetInfoWithOptions(request: DescribeDBClusterNetInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterNetInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterNetInfoResponse>(await this.doRPCRequest("DescribeDBClusterNetInfo", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterNetInfoResponse({}));
  }

  async describeDBClusterNetInfo(request: DescribeDBClusterNetInfoRequest): Promise<DescribeDBClusterNetInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterNetInfoWithOptions(request, runtime);
  }

  async describeDBClusterPerformanceWithOptions(request: DescribeDBClusterPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterPerformanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterPerformanceResponse>(await this.doRPCRequest("DescribeDBClusterPerformance", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterPerformanceResponse({}));
  }

  async describeDBClusterPerformance(request: DescribeDBClusterPerformanceRequest): Promise<DescribeDBClusterPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterPerformanceWithOptions(request, runtime);
  }

  async describeDBClusterResourcePoolPerformanceWithOptions(request: DescribeDBClusterResourcePoolPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterResourcePoolPerformanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterResourcePoolPerformanceResponse>(await this.doRPCRequest("DescribeDBClusterResourcePoolPerformance", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterResourcePoolPerformanceResponse({}));
  }

  async describeDBClusterResourcePoolPerformance(request: DescribeDBClusterResourcePoolPerformanceRequest): Promise<DescribeDBClusterResourcePoolPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterResourcePoolPerformanceWithOptions(request, runtime);
  }

  async describeDBClustersWithOptions(request: DescribeDBClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClustersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClustersResponse>(await this.doRPCRequest("DescribeDBClusters", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClustersResponse({}));
  }

  async describeDBClusters(request: DescribeDBClustersRequest): Promise<DescribeDBClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClustersWithOptions(request, runtime);
  }

  async describeDBResourcePoolWithOptions(request: DescribeDBResourcePoolRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBResourcePoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBResourcePoolResponse>(await this.doRPCRequest("DescribeDBResourcePool", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBResourcePoolResponse({}));
  }

  async describeDBResourcePool(request: DescribeDBResourcePoolRequest): Promise<DescribeDBResourcePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBResourcePoolWithOptions(request, runtime);
  }

  async describeDiagnosisDimensionsWithOptions(request: DescribeDiagnosisDimensionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosisDimensionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDiagnosisDimensionsResponse>(await this.doRPCRequest("DescribeDiagnosisDimensions", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDiagnosisDimensionsResponse({}));
  }

  async describeDiagnosisDimensions(request: DescribeDiagnosisDimensionsRequest): Promise<DescribeDiagnosisDimensionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisDimensionsWithOptions(request, runtime);
  }

  async describeDiagnosisRecordsWithOptions(request: DescribeDiagnosisRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosisRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDiagnosisRecordsResponse>(await this.doRPCRequest("DescribeDiagnosisRecords", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDiagnosisRecordsResponse({}));
  }

  async describeDiagnosisRecords(request: DescribeDiagnosisRecordsRequest): Promise<DescribeDiagnosisRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisRecordsWithOptions(request, runtime);
  }

  async describeDiagnosisSQLInfoWithOptions(request: DescribeDiagnosisSQLInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosisSQLInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDiagnosisSQLInfoResponse>(await this.doRPCRequest("DescribeDiagnosisSQLInfo", "2019-03-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDiagnosisSQLInfoResponse({}));
  }

  async describeDiagnosisSQLInfo(request: DescribeDiagnosisSQLInfoRequest): Promise<DescribeDiagnosisSQLInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisSQLInfoWithOptions(request, runtime);
  }

  async describeDownloadRecordsWithOptions(request: DescribeDownloadRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDownloadRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDownloadRecordsResponse>(await this.doRPCRequest("DescribeDownloadRecords", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDownloadRecordsResponse({}));
  }

  async describeDownloadRecords(request: DescribeDownloadRecordsRequest): Promise<DescribeDownloadRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDownloadRecordsWithOptions(request, runtime);
  }

  async describeElasticDailyPlanWithOptions(request: DescribeElasticDailyPlanRequest, runtime: $Util.RuntimeOptions): Promise<DescribeElasticDailyPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeElasticDailyPlanResponse>(await this.doRPCRequest("DescribeElasticDailyPlan", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeElasticDailyPlanResponse({}));
  }

  async describeElasticDailyPlan(request: DescribeElasticDailyPlanRequest): Promise<DescribeElasticDailyPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticDailyPlanWithOptions(request, runtime);
  }

  async describeElasticPlanWithOptions(request: DescribeElasticPlanRequest, runtime: $Util.RuntimeOptions): Promise<DescribeElasticPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeElasticPlanResponse>(await this.doRPCRequest("DescribeElasticPlan", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeElasticPlanResponse({}));
  }

  async describeElasticPlan(request: DescribeElasticPlanRequest): Promise<DescribeElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticPlanWithOptions(request, runtime);
  }

  async describeInclinedTablesWithOptions(request: DescribeInclinedTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInclinedTablesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInclinedTablesResponse>(await this.doRPCRequest("DescribeInclinedTables", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInclinedTablesResponse({}));
  }

  async describeInclinedTables(request: DescribeInclinedTablesRequest): Promise<DescribeInclinedTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInclinedTablesWithOptions(request, runtime);
  }

  async describeLoadTasksRecordsWithOptions(request: DescribeLoadTasksRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadTasksRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLoadTasksRecordsResponse>(await this.doRPCRequest("DescribeLoadTasksRecords", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLoadTasksRecordsResponse({}));
  }

  async describeLoadTasksRecords(request: DescribeLoadTasksRecordsRequest): Promise<DescribeLoadTasksRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadTasksRecordsWithOptions(request, runtime);
  }

  async describeMaintenanceActionWithOptions(request: DescribeMaintenanceActionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMaintenanceActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMaintenanceActionResponse>(await this.doRPCRequest("DescribeMaintenanceAction", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMaintenanceActionResponse({}));
  }

  async describeMaintenanceAction(request: DescribeMaintenanceActionRequest): Promise<DescribeMaintenanceActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMaintenanceActionWithOptions(request, runtime);
  }

  async describeOperatorPermissionWithOptions(request: DescribeOperatorPermissionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOperatorPermissionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOperatorPermissionResponse>(await this.doRPCRequest("DescribeOperatorPermission", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOperatorPermissionResponse({}));
  }

  async describeOperatorPermission(request: DescribeOperatorPermissionRequest): Promise<DescribeOperatorPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOperatorPermissionWithOptions(request, runtime);
  }

  async describePatternPerformanceWithOptions(request: DescribePatternPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribePatternPerformanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePatternPerformanceResponse>(await this.doRPCRequest("DescribePatternPerformance", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePatternPerformanceResponse({}));
  }

  async describePatternPerformance(request: DescribePatternPerformanceRequest): Promise<DescribePatternPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePatternPerformanceWithOptions(request, runtime);
  }

  async describeProcessListWithOptions(request: DescribeProcessListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProcessListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeProcessListResponse>(await this.doRPCRequest("DescribeProcessList", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeProcessListResponse({}));
  }

  async describeProcessList(request: DescribeProcessListRequest): Promise<DescribeProcessListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProcessListWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeSchemasWithOptions(request: DescribeSchemasRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSchemasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSchemasResponse>(await this.doRPCRequest("DescribeSchemas", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSchemasResponse({}));
  }

  async describeSchemas(request: DescribeSchemasRequest): Promise<DescribeSchemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSchemasWithOptions(request, runtime);
  }

  async describeSlowLogRecordsWithOptions(request: DescribeSlowLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowLogRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSlowLogRecordsResponse>(await this.doRPCRequest("DescribeSlowLogRecords", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSlowLogRecordsResponse({}));
  }

  async describeSlowLogRecords(request: DescribeSlowLogRecordsRequest): Promise<DescribeSlowLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  async describeSlowLogTrendWithOptions(request: DescribeSlowLogTrendRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowLogTrendResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSlowLogTrendResponse>(await this.doRPCRequest("DescribeSlowLogTrend", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSlowLogTrendResponse({}));
  }

  async describeSlowLogTrend(request: DescribeSlowLogTrendRequest): Promise<DescribeSlowLogTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowLogTrendWithOptions(request, runtime);
  }

  async describeSqlPatternWithOptions(request: DescribeSqlPatternRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSqlPatternResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSqlPatternResponse>(await this.doRPCRequest("DescribeSqlPattern", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSqlPatternResponse({}));
  }

  async describeSqlPattern(request: DescribeSqlPatternRequest): Promise<DescribeSqlPatternResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSqlPatternWithOptions(request, runtime);
  }

  async describeSQLPatternAttributeWithOptions(request: DescribeSQLPatternAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLPatternAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSQLPatternAttributeResponse>(await this.doRPCRequest("DescribeSQLPatternAttribute", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSQLPatternAttributeResponse({}));
  }

  async describeSQLPatternAttribute(request: DescribeSQLPatternAttributeRequest): Promise<DescribeSQLPatternAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLPatternAttributeWithOptions(request, runtime);
  }

  async describeSQLPatternsWithOptions(request: DescribeSQLPatternsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLPatternsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSQLPatternsResponse>(await this.doRPCRequest("DescribeSQLPatterns", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSQLPatternsResponse({}));
  }

  async describeSQLPatterns(request: DescribeSQLPatternsRequest): Promise<DescribeSQLPatternsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLPatternsWithOptions(request, runtime);
  }

  async describeSQLPlanWithOptions(request: DescribeSQLPlanRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSQLPlanResponse>(await this.doRPCRequest("DescribeSQLPlan", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSQLPlanResponse({}));
  }

  async describeSQLPlan(request: DescribeSQLPlanRequest): Promise<DescribeSQLPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLPlanWithOptions(request, runtime);
  }

  async describeSQLPlanTaskWithOptions(request: DescribeSQLPlanTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLPlanTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSQLPlanTaskResponse>(await this.doRPCRequest("DescribeSQLPlanTask", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSQLPlanTaskResponse({}));
  }

  async describeSQLPlanTask(request: DescribeSQLPlanTaskRequest): Promise<DescribeSQLPlanTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLPlanTaskWithOptions(request, runtime);
  }

  async describeTableAccessCountWithOptions(request: DescribeTableAccessCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTableAccessCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTableAccessCountResponse>(await this.doRPCRequest("DescribeTableAccessCount", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTableAccessCountResponse({}));
  }

  async describeTableAccessCount(request: DescribeTableAccessCountRequest): Promise<DescribeTableAccessCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTableAccessCountWithOptions(request, runtime);
  }

  async describeTableDetailWithOptions(request: DescribeTableDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTableDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTableDetailResponse>(await this.doRPCRequest("DescribeTableDetail", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTableDetailResponse({}));
  }

  async describeTableDetail(request: DescribeTableDetailRequest): Promise<DescribeTableDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTableDetailWithOptions(request, runtime);
  }

  async describeTablePartitionDiagnoseWithOptions(request: DescribeTablePartitionDiagnoseRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTablePartitionDiagnoseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTablePartitionDiagnoseResponse>(await this.doRPCRequest("DescribeTablePartitionDiagnose", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTablePartitionDiagnoseResponse({}));
  }

  async describeTablePartitionDiagnose(request: DescribeTablePartitionDiagnoseRequest): Promise<DescribeTablePartitionDiagnoseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTablePartitionDiagnoseWithOptions(request, runtime);
  }

  async describeTablesWithOptions(request: DescribeTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTablesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTablesResponse>(await this.doRPCRequest("DescribeTables", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTablesResponse({}));
  }

  async describeTables(request: DescribeTablesRequest): Promise<DescribeTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTablesWithOptions(request, runtime);
  }

  async describeTableStatisticsWithOptions(request: DescribeTableStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTableStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTableStatisticsResponse>(await this.doRPCRequest("DescribeTableStatistics", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTableStatisticsResponse({}));
  }

  async describeTableStatistics(request: DescribeTableStatisticsRequest): Promise<DescribeTableStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTableStatisticsWithOptions(request, runtime);
  }

  async describeTaskInfoWithOptions(request: DescribeTaskInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTaskInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTaskInfoResponse>(await this.doRPCRequest("DescribeTaskInfo", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTaskInfoResponse({}));
  }

  async describeTaskInfo(request: DescribeTaskInfoRequest): Promise<DescribeTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTaskInfoWithOptions(request, runtime);
  }

  async downloadDiagnosisRecordsWithOptions(request: DownloadDiagnosisRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DownloadDiagnosisRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DownloadDiagnosisRecordsResponse>(await this.doRPCRequest("DownloadDiagnosisRecords", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new DownloadDiagnosisRecordsResponse({}));
  }

  async downloadDiagnosisRecords(request: DownloadDiagnosisRecordsRequest): Promise<DownloadDiagnosisRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadDiagnosisRecordsWithOptions(request, runtime);
  }

  async grantOperatorPermissionWithOptions(request: GrantOperatorPermissionRequest, runtime: $Util.RuntimeOptions): Promise<GrantOperatorPermissionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GrantOperatorPermissionResponse>(await this.doRPCRequest("GrantOperatorPermission", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new GrantOperatorPermissionResponse({}));
  }

  async grantOperatorPermission(request: GrantOperatorPermissionRequest): Promise<GrantOperatorPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantOperatorPermissionWithOptions(request, runtime);
  }

  async killProcessWithOptions(request: KillProcessRequest, runtime: $Util.RuntimeOptions): Promise<KillProcessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<KillProcessResponse>(await this.doRPCRequest("KillProcess", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new KillProcessResponse({}));
  }

  async killProcess(request: KillProcessRequest): Promise<KillProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killProcessWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async modifyAccountDescriptionWithOptions(request: ModifyAccountDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountDescriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAccountDescriptionResponse>(await this.doRPCRequest("ModifyAccountDescription", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAccountDescriptionResponse({}));
  }

  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  async modifyAuditLogConfigWithOptions(request: ModifyAuditLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAuditLogConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAuditLogConfigResponse>(await this.doRPCRequest("ModifyAuditLogConfig", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAuditLogConfigResponse({}));
  }

  async modifyAuditLogConfig(request: ModifyAuditLogConfigRequest): Promise<ModifyAuditLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAuditLogConfigWithOptions(request, runtime);
  }

  async modifyAutoRenewAttributeWithOptions(request: ModifyAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAutoRenewAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAutoRenewAttributeResponse>(await this.doRPCRequest("ModifyAutoRenewAttribute", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAutoRenewAttributeResponse({}));
  }

  async modifyAutoRenewAttribute(request: ModifyAutoRenewAttributeRequest): Promise<ModifyAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAutoRenewAttributeWithOptions(request, runtime);
  }

  async modifyBackupPolicyWithOptions(request: ModifyBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBackupPolicyResponse>(await this.doRPCRequest("ModifyBackupPolicy", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBackupPolicyResponse({}));
  }

  async modifyBackupPolicy(request: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  async modifyClusterConnectionStringWithOptions(request: ModifyClusterConnectionStringRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterConnectionStringResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyClusterConnectionStringResponse>(await this.doRPCRequest("ModifyClusterConnectionString", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyClusterConnectionStringResponse({}));
  }

  async modifyClusterConnectionString(request: ModifyClusterConnectionStringRequest): Promise<ModifyClusterConnectionStringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterConnectionStringWithOptions(request, runtime);
  }

  async modifyDBClusterWithOptions(request: ModifyDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBClusterResponse>(await this.doRPCRequest("ModifyDBCluster", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBClusterResponse({}));
  }

  async modifyDBCluster(request: ModifyDBClusterRequest): Promise<ModifyDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterWithOptions(request, runtime);
  }

  async modifyDBClusterAccessWhiteListWithOptions(request: ModifyDBClusterAccessWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterAccessWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBClusterAccessWhiteListResponse>(await this.doRPCRequest("ModifyDBClusterAccessWhiteList", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBClusterAccessWhiteListResponse({}));
  }

  async modifyDBClusterAccessWhiteList(request: ModifyDBClusterAccessWhiteListRequest): Promise<ModifyDBClusterAccessWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterAccessWhiteListWithOptions(request, runtime);
  }

  async modifyDBClusterDescriptionWithOptions(request: ModifyDBClusterDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterDescriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBClusterDescriptionResponse>(await this.doRPCRequest("ModifyDBClusterDescription", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBClusterDescriptionResponse({}));
  }

  async modifyDBClusterDescription(request: ModifyDBClusterDescriptionRequest): Promise<ModifyDBClusterDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterDescriptionWithOptions(request, runtime);
  }

  async modifyDBClusterMaintainTimeWithOptions(request: ModifyDBClusterMaintainTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterMaintainTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBClusterMaintainTimeResponse>(await this.doRPCRequest("ModifyDBClusterMaintainTime", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBClusterMaintainTimeResponse({}));
  }

  async modifyDBClusterMaintainTime(request: ModifyDBClusterMaintainTimeRequest): Promise<ModifyDBClusterMaintainTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterMaintainTimeWithOptions(request, runtime);
  }

  async modifyDBClusterResourceGroupWithOptions(request: ModifyDBClusterResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBClusterResourceGroupResponse>(await this.doRPCRequest("ModifyDBClusterResourceGroup", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBClusterResourceGroupResponse({}));
  }

  async modifyDBClusterResourceGroup(request: ModifyDBClusterResourceGroupRequest): Promise<ModifyDBClusterResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterResourceGroupWithOptions(request, runtime);
  }

  async modifyDBResourcePoolWithOptions(request: ModifyDBResourcePoolRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBResourcePoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBResourcePoolResponse>(await this.doRPCRequest("ModifyDBResourcePool", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBResourcePoolResponse({}));
  }

  async modifyDBResourcePool(request: ModifyDBResourcePoolRequest): Promise<ModifyDBResourcePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBResourcePoolWithOptions(request, runtime);
  }

  async modifyElasticPlanWithOptions(request: ModifyElasticPlanRequest, runtime: $Util.RuntimeOptions): Promise<ModifyElasticPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyElasticPlanResponse>(await this.doRPCRequest("ModifyElasticPlan", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyElasticPlanResponse({}));
  }

  async modifyElasticPlan(request: ModifyElasticPlanRequest): Promise<ModifyElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyElasticPlanWithOptions(request, runtime);
  }

  async modifyLogBackupPolicyWithOptions(request: ModifyLogBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLogBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyLogBackupPolicyResponse>(await this.doRPCRequest("ModifyLogBackupPolicy", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyLogBackupPolicyResponse({}));
  }

  async modifyLogBackupPolicy(request: ModifyLogBackupPolicyRequest): Promise<ModifyLogBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLogBackupPolicyWithOptions(request, runtime);
  }

  async modifyMaintenanceActionWithOptions(request: ModifyMaintenanceActionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMaintenanceActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyMaintenanceActionResponse>(await this.doRPCRequest("ModifyMaintenanceAction", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyMaintenanceActionResponse({}));
  }

  async modifyMaintenanceAction(request: ModifyMaintenanceActionRequest): Promise<ModifyMaintenanceActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMaintenanceActionWithOptions(request, runtime);
  }

  async releaseClusterPublicConnectionWithOptions(request: ReleaseClusterPublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseClusterPublicConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseClusterPublicConnectionResponse>(await this.doRPCRequest("ReleaseClusterPublicConnection", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseClusterPublicConnectionResponse({}));
  }

  async releaseClusterPublicConnection(request: ReleaseClusterPublicConnectionRequest): Promise<ReleaseClusterPublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseClusterPublicConnectionWithOptions(request, runtime);
  }

  async resetAccountPasswordWithOptions(request: ResetAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetAccountPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetAccountPasswordResponse>(await this.doRPCRequest("ResetAccountPassword", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new ResetAccountPasswordResponse({}));
  }

  async resetAccountPassword(request: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  async revokeOperatorPermissionWithOptions(request: RevokeOperatorPermissionRequest, runtime: $Util.RuntimeOptions): Promise<RevokeOperatorPermissionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RevokeOperatorPermissionResponse>(await this.doRPCRequest("RevokeOperatorPermission", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new RevokeOperatorPermissionResponse({}));
  }

  async revokeOperatorPermission(request: RevokeOperatorPermissionRequest): Promise<RevokeOperatorPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeOperatorPermissionWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async unbindDBResourcePoolWithUserWithOptions(request: UnbindDBResourcePoolWithUserRequest, runtime: $Util.RuntimeOptions): Promise<UnbindDBResourcePoolWithUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindDBResourcePoolWithUserResponse>(await this.doRPCRequest("UnbindDBResourcePoolWithUser", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindDBResourcePoolWithUserResponse({}));
  }

  async unbindDBResourcePoolWithUser(request: UnbindDBResourcePoolWithUserRequest): Promise<UnbindDBResourcePoolWithUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindDBResourcePoolWithUserWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2019-03-15", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
