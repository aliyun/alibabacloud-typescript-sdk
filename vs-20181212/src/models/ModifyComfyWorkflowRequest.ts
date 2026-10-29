// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyComfyWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the workflow template.
   * 
   * @example
   * This is an image-to-video workflow
   */
  description?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * wf_3de1eb6e-1dfe-45aa-8f88-2269d0a30f53
   */
  workflowId?: string;
  /**
   * @remarks
   * The name of the workflow template.
   * 
   * @example
   * Image-to-video workflow example
   */
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

