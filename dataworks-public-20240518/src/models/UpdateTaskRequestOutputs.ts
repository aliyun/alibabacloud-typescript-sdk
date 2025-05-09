// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTaskRequestOutputsTaskOutputs } from "./UpdateTaskRequestOutputsTaskOutputs";
import { UpdateTaskRequestOutputsVariables } from "./UpdateTaskRequestOutputsVariables";


export class UpdateTaskRequestOutputs extends $dara.Model {
  /**
   * @remarks
   * The task outputs.
   */
  taskOutputs?: UpdateTaskRequestOutputsTaskOutputs[];
  /**
   * @remarks
   * The variables.
   */
  variables?: UpdateTaskRequestOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      taskOutputs: 'TaskOutputs',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOutputs: { 'type': 'array', 'itemType': UpdateTaskRequestOutputsTaskOutputs },
      variables: { 'type': 'array', 'itemType': UpdateTaskRequestOutputsVariables },
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

