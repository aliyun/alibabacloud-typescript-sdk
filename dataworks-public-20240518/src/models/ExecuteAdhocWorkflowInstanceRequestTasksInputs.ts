// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteAdhocWorkflowInstanceRequestTasksInputsVariables } from "./ExecuteAdhocWorkflowInstanceRequestTasksInputsVariables";


export class ExecuteAdhocWorkflowInstanceRequestTasksInputs extends $dara.Model {
  /**
   * @remarks
   * The variables.
   */
  variables?: ExecuteAdhocWorkflowInstanceRequestTasksInputsVariables[];
  static names(): { [key: string]: string } {
    return {
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': ExecuteAdhocWorkflowInstanceRequestTasksInputsVariables },
    };
  }

  validate() {
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

