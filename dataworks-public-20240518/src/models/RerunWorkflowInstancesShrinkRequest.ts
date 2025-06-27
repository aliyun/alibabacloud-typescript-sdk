// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunWorkflowInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business date used for matching manual workflow instances.
   * 
   * @example
   * 1710239005403
   */
  bizdate?: number;
  /**
   * @remarks
   * The end trigger time of the manual workflow instance used for matching. This parameter must be used together with the StartTriggerTime.
   * 
   * @example
   * 1710239005403
   */
  endTriggerTime?: number;
  /**
   * @remarks
   * The environment of the workspace. Valid values:
   * 
   * Prod Dev
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The match conditions for internal instances of manual workflow instances.
   */
  filterShrink?: string;
  /**
   * @remarks
   * The instance IDs used for matching manual workflow instances.
   */
  idsShrink?: string;
  /**
   * @remarks
   * The manual workflow name, used for fuzzy matching.
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
   * @example
   * 1710239005403
   */
  startTriggerTime?: number;
  /**
   * @remarks
   * The status used for matching manual workflow instances.
   * 
   * Valid values:
   * 
   * *   Success
   * *   Failure
   * 
   * @example
   * Failure
   */
  status?: string;
  /**
   * @remarks
   * The type of the workflow instance. Valid values:
   * 
   * ManualWorkflow.
   * 
   * This parameter is required.
   * 
   * @example
   * ManualWorkflow
   */
  type?: string;
  /**
   * @remarks
   * The workflow ID.
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

