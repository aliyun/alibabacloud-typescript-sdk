// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCardVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The identity verification result. Valid values:
   * - 1: consistent
   * - 2: inconsistent
   * - 3: no record found.
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * The ID card information submitted for verification.
   * 
   * @example
   * {"address":"浙江省杭州市余杭区文一西路969号","birthDate":"19901226","certName":"张三","certNo":"1234561990122*****","nationality":"汉","authority":"xxx公安局","startDate":"20201130","endDate":"20301130"}
   */
  cardInfo?: string;
  /**
   * @remarks
   * The image comparison score.
   * 
   * @example
   * {
   *  "verifyScore": 50.28594166529785
   * }
   */
  faceDetail?: string;
  /**
   * @remarks
   * The ID card information read by OCR.
   * 
   * @example
   * {"address":"浙江省杭州市余杭区文一西路969号","birthDate":"19901226","certName":"张三","certNo":"1234561990122*****","nationality":"汉","authority":"xxx公安局","startDate":"20201130","endDate":"20301130"}
   */
  ocrCardInfo?: string;
  /**
   * @remarks
   * The returned photo URLs.
   * - certUrl: front side
   * - certNationalUrl: national emblem side.
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
   * The response code. 200 indicates success. Other values indicate failure.
   * > **Important**
   * > - This parameter indicates whether the operation is called correctly. For more information about return codes, refer to error codes.
   * > - Check the business verification result by viewing the fields in ResultObject.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message of the operation.
   * > **Important**
   * > - This parameter only indicates whether the operation is abnormal.
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

