// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgenticDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the AnalyticDB for MySQL Spark resource group. This parameter takes effect only when DbType is set to ADB_MYSQL_SPARK. If you do not specify this parameter, the original resource group is retained. This parameter is independent of Schema (database name) and they cannot be used interchangeably.
   * 
   * @example
   * resourceGroup1
   */
  adbSparkResourceGroup?: string;
  /**
   * @remarks
   * The new display name of the data source. If you do not specify this parameter, the value is not updated.
   * 
   * @example
   * demo_mysql
   */
  alias?: string;
  /**
   * @remarks
   * The new logon username. If you do not specify this parameter, the value is not updated.
   * 
   * @example
   * db_user
   */
  authAccount?: string;
  /**
   * @remarks
   * The new logon password. If you do not specify this parameter, the value is not updated. This is sensitive information. Do not record or disclose it.
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
   * If you do not specify this parameter, the value is not updated.
   * 
   * @example
   * 0
   */
  authType?: number;
  /**
   * @remarks
   * The new name of the metadata catalog. If you do not specify this parameter, the value is not updated. The name can be up to 128 characters in length. It must start with a Chinese character, a letter, or an underscore, and can contain digits and hyphens. It cannot contain only digits.
   * 
   * @example
   * demo_catalog
   */
  catalogName?: string;
  /**
   * @remarks
   * The registration method. Valid values:
   * - INSTANCE_ID: Select an existing cloud instance.
   * - HOST_PORT: Register by endpoint and port.
   * If you do not specify this parameter, the value is not updated.
   * 
   * @example
   * HOST_PORT
   */
  createMode?: string;
  /**
   * @remarks
   * The UUID of the data source to be updated.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou_a1b2c3d4e5f6
   */
  dataSourceUuid?: string;
  /**
   * @remarks
   * Modifying the data source type is not supported. Do not specify this parameter.
   * 
   * @example
   * MYSQL
   */
  dbType?: string;
  /**
   * @remarks
   * The environment type. Valid values: product, pre, dev, test, sit, uat, pet, and stag. If you do not specify this parameter, the value is not updated.
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * Optional. The new domain name or IP address of the database. Do not include the protocol, path, or port. If you do not specify this parameter, the value is not updated.
   * 
   * @example
   * mysql.example.com
   */
  host?: string;
  /**
   * @remarks
   * The new cloud resource instance ID. If you do not specify this parameter, the value is not updated.
   * 
   * @example
   * rm-bp1234567890
   */
  instanceResourceId?: string;
  /**
   * @remarks
   * The new name of the KMS managed credential. If you do not specify this parameter, the value is not updated.
   * 
   * @example
   * datasource-secret
   */
  kmsSecret?: string;
  /**
   * @remarks
   * Optional. The new ID of the data access security policy. If you do not specify this parameter, the value is not updated.
   * 
   * @example
   * sp-usr-example
   */
  policyId?: string;
  /**
   * @remarks
   * Optional. The new service port of the database. If you do not specify this parameter, the value is not updated.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The new Alibaba Cloud RAM role ARN. If you do not specify this parameter, the value is not updated.
   * 
   * @example
   * acs:ram::123456789012****:role/DataSourceRole
   */
  roleArn?: string;
  /**
   * @remarks
   * Optional. For ADB_POSTGRESQL, DRDS, POSTGRESQL, and POLARDB_POSTGRESQL, specify the database name. For ORACLE, specify the SID or service name, and prefix the service name with a forward slash (/). For POLARDB_ORACLE, specify the SID. For MAXCOMPUTE, specify the project name. For other types, leave this parameter empty. If you do not specify this parameter, the value is not updated.
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
   * If you do not specify this parameter, the value is not updated.
   * 
   * @example
   * 0
   */
  syncAlias?: number;
  /**
   * @remarks
   * The new SSL setting. Valid values:
   * - 1: Enable.
   * - 0: Disable.
   * - -1: Use the default setting.
   * If you do not specify this parameter, the value is not updated. SSL is supported only for ADB_MYSQL, CLICKHOUSE, MARIADB, MYSQL, OCEANBASEX, POLARDB, SELECTDB, and STARROCKS.
   * 
   * @example
   * 1
   */
  useSsl?: number;
  /**
   * @remarks
   * The ID of the vSwitch used to access the data source over a VPC NAT link. Optional. If you do not specify this parameter, the original value is retained.
   * 
   * @example
   * vsw-23dscddcffvf3****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC used to access the data source over a VPC NAT link. This parameter is used to supplement the missing VPC information in the instance details. Optional. If you do not specify this parameter, the original value is retained.
   * 
   * @example
   * vpc-25cdvfeq58pl****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone used to access the data source over a VPC NAT link. Optional. If you do not specify this parameter, the original value is retained.
   * 
   * @example
   * cn-hangzhou-d
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      adbSparkResourceGroup: 'AdbSparkResourceGroup',
      alias: 'Alias',
      authAccount: 'AuthAccount',
      authPassword: 'AuthPassword',
      authType: 'AuthType',
      catalogName: 'CatalogName',
      createMode: 'CreateMode',
      dataSourceUuid: 'DataSourceUuid',
      dbType: 'DbType',
      envType: 'EnvType',
      host: 'Host',
      instanceResourceId: 'InstanceResourceId',
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
      adbSparkResourceGroup: 'string',
      alias: 'string',
      authAccount: 'string',
      authPassword: 'string',
      authType: 'number',
      catalogName: 'string',
      createMode: 'string',
      dataSourceUuid: 'string',
      dbType: 'string',
      envType: 'string',
      host: 'string',
      instanceResourceId: 'string',
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

