// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudBenchTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The total number of stress testing tasks to create. Valid values: **0** to **30**. Default value: **1**.
   * 
   * @example
   * 1
   */
  amount?: string;
  /**
   * @remarks
   * The ID of the backup set. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/26273.html) operation to query the backup list and obtain the ID.
   * 
   * @example
   * 229132
   */
  backupId?: string;
  /**
   * @remarks
   * The time of the backup. Format: yyyy-MM-ddTHH:mm:ssZ (UTC time).
   * 
   * @example
   * 2021-04-23T13:22:14Z
   */
  backupTime?: string;
  /**
   * @remarks
   * The type of stress testing machine. Valid values:
   * 
   * - **ECS**: You need to prepare a [Database Gateway](https://help.aliyun.com/document_detail/64905.html) yourself.
   * 
   * - **DAS_ECS**: An ECS instance that is automatically purchased and deployed by DAS.
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
   * The connection address of the target instance. Only RDS MySQL and PolarDB MySQL instances are supported.
   * 
   * > This parameter takes effect when **DstType** is set to **ConnectionString**.
   * 
   * @example
   * rm-de21209****.mysql.rds.aliyuncs.com
   */
  dstConnectionString?: string;
  /**
   * @remarks
   * The ID of the target instance. Only RDS MySQL and PolarDB MySQL instances are supported. You can call the [GetInstanceInspections](https://help.aliyun.com/document_detail/202857.html) operation to obtain the ID.
   * 
   * > This parameter is required when **DstType** is set to **Instance**.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  dstInstanceId?: string;
  /**
   * @remarks
   * The port of the target instance.
   * 
   * > This parameter takes effect when **DstType** is set to **ConnectionString**.
   * 
   * @example
   * 3306
   */
  dstPort?: string;
  /**
   * @remarks
   * The privileged account of the target instance.
   * 
   * @example
   * root
   */
  dstSuperAccount?: string;
  /**
   * @remarks
   * The password of the privileged account of the target instance.
   * 
   * @example
   * test123
   */
  dstSuperPassword?: string;
  /**
   * @remarks
   * The type of the target instance. Valid values:
   * 
   * - **Instance** (default): instance ID.
   * 
   * - **ConnectionString**: connection address of the instance.
   * 
   * @example
   * Instance
   */
  dstType?: string;
  /**
   * @remarks
   * The specification of the DTS migration task. You can call the [DescribeCloudbenchTask](https://help.aliyun.com/document_detail/230669.html) operation to obtain the specification.
   * 
   * > The stress testing task needs to migrate the baseline data from the source instance to the target instance. This parameter is required when you create a new DTS task.
   * 
   * @example
   * medium
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The ID of the DTS migration task. You can call the [ConfigureDtsJob](https://help.aliyun.com/document_detail/208399.html) operation to obtain the ID.
   * 
   * > This parameter is required when a DTS task has been created in the DTS console.
   * 
   * @example
   * 23127
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The status after the stress testing task ends. Valid values:
   * 
   * - **WAIT_TARGET**: Prepare the target instance for stress testing.
   * 
   * - **WAIT_DBGATEWAY**: Prepare the stress testing deployment.
   * 
   * - **WAIT_SQL**: Prepare the full SQL statements.
   * 
   * - **WAIT_LOGIC**: Prepare to start replaying the traffic.
   * 
   * > When the stress testing task completes the status set by EndState, the task directly reaches the completed status.
   * 
   * @example
   * WAIT_TARGET
   */
  endState?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the Database Gateway.
   * 
   * > This parameter is required when **ClientType** is set to **ECS**.
   * 
   * @example
   * vpc-t4nsnwvpbc1h76ja4****
   */
  gatewayVpcId?: string;
  /**
   * @remarks
   * The IP address or domain name of the Database Gateway.
   * 
   * > This parameter is required when **ClientType** is set to **ECS**.
   * 
   * @example
   * 172.30.XX.XX
   */
  gatewayVpcIp?: string;
  /**
   * @remarks
   * The replay speed of the source instance traffic on the target instance. The replay speed must be a positive integer. Valid values: **1** to **30**. Default value: **1**.
   * 
   * @example
   * 1
   */
  rate?: string;
  /**
   * @remarks
   * The duration of the stress testing task. Unit: milliseconds.
   * 
   * @example
   * 86400000
   */
  requestDuration?: string;
  /**
   * @remarks
   * The end time of the stress testing task. The time is in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1608888296001
   */
  requestEndTime?: string;
  /**
   * @remarks
   * The start time of the stress testing task. The time is in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1608888296000
   */
  requestStartTime?: string;
  /**
   * @remarks
   * The duration of the generated stress testing. Unit: milliseconds.
   * 
   * > This parameter is required when **TaskType** is set to **smart pressure test**.
   * 
   * @example
   * 86400000
   */
  smartPressureTime?: string;
  /**
   * @remarks
   * The ID of the source instance. Only RDS MySQL and PolarDB MySQL instances are supported. You can call the [GetInstanceInspections](https://help.aliyun.com/document_detail/202857.html) operation to obtain the ID.
   * 
   * > This parameter is required when **DstType** is set to **Instance**.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  srcInstanceId?: string;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * None
   */
  srcPublicIp?: string;
  /**
   * @remarks
   * The privileged account of the source instance. Value: **admin**.
   * 
   * > This parameter is required when **DstType** is set to **Instance**.
   * 
   * @example
   * admin
   */
  srcSuperAccount?: string;
  /**
   * @remarks
   * The password of the privileged account of the source instance.
   * 
   * > This parameter is required when **DstType** is set to **Instance**.
   * 
   * @example
   * test123
   */
  srcSuperPassword?: string;
  /**
   * @remarks
   * The type of stress testing task. Valid values:
   * 
   * - **pressure test** (default): Intelligent stress testing, which replays the traffic captured from the source instance on the target instance at the maximum speed supported by the target instance type.
   * 
   * - **smart pressure test**: Generated stress testing, which analyzes and learns from the traffic captured from the source instance in a short period of time, generates traffic that is consistent with the business model and traffic distribution of the original traffic for continuous stress testing, reduces the time for collecting data from the source instance, and reduces storage costs and performance overhead.
   * 
   * This parameter is required.
   * 
   * @example
   * pressure test
   */
  taskType?: string;
  /**
   * @remarks
   * The temporary directory generated by the stress testing.
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

