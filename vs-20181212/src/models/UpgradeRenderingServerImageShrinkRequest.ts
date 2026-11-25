// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeRenderingServerImageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * m-9timxhrrgopkec8ju
   */
  imageId?: string;
  /**
   * @example
   * true
   */
  precheck?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [\"render-30d593fb042946c58568316956624c6b\"]
   */
  renderingInstanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      precheck: 'Precheck',
      renderingInstanceIdsShrink: 'RenderingInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      precheck: 'boolean',
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

