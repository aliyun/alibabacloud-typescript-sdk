// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database link for cross-database queries.
   * 
   * > 
   * 
   * *   This property must be specified when UseDsql is set to 1.
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
   * The password of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * test***
   */
  databasePassword?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * testsdb
   */
  databaseUser?: string;
  /**
   * @remarks
   * The ID of the user who assumes the database administrator (DBA) role. You can call the [ListUsers](https://help.aliyun.com/document_detail/141938.html) or [GetInstance](https://help.aliyun.com/document_detail/141567.html) operation to obtain the value of this parameter.
   * 
   * @example
   * 27****
   */
  dbaId?: number;
  /**
   * @remarks
   * Specifies whether to enable Lock-free Schema Change. Valid values:
   * 
   * *   **0**: does not enable lock-free schema change.
   * *   **1**: uses the native online DDL operations of MySQL first.
   * *   **2:** uses lock-free schema change first.
   * 
   * > Supported databases include ApsaraDB RDS for MySQL, PolarDB for MySQL, ApsaraDB MyBase for MySQL, and third-party MySQL databases.
   * 
   * @example
   * 2
   */
  ddlOnline?: number;
  /**
   * @remarks
   * The ID of the instance. If your instance is a database instance connected by using a database gateway, specify the gateway ID for this parameter.
   * 
   * > This parameter is required if InstanceSource is set to ECS_OWN or GATEWAY.
   * 
   * @example
   * i-2zei9gs1t7h8l7ac****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The region in which the ECS instance resides.
   * 
   * > This parameter is required if InstanceSource is set to RDS, ECS_OWN, GATEWAY, or VPC_IDC.
   * 
   * @example
   * cn-hangzhou
   */
  ecsRegion?: string;
  /**
   * @remarks
   * Specifies whether to enable Security Collaboration for the database instance. Valid values:
   * 
   * *   Y: enables Security Collaboration.
   * *   N: disables Security Collaboration.
   * 
   * @example
   * Y
   */
  enableSellCommon?: string;
  /**
   * @remarks
   * Specifies whether to enable sensitive data protection. Valid values:
   * 
   * *   Y: enables the sensitive data protection feature for the database instance.
   * *   N: disables the sensitive data protection feature for the database instance.
   * 
   * @example
   * Y
   */
  enableSellSitd?: string;
  /**
   * @remarks
   * Specifies whether to enable Stable Change for the database instance. Valid values:
   * 
   * *   Y: Enables Stable Change.
   * *   N: Disables Stable Change.
   * 
   * @example
   * NULL
   */
  enableSellStable?: string;
  /**
   * @remarks
   * Specifies whether to enable the security hosting feature for the database instance. Valid values:
   * 
   * *   Y: enables the security hosting feature for the database instance.
   * *   N: disables the security hosting feature for the database instance.
   * 
   * This parameter is required.
   * 
   * @example
   * Y
   */
  enableSellTrust?: string;
  /**
   * @remarks
   * The type of the environment to which the database instance belongs. Valid values:
   * 
   * *   **product:** the production environment.
   * *   **dev**: development environment.
   * *   **pre**: pre-release environment.
   * *   **test**: test environment.
   * *   **sit**: system integration testing (SIT) environment.
   * *   **uat**: user acceptance testing (UAT) environment.
   * *   **pet**: stress testing environment.
   * *   **stag**: staging environment.
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
   * 86400
   */
  exportTimeout?: number;
  /**
   * @remarks
   * The endpoint that is used to connect to the database.
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
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The source of the database instance. Valid values:
   * 
   * *   **PUBLIC_OWN**: a self-managed database instance that is deployed on the Internet.
   * *   **RDS**: an ApsaraDB RDS instance.
   * *   **ECS_OWN**: a self-managed database instance that is deployed on an Elastic Compute Service (ECS) instance.
   * *   **VPC_IDC**: a self-managed database instance that is deployed in a data center connected over a virtual private cloud (VPC).
   * *   **GATEWAY**: a database instance connected by using a database gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  instanceSource?: string;
  /**
   * @remarks
   * The type of the database instance. For more information about the valid values of this parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  instanceType?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **CLASSIC:** the classic network.
   * *   **VPC**
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The port that is used to connect to the database.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The timeout period for querying data from the database instance. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 7200
   */
  queryTimeout?: number;
  roleArn?: string;
  /**
   * @remarks
   * The name of the security rule set for the database instance. This parameter is required if Security Collaboration is enabled. You can call the[ListStandardGroups](https://help.aliyun.com/document_detail/465940.html) or [GetInstance](https://help.aliyun.com/document_detail/465826.html) operation to obtain the name of the security rule set from GroupName.
   */
  safeRule?: string;
  /**
   * @remarks
   * The system ID (SID) of the database instance.
   * 
   * > This parameter is required if InstanceType is set to ORACLE.
   * 
   * @example
   * testSid
   */
  sid?: string;
  /**
   * @remarks
   * Specifies whether to skip the connectivity test. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  skipTest?: boolean;
  /**
   * @remarks
   * The ID of the classification and grading template. You can call the [ListClassificationTemplates](https://help.aliyun.com/document_detail/465947.html) operation to query the template ID.
   * 
   * @example
   * 31***
   */
  templateId?: number;
  /**
   * @remarks
   * The type of the classification and grading template. You can call the [ListClassificationTemplates](https://help.aliyun.com/document_detail/465947.html) operation to query the template type.
   * 
   * @example
   * INNER
   */
  templateType?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > You can move the pointer over the profile picture in the upper-right corner of the DMS console to obtain the tenant ID.
   * 
   * @example
   * 23****
   */
  tid?: number;
  /**
   * @remarks
   * Specifies whether to enable cross-database query for the database instance. Valid values:
   * 
   * *   **0: does not enable cross-database query.**
   * *   **1**: enables cross-database query.
   * 
   * > Supported databases include MySQL, SQL Server, PostgreSQL, PolarDB for Oracle, and Redis.
   * 
   * @example
   * 1
   */
  useDsql?: number;
  /**
   * @remarks
   * Specifies whether to allow Data Management Service (DMS) to connect to the database instance by using SSL connections. Before you use SSL connections, make sure that the SSL encryption feature is enabled for the database instance. Valid values:
   * 
   * *   **0** (default): DMS automatically checks whether self-negotiation is enabled for the database instance. DMS automatically checks whether the SSL encryption feature is enabled for the database instance. If the SSL encryption feature is enabled, DMS connects to the database instance by using SSL connections. Otherwise, DMS connects to the database instance without encryption.
   * *   **1**: DMS connects to the database instance by using SSL connections. This value is invalid if the SSL encryption feature is disabled for the database instance.
   * *   **-1**: DMS does not connect to the database instance by using SSL connections.
   * 
   * > 
   * 
   * *   This parameter is available only for a MySQL or Redis database instance.
   * 
   * *   SSL encrypts network connections at the transport layer to improve the security and integrity of data in transmission. However, SSL increases the response time of network connections.
   * 
   * @example
   * 0
   */
  useSsl?: number;
  /**
   * @remarks
   * The ID of the instance connected over a VPC.
   * 
   * > This parameter is required if InstanceSource is set to VPC_IDC.
   * 
   * @example
   * vpc-2zef4o1hu7ljd****
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
      enableSellCommon: 'EnableSellCommon',
      enableSellSitd: 'EnableSellSitd',
      enableSellStable: 'EnableSellStable',
      enableSellTrust: 'EnableSellTrust',
      envType: 'EnvType',
      exportTimeout: 'ExportTimeout',
      host: 'Host',
      instanceAlias: 'InstanceAlias',
      instanceSource: 'InstanceSource',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      port: 'Port',
      queryTimeout: 'QueryTimeout',
      roleArn: 'RoleArn',
      safeRule: 'SafeRule',
      sid: 'Sid',
      skipTest: 'SkipTest',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      tid: 'Tid',
      useDsql: 'UseDsql',
      useSsl: 'UseSsl',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLinkName: 'string',
      databasePassword: 'string',
      databaseUser: 'string',
      dbaId: 'number',
      ddlOnline: 'number',
      ecsInstanceId: 'string',
      ecsRegion: 'string',
      enableSellCommon: 'string',
      enableSellSitd: 'string',
      enableSellStable: 'string',
      enableSellTrust: 'string',
      envType: 'string',
      exportTimeout: 'number',
      host: 'string',
      instanceAlias: 'string',
      instanceSource: 'string',
      instanceType: 'string',
      networkType: 'string',
      port: 'number',
      queryTimeout: 'number',
      roleArn: 'string',
      safeRule: 'string',
      sid: 'string',
      skipTest: 'boolean',
      templateId: 'number',
      templateType: 'string',
      tid: 'number',
      useDsql: 'number',
      useSsl: 'number',
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

