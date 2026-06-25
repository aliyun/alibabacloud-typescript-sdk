// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobShrinkRequest extends $dara.Model {
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
   * The interval in seconds between retry attempts.
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
   * The client blocking strategy.
   * 
   * - 1: Serial execution
   * 
   * - 2: Ignore later schedules
   * 
   * - 3: Overwrite earlier schedules
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
   * Notification contact configuration
   * 
   * @example
   * 1
   */
  executorBlockStrategy?: number;
  /**
   * @remarks
   * The job handler name.
   * 
   * @example
   * testJobVoidHandler
   */
  jobHandler?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @remarks
   * The maximum number of retries for a failed job.
   * 
   * @example
   * 3
   */
  maxAttempt?: number;
  /**
   * @remarks
   * The maximum number of concurrent job instances.
   * 
   * > This parameter defines the maximum number of instances for a single job that can run concurrently. A value of `1` prevents duplicate execution. If this limit is exceeded, the scheduler skips the current job.
   * 
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * test-job
   */
  name?: string;
  /**
   * @remarks
   * Time zone
   * 
   * > The default is the time zone of the SchedulerX server.
   */
  noticeConfigShrink?: string;
  /**
   * @remarks
   * Notification configuration
   */
  noticeContactsShrink?: string;
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
   * The job execution priority. Valid values:
   * 
   * - `1`: Low
   * 
   * - `5`: Medium
   * 
   * - `10`: High
   * 
   * - `15`: Very High
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The routing strategy. Valid values:
   * 
   * - `1`: round-robin
   * 
   * - `2`: random
   * 
   * - `3`: first
   * 
   * - `4`: last
   * 
   * - `5`: least frequently used
   * 
   * - `6`: least recently used
   * 
   * - `7`: consistent hashing
   * 
   * - `8`: sharded broadcast
   * 
   * @example
   * 1
   */
  routeStrategy?: number;
  /**
   * @remarks
   * The script content for non-BEAN jobs.
   * 
   * @example
   * echo "hello world"
   */
  script?: string;
  /**
   * @remarks
   * The type of the start time.
   * 
   * @example
   * 1716902187
   */
  startTime?: number;
  /**
   * @remarks
   * The task execution priority. The following values are supported:
   * 
   * - 1: Low
   * 
   * - 5: Medium
   * 
   * - 10: High
   * 
   * - 15: Very High
   * 
   * @example
   * 1
   */
  startTimeType?: string;
  /**
   * @remarks
   * The time expression. The expression format depends on the `TimeType`.
   * 
   * - `none`: Leave this parameter empty.
   * 
   * - `cron`: Specify a standard cron expression. Online validation is supported.
   * 
   * - `api`: Leave this parameter empty.
   * 
   * - `fixed_rate`: An integer that represents a fixed interval in seconds. For example, `30` triggers the job every 30 seconds.
   * 
   * - `one_time`: A single execution time, specified in the `yyyy-MM-dd HH:mm:ss` format or as a timestamp in milliseconds. For example, "2022-10-10 10:10:00".
   * 
   * @example
   * 0 0 4 ? * Mon/1
   */
  timeExpression?: string;
  /**
   * @remarks
   * The time type. Valid values:
   * 
   * - `-1`: none
   * 
   * - `1`: cron
   * 
   * - `3`: fixed_rate
   * 
   * - `5`: one_time
   * 
   * - `100`: api
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The start time of the schedule.
   * 
   * @example
   * Hongkong
   */
  timezone?: string;
  /**
   * @remarks
   * The ID of the child job. Separate multiple IDs with a comma.
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
      noticeConfigShrink: 'NoticeConfig',
      noticeContactsShrink: 'NoticeContacts',
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
      noticeConfigShrink: 'string',
      noticeContactsShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

