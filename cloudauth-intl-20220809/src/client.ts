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

export class DescribeAddressLabelsRequest extends $tea.Model {
  /**
   * @example
   * 0xabds8292***dskkds
   */
  address?: string;
  /**
   * @example
   * ETH
   */
  coin?: string;
  /**
   * @example
   * dso9322***dsjsd22
   */
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
  /**
   * @example
   * Success
   */
  code?: string;
  data?: DescribeAddressLabelsResponseBodyData;
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
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * 0xabds***djskjds
   */
  address?: string;
  /**
   * @example
   * ETH
   */
  coin?: string;
  /**
   * @example
   * e0c34a***353888
   */
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
  /**
   * @example
   * Success
   */
  code?: string;
  data?: DescribeAddressOverviewResponseBodyData;
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
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * BTC
   */
  coin?: string;
  /**
   * @example
   * 2017-08-20
   */
  end?: string;
  /**
   * @example
   * djs20dsjk2-dsjd29-dsskc
   */
  merchantBizId?: string;
  /**
   * @example
   * 2017-07-20
   */
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
  /**
   * @example
   * Success
   */
  code?: string;
  data?: DescribeMaliciousAddressResponseBodyData[];
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
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * 0xabds***djskjds
   */
  address?: string;
  /**
   * @example
   * ETH
   */
  coin?: string;
  /**
   * @example
   * e0c34a***353888
   */
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
  /**
   * @example
   * Success
   */
  code?: string;
  data?: DescribeRiskScoreResponseBodyData;
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
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * 0xabds***djskjds
   */
  address?: string;
  /**
   * @example
   * ETH
   */
  coin?: string;
  /**
   * @example
   * 1682235649
   */
  endTimestamp?: number;
  /**
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 1682232649
   */
  startTimestamp?: number;
  /**
   * @example
   * in
   */
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
  /**
   * @example
   * Success
   */
  code?: string;
  data?: DescribeTransactionsListResponseBodyData;
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
  /**
   * @example
   * true
   */
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
  /**
   * @remarks
   * The address hash.
   * 
   * @example
   * 0000980145045a5c5acad3d2df0cf3b2afxxxxxx
   */
  address?: string;
  /**
   * @remarks
   * This is the short name of blockchain。
   * [ ETH, MATIC, BNB ]
   * 
   * @example
   * ETH
   */
  chainShortName?: string;
  /**
   * @remarks
   * A unique business ID for tracing purpose. For example，the sequence ID from the merchant\\"s business-related database.
   * 
   * @example
   * dso932dsjsd22
   */
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
  /**
   * @remarks
   * Return code. For the full list of codes, see Codes and Messages.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * data
   */
  data?: DescribeWeb3AddressLabelsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response detailed message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request, which can be used to locate issues.
   * 
   * @example
   * 7F971622-38C0-5F56-B2EC-315367979B4F
   */
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
  /**
   * @remarks
   * This is the short name of blockchain。
   * [ ETH, MATIC, BNB ]
   * 
   * @example
   * ETH
   */
  chainShortName?: string;
  /**
   * @remarks
   * minimum: 1
   * maximum: 100
   * the maximum depth for risk analysis. For UTXO-based blockchains, default and maximum is enforced at 100.
   * For account-based blockchains, default and maximum is enforced at 6
   * 
   * @example
   * 2
   */
  depth?: number;
  /**
   * @remarks
   * A unique business ID for tracing purpose. For example，the sequence ID from the merchant\\"s business-related database.
   * 
   * @example
   * e0c34a353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * For TRANSACTION objects, you need to provide the transaction hash。
   * For ADDRESS objects, you need to provide the address or reference address hash。
   * 
   * @example
   * 0000980145045a5c5acad3d2df0cf3b2afxxxxxx
   */
  objectId?: string;
  /**
   * @remarks
   * The object of the analysis.
   * [ TRANSACTION, ADDRESS ]
   * 
   * @example
   * TRANSACTION
   */
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
  /**
   * @remarks
   * Return code. For the full list of codes, see Codes and Messages.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * data
   */
  data?: DescribeWeb3RiskScoreResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response detailed message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request, which can be used to locate issues.
   * 
   * @example
   * 5E63B760-0ECB-5C07-8503-A65C27876968
   */
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
  /**
   * @remarks
   * This is the short name of blockchain。
   * [ ETH, MATIC, BNB ]
   * 
   * @example
   * ETH
   */
  chainShortName?: string;
  /**
   * @remarks
   * A unique business ID for tracing purpose. For example，the sequence ID from the merchant\\"s business-related database.
   * 
   * @example
   * e0c34a353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The Transaction hash.
   * 
   * @example
   * c92880148d4896d8a2093a891a8f08916fe141fba474ede4101f81fb2bxxxxxx
   */
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
  /**
   * @remarks
   * Return code. For the full list of codes, see Codes and Messages.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * data
   */
  data?: DescribeWeb3TransactionLabelsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response detailed message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request, which can be used to locate issues.
   * 
   * @example
   * 7A0D192A-CC0C-5DE5-A3B6-A14CF45508F2
   */
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
  /**
   * @example
   * 54.4216
   */
  balance?: number;
  /**
   * @example
   * 1441800674
   */
  firstSeen?: number;
  /**
   * @example
   * 1682056727
   */
  lastSeen?: number;
  /**
   * @example
   * 1470
   */
  receivedTxsCount?: number;
  /**
   * @example
   * 227
   */
  spentTxsCount?: number;
  /**
   * @example
   * 916263.8
   */
  totalReceived?: number;
  /**
   * @example
   * 916205.4
   */
  totalSpent?: number;
  /**
   * @example
   * 1697
   */
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
  /**
   * @example
   * 2017-07-18 00:00:00
   */
  addTime?: string;
  /**
   * @example
   * f6d239ff***df816
   */
  address?: string;
  /**
   * @example
   * ETH
   */
  coin?: string;
  /**
   * @example
   * FAKE_Coindash_2
   */
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
  /**
   * @example
   * MMFinance Exploiter
   */
  hackingEvent?: string;
  /**
   * @example
   * Severe
   */
  riskLevel?: string;
  /**
   * @example
   * 100
   */
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
  /**
   * @example
   * 0xd90e2***b90ad053324f31b
   */
  address?: string;
  /**
   * @example
   * 0.0845
   */
  amount?: number;
  /**
   * @example
   * bi***ce
   */
  label?: string;
  txHashList?: string[];
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 0xd90e2***b90ad053324f31b
   */
  address?: string;
  /**
   * @example
   * 743
   */
  amount?: number;
  /**
   * @example
   * Tor***uter
   */
  label?: string;
  txHashList?: string[];
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 6
   */
  totalPages?: number;
  /**
   * @example
   * 300
   */
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
  /**
   * @remarks
   * address
   * 
   * @example
   * 2341980145045A5c5acad3d2Df0cF3B2Afxxxxxx
   */
  address?: string;
  /**
   * @remarks
   * amount of native currency
   * 
   * @example
   * 0
   */
  balance?: string;
  /**
   * @remarks
   * native currency of the chain
   * 
   * @example
   * ETH
   */
  balanceSymbol?: string;
  /**
   * @remarks
   * ChainNameEnumstring name of blockchain
   * 
   * @example
   * Ethereum Mainnet
   */
  chainName?: string;
  /**
   * @remarks
   * ChainShortName
   * 
   * @example
   * eth
   */
  chainShortName?: string;
  /**
   * @remarks
   * 0: EOA; 1: Contract
   * 
   * @example
   * 0
   */
  contractAddress?: string;
  /**
   * @remarks
   * the address of deployer if the current address is a contract, null if the current address is an EOA
   * 
   * @example
   * dAC17F958D2ee523a2206206994597C13Dxxxxxx
   */
  createContractAddress?: string;
  /**
   * @remarks
   * contract creation hash if the current address is a contract, null if the current address is an EOA
   * 
   * @example
   * dAC17F958D2ee523a2206206994597C13Dxxxxxx
   */
  createContractTransactionHash?: string;
  /**
   * @remarks
   * customized assessment detail
   * 
   * @example
   * ""
   */
  customRiskAssessment?: string;
  /**
   * @remarks
   * the first transaction hash sent by the address
   * 
   * @example
   * 20230304
   */
  firstTransactionTime?: string;
  /**
   * @remarks
   * 0: Not validator; 1: validator
   * 
   * @example
   * 0
   */
  isProducerAddress?: string;
  /**
   * @remarks
   * the latest transaction hash sent by the address
   * 
   * @example
   * 20230304
   */
  lastTransactionTime?: string;
  /**
   * @remarks
   * the amount of native currency received in 180 days
   * 
   * @example
   * 0
   */
  receiveAmount?: string;
  /**
   * @remarks
   * the amount of native currency sent in 180 days
   * 
   * @example
   * 0
   */
  sendAmount?: string;
  /**
   * @remarks
   * tag
   * 
   * @example
   * contracts:Tether: Tether_USD,token_standard:erc20
   */
  tag?: string;
  /**
   * @remarks
   * if the address is an erc20 token, returns the token name
   * 
   * @example
   * Tether USD
   */
  token?: string;
  /**
   * @remarks
   * the number of erc20 tokens involved with current address in 180 days
   * 
   * @example
   * 1
   */
  tokenAmount?: number;
  /**
   * @remarks
   * address of erc20 tokens involved with current address in 180 days
   * 
   * @example
   * ["{"ERC721":[]"]}"]
   */
  tokenList?: string;
  /**
   * @remarks
   * the number of transactions
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * description
   * 
   * @example
   * incoming address risk critical xxxxxx
   */
  description?: string;
  /**
   * @remarks
   * [ CRITICAL, HIGH, MEDIUM, LOW, NO ]
   * 100: Critical
   * 67-99: High risk
   * 34-66: Medium risk
   * 1-33: Low risk
   * 0: No risk
   * 
   * @example
   * HIGH
   */
  severity?: string;
  /**
   * @remarks
   * Address
   * Transaction
   * 
   * @example
   * Address
   */
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
  /**
   * @remarks
   * risk results
   */
  riskResults?: DescribeWeb3RiskScoreResponseBodyDataRiskResults[];
  /**
   * @remarks
   * Risk score
   * 
   * @example
   * 80
   */
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
  /**
   * @remarks
   * the value of internal transaction
   * 
   * @example
   * 945.5
   */
  amount?: string;
  /**
   * @remarks
   * the sender of internal transaction
   * 
   * @example
   * C7019579cB9bdb9204e61C7179ba2F88F9dxxxxxx
   */
  from?: string;
  /**
   * @remarks
   * the gaslimit of internal transaction
   * 
   * @example
   * 20712
   */
  gasLimit?: number;
  /**
   * @remarks
   * the call layer of internal transaction
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * the receiver of internal transaction
   * 
   * @example
   * C7019579cB9bdb9204e61C7179ba2F88F9dxxxxxx
   */
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
  /**
   * @remarks
   * example: 15. the amount of transation sent by the address
   * 
   * @example
   * 3234
   */
  amount?: number;
  /**
   * @remarks
   * the address hash
   * 
   * @example
   * 21a31Ee1afC51d94C2eFcCAa2xxxxxx
   */
  inputHash?: string;
  /**
   * @remarks
   * example: true. is it a contract
   * 
   * @example
   * true
   */
  isContract?: string;
  /**
   * @remarks
   * example: Dex . the tag of the address
   * 
   * @example
   * contracts:Tether: Tether_USD,token_standard:xxxxxx
   */
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
  /**
   * @remarks
   * example: 15. the amount of transation sent by the address
   * 
   * @example
   * 1500
   */
  amount?: number;
  /**
   * @remarks
   * the address hash
   * 
   * @example
   * 21a31Ee1afC51d94C2eFcCAa2xxxxxx
   */
  inputHash?: string;
  /**
   * @remarks
   * example: true. is it a contract
   * 
   * @example
   * true
   */
  isContract?: string;
  /**
   * @remarks
   * example: Dex. the tag of the address
   * 
   * @example
   * contracts:Tether: Tether_USD,token_standard:xxxxxx
   */
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
  /**
   * @remarks
   * the token amount
   * 
   * @example
   * 945.5
   */
  amount?: string;
  /**
   * @remarks
   * the sender of the token
   * 
   * @example
   * 21a31Ee1afC51d94C2eFcCAa2092aD1028xxxxxx
   */
  from?: string;
  /**
   * @remarks
   * the call layer of to token transfer
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * the token symbol
   * 
   * @example
   * USDT
   */
  symbol?: string;
  /**
   * @remarks
   * the receiver of the token
   * 
   * @example
   * C7019579cB9bdb9204e61C7179ba2F88F9dxxxxxx
   */
  to?: string;
  /**
   * @remarks
   * the token name
   * 
   * @example
   * Tether USD
   */
  token?: string;
  /**
   * @remarks
   * the token address
   * 
   * @example
   * dAC17F958D2ee523a2206206994597C13Dxxxxxx
   */
  tokenContractAddress?: string;
  /**
   * @remarks
   * NFT ID, if the token is erc721
   * 
   * @example
   * -1
   */
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
  /**
   * @remarks
   * the amount of native currency
   * 
   * @example
   * 27
   */
  amount?: string;
  /**
   * @remarks
   * chainName
   * 
   * @example
   * ETH
   */
  chainName?: string;
  /**
   * @remarks
   * short name of blockchain
   * 
   * @example
   * eth
   */
  chainShortName?: string;
  /**
   * @remarks
   * contract details
   */
  contractDetails?: DescribeWeb3TransactionLabelsResponseBodyDataContractDetails[];
  /**
   * @remarks
   * error log
   * 
   * @example
   * “”
   */
  errorLog?: string;
  /**
   * @remarks
   * gasLimit
   * 
   * @example
   * 1232
   */
  gasLimit?: number;
  /**
   * @remarks
   * gasPrice
   * 
   * @example
   * 5034
   */
  gasPrice?: string;
  /**
   * @remarks
   * gasUsed
   * 
   * @example
   * 234
   */
  gasUsed?: number;
  /**
   * @remarks
   * height
   * 
   * @example
   * 17087552
   */
  height?: number;
  /**
   * @remarks
   * the position of the transaction in the block
   * 
   * @example
   * 94
   */
  index?: number;
  /**
   * @remarks
   * input data
   * 
   * @example
   * a9059cbb000000000000000000000000c7019579cb9bdb9204e61c7179ba2f88f9d2990b000000000xxxxxx
   */
  inputData?: string;
  /**
   * @remarks
   * input details
   */
  inputDetails?: DescribeWeb3TransactionLabelsResponseBodyDataInputDetails[];
  /**
   * @remarks
   * the method name of contract call. For external transaction method: [\\"CALL\\",\\"CALLCODE\\",\\"DELEGATECALL\\",\\"STATICCALL\\"]; for internal transaction method: the first 4 bytes of the hash of the method name
   * 
   * @example
   * a9059cbb
   */
  methodId?: string;
  /**
   * @remarks
   * nonce
   * 
   * @example
   * 6242724
   */
  nonce?: string;
  /**
   * @remarks
   * output details
   */
  outputDetails?: DescribeWeb3TransactionLabelsResponseBodyDataOutputDetails[];
  /**
   * @remarks
   * the transaction state. 1: success 0: fail
   * 
   * @example
   * 1
   */
  state?: number;
  /**
   * @remarks
   * token transfer details
   */
  tokenTransferDetails?: DescribeWeb3TransactionLabelsResponseBodyDataTokenTransferDetails[];
  /**
   * @remarks
   * the symbol of native currency
   * 
   * @example
   * ETH
   */
  transactionSymbol?: string;
  /**
   * @remarks
   * the block timestamp
   * 
   * @example
   * 1681991807
   */
  transactionTime?: string;
  /**
   * @remarks
   * Integer	0: legacy; 1: eip 2930; 2: eip 1559
   * 
   * @example
   * 1
   */
  transactionType?: string;
  /**
   * @remarks
   * the transaction fee in eth
   * 
   * @example
   * 0.002321489548255059
   */
  txfee?: string;
  /**
   * @remarks
   * Txid
   * 
   * @example
   * c92880148d4896d8a2093a891a8f08916fe141fba474ede410xxxxxx
   */
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
   * 查询地址标签接口
   * 
   * @param request - DescribeAddressLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAddressLabelsResponse
   */
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

