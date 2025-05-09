// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTaskResponseBodyTaskOutputsTaskOutputs } from "./GetTaskResponseBodyTaskOutputsTaskOutputs";
import { GetTaskResponseBodyTaskOutputsVariables } from "./GetTaskResponseBodyTaskOutputsVariables";


export class GetTaskResponseBodyTaskOutputs extends $dara.Model {
  /**
   * @remarks
   * The task outputs.
   */
  taskOutputs?: GetTaskResponseBodyTaskOutputsTaskOutputs[];
  /**
   * @remarks
   * The variables.
   */
  variables?: GetTaskResponseBodyTaskOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      taskOutputs: 'TaskOutputs',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOutputs: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskOutputsTaskOutputs },
      variables: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskOutputsVariables },
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

