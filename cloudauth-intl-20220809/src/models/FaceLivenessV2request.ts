// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceLivenessV2Request extends $dara.Model {
  faceAttributeCheck?: string;
  /**
   * @remarks
   * The Base64-encoded face image.
   * 
   * > **Note**
   * 
   * - If you use this method to pass in the image, check the image size and do not pass in an excessively large image.
   * - Specify one of the following parameters: FacePictureBase64, FacePictureUrl, or FacePictureFile.
   * 
   * @example
   * Base64
   */
  facePictureBase64?: string;
  /**
   * @remarks
   * The file stream of the face image.
   * 
   * @example
   * InputStream
   */
  facePictureFile?: string;
  /**
   * @remarks
   * The URL of the face image. The URL must be a publicly accessible HTTPS URL.
   * 
   * @example
   * https://***
   */
  facePictureUrl?: string;
  /**
   * @remarks
   * Specifies whether to check the quality of the face image. Valid values:
   * - Y: enabled.
   * - N: disabled. This is the default value.
   * 
   * @example
   * Y
   */
  faceQualityCheck?: string;
  /**
   * @remarks
   * The merchant-defined unique business ID for subsequent troubleshooting. The value can be a combination of letters and digits with a maximum length of 32 characters. Make sure the value is unique.
   * 
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID or another identifier that can identify a specific user, such as a phone number or email address. We strongly recommend that you desensitize the value of this field in advance, for example, by hashing the value.
   * 
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The product plan to use. Valid values: FACE_LIVENESS_MIN_PRO and FACE_LIVENESS_MIN.
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
      facePictureFile: 'FacePictureFile',
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
      facePictureFile: 'string',
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

