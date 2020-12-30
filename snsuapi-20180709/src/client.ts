// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BandOfferOrderRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  bandId?: string;
  offerId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      bandId: 'BandId',
      offerId: 'OfferId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      bandId: 'string',
      offerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandOfferOrderResponseBody extends $tea.Model {
  resultModule?: BandOfferOrderResponseBodyResultModule;
  requestId?: string;
  resultMessage?: string;
  resultCode?: string;
  static names(): { [key: string]: string } {
    return {
      resultModule: 'ResultModule',
      requestId: 'RequestId',
      resultMessage: 'ResultMessage',
      resultCode: 'ResultCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultModule: BandOfferOrderResponseBodyResultModule,
      requestId: 'string',
      resultMessage: 'string',
      resultCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandOfferOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BandOfferOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BandOfferOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandPrecheckRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ipAddress?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ipAddress: 'IpAddress',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ipAddress: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandPrecheckResponseBody extends $tea.Model {
  resultModule?: BandPrecheckResponseBodyResultModule;
  requestId?: string;
  resultMessage?: string;
  resultCode?: string;
  static names(): { [key: string]: string } {
    return {
      resultModule: 'ResultModule',
      requestId: 'RequestId',
      resultMessage: 'ResultMessage',
      resultCode: 'ResultCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultModule: BandPrecheckResponseBodyResultModule,
      requestId: 'string',
      resultMessage: 'string',
      resultCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandPrecheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BandPrecheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BandPrecheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandStartSpeedUpRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ipAddress?: string;
  port?: number;
  bandId?: number;
  direction?: string;
  targetBandwidth?: number;
  bandScene?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ipAddress: 'IpAddress',
      port: 'Port',
      bandId: 'BandId',
      direction: 'Direction',
      targetBandwidth: 'TargetBandwidth',
      bandScene: 'BandScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ipAddress: 'string',
      port: 'number',
      bandId: 'number',
      direction: 'string',
      targetBandwidth: 'number',
      bandScene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandStartSpeedUpResponseBody extends $tea.Model {
  resultModule?: boolean;
  requestId?: string;
  resultMessage?: string;
  resultCode?: string;
  static names(): { [key: string]: string } {
    return {
      resultModule: 'ResultModule',
      requestId: 'RequestId',
      resultMessage: 'ResultMessage',
      resultCode: 'ResultCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultModule: 'boolean',
      requestId: 'string',
      resultMessage: 'string',
      resultCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandStartSpeedUpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BandStartSpeedUpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BandStartSpeedUpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandStatusQueryRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  bandId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      bandId: 'BandId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      bandId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandStatusQueryResponseBody extends $tea.Model {
  resultModule?: BandStatusQueryResponseBodyResultModule;
  requestId?: string;
  resultMessage?: string;
  resultCode?: string;
  static names(): { [key: string]: string } {
    return {
      resultModule: 'ResultModule',
      requestId: 'RequestId',
      resultMessage: 'ResultMessage',
      resultCode: 'ResultCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultModule: BandStatusQueryResponseBodyResultModule,
      requestId: 'string',
      resultMessage: 'string',
      resultCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandStatusQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BandStatusQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BandStatusQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandStopSpeedUpRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ipAddress?: string;
  port?: number;
  bandId?: number;
  direction?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ipAddress: 'IpAddress',
      port: 'Port',
      bandId: 'BandId',
      direction: 'Direction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ipAddress: 'string',
      port: 'number',
      bandId: 'number',
      direction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandStopSpeedUpResponseBody extends $tea.Model {
  resultModule?: boolean;
  requestId?: string;
  resultMessage?: string;
  resultCode?: string;
  static names(): { [key: string]: string } {
    return {
      resultModule: 'ResultModule',
      requestId: 'RequestId',
      resultMessage: 'ResultMessage',
      resultCode: 'ResultCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultModule: 'boolean',
      requestId: 'string',
      resultMessage: 'string',
      resultCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandStopSpeedUpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BandStopSpeedUpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BandStopSpeedUpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileStartSpeedUpRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  token?: string;
  duration?: string;
  ip?: string;
  publicIp?: string;
  publicPort?: string;
  destinationIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      token: 'Token',
      duration: 'Duration',
      ip: 'Ip',
      publicIp: 'PublicIp',
      publicPort: 'PublicPort',
      destinationIpAddress: 'DestinationIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      token: 'string',
      duration: 'string',
      ip: 'string',
      publicIp: 'string',
      publicPort: 'string',
      destinationIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileStartSpeedUpResponseBody extends $tea.Model {
  resultModule?: string;
  requestId?: string;
  resultMessage?: string;
  resultCode?: string;
  static names(): { [key: string]: string } {
    return {
      resultModule: 'ResultModule',
      requestId: 'RequestId',
      resultMessage: 'ResultMessage',
      resultCode: 'ResultCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultModule: 'string',
      requestId: 'string',
      resultMessage: 'string',
      resultCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileStartSpeedUpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MobileStartSpeedUpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MobileStartSpeedUpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileStatusQueryRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  correlationId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      correlationId: 'CorrelationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      correlationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileStatusQueryResponseBody extends $tea.Model {
  resultModule?: boolean;
  requestId?: string;
  resultMessage?: string;
  resultCode?: string;
  static names(): { [key: string]: string } {
    return {
      resultModule: 'ResultModule',
      requestId: 'RequestId',
      resultMessage: 'ResultMessage',
      resultCode: 'ResultCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultModule: 'boolean',
      requestId: 'string',
      resultMessage: 'string',
      resultCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileStatusQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MobileStatusQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MobileStatusQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileStopSpeedUpRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  correlationId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      correlationId: 'CorrelationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      correlationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileStopSpeedUpResponseBody extends $tea.Model {
  resultModule?: boolean;
  requestId?: string;
  resultMessage?: string;
  resultCode?: string;
  static names(): { [key: string]: string } {
    return {
      resultModule: 'ResultModule',
      requestId: 'RequestId',
      resultMessage: 'ResultMessage',
      resultCode: 'ResultCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultModule: 'boolean',
      requestId: 'string',
      resultMessage: 'string',
      resultCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileStopSpeedUpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MobileStopSpeedUpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MobileStopSpeedUpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandOfferOrderResponseBodyResultModule extends $tea.Model {
  lxOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      lxOrderId: 'LxOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lxOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandPrecheckResponseBodyResultModuleBandOfferListBandOfferList extends $tea.Model {
  direction?: string;
  offerId?: number;
  bandwidth?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      offerId: 'OfferId',
      bandwidth: 'Bandwidth',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      offerId: 'number',
      bandwidth: 'number',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandPrecheckResponseBodyResultModuleBandOfferList extends $tea.Model {
  bandOfferList?: BandPrecheckResponseBodyResultModuleBandOfferListBandOfferList[];
  static names(): { [key: string]: string } {
    return {
      bandOfferList: 'BandOfferList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandOfferList: { 'type': 'array', 'itemType': BandPrecheckResponseBodyResultModuleBandOfferListBandOfferList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandPrecheckResponseBodyResultModule extends $tea.Model {
  uploadBandwidth?: number;
  bandId?: number;
  bandOfferList?: BandPrecheckResponseBodyResultModuleBandOfferList;
  downloadBandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      uploadBandwidth: 'UploadBandwidth',
      bandId: 'BandId',
      bandOfferList: 'BandOfferList',
      downloadBandwidth: 'DownloadBandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uploadBandwidth: 'number',
      bandId: 'number',
      bandOfferList: BandPrecheckResponseBodyResultModuleBandOfferList,
      downloadBandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandStatusQueryResponseBodyResultModule extends $tea.Model {
  uploadTarget?: number;
  downloadTarget?: number;
  static names(): { [key: string]: string } {
    return {
      uploadTarget: 'UploadTarget',
      downloadTarget: 'DownloadTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uploadTarget: 'number',
      downloadTarget: 'number',
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
    this._endpoint = this.getEndpoint("snsuapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async bandOfferOrderWithOptions(request: BandOfferOrderRequest, runtime: $Util.RuntimeOptions): Promise<BandOfferOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BandOfferOrderResponse>(await this.doRPCRequest("BandOfferOrder", "2018-07-09", "HTTPS", "POST", "AK", "json", req, runtime), new BandOfferOrderResponse({}));
  }

  async bandOfferOrder(request: BandOfferOrderRequest): Promise<BandOfferOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bandOfferOrderWithOptions(request, runtime);
  }

  async bandPrecheckWithOptions(request: BandPrecheckRequest, runtime: $Util.RuntimeOptions): Promise<BandPrecheckResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BandPrecheckResponse>(await this.doRPCRequest("BandPrecheck", "2018-07-09", "HTTPS", "POST", "AK", "json", req, runtime), new BandPrecheckResponse({}));
  }

  async bandPrecheck(request: BandPrecheckRequest): Promise<BandPrecheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bandPrecheckWithOptions(request, runtime);
  }

  async bandStartSpeedUpWithOptions(request: BandStartSpeedUpRequest, runtime: $Util.RuntimeOptions): Promise<BandStartSpeedUpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BandStartSpeedUpResponse>(await this.doRPCRequest("BandStartSpeedUp", "2018-07-09", "HTTPS", "POST", "AK", "json", req, runtime), new BandStartSpeedUpResponse({}));
  }

  async bandStartSpeedUp(request: BandStartSpeedUpRequest): Promise<BandStartSpeedUpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bandStartSpeedUpWithOptions(request, runtime);
  }

  async bandStatusQueryWithOptions(request: BandStatusQueryRequest, runtime: $Util.RuntimeOptions): Promise<BandStatusQueryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BandStatusQueryResponse>(await this.doRPCRequest("BandStatusQuery", "2018-07-09", "HTTPS", "POST", "AK", "json", req, runtime), new BandStatusQueryResponse({}));
  }

  async bandStatusQuery(request: BandStatusQueryRequest): Promise<BandStatusQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bandStatusQueryWithOptions(request, runtime);
  }

  async bandStopSpeedUpWithOptions(request: BandStopSpeedUpRequest, runtime: $Util.RuntimeOptions): Promise<BandStopSpeedUpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BandStopSpeedUpResponse>(await this.doRPCRequest("BandStopSpeedUp", "2018-07-09", "HTTPS", "POST", "AK", "json", req, runtime), new BandStopSpeedUpResponse({}));
  }

  async bandStopSpeedUp(request: BandStopSpeedUpRequest): Promise<BandStopSpeedUpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bandStopSpeedUpWithOptions(request, runtime);
  }

  async mobileStartSpeedUpWithOptions(request: MobileStartSpeedUpRequest, runtime: $Util.RuntimeOptions): Promise<MobileStartSpeedUpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MobileStartSpeedUpResponse>(await this.doRPCRequest("MobileStartSpeedUp", "2018-07-09", "HTTPS", "POST", "AK", "json", req, runtime), new MobileStartSpeedUpResponse({}));
  }

  async mobileStartSpeedUp(request: MobileStartSpeedUpRequest): Promise<MobileStartSpeedUpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mobileStartSpeedUpWithOptions(request, runtime);
  }

  async mobileStatusQueryWithOptions(request: MobileStatusQueryRequest, runtime: $Util.RuntimeOptions): Promise<MobileStatusQueryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MobileStatusQueryResponse>(await this.doRPCRequest("MobileStatusQuery", "2018-07-09", "HTTPS", "POST", "AK", "json", req, runtime), new MobileStatusQueryResponse({}));
  }

  async mobileStatusQuery(request: MobileStatusQueryRequest): Promise<MobileStatusQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mobileStatusQueryWithOptions(request, runtime);
  }

  async mobileStopSpeedUpWithOptions(request: MobileStopSpeedUpRequest, runtime: $Util.RuntimeOptions): Promise<MobileStopSpeedUpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MobileStopSpeedUpResponse>(await this.doRPCRequest("MobileStopSpeedUp", "2018-07-09", "HTTPS", "POST", "AK", "json", req, runtime), new MobileStopSpeedUpResponse({}));
  }

  async mobileStopSpeedUp(request: MobileStopSpeedUpRequest): Promise<MobileStopSpeedUpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mobileStopSpeedUpWithOptions(request, runtime);
  }

}
