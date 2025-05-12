// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelCopyImageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the new image in the destination region.
   * 
   * This parameter is required.
   * 
   * @example
   * m-gx2x1dhsmusr2****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the region to which the image is copied.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

