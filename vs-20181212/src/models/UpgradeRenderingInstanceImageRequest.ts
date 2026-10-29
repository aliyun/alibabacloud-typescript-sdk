// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeRenderingInstanceImageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-bp15om9lg9zb20magg86
   */
  imageId?: string;
  /**
   * @remarks
   * The IDs of the cloud application service instances. A maximum of 100 instance IDs can be specified.
   * 
   * This parameter is required.
   */
  renderingInstanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      renderingInstanceIds: 'RenderingInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
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

