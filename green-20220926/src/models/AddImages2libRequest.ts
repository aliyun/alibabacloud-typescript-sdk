// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImages2LibRequest extends $dara.Model {
  /**
   * @remarks
   * URL of the image to be uploaded.
   * 
   * @example
   * upload/ea7a98f9-f8bd-4905-a79b-963c9da419c5.jpg
   */
  imgUrl?: string;
  /**
   * @remarks
   * The ID of image library.
   * 
   * @example
   * xxx
   */
  libId?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imgUrl: 'ImgUrl',
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imgUrl: 'string',
      libId: 'string',
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

