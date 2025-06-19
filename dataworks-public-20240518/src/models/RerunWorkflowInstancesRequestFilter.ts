// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunWorkflowInstancesRequestFilter extends $dara.Model {
  /**
   * @example
   * false
   */
  rerunDownstreamEnabled?: boolean;
  taskIds?: number[];
  taskInstanceStatuses?: string[];
  /**
   * @example
   * test
   */
  taskName?: string;
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

