// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the workflow.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The application group ID. You can obtain the application group ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * helloworld
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID. You can obtain the namespace ID on the Namespace page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time expression. You can set the time expression based on the selected method that is used to specify time.
   * 
   * *   If you set TimeType to cron, you need to enter a standard cron expression. Online verification is supported.
   * *   If you set TimeType to api, no time expression is required.
   * 
   * @example
   * 0 0/10 * * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The method that is used to specify the time. Valid values:
   * 
   * *   1: cron
   * *   100: api
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      name: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      timeExpression: 'string',
      timeType: 'number',
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

