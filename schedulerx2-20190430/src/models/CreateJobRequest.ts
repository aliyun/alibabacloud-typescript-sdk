// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobRequestContactInfo extends $dara.Model {
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot for the alert contact\\"s DingTalk group. References: [DingTalk development documentation](https://open.dingtalk.com/document/org/application-types).
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=**********
   */
  ding?: string;
  /**
   * @remarks
   * The email address of the alert contact.
   * 
   * @example
   * test***@***.com
   */
  userMail?: string;
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * @example
   * John Smith
   */
  userName?: string;
  /**
   * @remarks
   * The mobile phone number of the alert recipient.
   * 
   * @example
   * 1381111****
   */
  userPhone?: string;
  static names(): { [key: string]: string } {
    return {
      ding: 'Ding',
      userMail: 'UserMail',
      userName: 'UserName',
      userPhone: 'UserPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ding: 'string',
      userMail: 'string',
      userName: 'string',
      userPhone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The retry interval on failure. Unit: seconds. Default value: 30.
   * 
   * @example
   * 30
   */
  attemptInterval?: number;
  /**
   * @remarks
   * The custom calendar. This parameter is available for the cron time type.
   */
  calendar?: string;
  /**
   * @remarks
   * The full path of the node interface class.
   * 
   * This field is required only when you select the Java node type. Specify the full path.
   * 
   * @example
   * com.alibaba.schedulerx.test.helloworld
   */
  className?: string;
  /**
   * @remarks
   * The advanced configuration for parallel grid nodes. The number of threads triggered for a single execution on a single machine. Default value: 5.
   * 
   * @example
   * 5
   */
  consumerSize?: number;
  /**
   * @remarks
   * The node contact information.
   * 
   * >Notice: This field is deprecated.</notice>
   */
  contactInfo?: CreateJobRequestContactInfo[];
  /**
   * @remarks
   * - If the node type is python, shell, or k8s, specify the corresponding script content.
   * - If the node type is golang, the content format example is {"jobName":"HelloWorld"}.
   * 
   * @example
   * echo \\"hello\\"
   */
  content?: string;
  /**
   * @remarks
   * The time offset. Unit: seconds. This parameter is available for the cron time type.
   * 
   * @example
   * 2400
   */
  dataOffset?: number;
  /**
   * @remarks
   * The node description.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The advanced configuration for parallel grid nodes. The number of subtask dispatch threads. Default value: 5.
   * 
   * @example
   * 5
   */
  dispatcherSize?: number;
  /**
   * @remarks
   * The node execution mode. The following execution modes are supported:
   * 
   * - **Standalone**: standalone
   * - **Broadcast**: broadcast
   * - **Visual MapReduce**: parallel
   * - **MapReduce**: batch
   * - **Sharding**: sharding
   * 
   * This parameter is required.
   * 
   * @example
   * standalone
   */
  executeMode?: string;
  /**
   * @remarks
   * Specifies whether to enable the failure alert. Valid values:
   * 
   * - **true**: Enables the failure alert.
   * - **false**: Disables the failure alert.
   * 
   * @example
   * false
   */
  failEnable?: boolean;
  /**
   * @remarks
   * The number of consecutive failures before an alert is triggered.
   * 
   * @example
   * 2
   */
  failTimes?: number;
  /**
   * @remarks
   * The application ID. You can obtain the application ID on the Application Management page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The node type. The following node types are supported:
   * 
   * - java
   * - python
   * - shell
   * - go
   * - http
   * - xxljob
   * - dataworks
   * - k8s
   * - springschedule
   * 
   * This parameter is required.
   * 
   * @example
   * java
   */
  jobType?: string;
  /**
   * @remarks
   * The maximum number of retries on failure. Set this parameter based on your business requirements. Default value: 0.
   * 
   * @example
   * 0
   */
  maxAttempt?: number;
  /**
   * @remarks
   * The maximum number of concurrently running instances. Default value: 1. This means that if the previous trigger has not finished running, the next trigger is not performed even if the scheduled time arrives.
   * 
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * Specifies whether to enable the no-available-machine alert. Valid values:
   * - **true**: Enables the no-available-machine alert.
   * - **false**: Disables the no-available-machine alert.
   * 
   * @example
   * false
   */
  missWorkerEnable?: boolean;
  /**
   * @remarks
   * The node name.
   * 
   * This parameter is required.
   * 
   * @example
   * helloworld
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID. You can obtain the namespace ID on the Namespace page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required only for special third-party users.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The advanced configuration for parallel grid nodes. The number of subtasks pulled in a single request. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The user-defined parameters that can be obtained at runtime.
   * 
   * @example
   * test
   */
  parameters?: string;
  /**
   * @remarks
   * The node priority. Valid values:
   * - **1**: low
   * - **5**: medium
   * - **10**: high
   * - **15**: very high
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The advanced configuration for parallel grid nodes. The maximum cache size of the subtask queue. Default value: 10000.
   * 
   * @example
   * 10000
   */
  queueSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The alert notification channel.
   * 
   * - Use the default channel of the application group: default.
   * - Specify a notification channel for the node: sms, mail, phone, or webhook.
   * 
   * @example
   * sms
   */
  sendChannel?: string;
  startTime?: number;
  /**
   * @remarks
   * The node status. Valid values: 0: disabled. 1: enabled. Default value: 1 (enabled).
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Specifies whether to enable the success notification.
   * 
   * @example
   * false
   */
  successNoticeEnable?: boolean;
  /**
   * @remarks
   * The advanced configuration for parallel grid nodes. The retry interval for a failed subtask. Default value: 0.
   * 
   * @example
   * 0
   */
  taskAttemptInterval?: number;
  /**
   * @remarks
   * The advanced configuration for parallel grid nodes. The number of retries for a failed subtask. Default value: 0.
   * 
   * @example
   * 0
   */
  taskMaxAttempt?: number;
  /**
   * @remarks
   * The time expression. Set the time expression based on the selected time type.
   * 
   * - **cron**: Specify a standard cron expression. Online verification is supported.
   * - **api**: No time expression is required.
   * - **fixed_rate**: Specify a fixed frequency value in seconds. For example, 30 indicates that the node is triggered every 30 seconds.
   * - **second_delay**: Specify a fixed delay in seconds before each execution (1s to 60s).
   * - **one_time**: Specify a time in the format of yyyy-MM-dd HH:mm:ss or a timestamp in milliseconds. For example, "2022-10-10 10:10:00".
   * 
   * @example
   * 0 0/10 * * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The time type. The following time types are supported:
   * 
   * - **cron**: 1
   * - **fixed_rate**: 3
   * - **second_delay**: 4
   * - **one_time**: 5 
   * - **api**: 100
   * - **none**: -1
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The timeout threshold. Unit: seconds. Default value: 7200.
   * 
   * @example
   * 7200
   */
  timeout?: number;
  /**
   * @remarks
   * Specifies whether to enable the timeout alert. Valid values:
   * 
   * - **true**: Enables the timeout alert.
   * - **false**: Disables the timeout alert.
   * 
   * @example
   * false
   */
  timeoutEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable timeout termination. Valid values:
   * 
   * - **true**: Enables timeout termination.
   * - **false**: Disables timeout termination.
   * 
   * @example
   * false
   */
  timeoutKillEnable?: boolean;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * GMT+8
   */
  timezone?: string;
  /**
   * @remarks
   * If the node type is k8s, configure this parameter.
   * Job task: {"resource":"job"}
   * Shell task: {"image":"busybox","resource":"shell"}
   * 
   * @example
   * {"resource":"job"}
   */
  XAttrs?: string;
  static names(): { [key: string]: string } {
    return {
      attemptInterval: 'AttemptInterval',
      calendar: 'Calendar',
      className: 'ClassName',
      consumerSize: 'ConsumerSize',
      contactInfo: 'ContactInfo',
      content: 'Content',
      dataOffset: 'DataOffset',
      description: 'Description',
      dispatcherSize: 'DispatcherSize',
      executeMode: 'ExecuteMode',
      failEnable: 'FailEnable',
      failTimes: 'FailTimes',
      groupId: 'GroupId',
      jobType: 'JobType',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      missWorkerEnable: 'MissWorkerEnable',
      name: 'Name',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      pageSize: 'PageSize',
      parameters: 'Parameters',
      priority: 'Priority',
      queueSize: 'QueueSize',
      regionId: 'RegionId',
      sendChannel: 'SendChannel',
      startTime: 'StartTime',
      status: 'Status',
      successNoticeEnable: 'SuccessNoticeEnable',
      taskAttemptInterval: 'TaskAttemptInterval',
      taskMaxAttempt: 'TaskMaxAttempt',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timeout: 'Timeout',
      timeoutEnable: 'TimeoutEnable',
      timeoutKillEnable: 'TimeoutKillEnable',
      timezone: 'Timezone',
      XAttrs: 'XAttrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptInterval: 'number',
      calendar: 'string',
      className: 'string',
      consumerSize: 'number',
      contactInfo: { 'type': 'array', 'itemType': CreateJobRequestContactInfo },
      content: 'string',
      dataOffset: 'number',
      description: 'string',
      dispatcherSize: 'number',
      executeMode: 'string',
      failEnable: 'boolean',
      failTimes: 'number',
      groupId: 'string',
      jobType: 'string',
      maxAttempt: 'number',
      maxConcurrency: 'number',
      missWorkerEnable: 'boolean',
      name: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      pageSize: 'number',
      parameters: 'string',
      priority: 'number',
      queueSize: 'number',
      regionId: 'string',
      sendChannel: 'string',
      startTime: 'number',
      status: 'number',
      successNoticeEnable: 'boolean',
      taskAttemptInterval: 'number',
      taskMaxAttempt: 'number',
      timeExpression: 'string',
      timeType: 'number',
      timeout: 'number',
      timeoutEnable: 'boolean',
      timeoutKillEnable: 'boolean',
      timezone: 'string',
      XAttrs: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contactInfo)) {
      $dara.Model.validateArray(this.contactInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

