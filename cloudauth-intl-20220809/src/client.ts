// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CardOcrResponseBodyResult extends $dara.Model {
  extCardInfo?: string;
  extIdInfo?: string;
  /**
   * @example
   * Y
   */
  passed?: string;
  /**
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @example
   * 08573be80f944d95ac812e019e3655a8
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      extCardInfo: 'ExtCardInfo',
      extIdInfo: 'ExtIdInfo',
      passed: 'Passed',
      subCode: 'SubCode',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extCardInfo: 'string',
      extIdInfo: 'string',
      passed: 'string',
      subCode: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResultResponseBodyResult extends $dara.Model {
  /**
   * @example
   * **
   */
  ekycResult?: string;
  /**
   * @example
   * **
   */
  extBasicInfo?: string;
  /**
   * @example
   * **
   */
  extFaceInfo?: string;
  /**
   * @example
   * **
   */
  extIdInfo?: string;
  extInfo?: string;
  /**
   * @example
   * **
   */
  extRiskInfo?: string;
  /**
   * @example
   * Y
   */
  passed?: string;
  /**
   * @example
   * ***
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      ekycResult: 'EkycResult',
      extBasicInfo: 'ExtBasicInfo',
      extFaceInfo: 'ExtFaceInfo',
      extIdInfo: 'ExtIdInfo',
      extInfo: 'ExtInfo',
      extRiskInfo: 'ExtRiskInfo',
      passed: 'Passed',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ekycResult: 'string',
      extBasicInfo: 'string',
      extFaceInfo: 'string',
      extIdInfo: 'string',
      extInfo: 'string',
      extRiskInfo: 'string',
      passed: 'string',
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

export class CheckVerifyLogResponseBodyResult extends $dara.Model {
  /**
   * @example
   * {}
   */
  extInfo?: string;
  interruptPage?: string;
  logInfo?: string[];
  /**
   * @example
   * {
   *           "faceOverTimes": 0,
   *           "hasFaceOverTimes": false,
   *           "hasFacePermissionRefuse": false,
   *           "hasOcrEdit": true,
   *           "hasOcrEditOverTimes": false,
   *           "hasOcrOverTimes": true,
   *           "hasOcrPermissionRefuse": false,
   *           "ocrEditOverTimes": 0,
   *           "ocrEditTimes": 1,
   *           "ocrOverTimes": 1,
   *           "pageStayTimeInfo": {
   *             "LOADING": "1615",
   *             "OCR_SCAN": "37446",
   *             "OCR_RESULT": "1338",
   *             "FACE": "8707"
   *           }
   *         }
   */
  logStatisticsInfo?: string;
  /**
   * @example
   * Y
   */
  passed?: string;
  /**
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @example
   * 1001
   */
  verifyErrorCode?: string;
  /**
   * @example
   * 1
   */
  verifyStatus?: string;
  static names(): { [key: string]: string } {
    return {
      extInfo: 'ExtInfo',
      interruptPage: 'InterruptPage',
      logInfo: 'LogInfo',
      logStatisticsInfo: 'LogStatisticsInfo',
      passed: 'Passed',
      subCode: 'SubCode',
      verifyErrorCode: 'VerifyErrorCode',
      verifyStatus: 'VerifyStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfo: 'string',
      interruptPage: 'string',
      logInfo: { 'type': 'array', 'itemType': 'string' },
      logStatisticsInfo: 'string',
      passed: 'string',
      subCode: 'string',
      verifyErrorCode: 'string',
      verifyStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logInfo)) {
      $dara.Model.validateArray(this.logInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeepfakeDetectIntlResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
  result?: string;
  riskScore?: { [key: string]: string };
  /**
   * @example
   * SuspectDeepForgery,SuspectWarterMark
   */
  riskTag?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      riskScore: 'RiskScore',
      riskTag: 'RiskTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      riskScore: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      riskTag: 'string',
    };
  }

  validate() {
    if(this.riskScore) {
      $dara.Model.validateMap(this.riskScore);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVerifyResultResponseBodyResult extends $dara.Model {
  /**
   * @example
   * Y/N
   */
  deleteResult?: string;
  /**
   * @example
   * 4ab0b***cbde97
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteResult: 'DeleteResult',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteResult: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocOcrResponseBodyResult extends $dara.Model {
  extIdInfo?: string;
  /**
   * @example
   * Y
   */
  passed?: string;
  /**
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @example
   * 08573be80f944d95ac812e019e3655a8
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      extIdInfo: 'ExtIdInfo',
      passed: 'Passed',
      subCode: 'SubCode',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extIdInfo: 'string',
      passed: 'string',
      subCode: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EkycVerifyResponseBodyResult extends $dara.Model {
  /**
   * @example
   * {
   * "faceAttack": "N",
   * "faceComparisonScore": 52.57,
   * "facePassed": "N",
   * "authorityComparisonScore": 80.39
   * }
   */
  extFaceInfo?: string;
  extIdInfo?: string;
  /**
   * @example
   * Y
   */
  passed?: string;
  /**
   * @example
   * 205
   */
  subCode?: string;
  /**
   * @example
   * 4ab0b***cbde97
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      extFaceInfo: 'ExtFaceInfo',
      extIdInfo: 'ExtIdInfo',
      passed: 'Passed',
      subCode: 'SubCode',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extFaceInfo: 'string',
      extIdInfo: 'string',
      passed: 'string',
      subCode: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceCompareResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 98
   */
  faceComparisonScore?: number;
  /**
   * @example
   * Y
   */
  passed?: string;
  /**
   * @example
   * 08573be80f944d95ac812e019e3655a8
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      faceComparisonScore: 'FaceComparisonScore',
      passed: 'Passed',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceComparisonScore: 'number',
      passed: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceGuardRiskResponseBodyResult extends $dara.Model {
  guardRiskScore?: number;
  riskExtends?: string;
  /**
   * @example
   * ROOT,VPN,HOOK
   */
  riskTags?: string;
  /**
   * @example
   * hk573be80f944d95ac812e019e3655a8
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      guardRiskScore: 'GuardRiskScore',
      riskExtends: 'RiskExtends',
      riskTags: 'RiskTags',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guardRiskScore: 'number',
      riskExtends: 'string',
      riskTags: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessResponseBodyResultExtFaceInfo extends $dara.Model {
  faceAge?: number;
  /**
   * @example
   * Y
   */
  faceAttack?: string;
  faceGender?: string;
  /**
   * @example
   * 87.19
   */
  faceQualityScore?: number;
  /**
   * @example
   * Y
   */
  occlusionResult?: string;
  static names(): { [key: string]: string } {
    return {
      faceAge: 'FaceAge',
      faceAttack: 'FaceAttack',
      faceGender: 'FaceGender',
      faceQualityScore: 'FaceQualityScore',
      occlusionResult: 'OcclusionResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAge: 'number',
      faceAttack: 'string',
      faceGender: 'string',
      faceQualityScore: 'number',
      occlusionResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessResponseBodyResult extends $dara.Model {
  extFaceInfo?: FaceLivenessResponseBodyResultExtFaceInfo;
  /**
   * @example
   * N
   */
  passed?: string;
  /**
   * @example
   * 205
   */
  subCode?: string;
  /**
   * @example
   * 08573be80f944d95ac812e019e3655a8
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      extFaceInfo: 'ExtFaceInfo',
      passed: 'Passed',
      subCode: 'SubCode',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extFaceInfo: FaceLivenessResponseBodyResultExtFaceInfo,
      passed: 'string',
      subCode: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    if(this.extFaceInfo && typeof (this.extFaceInfo as any).validate === 'function') {
      (this.extFaceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaPeriodVerifyIntlResponseBodyResult extends $dara.Model {
  /**
   * @example
   * Y
   */
  passed?: string;
  /**
   * @example
   * 200
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      passed: 'Passed',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passed: 'string',
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

export class Id2MetaVerifyIntlResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeResponseBodyResult extends $dara.Model {
  /**
   * @example
   * ***
   */
  clientCfg?: string;
  /**
   * @example
   * 08573be80f944d95ac812e019e3655a8
   */
  transactionId?: string;
  /**
   * @example
   * http****
   */
  transactionUrl?: string;
  static names(): { [key: string]: string } {
    return {
      clientCfg: 'ClientCfg',
      transactionId: 'TransactionId',
      transactionUrl: 'TransactionUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientCfg: 'string',
      transactionId: 'string',
      transactionUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaVerifyIntlResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @example
   * 101
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      ispName: 'IspName',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      ispName: 'string',
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

export class CardOcrRequest extends $dara.Model {
  /**
   * @example
   * 00000006
   */
  docType?: string;
  /**
   * @example
   * F
   */
  idFaceQuality?: string;
  idOcrPictureBase64?: string;
  /**
   * @example
   * https://digital-cardocr-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  idOcrPictureUrl?: string;
  /**
   * @example
   * dso9322***dsjsd22
   */
  merchantBizId?: string;
  /**
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @example
   * T
   */
  ocr?: string;
  /**
   * @example
   * ID_OCR_MIN
   */
  productCode?: string;
  /**
   * @example
   * F
   */
  spoof?: string;
  static names(): { [key: string]: string } {
    return {
      docType: 'DocType',
      idFaceQuality: 'IdFaceQuality',
      idOcrPictureBase64: 'IdOcrPictureBase64',
      idOcrPictureUrl: 'IdOcrPictureUrl',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      ocr: 'Ocr',
      productCode: 'ProductCode',
      spoof: 'Spoof',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docType: 'string',
      idFaceQuality: 'string',
      idOcrPictureBase64: 'string',
      idOcrPictureUrl: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      ocr: 'string',
      productCode: 'string',
      spoof: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CardOcrResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4EB356FE-BB6A-5DCC-B4C5-E8051787EBA1
   */
  requestId?: string;
  result?: CardOcrResponseBodyResult;
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
      result: CardOcrResponseBodyResult,
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

export class CardOcrResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CardOcrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CardOcrResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResultRequest extends $dara.Model {
  /**
   * @example
   * ***
   */
  extraImageControlList?: string;
  /**
   * @example
   * N
   */
  isReturnImage?: string;
  /**
   * @example
   * djs20d***9-dsskc
   */
  merchantBizId?: string;
  /**
   * @example
   * Y
   */
  returnFiveCategorySpoofResult?: string;
  /**
   * @example
   * 4ab0b***cbde97
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      extraImageControlList: 'ExtraImageControlList',
      isReturnImage: 'IsReturnImage',
      merchantBizId: 'MerchantBizId',
      returnFiveCategorySpoofResult: 'ReturnFiveCategorySpoofResult',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraImageControlList: 'string',
      isReturnImage: 'string',
      merchantBizId: 'string',
      returnFiveCategorySpoofResult: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResultResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4EB35****87EBA1
   */
  requestId?: string;
  result?: CheckResultResponseBodyResult;
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
      result: CheckResultResponseBodyResult,
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

export class CheckResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckVerifyLogRequest extends $dara.Model {
  /**
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @example
   * hksb7ba1b*********015d694361bee4
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      merchantBizId: 'MerchantBizId',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merchantBizId: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckVerifyLogResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4EB35****87EBA1
   */
  requestId?: string;
  result?: CheckVerifyLogResponseBodyResult;
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
      result: CheckVerifyLogResponseBodyResult,
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

export class CheckVerifyLogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckVerifyLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckVerifyLogResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeepfakeDetectIntlRequest extends $dara.Model {
  /**
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceBase64?: string;
  /**
   * @example
   * IMAGE
   */
  faceInputType?: string;
  /**
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c******
   */
  merchantBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FACE_DEEPFAKE
   */
  productCode?: string;
  /**
   * @example
   * 1234567890
   */
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      faceBase64: 'FaceBase64',
      faceInputType: 'FaceInputType',
      faceUrl: 'FaceUrl',
      merchantBizId: 'MerchantBizId',
      productCode: 'ProductCode',
      sceneCode: 'SceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceBase64: 'string',
      faceInputType: 'string',
      faceUrl: 'string',
      merchantBizId: 'string',
      productCode: 'string',
      sceneCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeepfakeDetectIntlResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 8FC3D6AC-9FED-4311-8DA7-C4BF47D9F260
   */
  requestId?: string;
  resultObject?: DeepfakeDetectIntlResponseBodyResultObject;
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
      resultObject: DeepfakeDetectIntlResponseBodyResultObject,
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

export class DeepfakeDetectIntlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeepfakeDetectIntlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeepfakeDetectIntlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVerifyResultRequest extends $dara.Model {
  /**
   * @example
   * Y / N
   */
  deleteAfterQuery?: string;
  /**
   * @example
   * Img / Text / All
   */
  deleteType?: string;
  /**
   * @example
   * 4ab0b***cbde97
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteAfterQuery: 'DeleteAfterQuery',
      deleteType: 'DeleteType',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteAfterQuery: 'string',
      deleteType: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVerifyResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 4EB35****87EBA1
   */
  requestId?: string;
  result?: DeleteVerifyResultResponseBodyResult;
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
      result: DeleteVerifyResultResponseBodyResult,
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

export class DeleteVerifyResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVerifyResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVerifyResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocOcrRequest extends $dara.Model {
  cardSide?: string;
  /**
   * @example
   * 00000006
   */
  docType?: string;
  /**
   * @example
   * F
   */
  idFaceQuality?: string;
  idOcrPictureBase64?: string;
  /**
   * @example
   * https://digital-cardocr-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  idOcrPictureUrl?: string;
  idThreshold?: string;
  /**
   * @example
   * dso9322***dsjsd22
   */
  merchantBizId?: string;
  /**
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @example
   * T
   */
  ocr?: string;
  productCode?: string;
  /**
   * @example
   * F
   */
  spoof?: string;
  static names(): { [key: string]: string } {
    return {
      cardSide: 'CardSide',
      docType: 'DocType',
      idFaceQuality: 'IdFaceQuality',
      idOcrPictureBase64: 'IdOcrPictureBase64',
      idOcrPictureUrl: 'IdOcrPictureUrl',
      idThreshold: 'IdThreshold',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      ocr: 'Ocr',
      productCode: 'ProductCode',
      spoof: 'Spoof',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardSide: 'string',
      docType: 'string',
      idFaceQuality: 'string',
      idOcrPictureBase64: 'string',
      idOcrPictureUrl: 'string',
      idThreshold: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      ocr: 'string',
      productCode: 'string',
      spoof: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocOcrResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 86C40EC3-5940-5F47-995C-BFE90B70E540
   */
  requestId?: string;
  result?: DocOcrResponseBodyResult;
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
      result: DocOcrResponseBodyResult,
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

export class DocOcrResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DocOcrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DocOcrResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EkycVerifyRequest extends $dara.Model {
  /**
   * @example
   * T
   */
  authorize?: string;
  /**
   * @example
   * F
   */
  crop?: string;
  docName?: string;
  /**
   * @example
   * 410***************
   */
  docNo?: string;
  /**
   * @example
   * 00000001
   */
  docType?: string;
  facePictureBase64?: string;
  /**
   * @example
   * https://digital-face-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  facePictureUrl?: string;
  idOcrPictureBase64?: string;
  /**
   * @example
   * https://digital-cardocr-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  idOcrPictureUrl?: string;
  idThreshold?: string;
  /**
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @example
   * 123456
   */
  merchantUserId?: string;
  /**
   * @example
   * eKYC_MIN
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      authorize: 'Authorize',
      crop: 'Crop',
      docName: 'DocName',
      docNo: 'DocNo',
      docType: 'DocType',
      facePictureBase64: 'FacePictureBase64',
      facePictureUrl: 'FacePictureUrl',
      idOcrPictureBase64: 'IdOcrPictureBase64',
      idOcrPictureUrl: 'IdOcrPictureUrl',
      idThreshold: 'IdThreshold',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorize: 'string',
      crop: 'string',
      docName: 'string',
      docNo: 'string',
      docType: 'string',
      facePictureBase64: 'string',
      facePictureUrl: 'string',
      idOcrPictureBase64: 'string',
      idOcrPictureUrl: 'string',
      idThreshold: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EkycVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4EB356FE-BB6A-5DCC-B4C5-E8051787EBA1
   */
  requestId?: string;
  result?: EkycVerifyResponseBodyResult;
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
      result: EkycVerifyResponseBodyResult,
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

export class EkycVerifyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EkycVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EkycVerifyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceCompareRequest extends $dara.Model {
  /**
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  sourceFacePicture?: string;
  /**
   * @example
   * https://***face1.jpeg
   */
  sourceFacePictureUrl?: string;
  targetFacePicture?: string;
  /**
   * @example
   * https://***face2.jpeg
   */
  targetFacePictureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      merchantBizId: 'MerchantBizId',
      sourceFacePicture: 'SourceFacePicture',
      sourceFacePictureUrl: 'SourceFacePictureUrl',
      targetFacePicture: 'TargetFacePicture',
      targetFacePictureUrl: 'TargetFacePictureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merchantBizId: 'string',
      sourceFacePicture: 'string',
      sourceFacePictureUrl: 'string',
      targetFacePicture: 'string',
      targetFacePictureUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceCompareResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4EB356FE-BB6A-5DCC-B4C5-E8051787EBA1
   */
  requestId?: string;
  result?: FaceCompareResponseBodyResult;
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
      result: FaceCompareResponseBodyResult,
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

export class FaceCompareResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FaceCompareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FaceCompareResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceGuardRiskRequest extends $dara.Model {
  /**
   * @example
   * LMALL20******001
   */
  bizId?: string;
  /**
   * @example
   * Tk9SSUQuMS*****************ZDNmNWY5NzQxOW1o
   */
  deviceToken?: string;
  /**
   * @example
   * 0c83ce0101d34eff886b1f7d1cdef67f
   */
  merchantBizId?: string;
  /**
   * @example
   * FACE_GUARD
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      deviceToken: 'DeviceToken',
      merchantBizId: 'MerchantBizId',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      deviceToken: 'string',
      merchantBizId: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceGuardRiskResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 595E387B-3F0E-5C52-BD02-8EFE63D41FD5
   */
  requestId?: string;
  result?: FaceGuardRiskResponseBodyResult;
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
      result: FaceGuardRiskResponseBodyResult,
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

export class FaceGuardRiskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FaceGuardRiskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FaceGuardRiskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessRequest extends $dara.Model {
  /**
   * @example
   * T
   */
  crop?: string;
  facePictureBase64?: string;
  /**
   * @example
   * https://digital-face-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  facePictureUrl?: string;
  /**
   * @example
   * T
   */
  faceQuality?: string;
  /**
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @example
   * T
   */
  occlusion?: string;
  /**
   * @example
   * FACE_LIVENESS_MIN
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      crop: 'Crop',
      facePictureBase64: 'FacePictureBase64',
      facePictureUrl: 'FacePictureUrl',
      faceQuality: 'FaceQuality',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      occlusion: 'Occlusion',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crop: 'string',
      facePictureBase64: 'string',
      facePictureUrl: 'string',
      faceQuality: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      occlusion: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 42EA58CA-5DF4-55D5-82C4-5E7A40DA62BA
   */
  requestId?: string;
  result?: FaceLivenessResponseBodyResult;
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
      result: FaceLivenessResponseBodyResult,
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

export class FaceLivenessResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FaceLivenessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FaceLivenessResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FraudResultCallBackRequest extends $dara.Model {
  /**
   * @example
   * shs2b27333914876c01de4cb22f5841f
   */
  certifyId?: string;
  extParams?: string;
  /**
   * @example
   * PASS
   */
  resultCode?: string;
  /**
   * @example
   * production
   */
  verifyDeployEnv?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      extParams: 'ExtParams',
      resultCode: 'ResultCode',
      verifyDeployEnv: 'VerifyDeployEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      extParams: 'string',
      resultCode: 'string',
      verifyDeployEnv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FraudResultCallBackResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 4EB35****87EBA1
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FraudResultCallBackResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FraudResultCallBackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FraudResultCallBackResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaPeriodVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 411xxxxxxxxxxx0001
   */
  docNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ​00000001
   */
  docType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @example
   * 1234567890
   */
  merchantUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eKYC_Date_MIN
   */
  productCode?: string;
  /**
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20301001
   */
  validityEndDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20201001
   */
  validityStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      docName: 'DocName',
      docNo: 'DocNo',
      docType: 'DocType',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      productCode: 'ProductCode',
      sceneCode: 'SceneCode',
      validityEndDate: 'ValidityEndDate',
      validityStartDate: 'ValidityStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docName: 'string',
      docNo: 'string',
      docType: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      productCode: 'string',
      sceneCode: 'string',
      validityEndDate: 'string',
      validityStartDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaPeriodVerifyIntlResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 7B97D932-7FF5-517D-BF39-7CA1BEE3CDD9
   */
  requestId?: string;
  result?: Id2MetaPeriodVerifyIntlResponseBodyResult;
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
      result: Id2MetaPeriodVerifyIntlResponseBodyResult,
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

export class Id2MetaPeriodVerifyIntlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Id2MetaPeriodVerifyIntlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Id2MetaPeriodVerifyIntlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaVerifyIntlRequest extends $dara.Model {
  /**
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @example
   * ID_2META
   */
  productCode?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      identifyNum: 'IdentifyNum',
      paramType: 'ParamType',
      productCode: 'ProductCode',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyNum: 'string',
      paramType: 'string',
      productCode: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaVerifyIntlResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * EFA11401-C961-5E89-A2D3-BF9883E5CC3D
   */
  requestId?: string;
  result?: Id2MetaVerifyIntlResponseBodyResult;
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
      result: Id2MetaVerifyIntlResponseBodyResult,
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

export class Id2MetaVerifyIntlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Id2MetaVerifyIntlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Id2MetaVerifyIntlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeRequest extends $dara.Model {
  appQualityCheck?: string;
  authorize?: string;
  callbackToken?: string;
  callbackUrl?: string;
  /**
   * @example
   * *
   */
  crop?: string;
  dateOfBirth?: string;
  dateOfExpiry?: string;
  docPageConfig?: string[];
  docScanMode?: string;
  /**
   * @example
   * 01000000
   */
  docType?: string;
  docVideo?: string;
  documentNumber?: string;
  experienceCode?: string;
  facePictureBase64?: string;
  /**
   * @example
   * ***
   */
  facePictureUrl?: string;
  /**
   * @example
   * *
   */
  idFaceQuality?: string;
  /**
   * @example
   * Y
   */
  idSpoof?: string;
  idThreshold?: string;
  languageConfig?: string;
  MRTDInput?: string;
  /**
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @example
   * 1221****6543
   */
  merchantUserId?: string;
  /**
   * @example
   * {\\"bioMetaInfo\\":\\"4.1.0:2916352,0\\",\\"deviceType\\":\\"web\\",\\"ua\\":\\"Mozilla/5.0 (Macintosh
   */
  metaInfo?: string;
  model?: string;
  /**
   * @remarks
   * OCR。
   * 
   * @example
   * *
   */
  ocr?: string;
  procedurePriority?: string;
  /**
   * @example
   * eKYC
   */
  productCode?: string;
  productFlow?: string;
  /**
   * @example
   * http*****
   */
  returnUrl?: string;
  /**
   * @example
   * PAY**
   */
  sceneCode?: string;
  securityLevel?: string;
  showAlbumIcon?: string;
  showGuidePage?: string;
  showOcrResult?: string;
  styleConfig?: string;
  useNFC?: string;
  static names(): { [key: string]: string } {
    return {
      appQualityCheck: 'AppQualityCheck',
      authorize: 'Authorize',
      callbackToken: 'CallbackToken',
      callbackUrl: 'CallbackUrl',
      crop: 'Crop',
      dateOfBirth: 'DateOfBirth',
      dateOfExpiry: 'DateOfExpiry',
      docPageConfig: 'DocPageConfig',
      docScanMode: 'DocScanMode',
      docType: 'DocType',
      docVideo: 'DocVideo',
      documentNumber: 'DocumentNumber',
      experienceCode: 'ExperienceCode',
      facePictureBase64: 'FacePictureBase64',
      facePictureUrl: 'FacePictureUrl',
      idFaceQuality: 'IdFaceQuality',
      idSpoof: 'IdSpoof',
      idThreshold: 'IdThreshold',
      languageConfig: 'LanguageConfig',
      MRTDInput: 'MRTDInput',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      metaInfo: 'MetaInfo',
      model: 'Model',
      ocr: 'Ocr',
      procedurePriority: 'ProcedurePriority',
      productCode: 'ProductCode',
      productFlow: 'ProductFlow',
      returnUrl: 'ReturnUrl',
      sceneCode: 'SceneCode',
      securityLevel: 'SecurityLevel',
      showAlbumIcon: 'ShowAlbumIcon',
      showGuidePage: 'ShowGuidePage',
      showOcrResult: 'ShowOcrResult',
      styleConfig: 'StyleConfig',
      useNFC: 'UseNFC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appQualityCheck: 'string',
      authorize: 'string',
      callbackToken: 'string',
      callbackUrl: 'string',
      crop: 'string',
      dateOfBirth: 'string',
      dateOfExpiry: 'string',
      docPageConfig: { 'type': 'array', 'itemType': 'string' },
      docScanMode: 'string',
      docType: 'string',
      docVideo: 'string',
      documentNumber: 'string',
      experienceCode: 'string',
      facePictureBase64: 'string',
      facePictureUrl: 'string',
      idFaceQuality: 'string',
      idSpoof: 'string',
      idThreshold: 'string',
      languageConfig: 'string',
      MRTDInput: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      metaInfo: 'string',
      model: 'string',
      ocr: 'string',
      procedurePriority: 'string',
      productCode: 'string',
      productFlow: 'string',
      returnUrl: 'string',
      sceneCode: 'string',
      securityLevel: 'string',
      showAlbumIcon: 'string',
      showGuidePage: 'string',
      showOcrResult: 'string',
      styleConfig: 'string',
      useNFC: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docPageConfig)) {
      $dara.Model.validateArray(this.docPageConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeShrinkRequest extends $dara.Model {
  appQualityCheck?: string;
  authorize?: string;
  callbackToken?: string;
  callbackUrl?: string;
  /**
   * @example
   * *
   */
  crop?: string;
  dateOfBirth?: string;
  dateOfExpiry?: string;
  docPageConfigShrink?: string;
  docScanMode?: string;
  /**
   * @example
   * 01000000
   */
  docType?: string;
  docVideo?: string;
  documentNumber?: string;
  experienceCode?: string;
  facePictureBase64?: string;
  /**
   * @example
   * ***
   */
  facePictureUrl?: string;
  /**
   * @example
   * *
   */
  idFaceQuality?: string;
  /**
   * @example
   * Y
   */
  idSpoof?: string;
  idThreshold?: string;
  languageConfig?: string;
  MRTDInput?: string;
  /**
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @example
   * 1221****6543
   */
  merchantUserId?: string;
  /**
   * @example
   * {\\"bioMetaInfo\\":\\"4.1.0:2916352,0\\",\\"deviceType\\":\\"web\\",\\"ua\\":\\"Mozilla/5.0 (Macintosh
   */
  metaInfo?: string;
  model?: string;
  /**
   * @remarks
   * OCR。
   * 
   * @example
   * *
   */
  ocr?: string;
  procedurePriority?: string;
  /**
   * @example
   * eKYC
   */
  productCode?: string;
  productFlow?: string;
  /**
   * @example
   * http*****
   */
  returnUrl?: string;
  /**
   * @example
   * PAY**
   */
  sceneCode?: string;
  securityLevel?: string;
  showAlbumIcon?: string;
  showGuidePage?: string;
  showOcrResult?: string;
  styleConfig?: string;
  useNFC?: string;
  static names(): { [key: string]: string } {
    return {
      appQualityCheck: 'AppQualityCheck',
      authorize: 'Authorize',
      callbackToken: 'CallbackToken',
      callbackUrl: 'CallbackUrl',
      crop: 'Crop',
      dateOfBirth: 'DateOfBirth',
      dateOfExpiry: 'DateOfExpiry',
      docPageConfigShrink: 'DocPageConfig',
      docScanMode: 'DocScanMode',
      docType: 'DocType',
      docVideo: 'DocVideo',
      documentNumber: 'DocumentNumber',
      experienceCode: 'ExperienceCode',
      facePictureBase64: 'FacePictureBase64',
      facePictureUrl: 'FacePictureUrl',
      idFaceQuality: 'IdFaceQuality',
      idSpoof: 'IdSpoof',
      idThreshold: 'IdThreshold',
      languageConfig: 'LanguageConfig',
      MRTDInput: 'MRTDInput',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      metaInfo: 'MetaInfo',
      model: 'Model',
      ocr: 'Ocr',
      procedurePriority: 'ProcedurePriority',
      productCode: 'ProductCode',
      productFlow: 'ProductFlow',
      returnUrl: 'ReturnUrl',
      sceneCode: 'SceneCode',
      securityLevel: 'SecurityLevel',
      showAlbumIcon: 'ShowAlbumIcon',
      showGuidePage: 'ShowGuidePage',
      showOcrResult: 'ShowOcrResult',
      styleConfig: 'StyleConfig',
      useNFC: 'UseNFC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appQualityCheck: 'string',
      authorize: 'string',
      callbackToken: 'string',
      callbackUrl: 'string',
      crop: 'string',
      dateOfBirth: 'string',
      dateOfExpiry: 'string',
      docPageConfigShrink: 'string',
      docScanMode: 'string',
      docType: 'string',
      docVideo: 'string',
      documentNumber: 'string',
      experienceCode: 'string',
      facePictureBase64: 'string',
      facePictureUrl: 'string',
      idFaceQuality: 'string',
      idSpoof: 'string',
      idThreshold: 'string',
      languageConfig: 'string',
      MRTDInput: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      metaInfo: 'string',
      model: 'string',
      ocr: 'string',
      procedurePriority: 'string',
      productCode: 'string',
      productFlow: 'string',
      returnUrl: 'string',
      sceneCode: 'string',
      securityLevel: 'string',
      showAlbumIcon: 'string',
      showGuidePage: 'string',
      showOcrResult: 'string',
      styleConfig: 'string',
      useNFC: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4EB35****87EBA1
   */
  requestId?: string;
  result?: InitializeResponseBodyResult;
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
      result: InitializeResponseBodyResult,
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

export class InitializeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitializeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InitializeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaVerifyIntlRequest extends $dara.Model {
  /**
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @example
   * 186****1234
   */
  mobile?: string;
  /**
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @example
   * MOBILE_3META
   */
  productCode?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      identifyNum: 'IdentifyNum',
      mobile: 'Mobile',
      paramType: 'ParamType',
      productCode: 'ProductCode',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyNum: 'string',
      mobile: 'string',
      paramType: 'string',
      productCode: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaVerifyIntlResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * D241532C-4EE9-5A2A-A5A5-C1FD98CE2EDD
   */
  requestId?: string;
  result?: Mobile3MetaVerifyIntlResponseBodyResult;
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
      result: Mobile3MetaVerifyIntlResponseBodyResult,
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

export class Mobile3MetaVerifyIntlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Mobile3MetaVerifyIntlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Mobile3MetaVerifyIntlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudauth-intl", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 证件OCR识别纯服务端接口
   * 
   * @deprecated OpenAPI CardOcr is deprecated, please use Cloudauth-intl::2022-08-09::DocOcr instead.
   * 
   * @param request - CardOcrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CardOcrResponse
   */
  // Deprecated
  async cardOcrWithOptions(request: CardOcrRequest, runtime: $dara.RuntimeOptions): Promise<CardOcrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.docType)) {
      query["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.idFaceQuality)) {
      query["IdFaceQuality"] = request.idFaceQuality;
    }

    if (!$dara.isNull(request.idOcrPictureUrl)) {
      query["IdOcrPictureUrl"] = request.idOcrPictureUrl;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.ocr)) {
      query["Ocr"] = request.ocr;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.spoof)) {
      query["Spoof"] = request.spoof;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.idOcrPictureBase64)) {
      body["IdOcrPictureBase64"] = request.idOcrPictureBase64;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CardOcr",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CardOcrResponse>(await this.callApi(params, req, runtime), new CardOcrResponse({}));
  }

  /**
   * 证件OCR识别纯服务端接口
   * 
   * @deprecated OpenAPI CardOcr is deprecated, please use Cloudauth-intl::2022-08-09::DocOcr instead.
   * 
   * @param request - CardOcrRequest
   * @returns CardOcrResponse
   */
  // Deprecated
  async cardOcr(request: CardOcrRequest): Promise<CardOcrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cardOcrWithOptions(request, runtime);
  }

  /**
   * 结果查询
   * 
   * @param request - CheckResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckResultResponse
   */
  async checkResultWithOptions(request: CheckResultRequest, runtime: $dara.RuntimeOptions): Promise<CheckResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extraImageControlList)) {
      query["ExtraImageControlList"] = request.extraImageControlList;
    }

    if (!$dara.isNull(request.isReturnImage)) {
      query["IsReturnImage"] = request.isReturnImage;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.returnFiveCategorySpoofResult)) {
      query["ReturnFiveCategorySpoofResult"] = request.returnFiveCategorySpoofResult;
    }

    if (!$dara.isNull(request.transactionId)) {
      query["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckResult",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CheckResultResponse>(await this.callApi(params, req, runtime), new CheckResultResponse({}));
  }

  /**
   * 结果查询
   * 
   * @param request - CheckResultRequest
   * @returns CheckResultResponse
   */
  async checkResult(request: CheckResultRequest): Promise<CheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkResultWithOptions(request, runtime);
  }

  /**
   * 认证日志查询接口
   * 
   * @param request - CheckVerifyLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckVerifyLogResponse
   */
  async checkVerifyLogWithOptions(request: CheckVerifyLogRequest, runtime: $dara.RuntimeOptions): Promise<CheckVerifyLogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.merchantBizId)) {
      body["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.transactionId)) {
      body["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckVerifyLog",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CheckVerifyLogResponse>(await this.callApi(params, req, runtime), new CheckVerifyLogResponse({}));
  }

  /**
   * 认证日志查询接口
   * 
   * @param request - CheckVerifyLogRequest
   * @returns CheckVerifyLogResponse
   */
  async checkVerifyLog(request: CheckVerifyLogRequest): Promise<CheckVerifyLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkVerifyLogWithOptions(request, runtime);
  }

  /**
   * 人脸凭证核验
   * 
   * @param request - DeepfakeDetectIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeepfakeDetectIntlResponse
   */
  async deepfakeDetectIntlWithOptions(request: DeepfakeDetectIntlRequest, runtime: $dara.RuntimeOptions): Promise<DeepfakeDetectIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.faceInputType)) {
      query["FaceInputType"] = request.faceInputType;
    }

    if (!$dara.isNull(request.faceUrl)) {
      query["FaceUrl"] = request.faceUrl;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.faceBase64)) {
      body["FaceBase64"] = request.faceBase64;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeepfakeDetectIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeepfakeDetectIntlResponse>(await this.callApi(params, req, runtime), new DeepfakeDetectIntlResponse({}));
  }

  /**
   * 人脸凭证核验
   * 
   * @param request - DeepfakeDetectIntlRequest
   * @returns DeepfakeDetectIntlResponse
   */
  async deepfakeDetectIntl(request: DeepfakeDetectIntlRequest): Promise<DeepfakeDetectIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deepfakeDetectIntlWithOptions(request, runtime);
  }

  /**
   * 删除用户认证记录结果
   * 
   * @param request - DeleteVerifyResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVerifyResultResponse
   */
  async deleteVerifyResultWithOptions(request: DeleteVerifyResultRequest, runtime: $dara.RuntimeOptions): Promise<DeleteVerifyResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteAfterQuery)) {
      query["DeleteAfterQuery"] = request.deleteAfterQuery;
    }

    if (!$dara.isNull(request.deleteType)) {
      query["DeleteType"] = request.deleteType;
    }

    if (!$dara.isNull(request.transactionId)) {
      query["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVerifyResult",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteVerifyResultResponse>(await this.callApi(params, req, runtime), new DeleteVerifyResultResponse({}));
  }

  /**
   * 删除用户认证记录结果
   * 
   * @param request - DeleteVerifyResultRequest
   * @returns DeleteVerifyResultResponse
   */
  async deleteVerifyResult(request: DeleteVerifyResultRequest): Promise<DeleteVerifyResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVerifyResultWithOptions(request, runtime);
  }

  /**
   * 卡证ocr纯服务端
   * 
   * @param request - DocOcrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DocOcrResponse
   */
  async docOcrWithOptions(request: DocOcrRequest, runtime: $dara.RuntimeOptions): Promise<DocOcrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cardSide)) {
      query["CardSide"] = request.cardSide;
    }

    if (!$dara.isNull(request.docType)) {
      query["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.idFaceQuality)) {
      query["IdFaceQuality"] = request.idFaceQuality;
    }

    if (!$dara.isNull(request.idOcrPictureUrl)) {
      query["IdOcrPictureUrl"] = request.idOcrPictureUrl;
    }

    if (!$dara.isNull(request.idThreshold)) {
      query["IdThreshold"] = request.idThreshold;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.ocr)) {
      query["Ocr"] = request.ocr;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.spoof)) {
      query["Spoof"] = request.spoof;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.idOcrPictureBase64)) {
      body["IdOcrPictureBase64"] = request.idOcrPictureBase64;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DocOcr",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DocOcrResponse>(await this.callApi(params, req, runtime), new DocOcrResponse({}));
  }

  /**
   * 卡证ocr纯服务端
   * 
   * @param request - DocOcrRequest
   * @returns DocOcrResponse
   */
  async docOcr(request: DocOcrRequest): Promise<DocOcrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.docOcrWithOptions(request, runtime);
  }

  /**
   * ekyc纯服务端接口
   * 
   * @param request - EkycVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EkycVerifyResponse
   */
  async ekycVerifyWithOptions(request: EkycVerifyRequest, runtime: $dara.RuntimeOptions): Promise<EkycVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorize)) {
      query["Authorize"] = request.authorize;
    }

    if (!$dara.isNull(request.crop)) {
      query["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.docName)) {
      query["DocName"] = request.docName;
    }

    if (!$dara.isNull(request.docNo)) {
      query["DocNo"] = request.docNo;
    }

    if (!$dara.isNull(request.docType)) {
      query["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.facePictureUrl)) {
      query["FacePictureUrl"] = request.facePictureUrl;
    }

    if (!$dara.isNull(request.idOcrPictureUrl)) {
      query["IdOcrPictureUrl"] = request.idOcrPictureUrl;
    }

    if (!$dara.isNull(request.idThreshold)) {
      query["IdThreshold"] = request.idThreshold;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.facePictureBase64)) {
      body["FacePictureBase64"] = request.facePictureBase64;
    }

    if (!$dara.isNull(request.idOcrPictureBase64)) {
      body["IdOcrPictureBase64"] = request.idOcrPictureBase64;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EkycVerify",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EkycVerifyResponse>(await this.callApi(params, req, runtime), new EkycVerifyResponse({}));
  }

  /**
   * ekyc纯服务端接口
   * 
   * @param request - EkycVerifyRequest
   * @returns EkycVerifyResponse
   */
  async ekycVerify(request: EkycVerifyRequest): Promise<EkycVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.ekycVerifyWithOptions(request, runtime);
  }

  /**
   * 人脸比对
   * 
   * @param request - FaceCompareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FaceCompareResponse
   */
  async faceCompareWithOptions(request: FaceCompareRequest, runtime: $dara.RuntimeOptions): Promise<FaceCompareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.sourceFacePictureUrl)) {
      query["SourceFacePictureUrl"] = request.sourceFacePictureUrl;
    }

    if (!$dara.isNull(request.targetFacePictureUrl)) {
      query["TargetFacePictureUrl"] = request.targetFacePictureUrl;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceFacePicture)) {
      body["SourceFacePicture"] = request.sourceFacePicture;
    }

    if (!$dara.isNull(request.targetFacePicture)) {
      body["TargetFacePicture"] = request.targetFacePicture;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FaceCompare",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<FaceCompareResponse>(await this.callApi(params, req, runtime), new FaceCompareResponse({}));
  }

  /**
   * 人脸比对
   * 
   * @param request - FaceCompareRequest
   * @returns FaceCompareResponse
   */
  async faceCompare(request: FaceCompareRequest): Promise<FaceCompareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.faceCompareWithOptions(request, runtime);
  }

  /**
   * 国际人脸保镖纯服务端接口
   * 
   * @param request - FaceGuardRiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FaceGuardRiskResponse
   */
  async faceGuardRiskWithOptions(request: FaceGuardRiskRequest, runtime: $dara.RuntimeOptions): Promise<FaceGuardRiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.deviceToken)) {
      query["DeviceToken"] = request.deviceToken;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FaceGuardRisk",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<FaceGuardRiskResponse>(await this.callApi(params, req, runtime), new FaceGuardRiskResponse({}));
  }

  /**
   * 国际人脸保镖纯服务端接口
   * 
   * @param request - FaceGuardRiskRequest
   * @returns FaceGuardRiskResponse
   */
  async faceGuardRisk(request: FaceGuardRiskRequest): Promise<FaceGuardRiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.faceGuardRiskWithOptions(request, runtime);
  }

  /**
   * 静默活体API 纯服务端
   * 
   * @param request - FaceLivenessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FaceLivenessResponse
   */
  async faceLivenessWithOptions(request: FaceLivenessRequest, runtime: $dara.RuntimeOptions): Promise<FaceLivenessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crop)) {
      query["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.facePictureUrl)) {
      query["FacePictureUrl"] = request.facePictureUrl;
    }

    if (!$dara.isNull(request.faceQuality)) {
      query["FaceQuality"] = request.faceQuality;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.occlusion)) {
      query["Occlusion"] = request.occlusion;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.facePictureBase64)) {
      body["FacePictureBase64"] = request.facePictureBase64;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FaceLiveness",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<FaceLivenessResponse>(await this.callApi(params, req, runtime), new FaceLivenessResponse({}));
  }

  /**
   * 静默活体API 纯服务端
   * 
   * @param request - FaceLivenessRequest
   * @returns FaceLivenessResponse
   */
  async faceLiveness(request: FaceLivenessRequest): Promise<FaceLivenessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.faceLivenessWithOptions(request, runtime);
  }

  /**
   * 防伪回调接口
   * 
   * @param request - FraudResultCallBackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FraudResultCallBackResponse
   */
  async fraudResultCallBackWithOptions(request: FraudResultCallBackRequest, runtime: $dara.RuntimeOptions): Promise<FraudResultCallBackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.extParams)) {
      query["ExtParams"] = request.extParams;
    }

    if (!$dara.isNull(request.resultCode)) {
      query["ResultCode"] = request.resultCode;
    }

    if (!$dara.isNull(request.verifyDeployEnv)) {
      query["VerifyDeployEnv"] = request.verifyDeployEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FraudResultCallBack",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<FraudResultCallBackResponse>(await this.callApi(params, req, runtime), new FraudResultCallBackResponse({}));
  }

  /**
   * 防伪回调接口
   * 
   * @param request - FraudResultCallBackRequest
   * @returns FraudResultCallBackResponse
   */
  async fraudResultCallBack(request: FraudResultCallBackRequest): Promise<FraudResultCallBackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fraudResultCallBackWithOptions(request, runtime);
  }

  /**
   * 身份二要素有效期核验
   * 
   * @param request - Id2MetaPeriodVerifyIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Id2MetaPeriodVerifyIntlResponse
   */
  async id2MetaPeriodVerifyIntlWithOptions(request: Id2MetaPeriodVerifyIntlRequest, runtime: $dara.RuntimeOptions): Promise<Id2MetaPeriodVerifyIntlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docName)) {
      body["DocName"] = request.docName;
    }

    if (!$dara.isNull(request.docNo)) {
      body["DocNo"] = request.docNo;
    }

    if (!$dara.isNull(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      body["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      body["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneCode)) {
      body["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.validityEndDate)) {
      body["ValidityEndDate"] = request.validityEndDate;
    }

    if (!$dara.isNull(request.validityStartDate)) {
      body["ValidityStartDate"] = request.validityStartDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Id2MetaPeriodVerifyIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<Id2MetaPeriodVerifyIntlResponse>(await this.callApi(params, req, runtime), new Id2MetaPeriodVerifyIntlResponse({}));
  }

  /**
   * 身份二要素有效期核验
   * 
   * @param request - Id2MetaPeriodVerifyIntlRequest
   * @returns Id2MetaPeriodVerifyIntlResponse
   */
  async id2MetaPeriodVerifyIntl(request: Id2MetaPeriodVerifyIntlRequest): Promise<Id2MetaPeriodVerifyIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.id2MetaPeriodVerifyIntlWithOptions(request, runtime);
  }

  /**
   * 身份二要素国际版接口
   * 
   * @param request - Id2MetaVerifyIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Id2MetaVerifyIntlResponse
   */
  async id2MetaVerifyIntlWithOptions(request: Id2MetaVerifyIntlRequest, runtime: $dara.RuntimeOptions): Promise<Id2MetaVerifyIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Id2MetaVerifyIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<Id2MetaVerifyIntlResponse>(await this.callApi(params, req, runtime), new Id2MetaVerifyIntlResponse({}));
  }

  /**
   * 身份二要素国际版接口
   * 
   * @param request - Id2MetaVerifyIntlRequest
   * @returns Id2MetaVerifyIntlResponse
   */
  async id2MetaVerifyIntl(request: Id2MetaVerifyIntlRequest): Promise<Id2MetaVerifyIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.id2MetaVerifyIntlWithOptions(request, runtime);
  }

  /**
   * 认证初始化
   * 
   * @param tmpReq - InitializeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitializeResponse
   */
  async initializeWithOptions(tmpReq: InitializeRequest, runtime: $dara.RuntimeOptions): Promise<InitializeResponse> {
    tmpReq.validate();
    let request = new InitializeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.docPageConfig)) {
      request.docPageConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docPageConfig, "DocPageConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appQualityCheck)) {
      query["AppQualityCheck"] = request.appQualityCheck;
    }

    if (!$dara.isNull(request.authorize)) {
      query["Authorize"] = request.authorize;
    }

    if (!$dara.isNull(request.callbackToken)) {
      query["CallbackToken"] = request.callbackToken;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.crop)) {
      query["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.dateOfBirth)) {
      query["DateOfBirth"] = request.dateOfBirth;
    }

    if (!$dara.isNull(request.dateOfExpiry)) {
      query["DateOfExpiry"] = request.dateOfExpiry;
    }

    if (!$dara.isNull(request.docPageConfigShrink)) {
      query["DocPageConfig"] = request.docPageConfigShrink;
    }

    if (!$dara.isNull(request.docScanMode)) {
      query["DocScanMode"] = request.docScanMode;
    }

    if (!$dara.isNull(request.docType)) {
      query["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.docVideo)) {
      query["DocVideo"] = request.docVideo;
    }

    if (!$dara.isNull(request.documentNumber)) {
      query["DocumentNumber"] = request.documentNumber;
    }

    if (!$dara.isNull(request.experienceCode)) {
      query["ExperienceCode"] = request.experienceCode;
    }

    if (!$dara.isNull(request.facePictureUrl)) {
      query["FacePictureUrl"] = request.facePictureUrl;
    }

    if (!$dara.isNull(request.idFaceQuality)) {
      query["IdFaceQuality"] = request.idFaceQuality;
    }

    if (!$dara.isNull(request.idSpoof)) {
      query["IdSpoof"] = request.idSpoof;
    }

    if (!$dara.isNull(request.idThreshold)) {
      query["IdThreshold"] = request.idThreshold;
    }

    if (!$dara.isNull(request.languageConfig)) {
      query["LanguageConfig"] = request.languageConfig;
    }

    if (!$dara.isNull(request.MRTDInput)) {
      query["MRTDInput"] = request.MRTDInput;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.metaInfo)) {
      query["MetaInfo"] = request.metaInfo;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.ocr)) {
      query["Ocr"] = request.ocr;
    }

    if (!$dara.isNull(request.procedurePriority)) {
      query["ProcedurePriority"] = request.procedurePriority;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productFlow)) {
      query["ProductFlow"] = request.productFlow;
    }

    if (!$dara.isNull(request.returnUrl)) {
      query["ReturnUrl"] = request.returnUrl;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.securityLevel)) {
      query["SecurityLevel"] = request.securityLevel;
    }

    if (!$dara.isNull(request.showAlbumIcon)) {
      query["ShowAlbumIcon"] = request.showAlbumIcon;
    }

    if (!$dara.isNull(request.showGuidePage)) {
      query["ShowGuidePage"] = request.showGuidePage;
    }

    if (!$dara.isNull(request.showOcrResult)) {
      query["ShowOcrResult"] = request.showOcrResult;
    }

    if (!$dara.isNull(request.styleConfig)) {
      query["StyleConfig"] = request.styleConfig;
    }

    if (!$dara.isNull(request.useNFC)) {
      query["UseNFC"] = request.useNFC;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.facePictureBase64)) {
      body["FacePictureBase64"] = request.facePictureBase64;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Initialize",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<InitializeResponse>(await this.callApi(params, req, runtime), new InitializeResponse({}));
  }

  /**
   * 认证初始化
   * 
   * @param request - InitializeRequest
   * @returns InitializeResponse
   */
  async initialize(request: InitializeRequest): Promise<InitializeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initializeWithOptions(request, runtime);
  }

  /**
   * 手机号三要素国际版接口
   * 
   * @param request - Mobile3MetaVerifyIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Mobile3MetaVerifyIntlResponse
   */
  async mobile3MetaVerifyIntlWithOptions(request: Mobile3MetaVerifyIntlRequest, runtime: $dara.RuntimeOptions): Promise<Mobile3MetaVerifyIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Mobile3MetaVerifyIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<Mobile3MetaVerifyIntlResponse>(await this.callApi(params, req, runtime), new Mobile3MetaVerifyIntlResponse({}));
  }

  /**
   * 手机号三要素国际版接口
   * 
   * @param request - Mobile3MetaVerifyIntlRequest
   * @returns Mobile3MetaVerifyIntlResponse
   */
  async mobile3MetaVerifyIntl(request: Mobile3MetaVerifyIntlRequest): Promise<Mobile3MetaVerifyIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobile3MetaVerifyIntlWithOptions(request, runtime);
  }

}
