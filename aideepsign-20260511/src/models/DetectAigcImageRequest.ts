// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectAigcImageRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the image to detect. Only HTTP and HTTPS protocols are supported. You must provide at least one of ImageUrl and ObjectKey.
   * 
   * @example
   * https://example.com/photo.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The ObjectKey of the image to detect in OSS. When you use ObjectKey, make sure that the key belongs to the namespace of the current caller. You must provide at least one of ImageUrl and ObjectKey.
   * 
   * @example
   * deepsign/123456789/image-generation/abc12345-def6-7890-abcd-ef1234567890.png
   */
  objectKey?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      objectKey: 'ObjectKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      objectKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

