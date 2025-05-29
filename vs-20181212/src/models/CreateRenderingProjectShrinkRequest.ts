// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRenderingProjectShrinkRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * du_merchant_d
   */
  projectName?: string;
  sessionAttribsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      projectName: 'ProjectName',
      sessionAttribsShrink: 'SessionAttribs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      projectName: 'string',
      sessionAttribsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

