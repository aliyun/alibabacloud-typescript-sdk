// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowRequest extends $dara.Model {
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
   * The name of a custom calendar to exclude specific dates from the schedule.
   * 
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @remarks
   * A unique token that you provide to ensure the request is idempotent. The token can be up to 64 ASCII characters long.
   * 
   * @example
   * D0DE9C33-992A-580B-89C4-B609A292748D
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-d6a5243b6fa
   */
  clusterId?: string;
  /**
   * @remarks
   * The workflow description.
   * 
   * @example
   * my first workflow
   */
  description?: string;
  /**
   * @remarks
   * The maximum concurrency for the workflow.
   * 
   * > The maximum number of concurrent instances that can run for the same workflow. A value of `1` prevents overlapping runs. If the number of running instances reaches this limit, subsequent scheduled runs are skipped.
   * 
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * myWorkflow
   */
  name?: string;
  /**
   * @remarks
   * The cron expression for the schedule. This parameter is required only when `TimeType` is set to `1` (cron).
   * 
   * - If `TimeType` is `-1` (none), this parameter is not required.
   * 
   * - If `TimeType` is `1` (cron), specify a standard cron expression.
   * 
   * - If `TimeType` is `100` (api), this parameter is not required.
   * 
   * @example
   * 0 0/10 * * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The scheduling type. Valid values:
   * 
   * - `-1` (none): The workflow is not scheduled and must be triggered on demand.
   * 
   * - `1` (cron): The workflow runs based on the cron expression in the `TimeExpression` parameter.
   * 
   * - `100` (api): The workflow is triggered by an API call.
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The time zone for the schedule.
   * 
   * > Defaults to the time zone of the SchedulerX server.
   * 
   * @example
   * GMT+8
   */
  timezone?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      calendar: 'Calendar',
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      description: 'Description',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timezone: 'Timezone',
      workflowId: 'WorkflowId',
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
      timeExpression: 'string',
      timeType: 'number',
      timezone: 'string',
      workflowId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

