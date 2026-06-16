// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceDuplicationCheckIntlRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically register the face in the specified face database when no duplicate face is found during the search. Valid values:
   * - 0: automatic registration
   * - 1: no registration (default).
   * 
   * @example
   * 1
   */
  autoRegistration?: string;
  /**
   * @remarks
   * The face database codes created in the console. A maximum of 10 face databases can be queried at a time. Separate multiple face database codes with commas (,).
   * 
   * @example
   * 1232344，23444
   */
  faceGroupCodes?: string;
  /**
   * @remarks
   * Specifies whether to enable face quality check.
   * 
   * @example
   * Y
   */
  faceQualityCheck?: string;
  /**
   * @remarks
   * The face database for registration.
   * 
   * @example
   * 0e0c34a77f
   */
  faceRegisterGroupCode?: string;
  /**
   * @remarks
   * The face matching threshold. >Warning: This is a reserved field and is not currently enabled.</warning>.
   * 
   * @example
   * 0.5
   */
  faceVerifyThreshold?: string;
  /**
   * @remarks
   * Specifies whether to enable passive liveness detection. Valid values:
   * - 0: disabled
   * - 1: enabled.
   * 
   * @example
   * 0
   */
  liveness?: string;
  /**
   * @remarks
   * The custom unique business identifier, which is used for subsequent troubleshooting. The value is a combination of letters and digits up to 32 characters in length. Ensure that the value is unique.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID or another identifier that can identify a specific user, such as a phone number or email address. We strongly recommend that you desensitize the value of this field in advance, for example, by hashing the value.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The product code.
   * 
   * This parameter is required.
   * 
   * @example
   * FACE_IDU_MIN
   */
  productCode?: string;
  /**
   * @remarks
   * The number of faces to return when multiple faces above the matching threshold are found.
   * - Default value: 1.
   * - Maximum value: 5.
   * 
   * @example
   * 1
   */
  returnFaces?: string;
  /**
   * @remarks
   * Specifies the type of face data to save. Valid values:
   * - 0: face image (default)
   * - 1: feature
   * >Warning: This is a reserved field and is not currently enabled.</warning>.
   * 
   * @example
   * 0
   */
  saveFacePicture?: string;
  /**
   * @remarks
   * The custom verification scenario ID.
   * 
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @remarks
   * The Base64-encoded facial image.
   * 
   * @example
   * base64
   */
  sourceFacePicture?: string;
  /**
   * @remarks
   * The URL of the facial image. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * https://***face1.jpeg
   */
  sourceFacePictureUrl?: string;
  /**
   * @remarks
   * The Base64-encoded facial image.
   * 
   * @example
   * base64
   */
  targetFacePicture?: string;
  /**
   * @remarks
   * The URL of the facial image. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * https://***face2.jpeg
   */
  targetFacePictureUrl?: string;
  /**
   * @remarks
   * The verification type. Valid values:
   * - 0: retrieve pattern
   * > - Feature: Submits a face database and a user facial image (sourceFacePicture). The system automatically retrieves the face database to check whether the specified facial image (sourceFacePicture) already exists. Passive liveness detection can be enabled for the facial image (sourceFacePicture).
   * > - Recommended scenario: Real-person create an account where duplicate registration is not allowed.
   * 
   * - 1 (default): authenticate pattern
   * > - Feature: Submits a specified facial image (sourceFacePicture) and a stored facial image (TargetFacePicture). The system automatically authenticates whether the two faces match. Passive liveness detection can be enabled for the specified facial image (sourceFacePicture).
   * > - Recommended scenario: Authenticating whether the operation is performed by the account owner when logon credentials or account information is modified.
   * 
   * - 2: comprehensive pattern
   * > - Feature: Submits a face database, a specified facial image (sourceFacePicture), and a stored facial image (TargetFacePicture). The system automatically retrieves the face database to check whether the specified facial image (sourceFacePicture) exists and whether it matches the stored face. Passive liveness detection can be enabled for the specified facial image (sourceFacePicture).
   * > - Recommended scenario: Authenticating that the user is new and the operation is performed by the user.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  verifyModel?: string;
  static names(): { [key: string]: string } {
    return {
      autoRegistration: 'AutoRegistration',
      faceGroupCodes: 'FaceGroupCodes',
      faceQualityCheck: 'FaceQualityCheck',
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
      faceQualityCheck: 'string',
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

