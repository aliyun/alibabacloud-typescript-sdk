// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class QueryCdpOfferRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vendor?: string;
  channelType?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vendor: 'Vendor',
      channelType: 'ChannelType',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vendor: 'string',
      channelType: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCdpOfferResponseBody extends $tea.Model {
  flowOffers?: QueryCdpOfferResponseBodyFlowOffers;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      flowOffers: 'FlowOffers',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowOffers: QueryCdpOfferResponseBodyFlowOffers,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCdpOfferResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCdpOfferResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCdpOfferResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCdpOfferByIdRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  offerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      offerId: 'OfferId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      offerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCdpOfferByIdResponseBody extends $tea.Model {
  flowOffers?: QueryCdpOfferByIdResponseBodyFlowOffers;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      flowOffers: 'FlowOffers',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowOffers: QueryCdpOfferByIdResponseBodyFlowOffers,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCdpOfferByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCdpOfferByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCdpOfferByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCdpOrderRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  outOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      outOrderId: 'OutOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      outOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCdpOrderResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: QueryCdpOrderResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: QueryCdpOrderResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCdpOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCdpOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCdpOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCdpOfferResponseBodyFlowOffersFlowOffer extends $tea.Model {
  right?: string;
  useEff?: string;
  channelType?: string;
  useLimit?: string;
  useScene?: string;
  vendor?: string;
  grade?: string;
  offerId?: number;
  price?: number;
  flowType?: string;
  discount?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      right: 'Right',
      useEff: 'UseEff',
      channelType: 'ChannelType',
      useLimit: 'UseLimit',
      useScene: 'UseScene',
      vendor: 'Vendor',
      grade: 'Grade',
      offerId: 'OfferId',
      price: 'Price',
      flowType: 'FlowType',
      discount: 'Discount',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      right: 'string',
      useEff: 'string',
      channelType: 'string',
      useLimit: 'string',
      useScene: 'string',
      vendor: 'string',
      grade: 'string',
      offerId: 'number',
      price: 'number',
      flowType: 'string',
      discount: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCdpOfferResponseBodyFlowOffers extends $tea.Model {
  flowOffer?: QueryCdpOfferResponseBodyFlowOffersFlowOffer[];
  static names(): { [key: string]: string } {
    return {
      flowOffer: 'FlowOffer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowOffer: { 'type': 'array', 'itemType': QueryCdpOfferResponseBodyFlowOffersFlowOffer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCdpOfferByIdResponseBodyFlowOffersFlowOffer extends $tea.Model {
  right?: string;
  useEff?: string;
  channelType?: string;
  useLimit?: string;
  useScene?: string;
  vendor?: string;
  grade?: string;
  offerId?: number;
  price?: number;
  flowType?: string;
  discount?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      right: 'Right',
      useEff: 'UseEff',
      channelType: 'ChannelType',
      useLimit: 'UseLimit',
      useScene: 'UseScene',
      vendor: 'Vendor',
      grade: 'Grade',
      offerId: 'OfferId',
      price: 'Price',
      flowType: 'FlowType',
      discount: 'Discount',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      right: 'string',
      useEff: 'string',
      channelType: 'string',
      useLimit: 'string',
      useScene: 'string',
      vendor: 'string',
      grade: 'string',
      offerId: 'number',
      price: 'number',
      flowType: 'string',
      discount: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCdpOfferByIdResponseBodyFlowOffers extends $tea.Model {
  flowOffer?: QueryCdpOfferByIdResponseBodyFlowOffersFlowOffer[];
  static names(): { [key: string]: string } {
    return {
      flowOffer: 'FlowOffer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowOffer: { 'type': 'array', 'itemType': QueryCdpOfferByIdResponseBodyFlowOffersFlowOffer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCdpOrderResponseBodyData extends $tea.Model {
  extendParam?: string;
  resultCode?: string;
  resultMsg?: string;
  static names(): { [key: string]: string } {
    return {
      extendParam: 'ExtendParam',
      resultCode: 'ResultCode',
      resultMsg: 'ResultMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendParam: 'string',
      resultCode: 'string',
      resultMsg: 'string',
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
    this._endpoint = this.getEndpoint("dycdpapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async queryCdpOfferWithOptions(request: QueryCdpOfferRequest, runtime: $Util.RuntimeOptions): Promise<QueryCdpOfferResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCdpOfferResponse>(await this.doRPCRequest("QueryCdpOffer", "2018-06-10", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCdpOfferResponse({}));
  }

  async queryCdpOffer(request: QueryCdpOfferRequest): Promise<QueryCdpOfferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCdpOfferWithOptions(request, runtime);
  }

  async queryCdpOfferByIdWithOptions(request: QueryCdpOfferByIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryCdpOfferByIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCdpOfferByIdResponse>(await this.doRPCRequest("QueryCdpOfferById", "2018-06-10", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCdpOfferByIdResponse({}));
  }

  async queryCdpOfferById(request: QueryCdpOfferByIdRequest): Promise<QueryCdpOfferByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCdpOfferByIdWithOptions(request, runtime);
  }

  async queryCdpOrderWithOptions(request: QueryCdpOrderRequest, runtime: $Util.RuntimeOptions): Promise<QueryCdpOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCdpOrderResponse>(await this.doRPCRequest("QueryCdpOrder", "2018-06-10", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCdpOrderResponse({}));
  }

  async queryCdpOrder(request: QueryCdpOrderRequest): Promise<QueryCdpOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCdpOrderWithOptions(request, runtime);
  }

}
