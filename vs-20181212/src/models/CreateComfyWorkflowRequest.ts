// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComfyWorkflowRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
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

