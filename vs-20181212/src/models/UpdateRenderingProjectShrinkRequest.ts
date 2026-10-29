// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRenderingProjectShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * Directory 1
   */
  description?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  /**
   * @remarks
   * The custom project name, which serves as the unique identifier of the project. Default naming conventions: 1. The length must be 1 to 128 characters. 2. The name can contain lowercase letters, digits, underscores (_), hyphens (-), and periods (.). 3. The first and last characters must be letters or digits. At least one of ProjectName, SessionAttribs, or Description must be specified.
   * 
   * @example
   * idata_content
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
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      sessionAttribsShrink: 'SessionAttribs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      projectId: 'string',
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

