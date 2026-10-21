// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgenticDataSourceResponseBodyData extends $dara.Model {
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
   * The logon username for the data source. This parameter is empty if username authentication is not used.
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
   * The method used to register the data source. Valid values:
   * - INSTANCE_ID: select an existing cloud instance
   * - HOST_PORT: register by endpoint and port
   * 
   * @example
   * HOST_PORT
   */
  createMode?: string;
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
   * The type of the data source. Valid values: MYSQL, POSTGRESQL, ORACLE, SQLSERVER, MARIADB, POLARDB, POLARDB_POSTGRESQL, POLARDB_ORACLE, OCEANBASEX, DRDS, ADB_MYSQL, ADB_POSTGRESQL, CLICKHOUSE, SELECTDB, STARROCKS, HOLOGRES, MAXCOMPUTE, ES_REST, and TRINO.
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
   * The time when the data source was created. The format is yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-10-13 14:30:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the data source was last modified. The format is yyyy-MM-dd HH:mm:ss.
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
   * - PUBLIC_OWN: self-managed database on the Internet
   * - ECS_OWN: self-managed database on an ECS instance
   * - GATEWAY: connected through Database Gateway
   * - VPC_IDC: connected through a VPC or IDC
   * 
   * @example
   * RDS
   */
  instanceSource?: string;
  /**
   * @remarks
   * The name of the KMS-managed credential. This parameter is empty if KMS is not used. This field contains sensitive information.
   * 
   * @example
   * datasource-secret
   */
  kmsSecret?: string;
  /**
   * @remarks
   * The ID of the data access security policy currently in use. This parameter is empty if no policy is configured.
   * 
   * @example
   * sp-usr-example
   */
  policyId?: string;
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
   * The region where the data source is located.
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
   * The ARN of the RAM role used to access the data source. This parameter is empty if role-based authorization is not used.
   * 
   * @example
   * acs:ram::123456789012****:role/DataSourceRole
   */
  roleArn?: string;
  /**
   * @remarks
   * The name of the connection target. For ADB_POSTGRESQL, DRDS, POSTGRESQL, and POLARDB_POSTGRESQL, this indicates the database name. For ORACLE, this indicates the SID or service name. For POLARDB_ORACLE, this indicates the SID. For MAXCOMPUTE, this indicates the project. For other types, this parameter is usually empty.
   * 
   * @example
   * postgres
   */
  schema?: string;
  /**
   * @remarks
   * The name of the Snowflake role. This parameter takes effect only when DbType is set to SNOWFLAKE.
   * 
   * @example
   * WAREHOUSE
   */
  snowflakeRole?: string;
  /**
   * @remarks
   * The name of the Snowflake compute warehouse. This parameter takes effect only when DbType is set to SNOWFLAKE.
   * 
   * @example
   * ROLE
   */
  snowflakeWarehouse?: string;
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
   * - -1: use default settings
   * 
   * @example
   * 1
   */
  useSsl?: number;
  /**
   * @remarks
   * The ID of the destination vSwitch used when accessing MaxCompute. This parameter is empty in other scenarios.
   * 
   * @example
   * vsw-bp1234567890
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the destination VPC used when accessing MaxCompute. This parameter is empty in other scenarios.
   * 
   * @example
   * vpc-bp1234567890
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the destination zone used when accessing MaxCompute. This parameter is empty in other scenarios.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      authAccount: 'AuthAccount',
      authPassword: 'AuthPassword',
      authType: 'AuthType',
      catalogName: 'CatalogName',
      catalogUuid: 'CatalogUuid',
      createMode: 'CreateMode',
      dataSourceUuid: 'DataSourceUuid',
      dbType: 'DbType',
      envType: 'EnvType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      host: 'Host',
      instanceResourceId: 'InstanceResourceId',
      instanceSource: 'InstanceSource',
      kmsSecret: 'KmsSecret',
      policyId: 'PolicyId',
      port: 'Port',
      regionId: 'RegionId',
      resourceAccountId: 'ResourceAccountId',
      roleArn: 'RoleArn',
      schema: 'Schema',
      snowflakeRole: 'SnowflakeRole',
      snowflakeWarehouse: 'SnowflakeWarehouse',
      state: 'State',
      syncAlias: 'SyncAlias',
      useSsl: 'UseSsl',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
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
      createMode: 'string',
      dataSourceUuid: 'string',
      dbType: 'string',
      envType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      host: 'string',
      instanceResourceId: 'string',
      instanceSource: 'string',
      kmsSecret: 'string',
      policyId: 'string',
      port: 'number',
      regionId: 'string',
      resourceAccountId: 'string',
      roleArn: 'string',
      schema: 'string',
      snowflakeRole: 'string',
      snowflakeWarehouse: 'string',
      state: 'number',
      syncAlias: 'number',
      useSsl: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgenticDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data source details. This parameter is empty if the data source does not exist.
   */
  data?: GetAgenticDataSourceResponseBodyData;
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
   * The ID of the request.
   * 
   * @example
   * request-1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAgenticDataSourceResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

