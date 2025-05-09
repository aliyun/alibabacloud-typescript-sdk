// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateWorkflowRequestOutputsTaskOutputs } from "./UpdateWorkflowRequestOutputsTaskOutputs";


export class UpdateWorkflowRequestOutputs extends $dara.Model {
  /**
   * @remarks
   * The task outputs.
   */
  taskOutputs?: UpdateWorkflowRequestOutputsTaskOutputs[];
  static names(): { [key: string]: string } {
    return {
      taskOutputs: 'TaskOutputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOutputs: { 'type': 'array', 'itemType': UpdateWorkflowRequestOutputsTaskOutputs },
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

