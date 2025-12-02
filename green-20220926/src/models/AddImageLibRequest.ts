// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageLibRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks of the image library.
   * 
   * @example
   * Explicit_Content_Blacklist_Image_lib
   */
  comment?: string;
  /**
   * @remarks
   * The name of image library
   * 
   * @example
   * test_image_lib
   */
  libName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      libName: 'LibName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      libName: 'string',
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

