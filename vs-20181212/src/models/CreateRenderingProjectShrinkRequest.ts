// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRenderingProjectShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the project. The description can be 0 to 255 characters in length.
   * 
   * @example
   * 项目概述
   */
  description?: string;
  /**
   * @remarks
   * The custom name of the project. This name is the unique identifier for the project.
   * The name must meet the following requirements:
   * 
   * 1. Be 1 to 128 characters in length.
   * 
   * 2. Contain only lowercase letters, digits, underscores (_), hyphens (-), and periods (.).
   * 
   * 3. Start and end with a letter or a digit.
   * 
   * This parameter is required.
   * 
   * @example
   * du_merchant_d
   */
  projectName?: string;
  /**
   * @remarks
   * The session properties.
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

