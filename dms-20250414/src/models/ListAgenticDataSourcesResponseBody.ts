// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgenticDataSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The display name of the data source.
   * 
   * @example
   * demo_mysql
   */
  alias?: string;
  /**
   * @remarks
   * The logon username of the data source. This parameter is empty if username authentication is not used.
   * 
   * @example
   * db_user
   */
  authAccount?: string;
  /**
   * @remarks
   * The masked value of the password or token. The actual value is not returned.
   * 
   * @example
   * P@ss****
   */
  authPassword?: string;
  /**
   * @remarks
   * The authentication method. Valid values:
   * - -1: no authentication required
   * - 0: username and password
   * - 1: password only
   * - 2: password-free
   * 
   * @example
   * 0
   */
  authType?: number;
  /**
   * @remarks
   * The name of the metadata catalog associated with the data source.
   * 
   * @example
   * demo_catalog
   */
  catalogName?: string;
  /**
   * @remarks
   * The UUID of the metadata catalog associated with the data source.
   * 
   * @example
   * mc-ab-0123456789abcdefghijk
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The unique identifier of the data source.
   * 
   * @example
   * cn-hangzhou_a1b2c3d4e5f6
   */
  dataSourceUuid?: string;
  /**
   * @remarks
   * The data source type. Valid values: MYSQL, POSTGRESQL, ORACLE, SQLSERVER, MARIADB, POLARDB, POLARDB_POSTGRESQL, POLARDB_ORACLE, OCEANBASEX, DRDS, ADB_MYSQL, ADB_POSTGRESQL, CLICKHOUSE, SELECTDB, STARROCKS, HOLOGRES, MAXCOMPUTE, ES_REST, and TRINO.
   * 
   * @example
   * MYSQL
   */
  dbType?: string;
  /**
   * @remarks
   * The environment type. Valid values: product, pre, dev, test, sit, uat, pet, and stag.
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * The time when the data source was created. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2026-10-13 14:30:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the data source was last modified. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2026-10-13 14:35:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The endpoint of the data source. A masked value may be returned in sensitive scenarios.
   * 
   * @example
   * mysql.example.com
   */
  host?: string;
  /**
   * @remarks
   * The ID of the cloud resource instance. This parameter may be empty for data sources registered by endpoint.
   * 
   * @example
   * rm-bp1234567890
   */
  instanceResourceId?: string;
  /**
   * @remarks
   * The source of the data source. Valid values:
   * - RDS: ApsaraDB instance
   * - PUBLIC_OWN: self-managed database on the public network
   * - ECS_OWN: self-managed database on an ECS instance
   * - GATEWAY: connected through Database Gateway
   * - VPC_IDC: connected over a VPC or IDC
   * 
   * @example
   * RDS
   */
  instanceSource?: string;
  /**
   * @remarks
   * The name of the KMS managed credential. This parameter is empty if KMS is not used. This is sensitive information.
   * 
   * @example
   * datasource-secret
   */
  kmsSecret?: string;
  /**
   * @remarks
   * The connection port of the data source.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The region where the data source resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 123456789012****
   */
  resourceAccountId?: string;
  /**
   * @remarks
   * The ARN of the RAM role used to access the data source. This parameter is empty if role authorization is not used.
   * 
   * @example
   * acs:ram::123456789012****:role/DataSourceRole
   */
  roleArn?: string;
  /**
   * @remarks
   * The connection target name. For ADB_POSTGRESQL, DRDS, POSTGRESQL, and POLARDB_POSTGRESQL, this parameter indicates the database name. For ORACLE, this parameter indicates the SID or service name. For POLARDB_ORACLE, this parameter indicates the SID. For MAXCOMPUTE, this parameter indicates the project. For other types, this parameter is usually empty.
   * 
   * @example
   * postgres
   */
  schema?: string;
  /**
   * @remarks
   * The status of the data source. Valid values:
   * - 0: normal
   * - -1: deleted
   * - -2: disabled
   * 
   * @example
   * 0
   */
  state?: number;
  /**
   * @remarks
   * Specifies whether to use the cloud instance name as the data source name. Valid values:
   * - 1: yes
   * - 0: no
   * 
   * @example
   * 0
   */
  syncAlias?: number;
  /**
   * @remarks
   * The SSL settings. Valid values:
   * - 1: enabled
   * - 0: disabled
   * - -1: default settings
   * 
   * @example
   * 1
   */
  useSsl?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      authAccount: 'AuthAccount',
      authPassword: 'AuthPassword',
      authType: 'AuthType',
      catalogName: 'CatalogName',
      catalogUuid: 'CatalogUuid',
      dataSourceUuid: 'DataSourceUuid',
      dbType: 'DbType',
      envType: 'EnvType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      host: 'Host',
      instanceResourceId: 'InstanceResourceId',
      instanceSource: 'InstanceSource',
      kmsSecret: 'KmsSecret',
      port: 'Port',
      regionId: 'RegionId',
      resourceAccountId: 'ResourceAccountId',
      roleArn: 'RoleArn',
      schema: 'Schema',
      state: 'State',
      syncAlias: 'SyncAlias',
      useSsl: 'UseSsl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      authAccount: 'string',
      authPassword: 'string',
      authType: 'number',
      catalogName: 'string',
      catalogUuid: 'string',
      dataSourceUuid: 'string',
      dbType: 'string',
      envType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      host: 'string',
      instanceResourceId: 'string',
      instanceSource: 'string',
      kmsSecret: 'string',
      port: 'number',
      regionId: 'string',
      resourceAccountId: 'string',
      roleArn: 'string',
      schema: 'string',
      state: 'number',
      syncAlias: 'number',
      useSsl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgenticDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data sources on the current page.
   */
  data?: ListAgenticDataSourcesResponseBodyData[];
  /**
   * @remarks
   * The error code returned when the call fails. This parameter is empty if the call is successful.
   * 
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails. This parameter is empty if the call is successful.
   * 
   * @example
   * The parameter is invalid
   */
  errorMessage?: string;
  /**
   * @remarks
   * The actual number of entries returned per page in this query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The cursor for the next page. An empty value indicates that no more pages are available.
   * 
   * @example
   * page-2-token
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of data sources that meet the filter conditions. This parameter may be empty in some scenarios.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAgenticDataSourcesResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

