// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageRemovalProAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID of the caller. It is recorded when the request is accepted and returned as is when you query the result of the asynchronous task.
   * 
   * @example
   * order-20260928-001
   */
  bizId?: string;
  /**
   * @remarks
   * The URL of the original image. The image must be in JPG, JPEG, PNG, BMP, or WEBP format. The resolution must be between 256×256 and 3000×3000 pixels, and the file size must be less than or equal to 10 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * https://ae01.alicdn.com/kf/S342f0070dc9f4be09a6cbed34e90dc8fs.jpg
   */
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      imageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

