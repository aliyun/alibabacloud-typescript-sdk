// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCardVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Identity verification result:
   * - 1: Consistent
   * - 2: Inconsistent
   * - 3: No Record Found
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * Submitted ID card information for verification.
   * 
   * @example
   * {"address":"浙江省杭州市余杭区文一西路969号","birthDate":"19901226","certName":"张三","certNo":"1234561990122*****","nationality":"汉","authority":"xxx公安局","startDate":"20201130","endDate":"20301130"}
   */
  cardInfo?: string;
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
  /**
   * @remarks
   * ID card information read by OCR.
   * 
   * @example
   * {"address":"浙江省杭州市余杭区文一西路969号","birthDate":"19901226","certName":"张三","certNo":"1234561990122*****","nationality":"汉","authority":"xxx公安局","startDate":"20201130","endDate":"20301130"}
   */
  ocrCardInfo?: string;
  /**
   * @remarks
   * Returned photo URLs.
   * - certUrl  Front side
   * - certNationalUrl  National emblem side
   * 
   * @example
   * {
   *     "certUrl": "https://cn-shanghai-aliyun-nmeta.cn-shanghai.oss.aliyuncs.com/verify/xxxxxxx/xxxxxxxxxx_ocridface_dbf2_normal.jpeg",
   *     "certNationalUrl": "https://cn-shanghai-aliyun-nmeta.cn-shanghai.oss.aliyuncs.com/verify/xxxxxxxxxx/xxxxxxxxxxx_ocridback_e8a3_normal.jpeg"
   * }
   */
  pictureInfo?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      cardInfo: 'CardInfo',
      faceDetail: 'FaceDetail',
      ocrCardInfo: 'OcrCardInfo',
      pictureInfo: 'PictureInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      cardInfo: 'string',
      faceDetail: 'string',
      ocrCardInfo: 'string',
      pictureInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCardVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code: 200 indicates success, all others indicate failure.
   * Important
   * - This parameter indicates whether the interface was called correctly. For detailed return code explanations, please refer to the error codes.
   * - Please check the business verification results through the fields in ResultObject.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Interface call return message.
   * Important
   * - This parameter only indicates whether there was an exception with the interface.
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
  resultObject?: DescribeCardVerifyResponseBodyResultObject;
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
      resultObject: DescribeCardVerifyResponseBodyResultObject,
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

