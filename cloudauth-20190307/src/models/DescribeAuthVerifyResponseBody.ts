// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuthVerifyResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * - Card information read by OCR (ocrIdCardInfo)
   * - Card information photo edited by the client (ocrIdEditInfo)
   * - OSS storage location and link of the OCR photo (ocrPictureFront).
   * 
   * @example
   * "ocrIdCardInfo": {
   *     "certName": "张先生",
   *     "sex": "男",
   *     "nationality": "汉",
   *     "birth": "20010213",
   *     "address": "XXX省XX市XXX区XX街道X号",
   *     "certNo": "4****************X",
   *     "authority": "XXX公安局XXX分局",
   *     "startDate": "20250523",
   *     "endDate": "20450523"
   *   },
   * "ocrIdEditInfo": {
   *     "certName": "张先生",
   *     "sex": "男",
   *     "nationality": "汉",
   *     "birth": "20010213",
   *     "address": "XXX省XX市XXX区XX街道X号",
   *     "certNo": "4****************X",
   *     "authority": "XXX公安局XXX分局",
   *     "startDate": "20250523",
   *     "endDate": "20450523"
   *   },
   *   "ocrPictureFront": {
   *     "ossBucketName": "cn-shanghai-aliyun-cloudauth-12********",
   *     "ossIdFaceObjectName": "verify/1234567890/f7ed1ef80ad1234fdsd95c********cd_ocridface_b749.jpeg",
   *     "ossIdFaceUrl": "http://cn-shanghai-aliyun-cloudauth-1234567890.oss-cn-shanghai.aliyuncs.com/verify/1234567890/f7ed1ef80ad1234fdsd95c66d83340cd_ocridface_b749.jpeg?security-token=CAISjdfgeJ1q6F...",
   *     "ossIdNationalEmblemObjectName": "verify/1234567890/f7ed1ef80ad1234fdsd95c********cd_ocridnationalemblem_a3hf.jpeg",
   *     "ossIdNationalEmblemUrl": "http://cn-shanghai-aliyun-cloudauth-1234567890.oss-cn-shanghai.aliyuncs.com/verify/1234567890/f7ed1ef80ad1234fdsd95c66d83340cd_ocridnationalemblem_a3hf.jpeg?security-token=CAISjgJ1q6..."
   *   }
   */
  materialInfo?: string;
  /**
   * @remarks
   * The anti-spoofing detection result for the back side of the document, including the risk determination result and risk type:
   * > - 
   * Card front anti-spoofing detection is enabled only when IdSpoof = Y is set in the Initialize operation. Otherwise, spoofRiskResult returns N by default, and spoofType is empty.
   * 
   * spoofRiskResult:
   * - Y: Risk detected.
   *  - N: No risk detected.
   * 
   * spoofType:
   * - SCREEN_REMARK: Recaptured photo.
   * - PHOTO_COPY: Photocopy.
   * - TAMPER: Digitally tampered.
   * 
   * > - This is an algorithm prediction result. This field may not be returned. Avoid setting a mandatory dependency on this field in your business logic.
   * 
   * @example
   * spoofRiskResult：Y
   * spoofType：SCREEN_REMARK
   */
  spoofBackInfo?: string;
  /**
   * @remarks
   * The anti-spoofing detection result for the front side of the document, including the risk determination result and risk type:
   * > - 
   * Card front anti-spoofing detection is enabled only when IdSpoof = Y is set in the Initialize operation. Otherwise, spoofRiskResult returns N by default, and spoofType is empty.
   * 
   * spoofRiskResult:
   * - Y: Risk detected.
   *  - N: No risk detected.
   * 
   * spoofType:
   * - SCREEN_REMARK: Recaptured photo.
   * - PHOTO_COPY: Photocopy.
   * - TAMPER: Digitally tampered.
   * 
   * > - This is an algorithm prediction result. This field may not be returned. Avoid setting a mandatory dependency on this field in your business logic.
   * 
   * @example
   * spoofRiskResult：Y
   * spoofType：SCREEN_REMARK
   */
  spoofInfo?: string;
  /**
   * @remarks
   * The result description.
   * 
   * @example
   * 200
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      materialInfo: 'MaterialInfo',
      spoofBackInfo: 'SpoofBackInfo',
      spoofInfo: 'SpoofInfo',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialInfo: 'string',
      spoofBackInfo: 'string',
      spoofInfo: 'string',
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

export class DescribeAuthVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The return message.
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
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
  result?: DescribeAuthVerifyResponseBodyResult;
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
      result: DescribeAuthVerifyResponseBodyResult,
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

