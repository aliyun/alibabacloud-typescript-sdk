// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SignUserImageRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The client generates this value. Make sure the value is unique across different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * The URL of the image to be signed. HTTP and HTTPS URLs are supported. Specify at least one of `ImageUrl` and `ObjectKey`.
   * 
   * @example
   * https://example.com/photo.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The ObjectKey of the image to be signed in OSS. When you use `ObjectKey`, make sure the key belongs to the namespace of the current caller. Specify at least one of `ImageUrl` and `ObjectKey`.
   * 
   * @example
   * deepsign/123456789/image-generation/abc12345-def6-7890-abcd-ef1234567890.png
   */
  objectKey?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      imageUrl: 'ImageUrl',
      objectKey: 'ObjectKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

