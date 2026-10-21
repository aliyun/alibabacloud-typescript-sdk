// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestAgenticDataSourceConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The alias. You can leave this parameter empty when testing a connection. This parameter does not create or modify a data source.
   * 
   * @example
   * demo_mysql
   */
  alias?: string;
  /**
   * @remarks
   * The logon username. You can leave this parameter empty for authentication methods that do not require a username.
   * 
   * @example
   * db_user
   */
  authAccount?: string;
  /**
   * @remarks
   * The logon password. When testing an existing data source, you can leave this parameter empty to reuse the saved password. If a new value is passed, the new value takes precedence.
   * 
   * @example
   * P@ss****
   */
  authPassword?: string;
  /**
   * @remarks
   * The authentication type. This parameter is optional. Valid values: -1 (no authentication required), 0 (username and password), 1 (password only), and 2 (password-free).
   * 
   * @example
   * 0
   */
  authType?: number;
  /**
   * @remarks
   * The catalog name. You can leave this parameter empty when testing a connection. This parameter does not create a metadata catalog.
   * 
   * @example
   * demo_catalog
   */
  catalogName?: string;
  /**
   * @remarks
   * The UUID of the data source. This parameter is required when testing an existing data source. If no new password is passed, the saved password is reused. Leave this parameter empty when testing a new data source.
   * 
   * @example
   * cn-hangzhou_a1b2c3d4e5f6
   */
  dataSourceUuid?: string;
  /**
   * @remarks
   * The type of the data source. Use uppercase letters. Do not pass numbers. Valid values: MYSQL, POSTGRESQL, ORACLE, SQLSERVER, MARIADB, POLARDB, POLARDB_POSTGRESQL, POLARDB_ORACLE, OCEANBASEX, DRDS, ADB_MYSQL, ADB_POSTGRESQL, CLICKHOUSE, SELECTDB, STARROCKS, HOLOGRES, MAXCOMPUTE, ES_REST, and TRINO.
   * 
   * This parameter is required.
   * 
   * @example
   * MYSQL
   */
  dbType?: string;
  /**
   * @remarks
   * The environment type. This parameter is optional when testing a connection. Valid values: product, pre, dev, test, sit, uat, pet, and stag.
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * The domain name or IP address of the database. Do not include the protocol, path, or port. This parameter is optional. You can leave this parameter empty when you select an existing cloud instance and the endpoint is automatically populated.
   * 
   * @example
   * mysql.example.com
   */
  host?: string;
  /**
   * @remarks
   * The ID of the cloud resource instance. This parameter is required when you select an existing cloud instance. You can leave this parameter empty when you enter a connection endpoint.
   * 
   * @example
   * rm-bp1234567890
   */
  instanceResourceId?: string;
  /**
   * @remarks
   * The source of the data source. Valid values:
   * - RDS: ApsaraDB instance.
   * - PUBLIC_OWN: self-managed database connected over the Internet.
   * - ECS_OWN: self-managed database hosted on an ECS instance.
   * - GATEWAY: database connected through Database Gateway.
   * - VPC_IDC: database connected over a VPC or data center.
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  instanceSource?: string;
  /**
   * @remarks
   * The name of the KMS secret. This parameter is required when you use KMS to manage database credentials. Leave this parameter empty in other scenarios.
   * 
   * @example
   * datasource-secret
   */
  kmsSecret?: string;
  /**
   * @remarks
   * The service port of the database. This parameter is optional. You can leave this parameter empty when you select an existing cloud instance and the port is automatically populated.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The complete ARN of the RAM role. This parameter is required when you use an Alibaba Cloud RAM role to access the data source. Leave this parameter empty in other scenarios.
   * 
   * @example
   * acs:ram::123456789012****:role/DataSourceRole
   */
  roleArn?: string;
  /**
   * @remarks
   * The schema name. This parameter is optional. For ADB_POSTGRESQL, DRDS, POSTGRESQL, and POLARDB_POSTGRESQL, enter the database name. For ORACLE, enter the SID or service name, and prefix the service name with a forward slash (/). For POLARDB_ORACLE, enter the SID. For MAXCOMPUTE, enter the project name. Leave this parameter empty for other types.
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
   * ROLE
   */
  snowflakeRole?: string;
  /**
   * @remarks
   * The name of the Snowflake compute warehouse. This parameter takes effect only when DbType is set to SNOWFLAKE.
   * 
   * @example
   * WAREHOUSE
   */
  snowflakeWarehouse?: string;
  /**
   * @remarks
   * Specifies whether to synchronize the alias. This parameter is optional when testing a connection. This parameter does not modify the data source name.
   * 
   * @example
   * 0
   */
  syncAlias?: number;
  /**
   * @remarks
   * Specifies whether to enable SSL. Valid values:
   * - 1: Enable.
   * - 0: Disable.
   * - -1: Use the default setting.
   * SSL is supported only for ADB_MYSQL, CLICKHOUSE, MARIADB, MYSQL, OCEANBASEX, POLARDB, SELECTDB, and STARROCKS. Leave this parameter empty for other types.
   * 
   * @example
   * 1
   */
  useSsl?: number;
  /**
   * @remarks
   * The ID of the vSwitch. This parameter is required when you access MaxCompute over a VPC. Leave this parameter empty in other scenarios.
   * 
   * @example
   * vsw-bp1234567890
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC. This parameter is required when you access MaxCompute over a VPC. Leave this parameter empty in other scenarios.
   * 
   * @example
   * vpc-bp1234567890
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID. This parameter is required when you access MaxCompute over a VPC. Leave this parameter empty in other scenarios.
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
      dataSourceUuid: 'DataSourceUuid',
      dbType: 'DbType',
      envType: 'EnvType',
      host: 'Host',
      instanceResourceId: 'InstanceResourceId',
      instanceSource: 'InstanceSource',
      kmsSecret: 'KmsSecret',
      port: 'Port',
      roleArn: 'RoleArn',
      schema: 'Schema',
      snowflakeRole: 'SnowflakeRole',
      snowflakeWarehouse: 'SnowflakeWarehouse',
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
      dataSourceUuid: 'string',
      dbType: 'string',
      envType: 'string',
      host: 'string',
      instanceResourceId: 'string',
      instanceSource: 'string',
      kmsSecret: 'string',
      port: 'number',
      roleArn: 'string',
      schema: 'string',
      snowflakeRole: 'string',
      snowflakeWarehouse: 'string',
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

