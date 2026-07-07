// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobRequestNoticeConfig extends $dara.Model {
  /**
   * @example
   * 30
   */
  endEarly?: number;
  endEarlyEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the failure alerting switch. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  failEnable?: boolean;
  /**
   * @remarks
   * The number of consecutive failures.
   * > An alert is sent only when the number of consecutive failures exceeds the configured value.
   * 
   * @example
   * true
   */
  failLimitTimes?: number;
  /**
   * @remarks
   * Specifies whether to enable the no-available-machine alerting switch. Valid values:
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  missWorkerEnable?: boolean;
  /**
   * @remarks
   * The notification channel. Valid values:
   *  - sms: text message
   *  - phone: phone call
   * - mail: email
   * - webhook: webhook
   * > Separate multiple notification channels with commas.
   * 
   * @example
   * webhook,sms,mail,phone
   */
  sendChannel?: string;
  /**
   * @remarks
   * Specifies whether to enable the success notification switch. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  successNotice?: boolean;
  /**
   * @remarks
   * The node execution timeout period, in seconds.
   * 
   * @example
   * 90
   */
  timeout?: number;
  /**
   * @remarks
   * Specifies whether to enable timeout alerting. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * @example
   * true
   */
  timeoutEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the timeout termination switch for the current trigger. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  timeoutKillEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      endEarly: 'EndEarly',
      endEarlyEnable: 'EndEarlyEnable',
      failEnable: 'FailEnable',
      failLimitTimes: 'FailLimitTimes',
      missWorkerEnable: 'MissWorkerEnable',
      sendChannel: 'SendChannel',
      successNotice: 'SuccessNotice',
      timeout: 'Timeout',
      timeoutEnable: 'TimeoutEnable',
      timeoutKillEnable: 'TimeoutKillEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endEarly: 'number',
      endEarlyEnable: 'boolean',
      failEnable: 'boolean',
      failLimitTimes: 'number',
      missWorkerEnable: 'boolean',
      sendChannel: 'string',
      successNotice: 'boolean',
      timeout: 'number',
      timeoutEnable: 'boolean',
      timeoutKillEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobRequestNoticeContacts extends $dara.Model {
  /**
   * @remarks
   * The contact type. 
   * >Default configurations: 1.
   * 
   * @example
   * 1
   */
  contactType?: number;
  /**
   * @remarks
   * The contact name.
   * 
   * @example
   * xiaoming
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      contactType: 'ContactType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactType: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The retry interval upon node failure.
   * 
   * @example
   * 3
   */
  attemptInterval?: number;
  /**
   * @remarks
   * The custom calendar.
   * 
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @remarks
   * The child node IDs, separated by commas.
   * 
   * @example
   * 1,2
   */
  childJobId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The dependency strategy.
   * 
   * @example
   * 1
   */
  dependentStrategy?: number;
  /**
   * @remarks
   * The node description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The client blocking strategy. Valid values:
   * - 1: serial execution on a single machine
   * - 2: ignore subsequent scheduling
   * - 3: override previous scheduling
   * 
   * @example
   * 1
   */
  executorBlockStrategy?: number;
  /**
   * @remarks
   * The JobHandler name.
   * 
   * @example
   * testJobVoidHandler
   */
  jobHandler?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @remarks
   * The maximum number of retry attempts upon node failure.
   * 
   * @example
   * 3
   */
  maxAttempt?: number;
  /**
   * @remarks
   * The maximum number of concurrent instances of the node.
   * >The maximum number of instances that can run at the same time for the same node. A value of 1 indicates that repeated execution is not allowed. If the concurrency limit is exceeded, the current scheduling is skipped.
   * 
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * test-job
   */
  name?: string;
  /**
   * @remarks
   * The notification configuration.
   */
  noticeConfig?: UpdateJobRequestNoticeConfig;
  /**
   * @remarks
   * The notification contact configuration.
   */
  noticeContacts?: UpdateJobRequestNoticeContacts[];
  /**
   * @remarks
   * The node parameters.
   * 
   * @example
   * test
   */
  parameters?: string;
  /**
   * @remarks
   * The execution priority of the node. Valid values:
   * 
   * - 1: low
   * - 5: medium
   * - 10: high
   * - 15: very high
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The routing policy. Valid values:
   * 
   * - 1: round robin
   * - 2: random
   * - 3: first
   * - 4: last
   * - 5: least frequently used
   * - 6: least recently used
   * - 7: consistent hashing
   * - 8: shard broadcast
   * 
   * @example
   * 1
   */
  routeStrategy?: number;
  /**
   * @remarks
   * The script for non-BEAN nodes. Use this field to configure the script.
   * 
   * @example
   * echo "hello world"
   */
  script?: string;
  /**
   * @remarks
   * The scheduling start time.
   * 
   * @example
   * 1716902187
   */
  startTime?: number;
  /**
   * @remarks
   * The start time type.
   * 
   * @example
   * 1
   */
  startTimeType?: string;
  /**
   * @remarks
   * The time expression. Set the time expression based on the selected time type.
   * 
   * - none: No value is required.
   * - cron: Specify a standard cron expression. Online verification is supported.
   * - api: No value is required.
   * - fixed_rate: Specify a fixed frequency value in seconds. For example, 30 indicates that the node is triggered every 30 seconds.
   * - one_time: Specify a scheduling time in the yyyy-MM-dd HH:mm:ss format or a timestamp in milliseconds. For example, "2022-10-10 10:10:00".
   * 
   * @example
   * 0 0 4 ? * Mon/1
   */
  timeExpression?: string;
  /**
   * @remarks
   * The time type. Valid values:
   * 
   * - -1: none
   * - 1: cron
   * - 3: fix_rate
   * - 5: one_time
   * - 100: api
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The time zone.
   * > By default, the time zone of the SchedulerX server is used.
   * 
   * @example
   * Hongkong
   */
  timezone?: string;
  /**
   * @remarks
   * The node weight.
   * 
   * @example
   * 1
   */
  weight?: number;
  /**
   * @example
   * {"reponseMode":"streaming"}
   */
  XAttrs?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      attemptInterval: 'AttemptInterval',
      calendar: 'Calendar',
      childJobId: 'ChildJobId',
      clusterId: 'ClusterId',
      dependentStrategy: 'DependentStrategy',
      description: 'Description',
      executorBlockStrategy: 'ExecutorBlockStrategy',
      jobHandler: 'JobHandler',
      jobId: 'JobId',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      noticeConfig: 'NoticeConfig',
      noticeContacts: 'NoticeContacts',
      parameters: 'Parameters',
      priority: 'Priority',
      routeStrategy: 'RouteStrategy',
      script: 'Script',
      startTime: 'StartTime',
      startTimeType: 'StartTimeType',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timezone: 'Timezone',
      weight: 'Weight',
      XAttrs: 'XAttrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      attemptInterval: 'number',
      calendar: 'string',
      childJobId: 'string',
      clusterId: 'string',
      dependentStrategy: 'number',
      description: 'string',
      executorBlockStrategy: 'number',
      jobHandler: 'string',
      jobId: 'number',
      maxAttempt: 'number',
      maxConcurrency: 'number',
      name: 'string',
      noticeConfig: UpdateJobRequestNoticeConfig,
      noticeContacts: { 'type': 'array', 'itemType': UpdateJobRequestNoticeContacts },
      parameters: 'string',
      priority: 'number',
      routeStrategy: 'number',
      script: 'string',
      startTime: 'number',
      startTimeType: 'string',
      timeExpression: 'string',
      timeType: 'number',
      timezone: 'string',
      weight: 'number',
      XAttrs: 'string',
    };
  }

  validate() {
    if(this.noticeConfig && typeof (this.noticeConfig as any).validate === 'function') {
      (this.noticeConfig as any).validate();
    }
    if(Array.isArray(this.noticeContacts)) {
      $dara.Model.validateArray(this.noticeContacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

