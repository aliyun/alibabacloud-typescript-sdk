// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateRenderingProjectInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  renderingInstanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      renderingInstanceIdsShrink: 'RenderingInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      renderingInstanceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

