// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id3MetaVerifyWithOCRResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The identity verification result. Valid values:
   * 
   * - 1: consistent.
   * - 2: inconsistent.
   * - 3: no record found.
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * {"address":"浙江省杭州市余*****","birthDate":"19901226","certName":"张三","certNo":"1234561990122*****","nationality":"汉","authority":"xxx公安局","startDate":"20201130","endDate":"20301130"}.
   * 
   * @example
   * OCR读取的身份证信息。
   */
  cardInfo?: string;
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
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      cardInfo: 'CardInfo',
      faceDetail: 'FaceDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      cardInfo: 'string',
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

export class Id3MetaVerifyWithOCRResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. 200 indicates success. Other values indicate failure. **Important**
   * 
   * - This parameter indicates only whether the API call was made correctly. For more information about return codes, see error codes.
   * - Check the fields in ResultObject for the business verification result.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message of the API call. This parameter indicates only whether an exception occurred during the API call.
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
  resultObject?: Id3MetaVerifyWithOCRResponseBodyResultObject;
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
      resultObject: Id3MetaVerifyWithOCRResponseBodyResultObject,
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

