// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageMattingRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the image to process.
   * 
   * This parameter is required.
   * 
   * @example
   * WHITE_BACKGROUND
   */
  backGroundType?: string;
  /**
   * @remarks
   * The target image height in pixels.
   * 
   * @example
   * 255,255,255
   */
  bgColor?: string;
  /**
   * @remarks
   * The URL of the original image. The image must be in JPG, JPEG, PNG, BMP, or WEBP format. The resolution must be between 256 × 256 and 3000 × 3000 pixels. The file size cannot exceed 10 MB.<br>**Example**: `"https://ae01.alicdn.com/kf/S342f0070dc9f4be09a6cbed34e90dc8fs.jpg"`.
   * 
   * This parameter is required.
   * 
   * @example
   * https://sc02.alicdn.com/kf/H09364d2c7fc942e685d3b0f656261b24Q.png
   */
  imageUrl?: string;
  /**
   * @remarks
   * The target image width in pixels.
   * 
   * @example
   * 800
   */
  targetHeight?: number;
  /**
   * @remarks
   * The background type of the returned image. Valid values:
   * - WHITE_BACKGROUND: white background.
   * - TRANSPARENT: transparent background.
   * 
   * @example
   * 800
   */
  targetWidth?: number;
  static names(): { [key: string]: string } {
    return {
      backGroundType: 'BackGroundType',
      bgColor: 'BgColor',
      imageUrl: 'ImageUrl',
      targetHeight: 'TargetHeight',
      targetWidth: 'TargetWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backGroundType: 'string',
      bgColor: 'string',
      imageUrl: 'string',
      targetHeight: 'number',
      targetWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

