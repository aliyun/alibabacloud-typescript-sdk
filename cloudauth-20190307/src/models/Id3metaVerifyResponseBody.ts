// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id3MetaVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The identity verification result. Valid values:
   * 
   * - 1: Consistent.
   * - 2: Inconsistent.
   * - 3: No record found.
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * The face comparison score.
   * 
   * @example
   * {
   *  "verifyScore": 50.28594166529785
   * }
   */
  faceDetail?: string;
  /**
   * @example
   * 101
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      faceDetail: 'FaceDetail',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      faceDetail: 'string',
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

export class Id3MetaVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates success. Other values indicate failure.
   * 
   * **Important**
   * 
   * - This parameter indicates only whether the API call is successful. For more information about return codes, see error codes.
   * - Check the fields in ResultObject for the business verification result.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message of the API call.
   * 
   * **Important**
   * 
   * This parameter indicates only whether the API call is abnormal.
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
   * 130A2C10-B9EE-4D84-88E3-5384FF03****
   */
  requestId?: string;
  /**
   * @remarks
   * The result object.
   */
  resultObject?: Id3MetaVerifyResponseBodyResultObject;
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
      resultObject: Id3MetaVerifyResponseBodyResultObject,
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

