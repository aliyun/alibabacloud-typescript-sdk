// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunWorkflowInstancesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to rerun the matched instances and all downstream instances.
   * 
   * @example
   * false
   */
  rerunDownstreamEnabled?: boolean;
  /**
   * @remarks
   * The internal task IDs used for matching manual workflow instances.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The statuses of internal tasks used for matching manual workflow instances.
   */
  taskInstanceStatuses?: string[];
  /**
   * @remarks
   * The internal task name used for matching the manual workflow instance.
   * 
   * @example
   * test
   */
  taskName?: string;
  /**
   * @remarks
   * Match internal tasks within the manual workflow by type.
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
  filter?: RerunWorkflowInstancesRequestFilter;
  /**
   * @remarks
   * The instance IDs used for matching manual workflow instances.
   */
  ids?: number[];
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

