// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyComfyWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The new workflow description.
   * 
   * @example
   * 这是一个图生视频的工作流
   */
  description?: string;
  /**
   * @remarks
   * The ID of the workflow to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * wf_3de1eb6e-1dfe-45aa-8f88-2269d0a30f53
   */
  workflowId?: string;
  /**
   * @remarks
   * The new workflow name.
   * 
   * @example
   * 图生视频工作流示例
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

