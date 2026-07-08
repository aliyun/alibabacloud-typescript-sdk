// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCaptureRenderingInstanceScreenshotRequest extends $dara.Model {
  /**
   * @remarks
   * The image quality. Valid values: 1 to 100.
   * 
   * @example
   * 60
   */
  quality?: number;
  /**
   * @remarks
   * The list of instance IDs. A maximum of 100 instance IDs can be specified.
   * 
   * This parameter is required.
   */
  renderingInstanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      quality: 'Quality',
      renderingInstanceIds: 'RenderingInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quality: 'number',
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

