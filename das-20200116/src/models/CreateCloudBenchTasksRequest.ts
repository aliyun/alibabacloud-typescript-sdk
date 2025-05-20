// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudBenchTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The total number of stress testing tasks that you want to create. Valid values: **0** to **30**. Default value: **1**.
   * 
   * @example
   * 1
   */
  amount?: string;
  /**
   * @remarks
   * The ID of the backup set. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/26273.html) operation to query the ID of the backup set.
   * 
   * @example
   * 229132
   */
  backupId?: string;
  /**
   * @remarks
   * The time when the backup starts. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2021-04-23T13:22:14Z
   */
  backupTime?: string;
  /**
   * @remarks
   * The type of the stress testing client. Valid values:
   * 
   * *   **ECS**: indicates that you must create the [DBGateway](https://help.aliyun.com/document_detail/64905.html).
   * *   **DAS_ECS**: indicates that DAS automatically purchases and deploys an Elastic Compute Service (ECS) instance for stress testing.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  clientType?: string;
  /**
   * @remarks
   * The description of the stress testing task.
   * 
   * This parameter is required.
   * 
   * @example
   * test-das-bench-0501
   * 
   * **if can be null:**
   * false
   */
  description?: string;
  /**
   * @remarks
   * The endpoint of the destination instance. The specified endpoint must be the endpoint of an ApsaraDB RDS for MySQL instance or a PolarDB for MySQL instance.
   * 
   * >  This parameter takes effect only if you set **DstType** to **ConnectionString**.
   * 
   * @example
   * rm-de21209****.mysql.rds.aliyuncs.com
   */
  dstConnectionString?: string;
  /**
   * @remarks
   * The ID of the destination instance. The instance must be an ApsaraDB RDS for MySQL instance or a PolarDB for MySQL instance. You can call the [GetInstanceInspections](https://help.aliyun.com/document_detail/202857.html) operation to query the ID.
   * 
   * >  This parameter must be specified if you set **DstType** to **Instance**.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  dstInstanceId?: string;
  /**
   * @remarks
   * The port number of the instance that you want to access.
   * 
   * >  This parameter takes effect only if you set **DstType** to **ConnectionString**.
   * 
   * @example
   * 3306
   */
  dstPort?: string;
  /**
   * @remarks
   * The name of the privileged account for the destination instance.
   * 
   * @example
   * root
   */
  dstSuperAccount?: string;
  /**
   * @remarks
   * The password of the privileged account for the destination instance.
   * 
   * @example
   * test123
   */
  dstSuperPassword?: string;
  /**
   * @remarks
   * The type of the identifier that is used to indicate the destination instance. Valid values:
   * 
   * *   **Instance**: the instance ID. This is the default value.
   * *   **ConnectionString**: the endpoint of the instance.
   * 
   * @example
   * Instance
   */
  dstType?: string;
  /**
   * @remarks
   * The specification of the Data Transmission Service (DTS) migration task. You can call the [DescribeCloudbenchTask](https://help.aliyun.com/document_detail/230669.html) operation to query the specification.
   * 
   * >  You must migrate the basic data in the source instance to the destination instance before you start a stress testing task. When you create a DTS migration task, you must specify this parameter.
   * 
   * @example
   * medium
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The ID of the DTS migration task. You can call the [ConfigureDtsJob](https://help.aliyun.com/document_detail/208399.html) operation to query the ID.
   * 
   * >  After a DTS migration task is created in the DTS console, you must specify this parameter.
   * 
   * @example
   * 23127
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The state that specifies the last operation that is performed for the stress testing task. Valid values:
   * 
   * *   **WAIT_TARGET**: prepares the destination instance
   * *   **WAIT_DBGATEWAY**: prepares the DBGateway
   * *   **WAIT_SQL**: prepares the full SQL statistics
   * *   **WAIT_LOGIC**: prepares to replay the traffic
   * 
   * >  When the state of a stress testing task changes to the state that is specified by the EndState parameter, the stress testing task becomes completed.
   * 
   * @example
   * WAIT_TARGET
   */
  endState?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the database gateway (DBGateway) is deployed.
   * 
   * >  This parameter must be specified if you set **ClientType** to **ECS**.
   * 
   * @example
   * vpc-t4nsnwvpbc1h76ja4****
   */
  gatewayVpcId?: string;
  /**
   * @remarks
   * The IP address or domain name of the DBGateway.
   * 
   * >  This parameter must be specified if you set **ClientType** to **ECS**.
   * 
   * @example
   * 172.30.XX.XX
   */
  gatewayVpcIp?: string;
  /**
   * @remarks
   * The rate at which the traffic captured from the source instance is replayed on the destination instance. The value must be a positive integer. Valid values: **1** to **30**. Default value: **1**.
   * 
   * @example
   * 1
   */
  rate?: string;
  /**
   * @remarks
   * The duration of the stress testing task for which the traffic is captured from the source instance. Unit: milliseconds.
   * 
   * @example
   * 86400000
   */
  requestDuration?: string;
  /**
   * @remarks
   * The time when the stress testing task ends. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1608888296001
   */
  requestEndTime?: string;
  /**
   * @remarks
   * The time when the stress testing task starts. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1608888296000
   */
  requestStartTime?: string;
  /**
   * @remarks
   * The duration within which the traffic generation stressing test takes effect. Unit: milliseconds.
   * 
   * >  This parameter must be specified if you set **TaskType** to **smart pressure test**.
   * 
   * @example
   * 86400000
   */
  smartPressureTime?: string;
  /**
   * @remarks
   * The ID of the source instance. The instance must be an ApsaraDB RDS for MySQL instance or a PolarDB for MySQL instance. You can call the [GetInstanceInspections](https://help.aliyun.com/document_detail/202857.html) operation to query the ID.
   * 
   * >  This parameter must be specified if you set **DstType** to **Instance**.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  srcInstanceId?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  srcPublicIp?: string;
  /**
   * @remarks
   * The name of the privileged account for the source instance. Set the value to **admin**.
   * 
   * >  This parameter must be specified if you set **DstType** to **Instance**.
   * 
   * @example
   * admin
   */
  srcSuperAccount?: string;
  /**
   * @remarks
   * The password of the privileged account for the source instance.
   * 
   * >  This parameter must be specified if you set **DstType** to **Instance**.
   * 
   * @example
   * test123
   */
  srcSuperPassword?: string;
  /**
   * @remarks
   * The type of the stress testing task. Valid values:
   * 
   * *   **pressure test** (default): A task of this type replays the traffic that is captured from the source instance on the destination instance at the maximum playback rate that is supported by the destination instance.
   * *   **smart pressure test**: A task of this type analyzes the traffic that is captured from the source instance over a short period of time and generates traffic on the destination instance for continuous stress testing. The business model based on which the traffic is generated on the destination instance and the traffic distribution are consistent with those on the source instance. Stress testing tasks of this type can help you reduce the amount of time that is consumed to collect data from the source instance and reduce storage costs and performance overheads.
   * 
   * This parameter is required.
   * 
   * @example
   * pressure test
   */
  taskType?: string;
  /**
   * @remarks
   * The temporary directory generated for stress testing.
   * 
   * @example
   * /tmp/bench/
   */
  workDir?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      backupId: 'BackupId',
      backupTime: 'BackupTime',
      clientType: 'ClientType',
      description: 'Description',
      dstConnectionString: 'DstConnectionString',
      dstInstanceId: 'DstInstanceId',
      dstPort: 'DstPort',
      dstSuperAccount: 'DstSuperAccount',
      dstSuperPassword: 'DstSuperPassword',
      dstType: 'DstType',
      dtsJobClass: 'DtsJobClass',
      dtsJobId: 'DtsJobId',
      endState: 'EndState',
      gatewayVpcId: 'GatewayVpcId',
      gatewayVpcIp: 'GatewayVpcIp',
      rate: 'Rate',
      requestDuration: 'RequestDuration',
      requestEndTime: 'RequestEndTime',
      requestStartTime: 'RequestStartTime',
      smartPressureTime: 'SmartPressureTime',
      srcInstanceId: 'SrcInstanceId',
      srcPublicIp: 'SrcPublicIp',
      srcSuperAccount: 'SrcSuperAccount',
      srcSuperPassword: 'SrcSuperPassword',
      taskType: 'TaskType',
      workDir: 'WorkDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      backupId: 'string',
      backupTime: 'string',
      clientType: 'string',
      description: 'string',
      dstConnectionString: 'string',
      dstInstanceId: 'string',
      dstPort: 'string',
      dstSuperAccount: 'string',
      dstSuperPassword: 'string',
      dstType: 'string',
      dtsJobClass: 'string',
      dtsJobId: 'string',
      endState: 'string',
      gatewayVpcId: 'string',
      gatewayVpcIp: 'string',
      rate: 'string',
      requestDuration: 'string',
      requestEndTime: 'string',
      requestStartTime: 'string',
      smartPressureTime: 'string',
      srcInstanceId: 'string',
      srcPublicIp: 'string',
      srcSuperAccount: 'string',
      srcSuperPassword: 'string',
      taskType: 'string',
      workDir: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

