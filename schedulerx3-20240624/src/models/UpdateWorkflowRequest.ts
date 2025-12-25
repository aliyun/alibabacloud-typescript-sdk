// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @example
   * D0DE9C33-992A-580B-89C4-B609A292748D
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-d6a5243b6fa
   */
  clusterId?: string;
  /**
   * @example
   * my first workflow
   */
  description?: string;
  /**
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @example
   * myWorkflow
   */
  name?: string;
  /**
   * @example
   * 0 0/10 * * * ?
   */
  timeExpression?: string;
  /**
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @example
   * GMT+8
   */
  timezone?: string;
  /**
   * @remarks
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

