// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateRenderingProjectInstancesRequest extends $dara.Model {
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
  renderingInstanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      renderingInstanceIds: 'RenderingInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      renderingInstanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.renderingInstanceIds)) {
      $dara.Model.validateArray(this.renderingInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

