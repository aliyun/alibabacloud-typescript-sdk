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

