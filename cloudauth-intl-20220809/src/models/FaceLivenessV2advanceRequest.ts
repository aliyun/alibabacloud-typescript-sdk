// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class FaceLivenessV2AdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to detect face attributes.
   * 
   * @example
   * Y
   */
  faceAttributeCheck?: string;
  /**
   * @remarks
   * The Base64-encoded face image.
   * 
   * Note
   * 
   * - If you choose this method to pass the face image, check the image size and do not pass oversized images.
   * - Specify only one of the following parameters: FacePictureBase64, FacePictureUrl, and FacePictureFile.
   * 
   * @example
   * Base64
   */
  facePictureBase64?: string;
  /**
   * @remarks
   * The file stream of the face photo.
   * 
   * @example
   * InputStream
   */
  facePictureFileObject?: Readable;
  /**
   * @remarks
   * The URL of the face photo. The URL must be a publicly accessible HTTPS link.
   * 
   * @example
   * https://***
   */
  facePictureUrl?: string;
  /**
   * @remarks
   * Specifies whether to check the quality of the face image. Valid values:
   * - Y: enabled
   * - N: disabled (default)
   * 
   * @example
   * Y
   */
  faceQualityCheck?: string;
  /**
   * @remarks
   * The custom unique business identifier on the merchant side, which is used for subsequent troubleshooting. The value can contain letters and digits and must be up to 32 characters in length. Make sure that the value is unique.
   * 
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID or another identifier that can identify a specific user, such as a mobile phone number or an email address. Desensitize the value of this field in advance, such as by hashing the value.
   * 
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The product solution to be integrated. Valid values: FACE_LIVENESS_MIN_PRO and FACE_LIVENESS_MIN.
   * 
   * This parameter is required.
   * 
   * @example
   * FACE_LIVENESS_MIN_PRO
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      faceAttributeCheck: 'FaceAttributeCheck',
      facePictureBase64: 'FacePictureBase64',
      facePictureFileObject: 'FacePictureFile',
      facePictureUrl: 'FacePictureUrl',
      faceQualityCheck: 'FaceQualityCheck',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAttributeCheck: 'string',
      facePictureBase64: 'string',
      facePictureFileObject: 'Readable',
      facePictureUrl: 'string',
      faceQualityCheck: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

