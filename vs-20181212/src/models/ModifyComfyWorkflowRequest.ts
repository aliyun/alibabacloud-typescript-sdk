// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyComfyWorkflowRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wf_3de1eb6e-1dfe-45aa-8f88-2269d0a30f53
   */
  workflowId?: string;
  workflowName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      workflowId: 'WorkflowId',
      workflowName: 'WorkflowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      workflowId: 'string',
      workflowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

