// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   */
  appGroupId?: number;
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
   * The retry interval for a failed job.
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
   * - 1: single-machine serial execution
   * - 2: ignore subsequent scheduling
   * - 3: override previous scheduling
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
   * The tag information of the job.
   * 
   * @example
   * {key:value}
   */
  label?: string;
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
   * The maximum number of concurrent instances for a job.
   * > The maximum number of instances that can run concurrently for the same job. A value of 1 indicates that repeated execution is not allowed. If the concurrency limit is exceeded, the current scheduling is skipped.
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
   * The notification configuration.
   */
  noticeConfigShrink?: string;
  /**
   * @remarks
   * The notification contact configuration.
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
   * The execution priority of the job. Valid values:
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
   * The routing strategy. Valid values:
   * 
   * - 1: round robin
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
   * The script configuration for non-BEAN jobs.
   * 
   * @example
   * echo "hello world"
   */
  script?: string;
  /**
   * @remarks
   * The start time of the scheduling.
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
   * The time expression. Configure the time expression based on the selected time type.
   * 
   * - none: not required
   * - cron: Enter a standard cron expression. Online verification is supported.
   * - api: not required
   * - fixed_rate: Enter a fixed frequency value in seconds. For example, 30 indicates that the job is triggered every 30 seconds.
   * - one_time: Enter the scheduling time in the yyyy-MM-dd HH:mm:ss format or a timestamp in milliseconds, such as "2022-10-10 10:10:00".
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
   * The weight of the job.
   * 
   * @example
   * 1
   */
  weight?: number;
  /**
   * @remarks
   * The extended properties of the job.
   * 
   * @example
   * {"reponseMode":"streaming"}
   */
  XAttrs?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
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
      label: 'Label',
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
      appGroupId: 'number',
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
      label: 'string',
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

