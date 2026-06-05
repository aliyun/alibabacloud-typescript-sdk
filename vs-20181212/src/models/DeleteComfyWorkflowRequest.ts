// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteComfyWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wf_adb32aed-ccdc-42ae-b4d4-a21181ac8a5f
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

