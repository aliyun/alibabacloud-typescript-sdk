// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id3MetaVerifyPROResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The authoritative source verification result. Valid values:
   * 
   * - **1**: Verification is consistent (billable).
   * - **2**: Verification is inconsistent (billable).
   * - **3**: No record found (not billable).
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * - **verifyScore**: The face comparison score. Value range: 0 to 1000. A higher score indicates a higher probability of the same face. A score >= 700.0 confirms the same person.
   * 
   * - **faceAttack**: Returned when liveness detection is enabled (does not participate in the verification result decision).
   * 
   * - **invokeChannel**: The identifier of the actual invocation channel. 1: authoritative source. 0: comprehensive source.
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
   * Indicates whether the whitelist is hit: **Y**.
   * 
   * @example
   * Y
   */
  hitWhitelist?: string;
  /**
   * @remarks
   * The authoritative source verification details. Valid values:
   * 
   * - **101**: Authentication passed.
   * 
   * - **201**: Authentication failed. The name does not match the ID card number.
   * 
   * - **202**: Authentication failed. Suspected to be the person.
   * 
   * - **203**: Authentication failed. No photo in the database.
   * 
   * - **204**: Authentication failed. Not the same person.
   * 
   * - **205**: Authentication failed. Modeling of the image to be compared failed.
   * 
   * - **206**: Authentication failed. The image format is incorrect.
   * 
   * - **207**: Authentication failed. The uploaded image is too small. Upload the image again.
   * 
   * - **208**: Authentication failed. The quality of the uploaded portrait photo is poor. Upload the photo again.
   * 
   * - **301**: No record found. The ID number does not exist in the database.
   * 
   * - **302**: No record found. Verification is not possible.
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
   * The response code. **200** indicates that the API call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message of the API call.
   * >Notice: This parameter only indicates whether the API call is abnormal.
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

