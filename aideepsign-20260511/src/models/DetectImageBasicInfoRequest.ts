// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectImageBasicInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the image. Only HTTP and HTTPS protocols are supported. Specify either ImageUrl or ObjectKey. At least one of them is required.
   * 
   * @example
   * https://example.com/photo.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The ObjectKey of the image in OSS. When using ObjectKey, ensure that the key belongs to the namespace of the current caller. Specify either ImageUrl or ObjectKey. At least one of them is required.
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

