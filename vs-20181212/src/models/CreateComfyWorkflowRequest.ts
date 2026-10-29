// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComfyWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the workflow.
   * 
   * @example
   * This is a workflow for image-to-video
   */
  description?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * Sample workflow for image-to-video
   */
  name?: string;
  /**
   * @remarks
   * The workflow JSON.
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

