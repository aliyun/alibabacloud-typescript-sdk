// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRenderingProjectShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Project description
   * 
   * @example
   * 目录1
   */
  description?: string;
  /**
   * @remarks
   * Project ID
   * 
   * This parameter is required.
   * 
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  /**
   * @remarks
   * Default naming rules:
   * 
   * 1. Length 1-128
   * 
   * 2. Lowercase letters, numbers, underscores (_), hyphens (-), and periods (.).
   * 
   * 3. The first and last characters must be letters or digits. At least one of ProjectName, SessionAttribs, or Description must be specified.
   * 
   * @example
   * idata_content
   */
  projectName?: string;
  /**
   * @remarks
   * Session attributes
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

