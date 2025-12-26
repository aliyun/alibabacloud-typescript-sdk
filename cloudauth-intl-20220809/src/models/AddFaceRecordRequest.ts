// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFaceRecordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sgl****7uc
   */
  faceGroupCode?: string;
  /**
   * @example
   * base64
   */
  facePicture?: string;
  /**
   * @example
   * InputStream
   */
  facePictureFile?: string;
  /**
   * @example
   * https://www.xxxxx.com/test.jpg
   */
  facePictureUrl?: string;
  /**
   * @example
   * N
   */
  faceQualityCheck?: string;
  /**
   * @example
   * 130A2C10B9EE4D8488E35384FF03hst
   */
  merchantUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FACE_ENROLL
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      faceGroupCode: 'FaceGroupCode',
      facePicture: 'FacePicture',
      facePictureFile: 'FacePictureFile',
      facePictureUrl: 'FacePictureUrl',
      faceQualityCheck: 'FaceQualityCheck',
      merchantUserId: 'MerchantUserId',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceGroupCode: 'string',
      facePicture: 'string',
      facePictureFile: 'string',
      facePictureUrl: 'string',
      faceQualityCheck: 'string',
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

