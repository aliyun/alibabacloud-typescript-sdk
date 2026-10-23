// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageMattingAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the background format of the returned image. Valid values:
   * - WHITE_BACKGROUND: Returns an image with a white background.
   * - TRANSPARENT: Returns an image with a transparent background.
   * 
   * This parameter is required.
   * 
   * @example
   * WHITE_BACKGROUND
   */
  backGroundType?: string;
  /**
   * @remarks
   * The BGR color value of the background. Default value: white.
   * 
   * @example
   * 255,255,255
   */
  bgColor?: string;
  /**
   * @remarks
   * The business order ID of the caller. It is recorded upon acceptance and returned as is when you query the result of the asynchronous task.
   * 
   * @example
   * order-20260928-001
   */
  bizId?: string;
  /**
   * @remarks
   * The URL of the original image. The image must be in JPG, JPEG, PNG, BMP, or WEBP format. The resolution must be between 100 × 100 and 3000 × 3000 pixels, and the file size must not exceed 10 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * https://ae01.alicdn.com/kf/S342f0070dc9f4be09a6cbed34e90dc8fs.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The expected height of the cropped image. If you do not specify this parameter, the original height of the image is used. Unit: pixels. Valid values: 100 to 5000.
   * 
   * @example
   * 800
   */
  targetHeight?: number;
  /**
   * @remarks
   * The expected width of the cropped image. If you do not specify this parameter, the original width of the image is used. Unit: pixels. Valid values: 100 to 5000.
   * 
   * @example
   * 800
   */
  targetWidth?: number;
  static names(): { [key: string]: string } {
    return {
      backGroundType: 'BackGroundType',
      bgColor: 'BgColor',
      bizId: 'BizId',
      imageUrl: 'ImageUrl',
      targetHeight: 'TargetHeight',
      targetWidth: 'TargetWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backGroundType: 'string',
      bgColor: 'string',
      bizId: 'string',
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

