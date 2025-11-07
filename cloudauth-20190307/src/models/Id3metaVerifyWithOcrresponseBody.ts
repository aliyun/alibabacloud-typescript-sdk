// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id3MetaVerifyWithOCRResponseBodyResultObject extends $dara.Model {
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
   * Card ocr result.
   * 
   * @example
   * {"address":"浙江省杭州市余*****","birthDate":"19901226","certName":"张三","certNo":"1234561990122*****","nationality":"汉","authority":"xxx公安局","startDate":"20201130","endDate":"20301130"}
   */
  cardInfo?: string;
  /**
   * @remarks
   * Face comparison score.
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
   * Return code: 200 indicates success, any other value indicates failure. **Important**
   * 
   * - This parameter indicates whether the interface was called correctly. For a detailed explanation of return codes, please refer to the error codes.
   * - The business verification result can be viewed through the fields in ResultObject.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Interface call return message. **Important** This parameter only indicates whether there was an exception with the interface.
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

