// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * xxl-job-executor-sample
   */
  appName?: string;
  /**
   * @remarks
   * The custom calendar. This parameter applies only when `TimeType` is `cron`.
   * 
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @remarks
   * A unique client token to ensure request idempotence. The token must contain only ASCII characters. If you omit this parameter, the system uses the RequestId as the ClientToken. The RequestId is unique to each request.
   * 
   * @example
   * 123456789
   */
  clientToken?: string;
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
   * The workflow description.
   * 
   * @example
   * my first workflow for data analyse
   */
  description?: string;
  /**
   * @remarks
   * The maximum concurrency for the workflow.
   * 
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The workflow name.
   * 
   * This parameter is required.
   * 
   * @example
   * my-workflow
   */
  name?: string;
  /**
   * @remarks
   * The status of the workflow. By default, the workflow is disabled. Valid values:
   * 
   * - 0: Disabled
   * 
   * - 1: Enabled
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The time expression, which depends on the `TimeType` parameter.
   * 
   * - **none**: This parameter is not required.
   * 
   * - **cron**: Enter a standard cron expression. Online validation is supported.
   * 
   * - **api**: This parameter is not required.
   * 
   * @example
   * 0 0 4 ? * Mon/1
   */
  timeExpression?: string;
  /**
   * @remarks
   * The schedule type. Valid values:
   * 
   * - -1: none<br>
   * 
   * - 1: cron<br>
   * 
   * - 100: api
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The time zone for the schedule.
   * 
   * @example
   * GMT+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      calendar: 'Calendar',
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      description: 'Description',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      status: 'Status',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      calendar: 'string',
      clientToken: 'string',
      clusterId: 'string',
      description: 'string',
      maxConcurrency: 'number',
      name: 'string',
      status: 'number',
      timeExpression: 'string',
      timeType: 'number',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

