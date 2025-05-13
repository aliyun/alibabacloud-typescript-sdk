// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * 92583
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

