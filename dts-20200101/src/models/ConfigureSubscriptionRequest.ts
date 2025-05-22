// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The UNIX timestamp that represents the start time of change tracking. Unit: seconds.
   * 
   * >  You can use a search engine to obtain a UNIX timestamp converter.
   * 
   * @example
   * 1616902385
   */
  checkpoint?: string;
  /**
   * @remarks
   * The objects for which you want to track data changes. The value must be a JSON string. For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"dtstest":{"name":"dtstest","all":true}}
   */
  dbList?: string;
  /**
   * @remarks
   * The ID of the DTS dedicated cluster on which the change tracking task is scheduled to run.
   * 
   * @example
   * dtscluster_atyl3b5214uk***
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * Specifies whether to monitor the task latency. Valid values:
   * 
   * *   **true**: monitors the task latency.
   * *   **false**: does not monitor the task latency.
   * 
   * @example
   * true
   */
  delayNotice?: boolean;
  /**
   * @remarks
   * The mobile numbers to which latency-related alerts are sent. Separate multiple mobile numbers with commas (,).
   * 
   * > 
   * *   This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers.
   * *   Users of the international site (alibabacloud.com) cannot receive alerts by using mobile phones, but can [configure alert rules for DTS tasks in the CloudMonitor console](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  delayPhone?: string;
  /**
   * @remarks
   * The threshold for triggering latency-related alerts. Unit: seconds. The value must be an integer. You can set the threshold based on your business needs. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
   * 
   * >  If the **DelayNotice** parameter is set to **true**, this parameter is required.
   * 
   * @example
   * 10
   */
  delayRuleTime?: number;
  /**
   * @remarks
   * Environment label of the DTS instance, with values:
   * - **normal**: **general** - **online**: **production**
   * 
   * @example
   * normal
   */
  dtsBisLabel?: string;
  /**
   * @remarks
   * The ID of the change tracking instance. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the instance ID.
   * 
   * @example
   * dtsy0zz3t13h7d****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the change tracking task. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the task ID.
   * 
   * @example
   * y0zz3t13h7d****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The name of the change tracking task.
   * 
   * >  We recommend that you specify a descriptive name for easy identification. You do not need to use a unique name.
   * 
   * This parameter is required.
   * 
   * @example
   * for_test
   */
  dtsJobName?: string;
  /**
   * @remarks
   * Specifies whether to monitor the task status. Valid values:
   * 
   * *   **true**: monitors the task status.
   * *   **false**: does not monitor the task status.
   * 
   * @example
   * true
   */
  errorNotice?: boolean;
  /**
   * @remarks
   * The mobile numbers to which status-related alerts are sent. Separate multiple mobile numbers with commas (,).
   * 
   * > 
   * *   This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers.
   * *   Users of the international site (alibabacloud.com) cannot receive alerts by using mobile phones, but can [configure alert rules for DTS tasks in the CloudMonitor console](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  errorPhone?: string;
  /**
   * @remarks
   * The DU upper limit of the Serverless instance, with values being: 2, 4, 8, 16. 
   * Currently, this feature is not supported, please do not pass in parameters.
   * 
   * @example
   * 16
   */
  maxDu?: number;
  /**
   * @remarks
   * The lower limit of DU for Serverless instances, with values being: 1, 2, 4, 8, 16. 
   * This feature is currently not supported, please do not pass in parameters.
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The ID of the region in which the Data Transmission Service (DTS) instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The reserved parameter of DTS. The value must be a JSON string. You can specify this parameter to add more configurations of the source or destination database to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance. For more information, see [MigrationReserved](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {      "srcInstanceId": "cen-9kqshqum*******"  }
   */
  reserve?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Name of the database to be subscribed.
   * 
   * @example
   * dtstestdata
   */
  sourceEndpointDatabaseName?: string;
  /**
   * @remarks
   * The engine of the source database. Valid values: **MySQL**, **PostgreSQL**, and **Oracle**.
   * 
   * >  If the source database is a self-managed database, you must specify this parameter.
   * 
   * @example
   * PostgreSQL
   */
  sourceEndpointEngineName?: string;
  /**
   * @remarks
   * The endpoint of the source database.
   * 
   * >  This parameter is required only when the source database is a self-managed database.
   * 
   * @example
   * 172.16.8*.***
   */
  sourceEndpointIP?: string;
  /**
   * @remarks
   * The ID of the source database.
   * 
   * >  This parameter is required only when the source database is an ApsaraDB RDS for MySQL instance, a PolarDB-X 1.0 instance, or a PolarDB for MySQL cluster.
   * 
   * @example
   * rm-bp1zc3iyqe3qw****
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The type of the source database. Valid values:
   * 
   * *   **RDS**: ApsaraDB RDS for MySQL instance
   * *   **PolarDB**: PolarDB for MySQL cluster
   * *   **DRDS**: PolarDB-X 1.0 instance
   * *   **LocalInstance**: self-managed database with a public IP address
   * *   **ECS**: self-managed database hosted on an Elastic Compute Service (ECS) instance
   * *   **Express**: self-managed database connected over Express Connect
   * *   **CEN**: self-managed database connected over Cloud Enterprise Network (CEN)
   * *   **dg**: self-managed database connected over Database Gateway
   * 
   * @example
   * RDS
   */
  sourceEndpointInstanceType?: string;
  /**
   * @remarks
   * The system ID (SID) of the Oracle database.
   * 
   * >  This parameter is required only when the source database is a self-managed Oracle database and is not deployed in the Real Application Clusters (RAC) architecture.
   * 
   * @example
   * testsid
   */
  sourceEndpointOracleSID?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the source database belongs.
   * 
   * >  This parameter is required only when you track data changes across different Alibaba Cloud accounts.
   * 
   * @example
   * 140692647406****
   */
  sourceEndpointOwnerID?: string;
  /**
   * @remarks
   * The password of the account that is used to connect to the source database.
   * 
   * @example
   * Test123456
   */
  sourceEndpointPassword?: string;
  /**
   * @remarks
   * The service port number of the source database.
   * 
   * >  This parameter is required only when the source database is a self-managed database.
   * 
   * @example
   * 3306
   */
  sourceEndpointPort?: string;
  /**
   * @remarks
   * The ID of the region in which the source database resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * >  If the source database is a self-managed database with a public IP address, you can set the value of this parameter to **cn-hangzhou** or the ID of the region that is closest to the region in which the self-managed database resides.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The RAM role that is authorized to access the source database. This parameter is required if the source database does not belong to the Alibaba Cloud account that you use to configure the change tracking task. In this case, you must authorize the Alibaba Cloud account to access the source database by using a RAM role.
   * 
   * >  For more information about the permissions that are required for the RAM role and how to grant the permissions to the RAM role, see [Configure RAM authorization for cross-account data migration and synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  sourceEndpointRole?: string;
  /**
   * @remarks
   * The username of the account that is used to connect to the source database.
   * 
   * >  The permissions that are required for the database account vary with the change tracking scenario. For more information, see [Prepare the source database account for change tracking](https://help.aliyun.com/document_detail/212653.html).
   * 
   * @example
   * dtstest
   */
  sourceEndpointUserName?: string;
  /**
   * @remarks
   * The path of the certificate authority (CA) certificate that is used if the connection to the source database is encrypted by using the SSL protocol.
   * 
   * >  This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcCaCertificateOssUrl?: string;
  /**
   * @remarks
   * The key of the CA certificate that is used if the connection to the source database is encrypted by using the SSL protocol.
   * 
   * >  This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcCaCertificatePassword?: string;
  /**
   * @remarks
   * The path to the client certificate that is used if the connection to the source database is encrypted by using the SSL protocol.
   * 
   * >  This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientCertOssUrl?: string;
  /**
   * @remarks
   * The path to the private key of the client certificate that is used if the connection to the source database is encrypted by using the SSL protocol.
   * 
   * >  This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientKeyOssUrl?: string;
  /**
   * @remarks
   * The password of the private key of the client certificate that is used if the connection to the source database is encrypted by using the SSL protocol.
   * 
   * >  This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientPassword?: string;
  /**
   * @remarks
   * Specifies whether to track DDL statements. Default value: true. Valid values:
   * 
   * *   **true**: tracks DDL statements.
   * *   **false**: does not track DDL statements.
   * 
   * @example
   * true
   */
  subscriptionDataTypeDDL?: boolean;
  /**
   * @remarks
   * Specifies whether to track DML statements. Default value: true. Valid values:
   * 
   * *   **true**: tracks DML statements.
   * *   **false**: does not track DML statements.
   * 
   * @example
   * true
   */
  subscriptionDataTypeDML?: boolean;
  /**
   * @remarks
   * The network type of the change tracking task. Set the value to **vpc**. A value of vpc indicates the Virtual Private Cloud (VPC) network type.
   * 
   * > 
   * *   To use the new version of the change tracking feature, you must specify the SubscriptionInstanceNetworkType parameter. You must also specify the **SubscriptionInstanceVPCId** and **SubscriptionInstanceVSwitchID** parameters. If you do not specify the SubscriptionInstanceNetworkType parameter, the previous version of the change tracking feature is used.
   * *   The previous version of the change tracking feature supports self-managed MySQL databases, ApsaraDB RDS for MySQL instances, and PolarDB-X 1.0 instances. The new version of the change tracking feature supports self-managed MySQL databases, ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and Oracle databases.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc
   */
  subscriptionInstanceNetworkType?: string;
  /**
   * @remarks
   * The ID of the VPC in which the change tracking instance is deployed.
   * 
   * >  This parameter is required only when the **SubscriptionInstanceNetworkType** parameter is set to **vpc**.
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  subscriptionInstanceVPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the specified VPC.
   * 
   * >  This parameter is required only when the **SubscriptionInstanceNetworkType** parameter is set to **vpc**.
   * 
   * @example
   * vsw-bp10df3mxae6lpmku****
   */
  subscriptionInstanceVSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      dbList: 'DbList',
      dedicatedClusterId: 'DedicatedClusterId',
      delayNotice: 'DelayNotice',
      delayPhone: 'DelayPhone',
      delayRuleTime: 'DelayRuleTime',
      dtsBisLabel: 'DtsBisLabel',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      errorNotice: 'ErrorNotice',
      errorPhone: 'ErrorPhone',
      maxDu: 'MaxDu',
      minDu: 'MinDu',
      regionId: 'RegionId',
      reserve: 'Reserve',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointEngineName: 'SourceEndpointEngineName',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointOwnerID: 'SourceEndpointOwnerID',
      sourceEndpointPassword: 'SourceEndpointPassword',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointRole: 'SourceEndpointRole',
      sourceEndpointUserName: 'SourceEndpointUserName',
      srcCaCertificateOssUrl: 'SrcCaCertificateOssUrl',
      srcCaCertificatePassword: 'SrcCaCertificatePassword',
      srcClientCertOssUrl: 'SrcClientCertOssUrl',
      srcClientKeyOssUrl: 'SrcClientKeyOssUrl',
      srcClientPassword: 'SrcClientPassword',
      subscriptionDataTypeDDL: 'SubscriptionDataTypeDDL',
      subscriptionDataTypeDML: 'SubscriptionDataTypeDML',
      subscriptionInstanceNetworkType: 'SubscriptionInstanceNetworkType',
      subscriptionInstanceVPCId: 'SubscriptionInstanceVPCId',
      subscriptionInstanceVSwitchId: 'SubscriptionInstanceVSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      dbList: 'string',
      dedicatedClusterId: 'string',
      delayNotice: 'boolean',
      delayPhone: 'string',
      delayRuleTime: 'number',
      dtsBisLabel: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      errorNotice: 'boolean',
      errorPhone: 'string',
      maxDu: 'number',
      minDu: 'number',
      regionId: 'string',
      reserve: 'string',
      resourceGroupId: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointEngineName: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointOwnerID: 'string',
      sourceEndpointPassword: 'string',
      sourceEndpointPort: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointRole: 'string',
      sourceEndpointUserName: 'string',
      srcCaCertificateOssUrl: 'string',
      srcCaCertificatePassword: 'string',
      srcClientCertOssUrl: 'string',
      srcClientKeyOssUrl: 'string',
      srcClientPassword: 'string',
      subscriptionDataTypeDDL: 'boolean',
      subscriptionDataTypeDML: 'boolean',
      subscriptionInstanceNetworkType: 'string',
      subscriptionInstanceVPCId: 'string',
      subscriptionInstanceVSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

