// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AllocateClusterPublicConnectionRequest extends $tea.Model {
  /**
   * @remarks
   * The prefix of the public endpoint.
   * 
   * *   The prefix must contain lowercase letters, digits, and hyphens (-). It must start with a lowercase letter.
   * *   The prefix can be up to 30 characters in length.
   * *   By default, the cluster name is used as the prefix of the public endpoint.
   * 
   * @example
   * am-bp278jg9****.ads.aliyuncs.com
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp278jg9****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateClusterPublicConnectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class AllocateClusterPublicConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AllocateClusterPublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AllocateClusterPublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAdviceByIdRequest extends $tea.Model {
  /**
   * @remarks
   * The date when the suggestion is generated. Specify the date in the yyyyMMdd format. The date must be in UTC.
   * 
   * @example
   * 20221101
   */
  adviceDate?: number;
  /**
   * @remarks
   * The suggestion ID.
   * 
   * @example
   * 0baf1f52-53df-487f-8292-99a03716****
   */
  adviceId?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of Data Warehouse Edition (V3.0) clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6g8w25jacm7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      adviceDate: 'AdviceDate',
      adviceId: 'AdviceId',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceDate: 'number',
      adviceId: 'string',
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAdviceByIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * The message returned for the operation. Valid values:
   * 
   * *   **SUCCESS** is returned if the operation is successful.
   * *   An error message is returned if the operation fails.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5DC10091-348D-12B1-906D-AB49D658012E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAdviceByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyAdviceByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApplyAdviceByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachUserENIRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachUserENIResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class AttachUserENIResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachUserENIResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachUserENIResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchApplyAdviceByIdListRequest extends $tea.Model {
  /**
   * @remarks
   * The date when the suggestion is generated. Specify the date in the yyyyMMdd format. The date must be in UTC.
   * 
   * @example
   * 20221115
   */
  adviceDate?: number;
  /**
   * @remarks
   * The IDs of the suggestions to be applied. Separate multiple IDs with commas (,).
   * 
   * @example
   * c2589ff3-e86c-4f19-80c8-2aeb7dd9****,53414470-ebf4-4a53-a312-8a1ad8fd****,6e8dce84-fec8-4b0b-9c04-b0cea12c****,b3b9703d-55ca-47e0-96dd-6a4a9dbf****
   */
  adviceIdList?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of Data Warehouse Edition (V3.0) clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6g8w25jacm7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID of the cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      adviceDate: 'AdviceDate',
      adviceIdList: 'AdviceIdList',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceDate: 'number',
      adviceIdList: 'string',
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchApplyAdviceByIdListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The message returned for the operation. Valid values:
   * 
   * *   **SUCCESS** is returned if the operation is successful.
   * *   An error message is returned if the operation fails.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 86F92D26-B774-5FA1-8E53-82CBEEEBB012
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchApplyAdviceByIdListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchApplyAdviceByIdListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchApplyAdviceByIdListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDBResourceGroupWithUserRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The database account with which to associate the resource group. It can be a standard account or a privileged account.
   * 
   * This parameter is required.
   * 
   * @example
   * accout
   */
  groupUser?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      groupUser: 'GroupUser',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      groupUser: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDBResourceGroupWithUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class BindDBResourceGroupWithUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindDBResourceGroupWithUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindDBResourceGroupWithUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDBResourcePoolWithUserRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  poolName?: string;
  /**
   * @remarks
   * The database account with which to associate the resource group. It can be a standard account or a privileged account.
   * 
   * This parameter is required.
   * 
   * @example
   * accout
   */
  poolUser?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      poolName: 'PoolName',
      poolUser: 'PoolUser',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      poolName: 'string',
      poolUser: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDBResourcePoolWithUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class BindDBResourcePoolWithUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindDBResourcePoolWithUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindDBResourcePoolWithUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the database account.
   * 
   * *   The description cannot start with `http://` or `https://`.
   * *   The description can be up to 256 characters in length.
   * 
   * @example
   * Test account
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * *   The name must start with a lowercase letter and end with a lowercase letter or a digit.
   * *   The name can contain lowercase letters, digits, and underscores (_).
   * *   The name must be 2 to 16 characters in length.
   * *   Reserved account names such as root, admin, and opsadmin cannot be used.
   * 
   * This parameter is required.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the database account.
   * 
   * *   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * *   Special characters include `! @ # $ % ^ & * ( ) _ + - =`
   * *   The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Test_accout1
   */
  accountPassword?: string;
  /**
   * @remarks
   * The type of the database account. Valid values:
   * 
   * *   **Normal**: standard account. Up to 256 standard accounts can be created for a cluster.
   * *   **Super** (default): privileged account. Only a single privileged account can be created for a cluster.
   * 
   * >  If a cluster does not have accounts, you can specify this parameter to create a privileged account or standard account. If a cluster has a privileged account, you must set this parameter to Normal to create a standard account. Otherwise, the operation fails. After an account is created, the privileged account has permissions on all databases of the cluster. The standard account does not have permissions and must be granted permissions on specific databases by the privileged account. For more information, see GRANT.
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to view cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountType: 'AccountType',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountType: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627FA5A19
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1564657730
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
      taskId: 'number',
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

export class CreateDBClusterRequest extends $tea.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  backupSetID?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The value is case-sensitive and can contain a maximum of 64 ASCII characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-t7241****
   */
  clientToken?: string;
  /**
   * @remarks
   * The computing resources of the cluster. You can use computing resources to compute data. The increase in the computing resources can accelerate data queries. The computing resources are available for Cluster Edition and Basic Edition.
   * 
   * *   Computing resources for Cluster Edition include 16 cores and 64 GB memory, 24 cores and 96 GB memory, and 32 cores or more. Cluster Edition supports resource isolation, scheduled scaling, and tiered storage of hot and cold data.
   * *   Computing resources for Basic Edition include 8 cores and 32 GB memory and 16 cores and 64 GB memory. Alibaba Cloud does not provide an SLA guarantee for Basic Edition, and 4 to 8 hours are required for a failover. We recommend that you do not use Basic Edition in production environments.
   * 
   * > 
   * 
   * *   You can call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/190632.html) operation to query the available computing resources in a region.
   * 
   * *   This parameter must be specified when Mode is set to **Flexible**.
   * 
   * @example
   * 32Core128GB
   */
  computeResource?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **Cluster**: reserved mode for Cluster Edition
   * 
   * <!---->
   * 
   * *   **MixedStorage**: elastic mode for Cluster Edition
   * 
   * >  If the DBClusterCategory parameter is set to Cluster, you must set the Mode parameter to Reserver. If the DBClusterCategory parameter is set to MixedStorage, you must set the Mode parameter to Flexible. Otherwise, the cluster fails to be created.
   * 
   * This parameter is required.
   * 
   * @example
   * Cluster
   */
  DBClusterCategory?: string;
  /**
   * @remarks
   * The specification of the cluster. Valid values:
   * 
   * *   **C8**
   * *   **C32**
   * 
   * >  This parameter is required if the Mode parameter is set to Reserver.
   * 
   * @example
   * C8
   */
  DBClusterClass?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * *   The description cannot start with `http://` or `https`.
   * *   The description must be 2 to 256 characters in length.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The network type of the cluster. Set the value to **VPC**.
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The version of the cluster. Set the value to **3.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 3.0
   */
  DBClusterVersion?: string;
  /**
   * @remarks
   * The number of node groups. Valid values: 1 to 200 (integer).
   * 
   * >  This parameter is required if the Mode parameter is set to Reserver.
   * 
   * @example
   * 2
   */
  DBNodeGroupCount?: string;
  /**
   * @remarks
   * The storage capacity of the cluster. Unit: GB.
   * 
   * *   Valid values when DBClusterClass is set to C8: 100 to 1000
   * *   Valid values when DBClusterClass is set to C32: 100 to 8000
   * 
   * > * This parameter is required if the Mode parameter is set to Reserver.
   * > * 1000 The storage capacity less than 1,000 GB increases in 100 GB increments. The storage capacity greater than 1,000 GB increases in 1,000 GB increments.
   * 
   * @example
   * 200
   */
  DBNodeStorage?: string;
  /**
   * @remarks
   * Indicates whether disk encryption is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The number of elastic I/O units (EIUs). For more information, see [Use EIUs to scale up storage resources](https://help.aliyun.com/document_detail/189505.html).
   * 
   * @example
   * 0
   */
  elasticIOResource?: string;
  /**
   * @remarks
   * Specifies whether to enable SSL encryption. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableSSL?: boolean;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  executorCount?: string;
  /**
   * @remarks
   * The Key Management Service (KMS) ID that is used for disk encryption. This parameter takes effect only when DiskEncryption is set to true.
   * 
   * @example
   * xxxxxxxx-xxxx-xxxx-xxxx-xxxx
   */
  kmsId?: string;
  /**
   * @remarks
   * The mode of the cluster. Valid values:
   * 
   * *   **Reserver**: the reserved mode.
   * *   **Flexible**: the elastic mode.
   * 
   * @example
   * Reserver
   */
  mode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription type of the subscription cluster. Valid values:
   * 
   * *   **Year**: subscription on a yearly basis
   * *   **Month**: subscription on a monthly basis
   * 
   * >  This parameter is required if the PayType parameter is set to Prepaid.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the cluster belongs.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  restoreTime?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  restoreType?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  sourceDBInstanceName?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  storageResource?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  storageType?: string;
  /**
   * @remarks
   * The tags to add to the cluster.
   */
  tag?: CreateDBClusterRequestTag[];
  /**
   * @remarks
   * The subscription period of the subscription cluster.
   * 
   * *   Valid values when Period is set to Year: 1, 2, 3, and 5 (integer)
   * *   Valid values when Period is set to Month: 1 to 11 (integer)
   * 
   * > * This parameter is required if the PayType parameter is set to Prepaid.
   * > * Longer subscription periods offer more savings. Purchasing a cluster for one year is more cost-effective than purchasing the cluster for 10 or 11 months.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the cluster.
   * 
   * @example
   * vpc-bp1at5ze0t5u3xtqn****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the cluster.
   * 
   * @example
   * vsw-bp1aadw9k19x6cis9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetID: 'BackupSetID',
      clientToken: 'ClientToken',
      computeResource: 'ComputeResource',
      DBClusterCategory: 'DBClusterCategory',
      DBClusterClass: 'DBClusterClass',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterVersion: 'DBClusterVersion',
      DBNodeGroupCount: 'DBNodeGroupCount',
      DBNodeStorage: 'DBNodeStorage',
      diskEncryption: 'DiskEncryption',
      elasticIOResource: 'ElasticIOResource',
      enableSSL: 'EnableSSL',
      executorCount: 'ExecutorCount',
      kmsId: 'KmsId',
      mode: 'Mode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      restoreType: 'RestoreType',
      sourceDBInstanceName: 'SourceDBInstanceName',
      storageResource: 'StorageResource',
      storageType: 'StorageType',
      tag: 'Tag',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetID: 'string',
      clientToken: 'string',
      computeResource: 'string',
      DBClusterCategory: 'string',
      DBClusterClass: 'string',
      DBClusterDescription: 'string',
      DBClusterNetworkType: 'string',
      DBClusterVersion: 'string',
      DBNodeGroupCount: 'string',
      DBNodeStorage: 'string',
      diskEncryption: 'boolean',
      elasticIOResource: 'string',
      enableSSL: 'boolean',
      executorCount: 'string',
      kmsId: 'string',
      mode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      restoreType: 'string',
      sourceDBInstanceName: 'string',
      storageResource: 'string',
      storageType: 'string',
      tag: { 'type': 'array', 'itemType': CreateDBClusterRequestTag },
      usedTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 202353278****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the cluster belongs.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      orderId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * *   The name can be up to 255 characters in length.
   * *   The name must start with an uppercase letter or a digit.
   * *   The name can contain uppercase letters, digits, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The query execution mode. Valid values:
   * 
   * *   **interactive** (default)
   * *   **batch**
   * 
   * @example
   * interactive
   */
  groupType?: string;
  /**
   * @remarks
   * The number of nodes. Default value: 0.
   * 
   * *   Each node is configured with the resources of 16 cores and 64 GB memory.
   * *   Make sure that the amount of resources of the nodes (Number of nodes × 16 cores and 64 GB memory) is less than or equal to the amount of unused resources of the cluster.
   * 
   * @example
   * 2
   */
  nodeNum?: number;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      nodeNum: 'NodeNum',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      groupType: 'string',
      nodeNum: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3A8F6106-6AFD-5A34-9C80-8DE2C42D06E8
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

export class CreateDBResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDBResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDBResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResourcePoolRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The number of nodes. Default value: 0.
   * 
   * *   Each node provides 16 cores and 64 GB memory.
   * *   The total amount of resources provided by the nodes (number of nodes × 16 cores, number of nodes × 64 GB memory) cannot exceed the total amount of resources in the cluster. Set this parameter to a proper value.
   * 
   * @example
   * 2
   */
  nodeNum?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * *   The name can be up to 255 characters in length.
   * *   The name must start with a letter or a digit.
   * *   The name can contain letters, digits, hyphens (_), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  poolName?: string;
  /**
   * @remarks
   * The mode in which to execute SQL statements.
   * 
   * *   **batch**
   * 
   * *   **interactive**
   * 
   * > For more information, see [Query execution modes](https://help.aliyun.com/document_detail/189502.html).
   * 
   * @example
   * interactive
   */
  queryType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      nodeNum: 'NodeNum',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      poolName: 'PoolName',
      queryType: 'QueryType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      nodeNum: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      poolName: 'string',
      queryType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResourcePoolResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class CreateDBResourcePoolResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDBResourcePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDBResourcePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticPlanRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1d8lbdj22rx****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether the scaling plan takes effect. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  elasticPlanEnable?: boolean;
  /**
   * @remarks
   * The end date of the scaling plan. Specify the date in the yyyy-MM-dd format.
   * 
   * @example
   * 2022-12-09
   */
  elasticPlanEndDay?: string;
  /**
   * @remarks
   * The dates of the month when you want to execute the scaling plan. A number specifies a date of the month. Separate multiple values with commas (,).
   * 
   * @example
   * 1,15,25
   */
  elasticPlanMonthlyRepeat?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * *   The name must be 2 to 30 characters in length.
   * *   The name can contain letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  elasticPlanName?: string;
  /**
   * @remarks
   * The number of nodes that are involved in the scaling plan.
   * 
   * *   If ElasticPlanType is set to **worker**, you can set this parameter to 0 or leave this parameter empty.
   * *   If ElasticPlanType is set to **executorcombineworker** or **executor**, you must set this parameter to a value that is greater than 0.
   * 
   * @example
   * 0
   * 
   * **if can be null:**
   * false
   */
  elasticPlanNodeNum?: number;
  /**
   * @remarks
   * The start date of the scaling plan. Specify the date in the yyyy-MM-dd format.
   * 
   * @example
   * 2022-12-02
   */
  elasticPlanStartDay?: string;
  /**
   * @remarks
   * The restoration time of the scaling plan. Specify the time on the hour in the HH:mm:ss format. The interval between the scale-up time and the restoration time cannot be more than 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 10:00:00
   */
  elasticPlanTimeEnd?: string;
  /**
   * @remarks
   * The scale-up time of the scaling plan. Specify the time on the hour in the HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 08:00:00
   */
  elasticPlanTimeStart?: string;
  /**
   * @remarks
   * The type of the scaling plan. Valid values:
   * 
   * *   **worker**: scales only elastic I/O resources.
   * *   **executor**: scales only computing resources.
   * *   **executorcombineworker** (default): scales both elastic I/O resources and computing resources by proportion.
   * > - If you want to set this parameter to **executorcombineworker**, make sure that the cluster runs a minor version of 3.1.3.2 or later.
   * > - If you want to set this parameter to **worker** or **executor**, make sure that the cluster runs a minor version of 3.1.6.1 or later and a ticket is submitted. After your request is approved, you can set this parameter to **worker** or **executor**.
   * 
   * @example
   * worker
   */
  elasticPlanType?: string;
  /**
   * @remarks
   * The days of the week when you want to execute the scaling plan. Valid values: 0 to 6 (Sunday to Saturday). Separate multiple values with commas (,).
   * 
   * @example
   * 1,2,3,4,5
   */
  elasticPlanWeeklyRepeat?: string;
  /**
   * @remarks
   * The resource specifications that can be scaled up by the scaling plan. Valid values:
   * 
   * *   8 Core 64 GB (default)
   * *   16 Core 64 GB
   * *   32 Core 64 GB
   * *   64 Core 128 GB
   * *   12 Core 96 GB
   * *   24 Core 96 GB
   * *   52 Core 86 GB
   * 
   * @example
   * 32 Core 64 GB
   */
  elasticPlanWorkerSpec?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/466685.html) operation to query the resource group name.
   * 
   * @example
   * realtime
   */
  resourcePoolName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      elasticPlanEnable: 'ElasticPlanEnable',
      elasticPlanEndDay: 'ElasticPlanEndDay',
      elasticPlanMonthlyRepeat: 'ElasticPlanMonthlyRepeat',
      elasticPlanName: 'ElasticPlanName',
      elasticPlanNodeNum: 'ElasticPlanNodeNum',
      elasticPlanStartDay: 'ElasticPlanStartDay',
      elasticPlanTimeEnd: 'ElasticPlanTimeEnd',
      elasticPlanTimeStart: 'ElasticPlanTimeStart',
      elasticPlanType: 'ElasticPlanType',
      elasticPlanWeeklyRepeat: 'ElasticPlanWeeklyRepeat',
      elasticPlanWorkerSpec: 'ElasticPlanWorkerSpec',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourcePoolName: 'ResourcePoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      elasticPlanEnable: 'boolean',
      elasticPlanEndDay: 'string',
      elasticPlanMonthlyRepeat: 'string',
      elasticPlanName: 'string',
      elasticPlanNodeNum: 'number',
      elasticPlanStartDay: 'string',
      elasticPlanTimeEnd: 'string',
      elasticPlanTimeStart: 'string',
      elasticPlanType: 'string',
      elasticPlanWeeklyRepeat: 'string',
      elasticPlanWorkerSpec: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourcePoolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticPlanResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class CreateElasticPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateElasticPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The account of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * *   Normal: standard account
   * *   Super: privileged account
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627FA5A19
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

export class DeleteBackupsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the backup set that you want to delete. Separate multiple backup set IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 766,767
   */
  backupIds?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupIds: 'BackupIds',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupIds: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 771C5FAA-530F-52F7-B84D-EBAD4561D590
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

export class DeleteBackupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBackupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1u8c0mgfg58****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp1u8c0mgfg58****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 421693038
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class DeleteDBResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDBResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDBResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBResourcePoolRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * test_group
   */
  poolName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      poolName: 'PoolName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      poolName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBResourcePoolResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class DeleteDBResourcePoolResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDBResourcePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDBResourcePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteElasticPlanRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612241.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * > You can call the [DescribeElasticPlans](https://help.aliyun.com/document_detail/601334.html) operation to query the names of scaling plans.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  elasticPlanName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      elasticPlanName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteElasticPlanResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class DeleteElasticPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteElasticPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * >  If you do not specify this parameter, the information about all database accounts is returned.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The type of the database account. If you do not specify this parameter, the information about all account types is returned. Valid values:
   * 
   * *   **Normal**: standard account.
   * *   **Super**: privileged account.
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried database accounts.
   */
  accountList?: DescribeAccountsResponseBodyAccountList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 64E37E6F-C363-41F3-867A-70EF5DC60EA4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountList: 'AccountList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountList: DescribeAccountsResponseBodyAccountList,
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

export class DescribeAdviceServiceEnabledRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of Data Warehouse Edition (V3.0) clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * am-2ze0vp0j6t3to****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdviceServiceEnabledResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * *   If the request was successful, **Success** is returned.
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * [Advisor] Advisor feature is not available for instance: am-2ze0vp0j6t3to****
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E031AABF-BD56-5966-A063-4283EF18DB45
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the suggestion feature is enabled. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * @example
   * False
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdviceServiceEnabledResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAdviceServiceEnabledResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAdviceServiceEnabledResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllAccountsRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllAccountsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried database accounts.
   */
  accountList?: DescribeAllAccountsResponseBodyAccountList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountList: 'AccountList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountList: { 'type': 'array', 'itemType': DescribeAllAccountsResponseBodyAccountList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAllAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAllAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried columns.
   */
  columns?: DescribeAllDataSourceResponseBodyColumns;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The queried databases.
   */
  schemas?: DescribeAllDataSourceResponseBodySchemas;
  /**
   * @remarks
   * The queried tables.
   */
  tables?: DescribeAllDataSourceResponseBodyTables;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      requestId: 'RequestId',
      schemas: 'Schemas',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: DescribeAllDataSourceResponseBodyColumns,
      requestId: 'string',
      schemas: DescribeAllDataSourceResponseBodySchemas,
      tables: DescribeAllDataSourceResponseBodyTables,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAllDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAllDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppliedAdvicesRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the suggestion. Valid values:
   * 
   * *   **INDEX**: index optimization.
   * *   **TIERING**: hot and cold data optimization.
   * 
   * @example
   * INDEX
   */
  adviceType?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of AnalyticDB for MySQL Data Warehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6g8w25jacm7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyyMMdd format. The time must be in UTC.
   * 
   * @example
   * 20220824
   */
  endTime?: number;
  /**
   * @remarks
   * The keyword that is used to query information by table name.
   * 
   * @example
   * you_table_name
   */
  keyword?: string;
  /**
   * @remarks
   * The display language of the suggestion. Valid values:
   * 
   * *   **zh** (default): simplified Chinese.
   * *   **en**: English.
   * *   **ja**: Japanese.
   * *   **zh-tw**: traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The order by which to sort query results. Specify the parameter value in the JSON format. Example: `[{"Field":"SchemaName","Type":"Asc"}]`.
   * 
   * *   `Field` specifies the field by which to sort the query results. Valid values:
   * 
   *     *   `SchemaName`: the name of the database.
   *     *   `TableName`: the name of the table.
   *     *   `JobStatus`: the status of the BUILD job that is triggered on the table.
   *     *   `SubmitTime`: the time when the suggestion was submitted.
   *     *   `Benefit`: the expected benefits of the applied optimization suggestion.
   * 
   * *   `Type` specifies the sorting order. Valid values:
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * >  If you do not specify this parameter, optimization suggestions are sorted in descending order based on the submission time.
   * 
   * @example
   * [{"Field":"Benefit","Type":"Desc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the table in the **DatabaseName.TableName** format.
   * 
   * @example
   * tpch.lineitem
   */
  schemaTableName?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyyMMdd format. The time must be in UTC.
   * 
   * @example
   * 20220811
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      adviceType: 'AdviceType',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      keyword: 'Keyword',
      lang: 'Lang',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      schemaTableName: 'SchemaTableName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceType: 'string',
      DBClusterId: 'string',
      endTime: 'number',
      keyword: 'string',
      lang: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      schemaTableName: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppliedAdvicesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried suggestions.
   */
  items?: DescribeAppliedAdvicesResponseBodyItems[];
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 84489769-3065-5A28-A4CB-977CD426F1C3
   */
  requestId?: string;
  /**
   * @remarks
   * The names of the tables in the DatabaseName.TableName format.
   */
  schemaTableNames?: string[];
  /**
   * @remarks
   * The total number of entries returned. The value is an integer that is greater than or equal to 0. Default value: 0.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      schemaTableNames: 'SchemaTableNames',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeAppliedAdvicesResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      schemaTableNames: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppliedAdvicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppliedAdvicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppliedAdvicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-t4nj8619bz2w3****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   * 
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "1*****************7",
   *     "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcKwyhk62IeYly4hQ+5IpXjkh1GQXuDRCQ==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "2***************9",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "adb:DescribeExcessivePrimaryKeys"
   * }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status of SQL audit. Valid values:
   * 
   * *   **on**: SQL audit is enabled.
   * *   **off**: SQL audit is disabled.
   * 
   * @example
   * on
   */
  auditLogStatus?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-t4nj8619bz2w3****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0983B43-B2EC-536A-8791-142B5CF1E9B6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      auditLogStatus: 'AuditLogStatus',
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      auditLogStatus: 'string',
      DBClusterId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAuditLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAuditLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-t4nj8619bz2w3****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database on which you want to execute the SQL statement.
   * 
   * @example
   * adb_demo
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * > - The end time must be later than the start time.
   * > - The maximum time range that can be specified is 24 hours.
   * 
   * @example
   * 2022-01-23T22:18Z
   */
  endTime?: string;
  /**
   * @remarks
   * The IP address and port number of the client that is used to execute the SQL statement.
   * 
   * @example
   * 100.104.XX.XX:43908
   */
  hostAddress?: string;
  /**
   * @remarks
   * The order in which specified fields are sorted. Specify this parameter as an ordered JSON array that consists of the Field and Type fields.
   * 
   * *   Field specifies the field that is used to sort the retrieved entries. Valid values:
   * 
   *     *   HostAddress: the IP address of the client that is used to connect to the database.
   *     *   Succeed: specifies whether the SQL statement is successfully executed.
   *     *   TotalTime: the total amount of time that is consumed to execute the SQL statement.
   *     *   DBName: the name of the database on which the SQL statement is executed.
   *     *   SQLType: the type of the SQL statement.
   *     *   User: the username that is used to execute the SQL statement.
   *     *   ExecuteTime: the time to start executing the SQL statement.
   * 
   * *   Type specifies the sorting order. Valid values:
   * 
   *     *   Desc: descending order.
   *     *   Asc: ascending order.
   * 
   * @example
   * [{"Field":"ExecuteTime","Type":"Desc"},{"Field":"HostAddress","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The sorting order of the retrieved entries. Valid values:
   * 
   * *   **asc**: sorts the retrieved entries by time in ascending order.
   * *   **desc**: sorts the retrieved entries by time in descending order.
   * 
   * @example
   * asc
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. The value is an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * *   **10**
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * > If you do not specify this parameter, the value 10 is used.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The keywords that are included in the SQL statement to query.
   * 
   * @example
   * adb
   */
  queryKeyword?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the SQL statement. Valid values:
   * 
   * *   **DELETE**
   * *   **SELECT**
   * *   **UPDATE**
   * *   **INSERT_INTO_SELECT**
   * *   **ALTER**
   * *   **DROP**
   * *   **CREATE**
   * 
   * > You can query only a single type of SQL statements at a time. If you leave this parameter empty, the **SELECT** statements are queried.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * > SQL audit logs can be queried only when SQL audit is enabled. Only SQL audit logs within the last 30 days can be queried. If SQL audit was disabled and re-enabled, only SQL audit logs from the time when SQL audit was re-enabled can be queried.
   * 
   * @example
   * 2022-01-23T02:18Z
   */
  startTime?: string;
  /**
   * @remarks
   * Specifies whether the execution of the SQL statement succeeds. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  succeed?: string;
  /**
   * @remarks
   * The name of the user who executed the SQL statement.
   * 
   * @example
   * test_user
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      endTime: 'EndTime',
      hostAddress: 'HostAddress',
      order: 'Order',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeyword: 'QueryKeyword',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      succeed: 'Succeed',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBName: 'string',
      endTime: 'string',
      hostAddress: 'string',
      order: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeyword: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sqlType: 'string',
      startTime: 'string',
      succeed: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogRecordsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-t4nj8619bz2w3****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried SQL audit logs.
   */
  items?: DescribeAuditLogRecordsResponseBodyItems[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8A564B7F-8C00-43C0-8EC5-919FBB70573
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      items: { 'type': 'array', 'itemType': DescribeAuditLogRecordsResponseBodyItems },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAuditLogRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAuditLogRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID. Separate multiple clusters with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   30
   * *   50
   * *   100
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterIds: 'DBClusterIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIds: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The renewal information of the cluster.
   */
  items?: DescribeAutoRenewAttributeResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
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
      items: DescribeAutoRenewAttributeResponseBodyItems,
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

export class DescribeAutoRenewAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAutoRenewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAutoRenewAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableAdvicesRequest extends $tea.Model {
  /**
   * @remarks
   * The date when the suggestion is generated. Specify the date in the yyyyMMdd format. The date must be in UTC.
   * 
   * >  Suggestions are generated after analysis after midnight every day. You must specify a date that is at least one day earlier than the current date. For example, if the current date is 20240627, you must specify 20240626 or an earlier date.
   * 
   * This parameter is required.
   * 
   * @example
   * 20221124
   */
  adviceDate?: number;
  /**
   * @remarks
   * The type of the suggestion. Valid values:
   * 
   * *   **INDEX**: index optimization.
   * *   **TIERING**: hot and cold data optimization.
   * 
   * @example
   * Index
   */
  adviceType?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of Data Warehouse Edition (V3.0) clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp198m028ih55****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The keyword that is used to query information by table name.
   * 
   * @example
   * you_table_name
   */
  keyword?: string;
  /**
   * @remarks
   * The display language of the suggestion. Default value: zh. Valid values:
   * 
   * *   **zh**: simplified Chinese
   * *   **en**: English
   * *   **ja**: Japanese
   * *   **zh-tw**: traditional Chinese
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The order by which to sort query results. Specify the parameter value in the JSON format. Example: `[{"Field":"SchemaName","Type":"Asc"}]`.
   * 
   * *   `Field` specifies the field by which to sort the query results. Valid values:
   * 
   *     *   `SchemaName`: the name of the database.
   *     *   `TableName`: the name of the table.
   *     *   `Benefit`: the expected benefits of the applied optimization suggestion.
   * 
   * *   `Type` specifies the sorting order. Valid values:
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * >  If you do not specify this parameter, the query results are sorted in descending order based on the Benefit field.
   * 
   * @example
   * [{"Field":"Benefit","Type":"Desc"}]
   */
  order?: string;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 30. Valid values:
   * 
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the table in the **DatabaseName.TableName** format.
   * 
   * @example
   * tpch.lineitem
   */
  schemaTableName?: string;
  static names(): { [key: string]: string } {
    return {
      adviceDate: 'AdviceDate',
      adviceType: 'AdviceType',
      DBClusterId: 'DBClusterId',
      keyword: 'Keyword',
      lang: 'Lang',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      schemaTableName: 'SchemaTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceDate: 'number',
      adviceType: 'string',
      DBClusterId: 'string',
      keyword: 'string',
      lang: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      schemaTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableAdvicesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried suggestions.
   */
  items?: DescribeAvailableAdvicesResponseBodyItems[];
  /**
   * @remarks
   * The page number of the returned page. The value must be an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 30. Valid values:
   * 
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 96A55627-28E9-5E47-B8F6-D786BE551349
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the table in the DatabaseName.TableName format.
   */
  schemaTableNames?: string[];
  /**
   * @remarks
   * The total number of entries returned. The value must be an integer that is greater than or equal to 0. Default value: 0.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      schemaTableNames: 'SchemaTableNames',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeAvailableAdvicesResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      schemaTableNames: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableAdvicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAvailableAdvicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAvailableAdvicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The language of query results. Valid values:
   * 
   * *   **zh-CN** (default): Chinese.
   * *   **en-US**: English.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The resources available in the supported modes.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The version of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * 3.0
   */
  DBClusterVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      chargeType: 'ChargeType',
      DBClusterVersion: 'DBClusterVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      chargeType: 'string',
      DBClusterVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The supported zones.
   */
  availableZoneList?: DescribeAvailableResourceResponseBodyAvailableZoneList[];
  /**
   * @remarks
   * The resources available in the supported editions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZoneList: 'AvailableZoneList',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZoneList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneList },
      regionId: 'string',
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

export class DescribeBackupPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of days for which data backup files are retained.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * Specifies whether to enable the origin protocol policy.
   * 
   * *   true: enabled
   * *   false: disabled
   * 
   * @example
   * true
   */
  enableBackupLog?: string;
  /**
   * @remarks
   * The number of days for which log backup files are retained.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: number;
  /**
   * @remarks
   * The cycle based on which backups are performed. If more than one day of the week is specified, the days of the week are separated by commas (,). Valid values:
   * 
   * *   Monday
   * *   Tuesday
   * *   Wednesday
   * *   Thursday
   * *   Friday
   * *   Saturday
   * *   Sunday
   * 
   * @example
   * Tuesday,Friday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup time. Specify the time in the HH:mmZ-HH:mmZ format.
   * 
   * @example
   * 15:00Z-16:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      enableBackupLog: 'EnableBackupLog',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'number',
      enableBackupLog: 'string',
      logBackupRetentionPeriod: 'number',
      preferredBackupPeriod: 'string',
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

export class DescribeBackupsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 32732****
   */
  backupId?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) role of the Alibaba Cloud account to which the backup set belongs.
   * 
   * >  This parameter must be specified only when cross-account backup operations are performed.
   * 
   * @example
   * role-for-xxx
   */
  crossRole?: string;
  /**
   * @remarks
   * The Alibaba Cloud account to which the backup set belongs.
   * 
   * >  This parameter must be specified only when cross-account backup operations are performed.
   * 
   * @example
   * 195****
   */
  crossUid?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp18934i73vb5****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC. The end time must be later than the start time.
   * 
   * @example
   * 2022-06-02T16:00Z
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * @example
   * 2022-06-01T16:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      crossRole: 'CrossRole',
      crossUid: 'CrossUid',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      crossRole: 'string',
      crossUid: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBody extends $tea.Model {
  freeBackupSize?: number;
  /**
   * @remarks
   * The queried backup sets.
   */
  items?: DescribeBackupsResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  totalBackupSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 300
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      freeBackupSize: 'FreeBackupSize',
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
      freeBackupSize: 'number',
      items: DescribeBackupsResponseBodyItems,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalBackupSize: 'number',
      totalCount: 'string',
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

export class DescribeColumnsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of columns.
   */
  items?: DescribeColumnsResponseBodyItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeColumnsResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeColumnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeColumnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComputeResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The version of the AnalyticDB for MySQL Data Warehouse Edition cluster. Set the value to **3**.
   * 
   * @example
   * 3.0
   */
  DBClusterVersion?: string;
  /**
   * @remarks
   * The available computing resources for migrating AnalyticDB MySQL Data Warehouse Edition to AnalyticDB MySQL Lakehouse Edition. Possible values are:
   * - **true**
   * - **false**(default value)
   * 
   * @example
   * false
   */
  migrate?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/129857.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-beijing-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBClusterVersion: 'DBClusterVersion',
      migrate: 'Migrate',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBClusterVersion: 'string',
      migrate: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComputeResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried specifications of computing resources.
   */
  computeResource?: DescribeComputeResourceResponseBodyComputeResource[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEAW
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: { 'type': 'array', 'itemType': DescribeComputeResourceResponseBodyComputeResource },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComputeResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeComputeResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeComputeResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionCountRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1jj9xqft1po****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionCountRecordsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried client IP addresses.
   */
  accessIpRecords?: DescribeConnectionCountRecordsResponseBodyAccessIpRecords[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp1jj9xqft1po****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 562C7F89-FBE6-4A04-AAAA-7EBC25******
   */
  requestId?: string;
  /**
   * @remarks
   * The queried database accounts.
   */
  userRecords?: DescribeConnectionCountRecordsResponseBodyUserRecords[];
  static names(): { [key: string]: string } {
    return {
      accessIpRecords: 'AccessIpRecords',
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      userRecords: 'UserRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIpRecords: { 'type': 'array', 'itemType': DescribeConnectionCountRecordsResponseBodyAccessIpRecords },
      DBClusterId: 'string',
      requestId: 'string',
      userRecords: { 'type': 'array', 'itemType': DescribeConnectionCountRecordsResponseBodyUserRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionCountRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeConnectionCountRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeConnectionCountRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhiteListRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhiteListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried IP address whitelists.
   */
  items?: DescribeDBClusterAccessWhiteListResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBClusterAccessWhiteListResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhiteListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterAccessWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterAccessWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp111m2cfrdl1****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried cluster information.
   */
  items?: DescribeDBClusterAttributeResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2895BB82-B2C1-408E-AA73-DB8D59******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBClusterAttributeResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1d8lbdj22rx****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Health state details of access nodes.
   */
  CS?: DescribeDBClusterHealthStatusResponseBodyCS;
  /**
   * @remarks
   * Health state details of compute node groups.
   */
  executor?: DescribeDBClusterHealthStatusResponseBodyExecutor;
  /**
   * @remarks
   * The health state of the cluster. Valid values:
   * 
   * *   **RISK**: risky
   * 
   * *   **NORMAL**: healthy
   * 
   * *   **UNAVAILABLE**: unavailable
   * 
   * > If the health states of access nodes, compute node groups, and storage node groups are all **healthy** and the cluster is detected to be alive, the health state of the cluster is **healthy**. If the preceding three health states include **risky**, the health state of the cluster is **risky**. If the preceding three health states include **unavailable**, the health state of the cluster is **unavailable**.
   * 
   * @example
   * NORMAL
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEA
   */
  requestId?: string;
  /**
   * @remarks
   * Health state details of storage node groups.
   */
  worker?: DescribeDBClusterHealthStatusResponseBodyWorker;
  static names(): { [key: string]: string } {
    return {
      CS: 'CS',
      executor: 'Executor',
      instanceStatus: 'InstanceStatus',
      requestId: 'RequestId',
      worker: 'Worker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CS: DescribeDBClusterHealthStatusResponseBodyCS,
      executor: DescribeDBClusterHealthStatusResponseBodyExecutor,
      instanceStatus: 'string',
      requestId: 'string',
      worker: DescribeDBClusterHealthStatusResponseBodyWorker,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterHealthStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterHealthStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The network type of the cluster.
   * 
   * @example
   * VPC
   */
  clusterNetworkType?: string;
  /**
   * @remarks
   * The queried network information about the cluster.
   */
  items?: DescribeDBClusterNetInfoResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterNetworkType: 'ClusterNetworkType',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNetworkType: 'string',
      items: DescribeDBClusterNetInfoResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterNetInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterNetInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time must be in UTC.
   * 
   * > The end time must be later than the start time. The maximum time range that can be specified is two days.
   * 
   * @example
   * 2021-05-03T15:01Z
   */
  endTime?: string;
  /**
   * @remarks
   * The performance metrics to be queried. Separate multiple values with commas (,). Valid values:
   * 
   * *   CPU
   * 
   *     *   **AnalyticDB_CPU**: the average CPU utilization.
   * 
   * *   Connections
   * 
   *     *   **AnalyticDB_Connections**: the number of connections of the cluster.
   * 
   * *   Writes
   * 
   *     *   **AnalyticDB_TPS**: the write transactions per second (TPS).
   *     *   **AnalyticDB_InsertRT**: the write response time.
   *     *   **AnalyticDB_InsertBytes**: the write throughput.
   * 
   * *   Updates
   * 
   *     *   **AnalyticDB_UpdateRT**: the update response time.
   * 
   * *   Deletes
   * 
   *     *   **AnalyticDB_DeleteRT**: the delete response time.
   * 
   * *   Queries
   * 
   *     *   **AnalyticDB_QPS**: the queries per second (QPS).
   *     *   **AnalyticDB_QueryRT**: the query response time.
   *     *   **AnalyticDB_QueryWaitTime**: the query wait time.
   * 
   * *   Disks
   * 
   *     *   **AnalyticDB_IO**: the disk I/O throughput.
   *     *   **AnalyticDB_IO_UTIL**: the disk I/O usage.
   *     *   **AnalyticDB_IO_WAIT**: the disk I/O wait time.
   *     *   **AnalyticDB_IOPS**: the disk IOPS.
   *     *   **AnalyticDB_DiskUsage**: the disk space that is used.
   *     *   **AnalyticDB_HotDataDiskUsage**: the disk space that is used by hot data.
   *     *   **AnalyticDB_ColdDataDiskUsage**: the disk space that is used by cold data.
   * 
   * *   Other
   * 
   *     *   **AnalyticDB_BuildTaskCount**: the number of BUILD jobs.
   *     *   **AnalyticDB_ComputeMemoryUsedRatio**: the compute memory usage.
   * 
   * >  If you leave this parameter empty, the values of all the preceding performance metrics are returned.
   * 
   * @example
   * AnalyticDB_CPU
   */
  key?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test
   */
  resourcePools?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time must be in UTC.
   * 
   * @example
   * 2021-05-03T15:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      key: 'Key',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourcePools: 'ResourcePools',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      key: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourcePools: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-03T15:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The queried performance metrics.
   */
  performances?: DescribeDBClusterPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25B56BC7-4978-40B3-9E48-4B7067******
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-03T15:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      performances: 'Performances',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      performances: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformances },
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

export class DescribeDBClusterResourcePoolPerformanceRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to monitor the resource group. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-06-10T07:01Z
   */
  endTime?: string;
  /**
   * @remarks
   * The metrics of the resource group. You can enter multiple metrics at the same time to query the monitoring information. Separate multiple metrics with commas (,). Valid values:
   * 
   * *   **AnalyticDB_RP_CPU**: the average CPU utilization. Unit: %.
   * *   **AnalyticDB_RP_RT**: the query response time (RT). Unit: milliseconds.
   * *   **AnalyticDB_RP_QPS**: the queries per second (QPS). The value of this parameter must be a numeric value.
   * *   **AnalyticDB_RP_WaitTime**: the query waiting time. Unit: milliseconds.
   * *   **AnalyticDB_RP_OriginalNode**: the number of basic nodes in the resource group.
   * *   **AnalyticDB_RP_ActualNode**: the number of scheduled nodes that are scaled out in the resource group.
   * *   **AnalyticDB_RP_PlanNode**: the number of scheduled nodes to be scaled out in the resource group.
   * *   **AnalyticDB_RP_TotalNode**: the total number of nodes in the resource group. Total number of nodes = Number of basic nodes + Number of scheduled nodes that are scaled out.
   * 
   * > 
   * 
   * *   If you leave this parameter empty, the monitoring information about all metrics is returned.
   * 
   * *   For more information about scaling plans, see [Create a resource scaling plan](https://help.aliyun.com/document_detail/189507.html).
   * 
   * @example
   * AnalyticDB_RP_CPU
   */
  key?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The names of the resource groups that you want to query. You can enter multiple names of resource groups. Separate multiple names with commas (,).
   * 
   * > 
   * 
   * *   The value of this parameter is case-insensitive. For example, `USER_DEFAULT` and `user_default` specify the same resource group.
   * 
   * *   If you leave this parameter empty, the monitoring information about the `USER_DEFAULT` resource group is returned.
   * 
   * @example
   * TEST_POOL
   */
  resourcePools?: string;
  /**
   * @remarks
   * The beginning of the time range to monitor the resource group. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time must be in UTC.
   * 
   * > You can view only the monitoring information about the resource groups within the last two days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-06-10T07:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      key: 'Key',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourcePools: 'ResourcePools',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      key: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourcePools: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterResourcePoolPerformanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range for monitoring the resource group. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-10T07:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The queried monitoring information about the metrics.
   */
  performances?: DescribeDBClusterResourcePoolPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7EDB8E4-9769-4233-88C7-DCA4C9******
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range for monitoring the resource group. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-10T07:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      performances: 'Performances',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      performances: { 'type': 'array', 'itemType': DescribeDBClusterResourcePoolPerformanceResponseBodyPerformances },
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterResourcePoolPerformanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterResourcePoolPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterResourcePoolPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSSLRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSSLResponseBody extends $tea.Model {
  /**
   * @remarks
   * The endpoint that is protected by SSL encryption.
   * 
   * @example
   * am-d7oualxo05x4o5be872***.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The time when the SSL certificate expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-10-11T08:16:43Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 348303D8-6F42-5141-9B00-A6EECA1E37B6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  SSLEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      expireTime: 'ExpireTime',
      requestId: 'RequestId',
      SSLEnabled: 'SSLEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      expireTime: 'string',
      requestId: 'string',
      SSLEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSSLResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterSSLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterShardNumberRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * am-uf6g8w25jacm7****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterShardNumberResponseBody extends $tea.Model {
  availableShardNumbers?: number[];
  /**
   * @example
   * CBE843D8-964D-5EA3-9D31-822125611B6E
   */
  requestId?: string;
  /**
   * @example
   * 128
   */
  shardNumber?: number;
  static names(): { [key: string]: string } {
    return {
      availableShardNumbers: 'AvailableShardNumbers',
      requestId: 'RequestId',
      shardNumber: 'ShardNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableShardNumbers: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
      shardNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterShardNumberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterShardNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterShardNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSpaceSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1u8c0mgfg58****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSpaceSummaryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried storage overview information.
   */
  data?: DescribeDBClusterSpaceSummaryResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25B56BC7-4978-40B3-9E48-4B7067******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDBClusterSpaceSummaryResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSpaceSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterSpaceSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterSpaceSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterStatusRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEAU
   */
  requestId?: string;
  /**
   * @remarks
   * The status of clusters.
   */
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the cluster.
   * 
   * *   The description cannot start with `http://` or `https://`.
   * *   The description must be 2 to 256 characters in length
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster IDs.
   * 
   * > You can specify the ID of one cluster or IDs of more clusters within the preceding region.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The state of the cluster. Valid values:
   * 
   * *   **Preparing**: The cluster is being prepared.
   * *   **Creating**: The cluster is being created.
   * *   **Restoring**: The cluster is being restored from a backup.
   * *   **Running**: The cluster is running.
   * *   **Deleting**: The cluster is being deleted.
   * *   **ClassChanging**: The cluster specifications are being changed.
   * *   **NetAddressCreating**: A network connection is being created.
   * *   **NetAddressDeleting**: A network connection is being deleted.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The version of the cluster. Set the value to **3.0**.
   * 
   * @example
   * 3.0
   */
  DBVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the clusters.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-4690g37929XXXX
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags that are added to the cluster.
   */
  tag?: DescribeDBClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterIds: 'DBClusterIds',
      DBClusterStatus: 'DBClusterStatus',
      DBVersion: 'DBVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterDescription: 'string',
      DBClusterIds: 'string',
      DBClusterStatus: 'string',
      DBVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeDBClustersRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried clusters.
   */
  items?: DescribeDBClustersResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBClustersResponseBodyItems,
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

export class DescribeDBClustersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * USER_DEFAULT
   */
  groupName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried resource groups.
   */
  groupsInfo?: DescribeDBResourceGroupResponseBodyGroupsInfo[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupsInfo: 'GroupsInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupsInfo: { 'type': 'array', 'itemType': DescribeDBResourceGroupResponseBodyGroupsInfo },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourcePoolRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * USER_DEFAULT
   */
  poolName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      poolName: 'PoolName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      poolName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourcePoolResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Details of the resource group.
   */
  poolsInfo?: DescribeDBResourcePoolResponseBodyPoolsInfo[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      poolsInfo: 'PoolsInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      poolsInfo: { 'type': 'array', 'itemType': DescribeDBResourcePoolResponseBodyPoolsInfo },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourcePoolResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBResourcePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBResourcePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisDimensionsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bt6u59zcmd945****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > 
   * 
   * *   The end time must be later than the start time.
   * 
   * *   The maximum time range that can be specified is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1625220213000
   */
  endTime?: string;
  /**
   * @remarks
   * The language of file titles and error messages. Valid values:
   * 
   * *   **zh** (default): simplified Chinese.
   * *   **en**: English.
   * *   **ja**: Japanese.
   * *   **zh-tw**: traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The query condition for SQL statements, which can contain the `Type`, `Value`, and `Min` or `Max` fields. Specify the condition in the JSON format. `Type` specifies the query dimension. Valid values for Type: `maxCost`, `status`, and `cost`. `Value`, `Min`, or `Max` specifies the query range for the dimension. Valid values:
   * 
   * *   `{"Type":"maxCost","Value":"100"}`: queries the top 100 most time-consuming SQL statements. Set `Value` to 100.
   * *   `{"Type":"status","Value":"finished"}`: queries executed SQL statements. You can set `Value` to `running` to query SQL statements that are being executed. You can also set Value to `failed` to query SQL statements that failed to be executed.
   * *   `{"Type":"cost","Min":"10","Max":"200"}`: queries SQL statements whose execution durations are in the range of 10 to 200 milliseconds. You can also customize the maximum and minimum execution durations.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Type":"maxCost","Value":"100"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > Only data within the last 14 days can be queried. If you call this operation to query data that is earlier than 14 days, an empty string is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 1625220210000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      lang: 'Lang',
      queryCondition: 'QueryCondition',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      lang: 'string',
      queryCondition: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisDimensionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The source IP addresses.
   */
  clientIps?: string[];
  /**
   * @remarks
   * The databases.
   */
  databases?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E0B56BCD-1BED-30EC-8CAF-1D1E5F******
   */
  requestId?: string;
  /**
   * @remarks
   * The resource groups.
   */
  resourceGroups?: string[];
  /**
   * @remarks
   * The usernames.
   */
  userNames?: string[];
  static names(): { [key: string]: string } {
    return {
      clientIps: 'ClientIps',
      databases: 'Databases',
      requestId: 'RequestId',
      resourceGroups: 'ResourceGroups',
      userNames: 'UserNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIps: { 'type': 'array', 'itemType': 'string' },
      databases: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      resourceGroups: { 'type': 'array', 'itemType': 'string' },
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp108q1py5r78****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1671687948000
   */
  endTime?: string;
  /**
   * @remarks
   * The language of file titles and error messages. Valid values:
   * 
   * *   **zh** (default): simplified Chinese.
   * *   **en**: English.
   * *   **ja**: Japanese.
   * *   **zh-tw**: traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The query conditions for SQL statements, which can be a combination of the `Type` and `Value` fields or a combination of the Type, `Min`, and `Max` fields. Specify the conditions in the JSON format. `Type` specifies the query dimension. Valid values for Type: `maxCost`, `status`, and `cost`. `Value`, `Min`, or `Max` specifies the query range for the dimension. Valid values:
   * 
   * *   `{"Type":"maxCost","Value":"100"}`: queries the top 100 most time-consuming SQL statements. Set `Value` to 100.
   * *   `{"Type":"status","Value":"finished"}`: queries the executed SQL statements. You can set `Value` to `running` to query the SQL statements that are being executed. You can also set Value to `failed` to query the SQL statements that failed to be executed.
   * *   `{"Type":"cost","Min":"10","Max":"200"}`: queries the SQL statements whose execution duration is in the range of 10 to 200 milliseconds. You can also specify custom values for the Min and Max fields.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"Type\\":\\"maxCost\\",\\"Value\\":\\"100\\"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1671684348000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      lang: 'Lang',
      queryCondition: 'QueryCondition',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      lang: 'string',
      queryCondition: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisMonitorPerformanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The monitoring information about queries displayed in Gantt charts.
   */
  performances?: DescribeDiagnosisMonitorPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The threshold for the number of queries displayed in a Gantt chart. Default value: 10000.
   * 
   * >  Up to 10,000 queries can be displayed in a Gantt chart even if more queries exist.
   * 
   * @example
   * 10000
   */
  performancesThreshold?: number;
  /**
   * @remarks
   * Indicates whether all queries are returned. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  performancesTruncated?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0F1AC5FD-16E9-5399-B81F-5AC434B1D9F8
   */
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
  /**
   * @remarks
   * The source IP address.
   * 
   * > You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource group, database name, username, and source IP address of the SQL statements to be queried.
   * 
   * @example
   * 59.82.xx.xx
   */
  clientIp?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database on which the SQL statements are executed.
   * 
   * > You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource group, database name, username, and source IP address of the SQL statements to be queried.
   * 
   * @example
   * adb_demo
   */
  database?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > 
   * 
   * *   The end time must be later than the start time.
   * 
   * *   The maximum time range that can be specified is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1633017540000
   */
  endTime?: string;
  /**
   * @remarks
   * The keyword for the query.
   * 
   * @example
   * select
   */
  keyword?: string;
  /**
   * @remarks
   * The language of file titles and error messages. Valid values:
   * 
   * *   **zh** (default): simplified Chinese.
   * *   **en**: English.
   * *   **ja**: Japanese.
   * *   **zh-tw**: traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum peak memory of the SQL statements. Unit: bytes.
   * 
   * @example
   * 89000000
   */
  maxPeakMemory?: number;
  /**
   * @remarks
   * The maximum scan size of the SQL statements. Unit: bytes.
   * 
   * @example
   * 104428198
   */
  maxScanSize?: number;
  /**
   * @remarks
   * The minimum peak memory of the SQL statements. Unit: bytes.
   * 
   * @example
   * 0
   */
  minPeakMemory?: number;
  /**
   * @remarks
   * The minimum scan size of the SQL statements. Unit: bytes.
   * 
   * @example
   * 0
   */
  minScanSize?: number;
  /**
   * @remarks
   * The order in which to sort the retrieved SQL statements by field. Specify this value in the JSON format. The value is an ordered array that uses the order of the input array and contains the `Field` and `Type` fields. Example: `[{"Field":"StartTime", "Type": "desc" }]`. Fields:
   * 
   * *   `Field` specifies the field that is used to sort the retrieved SQL statements. Valid values:
   * 
   *     *   `StartTime`: the start time of the execution.
   *     *   `Status`: the execution state.
   *     *   `UserName`: the username.
   *     *   `Cost`: the execution duration.
   *     *   `PeakMemory`: the peak memory.
   *     *   `ScanSize`: the amount of data to be scanned.
   *     *   `Database`: the name of the database.
   *     *   `ClientIp`: the source IP address.
   *     *   `ResourceGroup`: the name of the resource group.
   *     *   `QueueTime`: the amount of time that is consumed for queuing.
   *     *   `OutputRows`: the number of output rows.
   *     *   `OutputDataSize`: the amount of output data.
   *     *   `ResourceCostRank`: the execution duration rank of operators that are used in the SQL statements. This field takes effect only when `QueryCondition` is set to `{"Type":"status","Value":"running"}`.
   * 
   * *   `Type` specifies the sorting order. Valid values (case-insensitive):
   * 
   *     *   `Desc`: descending order.
   *     *   `Asc`: ascending order.
   * 
   * @example
   * [{"Field":"StartTime", "Type": "desc" }]
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **30**, **50**, and **100**. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The SQL pattern ID.
   * 
   * >  You can call the [DescribeSQLPatterns](https://help.aliyun.com/document_detail/321868.html) operation to query the information about all SQL patterns within an AnalyticDB for MySQL cluster in a time range, including SQL pattern IDs.
   * 
   * @example
   * 5575924945138******
   */
  patternId?: string;
  /**
   * @remarks
   * The query condition for SQL statements, which can contain the `Type`, `Value`, and `Min` or `Max` fields. Specify the condition in the JSON format. `Type` specifies the query dimension. Valid values for Type: `maxCost`, `status`, and `cost`. `Value`, `Min`, or `Max` specifies the query range for the dimension. Valid values:
   * 
   * *   `{"Type":"maxCost","Value":"100"}`: queries the top 100 most time-consuming SQL statements. Set `Value` to 100.
   * *   `{"Type":"status","Value":"finished"}`: queries executed SQL statements. You can set `Value` to `running` to query SQL statements that are being executed. You can also set Value to `failed` to query SQL statements that failed to be executed.
   * *   `{"Type":"cost","Min":"10","Max":"200"}`: queries SQL statements whose execution durations are in the range of 10 to 200 milliseconds. You can also customize the maximum and minimum execution durations.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Type":"status","Value":"finished"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group to which the SQL statements belong.
   * 
   * > You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource group, database name, username, and source IP address of the SQL statements to be queried.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > Only data within the last 14 days can be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 1632931200000
   */
  startTime?: string;
  /**
   * @remarks
   * The username that is used to execute the SQL statements.
   * 
   * > You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource group, database name, username, and source IP address of the SQL statements to be queried.
   * 
   * @example
   * test_user
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      DBClusterId: 'DBClusterId',
      database: 'Database',
      endTime: 'EndTime',
      keyword: 'Keyword',
      lang: 'Lang',
      maxPeakMemory: 'MaxPeakMemory',
      maxScanSize: 'MaxScanSize',
      minPeakMemory: 'MinPeakMemory',
      minScanSize: 'MinScanSize',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      patternId: 'PatternId',
      queryCondition: 'QueryCondition',
      regionId: 'RegionId',
      resourceGroup: 'ResourceGroup',
      startTime: 'StartTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      DBClusterId: 'string',
      database: 'string',
      endTime: 'string',
      keyword: 'string',
      lang: 'string',
      maxPeakMemory: 'number',
      maxScanSize: 'number',
      minPeakMemory: 'number',
      minScanSize: 'number',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      patternId: 'string',
      queryCondition: 'string',
      regionId: 'string',
      resourceGroup: 'string',
      startTime: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The queried SQL statements.
   */
  querys?: DescribeDiagnosisRecordsResponseBodyQuerys[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 109462AF-B5FA-3D5A-9377-B27E5B******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      querys: 'Querys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      querys: { 'type': 'array', 'itemType': DescribeDiagnosisRecordsResponseBodyQuerys },
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
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The language of file titles and error messages. Valid values:
   * 
   * *   **zh**: simplified Chinese
   * *   **en**: English
   * *   **ja**: Japanese
   * *   **zh-tw**: traditional Chinese
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the query.
   * 
   * >  You can call the [DescribeDiagnosisRecords](https://help.aliyun.com/document_detail/308207.html) operation to query the SQL summary information of a specified AnalyticDB for MySQL cluster, including the query ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021070216432217201616806503453******
   */
  processId?: string;
  /**
   * @remarks
   * The IP address and port number of the AnalyticDB for MySQL frontend node on which the SQL statement is executed.
   * 
   * >  You can call the [DescribeDiagnosisRecords](https://help.aliyun.com/document_detail/308207.html) operation to query the SQL summary information of a specified AnalyticDB for MySQL cluster, including the IP address and port number of the frontend node.
   * 
   * @example
   * 192.45.***.***:3145
   */
  processRcHost?: string;
  /**
   * @remarks
   * The execution start time of the SQL statement. Specify the time in the UNIX timestamp format. Unit: milliseconds.
   * 
   * >  You can call the [DescribeDiagnosisRecords](https://help.aliyun.com/document_detail/308207.html) operation to query the SQL summary information of a specified AnalyticDB for MySQL cluster, including the execution start time of the SQL statement.
   * 
   * @example
   * 1625215402000
   */
  processStartTime?: number;
  /**
   * @remarks
   * The state of the SQL statement. Valid values:
   * 
   * *   **running**
   * 
   * *   **finished**
   * 
   * *   **failed**
   * 
   * > You can call the [DescribeDiagnosisRecords](https://help.aliyun.com/document_detail/308207.html) operation to query the SQL summary information of a specified AnalyticDB for MySQL cluster, including the state of the SQL statement.
   * 
   * @example
   * running
   */
  processState?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      lang: 'Lang',
      processId: 'ProcessId',
      processRcHost: 'ProcessRcHost',
      processStartTime: 'ProcessStartTime',
      processState: 'ProcessState',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      lang: 'string',
      processId: 'string',
      processRcHost: 'string',
      processStartTime: 'number',
      processState: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSQLInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * Execution details of the SQL statement, including the SQL statement text, statistics, execution plan, and operator information.
   */
  diagnosisSQLInfo?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1
   */
  requestId?: string;
  /**
   * @remarks
   * Execution details of the query by stage.
   */
  stageInfos?: DescribeDiagnosisSQLInfoResponseBodyStageInfos[];
  static names(): { [key: string]: string } {
    return {
      diagnosisSQLInfo: 'DiagnosisSQLInfo',
      requestId: 'RequestId',
      stageInfos: 'StageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosisSQLInfo: 'string',
      requestId: 'string',
      stageInfos: { 'type': 'array', 'itemType': DescribeDiagnosisSQLInfoResponseBodyStageInfos },
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

export class DescribeDiagnosisTasksRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The IP address from which the query was initiated.
   * 
   * @example
   * 192.168.XX.XX
   */
  host?: string;
  /**
   * @remarks
   * The order in which to sort the tasks by field. Specify the value in the JSON format. Example: `[{"Field":"CreateTime", "Type":"desc"}]`.
   * 
   * > 
   * 
   * *   `Field` specifies the field that is used to sort the tasks. Valid values of Field: `State`, `CreateTime`, `DBName`, `ProcessID`, `UpdateTime`, `JobName`, and `ProcessRows`.
   * 
   * *   `Type` specifies the sort order. Valid values of Type: `Desc` and `Asc`. The values are case-insensitive.
   * 
   * @example
   * [{"Field":"StartTime", "Type": "desc" }]
   */
  order?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   30 (default)
   * *   50
   * *   100
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The query ID.
   * 
   * > You can call the [DescribeProcessList](https://help.aliyun.com/document_detail/190092.html) operation to query the IDs of queries that are being executed.
   * 
   * This parameter is required.
   * 
   * @example
   * 202011191048151921681492420315100****
   */
  processId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of a stage in the query that is specified by the `ProcessId` parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * Stage[26]
   */
  stageId?: string;
  /**
   * @remarks
   * The state of the asynchronous import or export task to be queried. Valid values:
   * 
   * *   **RUNNING**
   * *   **FINISHED**
   * *   **FAILED**
   * 
   * @example
   * RUNNING
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      host: 'Host',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processId: 'ProcessId',
      regionId: 'RegionId',
      stageId: 'StageId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      host: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      processId: 'string',
      regionId: 'string',
      stageId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisTasksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0983B43-B2EC-536A-8791-142B5CF1E9B6
   */
  requestId?: string;
  /**
   * @remarks
   * The queried tasks.
   */
  taskList?: DescribeDiagnosisTasksResponseBodyTaskList[];
  /**
   * @remarks
   * The total number of tasks in the stage.
   * 
   * @example
   * 33
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskList: 'TaskList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': DescribeDiagnosisTasksResponseBodyTaskList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiagnosisTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDiagnosisTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the detailed information of all AnalyticDB for MySQL clusters within a specific region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The languages available for file titles and some error messages. Default value: zh. Valid values:
   * 
   * *   **zh**: Simplified Chinese
   * *   **en**: English
   * *   **ja**: Japanese
   * *   **zh-tw**: Traditional Chinese
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the regions and zones supported by AnalyticDB for MySQL, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      lang: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadRecordsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Details about the download tasks.
   */
  records?: DescribeDownloadRecordsResponseBodyRecords[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 987F51BE-C4CB-332A-B159-63CE87******
   */
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

export class DescribeEIURangeRequest extends $tea.Model {
  /**
   * @remarks
   * The specifications of computing resources.
   * 
   * >  You can call the [DescribeComputeResource](https://help.aliyun.com/document_detail/469002.html) operation to query the specifications of computing resources.
   * 
   * @example
   * {
   *       "RealValue": "32Core128GBNEW",
   *       "DisplayValue": "32Core128GB"
   *     }
   */
  computeResource?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * *   This parameter can be left empty when **Operation** is set to **Buy**.
   * *   This parameter must be specified when **Operation** is set to **Upgrade** or **Downgrade**.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * @example
   * am-bp16t5ci7r74s****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The version of the AnalyticDB for MySQL Data Warehouse Edition cluster. Set the value to **3.0**.
   * 
   * @example
   * 3.0
   */
  DBClusterVersion?: string;
  /**
   * @remarks
   * The type of the operation. Valid values:
   * 
   * *   **Buy**: purchases a cluster.
   * *   **Modify**: changes configurations of a cluster.
   * 
   * @example
   * Buy
   */
  operation?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The specifications of storage resources. Default value: **8ACU**. Valid values:
   * 
   * *   **8ACU**
   * *   **12ACU**
   * *   **16ACU**
   * 
   * @example
   * 8ACU
   */
  storageSize?: string;
  /**
   * @remarks
   * The type of the sub-operation. Valid values:
   * 
   * *   **Upgrade**: upgrades a cluster.
   * *   **Downgrade**: downgrades a cluster.
   * 
   * @example
   * Upgrade
   */
  subOperation?: string;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/612293.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      DBClusterId: 'DBClusterId',
      DBClusterVersion: 'DBClusterVersion',
      operation: 'Operation',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageSize: 'StorageSize',
      subOperation: 'SubOperation',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'string',
      DBClusterId: 'string',
      DBClusterVersion: 'string',
      operation: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageSize: 'string',
      subOperation: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEIURangeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried information about the number of EIUs.
   */
  EIUInfo?: DescribeEIURangeResponseBodyEIUInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      EIUInfo: 'EIUInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EIUInfo: DescribeEIURangeResponseBodyEIUInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEIURangeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEIURangeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEIURangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticDailyPlanRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The start date of the current-day scaling plan. Specify the date in the yyyy-MM-dd format.
   * 
   * @example
   * 2022-12-02
   */
  elasticDailyPlanDay?: string;
  /**
   * @remarks
   * The execution state of the current-day scaling plan. Separate multiple values with commas (,). Valid values:
   * 
   * *   **1**: The scaling plan is not executed.
   * *   **2**: The scaling plan is being executed.
   * *   **3**: The scaling plan is executed.
   * *   **4**: The scaling plan fails to be executed.
   * 
   * @example
   * 3
   */
  elasticDailyPlanStatusList?: string;
  /**
   * @remarks
   * The name of the scaling plan. Valid values:
   * 
   * *   The name must be 2 to 30 characters in length.
   * *   The name can contain letters, digits, and underscores (_).
   * 
   * @example
   * realtimeplan
   */
  elasticPlanName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * >  You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/466685.html) operation to query the resource group name.
   * 
   * @example
   * test
   */
  resourcePoolName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      elasticDailyPlanDay: 'ElasticDailyPlanDay',
      elasticDailyPlanStatusList: 'ElasticDailyPlanStatusList',
      elasticPlanName: 'ElasticPlanName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourcePoolName: 'ResourcePoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      elasticDailyPlanDay: 'string',
      elasticDailyPlanStatusList: 'string',
      elasticPlanName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourcePoolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticDailyPlanResponseBody extends $tea.Model {
  /**
   * @remarks
   * Details of the current-day scaling plans.
   */
  elasticDailyPlanList?: DescribeElasticDailyPlanResponseBodyElasticDailyPlanList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticDailyPlanList: 'ElasticDailyPlanList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticDailyPlanList: { 'type': 'array', 'itemType': DescribeElasticDailyPlanResponseBodyElasticDailyPlanList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticDailyPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeElasticDailyPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeElasticDailyPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp278jg9****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether the scaling plan takes effect. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  elasticPlanEnable?: boolean;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * *   The name must be 2 to 30 characters in length.
   * *   The name can contain letters, digits, and underscores (_).
   * 
   * > If you do not specify this parameter, the information about all scaling plans for the specified cluster is returned.
   * 
   * @example
   * realtime
   */
  elasticPlanName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/466685.html) operation to query the resource group name.
   * 
   * @example
   * USER_DEFAULT
   */
  resourcePoolName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      elasticPlanEnable: 'ElasticPlanEnable',
      elasticPlanName: 'ElasticPlanName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourcePoolName: 'ResourcePoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      elasticPlanEnable: 'boolean',
      elasticPlanName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourcePoolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried scaling plans.
   */
  elasticPlanList?: DescribeElasticPlanResponseBodyElasticPlanList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticPlanList: 'ElasticPlanList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticPlanList: { 'type': 'array', 'itemType': DescribeElasticPlanResponseBodyElasticPlanList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeElasticPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcessivePrimaryKeysRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1u8c0mgfg58****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * @example
   * 2023-05-15T07:15Z
   */
  endTime?: string;
  /**
   * @remarks
   * The display language of the suggestion. Valid values:
   * 
   * *   **zh (default)**: simplified Chinese.
   * *   **en**: English.
   * *   **ja**: Japanese.
   * *   **zh-tw**: traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The order by which to sort query results. Specify the parameter value in the JSON format. Example: `[{"Field":"TableSchema","Type":"Asc"}]`.
   * 
   * *   `Field` specifies the field by which to sort the query results. Valid values:
   * 
   *     *   `TableSchema`: the name of the database to which the table belongs.
   *     *   `TableName`: the name of the table.
   *     *   `AccessCount`: the number of accesses to the table.
   * 
   * *   `Type` specifies the sorting order. Valid values:
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * >  If you do not specify this parameter, query results are sorted in ascending order based on the database and the table.
   * 
   * @example
   * [{"Field":"TableName","Type":"Desc"}]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * @example
   * 2021-09-30T00:10Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      lang: 'Lang',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      lang: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcessivePrimaryKeysResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * >  This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   * 
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "1906102576997697",
   *     "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcNqPqHV6lwR4INiAGjIvK1ngXxN1O+6ORRB6A8YvztEOGywOk81ZmuNk0YrNy+qk7+UVDTHeXKsy8h9e/ePY/LMidj0RCmDpo/YpCumd0UGe0qEPe2U+UJAm/+UHlnEFLVg6BP3yIB5D++MCy7mgWm8Kwyhk62IeYly4hQ+5IpXjkh1GQXuDgLVVPVpxEek9n30vnCUL4KsaMgfa7dgojb+3TM8xGsD2zVK5STJNrsXclscIJEqyNXd7CBYiRJVZi1HPO6drN9WW0chLpCSTgjO8n0bNanZaxXKumW9PSwV58UoSFASeMWfZK3TLngX+oq8nGmnTwcJosVjfF4RGzAnS1IXt0Q9N2WHDnpwyLBU/nOz7Hsy8IZ+h+OVjsBTXSM9688/vOF707a5mNzpETvQeGRcua3A5livcKAM2cML0yeUs/Zyj/+BGqtVa+wektspDHC/CECh6R5lxQjRmUdPawY8VDs2onmdLuEH8DdmYt+Yv/jBFBUMWOyAluzkPYcX5nuQKouCIUJUFTSbsJsuH5CTIh7Ls5rbmkj+T1qTVz8gnDR8LxwaqoMSna+elXgVyOOxXtMkenVntsmoC3p/4G7yTPL1hu8JyWGIIvZHZGGLXGEH7FeSuMV8buKxPGFWG3arG8e9LGvDdz5dgTien4y6G5AQ0o1iQdXDos5VWdH3u7k5PrsvdEOpvMi6uSd8a42na80FsYlgGlwM5upydcWUC5Un2HCkJpT1xgk2L6shdVTrK6bidRrqE784FhW9bBQePzGaxSupPENZya0VUctRt+7uq3QwIn4y5jzjgX0E0jgmqPrgiVDjBesMQZYfGPCGysWYWYzfoh+G6V7N2VVGtNnGUwNWzM0WJBPONAgxPv+AmixFRCQ==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "202515810214480629",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "adb:DescribeExcessivePrimaryKeys"
   *   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried detection items and detection results.
   */
  detectionItems?: DescribeExcessivePrimaryKeysResponseBodyDetectionItems[];
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The queried tables.
   */
  tables?: DescribeExcessivePrimaryKeysResponseBodyTables[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      DBClusterId: 'DBClusterId',
      detectionItems: 'DetectionItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tables: 'Tables',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      DBClusterId: 'string',
      detectionItems: { 'type': 'array', 'itemType': DescribeExcessivePrimaryKeysResponseBodyDetectionItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tables: { 'type': 'array', 'itemType': DescribeExcessivePrimaryKeysResponseBodyTables },
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcessivePrimaryKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExcessivePrimaryKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeExcessivePrimaryKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInclinedTablesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bpxxxxxxxx47
   */
  DBClusterId?: string;
  lang?: string;
  /**
   * @remarks
   * The order in which queries are sorted in the JSON format based on the specified fields. Specify the fields used to sort the queries and the order type.
   * 
   * Example:
   * 
   * ```
   * 
   * [
   * 
   *     {
   * 
   *         "Field":"Name",
   * 
   *         "Type":"Asc"
   * 
   *     }
   * 
   * ]
   * ```
   * 
   * In the preceding code, Field indicates the field used to sort queries. Set the value of Field to Name.
   * 
   * Type indicates the order type. Valid values of Type: Desc and Asc. A value of Desc indicates a descending order. A value of Asc indicates an ascending order.
   * 
   * Both fields are not case-sensitive.
   * 
   * @example
   * [      {          "Field":"Name",          "Type":"Asc"      }  ]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * *   30
   * *   50
   * *   100
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the table. Valid values:
   * 
   * *   FactTable
   * *   DimensionTable
   * 
   * This parameter is required.
   * 
   * @example
   * FactTable
   */
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      lang: 'Lang',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      lang: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tableType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInclinedTablesResponseBody extends $tea.Model {
  detectionItems?: DescribeInclinedTablesResponseBodyDetectionItems[];
  /**
   * @remarks
   * The monitoring information about tables.
   */
  items?: DescribeInclinedTablesResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      detectionItems: 'DetectionItems',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectionItems: { 'type': 'array', 'itemType': DescribeInclinedTablesResponseBodyDetectionItems },
      items: DescribeInclinedTablesResponseBodyItems,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInclinedTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInclinedTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInclinedTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKernelVersionRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * > You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKernelVersionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The minor versions to which you can update the current minor version of the cluster.
   */
  availableKernelVersions?: DescribeKernelVersionResponseBodyAvailableKernelVersions[];
  /**
   * @remarks
   * The maintenance expiration time of the version. The time follows the ISO 8601 standard in the yyyy-MM-DD HH:mm:ss format. The time is displayed in UTC. After the time arrives, the system no longer maintains the version. If any issues occur, update the minor version of the cluster to a later version.
   * 
   * @example
   * 2023-06-01T10:36:30Z
   */
  expireDate?: string;
  /**
   * @remarks
   * The minor version of the cluster. Example: **3.1.8**.
   * 
   * @example
   * 3.1.8
   */
  kernelVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableKernelVersions: 'AvailableKernelVersions',
      expireDate: 'ExpireDate',
      kernelVersion: 'KernelVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableKernelVersions: { 'type': 'array', 'itemType': DescribeKernelVersionResponseBodyAvailableKernelVersions },
      expireDate: 'string',
      kernelVersion: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKernelVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeKernelVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeKernelVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadTasksRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters in a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp2590j****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database that is involved in the import or export task.
   * 
   * @example
   * adb_demo
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-05-18T06:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The order in which to sort the tasks by field. Specify the field and the sort order in the JSON format. Example: `[{"Field":"CreateTime", "Type":"desc"}]`.
   * 
   * > 
   * 
   * *   `Field` specifies the field that is used to sort the tasks. Valid values of Field: `State`, `CreateTime`, `DBName`, `ProcessID`, `UpdateTime`, `JobName`, and `ProcessRows`.
   * 
   * *   `Type` specifies the sort order. Valid values of Type: `Desc` and `Asc`. The values are case-insensitive.
   * 
   * @example
   * [{"Field":"CreateTime", "Type":"desc"}]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * > We recommend that you set the query start time to any point in time within 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-05-18T06:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the asynchronous import or export task to be queried. Valid values:
   * 
   * *   **INIT**: The task is being initialized.
   * *   **RUNNING**: The task is running.
   * *   **FINISH**: The task is successful.
   * *   **FAILED**: The task fails.
   * 
   * @example
   * FINISH
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      endTime: 'EndTime',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBName: 'string',
      endTime: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadTasksRecordsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp2590j****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried asynchronous import and export tasks.
   */
  loadTasksRecords?: DescribeLoadTasksRecordsResponseBodyLoadTasksRecords[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C60B05DB-2B77-421A-98E9-92C20E******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      loadTasksRecords: 'LoadTasksRecords',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      loadTasksRecords: { 'type': 'array', 'itemType': DescribeLoadTasksRecordsResponseBodyLoadTasksRecords },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadTasksRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLoadTasksRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLoadTasksRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaintenanceActionRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to return the information about pending or historical O\\&M events. Valid values:
   * 
   * *   **0**: returns the information about pending O\\&M event.
   * *   **1**: returns the information about historical O\\&M event.
   * 
   * If you do not specify this parameter, the information about pending O\\&M event are returned.
   * 
   * @example
   * 1
   */
  isHistory?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **30**, **50**, and **100**. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. Valid values:
   * 
   * *   The ID of the region where the O\\&M event occurs. Example: `cn-hangzhou`. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * *   You can also set Region to `all` to query the O\\&M events in all regions. If you set `Region` to `all`, you must set `TaskType` to `all`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the region where the O\\&M event occurs.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the O\\&M event. Valid values:
   * 
   * *   **rds_apsaradb_upgrade**: database software upgrades.
   * *   **all**: all the O\\&M events in all regions within the current account. If you set `Region` to `all`, you must set `TaskType` to `all`.
   * 
   * This parameter is required.
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      isHistory: 'IsHistory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHistory: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaintenanceActionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried O\\&M events.
   */
  items?: DescribeMaintenanceActionResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E774C8A9-8819-4A09-9E91-07C078******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
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
      items: { 'type': 'array', 'itemType': DescribeMaintenanceActionResponseBodyItems },
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

export class DescribeMaintenanceActionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMaintenanceActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMaintenanceActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOperatorPermissionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOperatorPermissionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The time when the authorization takes effect.
   * 
   * @example
   * 2019-05-20T05:41:19Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The time when the authorization expires.
   * 
   * @example
   * 2019-05-20T07:41:19Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The type of authorization. Valid values: Control | Data.
   * 
   * @example
   * Control,Data
   */
  privileges?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      DBClusterId: 'DBClusterId',
      expiredTime: 'ExpiredTime',
      privileges: 'Privileges',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      DBClusterId: 'string',
      expiredTime: 'string',
      privileges: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOperatorPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOperatorPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOperatorPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternPerformanceRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-18T18:05:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The SQL pattern ID.
   * 
   * > You can call the [DescribeSQLPatterns](https://help.aliyun.com/document_detail/321868.html) operation to query the information about all SQL patterns in an AnalyticDB for MySQL cluster within a period of time, including SQL pattern IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 3847585356974******
   */
  patternId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * > 
   * 
   * *   Only data within the last 14 days can be queried. For example, if the current date is November 22 (UTC+8), you can query data on a day as early as November 9 by setting StartTime to 2021-11-08T16:00:00Z. If you set StartTime to a value earlier than 2021-11-08T16:00:00Z, the Performances parameter is empty.
   * 
   * *   The maximum time range that can be specified is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-18T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      patternId: 'PatternId',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      patternId: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternPerformanceResponseBody extends $tea.Model {
  accessIp?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-18T18:05Z
   */
  endTime?: string;
  failedCount?: number;
  /**
   * @remarks
   * The queried performance metrics.
   */
  performances?: DescribePatternPerformanceResponseBodyPerformances[];
  queryCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 210f47011634026610213529******
   */
  requestId?: string;
  SQLPattern?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-18T00:00Z
   */
  startTime?: string;
  tables?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      accessIp: 'AccessIp',
      endTime: 'EndTime',
      failedCount: 'FailedCount',
      performances: 'Performances',
      queryCount: 'QueryCount',
      requestId: 'RequestId',
      SQLPattern: 'SQLPattern',
      startTime: 'StartTime',
      tables: 'Tables',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIp: 'string',
      endTime: 'string',
      failedCount: 'number',
      performances: { 'type': 'array', 'itemType': DescribePatternPerformanceResponseBodyPerformances },
      queryCount: 'number',
      requestId: 'string',
      SQLPattern: 'string',
      startTime: 'string',
      tables: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternPerformanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePatternPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePatternPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The keyword in an SQL statement, which is used to filter queries. Set the value to **SELECT**.
   * 
   * @example
   * SELECT
   */
  keyword?: string;
  /**
   * @remarks
   * The order in which queries are sorted based on the specified fields. Specify this parameter as an ordered JSON array in the `[{"Field":"Time","Type":"Desc" },{ "Field":"User", "Type":"Asc" }]` format.
   * 
   * *   **Field** specifies the field used to sort queries. Valid values: Time, User, Host, and DB.
   * *   **Type** specifies the sorting sequence. Valid values: **Desc** and **Asc**.
   * 
   * @example
   * [ { "Field":"Time","Type":"Desc" },  { "Field":"User", "Type":"Asc" }]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 30. Valid values:
   * 
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The execution duration used to filter queries. Queries that take a longer time than the specified execution duration are displayed. Unit: seconds.
   * 
   * @example
   * 5
   */
  runningTime?: number;
  /**
   * @remarks
   * Specifies whether to show a complete SQL statement. Valid values:
   * 
   * *   **True**: shows a complete SQL statement.
   * *   **False**: shows only the first 100 characters of an SQL statement.
   * 
   * >  The default value is False.
   * 
   * @example
   * True
   */
  showFull?: boolean;
  /**
   * @remarks
   * The name of the user used to filter queries.
   * 
   * @example
   * test
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      keyword: 'Keyword',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      runningTime: 'RunningTime',
      showFull: 'ShowFull',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      keyword: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      runningTime: 'number',
      showFull: 'boolean',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBody extends $tea.Model {
  /**
   * @remarks
   * Details of the queries.
   */
  items?: DescribeProcessListResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeProcessListResponseBodyItems,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProcessListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProcessListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  /**
   * @remarks
   * Th language of the `LocalName` response parameter. Valid values:
   * 
   * *   **zh-CN**: Chinese.
   * *   **en-US**: English.
   * *   **ja**: Japanese.
   * 
   * > If you do not specify this parameter, the Chinese language is used.
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried regions.
   */
  regions?: DescribeRegionsResponseBodyRegions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 421794A3-72A5-5D27-9E8B-A75A4C503E17
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

export class DescribeResubmitConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-8vbyw9awuj141haf9
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * >  You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the resource group name of a cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929XXXX
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
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

export class DescribeResubmitConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition clusters within a region.
   * 
   * @example
   * am-8vbyw9awuj141haf9
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D217417-BBA7-566C-9B9D-FFCBC86112B0
   */
  requestId?: string;
  /**
   * @remarks
   * The job resubmission rules.
   */
  rules?: DescribeResubmitConfigResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeResubmitConfigResponseBodyRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResubmitConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResubmitConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeResubmitConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQAConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-8vbyw9awuj141haf9
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * >  You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/612410.html) operation to query the resource group name of a cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQAConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * @example
   * am-8vbyw9awuj141haf9
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBE843D8-964D-5EA3-9D31-822125611B6E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether short query acceleration (SQA) is enabled.
   * 
   * @example
   * off
   */
  SQAStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      requestId: 'RequestId',
      SQAStatus: 'SQAStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      requestId: 'string',
      SQAStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQAConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSQAConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSQAConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPatternsRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters in a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-30T00:15:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The keyword that is used for the query.
   * 
   * @example
   * SELECT
   */
  keyword?: string;
  /**
   * @remarks
   * The language of file titles and error messages. Valid values:
   * 
   * *   **zh** (default): simplified Chinese.
   * *   **en**: English.
   * *   **ja**: Japanese.
   * *   **zh-tw**: traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The order by which to sort query results. Specify the parameter value in the JSON format. Example: `[{"Field":"AverageQueryTime","Type":"Asc"}]`.
   * 
   * *   `Field` specifies the field by which to sort the query results. Valid values:
   * 
   *     *   `PatternCreationTime`: the earliest commit time of the SQL pattern within the time range to query.
   *     *   `AverageQueryTime`: the average total amount of time consumed by the SQL pattern within the time range to query.
   *     *   `MaxQueryTime`: the maximum total amount of time consumed by the SQL pattern within the time range to query.
   *     *   `AverageExecutionTime`: the average execution duration of the SQL pattern within the time range to query.
   *     *   `MaxExecutionTime`: the maximum execution duration of the SQL pattern within the time range to query.
   *     *   `AveragePeakMemory`: the average peak memory usage of the SQL pattern within the time range to query.
   *     *   `MaxPeakMemory`: the maximum peak memory usage of the SQL pattern within the time range to query.
   *     *   `AverageScanSize`: the average amount of data scanned based on the SQL pattern within the time range to query.
   *     *   `MaxScanSize`: the maximum amount of data scanned based on the SQL pattern within the time range to query.
   *     *   `QueryCount`: the number of queries performed in association with the SQL pattern within the time range to query.
   *     *   `FailedCount`: the number of failed queries performed in association with the SQL pattern within the time range to query.
   * 
   * *   `Type` specifies the sorting order. Valid values (case-insensitive):
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"Field":"AverageQueryTime","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * > If you do not specify this parameter, the value **1** is used.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * > If you do not specify this parameter, the value **30** is used.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * > 
   * 
   * *   Only data within the last 14 days can be queried. For example, if the current time is 2021-11-22T12:00:00Z, you can query SQL patterns at a point in time as early as 2021-11-09T12:00:00Z.
   * 
   * *   The maximum time range that can be specified is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-30T00:10:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      keyword: 'Keyword',
      lang: 'Lang',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      keyword: 'string',
      lang: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPatternsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The queried SQL patterns.
   */
  patternDetails?: DescribeSQLPatternsResponseBodyPatternDetails[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6BE0EDD1-0DE6-3EB6-81BF-BFE4F2******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      patternDetails: 'PatternDetails',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      patternDetails: { 'type': 'array', 'itemType': DescribeSQLPatternsResponseBodyPatternDetails },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPatternsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSQLPatternsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSQLPatternsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-****************
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The query ID.
   * 
   * >  You can call the [DescribeProcessList](https://help.aliyun.com/document_detail/612277.html) operation to query the IDs of queries that are being executed.
   * 
   * This parameter is required.
   * 
   * @example
   * 202105271604431720161662490345*******
   */
  processId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      processId: 'ProcessId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      processId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanResponseBody extends $tea.Model {
  /**
   * @remarks
   * The execution information about the SQL statement.
   */
  detail?: DescribeSQLPlanResponseBodyDetail;
  /**
   * @remarks
   * The original information about the SQL statement.
   * 
   * @example
   * {\\"queryId\\":\\"20210527_160443_10581_hdhzr\\",\\"session\\":{\\"queryId\\":\\"20210527_160443_10581_hdhzr\\",\\"hasSharedStage\\":false,\\"parentId\\":0}}
   */
  originInfo?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 22D6DEF0-CBC7-4388-A41C-D5FD62******
   */
  requestId?: string;
  /**
   * @remarks
   * The queried plan in different stages.
   */
  stageList?: DescribeSQLPlanResponseBodyStageList[];
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      originInfo: 'OriginInfo',
      requestId: 'RequestId',
      stageList: 'StageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: DescribeSQLPlanResponseBodyDetail,
      originInfo: 'string',
      requestId: 'string',
      stageList: { 'type': 'array', 'itemType': DescribeSQLPlanResponseBodyStageList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSQLPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSQLPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanTaskRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * 201907241445301720211111570315107****
   */
  processId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The stage of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1785135913****
   */
  stageId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      processId: 'ProcessId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      stageId: 'StageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      processId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      stageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tasks.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSQLPlanTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSQLPlanTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchemasRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchemasResponseBody extends $tea.Model {
  /**
   * @remarks
   * The databases.
   */
  items?: DescribeSchemasResponseBodyItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeSchemasResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchemasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSchemasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSchemasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1rqvm70uh2****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time. The specified time range must be less than seven days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-05-27T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The order in which to sort the retrieved entries by field. Specify this parameter in the JSON format. The value is an ordered array that uses the order of the input array and contains `Field` and `Type`. Example: `[{"Field":"ExecutionStartTime","Type":"Desc"},{"Field":"ScanRows","Type":"Asc"}]`.
   * 
   * *   `Field`: the field that is used to sort the retrieved entries. Valid values:
   * 
   *     *   **HostAddress**: the IP address of the client that is used to connect to the database.
   *     *   **UserName**: the username.
   *     *   **ExecutionStartTime**: the start time of the query execution.
   *     *   **QueryTime**: the amount of time consumed to execute the SQL statement.
   *     *   **PeakMemoryUsage**: the maximum memory usage when the SQL statement is executed.
   *     *   **ScanRows**: the number of rows to be scanned from a data source in the task.
   *     *   **ScanSize**: the amount of data to be scanned.
   *     *   **ScanTime**: the total amount of time consumed to scan data.
   *     *   **PlanningTime**: the amount of time consumed to generate execution plans.
   *     *   **WallTime**: the accumulated CPU Time values of all operators in the query on each node.
   *     *   **ProcessID**: the ID of the process.
   * 
   * *   `Type`: the sorting type of the retrieved entries. Valid values:
   * 
   *     *   **Desc**: descending order
   *     *   **Asc**: ascending order
   * 
   * @example
   * [{"Field":"ExecutionStartTime","Type":"Desc"},{"Field":"ScanRows","Type":"Asc"}]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30**, **50**, and **100**. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the process.
   * 
   * @example
   * 2021052716044317201616624903453******
   */
  processID?: string;
  /**
   * @remarks
   * The range conditions used to filter specified fields, including `Max` and `Min`. Specify this parameter in the JSON format. Example: `[{"Field":"ScanSize","Min":"1000000","Max":"10000000"},{"Field":"QueryTime","Min":"1000","Max":"10000"}]`.
   * 
   * `Field`: the field to be filtered. Valid values:
   * 
   * *   **ScanSize**: the amount of data to be scanned. Unit: KB.
   * *   **QueryTime**: the amount of time consumed to execute the statement. Unit: milliseconds.
   * *   **PeakMemoryUsage**: the maximum memory usage when the SQL statement is executed. Unit: KB.
   * 
   * >  `Min` indicates the minimum value of the query range (left operand). `Max` indicates the maximum value of the query range (right operand). Max and Min are both of the String type.
   * 
   * @example
   * [{"Field":"ScanSize","Min":"1000000","Max":"10000000"},{"Field":"QueryTime","Min":"1000","Max":"10000"}]
   */
  range?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-05-20T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the query. Valid values:
   * 
   * *   **Successed**: successful
   * *   **Failed**: failed
   * 
   * @example
   * Successed
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      endTime: 'EndTime',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processID: 'ProcessID',
      range: 'Range',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBName: 'string',
      endTime: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      processID: 'string',
      range: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp1rqvm70uh2****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Details of the slow query logs.
   */
  items?: DescribeSlowLogRecordsResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7559209-7EC3-41E1-8F78-156990******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      items: DescribeSlowLogRecordsResponseBodyItems,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlowLogRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSlowLogRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlPatternRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The order by which to sort query results. Specify the parameter value in the JSON string format. Example: `[{"Field":"Pattern","Type":"Asc"}]`. Parameters:
   * 
   * *   `Field` specifies the field by which to sort the query results. Valid values:
   * 
   *     *   `Pattern`: the SQL pattern.
   *     *   `AccessIP`: the IP address of the client.
   *     *   `User`: the username.
   *     *   `QueryCount`: the number of queries performed in association with the SQL pattern within the time range to query.
   *     *   `AvgPeakMemory`: the average peak memory usage of the SQL pattern within the time range to query. Unit: KB.
   *     *   `MaxPeakMemory`: the maximum peak memory usage of the SQL pattern within the time range to query. Unit: KB.
   *     *   `AvgCpuTime`: the average execution duration of the SQL pattern within the time range to query. Unit: milliseconds.
   *     *   `MaxCpuTime`: the maximum execution duration of the SQL pattern within the time range to query. Unit: milliseconds.
   *     *   `AvgStageCount`: the average number of stages.
   *     *   `MaxStageCount`: the maximum number of stages.
   *     *   `AvgTaskCount`: the average number of tasks.
   *     *   `MaxTaskCount`: the maximum number of tasks.
   *     *   `AvgScanSize`: the average amount of data scanned based on the SQL pattern within the time range to query. Unit: KB.
   *     *   `MaxScanSize`: the maximum amount of data scanned based on the SQL pattern within the time range to query. Unit: KB.
   * 
   * *   `Type` specifies the sorting order. Valid values:
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * > 
   * 
   * *   If you do not specify this parameter, query results are sorted in ascending order of `Pattern`.
   * 
   * *   If you want to sort query results by `AccessIP`, you must set the `Type` parameter to `accessip`. If you want to sort query results by `User`, you must leave the `Type` parameter empty or set it to `user`.
   * 
   * @example
   * [{"Field":"Pattern","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The value must be a positive integer. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The keyword that is used for the query.
   * 
   * > If you do not specify this parameter, all SQL patterns of the AnalyticDB for MySQL cluster within the time period specified by `StartTime` are returned.
   * 
   * @example
   * SELECT
   */
  sqlPattern?: string;
  /**
   * @remarks
   * The start date to query. Specify the time in the *yyyy-MM-dd* format. The time must be in UTC.
   * 
   * > Only data within the last 30 days can be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-08-30
   */
  startTime?: string;
  /**
   * @remarks
   * The dimension by which to aggregate the SQL patterns. Valid values:
   * 
   * *   `user`: aggregates the SQL patterns by user.
   * *   `accessip`: aggregates the SQL patterns by client IP address.
   * 
   * > If you do not specify this parameter, the SQL patterns are aggregated by `user`.
   * 
   * @example
   * user
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sqlPattern: 'SqlPattern',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sqlPattern: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlPatternResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried SQL pattern.
   */
  items?: DescribeSqlPatternResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6F2D1B4-2C9F-5622-B424-5E7965******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeSqlPatternResponseBodyItems },
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

export class DescribeSqlPatternResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSqlPatternResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSqlPatternResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableAccessCountRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the details of all AnalyticDB for MySQL clusters within a specified region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The order by which to sort query results. Specify the parameter value in the JSON string format. Example: `[{"Field":"TableSchema","Type":"Asc"}]`.
   * 
   * *   `Field` indicates the field that is used to sort the retrieved entries. Valid values:
   * 
   *     *   `TableSchema`: the name of the database to which the table belongs.
   *     *   `TableName`: the name of the table.
   *     *   `AccessCount`: the number of accesses to the table.
   * 
   * *   `Type` indicates the sorting method. Valid values:
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * >  If this parameter is not specified, query results are sorted in ascending order of the database to which a specific table belongs.
   * 
   * @example
   * [{"Field":"TableSchema","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The value must be a positive integer. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the regions and zones supported by AnalyticDB for MySQL, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The date to query. Specify the time in the *yyyy-MM-dd* format. The time must be in UTC.
   * 
   * >  Only data for the last 30 days can be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-08-30
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the specific table.
   * 
   * >  If this parameter is not specified, the number of accesses to all tables within the specified cluster for a specified date is returned.
   * 
   * @example
   * CUSTOMER
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableAccessCountResponseBody extends $tea.Model {
  /**
   * @remarks
   * Details about the table usage.
   */
  items?: DescribeTableAccessCountResponseBodyItems[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C242707A-01D1-54DA-A5F6-671557******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeTableAccessCountResponseBodyItems },
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

export class DescribeTableAccessCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTableAccessCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTableAccessCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The average number of rows in partitions.
   * 
   * @example
   * 0
   */
  avgSize?: number;
  /**
   * @remarks
   * The list of partitions.
   */
  items?: DescribeTableDetailResponseBodyItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      avgSize: 'AvgSize',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgSize: 'number',
      items: DescribeTableDetailResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTableDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTableDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablePartitionDiagnoseRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The order by which to sort query results. Specify the parameter value in the JSON string format. Example: `[{"Field":"TotalSize","Type":"Desc"}]`.
   * 
   * *   `Field` specifies the field by which to sort the query results. Valid values:
   * 
   *     *   `SchemaName`: the name of the database to which the table belongs.
   *     *   `TableName`: the name of the table.
   *     *   `TotalSize`: the total data size of the table.
   *     *   `SpaceRatio`: the storage percentage of the table.
   * 
   * *   `Type` specifies the sorting order. Valid values:
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * >  If you do not specify this parameter, the query results are sorted by the TotalSize field in descending order.
   * 
   * @example
   * [{\\"Field\\":\\"TotalSize\\",\\"Type\\":\\"Desc\\"}]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 30. Valid values:
   * 
   * *   30
   * *   50
   * *   100
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      lang: 'Lang',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      lang: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablePartitionDiagnoseResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried detection items and detection results.
   */
  detectionItems?: DescribeTablePartitionDiagnoseResponseBodyDetectionItems[];
  /**
   * @remarks
   * The table statistics.
   */
  items?: DescribeTablePartitionDiagnoseResponseBodyItems[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The recommended maximum number of rows in each list partition.
   * 
   * @example
   * 640000000
   */
  suggestMaxRecordsPerPartition?: number;
  /**
   * @remarks
   * The recommended minimum number of rows in each list partition.
   * 
   * @example
   * 64000000
   */
  suggestMinRecordsPerPartition?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      detectionItems: 'DetectionItems',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      suggestMaxRecordsPerPartition: 'SuggestMaxRecordsPerPartition',
      suggestMinRecordsPerPartition: 'SuggestMinRecordsPerPartition',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      detectionItems: { 'type': 'array', 'itemType': DescribeTablePartitionDiagnoseResponseBodyDetectionItems },
      items: { 'type': 'array', 'itemType': DescribeTablePartitionDiagnoseResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      suggestMaxRecordsPerPartition: 'number',
      suggestMinRecordsPerPartition: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablePartitionDiagnoseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTablePartitionDiagnoseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTablePartitionDiagnoseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableStatisticsRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query a list of cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The keyword that is used to query information by table name.
   * 
   * @example
   * you_table_name
   */
  keyword?: string;
  /**
   * @remarks
   * The order in which to sort the queried information. Specify this parameter as an ordered JSON array that consists of the `Field` and `Type` fields. Example: `[{ "Field":"TableName", "Type":"Asc" }]`.
   * 
   * *   `Field` specifies the field that is used to sort the queried information. The following fields are supported: `TableName`, ColdDataSize, DataSize, PrimaryKeyIndexSize, RowCount, IndexSize, SchemaName, and PartitionCount.
   * 
   * *   `Type` specifies the sorting order. Valid values (case-insensitive):
   * 
   *     *   **Desc**: descending order.
   *     *   **Asc**: ascending order.
   * 
   * @example
   * [ { "Field":"TableName", "Type":"Asc" } ]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      keyword: 'Keyword',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      keyword: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableStatisticsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried table statistics.
   */
  items?: DescribeTableStatisticsResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C4433FF-5D3A-4C3E-A19C-6D93B2******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      items: DescribeTableStatisticsResponseBodyItems,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTableStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTableStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried tables.
   */
  items?: DescribeTablesResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeTablesResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 225685759
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The queried task.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTaskInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTaskInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the VPC ID.
   * 
   * @example
   * vpc-bp13h7uzhulpuxvnp****
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vbpu1teend1qcosfojlz
   */
  vswId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/129857.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      vpcId: 'VpcId',
      vswId: 'VswId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      vpcId: 'string',
      vswId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
  requestId?: string;
  /**
   * @remarks
   * The queried vSwitches.
   */
  vSwitches?: DescribeVSwitchesResponseBodyVSwitches;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vSwitches: DescribeVSwitchesResponseBodyVSwitches,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVSwitchesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVSwitchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachUserENIRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachUserENIResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class DetachUserENIResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachUserENIResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachUserENIResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAdviceServiceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of Data Warehouse Edition (V3.0) clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf67culrr26q2****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAdviceServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The message returned for the operation. Valid values:
   * 
   * *   **Success** is returned if the operation is successful.
   * *   An error message is returned if the operation fails.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 57EC6CCA-A582-572C-A33D-F61845CBC03C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAdviceServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableAdviceServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableAdviceServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDiagnosisRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * The source IP addresses.
   * 
   * > You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource group, database name, username, and source IP address of the SQL statements to be queried.
   * 
   * @example
   * 106.11.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database on which the SQL statements are executed.
   * 
   * > You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource group, database name, username, and source IP address of the SQL statements to be queried.
   * 
   * @example
   * adb_demo
   */
  database?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > 
   * 
   * *   The end time must be later than the start time.
   * 
   * *   The maximum time range that can be specified is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1625220213000
   */
  endTime?: string;
  /**
   * @remarks
   * The keyword that is used for the query.
   * 
   * @example
   * select
   */
  keyword?: string;
  /**
   * @remarks
   * The language of file titles and error messages. Valid values:
   * 
   * *   **zh** (default): simplified Chinese.
   * *   **en**: English.
   * *   **ja**: Japanese.
   * *   **zh-tw**: traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum peak memory of the SQL statements. Unit: bytes.
   * 
   * @example
   * 88000000
   */
  maxPeakMemory?: number;
  /**
   * @remarks
   * The maximum scan size of the SQL statements. Unit: bytes.
   * 
   * @example
   * 110000000
   */
  maxScanSize?: number;
  /**
   * @remarks
   * The minimum peak memory of the SQL statements. Unit: bytes.
   * 
   * @example
   * 88000000
   */
  minPeakMemory?: number;
  /**
   * @remarks
   * The minimum scan size of the SQL statements. Unit: bytes.
   * 
   * @example
   * 100000000
   */
  minScanSize?: number;
  /**
   * @remarks
   * The SQL query condition, which can be a combination of the `Type` and `Value` fields or a combination of the Type, `Min`, and `Max` fields. Specify the condition in the JSON format. `Type` specifies the SQL query dimension. Valid values for Type: `maxCost`, `status`, and `cost`. `Value`, `Min`, or `Max` specifies the SQL query range for the dimension. Valid values:
   * 
   * *   `{"Type":"maxCost","Value":"100"}`: queries the top 100 most time-consuming SQL statements. Set `Value` to 100.
   * *   `{"Type":"status","Value":"finished"}`: queries executed SQL statements. You can set `Value` to `running` to query SQL statements that are being executed. You can also set Value to `failed` to query SQL statements that failed to be executed.
   * *   `{"Type":"cost","Min":"10","Max":"200"}`: queries SQL statements whose execution durations are in the range of 10 to 200 milliseconds. You can also customize the maximum and minimum execution durations.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Type":"status","Value":"finished"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group to which the SQL statements belong.
   * 
   * > You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource group, database name, username, and source IP address of the SQL statements to be queried.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > Only data within the last 14 days can be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 1625220210000
   */
  startTime?: string;
  /**
   * @remarks
   * The username that is used to execute the SQL statements.
   * 
   * > You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource group, database name, username, and source IP address of the SQL statements to be queried.
   * 
   * @example
   * test_user
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      DBClusterId: 'DBClusterId',
      database: 'Database',
      endTime: 'EndTime',
      keyword: 'Keyword',
      lang: 'Lang',
      maxPeakMemory: 'MaxPeakMemory',
      maxScanSize: 'MaxScanSize',
      minPeakMemory: 'MinPeakMemory',
      minScanSize: 'MinScanSize',
      queryCondition: 'QueryCondition',
      regionId: 'RegionId',
      resourceGroup: 'ResourceGroup',
      startTime: 'StartTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      DBClusterId: 'string',
      database: 'string',
      endTime: 'string',
      keyword: 'string',
      lang: 'string',
      maxPeakMemory: 'number',
      maxScanSize: 'number',
      minPeakMemory: 'number',
      minScanSize: 'number',
      queryCondition: 'string',
      regionId: 'string',
      resourceGroup: 'string',
      startTime: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDiagnosisRecordsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the download task.
   * 
   * @example
   * 68
   */
  downloadId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D4ACF4E0-2952-3A87-9A2C-474058******
   */
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

export class EnableAdviceServiceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of Data Warehouse Edition (V3.0) clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1q10xxzq2z4****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAdviceServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The message returned for the operation. Valid values:
   * 
   * *   **Success** is returned if the operation is successful.
   * *   An error message is returned if the operation fails.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E1745C03-7CCE-55CF-932E-08121AAFA6AF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAdviceServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableAdviceServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableAdviceServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantOperatorPermissionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1565u55p32****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The expiration time of the service account permissions. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-11-30T00:00:00Z
   */
  expiredTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the permissions. Valid values:
   * 
   * *   **Control**: configuration permissions. The service account is granted permissions to query and modify cluster configurations.
   * *   **Data**: data permissions. The service account is granted permissions to query schemas, indexes, and SQL statements.
   * 
   * This parameter is required.
   * 
   * @example
   * Control
   */
  privileges?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      expiredTime: 'ExpiredTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privileges: 'Privileges',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      expiredTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      privileges: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantOperatorPermissionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A438072A-E2E7-5509-9A3F-66293512A820
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

export class GrantOperatorPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GrantOperatorPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GrantOperatorPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillProcessRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The unique ID of the query. You can call the [DescribeProcessList](https://help.aliyun.com/document_detail/190092.html) operation to obtain the unique ID of a query.
   * 
   * @example
   * 202011191048151921681492420315100****
   */
  processId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      processId: 'ProcessId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      processId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillProcessResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class KillProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: KillProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: KillProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * 212db86sca4384811e0b5e8707ec21345
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The cluster ID. You can specify multiple cluster IDs. Valid values of N: 1 to 50.
   * 
   * > You must specify at least one of the following parameters: ResourceId.N and Tag.N.Key.
   * 
   * @example
   * am-bp1l20nxxxxxxxxxx
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource. Set the value to **cluster**.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags that are added to clusters.
   */
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
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * 212db86sca4384811e0b5e8707ec21345
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 184DE106-CB2C-4DD2-B57F-396652E6C8F8
   */
  requestId?: string;
  /**
   * @remarks
   * The tags that are added to clusters.
   */
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

export class MigrateDBClusterRequest extends $tea.Model {
  computeResource?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  shardNumber?: string;
  storageResource?: string;
  storageResourceSize?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      shardNumber: 'ShardNumber',
      storageResource: 'StorageResource',
      storageResourceSize: 'StorageResourceSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      shardNumber: 'string',
      storageResource: 'string',
      storageResourceSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateDBClusterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0983B43-B2EC-536A-8791-142B5CF1E9B6
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

export class MigrateDBClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MigrateDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MigrateDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the account. The description must meet the following requirements:
   * 
   * *   The description must start with a letter.
   * *   The description can contain letters, digits, underscores (_), and hyphens (-).
   * *   The description cannot start with `http://` or `https://`.
   * *   The description must be 2 to 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * AccDesc
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * testacc
   */
  accountName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class ModifyAuditLogConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The status of SQL audit. Valid values:
   * 
   * *   **on**: SQL audit is enabled.
   * *   **off**: SQL audit is disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  auditLogStatus?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-t4nj8619bz2w3****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      auditLogStatus: 'AuditLogStatus',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditLogStatus: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAuditLogConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the status of SQL audit is updated. Valid values:
   * 
   * *   **true**: The status of SQL audit is updated.
   * *   **false**: The status of SQL audit is not updated.
   * 
   * @example
   * true
   */
  updateSucceed?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      updateSucceed: 'UpdateSucceed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      updateSucceed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAuditLogConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAuditLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAuditLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoRenewAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1u389j9zjh5****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The renewal duration. Default value: **1**.
   * 
   * *   Valid values when PeriodUnit is set to **Month**: 1 to 11. Data type: INTEGER.
   * *   Valid values when PeriodUnit is set to **Year**: 1, 2, 3, and 5. Data type: INTEGER.
   * 
   * > Longer subscription durations offer more savings. Purchasing a cluster for one year is more cost-effective than purchasing the cluster for 10 or 11 months.
   * 
   * @example
   * 1
   */
  duration?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The unit of the renewal period. Default value: **Month**. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The renewal status of the cluster. Valid values:
   * 
   * *   **AutoRenewal**: The cluster is automatically renewed.
   * *   **Normal**: The cluster is manually renewed.
   * *   **NotRenewal**: The cluster is not renewed.
   * 
   * @example
   * AutoRenewal
   */
  renewalStatus?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      duration: 'Duration',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      duration: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      periodUnit: 'string',
      regionId: 'string',
      renewalStatus: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoRenewAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4CE6DF97-AEA4-484F-906F-C407EE3770EB
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

export class ModifyAutoRenewAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAutoRenewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAutoRenewAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The number of days for which to retain full backup files. Valid values: 7 to 730.
   * 
   * >  If you leave this parameter empty, the default value 7 is used.
   * 
   * @example
   * 30
   */
  backupRetentionPeriod?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable real-time log backup. Valid values:
   * 
   * *   **Enable**
   * 
   * *   **Disable**
   * 
   * > If you leave this parameter empty, the default value Enable is used.
   * 
   * @example
   * Enable
   */
  enableBackupLog?: string;
  /**
   * @remarks
   * The number of days for which to retain log backup files. Valid values: 7 to 730.
   * 
   * >  If you leave this parameter empty, the default value 7 is used.
   * 
   * @example
   * 30
   */
  logBackupRetentionPeriod?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The days of the week on which to perform full backup. Separate multiple values with commas (,). Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * >  To ensure data security, we recommend that you specify at least two values.
   * 
   * @example
   * Monday,Wednesday,Friday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The start time of the full backup within a time range. Specify the time range in the HH:mmZ-HH:mmZ format. The time must be in UTC.
   * 
   * >  The time range is 1 hour.
   * 
   * This parameter is required.
   * 
   * @example
   * 00:00Z-01:00Z
   */
  preferredBackupTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      DBClusterId: 'DBClusterId',
      enableBackupLog: 'EnableBackupLog',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'string',
      DBClusterId: 'string',
      enableBackupLog: 'string',
      logBackupRetentionPeriod: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class ModifyClusterConnectionStringRequest extends $tea.Model {
  /**
   * @remarks
   * The prefix of the public endpoint.
   * 
   * *   The prefix can contain lowercase letters, digits, and hyphens (-). It must start with a lowercase letter.
   * *   The prefix can be up to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test-123
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The current public endpoint of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusterNetInfo](https://help.aliyun.com/document_detail/143384.html) operation to query the public endpoint of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp18934i73vb****.ads.aliyuncs.com
   */
  currentConnectionString?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp18934i73vb****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The port number. Set the value to **3306**.
   * 
   * @example
   * 3306
   */
  port?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      currentConnectionString: 'CurrentConnectionString',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      port: 'Port',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      currentConnectionString: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      port: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterConnectionStringResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 370D09FD-442A-5225-AAD3-7362CAE39177
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

export class ModifyClusterConnectionStringResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyClusterConnectionStringResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyClusterConnectionStringResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterRequest extends $tea.Model {
  /**
   * @remarks
   * The computing resources of the cluster. You can call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/190632.html) operation to query the computing resources that are available within a region.
   * 
   * > This parameter must be specified when Mode is set to Flexible.
   * 
   * @example
   * 32Core128GBNEW
   */
  computeResource?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **Cluster**: reserved mode for Cluster Edition.
   * *   **MixedStorage**: elastic mode for Cluster Edition.
   * 
   * > If you set DBClusterCategory to Cluster, you must set Mode to Reserver. If you set DBClusterCategory to MixedStorage, you must set Mode to Flexible. Otherwise, you fail to change the specifications of the cluster.
   * 
   * @example
   * MixedStorage
   */
  DBClusterCategory?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1u8c0mgfg58****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The node specifications of the cluster. Valid values:
   * 
   * *   **C8**
   * *   **C32**
   * 
   * > This parameter must be specified when Mode is set to Reserver.
   * 
   * @example
   * C32
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of node groups. Valid values: 1 to 200.
   * 
   * > This parameter must be specified when Mode is set to Reserver.
   * 
   * @example
   * 2
   */
  DBNodeGroupCount?: string;
  /**
   * @remarks
   * The storage capacity per node. Unit: GB.
   * 
   * *   Valid values when DBClusterClass is set to C8: 100 to 2000.
   * *   Valid values when DBClusterClass is set to C32: 100 to 8000.
   * 
   * > 
   * 
   * *   This parameter must be specified when Mode is set to Reserver.
   * 
   * *   The storage capacity less than 1,000 GB increases in 100 GB increments. The storage capacity greater than 1,000 GB increases in 1,000 GB increments.
   * 
   * @example
   * 200
   */
  DBNodeStorage?: string;
  /**
   * @remarks
   * The enhanced SSD (ESSD) performance level of the cluster. Valid values:
   * 
   * *   PL0
   * *   PL1
   * *   PL2
   * *   PL3
   * 
   * @example
   * PL1
   */
  diskPerformanceLevel?: string;
  /**
   * @remarks
   * The number of EIUs. The number of EIUs that you can purchase varies based on the single-node EIU specifications.
   * 
   * *   If the single-node EIU specifications are 8 cores and 64 GB, you can purchase up to 32 EIUs.
   * *   If the single-node EIU specifications are 12 cores and 96 GB, you can purchase up to 16 EIUs.
   * 
   * @example
   * 2
   */
  elasticIOResource?: number;
  /**
   * @remarks
   * The single-node specifications of an elastic I/O unit (EIU). Valid values:
   * 
   * *   **8Core64GB**: If you set the parameter to **8Core64GB**, the specifications of an EIU are 24 cores and 192 GB memory.
   * *   **12Core96GB**: If you set the parameter to **12Core96GB**, the specifications of an EIU are 36 cores and 288 GB memory.
   * 
   * >  This parameter takes effect only when your cluster meets the following requirements:
   * 
   * *   The cluster is in elastic mode.
   * 
   * *   If the cluster resides in the China (Guangzhou), China (Shenzhen), China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), or China (Zhangjiakou) region, the cluster has 16 cores and 64 GB memory or higher specifications.
   * 
   * *   If the cluster resides in another region, the cluster has 32 cores and 128 GB memory or higher specifications.
   * 
   * @example
   * 8Core64GB
   */
  elasticIOResourceSize?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * None
   */
  executorCount?: string;
  /**
   * @remarks
   * The mode of the cluster. Valid values:
   * 
   * *   **Reserver**: the reserved mode.
   * *   **Flexible**: the elastic mode.
   * 
   * @example
   * Flexible
   */
  mode?: string;
  /**
   * @remarks
   * The change type. Valid values:
   * 
   * *   **Upgrade**
   * *   **Downgrade**
   * 
   * @example
   * Upgrade
   */
  modifyType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * None
   */
  storageResource?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      DBClusterCategory: 'DBClusterCategory',
      DBClusterId: 'DBClusterId',
      DBNodeClass: 'DBNodeClass',
      DBNodeGroupCount: 'DBNodeGroupCount',
      DBNodeStorage: 'DBNodeStorage',
      diskPerformanceLevel: 'DiskPerformanceLevel',
      elasticIOResource: 'ElasticIOResource',
      elasticIOResourceSize: 'ElasticIOResourceSize',
      executorCount: 'ExecutorCount',
      mode: 'Mode',
      modifyType: 'ModifyType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageResource: 'StorageResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'string',
      DBClusterCategory: 'string',
      DBClusterId: 'string',
      DBNodeClass: 'string',
      DBNodeGroupCount: 'string',
      DBNodeStorage: 'string',
      diskPerformanceLevel: 'string',
      elasticIOResource: 'number',
      elasticIOResourceSize: 'string',
      executorCount: 'string',
      mode: 'string',
      modifyType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageResource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp1u8c0mgfg58****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2035629****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterAccessWhiteListRequest extends $tea.Model {
  /**
   * @remarks
   * The attribute of the IP address whitelist. By default, this parameter is empty. The IP address whitelists that have the **hidden** attribute are not displayed in the console. These IP address whitelists are used to access services such as Data Transmission Service (DTS) and PolarDB-X.
   * 
   * @example
   * hidden
   */
  DBClusterIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist that you want to modify. Default value: **Default**. The name of an IP address whitelist must be 2 to 32 characters in length. The name can contain lowercase letters, digits, and underscores (_). The name must start with a lowercase letter and end with a lowercase letter or digit.
   * 
   * Each cluster supports up to 50 IP address whitelists.
   * 
   * @example
   * test
   */
  DBClusterIPArrayName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The method that you want to use to modify the IP address whitelist. Valid values:
   * 
   * *   Cover: overwrites the IP address whitelist.
   * *   Append: adds IP addresses to the IP address whitelist.
   * *   Delete: removes IP addresses from the IP address whitelist.
   * 
   * Default value: Cover.
   * 
   * @example
   * Cover
   */
  modifyMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP addresses that you want to use to modify the IP address whitelist of the cluster. Separate multiple IP addresses with commas (,). You can specify up to 500 distinct IP addresses. The following formats are supported:
   * 
   * *   IP address. Example: 10.23.12.24.
   * *   CIDR block. Example: 10.23.12.24/24. In this example, 24 indicates that the prefix of the CIDR block is 24 bits in length. You can replace 24 with a value that ranges from 1 to 32.
   * 
   * >  This parameter must be specified unless ModifyMode is set to Delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.23.12.24
   */
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterIPArrayAttribute: 'DBClusterIPArrayAttribute',
      DBClusterIPArrayName: 'DBClusterIPArrayName',
      DBClusterId: 'DBClusterId',
      modifyMode: 'ModifyMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIPArrayAttribute: 'string',
      DBClusterIPArrayName: 'string',
      DBClusterId: 'string',
      modifyMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterAccessWhiteListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1564657730
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterAccessWhiteListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterAccessWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBClusterAccessWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterDescriptionRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the cluster.
   * 
   * *   The description cannot start with `http://` or `https`.
   * *   The description must be 2 to 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * adb_test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterDescriptionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 17F57FEE-EA4F-4337-8D2E-9C23CAA63D74
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

export class ModifyDBClusterDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBClusterDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterMaintainTimeRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp111m2cfrdl****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The maintenance window of the cluster. Specify the maintenance window in the hh:mmZ-hh:mmZ format.
   * 
   * >  The time range must be 1 hour and start and end at the beginning of an hour.
   * 
   * This parameter is required.
   * 
   * @example
   * 22:00Z-23:00Z
   */
  maintainTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      maintainTime: 'MaintainTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      maintainTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterMaintainTimeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 65BDA532-28AF-4122-AA39-B382721EEE64
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

export class ModifyDBClusterMaintainTimeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterMaintainTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBClusterMaintainTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterPayTypeRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription type of the subscription cluster. Valid values:
   * 
   * *   **Year**: subscription on a yearly basis.
   * *   **Month**: subscription on a monthly basis.
   * 
   * > This parameter must be specified when PayType is set to Prepaid.
   * 
   * @example
   * Year
   */
  period?: string;
  regionId?: string;
  /**
   * @remarks
   * The subscription duration of the subscription cluster.
   * 
   * *   Valid values when Period is set to Year: 1, 2, 3, and 5 (integer).
   * *   Valid values when Period is set to Month: 1 to 11 (integer).
   * 
   * > 
   * 
   * *   This parameter must be specified when PayType is set to Prepaid.
   * 
   * *   Longer subscription durations offer more savings. Purchasing a cluster for one year is more cost-effective than purchasing the cluster for 10 or 11 months.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      usedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterPayTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2023532****
   */
  orderId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      payType: 'PayType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      orderId: 'string',
      payType: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterPayTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterPayTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBClusterPayTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bpxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The resource group ID. For more information, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acxxxxx
   */
  newResourceGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      newResourceGroupId: 'NewResourceGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      newResourceGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 65BDA532-28AF-4122-AA39-B382721EEE64
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

export class ModifyDBClusterResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBClusterResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterSSLRequest extends $tea.Model {
  /**
   * @remarks
   * The internal or public endpoint for which the server certificate needs to be created or updated.
   * 
   * @example
   * am-d7oualxo05x4o5be872***.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of AnalyticDB for MySQL Data Warehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable SSL encryption. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableSSL?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBClusterId: 'DBClusterId',
      enableSSL: 'EnableSSL',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBClusterId: 'string',
      enableSSL: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterSSLResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class ModifyDBClusterSSLResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterSSLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBClusterSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The query execution mode. Valid values:
   * 
   * *   **interactive**
   * *   **batch**
   * 
   * >  For more information, see [Query execution modes](https://help.aliyun.com/document_detail/189502.html).
   * 
   * @example
   * batch
   */
  groupType?: string;
  /**
   * @remarks
   * The number of nodes. Default value: 0.
   * 
   * *   Each node is configured with the resources of 16 cores and 64 GB memory.
   * *   Make sure that the amount of resources of the nodes (Number of nodes × 16 cores and 64 GB memory) is less than or equal to the amount of unused resources of the cluster.
   * 
   * @example
   * 1
   */
  nodeNum?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The database accounts with which to associate the resource group. They can be standard accounts or privileged accounts.
   */
  poolUserList?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      nodeNum: 'NodeNum',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      poolUserList: 'PoolUserList',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      groupType: 'string',
      nodeNum: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      poolUserList: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBResourceGroupShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The query execution mode. Valid values:
   * 
   * *   **interactive**
   * *   **batch**
   * 
   * >  For more information, see [Query execution modes](https://help.aliyun.com/document_detail/189502.html).
   * 
   * @example
   * batch
   */
  groupType?: string;
  /**
   * @remarks
   * The number of nodes. Default value: 0.
   * 
   * *   Each node is configured with the resources of 16 cores and 64 GB memory.
   * *   Make sure that the amount of resources of the nodes (Number of nodes × 16 cores and 64 GB memory) is less than or equal to the amount of unused resources of the cluster.
   * 
   * @example
   * 1
   */
  nodeNum?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The database accounts with which to associate the resource group. They can be standard accounts or privileged accounts.
   */
  poolUserListShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      nodeNum: 'NodeNum',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      poolUserListShrink: 'PoolUserList',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      groupType: 'string',
      nodeNum: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      poolUserListShrink: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class ModifyDBResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBResourcePoolRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * *   Each node provides 16 cores and 64 GB memory.
   * *   The amount of resources that you want to add to or remove from the cluster cannot exceed the total amount of resources in the cluster.
   * 
   * > - If you do not specify this parameter, the original value is retained.
   * > - You must specify at least one of the QueryType and NodeNum parameters.
   * 
   * @example
   * 2
   */
  nodeNum?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * test_group
   */
  poolName?: string;
  /**
   * @remarks
   * The mode in which SQL statements are executed. Valid values:
   * 
   * *   **batch**
   * *   **interactive**
   * 
   * > If you do not specify this parameter, the original value is retained.
   * 
   * @example
   * batch
   */
  queryType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      nodeNum: 'NodeNum',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      poolName: 'PoolName',
      queryType: 'QueryType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      nodeNum: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      poolName: 'string',
      queryType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBResourcePoolResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class ModifyDBResourcePoolResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBResourcePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBResourcePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticPlanRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1rqvm70uh2v****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether the scaling plan takes effect. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  elasticPlanEnable?: boolean;
  /**
   * @remarks
   * The end date of the scaling plan. Specify the date in the yyyy-MM-dd format.
   * 
   * @example
   * 2022-12-09
   */
  elasticPlanEndDay?: string;
  /**
   * @remarks
   * The dates of the month when you want to execute the scaling plan. A number specifies a date of the month. Separate multiple values with commas (,).
   * 
   * @example
   * 1,15,25
   */
  elasticPlanMonthlyRepeat?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * *   The name must be 2 to 30 characters in length.
   * *   The name can contain letters, digits, and underscores (_).
   * 
   * > You can call the [DescribeElasticPlan](https://help.aliyun.com/document_detail/190596.html) operation to query the information about all scaling plans of a cluster, including the scaling plan names.
   * 
   * This parameter is required.
   * 
   * @example
   * realtime
   */
  elasticPlanName?: string;
  /**
   * @remarks
   * The number of nodes that are involved in the scaling plan.
   * 
   * *   If ElasticPlanType is set to **worker**, you can set this parameter to 0 or leave this parameter empty.
   * *   If ElasticPlanType is set to **executorcombineworker** or **executor**, you must set this parameter to a value that is greater than 0.
   * 
   * @example
   * 0
   */
  elasticPlanNodeNum?: number;
  /**
   * @remarks
   * The start date of the scaling plan. Specify the date in the yyyy-MM-dd format.
   * 
   * @example
   * 2022-12-02
   */
  elasticPlanStartDay?: string;
  /**
   * @remarks
   * The restoration time of the scaling plan. Specify the time on the hour in the HH:mm:ss format. The interval between the scale-up time and the restoration time cannot be more than 24 hours.
   * 
   * @example
   * 10:00:00
   */
  elasticPlanTimeEnd?: string;
  /**
   * @remarks
   * The scale-up time of the scaling plan. Specify the time on the hour in the HH:mm:ss format.
   * 
   * @example
   * 8:00:00
   */
  elasticPlanTimeStart?: string;
  /**
   * @remarks
   * The type of the scaling plan. Valid values:
   * 
   * *   **worker**: scales only elastic I/O resources.
   * *   **executor**: scales only computing resources.
   * *   **executorcombineworker** (default): scales both elastic I/O resources and computing resources by proportion.
   * 
   * > 
   * 
   * *   If you want to set this parameter to **executorcombineworker**, make sure that the cluster runs a minor version of 3.1.3.2 or later.
   * 
   * *   If you want to set this parameter to **worker** or **executor**, make sure that the cluster runs a minor version of 3.1.6.1 or later and a ticket is submitted. After your request is approved, you can set this parameter to **worker** or **executor**.
   * 
   * @example
   * worker
   */
  elasticPlanType?: string;
  /**
   * @remarks
   * The days of the week when you want to execute the scaling plan. Valid values: 0 to 6, which indicate Sunday to Saturday. Separate multiple values with commas (,).
   * 
   * @example
   * 1,2,3,4,5
   */
  elasticPlanWeeklyRepeat?: string;
  /**
   * @remarks
   * The resource specifications that can be scaled up by the scaling plan. Valid values:
   * 
   * *   8 Core 64 GB (default)
   * *   16 Core 64 GB
   * *   32 Core 64 GB
   * *   64 Core 128 GB
   * *   12 Core 96 GB
   * *   24 Core 96 GB
   * *   52 Core 86 GB
   * 
   * @example
   * 16 Core 64 GB
   */
  elasticPlanWorkerSpec?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/466685.html) operation to query the resource group name.
   * 
   * @example
   * test
   */
  resourcePoolName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      elasticPlanEnable: 'ElasticPlanEnable',
      elasticPlanEndDay: 'ElasticPlanEndDay',
      elasticPlanMonthlyRepeat: 'ElasticPlanMonthlyRepeat',
      elasticPlanName: 'ElasticPlanName',
      elasticPlanNodeNum: 'ElasticPlanNodeNum',
      elasticPlanStartDay: 'ElasticPlanStartDay',
      elasticPlanTimeEnd: 'ElasticPlanTimeEnd',
      elasticPlanTimeStart: 'ElasticPlanTimeStart',
      elasticPlanType: 'ElasticPlanType',
      elasticPlanWeeklyRepeat: 'ElasticPlanWeeklyRepeat',
      elasticPlanWorkerSpec: 'ElasticPlanWorkerSpec',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourcePoolName: 'ResourcePoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      elasticPlanEnable: 'boolean',
      elasticPlanEndDay: 'string',
      elasticPlanMonthlyRepeat: 'string',
      elasticPlanName: 'string',
      elasticPlanNodeNum: 'number',
      elasticPlanStartDay: 'string',
      elasticPlanTimeEnd: 'string',
      elasticPlanTimeStart: 'string',
      elasticPlanType: 'string',
      elasticPlanWeeklyRepeat: 'string',
      elasticPlanWorkerSpec: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourcePoolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticPlanResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class ModifyElasticPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyElasticPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogBackupPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable log backup. Valid values:
   * 
   * *   **Enable**
   * *   **Disable**
   * 
   * This parameter is required.
   * 
   * @example
   * Enable
   */
  enableBackupLog?: string;
  /**
   * @remarks
   * The number of days for which to retain backup files. Valid values: 7 to 730.
   * 
   * > The default value is 7.
   * 
   * @example
   * 30
   */
  logBackupRetentionPeriod?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm4f7oger****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      enableBackupLog: 'EnableBackupLog',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      enableBackupLog: 'string',
      logBackupRetentionPeriod: 'string',
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

export class ModifyLogBackupPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class ModifyLogBackupPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyLogBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyLogBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMaintenanceActionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the pending O\\&M event. You can specify multiple IDs to batch change the switchover time. Separate multiple IDs with commas (,).
   * > - You can call the [DescribeMaintenanceAction](https://help.aliyun.com/document_detail/271738.html) operation to query the information about pending O\\&M events, including the event ID.
   * > - You can change the switchover time only for pending O\\&M events. The switchover time of historical O\\&M events cannot be changed. For more information about the status of pending and historical O\\&M events, see [DescribeMaintenanceAction](https://help.aliyun.com/document_detail/271738.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 11111
   */
  ids?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the pending O\\&M event occurs.
   * 
   * > - You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929XXXX
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time when you want the system to perform operations on the pending O\\&M event. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-07-09T22:00:00Z
   */
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMaintenanceActionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The O\\&M event ID.
   * 
   * @example
   * 11111
   */
  ids?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7856CBE7-5BD0-4EE1-AC62-749392******
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

export class ModifyMaintenanceActionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMaintenanceActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyMaintenanceActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResubmitConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The job resubmission rules.
   * 
   * This parameter is required.
   */
  rules?: ModifyResubmitConfigRequestRules[];
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      rules: { 'type': 'array', 'itemType': ModifyResubmitConfigRequestRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResubmitConfigShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The job resubmission rules.
   * 
   * This parameter is required.
   */
  rulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      rulesShrink: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      rulesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResubmitConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class ModifyResubmitConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyResubmitConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyResubmitConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySQAConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-8vb369k7zxdt10tz0
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * >  You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the resource group name of a cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable short query acceleration (SQA).
   * 
   * Valid values:
   * 
   * *   on
   * *   off
   * 
   * This parameter is required.
   * 
   * @example
   * off
   */
  SQAStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      SQAStatus: 'SQAStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      SQAStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySQAConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 494486CE-6F49-574E-B304-29127EA12E36
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

export class ModifySQAConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySQAConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifySQAConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterPublicConnectionRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterPublicConnectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class ReleaseClusterPublicConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseClusterPublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseClusterPublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the database account.
   * 
   * *   The password can contain uppercase letters, lowercase letters, digits, and special characters.
   * *   Special characters include ! @ # $ % ^ & \\* ( ) _ + - =
   * *   The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Test_accout1
   */
  accountPassword?: string;
  /**
   * @remarks
   * 1.  Normal: the standard account.
   * 2.  Super: the privileged account.
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountType: 'AccountType',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      accountType: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1564657730
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
      taskId: 'number',
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

export class RevokeOperatorPermissionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeOperatorPermissionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class RevokeOperatorPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeOperatorPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeOperatorPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the cluster to which to add a tag. If you want to add a tag to multiple clusters, click **Add** and enter the cluster IDs.
   * 
   * > 
   * 
   * *   You can add tags to up to 50 clusters at a time.
   * 
   * *   You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxx.1
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the cluster. Set the value to **ALIYUN::ADB::CLUSTER**.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::ADB::CLUSTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags to add to the cluster.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 863D51B7-5321-41D8-A0B6-A088B0450EFD
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

export class UnbindDBResourceGroupWithUserRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The database account with which the resource group is associated.
   * 
   * This parameter is required.
   * 
   * @example
   * accout
   */
  groupUser?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      groupUser: 'GroupUser',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      groupUser: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDBResourceGroupWithUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class UnbindDBResourceGroupWithUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindDBResourceGroupWithUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindDBResourceGroupWithUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDBResourcePoolWithUserRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bpxxxxxxxx47
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  poolName?: string;
  /**
   * @remarks
   * The database account with which the resource group is associated.
   * 
   * This parameter is required.
   * 
   * @example
   * testb
   */
  poolUser?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      poolName: 'PoolName',
      poolUser: 'PoolUser',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      poolName: 'string',
      poolUser: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDBResourcePoolWithUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class UnbindDBResourcePoolWithUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindDBResourcePoolWithUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindDBResourcePoolWithUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from clusters. Default value: false. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  If you specify TagKey and this parameter, this parameter does not take effect.
   * 
   * @example
   * false
   */
  all?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of cluster N. Valid values of N: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxx.1
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type. Set the value to **ALIYUN::ADB::CLUSTER**.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::ADB::CLUSTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of tag N. Valid values of N: 1 to 20.
   * 
   * @example
   * a
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF5189484043
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

export class UpgradeKernelVersionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612241.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6g8w25jacm7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The minor version to which you want to update.
   * 
   * >  You can call the **DescribeKernelVersion** operation to query the supported minor versions.
   * 
   * @example
   * 3.1.9
   */
  DBVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The time when to perform the update. Valid values:
   * 
   * *   **0** (default): immediately performs the update.
   * *   **1**: performs the update during the maintenance window.
   * 
   * >  You can call the [ModifyDBClusterMaintainTime](https://help.aliyun.com/document_detail/612236.html) operation to modify the maintenance window of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * 0
   */
  switchMode?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBVersion: 'DBVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchMode: 'SwitchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeKernelVersionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

export class UpgradeKernelVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeKernelVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeKernelVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N to add to the cluster. You can use tags to filter clusters. Valid values of N: 1 to 20. The values that you specify for N must be unique and consecutive integers that start from 1. Each value of `Tag.N.Key` is paired with a value of `Tag.N.Value`.
   * 
   * >  The tag key can be up to 64 characters in length and cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the cluster. You can use tags to filter clusters. Valid values of N: 1 to 20. The values that you specify for N must be unique and consecutive integers that start from 1. Each value of `Tag.N.Key` is paired with a value of `Tag.N.Value`.
   * 
   * >  The tag value can be up to 64 characters in length and cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * test1
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

export class DescribeAccountsResponseBodyAccountListDBAccount extends $tea.Model {
  /**
   * @remarks
   * The description of the database account.
   * 
   * @example
   * C@test
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * test1
   */
  accountName?: string;
  /**
   * @remarks
   * The state of the database account. Valid values:
   * 
   * *   **Creating**
   * *   **Available**
   * *   **Deleting**
   * 
   * @example
   * Available
   */
  accountStatus?: string;
  /**
   * @remarks
   * The type of the database account. Valid values:
   * 
   * *   **Normal**: standard account.
   * *   **Super**: privileged account.
   * 
   * @example
   * Normal
   */
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      accountType: 'string',
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
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * rdsdt_dts_adb
   */
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

export class DescribeAllDataSourceResponseBodyColumnsColumn extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the column is an auto-increment column. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  autoIncrementColumn?: boolean;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * id
   */
  columnName?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Indicates whether the column is the primary key of the table. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  primaryKey?: boolean;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The data type of the column.
   * 
   * @example
   * bigint
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoIncrementColumn: 'AutoIncrementColumn',
      columnName: 'ColumnName',
      DBClusterId: 'DBClusterId',
      primaryKey: 'PrimaryKey',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrementColumn: 'boolean',
      columnName: 'string',
      DBClusterId: 'string',
      primaryKey: 'boolean',
      schemaName: 'string',
      tableName: 'string',
      type: 'string',
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

export class DescribeAllDataSourceResponseBodySchemasSchema extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      schemaName: 'string',
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      schemaName: 'string',
      tableName: 'string',
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

export class DescribeAppliedAdvicesResponseBodyItems extends $tea.Model {
  /**
   * @remarks
   * The suggestion ID.
   * 
   * @example
   * 7417db9c-914d-43f3-a123-4d0e448f****
   */
  adviceId?: string;
  /**
   * @remarks
   * The benefit of the suggestion.
   * 
   * @example
   * 0.4 GB of storage saved
   */
  benefit?: string;
  /**
   * @remarks
   * The SQL statement that is used to execute the BUILD job.
   * 
   * @example
   * build table `schema1`.`table1`
   */
  buildSQL?: string;
  /**
   * @remarks
   * The state of the suggestion execution job. Valid values:
   * 
   * *   **SUCCEED**
   * *   **FAILED**
   * 
   * @example
   * SUCCEED
   */
  jobStatus?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The SQL statement that is used to roll back the suggestion.
   * 
   * @example
   * alter table `schema1`.`table1` add key col1_1_idx(col1)
   */
  rollbackSQL?: string;
  /**
   * @remarks
   * The SQL statement that is used to apply the suggestion.
   * 
   * @example
   * alter table `schema1`.`table1` drop key col1_1_idx
   */
  SQL?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The submission state of the suggestion. Valid values:
   * 
   * *   **SUCCEED**
   * *   **FAILED**
   * 
   * @example
   * SUCCEED
   */
  submitStatus?: string;
  /**
   * @remarks
   * The time when the suggestion was submitted. The time follows the ISO 8601 standard in the yyMMddHHmm format. The time is displayed in UTC.
   * 
   * @example
   * 2208131600
   */
  submitTime?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The total number of entries returned. Minimum value: 0. Default value: 0.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      adviceId: 'AdviceId',
      benefit: 'Benefit',
      buildSQL: 'BuildSQL',
      jobStatus: 'JobStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rollbackSQL: 'RollbackSQL',
      SQL: 'SQL',
      schemaName: 'SchemaName',
      submitStatus: 'SubmitStatus',
      submitTime: 'SubmitTime',
      tableName: 'TableName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceId: 'string',
      benefit: 'string',
      buildSQL: 'string',
      jobStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      rollbackSQL: 'string',
      SQL: 'string',
      schemaName: 'string',
      submitStatus: 'string',
      submitTime: 'string',
      tableName: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogRecordsResponseBodyItems extends $tea.Model {
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * None
   */
  connId?: string;
  /**
   * @remarks
   * The name of the database on which the SQL statement was executed.
   * 
   * @example
   * adb_test
   */
  DBName?: string;
  /**
   * @remarks
   * The start time of the execution of the SQL statement. The time is displayed in the ISO 8601 standard in the yyyy-MM-dd HH:mm:ss format. The time must be in UTC.
   * 
   * @example
   * 2022-01-23 16:05:08
   */
  executeTime?: string;
  /**
   * @remarks
   * The IP address and port number of the client that is used to execute the SQL statement.
   * 
   * @example
   * 100.104.XX.XX:43908
   */
  hostAddress?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 202106081752021720161662490345362390
   */
  processID?: string;
  /**
   * @remarks
   * Details of the SQL statement.
   * 
   * @example
   * SELECT * FROM tb_courses
   */
  SQLText?: string;
  /**
   * @remarks
   * The type of the SQL statement.
   * 
   * @example
   * SELECT
   */
  SQLType?: string;
  /**
   * @remarks
   * Indicates whether the SQL statement was successfully executed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  succeed?: string;
  /**
   * @remarks
   * The amount of time that is consumed to execute the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 216
   */
  totalTime?: string;
  /**
   * @remarks
   * The name of the user who executed the SQL statement.
   * 
   * @example
   * test_user
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      connId: 'ConnId',
      DBName: 'DBName',
      executeTime: 'ExecuteTime',
      hostAddress: 'HostAddress',
      processID: 'ProcessID',
      SQLText: 'SQLText',
      SQLType: 'SQLType',
      succeed: 'Succeed',
      totalTime: 'TotalTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connId: 'string',
      DBName: 'string',
      executeTime: 'string',
      hostAddress: 'string',
      processID: 'string',
      SQLText: 'string',
      SQLType: 'string',
      succeed: 'string',
      totalTime: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute extends $tea.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the cluster. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  autoRenewEnabled?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The renewal duration.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The unit of the renewal duration. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The renewal status of the cluster. Valid values:
   * 
   * *   **AutoRenewal**: The cluster is automatically renewed.
   * *   **Normal**: The cluster is manually renewed. Before the cluster expires, the system sends you a reminder by SMS message.
   * *   **NotRenewal**: The cluster is not renewed. Three days before the cluster expires, the system sends you a reminder by SMS message to remind you that the cluster is not renewed. However, the system does not send you a reminder when the cluster expires.
   * 
   * @example
   * AutoRenewal
   */
  renewalStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewEnabled: 'AutoRenewEnabled',
      DBClusterId: 'DBClusterId',
      duration: 'Duration',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewEnabled: 'boolean',
      DBClusterId: 'string',
      duration: 'number',
      periodUnit: 'string',
      regionId: 'string',
      renewalStatus: 'string',
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

export class DescribeAvailableAdvicesResponseBodyItems extends $tea.Model {
  /**
   * @remarks
   * The time when the suggestion was generated. The time follows the ISO 8601 standard in the yyyyMMdd format. The time is displayed in UTC.
   * 
   * @example
   * 20221124
   */
  adviceDate?: string;
  /**
   * @remarks
   * The suggestion ID.
   * 
   * @example
   * dcd04135-0925-4aed-a5a7-e7d92cb1****
   */
  adviceId?: string;
  /**
   * @remarks
   * The type of the suggestion. Valid values:
   * 
   * *   **Index**: index optimization.
   * *   **Tiering**: hot and cold data optimization.
   * 
   * @example
   * Index
   */
  adviceType?: string;
  /**
   * @remarks
   * The benefit of the suggestion.
   * 
   * @example
   * 0.4 GB of storage saved
   */
  benefit?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The reason why the suggestion was generated.
   * 
   * @example
   * Unused for 15 days, historical usage less than 1%
   */
  reason?: string;
  /**
   * @remarks
   * The SQL statement that is used to apply the suggestion.
   * 
   * @example
   * alter table `schema1`.`table1` drop key col1_1_idx
   */
  SQL?: string;
  /**
   * @remarks
   * The name of the schema.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The total number of entries returned. Minimum value: 0. Default value: 0.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      adviceDate: 'AdviceDate',
      adviceId: 'AdviceId',
      adviceType: 'AdviceType',
      benefit: 'Benefit',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reason: 'Reason',
      SQL: 'SQL',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceDate: 'string',
      adviceId: 'string',
      adviceType: 'string',
      benefit: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      reason: 'string',
      SQL: 'string',
      schemaName: 'string',
      tableName: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResourceSupportedElasticIOResource extends $tea.Model {
  /**
   * @remarks
   * The maximum amount of elastic I/O resources.
   * 
   * @example
   * 200
   */
  maxCount?: string;
  /**
   * @remarks
   * The minimum amount of elastic I/O resources.
   * 
   * @example
   * 0
   */
  minCount?: string;
  /**
   * @remarks
   * The step size.
   * 
   * @example
   * 1
   */
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

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResource extends $tea.Model {
  /**
   * @remarks
   * The disk storage type. Valid values:
   * 
   * *   **hdd**
   * *   **ssd**
   * 
   * @example
   * hdd
   */
  storageType?: string;
  /**
   * @remarks
   * The supported computing resources.
   */
  supportedComputeResource?: string[];
  /**
   * @remarks
   * The supported elastic I/O resources.
   */
  supportedElasticIOResource?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResourceSupportedElasticIOResource;
  /**
   * @remarks
   * The supported storage resources.
   */
  supportedStorageResource?: string[];
  static names(): { [key: string]: string } {
    return {
      storageType: 'StorageType',
      supportedComputeResource: 'SupportedComputeResource',
      supportedElasticIOResource: 'SupportedElasticIOResource',
      supportedStorageResource: 'SupportedStorageResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageType: 'string',
      supportedComputeResource: { 'type': 'array', 'itemType': 'string' },
      supportedElasticIOResource: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResourceSupportedElasticIOResource,
      supportedStorageResource: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorListNodeCount extends $tea.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  maxCount?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  minCount?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
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

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorList extends $tea.Model {
  /**
   * @remarks
   * The information about the supported compute nodes.
   */
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

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountListNodeCount extends $tea.Model {
  /**
   * @remarks
   * The maximum number of compute nodes.
   * 
   * @example
   * 200
   */
  maxCount?: string;
  /**
   * @remarks
   * The minimum number of compute nodes.
   * 
   * @example
   * 1
   */
  minCount?: string;
  /**
   * @remarks
   * The step size.
   * 
   * @example
   * 1
   */
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

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountList extends $tea.Model {
  /**
   * @remarks
   * The number of the supported compute nodes.
   */
  nodeCount?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountListNodeCount;
  /**
   * @remarks
   * The support storage capacity. Unit: GB.
   */
  storageSize?: string[];
  static names(): { [key: string]: string } {
    return {
      nodeCount: 'NodeCount',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeCount: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountListNodeCount,
      storageSize: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassList extends $tea.Model {
  /**
   * @remarks
   * The supported instance type.
   * 
   * @example
   * C32
   */
  instanceClass?: string;
  /**
   * @remarks
   * A reserved parameter.
   */
  supportedExecutorList?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorList[];
  /**
   * @remarks
   * The supported compute nodes.
   */
  supportedNodeCountList?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountList[];
  /**
   * @remarks
   * The description of the instance type.
   * 
   * @example
   * C32
   */
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      instanceClass: 'InstanceClass',
      supportedExecutorList: 'SupportedExecutorList',
      supportedNodeCountList: 'SupportedNodeCountList',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClass: 'string',
      supportedExecutorList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorList },
      supportedNodeCountList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountList },
      tips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialList extends $tea.Model {
  /**
   * @remarks
   * The supported edition. Valid values:
   * 
   * *   **basic**: Basic Edition.
   * *   **cluster**: Cluster Edition.
   * *   **mixed_storage**: elastic mode for Cluster Edition.
   * 
   * @example
   * mixed_storage
   */
  serial?: string;
  /**
   * @remarks
   * The supported resources in elastic mode.
   */
  supportedFlexibleResource?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResource[];
  /**
   * @remarks
   * The supported resources in reserved mode.
   */
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
  /**
   * @remarks
   * The supported mode. Valid values:
   * 
   * *   **flexible**: elastic mode.
   * *   **reserver**: reserved mode.
   * 
   * @example
   * flexible
   */
  mode?: string;
  /**
   * @remarks
   * The supported editions.
   */
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
  /**
   * @remarks
   * A reserved parameter.
   */
  supportedComputeResource?: string[];
  /**
   * @remarks
   * The supported modes.
   */
  supportedMode?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedMode[];
  /**
   * @remarks
   * A reserved parameter.
   */
  supportedStorageResource?: string[];
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      supportedComputeResource: 'SupportedComputeResource',
      supportedMode: 'SupportedMode',
      supportedStorageResource: 'SupportedStorageResource',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedComputeResource: { 'type': 'array', 'itemType': 'string' },
      supportedMode: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedMode },
      supportedStorageResource: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyItemsBackup extends $tea.Model {
  /**
   * @remarks
   * The end time of the backup.
   * 
   * @example
   * 2022-06-02T16:00Z
   */
  backupEndTime?: string;
  backupExpiredTime?: string;
  /**
   * @remarks
   * The backup set ID.
   * 
   * @example
   * 32732****
   */
  backupId?: string;
  /**
   * @remarks
   * The backup method. Only Snapshot is returned.
   * 
   * @example
   * Snapshot
   */
  backupMethod?: string;
  /**
   * @remarks
   * The size of the backup set. Unit: bytes.
   * 
   * @example
   * 2167808
   */
  backupSize?: number;
  /**
   * @remarks
   * The start time of the backup.
   * 
   * @example
   * 2022-06-01T16:00Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * *   **FullBackup**
   * *   **IncrementalBackup**
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp18934i73vb5****
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupExpiredTime: 'BackupExpiredTime',
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupType: 'BackupType',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupExpiredTime: 'string',
      backupId: 'string',
      backupMethod: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupType: 'string',
      DBClusterId: 'string',
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
  /**
   * @remarks
   * Indicates whether the columns are auto-incremented.
   * 
   * @example
   * true
   */
  autoIncrementColumn?: boolean;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * id
   */
  columnName?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Indicates whether the column is a primary key.
   * 
   * @example
   * false
   */
  primaryKey?: boolean;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The data type of the column.
   * 
   * @example
   * bigint
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoIncrementColumn: 'AutoIncrementColumn',
      columnName: 'ColumnName',
      DBClusterId: 'DBClusterId',
      primaryKey: 'PrimaryKey',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrementColumn: 'boolean',
      columnName: 'string',
      DBClusterId: 'string',
      primaryKey: 'boolean',
      schemaName: 'string',
      tableName: 'string',
      type: 'string',
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

export class DescribeComputeResourceResponseBodyComputeResource extends $tea.Model {
  /**
   * @remarks
   * The specifications of computing resources displayed in the console.
   * 
   * @example
   * 8 Core 32 GB（单机版）
   */
  displayValue?: string;
  /**
   * @remarks
   * The actual specifications of computing resources.
   * 
   * @example
   * 8 Core 32 GB
   */
  realValue?: string;
  static names(): { [key: string]: string } {
    return {
      displayValue: 'DisplayValue',
      realValue: 'RealValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayValue: 'string',
      realValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionCountRecordsResponseBodyAccessIpRecords extends $tea.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 42.120.XX.XX
   */
  accessIp?: string;
  /**
   * @remarks
   * The number of connections.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The number of connections.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The username of the database account.
   * 
   * @example
   * test
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhiteListResponseBodyItemsIPArray extends $tea.Model {
  /**
   * @remarks
   * The attribute of the IP address whitelist. By default, this parameter is empty.
   * 
   * >  The IP address whitelists that have the **hidden** attribute are not displayed in the console. These IP address whitelists are used to access services such as Data Transmission Service (DTS) and PolarDB-X.
   * 
   * @example
   * hidden
   */
  DBClusterIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist.
   * 
   * *   The name of an IP address whitelist must be 2 to 32 characters in length. The name can contain lowercase letters, digits, and underscores (_). The name must start with a lowercase letter and end with a lowercase letter or digit.
   * *   Each cluster supports up to 50 IP address whitelists.
   * 
   * @example
   * test
   */
  DBClusterIPArrayName?: string;
  /**
   * @remarks
   * The IP addresses in the IP address whitelist. Up to 1,000 IP addresses can be returned. Multiple IP addresses are separated by commas (,).
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterIPArrayAttribute: 'DBClusterIPArrayAttribute',
      DBClusterIPArrayName: 'DBClusterIPArrayName',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIPArrayAttribute: 'string',
      DBClusterIPArrayName: 'string',
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
  /**
   * @remarks
   * The tag key.
   * 
   * >  You can call the [TagResources](https://help.aliyun.com/document_detail/179253.html) operation to add a tag to the cluster.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test1
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

export class DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfoStepListStepList extends $tea.Model {
  /**
   * @remarks
   * The end time of the job step. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-03-10T10:28:34Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the job step. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-03-10T09:28:34Z
   */
  startTime?: string;
  /**
   * @remarks
   * The description of the job step.
   * 
   * @example
   * Apply resource
   */
  stepDesc?: string;
  /**
   * @remarks
   * The name of the job step.
   * 
   * @example
   * ApplyResource
   */
  stepName?: string;
  /**
   * @remarks
   * The progress of the job step. Unit: %.
   * 
   * @example
   * 50
   */
  stepProgress?: string;
  /**
   * @remarks
   * The status of the job step. Valid values:
   * 
   * *   **NOT_RUN**
   * *   **RUNNING**
   * *   **SUCCEED**
   * 
   * @example
   * SUCCEED
   */
  stepStatus?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      stepDesc: 'StepDesc',
      stepName: 'StepName',
      stepProgress: 'StepProgress',
      stepStatus: 'StepStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      stepDesc: 'string',
      stepName: 'string',
      stepProgress: 'string',
      stepStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfoStepList extends $tea.Model {
  stepList?: DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfoStepListStepList[];
  static names(): { [key: string]: string } {
    return {
      stepList: 'StepList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stepList: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfoStepListStepList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfo extends $tea.Model {
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * analyticDBFlexibleScaleOut
   */
  name?: string;
  /**
   * @remarks
   * The progress of the job. Unit: %.
   * 
   * @example
   * 10
   */
  progress?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **NOT_RUN**
   * *   **RUNNING**
   * *   **SUCCEED**
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The job steps.
   */
  stepList?: DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfoStepList;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      progress: 'Progress',
      status: 'Status',
      stepList: 'StepList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      progress: 'string',
      status: 'string',
      stepList: DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfoStepList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyItemsDBCluster extends $tea.Model {
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **BASIC**: reserved mode for Basic Edition.
   * *   **CLUSTER**: reserved mode for Cluster Edition.
   * *   **MIXED_STORAGE**: elastic mode for Cluster Edition.
   * 
   * >  For more information about cluster editions, see [Editions](https://help.aliyun.com/document_detail/205001.html).
   * 
   * @example
   * MIXED_STORAGE
   */
  category?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **ads**: pay-as-you-go.
   * *   **ads_pre**: subscription.
   * 
   * @example
   * ads
   */
  commodityCode?: string;
  /**
   * @remarks
   * The specifications of computing resources that are used in the cluster in elastic mode. Computing resources are used to compute data. The increase in the computing resources can accelerate queries. You can scale computing resources based on your business requirements.
   * 
   * @example
   * 8Core32GB
   */
  computeResource?: string;
  /**
   * @remarks
   * The Virtual Private Cloud (VPC) endpoint that is used to connect to the cluster.
   * 
   * @example
   * am-bp111m2cfrdl1****.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-04-01T09:50:18Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * adb_test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp111m2cfrdl1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The network type of the cluster. **VPC** is returned.
   * 
   * @example
   * vpc
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The status of the cluster. For more information, see [Cluster states](https://help.aliyun.com/document_detail/143075.html).
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   **Common**: common cluster.
   * *   **RDS_ANALYSIS**: MySQL analytic instance.
   * 
   * @example
   * Common
   */
  DBClusterType?: string;
  /**
   * @remarks
   * The instance type of the cluster.
   * 
   * @example
   * E8
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of node groups.
   * 
   * @example
   * 1
   */
  DBNodeCount?: number;
  /**
   * @remarks
   * The storage capacity of the cluster. Unit: GB.
   * 
   * @example
   * 300
   */
  DBNodeStorage?: number;
  /**
   * @remarks
   * The engine version of the cluster. **3.0** is returned.
   * 
   * @example
   * 3.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * Indicates whether disk encryption is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The ESSD performance level.
   * 
   * @example
   * PL1
   */
  diskPerformanceLevel?: string;
  /**
   * @remarks
   * The disk type of the cluster. Valid values:
   * 
   * *   **local_ssd**: local disk.
   * *   **cloud**: basic disk.
   * *   **cloud_ssd**: standard SSD.
   * *   **cloud_efficiency**: ultra disk.
   * *   **cloud_essd0**: PL0 Enterprise SSD (ESSD).
   * *   **cloud_essd**: PL1 ESSD.
   * *   **cloud_essd2**: PL2 ESSD.
   * *   **cloud_essd3**: PL3 ESSD.
   * 
   * >  For more information about ESSDs, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * cloud_essd
   */
  diskType?: string;
  /**
   * @remarks
   * The ID of the Data Transmission Service (DTS) synchronization job. This parameter is returned only for MySQL analytic instances.
   * 
   * @example
   * dtsb1hp3790****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The number of elastic I/O units (EIUs).
   * 
   * @example
   * 2
   */
  elasticIOResource?: number;
  /**
   * @remarks
   * The single-node specifications of an EIU. Valid values:
   * 
   * *   8Core64GB: If this value is returned, the specifications of an EIU are 24 cores and 192 GB memory.
   * *   12Core96GB: If this value is returned, the specifications of an EIU are 36 cores and 288 GB memory.
   * 
   * @example
   * 8Core64GB
   */
  elasticIOResourceSize?: string;
  /**
   * @remarks
   * Indicates whether an Airflow cluster was created. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableAirflow?: boolean;
  /**
   * @remarks
   * Indicates whether a Spark cluster was created. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  enableSpark?: boolean;
  /**
   * @remarks
   * The database engine of the cluster. **AnalyticDB** is returned.
   * 
   * @example
   * AnalyticDB
   */
  engine?: string;
  /**
   * @remarks
   * The minor version of the cluster.
   * 
   * @example
   * 3.1.1.9
   */
  engineVersion?: string;
  /**
   * @remarks
   * The number of compute nodes that are used by the cluster in elastic mode.
   * 
   * @example
   * 1
   */
  executorCount?: string;
  /**
   * @remarks
   * The expiration time of the cluster. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC. Example: *2999-09-08T16:00:00Z*.
   * 
   * > 
   * 
   * *   If the billing method of the cluster is subscription, the actual expiration time is returned.
   * 
   * *   If the billing method of the cluster is pay-as-you-go, **2999-09-08T16:00:00Z** is returned.
   * 
   * @example
   * 2999-09-08T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * The public IP address of the cluster.
   * 
   * @example
   * 10.1.XX.XX
   */
  innerIp?: string;
  /**
   * @remarks
   * The public port number.
   * 
   * @example
   * 3306
   */
  innerPort?: string;
  /**
   * @remarks
   * The ID of the key that is used to encrypt disk data.
   * 
   * >  This parameter is returned only when disk encryption is enabled.
   * 
   * @example
   * e1935511-cf88-1123-a0f8-1be8d251****
   */
  kmsId?: string;
  /**
   * @remarks
   * The lock mode of the cluster. Valid values:
   * 
   * *   **Unlock**: The cluster is not locked.
   * *   **ManualLock**: The cluster is manually locked.
   * *   **LockByExpiration**: The cluster is automatically locked due to cluster expiration.
   * *   **LockByRestoration**: The cluster is automatically locked due to cluster restoration.
   * *   **LockByDiskQuota**: The cluster is automatically locked when 90% of the cluster storage is used.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The reason why the cluster is locked.
   * 
   * >  This parameter is returned only when the cluster was locked. **instance_expire** is returned.
   * 
   * @example
   * instance_expired
   */
  lockReason?: string;
  /**
   * @remarks
   * The maintenance window of the cluster. The time is displayed in the *HH:mmZ-HH:mmZ* format in UTC. Example: *04:00Z-05:00Z*, which indicates that routine maintenance is performed from 04:00 to 05:00.
   * 
   * >  For more information about maintenance windows, see [Configure a maintenance window](https://help.aliyun.com/document_detail/122569.html).
   * 
   * @example
   * 04:00Z-05:00Z
   */
  maintainTime?: string;
  /**
   * @remarks
   * The mode of the cluster. Valid values:
   * 
   * *   **flexible**: elastic mode.
   * *   **reserver**: reserved mode.
   * 
   * >  For more information about cluster modes, see [Editions](https://help.aliyun.com/document_detail/205001.html).
   * 
   * @example
   * flexible
   */
  mode?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The port number that is used to connect to the cluster.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **BasicVersion**: Basic Edition.
   * *   **EnterpriseVersion**: Enterprise Edition.
   * 
   * @example
   * BasicVersion
   */
  productVersion?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS instance from which data is synchronized to the cluster. This parameter is returned only for MySQL analytic instances.
   * 
   * @example
   * rm-bp837jsdp2****
   */
  rdsInstanceId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The specifications of storage resources that are used in the cluster in elastic mode. Storage resources are used to read and write data. The increase in the storage resources can improve the read and write performance of the cluster.
   * 
   * @example
   * 8Core32GB
   */
  storageResource?: string;
  /**
   * @remarks
   * The tags that are added to the cluster.
   */
  tags?: DescribeDBClusterAttributeResponseBodyItemsDBClusterTags;
  /**
   * @remarks
   * The job information.
   */
  taskInfo?: DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfo;
  /**
   * @remarks
   * Indicates whether Elastic Network Interface (ENI) is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  userENIStatus?: boolean;
  /**
   * @remarks
   * The ID of the cluster that resides in the VPC.
   * 
   * @example
   * am-bp111m2cfrdl1****-controller
   */
  VPCCloudInstanceId?: string;
  /**
   * @remarks
   * The VPC ID of the cluster.
   * 
   * @example
   * vpc-bp13h7uzhulpuxvnp****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the cluster.
   * 
   * @example
   * vsw-bp1syh8vvw8yech7n****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      commodityCode: 'CommodityCode',
      computeResource: 'ComputeResource',
      connectionString: 'ConnectionString',
      creationTime: 'CreationTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBClusterType: 'DBClusterType',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DBNodeStorage: 'DBNodeStorage',
      DBVersion: 'DBVersion',
      diskEncryption: 'DiskEncryption',
      diskPerformanceLevel: 'DiskPerformanceLevel',
      diskType: 'DiskType',
      dtsJobId: 'DtsJobId',
      elasticIOResource: 'ElasticIOResource',
      elasticIOResourceSize: 'ElasticIOResourceSize',
      enableAirflow: 'EnableAirflow',
      enableSpark: 'EnableSpark',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      executorCount: 'ExecutorCount',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      innerIp: 'InnerIp',
      innerPort: 'InnerPort',
      kmsId: 'KmsId',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainTime: 'MaintainTime',
      mode: 'Mode',
      payType: 'PayType',
      port: 'Port',
      productVersion: 'ProductVersion',
      rdsInstanceId: 'RdsInstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      storageResource: 'StorageResource',
      tags: 'Tags',
      taskInfo: 'TaskInfo',
      userENIStatus: 'UserENIStatus',
      VPCCloudInstanceId: 'VPCCloudInstanceId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      commodityCode: 'string',
      computeResource: 'string',
      connectionString: 'string',
      creationTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBClusterType: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodeStorage: 'number',
      DBVersion: 'string',
      diskEncryption: 'boolean',
      diskPerformanceLevel: 'string',
      diskType: 'string',
      dtsJobId: 'string',
      elasticIOResource: 'number',
      elasticIOResourceSize: 'string',
      enableAirflow: 'boolean',
      enableSpark: 'boolean',
      engine: 'string',
      engineVersion: 'string',
      executorCount: 'string',
      expireTime: 'string',
      expired: 'string',
      innerIp: 'string',
      innerPort: 'string',
      kmsId: 'string',
      lockMode: 'string',
      lockReason: 'string',
      maintainTime: 'string',
      mode: 'string',
      payType: 'string',
      port: 'number',
      productVersion: 'string',
      rdsInstanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      storageResource: 'string',
      tags: DescribeDBClusterAttributeResponseBodyItemsDBClusterTags,
      taskInfo: DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfo,
      userENIStatus: 'boolean',
      VPCCloudInstanceId: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
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

export class DescribeDBClusterHealthStatusResponseBodyCS extends $tea.Model {
  /**
   * @remarks
   * The number of healthy access nodes.
   * 
   * @example
   * 2
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of access nodes.
   * 
   * @example
   * 2
   */
  expectedCount?: number;
  /**
   * @remarks
   * The number of risky access nodes.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The health state of access nodes. Valid values:
   * 
   * *   **RISK**: risky
   * *   **NORMAL**: healthy
   * *   **UNAVAILABLE**: unavailable
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The number of unavailable access nodes.
   * 
   * @example
   * 0
   */
  unavailableCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      expectedCount: 'ExpectedCount',
      riskCount: 'RiskCount',
      status: 'Status',
      unavailableCount: 'UnavailableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      expectedCount: 'number',
      riskCount: 'number',
      status: 'string',
      unavailableCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthStatusResponseBodyExecutor extends $tea.Model {
  /**
   * @remarks
   * The number of healthy compute node groups.
   * 
   * @example
   * 2
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of compute node groups.
   * 
   * @example
   * 2
   */
  expectedCount?: number;
  /**
   * @remarks
   * The number of risky compute node groups.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The health state of compute node groups. Valid values:
   * 
   * *   **RISK**: risky
   * *   **NORMAL**: healthy
   * *   **UNAVAILABLE**: unavailable
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The number of unavailable compute node groups.
   * 
   * @example
   * 0
   */
  unavailableCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      expectedCount: 'ExpectedCount',
      riskCount: 'RiskCount',
      status: 'Status',
      unavailableCount: 'UnavailableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      expectedCount: 'number',
      riskCount: 'number',
      status: 'string',
      unavailableCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthStatusResponseBodyWorker extends $tea.Model {
  /**
   * @remarks
   * The number of healthy storage node groups.
   * 
   * @example
   * 2
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of storage node groups.
   * 
   * @example
   * 2
   */
  expectedCount?: number;
  /**
   * @remarks
   * The number of risky storage node groups.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The health state of storage node groups. Valid values:
   * 
   * *   **RISK**: risky
   * *   **NORMAL**: healthy
   * *   **UNAVAILABLE**: unavailable
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The number of unavailable storage node groups.
   * 
   * @example
   * 0
   */
  unavailableCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      expectedCount: 'ExpectedCount',
      riskCount: 'RiskCount',
      status: 'Status',
      unavailableCount: 'UnavailableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      expectedCount: 'number',
      riskCount: 'number',
      status: 'string',
      unavailableCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoResponseBodyItemsAddress extends $tea.Model {
  /**
   * @remarks
   * The endpoint of the cluster.
   * 
   * @example
   * am-bpxxxxxxxx.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The prefix of the cluster endpoint.
   * 
   * @example
   * am-bpxxxxxxxx89k51380
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.168.x.x
   */
  IPAddress?: string;
  /**
   * @remarks
   * The network type of the cluster. Valid values:
   * 
   * *   **Public**: public endpoint.
   * *   **VPC**: Virtual Private Cloud (VPC) endpoint.
   * 
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @remarks
   * The port number that is used to connect to the cluster.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * >  If NetType is set to Public, an empty string is returned for this parameter.
   * 
   * @example
   * vpc-xxxxxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * >  If NetType is set to Public, an empty string is returned for this parameter.
   * 
   * @example
   * vsw-xxxxxx
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      connectionStringPrefix: 'ConnectionStringPrefix',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      port: 'Port',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      connectionStringPrefix: 'string',
      IPAddress: 'string',
      netType: 'string',
      port: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
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
  /**
   * @remarks
   * *   CPU
   * 
   *     *   **AnalyticDB_CPU**: the average CPU utilization.
   * 
   *         *   worker_avg_cpu_used: the average CPU utilization across storage nodes.
   *         *   worker_max_cpu_used: the maximum CPU utilization across storage nodes.
   *         *   executor_avg_cpu_used: the average CPU utilization across compute nodes.
   *         *   executor_max_cpu_used: the maximum CPU utilization across compute nodes.
   * 
   * *   Connections
   * 
   *     *   **AnalyticDB_Connections**: the number of connections of the cluster.
   * 
   *         *   connections: the number of connections of the cluster.
   * 
   * *   Writes
   * 
   *     *   **AnalyticDB_TPS**: the write TPS.
   * 
   *         *   tps: the sum of the insert_tps, update_tps, delete_tps, and load_tps values.
   *         *   insert_tps: the number of successful INSERT INTO VALUES operations per second.
   *         *   update_tps: the number of successful UPDATE operations per second.
   *         *   delete_tps: the number of successful DELETE operations per second.
   *         *   load_tps: the number of successful INSERT OVERWRITE operations per second.
   * 
   *     *   **AnalyticDB_InsertRT**: the write response time.
   * 
   *         *   insert_avg_rt: the average amount of time consumed by writes.
   *         *   insert_max_rt: the maximum amount of time consumed by a single write.
   * 
   *     *   **AnalyticDB_InsertBytes**: the write throughput.
   * 
   *         *   insert_in_bytes: the amount of written data.
   * 
   * *   Updates
   * 
   *     *   **AnalyticDB_UpdateRT**: the update response time.
   * 
   *         *   updateinto_avg_rt: the average amount of time consumed by updates.
   *         *   updateinto_max_rt: the maximum amount of time consumed by a single update.
   * 
   * *   Deletes
   * 
   *     *   **AnalyticDB_DeleteRT**: the delete response time.
   * 
   *         *   delete_avg_rt: the average amount of time consumed by deletes.
   *         *   delete_max_rt: the maximum amount of time consumed by a single delete.
   * 
   * *   Queries
   * 
   *     *   **AnalyticDB_QPS**: the QPS.
   * 
   *         *   qps: the number of SELECT operations completed per second.
   *         *   etl_qps: the number of INSERT OVERWRITE operations completed per second.
   * 
   *     *   **AnalyticDB_QueryRT**: the query response time.
   * 
   *         *   query_avg_rt: the average amount of time consumed by queries.
   *         *   query_max_rt: the maximum amount of time consumed by a single query.
   *         *   etl_avg_rt: the average amount of time consumed by extract-transform-load (ETL) operations.
   *         *   etl_max_rt: the maximum amount of time consumed by a single ETL operation.
   * 
   *     *   **AnalyticDB_QueryWaitTime**: the query wait time.
   * 
   *         *   query_avg_wait_time: the average wait time for SELECT and ETL operations.
   *         *   query_max_wait_time: the maximum wait time for SELECT and ETL operations.
   * 
   *     *   AnalyticDB_QueryFailedRatio: the query failure rate.
   * 
   *         *   query_failed_ratio: the failure rate of SELECT and ETL operations.
   * 
   * *   Disks
   * 
   *     *   **AnalyticDB_IO**: the disk I/O throughput.
   * 
   *         *   worker_avg_read_bytes_ratio: the average read throughput across storage nodes.
   *         *   worker_avg_write_bytes_ratio: the average write throughput across storage nodes.
   * 
   *     *   **AnalyticDB_IO_UTIL**: the disk I/O usage.
   * 
   *         *   worker_avg_io_util: the disk I/O usage across storage nodes.
   * 
   *     *   **AnalyticDB_IO_WAIT**: the disk I/O wait time.
   * 
   *         *   worker_avg_io_await: the average I/O wait time of storage nodes.
   * 
   *     *   **AnalyticDB_IOPS**: the disk IOPS.
   * 
   *         *   worker_avg_read_ratio: the average read IOPS of storage nodes.
   *         *   worker_avg_write_ratio: the average write IOPS of storage nodes.
   * 
   *     *   **AnalyticDB_DiskUsage**: the disk space that is used.
   * 
   *         *   disk_used_ratio: the average disk space usage across nodes.
   *         *   worker_max_node_disk_used_ratio: the maximum disk space usage across nodes.
   * 
   *     *   **AnalyticDB_HotDataDiskUsage**: the disk space that is used by hot data.
   * 
   *         *   local_disk_used: the disk space that is used by hot data.
   * 
   *     *   **AnalyticDB_ColdDataDiskUsage**: the disk space that is used by cold data.
   * 
   *         *   remote_disk_used: the disk space that is used by cold data.
   * 
   *     *   AnalyticDB_DiskUsedRatio: the node disk usage.
   * 
   *         *   disk_used_ratio: the average disk usage across nodes.
   *         *   worker_max_node_disk_used_ratio: the maximum disk usage across nodes.
   * 
   *     *   AnalyticDB_DiskUsedSize: the total data size of the cluster.
   * 
   *         * disk_no_log_used: the total data size of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster in reserved mode.
   *         * disk_no_log_used_max: the maximum data size of nodes of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster in reserved mode.
   *         * disk_no_log_used_avg: the average data size of nodes of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster in reserved mode.
   *         *   user_used_disk_max: the maximum hot data size of nodes of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster in elastic mode for Cluster Edition.
   *         *   user_used_disk_avg: the average hot data size of nodes of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster in elastic mode for Cluster Edition.
   *         *   hot_disk_used: the hot data size of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster in elastic mode for Cluster Edition.
   *         *   cold_disk_used: the cold data size of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster in elastic mode for Cluster Edition.
   * 
   * *   Other
   * 
   *     *   **AnalyticDB_BuildTaskCount**: the number of BUILD jobs.
   * 
   *         *   max_build_task_count: the maximum number of running BUILD jobs across nodes.
   *         *   avg_build_task_count: the average number of running BUILD jobs across nodes.
   * 
   *     *   **AnalyticDB_ComputeMemoryUsedRatio**: the compute memory usage.
   * 
   *         *   max_worker_compute_memory_used_ratio: the maximum compute memory usage across storage nodes.
   *         *   avg_worker_compute_memory_used_ratio: the average compute memory usage across storage nodes.
   *         *   max_executor_compute_memory_used_ratio: the maximum compute memory usage across compute nodes.
   *         *   avg_executor_compute_memory_used_ratio: the average compute memory usage across compute nodes.
   * 
   *     *   AnalyticDB_UnavailableNodeCount: the number of unavailable nodes.
   * 
   *         *   worker_unavailable_node_count: the number of unavailable storage nodes.
   *         *   executor_unavailable_node_count: the number of unavailable compute nodes.
   * 
   * *   WLM
   * 
   *     *   AnalyticDB_WLM_ResubmitQueries_Count: the number of resubmitted WLM queries.
   * 
   *         *   AnalyticDB_WLM_ResubmitQueries_Count: the number of resubmitted WLM queries.
   * 
   *     *   AnalyticDB_WLM_SQA_AvgRt_MS: the average amount of time consumed by accelerated short WLM queries.
   * 
   *         *   AnalyticDB_WLM_SQA_AvgRt_MS: the average amount of time consumed by accelerated short WLM queries.
   * 
   *     *   AnalyticDB_WLM_SQA_Queries_Count: the number of accelerated short WLM queries.
   * 
   *         *   AnalyticDB_WLM_SQA_Queries_Count: the number of accelerated short WLM queries.
   * 
   *     *   AnalyticDB_WLM_TotalQueries_Count: the total number of WLM queries.
   * 
   *         *   AnalyticDB_WLM_TotalQueries_Count: the total number of WLM queries.
   * 
   * *   AnalyticDB Pipeline Service (APS)
   * 
   *     *   AnalyticDB_APS_BPS: the bytes per second (BPS) of APS provided by the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   *         *   APS_Read_BPS: the read BPS of APS.
   * 
   *     *   AnalyticDB_APS_CPU: the CPU utilization of APS provided by the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   *         *   APS_CPU_Avg_Usage_Percentage: the average CPU utilization of APS.
   *         *   APS_CPU_Max_Usage_Percentage: the maximum CPU utilization of APS.
   * 
   *     *   AnalyticDB_APS_Memory: the memory usage of APS provided by the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   *         *   APS_Memory_Avg_Usage_Percentage: the average memory usage of APS.
   *         *   APS_Memory_Max_Usage_Percentage: the maximum memory usage of APS.
   * 
   *     *   AnalyticDB_APS_RPS: the number of records per second of APS provided by the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   *         *   APS_Read_RPS: the number of read records per second of APS.
   * 
   *     *   AnalyticDB_APS_RT: the response time of APS provided by the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   *         *   AnalyticDB_APS_RT: the average response time of APS.
   *         *   APS_Read_Max_RT: the maximum response time of APS.
   * 
   * @example
   * worker_avg_cpu_used
   */
  name?: string;
  /**
   * @remarks
   * The tags that are added to the cluster.
   * 
   * @example
   * instance_name: "amv-8vbf80pjcz*****"
   */
  tags?: string;
  /**
   * @remarks
   * The values of the queried performance metric.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      tags: 'Tags',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      tags: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformances extends $tea.Model {
  /**
   * @remarks
   * The name of the performance metric.
   * 
   * @example
   * AnalyticDB_CPU
   */
  key?: string;
  /**
   * @remarks
   * The queried performance metric data.
   */
  series?: DescribeDBClusterPerformanceResponseBodyPerformancesSeries[];
  /**
   * @remarks
   * The unit of the performance metric.
   * 
   * @example
   * %
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      series: 'Series',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      series: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformancesSeries },
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformancesResourcePoolSeries extends $tea.Model {
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * cpu
   */
  name?: string;
  /**
   * @remarks
   * The value of the metric.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformances extends $tea.Model {
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test_pool
   */
  resourcePoolName?: string;
  /**
   * @remarks
   * The sequential monitoring information about the resource groups.
   */
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
  /**
   * @remarks
   * The metric of the resource group.
   * 
   * @example
   * AnalyticDB_RP_CPU
   */
  key?: string;
  /**
   * @remarks
   * The queried monitoring information about the resource groups.
   */
  resourcePoolPerformances?: DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformances[];
  /**
   * @remarks
   * The unit of the metric value.
   * 
   * @example
   * %
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      resourcePoolPerformances: 'ResourcePoolPerformances',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      resourcePoolPerformances: { 'type': 'array', 'itemType': DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformances },
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSpaceSummaryResponseBodyDataColdData extends $tea.Model {
  /**
   * @remarks
   * The data size of table records. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  dataSize?: number;
  /**
   * @remarks
   * The data size of regular indexes. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  indexSize?: number;
  /**
   * @remarks
   * The other data size. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  otherSize?: number;
  /**
   * @remarks
   * The data size of primary key indexes. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  primaryKeyIndexSize?: number;
  /**
   * @remarks
   * The cold data size. Unit: bytes.
   * 
   * >  Formula: Cold data size = Data size of table records + Data size of regular indexes + Data size of primary key indexes + Other data size.
   * 
   * @example
   * 4194304
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      indexSize: 'IndexSize',
      otherSize: 'OtherSize',
      primaryKeyIndexSize: 'PrimaryKeyIndexSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'number',
      indexSize: 'number',
      otherSize: 'number',
      primaryKeyIndexSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSpaceSummaryResponseBodyDataDataGrowth extends $tea.Model {
  /**
   * @remarks
   * The data growth within the last day. Unit: bytes.
   * 
   * >  Formula: Data growth within the last day = Current data size - Data size of one day ago.
   * 
   * @example
   * 1048576
   */
  dayGrowth?: number;
  /**
   * @remarks
   * The daily data growth within the last seven days. Unit: bytes.
   * 
   * >  Formula: Daily data growth within the last seven days = (Current data size - Data size of seven days ago)/7.
   * 
   * @example
   * 1048576
   */
  weekGrowth?: number;
  static names(): { [key: string]: string } {
    return {
      dayGrowth: 'DayGrowth',
      weekGrowth: 'WeekGrowth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayGrowth: 'number',
      weekGrowth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSpaceSummaryResponseBodyDataHotData extends $tea.Model {
  /**
   * @remarks
   * The data size of table records. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  dataSize?: number;
  /**
   * @remarks
   * The data size of regular indexes. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  indexSize?: number;
  /**
   * @remarks
   * The other data size. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  otherSize?: number;
  /**
   * @remarks
   * The data size of primary key indexes. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  primaryKeyIndexSize?: number;
  /**
   * @remarks
   * The hot data size. Unit: bytes.
   * 
   * >  Formula: Hot data size = Data size of table records + Data size of regular indexes + Data size of primary key indexes + Other data size.
   * 
   * @example
   * 4194304
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      indexSize: 'IndexSize',
      otherSize: 'OtherSize',
      primaryKeyIndexSize: 'PrimaryKeyIndexSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'number',
      indexSize: 'number',
      otherSize: 'number',
      primaryKeyIndexSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSpaceSummaryResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The cold data.
   */
  coldData?: DescribeDBClusterSpaceSummaryResponseBodyDataColdData;
  /**
   * @remarks
   * The data growth.
   */
  dataGrowth?: DescribeDBClusterSpaceSummaryResponseBodyDataDataGrowth;
  /**
   * @remarks
   * The hot data.
   */
  hotData?: DescribeDBClusterSpaceSummaryResponseBodyDataHotData;
  /**
   * @remarks
   * The total data size. Unit: bytes.
   * 
   * >  Formula: Total data size = Hot data size+ Cold data size.
   * 
   * @example
   * 8388608
   */
  totalSize?: string;
  static names(): { [key: string]: string } {
    return {
      coldData: 'ColdData',
      dataGrowth: 'DataGrowth',
      hotData: 'HotData',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldData: DescribeDBClusterSpaceSummaryResponseBodyDataColdData,
      dataGrowth: DescribeDBClusterSpaceSummaryResponseBodyDataDataGrowth,
      hotData: DescribeDBClusterSpaceSummaryResponseBodyDataHotData,
      totalSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N that is added to the cluster. You can use tags to filter clusters. A tag is a key-value pair. You can specify up to 20 tags in one request. The letter N specifies the sequence number of each key-value pair and must be unique. The values of N must be consecutive integers that start from 1. Each value of `Tag.N.Key` is paired with a value of `Tag.N.Value`.
   * 
   * > The tag key can be up to 64 characters in length and cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that is added to the cluster. You can use tags to filter clusters. A tag is a key-value pair. You can specify up to 20 tags in one request. The letter N specifies the sequence number of each key-value pair and must be unique. The values of N must be consecutive integers that start from 1. Each value of `Tag.N.Key` is paired with a value of `Tag.N.Value`.
   * 
   * > The tag key can be up to 64 characters in length and cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * test1
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

export class DescribeDBClustersResponseBodyItemsDBClusterTagsTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * >  You can call the [TagResources](https://help.aliyun.com/document_detail/179253.html) operation to add a tag to the cluster.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test1
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

export class DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepListStepList extends $tea.Model {
  /**
   * @remarks
   * The end time of the job step. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-03-10T10:28:34Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the job step. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-03-10T09:28:34Z
   */
  startTime?: string;
  /**
   * @remarks
   * The description of the job step.
   * 
   * @example
   * Apply resource
   */
  stepDesc?: string;
  /**
   * @remarks
   * The name of the job step.
   * 
   * @example
   * ApplyResource
   */
  stepName?: string;
  /**
   * @remarks
   * The progress of the job step. Unit: %.
   * 
   * @example
   * 50
   */
  stepProgress?: string;
  /**
   * @remarks
   * The status of the job step. Valid values:
   * 
   * *   **NOT_RUN**
   * *   **RUNNING**
   * *   **SUCCEED**
   * 
   * @example
   * SUCCEED
   */
  stepStatus?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      stepDesc: 'StepDesc',
      stepName: 'StepName',
      stepProgress: 'StepProgress',
      stepStatus: 'StepStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      stepDesc: 'string',
      stepName: 'string',
      stepProgress: 'string',
      stepStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepList extends $tea.Model {
  stepList?: DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepListStepList[];
  static names(): { [key: string]: string } {
    return {
      stepList: 'StepList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stepList: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepListStepList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItemsDBClusterTaskInfo extends $tea.Model {
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * analyticDBFlexibleScaleOut
   */
  name?: string;
  /**
   * @remarks
   * The progress of the job. Unit: %.
   * 
   * @example
   * 10
   */
  progress?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **NOT_RUN**
   * *   **RUNNING**
   * *   **SUCCEED**
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The job steps.
   */
  stepList?: DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepList;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      progress: 'Progress',
      status: 'Status',
      stepList: 'StepList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      progress: 'string',
      status: 'string',
      stepList: DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItemsDBCluster extends $tea.Model {
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **BASIC**: reserved mode for Basic Edition.
   * *   **CLUSTER**: reserved mode for Cluster Edition.
   * *   **MIXED_STORAGE**: elastic mode for Cluster Edition.
   * 
   * >  For more information about cluster editions, see [Editions](https://help.aliyun.com/document_detail/205001.html).
   * 
   * @example
   * MIXED_STORAGE
   */
  category?: string;
  /**
   * @remarks
   * The commodity code. **ads** is returned.
   * 
   * @example
   * ads
   */
  commodityCode?: string;
  /**
   * @remarks
   * The specifications of computing resources that are used in the cluster in elastic mode. Computing resources are used to compute data. The increase in the computing resources can accelerate queries. You can scale computing resources based on your business requirements.
   * 
   * @example
   * 8Core32GB
   */
  computeResource?: string;
  /**
   * @remarks
   * The public endpoint that is used to connect to the cluster.
   * 
   * @example
   * am-bp163885f8q21****.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC. Example: *2021-04-01T09:50:18Z*.
   * 
   * @example
   * 2021-04-01T09:50:18Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * adb_test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp163885f8q21****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The network type of the cluster. **VPC** is returned.
   * 
   * @example
   * vpc
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The status of the cluster. For more information, see [Cluster states](https://help.aliyun.com/document_detail/143075.html).
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   **Common**: common cluster.
   * *   **RDS_ANALYSIS**: MySQL analytic instance.
   * 
   * @example
   * Common
   */
  DBClusterType?: string;
  /**
   * @remarks
   * The specifications of the cluster.
   * 
   * @example
   * E8
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of node groups.
   * 
   * @example
   * 1
   */
  DBNodeCount?: number;
  /**
   * @remarks
   * The storage capacity of the cluster. Unit: GB.
   * 
   * @example
   * 300
   */
  DBNodeStorage?: number;
  /**
   * @remarks
   * The version of the database engine. **3.0** is returned.
   * 
   * @example
   * 3.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The disk type of the cluster. Valid values:
   * 
   * *   **local_ssd**: local SSD.
   * *   **cloud**: basic disk.
   * *   **cloud_ssd**: standard SSD.
   * *   **cloud_efficiency**: ultra disk.
   * *   **cloud_essd0**: PL0 Enterprise SSD (ESSD).
   * *   **cloud_essd**: PL1 ESSD.
   * *   **cloud_essd2**: PL2 ESSD.
   * *   **cloud_essd3**: PL3 ESSD.
   * 
   * >  For more information about ESSDs, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * cloud_essd
   */
  diskType?: string;
  /**
   * @remarks
   * The ID of the Data Transmission Service (DTS) synchronization job. This parameter is returned only for MySQL analytic instances.
   * 
   * @example
   * dtsb1578j90XXXX
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The number of elastic I/O units (EIUs). For more information, see [Elasticity of the storage layer](https://help.aliyun.com/document_detail/189505.html).
   * 
   * >  This parameter is returned only for clusters in elastic mode.
   * 
   * @example
   * 0
   */
  elasticIOResource?: number;
  /**
   * @remarks
   * The engine of the cluster. **AnalyticDB** is returned.
   * 
   * @example
   * AnalyticDB
   */
  engine?: string;
  /**
   * @remarks
   * The number of compute nodes that are used by the cluster in elastic mode.
   * 
   * @example
   * 1
   */
  executorCount?: string;
  /**
   * @remarks
   * The expiration time of the cluster. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC. Example: *2999-09-08T16:00:00Z*.
   * 
   * > 
   * 
   * *   If the billing method of the cluster is subscription, the actual expiration time is returned.
   * 
   * *   If the billing method of the cluster is pay-as-you-go, **2999-09-08T16:00:00Z** is returned.
   * 
   * @example
   * 2999-09-08T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * The public IP address of the cluster.
   * 
   * @example
   * 10.1.xx.xx
   */
  innerIp?: string;
  /**
   * @remarks
   * The port number that is used to connect to the cluster.
   * 
   * @example
   * 3306
   */
  innerPort?: string;
  /**
   * @remarks
   * The lock mode of the cluster. Valid values:
   * 
   * *   **Unlock**: The cluster is not locked.
   * *   **ManualLock**: The cluster is manually locked.
   * *   **LockByExpiration**: The cluster is automatically locked due to cluster expiration.
   * *   **LockByRestoration**: The cluster is automatically locked due to cluster restoration.
   * *   **LockByDiskQuota**: The cluster is automatically locked when 90% of the cluster storage is used.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The reason why the cluster is locked.
   * 
   * >  This parameter is returned only when the cluster was locked. **instance_expire** is returned.
   * 
   * @example
   * instance_expired
   */
  lockReason?: string;
  /**
   * @remarks
   * The mode of the cluster. Valid values:
   * 
   * *   **flexible**: elastic mode.
   * *   **reserver**: reserved mode.
   * 
   * > 
   * 
   * *   For more information about cluster modes, see [Editions](https://help.aliyun.com/document_detail/205001.html).
   * 
   * @example
   * flexible
   */
  mode?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The port number that is used to connect to the cluster. Default value: 3306.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **BasicVersion**: Basic Edition.
   * *   **EnterpriseVersion**: Enterprise Edition.
   * 
   * @example
   * EnterpriseVersion
   */
  productVersion?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS instance from which data is synchronized to the cluster. This parameter is returned only for MySQL analytic instances.
   * 
   * @example
   * rm-bp11q28kvl688****
   */
  rdsInstanceId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The specifications of storage resources that are used in the cluster in elastic mode. Storage resources are used to read and write data. The increase in the storage resources can improve the read and write performance of the cluster.
   * 
   * @example
   * 8Core32GB
   */
  storageResource?: string;
  /**
   * @remarks
   * The tags that are added to the cluster.
   */
  tags?: DescribeDBClustersResponseBodyItemsDBClusterTags;
  /**
   * @remarks
   * The job progress.
   */
  taskInfo?: DescribeDBClustersResponseBodyItemsDBClusterTaskInfo;
  /**
   * @remarks
   * The ID of the cluster that resides in the VPC.
   * 
   * @example
   * am-bp163885f8q21****-controller
   */
  VPCCloudInstanceId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the cluster.
   * 
   * @example
   * vpc-bp13h7uzhulpuxvnpXXXX
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the cluster.
   * 
   * @example
   * vsw-bp1syh8vvw8yech7nXXXX
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      commodityCode: 'CommodityCode',
      computeResource: 'ComputeResource',
      connectionString: 'ConnectionString',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBClusterType: 'DBClusterType',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DBNodeStorage: 'DBNodeStorage',
      DBVersion: 'DBVersion',
      diskType: 'DiskType',
      dtsJobId: 'DtsJobId',
      elasticIOResource: 'ElasticIOResource',
      engine: 'Engine',
      executorCount: 'ExecutorCount',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      innerIp: 'InnerIp',
      innerPort: 'InnerPort',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      mode: 'Mode',
      payType: 'PayType',
      port: 'Port',
      productVersion: 'ProductVersion',
      rdsInstanceId: 'RdsInstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      storageResource: 'StorageResource',
      tags: 'Tags',
      taskInfo: 'TaskInfo',
      VPCCloudInstanceId: 'VPCCloudInstanceId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      commodityCode: 'string',
      computeResource: 'string',
      connectionString: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBClusterType: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodeStorage: 'number',
      DBVersion: 'string',
      diskType: 'string',
      dtsJobId: 'string',
      elasticIOResource: 'number',
      engine: 'string',
      executorCount: 'string',
      expireTime: 'string',
      expired: 'string',
      innerIp: 'string',
      innerPort: 'string',
      lockMode: 'string',
      lockReason: 'string',
      mode: 'string',
      payType: 'string',
      port: 'string',
      productVersion: 'string',
      rdsInstanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      storageResource: 'string',
      tags: DescribeDBClustersResponseBodyItemsDBClusterTags,
      taskInfo: DescribeDBClustersResponseBodyItemsDBClusterTaskInfo,
      VPCCloudInstanceId: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
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

export class DescribeDBResourceGroupResponseBodyGroupsInfo extends $tea.Model {
  /**
   * @remarks
   * The time when the resource group was created.
   * 
   * @example
   * 2022-10-09 16:57:35.241
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * USER_DEFAULT
   */
  groupName?: string;
  /**
   * @remarks
   * The query execution mode. Valid values:
   * 
   * *   **interactive**
   * *   **batch** (default)
   * 
   * > For more information, see [Query execution modes](https://help.aliyun.com/document_detail/189502.html).
   * 
   * @example
   * interactive
   */
  groupType?: string;
  /**
   * @remarks
   * The database accounts that are associated with the resource group.
   */
  groupUserList?: string[];
  /**
   * @remarks
   * The database accounts that are associated with the resource group. Multiple database accounts are separated by commas (,).
   * 
   * @example
   * testb,testc
   */
  groupUsers?: string;
  /**
   * @remarks
   * The number of nodes. Each node provides 16 cores and 64 GB memory.
   * 
   * @example
   * 2
   */
  nodeNum?: number;
  /**
   * @remarks
   * The time when the resource group was updated.
   * 
   * @example
   * 2022-11-09 16:57:35.241
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      groupName: 'GroupName',
      groupType: 'GroupType',
      groupUserList: 'GroupUserList',
      groupUsers: 'GroupUsers',
      nodeNum: 'NodeNum',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      groupName: 'string',
      groupType: 'string',
      groupUserList: { 'type': 'array', 'itemType': 'string' },
      groupUsers: 'string',
      nodeNum: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourcePoolResponseBodyPoolsInfo extends $tea.Model {
  /**
   * @remarks
   * The time when the resource group was created.
   * 
   * @example
   * 2022-03-09 16:57:35.241
   */
  createTime?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * >  Each node consumes 16 cores and 64 GB memory.
   * 
   * @example
   * 2
   */
  nodeNum?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * USER_DEFAULT
   */
  poolName?: string;
  /**
   * @remarks
   * The database accounts that are associated with the resource group.
   * 
   * @example
   * testb,testc
   */
  poolUsers?: string;
  /**
   * @remarks
   * The mode in which SQL statements are executed.
   * 
   * *   **batch**
   * *   **interactive**
   * 
   * >  For more information, see [Query execution modes](https://help.aliyun.com/document_detail/189502.html).
   * 
   * @example
   * default_type
   */
  queryType?: string;
  /**
   * @remarks
   * The time when the resource group was updated.
   * 
   * @example
   * 2022-03-09 16:57:35.241
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      nodeNum: 'NodeNum',
      poolName: 'PoolName',
      poolUsers: 'PoolUsers',
      queryType: 'QueryType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      nodeNum: 'number',
      poolName: 'string',
      poolUsers: 'string',
      queryType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisMonitorPerformanceResponseBodyPerformances extends $tea.Model {
  /**
   * @remarks
   * The total execution duration. Unit: milliseconds.
   * 
   * >  This value is the cumulative value of the `QueuedTime`, `TotalPlanningTime`, and `ExecutionTime` parameters.
   * 
   * @example
   * 252
   */
  cost?: number;
  /**
   * @remarks
   * The peak memory of the query. Unit: bytes.
   * 
   * @example
   * 123
   */
  peakMemory?: number;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * 202210311015270330101470300315153****
   */
  processId?: string;
  /**
   * @remarks
   * The IP address of the AnalyticDB for MySQL frontend node on which the SQL statement is executed.
   * 
   * @example
   * 192.168.XX.XX
   */
  rcHost?: string;
  /**
   * @remarks
   * The number of rows scanned.
   * 
   * @example
   * 2345
   */
  scanRows?: number;
  /**
   * @remarks
   * The amount of scanned data. Unit: bytes.
   * 
   * @example
   * 123
   */
  scanSize?: number;
  /**
   * @remarks
   * The execution start time of the SQL statement. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1669011260000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the SQL statement. Valid values:
   * 
   * *   **running**
   * *   **finished**
   * *   **failed**
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The database account that is used to submit the query.
   * 
   * @example
   * rpt
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'Cost',
      peakMemory: 'PeakMemory',
      processId: 'ProcessId',
      rcHost: 'RcHost',
      scanRows: 'ScanRows',
      scanSize: 'ScanSize',
      startTime: 'StartTime',
      status: 'Status',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      peakMemory: 'number',
      processId: 'string',
      rcHost: 'string',
      scanRows: 'number',
      scanSize: 'number',
      startTime: 'number',
      status: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsResponseBodyQuerysQueryProperties extends $tea.Model {
  /**
   * @remarks
   * The name of the query property.
   * 
   * @example
   * ff
   */
  name?: string;
  /**
   * @remarks
   * The value of the query property.
   * 
   * @example
   * xian
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsResponseBodyQuerys extends $tea.Model {
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 59.82.xx.xx
   */
  clientIp?: string;
  /**
   * @remarks
   * The total execution duration. Unit: milliseconds.
   * 
   * >  This value is the cumulative value of the `QueuedTime`, `TotalPlanningTime`, and `ExecutionTime` parameters.
   * 
   * @example
   * 10
   */
  cost?: number;
  /**
   * @remarks
   * The name of the database on which the SQL statement is executed.
   * 
   * @example
   * adb_demo
   */
  database?: string;
  /**
   * @remarks
   * The number of rows written to the table by an extract, transform, and load (ETL) task.
   * 
   * @example
   * 0
   */
  etlWriteRows?: number;
  /**
   * @remarks
   * The execution duration. Unit: milliseconds.
   * 
   * @example
   * 6
   */
  executionTime?: number;
  /**
   * @remarks
   * The amount of returned data. Unit: bytes.
   * 
   * @example
   * 9
   */
  outputDataSize?: number;
  /**
   * @remarks
   * The number of rows returned.
   * 
   * @example
   * 1
   */
  outputRows?: number;
  patternId?: string;
  /**
   * @remarks
   * The peak memory. Unit: bytes.
   * 
   * @example
   * 16648
   */
  peakMemory?: number;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * 2021093000414401000000023503151******
   */
  processId?: string;
  /**
   * @remarks
   * The query properties.
   */
  queryProperties?: DescribeDiagnosisRecordsResponseBodyQuerysQueryProperties[];
  /**
   * @remarks
   * The amount of time that is consumed for queuing. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  queueTime?: number;
  /**
   * @remarks
   * The IP address and port number of the AnalyticDB for MySQL frontend node on which the SQL statement is executed.
   * 
   * @example
   * 10.0.xx.xx:3004
   */
  rcHost?: string;
  /**
   * @remarks
   * The execution duration rank of operators that are used in the SQL statement.
   * 
   * > This field is returned only for SQL statements that have the `Status` parameter set to `running`.
   * 
   * @example
   * 1
   */
  resourceCostRank?: number;
  /**
   * @remarks
   * The resource group to which the SQL statement belongs.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * > For performance considerations, an SQL statement cannot exceed 5,120 characters in length. Otherwise, the SQL statement is truncated. You can call the [DownloadDiagnosisRecords](https://help.aliyun.com/document_detail/308212.html) operation to download the diagnostic information about SQL statements that meet a condition in an AnalyticDB for MySQL cluster, including the complete SQL statements.
   * 
   * @example
   * SELECT count(*)\\nFROM nation
   */
  SQL?: string;
  /**
   * @remarks
   * Indicates whether the SQL statement is truncated. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  SQLTruncated?: boolean;
  /**
   * @remarks
   * The maximum length of the SQL statement. 5120 is returned. Unit: character. SQL statements that exceed this limit are truncated.
   * 
   * @example
   * 5120
   */
  SQLTruncatedThreshold?: number;
  /**
   * @remarks
   * The number of entries scanned.
   * 
   * @example
   * 1
   */
  scanRows?: number;
  /**
   * @remarks
   * The amount of scanned data. Unit: bytes.
   * 
   * @example
   * 9
   */
  scanSize?: number;
  /**
   * @remarks
   * The beginning of the time range in which the SQL statement is executed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1632933704000
   */
  startTime?: number;
  /**
   * @remarks
   * The state of the SQL statement. Valid values:
   * 
   * *   **running**
   * *   **finished**
   * *   **failed**
   * 
   * @example
   * finished
   */
  status?: string;
  /**
   * @remarks
   * The amount of time that is consumed to generate an execution plan. Unit: milliseconds.
   * 
   * @example
   * 4
   */
  totalPlanningTime?: number;
  /**
   * @remarks
   * The total number of stages generated.
   * 
   * @example
   * 2
   */
  totalStages?: number;
  /**
   * @remarks
   * The username that is used to execute the SQL statement.
   * 
   * @example
   * test_user
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      cost: 'Cost',
      database: 'Database',
      etlWriteRows: 'EtlWriteRows',
      executionTime: 'ExecutionTime',
      outputDataSize: 'OutputDataSize',
      outputRows: 'OutputRows',
      patternId: 'PatternId',
      peakMemory: 'PeakMemory',
      processId: 'ProcessId',
      queryProperties: 'QueryProperties',
      queueTime: 'QueueTime',
      rcHost: 'RcHost',
      resourceCostRank: 'ResourceCostRank',
      resourceGroup: 'ResourceGroup',
      SQL: 'SQL',
      SQLTruncated: 'SQLTruncated',
      SQLTruncatedThreshold: 'SQLTruncatedThreshold',
      scanRows: 'ScanRows',
      scanSize: 'ScanSize',
      startTime: 'StartTime',
      status: 'Status',
      totalPlanningTime: 'TotalPlanningTime',
      totalStages: 'TotalStages',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      cost: 'number',
      database: 'string',
      etlWriteRows: 'number',
      executionTime: 'number',
      outputDataSize: 'number',
      outputRows: 'number',
      patternId: 'string',
      peakMemory: 'number',
      processId: 'string',
      queryProperties: { 'type': 'array', 'itemType': DescribeDiagnosisRecordsResponseBodyQuerysQueryProperties },
      queueTime: 'number',
      rcHost: 'string',
      resourceCostRank: 'number',
      resourceGroup: 'string',
      SQL: 'string',
      SQLTruncated: 'boolean',
      SQLTruncatedThreshold: 'number',
      scanRows: 'number',
      scanSize: 'number',
      startTime: 'number',
      status: 'string',
      totalPlanningTime: 'number',
      totalStages: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSQLInfoResponseBodyStageInfos extends $tea.Model {
  /**
   * @remarks
   * The total amount of input data in the stage. Unit: bytes.
   * 
   * @example
   * 2341
   */
  inputDataSize?: number;
  /**
   * @remarks
   * The total number of input rows in the stage.
   * 
   * @example
   * 123
   */
  inputRows?: number;
  /**
   * @remarks
   * The total amount of time consumed by all operators in the stage. Unit: milliseconds.
   * 
   * @example
   * 2341
   */
  operatorCost?: number;
  /**
   * @remarks
   * The total amount of output data in the stage. Unit: bytes.
   * 
   * @example
   * 12344
   */
  outputDataSize?: number;
  /**
   * @remarks
   * The total number of output rows in the stage.
   * 
   * @example
   * 231
   */
  outputRows?: number;
  /**
   * @remarks
   * The total peak memory of the stage. Unit: bytes.
   * 
   * @example
   * 3421
   */
  peakMemory?: number;
  /**
   * @remarks
   * The execution progress of the stage.
   * 
   * @example
   * 0.3
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the stage.
   * 
   * @example
   * Stage[26]
   */
  stageId?: string;
  /**
   * @remarks
   * The state of the stage.
   * 
   * @example
   * RUNNING
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      inputDataSize: 'InputDataSize',
      inputRows: 'InputRows',
      operatorCost: 'OperatorCost',
      outputDataSize: 'OutputDataSize',
      outputRows: 'OutputRows',
      peakMemory: 'PeakMemory',
      progress: 'Progress',
      stageId: 'StageId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputDataSize: 'number',
      inputRows: 'number',
      operatorCost: 'number',
      outputDataSize: 'number',
      outputRows: 'number',
      peakMemory: 'number',
      progress: 'number',
      stageId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisTasksResponseBodyTaskList extends $tea.Model {
  /**
   * @remarks
   * The compute time ratio, which can be used to determine whether the task is really time-consuming. This parameter can be calculated by using the following formula: OperatorCost/Drivers/ElapsedTime. A greater value indicates that the task was executed for computing for most of the task time. A less value indicates that the task was waiting for scheduling or blocked due to other reasons for most of the task time.
   * 
   * @example
   * 0.89
   */
  computeTimeRatio?: string;
  /**
   * @remarks
   * The number of tasks that can be executed concurrently.
   * 
   * @example
   * 16
   */
  drivers?: string;
  /**
   * @remarks
   * The amount of time that elapsed from when the task was created to when the task was completed. Unit: milliseconds.
   * 
   * @example
   * 456
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The amount of input data in the task. Unit: bytes.
   * 
   * @example
   * 123
   */
  inputDataSize?: number;
  /**
   * @remarks
   * The number of input rows in the task.
   * 
   * @example
   * 105
   */
  inputRows?: number;
  /**
   * @remarks
   * The total amount of time that is consumed by all operators in the task on a node. This parameter can be used to determine whether long tails occur in computing. Unit: milliseconds.
   * 
   * @example
   * 3
   */
  operatorCost?: number;
  /**
   * @remarks
   * The amount of output data in the task. Unit: bytes.
   * 
   * @example
   * 123
   */
  outputDataSize?: number;
  /**
   * @remarks
   * The number of output rows in the task.
   * 
   * @example
   * 105
   */
  outputRows?: number;
  /**
   * @remarks
   * The peak memory of the task. Unit: bytes.
   * 
   * @example
   * 234
   */
  peakMemory?: number;
  /**
   * @remarks
   * The queuing duration of the task. Unit: milliseconds.
   * 
   * @example
   * 12
   */
  queuedTime?: string;
  /**
   * @remarks
   * The amount of time that is consumed to scan data from a data source in the task. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  scanCost?: number;
  /**
   * @remarks
   * The amount of scanned data in the task. Unit: bytes.
   * 
   * @example
   * 123
   */
  scanDataSize?: number;
  /**
   * @remarks
   * The number of rows that are scanned from a data source in the task.
   * 
   * @example
   * 0
   */
  scanRows?: number;
  /**
   * @remarks
   * The final execution state of the task. Valid values:
   * 
   * *   FINISHED
   * *   CANCELED
   * *   ABORTED
   * *   FAILED
   * 
   * @example
   * FINISHED
   */
  state?: string;
  /**
   * @remarks
   * The timestamp when the task was created.
   * 
   * @example
   * 2022-12-12 00:00:12
   */
  taskCreateTime?: number;
  /**
   * @remarks
   * The timestamp when the task ends.
   * 
   * @example
   * 2022-12-22 00:00:00
   */
  taskEndTime?: number;
  /**
   * @remarks
   * The IP address of the host where the task was executed.
   * 
   * @example
   * 192.168.XX.XX
   */
  taskHost?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 22568****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      computeTimeRatio: 'ComputeTimeRatio',
      drivers: 'Drivers',
      elapsedTime: 'ElapsedTime',
      inputDataSize: 'InputDataSize',
      inputRows: 'InputRows',
      operatorCost: 'OperatorCost',
      outputDataSize: 'OutputDataSize',
      outputRows: 'OutputRows',
      peakMemory: 'PeakMemory',
      queuedTime: 'QueuedTime',
      scanCost: 'ScanCost',
      scanDataSize: 'ScanDataSize',
      scanRows: 'ScanRows',
      state: 'State',
      taskCreateTime: 'TaskCreateTime',
      taskEndTime: 'TaskEndTime',
      taskHost: 'TaskHost',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeTimeRatio: 'string',
      drivers: 'string',
      elapsedTime: 'number',
      inputDataSize: 'number',
      inputRows: 'number',
      operatorCost: 'number',
      outputDataSize: 'number',
      outputRows: 'number',
      peakMemory: 'number',
      queuedTime: 'string',
      scanCost: 'number',
      scanDataSize: 'number',
      scanRows: 'number',
      state: 'string',
      taskCreateTime: 'number',
      taskEndTime: 'number',
      taskHost: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadRecordsResponseBodyRecords extends $tea.Model {
  /**
   * @remarks
   * The ID of the download task.
   * 
   * @example
   * 69
   */
  downloadId?: number;
  /**
   * @remarks
   * The error message returned when the download task has failed.
   * 
   * @example
   * The query result is empty.
   */
  exceptionMsg?: string;
  /**
   * @remarks
   * The name of the downloaded file.
   * 
   * @example
   * 20210806094635-20210806095135
   */
  fileName?: string;
  /**
   * @remarks
   * The status of the download task.
   * 
   * *   **running**: The download task is currently in progress.
   * *   **finished**: The download task is complete.
   * *   **failed**: The download task has failed.
   * 
   * @example
   * finished
   */
  status?: string;
  /**
   * @remarks
   * The download URL of the file.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      downloadId: 'DownloadId',
      exceptionMsg: 'ExceptionMsg',
      fileName: 'FileName',
      status: 'Status',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadId: 'number',
      exceptionMsg: 'string',
      fileName: 'string',
      status: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEIURangeResponseBodyEIUInfo extends $tea.Model {
  /**
   * @remarks
   * The suggested value for the number of EIUs.
   * 
   * @example
   * 2
   */
  defaultValue?: string;
  /**
   * @remarks
   * The queried range for the number of EIUs.
   */
  EIURange?: number[];
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * none
   */
  maxValue?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * none
   */
  minValue?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * none
   */
  step?: string;
  /**
   * @remarks
   * A reserved parameter.
   */
  storageResourceRange?: string[];
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      EIURange: 'EIURange',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      step: 'Step',
      storageResourceRange: 'StorageResourceRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      EIURange: { 'type': 'array', 'itemType': 'number' },
      maxValue: 'string',
      minValue: 'string',
      step: 'string',
      storageResourceRange: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticDailyPlanResponseBodyElasticDailyPlanList extends $tea.Model {
  /**
   * @remarks
   * The start date of the current-day scaling plan. The date is in the yyyy-MM-dd format.
   * 
   * @example
   * 2022-12-02
   */
  day?: string;
  /**
   * @remarks
   * The number of nodes involved in the scaling plan.
   * 
   * *   If ElasticPlanType is set to **worker**, a value of 0 or null is returned.
   * *   If ElasticPlanType is set to **executorcombineworker** or **executor**, a value greater than 0 is returned.
   * 
   * @example
   * 0
   */
  elasticNodeNum?: number;
  /**
   * @remarks
   * The type of the scaling plan. Default value: executorcombineworker. Valid values:
   * 
   * *   **worker**: scales only elastic I/O resources.
   * *   **executor**: scales only computing resources.
   * *   **executorcombineworker**: scales both elastic I/O resources and computing resources by proportion.
   * 
   * @example
   * worker
   */
  elasticPlanType?: string;
  /**
   * @remarks
   * The resource specifications that can be scaled up by the scaling plan. Default value: 8 Core 64 GB. Valid values:
   * 
   * *   8 Core 64 GB
   * *   16 Core 64 GB
   * *   32 Core 64 GB
   * *   64 Core 128 GB
   * *   12 Core 96 GB
   * *   24 Core 96 GB
   * *   52 Core 86 GB
   * 
   * @example
   * 16 Core 64 GB
   */
  elasticPlanWorkerSpec?: string;
  /**
   * @remarks
   * The actual restoration time. The time is in the yyyy-MM-dd hh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-12-02 16:00:00
   */
  endTs?: string;
  /**
   * @remarks
   * The scheduled restoration time. The time is in the yyyy-MM-dd hh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-12-02 16:00:00
   */
  planEndTs?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * @example
   * realtimeplan
   */
  planName?: string;
  /**
   * @remarks
   * The scheduled scale-up time. The time is in the yyyy-MM-dd hh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-12-02 15:00:00
   */
  planStartTs?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test
   */
  resourcePoolName?: string;
  /**
   * @remarks
   * The actual scale-up time. The time is in the yyyy-MM-dd hh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-12-02 16:00:00
   */
  startTs?: string;
  /**
   * @remarks
   * The execution state of the current-day scaling plan. Multiple values are separated by commas (,). Valid values:
   * 
   * *   **1**: The scaling plan is not executed.
   * *   **2**: The scaling plan is being executed.
   * *   **3**: The scaling plan is executed.
   * *   **4**: The scaling plan fails to be executed.
   * 
   * @example
   * 3
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      elasticNodeNum: 'ElasticNodeNum',
      elasticPlanType: 'ElasticPlanType',
      elasticPlanWorkerSpec: 'ElasticPlanWorkerSpec',
      endTs: 'EndTs',
      planEndTs: 'PlanEndTs',
      planName: 'PlanName',
      planStartTs: 'PlanStartTs',
      resourcePoolName: 'ResourcePoolName',
      startTs: 'StartTs',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'string',
      elasticNodeNum: 'number',
      elasticPlanType: 'string',
      elasticPlanWorkerSpec: 'string',
      endTs: 'string',
      planEndTs: 'string',
      planName: 'string',
      planStartTs: 'string',
      resourcePoolName: 'string',
      startTs: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanResponseBodyElasticPlanList extends $tea.Model {
  /**
   * @remarks
   * The number of nodes that are involved in the scaling plan.
   * 
   * *   If ElasticPlanType is set to **worker**, a value of 0 or null is returned.
   * *   If ElasticPlanType is set to **executorcombineworker** or **executor**, a value greater than 0 is returned.
   * 
   * @example
   * 0
   */
  elasticNodeNum?: number;
  /**
   * @remarks
   * The type of the scaling plan. Valid values:
   * 
   * *   **worker**: scales only elastic I/O resources.
   * *   **executor**: scales only computing resources.
   * *   **executorcombineworker** (default): scales both elastic I/O resources and computing resources by proportion.
   * 
   * @example
   * worker
   */
  elasticPlanType?: string;
  /**
   * @remarks
   * The resource specifications that can be scaled up by the scaling plan. Valid values:
   * 
   * *   8 Core 64 GB (default)
   * *   16 Core 64 GB
   * *   32 Core 64 GB
   * *   64 Core 128 GB
   * *   12 Core 96 GB
   * *   24 Core 96 GB
   * *   52 Core 86 GB
   * 
   * @example
   * 16 Core 64 GB
   */
  elasticPlanWorkerSpec?: string;
  /**
   * @remarks
   * Indicates whether the scaling plan takes effect. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The end date of the scaling plan. This parameter is returned only if the end date of the scaling plan is set. The date is in the yyyy-MM-dd format.
   * 
   * @example
   * 2022-12-09
   */
  endDay?: string;
  /**
   * @remarks
   * The restoration time of the scaling plan. The interval between the scale-up time and the restoration time cannot be more than 24 hours. The time is in the HH:mm:ss format.
   * 
   * @example
   * 10:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The days of the month when the scaling plan was executed. A value indicates a day of the month. Multiple values are separated by commas (,).
   * 
   * @example
   * 1,15,25
   */
  monthlyRepeat?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * @example
   * realtime
   */
  planName?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * USER_DEFAULT
   */
  resourcePoolName?: string;
  /**
   * @remarks
   * The start date of the scaling plan. This parameter is returned only if the start date of the scaling plan is set. The date is in the yyyy-MM-dd format.
   * 
   * @example
   * 2022-12-02
   */
  startDay?: string;
  /**
   * @remarks
   * The scale-up time of the scaling plan. The time is in the HH:mm:ss format.
   * 
   * @example
   * 08:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The days of the week when the scaling plan was executed. Valid values: 0 to 6, which indicate Sunday to Saturday. Multiple values are separated by commas (,).
   * 
   * @example
   * 3,4,5,6
   */
  weeklyRepeat?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNodeNum: 'ElasticNodeNum',
      elasticPlanType: 'ElasticPlanType',
      elasticPlanWorkerSpec: 'ElasticPlanWorkerSpec',
      enable: 'Enable',
      endDay: 'EndDay',
      endTime: 'EndTime',
      monthlyRepeat: 'MonthlyRepeat',
      planName: 'PlanName',
      resourcePoolName: 'ResourcePoolName',
      startDay: 'StartDay',
      startTime: 'StartTime',
      weeklyRepeat: 'WeeklyRepeat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNodeNum: 'number',
      elasticPlanType: 'string',
      elasticPlanWorkerSpec: 'string',
      enable: 'boolean',
      endDay: 'string',
      endTime: 'string',
      monthlyRepeat: 'string',
      planName: 'string',
      resourcePoolName: 'string',
      startDay: 'string',
      startTime: 'string',
      weeklyRepeat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcessivePrimaryKeysResponseBodyDetectionItems extends $tea.Model {
  /**
   * @remarks
   * The detection result.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The name of the detection item.
   * 
   * @example
   * evm_identity
   */
  name?: string;
  /**
   * @remarks
   * The severity level of the detection result.
   * 
   * @example
   * NORMAL
   * WARNING
   * CRITICAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcessivePrimaryKeysResponseBodyTables extends $tea.Model {
  /**
   * @remarks
   * The total number of columns.
   * 
   * @example
   * 26
   */
  columnCount?: number;
  /**
   * @remarks
   * The queried primary key fields.
   * 
   * @example
   * id,date
   */
  primaryKeyColumns?: string;
  /**
   * @remarks
   * The number of primary key fields.
   * 
   * @example
   * 1
   */
  primaryKeyCount?: number;
  /**
   * @remarks
   * The data size of primary key indexes. Unit: bytes.
   * 
   * @example
   * 2345
   */
  primaryKeyIndexSize?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The percentage of the table size. Unit: %.
   * 
   * >  Formula: Table storage percentage = Total data size of a table/Total data size of the cluster × 100%.
   * 
   * @example
   * 20
   */
  spaceRatio?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The cold data size. Unit: bytes.
   * 
   * >  Formula: Cold data size = Data size of table records + Data size of regular indexes + Data size of primary key indexes + Size of other data.
   * 
   * @example
   * 1073741824
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      columnCount: 'ColumnCount',
      primaryKeyColumns: 'PrimaryKeyColumns',
      primaryKeyCount: 'PrimaryKeyCount',
      primaryKeyIndexSize: 'PrimaryKeyIndexSize',
      schemaName: 'SchemaName',
      spaceRatio: 'SpaceRatio',
      tableName: 'TableName',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnCount: 'number',
      primaryKeyColumns: 'string',
      primaryKeyCount: 'number',
      primaryKeyIndexSize: 'number',
      schemaName: 'string',
      spaceRatio: 'number',
      tableName: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInclinedTablesResponseBodyDetectionItems extends $tea.Model {
  message?: string;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInclinedTablesResponseBodyItemsTable extends $tea.Model {
  isIncline?: string;
  name?: string;
  rowCount?: number;
  schema?: string;
  size?: string;
  spaceRatio?: number;
  totalSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      isIncline: 'IsIncline',
      name: 'Name',
      rowCount: 'RowCount',
      schema: 'Schema',
      size: 'Size',
      spaceRatio: 'SpaceRatio',
      totalSize: 'TotalSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isIncline: 'string',
      name: 'string',
      rowCount: 'number',
      schema: 'string',
      size: 'string',
      spaceRatio: 'number',
      totalSize: 'number',
      type: 'string',
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

export class DescribeKernelVersionResponseBodyAvailableKernelVersions extends $tea.Model {
  /**
   * @remarks
   * The maintenance expiration time of the version. The time follows the ISO 8601 standard in the yyyy-MM-DD HH:mm:ss format. The time is displayed in UTC. After the time arrives, the system no longer maintains the version. If any issues occur, update the minor version of the cluster to a later version.
   * 
   * @example
   * 2024-06-01T10:36:30Z
   */
  expireDate?: string;
  /**
   * @remarks
   * The minor version. Example: **3.1.9**.
   * 
   * @example
   * 3.1.9
   */
  kernelVersion?: string;
  /**
   * @remarks
   * The time when the minor version was released. The time follows the ISO 8601 standard in the yyyy-MM-DD HH:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2023-06-01T10:36:30Z
   */
  releaseDate?: string;
  static names(): { [key: string]: string } {
    return {
      expireDate: 'ExpireDate',
      kernelVersion: 'KernelVersion',
      releaseDate: 'ReleaseDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireDate: 'string',
      kernelVersion: 'string',
      releaseDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadTasksRecordsResponseBodyLoadTasksRecords extends $tea.Model {
  /**
   * @remarks
   * The start time of the task. The time is accurate to milliseconds. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ss.SSSZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-18 18:47:27.0
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the database that is involved in the import or export task.
   * 
   * @example
   * adb_demo
   */
  DBName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 2021051818472717201616624903453******
   */
  jobName?: string;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * 2021051818472717201616624903453******
   */
  processID?: string;
  /**
   * @remarks
   * The number of rows that are processed in the asynchronous import or export task.
   * 
   * @example
   * 6
   */
  processRows?: number;
  /**
   * @remarks
   * The SQL statement that is used in the asynchronous import or export task.
   * 
   * @example
   * insert overwrite into courses_external_table\\nselect * from courses
   */
  sql?: string;
  /**
   * @remarks
   * The state of the task.
   * 
   * @example
   * FINISH
   */
  state?: string;
  /**
   * @remarks
   * The time when the task state was updated. The time is accurate to milliseconds. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ss.SSSZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-18 18:47:31.0
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBName: 'DBName',
      jobName: 'JobName',
      processID: 'ProcessID',
      processRows: 'ProcessRows',
      sql: 'Sql',
      state: 'State',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBName: 'string',
      jobName: 'string',
      processID: 'string',
      processRows: 'number',
      sql: 'string',
      state: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaintenanceActionResponseBodyItems extends $tea.Model {
  /**
   * @remarks
   * The time when the O\\&M event was created. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-30T02:44:27Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The ID of the cluster that is involved in the O\\&M event.
   * 
   * @example
   * am-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * analyticdb
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * 3.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The deadline before which the event can be executed. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-07-04T15:59:59Z
   */
  deadline?: string;
  /**
   * @remarks
   * The ID of the O\\&M event.
   * 
   * @example
   * 11111
   */
  id?: number;
  /**
   * @remarks
   * The point in time at which the switchover time of the O\\&M event was modified. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-07-03T06:33:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The preparation time that is required before the pending O\\&M event can be switched. The time is in the `HH:mm:ss` format.
   * 
   * @example
   * 02:00:00
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The ID of the region where the O\\&M event occurs.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The execution result of the O\\&M event.
   * 
   * > This parameter is returned only when the value of `Status` is **FAILED** or **CANCEL**.
   * 
   * @example
   * autoCancel
   */
  resultInfo?: string;
  /**
   * @remarks
   * The time when the task was executed in the backend. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-07-03T04:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the event.
   * 
   * *   If you set `IsHistory` to **0**, the state of the pending O\\&M event is returned. Valid values:
   * 
   *     *   **WAITING_MODIFY**: The start time of the O\\&M event is waiting to be set.
   *     *   **WAITING**: The O\\&M event is waiting to be processed.
   *     *   **PROCESSING**: The O\\&M event is being processed. The switchover time of an event in this state cannot be changed.
   * 
   * *   If you set `IsHistory` to **1**, the state of the historical O\\&M event is returned. Valid values:
   * 
   *     *   **SUCCESS**: The event ended and the execution succeeded.
   *     *   **FAILED**: The event ended but the execution failed.
   *     *   **CANCEL**: The event was canceled.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The time when the pending O\\&M event is switched. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-07-03T06:00:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The type of the O\\&M event.
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      deadline: 'Deadline',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      prepareInterval: 'PrepareInterval',
      region: 'Region',
      resultInfo: 'ResultInfo',
      startTime: 'StartTime',
      status: 'Status',
      switchTime: 'SwitchTime',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      DBClusterId: 'string',
      DBType: 'string',
      DBVersion: 'string',
      deadline: 'string',
      id: 'number',
      modifiedTime: 'string',
      prepareInterval: 'string',
      region: 'string',
      resultInfo: 'string',
      startTime: 'string',
      status: 'string',
      switchTime: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternPerformanceResponseBodyPerformancesSeries extends $tea.Model {
  /**
   * @remarks
   * The name of the performance metric value. Valid values:
   * 
   * *   When the `Key` parameter is set to `AnalyticDB_PatternQueryCount`, `pattern_query_count` is returned, which indicates the number of executions of the SQL statements in association with the SQL pattern.
   * 
   * *   When the `Key` parameter is set to `AnalyticDB_PatternQueryTime`, the following values are returned:
   * 
   *     *   `average_query_time`, which indicates the average total amount of time consumed by the SQL statements in association with the SQL pattern.
   *     *   `max_query_time`, which indicates the maximum total amount of time consumed by the SQL statements in association with the SQL pattern.
   * 
   * *   When the `Key` parameter is set to `AnalyticDB_PatternExecutionTime`, the following values are returned:
   * 
   *     *   `average_execution_time`, which indicates the average execution duration of the SQL statements in association with the SQL pattern.
   *     *   `max_execution_time`, which indicates the maximum execution duration of the SQL statements in association with the SQL pattern.
   * 
   * *   When the `Key` parameter is set to `AnalyticDB_PatternPeakMemory`, the following values are returned:
   * 
   *     *   `average_peak_memory`, which indicates the average peak memory usage of the SQL statements in association with the SQL pattern.
   *     *   `max_peak_memory`, which indicates the maximum peak memory usage of the SQL statements in association with the SQL pattern.
   * 
   * *   When the `Key` parameter is set `AnalyticDB_PatternScanSize`, the following values are returned:
   * 
   *     *   `average_scan_size`, which indicates the average amount of data scanned by the SQL statements in association with the SQL pattern.
   *     *   `max_scan_size`, which indicates the maximum amount of data scanned by the SQL statements in association with the SQL pattern.
   * 
   * @example
   * max_query_time
   */
  name?: string;
  /**
   * @remarks
   * The queried performance metrics.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternPerformanceResponseBodyPerformances extends $tea.Model {
  /**
   * @remarks
   * The performance metric that was queried. Valid values:
   * 
   * *   **AnalyticDB_PatternQueryCount**: the total number of queries executed in association with the SQL pattern.
   * *   **AnalyticDB_PatternQueryTime**: the total amount of time consumed by the queries executed in association with the SQL pattern.
   * *   **AnalyticDB_PatternExecutionTime**: the total execution duration of the queries executed in association with the SQL pattern.
   * *   **AnalyticDB_PatternPeakMemory**: the peak memory usage of the queries executed in association with the SQL pattern.
   * *   **AnalyticDB_PatternScanSize**: the amount of data scanned in the queries executed in association with the SQL pattern.
   * 
   * @example
   * AnalyticDB_PatternQueryCount
   */
  key?: string;
  /**
   * @remarks
   * The queried performance metrics.
   */
  series?: DescribePatternPerformanceResponseBodyPerformancesSeries[];
  /**
   * @remarks
   * The unit of the performance metric. Valid values:
   * 
   * *   When the performance metric is related to the query duration (the `Key` value is `AnalyticDB_PatternQueryTime` or `AnalyticDB_PatternExecutionTime`), **ms** is returned.
   * *   When the performance metric is related to the memory usage (the `Key` value is `AnalyticDB_PatternPeakMemory`), **MB** is returned.
   * *   When the performance metric is related to the amount of data scanned (the `Key` value is `AnalyticDB_PatternScanSize`), **MB** is returned.
   * *   When the performance metric is related to the number of queries (the `Key` value is `AnalyticDB_PatternQueryCount`), this parameter is empty.
   * 
   * @example
   * ms
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      series: 'Series',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      series: { 'type': 'array', 'itemType': DescribePatternPerformanceResponseBodyPerformancesSeries },
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBodyItemsProcess extends $tea.Model {
  /**
   * @remarks
   * The type of the statement. Only SELECT can be returned.
   * 
   * @example
   * SELECT
   */
  command?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  DB?: string;
  /**
   * @remarks
   * The IP address from which the query was initiated.
   * 
   * @example
   * 192.168.XX.XX:12308
   */
  host?: string;
  /**
   * @remarks
   * The ID of the worker thread.
   * 
   * @example
   * 49104
   */
  id?: number;
  /**
   * @remarks
   * The SQL statement that is being executed. By default, the first 100 characters of the SQL statement are returned. If the ShowFull parameter is set to True, the complete SQL statement is returned.
   * 
   * @example
   * select * from sbtest1,sbtest2,sbtest3,sbtest4
   */
  info?: string;
  /**
   * @remarks
   * The unique ID of the query. You must specify this parameter when you use the KILL PROCESS statement.
   * 
   * @example
   * 202011191048151921681492420315100****
   */
  processId?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-11-19T02:48:15Z
   */
  startTime?: string;
  /**
   * @remarks
   * The amount of time that has elapsed from the start time of the query. Unit: seconds.
   * 
   * @example
   * 11
   */
  time?: number;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      DB: 'DB',
      host: 'Host',
      id: 'Id',
      info: 'Info',
      processId: 'ProcessId',
      startTime: 'StartTime',
      time: 'Time',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      DB: 'string',
      host: 'string',
      id: 'number',
      info: 'string',
      processId: 'string',
      startTime: 'string',
      time: 'number',
      user: 'string',
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
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * Hangzhou Zone H
   */
  localName?: string;
  /**
   * @remarks
   * Indicates whether Virtual Private Cloud (VPC) is supported in the zone. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  vpcEnabled?: boolean;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      vpcEnabled: 'VpcEnabled',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
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
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the region.
   * 
   * @example
   * adb.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The queried zones.
   */
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

export class DescribeResubmitConfigResponseBodyRules extends $tea.Model {
  /**
   * @remarks
   * Indicates whether out-of-memory (OOM) check is configured.
   * 
   * @example
   * false
   */
  exceedMemoryException?: boolean;
  /**
   * @remarks
   * The name of the source resource group.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The peak memory usage.
   * 
   * @example
   * 32
   */
  peakMemory?: string;
  /**
   * @remarks
   * The duration of the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 300
   */
  queryTime?: string;
  /**
   * @remarks
   * The name of the destination resource group.
   * 
   * @example
   * test_target_group
   */
  targetGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      exceedMemoryException: 'ExceedMemoryException',
      groupName: 'GroupName',
      peakMemory: 'PeakMemory',
      queryTime: 'QueryTime',
      targetGroupName: 'TargetGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceedMemoryException: 'boolean',
      groupName: 'string',
      peakMemory: 'string',
      queryTime: 'string',
      targetGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPatternsResponseBodyPatternDetails extends $tea.Model {
  /**
   * @remarks
   * The IP address of the SQL client that commits the SQL pattern.
   * 
   * @example
   * 192.168.xx.xx
   */
  accessIp?: string;
  /**
   * @remarks
   * The average execution duration of the SQL pattern within the query time range. Unit: milliseconds.
   * 
   * @example
   * 234.78
   */
  averageExecutionTime?: number;
  /**
   * @remarks
   * The number of average operator cost.
   * 
   * @example
   * 5
   */
  averageOperatorCost?: number;
  /**
   * @remarks
   * The average peak memory usage of the SQL pattern within the query time range. Unit: bytes.
   * 
   * @example
   * 234.22
   */
  averagePeakMemory?: number;
  /**
   * @remarks
   * The average total amount of time consumed by the SQL pattern within the query time range. Unit: milliseconds.
   * 
   * @example
   * 4
   */
  averageQueryTime?: number;
  /**
   * @remarks
   * The number of average scan cost.
   * 
   * @example
   * 3
   */
  averageScanCost?: number;
  /**
   * @remarks
   * The average amount of data scanned based on the SQL pattern within the query time range. Unit: bytes.
   * 
   * @example
   * 234149.23
   */
  averageScanSize?: number;
  /**
   * @remarks
   * Indicates whether the execution of the SQL pattern can be blocked. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > Only SELECT and INSERT statements can be blocked.
   * 
   * @example
   * true
   */
  blockable?: boolean;
  /**
   * @remarks
   * The number of failed queries executed in association with the SQL pattern within the query time range.
   * 
   * @example
   * 234
   */
  failedCount?: number;
  /**
   * @remarks
   * The maximum execution duration of the SQL pattern within the query time range. Unit: milliseconds.
   * 
   * @example
   * 2142
   */
  maxExecutionTime?: number;
  /**
   * @remarks
   * The number of max operator cost.
   * 
   * @example
   * 10
   */
  maxOperatorCost?: number;
  /**
   * @remarks
   * The maximum peak memory usage of the SQL pattern within the query time range. Unit: bytes.
   * 
   * @example
   * 234149
   */
  maxPeakMemory?: number;
  /**
   * @remarks
   * The maximum total amount of time consumed by the SQL pattern within the query time range. Unit: milliseconds.
   * 
   * @example
   * 2341
   */
  maxQueryTime?: number;
  /**
   * @remarks
   * The number of max scan cost.
   * 
   * @example
   * 7
   */
  maxScanCost?: number;
  /**
   * @remarks
   * The maximum amount of data scanned based on the SQL pattern within the query time range. Unit: bytes.
   * 
   * @example
   * 234149
   */
  maxScanSize?: number;
  /**
   * @remarks
   * The number of operator cost percentage.
   * 
   * @example
   * 75
   */
  operatorCostPercentage?: number;
  /**
   * @remarks
   * The number of operator cost sum.
   * 
   * @example
   * 20
   */
  operatorCostSum?: number;
  /**
   * @remarks
   * The earliest commit time of the SQL pattern within the query time range. Unit: milliseconds.
   * 
   * @example
   * 2021-11-12 03:06:00
   */
  patternCreationTime?: string;
  /**
   * @remarks
   * The ID of the SQL pattern.
   * 
   * @example
   * 5575924945138******
   */
  patternId?: string;
  /**
   * @remarks
   * The number of peak memory percentage.
   * 
   * @example
   * 80
   */
  peakMemoryPercentage?: number;
  /**
   * @remarks
   * The number of peak memory sum.
   * 
   * @example
   * 3600
   */
  peakMemorySum?: number;
  /**
   * @remarks
   * The number of queries executed in association with the SQL pattern within the query time range.
   * 
   * @example
   * 345
   */
  queryCount?: number;
  /**
   * @remarks
   * The number of query time percentage.
   * 
   * @example
   * 80
   */
  queryTimePercentage?: number;
  /**
   * @remarks
   * The number of query time sum.
   * 
   * @example
   * 5
   */
  queryTimeSum?: number;
  /**
   * @remarks
   * The statement of the SQL pattern.
   * 
   * @example
   * SELECT * FROM KEPLER_META_NODE_STATIC_INFO WHERE elastic_node = ? OR (elastic_node = ? AND enable = ?)
   */
  SQLPattern?: string;
  /**
   * @remarks
   * The number of scan cost percentage.
   * 
   * @example
   * 75
   */
  scanCostPercentage?: number;
  /**
   * @remarks
   * The number of scan cost sum.
   * 
   * @example
   * 11
   */
  scanCostSum?: number;
  /**
   * @remarks
   * The number of scan size percentage.
   * 
   * @example
   * 80
   */
  scanSizePercentage?: number;
  /**
   * @remarks
   * The number of scan size sum.
   * 
   * @example
   * 3
   */
  scanSizeSum?: number;
  /**
   * @remarks
   * The tables scanned based on the SQL pattern.
   * 
   * @example
   * tpch.orders
   */
  tables?: string;
  /**
   * @remarks
   * The database username that is used to commit the SQL pattern.
   * 
   * @example
   * reporter
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      accessIp: 'AccessIp',
      averageExecutionTime: 'AverageExecutionTime',
      averageOperatorCost: 'AverageOperatorCost',
      averagePeakMemory: 'AveragePeakMemory',
      averageQueryTime: 'AverageQueryTime',
      averageScanCost: 'AverageScanCost',
      averageScanSize: 'AverageScanSize',
      blockable: 'Blockable',
      failedCount: 'FailedCount',
      maxExecutionTime: 'MaxExecutionTime',
      maxOperatorCost: 'MaxOperatorCost',
      maxPeakMemory: 'MaxPeakMemory',
      maxQueryTime: 'MaxQueryTime',
      maxScanCost: 'MaxScanCost',
      maxScanSize: 'MaxScanSize',
      operatorCostPercentage: 'OperatorCostPercentage',
      operatorCostSum: 'OperatorCostSum',
      patternCreationTime: 'PatternCreationTime',
      patternId: 'PatternId',
      peakMemoryPercentage: 'PeakMemoryPercentage',
      peakMemorySum: 'PeakMemorySum',
      queryCount: 'QueryCount',
      queryTimePercentage: 'QueryTimePercentage',
      queryTimeSum: 'QueryTimeSum',
      SQLPattern: 'SQLPattern',
      scanCostPercentage: 'ScanCostPercentage',
      scanCostSum: 'ScanCostSum',
      scanSizePercentage: 'ScanSizePercentage',
      scanSizeSum: 'ScanSizeSum',
      tables: 'Tables',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIp: 'string',
      averageExecutionTime: 'number',
      averageOperatorCost: 'number',
      averagePeakMemory: 'number',
      averageQueryTime: 'number',
      averageScanCost: 'number',
      averageScanSize: 'number',
      blockable: 'boolean',
      failedCount: 'number',
      maxExecutionTime: 'number',
      maxOperatorCost: 'number',
      maxPeakMemory: 'number',
      maxQueryTime: 'number',
      maxScanCost: 'number',
      maxScanSize: 'number',
      operatorCostPercentage: 'number',
      operatorCostSum: 'number',
      patternCreationTime: 'string',
      patternId: 'string',
      peakMemoryPercentage: 'number',
      peakMemorySum: 'number',
      queryCount: 'number',
      queryTimePercentage: 'number',
      queryTimeSum: 'number',
      SQLPattern: 'string',
      scanCostPercentage: 'number',
      scanCostSum: 'number',
      scanSizePercentage: 'number',
      scanSizeSum: 'number',
      tables: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanResponseBodyDetail extends $tea.Model {
  /**
   * @remarks
   * The total CPU time consumed by all operators on multithreaded servers when the SQL statement is executed. Unit: milliseconds.
   * 
   * @example
   * 6100
   */
  CPUTime?: number;
  /**
   * @remarks
   * The IP address of the client that is used to execute the SQL statement.
   * 
   * @example
   * 172.16.***.***
   */
  clientIP?: string;
  /**
   * @remarks
   * The name of the database on which the SQL statement was executed.
   * 
   * @example
   * adb_demo
   */
  database?: string;
  /**
   * @remarks
   * The total number of rows generated by the SQL statement.
   * 
   * @example
   * 1
   */
  outputRows?: number;
  /**
   * @remarks
   * The total amount of data generated by the SQL statement. Unit: bytes.
   * 
   * @example
   * 9
   */
  outputSize?: number;
  /**
   * @remarks
   * The maximum memory usage when the SQL statement is executed. Unit: bytes.
   * 
   * @example
   * 441802
   */
  peakMemory?: number;
  /**
   * @remarks
   * The amount of time consumed to generate the execution plan of the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 86
   */
  planningTime?: number;
  /**
   * @remarks
   * The amount of time consumed to queue the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  queuedTime?: number;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * INSERT OVERWRITE INTO hdfs_import_external\\nSELECT *\\nFROM adb_hdfs_import_source
   */
  SQL?: string;
  /**
   * @remarks
   * The execution start time of the SQL statement. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1622102683243
   */
  startTime?: string;
  /**
   * @remarks
   * The final execution state of the SQL statement. Valid values:
   * 
   * *   FINISHED
   * *   FAILED
   * 
   * @example
   * FINISHED
   */
  state?: string;
  /**
   * @remarks
   * The total number of stages in the SQL statement.
   * 
   * @example
   * 4
   */
  totalStage?: number;
  /**
   * @remarks
   * The total number of tasks in the SQL statement.
   * 
   * @example
   * 4
   */
  totalTask?: number;
  /**
   * @remarks
   * The total amount of time consumed to execute the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 2340
   */
  totalTime?: number;
  /**
   * @remarks
   * The name of the user who submitted the SQL statement.
   * 
   * @example
   * test_acc
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      CPUTime: 'CPUTime',
      clientIP: 'ClientIP',
      database: 'Database',
      outputRows: 'OutputRows',
      outputSize: 'OutputSize',
      peakMemory: 'PeakMemory',
      planningTime: 'PlanningTime',
      queuedTime: 'QueuedTime',
      SQL: 'SQL',
      startTime: 'StartTime',
      state: 'State',
      totalStage: 'TotalStage',
      totalTask: 'TotalTask',
      totalTime: 'TotalTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUTime: 'number',
      clientIP: 'string',
      database: 'string',
      outputRows: 'number',
      outputSize: 'number',
      peakMemory: 'number',
      planningTime: 'number',
      queuedTime: 'number',
      SQL: 'string',
      startTime: 'string',
      state: 'string',
      totalStage: 'number',
      totalTask: 'number',
      totalTime: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanResponseBodyStageList extends $tea.Model {
  /**
   * @remarks
   * The average `CPU Time` value on each compute node in the stage. Unit: milliseconds.
   * 
   * @example
   * 5984
   */
  CPUTimeAvg?: number;
  /**
   * @remarks
   * The maximum `CPU Time` value on each compute node in the stage. Unit: milliseconds.
   * 
   * @example
   * 5984
   */
  CPUTimeMax?: number;
  /**
   * @remarks
   * The minimum `CPU Time` value on each compute node in the stage. Unit: milliseconds.
   * 
   * @example
   * 47
   */
  CPUTimeMin?: number;
  /**
   * @remarks
   * The average amount of input data on each compute node in the stage. Unit: bytes.
   * 
   * @example
   * 173
   */
  inputSizeAvg?: number;
  /**
   * @remarks
   * The maximum amount of input data on each compute node in the stage. Unit: byte.
   * 
   * @example
   * 173
   */
  inputSizeMax?: number;
  /**
   * @remarks
   * The minimum amount of input data on each compute node in the stage. Unit: bytes.
   * 
   * @example
   * 173
   */
  inputSizeMin?: number;
  /**
   * @remarks
   * The total CPU time consumed by all operators in the stage, which is equivalent to the total CPU time of the stage. You can use this parameter to determine which parts of the stage consume a large amount of computing resources. Unit: milliseconds.
   * 
   * @example
   * 5984
   */
  operatorCost?: number;
  /**
   * @remarks
   * The maximum memory usage when the SQL statement is executed. Unit: bytes.
   * 
   * @example
   * 74208
   */
  peakMemory?: number;
  /**
   * @remarks
   * The average amount of data scanned by a scan operator on each storage node in the stage. Unit: bytes.
   * 
   * @example
   * 0
   */
  scanSizeAvg?: number;
  /**
   * @remarks
   * The maximum amount of data scanned by a scan operator on each storage node in the stage. Unit: bytes.
   * 
   * @example
   * 0
   */
  scanSizeMax?: number;
  /**
   * @remarks
   * The minimum amount of data scanned by a scan operator on each storage node in the stage. Unit: bytes.
   * 
   * @example
   * 0
   */
  scanSizeMin?: number;
  /**
   * @remarks
   * The average amount of time consumed by a scan operator to read data on each storage node in the stage. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  scanTimeAvg?: number;
  /**
   * @remarks
   * The maximum amount of time consumed by a scan operator to read data on each storage node in the stage. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  scanTimeMax?: number;
  /**
   * @remarks
   * The minimum amount of time consumed by a scan operator to read data on each storage node in the stage. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  scanTimeMin?: number;
  /**
   * @remarks
   * The stage ID.
   * 
   * @example
   * 1
   */
  stageId?: number;
  /**
   * @remarks
   * The final execution state of the stage. Valid values:
   * 
   * *   FINISHED
   * *   CANCELED
   * *   ABORTED
   * *   FAILED
   * 
   * @example
   * FINISHED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      CPUTimeAvg: 'CPUTimeAvg',
      CPUTimeMax: 'CPUTimeMax',
      CPUTimeMin: 'CPUTimeMin',
      inputSizeAvg: 'InputSizeAvg',
      inputSizeMax: 'InputSizeMax',
      inputSizeMin: 'InputSizeMin',
      operatorCost: 'OperatorCost',
      peakMemory: 'PeakMemory',
      scanSizeAvg: 'ScanSizeAvg',
      scanSizeMax: 'ScanSizeMax',
      scanSizeMin: 'ScanSizeMin',
      scanTimeAvg: 'ScanTimeAvg',
      scanTimeMax: 'ScanTimeMax',
      scanTimeMin: 'ScanTimeMin',
      stageId: 'StageId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUTimeAvg: 'number',
      CPUTimeMax: 'number',
      CPUTimeMin: 'number',
      inputSizeAvg: 'number',
      inputSizeMax: 'number',
      inputSizeMin: 'number',
      operatorCost: 'number',
      peakMemory: 'number',
      scanSizeAvg: 'number',
      scanSizeMax: 'number',
      scanSizeMin: 'number',
      scanTimeAvg: 'number',
      scanTimeMax: 'number',
      scanTimeMin: 'number',
      stageId: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanTaskResponseBodyTaskList extends $tea.Model {
  /**
   * @remarks
   * The time elapsed from when the task was created to when the task was complete. Unit: milliseconds.
   * 
   * @example
   * 10
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The number of input rows in the task.
   * 
   * @example
   * 105
   */
  inputRows?: number;
  /**
   * @remarks
   * The amount of input data in the task. Unit: bytes.
   * 
   * @example
   * 3763
   */
  inputSize?: number;
  /**
   * @remarks
   * The total amount of time consumed by operators in the task on a specific node. This parameter can be used to determine whether long tails occur in computing. Unit: milliseconds.
   * 
   * @example
   * 3
   */
  operatorCost?: number;
  /**
   * @remarks
   * The number of output rows in the task.
   * 
   * @example
   * 105
   */
  outputRows?: number;
  /**
   * @remarks
   * The amount of output data in the task. Unit: bytes.
   * 
   * @example
   * 945
   */
  outputSize?: number;
  /**
   * @remarks
   * The peak memory of the task on a specific node. Unit: bytes.
   * 
   * @example
   * 898576
   */
  peakMemory?: number;
  /**
   * @remarks
   * The time consumed to scan data from a data source in the task. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  scanCost?: number;
  /**
   * @remarks
   * The number of rows scanned from a data source in the task.
   * 
   * @example
   * 0
   */
  scanRows?: number;
  /**
   * @remarks
   * The amount of data scanned from a data source in the task. Unit: bytes.
   * 
   * @example
   * 0
   */
  scanSize?: number;
  /**
   * @remarks
   * The final execution status of the task. Valid values:
   * 
   * *   FINISHED
   * *   CANCELED
   * *   ABORTED
   * *   FAILED
   * 
   * @example
   * FINISHED
   */
  state?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 198877623
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      elapsedTime: 'ElapsedTime',
      inputRows: 'InputRows',
      inputSize: 'InputSize',
      operatorCost: 'OperatorCost',
      outputRows: 'OutputRows',
      outputSize: 'OutputSize',
      peakMemory: 'PeakMemory',
      scanCost: 'ScanCost',
      scanRows: 'ScanRows',
      scanSize: 'ScanSize',
      state: 'State',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elapsedTime: 'number',
      inputRows: 'number',
      inputSize: 'number',
      operatorCost: 'number',
      outputRows: 'number',
      outputSize: 'number',
      peakMemory: 'number',
      scanCost: 'number',
      scanRows: 'number',
      scanSize: 'number',
      state: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchemasResponseBodyItemsSchema extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      schemaName: 'string',
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
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  DBName?: string;
  /**
   * @remarks
   * The time when the execution started. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-27T08:04:43Z
   */
  executionStartTime?: string;
  /**
   * @remarks
   * The IP address of the client that is used to connect to the database.
   * 
   * @example
   * ``172.16.**.**``
   */
  hostAddress?: string;
  /**
   * @remarks
   * The amount of output data in the task. Unit: bytes.
   * 
   * @example
   * 0.009
   */
  outputSize?: string;
  /**
   * @remarks
   * The number of rows parsed by the SQL statement.
   * 
   * @example
   * 0
   */
  parseRowCounts?: number;
  /**
   * @remarks
   * The maximum memory usage when the SQL statement is executed. Unit: KB.
   * 
   * @example
   * 431.447
   */
  peakMemoryUsage?: string;
  /**
   * @remarks
   * The amount of time consumed to generate execution plans. Unit: milliseconds.
   * 
   * @example
   * 12
   */
  planningTime?: number;
  /**
   * @remarks
   * The ID of the process.
   * 
   * @example
   * 2021052716044317201616624903453******
   */
  processID?: string;
  /**
   * @remarks
   * The time consumed to execute the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 2344
   */
  queryTime?: number;
  /**
   * @remarks
   * The queuing duration before the query is executed. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  queueTime?: number;
  /**
   * @remarks
   * The number of rows returned by the SQL statement.
   * 
   * @example
   * 1
   */
  returnRowCounts?: number;
  /**
   * @remarks
   * Details of the SQL statement.
   * 
   * @example
   * INSERT OVERWRITE INTO hdfs_import_external\\nSELECT *\\nFROM adb_hdfs_import_source
   */
  SQLText?: string;
  /**
   * @remarks
   * The number of rows scanned from a data source in the task.
   * 
   * @example
   * 3
   */
  scanRows?: number;
  /**
   * @remarks
   * The amount of scanned data. Unit: KB.
   * 
   * @example
   * 0.035
   */
  scanSize?: string;
  /**
   * @remarks
   * The total amount of time consumed to scan data. It is an accumulated value collected from multiple TableScanNode nodes. Unit: milliseconds.
   * 
   * @example
   * 10
   */
  scanTime?: number;
  /**
   * @remarks
   * The execution state of the SQL statement.
   * 
   * @example
   * SUCCESSED
   */
  state?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
  userName?: string;
  /**
   * @remarks
   * The accumulated CPU Time value of all operators collected from all nodes. Unit: milliseconds.
   * 
   * @example
   * 6100
   */
  wallTime?: number;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      executionStartTime: 'ExecutionStartTime',
      hostAddress: 'HostAddress',
      outputSize: 'OutputSize',
      parseRowCounts: 'ParseRowCounts',
      peakMemoryUsage: 'PeakMemoryUsage',
      planningTime: 'PlanningTime',
      processID: 'ProcessID',
      queryTime: 'QueryTime',
      queueTime: 'QueueTime',
      returnRowCounts: 'ReturnRowCounts',
      SQLText: 'SQLText',
      scanRows: 'ScanRows',
      scanSize: 'ScanSize',
      scanTime: 'ScanTime',
      state: 'State',
      userName: 'UserName',
      wallTime: 'WallTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      executionStartTime: 'string',
      hostAddress: 'string',
      outputSize: 'string',
      parseRowCounts: 'number',
      peakMemoryUsage: 'string',
      planningTime: 'number',
      processID: 'string',
      queryTime: 'number',
      queueTime: 'number',
      returnRowCounts: 'number',
      SQLText: 'string',
      scanRows: 'number',
      scanSize: 'string',
      scanTime: 'number',
      state: 'string',
      userName: 'string',
      wallTime: 'number',
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

export class DescribeSqlPatternResponseBodyItems extends $tea.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * > This parameter is returned only when `Type` is set to `accessip`.
   * 
   * @example
   * 100.104.***.***
   */
  accessIP?: string;
  /**
   * @remarks
   * The average execution duration of the SQL pattern within the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1.0625
   */
  avgCpuTime?: string;
  /**
   * @remarks
   * The average peak memory usage of the SQL pattern within the query time range. Unit: KB.
   * 
   * @example
   * 240048
   */
  avgPeakMemory?: string;
  /**
   * @remarks
   * The average amount of data scanned based on the SQL pattern within the query time range. Unit: KB.
   * 
   * @example
   * 0
   */
  avgScanSize?: string;
  /**
   * @remarks
   * The average number of stages.
   * 
   * @example
   * 2
   */
  avgStageCount?: string;
  /**
   * @remarks
   * The average number of tasks.
   * 
   * @example
   * 2
   */
  avgTaskCount?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  instanceName?: string;
  /**
   * @remarks
   * The maximum execution duration of the SQL pattern within the time range to query. Unit: milliseconds.
   * 
   * @example
   * 17
   */
  maxCpuTime?: string;
  /**
   * @remarks
   * The maximum peak memory usage of the SQL pattern within the query time range. Unit: KB.
   * 
   * @example
   * 480096
   */
  maxPeakMemory?: string;
  /**
   * @remarks
   * The maximum amount of data scanned based on the SQL pattern within the query time range. Unit: KB.
   * 
   * @example
   * 0
   */
  maxScanSize?: string;
  /**
   * @remarks
   * The maximum number of stages.
   * 
   * @example
   * 2
   */
  maxStageCount?: string;
  /**
   * @remarks
   * The maximum number of tasks.
   * 
   * @example
   * 2
   */
  maxTaskCount?: string;
  /**
   * @remarks
   * The SQL pattern.
   * 
   * @example
   * SELECT table_name, table_schema AS schema_name, create_time, create_time AS last_ddl_time, table_comment AS description , ceil((data_length + index_length) / ? / ?) AS store_capacity , data_length AS data_bytes, index_length AS index_bytes, table_collation AS collation, auto_increment, table_rows AS num_rows , engine FROM information_schema.tables WHERE table_type != ? AND table_schema = ? AND table_name IN (?) ORDER BY 1
   */
  pattern?: string;
  /**
   * @remarks
   * The number of queries performed in association with the SQL pattern within the query time range.
   * 
   * @example
   * 16
   */
  queryCount?: string;
  /**
   * @remarks
   * The start date of the query.
   * 
   * @example
   * 2021-08-30
   */
  reportDate?: string;
  /**
   * @remarks
   * The username.
   * 
   * > This parameter is returned only when `Type` is left empty or set to `user`.
   * 
   * @example
   * test_acc
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      accessIP: 'AccessIP',
      avgCpuTime: 'AvgCpuTime',
      avgPeakMemory: 'AvgPeakMemory',
      avgScanSize: 'AvgScanSize',
      avgStageCount: 'AvgStageCount',
      avgTaskCount: 'AvgTaskCount',
      instanceName: 'InstanceName',
      maxCpuTime: 'MaxCpuTime',
      maxPeakMemory: 'MaxPeakMemory',
      maxScanSize: 'MaxScanSize',
      maxStageCount: 'MaxStageCount',
      maxTaskCount: 'MaxTaskCount',
      pattern: 'Pattern',
      queryCount: 'QueryCount',
      reportDate: 'ReportDate',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIP: 'string',
      avgCpuTime: 'string',
      avgPeakMemory: 'string',
      avgScanSize: 'string',
      avgStageCount: 'string',
      avgTaskCount: 'string',
      instanceName: 'string',
      maxCpuTime: 'string',
      maxPeakMemory: 'string',
      maxScanSize: 'string',
      maxStageCount: 'string',
      maxTaskCount: 'string',
      pattern: 'string',
      queryCount: 'string',
      reportDate: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableAccessCountResponseBodyItems extends $tea.Model {
  /**
   * @remarks
   * The number of accesses to the table.
   * 
   * @example
   * 6
   */
  accessCount?: string;
  /**
   * @remarks
   * The ID of the cluster to which the table belongs.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  instanceName?: string;
  /**
   * @remarks
   * The date when the table was used.
   * 
   * @example
   * 2021-08-30
   */
  reportDate?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * CUSTOMER
   */
  tableName?: string;
  /**
   * @remarks
   * The database to which the table belongs.
   * 
   * @example
   * tpch
   */
  tableSchema?: string;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'AccessCount',
      instanceName: 'InstanceName',
      reportDate: 'ReportDate',
      tableName: 'TableName',
      tableSchema: 'TableSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'string',
      instanceName: 'string',
      reportDate: 'string',
      tableName: 'string',
      tableSchema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableDetailResponseBodyItemsShard extends $tea.Model {
  id?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      size: 'number',
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

export class DescribeTablePartitionDiagnoseResponseBodyDetectionItems extends $tea.Model {
  /**
   * @remarks
   * The detection result.
   * 
   * @example
   * A total of 10 tables have an improper partition field
   */
  message?: string;
  /**
   * @remarks
   * The name of the detection item.
   * 
   * @example
   * Improper Partition Field Diagnosis
   */
  name?: string;
  /**
   * @remarks
   * The severity level of the detection result. Valid values:
   * 
   * *   NORMAL
   * *   WARNING
   * *   CRITICAL
   * 
   * @example
   * WARNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablePartitionDiagnoseResponseBodyItems extends $tea.Model {
  /**
   * @remarks
   * The information about inappropriate partitions.
   * 
   * @example
   * 202005,202006
   */
  partitionDetail?: string;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 2
   */
  partitionNumber?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_db
   */
  schemaName?: string;
  /**
   * @remarks
   * The storage percentage of the table. Unit: %.
   * 
   * >  Formula: Table storage percentage = Total data size of a table/Total data size of the cluster × 100%.
   * 
   * @example
   * 66.23
   */
  spaceRatio?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The total data size of the table. Unit: bytes.
   * 
   * @example
   * 42949672960
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      partitionDetail: 'PartitionDetail',
      partitionNumber: 'PartitionNumber',
      schemaName: 'SchemaName',
      spaceRatio: 'SpaceRatio',
      tableName: 'TableName',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitionDetail: 'string',
      partitionNumber: 'number',
      schemaName: 'string',
      spaceRatio: 'number',
      tableName: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableStatisticsResponseBodyItemsTableStatisticRecords extends $tea.Model {
  /**
   * @remarks
   * The cold data size. Unit: bytes.
   * 
   * >  The parameter is returned only for AnalyticDB for MySQL clusters of V3.1.3.4 or later.
   * 
   * @example
   * 0
   */
  coldDataSize?: number;
  /**
   * @remarks
   * The data size of table records. Unit: bytes.
   * 
   * >  The data size of table records, excluding the data size of regular index and primary key indexes.
   * 
   * @example
   * 15592
   */
  dataSize?: number;
  /**
   * @remarks
   * The hot data size. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  hotDataSize?: number;
  /**
   * @remarks
   * The data size of regular indexes. Unit: bytes.
   * 
   * @example
   * 3076
   */
  indexSize?: number;
  /**
   * @remarks
   * The data size of other data. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  otherSize?: number;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 1
   */
  partitionCount?: number;
  /**
   * @remarks
   * The data size of primary key indexes. Unit: bytes.
   * 
   * @example
   * 16340
   */
  primaryKeyIndexSize?: number;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 3
   */
  rowCount?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_schema
   */
  schemaName?: string;
  /**
   * @remarks
   * The percentage of the table size. Unit: %.
   * 
   * >  Formula: Table storage percentage = Total data size of a table/Total data size of the cluster × 100%.
   * 
   * @example
   * 66.23
   */
  spaceRatio?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The total data size. Unit: bytes.
   * 
   * >  The following formulas can be used to calculate the total data size: Formula 1: Total data size = Hot data size + Cold data size. Formula 2: Total data size = Data size of table records + Data size of regular indexes + Data size of primary key indexes + Data size of other data.
   * 
   * @example
   * 1577
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      coldDataSize: 'ColdDataSize',
      dataSize: 'DataSize',
      hotDataSize: 'HotDataSize',
      indexSize: 'IndexSize',
      otherSize: 'OtherSize',
      partitionCount: 'PartitionCount',
      primaryKeyIndexSize: 'PrimaryKeyIndexSize',
      rowCount: 'RowCount',
      schemaName: 'SchemaName',
      spaceRatio: 'SpaceRatio',
      tableName: 'TableName',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldDataSize: 'number',
      dataSize: 'number',
      hotDataSize: 'number',
      indexSize: 'number',
      otherSize: 'number',
      partitionCount: 'number',
      primaryKeyIndexSize: 'number',
      rowCount: 'number',
      schemaName: 'string',
      spaceRatio: 'number',
      tableName: 'string',
      totalSize: 'number',
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

export class DescribeTablesResponseBodyItemsTable extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      schemaName: 'string',
      tableName: 'string',
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

export class DescribeTaskInfoResponseBodyTaskInfo extends $tea.Model {
  /**
   * @remarks
   * The start time of the task. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2020-01-07T07:39:56Z
   */
  beginTime?: string;
  /**
   * @remarks
   * The end time of the task. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2020-01-07T08:08:50Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The progress of the task. Unit: %.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * *   Waiting
   * *   Running
   * *   Finished
   * *   Failed
   * *   Closed
   * *   Cancel
   * *   Retry
   * *   Pause
   * *   Stop
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 225685759
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      finishTime: 'FinishTime',
      progress: 'Progress',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      finishTime: 'string',
      progress: 'string',
      status: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitchesVSwitch extends $tea.Model {
  /**
   * @remarks
   * The ID of the Resource Access Management (RAM) user.
   * 
   * @example
   * 195813423043****
   */
  aliUid?: string;
  /**
   * @remarks
   * The ID of the user channel.
   * 
   * @example
   * 2****
   */
  bid?: string;
  /**
   * @remarks
   * The IPv4 CIDR block of the vSwitch.
   * 
   * @example
   * 172.16.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the vSwitch was created.
   * 
   * @example
   * 2022-01-18T12:43:57Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the vSwitch was modified.
   * 
   * @example
   * 2022-01-22T12:43:57Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the vSwitch is the default vSwitch. Valid values: **true**: The vSwitch is the default vSwitch. **false**: The vSwitch is not the default vSwitch.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The zone ID of the vSwitch.
   * 
   * @example
   * cn-hangzhou-k
   */
  izNo?: string;
  /**
   * @remarks
   * The region ID of the vSwitch.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The state of the vSwitch. Valid values: **Pending**: the vSwitch is being configured. **Available**: the vSwitch is available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-25bcdxs7pv1****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * vswitch
   */
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

export class DescribeVSwitchesResponseBodyVSwitches extends $tea.Model {
  /**
   * @remarks
   * The queried vSwitch.
   */
  vSwitch?: DescribeVSwitchesResponseBodyVSwitchesVSwitch[];
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'VSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: { 'type': 'array', 'itemType': DescribeVSwitchesResponseBodyVSwitchesVSwitch },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag. You can specify multiple tag keys. The tag key cannot be an empty string. Valid values of N: 1 to 20.
   * 
   * > You must specify at least one of the following parameters: ResourceId.N and Tag.N.Key.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify multiple tag values. The tag value can be an empty string. Valid values of N: 1 to 20.
   * 
   * @example
   * testvalue1
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
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp1l20nxxxxxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. A value of cluster indicates an AnalyticDB for MySQL cluster.
   * 
   * @example
   * cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * testkey1
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * testvalue1
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

export class ModifyResubmitConfigRequestRules extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to configure out-of-memory (OOM) check.
   * 
   * @example
   * false
   */
  exceedMemoryException?: boolean;
  /**
   * @remarks
   * The name of the source resource group.
   * 
   * @example
   * test2
   */
  groupName?: string;
  /**
   * @remarks
   * The peak memory usage.
   * 
   * @example
   * 32
   */
  peakMemory?: string;
  /**
   * @remarks
   * The duration of the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 300
   */
  queryTime?: string;
  /**
   * @remarks
   * The name of the destination resource group.
   * 
   * @example
   * test_target_group
   */
  targetGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      exceedMemoryException: 'ExceedMemoryException',
      groupName: 'GroupName',
      peakMemory: 'PeakMemory',
      queryTime: 'QueryTime',
      targetGroupName: 'TargetGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceedMemoryException: 'boolean',
      groupName: 'string',
      peakMemory: 'string',
      queryTime: 'string',
      targetGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag. If you want to add multiple tags to a single cluster at a time, click **Add** and enter tag keys and values.
   * 
   * > You can add up to 20 tags at a time.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. If you want to add multiple tags to a single cluster at a time, click **Add** and enter tag keys and values.
   * 
   * > You can add up to 20 tags at a time.
   * 
   * @example
   * testvalue1
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

  /**
   * @param request - AllocateClusterPublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateClusterPublicConnectionResponse
   */
  async allocateClusterPublicConnectionWithOptions(request: AllocateClusterPublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<AllocateClusterPublicConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AllocateClusterPublicConnection",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AllocateClusterPublicConnectionResponse>(await this.callApi(params, req, runtime), new AllocateClusterPublicConnectionResponse({}));
  }

  /**
   * @param request - AllocateClusterPublicConnectionRequest
   * @returns AllocateClusterPublicConnectionResponse
   */
  async allocateClusterPublicConnection(request: AllocateClusterPublicConnectionRequest): Promise<AllocateClusterPublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateClusterPublicConnectionWithOptions(request, runtime);
  }

  /**
   * ApplyAdviceById
   * 
   * @param request - ApplyAdviceByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyAdviceByIdResponse
   */
  async applyAdviceByIdWithOptions(request: ApplyAdviceByIdRequest, runtime: $Util.RuntimeOptions): Promise<ApplyAdviceByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adviceDate)) {
      query["AdviceDate"] = request.adviceDate;
    }

    if (!Util.isUnset(request.adviceId)) {
      query["AdviceId"] = request.adviceId;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyAdviceById",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyAdviceByIdResponse>(await this.callApi(params, req, runtime), new ApplyAdviceByIdResponse({}));
  }

  /**
   * ApplyAdviceById
   * 
   * @param request - ApplyAdviceByIdRequest
   * @returns ApplyAdviceByIdResponse
   */
  async applyAdviceById(request: ApplyAdviceByIdRequest): Promise<ApplyAdviceByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyAdviceByIdWithOptions(request, runtime);
  }

  /**
   * @remarks
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition.
   * 
   * @param request - AttachUserENIRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachUserENIResponse
   */
  async attachUserENIWithOptions(request: AttachUserENIRequest, runtime: $Util.RuntimeOptions): Promise<AttachUserENIResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachUserENI",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachUserENIResponse>(await this.callApi(params, req, runtime), new AttachUserENIResponse({}));
  }

  /**
   * @remarks
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition.
   * 
   * @param request - AttachUserENIRequest
   * @returns AttachUserENIResponse
   */
  async attachUserENI(request: AttachUserENIRequest): Promise<AttachUserENIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachUserENIWithOptions(request, runtime);
  }

  /**
   * BatchApplyAdviceByIdList
   * 
   * @param request - BatchApplyAdviceByIdListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchApplyAdviceByIdListResponse
   */
  async batchApplyAdviceByIdListWithOptions(request: BatchApplyAdviceByIdListRequest, runtime: $Util.RuntimeOptions): Promise<BatchApplyAdviceByIdListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adviceDate)) {
      query["AdviceDate"] = request.adviceDate;
    }

    if (!Util.isUnset(request.adviceIdList)) {
      query["AdviceIdList"] = request.adviceIdList;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchApplyAdviceByIdList",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchApplyAdviceByIdListResponse>(await this.callApi(params, req, runtime), new BatchApplyAdviceByIdListResponse({}));
  }

  /**
   * BatchApplyAdviceByIdList
   * 
   * @param request - BatchApplyAdviceByIdListRequest
   * @returns BatchApplyAdviceByIdListResponse
   */
  async batchApplyAdviceByIdList(request: BatchApplyAdviceByIdListRequest): Promise<BatchApplyAdviceByIdListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchApplyAdviceByIdListWithOptions(request, runtime);
  }

  /**
   * Associates a resource group of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster with a database account.
   * 
   * @remarks
   * ## Precautions
   * *   This operation is applicable only for elastic clusters of 32 cores or more.
   * *   The default resource group USER_DEFAULT cannot be associated with a database account.
   * 
   * @param request - BindDBResourceGroupWithUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindDBResourceGroupWithUserResponse
   */
  async bindDBResourceGroupWithUserWithOptions(request: BindDBResourceGroupWithUserRequest, runtime: $Util.RuntimeOptions): Promise<BindDBResourceGroupWithUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupUser)) {
      query["GroupUser"] = request.groupUser;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindDBResourceGroupWithUser",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindDBResourceGroupWithUserResponse>(await this.callApi(params, req, runtime), new BindDBResourceGroupWithUserResponse({}));
  }

  /**
   * Associates a resource group of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster with a database account.
   * 
   * @remarks
   * ## Precautions
   * *   This operation is applicable only for elastic clusters of 32 cores or more.
   * *   The default resource group USER_DEFAULT cannot be associated with a database account.
   * 
   * @param request - BindDBResourceGroupWithUserRequest
   * @returns BindDBResourceGroupWithUserResponse
   */
  async bindDBResourceGroupWithUser(request: BindDBResourceGroupWithUserRequest): Promise<BindDBResourceGroupWithUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindDBResourceGroupWithUserWithOptions(request, runtime);
  }

  /**
   * @remarks
   *   This operation is available only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * *   The default resource group USER_DEFAULT cannot be associated with a database account.
   * 
   * @param request - BindDBResourcePoolWithUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindDBResourcePoolWithUserResponse
   */
  async bindDBResourcePoolWithUserWithOptions(request: BindDBResourcePoolWithUserRequest, runtime: $Util.RuntimeOptions): Promise<BindDBResourcePoolWithUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!Util.isUnset(request.poolUser)) {
      query["PoolUser"] = request.poolUser;
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
      action: "BindDBResourcePoolWithUser",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindDBResourcePoolWithUserResponse>(await this.callApi(params, req, runtime), new BindDBResourcePoolWithUserResponse({}));
  }

  /**
   * @remarks
   *   This operation is available only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * *   The default resource group USER_DEFAULT cannot be associated with a database account.
   * 
   * @param request - BindDBResourcePoolWithUserRequest
   * @returns BindDBResourcePoolWithUserResponse
   */
  async bindDBResourcePoolWithUser(request: BindDBResourcePoolWithUserRequest): Promise<BindDBResourcePoolWithUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindDBResourcePoolWithUserWithOptions(request, runtime);
  }

  /**
   * Creates a database account for an AnalyticDB for MySQL cluster.
   * 
   * @param request - CreateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountResponse
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

    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccount",
      version: "2019-03-15",
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
   * Creates a database account for an AnalyticDB for MySQL cluster.
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * Creates an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * After you create a cluster, you are billed for the cluster specifications that you select. For more information about the billable items and pricing for Data Warehouse Edition (V3.0) clusters, see [Billable items of Data Warehouse Edition (V3.0)](https://help.aliyun.com/document_detail/303131.html) and [Pricing for Data Warehouse Edition (V3.0)](https://help.aliyun.com/document_detail/135229.html).
   * 
   * @param request - CreateDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBClusterResponse
   */
  async createDBClusterWithOptions(request: CreateDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupSetID)) {
      query["BackupSetID"] = request.backupSetID;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.computeResource)) {
      query["ComputeResource"] = request.computeResource;
    }

    if (!Util.isUnset(request.DBClusterCategory)) {
      query["DBClusterCategory"] = request.DBClusterCategory;
    }

    if (!Util.isUnset(request.DBClusterClass)) {
      query["DBClusterClass"] = request.DBClusterClass;
    }

    if (!Util.isUnset(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!Util.isUnset(request.DBClusterNetworkType)) {
      query["DBClusterNetworkType"] = request.DBClusterNetworkType;
    }

    if (!Util.isUnset(request.DBClusterVersion)) {
      query["DBClusterVersion"] = request.DBClusterVersion;
    }

    if (!Util.isUnset(request.DBNodeGroupCount)) {
      query["DBNodeGroupCount"] = request.DBNodeGroupCount;
    }

    if (!Util.isUnset(request.DBNodeStorage)) {
      query["DBNodeStorage"] = request.DBNodeStorage;
    }

    if (!Util.isUnset(request.diskEncryption)) {
      query["DiskEncryption"] = request.diskEncryption;
    }

    if (!Util.isUnset(request.elasticIOResource)) {
      query["ElasticIOResource"] = request.elasticIOResource;
    }

    if (!Util.isUnset(request.enableSSL)) {
      query["EnableSSL"] = request.enableSSL;
    }

    if (!Util.isUnset(request.executorCount)) {
      query["ExecutorCount"] = request.executorCount;
    }

    if (!Util.isUnset(request.kmsId)) {
      query["KmsId"] = request.kmsId;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!Util.isUnset(request.restoreType)) {
      query["RestoreType"] = request.restoreType;
    }

    if (!Util.isUnset(request.sourceDBInstanceName)) {
      query["SourceDBInstanceName"] = request.sourceDBInstanceName;
    }

    if (!Util.isUnset(request.storageResource)) {
      query["StorageResource"] = request.storageResource;
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

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDBCluster",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBClusterResponse>(await this.callApi(params, req, runtime), new CreateDBClusterResponse({}));
  }

  /**
   * Creates an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * After you create a cluster, you are billed for the cluster specifications that you select. For more information about the billable items and pricing for Data Warehouse Edition (V3.0) clusters, see [Billable items of Data Warehouse Edition (V3.0)](https://help.aliyun.com/document_detail/303131.html) and [Pricing for Data Warehouse Edition (V3.0)](https://help.aliyun.com/document_detail/135229.html).
   * 
   * @param request - CreateDBClusterRequest
   * @returns CreateDBClusterResponse
   */
  async createDBCluster(request: CreateDBClusterRequest): Promise<CreateDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBClusterWithOptions(request, runtime);
  }

  /**
   * Creates a resource group for an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * ## Precautions
   * This operation is applicable only for elastic clusters of 32 cores or more.
   * 
   * @param request - CreateDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBResourceGroupResponse
   */
  async createDBResourceGroupWithOptions(request: CreateDBResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.nodeNum)) {
      query["NodeNum"] = request.nodeNum;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDBResourceGroup",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBResourceGroupResponse>(await this.callApi(params, req, runtime), new CreateDBResourceGroupResponse({}));
  }

  /**
   * Creates a resource group for an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * ## Precautions
   * This operation is applicable only for elastic clusters of 32 cores or more.
   * 
   * @param request - CreateDBResourceGroupRequest
   * @returns CreateDBResourceGroupResponse
   */
  async createDBResourceGroup(request: CreateDBResourceGroupRequest): Promise<CreateDBResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * @remarks
   * This operation is applicable only for elastic clusters of 32 cores or more.
   * 
   * @param request - CreateDBResourcePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBResourcePoolResponse
   */
  async createDBResourcePoolWithOptions(request: CreateDBResourcePoolRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBResourcePoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.nodeNum)) {
      query["NodeNum"] = request.nodeNum;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!Util.isUnset(request.queryType)) {
      query["QueryType"] = request.queryType;
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
      action: "CreateDBResourcePool",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBResourcePoolResponse>(await this.callApi(params, req, runtime), new CreateDBResourcePoolResponse({}));
  }

  /**
   * @remarks
   * This operation is applicable only for elastic clusters of 32 cores or more.
   * 
   * @param request - CreateDBResourcePoolRequest
   * @returns CreateDBResourcePoolResponse
   */
  async createDBResourcePool(request: CreateDBResourcePoolRequest): Promise<CreateDBResourcePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBResourcePoolWithOptions(request, runtime);
  }

  /**
   * Creates a scheduled scaling plan. This operation can be used only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @remarks
   * ###
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - CreateElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateElasticPlanResponse
   */
  async createElasticPlanWithOptions(request: CreateElasticPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateElasticPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.elasticPlanEnable)) {
      query["ElasticPlanEnable"] = request.elasticPlanEnable;
    }

    if (!Util.isUnset(request.elasticPlanEndDay)) {
      query["ElasticPlanEndDay"] = request.elasticPlanEndDay;
    }

    if (!Util.isUnset(request.elasticPlanMonthlyRepeat)) {
      query["ElasticPlanMonthlyRepeat"] = request.elasticPlanMonthlyRepeat;
    }

    if (!Util.isUnset(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    if (!Util.isUnset(request.elasticPlanNodeNum)) {
      query["ElasticPlanNodeNum"] = request.elasticPlanNodeNum;
    }

    if (!Util.isUnset(request.elasticPlanStartDay)) {
      query["ElasticPlanStartDay"] = request.elasticPlanStartDay;
    }

    if (!Util.isUnset(request.elasticPlanTimeEnd)) {
      query["ElasticPlanTimeEnd"] = request.elasticPlanTimeEnd;
    }

    if (!Util.isUnset(request.elasticPlanTimeStart)) {
      query["ElasticPlanTimeStart"] = request.elasticPlanTimeStart;
    }

    if (!Util.isUnset(request.elasticPlanType)) {
      query["ElasticPlanType"] = request.elasticPlanType;
    }

    if (!Util.isUnset(request.elasticPlanWeeklyRepeat)) {
      query["ElasticPlanWeeklyRepeat"] = request.elasticPlanWeeklyRepeat;
    }

    if (!Util.isUnset(request.elasticPlanWorkerSpec)) {
      query["ElasticPlanWorkerSpec"] = request.elasticPlanWorkerSpec;
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

    if (!Util.isUnset(request.resourcePoolName)) {
      query["ResourcePoolName"] = request.resourcePoolName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateElasticPlan",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateElasticPlanResponse>(await this.callApi(params, req, runtime), new CreateElasticPlanResponse({}));
  }

  /**
   * Creates a scheduled scaling plan. This operation can be used only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @remarks
   * ###
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - CreateElasticPlanRequest
   * @returns CreateElasticPlanResponse
   */
  async createElasticPlan(request: CreateElasticPlanRequest): Promise<CreateElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createElasticPlanWithOptions(request, runtime);
  }

  /**
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

    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccount",
      version: "2019-03-15",
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
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * Manually deletes backup sets.
   * 
   * @remarks
   *   Deleting backup sets is an asynchronous operation and may require 10 to 20 minutes to complete.
   * *   You can delete up to 100 backup sets at a time. If you want to delete more than 100 backup sets, call this operation twice.
   * *   To ensure data security, the system forcibly retains one valid backup set. If you want to delete the last backup set, the system prohibits your operation.
   * 
   * @param request - DeleteBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupsResponse
   */
  async deleteBackupsWithOptions(request: DeleteBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBackupsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBackups",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBackupsResponse>(await this.callApi(params, req, runtime), new DeleteBackupsResponse({}));
  }

  /**
   * Manually deletes backup sets.
   * 
   * @remarks
   *   Deleting backup sets is an asynchronous operation and may require 10 to 20 minutes to complete.
   * *   You can delete up to 100 backup sets at a time. If you want to delete more than 100 backup sets, call this operation twice.
   * *   To ensure data security, the system forcibly retains one valid backup set. If you want to delete the last backup set, the system prohibits your operation.
   * 
   * @param request - DeleteBackupsRequest
   * @returns DeleteBackupsResponse
   */
  async deleteBackups(request: DeleteBackupsRequest): Promise<DeleteBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBackupsWithOptions(request, runtime);
  }

  /**
   * Deletes an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   Subscription clusters cannot be deleted by using API operations. After expiration, subscription clusters are automatically released. If you no longer need a cluster, you can submit a request to unsubscribe from the cluster in the Billing Management console. For more information about cluster refunds, see [Refund policy](https://help.aliyun.com/document_detail/471477.html).
   * *   After you delete a cluster, resources of the cluster are immediately released, and data of the cluster is no longer retained and cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBClusterResponse
   */
  async deleteDBClusterWithOptions(request: DeleteDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDBCluster",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDBClusterResponse>(await this.callApi(params, req, runtime), new DeleteDBClusterResponse({}));
  }

  /**
   * Deletes an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   Subscription clusters cannot be deleted by using API operations. After expiration, subscription clusters are automatically released. If you no longer need a cluster, you can submit a request to unsubscribe from the cluster in the Billing Management console. For more information about cluster refunds, see [Refund policy](https://help.aliyun.com/document_detail/471477.html).
   * *   After you delete a cluster, resources of the cluster are immediately released, and data of the cluster is no longer retained and cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteDBClusterRequest
   * @returns DeleteDBClusterResponse
   */
  async deleteDBCluster(request: DeleteDBClusterRequest): Promise<DeleteDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBClusterWithOptions(request, runtime);
  }

  /**
   * Deletes a resource group from an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * ### Precautions
   * *   You can call this operation only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * *   The default resource group USER_DEFAULT cannot be deleted.
   * 
   * @param request - DeleteDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBResourceGroupResponse
   */
  async deleteDBResourceGroupWithOptions(request: DeleteDBResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDBResourceGroup",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDBResourceGroupResponse>(await this.callApi(params, req, runtime), new DeleteDBResourceGroupResponse({}));
  }

  /**
   * Deletes a resource group from an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * ### Precautions
   * *   You can call this operation only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * *   The default resource group USER_DEFAULT cannot be deleted.
   * 
   * @param request - DeleteDBResourceGroupRequest
   * @returns DeleteDBResourceGroupResponse
   */
  async deleteDBResourceGroup(request: DeleteDBResourceGroupRequest): Promise<DeleteDBResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * @remarks
   * *Precautions**
   * *   This operation is available only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * *   The default resource group USER_DEFAULT cannot be deleted.
   * 
   * @param request - DeleteDBResourcePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBResourcePoolResponse
   */
  async deleteDBResourcePoolWithOptions(request: DeleteDBResourcePoolRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBResourcePoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolName)) {
      query["PoolName"] = request.poolName;
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
      action: "DeleteDBResourcePool",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDBResourcePoolResponse>(await this.callApi(params, req, runtime), new DeleteDBResourcePoolResponse({}));
  }

  /**
   * @remarks
   * *Precautions**
   * *   This operation is available only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * *   The default resource group USER_DEFAULT cannot be deleted.
   * 
   * @param request - DeleteDBResourcePoolRequest
   * @returns DeleteDBResourcePoolResponse
   */
  async deleteDBResourcePool(request: DeleteDBResourcePoolRequest): Promise<DeleteDBResourcePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBResourcePoolWithOptions(request, runtime);
  }

  /**
   * Deletes a scheduled scaling plan. This operation can be used only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @param request - DeleteElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteElasticPlanResponse
   */
  async deleteElasticPlanWithOptions(request: DeleteElasticPlanRequest, runtime: $Util.RuntimeOptions): Promise<DeleteElasticPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteElasticPlan",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteElasticPlanResponse>(await this.callApi(params, req, runtime), new DeleteElasticPlanResponse({}));
  }

  /**
   * Deletes a scheduled scaling plan. This operation can be used only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @param request - DeleteElasticPlanRequest
   * @returns DeleteElasticPlanResponse
   */
  async deleteElasticPlan(request: DeleteElasticPlanRequest): Promise<DeleteElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteElasticPlanWithOptions(request, runtime);
  }

  /**
   * Queries a list of database accounts for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountsResponse
   */
  async describeAccountsWithOptions(request: DescribeAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccounts",
      version: "2019-03-15",
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
   * Queries a list of database accounts for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAccountsRequest
   * @returns DescribeAccountsResponse
   */
  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
   * Queries whether the suggestion feature is enabled for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAdviceServiceEnabledRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdviceServiceEnabledResponse
   */
  async describeAdviceServiceEnabledWithOptions(request: DescribeAdviceServiceEnabledRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAdviceServiceEnabledResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAdviceServiceEnabled",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAdviceServiceEnabledResponse>(await this.callApi(params, req, runtime), new DescribeAdviceServiceEnabledResponse({}));
  }

  /**
   * Queries whether the suggestion feature is enabled for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAdviceServiceEnabledRequest
   * @returns DescribeAdviceServiceEnabledResponse
   */
  async describeAdviceServiceEnabled(request: DescribeAdviceServiceEnabledRequest): Promise<DescribeAdviceServiceEnabledResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAdviceServiceEnabledWithOptions(request, runtime);
  }

  /**
   * Queries the information about an account or the list of accounts of a specific database within an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAllAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAllAccountsResponse
   */
  async describeAllAccountsWithOptions(request: DescribeAllAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAllAccounts",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAllAccountsResponse>(await this.callApi(params, req, runtime), new DescribeAllAccountsResponse({}));
  }

  /**
   * Queries the information about an account or the list of accounts of a specific database within an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAllAccountsRequest
   * @returns DescribeAllAccountsResponse
   */
  async describeAllAccounts(request: DescribeAllAccountsRequest): Promise<DescribeAllAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllAccountsWithOptions(request, runtime);
  }

  /**
   * Queries a list of databases, tables, and columns in a cluster.
   * 
   * @param request - DescribeAllDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAllDataSourceResponse
   */
  async describeAllDataSourceWithOptions(request: DescribeAllDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllDataSourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAllDataSource",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAllDataSourceResponse>(await this.callApi(params, req, runtime), new DescribeAllDataSourceResponse({}));
  }

  /**
   * Queries a list of databases, tables, and columns in a cluster.
   * 
   * @param request - DescribeAllDataSourceRequest
   * @returns DescribeAllDataSourceResponse
   */
  async describeAllDataSource(request: DescribeAllDataSourceRequest): Promise<DescribeAllDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllDataSourceWithOptions(request, runtime);
  }

  /**
   * Queries the applied optimization suggestions for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAppliedAdvicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppliedAdvicesResponse
   */
  async describeAppliedAdvicesWithOptions(request: DescribeAppliedAdvicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppliedAdvicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adviceType)) {
      query["AdviceType"] = request.adviceType;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.schemaTableName)) {
      query["SchemaTableName"] = request.schemaTableName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppliedAdvices",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppliedAdvicesResponse>(await this.callApi(params, req, runtime), new DescribeAppliedAdvicesResponse({}));
  }

  /**
   * Queries the applied optimization suggestions for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAppliedAdvicesRequest
   * @returns DescribeAppliedAdvicesResponse
   */
  async describeAppliedAdvices(request: DescribeAppliedAdvicesRequest): Promise<DescribeAppliedAdvicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppliedAdvicesWithOptions(request, runtime);
  }

  /**
   * Queries the SQL audit settings of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAuditLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditLogConfigResponse
   */
  async describeAuditLogConfigWithOptions(request: DescribeAuditLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuditLogConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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
      action: "DescribeAuditLogConfig",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAuditLogConfigResponse>(await this.callApi(params, req, runtime), new DescribeAuditLogConfigResponse({}));
  }

  /**
   * Queries the SQL audit settings of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAuditLogConfigRequest
   * @returns DescribeAuditLogConfigResponse
   */
  async describeAuditLogConfig(request: DescribeAuditLogConfigRequest): Promise<DescribeAuditLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditLogConfigWithOptions(request, runtime);
  }

  /**
   * Queries the SQL audit logs of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * Before you call the DescribeAuditLogRecords operation to query the SQL audit logs of an AnalyticDB for MySQL cluster, you must enable SQL audit for the cluster. You can call the [DescribeAuditLogConfig](https://help.aliyun.com/document_detail/190628.html) operation to query the status of SQL audit. If SQL audit is disabled, you can call the [ModifyAuditLogConfig](https://help.aliyun.com/document_detail/190629.html) operation to enable SQL audit.
   * SQL audit logs can be queried only when SQL audit is enabled. Only SQL audit logs within the last 30 days can be queried. If SQL audit was disabled and re-enabled, only SQL audit logs from the time when SQL audit was re-enabled can be queried. The following operations are not recorded in SQL audit logs: **INSERT INTO VALUES**, **REPLACE INTO VALUES**, and **UPSERT INTO VALUES**.
   * 
   * @param request - DescribeAuditLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditLogRecordsResponse
   */
  async describeAuditLogRecordsWithOptions(request: DescribeAuditLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuditLogRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.hostAddress)) {
      query["HostAddress"] = request.hostAddress;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
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

    if (!Util.isUnset(request.queryKeyword)) {
      query["QueryKeyword"] = request.queryKeyword;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sqlType)) {
      query["SqlType"] = request.sqlType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.succeed)) {
      query["Succeed"] = request.succeed;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAuditLogRecords",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAuditLogRecordsResponse>(await this.callApi(params, req, runtime), new DescribeAuditLogRecordsResponse({}));
  }

  /**
   * Queries the SQL audit logs of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * Before you call the DescribeAuditLogRecords operation to query the SQL audit logs of an AnalyticDB for MySQL cluster, you must enable SQL audit for the cluster. You can call the [DescribeAuditLogConfig](https://help.aliyun.com/document_detail/190628.html) operation to query the status of SQL audit. If SQL audit is disabled, you can call the [ModifyAuditLogConfig](https://help.aliyun.com/document_detail/190629.html) operation to enable SQL audit.
   * SQL audit logs can be queried only when SQL audit is enabled. Only SQL audit logs within the last 30 days can be queried. If SQL audit was disabled and re-enabled, only SQL audit logs from the time when SQL audit was re-enabled can be queried. The following operations are not recorded in SQL audit logs: **INSERT INTO VALUES**, **REPLACE INTO VALUES**, and **UPSERT INTO VALUES**.
   * 
   * @param request - DescribeAuditLogRecordsRequest
   * @returns DescribeAuditLogRecordsResponse
   */
  async describeAuditLogRecords(request: DescribeAuditLogRecordsRequest): Promise<DescribeAuditLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the auto-renewal status of a subscription AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAutoRenewAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoRenewAttributeResponse
   */
  async describeAutoRenewAttributeWithOptions(request: DescribeAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoRenewAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterIds)) {
      query["DBClusterIds"] = request.DBClusterIds;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAutoRenewAttribute",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new DescribeAutoRenewAttributeResponse({}));
  }

  /**
   * Queries the auto-renewal status of a subscription AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAutoRenewAttributeRequest
   * @returns DescribeAutoRenewAttributeResponse
   */
  async describeAutoRenewAttribute(request: DescribeAutoRenewAttributeRequest): Promise<DescribeAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the available suggestions for cluster optimization.
   * 
   * @param request - DescribeAvailableAdvicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableAdvicesResponse
   */
  async describeAvailableAdvicesWithOptions(request: DescribeAvailableAdvicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableAdvicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adviceDate)) {
      query["AdviceDate"] = request.adviceDate;
    }

    if (!Util.isUnset(request.adviceType)) {
      query["AdviceType"] = request.adviceType;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.schemaTableName)) {
      query["SchemaTableName"] = request.schemaTableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableAdvices",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableAdvicesResponse>(await this.callApi(params, req, runtime), new DescribeAvailableAdvicesResponse({}));
  }

  /**
   * Queries the available suggestions for cluster optimization.
   * 
   * @param request - DescribeAvailableAdvicesRequest
   * @returns DescribeAvailableAdvicesResponse
   */
  async describeAvailableAdvices(request: DescribeAvailableAdvicesRequest): Promise<DescribeAvailableAdvicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableAdvicesWithOptions(request, runtime);
  }

  /**
   * Queries the resources of clusters within zones of a region.
   * 
   * @param request - DescribeAvailableResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResourceWithOptions(request: DescribeAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.DBClusterVersion)) {
      query["DBClusterVersion"] = request.DBClusterVersion;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableResource",
      version: "2019-03-15",
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
   * Queries the resources of clusters within zones of a region.
   * 
   * @param request - DescribeAvailableResourceRequest
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResource(request: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupPolicy",
      version: "2019-03-15",
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
   * Queries a list of backup sets for an AnalyticDB for MySQL cluster.
   * 
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

    if (!Util.isUnset(request.crossRole)) {
      query["CrossRole"] = request.crossRole;
    }

    if (!Util.isUnset(request.crossUid)) {
      query["CrossUid"] = request.crossUid;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackups",
      version: "2019-03-15",
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
   * Queries a list of backup sets for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeBackupsRequest
   * @returns DescribeBackupsResponse
   */
  async describeBackups(request: DescribeBackupsRequest): Promise<DescribeBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeColumnsResponse
   */
  async describeColumnsWithOptions(request: DescribeColumnsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeColumnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeColumns",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeColumnsResponse>(await this.callApi(params, req, runtime), new DescribeColumnsResponse({}));
  }

  /**
   * @param request - DescribeColumnsRequest
   * @returns DescribeColumnsResponse
   */
  async describeColumns(request: DescribeColumnsRequest): Promise<DescribeColumnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeColumnsWithOptions(request, runtime);
  }

  /**
   * Queries the specifications of computing resources for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * @param request - DescribeComputeResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComputeResourceResponse
   */
  async describeComputeResourceWithOptions(request: DescribeComputeResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeComputeResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBClusterVersion)) {
      query["DBClusterVersion"] = request.DBClusterVersion;
    }

    if (!Util.isUnset(request.migrate)) {
      query["Migrate"] = request.migrate;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeComputeResource",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeComputeResourceResponse>(await this.callApi(params, req, runtime), new DescribeComputeResourceResponse({}));
  }

  /**
   * Queries the specifications of computing resources for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * @param request - DescribeComputeResourceRequest
   * @returns DescribeComputeResourceResponse
   */
  async describeComputeResource(request: DescribeComputeResourceRequest): Promise<DescribeComputeResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeComputeResourceWithOptions(request, runtime);
  }

  /**
   * Queries the current number of connections to an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeConnectionCountRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConnectionCountRecordsResponse
   */
  async describeConnectionCountRecordsWithOptions(request: DescribeConnectionCountRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConnectionCountRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeConnectionCountRecords",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeConnectionCountRecordsResponse>(await this.callApi(params, req, runtime), new DescribeConnectionCountRecordsResponse({}));
  }

  /**
   * Queries the current number of connections to an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeConnectionCountRecordsRequest
   * @returns DescribeConnectionCountRecordsResponse
   */
  async describeConnectionCountRecords(request: DescribeConnectionCountRecordsRequest): Promise<DescribeConnectionCountRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConnectionCountRecordsWithOptions(request, runtime);
  }

  /**
   * Queries a list of IP address whitelists for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDBClusterAccessWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterAccessWhiteListResponse
   */
  async describeDBClusterAccessWhiteListWithOptions(request: DescribeDBClusterAccessWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterAccessWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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
      action: "DescribeDBClusterAccessWhiteList",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterAccessWhiteListResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterAccessWhiteListResponse({}));
  }

  /**
   * Queries a list of IP address whitelists for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDBClusterAccessWhiteListRequest
   * @returns DescribeDBClusterAccessWhiteListResponse
   */
  async describeDBClusterAccessWhiteList(request: DescribeDBClusterAccessWhiteListRequest): Promise<DescribeDBClusterAccessWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterAccessWhiteListWithOptions(request, runtime);
  }

  /**
   * Queries the information about an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDBClusterAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterAttributeResponse
   */
  async describeDBClusterAttributeWithOptions(request: DescribeDBClusterAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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
      action: "DescribeDBClusterAttribute",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterAttributeResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterAttributeResponse({}));
  }

  /**
   * Queries the information about an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDBClusterAttributeRequest
   * @returns DescribeDBClusterAttributeResponse
   */
  async describeDBClusterAttribute(request: DescribeDBClusterAttributeRequest): Promise<DescribeDBClusterAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterAttributeWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDBClusterHealthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterHealthStatusResponse
   */
  async describeDBClusterHealthStatusWithOptions(request: DescribeDBClusterHealthStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterHealthStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterHealthStatus",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterHealthStatusResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterHealthStatusResponse({}));
  }

  /**
   * @param request - DescribeDBClusterHealthStatusRequest
   * @returns DescribeDBClusterHealthStatusResponse
   */
  async describeDBClusterHealthStatus(request: DescribeDBClusterHealthStatusRequest): Promise<DescribeDBClusterHealthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterHealthStatusWithOptions(request, runtime);
  }

  /**
   * Queries the network information about an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDBClusterNetInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterNetInfoResponse
   */
  async describeDBClusterNetInfoWithOptions(request: DescribeDBClusterNetInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterNetInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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
      action: "DescribeDBClusterNetInfo",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterNetInfoResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterNetInfoResponse({}));
  }

  /**
   * Queries the network information about an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDBClusterNetInfoRequest
   * @returns DescribeDBClusterNetInfoResponse
   */
  async describeDBClusterNetInfo(request: DescribeDBClusterNetInfoRequest): Promise<DescribeDBClusterNetInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterNetInfoWithOptions(request, runtime);
  }

  /**
   * Queries the performance data of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * You can call this operation to query the performance data of a cluster over a time range based on its performance metrics. The data is collected every 30 seconds. This operation allows you to query information about slow queries, such as the SQL query duration, number of scanned rows, and amount of scanned data.
   * 
   * @param request - DescribeDBClusterPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterPerformanceResponse
   */
  async describeDBClusterPerformanceWithOptions(request: DescribeDBClusterPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterPerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourcePools)) {
      query["ResourcePools"] = request.resourcePools;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterPerformance",
      version: "2019-03-15",
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
   * Queries the performance data of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * You can call this operation to query the performance data of a cluster over a time range based on its performance metrics. The data is collected every 30 seconds. This operation allows you to query information about slow queries, such as the SQL query duration, number of scanned rows, and amount of scanned data.
   * 
   * @param request - DescribeDBClusterPerformanceRequest
   * @returns DescribeDBClusterPerformanceResponse
   */
  async describeDBClusterPerformance(request: DescribeDBClusterPerformanceRequest): Promise<DescribeDBClusterPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterPerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring information about resource groups within an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * > You can also view the monitoring information about resource groups within an AnalyticDB for MySQL cluster in elastic mode for Cluster Edition in the form of graphs in the console. For more information, see [View monitoring information](https://help.aliyun.com/document_detail/188721.html).
   * 
   * @param request - DescribeDBClusterResourcePoolPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterResourcePoolPerformanceResponse
   */
  async describeDBClusterResourcePoolPerformanceWithOptions(request: DescribeDBClusterResourcePoolPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterResourcePoolPerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
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

    if (!Util.isUnset(request.resourcePools)) {
      query["ResourcePools"] = request.resourcePools;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterResourcePoolPerformance",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterResourcePoolPerformanceResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterResourcePoolPerformanceResponse({}));
  }

  /**
   * Queries the monitoring information about resource groups within an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * > You can also view the monitoring information about resource groups within an AnalyticDB for MySQL cluster in elastic mode for Cluster Edition in the form of graphs in the console. For more information, see [View monitoring information](https://help.aliyun.com/document_detail/188721.html).
   * 
   * @param request - DescribeDBClusterResourcePoolPerformanceRequest
   * @returns DescribeDBClusterResourcePoolPerformanceResponse
   */
  async describeDBClusterResourcePoolPerformance(request: DescribeDBClusterResourcePoolPerformanceRequest): Promise<DescribeDBClusterResourcePoolPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterResourcePoolPerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the SSL configurations of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeDBClusterSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterSSLResponse
   */
  async describeDBClusterSSLWithOptions(request: DescribeDBClusterSSLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterSSLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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
      action: "DescribeDBClusterSSL",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterSSLResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterSSLResponse({}));
  }

  /**
   * Queries the SSL configurations of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeDBClusterSSLRequest
   * @returns DescribeDBClusterSSLResponse
   */
  async describeDBClusterSSL(request: DescribeDBClusterSSLRequest): Promise<DescribeDBClusterSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterSSLWithOptions(request, runtime);
  }

  /**
   * 获取实例分片(Shard)数目
   * 
   * @param request - DescribeDBClusterShardNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterShardNumberResponse
   */
  async describeDBClusterShardNumberWithOptions(request: DescribeDBClusterShardNumberRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterShardNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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
      action: "DescribeDBClusterShardNumber",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterShardNumberResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterShardNumberResponse({}));
  }

  /**
   * 获取实例分片(Shard)数目
   * 
   * @param request - DescribeDBClusterShardNumberRequest
   * @returns DescribeDBClusterShardNumberResponse
   */
  async describeDBClusterShardNumber(request: DescribeDBClusterShardNumberRequest): Promise<DescribeDBClusterShardNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterShardNumberWithOptions(request, runtime);
  }

  /**
   * Queries the storage overview information of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster, such as the total data size, hot data size, cold data size, and data growth.
   * 
   * @param request - DescribeDBClusterSpaceSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterSpaceSummaryResponse
   */
  async describeDBClusterSpaceSummaryWithOptions(request: DescribeDBClusterSpaceSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterSpaceSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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
      action: "DescribeDBClusterSpaceSummary",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterSpaceSummaryResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterSpaceSummaryResponse({}));
  }

  /**
   * Queries the storage overview information of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster, such as the total data size, hot data size, cold data size, and data growth.
   * 
   * @param request - DescribeDBClusterSpaceSummaryRequest
   * @returns DescribeDBClusterSpaceSummaryResponse
   */
  async describeDBClusterSpaceSummary(request: DescribeDBClusterSpaceSummaryRequest): Promise<DescribeDBClusterSpaceSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterSpaceSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the status of AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * @param request - DescribeDBClusterStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterStatusResponse
   */
  async describeDBClusterStatusWithOptions(request: DescribeDBClusterStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterStatusResponse> {
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
      action: "DescribeDBClusterStatus",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterStatusResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterStatusResponse({}));
  }

  /**
   * Queries the status of AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * @param request - DescribeDBClusterStatusRequest
   * @returns DescribeDBClusterStatusResponse
   */
  async describeDBClusterStatus(request: DescribeDBClusterStatusRequest): Promise<DescribeDBClusterStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterStatusWithOptions(request, runtime);
  }

  /**
   * Queries a list of AnalyticDB for MySQL clusters within a region.
   * 
   * @param request - DescribeDBClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClustersResponse
   */
  async describeDBClustersWithOptions(request: DescribeDBClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClustersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!Util.isUnset(request.DBClusterIds)) {
      query["DBClusterIds"] = request.DBClusterIds;
    }

    if (!Util.isUnset(request.DBClusterStatus)) {
      query["DBClusterStatus"] = request.DBClusterStatus;
    }

    if (!Util.isUnset(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusters",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClustersResponse>(await this.callApi(params, req, runtime), new DescribeDBClustersResponse({}));
  }

  /**
   * Queries a list of AnalyticDB for MySQL clusters within a region.
   * 
   * @param request - DescribeDBClustersRequest
   * @returns DescribeDBClustersResponse
   */
  async describeDBClusters(request: DescribeDBClustersRequest): Promise<DescribeDBClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClustersWithOptions(request, runtime);
  }

  /**
   * Queries the information about a resource group for an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * ###
   * You can call this operation only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - DescribeDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBResourceGroupResponse
   */
  async describeDBResourceGroupWithOptions(request: DescribeDBResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBResourceGroup",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBResourceGroupResponse>(await this.callApi(params, req, runtime), new DescribeDBResourceGroupResponse({}));
  }

  /**
   * Queries the information about a resource group for an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * ###
   * You can call this operation only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - DescribeDBResourceGroupRequest
   * @returns DescribeDBResourceGroupResponse
   */
  async describeDBResourceGroup(request: DescribeDBResourceGroupRequest): Promise<DescribeDBResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * 查询资源池
   * 
   * @remarks
   * This operation is applicable only for elastic clusters of 32 cores or more.
   * 
   * @param request - DescribeDBResourcePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBResourcePoolResponse
   */
  async describeDBResourcePoolWithOptions(request: DescribeDBResourcePoolRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBResourcePoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolName)) {
      query["PoolName"] = request.poolName;
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
      action: "DescribeDBResourcePool",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBResourcePoolResponse>(await this.callApi(params, req, runtime), new DescribeDBResourcePoolResponse({}));
  }

  /**
   * 查询资源池
   * 
   * @remarks
   * This operation is applicable only for elastic clusters of 32 cores or more.
   * 
   * @param request - DescribeDBResourcePoolRequest
   * @returns DescribeDBResourcePoolResponse
   */
  async describeDBResourcePool(request: DescribeDBResourcePoolRequest): Promise<DescribeDBResourcePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBResourcePoolWithOptions(request, runtime);
  }

  /**
   * Queries the deduplicated statistics of SQL statements that meet a condition of the resource group, database, username, and source IP address in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDiagnosisDimensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisDimensionsResponse
   */
  async describeDiagnosisDimensionsWithOptions(request: DescribeDiagnosisDimensionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosisDimensionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiagnosisDimensions",
      version: "2019-03-15",
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
   * Queries the deduplicated statistics of SQL statements that meet a condition of the resource group, database, username, and source IP address in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDiagnosisDimensionsRequest
   * @returns DescribeDiagnosisDimensionsResponse
   */
  async describeDiagnosisDimensions(request: DescribeDiagnosisDimensionsRequest): Promise<DescribeDiagnosisDimensionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisDimensionsWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring information about queries within a time range.
   * 
   * @param request - DescribeDiagnosisMonitorPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisMonitorPerformanceResponse
   */
  async describeDiagnosisMonitorPerformanceWithOptions(request: DescribeDiagnosisMonitorPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosisMonitorPerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiagnosisMonitorPerformance",
      version: "2019-03-15",
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
   * Queries the monitoring information about queries within a time range.
   * 
   * @param request - DescribeDiagnosisMonitorPerformanceRequest
   * @returns DescribeDiagnosisMonitorPerformanceResponse
   */
  async describeDiagnosisMonitorPerformance(request: DescribeDiagnosisMonitorPerformanceRequest): Promise<DescribeDiagnosisMonitorPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisMonitorPerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the diagnostic information about SQL statements that meet a condition in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDiagnosisRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisRecordsResponse
   */
  async describeDiagnosisRecordsWithOptions(request: DescribeDiagnosisRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosisRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.maxPeakMemory)) {
      query["MaxPeakMemory"] = request.maxPeakMemory;
    }

    if (!Util.isUnset(request.maxScanSize)) {
      query["MaxScanSize"] = request.maxScanSize;
    }

    if (!Util.isUnset(request.minPeakMemory)) {
      query["MinPeakMemory"] = request.minPeakMemory;
    }

    if (!Util.isUnset(request.minScanSize)) {
      query["MinScanSize"] = request.minScanSize;
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

    if (!Util.isUnset(request.patternId)) {
      query["PatternId"] = request.patternId;
    }

    if (!Util.isUnset(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroup)) {
      query["ResourceGroup"] = request.resourceGroup;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiagnosisRecords",
      version: "2019-03-15",
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
   * Queries the diagnostic information about SQL statements that meet a condition in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDiagnosisRecordsRequest
   * @returns DescribeDiagnosisRecordsResponse
   */
  async describeDiagnosisRecords(request: DescribeDiagnosisRecordsRequest): Promise<DescribeDiagnosisRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the execution information about an SQL statement, including the execution plan, execution information, resource usage, and self-diagnostics results.
   * 
   * @param request - DescribeDiagnosisSQLInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisSQLInfoResponse
   */
  async describeDiagnosisSQLInfoWithOptions(request: DescribeDiagnosisSQLInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosisSQLInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiagnosisSQLInfo",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiagnosisSQLInfoResponse>(await this.callApi(params, req, runtime), new DescribeDiagnosisSQLInfoResponse({}));
  }

  /**
   * Queries the execution information about an SQL statement, including the execution plan, execution information, resource usage, and self-diagnostics results.
   * 
   * @param request - DescribeDiagnosisSQLInfoRequest
   * @returns DescribeDiagnosisSQLInfoResponse
   */
  async describeDiagnosisSQLInfo(request: DescribeDiagnosisSQLInfoRequest): Promise<DescribeDiagnosisSQLInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisSQLInfoWithOptions(request, runtime);
  }

  /**
   * Queries the execution information about distributed tasks in a stage of a query.
   * 
   * @param request - DescribeDiagnosisTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisTasksResponse
   */
  async describeDiagnosisTasksWithOptions(request: DescribeDiagnosisTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosisTasksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiagnosisTasks",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiagnosisTasksResponse>(await this.callApi(params, req, runtime), new DescribeDiagnosisTasksResponse({}));
  }

  /**
   * Queries the execution information about distributed tasks in a stage of a query.
   * 
   * @param request - DescribeDiagnosisTasksRequest
   * @returns DescribeDiagnosisTasksResponse
   */
  async describeDiagnosisTasks(request: DescribeDiagnosisTasksRequest): Promise<DescribeDiagnosisTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisTasksWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDownloadRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDownloadRecordsResponse
   */
  async describeDownloadRecordsWithOptions(request: DescribeDownloadRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDownloadRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDownloadRecords",
      version: "2019-03-15",
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
   * @param request - DescribeDownloadRecordsRequest
   * @returns DescribeDownloadRecordsResponse
   */
  async describeDownloadRecords(request: DescribeDownloadRecordsRequest): Promise<DescribeDownloadRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDownloadRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the range for the number of elastic I/O units (EIUs) for an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeEIURangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEIURangeResponse
   */
  async describeEIURangeWithOptions(request: DescribeEIURangeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEIURangeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.computeResource)) {
      query["ComputeResource"] = request.computeResource;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBClusterVersion)) {
      query["DBClusterVersion"] = request.DBClusterVersion;
    }

    if (!Util.isUnset(request.operation)) {
      query["Operation"] = request.operation;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.storageSize)) {
      query["StorageSize"] = request.storageSize;
    }

    if (!Util.isUnset(request.subOperation)) {
      query["SubOperation"] = request.subOperation;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEIURange",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEIURangeResponse>(await this.callApi(params, req, runtime), new DescribeEIURangeResponse({}));
  }

  /**
   * Queries the range for the number of elastic I/O units (EIUs) for an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeEIURangeRequest
   * @returns DescribeEIURangeResponse
   */
  async describeEIURange(request: DescribeEIURangeRequest): Promise<DescribeEIURangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEIURangeWithOptions(request, runtime);
  }

  /**
   * @remarks
   * This operation is available only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - DescribeElasticDailyPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticDailyPlanResponse
   */
  async describeElasticDailyPlanWithOptions(request: DescribeElasticDailyPlanRequest, runtime: $Util.RuntimeOptions): Promise<DescribeElasticDailyPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.elasticDailyPlanDay)) {
      query["ElasticDailyPlanDay"] = request.elasticDailyPlanDay;
    }

    if (!Util.isUnset(request.elasticDailyPlanStatusList)) {
      query["ElasticDailyPlanStatusList"] = request.elasticDailyPlanStatusList;
    }

    if (!Util.isUnset(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
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

    if (!Util.isUnset(request.resourcePoolName)) {
      query["ResourcePoolName"] = request.resourcePoolName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeElasticDailyPlan",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeElasticDailyPlanResponse>(await this.callApi(params, req, runtime), new DescribeElasticDailyPlanResponse({}));
  }

  /**
   * @remarks
   * This operation is available only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - DescribeElasticDailyPlanRequest
   * @returns DescribeElasticDailyPlanResponse
   */
  async describeElasticDailyPlan(request: DescribeElasticDailyPlanRequest): Promise<DescribeElasticDailyPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticDailyPlanWithOptions(request, runtime);
  }

  /**
   * Queries scaling plans of an AnalyticDB for MySQL cluster. This operation can be used only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @remarks
   * ###
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - DescribeElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticPlanResponse
   */
  async describeElasticPlanWithOptions(request: DescribeElasticPlanRequest, runtime: $Util.RuntimeOptions): Promise<DescribeElasticPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.elasticPlanEnable)) {
      query["ElasticPlanEnable"] = request.elasticPlanEnable;
    }

    if (!Util.isUnset(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
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

    if (!Util.isUnset(request.resourcePoolName)) {
      query["ResourcePoolName"] = request.resourcePoolName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeElasticPlan",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeElasticPlanResponse>(await this.callApi(params, req, runtime), new DescribeElasticPlanResponse({}));
  }

  /**
   * Queries scaling plans of an AnalyticDB for MySQL cluster. This operation can be used only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @remarks
   * ###
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - DescribeElasticPlanRequest
   * @returns DescribeElasticPlanResponse
   */
  async describeElasticPlan(request: DescribeElasticPlanRequest): Promise<DescribeElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticPlanWithOptions(request, runtime);
  }

  /**
   * Queries the tables that have excessive primary key fields in an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeExcessivePrimaryKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExcessivePrimaryKeysResponse
   */
  async describeExcessivePrimaryKeysWithOptions(request: DescribeExcessivePrimaryKeysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExcessivePrimaryKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExcessivePrimaryKeys",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExcessivePrimaryKeysResponse>(await this.callApi(params, req, runtime), new DescribeExcessivePrimaryKeysResponse({}));
  }

  /**
   * Queries the tables that have excessive primary key fields in an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeExcessivePrimaryKeysRequest
   * @returns DescribeExcessivePrimaryKeysResponse
   */
  async describeExcessivePrimaryKeys(request: DescribeExcessivePrimaryKeysRequest): Promise<DescribeExcessivePrimaryKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExcessivePrimaryKeysWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring information about tables.
   * 
   * @param request - DescribeInclinedTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInclinedTablesResponse
   */
  async describeInclinedTablesWithOptions(request: DescribeInclinedTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInclinedTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tableType)) {
      query["TableType"] = request.tableType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInclinedTables",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInclinedTablesResponse>(await this.callApi(params, req, runtime), new DescribeInclinedTablesResponse({}));
  }

  /**
   * Queries the monitoring information about tables.
   * 
   * @param request - DescribeInclinedTablesRequest
   * @returns DescribeInclinedTablesResponse
   */
  async describeInclinedTables(request: DescribeInclinedTablesRequest): Promise<DescribeInclinedTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInclinedTablesWithOptions(request, runtime);
  }

  /**
   * Queries the information about the minor version of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeKernelVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKernelVersionResponse
   */
  async describeKernelVersionWithOptions(request: DescribeKernelVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKernelVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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
      action: "DescribeKernelVersion",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeKernelVersionResponse>(await this.callApi(params, req, runtime), new DescribeKernelVersionResponse({}));
  }

  /**
   * Queries the information about the minor version of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeKernelVersionRequest
   * @returns DescribeKernelVersionResponse
   */
  async describeKernelVersion(request: DescribeKernelVersionRequest): Promise<DescribeKernelVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKernelVersionWithOptions(request, runtime);
  }

  /**
   * Queries the information about asynchronous import and export tasks of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about how to asynchronously submit import and export tasks, see [Asynchronously submit an import or export task](https://help.aliyun.com/document_detail/160291.html).
   * 
   * @param request - DescribeLoadTasksRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadTasksRecordsResponse
   */
  async describeLoadTasksRecordsWithOptions(request: DescribeLoadTasksRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadTasksRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLoadTasksRecords",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadTasksRecordsResponse>(await this.callApi(params, req, runtime), new DescribeLoadTasksRecordsResponse({}));
  }

  /**
   * Queries the information about asynchronous import and export tasks of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about how to asynchronously submit import and export tasks, see [Asynchronously submit an import or export task](https://help.aliyun.com/document_detail/160291.html).
   * 
   * @param request - DescribeLoadTasksRecordsRequest
   * @returns DescribeLoadTasksRecordsResponse
   */
  async describeLoadTasksRecords(request: DescribeLoadTasksRecordsRequest): Promise<DescribeLoadTasksRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadTasksRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the information about O&M events.
   * 
   * @param request - DescribeMaintenanceActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMaintenanceActionResponse
   */
  async describeMaintenanceActionWithOptions(request: DescribeMaintenanceActionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMaintenanceActionResponse> {
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

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMaintenanceAction",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMaintenanceActionResponse>(await this.callApi(params, req, runtime), new DescribeMaintenanceActionResponse({}));
  }

  /**
   * Queries the information about O&M events.
   * 
   * @param request - DescribeMaintenanceActionRequest
   * @returns DescribeMaintenanceActionResponse
   */
  async describeMaintenanceAction(request: DescribeMaintenanceActionRequest): Promise<DescribeMaintenanceActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMaintenanceActionWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeOperatorPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOperatorPermissionResponse
   */
  async describeOperatorPermissionWithOptions(request: DescribeOperatorPermissionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOperatorPermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOperatorPermission",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOperatorPermissionResponse>(await this.callApi(params, req, runtime), new DescribeOperatorPermissionResponse({}));
  }

  /**
   * @param request - DescribeOperatorPermissionRequest
   * @returns DescribeOperatorPermissionResponse
   */
  async describeOperatorPermission(request: DescribeOperatorPermissionRequest): Promise<DescribeOperatorPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOperatorPermissionWithOptions(request, runtime);
  }

  /**
   * Queries the metrics of an SQL pattern such as the query duration and average memory usage within a period of time.
   * 
   * @param request - DescribePatternPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePatternPerformanceResponse
   */
  async describePatternPerformanceWithOptions(request: DescribePatternPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribePatternPerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.patternId)) {
      query["PatternId"] = request.patternId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePatternPerformance",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePatternPerformanceResponse>(await this.callApi(params, req, runtime), new DescribePatternPerformanceResponse({}));
  }

  /**
   * Queries the metrics of an SQL pattern such as the query duration and average memory usage within a period of time.
   * 
   * @param request - DescribePatternPerformanceRequest
   * @returns DescribePatternPerformanceResponse
   */
  async describePatternPerformance(request: DescribePatternPerformanceRequest): Promise<DescribePatternPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePatternPerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the queries that are being executed on a cluster.
   * 
   * @param request - DescribeProcessListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProcessListResponse
   */
  async describeProcessListWithOptions(request: DescribeProcessListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProcessListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.runningTime)) {
      query["RunningTime"] = request.runningTime;
    }

    if (!Util.isUnset(request.showFull)) {
      query["ShowFull"] = request.showFull;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProcessList",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProcessListResponse>(await this.callApi(params, req, runtime), new DescribeProcessListResponse({}));
  }

  /**
   * Queries the queries that are being executed on a cluster.
   * 
   * @param request - DescribeProcessListRequest
   * @returns DescribeProcessListResponse
   */
  async describeProcessList(request: DescribeProcessListRequest): Promise<DescribeProcessListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProcessListWithOptions(request, runtime);
  }

  /**
   * Queries a list of available regions and zones for AnalyticDB for MySQL.
   * 
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

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "DescribeRegions",
      version: "2019-03-15",
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
   * Queries a list of available regions and zones for AnalyticDB for MySQL.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * 查询Resubmit配置
   * 
   * @param request - DescribeResubmitConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResubmitConfigResponse
   */
  async describeResubmitConfigWithOptions(request: DescribeResubmitConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResubmitConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
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
      action: "DescribeResubmitConfig",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResubmitConfigResponse>(await this.callApi(params, req, runtime), new DescribeResubmitConfigResponse({}));
  }

  /**
   * 查询Resubmit配置
   * 
   * @param request - DescribeResubmitConfigRequest
   * @returns DescribeResubmitConfigResponse
   */
  async describeResubmitConfig(request: DescribeResubmitConfigRequest): Promise<DescribeResubmitConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResubmitConfigWithOptions(request, runtime);
  }

  /**
   * 查询SQA状态
   * 
   * @param request - DescribeSQAConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQAConfigResponse
   */
  async describeSQAConfigWithOptions(request: DescribeSQAConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQAConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
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
      action: "DescribeSQAConfig",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSQAConfigResponse>(await this.callApi(params, req, runtime), new DescribeSQAConfigResponse({}));
  }

  /**
   * 查询SQA状态
   * 
   * @param request - DescribeSQAConfigRequest
   * @returns DescribeSQAConfigResponse
   */
  async describeSQAConfig(request: DescribeSQAConfigRequest): Promise<DescribeSQAConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQAConfigWithOptions(request, runtime);
  }

  /**
   * Queries a list of SQL patterns for an AnalyticDB for MySQL cluster within a period of time.
   * 
   * @param request - DescribeSQLPatternsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLPatternsResponse
   */
  async describeSQLPatternsWithOptions(request: DescribeSQLPatternsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLPatternsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSQLPatterns",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSQLPatternsResponse>(await this.callApi(params, req, runtime), new DescribeSQLPatternsResponse({}));
  }

  /**
   * Queries a list of SQL patterns for an AnalyticDB for MySQL cluster within a period of time.
   * 
   * @param request - DescribeSQLPatternsRequest
   * @returns DescribeSQLPatternsResponse
   */
  async describeSQLPatterns(request: DescribeSQLPatternsRequest): Promise<DescribeSQLPatternsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLPatternsWithOptions(request, runtime);
  }

  /**
   * Queries the plan information about an SQL statement such as a query statement or an extract-transform-load (ETL) task statement.
   * 
   * @param request - DescribeSQLPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLPlanResponse
   */
  async describeSQLPlanWithOptions(request: DescribeSQLPlanRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.processId)) {
      query["ProcessId"] = request.processId;
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
      action: "DescribeSQLPlan",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSQLPlanResponse>(await this.callApi(params, req, runtime), new DescribeSQLPlanResponse({}));
  }

  /**
   * Queries the plan information about an SQL statement such as a query statement or an extract-transform-load (ETL) task statement.
   * 
   * @param request - DescribeSQLPlanRequest
   * @returns DescribeSQLPlanResponse
   */
  async describeSQLPlan(request: DescribeSQLPlanRequest): Promise<DescribeSQLPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLPlanWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSQLPlanTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLPlanTaskResponse
   */
  async describeSQLPlanTaskWithOptions(request: DescribeSQLPlanTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLPlanTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.processId)) {
      query["ProcessId"] = request.processId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.stageId)) {
      query["StageId"] = request.stageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSQLPlanTask",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSQLPlanTaskResponse>(await this.callApi(params, req, runtime), new DescribeSQLPlanTaskResponse({}));
  }

  /**
   * @param request - DescribeSQLPlanTaskRequest
   * @returns DescribeSQLPlanTaskResponse
   */
  async describeSQLPlanTask(request: DescribeSQLPlanTaskRequest): Promise<DescribeSQLPlanTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLPlanTaskWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSchemasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSchemasResponse
   */
  async describeSchemasWithOptions(request: DescribeSchemasRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSchemasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSchemas",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSchemasResponse>(await this.callApi(params, req, runtime), new DescribeSchemasResponse({}));
  }

  /**
   * @param request - DescribeSchemasRequest
   * @returns DescribeSchemasResponse
   */
  async describeSchemas(request: DescribeSchemasRequest): Promise<DescribeSchemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSchemasWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSlowLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecordsWithOptions(request: DescribeSlowLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowLogRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
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

    if (!Util.isUnset(request.processID)) {
      query["ProcessID"] = request.processID;
    }

    if (!Util.isUnset(request.range)) {
      query["Range"] = request.range;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlowLogRecords",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlowLogRecordsResponse>(await this.callApi(params, req, runtime), new DescribeSlowLogRecordsResponse({}));
  }

  /**
   * @param request - DescribeSlowLogRecordsRequest
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecords(request: DescribeSlowLogRecordsRequest): Promise<DescribeSlowLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries a list of SQL patterns for an AnalyticDB for MySQL cluster within a time range.
   * 
   * @param request - DescribeSqlPatternRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSqlPatternResponse
   */
  async describeSqlPatternWithOptions(request: DescribeSqlPatternRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSqlPatternResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sqlPattern)) {
      query["SqlPattern"] = request.sqlPattern;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSqlPattern",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSqlPatternResponse>(await this.callApi(params, req, runtime), new DescribeSqlPatternResponse({}));
  }

  /**
   * Queries a list of SQL patterns for an AnalyticDB for MySQL cluster within a time range.
   * 
   * @param request - DescribeSqlPatternRequest
   * @returns DescribeSqlPatternResponse
   */
  async describeSqlPattern(request: DescribeSqlPatternRequest): Promise<DescribeSqlPatternResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSqlPatternWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTableAccessCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTableAccessCountResponse
   */
  async describeTableAccessCountWithOptions(request: DescribeTableAccessCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTableAccessCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTableAccessCount",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTableAccessCountResponse>(await this.callApi(params, req, runtime), new DescribeTableAccessCountResponse({}));
  }

  /**
   * @param request - DescribeTableAccessCountRequest
   * @returns DescribeTableAccessCountResponse
   */
  async describeTableAccessCount(request: DescribeTableAccessCountRequest): Promise<DescribeTableAccessCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTableAccessCountWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTableDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTableDetailResponse
   */
  async describeTableDetailWithOptions(request: DescribeTableDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTableDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTableDetail",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTableDetailResponse>(await this.callApi(params, req, runtime), new DescribeTableDetailResponse({}));
  }

  /**
   * @param request - DescribeTableDetailRequest
   * @returns DescribeTableDetailResponse
   */
  async describeTableDetail(request: DescribeTableDetailRequest): Promise<DescribeTableDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTableDetailWithOptions(request, runtime);
  }

  /**
   * Queries the information about partition diagnostics.
   * 
   * @param request - DescribeTablePartitionDiagnoseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTablePartitionDiagnoseResponse
   */
  async describeTablePartitionDiagnoseWithOptions(request: DescribeTablePartitionDiagnoseRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTablePartitionDiagnoseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "DescribeTablePartitionDiagnose",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTablePartitionDiagnoseResponse>(await this.callApi(params, req, runtime), new DescribeTablePartitionDiagnoseResponse({}));
  }

  /**
   * Queries the information about partition diagnostics.
   * 
   * @param request - DescribeTablePartitionDiagnoseRequest
   * @returns DescribeTablePartitionDiagnoseResponse
   */
  async describeTablePartitionDiagnose(request: DescribeTablePartitionDiagnoseRequest): Promise<DescribeTablePartitionDiagnoseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTablePartitionDiagnoseWithOptions(request, runtime);
  }

  /**
   * Queries the information about table statistics for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeTableStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTableStatisticsResponse
   */
  async describeTableStatisticsWithOptions(request: DescribeTableStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTableStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "DescribeTableStatistics",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTableStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeTableStatisticsResponse({}));
  }

  /**
   * Queries the information about table statistics for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeTableStatisticsRequest
   * @returns DescribeTableStatisticsResponse
   */
  async describeTableStatistics(request: DescribeTableStatisticsRequest): Promise<DescribeTableStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTableStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries a list of tables in a database of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTablesResponse
   */
  async describeTablesWithOptions(request: DescribeTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTables",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTablesResponse>(await this.callApi(params, req, runtime), new DescribeTablesResponse({}));
  }

  /**
   * Queries a list of tables in a database of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeTablesRequest
   * @returns DescribeTablesResponse
   */
  async describeTables(request: DescribeTablesRequest): Promise<DescribeTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTablesWithOptions(request, runtime);
  }

  /**
   * Queries the information about a task.
   * 
   * @param request - DescribeTaskInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskInfoResponse
   */
  async describeTaskInfoWithOptions(request: DescribeTaskInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTaskInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTaskInfo",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTaskInfoResponse>(await this.callApi(params, req, runtime), new DescribeTaskInfoResponse({}));
  }

  /**
   * Queries the information about a task.
   * 
   * @param request - DescribeTaskInfoRequest
   * @returns DescribeTaskInfoResponse
   */
  async describeTaskInfo(request: DescribeTaskInfoRequest): Promise<DescribeTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTaskInfoWithOptions(request, runtime);
  }

  /**
   * Queries the vSwitches.
   * 
   * @param request - DescribeVSwitchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVSwitchesResponse
   */
  async describeVSwitchesWithOptions(request: DescribeVSwitchesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVSwitchesResponse> {
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

    if (!Util.isUnset(request.vswId)) {
      query["VswId"] = request.vswId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVSwitches",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVSwitchesResponse>(await this.callApi(params, req, runtime), new DescribeVSwitchesResponse({}));
  }

  /**
   * Queries the vSwitches.
   * 
   * @param request - DescribeVSwitchesRequest
   * @returns DescribeVSwitchesResponse
   */
  async describeVSwitches(request: DescribeVSwitchesRequest): Promise<DescribeVSwitchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVSwitchesWithOptions(request, runtime);
  }

  /**
   * @remarks
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition.
   * 
   * @param request - DetachUserENIRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachUserENIResponse
   */
  async detachUserENIWithOptions(request: DetachUserENIRequest, runtime: $Util.RuntimeOptions): Promise<DetachUserENIResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachUserENI",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachUserENIResponse>(await this.callApi(params, req, runtime), new DetachUserENIResponse({}));
  }

  /**
   * @remarks
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition.
   * 
   * @param request - DetachUserENIRequest
   * @returns DetachUserENIResponse
   */
  async detachUserENI(request: DetachUserENIRequest): Promise<DetachUserENIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachUserENIWithOptions(request, runtime);
  }

  /**
   * @param request - DisableAdviceServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAdviceServiceResponse
   */
  async disableAdviceServiceWithOptions(request: DisableAdviceServiceRequest, runtime: $Util.RuntimeOptions): Promise<DisableAdviceServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableAdviceService",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableAdviceServiceResponse>(await this.callApi(params, req, runtime), new DisableAdviceServiceResponse({}));
  }

  /**
   * @param request - DisableAdviceServiceRequest
   * @returns DisableAdviceServiceResponse
   */
  async disableAdviceService(request: DisableAdviceServiceRequest): Promise<DisableAdviceServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableAdviceServiceWithOptions(request, runtime);
  }

  /**
   * Downloads the diagnostic information about SQL statements that meet a condition for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DownloadDiagnosisRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadDiagnosisRecordsResponse
   */
  async downloadDiagnosisRecordsWithOptions(request: DownloadDiagnosisRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DownloadDiagnosisRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.maxPeakMemory)) {
      query["MaxPeakMemory"] = request.maxPeakMemory;
    }

    if (!Util.isUnset(request.maxScanSize)) {
      query["MaxScanSize"] = request.maxScanSize;
    }

    if (!Util.isUnset(request.minPeakMemory)) {
      query["MinPeakMemory"] = request.minPeakMemory;
    }

    if (!Util.isUnset(request.minScanSize)) {
      query["MinScanSize"] = request.minScanSize;
    }

    if (!Util.isUnset(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroup)) {
      query["ResourceGroup"] = request.resourceGroup;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DownloadDiagnosisRecords",
      version: "2019-03-15",
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
   * Downloads the diagnostic information about SQL statements that meet a condition for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DownloadDiagnosisRecordsRequest
   * @returns DownloadDiagnosisRecordsResponse
   */
  async downloadDiagnosisRecords(request: DownloadDiagnosisRecordsRequest): Promise<DownloadDiagnosisRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadDiagnosisRecordsWithOptions(request, runtime);
  }

  /**
   * @param request - EnableAdviceServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAdviceServiceResponse
   */
  async enableAdviceServiceWithOptions(request: EnableAdviceServiceRequest, runtime: $Util.RuntimeOptions): Promise<EnableAdviceServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableAdviceService",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableAdviceServiceResponse>(await this.callApi(params, req, runtime), new EnableAdviceServiceResponse({}));
  }

  /**
   * @param request - EnableAdviceServiceRequest
   * @returns EnableAdviceServiceResponse
   */
  async enableAdviceService(request: EnableAdviceServiceRequest): Promise<EnableAdviceServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableAdviceServiceWithOptions(request, runtime);
  }

  /**
   * Grants permissions to the service account of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * ###
   * If you need Alibaba Cloud technical support to perform operations on your AnalyticDB for MySQL cluster, you must grant permissions to the service account of your cluster. When the validity period of the authorization ends, the granted permissions are automatically revoked.
   * 
   * @param request - GrantOperatorPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantOperatorPermissionResponse
   */
  async grantOperatorPermissionWithOptions(request: GrantOperatorPermissionRequest, runtime: $Util.RuntimeOptions): Promise<GrantOperatorPermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.privileges)) {
      query["Privileges"] = request.privileges;
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
      action: "GrantOperatorPermission",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantOperatorPermissionResponse>(await this.callApi(params, req, runtime), new GrantOperatorPermissionResponse({}));
  }

  /**
   * Grants permissions to the service account of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * ###
   * If you need Alibaba Cloud technical support to perform operations on your AnalyticDB for MySQL cluster, you must grant permissions to the service account of your cluster. When the validity period of the authorization ends, the granted permissions are automatically revoked.
   * 
   * @param request - GrantOperatorPermissionRequest
   * @returns GrantOperatorPermissionResponse
   */
  async grantOperatorPermission(request: GrantOperatorPermissionRequest): Promise<GrantOperatorPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantOperatorPermissionWithOptions(request, runtime);
  }

  /**
   * Terminates an ongoing query.
   * 
   * @param request - KillProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KillProcessResponse
   */
  async killProcessWithOptions(request: KillProcessRequest, runtime: $Util.RuntimeOptions): Promise<KillProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.processId)) {
      query["ProcessId"] = request.processId;
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
      action: "KillProcess",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<KillProcessResponse>(await this.callApi(params, req, runtime), new KillProcessResponse({}));
  }

  /**
   * Terminates an ongoing query.
   * 
   * @param request - KillProcessRequest
   * @returns KillProcessResponse
   */
  async killProcess(request: KillProcessRequest): Promise<KillProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killProcessWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to AnalyticDB for MySQL clusters, or the AnalyticDB for MySQL clusters that have tags added.
   * 
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
      version: "2019-03-15",
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
   * Queries the tags that are added to AnalyticDB for MySQL clusters, or the AnalyticDB for MySQL clusters that have tags added.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Migrates data from a Data Warehouse Edition (V3.0) cluster to a Data Lakehouse Edition (V3.0) cluster in AnalyticDB for MySQL.
   * 
   * @param request - MigrateDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateDBClusterResponse
   */
  async migrateDBClusterWithOptions(request: MigrateDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<MigrateDBClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.computeResource)) {
      query["ComputeResource"] = request.computeResource;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.shardNumber)) {
      query["ShardNumber"] = request.shardNumber;
    }

    if (!Util.isUnset(request.storageResource)) {
      query["StorageResource"] = request.storageResource;
    }

    if (!Util.isUnset(request.storageResourceSize)) {
      query["StorageResourceSize"] = request.storageResourceSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MigrateDBCluster",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MigrateDBClusterResponse>(await this.callApi(params, req, runtime), new MigrateDBClusterResponse({}));
  }

  /**
   * Migrates data from a Data Warehouse Edition (V3.0) cluster to a Data Lakehouse Edition (V3.0) cluster in AnalyticDB for MySQL.
   * 
   * @param request - MigrateDBClusterRequest
   * @returns MigrateDBClusterResponse
   */
  async migrateDBCluster(request: MigrateDBClusterRequest): Promise<MigrateDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.migrateDBClusterWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a database account for an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescriptionWithOptions(request: ModifyAccountDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountDescription)) {
      query["AccountDescription"] = request.accountDescription;
    }

    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountDescription",
      version: "2019-03-15",
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

  /**
   * Modifies the description of a database account for an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyAuditLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAuditLogConfigResponse
   */
  async modifyAuditLogConfigWithOptions(request: ModifyAuditLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAuditLogConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditLogStatus)) {
      query["AuditLogStatus"] = request.auditLogStatus;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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
      action: "ModifyAuditLogConfig",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAuditLogConfigResponse>(await this.callApi(params, req, runtime), new ModifyAuditLogConfigResponse({}));
  }

  /**
   * @param request - ModifyAuditLogConfigRequest
   * @returns ModifyAuditLogConfigResponse
   */
  async modifyAuditLogConfig(request: ModifyAuditLogConfigRequest): Promise<ModifyAuditLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAuditLogConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the auto-renewal status of a subscription AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyAutoRenewAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAutoRenewAttributeResponse
   */
  async modifyAutoRenewAttributeWithOptions(request: ModifyAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAutoRenewAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.renewalStatus)) {
      query["RenewalStatus"] = request.renewalStatus;
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
      action: "ModifyAutoRenewAttribute",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new ModifyAutoRenewAttributeResponse({}));
  }

  /**
   * Modifies the auto-renewal status of a subscription AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyAutoRenewAttributeRequest
   * @returns ModifyAutoRenewAttributeResponse
   */
  async modifyAutoRenewAttribute(request: ModifyAutoRenewAttributeRequest): Promise<ModifyAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicyWithOptions(request: ModifyBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.enableBackupLog)) {
      query["EnableBackupLog"] = request.enableBackupLog;
    }

    if (!Util.isUnset(request.logBackupRetentionPeriod)) {
      query["LogBackupRetentionPeriod"] = request.logBackupRetentionPeriod;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.preferredBackupPeriod)) {
      query["PreferredBackupPeriod"] = request.preferredBackupPeriod;
    }

    if (!Util.isUnset(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
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
      action: "ModifyBackupPolicy",
      version: "2019-03-15",
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
   * Changes the endpoint of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyClusterConnectionStringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterConnectionStringResponse
   */
  async modifyClusterConnectionStringWithOptions(request: ModifyClusterConnectionStringRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterConnectionStringResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!Util.isUnset(request.currentConnectionString)) {
      query["CurrentConnectionString"] = request.currentConnectionString;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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
      action: "ModifyClusterConnectionString",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyClusterConnectionStringResponse>(await this.callApi(params, req, runtime), new ModifyClusterConnectionStringResponse({}));
  }

  /**
   * Changes the endpoint of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyClusterConnectionStringRequest
   * @returns ModifyClusterConnectionStringResponse
   */
  async modifyClusterConnectionString(request: ModifyClusterConnectionStringRequest): Promise<ModifyClusterConnectionStringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterConnectionStringWithOptions(request, runtime);
  }

  /**
   * Changes the specifications of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterResponse
   */
  async modifyDBClusterWithOptions(request: ModifyDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.computeResource)) {
      query["ComputeResource"] = request.computeResource;
    }

    if (!Util.isUnset(request.DBClusterCategory)) {
      query["DBClusterCategory"] = request.DBClusterCategory;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBNodeClass)) {
      query["DBNodeClass"] = request.DBNodeClass;
    }

    if (!Util.isUnset(request.DBNodeGroupCount)) {
      query["DBNodeGroupCount"] = request.DBNodeGroupCount;
    }

    if (!Util.isUnset(request.DBNodeStorage)) {
      query["DBNodeStorage"] = request.DBNodeStorage;
    }

    if (!Util.isUnset(request.diskPerformanceLevel)) {
      query["DiskPerformanceLevel"] = request.diskPerformanceLevel;
    }

    if (!Util.isUnset(request.elasticIOResource)) {
      query["ElasticIOResource"] = request.elasticIOResource;
    }

    if (!Util.isUnset(request.elasticIOResourceSize)) {
      query["ElasticIOResourceSize"] = request.elasticIOResourceSize;
    }

    if (!Util.isUnset(request.executorCount)) {
      query["ExecutorCount"] = request.executorCount;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.modifyType)) {
      query["ModifyType"] = request.modifyType;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.storageResource)) {
      query["StorageResource"] = request.storageResource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBCluster",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterResponse({}));
  }

  /**
   * Changes the specifications of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterRequest
   * @returns ModifyDBClusterResponse
   */
  async modifyDBCluster(request: ModifyDBClusterRequest): Promise<ModifyDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterWithOptions(request, runtime);
  }

  /**
   * Modifies the IP address whitelists of a cluster.
   * 
   * @param request - ModifyDBClusterAccessWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterAccessWhiteListResponse
   */
  async modifyDBClusterAccessWhiteListWithOptions(request: ModifyDBClusterAccessWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterAccessWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterIPArrayAttribute)) {
      query["DBClusterIPArrayAttribute"] = request.DBClusterIPArrayAttribute;
    }

    if (!Util.isUnset(request.DBClusterIPArrayName)) {
      query["DBClusterIPArrayName"] = request.DBClusterIPArrayName;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
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

    if (!Util.isUnset(request.securityIps)) {
      query["SecurityIps"] = request.securityIps;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterAccessWhiteList",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterAccessWhiteListResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterAccessWhiteListResponse({}));
  }

  /**
   * Modifies the IP address whitelists of a cluster.
   * 
   * @param request - ModifyDBClusterAccessWhiteListRequest
   * @returns ModifyDBClusterAccessWhiteListResponse
   */
  async modifyDBClusterAccessWhiteList(request: ModifyDBClusterAccessWhiteListRequest): Promise<ModifyDBClusterAccessWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterAccessWhiteListWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDBClusterDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterDescriptionResponse
   */
  async modifyDBClusterDescriptionWithOptions(request: ModifyDBClusterDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterDescription",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterDescriptionResponse({}));
  }

  /**
   * @param request - ModifyDBClusterDescriptionRequest
   * @returns ModifyDBClusterDescriptionResponse
   */
  async modifyDBClusterDescription(request: ModifyDBClusterDescriptionRequest): Promise<ModifyDBClusterDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterDescriptionWithOptions(request, runtime);
  }

  /**
   * Changes the maintenance window of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterMaintainTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterMaintainTimeResponse
   */
  async modifyDBClusterMaintainTimeWithOptions(request: ModifyDBClusterMaintainTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterMaintainTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.maintainTime)) {
      query["MaintainTime"] = request.maintainTime;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterMaintainTime",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterMaintainTimeResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterMaintainTimeResponse({}));
  }

  /**
   * Changes the maintenance window of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterMaintainTimeRequest
   * @returns ModifyDBClusterMaintainTimeResponse
   */
  async modifyDBClusterMaintainTime(request: ModifyDBClusterMaintainTimeRequest): Promise<ModifyDBClusterMaintainTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterMaintainTimeWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterPayTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterPayTypeResponse
   */
  async modifyDBClusterPayTypeWithOptions(request: ModifyDBClusterPayTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterPayTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
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

    if (!Util.isUnset(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterPayType",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterPayTypeResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterPayTypeResponse({}));
  }

  /**
   * Changes the billing method of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterPayTypeRequest
   * @returns ModifyDBClusterPayTypeResponse
   */
  async modifyDBClusterPayType(request: ModifyDBClusterPayTypeRequest): Promise<ModifyDBClusterPayTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterPayTypeWithOptions(request, runtime);
  }

  /**
   * Modifies the resource group of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * Resource Management enables you to build an organizational structure for resources based on your business needs. You can use a resource directory, folders, accounts, and resource groups to hierarchically organize and manage resources. For more information, see [What is Resource Management?](~~94475#concept-zyn-3p1-dhb~~ "Resource Management provides a collection of resource management services that support enterprise IT administration. The services include Resource Directory, Resource Group, and Tag. Resource Directory allows you to build an organizational structure for resources based on your business requirements. Resource Group and Tag allow you to hierarchically manage the resources. Resource Sharing allows you to share the resources among your accounts.")
   * 
   * @param request - ModifyDBClusterResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterResourceGroupResponse
   */
  async modifyDBClusterResourceGroupWithOptions(request: ModifyDBClusterResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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
      action: "ModifyDBClusterResourceGroup",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterResourceGroupResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterResourceGroupResponse({}));
  }

  /**
   * Modifies the resource group of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * Resource Management enables you to build an organizational structure for resources based on your business needs. You can use a resource directory, folders, accounts, and resource groups to hierarchically organize and manage resources. For more information, see [What is Resource Management?](~~94475#concept-zyn-3p1-dhb~~ "Resource Management provides a collection of resource management services that support enterprise IT administration. The services include Resource Directory, Resource Group, and Tag. Resource Directory allows you to build an organizational structure for resources based on your business requirements. Resource Group and Tag allow you to hierarchically manage the resources. Resource Sharing allows you to share the resources among your accounts.")
   * 
   * @param request - ModifyDBClusterResourceGroupRequest
   * @returns ModifyDBClusterResourceGroupResponse
   */
  async modifyDBClusterResourceGroup(request: ModifyDBClusterResourceGroupRequest): Promise<ModifyDBClusterResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterResourceGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the SSL configurations of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - ModifyDBClusterSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterSSLResponse
   */
  async modifyDBClusterSSLWithOptions(request: ModifyDBClusterSSLRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterSSLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.enableSSL)) {
      query["EnableSSL"] = request.enableSSL;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterSSL",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterSSLResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterSSLResponse({}));
  }

  /**
   * Modifies the SSL configurations of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - ModifyDBClusterSSLRequest
   * @returns ModifyDBClusterSSLResponse
   */
  async modifyDBClusterSSL(request: ModifyDBClusterSSLRequest): Promise<ModifyDBClusterSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterSSLWithOptions(request, runtime);
  }

  /**
   * Modifies the number of nodes or the query execution mode for a resource group of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * ## Precautions
   * *   This operation is applicable only for elastic clusters of 32 cores or more.
   * *   The number of nodes cannot be changed for the default resource group USER_DEFAULT.
   * 
   * @param tmpReq - ModifyDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBResourceGroupResponse
   */
  async modifyDBResourceGroupWithOptions(tmpReq: ModifyDBResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBResourceGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyDBResourceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.poolUserList)) {
      request.poolUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.poolUserList, "PoolUserList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.nodeNum)) {
      query["NodeNum"] = request.nodeNum;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolUserListShrink)) {
      query["PoolUserList"] = request.poolUserListShrink;
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
      action: "ModifyDBResourceGroup",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBResourceGroupResponse>(await this.callApi(params, req, runtime), new ModifyDBResourceGroupResponse({}));
  }

  /**
   * Modifies the number of nodes or the query execution mode for a resource group of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * ## Precautions
   * *   This operation is applicable only for elastic clusters of 32 cores or more.
   * *   The number of nodes cannot be changed for the default resource group USER_DEFAULT.
   * 
   * @param request - ModifyDBResourceGroupRequest
   * @returns ModifyDBResourceGroupResponse
   */
  async modifyDBResourceGroup(request: ModifyDBResourceGroupRequest): Promise<ModifyDBResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the resources of a resource group. This operation is available only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @remarks
   * ###
   * *   You can call this operation only for elastic clusters of 32 cores or more.
   * *   You cannot change the number of nodes for the USER_DEFAULT resource group.
   * 
   * @param request - ModifyDBResourcePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBResourcePoolResponse
   */
  async modifyDBResourcePoolWithOptions(request: ModifyDBResourcePoolRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBResourcePoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.nodeNum)) {
      query["NodeNum"] = request.nodeNum;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!Util.isUnset(request.queryType)) {
      query["QueryType"] = request.queryType;
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
      action: "ModifyDBResourcePool",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBResourcePoolResponse>(await this.callApi(params, req, runtime), new ModifyDBResourcePoolResponse({}));
  }

  /**
   * Modifies the resources of a resource group. This operation is available only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @remarks
   * ###
   * *   You can call this operation only for elastic clusters of 32 cores or more.
   * *   You cannot change the number of nodes for the USER_DEFAULT resource group.
   * 
   * @param request - ModifyDBResourcePoolRequest
   * @returns ModifyDBResourcePoolResponse
   */
  async modifyDBResourcePool(request: ModifyDBResourcePoolRequest): Promise<ModifyDBResourcePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBResourcePoolWithOptions(request, runtime);
  }

  /**
   * Modifies a scheduled scaling plan. This operation can be used only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @remarks
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - ModifyElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyElasticPlanResponse
   */
  async modifyElasticPlanWithOptions(request: ModifyElasticPlanRequest, runtime: $Util.RuntimeOptions): Promise<ModifyElasticPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.elasticPlanEnable)) {
      query["ElasticPlanEnable"] = request.elasticPlanEnable;
    }

    if (!Util.isUnset(request.elasticPlanEndDay)) {
      query["ElasticPlanEndDay"] = request.elasticPlanEndDay;
    }

    if (!Util.isUnset(request.elasticPlanMonthlyRepeat)) {
      query["ElasticPlanMonthlyRepeat"] = request.elasticPlanMonthlyRepeat;
    }

    if (!Util.isUnset(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    if (!Util.isUnset(request.elasticPlanNodeNum)) {
      query["ElasticPlanNodeNum"] = request.elasticPlanNodeNum;
    }

    if (!Util.isUnset(request.elasticPlanStartDay)) {
      query["ElasticPlanStartDay"] = request.elasticPlanStartDay;
    }

    if (!Util.isUnset(request.elasticPlanTimeEnd)) {
      query["ElasticPlanTimeEnd"] = request.elasticPlanTimeEnd;
    }

    if (!Util.isUnset(request.elasticPlanTimeStart)) {
      query["ElasticPlanTimeStart"] = request.elasticPlanTimeStart;
    }

    if (!Util.isUnset(request.elasticPlanType)) {
      query["ElasticPlanType"] = request.elasticPlanType;
    }

    if (!Util.isUnset(request.elasticPlanWeeklyRepeat)) {
      query["ElasticPlanWeeklyRepeat"] = request.elasticPlanWeeklyRepeat;
    }

    if (!Util.isUnset(request.elasticPlanWorkerSpec)) {
      query["ElasticPlanWorkerSpec"] = request.elasticPlanWorkerSpec;
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

    if (!Util.isUnset(request.resourcePoolName)) {
      query["ResourcePoolName"] = request.resourcePoolName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyElasticPlan",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyElasticPlanResponse>(await this.callApi(params, req, runtime), new ModifyElasticPlanResponse({}));
  }

  /**
   * Modifies a scheduled scaling plan. This operation can be used only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @remarks
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - ModifyElasticPlanRequest
   * @returns ModifyElasticPlanResponse
   */
  async modifyElasticPlan(request: ModifyElasticPlanRequest): Promise<ModifyElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyElasticPlanWithOptions(request, runtime);
  }

  /**
   * Modifies the log backup settings of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyLogBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLogBackupPolicyResponse
   */
  async modifyLogBackupPolicyWithOptions(request: ModifyLogBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLogBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.enableBackupLog)) {
      query["EnableBackupLog"] = request.enableBackupLog;
    }

    if (!Util.isUnset(request.logBackupRetentionPeriod)) {
      query["LogBackupRetentionPeriod"] = request.logBackupRetentionPeriod;
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
      action: "ModifyLogBackupPolicy",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyLogBackupPolicyResponse>(await this.callApi(params, req, runtime), new ModifyLogBackupPolicyResponse({}));
  }

  /**
   * Modifies the log backup settings of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyLogBackupPolicyRequest
   * @returns ModifyLogBackupPolicyResponse
   */
  async modifyLogBackupPolicy(request: ModifyLogBackupPolicyRequest): Promise<ModifyLogBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLogBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Changes the switchover time of O&M events.
   * 
   * @param request - ModifyMaintenanceActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMaintenanceActionResponse
   */
  async modifyMaintenanceActionWithOptions(request: ModifyMaintenanceActionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMaintenanceActionResponse> {
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

    if (!Util.isUnset(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMaintenanceAction",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMaintenanceActionResponse>(await this.callApi(params, req, runtime), new ModifyMaintenanceActionResponse({}));
  }

  /**
   * Changes the switchover time of O&M events.
   * 
   * @param request - ModifyMaintenanceActionRequest
   * @returns ModifyMaintenanceActionResponse
   */
  async modifyMaintenanceAction(request: ModifyMaintenanceActionRequest): Promise<ModifyMaintenanceActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMaintenanceActionWithOptions(request, runtime);
  }

  /**
   * 修改Resubmit配置
   * 
   * @param tmpReq - ModifyResubmitConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyResubmitConfigResponse
   */
  async modifyResubmitConfigWithOptions(tmpReq: ModifyResubmitConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyResubmitConfigResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyResubmitConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.rulesShrink)) {
      query["Rules"] = request.rulesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyResubmitConfig",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyResubmitConfigResponse>(await this.callApi(params, req, runtime), new ModifyResubmitConfigResponse({}));
  }

  /**
   * 修改Resubmit配置
   * 
   * @param request - ModifyResubmitConfigRequest
   * @returns ModifyResubmitConfigResponse
   */
  async modifyResubmitConfig(request: ModifyResubmitConfigRequest): Promise<ModifyResubmitConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyResubmitConfigWithOptions(request, runtime);
  }

  /**
   * 修改SQA配置
   * 
   * @param request - ModifySQAConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySQAConfigResponse
   */
  async modifySQAConfigWithOptions(request: ModifySQAConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifySQAConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
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

    if (!Util.isUnset(request.SQAStatus)) {
      query["SQAStatus"] = request.SQAStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySQAConfig",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySQAConfigResponse>(await this.callApi(params, req, runtime), new ModifySQAConfigResponse({}));
  }

  /**
   * 修改SQA配置
   * 
   * @param request - ModifySQAConfigRequest
   * @returns ModifySQAConfigResponse
   */
  async modifySQAConfig(request: ModifySQAConfigRequest): Promise<ModifySQAConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySQAConfigWithOptions(request, runtime);
  }

  /**
   * Releases the public endpoint of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ReleaseClusterPublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseClusterPublicConnectionResponse
   */
  async releaseClusterPublicConnectionWithOptions(request: ReleaseClusterPublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseClusterPublicConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseClusterPublicConnection",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseClusterPublicConnectionResponse>(await this.callApi(params, req, runtime), new ReleaseClusterPublicConnectionResponse({}));
  }

  /**
   * Releases the public endpoint of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ReleaseClusterPublicConnectionRequest
   * @returns ReleaseClusterPublicConnectionResponse
   */
  async releaseClusterPublicConnection(request: ReleaseClusterPublicConnectionRequest): Promise<ReleaseClusterPublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseClusterPublicConnectionWithOptions(request, runtime);
  }

  /**
   * Resets the password of a database account for an AnalyticDB for MySQL cluster.
   * 
   * @param request - ResetAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPasswordWithOptions(request: ResetAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetAccountPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetAccountPassword",
      version: "2019-03-15",
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

  /**
   * Resets the password of a database account for an AnalyticDB for MySQL cluster.
   * 
   * @param request - ResetAccountPasswordRequest
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPassword(request: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  /**
   * @param request - RevokeOperatorPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeOperatorPermissionResponse
   */
  async revokeOperatorPermissionWithOptions(request: RevokeOperatorPermissionRequest, runtime: $Util.RuntimeOptions): Promise<RevokeOperatorPermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeOperatorPermission",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeOperatorPermissionResponse>(await this.callApi(params, req, runtime), new RevokeOperatorPermissionResponse({}));
  }

  /**
   * @param request - RevokeOperatorPermissionRequest
   * @returns RevokeOperatorPermissionResponse
   */
  async revokeOperatorPermission(request: RevokeOperatorPermissionRequest): Promise<RevokeOperatorPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeOperatorPermissionWithOptions(request, runtime);
  }

  /**
   * Adds tags to an AnalyticDB for MySQL cluster.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
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
      version: "2019-03-15",
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
   * Adds tags to an AnalyticDB for MySQL cluster.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Disassociates a resource group of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster from a database account.
   * 
   * @param request - UnbindDBResourceGroupWithUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindDBResourceGroupWithUserResponse
   */
  async unbindDBResourceGroupWithUserWithOptions(request: UnbindDBResourceGroupWithUserRequest, runtime: $Util.RuntimeOptions): Promise<UnbindDBResourceGroupWithUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupUser)) {
      query["GroupUser"] = request.groupUser;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindDBResourceGroupWithUser",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindDBResourceGroupWithUserResponse>(await this.callApi(params, req, runtime), new UnbindDBResourceGroupWithUserResponse({}));
  }

  /**
   * Disassociates a resource group of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster from a database account.
   * 
   * @param request - UnbindDBResourceGroupWithUserRequest
   * @returns UnbindDBResourceGroupWithUserResponse
   */
  async unbindDBResourceGroupWithUser(request: UnbindDBResourceGroupWithUserRequest): Promise<UnbindDBResourceGroupWithUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindDBResourceGroupWithUserWithOptions(request, runtime);
  }

  /**
   * Disassociates a database account from a resource group. This operation can be called only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @param request - UnbindDBResourcePoolWithUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindDBResourcePoolWithUserResponse
   */
  async unbindDBResourcePoolWithUserWithOptions(request: UnbindDBResourcePoolWithUserRequest, runtime: $Util.RuntimeOptions): Promise<UnbindDBResourcePoolWithUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!Util.isUnset(request.poolUser)) {
      query["PoolUser"] = request.poolUser;
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
      action: "UnbindDBResourcePoolWithUser",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindDBResourcePoolWithUserResponse>(await this.callApi(params, req, runtime), new UnbindDBResourcePoolWithUserResponse({}));
  }

  /**
   * Disassociates a database account from a resource group. This operation can be called only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @param request - UnbindDBResourcePoolWithUserRequest
   * @returns UnbindDBResourcePoolWithUserResponse
   */
  async unbindDBResourcePoolWithUser(request: UnbindDBResourcePoolWithUserRequest): Promise<UnbindDBResourcePoolWithUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindDBResourcePoolWithUserWithOptions(request, runtime);
  }

  /**
   * Removes all tags from AnalyticDB for MySQL clusters.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
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
      version: "2019-03-15",
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
   * Removes all tags from AnalyticDB for MySQL clusters.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates the minor version of an AnalyticDB for MySQL cluster.
   * 
   * @param request - UpgradeKernelVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeKernelVersionResponse
   */
  async upgradeKernelVersionWithOptions(request: UpgradeKernelVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeKernelVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
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

    if (!Util.isUnset(request.switchMode)) {
      query["SwitchMode"] = request.switchMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeKernelVersion",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeKernelVersionResponse>(await this.callApi(params, req, runtime), new UpgradeKernelVersionResponse({}));
  }

  /**
   * Updates the minor version of an AnalyticDB for MySQL cluster.
   * 
   * @param request - UpgradeKernelVersionRequest
   * @returns UpgradeKernelVersionResponse
   */
  async upgradeKernelVersion(request: UpgradeKernelVersionRequest): Promise<UpgradeKernelVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeKernelVersionWithOptions(request, runtime);
  }

}
