// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobRequestCoordinate extends $dara.Model {
  /**
   * @remarks
   * The height.
   * 
   * @example
   * 50.0
   */
  height?: number;
  /**
   * @remarks
   * The width.
   * 
   * @example
   * 100.0
   */
  width?: number;
  /**
   * @remarks
   * The X-coordinate.
   * 
   * @example
   * 100.0
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate.
   * 
   * @example
   * 100.0
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestNoticeConfig extends $dara.Model {
  /**
   * @remarks
   * The early completion threshold. Unit: seconds.
   * 
   * @example
   * 30
   */
  endEarly?: number;
  /**
   * @remarks
   * Specifies whether to enable the early completion alert.
   */
  endEarlyEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable failure alerts. Valid values:
   * 
   * - **true**: enables failure alerts.
   * - **false**: disables failure alerts.
   * 
   * @example
   * true
   */
  failEnable?: boolean;
  /**
   * @remarks
   * The number of consecutive failures.
   * > An alert is triggered only when the number of consecutive failures exceeds the specified value.
   * 
   * @example
   * 1
   */
  failLimitTimes?: number;
  /**
   * @remarks
   * Specifies whether to enable alerts for unavailable workers. Valid values:
   * - **true**: enables alerts for unavailable workers.
   * - **false**: disables alerts for unavailable workers.
   * 
   * @example
   * true
   */
  missWorkerEnable?: boolean;
  /**
   * @remarks
   * The notification channels. Valid values:
   * - sms: SMS
   * - phone: phone call
   * - mail: email
   * - webhook: webhook
   * > Separate multiple notification channels with commas.
   * 
   * @example
   * mail
   */
  sendChannel?: string;
  /**
   * @remarks
   * Specifies whether to enable success notifications. Valid values:
   * 
   * - true: enables success notifications.
   * - false: disables success notifications.
   * 
   * @example
   * true
   */
  successNotice?: boolean;
  /**
   * @remarks
   * The timeout period. Unit: seconds.
   * 
   * @example
   * 30
   */
  timeout?: number;
  /**
   * @remarks
   * Specifies whether to enable the timeout alert. Valid values:
   * 
   * - **true**: enabled
   * 
   * - **false**: disabled
   * 
   * @example
   * true
   */
  timeoutEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the timeout termination feature. Valid values:
   * 
   * - **true**: enables the timeout termination feature.
   * - **false**: disables the timeout termination feature.
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

