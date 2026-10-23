// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageRemovalProAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The business order ID of the caller. This ID is recorded when the request is accepted and returned as-is when you query the asynchronous task result.
   * 
   * @example
   * order-20260928-001
   */
  bizId?: string;
  /**
   * @remarks
   * The URL of the original image. The image must be in the JPG, JPEG, PNG, BMP, or WEBP format.
   * · Resolution: 256×256 to 3000×3000. File size: ≤ 10 MB.
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

