// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CardOcrRequest extends $tea.Model {
  docType?: string;
  idFaceQuality?: string;
  idOcrPictureBase64?: string;
  idOcrPictureUrl?: string;
  merchantBizId?: string;
  merchantUserId?: string;
  ocr?: string;
  productCode?: string;
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
  code?: string;
  message?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CardOcrResponseBody;
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
  extraImageControlList?: string;
  isReturnImage?: string;
  merchantBizId?: string;
  returnFiveCategorySpoofResult?: string;
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
  code?: string;
  message?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckResultResponseBody;
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

export class DeletePictureRequest extends $tea.Model {
  deletePicAfterQuery?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      deletePicAfterQuery: 'DeletePicAfterQuery',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletePicAfterQuery: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePictureResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: DeletePictureResponseBodyResult;
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
      result: DeletePictureResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePictureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePictureResponseBody;
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
      body: DeletePictureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVerifyResultRequest extends $tea.Model {
  deleteAfterQuery?: string;
  deleteType?: string;
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
  code?: string;
  message?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteVerifyResultResponseBody;
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

export class DescribeAddressLabelsRequest extends $tea.Model {
  address?: string;
  coin?: string;
  merchantBizId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      coin: 'Coin',
      merchantBizId: 'MerchantBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      coin: 'string',
      merchantBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressLabelsResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeAddressLabelsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeAddressLabelsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressLabelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAddressLabelsResponseBody;
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
      body: DescribeAddressLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressOverviewRequest extends $tea.Model {
  address?: string;
  coin?: string;
  merchantBizId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      coin: 'Coin',
      merchantBizId: 'MerchantBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      coin: 'string',
      merchantBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressOverviewResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeAddressOverviewResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeAddressOverviewResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressOverviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAddressOverviewResponseBody;
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
      body: DescribeAddressOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaliciousAddressRequest extends $tea.Model {
  coin?: string;
  end?: string;
  merchantBizId?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      coin: 'Coin',
      end: 'End',
      merchantBizId: 'MerchantBizId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coin: 'string',
      end: 'string',
      merchantBizId: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaliciousAddressResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeMaliciousAddressResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeMaliciousAddressResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaliciousAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMaliciousAddressResponseBody;
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
      body: DescribeMaliciousAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskScoreRequest extends $tea.Model {
  address?: string;
  coin?: string;
  merchantBizId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      coin: 'Coin',
      merchantBizId: 'MerchantBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      coin: 'string',
      merchantBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskScoreResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeRiskScoreResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeRiskScoreResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskScoreResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRiskScoreResponseBody;
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
      body: DescribeRiskScoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransactionsListRequest extends $tea.Model {
  address?: string;
  coin?: string;
  endTimestamp?: number;
  merchantBizId?: string;
  page?: number;
  startTimestamp?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      coin: 'Coin',
      endTimestamp: 'EndTimestamp',
      merchantBizId: 'MerchantBizId',
      page: 'Page',
      startTimestamp: 'StartTimestamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      coin: 'string',
      endTimestamp: 'number',
      merchantBizId: 'string',
      page: 'number',
      startTimestamp: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransactionsListResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeTransactionsListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeTransactionsListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransactionsListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTransactionsListResponseBody;
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
      body: DescribeTransactionsListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocOcrRequest extends $tea.Model {
  docType?: string;
  idFaceQuality?: string;
  idOcrPictureBase64?: string;
  idOcrPictureUrl?: string;
  merchantBizId?: string;
  merchantUserId?: string;
  ocr?: string;
  productCode?: string;
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

export class DocOcrResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DocOcrResponseBody;
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
  authorize?: string;
  crop?: string;
  docName?: string;
  docNo?: string;
  docType?: string;
  facePictureBase64?: string;
  facePictureUrl?: string;
  idOcrPictureBase64?: string;
  idOcrPictureUrl?: string;
  merchantBizId?: string;
  merchantUserId?: string;
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
  code?: string;
  message?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: EkycVerifyResponseBody;
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
  merchantBizId?: string;
  sourceFacePicture?: string;
  sourceFacePictureUrl?: string;
  targetFacePicture?: string;
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
  code?: string;
  message?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: FaceCompareResponseBody;
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

export class FaceLivenessRequest extends $tea.Model {
  crop?: string;
  facePictureBase64?: string;
  facePictureUrl?: string;
  faceQuality?: string;
  merchantBizId?: string;
  merchantUserId?: string;
  occlusion?: string;
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
  code?: string;
  message?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: FaceLivenessResponseBody;
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
  certifyId?: string;
  extParams?: string;
  resultCode?: string;
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
  code?: string;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: FraudResultCallBackResponseBody;
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

export class InitializeRequest extends $tea.Model {
  authorize?: string;
  crop?: string;
  docScanMode?: string;
  docType?: string;
  facePictureBase64?: string;
  facePictureUrl?: string;
  flowType?: string;
  idFaceQuality?: string;
  idSpoof?: string;
  merchantBizId?: string;
  merchantUserId?: string;
  metaInfo?: string;
  ocr?: string;
  operationMode?: string;
  pages?: string;
  productCode?: string;
  productConfig?: string;
  productFlow?: string;
  returnUrl?: string;
  sceneCode?: string;
  serviceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      authorize: 'Authorize',
      crop: 'Crop',
      docScanMode: 'DocScanMode',
      docType: 'DocType',
      facePictureBase64: 'FacePictureBase64',
      facePictureUrl: 'FacePictureUrl',
      flowType: 'FlowType',
      idFaceQuality: 'IdFaceQuality',
      idSpoof: 'IdSpoof',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      metaInfo: 'MetaInfo',
      ocr: 'Ocr',
      operationMode: 'OperationMode',
      pages: 'Pages',
      productCode: 'ProductCode',
      productConfig: 'ProductConfig',
      productFlow: 'ProductFlow',
      returnUrl: 'ReturnUrl',
      sceneCode: 'SceneCode',
      serviceLevel: 'ServiceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorize: 'string',
      crop: 'string',
      docScanMode: 'string',
      docType: 'string',
      facePictureBase64: 'string',
      facePictureUrl: 'string',
      flowType: 'string',
      idFaceQuality: 'string',
      idSpoof: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      metaInfo: 'string',
      ocr: 'string',
      operationMode: 'string',
      pages: 'string',
      productCode: 'string',
      productConfig: 'string',
      productFlow: 'string',
      returnUrl: 'string',
      sceneCode: 'string',
      serviceLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: InitializeResponseBody;
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

export class CardOcrResponseBodyResult extends $tea.Model {
  extCardInfo?: string;
  extIdInfo?: string;
  passed?: string;
  subCode?: string;
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
  ekycResult?: string;
  extBasicInfo?: string;
  extFaceInfo?: string;
  extIdInfo?: string;
  extRiskInfo?: string;
  passed?: string;
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      ekycResult: 'EkycResult',
      extBasicInfo: 'ExtBasicInfo',
      extFaceInfo: 'ExtFaceInfo',
      extIdInfo: 'ExtIdInfo',
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
      extRiskInfo: 'string',
      passed: 'string',
      subCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePictureResponseBodyResult extends $tea.Model {
  deleteResult?: string;
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

export class DeleteVerifyResultResponseBodyResult extends $tea.Model {
  deleteResult?: string;
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

export class DescribeAddressLabelsResponseBodyData extends $tea.Model {
  labelList?: string[];
  static names(): { [key: string]: string } {
    return {
      labelList: 'LabelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressOverviewResponseBodyData extends $tea.Model {
  balance?: number;
  firstSeen?: number;
  lastSeen?: number;
  receivedTxsCount?: number;
  spentTxsCount?: number;
  totalReceived?: number;
  totalSpent?: number;
  txsCount?: number;
  static names(): { [key: string]: string } {
    return {
      balance: 'Balance',
      firstSeen: 'FirstSeen',
      lastSeen: 'LastSeen',
      receivedTxsCount: 'ReceivedTxsCount',
      spentTxsCount: 'SpentTxsCount',
      totalReceived: 'TotalReceived',
      totalSpent: 'TotalSpent',
      txsCount: 'TxsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balance: 'number',
      firstSeen: 'number',
      lastSeen: 'number',
      receivedTxsCount: 'number',
      spentTxsCount: 'number',
      totalReceived: 'number',
      totalSpent: 'number',
      txsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaliciousAddressResponseBodyData extends $tea.Model {
  addTime?: string;
  address?: string;
  coin?: string;
  detail?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      address: 'Address',
      coin: 'Coin',
      detail: 'Detail',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      address: 'string',
      coin: 'string',
      detail: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskScoreResponseBodyData extends $tea.Model {
  detailList?: string[];
  hackingEvent?: string;
  riskLevel?: string;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      detailList: 'DetailList',
      hackingEvent: 'HackingEvent',
      riskLevel: 'RiskLevel',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailList: { 'type': 'array', 'itemType': 'string' },
      hackingEvent: 'string',
      riskLevel: 'string',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransactionsListResponseBodyDataIn extends $tea.Model {
  address?: string;
  amount?: number;
  label?: string;
  txHashList?: string[];
  type?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      amount: 'Amount',
      label: 'Label',
      txHashList: 'TxHashList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      amount: 'number',
      label: 'string',
      txHashList: { 'type': 'array', 'itemType': 'string' },
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransactionsListResponseBodyDataOut extends $tea.Model {
  address?: string;
  amount?: number;
  label?: string;
  txHashList?: string[];
  type?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      amount: 'Amount',
      label: 'Label',
      txHashList: 'TxHashList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      amount: 'number',
      label: 'string',
      txHashList: { 'type': 'array', 'itemType': 'string' },
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransactionsListResponseBodyData extends $tea.Model {
  in?: DescribeTransactionsListResponseBodyDataIn[];
  out?: DescribeTransactionsListResponseBodyDataOut[];
  page?: number;
  totalPages?: number;
  transactionsOnPage?: number;
  static names(): { [key: string]: string } {
    return {
      in: 'In',
      out: 'Out',
      page: 'Page',
      totalPages: 'TotalPages',
      transactionsOnPage: 'TransactionsOnPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      in: { 'type': 'array', 'itemType': DescribeTransactionsListResponseBodyDataIn },
      out: { 'type': 'array', 'itemType': DescribeTransactionsListResponseBodyDataOut },
      page: 'number',
      totalPages: 'number',
      transactionsOnPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocOcrResponseBodyResult extends $tea.Model {
  extIdInfo?: string;
  passed?: string;
  subCode?: string;
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
  extFaceInfo?: string;
  extIdInfo?: string;
  passed?: string;
  subCode?: string;
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
  faceComparisonScore?: number;
  passed?: string;
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

export class FaceLivenessResponseBodyResultExtFaceInfo extends $tea.Model {
  faceAttack?: string;
  faceQualityScore?: number;
  occlusionResult?: string;
  static names(): { [key: string]: string } {
    return {
      faceAttack: 'FaceAttack',
      faceQualityScore: 'FaceQualityScore',
      occlusionResult: 'OcclusionResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAttack: 'string',
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
  passed?: string;
  subCode?: string;
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

export class InitializeResponseBodyResult extends $tea.Model {
  clientCfg?: string;
  transactionId?: string;
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
    * @deprecated : CardOcr is deprecated, please use Cloudauth-intl::2022-08-09::DocOcr instead.
    *
    * @param request CardOcrRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CardOcrResponse
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

    if (!Util.isUnset(request.idOcrPictureBase64)) {
      query["IdOcrPictureBase64"] = request.idOcrPictureBase64;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
    * @deprecated : CardOcr is deprecated, please use Cloudauth-intl::2022-08-09::DocOcr instead.
    *
    * @param request CardOcrRequest
    * @return CardOcrResponse
   */
  // Deprecated
  async cardOcr(request: CardOcrRequest): Promise<CardOcrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cardOcrWithOptions(request, runtime);
  }

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

  async checkResult(request: CheckResultRequest): Promise<CheckResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkResultWithOptions(request, runtime);
  }

  async deletePictureWithOptions(request: DeletePictureRequest, runtime: $Util.RuntimeOptions): Promise<DeletePictureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deletePicAfterQuery)) {
      query["DeletePicAfterQuery"] = request.deletePicAfterQuery;
    }

    if (!Util.isUnset(request.transactionId)) {
      query["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePicture",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePictureResponse>(await this.callApi(params, req, runtime), new DeletePictureResponse({}));
  }

  async deletePicture(request: DeletePictureRequest): Promise<DeletePictureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePictureWithOptions(request, runtime);
  }

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

  async deleteVerifyResult(request: DeleteVerifyResultRequest): Promise<DeleteVerifyResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVerifyResultWithOptions(request, runtime);
  }

  async describeAddressLabelsWithOptions(request: DescribeAddressLabelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAddressLabelsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.coin)) {
      query["Coin"] = request.coin;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAddressLabels",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAddressLabelsResponse>(await this.callApi(params, req, runtime), new DescribeAddressLabelsResponse({}));
  }

  async describeAddressLabels(request: DescribeAddressLabelsRequest): Promise<DescribeAddressLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAddressLabelsWithOptions(request, runtime);
  }

  async describeAddressOverviewWithOptions(request: DescribeAddressOverviewRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAddressOverviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.coin)) {
      query["Coin"] = request.coin;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAddressOverview",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAddressOverviewResponse>(await this.callApi(params, req, runtime), new DescribeAddressOverviewResponse({}));
  }

  async describeAddressOverview(request: DescribeAddressOverviewRequest): Promise<DescribeAddressOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAddressOverviewWithOptions(request, runtime);
  }

  async describeMaliciousAddressWithOptions(request: DescribeMaliciousAddressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMaliciousAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.coin)) {
      query["Coin"] = request.coin;
    }

    if (!Util.isUnset(request.end)) {
      query["End"] = request.end;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMaliciousAddress",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMaliciousAddressResponse>(await this.callApi(params, req, runtime), new DescribeMaliciousAddressResponse({}));
  }

  async describeMaliciousAddress(request: DescribeMaliciousAddressRequest): Promise<DescribeMaliciousAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMaliciousAddressWithOptions(request, runtime);
  }

  async describeRiskScoreWithOptions(request: DescribeRiskScoreRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskScoreResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.coin)) {
      query["Coin"] = request.coin;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRiskScore",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskScoreResponse>(await this.callApi(params, req, runtime), new DescribeRiskScoreResponse({}));
  }

  async describeRiskScore(request: DescribeRiskScoreRequest): Promise<DescribeRiskScoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskScoreWithOptions(request, runtime);
  }

  async describeTransactionsListWithOptions(request: DescribeTransactionsListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTransactionsListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.coin)) {
      query["Coin"] = request.coin;
    }

    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTransactionsList",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTransactionsListResponse>(await this.callApi(params, req, runtime), new DescribeTransactionsListResponse({}));
  }

  async describeTransactionsList(request: DescribeTransactionsListRequest): Promise<DescribeTransactionsListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTransactionsListWithOptions(request, runtime);
  }

  async docOcrWithOptions(request: DocOcrRequest, runtime: $Util.RuntimeOptions): Promise<DocOcrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.docType)) {
      query["DocType"] = request.docType;
    }

    if (!Util.isUnset(request.idFaceQuality)) {
      query["IdFaceQuality"] = request.idFaceQuality;
    }

    if (!Util.isUnset(request.idOcrPictureBase64)) {
      query["IdOcrPictureBase64"] = request.idOcrPictureBase64;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
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

  async docOcr(request: DocOcrRequest): Promise<DocOcrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.docOcrWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.facePictureBase64)) {
      query["FacePictureBase64"] = request.facePictureBase64;
    }

    if (!Util.isUnset(request.facePictureUrl)) {
      query["FacePictureUrl"] = request.facePictureUrl;
    }

    if (!Util.isUnset(request.idOcrPictureBase64)) {
      query["IdOcrPictureBase64"] = request.idOcrPictureBase64;
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

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
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

  async ekycVerify(request: EkycVerifyRequest): Promise<EkycVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ekycVerifyWithOptions(request, runtime);
  }

  async faceCompareWithOptions(request: FaceCompareRequest, runtime: $Util.RuntimeOptions): Promise<FaceCompareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!Util.isUnset(request.sourceFacePicture)) {
      query["SourceFacePicture"] = request.sourceFacePicture;
    }

    if (!Util.isUnset(request.sourceFacePictureUrl)) {
      query["SourceFacePictureUrl"] = request.sourceFacePictureUrl;
    }

    if (!Util.isUnset(request.targetFacePicture)) {
      query["TargetFacePicture"] = request.targetFacePicture;
    }

    if (!Util.isUnset(request.targetFacePictureUrl)) {
      query["TargetFacePictureUrl"] = request.targetFacePictureUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
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

  async faceCompare(request: FaceCompareRequest): Promise<FaceCompareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.faceCompareWithOptions(request, runtime);
  }

  async faceLivenessWithOptions(request: FaceLivenessRequest, runtime: $Util.RuntimeOptions): Promise<FaceLivenessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crop)) {
      query["Crop"] = request.crop;
    }

    if (!Util.isUnset(request.facePictureBase64)) {
      query["FacePictureBase64"] = request.facePictureBase64;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
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

  async faceLiveness(request: FaceLivenessRequest): Promise<FaceLivenessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.faceLivenessWithOptions(request, runtime);
  }

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

  async fraudResultCallBack(request: FraudResultCallBackRequest): Promise<FraudResultCallBackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fraudResultCallBackWithOptions(request, runtime);
  }

  async initializeWithOptions(request: InitializeRequest, runtime: $Util.RuntimeOptions): Promise<InitializeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorize)) {
      query["Authorize"] = request.authorize;
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

    if (!Util.isUnset(request.facePictureBase64)) {
      query["FacePictureBase64"] = request.facePictureBase64;
    }

    if (!Util.isUnset(request.facePictureUrl)) {
      query["FacePictureUrl"] = request.facePictureUrl;
    }

    if (!Util.isUnset(request.flowType)) {
      query["FlowType"] = request.flowType;
    }

    if (!Util.isUnset(request.idFaceQuality)) {
      query["IdFaceQuality"] = request.idFaceQuality;
    }

    if (!Util.isUnset(request.idSpoof)) {
      query["IdSpoof"] = request.idSpoof;
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

    if (!Util.isUnset(request.ocr)) {
      query["Ocr"] = request.ocr;
    }

    if (!Util.isUnset(request.operationMode)) {
      query["OperationMode"] = request.operationMode;
    }

    if (!Util.isUnset(request.pages)) {
      query["Pages"] = request.pages;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productConfig)) {
      query["ProductConfig"] = request.productConfig;
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

    if (!Util.isUnset(request.serviceLevel)) {
      query["ServiceLevel"] = request.serviceLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
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

  async initialize(request: InitializeRequest): Promise<InitializeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initializeWithOptions(request, runtime);
  }

}
