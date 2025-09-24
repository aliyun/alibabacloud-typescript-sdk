// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceDuplicationCheckIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Returns the face library face ID and UserID when a duplicate face is detected.
   * 
   * @example
   * [
   * {\\"faceGroupCode\\":\\"sg7****uzt\\",\\"faceId\\":\\"f5a921*******9e792ec84c8f0ca592a\\"}
   * ]
   */
  duplicateFace?: string;
  /**
   * @remarks
   * The estimated age of the face, which may not be returned if the prediction fails.
   * 
   * @example
   * 30
   */
  faceAge?: string;
  /**
   * @remarks
   * Indicates whether the captured face involves a liveness attack, Y for an attack, N for no attack.
   * Returned when silent liveness detection is enabled.
   * 
   * @example
   * N
   */
  faceAttack?: string;
  /**
   * @remarks
   * The probability of a liveness attack detected by silent liveness detection. The value range is 0 to 100.
   * Returned when silent liveness detection is enabled.
   * 
   * @example
   * 99
   */
  faceAttackScore?: string;
  /**
   * @remarks
   * When the verification mode is 1 or 2, returns the 1:1 verification comparison score
   * Comparison score range 0～100.
   * 
   * @example
   * 98
   */
  faceComparisonScore?: string;
  /**
   * @remarks
   * The predicted gender of the face in the image, which may not be returned if the prediction fails.
   * - M: Male
   * - F: Female
   * 
   * @example
   * M
   */
  faceGender?: string;
  /**
   * @remarks
   * Final authentication result, values:
   * - Y: Passed
   * - N: Not passed
   * 
   * @example
   * Y
   */
  facePassed?: string;
  /**
   * @remarks
   * Returns the corresponding FACEID only when the customer sets auto-registration and the face registration is successful.
   * 
   * @example
   * 9e792ec84c8f0ca592a
   */
  faceRegistrationId?: string;
  /**
   * @remarks
   * Face registration result 
   * - 0- Failed 
   * - 1- Succeeded
   * 
   * @example
   * 0
   */
  faceRegistrationResult?: number;
  /**
   * @remarks
   * Description of the authentication result. For more information, see ResultObject.SubCode error code description.
   * 
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @remarks
   * Unique identifier of the authentication request.
   * 
   * @example
   * 4ab0b***cbde97
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      duplicateFace: 'DuplicateFace',
      faceAge: 'FaceAge',
      faceAttack: 'FaceAttack',
      faceAttackScore: 'FaceAttackScore',
      faceComparisonScore: 'FaceComparisonScore',
      faceGender: 'FaceGender',
      facePassed: 'FacePassed',
      faceRegistrationId: 'FaceRegistrationId',
      faceRegistrationResult: 'FaceRegistrationResult',
      subCode: 'SubCode',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duplicateFace: 'string',
      faceAge: 'string',
      faceAttack: 'string',
      faceAttackScore: 'string',
      faceComparisonScore: 'string',
      faceGender: 'string',
      facePassed: 'string',
      faceRegistrationId: 'string',
      faceRegistrationResult: 'number',
      subCode: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceDuplicationCheckIntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 5E63B760-0ECB-5C07-8503-A65C27876968
   */
  requestId?: string;
  /**
   * @remarks
   * Return result.
   */
  result?: FaceDuplicationCheckIntlResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: FaceDuplicationCheckIntlResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