export class CreateJobRequestNoticeContacts extends $dara.Model {
  /**
   * @remarks
   * The notification recipient type. Valid values:
   * 
   * - 1: alert contact
   * 
   * - 2: alert contact group
   * 
   * @example
   * 1
   */
  contactType?: number;
  /**
   * @remarks
   * The name of the alert contact or alert contact group.
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

export class CreateJobRequest extends $dara.Model {
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
   * The retry interval for errors. Unit: seconds. Default value: 30.
   * 
   * @example
   * 3
   */
  attemptInterval?: number;
  /**
   * @remarks
   * The custom calendar. You can specify a custom calendar for the cron type.
   * 
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @remarks
   * The IDs of child jobs. Separate multiple IDs with commas.
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
   * The coordinates of the node in the workflow.
   */
  coordinate?: CreateJobRequestCoordinate;
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
   * The job description.
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
   * - 3: overwrite previous scheduling
   * 
   * @example
   * 1
   */
  executorBlockStrategy?: number;
  /**
   * @remarks
   * The name of the job handler.
   * 
   * @example
   * testJobVoidHandler
   */
  jobHandler?: string;
  /**
   * @remarks
   * The job type.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob
   */
  jobType?: string;
  /**
   * @remarks
   * The job label information.
   * 
   * @example
   * {key:value}
   */
  label?: string;
  /**
   * @remarks
   * The maximum number of retries for errors. Set this parameter based on your business requirements.
   * 
   * @example
   * 3
   */
  maxAttempt?: number;
  /**
   * @remarks
   * The maximum concurrency.
   * 
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The job name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-job
   */
  name?: string;
  /**
   * @remarks
   * The notification configuration.
   */
  noticeConfig?: CreateJobRequestNoticeConfig;
  /**
   * @remarks
   * The notification contact configuration.
   */
  noticeContacts?: CreateJobRequestNoticeContacts[];
  /**
   * @remarks
   * The job parameters.
   * 
   * @example
   * test
   */
  parameters?: string;
  /**
   * @remarks
   * The priority. Valid values:
   * - 1: low
   * - 5: medium
   * - 10: high
   * - 15: very high
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The routing strategy. Valid values:
   * - 1: round-robin
   * - 2: random
   * - 3: first
   * - 4: last
   * - 5: least frequently used
   * - 6: least recently used
   * - 7: consistent hashing
   * - 8: sharding broadcast
   * 
   * @example
   * 1
   */
  routeStrategy?: number;
  /**
   * @remarks
   * The script content for non-BEAN job types.
   * 
   * @example
   * echo "hello world"
   */
  script?: string;
  /**
   * @remarks
   * The start time. Use a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1701310327000
   */
  startTime?: number;
  /**
   * @remarks
   * The start time type.
   * 
   * @example
   * 1
   */
  startTimeType?: number;
  /**
   * @remarks
   * The job status. Default value: enabled. Valid values:
   * - 0: disabled
   * - 1: enabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time expression. Set the time expression based on the selected time type.
   * - **none**: Leave this parameter empty.
   * - **cron**: Enter a standard cron expression. Online verification is supported.
   * - **api**: Leave this parameter empty.
   * - **fixed_rate**: Enter a specific fixed frequency value. Unit: seconds. For example, 200 indicates that the job is triggered once every 200 seconds.
   * - **one_time**: Enter the scheduling time in the yyyy-MM-dd HH:mm:ss format or a timestamp in milliseconds. Example: "2022-10-10 10:10:00".
   * 
   * @example
   * 0 0 4 ? * Mon/1
   */
  timeExpression?: string;
  /**
   * @remarks
   * The time type. Valid values:
   * - -1: none<br/>
   * - 1: cron<br/>
   * - 3: fix_rate<br/>
   * - 5: one_time<br/>
   * - 100: api
   * 
   * This parameter is required.
   * 
   * @example
   * -1
   */
  timeType?: number;
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
   * The job weight.
   * 
   * @example
   * 1
   */
  weight?: number;
  /**
   * @remarks
   * The extended attributes. This parameter is required for Kubernetes job types.
   * Job: {"resource":"job"}
   * Shell: {"image":"busybox","resource":"shell"}
   * 
   * @example
   * {"responseMode":"streaming"}
   */
  XAttrs?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      attemptInterval: 'AttemptInterval',
      calendar: 'Calendar',
      childJobId: 'ChildJobId',
      clusterId: 'ClusterId',
      coordinate: 'Coordinate',
      dependentStrategy: 'DependentStrategy',
      description: 'Description',
      executorBlockStrategy: 'ExecutorBlockStrategy',
      jobHandler: 'JobHandler',
      jobType: 'JobType',
      label: 'Label',
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
      status: 'Status',
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
      coordinate: CreateJobRequestCoordinate,
      dependentStrategy: 'number',
      description: 'string',
      executorBlockStrategy: 'number',
      jobHandler: 'string',
      jobType: 'string',
      label: 'string',
      maxAttempt: 'number',
      maxConcurrency: 'number',
      name: 'string',
      noticeConfig: CreateJobRequestNoticeConfig,
      noticeContacts: { 'type': 'array', 'itemType': CreateJobRequestNoticeContacts },
      parameters: 'string',
      priority: 'number',
      routeStrategy: 'number',
      script: 'string',
      startTime: 'number',
      startTimeType: 'number',
      status: 'number',
      timeExpression: 'string',
      timeType: 'number',
      timezone: 'string',
      weight: 'number',
      XAttrs: 'string',
    };
  }

  validate() {
    if(this.coordinate && typeof (this.coordinate as any).validate === 'function') {
      (this.coordinate as any).validate();
    }
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

