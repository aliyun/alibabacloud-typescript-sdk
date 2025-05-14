// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DistributeImageRequest extends $dara.Model {
  /**
   * @remarks
   * The regions to which you want to distribute an image.
   * 
   * This parameter is required.
   */
  distributeRegionList?: string[];
  /**
   * @remarks
   * The ID of the image that you want to distribute.
   * 
   * This parameter is required.
   * 
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      distributeRegionList: 'DistributeRegionList',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeRegionList: { 'type': 'array', 'itemType': 'string' },
      imageId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.distributeRegionList)) {
      $dara.Model.validateArray(this.distributeRegionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

