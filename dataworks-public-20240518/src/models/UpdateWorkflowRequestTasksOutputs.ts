// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateWorkflowRequestTasksOutputsTaskOutputs } from "./UpdateWorkflowRequestTasksOutputsTaskOutputs";
import { UpdateWorkflowRequestTasksOutputsVariables } from "./UpdateWorkflowRequestTasksOutputsVariables";


export class UpdateWorkflowRequestTasksOutputs extends $dara.Model {
  /**
   * @remarks
   * The task outputs.
   */
  taskOutputs?: UpdateWorkflowRequestTasksOutputsTaskOutputs[];
  /**
   * @remarks
   * The variables.
   */
  variables?: UpdateWorkflowRequestTasksOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      taskOutputs: 'TaskOutputs',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOutputs: { 'type': 'array', 'itemType': UpdateWorkflowRequestTasksOutputsTaskOutputs },
      variables: { 'type': 'array', 'itemType': UpdateWorkflowRequestTasksOutputsVariables },
    };
  }

  validate() {
    if(Array.isArray(this.taskOutputs)) {
      $dara.Model.validateArray(this.taskOutputs);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

