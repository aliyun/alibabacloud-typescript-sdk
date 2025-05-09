// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTaskInstanceResponseBodyTaskInstanceOutputsTaskOutputs } from "./GetTaskInstanceResponseBodyTaskInstanceOutputsTaskOutputs";
import { GetTaskInstanceResponseBodyTaskInstanceOutputsVariables } from "./GetTaskInstanceResponseBodyTaskInstanceOutputsVariables";


export class GetTaskInstanceResponseBodyTaskInstanceOutputs extends $dara.Model {
  /**
   * @remarks
   * The task outputs.
   */
  taskOutputs?: GetTaskInstanceResponseBodyTaskInstanceOutputsTaskOutputs[];
  /**
   * @remarks
   * The variables.
   */
  variables?: GetTaskInstanceResponseBodyTaskInstanceOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      taskOutputs: 'TaskOutputs',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOutputs: { 'type': 'array', 'itemType': GetTaskInstanceResponseBodyTaskInstanceOutputsTaskOutputs },
      variables: { 'type': 'array', 'itemType': GetTaskInstanceResponseBodyTaskInstanceOutputsVariables },
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

