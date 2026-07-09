// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SignUserImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The algorithm used for signing, such as ps256 or es256.
   * 
   * @example
   * ps256
   */
  algorithm?: string;
  /**
   * @remarks
   * The subject information of the signing certificate.
   * 
   * @example
   * CN=AIDeepSign User Certificate,O=Alibaba Cloud
   */
  certificateSubject?: string;
  /**
   * @remarks
   * The business error code. The value "OK" is returned if the request succeeds.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code. The value 200 is returned if the request succeeds.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The additional information. The value "success" is returned if the request succeeds.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ObjectKey of the signed image in OSS. You can use this value for subsequent API calls.
   * 
   * @example
   * deepsign/123456789/signed/abc12345-def6-7890-abcd-ef1234567890.png
   */
  objectKey?: string;
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
   * The signing time in ISO 8601 format, such as `2026-01-15T08:30:00Z`.
   * 
   * @example
   * 2026-06-18T10:30:00Z
   */
  signTime?: string;
  /**
   * @remarks
   * The pre-signed download URL of the signed image.
   * 
   * @example
   * https://bucket.oss-cn-hangzhou.aliyuncs.com/deepsign/123456789/signed/abc12345.png?Expires=1718700000&OSSAccessKeyId=...
   */
  signedImageUrl?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificateSubject: 'CertificateSubject',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      objectKey: 'ObjectKey',
      requestId: 'RequestId',
      signTime: 'SignTime',
      signedImageUrl: 'SignedImageUrl',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certificateSubject: 'string',
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      objectKey: 'string',
      requestId: 'string',
      signTime: 'string',
      signedImageUrl: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

