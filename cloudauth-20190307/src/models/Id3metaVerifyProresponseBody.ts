// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id3MetaVerifyPROResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The verification result from the authoritative source. Valid values:
   * 
   * - **1**: Consistent (billed).
   * - **2**: Inconsistent (billed).
   * - **3**: No record found (not billed).
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * - **verifyScore**: The face comparison score. Valid values: 0 to 1000. A higher score indicates a higher probability that the faces belong to the same person. A score of 700.0 or higher confirms that the faces belong to the same person.
   * 
   * - **faceAttack**: Returned when liveness detection is enabled. This value does not affect the verification result.
   * 
   * - **invokeChannel**: The identifier of the actual invocation channel. Valid values:
   * 1: Authoritative source. 0: Comprehensive source.
   * 
   * @example
   * {
   *  "verifyScore": 810.28,
   * "faceAttack":"N",
   * "invokeChannel": 1
   * }
   */
  faceDetail?: string;
  /**
   * @remarks
   * Indicates whether the whitelist is hit. Valid value: **Y**.
   * 
   * @example
   * Y
   */
  hitWhitelist?: string;
  /**
   * @remarks
   * The verification details from the authoritative source. Valid values:
   * 
   * - **101**: Authentication passed.
   * 
   * - **201**: Authentication failed. The name does not match the ID card number.
   * 
   * - **202**: Authentication failed. The person is suspected to be the ID owner.
   * 
   * - **203**: Authentication failed. No photo is found in the database.
   * 
   * - **204**: Authentication failed. The faces do not belong to the same person.
   * 
   * - **205**: Authentication failed. Image modeling for the image to be compared failed.
   * 
   * - **206**: Authentication failed. The image format is incorrect.
   * 
   * - **207**: Authentication failed. The uploaded image is too small. Upload another image.
   * 
   * - **208**: Authentication failed. The quality of the uploaded face photo is poor. Upload another photo.
   * 
   * - **301**: No record found. The ID card number does not exist in the database.
   * 
   * - **302**: No record found. Verification cannot be performed.
   * 
   * @example
   * 101
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      faceDetail: 'FaceDetail',
      hitWhitelist: 'HitWhitelist',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      faceDetail: 'string',
      hitWhitelist: 'string',
      subCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id3MetaVerifyPROResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of **200** indicates that the API call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message returned for the API call.
   * >Notice: This parameter only indicates whether an exception occurs during the API call.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FA2C773-47DB-4156-B1EE-5B047321A939
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  resultObject?: Id3MetaVerifyPROResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: Id3MetaVerifyPROResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

