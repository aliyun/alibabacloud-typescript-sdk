// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSensitiveScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * The URL of the image to scan. Only HTTP and HTTPS protocols are supported. The image size cannot exceed 10 MB. You must specify at least one of ImageUrl and ObjectKey.
   * 
   * @example
   * https://example.com/document.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The ObjectKey of the image to scan in OSS. When you use ObjectKey, make sure that the key belongs to the namespace of the current caller. You must specify at least one of ImageUrl and ObjectKey.
   * 
   * @example
   * deepsign/123456789/scan/abc12345.jpg
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

