// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRenderingProjectShrinkRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  /**
   * @example
   * idata_content
   */
  projectName?: string;
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

