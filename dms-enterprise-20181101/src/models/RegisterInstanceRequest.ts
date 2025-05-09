// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database link for cross-database queries.
   * 
   * > 
   * 
   * *   This parameter is required if UseDsql is set to 1.
   * 
   * *   The name can contain only lowercase letters and underscores (_).
   * 
   * *   The name must be unique within a tenant.
   * 
   * @example
   * dblink_test
   */
  dataLinkName?: string;
  /**
   * @remarks
   * The password that is used to log on to the database.
   * 
   * This parameter is required.
   * 
   * @example
   * ******
   */
  databasePassword?: string;
  /**
   * @remarks
   * The account that is used to log on to the database.
   * 
   * This parameter is required.
   * 
   * @example
   * dmstest
   */
  databaseUser?: string;
  /**
   * @remarks
   * The ID of the user who assumes the DBA role of the database instance. You can call the [ListUsers](https://help.aliyun.com/document_detail/141938.html) or [GetInstance](https://help.aliyun.com/document_detail/141567.html) operation to query the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 22275482072787****
   */
  dbaUid?: number;
  /**
   * @remarks
   * The ID of the user who assumes the DBA role of the database instance. If the user ID is a non-numeric value such as a role or an account, you can use this parameter to replace DbaUid.
   * 
   * @example
   * 22275482072787****
   */
  dbaUidByString?: string;
  /**
   * @remarks
   * Specifies whether to enable the lock-free schema change feature for the database instance. Valid values:
   * 
   * *   **0**: disables the lock-free schema change feature.
   * *   **1**: uses the online DDL of MySQL first.
   * *   **2**: uses the lock-free schema change feature of DMS first.
   * 
   * > Supported database types: ApsaraDB RDS for MySQL, PolarDB for MySQL, ApsaraDB MyBase for MySQL, and third-party MySQL databases.
   * 
   * @example
   * 2
   */
  ddlOnline?: number;
  /**
   * @remarks
   * The ID of the ECS instance on which the database instance is deployed.
   * 
   * > This parameter is required if the InstanceSource parameter is set to ECS_OWN.
   * 
   * @example
   * i-2zei9gs1t7h8l7ac****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the database instance resides.
   * 
   * > This parameter is required if the InstanceSource parameter is set to RDS, ECS_OWN, or VPC_IDC.
   * 
   * @example
   * cn-hangzhou
   */
  ecsRegion?: string;
  /**
   * @remarks
   * *   **Y:** enables the sensitive data protection feature
   * *   **NULL or other:** disables the sensitive data protection feature
   * 
   * @example
   * Y
   */
  enableSellSitd?: string;
  /**
   * @remarks
   * The type of the environment in which the database instance is deployed. Valid values:
   * 
   * *   product: production environment
   * *   dev: development environment
   * *   pre: pre-release environment
   * *   test: test environment
   * *   sit: system integration testing (SIT) environment
   * *   uat: user acceptance testing (UAT) environment
   * *   pet: stress testing environment
   * *   stag: staging environment
   * 
   * This parameter is required.
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * The timeout period for exporting data from the database instance. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 600
   */
  exportTimeout?: number;
  /**
   * @remarks
   * The host address that is used to connect to the database instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.XX.XXX.254
   */
  host?: string;
  /**
   * @remarks
   * The alias of the database instance. Specify an alias that can help you identify the database instance in DMS.
   * 
   * This parameter is required.
   * 
   * @example
   * Test instance
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The source of the database instance. Valid values:
   * 
   * *   **PUBLIC_OWN:** a self-managed database instance that is deployed on the Internet
   * *   **RDS:** an ApsaraDB RDS instance
   * *   **ECS_OWN:** a self-managed database that is deployed on an Elastic Compute Service (ECS) instance
   * *   **VPC_IDC:** a self-managed database instance that is deployed in a data center connected over a virtual private cloud (VPC)
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  instanceSource?: string;
  /**
   * @remarks
   * The type of the database. For more information about the valid values of this parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  instanceType?: string;
  /**
   * @remarks
   * The network type of the database instance. Valid values:
   * 
   * *   **CLASSIC:** classic network
   * *   **VPC:** VPC
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The port that is used to connect to the database instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The timeout period for querying data in the database instance. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  queryTimeout?: number;
  /**
   * @remarks
   * The name of the security rule set (GroupName) for the database instance. You can call the [ListStandardGroups](https://help.aliyun.com/document_detail/417891.html) or [GetInstance](https://help.aliyun.com/document_detail/141567.html) operation to query the name of the security rule set.
   * 
   * This parameter is required.
   * 
   * @example
   * Test
   */
  safeRule?: string;
  /**
   * @remarks
   * The system ID (SID) of the database.
   * 
   * > This parameter is required if the InstanceType parameter is set to ORACLE.
   * 
   * @example
   * XXX
   */
  sid?: string;
  /**
   * @remarks
   * Specifies whether to skip the connectivity test. Valid values:
   * 
   * *   **true:** skips the connectivity test
   * *   **false:** does not skip the connectivity test
   * 
   * @example
   * true
   */
  skipTest?: boolean;
  /**
   * @remarks
   * The ID of the classification template. You can call the [ListClassificationTemplates](https://help.aliyun.com/document_detail/460613.html) operation to query the template ID.
   * 
   * @example
   * 31***
   */
  templateId?: number;
  /**
   * @remarks
   * The type of the classification template. You can call the [ListClassificationTemplates](https://help.aliyun.com/document_detail/460613.html) operation to query the template type.
   * 
   * @example
   * INNER
   */
  templateType?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * Specifies whether to enable the cross-database query feature for the database instance. Valid values:
   * 
   * *   **0**: disables the cross-database query feature.
   * *   **1**: enables the cross-database query feature.
   * 
   * > Supported database types: MySQL, SQL Server, PostgreSQL, PolarDB for PostgreSQL (compatible with Oracle), and ApsaraDB for Redis.
   * 
   * @example
   * 1
   */
  useDsql?: number;
  /**
   * @remarks
   * The ID of the VPC to which the database instance belongs.
   * 
   * > This parameter is required if the InstanceSource parameter is set to VPC_IDC.
   * 
   * @example
   * vpc-xxxxxxxxxxxxxxxxxxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      dataLinkName: 'DataLinkName',
      databasePassword: 'DatabasePassword',
      databaseUser: 'DatabaseUser',
      dbaUid: 'DbaUid',
      dbaUidByString: 'DbaUidByString',
      ddlOnline: 'DdlOnline',
      ecsInstanceId: 'EcsInstanceId',
      ecsRegion: 'EcsRegion',
      enableSellSitd: 'EnableSellSitd',
      envType: 'EnvType',
      exportTimeout: 'ExportTimeout',
      host: 'Host',
      instanceAlias: 'InstanceAlias',
      instanceSource: 'InstanceSource',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      port: 'Port',
      queryTimeout: 'QueryTimeout',
      safeRule: 'SafeRule',
      sid: 'Sid',
      skipTest: 'SkipTest',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      tid: 'Tid',
      useDsql: 'UseDsql',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLinkName: 'string',
      databasePassword: 'string',
      databaseUser: 'string',
      dbaUid: 'number',
      dbaUidByString: 'string',
      ddlOnline: 'number',
      ecsInstanceId: 'string',
      ecsRegion: 'string',
      enableSellSitd: 'string',
      envType: 'string',
      exportTimeout: 'number',
      host: 'string',
      instanceAlias: 'string',
      instanceSource: 'string',
      instanceType: 'string',
      networkType: 'string',
      port: 'number',
      queryTimeout: 'number',
      safeRule: 'string',
      sid: 'string',
      skipTest: 'boolean',
      templateId: 'number',
      templateType: 'string',
      tid: 'number',
      useDsql: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

