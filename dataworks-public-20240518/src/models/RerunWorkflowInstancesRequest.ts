// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunWorkflowInstancesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to rerun the matched instances and all their downstream instances.
   * 
   * @example
   * false
   */
  rerunDownstreamEnabled?: boolean;
  /**
   * @remarks
   * The task IDs of the internal tasks in the manual workflow used for matching.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The running statuses of the internal instances of the manual workflow instance used for matching.
   */
  taskInstanceStatuses?: string[];
  /**
   * @remarks
   * The name of the internal task in the manual workflow used for matching.
   * 
   * @example
   * test
   */
  taskName?: string;
  /**
   * @remarks
   * The types of the internal tasks in the manual workflow used for matching.
   */
  taskTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      rerunDownstreamEnabled: 'RerunDownstreamEnabled',
      taskIds: 'TaskIds',
      taskInstanceStatuses: 'TaskInstanceStatuses',
      taskName: 'TaskName',
      taskTypes: 'TaskTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rerunDownstreamEnabled: 'boolean',
      taskIds: { 'type': 'array', 'itemType': 'number' },
      taskInstanceStatuses: { 'type': 'array', 'itemType': 'string' },
      taskName: 'string',
      taskTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    if(Array.isArray(this.taskInstanceStatuses)) {
      $dara.Model.validateArray(this.taskInstanceStatuses);
    }
    if(Array.isArray(this.taskTypes)) {
      $dara.Model.validateArray(this.taskTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunWorkflowInstancesRequest extends $dara.Model {
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
  filter?: RerunWorkflowInstancesRequestFilter;
  /**
   * @remarks
   * The list of manual workflow instance IDs used for matching.
   */
  ids?: number[];
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
      filter: 'Filter',
      ids: 'Ids',
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
      filter: RerunWorkflowInstancesRequestFilter,
      ids: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
      projectId: 'number',
      startTriggerTime: 'number',
      status: 'string',
      type: 'string',
      workflowId: 'number',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

