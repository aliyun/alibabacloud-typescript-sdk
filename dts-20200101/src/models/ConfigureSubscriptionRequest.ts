// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the change tracking task. The value is a UNIX timestamp in seconds.
   * > You can use a search engine to obtain a UNIX timestamp converter.
   * 
   * @example
   * 1616902385
   */
  checkpoint?: string;
  /**
   * @remarks
   * The objects to be tracked. The value is a JSON string. For more information, see [Specify the objects to be migrated, synchronized, or tracked](https://help.aliyun.com/document_detail/209545.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"dtstest":{"name":"dtstest","all":true}}
   */
  dbList?: string;
  /**
   * @remarks
   * The ID of the dedicated DTS cluster. This parameter is used to schedule the change tracking task to a specified dedicated DTS cluster.
   * 
   * @example
   * dtscluster_atyl3b5214uk***
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * Specifies whether to monitor the latency status. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  delayNotice?: boolean;
  /**
   * @remarks
   * The mobile phone numbers of the contacts to receive latency alerts. Separate multiple mobile phone numbers with commas (,).
   * > - This parameter is supported only on the China site. Only mobile phone numbers in the Chinese mainland are supported, and you can specify up to 10 mobile phone numbers.
   * - The international site does not support mobile phone alerts. You can only [configure alert rules for DTS tasks by using CloudMonitor](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  delayPhone?: string;
  /**
   * @remarks
   * The threshold for triggering a latency alert. The value must be an integer in seconds. You can set the threshold based on your business requirements. Set the threshold to 10 seconds or more to avoid latency fluctuations caused by network or database loads.
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
   * - **normal**: **Normal**.
   * - **online**: **Online**.
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
   * > Specify a name that reflects the business purpose to facilitate subsequent identification. The name does not need to be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL change tracking
   */
  dtsJobName?: string;
  /**
   * @remarks
   * Specifies whether to monitor the exception status. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  errorNotice?: boolean;
  /**
   * @remarks
   * The mobile phone numbers of the contacts to receive exception alerts. Separate multiple mobile phone numbers with commas (,).
   * > - This parameter is supported only on the China site. Only mobile phone numbers in the Chinese mainland are supported, and you can specify up to 10 mobile phone numbers.
   * - The international site does not support mobile phone alerts. You can only [configure alert rules for DTS tasks by using CloudMonitor](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  errorPhone?: string;
  /**
   * @remarks
   * The maximum number of DUs for the serverless instance. Valid values: 2, 4, 8, and 16.
   * <props="intl">
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * 16
   */
  maxDu?: number;
  /**
   * @remarks
   * The minimum number of DUs for the serverless instance. Valid values: 1, 2, 4, 8, and 16.
   * <props="intl">
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The region where the change tracking instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The reserved parameters of DTS. The value is a JSON string. You can specify this parameter to supplement the information about the source and destination databases, such as the data storage format of the destination Kafka database and the CEN instance ID. For more information, see the metric description in [Reserve metric description](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {      "srcInstanceId": "cen-9kqshqum*******"  }
   */
  reserve?: string;
  /**
   * @remarks
   * The ID of the resource group.
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
   * The type of the source database. Valid values: **MySQL**, **PostgreSQL**, and **Oracle**.
   * 
   * > If the source database is a self-managed database, this parameter is required.
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
   * The source instance ID.
   * > This parameter is active and required only when the instance type of the source database is ApsaraDB RDS for MySQL, PolarDB-X 1.0, or PolarDB for MySQL.
   * 
   * @example
   * rm-bp1zc3iyqe3qw****
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The instance type of the source database. Valid values:
   * 
   * - **RDS**: ApsaraDB RDS.
   * - **PolarDB**: PolarDB for MySQL.
   * - **DRDS**: PolarDB-X 1.0.
   * - **LocalInstance**: A self-managed database with a public IP address.
   * - **ECS**: A self-managed database hosted on Elastic Compute Service (ECS).
   * - **Express**: A self-managed database connected over an Express Connect circuit.
   * - **CEN**: A self-managed database connected over a Cloud Enterprise Network (CEN) instance.
   * - **dg**: A self-managed database connected over a database gateway.
   * 
   * @example
   * RDS
   */
  sourceEndpointInstanceType?: string;
  /**
   * @remarks
   * The system ID (SID) of the Oracle database.
   * > This parameter is available and required only when the source database is a self-managed Oracle database and the Oracle database is not a Real Application Cluster (RAC) instance.
   * 
   * @example
   * testsid
   */
  sourceEndpointOracleSID?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the source instance belongs.
   * > This parameter is available and required only when you configure a change tracking task across Alibaba Cloud accounts.
   * 
   * @example
   * 140692647406****
   */
  sourceEndpointOwnerID?: string;
  /**
   * @remarks
   * The password of the database account of the source instance.
   * 
   * @example
   * Test123456
   */
  sourceEndpointPassword?: string;
  /**
   * @remarks
   * The service port number of the source database.
   * > This parameter is available and required only when the source database is a self-managed database.
   * 
   * @example
   * 3306
   */
  sourceEndpointPort?: string;
  /**
   * @remarks
   * The region where the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > If the source instance is a self-managed database with a public IP address, you can set this parameter to **cn-hangzhou** or the ID of the region that is closest to the self-managed database.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The RAM role that is authorized to access the source instance. If the source instance and the change tracking task belong to different Alibaba Cloud accounts, you must specify this parameter to authorize the Alibaba Cloud account that owns the change tracking task to access the source instance.
   * > For more information about the required permissions and authorization methods, see [Configure RAM authorization for cross-account data migration or synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  sourceEndpointRole?: string;
  /**
   * @remarks
   * The database account of the source instance.
   * > The required permissions vary based on the database to be tracked. For more information, see the permissions required for the database account in [Prepare the database accounts for change tracking](https://help.aliyun.com/document_detail/212653.html).
   * 
   * @example
   * dtstest
   */
  sourceEndpointUserName?: string;
  /**
   * @remarks
   * The path of the CA certificate when the source database is connected over SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcCaCertificateOssUrl?: string;
  /**
   * @remarks
   * The password of the CA certificate when the source database is connected over SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcCaCertificatePassword?: string;
  /**
   * @remarks
   * The path of the client certificate when the source database is connected over SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientCertOssUrl?: string;
  /**
   * @remarks
   * The path of the private key of the client certificate when the source database is connected over SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientKeyOssUrl?: string;
  /**
   * @remarks
   * The password of the private key of the client certificate when the source database is connected over SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientPassword?: string;
  /**
   * @remarks
   * Specifies whether to track DDL statements. Valid values:
   * 
   * - **true**: Yes. This is the default value.
   * - **false**: No.
   * 
   * @example
   * true
   */
  subscriptionDataTypeDDL?: boolean;
  /**
   * @remarks
   * Specifies whether to track DML statements. Valid values:
   * - **true**: Yes. This is the default value.
   * - **false**: No.
   * 
   * @example
   * true
   */
  subscriptionDataTypeDML?: boolean;
  /**
   * @remarks
   * The network type of the change tracking task. Set the value to **vpc**, which specifies a virtual private cloud (VPC).
   * 
   * > - If you specify this parameter, the change tracking task is defined as a new version. You must also correctly set the **SubscriptionInstanceVPCId** and **SubscriptionInstanceVSwitchID** parameters. If you do not specify this parameter, the change tracking task is defined as a legacy version.
   * - Legacy change tracking tasks support tracking data from self-managed MySQL databases, ApsaraDB RDS for MySQL instances, and PolarDB-X 1.0 instances. New change tracking tasks support tracking data from self-managed MySQL databases, ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and Oracle databases.
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

