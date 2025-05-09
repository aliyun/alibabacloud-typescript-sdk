// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteAdhocWorkflowInstanceRequestTasksOutputsTaskOutputs } from "./ExecuteAdhocWorkflowInstanceRequestTasksOutputsTaskOutputs";
import { ExecuteAdhocWorkflowInstanceRequestTasksOutputsVariables } from "./ExecuteAdhocWorkflowInstanceRequestTasksOutputsVariables";


export class ExecuteAdhocWorkflowInstanceRequestTasksOutputs extends $dara.Model {
  /**
   * @remarks
   * The task outputs.
   */
  taskOutputs?: ExecuteAdhocWorkflowInstanceRequestTasksOutputsTaskOutputs[];
  /**
   * @remarks
   * The variables.
   */
  variables?: ExecuteAdhocWorkflowInstanceRequestTasksOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      taskOutputs: 'TaskOutputs',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOutputs: { 'type': 'array', 'itemType': ExecuteAdhocWorkflowInstanceRequestTasksOutputsTaskOutputs },
      variables: { 'type': 'array', 'itemType': ExecuteAdhocWorkflowInstanceRequestTasksOutputsVariables },
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

