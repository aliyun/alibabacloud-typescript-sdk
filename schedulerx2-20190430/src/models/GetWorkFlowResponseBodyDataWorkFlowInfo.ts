// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkFlowResponseBodyDataWorkFlowInfo extends $dara.Model {
  /**
   * @remarks
   * The description of the workflow.
   * 
   * @example
   * my first workflow
   */
  description?: string;
  groupId?: string;
  maxConcurrency?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * workflow_111
   */
  name?: string;
  namespace?: string;
  /**
   * @remarks
   * The status of the workflow.
   * 
   * @example
   * Successful
   */
  status?: string;
  /**
   * @remarks
   * The time expression of the workflow.
   * 
   * @example
   * 0 0 2 * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The time type of the workflow.
   * 
   * @example
   * cron
   */
  timeType?: string;
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * @example
   * 1234xxx
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      namespace: 'Namespace',
      status: 'Status',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      maxConcurrency: 'string',
      name: 'string',
      namespace: 'string',
      status: 'string',
      timeExpression: 'string',
      timeType: 'string',
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

