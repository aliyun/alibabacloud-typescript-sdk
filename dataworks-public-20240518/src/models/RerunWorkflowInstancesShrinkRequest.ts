// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunWorkflowInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The data timestamp specified for the manual workflow instance run, used for matching.
   * 
   * The value is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  bizdate?: number;
  /**
   * @remarks
   * The end trigger time (creation time) of the manual workflow instance used for matching. This parameter must be used together with StartTriggerTime.
   * 
   * The value is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  endTriggerTime?: number;
  /**
   * @remarks
   * The project environment. Valid values:
   * 
   * - Prod: Production.
   * - Dev: Development.
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The matching conditions for the internal instances of the manual workflow instance.
   */
  filterShrink?: string;
  /**
   * @remarks
   * The list of manual workflow instance IDs used for matching.
   */
  idsShrink?: string;
  /**
   * @remarks
   * The name of the manual workflow used for fuzzy matching.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The start trigger time (creation time) of the manual workflow instance used for matching. This parameter must be used together with EndTriggerTime.
   * 
   * The value is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  startTriggerTime?: number;
  /**
   * @remarks
   * The running status of the manual workflow instance used for matching.
   * 
   * @example
   * Failure
   */
  status?: string;
  /**
   * @remarks
   * The type of the workflow instance. Valid values:
   * 
   * - ManualWorkflow: Manual workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * ManualWorkflow
   */
  type?: string;
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      endTriggerTime: 'EndTriggerTime',
      envType: 'EnvType',
      filterShrink: 'Filter',
      idsShrink: 'Ids',
      name: 'Name',
      projectId: 'ProjectId',
      startTriggerTime: 'StartTriggerTime',
      status: 'Status',
      type: 'Type',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'number',
      endTriggerTime: 'number',
      envType: 'string',
      filterShrink: 'string',
      idsShrink: 'string',
      name: 'string',
      projectId: 'number',
      startTriggerTime: 'number',
      status: 'string',
      type: 'string',
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

