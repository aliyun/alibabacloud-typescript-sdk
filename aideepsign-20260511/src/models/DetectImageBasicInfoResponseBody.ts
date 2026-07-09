// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectImageBasicInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. "OK" is returned if the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The image resolution (width × height), such as 1920 × 1080. This value is empty if the resolution cannot be identified.
   * 
   * @example
   * 2048 * 2048
   */
  dpi?: string;
  /**
   * @remarks
   * The HTTP status code. 200 is returned if the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The additional information. "success" is returned if the request was successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * photo.jpg
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-7890-ABCD-EF1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * The file size in a human-readable format, such as 1.5 MB or 256 KB.
   * 
   * @example
   * 2.3 MB
   */
  size?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The image format, such as JPEG, PNG, GIF, or WEBP. UNKNOWN is returned if the format cannot be identified.
   * 
   * @example
   * PNG
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dpi: 'Dpi',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      name: 'Name',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dpi: 'string',
      httpStatusCode: 'number',
      message: 'string',
      name: 'string',
      requestId: 'string',
      size: 'string',
      success: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

