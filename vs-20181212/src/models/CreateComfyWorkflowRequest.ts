// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComfyWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The workflow description.
   * 
   * @example
   * 这是一个图生视频的工作流
   */
  description?: string;
  /**
   * @remarks
   * The workflow name.
   * 
   * This parameter is required.
   * 
   * @example
   * 图生视频的工作流示例
   */
  name?: string;
  /**
   * @remarks
   * The JSON definition of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * {}
   */
  workflow?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      workflow: 'Workflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      workflow: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

