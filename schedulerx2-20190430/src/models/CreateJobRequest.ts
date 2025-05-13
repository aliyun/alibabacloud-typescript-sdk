// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateJobRequestContactInfo } from "./CreateJobRequestContactInfo";


export class CreateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The time interval between retry attempts in case of a job failure. Unit: seconds. Default value: 30.
   * 
   * @example
   * 30
   */
  attemptInterval?: number;
  /**
   * @remarks
   * If you set TimeType to 1 (cron), you can specify calendar days.
   * 
   * @example
   * This parameter is not supported. You do not need to specify this parameter.
   */
  calendar?: string;
  /**
   * @remarks
   * The full path of the job interface class.
   * 
   * This parameter is available only when you set JobType to java. You must enter a full path.
   * 
   * @example
   * com.alibaba.schedulerx.test.helloworld
   */
  className?: string;
  /**
   * @remarks
   * The number of threads that a single worker triggers simultaneously. You can specify this parameter for MapReduce jobs. Default value: 5.
   * 
   * @example
   * 5
   */
  consumerSize?: number;
  /**
   * @remarks
   * The information about the alert contact.
   */
  contactInfo?: CreateJobRequestContactInfo[];
  /**
   * @remarks
   * The script content. This parameter is required when you set JobType to python, shell, go, or k8s.
   * 
   * @example
   * echo \\"hello\\"
   */
  content?: string;
  /**
   * @remarks
   * If you set TimeType to 1 (cron), you can specify a time offset. Unit: seconds.
   * 
   * @example
   * 2400
   */
  dataOffset?: number;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The number of task distribution threads. This parameter is an advanced configuration item of the MapReduce job. Default value: 5.
   * 
   * @example
   * 5
   */
  dispatcherSize?: number;
  /**
   * @remarks
   * The execution mode of the job. Valid values:
   * 
   * *   **Stand-alone operation**
   * *   **Broadcast run**
   * *   **Visual MapReduce**
   * *   **MapReduce**
   * *   **Shard run**
   * 
   * This parameter is required.
   * 
   * @example
   * standalone
   */
  executeMode?: string;
  /**
   * @remarks
   * Specifies whether to trigger an alert when a job fails. Valid values:
   * 
   * *   **true**: triggers an alert when a job fails.
   * *   **false**: does not trigger an alert when a job fails.
   * 
   * @example
   * false
   */
  failEnable?: boolean;
  /**
   * @remarks
   * The maximum number of consecutive failures before an alert is triggered. An alert will be triggered if the number of consecutive failures reaches the value of this parameter.
   * 
   * @example
   * 2
   */
  failTimes?: number;
  /**
   * @remarks
   * The application ID. You can obtain the application ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job type. Valid values:
   * 
   * *   java
   * *   python
   * *   shell
   * *   go
   * *   http
   * *   xxljob
   * *   dataworks
   * *   k8s
   * *   springschedule
   * 
   * This parameter is required.
   * 
   * @example
   * java
   */
  jobType?: string;
  /**
   * @remarks
   * The maximum number of retry attempts in case of a job failure. Specify this parameter based on your business requirements. Default value: 0.
   * 
   * @example
   * 0
   */
  maxAttempt?: number;
  /**
   * @remarks
   * The maximum number of concurrent instances. By default, only one instance can run at a time. When an instance is running, the next instance is not triggered even if the scheduled start time arrives.
   * 
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * Specifies whether to generate an alert if no machines are available to run the job. Valid values:
   * 
   * *   **true**: generates an alert if no machines are available to run the job.
   * *   **false**: does not generate an alert if no machines are available to run the job.
   * 
   * @example
   * false
   */
  missWorkerEnable?: boolean;
  /**
   * @remarks
   * The job name.
   * 
   * This parameter is required.
   * 
   * @example
   * helloworld
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID. You can obtain the namespace ID on the Namespace page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. You must specify this parameter only if the namespace is provided by a third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The number of entries per page. You can specify this parameter for MapReduce jobs. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The user-defined parameters that you can obtain when the job is running.
   * 
   * @example
   * test
   */
  parameters?: string;
  priority?: number;
  /**
   * @remarks
   * The maximum capacity of the task queue. You can specify this parameter for MapReduce jobs. Default value: 10000.
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
   * The method that is used to send alerts. Set the value to sms. Default value: sms.
   * 
   * @example
   * sms
   */
  sendChannel?: string;
  /**
   * @remarks
   * Specifies whether to enable the job. If this parameter is set to 0, the job is disabled. If this parameter is set to 1, the job is enabled. Default value: 1.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Specifies whether to send notifications for successfully running the job.
   * 
   * @example
   * false
   */
  successNoticeEnable?: boolean;
  /**
   * @remarks
   * The time interval between retry attempts in case of a job failure. This parameter is an advanced configuration item of the MapReduce job. Default value: 0.
   * 
   * @example
   * 0
   */
  taskAttemptInterval?: number;
  /**
   * @remarks
   * The maximum number of retry attempts in case of a job failure. This parameter is an advanced configuration item of the MapReduce job. Default value: 0.
   * 
   * @example
   * 0
   */
  taskMaxAttempt?: number;
  /**
   * @remarks
   * The time expression. Specify the time expression based on the value of TimeType:
   * 
   * *   If you set TimeType to **1** (cron), specify this parameter to a standard CRON expression.
   * *   If you set TimeType to **100** (api), no time expression is required.
   * *   If you set TimeType to **3** (fixed_rate), specify this parameter to a fixed frequency in seconds. For example, if you set this parameter to 30, the system triggers a job every 30 seconds.
   * *   If you set TimeType to **4** (second_delay), specify this parameter to a fixed delay after which the job is triggered. Valid values: 1 to 60. Unit: seconds.
   * *   If you set TimeType to **5** (one_time), specify this parameter to a specific time point at which the job is triggered. The time is in the format of yyyy-MM-dd HH:mm:ss, such as 2022-10-10 10:10:00, or a timestamp in milliseconds.
   * 
   * @example
   * 0 0/10 * * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The time type. Valid values:
   * 
   * *   **1**: cron
   * *   **3**: fixed_rate
   * *   **4**: second_delay
   * *   **5**: one_time
   * *   **100**: api
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
   * Specifies whether to enable the timeout alert feature. If the feature is enabled, an alert will be triggered upon a timeout. Valid values:
   * 
   * *   **true**: enables the timeout alert feature.
   * *   **false**: disables the timeout alert feature.
   * 
   * @example
   * false
   */
  timeoutEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the timeout termination feature. If the feature is enabled, a job will automatically be terminated if it times out. Valid values:
   * 
   * *   **true**: enables the timeout termination feature.
   * *   **false**: disables the timeout termination feature.
   * 
   * @example
   * false
   */
  timeoutKillEnable?: boolean;
  /**
   * @remarks
   * Time zone.
   * 
   * @example
   * GMT+8
   */
  timezone?: string;
  /**
   * @remarks
   * The extended attributes. If you set JobType to k8s, this parameter is required. For a job whose resource type is Job-YAML, set this parameter to {"resource":"job"}. For a job whose resource type is Shell-Script, set this parameter to {"image":"busybox","resource":"shell"}.
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

