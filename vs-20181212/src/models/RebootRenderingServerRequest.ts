// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootRenderingServerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  renderingInstanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      renderingInstanceIds: 'RenderingInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

