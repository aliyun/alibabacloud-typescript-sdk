// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequest extends $dara.Model {
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
   * datalink_test
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
   * dbuser
   */
  databaseUser?: string;
  /**
   * @remarks
   * The ID of the user who assumes the database administrator (DBA) role of the database instance. You can call the [ListUsers](https://help.aliyun.com/document_detail/141938.html) or [GetInstance](https://help.aliyun.com/document_detail/141567.html) operation to query the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 27****
   */
  dbaId?: string;
  /**
   * @remarks
   * Specifies whether to enable the lock-free schema change feature for the database instance. Valid values:
   * 
   * *   **0:** disables the lock-free schema change feature.
   * *   **1**: uses the online DDL of MySQL first.
   * *   **2**: uses the lock-free schema change feature of DMS first.
   * 
   * @example
   * 0
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
   * > This parameter is required if InstanceSource is set to RDS, ECS_OWN, and VPC_IDC.
   * 
   * @example
   * cn-hangzhou
   */
  ecsRegion?: string;
  /**
   * @remarks
   * *   **Y:** enables the sensitive data protection feature
   * *   **N:** disables the sensitive data protection feature
   * *   **NULL or other:** does not update the status of the sensitive data protection feature
   * 
   * @example
   * Y
   */
  enableSellSitd?: string;
  /**
   * @remarks
   * The type of the environment in which the database instance is deployed. Valid values:
   * 
   * *   **product:** production environment
   * *   **dev:** development environment
   * *   **pre:** pre-release environment
   * *   **test:** test environment
   * *   **sit:** system integration testing (SIT) environment
   * *   **uat:** user acceptance testing (UAT) environment
   * *   **pet:** stress testing environment
   * *   **stag:** staging environment
   * 
   * This parameter is required.
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * The timeout period for exporting data from the database instance.
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
   * 192.XXX.0.56
   */
  host?: string;
  /**
   * @remarks
   * The alias of the database instance. Specify an alias that can help you identify the database instance in DMS.
   * 
   * This parameter is required.
   * 
   * @example
   * instance_test
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The ID of the database instance. You can call the [GetInstance](https://help.aliyun.com/document_detail/141567.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 126****
   */
  instanceId?: string;
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
   * ECS_OWN
   */
  instanceSource?: string;
  /**
   * @remarks
   * The type of the database. For more information about the valid values of this parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * This parameter is required.
   * 
   * @example
   * mysql
   */
  instanceType?: string;
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
   * The timeout period for querying data in the database instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  queryTimeout?: number;
  /**
   * @remarks
   * The name of the security rule set (GroupName) for the instance. You can call the [ListStandardGroups](https://help.aliyun.com/document_detail/417891.html) or [GetInstance](https://help.aliyun.com/document_detail/141567.html) operation to query the name of the security rule set.
   * 
   * This parameter is required.
   * 
   * @example
   * 3****
   */
  safeRuleId?: string;
  /**
   * @remarks
   * The system ID (SID) of the database instance.
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
   * false
   */
  skipTest?: boolean;
  /**
   * @remarks
   * The ID of the classification template. You can call the [ListClassificationTemplates](https://help.aliyun.com/document_detail/460613.html) operation to query the template ID.
   * 
   * @example
   * 3***
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
   * 0
   */
  useDsql?: number;
  /**
   * @remarks
   * The ID of the VPC to which the database instance belongs.
   * 
   * > This parameter is required if the InstanceSource parameter is set to VPC_IDC.
   * 
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      dataLinkName: 'DataLinkName',
      databasePassword: 'DatabasePassword',
      databaseUser: 'DatabaseUser',
      dbaId: 'DbaId',
      ddlOnline: 'DdlOnline',
      ecsInstanceId: 'EcsInstanceId',
      ecsRegion: 'EcsRegion',
      enableSellSitd: 'EnableSellSitd',
      envType: 'EnvType',
      exportTimeout: 'ExportTimeout',
      host: 'Host',
      instanceAlias: 'InstanceAlias',
      instanceId: 'InstanceId',
      instanceSource: 'InstanceSource',
      instanceType: 'InstanceType',
      port: 'Port',
      queryTimeout: 'QueryTimeout',
      safeRuleId: 'SafeRuleId',
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
      dbaId: 'string',
      ddlOnline: 'number',
      ecsInstanceId: 'string',
      ecsRegion: 'string',
      enableSellSitd: 'string',
      envType: 'string',
      exportTimeout: 'number',
      host: 'string',
      instanceAlias: 'string',
      instanceId: 'string',
      instanceSource: 'string',
      instanceType: 'string',
      port: 'number',
      queryTimeout: 'number',
      safeRuleId: 'string',
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

