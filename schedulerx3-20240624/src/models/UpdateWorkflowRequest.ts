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
   * The custom calendar.
   * 
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the value on the client side. Ensure that the value is unique across different requests and contains a maximum of 64 ASCII characters.
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
   * The maximum concurrency.
   * > The maximum number of instances that can run concurrently for the same workflow. A value of 1 indicates that concurrent execution is not allowed. If the concurrency limit is exceeded, the current scheduling task is skipped.
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
   * The time expression. Configure the time expression based on the selected time type.
   * - none: Leave this parameter empty.
   * - cron: Enter a standard cron expression. Online verification is supported.
   * - api: Leave this parameter empty.
   * 
   * @example
   * 0 0/10 * * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The scheduling type. Valid values:
   * - -1: none
   * - 1: cron
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

