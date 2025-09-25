// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id3MetaVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Identity verification result:
   * 
   * - 1: Consistent
   * - 2: Inconsistent
   * - 3: No record found
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * Image comparison score.
   * 
   * @example
   * {
   *  "verifyScore": 50.28594166529785
   * }
   */
  faceDetail?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      faceDetail: 'FaceDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      faceDetail: 'string',
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
   * Return code: 200 indicates success, others indicate failure.
   * **Important**
   * - This parameter indicates whether the interface was called correctly. For detailed return code explanations, please refer to the error codes.
   * - Check the business verification result through the fields in `ResultObject`.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Interface call return message.
   * 
   * **Important**
   * 
   * This parameter only indicates whether there was an exception with the interface.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 130A2C10-B9EE-4D84-88E3-5384FF03****
   */
  requestId?: string;
  /**
   * @remarks
   * Result object.
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

