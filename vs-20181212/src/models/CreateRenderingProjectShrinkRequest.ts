// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRenderingProjectShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the project. The description must be 0 to 255 characters in length.
   * 
   * @example
   * Project overview
   */
  description?: string;
  /**
   * @remarks
   * The custom project name, which serves as the unique identifier for the project.
   * Naming conventions:
   * 1. The length must be 1 to 128 characters.
   * 2. The name can contain lowercase letters, digits, underscores (_), hyphens (-), and periods (.).
   * 3. The first and last characters must be letters or digits.
   * 
   * This parameter is required.
   * 
   * @example
   * du_merchant_d
   */
  projectName?: string;
  /**
   * @remarks
   * The session attributes.
   */
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

