// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of change tracking, in the format of a UNIX timestamp. Unit: seconds.
   * > You can use a search engine to find a UNIX timestamp converter.
   * 
   * @example
   * 1616902385
   */
  checkpoint?: string;
  /**
   * @remarks
   * The objects to be tracked, in JSON format. For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"dtstest":{"name":"dtstest","all":true}}
   */
  dbList?: string;
  /**
   * @remarks
   * The ID of the DTS dedicated cluster. This parameter is used to schedule the change tracking task to the specified DTS dedicated cluster.
   * 
   * @example
   * dtscluster_atyl3b5214uk***
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * Specifies whether to monitor the latency status. Valid values:
   * 
   * - **true**: monitors the latency status.
   * - **false**: does not monitor the latency status.
   * 
   * @example
   * true
   */
  delayNotice?: boolean;
  /**
   * @remarks
   * The mobile phone numbers for receiving latency alerts. Separate multiple phone numbers with commas (,).
   * > - This parameter is supported only on the China site (aliyun.com). Only Chinese mainland phone numbers are supported, and you can specify up to 10 phone numbers.
   * - The China site (Chinese mainland) does not support phone alerts. You can only [configure alert rules for DTS tasks in CloudMonitor](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  delayPhone?: string;
  /**
   * @remarks
   * The threshold for triggering latency alerts. Unit: seconds. The value must be an integer. Set the threshold based on your business requirements. To avoid alert fluctuations caused by network conditions or database loads, set the threshold to 10 seconds or more.
   * > This parameter is required when **DelayNotice** is set to **true**.
   * 
   * @example
   * 10
   */
  delayRuleTime?: number;
  /**
   * @remarks
   * The environment tag of the DTS instance. Valid values:
   * 
   * - **normal**: normal
   * - **online**: online.
   * 
   * @example
   * normal
   */
  dtsBisLabel?: string;
  /**
   * @remarks
   * The ID of the change tracking instance. You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to query the instance ID.
   * 
   * @example
   * dtsy0zz3t13h7d****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the change tracking task. You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to query the task ID.
   * 
   * @example
   * y0zz3t13h7d****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The name of the change tracking task.
   * > Specify a descriptive name that makes it easy to identify the task. The name does not need to be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL订阅
   */
  dtsJobName?: string;
  /**
   * @remarks
   * Specifies whether to monitor the error status. Valid values:
   * 
   * - **true**: monitors the error status.
   * - **false**: does not monitor the error status.
   * 
   * @example
   * true
   */
  errorNotice?: boolean;
  /**
   * @remarks
   * The mobile phone numbers for receiving error alerts. Separate multiple phone numbers with commas (,).
   * > - This parameter is supported only on the China site (aliyun.com). Only Chinese mainland phone numbers are supported, and you can specify up to 10 phone numbers.
   * - The China site (Chinese mainland) does not support phone alerts. You can only [configure alert rules for DTS tasks in CloudMonitor](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  errorPhone?: string;
  /**
   * @remarks
   * The maximum number of DUs for a serverless instance. Valid values: 2, 4, 8, and 16.
   * <props="intl">
   * > This feature is currently not supported. Do not specify this parameter..
   * 
   * @example
   * 16
   */
  maxDu?: number;
  /**
   * @remarks
   * The minimum number of DTS Units (DUs) for a serverless instance. Valid values: 1, 2, 4, 8, and 16.
   * <props="intl">
   * > This feature is currently not supported. Do not specify this parameter..
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The region in which the change tracking instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The reserved parameter of DTS, in JSON format. You can specify this parameter to add information about the source and destination databases, such as the data storage format of the destination Kafka database or the CEN instance ID. For more information, see the [Reserve metric description](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {      "srcInstanceId": "cen-9kqshqum*******"  }
   */
  reserve?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the database to be tracked.
   * 
   * @example
   * dtstestdata
   */
  sourceEndpointDatabaseName?: string;
  /**
   * @remarks
   * The engine type of the source database. Valid values: **MySQL**, **PostgreSQL**, and **Oracle**.
   * 
   * > This parameter is required if the source database is a self-managed database.
   * 
   * @example
   * PostgreSQL
   */
  sourceEndpointEngineName?: string;
  /**
   * @remarks
   * The endpoint of the source database.
   * > This parameter is available and required only when the source database is a self-managed database.
   * 
   * @example
   * 172.16.8*.***
   */
  sourceEndpointIP?: string;
  /**
   * @remarks
   * The instance ID of the source instance.
   * > This parameter is active and required only when the source database is an ApsaraDB RDS for MySQL instance, a PolarDB-X 1.0 instance, or a PolarDB for MySQL cluster.
   * 
   * @example
   * rm-bp1zc3iyqe3qw****
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The instance type of the source database. Valid values:
   * 
   * - **RDS**: ApsaraDB RDS instance.
   * - **PolarDB**: PolarDB for MySQL cluster.
   * - **DRDS**: PolarDB-X 1.0 instance.
   * - **LocalInstance**: self-managed database with a public IP address.
   * - **ECS**: self-managed database hosted on an ECS instance.
   * - **Express**: self-managed database connected over Express Connect.
   * - **CEN**: self-managed database connected over Cloud Enterprise Network (CEN).
   * - **dg**: self-managed database connected over Database Gateway.
   * 
   * @example
   * RDS
   */
  sourceEndpointInstanceType?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is available and required only when the source database is a self-managed Oracle database that is not a Real Application Cluster (RAC) instance.
   * 
   * @example
   * testsid
   */
  sourceEndpointOracleSID?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the account to which the source instance belongs.
   * > This parameter is active and required only when you configure cross-Alibaba Cloud account change tracking. You must subscribe to the task.
   * 
   * @example
   * 140692647406****
   */
  sourceEndpointOwnerID?: string;
  /**
   * @remarks
   * The password of the database account for the source instance.
   * 
   * @example
   * Test123456
   */
  sourceEndpointPassword?: string;
  /**
   * @remarks
   * The service port of the source database.
   * > This parameter is available and required only when the source database is a self-managed database.
   * 
   * @example
   * 3306
   */
  sourceEndpointPort?: string;
  /**
   * @remarks
   * The region of the source instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > If the source instance is a self-managed database with a public IP address, you can set this parameter to **cn-hangzhou** or the region ID closest to the self-managed database.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The authorized role of the source instance. If the source instance and the change tracking task belong to different Alibaba Cloud accounts, specify this parameter to allow the Alibaba Cloud account that owns the change tracking task to access the source instance.
   * > For more information about the permissions and authorization methods required for the role, see [Configure RAM authorization for cross-account data migration or synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  sourceEndpointRole?: string;
  /**
   * @remarks
   * The database account of the source instance.
   * > The permissions required for change tracking vary depending on the database type. For more information, see the account permissions section in [Prepare database accounts for change tracking](https://help.aliyun.com/document_detail/212653.html).
   * 
   * @example
   * dtstest
   */
  sourceEndpointUserName?: string;
  /**
   * @remarks
   * The path of the CA certificate when the source database uses an SSL connection.
   * 
   * > This feature is currently not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcCaCertificateOssUrl?: string;
  /**
   * @remarks
   * The key of the CA certificate when the source database uses an SSL connection.
   * 
   * > This feature is currently not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcCaCertificatePassword?: string;
  /**
   * @remarks
   * The path of the client certificate when the source database uses an SSL connection.
   * 
   * > This feature is currently not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientCertOssUrl?: string;
  /**
   * @remarks
   * The path of the client certificate private key when the source database uses an SSL connection.
   * 
   * > This feature is currently not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientKeyOssUrl?: string;
  /**
   * @remarks
   * The password of the client certificate private key when the source database uses an SSL connection.
   * 
   * > This feature is currently not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientPassword?: string;
  /**
   * @remarks
   * Specifies whether to track DDL data. Valid values:
   * 
   * - **true** (default): tracks DDL data.
   * - **false**: does not track DDL data.
   * 
   * @example
   * true
   */
  subscriptionDataTypeDDL?: boolean;
  /**
   * @remarks
   * Specifies whether to track DML data. Valid values:
   * - **true** (default): tracks DML data.
   * - **false**: does not track DML data.
   * 
   * @example
   * true
   */
  subscriptionDataTypeDML?: boolean;
  /**
   * @remarks
   * The network type of the change tracking task. The only valid value is **vpc**, which indicates virtual private cloud (VPC).
   * 
   * > - If you specify this parameter, the change tracking task is defined as the new version. You must also correctly set the **SubscriptionInstanceVPCId** and **SubscriptionInstanceVSwitchID** parameters. If you do not specify this parameter, the change tracking task is defined as the legacy version.
   * - Legacy change tracking tasks support tracking data from self-managed MySQL, ApsaraDB RDS for MySQL, and PolarDB-X 1.0. New-version change tracking tasks support tracking data from self-managed MySQL, ApsaraDB RDS for MySQL, PolarDB for MySQL, and Oracle.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc
   */
  subscriptionInstanceNetworkType?: string;
  /**
   * @remarks
   * The VPC ID of the change tracking instance.
   * > This parameter is available and required only when **SubscriptionInstanceNetworkType** is set to **vpc**.
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  subscriptionInstanceVPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the change tracking instance.
   * > This parameter is available and required only when **SubscriptionInstanceNetworkType** is set to **vpc**.
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

