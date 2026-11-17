// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceDuplicationCheckIntlRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically register the face to the specified face library if no duplicate face is found during the search. Valid values:
   * - 0: Register.
   * - 1: Do not register. This is the default value.
   * 
   * @example
   * 1
   */
  autoRegistration?: string;
  /**
   * @remarks
   * Specifies whether to return additional face attribute information. Valid values:
   * - N: Do not return. This is the default value.
   * - Y: Return. The result is located in Result.ExtFaceInfo.FaceAttributeInfo.
   * 
   * @example
   * N
   */
  faceAttributeCheck?: string;
  /**
   * @remarks
   * The codes of the face libraries created by the customer in the console. A maximum of 10 face libraries can be queried at the same time. Separate multiple face library codes with commas.
   * 
   * @example
   * 1232344，23444
   */
  faceGroupCodes?: string;
  /**
   * @remarks
   * The face quality check.
   * 
   * @example
   * Y
   */
  faceQualityCheck?: string;
  /**
   * @remarks
   * The code of the face library for face registration.
   * 
   * @example
   * 0e0c34a77f
   */
  faceRegisterGroupCode?: string;
  /**
   * @remarks
   * The face matching threshold. <warning>Reserved field. Not enabled yet.</warning>
   * 
   * @example
   * 0.5
   */
  faceVerifyThreshold?: string;
  /**
   * @remarks
   * Specifies whether to enable passive liveness detection. Valid values:
   * - 0: Disable.
   * - 1: Enable.
   * 
   * @example
   * 0
   */
  liveness?: string;
  /**
   * @remarks
   * The custom unique business identifier used for subsequent troubleshooting. The value supports a combination of up to 32 letters and digits. Make sure that the value is unique.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID or other identifier that can identify a specific user, such as a mobile phone number or email address. Desensitize the value of this field in advance, such as by hashing the value.
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
   * Specifies the number of faces to return when multiple faces exceed the matching threshold. Default value: 1. Maximum value: 5.
   * 
   * @example
   * 1
   */
  returnFaces?: string;
  /**
   * @remarks
   * Specifies the type of face data to save. Valid values:
   * - 0: Face image. This is the default value.
   * - 1: Face feature.
   * <warning>Reserved field. Not enabled yet.</warning>
   * 
   * @example
   * 0
   */
  saveFacePicture?: string;
  /**
   * @remarks
   * The custom authentication scene ID.
   * 
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @remarks
   * The Base64-encoded portrait photo.
   * 
   * @example
   * base64
   */
  sourceFacePicture?: string;
  /**
   * @remarks
   * The URL of the portrait image. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * https://***face1.jpeg
   */
  sourceFacePictureUrl?: string;
  /**
   * @remarks
   * The Base64-encoded portrait photo.
   * 
   * @example
   * base64
   */
  targetFacePicture?: string;
  /**
   * @remarks
   * The URL of the portrait image. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * https://***face2.jpeg
   */
  targetFacePictureUrl?: string;
  /**
   * @remarks
   * Specifies whether to overwrite the original face with the current face if the MerchantUserId already exists during automatic registration. Valid values:
   * - Y: Overwrite.
   * - N: Do not overwrite and return that the UserId already exists.
   * 
   * @example
   * N
   */
  updateFaceIfUserExists?: string;
  /**
   * @remarks
   * The authentication type. Valid values:
   * - 0: Retrieve pattern
   *   - Feature: The system receives a face library and a user face image (sourceFacePicture), and automatically retrieves from the face library to check whether the specified face image (sourceFacePicture) already exists. Passive liveness detection can be enabled for the face image (sourceFacePicture).
   *   - Recommended scenario: Scenarios where a real person needs to create an account and duplicate registration is not allowed.
   * - 1 (default): Authenticate pattern
   *   - Feature: The system receives a specified face image (sourceFacePicture) and a retained face image (TargetFacePicture), and automatically authenticates whether the faces match. Passive liveness detection can be enabled for the specified face image (sourceFacePicture).
   *   - Recommended scenario: Scenarios where it is required to authenticate whether the operation is performed by the user when modifying logon or account information.
   * - 2: Comprehensive pattern
   *   - Feature: The system receives a face library, a specified face image (sourceFacePicture), and a retained face image (TargetFacePicture) at the same time, and automatically retrieves from the face library to check whether the specified face image (sourceFacePicture) exists and authenticates whether it matches the retained face. Passive liveness detection can be enabled for the specified face image (sourceFacePicture).
   *   - Recommended scenario: Scenarios where it is required to authenticate that the user is a new user and the operation is performed by the user.
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
      faceAttributeCheck: 'FaceAttributeCheck',
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
      updateFaceIfUserExists: 'UpdateFaceIfUserExists',
      verifyModel: 'VerifyModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRegistration: 'string',
      faceAttributeCheck: 'string',
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
      updateFaceIfUserExists: 'string',
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

