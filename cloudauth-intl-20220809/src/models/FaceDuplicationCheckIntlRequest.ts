// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceDuplicationCheckIntlRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to automatically register the face to the specified face library if no duplicate face is found.
   * - 0- Auto-register (default)
   * - 1- Do not register
   * 
   * @example
   * 0
   */
  autoRegistration?: string;
  /**
   * @remarks
   * The face library code created through the console, supporting up to 10 face libraries simultaneously. When multiple face library codes are passed, they should be separated by commas.
   * 
   * @example
   * 1232344，23444
   */
  faceGroupCodes?: string;
  /**
   * @remarks
   * Face registration library.
   * 
   * @example
   * 0e0c34a77f
   */
  faceRegisterGroupCode?: string;
  /**
   * @remarks
   * Face matching threshold.
   * 
   * @example
   * 0.5
   */
  faceVerifyThreshold?: string;
  /**
   * @remarks
   * Whether to enable silent liveness detection
   * - 0- Disabled
   * - 1- Enabled
   * 
   * @example
   * 0
   */
  liveness?: string;
  /**
   * @remarks
   * A unique business identifier for troubleshooting purposes. It supports a combination of 32 alphanumeric characters, please ensure its uniqueness.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @remarks
   * Your custom user ID or other identifiers that can uniquely identify a specific user, such as a phone number or email address. It is strongly recommended to pre-desensitize the value of this field, for example, by hashing it.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890
   */
  merchantUserId?: string;
  /**
   * @remarks
   * Product code
   * 
   * This parameter is required.
   * 
   * @example
   * FACE_IDU_MIN
   */
  productCode?: string;
  /**
   * @remarks
   * When there are multiple faces above the matching threshold, you can use this parameter to customize the number of returned faces
   * - Default returns 1
   * - Maximum support 5
   * 
   * @example
   * 1
   */
  returnFaces?: string;
  /**
   * @remarks
   * Distinguishes between saving the face image and features
   * - 0- Face (default)
   * - 1- Features
   * 
   * @example
   * 0
   */
  saveFacePicture?: string;
  /**
   * @remarks
   * Your custom authentication scenario ID.
   * 
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @remarks
   * Base64 encoded portrait photo.
   * 
   * @example
   * base64
   */
  sourceFacePicture?: string;
  /**
   * @remarks
   * Portrait image URL, accessible via public HTTP or HTTPS link.
   * 
   * @example
   * https://***face1.jpeg
   */
  sourceFacePictureUrl?: string;
  /**
   * @remarks
   * Base64 encoded portrait photo.
   * 
   * @example
   * base64
   */
  targetFacePicture?: string;
  /**
   * @remarks
   * Portrait image URL, accessible via public HTTP or HTTPS link.
   * 
   * @example
   * https://***face2.jpeg
   */
  targetFacePictureUrl?: string;
  /**
   * @remarks
   * Verification type
   * - 0- 1:N (default)
   * - 1- 1:1
   * - 2- 1:N + 1:1
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  verifyModel?: string;
  static names(): { [key: string]: string } {
    return {
      autoRegistration: 'AutoRegistration',
      faceGroupCodes: 'FaceGroupCodes',
      faceRegisterGroupCode: 'FaceRegisterGroupCode',
      faceVerifyThreshold: 'FaceVerifyThreshold',
      liveness: 'Liveness',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      productCode: 'ProductCode',
      returnFaces: 'ReturnFaces',
      saveFacePicture: 'SaveFacePicture',
      sceneCode: 'SceneCode',
      sourceFacePicture: 'SourceFacePicture',
      sourceFacePictureUrl: 'SourceFacePictureUrl',
      targetFacePicture: 'TargetFacePicture',
      targetFacePictureUrl: 'TargetFacePictureUrl',
      verifyModel: 'VerifyModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRegistration: 'string',
      faceGroupCodes: 'string',
      faceRegisterGroupCode: 'string',
      faceVerifyThreshold: 'string',
      liveness: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      productCode: 'string',
      returnFaces: 'string',
      saveFacePicture: 'string',
      sceneCode: 'string',
      sourceFacePicture: 'string',
      sourceFacePictureUrl: 'string',
      targetFacePicture: 'string',
      targetFacePictureUrl: 'string',
      verifyModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

