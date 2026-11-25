// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCaptureRenderingInstanceScreenshotShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The quality of the image. Valid values: 1 to 100.
   * 
   * @example
   * 60
   */
  quality?: number;
  /**
   * @remarks
   * The list of instance IDs. You can specify up to 100 IDs.
   * 
   * This parameter is required.
   */
  renderingInstanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      quality: 'Quality',
      renderingInstanceIdsShrink: 'RenderingInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quality: 'number',
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

