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
   * The X coordinate.
   * 
   * @example
   * 100.0
   */
  x?: number;
  /**
   * @remarks
   * The Y coordinate.
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
   * @example
   * 30
   */
  endEarly?: number;
  endEarlyEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable failure alerting. Valid values:
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
   * 1
   */
  failLimitTimes?: number;
  /**
   * @remarks
   * Specifies whether to enable alerting when no workers are available. Valid values:
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
   * Specifies whether to enable success notification. Valid values:
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
   * The timeout period. Unit: seconds.
   * 
   * @example
   * 30
   */
  timeout?: number;
  /**
   * @remarks
   * Specifies whether to enable timeout alerting. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  timeoutEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable timeout termination. Valid values:
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

export class CreateJobRequestNoticeContacts extends $dara.Model {
  /**
   * @remarks
   * The object type of the notification recipient. Valid values:
   * 
   * - 1: alert contact
   * 
   * - 2: alert contact group.
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
   * The retry interval on failure. Unit: seconds. Default value: 30.
   * 
   * @example
   * 3
   */
  attemptInterval?: number;
  /**
   * @remarks
   * The custom calendar. This parameter is optional for the cron time type.
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
   * The node coordinate in the workflow.
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
   * - 2: ignore subsequent schedules
   * - 3: override previous schedules.
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
   * The node type.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob
   */
  jobType?: string;
  /**
   * @remarks
   * The maximum number of retries on failure. Set this parameter based on your business requirements.
   * 
   * @example
   * 3
   */
  maxAttempt?: number;
  /**
   * @remarks
   * The maximum number of concurrent instances.
   * 
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The node name.
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
   * 
   * @example
   * 1
   */
  noticeConfig?: CreateJobRequestNoticeConfig;
  /**
   * @remarks
   * The notification contact configuration.
   */
  noticeContacts?: CreateJobRequestNoticeContacts[];
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
   * The priority. Valid values:
   * - 1: low
   * - 5: medium
   * - 10: high
   * - 15: very high.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The routing strategy. Valid values:
   * - 1: round robin
   * - 2: random
   * - 3: first
   * - 4: last
   * - 5: least frequently used
   * - 6: least recently used
   * - 7: consistent hashing
   * - 8: shard broadcast.
   * 
   * @example
   * 1
   */
  routeStrategy?: number;
  /**
   * @remarks
   * The script content for non-BEAN node types. Use this field to pass the script content.
   * 
   * @example
   * echo "hello world"
   */
  script?: string;
  /**
   * @remarks
   * The start time.
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
   * The node status. Default value: enabled. Valid values:
   * - 0: disabled
   * - 1: enabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time expression. Set this parameter based on the selected time type.
   * - **none**: No value is required.
   * - **cron**: Specify a standard cron expression. Online validation is supported.
   * - **api**: No value is required.
   * - **fixed_rate**: Specify a fixed frequency value in seconds. For example, 200 indicates that the node is triggered every 200 seconds.
   * - **one_time**: Specify a scheduling time in the yyyy-MM-dd HH:mm:ss format or a timestamp in milliseconds. For example, "2022-10-10 10:10:00".
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
   * - 100: api.
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
   * The node weight.
   * 
   * @example
   * 1
   */
  weight?: number;
  /**
   * @remarks
   * The extended attributes. This parameter is required for K8s node types.
   * Job node: {"resource":"job"}
   * Shell node: {"image":"busybox","resource":"shell"}.
   * 
   * @example
   * {"resource":"job"}
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

