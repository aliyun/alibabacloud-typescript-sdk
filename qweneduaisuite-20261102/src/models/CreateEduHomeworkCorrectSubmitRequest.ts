// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEduHomeworkCorrectSubmitRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to correct the image distortion. Default value: `true`. If you set this parameter to `false`, the image is not corrected, `dewarp_url` returns the original image, and the coordinates are based on `dewarp_url`.
   */
  dewarp?: boolean;
  /**
   * @remarks
   * The pure Base64-encoded string of the image, excluding the `data:` prefix and MIME declaration. The encoded size cannot exceed 15 MB. If both parameters are specified, `image_base64` takes precedence.
   * 
   * @example
   * The pure Base64-encoded string of the image, excluding the data: prefix and MIME declaration. The encoded size cannot exceed 15 MB. If both parameters are specified, image_base64 takes precedence
   */
  imageBase64?: string;
  /**
   * @remarks
   * The publicly accessible HTTP or HTTPS URL of the image. The server downloads the image from this URL.
   * 
   * @example
   * https://example.com/homework.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The request ID on the caller side. Use a UUID for reconciliation and troubleshooting. If this parameter is not specified, the server generates a request ID and returns it in the response.
   * 
   * @example
   * req-20261116-0001
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dewarp: 'dewarp',
      imageBase64: 'imageBase64',
      imageUrl: 'imageUrl',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dewarp: 'boolean',
      imageBase64: 'string',
      imageUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

