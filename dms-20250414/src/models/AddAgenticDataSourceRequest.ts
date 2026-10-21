// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAgenticDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the data source. If you do not specify this parameter, the server generates a name.
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
   * The logon password. This is sensitive information. Do not record or disclose it.
   * 
   * @example
   * P@ss****
   */
  authPassword?: string;
  /**
   * @remarks
   * Optional. The authentication type. Valid values:
   * - -1: No authentication required.
   * - 0: Username and password.
   * - 1: Password only.
   * - 2: Password-free.
   * 
   * @example
   * 0
   */
  authType?: number;
  /**
   * @remarks
   * The name of the metadata catalog. If you do not specify this parameter, the name is automatically generated. The name can be up to 128 characters in length. It must start with a Chinese character, a letter, or an underscore, and can contain digits and hyphens. It cannot contain only digits.
   * 
   * @example
   * demo_catalog
   */
  catalogName?: string;
  /**
   * @remarks
   * The entry method. Valid values:
   * - INSTANCE_ID: Select an existing cloud instance.
   * - HOST_PORT: Enter the endpoint and port.
   * If you do not specify this parameter, HOST_PORT is used.
   * 
   * @example
   * HOST_PORT
   */
  createMode?: string;
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
   * The environment type. Valid values: product, pre, dev, test, sit, uat, pet, and stag.
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * Optional. The domain name or IP address of the database. Do not include the protocol, path, or port. You can leave this parameter empty if you select an existing cloud instance and the address is automatically populated.
   * 
   * @example
   * mysql.example.com
   */
  host?: string;
  /**
   * @remarks
   * The ID of the cloud resource instance. This parameter is required when you select an existing cloud instance. You can leave this parameter empty when you enter an endpoint.
   * 
   * @example
   * rm-bp1234567890
   */
  instanceResourceId?: string;
  /**
   * @remarks
   * The source of the data source. Valid values:
   * - RDS: An ApsaraDB instance.
   * - PUBLIC_OWN: A self-managed database on the Internet.
   * - ECS_OWN: A self-managed database on an ECS instance.
   * - GATEWAY: A database accessed through Database Gateway.
   * - VPC_IDC: A database accessed through a VPC or data center.
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  instanceSource?: string;
  /**
   * @remarks
   * The name of the credential. Specify this parameter when you use Key Management Service (KMS) to manage database credentials. Leave this parameter empty in other scenarios.
   * 
   * @example
   * datasource-secret
   */
  kmsSecret?: string;
  /**
   * @remarks
   * Optional. The ID of the data access security policy. This policy is used to control the access and protection rules for the data source.
   * 
   * @example
   * sp-usr-example
   */
  policyId?: string;
  /**
   * @remarks
   * Optional. The service port of the database. You can leave this parameter empty if you select an existing cloud instance and the port is automatically populated.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The complete ARN of the Resource Access Management (RAM) role. Specify this parameter when you use a RAM role to access the data source. Leave this parameter empty in other scenarios.
   * 
   * @example
   * acs:ram::123456789012****:role/DataSourceRole
   */
  roleArn?: string;
  /**
   * @remarks
   * Optional. For ADB_POSTGRESQL, DRDS, POSTGRESQL, and POLARDB_POSTGRESQL, enter the database name. For ORACLE, enter the SID or service name, and prefix the service name with a forward slash (/). For POLARDB_ORACLE, enter the SID. For MAXCOMPUTE, enter the project name. Leave this parameter empty for other types.
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
   * Specifies whether to use the cloud instance name as the data source name. Valid values:
   * - 1: Yes.
   * - 0: No.
   * This parameter takes effect only when you select a cloud database instance.
   * 
   * @example
   * 0
   */
  syncAlias?: number;
  /**
   * @remarks
   * Specifies whether to use SSL. Valid values:
   * - 1: Enable.
   * - 0: Disable.
   * - -1: Use the default setting.
   * Only ADB_MYSQL, CLICKHOUSE, MARIADB, MYSQL, OCEANBASEX, POLARDB, SELECTDB, and STARROCKS support SSL. Leave this parameter empty for other types.
   * 
   * @example
   * 1
   */
  useSsl?: number;
  /**
   * @remarks
   * The ID of the destination vSwitch. Specify this parameter when you access MaxCompute through a VPC. Leave this parameter empty in other scenarios.
   * 
   * @example
   * vsw-bp1234567890
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the destination VPC. Specify this parameter when you access MaxCompute through a VPC. Leave this parameter empty in other scenarios.
   * 
   * @example
   * vpc-bp1234567890
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the destination zone. Specify this parameter when you access MaxCompute through a VPC. Leave this parameter empty in other scenarios.
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
      createMode: 'CreateMode',
      dbType: 'DbType',
      envType: 'EnvType',
      host: 'Host',
      instanceResourceId: 'InstanceResourceId',
      instanceSource: 'InstanceSource',
      kmsSecret: 'KmsSecret',
      policyId: 'PolicyId',
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
      createMode: 'string',
      dbType: 'string',
      envType: 'string',
      host: 'string',
      instanceResourceId: 'string',
      instanceSource: 'string',
      kmsSecret: 'string',
      policyId: 'string',
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

