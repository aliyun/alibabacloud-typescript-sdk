// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class AddFaceRecordAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The face library code.
   * 
   * This parameter is required.
   * 
   * @example
   * sgl****7uc
   */
  faceGroupCode?: string;
  /**
   * @remarks
   * The Base64-encoded face image to register.
   * 
   * @example
   * base64
   */
  facePicture?: string;
  /**
   * @remarks
   * The file stream of the face image to register.
   * 
   * @example
   * InputStream
   */
  facePictureFileObject?: Readable;
  /**
   * @remarks
   * The URL of the face image to register.
   * 
   * @example
   * https://www.xxxxx.com/test.jpg
   */
  facePictureUrl?: string;
  /**
   * @remarks
   * Specifies whether to check the quality of the face image. Valid values:
   * - Y: enabled.
   * - N: disabled (default).
   * 
   * @example
   * N
   */
  faceQualityCheck?: string;
  /**
   * @remarks
   * The custom unique user ID. The value cannot exceed 32 characters.
   * - If this parameter is specified, the system registers the user with the specified MerchantUserId.
   * - If this parameter is not specified, the image name is used by default.
   * 
   * @example
   * 130A2C10B9EE4D8488E35384FF03hst
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The product code.
   * 
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
      facePictureFileObject: 'FacePictureFile',
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
      facePictureFileObject: 'Readable',
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

