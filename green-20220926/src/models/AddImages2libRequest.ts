// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImages2LibRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the image. This value must be the Key field returned by GetUploadInfo, in the format of image/upload/<hash>. Passing an external image URL returns a 400 image.url.invalid error.
   * 
   * @example
   * image/upload/755c31906fc0b0b5007ecead9660c2ab
   */
  imgUrl?: string;
  /**
   * @remarks
   * The ID of the image library.
   * 
   * @example
   * custom_imglib_001
   */
  libId?: string;
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

