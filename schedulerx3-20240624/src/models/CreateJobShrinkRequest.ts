// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobShrinkRequest extends $dara.Model {
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
  coordinateShrink?: string;
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
      coordinateShrink: 'Coordinate',
      dependentStrategy: 'DependentStrategy',
      description: 'Description',
      executorBlockStrategy: 'ExecutorBlockStrategy',
      jobHandler: 'JobHandler',
      jobType: 'JobType',
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
      coordinateShrink: 'string',
      dependentStrategy: 'number',
      description: 'string',
      executorBlockStrategy: 'number',
      jobHandler: 'string',
      jobType: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

