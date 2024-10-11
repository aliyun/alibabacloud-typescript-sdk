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
   * The prefix of the endpoint that is used to connect to the database. Set the value to the cluster ID.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
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
   * The request ID.
   * 
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
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

export class CheckClickhouseToRDSRequest extends $tea.Model {
  /**
   * @remarks
   * The password of the account that is used to log on to the database in the ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456Aa
   */
  ckPassword?: string;
  /**
   * @remarks
   * The account that is used to log on to the database in the ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * user1
   */
  ckUserName?: string;
  /**
   * @remarks
   * The port number of the ApsaraDB for ClickHouse cluster.
   * 
   * @example
   * 8123
   */
  clickhousePort?: number;
  /**
   * @remarks
   * The ID of the ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-2zeyy362b5sbm****
   */
  dbClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp13v4bnwlu8j****
   */
  rdsId?: string;
  /**
   * @remarks
   * The password of the account that is used to log on to the database in the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456Rr
   */
  rdsPassword?: string;
  /**
   * @remarks
   * The port number of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * 3306
   */
  rdsPort?: number;
  /**
   * @remarks
   * The account that is used to log on to the database in the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * user2
   */
  rdsUserName?: string;
  /**
   * @remarks
   * The ID of the VPC in which the ApsaraDB RDS for MySQL instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-wz9mm0qka0winfl47****
   */
  rdsVpcId?: string;
  /**
   * @remarks
   * The internal endpoint of the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp16t9h3999xb0a7****.mysql.rds.aliyuncs.com
   */
  rdsVpcUrl?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ckPassword: 'CkPassword',
      ckUserName: 'CkUserName',
      clickhousePort: 'ClickhousePort',
      dbClusterId: 'DbClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      rdsId: 'RdsId',
      rdsPassword: 'RdsPassword',
      rdsPort: 'RdsPort',
      rdsUserName: 'RdsUserName',
      rdsVpcId: 'RdsVpcId',
      rdsVpcUrl: 'RdsVpcUrl',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ckPassword: 'string',
      ckUserName: 'string',
      clickhousePort: 'number',
      dbClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      rdsId: 'string',
      rdsPassword: 'string',
      rdsPort: 'number',
      rdsUserName: 'string',
      rdsVpcId: 'string',
      rdsVpcUrl: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckClickhouseToRDSResponseBody extends $tea.Model {
  /**
   * @remarks
   * *   When the value **true** is returned for the **Status** parameter, the system does not return the ErrorCode parameter.
   * *   When the value **false** is returned for the **Status** parameter, the system returns for the ErrorCode parameter the reason why the ApsaraDB for ClickHouse cluster cannot be connected to the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * NotSameVpc
   */
  errorCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A82758F8-E793-5610-BE11-0E46664305C2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the ApsaraDB for ClickHouse cluster can be connected to the ApsaraDB RDS for MySQL instance.
   * 
   * *   **true**: The ApsaraDB for ClickHouse cluster can be connected to the ApsaraDB RDS for MySQL instance.
   * *   **false**: The ApsaraDB for ClickHouse cluster cannot be connected to the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * false
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckClickhouseToRDSResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckClickhouseToRDSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckClickhouseToRDSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckModifyConfigNeedRestartRequest extends $tea.Model {
  /**
   * @remarks
   * The configuration parameters whose settings are modified.
   * 
   * This parameter is required.
   * 
   * @example
   * <?xml version="1.0"?>
   * <yandex>
   *     <keep_alive_timeout>400</keep_alive_timeout>
   *     <listen_backlog>4096</listen_backlog>
   *     <logger>
   *         <level>debug</level>
   *         <size>1000M</size>
   *     </logger>
   *     <mark_cache_size>5368709120</mark_cache_size>
   *     <max_concurrent_queries>201</max_concurrent_queries>
   *     <max_connections>4096</max_connections>
   *     <max_partition_size_to_drop>0</max_partition_size_to_drop>
   *     <max_table_size_to_drop>0</max_table_size_to_drop>
   *     <merge_tree>
   *         <max_delay_to_insert>256</max_delay_to_insert>
   *         <max_part_loading_threads>auto</max_part_loading_threads>
   *         <max_suspicious_broken_parts>100</max_suspicious_broken_parts>
   *         <zookeeper_session_expiration_check_period>1</zookeeper_session_expiration_check_period>
   *     </merge_tree>
   *     <uncompressed_cache_size>1717986918</uncompressed_cache_size>
   * </yandex>
   */
  config?: string;
  /**
   * @remarks
   * The cluster ID. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query information about all the clusters that are deployed in a specific region. The information includes the cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1tm8zf130ew****
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckModifyConfigNeedRestartResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the cluster was restarted after you modified the configuration parameters. Valid values:
   * 
   * *   **true**: The cluster was restarted.
   * *   **false**: The cluster was not restarted.
   * 
   * @example
   * true
   */
  needRestart?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06798FEE-BEF2-5FAF-A30D-728973BBE97C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      needRestart: 'NeedRestart',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRestart: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckModifyConfigNeedRestartResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckModifyConfigNeedRestartResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckModifyConfigNeedRestartResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMonitorAlertRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp13s14l8498l****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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

export class CheckMonitorAlertResponseBody extends $tea.Model {
  /**
   * @remarks
   * The parameters that are used to configure the monitoring and alerting feature.
   * 
   * @example
   * {   "monitor":{     "key1":"value1",     "key2":"value2"   },   "alert":{     "key1":"value1",     "key2":"value2"   } }
   */
  parameter?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94F92113-FF63-5E57-8401-6FE123AD11DD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the monitoring and alerting feature is enabled. Valid values:
   * 
   * *   **enable**: The monitoring and alerting feature is enabled.
   * *   **disable**: The monitoring and alerting feature is disabled.
   * 
   * @example
   * enable
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMonitorAlertResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckMonitorAlertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckMonitorAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckScaleOutBalancedRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values:
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
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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

export class CheckScaleOutBalancedResponseBody extends $tea.Model {
  /**
   * @remarks
   * The check result. Valid values:
   * 
   * *   **400**: The cluster failed the check.
   * *   **200**: The cluster passed the check.
   * 
   * @example
   * 400
   */
  checkCode?: string;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values:
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
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  /**
   * @remarks
   * The error information returned for a check failure.
   */
  tableDetails?: CheckScaleOutBalancedResponseBodyTableDetails;
  /**
   * @remarks
   * The amount of time that is required for the migration and scale-out. Unit: minutes.
   * 
   * @example
   * 21
   */
  timeDuration?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkCode: 'CheckCode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tableDetails: 'TableDetails',
      timeDuration: 'TimeDuration',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkCode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tableDetails: CheckScaleOutBalancedResponseBodyTableDetails,
      timeDuration: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckScaleOutBalancedResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckScaleOutBalancedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckScaleOutBalancedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CheckServiceLinkedRoleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The role.
   * 
   * @example
   * xxxx
   */
  hasServiceLinkedRole?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hasServiceLinkedRole: 'HasServiceLinkedRole',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasServiceLinkedRole: 'boolean',
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
  /**
   * @remarks
   * The description of the database account.
   * 
   * > 
   * 
   * *   The description cannot start with http:// or https://.
   * 
   * *   The description must be 0 to 256 characters in length.
   * 
   * @example
   * ceshi
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * > 
   * 
   * *   The name must be unique in the cluster.
   * 
   * *   The name can contain lowercase letters, digits, and underscores (_).
   * *   The name must start with a lowercase letter and end with a lowercase letter or a digit.
   * *   The name must be 2 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the database account.
   * 
   * > 
   * 
   * *   The password must contain at least three types of the following characters: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * *   The password can contain the following special characters: ! @ # $ % ^ & \\* ( ) _ + - =
   * *   The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 123789Ff!
   */
  accountPassword?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
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
   * The request ID.
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

export class CreateAccountAndAuthorityRequest extends $tea.Model {
  /**
   * @example
   * ceshi
   */
  accountDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456Aa
   */
  accountPassword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * db1
   */
  allowDatabases?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dt1
   */
  allowDictionaries?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp1p816075e21****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  ddlAuthority?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * all
   */
  dmlAuthority?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * db1,db2
   */
  totalDatabases?: string;
  /**
   * @example
   * dt1,dt2
   */
  totalDictionaries?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      allowDatabases: 'AllowDatabases',
      allowDictionaries: 'AllowDictionaries',
      DBClusterId: 'DBClusterId',
      ddlAuthority: 'DdlAuthority',
      dmlAuthority: 'DmlAuthority',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      totalDatabases: 'TotalDatabases',
      totalDictionaries: 'TotalDictionaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      allowDatabases: 'string',
      allowDictionaries: 'string',
      DBClusterId: 'string',
      ddlAuthority: 'boolean',
      dmlAuthority: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      totalDatabases: 'string',
      totalDictionaries: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountAndAuthorityResponseBody extends $tea.Model {
  /**
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
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

export class CreateAccountAndAuthorityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccountAndAuthorityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAccountAndAuthorityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The retention period for the backup data. By default, the backup data is retained for seven days. Valid values: 7 to 730. Unit: day.
   * 
   * @example
   * 8
   */
  backupRetentionPeriod?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The day of a week when the system regularly backs up data. If you specify multiple days of a week, separate them with commas (,). Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * This parameter is required.
   * 
   * @example
   * Monday,Friday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup window. Specify the time in the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time must be in Coordinated Universal Time (UTC).
   * 
   * For example, if you set the backup window to 00:00Z-01:00Z, the data of the cluster can be backed up from 08:00 (UTC+8) to 09:00 (UTC+8).
   * 
   * This parameter is required.
   * 
   * @example
   * 10:00Z-11:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
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

export class CreateBackupPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * >  This parameter is valid only if the value of PayType is set to Prepaid.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the backup set. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/360339.html) operation to query the backup sets.
   * 
   * >  If you want to restore the data of an ApsaraDB for ClickHouse cluster, this parameter is required.
   * 
   * @example
   * b-12af23adsf
   */
  backupSetID?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The value is a string and can be up to 64 ASCII characters in length.
   * 
   * @example
   * AB
   */
  clientToken?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **Basic**: Single-replica Edition
   * *   **HighAvailability**: Double-replica Edition
   * 
   * This parameter is required.
   * 
   * @example
   * Basic
   */
  DBClusterCategory?: string;
  /**
   * @remarks
   * The specifications of the cluster.
   * 
   * *   Valid values when the cluster is of Single-replica Edition: 
   * 
   *     - **S4**: 4 CPU cores and 16 GB of memory 
   *     - **S8**: 8 CPU cores and 32 GB of memory
   *     -  **S16**: 16 CPU cores and 64 GB of memory
   *     *   **S32**: 32 CPU cores and 128 GB of memory
   *     *   **S64**: 64 CPU cores and 256 GB of memory
   *     *   **S104**: 104 CPU cores and 384 GB of memory
   * 
   * *   Valid values when the cluster is of Double-replica Edition: 
   * 
   *     - **C4**: 4 CPU cores and 16 GB of memory 
   *     - **C8**: 8 CPU cores and 32 GB of memory 
   *     - **C16**: 16 CPU cores and 64 GB of memory 
   *     - **C32**: 32 CPU cores and 128 GB of memory 
   *     - **C64**: 64 CPU cores and 256 GB of memory 
   *     - **C104**: 104 CPU cores and 384 GB of memory
   * 
   * This parameter is required.
   * 
   * @example
   * S8
   */
  DBClusterClass?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The network type of the cluster. Only Virtual Private Cloud (VPC) is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The kernel version. Valid values:
   * 
   * *   **21.8.10.19**
   * *   **22.8.5.29**
   * 
   * This parameter is required.
   * 
   * @example
   * 21.8.10.19
   */
  DBClusterVersion?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * *   Valid values when the cluster is of Single-replica Edition: 1 to 48.
   * *   Valid values when the cluster is of Double-replica Edition: 1 to 24.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  DBNodeGroupCount?: string;
  /**
   * @remarks
   * The storage capacity of a single node. Valid values: 100 to 32000. Unit: GB.
   * 
   * >  This value is a multiple of 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  DBNodeStorage?: string;
  /**
   * @remarks
   * The storage type of the cluster. Valid values:
   * 
   * *   **CloudESSD**: The cluster uses an enhanced SSD (ESSD) of performance level 1 (PL1).
   * *   **CloudESSD_PL2**: The cluster uses an ESSD of PL2.
   * *   **CloudESSD_PL3**: The cluster uses an ESSD of PL3.
   * *   **CloudEfficiency**: The cluster uses an ultra disk.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudESSD_PL2
   */
  dbNodeStorageType?: string;
  /**
   * @remarks
   * You must specify this parameter when EncryptionType is set to CloudDisk.
   * 
   * The ID of the key that is used to encrypt data on disks. You can obtain the ID of the key from the Key Management Service (KMS) console. You can also create a key.
   * 
   * >  If EncryptionType is empty, you do not need to specify this parameter.
   * 
   * @example
   * 0d2470df-da7b-4786-b981-9a164dae****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption type. Set the value to **CloudDisk**, which indicates that only disk encryption is supported.
   * 
   * >  If this parameter is not specified, data is not encrypted.
   * 
   * @example
   * CloudDisk
   */
  encryptionType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: The cluster uses the pay-as-you-go billing method.
   * *   **Prepaid**: The cluster uses the subscription billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter is required when PayType is set to Prepaid.
   * 
   * Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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
   * The ID of the source cluster. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query backup set IDs.
   * 
   * >  If you want to restore the data of an ApsaraDB for ClickHouse cluster, this parameter is required.
   * 
   * @example
   * cc-bp1lxbo89u950****
   */
  sourceDBClusterId?: string;
  /**
   * @remarks
   * The subscription duration of the subscription cluster. This parameter is required when PayType is set to Prepaid.
   * 
   * Valid values:
   * 
   * *   If Period is set to Year, the value of UsedTime must be an integer that ranges from 1 to 3.
   * *   If Period is set to Month, the value of UsedTime must be an integer that ranges from 1 to 9.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch in the secondary zone for the VPC.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchBak?: string;
  /**
   * @remarks
   * The vSwitch in secondary zone 2 for the VPC.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchBak2?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Secondary zone 2.
   * 
   * @example
   * cn-hangzhou-j
   */
  zondIdBak2?: string;
  /**
   * @remarks
   * The zone ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  /**
   * @remarks
   * The secondary zone.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneIdBak?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      backupSetID: 'BackupSetID',
      clientToken: 'ClientToken',
      DBClusterCategory: 'DBClusterCategory',
      DBClusterClass: 'DBClusterClass',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterVersion: 'DBClusterVersion',
      DBNodeGroupCount: 'DBNodeGroupCount',
      DBNodeStorage: 'DBNodeStorage',
      dbNodeStorageType: 'DbNodeStorageType',
      encryptionKey: 'EncryptionKey',
      encryptionType: 'EncryptionType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceDBClusterId: 'SourceDBClusterId',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchBak: 'VSwitchBak',
      vSwitchBak2: 'VSwitchBak2',
      vSwitchId: 'VSwitchId',
      zondIdBak2: 'ZondIdBak2',
      zoneId: 'ZoneId',
      zoneIdBak: 'ZoneIdBak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      backupSetID: 'string',
      clientToken: 'string',
      DBClusterCategory: 'string',
      DBClusterClass: 'string',
      DBClusterDescription: 'string',
      DBClusterNetworkType: 'string',
      DBClusterVersion: 'string',
      DBNodeGroupCount: 'string',
      DBNodeStorage: 'string',
      dbNodeStorageType: 'string',
      encryptionKey: 'string',
      encryptionType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceDBClusterId: 'string',
      usedTime: 'string',
      VPCId: 'string',
      vSwitchBak: 'string',
      vSwitchBak2: 'string',
      vSwitchId: 'string',
      zondIdBak2: 'string',
      zoneId: 'string',
      zoneIdBak: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 21137950671****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
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

export class CreateMonitorDataReportRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp13s14l8498l****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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

export class CreateMonitorDataReportResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94F92113-FF63-5E57-8401-6FE123AD11DD
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

export class CreateMonitorDataReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMonitorDataReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMonitorDataReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOSSStorageRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1z3a2hc8dmt****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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

export class CreateOSSStorageResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1F488A93-83FD-540F-9B67-0333AF64E6A0
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

export class CreateOSSStorageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOSSStorageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOSSStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePortsForClickHouseRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The port type. Set the value to mysql_port.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql_port
   */
  portType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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
      portType: 'PortType',
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
      portType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePortsForClickHouseResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
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

export class CreatePortsForClickHouseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePortsForClickHouseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePortsForClickHouseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRDSToClickhouseDbRequest extends $tea.Model {
  /**
   * @remarks
   * The password of the account that is used to log on to the database in the ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456Aa
   */
  ckPassword?: string;
  /**
   * @remarks
   * The account that is used to log on to the database in the ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * user1
   */
  ckUserName?: string;
  /**
   * @remarks
   * The port number of the ApsaraDB for ClickHouse cluster.
   * 
   * @example
   * 8123
   */
  clickhousePort?: number;
  /**
   * @remarks
   * The ID of the ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-2ze5zeyl72188****
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The maximum number of rows that can be synchronized per second.
   * 
   * @example
   * 50000
   */
  limitUpper?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-8vb989qj9roh0****
   */
  rdsId?: string;
  /**
   * @remarks
   * The password of the account that is used to log on to the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456Rr
   */
  rdsPassword?: string;
  /**
   * @remarks
   * The port number of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * 3306
   */
  rdsPort?: number;
  /**
   * @remarks
   * The account that is used to log on to the database in the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * user2
   */
  rdsUserName?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the ApsaraDB RDS for MySQL instance belongs.
   * 
   * @example
   * vpc-2zen93xryil99jsfy****
   */
  rdsVpcId?: string;
  /**
   * @remarks
   * The private endpoint of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * rm-bp16t9h3999xb0a7****.mysql.rds.aliyuncs.com
   */
  rdsVpcUrl?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to ignore the table schemas that do not support synchronization. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  skipUnsupported?: boolean;
  /**
   * @remarks
   * The tables whose data you want to synchronize.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"Schema":"recommend","Tables":["mr_platform_cpm","mr_platform_ecpm","p_monitor_record"]}]
   */
  synDbTables?: string;
  static names(): { [key: string]: string } {
    return {
      ckPassword: 'CkPassword',
      ckUserName: 'CkUserName',
      clickhousePort: 'ClickhousePort',
      dbClusterId: 'DbClusterId',
      limitUpper: 'LimitUpper',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      rdsId: 'RdsId',
      rdsPassword: 'RdsPassword',
      rdsPort: 'RdsPort',
      rdsUserName: 'RdsUserName',
      rdsVpcId: 'RdsVpcId',
      rdsVpcUrl: 'RdsVpcUrl',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      skipUnsupported: 'SkipUnsupported',
      synDbTables: 'SynDbTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ckPassword: 'string',
      ckUserName: 'string',
      clickhousePort: 'number',
      dbClusterId: 'string',
      limitUpper: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      rdsId: 'string',
      rdsPassword: 'string',
      rdsPort: 'number',
      rdsUserName: 'string',
      rdsVpcId: 'string',
      rdsVpcUrl: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      skipUnsupported: 'boolean',
      synDbTables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRDSToClickhouseDbResponseBody extends $tea.Model {
  /**
   * @remarks
   * If -1 is returned for the **Status** parameter, the cause of the creation failure is returned.
   * 
   * @example
   * ClickHouse exception, code: 49, host: 100.100.79.102, port: 14540; Code: 49, e.displayText() = DB::Exception: Logical error: there is no global context (version 20.8.17.25)n
   */
  errorMsg?: string;
  /**
   * @remarks
   * Duplicate tables in the synchronization task.
   */
  repeatedDbs?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66676F54-1994-5DCF-993F-74536649628A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the synchronization task was created. Valid values:
   * 
   * *   **1**: Created.
   * *   **0**: Creation failed. The tables in the synchronization task are duplicate. The duplicate tables are returned for the **RepeatedDbs** parameter.
   * *   **-1**: Creation failed. The cause why the creation failed is returned for the **ErrorMsg** parameter.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      repeatedDbs: 'RepeatedDbs',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      repeatedDbs: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRDSToClickhouseDbResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRDSToClickhouseDbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRDSToClickhouseDbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSQLAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the database account.
   * 
   * *   The description cannot start with http:// or https://.
   * *   The description can be up to 256 characters in length or be an empty string.
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * *   The name must be unique in the cluster.
   * *   The name can contain lowercase letters, digits, or underscores (_).
   * *   The name must start with a lowercase letter and end with a lowercase letter or a digit.
   * *   The name must be 2 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the database account.
   * 
   * *   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * *   Special characters include ! @ # $ % ^ & \\* ( ) _ + - =
   * *   The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Test1234
   */
  accountPassword?: string;
  /**
   * @remarks
   * The type of the database account. Valid values:
   * 
   * *   **Super**: privileged account.
   * *   **Normal**: standard account.
   * 
   * This parameter is required.
   * 
   * @example
   * Super
   */
  accountType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1p816075e21****
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

export class CreateSQLAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F76
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

export class CreateSQLAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSQLAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSQLAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateServiceLinkedRoleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66428721-FFEC-5023-B4E5-3BD1B67837E0
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

export class DeleteAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
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

export class DeleteDBClusterRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the pay-as-you-go ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
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
   * The request ID.
   * 
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
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

export class DeleteSyndbRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp158i5wvj436****
   */
  dbClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the database in the ApsaraDB RDS for MySQL instance. The database is used for data synchronization.
   * 
   * This parameter is required.
   * 
   * @example
   * database
   */
  synDb?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      synDb: 'SynDb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      synDb: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSyndbResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errorCode?: number;
  /**
   * @remarks
   * *   If the value **true** is returned for the **Status** parameter, the system does not return the ErrorMsg parameter.
   * *   If the value **false** is returned for the **Status** parameter, the system returns the deletion failure cause for the ErrorMsg parameter.
   * 
   * @example
   * ClickHouse exception, code: 49, host: 100.100.xx.xx, port: 49670; Code: 49, e.displayText() = DB::Exception: Logical error: there is no global context (version 20.8.17.25)n
   */
  errorMsg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2C7393F1-5FD1-5CEE-A2EA-270A2CF99693
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the database used for data synchronization was deleted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMsg: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSyndbResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSyndbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSyndbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAuthorityRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1p816075e21****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
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
      accountName: 'string',
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

export class DescribeAccountAuthorityResponseBody extends $tea.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * Databases to which permissions have been granted.
   */
  allowDatabases?: string[];
  /**
   * @remarks
   * Dictionaries to which permissions have been granted.
   */
  allowDictionaries?: string[];
  /**
   * @remarks
   * Indicates whether the database account has DDL permissions. Valid values:
   * 
   * *   **true**: has DDL permissions.
   * *   **false**: does not have DDL permissions.
   * 
   * @example
   * true
   */
  ddlAuthority?: boolean;
  /**
   * @remarks
   * Indicates whether the database account has DML permissions. Valid values:
   * 
   * *   **all**
   * *   **readOnly,modify**
   * 
   * @example
   * all
   */
  dmlAuthority?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  /**
   * @remarks
   * All databases.
   */
  totalDatabases?: string[];
  /**
   * @remarks
   * All dictionaries.
   */
  totalDictionaries?: string[];
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      allowDatabases: 'AllowDatabases',
      allowDictionaries: 'AllowDictionaries',
      ddlAuthority: 'DdlAuthority',
      dmlAuthority: 'DmlAuthority',
      requestId: 'RequestId',
      totalDatabases: 'TotalDatabases',
      totalDictionaries: 'TotalDictionaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      allowDatabases: { 'type': 'array', 'itemType': 'string' },
      allowDictionaries: { 'type': 'array', 'itemType': 'string' },
      ddlAuthority: 'boolean',
      dmlAuthority: 'string',
      requestId: 'string',
      totalDatabases: { 'type': 'array', 'itemType': 'string' },
      totalDictionaries: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAuthorityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountAuthorityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAccountAuthorityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsRequest extends $tea.Model {
  /**
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: DescribeAccountsResponseBodyAccounts,
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

export class DescribeAllDataSourceRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database
   */
  schemaName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table
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
   * The information about the columns.
   */
  columns?: DescribeAllDataSourceResponseBodyColumns;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the databases.
   */
  schemas?: DescribeAllDataSourceResponseBodySchemas;
  /**
   * @remarks
   * The information about the tables.
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

export class DescribeAllDataSourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database
   */
  schemaName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table
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

export class DescribeAllDataSourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Details of the columns.
   */
  columns?: DescribeAllDataSourcesResponseBodyColumns;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75EA41D7-025A-50A6-9287-359A91399F1E
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the databases.
   */
  schemas?: DescribeAllDataSourcesResponseBodySchemas;
  /**
   * @remarks
   * The information about the tables.
   */
  tables?: DescribeAllDataSourcesResponseBodyTables;
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
      columns: DescribeAllDataSourcesResponseBodyColumns,
      requestId: 'string',
      schemas: DescribeAllDataSourcesResponseBodySchemas,
      tables: DescribeAllDataSourcesResponseBodyTables,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAllDataSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAllDataSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1qx68m06981****
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
   * The retention period for the backup data. By default, the backup data is retained for seven days. Valid values: 7 to 730. Unit: day.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * The size of the backup data. Unit: MB.
   * 
   * @example
   * 123124
   */
  backupSize?: string;
  /**
   * @remarks
   * The day of a week when the system regularly backs up data. Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * @example
   * Monday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup window. The time is displayed in Coordinated Universal Time (UTC).
   * 
   * @example
   * 15:00Z-16:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the backup feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  switch?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupSize: 'BackupSize',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      requestId: 'RequestId',
      switch: 'Switch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'number',
      backupSize: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      requestId: 'string',
      switch: 'string',
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
   * @example
   * 117403****
   */
  backupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-11-25T16:00Z
   */
  endTime?: string;
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-11-21T16:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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
  items?: DescribeBackupsResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  /**
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
      items: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyItems },
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
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-2zeux3ua25242****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The database name. You can call the [DescribeSchemas](https://help.aliyun.com/document_detail/350931.html) operation to query database names.
   * 
   * This parameter is required.
   * 
   * @example
   * database
   */
  schemaName?: string;
  /**
   * @remarks
   * The table name. You can call the [DescribeTables](https://help.aliyun.com/document_detail/350932.html) operation to query table names.
   * 
   * This parameter is required.
   * 
   * @example
   * table
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
   * Details of the columns.
   */
  items?: DescribeColumnsResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66428721-FFEC-5023-B4E5-3BD1B67837E0
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

export class DescribeConfigHistoryRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query information about all the clusters that are deployed in a specific region. The information includes the cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1p816075e21****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-08-22T10:06:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in Coordinated Universal Time (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-08-11T06:27:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigHistoryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The change records of the configuration parameters.
   */
  configHistoryItems?: DescribeConfigHistoryResponseBodyConfigHistoryItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configHistoryItems: 'ConfigHistoryItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configHistoryItems: { 'type': 'array', 'itemType': DescribeConfigHistoryResponseBodyConfigHistoryItems },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigHistoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeConfigHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeConfigHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigVersionDifferenceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the change record. You can call the [DescribeConfigHistory](https://help.aliyun.com/document_detail/452209.html) operation to query the ID of the change record.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  changeId?: string;
  /**
   * @remarks
   * The cluster ID. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query information about all the clusters that are deployed in a specific region. The information includes the cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1tm8zf130ew****
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      changeId: 'ChangeId',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeId: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigVersionDifferenceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The values of the configuration parameters after the values of the configuration parameters are changed.
   * 
   * @example
   * "<?xml version="1.0"?>
   * <yandex>
   *     <keep_alive_timeout>400</keep_alive_timeout>
   *     <listen_backlog>4096</listen_backlog>
   *     <logger>
   *         <level>debug</level>
   *         <size>1000M</size>
   *     </logger>
   *     <mark_cache_size>5368709120</mark_cache_size>
   *     <max_concurrent_queries>201</max_concurrent_queries>
   *     <max_connections>4096</max_connections>
   *     <max_partition_size_to_drop>0</max_partition_size_to_drop>
   *     <max_table_size_to_drop>0</max_table_size_to_drop>
   *     <merge_tree>
   *         <max_delay_to_insert>256</max_delay_to_insert>
   *         <max_part_loading_threads>auto</max_part_loading_threads>
   *         <max_suspicious_broken_parts>100</max_suspicious_broken_parts>
   *         <zookeeper_session_expiration_check_period>1</zookeeper_session_expiration_check_period>
   *     </merge_tree>
   *     <uncompressed_cache_size>1717986918</uncompressed_cache_size>
   * </yandex>"
   */
  newConfigXML?: string;
  /**
   * @remarks
   * The values of the configuration parameters before the values of the configuration parameters are changed.
   * 
   * @example
   * "<?xml version="1.0"?>
   * <yandex>
   *     <keep_alive_timeout>300</keep_alive_timeout>
   *     <listen_backlog>4096</listen_backlog>
   *     <logger>
   *         <level>debug</level>
   *         <size>1000M</size>
   *     </logger>
   *     <mark_cache_size>5368709120</mark_cache_size>
   *     <max_concurrent_queries>150</max_concurrent_queries>
   *     <max_connections>4096</max_connections>
   *     <max_partition_size_to_drop>0</max_partition_size_to_drop>
   *     <max_table_size_to_drop>0</max_table_size_to_drop>
   *     <merge_tree>
   *         <max_delay_to_insert>256</max_delay_to_insert>
   *         <max_part_loading_threads>auto</max_part_loading_threads>
   *         <max_suspicious_broken_parts>100</max_suspicious_broken_parts>
   *         <zookeeper_session_expiration_check_period>1</zookeeper_session_expiration_check_period>
   *     </merge_tree>
   *     <uncompressed_cache_size>1717986918</uncompressed_cache_size>
   * </yandex>"
   */
  oldConfigXML?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      newConfigXML: 'NewConfigXML',
      oldConfigXML: 'OldConfigXML',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newConfigXML: 'string',
      oldConfigXML: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigVersionDifferenceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeConfigVersionDifferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeConfigVersionDifferenceResponseBody,
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
   * cc-bp108z124a8o7****
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

export class DescribeDBClusterAccessWhiteListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the IP address whitelist.
   */
  DBClusterAccessWhiteList?: DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 905F13A4-5097-4897-A84D-527EC75FFF4F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterAccessWhiteList: 'DBClusterAccessWhiteList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterAccessWhiteList: DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteList,
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
   * The cluster ID. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query information about all the clusters that are deployed in a specific region. The information includes the cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
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

export class DescribeDBClusterAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the cluster.
   */
  DBCluster?: DescribeDBClusterAttributeResponseBodyDBCluster;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: DescribeDBClusterAttributeResponseBodyDBCluster,
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

export class DescribeDBClusterConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-wz988vja2mor4****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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

export class DescribeDBClusterConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the parameter settings of the cluster.
   * 
   * @example
   * [ { "name": "keep_alive_timeout", "defaultValue": 300, "currentValue": 300, "restart": true, "valueRange": ">0", "desc": "The number of seconds that ClickHouse waits for incoming requests before closing the connection." }, ... ,{ "name": "max_partition_size_to_drop", "defaultValue": 0, "currentValue": 0, "restart": true, "valueRange": ">=0", "desc": "If the size of a MergeTree partition exceeds max_partition_size_to_drop (in bytes), you can’t delete it using a DROP query." } ]
   */
  config?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A23C87D-87DF-4DA0-A50E-CB13F4F7923D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigInXMLRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query information about all the clusters that are deployed in a specific region. The information includes the cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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

export class DescribeDBClusterConfigInXMLResponseBody extends $tea.Model {
  /**
   * @remarks
   * The values of the configuration parameters.
   * 
   * @example
   * <?xml version="1.0"?>
   * <yandex>
   *     <keep_alive_timeout>300</keep_alive_timeout>
   *     <listen_backlog>64</listen_backlog>
   *     <logger>
   *         <level>debug</level>
   *         <size>1000M</size>
   *     </logger>
   *     <mark_cache_size>6871947673</mark_cache_size>
   *     <max_concurrent_queries>100</max_concurrent_queries>
   *     <max_connections>4096</max_connections>
   *     <max_partition_size_to_drop>0</max_partition_size_to_drop>
   *     <max_server_memory_usage>0</max_server_memory_usage>
   * <max_server_memory_usage_to_ram_ratio>0.9</max_server_memory_usage_to_ram_ratio>
   *     <max_table_size_to_drop>0</max_table_size_to_drop>
   *     <max_thread_pool_size>10000</max_thread_pool_size>
   *     <merge_tree>
   *         <max_delay_to_insert>256</max_delay_to_insert>
   *         <max_part_loading_threads>16</max_part_loading_threads>      <zookeeper_session_expiration_check_period>1</zookeeper_session_expiration_check_period>
   *     </merge_tree>
   *     <total_memory_profiler_step>4194304</total_memory_profiler_step>
   * <total_memory_tracker_sample_probability>0</total_memory_tracker_sample_probability>
   *     <uncompressed_cache_size>3435973836</uncompressed_cache_size>
   * </yandex>
   */
  config?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE042911-2B00-134C-9F42-816871BBAFB8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigInXMLResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterConfigInXMLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterConfigInXMLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoItemsRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1qx68m06981****
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

export class DescribeDBClusterNetInfoItemsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The network type of the cluster. Only VPC is supported.
   * 
   * @example
   * VPC
   */
  clusterNetworkType?: string;
  /**
   * @remarks
   * Indicates whether Server Load Balancer (SLB) is activated in the VPC. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableSLB?: boolean;
  /**
   * @remarks
   * The network information about the cluster.
   */
  netInfoItems?: DescribeDBClusterNetInfoItemsResponseBodyNetInfoItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A23C87D-87DF-4DA0-A50E-CB13F4F7923D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterNetworkType: 'ClusterNetworkType',
      enableSLB: 'EnableSLB',
      netInfoItems: 'NetInfoItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNetworkType: 'string',
      enableSLB: 'boolean',
      netInfoItems: DescribeDBClusterNetInfoItemsResponseBodyNetInfoItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterNetInfoItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterNetInfoItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp125e3uu94wo****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time. The interval cannot be more than 32 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-27T16:38Z
   */
  endTime?: string;
  /**
   * @remarks
   * The performance metrics that you want to query. Separate multiple performance metrics with commas (,). You can query up to five performance metrics at a time. You can query the following performance metrics:
   * 
   * >  The **Key** parameter is required.
   * 
   * *   **CPU**:
   * 
   *     *   **CPU_USAGE**: the CPU utilization
   * 
   * *   **Memory**:
   * 
   *     *   **MEM_USAGE**: the memory usage
   *     *   **MEM_USAGE_SIZE**: the used memory. Unit: MB
   * 
   * *   **Disk**:
   * 
   *     *   **DISK_USAGE**: the disk usage
   *     *   **DISK_USAGE_SIZE**: the size of the used disks. Unit: MB
   *     *   **IOPS**: the disk Input/Output Operations per Second (IOPS)
   * 
   * *   **Connection**:
   * 
   *     *   **CONN_USAGE**: the database connection usage
   *     *   **CONN_USAGE_COUNT**: the number of database connections used
   * 
   * *   **Write**:
   * 
   *     *   **TPS**: the number of rows written per second
   *     *   **INSERT_SIZE**: the amount of data written per second. Unit: MB
   * 
   * *   **Query**:
   * 
   *     *   **QPS**: the queries per second
   *     *   **AVG_SEEK**: the average number of random seek calls
   * 
   * *   **WAIT**:
   * 
   *     *   **ZK_WAIT**: the average ZooKeeper wait time. Unit: ms
   *     *   **IO_WAIT**: the average I/O wait time. Unit: ms
   *     *   **CPU_WAIT**: the average CPU wait time. Unit: ms
   * 
   * @example
   * MEM_USAGE
   */
  key?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in Coordinated Universal Time (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-27T16:37Z
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
   * cc-bp125e3uu94wo****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2021-11-27T16:38Z
   */
  endTime?: string;
  /**
   * @remarks
   * The values of the queried performance metrics of the cluster.
   */
  performances?: DescribeDBClusterPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE242962-6DA3-5FC8-9691-37B62A3210F7
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-27T16:37Z
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

export class DescribeDBClustersRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  If you do not specify this parameter, the information about all clusters is queried.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The state of the cluster. Valid values:
   * 
   * *   **Preparing**: The cluster is being prepared.
   * *   **Creating**: The cluster is being created.
   * *   **Running**: The cluster is running.
   * *   **Deleting**: The cluster is being deleted.
   * *   **SCALING_OUT**: The storage capacity of the cluster is being expanded.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  ownerAccount?: string;
  ownerId?: number;
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
   * The number of entries returned per page. Valid values:
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
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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
   * The tags.
   */
  tag?: DescribeDBClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterIds: 'DBClusterIds',
      DBClusterStatus: 'DBClusterStatus',
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
   * The details of the clusters.
   */
  DBClusters?: DescribeDBClustersResponseBodyDBClusters;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values:
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
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusters: 'DBClusters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusters: DescribeDBClustersResponseBodyDBClusters,
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

export class DescribeDBConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-t4nw17nh2e4t2****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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

export class DescribeDBConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The configuration information about the cluster.
   * 
   * @example
   * <dictionaries><dictionary><name>test</name><source><clickhouse><host>10.37.XX.XX</host><port>9000</port><user>default</user><password></password><db>default</db><table>t_organization</table><where>id=1</where><invalidate_query>SQL_QUERY</invalidate_query></clickhouse></source><lifetime><min>31</min><max>33</max></lifetime><layout><flat></flat></layout><structure><key><attribute><name>field1</name><type>String</type></attribute></key></structure></dictionary></dictionaries>
   */
  config?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16060117-92E1-5F3B-BF42-28B172D0F869
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOSSStorageRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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

export class DescribeOSSStorageResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether tiered storage of hot data and cold data is supported. Valid values:
   * 
   * *   **true**: Tiered storage of hot data and cold data is supported.
   * *   **false**: Tiered storage of hot data and cold data is not supported.
   * 
   * @example
   * true
   */
  coldStorage?: boolean;
  /**
   * @remarks
   * The parameters for tiered storage of hot data and cold data.
   * 
   * @example
   * [{ "currentValue":"0.1", "defaultValue":"0.1", "desc":"Ratio of free disk space. When the ratio exceeds the value of configuration parameter, ClickHouse start to move data to the cold storage", "name":"move_factor", "restart":true, "valueRange":"(0, 1]" },{ "currentValue":"true", "defaultValue":"true", "desc":"Disables merging of data parts on cold storage", "name":"prefer_not_to_merge", "restart":true, "valueRange":"true|false" }]
   */
  policy?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * aadbb456-ebf7-4ed8-9671-fad9f3846ca4
   */
  requestId?: string;
  /**
   * @remarks
   * The state of tiered storage of hot data and cold data. Valid values:
   * 
   * *   **CREATING**: Tiered storage of hot data and cold data is being enabled.
   * *   **DISABLE**: Tiered storage of hot data and cold data is not enabled.
   * *   **ENABLE**: Tiered storage of hot data and cold data is enabled.
   * 
   * @example
   * ENABLE
   */
  state?: string;
  /**
   * @remarks
   * The space used for tiered storage of hot data and cold data. Unit: GB.
   * 
   * @example
   * 0.00
   */
  storageUsage?: string;
  static names(): { [key: string]: string } {
    return {
      coldStorage: 'ColdStorage',
      policy: 'Policy',
      requestId: 'RequestId',
      state: 'State',
      storageUsage: 'StorageUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldStorage: 'boolean',
      policy: 'string',
      requestId: 'string',
      state: 'string',
      storageUsage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOSSStorageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOSSStorageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOSSStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query information about all the clusters that are deployed in a specific region. The information includes the cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1190tj036am****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the query statement.
   * 
   * @example
   * 6c69d508-f05f-4c74-857c-d982b7e7e79f
   */
  initialQueryId?: string;
  /**
   * @remarks
   * The account that is used to log on to the database.
   * 
   * @example
   * user
   */
  initialUser?: string;
  /**
   * @remarks
   * The keyword that is used to query.
   * 
   * @example
   * join
   */
  keyword?: string;
  /**
   * @remarks
   * Sorting by the specified column name. Valid values:
   * 
   * *   elapsed: the cumulative execution time
   * *   written_rows: the number of written rows
   * *   read_rows: the number of read rows
   * *   memory_usage: the memory usage
   * 
   * @example
   * elapsed
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
   * The number of entries returned per page. Valid values:
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
   * The minimum query duration. The minimum value is **1000**, and the default value is **1000**. Unit: milliseconds. Queries that last longer than this duration are returned in response parameters.
   * 
   * @example
   * 500
   */
  queryDurationMs?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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
      initialQueryId: 'InitialQueryId',
      initialUser: 'InitialUser',
      keyword: 'Keyword',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryDurationMs: 'QueryDurationMs',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      initialQueryId: 'string',
      initialUser: 'string',
      keyword: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryDurationMs: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queries.
   */
  processList?: DescribeProcessListResponseBodyProcessList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FD61BB0D-788A-5185-A8E3-1B90BA8F6F04
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      processList: 'ProcessList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processList: DescribeProcessListResponseBodyProcessList,
      requestId: 'string',
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
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * F5178C10-1407-4987-9133-DE4DC9119F75
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

export class DescribeSchemasRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
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
   * The information about the databases of the cluster.
   */
  items?: DescribeSchemasResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
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
   * The cluster ID. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query information about all the clusters that are deployed in a specific region. The information includes the cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1z58t881wcx****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-dd hh:mm:ss format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time. The specified time range that can be specified must be less than seven days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-05-27 16:00:00
   */
  endTime?: string;
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
   * The minimum query duration. The minimum value is **1000**, and the default value is **1000**. Unit: milliseconds. Queries that last longer than this duration are returned in response parameters.
   * 
   * @example
   * 1000
   */
  queryDurationMs?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-dd hh:mm:ss format. The time must be in Coordinated Universal Time (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-05-20 16:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryDurationMs: 'QueryDurationMs',
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
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryDurationMs: 'number',
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

export class DescribeSlowLogRecordsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DF203CC8-5F68-5E3F-8050-3C77DD65731A
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the slow query logs.
   */
  slowLogRecords?: DescribeSlowLogRecordsResponseBodySlowLogRecords;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slowLogRecords: 'SlowLogRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slowLogRecords: DescribeSlowLogRecordsResponseBodySlowLogRecords,
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

export class DescribeSynDbTablesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp158i5wvj436****
   */
  dbClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * database
   */
  synDb?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      synDb: 'SynDb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      synDb: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynDbTablesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 851D11EA-681C-5B38-A065-C3F90BBD49DE
   */
  requestId?: string;
  /**
   * @remarks
   * The queried tables.
   */
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynDbTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSynDbTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSynDbTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynDbsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1ab22b80814****
   */
  dbClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
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
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynDbsResponseBody extends $tea.Model {
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7655F5F9-1313-5ABA-8516-F6EB79605A5F
   */
  requestId?: string;
  /**
   * @remarks
   * The information about data synchronization between the ApsaraDB for ClickHouse cluster and an ApsaraDB RDS for MySQL instance.
   */
  synDbs?: DescribeSynDbsResponseBodySynDbs[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      synDbs: 'SynDbs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      synDbs: { 'type': 'array', 'itemType': DescribeSynDbsResponseBodySynDbs },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynDbsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSynDbsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSynDbsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The database name.
   * 
   * This parameter is required.
   * 
   * @example
   * database
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
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
   * The information about the tables.
   */
  items?: DescribeTablesResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
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

export class DescribeTransferHistoryRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
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

export class DescribeTransferHistoryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The migration information.
   */
  historyDetails?: DescribeTransferHistoryResponseBodyHistoryDetails;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      historyDetails: 'HistoryDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyDetails: DescribeTransferHistoryResponseBodyHistoryDetails,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferHistoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTransferHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTransferHistoryResponseBody,
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
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The query statement or query statements that you want to stop executing. If you want to stop executing multiple query statements, separate the statements with commas (,).
   * 
   * >  If you do not set this parameter, all query statements are stopped by default.
   * 
   * @example
   * SELECT * FROM `test01` ;
   */
  initialQueryId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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
      initialQueryId: 'InitialQueryId',
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
      initialQueryId: 'string',
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

export class KillProcessResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
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

export class ModifyAccountAuthorityRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The databases to which you want to grant permissions. Separate databases with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * db1
   */
  allowDatabases?: string;
  /**
   * @remarks
   * The dictionaries to which you want to grant permissions. Separate dictionaries with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * dt1
   */
  allowDictionaries?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to grant DDL permissions to the database account. Valid values:
   * 
   * *   **true**: grants DDL permissions to the database account.
   * *   **false**: does not grant DDL permissions to the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  ddlAuthority?: boolean;
  /**
   * @remarks
   * Specifies whether to grant DML permissions to the database account. Valid values:
   * 
   * *   **all**
   * *   **readonly,modify**
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  dmlAuthority?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * All databases. Separate databases with commas (,).
   * 
   * @example
   * db1,db2
   */
  totalDatabases?: string;
  /**
   * @remarks
   * All dictionaries. Separate dictionaries with commas (,).
   * 
   * @example
   * dt1,dt2
   */
  totalDictionaries?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      allowDatabases: 'AllowDatabases',
      allowDictionaries: 'AllowDictionaries',
      DBClusterId: 'DBClusterId',
      ddlAuthority: 'DdlAuthority',
      dmlAuthority: 'DmlAuthority',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      totalDatabases: 'TotalDatabases',
      totalDictionaries: 'TotalDictionaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      allowDatabases: 'string',
      allowDictionaries: 'string',
      DBClusterId: 'string',
      ddlAuthority: 'boolean',
      dmlAuthority: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      totalDatabases: 'string',
      totalDictionaries: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountAuthorityResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
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

export class ModifyAccountAuthorityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccountAuthorityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAccountAuthorityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ceshi
   */
  accountDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
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
  /**
   * @remarks
   * The retention period for the backup data. Valid values: 7 to 730. Unit: day.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The day of a week when the system regularly backs up data. If you specify multiple days of a week, separate them with commas (,). Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * This parameter is required.
   * 
   * @example
   * Monday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup window. Specify the time in the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time must be in Coordinated Universal Time (UTC).
   * 
   * For example, if you set the backup window to 00:00Z-01:00Z, the data of the cluster can be backed up from 08:00 (UTC+8) to 09:00 (UTC+8).
   * 
   * This parameter is required.
   * 
   * @example
   * 15:00Z-16:00Z
   */
  preferredBackupTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      DBClusterId: 'DBClusterId',
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
   * The request ID.
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
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

export class ModifyDBClusterRequest extends $tea.Model {
  /**
   * @remarks
   * The specifications of the cluster.
   * 
   * *   Valid values when the cluster is of Single-replica Edition:
   * 
   *     *   **S4-NEW**
   *     *   **S8**
   *     *   **S16**
   *     *   **S32**
   *     *   **S64**
   *     *   **S104**
   * 
   * *   Valid values when the cluster is of Double-replica Edition:
   * 
   *     *   **C4-NEW**
   *     *   **C8**
   *     *   **C16**
   *     *   **C32**
   *     *   **C64**
   *     *   **C104**
   * 
   * This parameter is required.
   * 
   * @example
   * S4-NEW
   */
  DBClusterClass?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp19lo45sy98x****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The number of nodes in the cluster.
   * 
   * *   If the cluster is of Single-replica Edition, the value must be an integer that ranges from 1 to 48.
   * *   If the cluster is of Double-replica Edition, the value must be an integer that ranges from 1 to 24.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  DBNodeGroupCount?: string;
  /**
   * @remarks
   * The storage capacity of a single node of the cluster. Unit: GB.
   * 
   * Valid values: 100 to 32000.
   * 
   * >  This value is a multiple of 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  DBNodeStorage?: string;
  dbNodeStorageType?: string;
  disableWriteWindows?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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
      DBClusterClass: 'DBClusterClass',
      DBClusterId: 'DBClusterId',
      DBNodeGroupCount: 'DBNodeGroupCount',
      DBNodeStorage: 'DBNodeStorage',
      dbNodeStorageType: 'DbNodeStorageType',
      disableWriteWindows: 'DisableWriteWindows',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterClass: 'string',
      DBClusterId: 'string',
      DBNodeGroupCount: 'string',
      DBNodeStorage: 'string',
      dbNodeStorageType: 'string',
      disableWriteWindows: 'string',
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

export class ModifyDBClusterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the cluster.
   */
  DBCluster?: ModifyDBClusterResponseBodyDBCluster;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BA30A000-3A4D-5B97-9420-E5D0D49F7016
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: ModifyDBClusterResponseBodyDBCluster,
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
   * @example
   * NULL
   */
  DBClusterIPArrayAttribute?: string;
  /**
   * @example
   * default
   */
  DBClusterIPArrayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * 192.168.xx.xx
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
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
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

export class ModifyDBClusterConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query information about all the clusters that are deployed in a specific region. The information includes the cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1t9lbb7a4z7****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The reason for the change.
   * 
   * @example
   * test
   */
  reason?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The names of the parameters and the new values that you want to specify for the parameters.
   * 
   * >  You can change the value of a single parameter. The values of parameters that are not specified will not be changed.
   * 
   * This parameter is required.
   * 
   * @example
   * {"keep_alive_timeout":"301"}
   */
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      reason: 'Reason',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      reason: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A9AA1E0A-2AEE-5847-87CF-E4FDC0E66052
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

export class ModifyDBClusterConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBClusterConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterConfigInXMLRequest extends $tea.Model {
  /**
   * @remarks
   * The configuration parameters whose settings you want to modify. You can call the [DescribeDBClusterConfigInXML](https://help.aliyun.com/document_detail/452210.html) operation to query configuration parameters, and modify the settings of the returned configuration parameters.
   * 
   * > You must specify all configuration parameters even when you want to modify the setting of a single parameter. If a configuration parameter is not specified, the original value of this parameter is retained or the modification fails.
   * 
   * This parameter is required.
   * 
   * @example
   * <?xml version="1.0"?>
   * <yandex>
   *     <keep_alive_timeout>400</keep_alive_timeout>
   *     <listen_backlog>4096</listen_backlog>
   *     <logger>
   *         <level>debug</level>
   *         <size>1000M</size>
   *     </logger>
   *     <mark_cache_size>5368709120</mark_cache_size>
   *     <max_concurrent_queries>201</max_concurrent_queries>
   *     <max_connections>4096</max_connections>
   *     <max_partition_size_to_drop>0</max_partition_size_to_drop>
   *     <max_table_size_to_drop>0</max_table_size_to_drop>
   *     <merge_tree>
   *         <max_delay_to_insert>256</max_delay_to_insert>
   *         <max_part_loading_threads>auto</max_part_loading_threads>
   *         <max_suspicious_broken_parts>100</max_suspicious_broken_parts>
   *         <zookeeper_session_expiration_check_period>1</zookeeper_session_expiration_check_period>
   *     </merge_tree>
   *     <uncompressed_cache_size>1717986918</uncompressed_cache_size>
   * </yandex>
   */
  config?: string;
  /**
   * @remarks
   * The cluster ID. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query information about all the clusters that are deployed in a specific region. The information includes the cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The reason for the modification.
   * 
   * @example
   * test
   */
  reason?: string;
  /**
   * @remarks
   * The region ID of the cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      DBClusterId: 'DBClusterId',
      reason: 'Reason',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      DBClusterId: 'string',
      reason: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterConfigInXMLResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BDD29EB1-BE76-5CFA-9068-D34B696310BF
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

export class ModifyDBClusterConfigInXMLResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterConfigInXMLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBClusterConfigInXMLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterDescriptionRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster name. When you set the cluster name, take note of the following rules:
   * 
   * *   The cluster name cannot start with http:// or https://.
   * *   The cluster name must be 2 to 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * ClusterDescriptionTest
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
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
   * The request ID.
   * 
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
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
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The maintenance window of the cluster. Specify the time in the HH:mmZ-HH:mmZ format. The time must be in Coordinated Universal Time (UTC).
   * 
   * For example, a value of 00:00Z-01:00Z indicates that routine maintenance can be performed on the cluster from 08:00 (UTC+8) to 09:00 (UTC+8).
   * 
   * >  You can set the start time and end time of the maintenance window to the time on the hour, and the maintenance window is 1 hour.
   * 
   * This parameter is required.
   * 
   * @example
   * 00:00Z-01:00Z
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
   * 05321590-BB65-4720-8CB6-8218E041CDD0
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

export class ModifyDBConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The dictionary configuration.
   * 
   * @example
   * {"name":"test"}
   */
  config?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1r59y779o04****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
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
      config: 'string',
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

export class ModifyDBConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BF3844B6-1B12-57A0-A259-476D2079EE83
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

export class ModifyDBConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMinorVersionGreadeTypeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  maintainAutoType?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      maintainAutoType: 'MaintainAutoType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      maintainAutoType: 'boolean',
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

export class ModifyMinorVersionGreadeTypeResponseBody extends $tea.Model {
  /**
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
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

export class ModifyMinorVersionGreadeTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMinorVersionGreadeTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyMinorVersionGreadeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRDSToClickhouseDbRequest extends $tea.Model {
  /**
   * @remarks
   * The password of the account that is used to log on to the database in the ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456Aa
   */
  ckPassword?: string;
  /**
   * @remarks
   * The account that is used to log on to the database in the ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * user1
   */
  ckUserName?: string;
  /**
   * @remarks
   * The port number of the ApsaraDB for ClickHouse cluster.
   * 
   * @example
   * 8123
   */
  clickhousePort?: number;
  /**
   * @remarks
   * The ID of the ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp158i5wvj436****
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The maximum number of rows that can be synchronized per second.
   * 
   * @example
   * 50000
   */
  limitUpper?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6x3qq4t90ok****
   */
  rdsId?: string;
  /**
   * @remarks
   * The password of the account that is used to log on to the database in the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456Rr
   */
  rdsPassword?: string;
  /**
   * @remarks
   * The port number of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * 3306
   */
  rdsPort?: number;
  /**
   * @remarks
   * The database in the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * database
   */
  rdsSynDb?: string;
  /**
   * @remarks
   * The table in the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * table
   */
  rdsSynTables?: string;
  /**
   * @remarks
   * The account that is used to log on to the database in the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * user2
   */
  rdsUserName?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the ApsaraDB RDS for MySQL instance belongs.
   * 
   * @example
   * vpc-bp1v9dtwmqqjhwwg****
   */
  rdsVpcId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to ignore databases that do not support synchronization. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  skipUnsupported?: boolean;
  static names(): { [key: string]: string } {
    return {
      ckPassword: 'CkPassword',
      ckUserName: 'CkUserName',
      clickhousePort: 'ClickhousePort',
      dbClusterId: 'DbClusterId',
      limitUpper: 'LimitUpper',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      rdsId: 'RdsId',
      rdsPassword: 'RdsPassword',
      rdsPort: 'RdsPort',
      rdsSynDb: 'RdsSynDb',
      rdsSynTables: 'RdsSynTables',
      rdsUserName: 'RdsUserName',
      rdsVpcId: 'RdsVpcId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      skipUnsupported: 'SkipUnsupported',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ckPassword: 'string',
      ckUserName: 'string',
      clickhousePort: 'number',
      dbClusterId: 'string',
      limitUpper: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      rdsId: 'string',
      rdsPassword: 'string',
      rdsPort: 'number',
      rdsSynDb: 'string',
      rdsSynTables: 'string',
      rdsUserName: 'string',
      rdsVpcId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      skipUnsupported: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRDSToClickhouseDbResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errorCode?: number;
  /**
   * @remarks
   * *   If the value **1** is returned for the **Status** parameter, the system does not return the ErrorMsg parameter.
   * *   If the value **0** is returned for the **Status** parameter, the ErrorMsg parameter returns the cause for the modification failure.
   * 
   * @example
   * ClickHouse exception, code: 49, host: 100.100.118.132, port: 49670; Code: 49, e.displayText() = DB::Exception: Logical error: there is no global context (version 20.8.17.25)n
   */
  errorMsg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 746CD303-0B82-5E8D-886D-93A9FAF3A876
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the modification was successful. Valid values:
   * 
   * *   **1**: The modification was successful.
   * *   **0**: The modification failed.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMsg: 'string',
      requestId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRDSToClickhouseDbResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyRDSToClickhouseDbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyRDSToClickhouseDbResponseBody,
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
   * cc-bp108z124a8o7****
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
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
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
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The new password for the database account.
   * 
   * > 
   * 
   * *   The password must contain at least three types of the following characters: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * *   The password can contain the following special characters: ! @ # $ % ^ & \\* ( ) _ + - =
   * *   The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456Ff
   */
  accountPassword?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
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
   * The request ID.
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

export class RestartInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query information about all the clusters that are deployed in a specific region. The information includes the cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
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
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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
   * The scheduled restart time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in Coordinated Universal Time (UTC).
   * 
   * >  If this parameter is left empty or the time specified by this parameter is earlier than the current time, the cluster is immediately restarted.
   * 
   * @example
   * 2023-03-22T00:00:50Z
   */
  restartTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restartTime: 'RestartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
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

export class TransferVersionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the source ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1tm8zf130ew****
   */
  DBClusterId?: string;
  disableWriteWindows?: string;
  ownerAccount?: string;
  ownerId?: number;
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
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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
   * The database account that is used to log on to the database in the source ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  sourceAccount?: string;
  /**
   * @remarks
   * The password that corresponds to the database account for logging on to the database in the source ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456Aa
   */
  sourcePassword?: string;
  /**
   * @remarks
   * The database account that is used to log on to the database in the destination ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test01
   */
  targetAccount?: string;
  /**
   * @remarks
   * The ID of the destination ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp14b39djx7zg****
   */
  targetDbClusterId?: string;
  /**
   * @remarks
   * The password that corresponds to the database account for logging on to the database in the destination ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456Ff
   */
  targetPassword?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      disableWriteWindows: 'DisableWriteWindows',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceAccount: 'SourceAccount',
      sourcePassword: 'SourcePassword',
      targetAccount: 'TargetAccount',
      targetDbClusterId: 'TargetDbClusterId',
      targetPassword: 'TargetPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      disableWriteWindows: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceAccount: 'string',
      sourcePassword: 'string',
      targetAccount: 'string',
      targetDbClusterId: 'string',
      targetPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferVersionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7084CDB5-308F-5D0B-8F9B-5F7D83E09738
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

export class TransferVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransferVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TransferVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMinorVersionRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to update the minor engine version of the ApsaraDB for ClickHouse cluster immediately. Valid values:
   * 
   * *   **true**: updates the minor engine version of the ApsaraDB for ClickHouse cluster immediately.
   * *   **false**: updates the minor engine version of the ApsaraDB for ClickHouse cluster at the specified time or within the specified maintenance window.
   * 
   * >  If you want to update the minor engine version of the ApsaraDB for ClickHouse cluster at the specified time, **UpgradeTime** is required.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  upgradeImmediately?: boolean;
  /**
   * @remarks
   * The update time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in Coordinated Universal Time (UTC).
   * 
   * >  If you do not set this parameter, the minor engine version of an ApsaraDB for ClickHouse cluster is updated within the specified maintenance window.
   * 
   * @example
   * 2022-08-07T16:38Z
   */
  upgradeTime?: string;
  /**
   * @remarks
   * The minor engine version to which you want to update.
   * 
   * >  By default, UpgradeVersion is not set and the minor engine version of the ApsaraDB for ClickHouse cluster is updated to the latest version.
   * 
   * @example
   * 1.37.0
   */
  upgradeVersion?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      upgradeImmediately: 'UpgradeImmediately',
      upgradeTime: 'UpgradeTime',
      upgradeVersion: 'UpgradeVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      upgradeImmediately: 'boolean',
      upgradeTime: 'string',
      upgradeVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMinorVersionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE242962-6DA3-5FC8-9691-37B62A3210F7
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

export class CheckScaleOutBalancedResponseBodyTableDetailsTableDetail extends $tea.Model {
  /**
   * @remarks
   * The cluster. The value is fixed as **default**.
   * 
   * @example
   * default
   */
  cluster?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * db_name
   */
  database?: string;
  /**
   * @remarks
   * The error details. Valid values:
   * 
   * *   **1**: The unique distributed table is missing.
   * *   **2**: More than one distributed table exists for the local table.
   * 
   * @example
   * 1
   */
  detail?: number;
  /**
   * @remarks
   * The name of the local table.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      database: 'Database',
      detail: 'Detail',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      database: 'string',
      detail: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckScaleOutBalancedResponseBodyTableDetails extends $tea.Model {
  tableDetail?: CheckScaleOutBalancedResponseBodyTableDetailsTableDetail[];
  static names(): { [key: string]: string } {
    return {
      tableDetail: 'TableDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableDetail: { 'type': 'array', 'itemType': CheckScaleOutBalancedResponseBodyTableDetailsTableDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsAccount extends $tea.Model {
  /**
   * @example
   * test
   */
  accountDescription?: string;
  /**
   * @example
   * test
   */
  accountName?: string;
  /**
   * @example
   * Creating
   */
  accountStatus?: string;
  /**
   * @example
   * Super
   */
  accountType?: string;
  configType?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
      configType: 'ConfigType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      accountType: 'string',
      configType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccounts extends $tea.Model {
  account?: DescribeAccountsResponseBodyAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsAccount },
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
   * The column name.
   * 
   * @example
   * name
   */
  columnName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp108z124a8o7****
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
   * true
   */
  primaryKey?: boolean;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database
   */
  schemaName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table
   */
  tableName?: string;
  /**
   * @remarks
   * The type of the column.
   * 
   * @example
   * String
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
   * The cluster ID.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database
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
   * The cluster ID.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database
   */
  schemaName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table
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

export class DescribeAllDataSourcesResponseBodyColumnsColumn extends $tea.Model {
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
   * The column name.
   * 
   * @example
   * name
   */
  columnName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Indicates whether the column is the primary key of the table. Valid values:
   * 
   * *   **true**: The column is the primary key of the table.
   * *   **false**: The column is not the primary key of the table.
   * 
   * @example
   * true
   */
  primaryKey?: boolean;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database
   */
  schemaName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table
   */
  tableName?: string;
  /**
   * @remarks
   * The column type.
   * 
   * @example
   * String
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

export class DescribeAllDataSourcesResponseBodyColumns extends $tea.Model {
  column?: DescribeAllDataSourcesResponseBodyColumnsColumn[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: { 'type': 'array', 'itemType': DescribeAllDataSourcesResponseBodyColumnsColumn },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourcesResponseBodySchemasSchema extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database
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

export class DescribeAllDataSourcesResponseBodySchemas extends $tea.Model {
  schema?: DescribeAllDataSourcesResponseBodySchemasSchema[];
  static names(): { [key: string]: string } {
    return {
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schema: { 'type': 'array', 'itemType': DescribeAllDataSourcesResponseBodySchemasSchema },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourcesResponseBodyTablesTable extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database
   */
  schemaName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table
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

export class DescribeAllDataSourcesResponseBodyTables extends $tea.Model {
  table?: DescribeAllDataSourcesResponseBodyTablesTable[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': DescribeAllDataSourcesResponseBodyTablesTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyItems extends $tea.Model {
  /**
   * @example
   * 2021-11-22T18:28:41Z
   */
  backupEndTime?: string;
  /**
   * @example
   * 117403****
   */
  backupId?: string;
  /**
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @example
   * {"shard_count"：4}
   */
  backupSetInfo?: string;
  /**
   * @example
   * 131072
   */
  backupSize?: number;
  /**
   * @example
   * 2021-11-22T18:28:22Z
   */
  backupStartTime?: string;
  /**
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @example
   * IncrementalBackup
   */
  backupType?: string;
  /**
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @example
   * 2022-07-22T18:28:41Z
   */
  expireDate?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
      backupSetInfo: 'BackupSetInfo',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      DBClusterId: 'DBClusterId',
      expireDate: 'ExpireDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupId: 'string',
      backupMethod: 'string',
      backupSetInfo: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      DBClusterId: 'string',
      expireDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponseBodyItemsColumn extends $tea.Model {
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
   * The column name.
   * 
   * @example
   * name
   */
  columnName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-2zeux3ua25242****
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
   * true
   */
  primaryKey?: boolean;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database
   */
  schemaName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table
   */
  tableName?: string;
  /**
   * @remarks
   * The column type.
   * 
   * @example
   * String
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

export class DescribeConfigHistoryResponseBodyConfigHistoryItems extends $tea.Model {
  /**
   * @remarks
   * The ID of the change record.
   * 
   * @example
   * 1
   */
  changeId?: string;
  /**
   * @remarks
   * The user ID (UID) of the Alibaba Cloud account.
   * 
   * @example
   * 253460731706911258
   */
  ownerId?: string;
  /**
   * @remarks
   * The reason for the setting modification of the configuration parameters.
   * 
   * @example
   * test
   */
  reason?: string;
  /**
   * @remarks
   * Indicates whether the setting modification of the configuration parameters took effect. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The time when the values of the configuration parameters were changed. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-22T10:00:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      changeId: 'ChangeId',
      ownerId: 'OwnerId',
      reason: 'Reason',
      success: 'Success',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeId: 'string',
      ownerId: 'string',
      reason: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteListIPArray extends $tea.Model {
  /**
   * @remarks
   * The attribute of the IP address whitelist.
   * 
   * @example
   * default
   */
  DBClusterIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist.
   * 
   * @example
   * default
   */
  DBClusterIPArrayName?: string;
  /**
   * @remarks
   * The IP addresses in the IP address whitelist.
   * 
   * @example
   * 192.168.xx.xx,192.168.xx.xx
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

export class DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteList extends $tea.Model {
  IPArray?: DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteListIPArray[];
  static names(): { [key: string]: string } {
    return {
      IPArray: 'IPArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPArray: { 'type': 'array', 'itemType': DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteListIPArray },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyDBClusterScaleOutStatus extends $tea.Model {
  /**
   * @remarks
   * The progress of the data migration task in percentage.
   * 
   * >  This parameter is returned only when the cluster is in the SCALING_OUT state.
   * 
   * @example
   * 0
   */
  progress?: string;
  /**
   * @remarks
   * The progress of the data migration task. This value is displayed in the following format: Data volume that has been migrated/Total data volume.
   * 
   * >  This parameter is returned only when the cluster is in the SCALING_OUT state.
   * 
   * @example
   * 0MB/60469MB
   */
  ratio?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      ratio: 'Ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'string',
      ratio: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyDBClusterTagsTag extends $tea.Model {
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * department
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * it
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

export class DescribeDBClusterAttributeResponseBodyDBClusterTags extends $tea.Model {
  tag?: DescribeDBClusterAttributeResponseBodyDBClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyDBClusterTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyDBCluster extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 140692647406****
   */
  aliUid?: string;
  /**
   * @remarks
   * The scheduled restart time. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2023-11-06T12:00:00Z
   */
  appointmentRestartTime?: string;
  availableUpgradeMajorVersion?: { [key: string]: any };
  /**
   * @remarks
   * The site ID. Valid values:
   * 
   * *   **26842**: the China site (aliyun.com)
   * *   **26888**: the international site (alibabacloud.com)
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **Basic**: Single-replica Edition
   * *   **HighAvailability**: Double-replica Edition
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * The commodity code of the cluster.
   * 
   * @example
   * clickhouse_go_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The VPC endpoint of the cluster.
   * 
   * @example
   * cc-bp1qx68m06981****.ads.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The version of the ApsaraDB for ClickHouse console that is used to manage the cluster. Valid values:
   * 
   * *   **v1**
   * *   **v2**
   * 
   * @example
   * v1
   */
  controlVersion?: string;
  /**
   * @remarks
   * The time when the cluster was created. The value is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-13T11:33:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The network type of the cluster. Only VPC is supported.
   * 
   * @example
   * vpc
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The cluster state. Valid values:
   * 
   * *   **Preparing**: The cluster is being prepared.
   * *   **Creating**: The cluster is being created.
   * *   **Running**: The cluster is running.
   * *   **Deleting**: The cluster is being deleted.
   * *   **SCALING_OUT**: The storage capacity of the cluster is being expanded.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   **Common**: a common cluster
   * *   **Readonly**: a read-only cluster
   * *   **Guard**: a disaster recovery cluster
   * 
   * @example
   * Common
   */
  DBClusterType?: string;
  /**
   * @remarks
   * The specifications of the cluster.
   * 
   * *   Valid values when the cluster is of Single-replica Edition:
   * 
   *     *   **S4-NEW**
   *     *   **S8**
   *     *   **S16**
   *     *   **S32**
   *     *   **S64**
   *     *   **S104**
   * 
   * *   Valid values when the cluster is of Double-replica Edition:
   * 
   *     *   **C4-NEW**
   *     *   **C8**
   *     *   **C16**
   *     *   **C32**
   *     *   **C64**
   *     *   **C104**
   * 
   * @example
   * C8
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * *   Valid values when the cluster is of Single-replica Edition: 1 to 48.
   * *   Valid values when the cluster is of Double-replica Edition: 1 to 24.
   * 
   * @example
   * 1
   */
  DBNodeCount?: number;
  /**
   * @remarks
   * The storage capacity of a single node of the cluster. Unit: GB.
   * 
   * Valid values: 100 to 32000.
   * 
   * >  This value is a multiple of 100.
   * 
   * @example
   * 100
   */
  DBNodeStorage?: number;
  /**
   * @remarks
   * The Key Management Service (KMS) key that is used to encrypt data.
   * 
   * >  If the value of the EncryptionType parameter is off, an empty string is returned for this parameter.
   * 
   * @example
   * 685f416f-87c9-4554-8d3a-75b6ce25****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption type. Valid values:
   * 
   * *   **CloudDisk**: Disk encryption is enabled.
   * *   **off**: Data is not encrypted.
   * 
   * @example
   * CloudDisk
   */
  encryptionType?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * ClickHouse
   */
  engine?: string;
  /**
   * @remarks
   * The latest minor version to which the cluster can be updated.
   * 
   * @example
   * 1.34.0
   */
  engineLatestMinorVersion?: string;
  /**
   * @remarks
   * The current minor version.
   * 
   * @example
   * 1.6.0
   */
  engineMinorVersion?: string;
  /**
   * @remarks
   * The engine version.
   * 
   * @example
   * 21.8.10.19
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the cluster expired. The time is in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * >  Pay-as-you-go clusters never expire. If the cluster is a pay-as-you-go cluster, an empty string is returned for this parameter.
   * 
   * @example
   * 2022-11-11T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The extended storage space. Unit: GB.
   * 
   * @example
   * 500
   */
  extStorageSize?: number;
  /**
   * @remarks
   * The extended storage type. Valid values:
   * 
   * *   **CloudESSD**: The cluster uses an enhanced SSD (ESSD) of performance level (PL) 1.
   * *   **CloudESSD_PL2**: The cluster uses an ESSD of PL 2.
   * *   **CloudESSD_PL3**: The cluster uses an ESSD of PL 3.
   * *   **CloudEfficiency**: The cluster uses an ultra disk.
   * 
   * @example
   * CloudESSD
   */
  extStorageType?: string;
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
  isExpired?: string;
  /**
   * @remarks
   * The lock mode of the cluster. Valid values:
   * 
   * *   **Unlock**: The cluster is not locked.
   * *   **ManualLock**: The cluster is manually locked.
   * *   **LockByExpiration**: The cluster is automatically locked due to cluster expiration.
   * *   **LockByRestoration**: The cluster is automatically locked because the cluster is about to be rolled back.
   * *   **LockByDiskQuota**: The cluster is automatically locked because the disk space is exhausted.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The cause why the cluster was locked.
   * 
   * >  If the value of the LockMode parameter is Unlock, an empty string is returned for this parameter.
   * 
   * @example
   * DISK_FULL
   */
  lockReason?: string;
  /**
   * @remarks
   * The update type. If the value of the parameter is **false**, it indicates a manual update.
   * 
   * @example
   * false
   */
  maintainAutoType?: boolean;
  /**
   * @remarks
   * The maintenance window of the cluster. The value is in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
   * 
   * For example, if you set the maintenance window to 00:00Z-01:00Z, the cluster can be maintained from 08:00 (UTC+8) to 09:00 (UTC+8).
   * 
   * @example
   * 00:00Z-01:00Z
   */
  maintainTime?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: indicates the pay-as-you-go billing method.
   * *   **Prepaid**: indicates the subscription billing method.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The HTTP port number.
   * 
   * @example
   * 8123
   */
  port?: number;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * cc-bp1199ya710s7****.public.clickhouse.ads.aliyuncs.com
   */
  publicConnectionString?: string;
  /**
   * @remarks
   * The IP address that is used to connect to the cluster over the Internet.
   * 
   * @example
   * 121.40.xx.xx
   */
  publicIpAddr?: string;
  /**
   * @remarks
   * The TCP port number in the public endpoint.
   * 
   * @example
   * 3306
   */
  publicPort?: string;
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmyf65je6****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the data migration task.
   */
  scaleOutStatus?: DescribeDBClusterAttributeResponseBodyDBClusterScaleOutStatus;
  /**
   * @remarks
   * The storage type of the cluster. Valid values:
   * 
   * *   **CloudESSD**: The cluster uses an enhanced SSD (ESSD) of performance level (PL) 1.
   * *   **CloudESSD_PL2**: The cluster uses an ESSD of PL 2.
   * *   **CloudESSD_PL3**: The cluster uses an ESSD of PL 3.
   * *   **CloudEfficiency**: The cluster uses an ultra disk.
   * 
   * @example
   * CloudESSD
   */
  storageType?: string;
  /**
   * @remarks
   * Indicates whether data backup is supported. Valid values:
   * 
   * *   **1**: Data backup is supported.
   * *   **2**: Data backup is not supported.
   * 
   * @example
   * 1
   */
  supportBackup?: number;
  /**
   * @remarks
   * Indicates whether HTTPS ports are supported. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  supportHttpsPort?: boolean;
  /**
   * @remarks
   * Indicates whether the cluster supports a MySQL port. Valid values:
   * 
   * *   **true**: A MySQL port is supported.
   * *   **false**: A MySQL port is not supported.
   * 
   * @example
   * false
   */
  supportMysqlPort?: boolean;
  /**
   * @remarks
   * Indicates whether tiered storage of hot data and cold data is supported. Valid values:
   * 
   * *   **1**: Tiered storage of hot data and cold data is supported.
   * *   **2**: Tiered storage of hot data and cold data is not supported.
   * 
   * @example
   * 1
   */
  supportOss?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeDBClusterAttributeResponseBodyDBClusterTags;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1n874li1t5y57wi****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC in which the cluster is deployed.
   * 
   * @example
   * vpc-bp10tr8k9qasioaty****
   */
  vpcCloudInstanceId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-bp10tr8k9qasioaty****
   */
  vpcId?: string;
  /**
   * @remarks
   * The IP address that is used to connect to the cluster over the VPC.
   * 
   * @example
   * 192.168.xx.xx
   */
  vpcIpAddr?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  /**
   * @remarks
   * The list of vSwitch IDs in multi-zone clusters.
   * 
   * @example
   * cn-shanghai-f: vsw-zm0n42d5vvuo****
   */
  zoneIdVswitchMap?: { [key: string]: any };
  /**
   * @remarks
   * The ZooKeeper specifications.
   * 
   * @example
   * 4 Core 8 GB
   */
  zookeeperClass?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      appointmentRestartTime: 'AppointmentRestartTime',
      availableUpgradeMajorVersion: 'AvailableUpgradeMajorVersion',
      bid: 'Bid',
      category: 'Category',
      commodityCode: 'CommodityCode',
      connectionString: 'ConnectionString',
      controlVersion: 'ControlVersion',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBClusterType: 'DBClusterType',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DBNodeStorage: 'DBNodeStorage',
      encryptionKey: 'EncryptionKey',
      encryptionType: 'EncryptionType',
      engine: 'Engine',
      engineLatestMinorVersion: 'EngineLatestMinorVersion',
      engineMinorVersion: 'EngineMinorVersion',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      extStorageSize: 'ExtStorageSize',
      extStorageType: 'ExtStorageType',
      isExpired: 'IsExpired',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainAutoType: 'MaintainAutoType',
      maintainTime: 'MaintainTime',
      payType: 'PayType',
      port: 'Port',
      publicConnectionString: 'PublicConnectionString',
      publicIpAddr: 'PublicIpAddr',
      publicPort: 'PublicPort',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scaleOutStatus: 'ScaleOutStatus',
      storageType: 'StorageType',
      supportBackup: 'SupportBackup',
      supportHttpsPort: 'SupportHttpsPort',
      supportMysqlPort: 'SupportMysqlPort',
      supportOss: 'SupportOss',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      vpcIpAddr: 'VpcIpAddr',
      zoneId: 'ZoneId',
      zoneIdVswitchMap: 'ZoneIdVswitchMap',
      zookeeperClass: 'ZookeeperClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      appointmentRestartTime: 'string',
      availableUpgradeMajorVersion: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      bid: 'string',
      category: 'string',
      commodityCode: 'string',
      connectionString: 'string',
      controlVersion: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBClusterType: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodeStorage: 'number',
      encryptionKey: 'string',
      encryptionType: 'string',
      engine: 'string',
      engineLatestMinorVersion: 'string',
      engineMinorVersion: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      extStorageSize: 'number',
      extStorageType: 'string',
      isExpired: 'string',
      lockMode: 'string',
      lockReason: 'string',
      maintainAutoType: 'boolean',
      maintainTime: 'string',
      payType: 'string',
      port: 'number',
      publicConnectionString: 'string',
      publicIpAddr: 'string',
      publicPort: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scaleOutStatus: DescribeDBClusterAttributeResponseBodyDBClusterScaleOutStatus,
      storageType: 'string',
      supportBackup: 'number',
      supportHttpsPort: 'boolean',
      supportMysqlPort: 'boolean',
      supportOss: 'number',
      tags: DescribeDBClusterAttributeResponseBodyDBClusterTags,
      vSwitchId: 'string',
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      vpcIpAddr: 'string',
      zoneId: 'string',
      zoneIdVswitchMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      zookeeperClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoItemsResponseBodyNetInfoItemsNetInfoItem extends $tea.Model {
  /**
   * @remarks
   * The endpoint that is used to connect to the database.
   * 
   * @example
   * cc-bp1554t789i8e****.clickhouse.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The HTTP port number.
   * 
   * @example
   * 8123
   */
  httpPort?: string;
  /**
   * @remarks
   * The HTTPS port number.
   * 
   * @example
   * 8443
   */
  httpsPort?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 10.255.234.251
   */
  IPAddress?: string;
  /**
   * @remarks
   * The port number that is used in Java Database Connectivity (JDBC).
   * 
   * @example
   * 3306
   */
  jdbcPort?: string;
  /**
   * @remarks
   * The port of the MySQL instance.
   * 
   * @example
   * 9004
   */
  mySQLPort?: string;
  /**
   * @remarks
   * The network type of the endpoint. Valid values:
   * 
   * *   Public: public endpoint
   * *   VPC: VPC
   * 
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * >  If the value of the NetType parameter is set to Public, an empty string is returned.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * >  If the value of the NetType parameter is set to Public, an empty string is returned.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      httpPort: 'HttpPort',
      httpsPort: 'HttpsPort',
      IPAddress: 'IPAddress',
      jdbcPort: 'JdbcPort',
      mySQLPort: 'MySQLPort',
      netType: 'NetType',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      httpPort: 'string',
      httpsPort: 'string',
      IPAddress: 'string',
      jdbcPort: 'string',
      mySQLPort: 'string',
      netType: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoItemsResponseBodyNetInfoItems extends $tea.Model {
  netInfoItem?: DescribeDBClusterNetInfoItemsResponseBodyNetInfoItemsNetInfoItem[];
  static names(): { [key: string]: string } {
    return {
      netInfoItem: 'NetInfoItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netInfoItem: { 'type': 'array', 'itemType': DescribeDBClusterNetInfoItemsResponseBodyNetInfoItemsNetInfoItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformancesSeriesValues extends $tea.Model {
  /**
   * @remarks
   * The values of a metric.
   */
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

export class DescribeDBClusterPerformanceResponseBodyPerformancesSeries extends $tea.Model {
  /**
   * @remarks
   * The name of the list of performance metric values.
   * 
   * @example
   * cc-bp125e3uu94wo1s0k16****
   */
  name?: string;
  /**
   * @remarks
   * The values of the performance parameter. Each value of the performance parameter is collected at a point in time.
   */
  values?: DescribeDBClusterPerformanceResponseBodyPerformancesSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformancesSeriesValues },
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
   * MEM_USAGE
   */
  key?: string;
  /**
   * @remarks
   * The name of the performance metric value.
   * 
   * @example
   * mem_usage
   */
  name?: string;
  /**
   * @remarks
   * The queried performance pamaters.
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
      name: 'Name',
      series: 'Series',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      name: 'string',
      series: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformancesSeries },
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * department
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * it
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

export class DescribeDBClustersResponseBodyDBClustersDBClusterScaleOutStatus extends $tea.Model {
  /**
   * @remarks
   * The progress of the data migration task in percentage.
   * 
   * >  This parameter is returned only when the cluster is in the SCALING_OUT state.
   * 
   * @example
   * 0
   */
  progress?: string;
  /**
   * @remarks
   * The progress of the data migration task. This value is displayed in the following format: Data volume that has been migrated/Total data volume.
   * 
   * >  This parameter is returned only when the cluster is in the SCALING_OUT state.
   * 
   * @example
   * 0MB/60469MB
   */
  ratio?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      ratio: 'Ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'string',
      ratio: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyDBClustersDBClusterTagsTag extends $tea.Model {
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * department
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * it
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

export class DescribeDBClustersResponseBodyDBClustersDBClusterTags extends $tea.Model {
  tag?: DescribeDBClustersResponseBodyDBClustersDBClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyDBClustersDBClusterTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyDBClustersDBCluster extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 140692647406****
   */
  aliUid?: string;
  /**
   * @remarks
   * The site ID. Valid values:
   * 
   * *   **26842**: the China site (aliyun.com)
   * *   **26888**: the international site (alibabacloud.com)
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **Basic**: Single-replica Edition
   * *   **HighAvailability**: Double-replica Edition
   * 
   * @example
   * Basic
   */
  category?: string;
  /**
   * @remarks
   * The commodity code of the cluster.
   * 
   * @example
   * clickhouse_go_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The VPC endpoint of the cluster.
   * 
   * @example
   * cc-bp1fs5o051c61****.clickhouse.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The version number of the backend management system of ApsaraDB for ClickHouse. Valid values:
   * 
   * *   **v1**
   * *   **v2**
   * 
   * @example
   * v1
   */
  controlVersion?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2021-10-28T07:24:45Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The network type of the cluster. Only VPC is supported.
   * 
   * @example
   * VPC
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The state of the cluster. Valid values:
   * 
   * *   **Preparing**: The cluster is being prepared.
   * *   **Creating**: The cluster is being created.
   * *   **Running**: The cluster is running.
   * *   **Deleting**: The cluster is being deleted.
   * *   **SCALING_OUT**: The storage capacity of the cluster is being expanded.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The specifications of the cluster.
   * 
   * *   Valid values when the cluster is of Single-replica Edition: -**S4**: 4 CPU cores and 16 GB of memory -**S8**: 8 CPU cores and 32 GB of memory
   * 
   *     *   **S16**: 16 CPU cores and 64 GB of memory
   *     *   **S32**: 32 CPU cores and 128 GB of memory
   *     *   **S64**: 64 CPU cores and 256 GB of memory
   *     *   **S104**: 104 CPU cores and 384 GB of memory
   * 
   * *   Valid values when the cluster is of Double-replica Edition: -**C4**: 4 CPU cores and 16 GB of memory -**C8**: 8 CPU cores and 32 GB of memory -**C16**: 16 CPU cores and 64 GB of memory -**C32**: 32 CPU cores and 128 GB of memory -**C64**: 64 CPU cores and 256 GB of memory -**C104**: 104 CPU cores and 384 GB of memory
   * 
   * @example
   * C8
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * *   Valid values when the cluster is of Single-replica Edition: 1 to 48.
   * *   Valid values when the cluster is of Double-replica Edition: 1 to 24.
   * 
   * @example
   * 2
   */
  DBNodeCount?: number;
  /**
   * @remarks
   * The storage capacity of each node. Valid values: 100 to 32000. Unit: GB.
   * 
   * >  This value is a multiple of 100.
   * 
   * @example
   * 100
   */
  DBNodeStorage?: number;
  dbVersion?: string;
  /**
   * @remarks
   * The time when the cluster expired. The time is in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * >  Pay-as-you-go clusters never expire. If the cluster is a pay-as-you-go cluster, an empty string is returned for this parameter.
   * 
   * @example
   * 2011-05-30T12:11:4Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The extended storage space.
   * 
   * @example
   * 100GB
   */
  extStorageSize?: number;
  /**
   * @remarks
   * The extended storage type. Valid values:
   * 
   * *   **CloudSSD**: standard SSD.
   * *   **CloudESSD**: The cluster uses an enhanced SSD (ESSD) of performance level (PL) 1.
   * *   **CloudESSD_PL2**: The cluster uses an ESSD of PL 2.
   * *   **CloudESSD_PL3**: The cluster uses an ESSD of PL 3.
   * *   **CloudEfficiency**: The cluster uses an ultra disk.
   * 
   * @example
   * CloudESSD
   */
  extStorageType?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired. Valid values:
   * 
   * *   **true**: The cluster has expired.
   * *   **false**: The cluster has not expired.
   * 
   * @example
   * false
   */
  isExpired?: string;
  /**
   * @remarks
   * The lock mode of the cluster. Valid values:
   * 
   * *   **Unlock**: The cluster is not locked.
   * *   **ManualLock**: The cluster is manually locked.
   * *   **LockByExpiration**: The cluster is automatically locked due to cluster expiration.
   * *   **LockByRestoration**: The cluster is automatically locked because the cluster is about to be rolled back.
   * *   **LockByDiskQuota**: The cluster is automatically locked because the disk space is exhausted.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The cause why the cluster was locked.
   * 
   * >  If the value of the LockMode parameter is Unlock, an empty string is returned for this parameter.
   * 
   * @example
   * DISK_FULL
   */
  lockReason?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: The cluster uses the pay-as-you-go billing method.
   * *   **Prepaid**: The cluster uses the subscription billing method.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The HTTP port number.
   * 
   * @example
   * 8123
   */
  port?: number;
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
   * The ID of the resource group to which the cluster belongs.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  scaleOutDisableWriteWindows?: string;
  /**
   * @remarks
   * The status of a data migration task.
   */
  scaleOutStatus?: DescribeDBClustersResponseBodyDBClustersDBClusterScaleOutStatus;
  /**
   * @remarks
   * The storage type of the cluster. Valid values:
   * 
   * *   **CloudESSD**: The cluster uses an enhanced SSD (ESSD) of performance level (PL) 1.
   * *   **CloudESSD_PL2**: The cluster uses an ESSD of PL 2.
   * *   **CloudESSD_PL3**: The cluster uses an ESSD of PL 3.
   * *   **CloudEfficiency**: The cluster uses an ultra disk.
   * 
   * @example
   * CloudESSD
   */
  storageType?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeDBClustersResponseBodyDBClustersDBClusterTags;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC in which the cluster is deployed.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcCloudInstanceId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the cluster is deployed.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcId?: string;
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
      aliUid: 'AliUid',
      bid: 'Bid',
      category: 'Category',
      commodityCode: 'CommodityCode',
      connectionString: 'ConnectionString',
      controlVersion: 'ControlVersion',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DBNodeStorage: 'DBNodeStorage',
      dbVersion: 'DbVersion',
      expireTime: 'ExpireTime',
      extStorageSize: 'ExtStorageSize',
      extStorageType: 'ExtStorageType',
      isExpired: 'IsExpired',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      payType: 'PayType',
      port: 'Port',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scaleOutDisableWriteWindows: 'ScaleOutDisableWriteWindows',
      scaleOutStatus: 'ScaleOutStatus',
      storageType: 'StorageType',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bid: 'string',
      category: 'string',
      commodityCode: 'string',
      connectionString: 'string',
      controlVersion: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodeStorage: 'number',
      dbVersion: 'string',
      expireTime: 'string',
      extStorageSize: 'number',
      extStorageType: 'string',
      isExpired: 'string',
      lockMode: 'string',
      lockReason: 'string',
      payType: 'string',
      port: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      scaleOutDisableWriteWindows: 'string',
      scaleOutStatus: DescribeDBClustersResponseBodyDBClustersDBClusterScaleOutStatus,
      storageType: 'string',
      tags: DescribeDBClustersResponseBodyDBClustersDBClusterTags,
      vSwitchId: 'string',
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyDBClusters extends $tea.Model {
  DBCluster?: DescribeDBClustersResponseBodyDBClustersDBCluster[];
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyDBClustersDBCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBodyProcessListDataResultSet extends $tea.Model {
  /**
   * @remarks
   * The IP address of the client that initiates the query.
   * 
   * @example
   * ::ffff:10.1.XX.XX
   */
  initialAddress?: string;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * 2dd144fd-4230-4249-b15c-e63f964fbb5a
   */
  initialQueryId?: string;
  /**
   * @remarks
   * The database account.
   * 
   * @example
   * test
   */
  initialUser?: string;
  /**
   * @remarks
   * The SQL statement that is executed in the query.
   * 
   * @example
   * select * from test order by score limit 1;
   */
  query?: string;
  /**
   * @remarks
   * The execution duration of the query. Unit: milliseconds.
   * 
   * @example
   * 2000
   */
  queryDurationMs?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2021-02-02T09:14:48Z
   */
  queryStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      initialAddress: 'InitialAddress',
      initialQueryId: 'InitialQueryId',
      initialUser: 'InitialUser',
      query: 'Query',
      queryDurationMs: 'QueryDurationMs',
      queryStartTime: 'QueryStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initialAddress: 'string',
      initialQueryId: 'string',
      initialUser: 'string',
      query: 'string',
      queryDurationMs: 'string',
      queryStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBodyProcessListData extends $tea.Model {
  resultSet?: DescribeProcessListResponseBodyProcessListDataResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeProcessListResponseBodyProcessListDataResultSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBodyProcessListStatistics extends $tea.Model {
  /**
   * @remarks
   * The size of the data that was scanned. Unit: bytes.
   * 
   * @example
   * 9141300000
   */
  bytesRead?: number;
  /**
   * @remarks
   * The average response time.
   * 
   * @example
   * 4156
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The number of scanned rows.
   * 
   * @example
   * 1000000
   */
  rowsRead?: number;
  static names(): { [key: string]: string } {
    return {
      bytesRead: 'BytesRead',
      elapsedTime: 'ElapsedTime',
      rowsRead: 'RowsRead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesRead: 'number',
      elapsedTime: 'number',
      rowsRead: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBodyProcessListTableSchemaResultSet extends $tea.Model {
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * InitialUser
   */
  name?: string;
  /**
   * @remarks
   * The column type.
   * 
   * @example
   * String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBodyProcessListTableSchema extends $tea.Model {
  resultSet?: DescribeProcessListResponseBodyProcessListTableSchemaResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeProcessListResponseBodyProcessListTableSchemaResultSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBodyProcessList extends $tea.Model {
  /**
   * @remarks
   * The details of the query.
   */
  data?: DescribeProcessListResponseBodyProcessListData;
  /**
   * @remarks
   * The number of rows returned for the query.
   * 
   * @example
   * 1145700
   */
  rows?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  rowsBeforeLimitAtLeast?: string;
  /**
   * @remarks
   * The statistics of the results.
   */
  statistics?: DescribeProcessListResponseBodyProcessListStatistics;
  /**
   * @remarks
   * Details of the columns.
   */
  tableSchema?: DescribeProcessListResponseBodyProcessListTableSchema;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      rows: 'Rows',
      rowsBeforeLimitAtLeast: 'RowsBeforeLimitAtLeast',
      statistics: 'Statistics',
      tableSchema: 'TableSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeProcessListResponseBodyProcessListData,
      rows: 'string',
      rowsBeforeLimitAtLeast: 'string',
      statistics: DescribeProcessListResponseBodyProcessListStatistics,
      tableSchema: DescribeProcessListResponseBodyProcessListTableSchema,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegionZonesZone extends $tea.Model {
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
   * The zones.
   */
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

export class DescribeSchemasResponseBodyItemsSchema extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database
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

export class DescribeSlowLogRecordsResponseBodySlowLogRecordsDataResultSet extends $tea.Model {
  /**
   * @remarks
   * The IP address of the client that initiated the query.
   * 
   * @example
   * ::ffff:100.104.XX.XX
   */
  initialAddress?: string;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * \\"b51496f2-6b0b-4546-aff9-e17951cb9410\\"
   */
  initialQueryId?: string;
  /**
   * @remarks
   * The username that is used to initiate the query.
   * 
   * @example
   * test_users
   */
  initialUser?: string;
  /**
   * @remarks
   * The peak memory usage for the query. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  memoryUsage?: string;
  /**
   * @remarks
   * The statement that was executed in the query.
   * 
   * @example
   * Select * from table
   */
  query?: string;
  /**
   * @remarks
   * The duration of the query. Unit: milliseconds.
   * 
   * @example
   * 2000
   */
  queryDurationMs?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The time is in the yyyy-MM-dd hh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-05-22 20:00:01
   */
  queryStartTime?: string;
  /**
   * @remarks
   * The size of the data read by executing the statement. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  readBytes?: string;
  /**
   * @remarks
   * The number of rows read by executing the statement.
   * 
   * @example
   * 10027008
   */
  readRows?: string;
  /**
   * @remarks
   * The size of the result data. Unit: bytes.
   * 
   * @example
   * 1024
   */
  resultBytes?: string;
  /**
   * @remarks
   * The query status. Valid values:
   * 
   * *   **QueryFinish**: The query is complete.
   * *   **Processing**: The query is running.
   * 
   * @example
   * QueryFinish
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      initialAddress: 'InitialAddress',
      initialQueryId: 'InitialQueryId',
      initialUser: 'InitialUser',
      memoryUsage: 'MemoryUsage',
      query: 'Query',
      queryDurationMs: 'QueryDurationMs',
      queryStartTime: 'QueryStartTime',
      readBytes: 'ReadBytes',
      readRows: 'ReadRows',
      resultBytes: 'ResultBytes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initialAddress: 'string',
      initialQueryId: 'string',
      initialUser: 'string',
      memoryUsage: 'string',
      query: 'string',
      queryDurationMs: 'string',
      queryStartTime: 'string',
      readBytes: 'string',
      readRows: 'string',
      resultBytes: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodySlowLogRecordsData extends $tea.Model {
  resultSet?: DescribeSlowLogRecordsResponseBodySlowLogRecordsDataResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodySlowLogRecordsDataResultSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodySlowLogRecordsStatistics extends $tea.Model {
  /**
   * @remarks
   * The total size of data that were read. Unit: bytes.
   * 
   * @example
   * 123456
   */
  bytesRead?: number;
  /**
   * @remarks
   * The time consumed by the slow query. Unit: milliseconds.
   * 
   * @example
   * 21.35
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The total number of rows that were read.
   * 
   * @example
   * 2016722
   */
  rowsRead?: number;
  static names(): { [key: string]: string } {
    return {
      bytesRead: 'BytesRead',
      elapsedTime: 'ElapsedTime',
      rowsRead: 'RowsRead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesRead: 'number',
      elapsedTime: 'number',
      rowsRead: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchemaResultSet extends $tea.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The type of the column.
   * 
   * @example
   * String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchema extends $tea.Model {
  resultSet?: DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchemaResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchemaResultSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodySlowLogRecords extends $tea.Model {
  /**
   * @remarks
   * Details about the slow query logs.
   */
  data?: DescribeSlowLogRecordsResponseBodySlowLogRecordsData;
  /**
   * @remarks
   * The number of rows in the result set.
   * 
   * @example
   * 1
   */
  rows?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  rowsBeforeLimitAtLeast?: string;
  /**
   * @remarks
   * The statistics of the results.
   */
  statistics?: DescribeSlowLogRecordsResponseBodySlowLogRecordsStatistics;
  /**
   * @remarks
   * The schema of the table in the database.
   */
  tableSchema?: DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchema;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      rows: 'Rows',
      rowsBeforeLimitAtLeast: 'RowsBeforeLimitAtLeast',
      statistics: 'Statistics',
      tableSchema: 'TableSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeSlowLogRecordsResponseBodySlowLogRecordsData,
      rows: 'string',
      rowsBeforeLimitAtLeast: 'string',
      statistics: DescribeSlowLogRecordsResponseBodySlowLogRecordsStatistics,
      tableSchema: DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchema,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynDbsResponseBodySynDbs extends $tea.Model {
  /**
   * @remarks
   * *   When the value **true** is returned for the **SynStatus** parameter, the system does not return the ErrorMsg parameter.
   * *   When the value **false** is returned for the **SynStatus** parameter, the system returns for the ErrorMsg parameter the cause why the data synchronization failed.
   * 
   * @example
   * ClickHouse exception, code: 49, host: 100.100.118.132, port: 49670; Code: 49, e.displayText() = DB::Exception: Logical error: there is no global context (version 20.8.17.25)n
   */
  errorMsg?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * rm-wz9d11qg1j0h4****
   */
  rdsId?: string;
  /**
   * @remarks
   * The database account that is used to log on to the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * test
   */
  rdsUserName?: string;
  /**
   * @remarks
   * The internal endpoint of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * rm-bp16t9h3999xb0a711****.mysql.rds.aliyuncs.com:3306
   */
  rdsVpcUrl?: string;
  /**
   * @remarks
   * The name of the database in the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * database
   */
  synDb?: string;
  /**
   * @remarks
   * Indicates whether the data synchronization succeeded. Valid values:
   * 
   * *   **true**: The data synchronization succeeded.
   * *   **false**: The data synchronization failed.
   * 
   * @example
   * true
   */
  synStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      rdsId: 'RdsId',
      rdsUserName: 'RdsUserName',
      rdsVpcUrl: 'RdsVpcUrl',
      synDb: 'SynDb',
      synStatus: 'SynStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      rdsId: 'string',
      rdsUserName: 'string',
      rdsVpcUrl: 'string',
      synDb: 'string',
      synStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBodyItemsTable extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database
   */
  schemaName?: string;
  /**
   * @remarks
   * The table name.
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

export class DescribeTransferHistoryResponseBodyHistoryDetailsHistoryDetail extends $tea.Model {
  /**
   * **if can be null:**
   * false
   */
  disableWriteWindows?: string;
  /**
   * @remarks
   * The progress of the data migration.
   * 
   * @example
   * 100%
   */
  progress?: string;
  sourceControlVersion?: string;
  /**
   * @remarks
   * The ID of the source cluster.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  sourceDBCluster?: string;
  /**
   * @remarks
   * The status of the data migration task. Valid values:
   * 
   * *   **Finished**: The data migration task is complete.
   * *   **Processing**: The data migration task is in progress.
   * 
   * @example
   * Finished
   */
  status?: string;
  targetControlVersion?: string;
  /**
   * @remarks
   * The ID of the destination cluster.
   * 
   * @example
   * cc-bp13zkh9uw523****
   */
  targetDBCluster?: string;
  static names(): { [key: string]: string } {
    return {
      disableWriteWindows: 'DisableWriteWindows',
      progress: 'Progress',
      sourceControlVersion: 'SourceControlVersion',
      sourceDBCluster: 'SourceDBCluster',
      status: 'Status',
      targetControlVersion: 'TargetControlVersion',
      targetDBCluster: 'TargetDBCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableWriteWindows: 'string',
      progress: 'string',
      sourceControlVersion: 'string',
      sourceDBCluster: 'string',
      status: 'string',
      targetControlVersion: 'string',
      targetDBCluster: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferHistoryResponseBodyHistoryDetails extends $tea.Model {
  historyDetail?: DescribeTransferHistoryResponseBodyHistoryDetailsHistoryDetail[];
  static names(): { [key: string]: string } {
    return {
      historyDetail: 'HistoryDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyDetail: { 'type': 'array', 'itemType': DescribeTransferHistoryResponseBodyHistoryDetailsHistoryDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResponseBodyDBCluster extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp19lo45sy98x****
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 21417210003****
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'dbClusterId',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      orderId: 'string',
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
      'ap-northeast-2-pop': "clickhouse.aliyuncs.com",
      'ap-southeast-1': "clickhouse.aliyuncs.com",
      'cn-beijing': "clickhouse.aliyuncs.com",
      'cn-beijing-finance-1': "clickhouse.aliyuncs.com",
      'cn-beijing-finance-pop': "clickhouse.aliyuncs.com",
      'cn-beijing-gov-1': "clickhouse.aliyuncs.com",
      'cn-beijing-nu16-b01': "clickhouse.aliyuncs.com",
      'cn-edge-1': "clickhouse.aliyuncs.com",
      'cn-fujian': "clickhouse.aliyuncs.com",
      'cn-haidian-cm12-c01': "clickhouse.aliyuncs.com",
      'cn-hangzhou': "clickhouse.aliyuncs.com",
      'cn-hangzhou-bj-b01': "clickhouse.aliyuncs.com",
      'cn-hangzhou-finance': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "clickhouse.aliyuncs.com",
      'cn-hangzhou-test-306': "clickhouse.aliyuncs.com",
      'cn-hongkong': "clickhouse.aliyuncs.com",
      'cn-hongkong-finance-pop': "clickhouse.aliyuncs.com",
      'cn-north-2-gov-1': "clickhouse.aliyuncs.com",
      'cn-qingdao': "clickhouse.aliyuncs.com",
      'cn-qingdao-nebula': "clickhouse.aliyuncs.com",
      'cn-shanghai': "clickhouse.aliyuncs.com",
      'cn-shanghai-et15-b01': "clickhouse.aliyuncs.com",
      'cn-shanghai-et2-b01': "clickhouse.aliyuncs.com",
      'cn-shanghai-finance-1': "clickhouse.aliyuncs.com",
      'cn-shanghai-inner': "clickhouse.aliyuncs.com",
      'cn-shanghai-internal-test-1': "clickhouse.aliyuncs.com",
      'cn-shenzhen': "clickhouse.aliyuncs.com",
      'cn-shenzhen-finance-1': "clickhouse.aliyuncs.com",
      'cn-shenzhen-inner': "clickhouse.aliyuncs.com",
      'cn-shenzhen-st4-d01': "clickhouse.aliyuncs.com",
      'cn-shenzhen-su18-b01': "clickhouse.aliyuncs.com",
      'cn-wuhan': "clickhouse.aliyuncs.com",
      'cn-yushanfang': "clickhouse.aliyuncs.com",
      'cn-zhangbei-na61-b01': "clickhouse.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "clickhouse.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "clickhouse.aliyuncs.com",
      'eu-west-1-oxs': "clickhouse.aliyuncs.com",
      'me-east-1': "clickhouse.aliyuncs.com",
      'rus-west-1-pop': "clickhouse.aliyuncs.com",
      'us-east-1': "clickhouse.aliyuncs.com",
      'us-west-1': "clickhouse.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("clickhouse", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates a public endpoint for an ApsaraDB for ClickHouse cluster.
   * 
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
      version: "2019-11-11",
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
   * Creates a public endpoint for an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - AllocateClusterPublicConnectionRequest
   * @returns AllocateClusterPublicConnectionResponse
   */
  async allocateClusterPublicConnection(request: AllocateClusterPublicConnectionRequest): Promise<AllocateClusterPublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateClusterPublicConnectionWithOptions(request, runtime);
  }

  /**
   * Checks the connectivity between an ApsaraDB for ClickHouse cluster and an ApsaraDB RDS for MySQL instance.
   * 
   * @param request - CheckClickhouseToRDSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckClickhouseToRDSResponse
   */
  async checkClickhouseToRDSWithOptions(request: CheckClickhouseToRDSRequest, runtime: $Util.RuntimeOptions): Promise<CheckClickhouseToRDSResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ckPassword)) {
      query["CkPassword"] = request.ckPassword;
    }

    if (!Util.isUnset(request.ckUserName)) {
      query["CkUserName"] = request.ckUserName;
    }

    if (!Util.isUnset(request.clickhousePort)) {
      query["ClickhousePort"] = request.clickhousePort;
    }

    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.rdsId)) {
      query["RdsId"] = request.rdsId;
    }

    if (!Util.isUnset(request.rdsPassword)) {
      query["RdsPassword"] = request.rdsPassword;
    }

    if (!Util.isUnset(request.rdsPort)) {
      query["RdsPort"] = request.rdsPort;
    }

    if (!Util.isUnset(request.rdsUserName)) {
      query["RdsUserName"] = request.rdsUserName;
    }

    if (!Util.isUnset(request.rdsVpcId)) {
      query["RdsVpcId"] = request.rdsVpcId;
    }

    if (!Util.isUnset(request.rdsVpcUrl)) {
      query["RdsVpcUrl"] = request.rdsVpcUrl;
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
      action: "CheckClickhouseToRDS",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckClickhouseToRDSResponse>(await this.callApi(params, req, runtime), new CheckClickhouseToRDSResponse({}));
  }

  /**
   * Checks the connectivity between an ApsaraDB for ClickHouse cluster and an ApsaraDB RDS for MySQL instance.
   * 
   * @param request - CheckClickhouseToRDSRequest
   * @returns CheckClickhouseToRDSResponse
   */
  async checkClickhouseToRDS(request: CheckClickhouseToRDSRequest): Promise<CheckClickhouseToRDSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkClickhouseToRDSWithOptions(request, runtime);
  }

  /**
   * Queries whether an ApsaraDB for ClickHouse cluster needs to be restarted after you change the values of the configuration parameters in XML mode.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - CheckModifyConfigNeedRestartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckModifyConfigNeedRestartResponse
   */
  async checkModifyConfigNeedRestartWithOptions(request: CheckModifyConfigNeedRestartRequest, runtime: $Util.RuntimeOptions): Promise<CheckModifyConfigNeedRestartResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckModifyConfigNeedRestart",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckModifyConfigNeedRestartResponse>(await this.callApi(params, req, runtime), new CheckModifyConfigNeedRestartResponse({}));
  }

  /**
   * Queries whether an ApsaraDB for ClickHouse cluster needs to be restarted after you change the values of the configuration parameters in XML mode.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - CheckModifyConfigNeedRestartRequest
   * @returns CheckModifyConfigNeedRestartResponse
   */
  async checkModifyConfigNeedRestart(request: CheckModifyConfigNeedRestartRequest): Promise<CheckModifyConfigNeedRestartResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkModifyConfigNeedRestartWithOptions(request, runtime);
  }

  /**
   * Checks whether the monitoring and alerting feature that is provided by Application Real-Time Monitoring Service (ARMS) is enabled for an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - CheckMonitorAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckMonitorAlertResponse
   */
  async checkMonitorAlertWithOptions(request: CheckMonitorAlertRequest, runtime: $Util.RuntimeOptions): Promise<CheckMonitorAlertResponse> {
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
      action: "CheckMonitorAlert",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckMonitorAlertResponse>(await this.callApi(params, req, runtime), new CheckMonitorAlertResponse({}));
  }

  /**
   * Checks whether the monitoring and alerting feature that is provided by Application Real-Time Monitoring Service (ARMS) is enabled for an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - CheckMonitorAlertRequest
   * @returns CheckMonitorAlertResponse
   */
  async checkMonitorAlert(request: CheckMonitorAlertRequest): Promise<CheckMonitorAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMonitorAlertWithOptions(request, runtime);
  }

  /**
   * Performs migration and scale-out detection on an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - CheckScaleOutBalancedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckScaleOutBalancedResponse
   */
  async checkScaleOutBalancedWithOptions(request: CheckScaleOutBalancedRequest, runtime: $Util.RuntimeOptions): Promise<CheckScaleOutBalancedResponse> {
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
      action: "CheckScaleOutBalanced",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckScaleOutBalancedResponse>(await this.callApi(params, req, runtime), new CheckScaleOutBalancedResponse({}));
  }

  /**
   * Performs migration and scale-out detection on an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - CheckScaleOutBalancedRequest
   * @returns CheckScaleOutBalancedResponse
   */
  async checkScaleOutBalanced(request: CheckScaleOutBalancedRequest): Promise<CheckScaleOutBalancedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkScaleOutBalancedWithOptions(request, runtime);
  }

  /**
   * Queries the service-linked role of ApsaraDB for ClickHouse.
   * 
   * @param request - CheckServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckServiceLinkedRoleResponse
   */
  async checkServiceLinkedRoleWithOptions(request: CheckServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CheckServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "CheckServiceLinkedRole",
      version: "2019-11-11",
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

  /**
   * Queries the service-linked role of ApsaraDB for ClickHouse.
   * 
   * @param request - CheckServiceLinkedRoleRequest
   * @returns CheckServiceLinkedRoleResponse
   */
  async checkServiceLinkedRole(request: CheckServiceLinkedRoleRequest): Promise<CheckServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * Creates a database account for an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Creates a database account for an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * 创建账号及权限
   * 
   * @param request - CreateAccountAndAuthorityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountAndAuthorityResponse
   */
  async createAccountAndAuthorityWithOptions(request: CreateAccountAndAuthorityRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccountAndAuthorityResponse> {
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

    if (!Util.isUnset(request.allowDatabases)) {
      query["AllowDatabases"] = request.allowDatabases;
    }

    if (!Util.isUnset(request.allowDictionaries)) {
      query["AllowDictionaries"] = request.allowDictionaries;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ddlAuthority)) {
      query["DdlAuthority"] = request.ddlAuthority;
    }

    if (!Util.isUnset(request.dmlAuthority)) {
      query["DmlAuthority"] = request.dmlAuthority;
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

    if (!Util.isUnset(request.totalDatabases)) {
      query["TotalDatabases"] = request.totalDatabases;
    }

    if (!Util.isUnset(request.totalDictionaries)) {
      query["TotalDictionaries"] = request.totalDictionaries;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccountAndAuthority",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAccountAndAuthorityResponse>(await this.callApi(params, req, runtime), new CreateAccountAndAuthorityResponse({}));
  }

  /**
   * 创建账号及权限
   * 
   * @param request - CreateAccountAndAuthorityRequest
   * @returns CreateAccountAndAuthorityResponse
   */
  async createAccountAndAuthority(request: CreateAccountAndAuthorityRequest): Promise<CreateAccountAndAuthorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountAndAuthorityWithOptions(request, runtime);
  }

  /**
   * Creates a backup policy.
   * 
   * @remarks
   * >  This operation is available only for the ApsaraDB for ClickHouse clusters of versions 20.3, 20.8, and 21.8.
   * 
   * @param request - CreateBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupPolicyResponse
   */
  async createBackupPolicyWithOptions(request: CreateBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
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

    if (!Util.isUnset(request.preferredBackupPeriod)) {
      query["PreferredBackupPeriod"] = request.preferredBackupPeriod;
    }

    if (!Util.isUnset(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
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
      action: "CreateBackupPolicy",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBackupPolicyResponse>(await this.callApi(params, req, runtime), new CreateBackupPolicyResponse({}));
  }

  /**
   * Creates a backup policy.
   * 
   * @remarks
   * >  This operation is available only for the ApsaraDB for ClickHouse clusters of versions 20.3, 20.8, and 21.8.
   * 
   * @param request - CreateBackupPolicyRequest
   * @returns CreateBackupPolicyResponse
   */
  async createBackupPolicy(request: CreateBackupPolicyRequest): Promise<CreateBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Creates an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - CreateDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstanceResponse
   */
  async createDBInstanceWithOptions(request: CreateDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.backupSetID)) {
      query["BackupSetID"] = request.backupSetID;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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

    if (!Util.isUnset(request.dbNodeStorageType)) {
      query["DbNodeStorageType"] = request.dbNodeStorageType;
    }

    if (!Util.isUnset(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!Util.isUnset(request.encryptionType)) {
      query["EncryptionType"] = request.encryptionType;
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

    if (!Util.isUnset(request.sourceDBClusterId)) {
      query["SourceDBClusterId"] = request.sourceDBClusterId;
    }

    if (!Util.isUnset(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!Util.isUnset(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!Util.isUnset(request.vSwitchBak)) {
      query["VSwitchBak"] = request.vSwitchBak;
    }

    if (!Util.isUnset(request.vSwitchBak2)) {
      query["VSwitchBak2"] = request.vSwitchBak2;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.zondIdBak2)) {
      query["ZondIdBak2"] = request.zondIdBak2;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!Util.isUnset(request.zoneIdBak)) {
      query["ZoneIdBak"] = request.zoneIdBak;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDBInstance",
      version: "2019-11-11",
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
   * Creates an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - CreateDBInstanceRequest
   * @returns CreateDBInstanceResponse
   */
  async createDBInstance(request: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a monitoring data report for an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - CreateMonitorDataReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorDataReportResponse
   */
  async createMonitorDataReportWithOptions(request: CreateMonitorDataReportRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorDataReportResponse> {
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
      action: "CreateMonitorDataReport",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMonitorDataReportResponse>(await this.callApi(params, req, runtime), new CreateMonitorDataReportResponse({}));
  }

  /**
   * Creates a monitoring data report for an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - CreateMonitorDataReportRequest
   * @returns CreateMonitorDataReportResponse
   */
  async createMonitorDataReport(request: CreateMonitorDataReportRequest): Promise<CreateMonitorDataReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorDataReportWithOptions(request, runtime);
  }

  /**
   * Creates a storage task for cold data.
   * 
   * @remarks
   * Only an ApsaraDB for ClickHouse cluster of V20.8 or later supports tiered storage of hot data and cold data. If your data is in an ApsaraDB for ClickHouse cluster of a version earlier than V20.8 and you want to use tiered storage of hot data and cold data to store the data, you can migrate the data to an ApsaraDB for ClickHouse cluster of V20.8 or later and use tiered storage of hot data and cold data. For more information about how to migrate data between ApsaraDB for ClickHouse clusters, see [Migrate data between ApsaraDB for ClickHouse clusters](https://help.aliyun.com/document_detail/276926.html).
   * 
   * @param request - CreateOSSStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOSSStorageResponse
   */
  async createOSSStorageWithOptions(request: CreateOSSStorageRequest, runtime: $Util.RuntimeOptions): Promise<CreateOSSStorageResponse> {
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
      action: "CreateOSSStorage",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOSSStorageResponse>(await this.callApi(params, req, runtime), new CreateOSSStorageResponse({}));
  }

  /**
   * Creates a storage task for cold data.
   * 
   * @remarks
   * Only an ApsaraDB for ClickHouse cluster of V20.8 or later supports tiered storage of hot data and cold data. If your data is in an ApsaraDB for ClickHouse cluster of a version earlier than V20.8 and you want to use tiered storage of hot data and cold data to store the data, you can migrate the data to an ApsaraDB for ClickHouse cluster of V20.8 or later and use tiered storage of hot data and cold data. For more information about how to migrate data between ApsaraDB for ClickHouse clusters, see [Migrate data between ApsaraDB for ClickHouse clusters](https://help.aliyun.com/document_detail/276926.html).
   * 
   * @param request - CreateOSSStorageRequest
   * @returns CreateOSSStorageResponse
   */
  async createOSSStorage(request: CreateOSSStorageRequest): Promise<CreateOSSStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOSSStorageWithOptions(request, runtime);
  }

  /**
   * Enables the MySQL port for an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  For an ApsaraDB for ClickHouse cluster of V20.8 or later that was created before December 1, 2021, you must manually enable the MySQL port. For an ApsaraDB for ClickHouse cluster of V20.8 or later that was created after December 1, 2021, the MySQL port is automatically enabled.
   * 
   * @param request - CreatePortsForClickHouseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePortsForClickHouseResponse
   */
  async createPortsForClickHouseWithOptions(request: CreatePortsForClickHouseRequest, runtime: $Util.RuntimeOptions): Promise<CreatePortsForClickHouseResponse> {
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

    if (!Util.isUnset(request.portType)) {
      query["PortType"] = request.portType;
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
      action: "CreatePortsForClickHouse",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePortsForClickHouseResponse>(await this.callApi(params, req, runtime), new CreatePortsForClickHouseResponse({}));
  }

  /**
   * Enables the MySQL port for an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  For an ApsaraDB for ClickHouse cluster of V20.8 or later that was created before December 1, 2021, you must manually enable the MySQL port. For an ApsaraDB for ClickHouse cluster of V20.8 or later that was created after December 1, 2021, the MySQL port is automatically enabled.
   * 
   * @param request - CreatePortsForClickHouseRequest
   * @returns CreatePortsForClickHouseResponse
   */
  async createPortsForClickHouse(request: CreatePortsForClickHouseRequest): Promise<CreatePortsForClickHouseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPortsForClickHouseWithOptions(request, runtime);
  }

  /**
   * Creates a task to synchronize data from an ApsaraDB RDS for MySQL instance to an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is only applicable to ApsaraDB for ClickHouse clusters.
   * 
   * @param request - CreateRDSToClickhouseDbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRDSToClickhouseDbResponse
   */
  async createRDSToClickhouseDbWithOptions(request: CreateRDSToClickhouseDbRequest, runtime: $Util.RuntimeOptions): Promise<CreateRDSToClickhouseDbResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ckPassword)) {
      query["CkPassword"] = request.ckPassword;
    }

    if (!Util.isUnset(request.ckUserName)) {
      query["CkUserName"] = request.ckUserName;
    }

    if (!Util.isUnset(request.clickhousePort)) {
      query["ClickhousePort"] = request.clickhousePort;
    }

    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
    }

    if (!Util.isUnset(request.limitUpper)) {
      query["LimitUpper"] = request.limitUpper;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.rdsId)) {
      query["RdsId"] = request.rdsId;
    }

    if (!Util.isUnset(request.rdsPassword)) {
      query["RdsPassword"] = request.rdsPassword;
    }

    if (!Util.isUnset(request.rdsPort)) {
      query["RdsPort"] = request.rdsPort;
    }

    if (!Util.isUnset(request.rdsUserName)) {
      query["RdsUserName"] = request.rdsUserName;
    }

    if (!Util.isUnset(request.rdsVpcId)) {
      query["RdsVpcId"] = request.rdsVpcId;
    }

    if (!Util.isUnset(request.rdsVpcUrl)) {
      query["RdsVpcUrl"] = request.rdsVpcUrl;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.skipUnsupported)) {
      query["SkipUnsupported"] = request.skipUnsupported;
    }

    if (!Util.isUnset(request.synDbTables)) {
      query["SynDbTables"] = request.synDbTables;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRDSToClickhouseDb",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRDSToClickhouseDbResponse>(await this.callApi(params, req, runtime), new CreateRDSToClickhouseDbResponse({}));
  }

  /**
   * Creates a task to synchronize data from an ApsaraDB RDS for MySQL instance to an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is only applicable to ApsaraDB for ClickHouse clusters.
   * 
   * @param request - CreateRDSToClickhouseDbRequest
   * @returns CreateRDSToClickhouseDbResponse
   */
  async createRDSToClickhouseDb(request: CreateRDSToClickhouseDbRequest): Promise<CreateRDSToClickhouseDbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRDSToClickhouseDbWithOptions(request, runtime);
  }

  /**
   * Creates a privileged account or a standard account for an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is applicable only to ApsaraDB for ClickHouse clusters of V20.8 or later that were created after December 1, 2021,
   * 
   * @param request - CreateSQLAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSQLAccountResponse
   */
  async createSQLAccountWithOptions(request: CreateSQLAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateSQLAccountResponse> {
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
      action: "CreateSQLAccount",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSQLAccountResponse>(await this.callApi(params, req, runtime), new CreateSQLAccountResponse({}));
  }

  /**
   * Creates a privileged account or a standard account for an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is applicable only to ApsaraDB for ClickHouse clusters of V20.8 or later that were created after December 1, 2021,
   * 
   * @param request - CreateSQLAccountRequest
   * @returns CreateSQLAccountResponse
   */
  async createSQLAccount(request: CreateSQLAccountRequest): Promise<CreateSQLAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSQLAccountWithOptions(request, runtime);
  }

  /**
   * Creates a service-linked role.
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRoleWithOptions(request: CreateServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "CreateServiceLinkedRole",
      version: "2019-11-11",
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

  /**
   * Creates a service-linked role.
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRole(request: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * Deletes a database account of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  After you delete a database account, you cannot use the account to log on to the ApsaraDB for ClickHouse cluster. Exercise caution when performing this operation.
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
      version: "2019-11-11",
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
   * Deletes a database account of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  After you delete a database account, you cannot use the account to log on to the ApsaraDB for ClickHouse cluster. Exercise caution when performing this operation.
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * Releases a pay-as-you-go ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * *Warning** After an ApsaraDB for ClickHouse cluster is deleted, all data in the cluster is deleted and cannot be recovered. Exercise caution when performing this operation.
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
      version: "2019-11-11",
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
   * Releases a pay-as-you-go ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * *Warning** After an ApsaraDB for ClickHouse cluster is deleted, all data in the cluster is deleted and cannot be recovered. Exercise caution when performing this operation.
   * 
   * @param request - DeleteDBClusterRequest
   * @returns DeleteDBClusterResponse
   */
  async deleteDBCluster(request: DeleteDBClusterRequest): Promise<DeleteDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBClusterWithOptions(request, runtime);
  }

  /**
   * Deletes a database used for data synchronization.
   * 
   * @param request - DeleteSyndbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSyndbResponse
   */
  async deleteSyndbWithOptions(request: DeleteSyndbRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSyndbResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
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

    if (!Util.isUnset(request.synDb)) {
      query["SynDb"] = request.synDb;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSyndb",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSyndbResponse>(await this.callApi(params, req, runtime), new DeleteSyndbResponse({}));
  }

  /**
   * Deletes a database used for data synchronization.
   * 
   * @param request - DeleteSyndbRequest
   * @returns DeleteSyndbResponse
   */
  async deleteSyndb(request: DeleteSyndbRequest): Promise<DeleteSyndbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSyndbWithOptions(request, runtime);
  }

  /**
   * Queries the permissions of an account.
   * 
   * @param request - DescribeAccountAuthorityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountAuthorityResponse
   */
  async describeAccountAuthorityWithOptions(request: DescribeAccountAuthorityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountAuthorityResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "DescribeAccountAuthority",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccountAuthorityResponse>(await this.callApi(params, req, runtime), new DescribeAccountAuthorityResponse({}));
  }

  /**
   * Queries the permissions of an account.
   * 
   * @param request - DescribeAccountAuthorityRequest
   * @returns DescribeAccountAuthorityResponse
   */
  async describeAccountAuthority(request: DescribeAccountAuthorityRequest): Promise<DescribeAccountAuthorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountAuthorityWithOptions(request, runtime);
  }

  /**
   * DescribeAccounts
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

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccounts",
      version: "2019-11-11",
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
   * DescribeAccounts
   * 
   * @param request - DescribeAccountsRequest
   * @returns DescribeAccountsResponse
   */
  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
   * Queries a list of databases, tables, and columns in an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Queries a list of databases, tables, and columns in an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeAllDataSourceRequest
   * @returns DescribeAllDataSourceResponse
   */
  async describeAllDataSource(request: DescribeAllDataSourceRequest): Promise<DescribeAllDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllDataSourceWithOptions(request, runtime);
  }

  /**
   * Queries the data sources of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeAllDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAllDataSourcesResponse
   */
  async describeAllDataSourcesWithOptions(request: DescribeAllDataSourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllDataSourcesResponse> {
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
      action: "DescribeAllDataSources",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAllDataSourcesResponse>(await this.callApi(params, req, runtime), new DescribeAllDataSourcesResponse({}));
  }

  /**
   * Queries the data sources of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeAllDataSourcesRequest
   * @returns DescribeAllDataSourcesResponse
   */
  async describeAllDataSources(request: DescribeAllDataSourcesRequest): Promise<DescribeAllDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllDataSourcesWithOptions(request, runtime);
  }

  /**
   * Queries the backup settings of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is available only for the ApsaraDB for ClickHouse clusters of versions 20.3, 20.8, and 21.8.
   * 
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
      version: "2019-11-11",
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
   * Queries the backup settings of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is available only for the ApsaraDB for ClickHouse clusters of versions 20.3, 20.8, and 21.8.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * 查看备份集
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
      version: "2019-11-11",
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
   * 查看备份集
   * 
   * @param request - DescribeBackupsRequest
   * @returns DescribeBackupsResponse
   */
  async describeBackups(request: DescribeBackupsRequest): Promise<DescribeBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  /**
   * Queries information about columns.
   * 
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
      version: "2019-11-11",
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
   * Queries information about columns.
   * 
   * @param request - DescribeColumnsRequest
   * @returns DescribeColumnsResponse
   */
  async describeColumns(request: DescribeColumnsRequest): Promise<DescribeColumnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeColumnsWithOptions(request, runtime);
  }

  /**
   * Queries the change records of the configuration parameters of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - DescribeConfigHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConfigHistoryResponse
   */
  async describeConfigHistoryWithOptions(request: DescribeConfigHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConfigHistoryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeConfigHistory",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeConfigHistoryResponse>(await this.callApi(params, req, runtime), new DescribeConfigHistoryResponse({}));
  }

  /**
   * Queries the change records of the configuration parameters of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - DescribeConfigHistoryRequest
   * @returns DescribeConfigHistoryResponse
   */
  async describeConfigHistory(request: DescribeConfigHistoryRequest): Promise<DescribeConfigHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConfigHistoryWithOptions(request, runtime);
  }

  /**
   * Queries the values of the configuration parameters of an ApsaraDB for ClickHouse cluster before and after the values of the configuration parameters are changed.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - DescribeConfigVersionDifferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConfigVersionDifferenceResponse
   */
  async describeConfigVersionDifferenceWithOptions(request: DescribeConfigVersionDifferenceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConfigVersionDifferenceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeConfigVersionDifference",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeConfigVersionDifferenceResponse>(await this.callApi(params, req, runtime), new DescribeConfigVersionDifferenceResponse({}));
  }

  /**
   * Queries the values of the configuration parameters of an ApsaraDB for ClickHouse cluster before and after the values of the configuration parameters are changed.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - DescribeConfigVersionDifferenceRequest
   * @returns DescribeConfigVersionDifferenceResponse
   */
  async describeConfigVersionDifference(request: DescribeConfigVersionDifferenceRequest): Promise<DescribeConfigVersionDifferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConfigVersionDifferenceWithOptions(request, runtime);
  }

  /**
   * Queries the IP address whitelist of an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Queries the IP address whitelist of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeDBClusterAccessWhiteListRequest
   * @returns DescribeDBClusterAccessWhiteListResponse
   */
  async describeDBClusterAccessWhiteList(request: DescribeDBClusterAccessWhiteListRequest): Promise<DescribeDBClusterAccessWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterAccessWhiteListWithOptions(request, runtime);
  }

  /**
   * Queries the information about an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Queries the information about an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeDBClusterAttributeRequest
   * @returns DescribeDBClusterAttributeResponse
   */
  async describeDBClusterAttribute(request: DescribeDBClusterAttributeRequest): Promise<DescribeDBClusterAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterAttributeWithOptions(request, runtime);
  }

  /**
   * Queries information about the parameter settings of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeDBClusterConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterConfigResponse
   */
  async describeDBClusterConfigWithOptions(request: DescribeDBClusterConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterConfigResponse> {
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
      action: "DescribeDBClusterConfig",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterConfigResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterConfigResponse({}));
  }

  /**
   * Queries information about the parameter settings of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeDBClusterConfigRequest
   * @returns DescribeDBClusterConfigResponse
   */
  async describeDBClusterConfig(request: DescribeDBClusterConfigRequest): Promise<DescribeDBClusterConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterConfigWithOptions(request, runtime);
  }

  /**
   * Queries the values of the configuration parameters in the config.xml file of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - DescribeDBClusterConfigInXMLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterConfigInXMLResponse
   */
  async describeDBClusterConfigInXMLWithOptions(request: DescribeDBClusterConfigInXMLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterConfigInXMLResponse> {
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
      action: "DescribeDBClusterConfigInXML",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterConfigInXMLResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterConfigInXMLResponse({}));
  }

  /**
   * Queries the values of the configuration parameters in the config.xml file of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - DescribeDBClusterConfigInXMLRequest
   * @returns DescribeDBClusterConfigInXMLResponse
   */
  async describeDBClusterConfigInXML(request: DescribeDBClusterConfigInXMLRequest): Promise<DescribeDBClusterConfigInXMLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterConfigInXMLWithOptions(request, runtime);
  }

  /**
   * Queries the network information about an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeDBClusterNetInfoItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterNetInfoItemsResponse
   */
  async describeDBClusterNetInfoItemsWithOptions(request: DescribeDBClusterNetInfoItemsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterNetInfoItemsResponse> {
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
      action: "DescribeDBClusterNetInfoItems",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterNetInfoItemsResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterNetInfoItemsResponse({}));
  }

  /**
   * Queries the network information about an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeDBClusterNetInfoItemsRequest
   * @returns DescribeDBClusterNetInfoItemsResponse
   */
  async describeDBClusterNetInfoItems(request: DescribeDBClusterNetInfoItemsRequest): Promise<DescribeDBClusterNetInfoItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterNetInfoItemsWithOptions(request, runtime);
  }

  /**
   * Queries performance data about an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * You can query the performance data of a specified cluster over a specific time range based on the performance metrics. The data is collected every 30 seconds.
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created before December 1, 2021.
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
      action: "DescribeDBClusterPerformance",
      version: "2019-11-11",
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
   * Queries performance data about an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * You can query the performance data of a specified cluster over a specific time range based on the performance metrics. The data is collected every 30 seconds.
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created before December 1, 2021.
   * 
   * @param request - DescribeDBClusterPerformanceRequest
   * @returns DescribeDBClusterPerformanceResponse
   */
  async describeDBClusterPerformance(request: DescribeDBClusterPerformanceRequest): Promise<DescribeDBClusterPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterPerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the information about ApsaraDB for ClickHouse clusters in a region.
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
      version: "2019-11-11",
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
   * Queries the information about ApsaraDB for ClickHouse clusters in a region.
   * 
   * @param request - DescribeDBClustersRequest
   * @returns DescribeDBClustersResponse
   */
  async describeDBClusters(request: DescribeDBClustersRequest): Promise<DescribeDBClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClustersWithOptions(request, runtime);
  }

  /**
   * Queries configuration information about an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeDBConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBConfigResponse
   */
  async describeDBConfigWithOptions(request: DescribeDBConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBConfigResponse> {
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
      action: "DescribeDBConfig",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBConfigResponse>(await this.callApi(params, req, runtime), new DescribeDBConfigResponse({}));
  }

  /**
   * Queries configuration information about an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeDBConfigRequest
   * @returns DescribeDBConfigResponse
   */
  async describeDBConfig(request: DescribeDBConfigRequest): Promise<DescribeDBConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBConfigWithOptions(request, runtime);
  }

  /**
   * Queries the storage of cold data.
   * 
   * @param request - DescribeOSSStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOSSStorageResponse
   */
  async describeOSSStorageWithOptions(request: DescribeOSSStorageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOSSStorageResponse> {
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
      action: "DescribeOSSStorage",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOSSStorageResponse>(await this.callApi(params, req, runtime), new DescribeOSSStorageResponse({}));
  }

  /**
   * Queries the storage of cold data.
   * 
   * @param request - DescribeOSSStorageRequest
   * @returns DescribeOSSStorageResponse
   */
  async describeOSSStorage(request: DescribeOSSStorageRequest): Promise<DescribeOSSStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOSSStorageWithOptions(request, runtime);
  }

  /**
   * Queries the details of queries that are being executed in an ApsaraDB for ClickHouse cluster.
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

    if (!Util.isUnset(request.initialQueryId)) {
      query["InitialQueryId"] = request.initialQueryId;
    }

    if (!Util.isUnset(request.initialUser)) {
      query["InitialUser"] = request.initialUser;
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

    if (!Util.isUnset(request.queryDurationMs)) {
      query["QueryDurationMs"] = request.queryDurationMs;
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
      action: "DescribeProcessList",
      version: "2019-11-11",
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
   * Queries the details of queries that are being executed in an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeProcessListRequest
   * @returns DescribeProcessListResponse
   */
  async describeProcessList(request: DescribeProcessListRequest): Promise<DescribeProcessListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProcessListWithOptions(request, runtime);
  }

  /**
   * Queries the information about all regions and zones of ApsaraDB for ClickHouse clusters.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "DescribeRegions",
      version: "2019-11-11",
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
   * Queries the information about all regions and zones of ApsaraDB for ClickHouse clusters.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of all databases in an ApsaraDB for ClickHouse cluster.
   * 
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
      version: "2019-11-11",
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
   * Queries a list of all databases in an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeSchemasRequest
   * @returns DescribeSchemasResponse
   */
  async describeSchemas(request: DescribeSchemasRequest): Promise<DescribeSchemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSchemasWithOptions(request, runtime);
  }

  /**
   * Queries the details about slow query logs.
   * 
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

    if (!Util.isUnset(request.queryDurationMs)) {
      query["QueryDurationMs"] = request.queryDurationMs;
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
      action: "DescribeSlowLogRecords",
      version: "2019-11-11",
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
   * Queries the details about slow query logs.
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecords(request: DescribeSlowLogRecordsRequest): Promise<DescribeSlowLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries information about tables that are synchronized from an ApsaraDB RDS for MySQL instance to an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeSynDbTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSynDbTablesResponse
   */
  async describeSynDbTablesWithOptions(request: DescribeSynDbTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynDbTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
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

    if (!Util.isUnset(request.synDb)) {
      query["SynDb"] = request.synDb;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSynDbTables",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSynDbTablesResponse>(await this.callApi(params, req, runtime), new DescribeSynDbTablesResponse({}));
  }

  /**
   * Queries information about tables that are synchronized from an ApsaraDB RDS for MySQL instance to an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeSynDbTablesRequest
   * @returns DescribeSynDbTablesResponse
   */
  async describeSynDbTables(request: DescribeSynDbTablesRequest): Promise<DescribeSynDbTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSynDbTablesWithOptions(request, runtime);
  }

  /**
   * Queries the information about data synchronization between an ApsaraDB for ClickHouse cluster and an ApsaraDB RDS for MySQL instance.
   * 
   * @param request - DescribeSynDbsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSynDbsResponse
   */
  async describeSynDbsWithOptions(request: DescribeSynDbsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynDbsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSynDbs",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSynDbsResponse>(await this.callApi(params, req, runtime), new DescribeSynDbsResponse({}));
  }

  /**
   * Queries the information about data synchronization between an ApsaraDB for ClickHouse cluster and an ApsaraDB RDS for MySQL instance.
   * 
   * @param request - DescribeSynDbsRequest
   * @returns DescribeSynDbsResponse
   */
  async describeSynDbs(request: DescribeSynDbsRequest): Promise<DescribeSynDbsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSynDbsWithOptions(request, runtime);
  }

  /**
   * Queries the information about tables in a database of an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Queries the information about tables in a database of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeTablesRequest
   * @returns DescribeTablesResponse
   */
  async describeTables(request: DescribeTablesRequest): Promise<DescribeTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTablesWithOptions(request, runtime);
  }

  /**
   * Queries information about data migration from an ApsaraDB for ClickHouse cluster of an earlier version to an ApsaraDB for ClickHouse cluster of a later version
   * 
   * @remarks
   * >  You can call this operation to query information about only data migration from an ApsaraDB for ClickHouse cluster of an earlier version to an ApsaraDB for ClickHouse cluster of a later version.
   * 
   * @param request - DescribeTransferHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTransferHistoryResponse
   */
  async describeTransferHistoryWithOptions(request: DescribeTransferHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTransferHistoryResponse> {
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
      action: "DescribeTransferHistory",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTransferHistoryResponse>(await this.callApi(params, req, runtime), new DescribeTransferHistoryResponse({}));
  }

  /**
   * Queries information about data migration from an ApsaraDB for ClickHouse cluster of an earlier version to an ApsaraDB for ClickHouse cluster of a later version
   * 
   * @remarks
   * >  You can call this operation to query information about only data migration from an ApsaraDB for ClickHouse cluster of an earlier version to an ApsaraDB for ClickHouse cluster of a later version.
   * 
   * @param request - DescribeTransferHistoryRequest
   * @returns DescribeTransferHistoryResponse
   */
  async describeTransferHistory(request: DescribeTransferHistoryRequest): Promise<DescribeTransferHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTransferHistoryWithOptions(request, runtime);
  }

  /**
   * Terminates an ongoing task.
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

    if (!Util.isUnset(request.initialQueryId)) {
      query["InitialQueryId"] = request.initialQueryId;
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
      action: "KillProcess",
      version: "2019-11-11",
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
   * Terminates an ongoing task.
   * 
   * @param request - KillProcessRequest
   * @returns KillProcessResponse
   */
  async killProcess(request: KillProcessRequest): Promise<KillProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killProcessWithOptions(request, runtime);
  }

  /**
   * Modifies the permissions of an account.
   * 
   * @param request - ModifyAccountAuthorityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountAuthorityResponse
   */
  async modifyAccountAuthorityWithOptions(request: ModifyAccountAuthorityRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountAuthorityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.allowDatabases)) {
      query["AllowDatabases"] = request.allowDatabases;
    }

    if (!Util.isUnset(request.allowDictionaries)) {
      query["AllowDictionaries"] = request.allowDictionaries;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ddlAuthority)) {
      query["DdlAuthority"] = request.ddlAuthority;
    }

    if (!Util.isUnset(request.dmlAuthority)) {
      query["DmlAuthority"] = request.dmlAuthority;
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

    if (!Util.isUnset(request.totalDatabases)) {
      query["TotalDatabases"] = request.totalDatabases;
    }

    if (!Util.isUnset(request.totalDictionaries)) {
      query["TotalDictionaries"] = request.totalDictionaries;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountAuthority",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAccountAuthorityResponse>(await this.callApi(params, req, runtime), new ModifyAccountAuthorityResponse({}));
  }

  /**
   * Modifies the permissions of an account.
   * 
   * @param request - ModifyAccountAuthorityRequest
   * @returns ModifyAccountAuthorityResponse
   */
  async modifyAccountAuthority(request: ModifyAccountAuthorityRequest): Promise<ModifyAccountAuthorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountAuthorityWithOptions(request, runtime);
  }

  /**
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
      version: "2019-11-11",
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
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the backup settings of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is available only for the ApsaraDB for ClickHouse clusters of versions 20.3, 20.8, and 21.8.
   * 
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
      version: "2019-11-11",
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
   * Modifies the backup settings of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is available only for the ApsaraDB for ClickHouse clusters of versions 20.3, 20.8, and 21.8.
   * 
   * @param request - ModifyBackupPolicyRequest
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicy(request: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Upgrades or downgrades an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterResponse
   */
  async modifyDBClusterWithOptions(request: ModifyDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterClass)) {
      query["DBClusterClass"] = request.DBClusterClass;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBNodeGroupCount)) {
      query["DBNodeGroupCount"] = request.DBNodeGroupCount;
    }

    if (!Util.isUnset(request.DBNodeStorage)) {
      query["DBNodeStorage"] = request.DBNodeStorage;
    }

    if (!Util.isUnset(request.dbNodeStorageType)) {
      query["DbNodeStorageType"] = request.dbNodeStorageType;
    }

    if (!Util.isUnset(request.disableWriteWindows)) {
      query["DisableWriteWindows"] = request.disableWriteWindows;
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
      action: "ModifyDBCluster",
      version: "2019-11-11",
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
   * Upgrades or downgrades an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyDBClusterRequest
   * @returns ModifyDBClusterResponse
   */
  async modifyDBCluster(request: ModifyDBClusterRequest): Promise<ModifyDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterWithOptions(request, runtime);
  }

  /**
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
      version: "2019-11-11",
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
   * @param request - ModifyDBClusterAccessWhiteListRequest
   * @returns ModifyDBClusterAccessWhiteListResponse
   */
  async modifyDBClusterAccessWhiteList(request: ModifyDBClusterAccessWhiteListRequest): Promise<ModifyDBClusterAccessWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterAccessWhiteListWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyDBClusterConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterConfigResponse
   */
  async modifyDBClusterConfigWithOptions(request: ModifyDBClusterConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterConfigResponse> {
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

    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
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

    if (!Util.isUnset(request.userConfig)) {
      query["UserConfig"] = request.userConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterConfig",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterConfigResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterConfigResponse({}));
  }

  /**
   * Modifies the configurations of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyDBClusterConfigRequest
   * @returns ModifyDBClusterConfigResponse
   */
  async modifyDBClusterConfig(request: ModifyDBClusterConfigRequest): Promise<ModifyDBClusterConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the settings of the configuration parameters for an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - ModifyDBClusterConfigInXMLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterConfigInXMLResponse
   */
  async modifyDBClusterConfigInXMLWithOptions(request: ModifyDBClusterConfigInXMLRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterConfigInXMLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterConfigInXML",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterConfigInXMLResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterConfigInXMLResponse({}));
  }

  /**
   * Modifies the settings of the configuration parameters for an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were created after December 1, 2021.
   * 
   * @param request - ModifyDBClusterConfigInXMLRequest
   * @returns ModifyDBClusterConfigInXMLResponse
   */
  async modifyDBClusterConfigInXML(request: ModifyDBClusterConfigInXMLRequest): Promise<ModifyDBClusterConfigInXMLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterConfigInXMLWithOptions(request, runtime);
  }

  /**
   * Changes the name of an ApsaraDB for ClickHouse cluster.
   * 
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
      version: "2019-11-11",
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
   * Changes the name of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyDBClusterDescriptionRequest
   * @returns ModifyDBClusterDescriptionResponse
   */
  async modifyDBClusterDescription(request: ModifyDBClusterDescriptionRequest): Promise<ModifyDBClusterDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the maintenance window of an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Modifies the maintenance window of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyDBClusterMaintainTimeRequest
   * @returns ModifyDBClusterMaintainTimeResponse
   */
  async modifyDBClusterMaintainTime(request: ModifyDBClusterMaintainTimeRequest): Promise<ModifyDBClusterMaintainTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterMaintainTimeWithOptions(request, runtime);
  }

  /**
   * Modifies the dictionary configuration of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyDBConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBConfigResponse
   */
  async modifyDBConfigWithOptions(request: ModifyDBConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
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
      action: "ModifyDBConfig",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBConfigResponse>(await this.callApi(params, req, runtime), new ModifyDBConfigResponse({}));
  }

  /**
   * Modifies the dictionary configuration of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifyDBConfigRequest
   * @returns ModifyDBConfigResponse
   */
  async modifyDBConfig(request: ModifyDBConfigRequest): Promise<ModifyDBConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the type of a minor version update in ApsaraDB for ClickHouse.
   * 
   * @param request - ModifyMinorVersionGreadeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMinorVersionGreadeTypeResponse
   */
  async modifyMinorVersionGreadeTypeWithOptions(request: ModifyMinorVersionGreadeTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMinorVersionGreadeTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.maintainAutoType)) {
      query["MaintainAutoType"] = request.maintainAutoType;
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
      action: "ModifyMinorVersionGreadeType",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMinorVersionGreadeTypeResponse>(await this.callApi(params, req, runtime), new ModifyMinorVersionGreadeTypeResponse({}));
  }

  /**
   * Modifies the type of a minor version update in ApsaraDB for ClickHouse.
   * 
   * @param request - ModifyMinorVersionGreadeTypeRequest
   * @returns ModifyMinorVersionGreadeTypeResponse
   */
  async modifyMinorVersionGreadeType(request: ModifyMinorVersionGreadeTypeRequest): Promise<ModifyMinorVersionGreadeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMinorVersionGreadeTypeWithOptions(request, runtime);
  }

  /**
   * Modifies the synchronization task of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is applicable only to ApsaraDB for ClickHouse clusters.
   * 
   * @param request - ModifyRDSToClickhouseDbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRDSToClickhouseDbResponse
   */
  async modifyRDSToClickhouseDbWithOptions(request: ModifyRDSToClickhouseDbRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRDSToClickhouseDbResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ckPassword)) {
      query["CkPassword"] = request.ckPassword;
    }

    if (!Util.isUnset(request.ckUserName)) {
      query["CkUserName"] = request.ckUserName;
    }

    if (!Util.isUnset(request.clickhousePort)) {
      query["ClickhousePort"] = request.clickhousePort;
    }

    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
    }

    if (!Util.isUnset(request.limitUpper)) {
      query["LimitUpper"] = request.limitUpper;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.rdsId)) {
      query["RdsId"] = request.rdsId;
    }

    if (!Util.isUnset(request.rdsPassword)) {
      query["RdsPassword"] = request.rdsPassword;
    }

    if (!Util.isUnset(request.rdsPort)) {
      query["RdsPort"] = request.rdsPort;
    }

    if (!Util.isUnset(request.rdsSynDb)) {
      query["RdsSynDb"] = request.rdsSynDb;
    }

    if (!Util.isUnset(request.rdsSynTables)) {
      query["RdsSynTables"] = request.rdsSynTables;
    }

    if (!Util.isUnset(request.rdsUserName)) {
      query["RdsUserName"] = request.rdsUserName;
    }

    if (!Util.isUnset(request.rdsVpcId)) {
      query["RdsVpcId"] = request.rdsVpcId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.skipUnsupported)) {
      query["SkipUnsupported"] = request.skipUnsupported;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRDSToClickhouseDb",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyRDSToClickhouseDbResponse>(await this.callApi(params, req, runtime), new ModifyRDSToClickhouseDbResponse({}));
  }

  /**
   * Modifies the synchronization task of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  This operation is applicable only to ApsaraDB for ClickHouse clusters.
   * 
   * @param request - ModifyRDSToClickhouseDbRequest
   * @returns ModifyRDSToClickhouseDbResponse
   */
  async modifyRDSToClickhouseDb(request: ModifyRDSToClickhouseDbRequest): Promise<ModifyRDSToClickhouseDbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRDSToClickhouseDbWithOptions(request, runtime);
  }

  /**
   * Releases the public endpoint of an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Releases the public endpoint of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ReleaseClusterPublicConnectionRequest
   * @returns ReleaseClusterPublicConnectionResponse
   */
  async releaseClusterPublicConnection(request: ReleaseClusterPublicConnectionRequest): Promise<ReleaseClusterPublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseClusterPublicConnectionWithOptions(request, runtime);
  }

  /**
   * Resets the password of a database account for an ApsaraDB for ClickHouse cluster.
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
      version: "2019-11-11",
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
   * Resets the password of a database account for an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ResetAccountPasswordRequest
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPassword(request: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  /**
   * Restarts an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - RestartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartInstanceResponse
   */
  async restartInstanceWithOptions(request: RestartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartInstanceResponse> {
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

    if (!Util.isUnset(request.restartTime)) {
      query["RestartTime"] = request.restartTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartInstance",
      version: "2019-11-11",
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
   * Restarts an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - RestartInstanceRequest
   * @returns RestartInstanceResponse
   */
  async restartInstance(request: RestartInstanceRequest): Promise<RestartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartInstanceWithOptions(request, runtime);
  }

  /**
   * Migrates the data of a source ApsaraDB for ClickHouse cluster to a destination ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * ## [](#)Prerequisites
   * *   The IP address of the source ApsaraDB for ClickHouse cluster is added to the IP address whitelist of the destination ApsaraDB for ClickHouse cluster.
   * *   The IP address of the destination ApsaraDB for ClickHouse cluster is added to the IP address whitelist of the source ApsaraDB for ClickHouse cluster.
   * >  You can execute the `select * from system.clusters;` statement to query the IP address of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - TransferVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferVersionResponse
   */
  async transferVersionWithOptions(request: TransferVersionRequest, runtime: $Util.RuntimeOptions): Promise<TransferVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.disableWriteWindows)) {
      query["DisableWriteWindows"] = request.disableWriteWindows;
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

    if (!Util.isUnset(request.sourceAccount)) {
      query["SourceAccount"] = request.sourceAccount;
    }

    if (!Util.isUnset(request.sourcePassword)) {
      query["SourcePassword"] = request.sourcePassword;
    }

    if (!Util.isUnset(request.targetAccount)) {
      query["TargetAccount"] = request.targetAccount;
    }

    if (!Util.isUnset(request.targetDbClusterId)) {
      query["TargetDbClusterId"] = request.targetDbClusterId;
    }

    if (!Util.isUnset(request.targetPassword)) {
      query["TargetPassword"] = request.targetPassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransferVersion",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransferVersionResponse>(await this.callApi(params, req, runtime), new TransferVersionResponse({}));
  }

  /**
   * Migrates the data of a source ApsaraDB for ClickHouse cluster to a destination ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * ## [](#)Prerequisites
   * *   The IP address of the source ApsaraDB for ClickHouse cluster is added to the IP address whitelist of the destination ApsaraDB for ClickHouse cluster.
   * *   The IP address of the destination ApsaraDB for ClickHouse cluster is added to the IP address whitelist of the source ApsaraDB for ClickHouse cluster.
   * >  You can execute the `select * from system.clusters;` statement to query the IP address of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - TransferVersionRequest
   * @returns TransferVersionResponse
   */
  async transferVersion(request: TransferVersionRequest): Promise<TransferVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferVersionWithOptions(request, runtime);
  }

  /**
   * Updates the minor engine version of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were purchased after December 1, 2021.
   * 
   * @param request - UpgradeMinorVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeMinorVersionResponse
   */
  async upgradeMinorVersionWithOptions(request: UpgradeMinorVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeMinorVersionResponse> {
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

    if (!Util.isUnset(request.upgradeImmediately)) {
      query["UpgradeImmediately"] = request.upgradeImmediately;
    }

    if (!Util.isUnset(request.upgradeTime)) {
      query["UpgradeTime"] = request.upgradeTime;
    }

    if (!Util.isUnset(request.upgradeVersion)) {
      query["UpgradeVersion"] = request.upgradeVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeMinorVersion",
      version: "2019-11-11",
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
   * Updates the minor engine version of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * >  You can call this operation only for ApsaraDB for ClickHouse clusters that were purchased after December 1, 2021.
   * 
   * @param request - UpgradeMinorVersionRequest
   * @returns UpgradeMinorVersionResponse
   */
  async upgradeMinorVersion(request: UpgradeMinorVersionRequest): Promise<UpgradeMinorVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeMinorVersionWithOptions(request, runtime);
  }

}
