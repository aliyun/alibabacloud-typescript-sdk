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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAddressLabelsResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAddressOverviewResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMaliciousAddressResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRiskScoreResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTransactionsListResponseBody;
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

export class DescribeWeb3AddressLabelsRequest extends $tea.Model {
  address?: string;
  chainShortName?: string;
  merchantBizId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      chainShortName: 'ChainShortName',
      merchantBizId: 'MerchantBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      chainShortName: 'string',
      merchantBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWeb3AddressLabelsResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeWeb3AddressLabelsResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeWeb3AddressLabelsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWeb3AddressLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWeb3AddressLabelsResponseBody;
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
      body: DescribeWeb3AddressLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWeb3RiskScoreRequest extends $tea.Model {
  chainShortName?: string;
  depth?: number;
  merchantBizId?: string;
  objectId?: string;
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      chainShortName: 'ChainShortName',
      depth: 'Depth',
      merchantBizId: 'MerchantBizId',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainShortName: 'string',
      depth: 'number',
      merchantBizId: 'string',
      objectId: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWeb3RiskScoreResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeWeb3RiskScoreResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeWeb3RiskScoreResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWeb3RiskScoreResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWeb3RiskScoreResponseBody;
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
      body: DescribeWeb3RiskScoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWeb3TransactionLabelsRequest extends $tea.Model {
  chainShortName?: string;
  merchantBizId?: string;
  transaction?: string;
  static names(): { [key: string]: string } {
    return {
      chainShortName: 'ChainShortName',
      merchantBizId: 'MerchantBizId',
      transaction: 'Transaction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainShortName: 'string',
      merchantBizId: 'string',
      transaction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWeb3TransactionLabelsResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeWeb3TransactionLabelsResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeWeb3TransactionLabelsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWeb3TransactionLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWeb3TransactionLabelsResponseBody;
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
      body: DescribeWeb3TransactionLabelsResponseBody,
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

export class Id2MetaVerifyIntlRequest extends $tea.Model {
  identifyNum?: string;
  paramType?: string;
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
  code?: string;
  message?: string;
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
  authorize?: string;
  callbackToken?: string;
  callbackUrl?: string;
  crop?: string;
  docScanMode?: string;
  docType?: string;
  facePictureBase64?: string;
  facePictureUrl?: string;
  idFaceQuality?: string;
  idSpoof?: string;
  languageConfig?: string;
  merchantBizId?: string;
  merchantUserId?: string;
  metaInfo?: string;
  ocr?: string;
  productCode?: string;
  productFlow?: string;
  returnUrl?: string;
  sceneCode?: string;
  securityLevel?: string;
  styleConfig?: string;
  static names(): { [key: string]: string } {
    return {
      authorize: 'Authorize',
      callbackToken: 'CallbackToken',
      callbackUrl: 'CallbackUrl',
      crop: 'Crop',
      docScanMode: 'DocScanMode',
      docType: 'DocType',
      facePictureBase64: 'FacePictureBase64',
      facePictureUrl: 'FacePictureUrl',
      idFaceQuality: 'IdFaceQuality',
      idSpoof: 'IdSpoof',
      languageConfig: 'LanguageConfig',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      metaInfo: 'MetaInfo',
      ocr: 'Ocr',
      productCode: 'ProductCode',
      productFlow: 'ProductFlow',
      returnUrl: 'ReturnUrl',
      sceneCode: 'SceneCode',
      securityLevel: 'SecurityLevel',
      styleConfig: 'StyleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorize: 'string',
      callbackToken: 'string',
      callbackUrl: 'string',
      crop: 'string',
      docScanMode: 'string',
      docType: 'string',
      facePictureBase64: 'string',
      facePictureUrl: 'string',
      idFaceQuality: 'string',
      idSpoof: 'string',
      languageConfig: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      metaInfo: 'string',
      ocr: 'string',
      productCode: 'string',
      productFlow: 'string',
      returnUrl: 'string',
      sceneCode: 'string',
      securityLevel: 'string',
      styleConfig: 'string',
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
  identifyNum?: string;
  mobile?: string;
  paramType?: string;
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
  code?: string;
  message?: string;
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

export class DescribeWeb3AddressLabelsResponseBodyData extends $tea.Model {
  address?: string;
  balance?: string;
  balanceSymbol?: string;
  chainName?: string;
  chainShortName?: string;
  contractAddress?: string;
  createContractAddress?: string;
  createContractTransactionHash?: string;
  customRiskAssessment?: string;
  firstTransactionTime?: string;
  isProducerAddress?: string;
  lastTransactionTime?: string;
  receiveAmount?: string;
  sendAmount?: string;
  tag?: string;
  token?: string;
  tokenAmount?: number;
  tokenList?: string;
  transactionCount?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      balance: 'Balance',
      balanceSymbol: 'BalanceSymbol',
      chainName: 'ChainName',
      chainShortName: 'ChainShortName',
      contractAddress: 'ContractAddress',
      createContractAddress: 'CreateContractAddress',
      createContractTransactionHash: 'CreateContractTransactionHash',
      customRiskAssessment: 'CustomRiskAssessment',
      firstTransactionTime: 'FirstTransactionTime',
      isProducerAddress: 'IsProducerAddress',
      lastTransactionTime: 'LastTransactionTime',
      receiveAmount: 'ReceiveAmount',
      sendAmount: 'SendAmount',
      tag: 'Tag',
      token: 'Token',
      tokenAmount: 'TokenAmount',
      tokenList: 'TokenList',
      transactionCount: 'TransactionCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      balance: 'string',
      balanceSymbol: 'string',
      chainName: 'string',
      chainShortName: 'string',
      contractAddress: 'string',
      createContractAddress: 'string',
      createContractTransactionHash: 'string',
      customRiskAssessment: 'string',
      firstTransactionTime: 'string',
      isProducerAddress: 'string',
      lastTransactionTime: 'string',
      receiveAmount: 'string',
      sendAmount: 'string',
      tag: 'string',
      token: 'string',
      tokenAmount: 'number',
      tokenList: 'string',
      transactionCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWeb3RiskScoreResponseBodyDataRiskResults extends $tea.Model {
  description?: string;
  severity?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      severity: 'Severity',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      severity: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWeb3RiskScoreResponseBodyData extends $tea.Model {
  riskResults?: DescribeWeb3RiskScoreResponseBodyDataRiskResults[];
  score?: string;
  static names(): { [key: string]: string } {
    return {
      riskResults: 'RiskResults',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskResults: { 'type': 'array', 'itemType': DescribeWeb3RiskScoreResponseBodyDataRiskResults },
      score: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWeb3TransactionLabelsResponseBodyDataContractDetails extends $tea.Model {
  amount?: string;
  from?: string;
  gasLimit?: number;
  index?: number;
  to?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      from: 'From',
      gasLimit: 'GasLimit',
      index: 'Index',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      from: 'string',
      gasLimit: 'number',
      index: 'number',
      to: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWeb3TransactionLabelsResponseBodyDataInputDetails extends $tea.Model {
  amount?: number;
  inputHash?: string;
  isContract?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      inputHash: 'InputHash',
      isContract: 'IsContract',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      inputHash: 'string',
      isContract: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWeb3TransactionLabelsResponseBodyDataOutputDetails extends $tea.Model {
  amount?: number;
  inputHash?: string;
  isContract?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      inputHash: 'InputHash',
      isContract: 'IsContract',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      inputHash: 'string',
      isContract: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWeb3TransactionLabelsResponseBodyDataTokenTransferDetails extends $tea.Model {
  amount?: string;
  from?: string;
  index?: number;
  symbol?: string;
  to?: string;
  token?: string;
  tokenContractAddress?: string;
  tokenId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      from: 'From',
      index: 'Index',
      symbol: 'Symbol',
      to: 'To',
      token: 'Token',
      tokenContractAddress: 'TokenContractAddress',
      tokenId: 'TokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      from: 'string',
      index: 'number',
      symbol: 'string',
      to: 'string',
      token: 'string',
      tokenContractAddress: 'string',
      tokenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWeb3TransactionLabelsResponseBodyData extends $tea.Model {
  amount?: string;
  chainName?: string;
  chainShortName?: string;
  contractDetails?: DescribeWeb3TransactionLabelsResponseBodyDataContractDetails[];
  errorLog?: string;
  gasLimit?: number;
  gasPrice?: string;
  gasUsed?: number;
  height?: number;
  index?: number;
  inputData?: string;
  inputDetails?: DescribeWeb3TransactionLabelsResponseBodyDataInputDetails[];
  methodId?: string;
  nonce?: string;
  outputDetails?: DescribeWeb3TransactionLabelsResponseBodyDataOutputDetails[];
  state?: number;
  tokenTransferDetails?: DescribeWeb3TransactionLabelsResponseBodyDataTokenTransferDetails[];
  transactionSymbol?: string;
  transactionTime?: string;
  transactionType?: string;
  txfee?: string;
  txid?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      chainName: 'ChainName',
      chainShortName: 'ChainShortName',
      contractDetails: 'ContractDetails',
      errorLog: 'ErrorLog',
      gasLimit: 'GasLimit',
      gasPrice: 'GasPrice',
      gasUsed: 'GasUsed',
      height: 'Height',
      index: 'Index',
      inputData: 'InputData',
      inputDetails: 'InputDetails',
      methodId: 'MethodId',
      nonce: 'Nonce',
      outputDetails: 'OutputDetails',
      state: 'State',
      tokenTransferDetails: 'TokenTransferDetails',
      transactionSymbol: 'TransactionSymbol',
      transactionTime: 'TransactionTime',
      transactionType: 'TransactionType',
      txfee: 'Txfee',
      txid: 'Txid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      chainName: 'string',
      chainShortName: 'string',
      contractDetails: { 'type': 'array', 'itemType': DescribeWeb3TransactionLabelsResponseBodyDataContractDetails },
      errorLog: 'string',
      gasLimit: 'number',
      gasPrice: 'string',
      gasUsed: 'number',
      height: 'number',
      index: 'number',
      inputData: 'string',
      inputDetails: { 'type': 'array', 'itemType': DescribeWeb3TransactionLabelsResponseBodyDataInputDetails },
      methodId: 'string',
      nonce: 'string',
      outputDetails: { 'type': 'array', 'itemType': DescribeWeb3TransactionLabelsResponseBodyDataOutputDetails },
      state: 'number',
      tokenTransferDetails: { 'type': 'array', 'itemType': DescribeWeb3TransactionLabelsResponseBodyDataTokenTransferDetails },
      transactionSymbol: 'string',
      transactionTime: 'string',
      transactionType: 'string',
      txfee: 'string',
      txid: 'string',
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

export class Id2MetaVerifyIntlResponseBodyResult extends $tea.Model {
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

export class Mobile3MetaVerifyIntlResponseBodyResult extends $tea.Model {
  bizCode?: string;
  ispName?: string;
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

  async describeWeb3AddressLabelsWithOptions(request: DescribeWeb3AddressLabelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWeb3AddressLabelsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.chainShortName)) {
      query["ChainShortName"] = request.chainShortName;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWeb3AddressLabels",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWeb3AddressLabelsResponse>(await this.callApi(params, req, runtime), new DescribeWeb3AddressLabelsResponse({}));
  }

  async describeWeb3AddressLabels(request: DescribeWeb3AddressLabelsRequest): Promise<DescribeWeb3AddressLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWeb3AddressLabelsWithOptions(request, runtime);
  }

  async describeWeb3RiskScoreWithOptions(request: DescribeWeb3RiskScoreRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWeb3RiskScoreResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chainShortName)) {
      query["ChainShortName"] = request.chainShortName;
    }

    if (!Util.isUnset(request.depth)) {
      query["Depth"] = request.depth;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!Util.isUnset(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!Util.isUnset(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWeb3RiskScore",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWeb3RiskScoreResponse>(await this.callApi(params, req, runtime), new DescribeWeb3RiskScoreResponse({}));
  }

  async describeWeb3RiskScore(request: DescribeWeb3RiskScoreRequest): Promise<DescribeWeb3RiskScoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWeb3RiskScoreWithOptions(request, runtime);
  }

  async describeWeb3TransactionLabelsWithOptions(request: DescribeWeb3TransactionLabelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWeb3TransactionLabelsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chainShortName)) {
      query["ChainShortName"] = request.chainShortName;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!Util.isUnset(request.transaction)) {
      query["Transaction"] = request.transaction;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWeb3TransactionLabels",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWeb3TransactionLabelsResponse>(await this.callApi(params, req, runtime), new DescribeWeb3TransactionLabelsResponse({}));
  }

  async describeWeb3TransactionLabels(request: DescribeWeb3TransactionLabelsRequest): Promise<DescribeWeb3TransactionLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWeb3TransactionLabelsWithOptions(request, runtime);
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

    if (!Util.isUnset(request.facePictureUrl)) {
      query["FacePictureUrl"] = request.facePictureUrl;
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

  async id2MetaVerifyIntl(request: Id2MetaVerifyIntlRequest): Promise<Id2MetaVerifyIntlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.id2MetaVerifyIntlWithOptions(request, runtime);
  }

  async initializeWithOptions(request: InitializeRequest, runtime: $Util.RuntimeOptions): Promise<InitializeResponse> {
    Util.validateModel(request);
    let query = { };
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

    if (!Util.isUnset(request.facePictureUrl)) {
      query["FacePictureUrl"] = request.facePictureUrl;
    }

    if (!Util.isUnset(request.idFaceQuality)) {
      query["IdFaceQuality"] = request.idFaceQuality;
    }

    if (!Util.isUnset(request.idSpoof)) {
      query["IdSpoof"] = request.idSpoof;
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

    if (!Util.isUnset(request.ocr)) {
      query["Ocr"] = request.ocr;
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

  async initialize(request: InitializeRequest): Promise<InitializeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initializeWithOptions(request, runtime);
  }

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

  async mobile3MetaVerifyIntl(request: Mobile3MetaVerifyIntlRequest): Promise<Mobile3MetaVerifyIntlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mobile3MetaVerifyIntlWithOptions(request, runtime);
  }

}
