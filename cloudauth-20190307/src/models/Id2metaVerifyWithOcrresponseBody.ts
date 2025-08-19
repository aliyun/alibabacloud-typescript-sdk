// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaVerifyWithOCRResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Identity verification result:
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
   * {"address":"Zhejiang Province, Hangzhou City, Yu*****","birthDate":"19901226","certName":"Zhang San","certNo":"1234561990122*****","nationality":"Han","authority":"xxx Public Security Bureau","startDate":"20201130","endDate":"20301130"}
   * 
   * @example
   * OCR读取的身份证信息。
   */
  cardInfo?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      cardInfo: 'CardInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      cardInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaVerifyWithOCRResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code: 200 indicates success, any other value indicates failure.
   * **Important**
   * - This parameter indicates whether the API was called correctly. For detailed return code explanations, please refer to the error codes.
   * - Check the business verification results through the fields in ResultObject.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * API call return message.
   * **Important**
   * This parameter only indicates if there was an exception with the API call.
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
   * Result object
   */
  resultObject?: Id2MetaVerifyWithOCRResponseBodyResultObject;
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
      resultObject: Id2MetaVerifyWithOCRResponseBodyResultObject,
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