  /**
   * 查询地址标签接口
   * 
   * @param request - DescribeAddressLabelsRequest
   * @returns DescribeAddressLabelsResponse
   */
  async describeAddressLabels(request: DescribeAddressLabelsRequest): Promise<DescribeAddressLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAddressLabelsWithOptions(request, runtime);
  }

  /**
   * 查询地址详情接口
   * 
   * @param request - DescribeAddressOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAddressOverviewResponse
   */
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

  /**
   * 查询地址详情接口
   * 
   * @param request - DescribeAddressOverviewRequest
   * @returns DescribeAddressOverviewResponse
   */
  async describeAddressOverview(request: DescribeAddressOverviewRequest): Promise<DescribeAddressOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAddressOverviewWithOptions(request, runtime);
  }

  /**
   * 恶意地址查询
   * 
   * @param request - DescribeMaliciousAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMaliciousAddressResponse
   */
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

  /**
   * 恶意地址查询
   * 
   * @param request - DescribeMaliciousAddressRequest
   * @returns DescribeMaliciousAddressResponse
   */
  async describeMaliciousAddress(request: DescribeMaliciousAddressRequest): Promise<DescribeMaliciousAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMaliciousAddressWithOptions(request, runtime);
  }

  /**
   * 查询地址风险接口
   * 
   * @param request - DescribeRiskScoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRiskScoreResponse
   */
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

  /**
   * 查询地址风险接口
   * 
   * @param request - DescribeRiskScoreRequest
   * @returns DescribeRiskScoreResponse
   */
  async describeRiskScore(request: DescribeRiskScoreRequest): Promise<DescribeRiskScoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskScoreWithOptions(request, runtime);
  }

  /**
   * 查询交易接口
   * 
   * @param request - DescribeTransactionsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTransactionsListResponse
   */
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

  /**
   * 查询交易接口
   * 
   * @param request - DescribeTransactionsListRequest
   * @returns DescribeTransactionsListResponse
   */
  async describeTransactionsList(request: DescribeTransactionsListRequest): Promise<DescribeTransactionsListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTransactionsListWithOptions(request, runtime);
  }

  /**
   * Query the Information of address.
   * 
   * @param request - DescribeWeb3AddressLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWeb3AddressLabelsResponse
   */
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

  /**
   * Query the Information of address.
   * 
   * @param request - DescribeWeb3AddressLabelsRequest
   * @returns DescribeWeb3AddressLabelsResponse
   */
  async describeWeb3AddressLabels(request: DescribeWeb3AddressLabelsRequest): Promise<DescribeWeb3AddressLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWeb3AddressLabelsWithOptions(request, runtime);
  }

  /**
   * Query risk score, risk detail list for a given address
   * 
   * @param request - DescribeWeb3RiskScoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWeb3RiskScoreResponse
   */
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

  /**
   * Query risk score, risk detail list for a given address
   * 
   * @param request - DescribeWeb3RiskScoreRequest
   * @returns DescribeWeb3RiskScoreResponse
   */
  async describeWeb3RiskScore(request: DescribeWeb3RiskScoreRequest): Promise<DescribeWeb3RiskScoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWeb3RiskScoreWithOptions(request, runtime);
  }

  /**
   * Query the Information of transaction.
   * 
   * @param request - DescribeWeb3TransactionLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWeb3TransactionLabelsResponse
   */
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

  /**
   * Query the Information of transaction.
   * 
   * @param request - DescribeWeb3TransactionLabelsRequest
   * @returns DescribeWeb3TransactionLabelsResponse
   */
  async describeWeb3TransactionLabels(request: DescribeWeb3TransactionLabelsRequest): Promise<DescribeWeb3TransactionLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWeb3TransactionLabelsWithOptions(request, runtime);
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
