// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AcceptDemandRequest extends $tea.Model {
  bizId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptDemandResponseBody extends $tea.Model {
  bindUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bindUrl: 'BindUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptDemandResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AcceptDemandResponseBody;
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
      body: AcceptDemandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BidDomainRequest extends $tea.Model {
  auctionId?: string;
  currency?: string;
  maxBid?: number;
  static names(): { [key: string]: string } {
    return {
      auctionId: 'AuctionId',
      currency: 'Currency',
      maxBid: 'MaxBid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionId: 'string',
      currency: 'string',
      maxBid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BidDomainResponseBody extends $tea.Model {
  auctionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      auctionId: 'AuctionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BidDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BidDomainResponseBody;
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
      body: BidDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAuctionRequest extends $tea.Model {
  auctionList?: ChangeAuctionRequestAuctionList[];
  static names(): { [key: string]: string } {
    return {
      auctionList: 'AuctionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionList: { 'type': 'array', 'itemType': ChangeAuctionRequestAuctionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAuctionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAuctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeAuctionResponseBody;
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
      body: ChangeAuctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainStatusRequest extends $tea.Model {
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainStatusResponseBody extends $tea.Model {
  errorCode?: string;
  httpStatusCode?: number;
  module?: CheckDomainStatusResponseBodyModule;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpStatusCode: 'number',
      module: CheckDomainStatusResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckDomainStatusResponseBody;
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
      body: CheckDomainStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSelectedDomainStatusRequest extends $tea.Model {
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSelectedDomainStatusResponseBody extends $tea.Model {
  errorCode?: string;
  httpStatusCode?: number;
  module?: CheckSelectedDomainStatusResponseBodyModule;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpStatusCode: 'number',
      module: CheckSelectedDomainStatusResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSelectedDomainStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckSelectedDomainStatusResponseBody;
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
      body: CheckSelectedDomainStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFixedPriceDemandOrderRequest extends $tea.Model {
  code?: string;
  contactId?: string;
  domain?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactId: 'ContactId',
      domain: 'Domain',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactId: 'string',
      domain: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFixedPriceDemandOrderResponseBody extends $tea.Model {
  errorCode?: string;
  httpStatusCode?: number;
  module?: CreateFixedPriceDemandOrderResponseBodyModule;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpStatusCode: 'number',
      module: CreateFixedPriceDemandOrderResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFixedPriceDemandOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFixedPriceDemandOrderResponseBody;
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
      body: CreateFixedPriceDemandOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFixedPriceSelectedOrderRequest extends $tea.Model {
  code?: string;
  contactId?: string;
  domainName?: string;
  expectedPrice?: number;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactId: 'ContactId',
      domainName: 'DomainName',
      expectedPrice: 'ExpectedPrice',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactId: 'string',
      domainName: 'string',
      expectedPrice: 'number',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFixedPriceSelectedOrderResponseBody extends $tea.Model {
  errorCode?: string;
  httpStatusCode?: number;
  module?: CreateFixedPriceSelectedOrderResponseBodyModule;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpStatusCode: 'number',
      module: CreateFixedPriceSelectedOrderResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFixedPriceSelectedOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFixedPriceSelectedOrderResponseBody;
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
      body: CreateFixedPriceSelectedOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailDemandRequest extends $tea.Model {
  bizId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailDemandResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailDemandResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FailDemandResponseBody;
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
      body: FailDemandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishDemandRequest extends $tea.Model {
  bizId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishDemandResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishDemandResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FinishDemandResponseBody;
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
      body: FinishDemandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntlDomainDownloadUrlResponseBody extends $tea.Model {
  allowRetry?: boolean;
  appName?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorArgs?: any[];
  errorCode?: string;
  errorMsg?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRetry: 'boolean',
      appName: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      errorCode: 'string',
      errorMsg: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntlDomainDownloadUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIntlDomainDownloadUrlResponseBody;
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
      body: GetIntlDomainDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReserveDomainUrlResponseBody extends $tea.Model {
  requestId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReserveDomainUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetReserveDomainUrlResponseBody;
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
      body: GetReserveDomainUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseIntlDomainRequest extends $tea.Model {
  auctionId?: string;
  currency?: string;
  price?: number;
  static names(): { [key: string]: string } {
    return {
      auctionId: 'AuctionId',
      currency: 'Currency',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionId: 'string',
      currency: 'string',
      price: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseIntlDomainResponseBody extends $tea.Model {
  allowRetry?: boolean;
  appName?: string;
  auctionId?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorArgs?: any[];
  errorCode?: string;
  errorMsg?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      auctionId: 'AuctionId',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRetry: 'boolean',
      appName: 'string',
      auctionId: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      errorCode: 'string',
      errorMsg: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseIntlDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PurchaseIntlDomainResponseBody;
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
      body: PurchaseIntlDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuctionDetailRequest extends $tea.Model {
  auctionId?: string;
  static names(): { [key: string]: string } {
    return {
      auctionId: 'AuctionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuctionDetailResponseBody extends $tea.Model {
  auctionEndTime?: number;
  auctionId?: string;
  bookEndTime?: number;
  bookedPartner?: string;
  currency?: string;
  deliveryTime?: number;
  domainName?: string;
  domainType?: string;
  failCode?: string;
  highBid?: number;
  highBidder?: string;
  nextValidBid?: number;
  partnerType?: string;
  payEndTime?: number;
  payPrice?: number;
  payStatus?: string;
  produceStatus?: string;
  requestId?: string;
  reserveMet?: boolean;
  reservePrice?: number;
  status?: string;
  transferInPrice?: number;
  yourCurrentBid?: number;
  yourMaxBid?: number;
  static names(): { [key: string]: string } {
    return {
      auctionEndTime: 'AuctionEndTime',
      auctionId: 'AuctionId',
      bookEndTime: 'BookEndTime',
      bookedPartner: 'BookedPartner',
      currency: 'Currency',
      deliveryTime: 'DeliveryTime',
      domainName: 'DomainName',
      domainType: 'DomainType',
      failCode: 'FailCode',
      highBid: 'HighBid',
      highBidder: 'HighBidder',
      nextValidBid: 'NextValidBid',
      partnerType: 'PartnerType',
      payEndTime: 'PayEndTime',
      payPrice: 'PayPrice',
      payStatus: 'PayStatus',
      produceStatus: 'ProduceStatus',
      requestId: 'RequestId',
      reserveMet: 'ReserveMet',
      reservePrice: 'ReservePrice',
      status: 'Status',
      transferInPrice: 'TransferInPrice',
      yourCurrentBid: 'YourCurrentBid',
      yourMaxBid: 'YourMaxBid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionEndTime: 'number',
      auctionId: 'string',
      bookEndTime: 'number',
      bookedPartner: 'string',
      currency: 'string',
      deliveryTime: 'number',
      domainName: 'string',
      domainType: 'string',
      failCode: 'string',
      highBid: 'number',
      highBidder: 'string',
      nextValidBid: 'number',
      partnerType: 'string',
      payEndTime: 'number',
      payPrice: 'number',
      payStatus: 'string',
      produceStatus: 'string',
      requestId: 'string',
      reserveMet: 'boolean',
      reservePrice: 'number',
      status: 'string',
      transferInPrice: 'number',
      yourCurrentBid: 'number',
      yourMaxBid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuctionDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAuctionDetailResponseBody;
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
      body: QueryAuctionDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuctionsRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuctionsResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryAuctionsResponseBodyData[];
  pageSize?: number;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': QueryAuctionsResponseBodyData },
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuctionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAuctionsResponseBody;
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
      body: QueryAuctionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBidRecordsRequest extends $tea.Model {
  auctionId?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      auctionId: 'AuctionId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBidRecordsResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryBidRecordsResponseBodyData[];
  pageSize?: number;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': QueryBidRecordsResponseBodyData },
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBidRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryBidRecordsResponseBody;
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
      body: QueryBidRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBookingDomainInfoRequest extends $tea.Model {
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBookingDomainInfoResponseBody extends $tea.Model {
  auctionId?: number;
  bookEndTime?: number;
  currency?: string;
  maxBid?: number;
  partnerType?: string;
  requestId?: string;
  transferInPrice?: number;
  static names(): { [key: string]: string } {
    return {
      auctionId: 'AuctionId',
      bookEndTime: 'BookEndTime',
      currency: 'Currency',
      maxBid: 'MaxBid',
      partnerType: 'PartnerType',
      requestId: 'RequestId',
      transferInPrice: 'TransferInPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionId: 'number',
      bookEndTime: 'number',
      currency: 'string',
      maxBid: 'number',
      partnerType: 'string',
      requestId: 'string',
      transferInPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBookingDomainInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryBookingDomainInfoResponseBody;
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
      body: QueryBookingDomainInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBrokerDemandRequest extends $tea.Model {
  bizId?: string;
  currentPage?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBrokerDemandResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryBrokerDemandResponseBodyData[];
  pageSize?: number;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': QueryBrokerDemandResponseBodyData },
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBrokerDemandResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryBrokerDemandResponseBody;
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
      body: QueryBrokerDemandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBrokerDemandRecordRequest extends $tea.Model {
  bizId?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBrokerDemandRecordResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryBrokerDemandRecordResponseBodyData;
  pageSize?: number;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryBrokerDemandRecordResponseBodyData,
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBrokerDemandRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryBrokerDemandRecordResponseBody;
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
      body: QueryBrokerDemandRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainTransferStatusRequest extends $tea.Model {
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainTransferStatusResponseBody extends $tea.Model {
  domainTransferStatus?: QueryDomainTransferStatusResponseBodyDomainTransferStatus[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainTransferStatus: 'DomainTransferStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTransferStatus: { 'type': 'array', 'itemType': QueryDomainTransferStatusResponseBodyDomainTransferStatus },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainTransferStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDomainTransferStatusResponseBody;
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
      body: QueryDomainTransferStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPurchasedDomainsRequest extends $tea.Model {
  currentPage?: number;
  domainName?: string;
  endOperationTime?: string;
  opTimeOrder?: boolean;
  operationStatus?: number;
  pageSize?: number;
  productType?: number;
  startOperationTime?: string;
  updateTimeOrder?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      domainName: 'DomainName',
      endOperationTime: 'EndOperationTime',
      opTimeOrder: 'OpTimeOrder',
      operationStatus: 'OperationStatus',
      pageSize: 'PageSize',
      productType: 'ProductType',
      startOperationTime: 'StartOperationTime',
      updateTimeOrder: 'UpdateTimeOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      domainName: 'string',
      endOperationTime: 'string',
      opTimeOrder: 'boolean',
      operationStatus: 'number',
      pageSize: 'number',
      productType: 'number',
      startOperationTime: 'string',
      updateTimeOrder: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPurchasedDomainsResponseBody extends $tea.Model {
  currentPageNum?: number;
  data?: QueryPurchasedDomainsResponseBodyData[];
  pageSize?: number;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': QueryPurchasedDomainsResponseBodyData },
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPurchasedDomainsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPurchasedDomainsResponseBody;
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
      body: QueryPurchasedDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordDemandRequest extends $tea.Model {
  bizId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordDemandResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordDemandResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecordDemandResponseBody;
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
      body: RecordDemandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefuseDemandRequest extends $tea.Model {
  bizId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefuseDemandResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefuseDemandResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefuseDemandResponseBody;
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
      body: RefuseDemandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestPayDemandRequest extends $tea.Model {
  bizId?: string;
  domainName?: string;
  message?: string;
  price?: number;
  produceType?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      domainName: 'DomainName',
      message: 'Message',
      price: 'Price',
      produceType: 'ProduceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      domainName: 'string',
      message: 'string',
      price: 'number',
      produceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestPayDemandResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestPayDemandResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestPayDemandResponseBody;
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
      body: RequestPayDemandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReserveDomainRequest extends $tea.Model {
  channels?: string[];
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReserveDomainResponseBody extends $tea.Model {
  auctionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      auctionId: 'AuctionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReserveDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReserveDomainResponseBody;
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
      body: ReserveDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReserveIntlDomainRequest extends $tea.Model {
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReserveIntlDomainResponseBody extends $tea.Model {
  allowRetry?: boolean;
  appName?: string;
  auctionId?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorArgs?: any[];
  errorCode?: string;
  errorMsg?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      auctionId: 'AuctionId',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRetry: 'boolean',
      appName: 'string',
      auctionId: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      errorCode: 'string',
      errorMsg: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReserveIntlDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReserveIntlDomainResponseBody;
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
      body: ReserveIntlDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectedDomainListRequest extends $tea.Model {
  listDate?: string;
  static names(): { [key: string]: string } {
    return {
      listDate: 'ListDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectedDomainListResponseBody extends $tea.Model {
  errorCode?: string;
  module?: SelectedDomainListResponseBodyModule;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      module: SelectedDomainListResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectedDomainListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SelectedDomainListResponseBody;
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
      body: SelectedDomainListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPurchaseInfoRequest extends $tea.Model {
  bizId?: string;
  purchaseCurrency?: string;
  purchasePrice?: number;
  purchaseProofs?: string[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      purchaseCurrency: 'PurchaseCurrency',
      purchasePrice: 'PurchasePrice',
      purchaseProofs: 'PurchaseProofs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      purchaseCurrency: 'string',
      purchasePrice: 'number',
      purchaseProofs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPurchaseInfoResponseBody extends $tea.Model {
  allowRetry?: boolean;
  appName?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorArgs?: any[];
  errorCode?: string;
  errorMsg?: string;
  httpStatusCode?: number;
  module?: any;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRetry: 'boolean',
      appName: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      errorCode: 'string',
      errorMsg: 'string',
      httpStatusCode: 'number',
      module: 'any',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPurchaseInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitPurchaseInfoResponseBody;
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
      body: SubmitPurchaseInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePartnerReservePriceRequest extends $tea.Model {
  biddingId?: number;
  domainName?: string;
  partnerType?: string;
  reservePrice?: number;
  static names(): { [key: string]: string } {
    return {
      biddingId: 'BiddingId',
      domainName: 'DomainName',
      partnerType: 'PartnerType',
      reservePrice: 'ReservePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biddingId: 'number',
      domainName: 'string',
      partnerType: 'string',
      reservePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePartnerReservePriceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePartnerReservePriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePartnerReservePriceResponseBody;
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
      body: UpdatePartnerReservePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAuctionRequestAuctionListBidRecords extends $tea.Model {
  createTime?: string;
  price?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      price: 'Price',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      price: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAuctionRequestAuctionList extends $tea.Model {
  bidRecords?: ChangeAuctionRequestAuctionListBidRecords[];
  domainName?: string;
  endTime?: string;
  isReserve?: number;
  reservePrice?: number;
  reserveRange?: string;
  status?: string;
  timeLeft?: number;
  winner?: string;
  winnerPrice?: number;
  static names(): { [key: string]: string } {
    return {
      bidRecords: 'BidRecords',
      domainName: 'DomainName',
      endTime: 'EndTime',
      isReserve: 'IsReserve',
      reservePrice: 'ReservePrice',
      reserveRange: 'ReserveRange',
      status: 'Status',
      timeLeft: 'TimeLeft',
      winner: 'Winner',
      winnerPrice: 'WinnerPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bidRecords: { 'type': 'array', 'itemType': ChangeAuctionRequestAuctionListBidRecords },
      domainName: 'string',
      endTime: 'string',
      isReserve: 'number',
      reservePrice: 'number',
      reserveRange: 'string',
      status: 'string',
      timeLeft: 'number',
      winner: 'string',
      winnerPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainStatusResponseBodyModule extends $tea.Model {
  deadDate?: number;
  domain?: string;
  endTime?: number;
  price?: number;
  regDate?: number;
  static names(): { [key: string]: string } {
    return {
      deadDate: 'DeadDate',
      domain: 'Domain',
      endTime: 'EndTime',
      price: 'Price',
      regDate: 'RegDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadDate: 'number',
      domain: 'string',
      endTime: 'number',
      price: 'number',
      regDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSelectedDomainStatusResponseBodyModule extends $tea.Model {
  deadDate?: number;
  domain?: string;
  endTime?: number;
  premium?: boolean;
  price?: number;
  regDate?: number;
  static names(): { [key: string]: string } {
    return {
      deadDate: 'DeadDate',
      domain: 'Domain',
      endTime: 'EndTime',
      premium: 'Premium',
      price: 'Price',
      regDate: 'RegDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadDate: 'number',
      domain: 'string',
      endTime: 'number',
      premium: 'boolean',
      price: 'number',
      regDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFixedPriceDemandOrderResponseBodyModule extends $tea.Model {
  domain?: string;
  orderNo?: string;
  price?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      orderNo: 'OrderNo',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      orderNo: 'string',
      price: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFixedPriceSelectedOrderResponseBodyModule extends $tea.Model {
  domain?: string;
  orderNo?: string;
  price?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      orderNo: 'OrderNo',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      orderNo: 'string',
      price: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuctionsResponseBodyData extends $tea.Model {
  auctionEndTime?: number;
  auctionId?: string;
  bookEndTime?: number;
  bookedPartner?: string;
  currency?: string;
  deliveryTime?: number;
  domainName?: string;
  domainType?: string;
  failCode?: string;
  highBid?: number;
  highBidder?: string;
  nextValidBid?: number;
  partnerType?: string;
  payEndTime?: number;
  payPrice?: number;
  payStatus?: string;
  produceStatus?: string;
  reserveMax?: number;
  reserveMet?: boolean;
  reserveMin?: number;
  reservePrice?: number;
  status?: string;
  transferInPrice?: number;
  yourCurrentBid?: number;
  yourMaxBid?: number;
  static names(): { [key: string]: string } {
    return {
      auctionEndTime: 'AuctionEndTime',
      auctionId: 'AuctionId',
      bookEndTime: 'BookEndTime',
      bookedPartner: 'BookedPartner',
      currency: 'Currency',
      deliveryTime: 'DeliveryTime',
      domainName: 'DomainName',
      domainType: 'DomainType',
      failCode: 'FailCode',
      highBid: 'HighBid',
      highBidder: 'HighBidder',
      nextValidBid: 'NextValidBid',
      partnerType: 'PartnerType',
      payEndTime: 'PayEndTime',
      payPrice: 'PayPrice',
      payStatus: 'PayStatus',
      produceStatus: 'ProduceStatus',
      reserveMax: 'ReserveMax',
      reserveMet: 'ReserveMet',
      reserveMin: 'ReserveMin',
      reservePrice: 'ReservePrice',
      status: 'Status',
      transferInPrice: 'TransferInPrice',
      yourCurrentBid: 'YourCurrentBid',
      yourMaxBid: 'YourMaxBid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionEndTime: 'number',
      auctionId: 'string',
      bookEndTime: 'number',
      bookedPartner: 'string',
      currency: 'string',
      deliveryTime: 'number',
      domainName: 'string',
      domainType: 'string',
      failCode: 'string',
      highBid: 'number',
      highBidder: 'string',
      nextValidBid: 'number',
      partnerType: 'string',
      payEndTime: 'number',
      payPrice: 'number',
      payStatus: 'string',
      produceStatus: 'string',
      reserveMax: 'number',
      reserveMet: 'boolean',
      reserveMin: 'number',
      reservePrice: 'number',
      status: 'string',
      transferInPrice: 'number',
      yourCurrentBid: 'number',
      yourMaxBid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBidRecordsResponseBodyData extends $tea.Model {
  bid?: number;
  bidTime?: number;
  bidder?: string;
  currency?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      bidTime: 'BidTime',
      bidder: 'Bidder',
      currency: 'Currency',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      bidTime: 'number',
      bidder: 'string',
      currency: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBrokerDemandResponseBodyData extends $tea.Model {
  auditStatus?: number;
  bargainSellerMobile?: string;
  bargainSellerPrice?: number;
  bizId?: string;
  demandDomain?: string;
  demandPrice?: number;
  description?: string;
  email?: string;
  mobile?: string;
  orderType?: number;
  partnerDomain?: string;
  payDomain?: string;
  payPrice?: number;
  payTime?: number;
  produceType?: number;
  publishTime?: number;
  purchaseStatus?: number;
  servicePayPrice?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      bargainSellerMobile: 'BargainSellerMobile',
      bargainSellerPrice: 'BargainSellerPrice',
      bizId: 'BizId',
      demandDomain: 'DemandDomain',
      demandPrice: 'DemandPrice',
      description: 'Description',
      email: 'Email',
      mobile: 'Mobile',
      orderType: 'OrderType',
      partnerDomain: 'PartnerDomain',
      payDomain: 'PayDomain',
      payPrice: 'PayPrice',
      payTime: 'PayTime',
      produceType: 'ProduceType',
      publishTime: 'PublishTime',
      purchaseStatus: 'PurchaseStatus',
      servicePayPrice: 'ServicePayPrice',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      bargainSellerMobile: 'string',
      bargainSellerPrice: 'number',
      bizId: 'string',
      demandDomain: 'string',
      demandPrice: 'number',
      description: 'string',
      email: 'string',
      mobile: 'string',
      orderType: 'number',
      partnerDomain: 'string',
      payDomain: 'string',
      payPrice: 'number',
      payTime: 'number',
      produceType: 'number',
      publishTime: 'number',
      purchaseStatus: 'number',
      servicePayPrice: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBrokerDemandRecordResponseBodyDataBrokerDemandRecord extends $tea.Model {
  bizId?: string;
  createTime?: number;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      createTime: 'CreateTime',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      createTime: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBrokerDemandRecordResponseBodyData extends $tea.Model {
  brokerDemandRecord?: QueryBrokerDemandRecordResponseBodyDataBrokerDemandRecord[];
  static names(): { [key: string]: string } {
    return {
      brokerDemandRecord: 'BrokerDemandRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerDemandRecord: { 'type': 'array', 'itemType': QueryBrokerDemandRecordResponseBodyDataBrokerDemandRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainTransferStatusResponseBodyDomainTransferStatus extends $tea.Model {
  domainName?: string;
  domainStatusDescription?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainStatusDescription: 'DomainStatusDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainStatusDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPurchasedDomainsResponseBodyData extends $tea.Model {
  deliveryTime?: string;
  domainName?: string;
  operationStatus?: string;
  operationTime?: string;
  productType?: string;
  tradeMoney?: number;
  static names(): { [key: string]: string } {
    return {
      deliveryTime: 'DeliveryTime',
      domainName: 'DomainName',
      operationStatus: 'OperationStatus',
      operationTime: 'OperationTime',
      productType: 'ProductType',
      tradeMoney: 'TradeMoney',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryTime: 'string',
      domainName: 'string',
      operationStatus: 'string',
      operationTime: 'string',
      productType: 'string',
      tradeMoney: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectedDomainListResponseBodyModule extends $tea.Model {
  downloadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("domain", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async acceptDemandWithOptions(request: AcceptDemandRequest, runtime: $Util.RuntimeOptions): Promise<AcceptDemandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AcceptDemand",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AcceptDemandResponse>(await this.callApi(params, req, runtime), new AcceptDemandResponse({}));
  }

  async acceptDemand(request: AcceptDemandRequest): Promise<AcceptDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acceptDemandWithOptions(request, runtime);
  }

  async bidDomainWithOptions(request: BidDomainRequest, runtime: $Util.RuntimeOptions): Promise<BidDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.auctionId)) {
      body["AuctionId"] = request.auctionId;
    }

    if (!Util.isUnset(request.currency)) {
      body["Currency"] = request.currency;
    }

    if (!Util.isUnset(request.maxBid)) {
      body["MaxBid"] = request.maxBid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BidDomain",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BidDomainResponse>(await this.callApi(params, req, runtime), new BidDomainResponse({}));
  }

  async bidDomain(request: BidDomainRequest): Promise<BidDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bidDomainWithOptions(request, runtime);
  }

  async changeAuctionWithOptions(request: ChangeAuctionRequest, runtime: $Util.RuntimeOptions): Promise<ChangeAuctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.auctionList)) {
      body["AuctionList"] = request.auctionList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChangeAuction",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeAuctionResponse>(await this.callApi(params, req, runtime), new ChangeAuctionResponse({}));
  }

  async changeAuction(request: ChangeAuctionRequest): Promise<ChangeAuctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeAuctionWithOptions(request, runtime);
  }

  async checkDomainStatusWithOptions(request: CheckDomainStatusRequest, runtime: $Util.RuntimeOptions): Promise<CheckDomainStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDomainStatus",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDomainStatusResponse>(await this.callApi(params, req, runtime), new CheckDomainStatusResponse({}));
  }

  async checkDomainStatus(request: CheckDomainStatusRequest): Promise<CheckDomainStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDomainStatusWithOptions(request, runtime);
  }

  async checkSelectedDomainStatusWithOptions(request: CheckSelectedDomainStatusRequest, runtime: $Util.RuntimeOptions): Promise<CheckSelectedDomainStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckSelectedDomainStatus",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckSelectedDomainStatusResponse>(await this.callApi(params, req, runtime), new CheckSelectedDomainStatusResponse({}));
  }

  async checkSelectedDomainStatus(request: CheckSelectedDomainStatusRequest): Promise<CheckSelectedDomainStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkSelectedDomainStatusWithOptions(request, runtime);
  }

  async createFixedPriceDemandOrderWithOptions(request: CreateFixedPriceDemandOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateFixedPriceDemandOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFixedPriceDemandOrder",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFixedPriceDemandOrderResponse>(await this.callApi(params, req, runtime), new CreateFixedPriceDemandOrderResponse({}));
  }

  async createFixedPriceDemandOrder(request: CreateFixedPriceDemandOrderRequest): Promise<CreateFixedPriceDemandOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFixedPriceDemandOrderWithOptions(request, runtime);
  }

  async createFixedPriceSelectedOrderWithOptions(request: CreateFixedPriceSelectedOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateFixedPriceSelectedOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.expectedPrice)) {
      query["ExpectedPrice"] = request.expectedPrice;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFixedPriceSelectedOrder",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFixedPriceSelectedOrderResponse>(await this.callApi(params, req, runtime), new CreateFixedPriceSelectedOrderResponse({}));
  }

  async createFixedPriceSelectedOrder(request: CreateFixedPriceSelectedOrderRequest): Promise<CreateFixedPriceSelectedOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFixedPriceSelectedOrderWithOptions(request, runtime);
  }

  async failDemandWithOptions(request: FailDemandRequest, runtime: $Util.RuntimeOptions): Promise<FailDemandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FailDemand",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FailDemandResponse>(await this.callApi(params, req, runtime), new FailDemandResponse({}));
  }

  async failDemand(request: FailDemandRequest): Promise<FailDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.failDemandWithOptions(request, runtime);
  }

  async finishDemandWithOptions(request: FinishDemandRequest, runtime: $Util.RuntimeOptions): Promise<FinishDemandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FinishDemand",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FinishDemandResponse>(await this.callApi(params, req, runtime), new FinishDemandResponse({}));
  }

  async finishDemand(request: FinishDemandRequest): Promise<FinishDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.finishDemandWithOptions(request, runtime);
  }

  async getIntlDomainDownloadUrlWithOptions(runtime: $Util.RuntimeOptions): Promise<GetIntlDomainDownloadUrlResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetIntlDomainDownloadUrl",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIntlDomainDownloadUrlResponse>(await this.callApi(params, req, runtime), new GetIntlDomainDownloadUrlResponse({}));
  }

  async getIntlDomainDownloadUrl(): Promise<GetIntlDomainDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIntlDomainDownloadUrlWithOptions(runtime);
  }

  async getReserveDomainUrlWithOptions(runtime: $Util.RuntimeOptions): Promise<GetReserveDomainUrlResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetReserveDomainUrl",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetReserveDomainUrlResponse>(await this.callApi(params, req, runtime), new GetReserveDomainUrlResponse({}));
  }

  async getReserveDomainUrl(): Promise<GetReserveDomainUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getReserveDomainUrlWithOptions(runtime);
  }

  async purchaseIntlDomainWithOptions(request: PurchaseIntlDomainRequest, runtime: $Util.RuntimeOptions): Promise<PurchaseIntlDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.auctionId)) {
      body["AuctionId"] = request.auctionId;
    }

    if (!Util.isUnset(request.currency)) {
      body["Currency"] = request.currency;
    }

    if (!Util.isUnset(request.price)) {
      body["Price"] = request.price;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PurchaseIntlDomain",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PurchaseIntlDomainResponse>(await this.callApi(params, req, runtime), new PurchaseIntlDomainResponse({}));
  }

  async purchaseIntlDomain(request: PurchaseIntlDomainRequest): Promise<PurchaseIntlDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.purchaseIntlDomainWithOptions(request, runtime);
  }

  async queryAuctionDetailWithOptions(request: QueryAuctionDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryAuctionDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.auctionId)) {
      body["AuctionId"] = request.auctionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryAuctionDetail",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAuctionDetailResponse>(await this.callApi(params, req, runtime), new QueryAuctionDetailResponse({}));
  }

  async queryAuctionDetail(request: QueryAuctionDetailRequest): Promise<QueryAuctionDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAuctionDetailWithOptions(request, runtime);
  }

  async queryAuctionsWithOptions(request: QueryAuctionsRequest, runtime: $Util.RuntimeOptions): Promise<QueryAuctionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryAuctions",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAuctionsResponse>(await this.callApi(params, req, runtime), new QueryAuctionsResponse({}));
  }

  async queryAuctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAuctionsWithOptions(request, runtime);
  }

  async queryBidRecordsWithOptions(request: QueryBidRecordsRequest, runtime: $Util.RuntimeOptions): Promise<QueryBidRecordsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.auctionId)) {
      body["AuctionId"] = request.auctionId;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryBidRecords",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBidRecordsResponse>(await this.callApi(params, req, runtime), new QueryBidRecordsResponse({}));
  }

  async queryBidRecords(request: QueryBidRecordsRequest): Promise<QueryBidRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBidRecordsWithOptions(request, runtime);
  }

  async queryBookingDomainInfoWithOptions(request: QueryBookingDomainInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryBookingDomainInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryBookingDomainInfo",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBookingDomainInfoResponse>(await this.callApi(params, req, runtime), new QueryBookingDomainInfoResponse({}));
  }

  async queryBookingDomainInfo(request: QueryBookingDomainInfoRequest): Promise<QueryBookingDomainInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBookingDomainInfoWithOptions(request, runtime);
  }

  async queryBrokerDemandWithOptions(request: QueryBrokerDemandRequest, runtime: $Util.RuntimeOptions): Promise<QueryBrokerDemandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBrokerDemand",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBrokerDemandResponse>(await this.callApi(params, req, runtime), new QueryBrokerDemandResponse({}));
  }

  async queryBrokerDemand(request: QueryBrokerDemandRequest): Promise<QueryBrokerDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBrokerDemandWithOptions(request, runtime);
  }

  async queryBrokerDemandRecordWithOptions(request: QueryBrokerDemandRecordRequest, runtime: $Util.RuntimeOptions): Promise<QueryBrokerDemandRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBrokerDemandRecord",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBrokerDemandRecordResponse>(await this.callApi(params, req, runtime), new QueryBrokerDemandRecordResponse({}));
  }

  async queryBrokerDemandRecord(request: QueryBrokerDemandRecordRequest): Promise<QueryBrokerDemandRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBrokerDemandRecordWithOptions(request, runtime);
  }

  async queryDomainTransferStatusWithOptions(request: QueryDomainTransferStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainTransferStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryDomainTransferStatus",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDomainTransferStatusResponse>(await this.callApi(params, req, runtime), new QueryDomainTransferStatusResponse({}));
  }

  async queryDomainTransferStatus(request: QueryDomainTransferStatusRequest): Promise<QueryDomainTransferStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainTransferStatusWithOptions(request, runtime);
  }

  async queryPurchasedDomainsWithOptions(request: QueryPurchasedDomainsRequest, runtime: $Util.RuntimeOptions): Promise<QueryPurchasedDomainsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endOperationTime)) {
      body["EndOperationTime"] = request.endOperationTime;
    }

    if (!Util.isUnset(request.opTimeOrder)) {
      body["OpTimeOrder"] = request.opTimeOrder;
    }

    if (!Util.isUnset(request.operationStatus)) {
      body["OperationStatus"] = request.operationStatus;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.startOperationTime)) {
      body["StartOperationTime"] = request.startOperationTime;
    }

    if (!Util.isUnset(request.updateTimeOrder)) {
      body["UpdateTimeOrder"] = request.updateTimeOrder;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryPurchasedDomains",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPurchasedDomainsResponse>(await this.callApi(params, req, runtime), new QueryPurchasedDomainsResponse({}));
  }

  async queryPurchasedDomains(request: QueryPurchasedDomainsRequest): Promise<QueryPurchasedDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPurchasedDomainsWithOptions(request, runtime);
  }

  async recordDemandWithOptions(request: RecordDemandRequest, runtime: $Util.RuntimeOptions): Promise<RecordDemandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RecordDemand",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecordDemandResponse>(await this.callApi(params, req, runtime), new RecordDemandResponse({}));
  }

  async recordDemand(request: RecordDemandRequest): Promise<RecordDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recordDemandWithOptions(request, runtime);
  }

  async refuseDemandWithOptions(request: RefuseDemandRequest, runtime: $Util.RuntimeOptions): Promise<RefuseDemandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefuseDemand",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefuseDemandResponse>(await this.callApi(params, req, runtime), new RefuseDemandResponse({}));
  }

  async refuseDemand(request: RefuseDemandRequest): Promise<RefuseDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refuseDemandWithOptions(request, runtime);
  }

  async requestPayDemandWithOptions(request: RequestPayDemandRequest, runtime: $Util.RuntimeOptions): Promise<RequestPayDemandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.price)) {
      query["Price"] = request.price;
    }

    if (!Util.isUnset(request.produceType)) {
      query["ProduceType"] = request.produceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RequestPayDemand",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RequestPayDemandResponse>(await this.callApi(params, req, runtime), new RequestPayDemandResponse({}));
  }

  async requestPayDemand(request: RequestPayDemandRequest): Promise<RequestPayDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestPayDemandWithOptions(request, runtime);
  }

  async reserveDomainWithOptions(request: ReserveDomainRequest, runtime: $Util.RuntimeOptions): Promise<ReserveDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channels)) {
      body["Channels"] = request.channels;
    }

    if (!Util.isUnset(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReserveDomain",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReserveDomainResponse>(await this.callApi(params, req, runtime), new ReserveDomainResponse({}));
  }

  async reserveDomain(request: ReserveDomainRequest): Promise<ReserveDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reserveDomainWithOptions(request, runtime);
  }

  async reserveIntlDomainWithOptions(request: ReserveIntlDomainRequest, runtime: $Util.RuntimeOptions): Promise<ReserveIntlDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReserveIntlDomain",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReserveIntlDomainResponse>(await this.callApi(params, req, runtime), new ReserveIntlDomainResponse({}));
  }

  async reserveIntlDomain(request: ReserveIntlDomainRequest): Promise<ReserveIntlDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reserveIntlDomainWithOptions(request, runtime);
  }

  async selectedDomainListWithOptions(request: SelectedDomainListRequest, runtime: $Util.RuntimeOptions): Promise<SelectedDomainListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listDate)) {
      query["ListDate"] = request.listDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SelectedDomainList",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SelectedDomainListResponse>(await this.callApi(params, req, runtime), new SelectedDomainListResponse({}));
  }

  async selectedDomainList(request: SelectedDomainListRequest): Promise<SelectedDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.selectedDomainListWithOptions(request, runtime);
  }

  async submitPurchaseInfoWithOptions(request: SubmitPurchaseInfoRequest, runtime: $Util.RuntimeOptions): Promise<SubmitPurchaseInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.purchaseCurrency)) {
      body["PurchaseCurrency"] = request.purchaseCurrency;
    }

    if (!Util.isUnset(request.purchasePrice)) {
      body["PurchasePrice"] = request.purchasePrice;
    }

    if (!Util.isUnset(request.purchaseProofs)) {
      body["PurchaseProofs"] = request.purchaseProofs;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitPurchaseInfo",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitPurchaseInfoResponse>(await this.callApi(params, req, runtime), new SubmitPurchaseInfoResponse({}));
  }

  async submitPurchaseInfo(request: SubmitPurchaseInfoRequest): Promise<SubmitPurchaseInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitPurchaseInfoWithOptions(request, runtime);
  }

  async updatePartnerReservePriceWithOptions(request: UpdatePartnerReservePriceRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePartnerReservePriceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.biddingId)) {
      body["BiddingId"] = request.biddingId;
    }

    if (!Util.isUnset(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.partnerType)) {
      body["PartnerType"] = request.partnerType;
    }

    if (!Util.isUnset(request.reservePrice)) {
      body["ReservePrice"] = request.reservePrice;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePartnerReservePrice",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePartnerReservePriceResponse>(await this.callApi(params, req, runtime), new UpdatePartnerReservePriceResponse({}));
  }

  async updatePartnerReservePrice(request: UpdatePartnerReservePriceRequest): Promise<UpdatePartnerReservePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePartnerReservePriceWithOptions(request, runtime);
  }

}
