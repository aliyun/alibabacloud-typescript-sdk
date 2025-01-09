// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CardOcrRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CardOcrResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CardOcrResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResultRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResultResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResultResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVerifyResultRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVerifyResultResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVerifyResultResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocOcrRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocOcrResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocOcrResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EkycVerifyRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EkycVerifyResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EkycVerifyResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceCompareRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceCompareResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceCompareResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceGuardRiskRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceGuardRiskResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceGuardRiskResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FraudResultCallBackRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FraudResultCallBackResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FraudResultCallBackResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaPeriodVerifyIntlRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaPeriodVerifyIntlResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaPeriodVerifyIntlResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaVerifyIntlRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaVerifyIntlResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaVerifyIntlResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeRequest extends $tea.Model {
  appQualityCheck?: string;
  authorize?: string;
  callbackToken?: string;
  callbackUrl?: string;
  /**
   * @example
   * *
   */
  crop?: string;
  docScanMode?: string;
  /**
   * @example
   * 01000000
   */
  docType?: string;
  docVideo?: string;
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
  static names(): { [key: string]: string } {
    return {
      appQualityCheck: 'AppQualityCheck',
      authorize: 'Authorize',
      callbackToken: 'CallbackToken',
      callbackUrl: 'CallbackUrl',
      crop: 'Crop',
      docScanMode: 'DocScanMode',
      docType: 'DocType',
      docVideo: 'DocVideo',
      experienceCode: 'ExperienceCode',
      facePictureBase64: 'FacePictureBase64',
      facePictureUrl: 'FacePictureUrl',
      idFaceQuality: 'IdFaceQuality',
      idSpoof: 'IdSpoof',
      idThreshold: 'IdThreshold',
      languageConfig: 'LanguageConfig',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      appQualityCheck: 'string',
      authorize: 'string',
      callbackToken: 'string',
      callbackUrl: 'string',
      crop: 'string',
      docScanMode: 'string',
      docType: 'string',
      docVideo: 'string',
      experienceCode: 'string',
      facePictureBase64: 'string',
      facePictureUrl: 'string',
      idFaceQuality: 'string',
      idSpoof: 'string',
      idThreshold: 'string',
      languageConfig: 'string',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaVerifyIntlRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaVerifyIntlResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaVerifyIntlResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CardOcrResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResultResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVerifyResultResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocOcrResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EkycVerifyResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceCompareResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceGuardRiskResponseBodyResult extends $tea.Model {
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
      riskExtends: 'RiskExtends',
      riskTags: 'RiskTags',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskExtends: 'string',
      riskTags: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessResponseBodyResultExtFaceInfo extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaPeriodVerifyIntlResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaVerifyIntlResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaVerifyIntlResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudauth-intl", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
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
  async cardOcrWithOptions(request: CardOcrRequest, runtime: $Util.RuntimeOptions): Promise<CardOcrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.docType)) {
      query["DocType"] = request.docType;
    }

    if (!Util.isUnset(request.idFaceQuality)) {
      query["IdFaceQuality"] = request.idFaceQuality;
    }

    if (!Util.isUnset(request.idOcrPictureUrl)) {
      query["IdOcrPictureUrl"] = request.idOcrPictureUrl;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!Util.isUnset(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!Util.isUnset(request.ocr)) {
      query["Ocr"] = request.ocr;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.spoof)) {
      query["Spoof"] = request.spoof;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.idOcrPictureBase64)) {
      body["IdOcrPictureBase64"] = request.idOcrPictureBase64;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CardOcrResponse>(await this.callApi(params, req, runtime), new CardOcrResponse({}));
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
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cardOcrWithOptions(request, runtime);
  }

  /**
   * 结果查询
   * 
   * @param request - CheckResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckResultResponse
   */
  async checkResultWithOptions(request: CheckResultRequest, runtime: $Util.RuntimeOptions): Promise<CheckResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.extraImageControlList)) {
      query["ExtraImageControlList"] = request.extraImageControlList;
    }

    if (!Util.isUnset(request.isReturnImage)) {
      query["IsReturnImage"] = request.isReturnImage;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!Util.isUnset(request.returnFiveCategorySpoofResult)) {
      query["ReturnFiveCategorySpoofResult"] = request.returnFiveCategorySpoofResult;
    }

    if (!Util.isUnset(request.transactionId)) {
      query["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CheckResultResponse>(await this.callApi(params, req, runtime), new CheckResultResponse({}));
  }

  /**
   * 结果查询
   * 
   * @param request - CheckResultRequest
   * @returns CheckResultResponse
   */
  async checkResult(request: CheckResultRequest): Promise<CheckResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkResultWithOptions(request, runtime);
  }

  /**
   * 删除用户认证记录结果
   * 
   * @param request - DeleteVerifyResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVerifyResultResponse
   */
  async deleteVerifyResultWithOptions(request: DeleteVerifyResultRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVerifyResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deleteAfterQuery)) {
      query["DeleteAfterQuery"] = request.deleteAfterQuery;
    }

    if (!Util.isUnset(request.deleteType)) {
      query["DeleteType"] = request.deleteType;
    }

    if (!Util.isUnset(request.transactionId)) {
      query["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteVerifyResultResponse>(await this.callApi(params, req, runtime), new DeleteVerifyResultResponse({}));
  }

  /**
   * 删除用户认证记录结果
   * 
   * @param request - DeleteVerifyResultRequest
   * @returns DeleteVerifyResultResponse
   */
  async deleteVerifyResult(request: DeleteVerifyResultRequest): Promise<DeleteVerifyResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVerifyResultWithOptions(request, runtime);
  }

  /**
   * 卡证ocr纯服务端
   * 
   * @param request - DocOcrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DocOcrResponse
   */
  async docOcrWithOptions(request: DocOcrRequest, runtime: $Util.RuntimeOptions): Promise<DocOcrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cardSide)) {
      query["CardSide"] = request.cardSide;
    }

    if (!Util.isUnset(request.docType)) {
      query["DocType"] = request.docType;
    }

    if (!Util.isUnset(request.idFaceQuality)) {
      query["IdFaceQuality"] = request.idFaceQuality;
    }

    if (!Util.isUnset(request.idOcrPictureUrl)) {
      query["IdOcrPictureUrl"] = request.idOcrPictureUrl;
    }

    if (!Util.isUnset(request.idThreshold)) {
      query["IdThreshold"] = request.idThreshold;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!Util.isUnset(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!Util.isUnset(request.ocr)) {
      query["Ocr"] = request.ocr;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.spoof)) {
      query["Spoof"] = request.spoof;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.idOcrPictureBase64)) {
      body["IdOcrPictureBase64"] = request.idOcrPictureBase64;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DocOcrResponse>(await this.callApi(params, req, runtime), new DocOcrResponse({}));
  }

  /**
   * 卡证ocr纯服务端
   * 
   * @param request - DocOcrRequest
   * @returns DocOcrResponse
   */
  async docOcr(request: DocOcrRequest): Promise<DocOcrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.docOcrWithOptions(request, runtime);
  }

  /**
   * ekyc纯服务端接口
   * 
   * @param request - EkycVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EkycVerifyResponse
   */
  async ekycVerifyWithOptions(request: EkycVerifyRequest, runtime: $Util.RuntimeOptions): Promise<EkycVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorize)) {
      query["Authorize"] = request.authorize;
    }

    if (!Util.isUnset(request.crop)) {
      query["Crop"] = request.crop;
    }

    if (!Util.isUnset(request.docName)) {
      query["DocName"] = request.docName;
    }

    if (!Util.isUnset(request.docNo)) {
      query["DocNo"] = request.docNo;
    }

    if (!Util.isUnset(request.docType)) {
      query["DocType"] = request.docType;
    }

    if (!Util.isUnset(request.facePictureUrl)) {
      query["FacePictureUrl"] = request.facePictureUrl;
    }

    if (!Util.isUnset(request.idOcrPictureUrl)) {
      query["IdOcrPictureUrl"] = request.idOcrPictureUrl;
    }

    if (!Util.isUnset(request.idThreshold)) {
      query["IdThreshold"] = request.idThreshold;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!Util.isUnset(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.facePictureBase64)) {
      body["FacePictureBase64"] = request.facePictureBase64;
    }

    if (!Util.isUnset(request.idOcrPictureBase64)) {
      body["IdOcrPictureBase64"] = request.idOcrPictureBase64;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<EkycVerifyResponse>(await this.callApi(params, req, runtime), new EkycVerifyResponse({}));
  }

  /**
   * ekyc纯服务端接口
   * 
   * @param request - EkycVerifyRequest
   * @returns EkycVerifyResponse
   */
  async ekycVerify(request: EkycVerifyRequest): Promise<EkycVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ekycVerifyWithOptions(request, runtime);
  }

  /**
   * 人脸比对
   * 
   * @param request - FaceCompareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FaceCompareResponse
   */
  async faceCompareWithOptions(request: FaceCompareRequest, runtime: $Util.RuntimeOptions): Promise<FaceCompareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!Util.isUnset(request.sourceFacePictureUrl)) {
      query["SourceFacePictureUrl"] = request.sourceFacePictureUrl;
    }

    if (!Util.isUnset(request.targetFacePictureUrl)) {
      query["TargetFacePictureUrl"] = request.targetFacePictureUrl;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sourceFacePicture)) {
      body["SourceFacePicture"] = request.sourceFacePicture;
    }

    if (!Util.isUnset(request.targetFacePicture)) {
      body["TargetFacePicture"] = request.targetFacePicture;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<FaceCompareResponse>(await this.callApi(params, req, runtime), new FaceCompareResponse({}));
  }

  /**
   * 人脸比对
   * 
   * @param request - FaceCompareRequest
   * @returns FaceCompareResponse
   */
  async faceCompare(request: FaceCompareRequest): Promise<FaceCompareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.faceCompareWithOptions(request, runtime);
  }

  /**
   * 国际人脸保镖纯服务端接口
   * 
   * @param request - FaceGuardRiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FaceGuardRiskResponse
   */
  async faceGuardRiskWithOptions(request: FaceGuardRiskRequest, runtime: $Util.RuntimeOptions): Promise<FaceGuardRiskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.deviceToken)) {
      query["DeviceToken"] = request.deviceToken;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<FaceGuardRiskResponse>(await this.callApi(params, req, runtime), new FaceGuardRiskResponse({}));
  }

  /**
   * 国际人脸保镖纯服务端接口
   * 
   * @param request - FaceGuardRiskRequest
   * @returns FaceGuardRiskResponse
   */
  async faceGuardRisk(request: FaceGuardRiskRequest): Promise<FaceGuardRiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.faceGuardRiskWithOptions(request, runtime);
  }

  /**
   * 静默活体API 纯服务端
   * 
   * @param request - FaceLivenessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FaceLivenessResponse
   */
  async faceLivenessWithOptions(request: FaceLivenessRequest, runtime: $Util.RuntimeOptions): Promise<FaceLivenessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crop)) {
      query["Crop"] = request.crop;
    }

    if (!Util.isUnset(request.facePictureUrl)) {
      query["FacePictureUrl"] = request.facePictureUrl;
    }

    if (!Util.isUnset(request.faceQuality)) {
      query["FaceQuality"] = request.faceQuality;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!Util.isUnset(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!Util.isUnset(request.occlusion)) {
      query["Occlusion"] = request.occlusion;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.facePictureBase64)) {
      body["FacePictureBase64"] = request.facePictureBase64;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<FaceLivenessResponse>(await this.callApi(params, req, runtime), new FaceLivenessResponse({}));
  }

  /**
   * 静默活体API 纯服务端
   * 
   * @param request - FaceLivenessRequest
   * @returns FaceLivenessResponse
   */
  async faceLiveness(request: FaceLivenessRequest): Promise<FaceLivenessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.faceLivenessWithOptions(request, runtime);
  }

  /**
   * 防伪回调接口
   * 
   * @param request - FraudResultCallBackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FraudResultCallBackResponse
   */
  async fraudResultCallBackWithOptions(request: FraudResultCallBackRequest, runtime: $Util.RuntimeOptions): Promise<FraudResultCallBackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!Util.isUnset(request.extParams)) {
      query["ExtParams"] = request.extParams;
    }

    if (!Util.isUnset(request.resultCode)) {
      query["ResultCode"] = request.resultCode;
    }

    if (!Util.isUnset(request.verifyDeployEnv)) {
      query["VerifyDeployEnv"] = request.verifyDeployEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<FraudResultCallBackResponse>(await this.callApi(params, req, runtime), new FraudResultCallBackResponse({}));
  }

  /**
   * 防伪回调接口
   * 
   * @param request - FraudResultCallBackRequest
   * @returns FraudResultCallBackResponse
   */
  async fraudResultCallBack(request: FraudResultCallBackRequest): Promise<FraudResultCallBackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fraudResultCallBackWithOptions(request, runtime);
  }

  /**
   * 身份二要素有效期核验
   * 
   * @param request - Id2MetaPeriodVerifyIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Id2MetaPeriodVerifyIntlResponse
   */
  async id2MetaPeriodVerifyIntlWithOptions(request: Id2MetaPeriodVerifyIntlRequest, runtime: $Util.RuntimeOptions): Promise<Id2MetaPeriodVerifyIntlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docName)) {
      body["DocName"] = request.docName;
    }

    if (!Util.isUnset(request.docNo)) {
      body["DocNo"] = request.docNo;
    }

    if (!Util.isUnset(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      body["MerchantBizId"] = request.merchantBizId;
    }

    if (!Util.isUnset(request.merchantUserId)) {
      body["MerchantUserId"] = request.merchantUserId;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.sceneCode)) {
      body["SceneCode"] = request.sceneCode;
    }

    if (!Util.isUnset(request.validityEndDate)) {
      body["ValidityEndDate"] = request.validityEndDate;
    }

    if (!Util.isUnset(request.validityStartDate)) {
      body["ValidityStartDate"] = request.validityStartDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<Id2MetaPeriodVerifyIntlResponse>(await this.callApi(params, req, runtime), new Id2MetaPeriodVerifyIntlResponse({}));
  }

  /**
   * 身份二要素有效期核验
   * 
   * @param request - Id2MetaPeriodVerifyIntlRequest
   * @returns Id2MetaPeriodVerifyIntlResponse
   */
  async id2MetaPeriodVerifyIntl(request: Id2MetaPeriodVerifyIntlRequest): Promise<Id2MetaPeriodVerifyIntlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.id2MetaPeriodVerifyIntlWithOptions(request, runtime);
  }

  /**
   * 身份二要素国际版接口
   * 
   * @param request - Id2MetaVerifyIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Id2MetaVerifyIntlResponse
   */
  async id2MetaVerifyIntlWithOptions(request: Id2MetaVerifyIntlRequest, runtime: $Util.RuntimeOptions): Promise<Id2MetaVerifyIntlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!Util.isUnset(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<Id2MetaVerifyIntlResponse>(await this.callApi(params, req, runtime), new Id2MetaVerifyIntlResponse({}));
  }

  /**
   * 身份二要素国际版接口
   * 
   * @param request - Id2MetaVerifyIntlRequest
   * @returns Id2MetaVerifyIntlResponse
   */
  async id2MetaVerifyIntl(request: Id2MetaVerifyIntlRequest): Promise<Id2MetaVerifyIntlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.id2MetaVerifyIntlWithOptions(request, runtime);
  }

  /**
   * 认证初始化
   * 
   * @param request - InitializeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitializeResponse
   */
  async initializeWithOptions(request: InitializeRequest, runtime: $Util.RuntimeOptions): Promise<InitializeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appQualityCheck)) {
      query["AppQualityCheck"] = request.appQualityCheck;
    }

    if (!Util.isUnset(request.authorize)) {
      query["Authorize"] = request.authorize;
    }

    if (!Util.isUnset(request.callbackToken)) {
      query["CallbackToken"] = request.callbackToken;
    }

    if (!Util.isUnset(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!Util.isUnset(request.crop)) {
      query["Crop"] = request.crop;
    }

    if (!Util.isUnset(request.docScanMode)) {
      query["DocScanMode"] = request.docScanMode;
    }

    if (!Util.isUnset(request.docType)) {
      query["DocType"] = request.docType;
    }

    if (!Util.isUnset(request.docVideo)) {
      query["DocVideo"] = request.docVideo;
    }

    if (!Util.isUnset(request.experienceCode)) {
      query["ExperienceCode"] = request.experienceCode;
    }

    if (!Util.isUnset(request.facePictureUrl)) {
      query["FacePictureUrl"] = request.facePictureUrl;
    }

    if (!Util.isUnset(request.idFaceQuality)) {
      query["IdFaceQuality"] = request.idFaceQuality;
    }

    if (!Util.isUnset(request.idSpoof)) {
      query["IdSpoof"] = request.idSpoof;
    }

    if (!Util.isUnset(request.idThreshold)) {
      query["IdThreshold"] = request.idThreshold;
    }

    if (!Util.isUnset(request.languageConfig)) {
      query["LanguageConfig"] = request.languageConfig;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!Util.isUnset(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!Util.isUnset(request.metaInfo)) {
      query["MetaInfo"] = request.metaInfo;
    }

    if (!Util.isUnset(request.model)) {
      query["Model"] = request.model;
    }

    if (!Util.isUnset(request.ocr)) {
      query["Ocr"] = request.ocr;
    }

    if (!Util.isUnset(request.procedurePriority)) {
      query["ProcedurePriority"] = request.procedurePriority;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productFlow)) {
      query["ProductFlow"] = request.productFlow;
    }

    if (!Util.isUnset(request.returnUrl)) {
      query["ReturnUrl"] = request.returnUrl;
    }

    if (!Util.isUnset(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!Util.isUnset(request.securityLevel)) {
      query["SecurityLevel"] = request.securityLevel;
    }

    if (!Util.isUnset(request.showAlbumIcon)) {
      query["ShowAlbumIcon"] = request.showAlbumIcon;
    }

    if (!Util.isUnset(request.showGuidePage)) {
      query["ShowGuidePage"] = request.showGuidePage;
    }

    if (!Util.isUnset(request.showOcrResult)) {
      query["ShowOcrResult"] = request.showOcrResult;
    }

    if (!Util.isUnset(request.styleConfig)) {
      query["StyleConfig"] = request.styleConfig;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.facePictureBase64)) {
      body["FacePictureBase64"] = request.facePictureBase64;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<InitializeResponse>(await this.callApi(params, req, runtime), new InitializeResponse({}));
  }

  /**
   * 认证初始化
   * 
   * @param request - InitializeRequest
   * @returns InitializeResponse
   */
  async initialize(request: InitializeRequest): Promise<InitializeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initializeWithOptions(request, runtime);
  }

  /**
   * 手机号三要素国际版接口
   * 
   * @param request - Mobile3MetaVerifyIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Mobile3MetaVerifyIntlResponse
   */
  async mobile3MetaVerifyIntlWithOptions(request: Mobile3MetaVerifyIntlRequest, runtime: $Util.RuntimeOptions): Promise<Mobile3MetaVerifyIntlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<Mobile3MetaVerifyIntlResponse>(await this.callApi(params, req, runtime), new Mobile3MetaVerifyIntlResponse({}));
  }

  /**
   * 手机号三要素国际版接口
   * 
   * @param request - Mobile3MetaVerifyIntlRequest
   * @returns Mobile3MetaVerifyIntlResponse
   */
  async mobile3MetaVerifyIntl(request: Mobile3MetaVerifyIntlRequest): Promise<Mobile3MetaVerifyIntlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mobile3MetaVerifyIntlWithOptions(request, runtime);
  }

}
