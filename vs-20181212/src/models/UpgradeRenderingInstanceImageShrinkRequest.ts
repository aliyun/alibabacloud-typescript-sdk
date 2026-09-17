// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeRenderingInstanceImageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * m-bp15om9lg9zb20magg86
   */
  imageId?: string;
  /**
   * @remarks
   * The list of cloud application service instance IDs. A maximum of 100 IDs can be specified.
   * 
   * This parameter is required.
   */
  renderingInstanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      renderingInstanceIdsShrink: 'RenderingInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
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

