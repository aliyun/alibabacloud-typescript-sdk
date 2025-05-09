// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateWorkflowRequestTasksInputsVariables } from "./UpdateWorkflowRequestTasksInputsVariables";


export class UpdateWorkflowRequestTasksInputs extends $dara.Model {
  /**
   * @remarks
   * The variables.
   */
  variables?: UpdateWorkflowRequestTasksInputsVariables[];
  static names(): { [key: string]: string } {
    return {
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': UpdateWorkflowRequestTasksInputsVariables },
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

