// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorkflowResponseBodyWorkflowOutputsTaskOutputs } from "./GetWorkflowResponseBodyWorkflowOutputsTaskOutputs";


export class GetWorkflowResponseBodyWorkflowOutputs extends $dara.Model {
  /**
   * @remarks
   * The task outputs.
   */
  taskOutputs?: GetWorkflowResponseBodyWorkflowOutputsTaskOutputs[];
  static names(): { [key: string]: string } {
    return {
      taskOutputs: 'TaskOutputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOutputs: { 'type': 'array', 'itemType': GetWorkflowResponseBodyWorkflowOutputsTaskOutputs },
    };
  }

  validate() {
    if(Array.isArray(this.taskOutputs)) {
      $dara.Model.validateArray(this.taskOutputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

