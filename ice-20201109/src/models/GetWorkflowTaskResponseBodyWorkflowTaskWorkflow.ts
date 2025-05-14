// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowTaskResponseBodyWorkflowTaskWorkflow extends $dara.Model {
  /**
   * @remarks
   * The time when the workflow was created.
   * 
   * @example
   * 2022-11-27T10:02:12Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the workflow was last modified.
   * 
   * @example
   * 2022-11-29T02:06:19Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The workflow name.
   */
  name?: string;
  /**
   * @remarks
   * The workflow state.
   * 
   * Valid values:
   * 
   * *   Active
   * *   Inactive
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The workflow type.
   * 
   * Valid values:
   * 
   * *   Customize: custom workflow.
   * *   System: system workflow.
   * *   Common: user-created workflow.
   * 
   * @example
   * Common
   */
  type?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * ******63dca94c609de02ac0d1******
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      status: 'Status',
      type: 'Type',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifiedTime: 'string',
      name: 'string',
      status: 'string',
      type: 'string',
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

