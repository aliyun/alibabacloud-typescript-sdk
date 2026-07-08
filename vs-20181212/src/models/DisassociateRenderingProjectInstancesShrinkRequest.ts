// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisassociateRenderingProjectInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the project.
   * 
   * This parameter is required.
   * 
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  /**
   * @remarks
   * A list of cloud application service instance IDs.
   * 
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

