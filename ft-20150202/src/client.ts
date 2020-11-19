// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import ROA, * as $ROA from '@alicloud/roa-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class StartService2Request extends $tea.Model {
  headers?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartService2ResponseBody extends $tea.Model {
  requestId: string;
  orderId: string;
  message: string;
  errorCode: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
      message: 'Message',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
      message: 'string',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartService2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: StartService2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartService2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaGzipRequest extends $tea.Model {
  headers?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaGzipResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaCommonRequest extends $tea.Model {
  headers?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaCommonResponseBody extends $tea.Model {
  headers: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaCommonResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RoaCommonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RoaCommonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateAkProvenRequest extends $tea.Model {
  headers?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateAkProvenResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaIllegalDynamicHostHttpApiQuery extends $tea.Model {
  proxyOriginalSourceIp?: string;
  proxyOriginalSecurityTransport?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      proxyOriginalSourceIp: 'proxy_original_source_ip',
      proxyOriginalSecurityTransport: 'proxy_original_security_transport',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyOriginalSourceIp: 'string',
      proxyOriginalSecurityTransport: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaIllegalDynamicHostHttpApiRequest extends $tea.Model {
  headers?: { [key: string]: string };
  query?: RoaIllegalDynamicHostHttpApiQuery;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      query: RoaIllegalDynamicHostHttpApiQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaIllegalDynamicHostHttpApiResponseBody extends $tea.Model {
  requestId: string;
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

export class RoaIllegalDynamicHostHttpApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RoaIllegalDynamicHostHttpApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RoaIllegalDynamicHostHttpApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaDynamicHostHttpApiQuery extends $tea.Model {
  proxyOriginalSourceIp?: string;
  proxyOriginalSecurityTransport?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      proxyOriginalSourceIp: 'proxy_original_source_ip',
      proxyOriginalSecurityTransport: 'proxy_original_security_transport',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyOriginalSourceIp: 'string',
      proxyOriginalSecurityTransport: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaDynamicHostHttpApiRequest extends $tea.Model {
  headers?: { [key: string]: string };
  query?: RoaDynamicHostHttpApiQuery;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      query: RoaDynamicHostHttpApiQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaDynamicHostHttpApiResponseBody extends $tea.Model {
  requestId: string;
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

export class RoaDynamicHostHttpApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RoaDynamicHostHttpApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RoaDynamicHostHttpApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaHttpIgnoreHttpsApiRequest extends $tea.Model {
  headers?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaHttpIgnoreHttpsApiResponseBody extends $tea.Model {
  requestId: string;
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

export class RoaHttpIgnoreHttpsApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RoaHttpIgnoreHttpsApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RoaHttpIgnoreHttpsApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaAnonymousApiRequest extends $tea.Model {
  headers?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaAnonymousApiResponseBody extends $tea.Model {
  headers: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaAnonymousApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RoaAnonymousApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RoaAnonymousApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaHttpApiRequest extends $tea.Model {
  headers?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaHttpApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaDubboApiQuery extends $tea.Model {
  proxyOriginalSourceIp?: string;
  proxyOriginalSecurityTransport?: boolean;
  static names(): { [key: string]: string } {
    return {
      proxyOriginalSourceIp: 'proxy_original_source_ip',
      proxyOriginalSecurityTransport: 'proxy_original_security_transport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyOriginalSourceIp: 'string',
      proxyOriginalSecurityTransport: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaDubboApiRequest extends $tea.Model {
  headers?: { [key: string]: string };
  query?: RoaDubboApiQuery;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      query: RoaDubboApiQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaDubboApiResponseBody extends $tea.Model {
  regionId: string;
  success: string;
  callerUid: string;
  callerBid: string;
  proxyTrustTransportInfo: string;
  akMfaPresent: string;
  callerType: string;
  callerParentId: string;
  resourceOwnerId: string;
  appIp: string;
  proxyOriginalSourceIp: string;
  proxyOriginalSecurityTransport: string;
  securityTransport: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      success: 'Success',
      callerUid: 'callerUid',
      callerBid: 'callerBid',
      proxyTrustTransportInfo: 'proxy_trust_transport_info',
      akMfaPresent: 'ak_mfa_present',
      callerType: 'callerType',
      callerParentId: 'callerParentId',
      resourceOwnerId: 'resourceOwnerId',
      appIp: 'app_ip',
      proxyOriginalSourceIp: 'proxy_original_source_ip',
      proxyOriginalSecurityTransport: 'proxy_original_security_transport',
      securityTransport: 'security_transport',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      success: 'string',
      callerUid: 'string',
      callerBid: 'string',
      proxyTrustTransportInfo: 'string',
      akMfaPresent: 'string',
      callerType: 'string',
      callerParentId: 'string',
      resourceOwnerId: 'string',
      appIp: 'string',
      proxyOriginalSourceIp: 'string',
      proxyOriginalSecurityTransport: 'string',
      securityTransport: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoaDubboApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RoaDubboApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RoaDubboApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends ROA {

  constructor(config: $ROA.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-2-pop': "ft.aliyuncs.com",
      'ap-south-1': "ft.aliyuncs.com",
      'ap-southeast-1': "ft.aliyuncs.com",
      'ap-southeast-2': "ft.aliyuncs.com",
      'ap-southeast-3': "ft.aliyuncs.com",
      'ap-southeast-5': "ft.aliyuncs.com",
      'cn-beijing': "ft.aliyuncs.com",
      'cn-beijing-finance-1': "ft.aliyuncs.com",
      'cn-beijing-finance-pop': "ft.aliyuncs.com",
      'cn-beijing-gov-1': "ft.aliyuncs.com",
      'cn-beijing-nu16-b01': "ft.aliyuncs.com",
      'cn-chengdu': "ft.aliyuncs.com",
      'cn-edge-1': "ft.aliyuncs.com",
      'cn-fujian': "ft.aliyuncs.com",
      'cn-haidian-cm12-c01': "ft.aliyuncs.com",
      'cn-hangzhou-bj-b01': "ft.aliyuncs.com",
      'cn-hangzhou-finance': "ft.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "ft.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "ft.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "ft.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "ft.aliyuncs.com",
      'cn-hangzhou-test-306': "ft.aliyuncs.com",
      'cn-hongkong-finance-pop': "ft.aliyuncs.com",
      'cn-huhehaote': "ft.aliyuncs.com",
      'cn-huhehaote-nebula-1': "ft.aliyuncs.com",
      'cn-qingdao': "ft.aliyuncs.com",
      'cn-qingdao-nebula': "ft.aliyuncs.com",
      'cn-shanghai-et15-b01': "ft.aliyuncs.com",
      'cn-shanghai-et2-b01': "ft.aliyuncs.com",
      'cn-shanghai-finance-1': "ft.aliyuncs.com",
      'cn-shanghai-inner': "ft.aliyuncs.com",
      'cn-shanghai-internal-test-1': "ft.aliyuncs.com",
      'cn-shenzhen-finance-1': "ft.aliyuncs.com",
      'cn-shenzhen-inner': "ft.aliyuncs.com",
      'cn-shenzhen-st4-d01': "ft.aliyuncs.com",
      'cn-shenzhen-su18-b01': "ft.aliyuncs.com",
      'cn-wuhan': "ft.aliyuncs.com",
      'cn-wulanchabu': "ft.aliyuncs.com",
      'cn-yushanfang': "ft.aliyuncs.com",
      'cn-zhangbei': "ft.aliyuncs.com",
      'cn-zhangbei-na61-b01': "ft.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "ft.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "ft.aliyuncs.com",
      'eu-central-1': "ft.aliyuncs.com",
      'eu-west-1': "ft.aliyuncs.com",
      'eu-west-1-oxs': "ft.aliyuncs.com",
      'me-east-1': "ft.aliyuncs.com",
      'rus-west-1-pop': "ft.aliyuncs.com",
      'us-west-1': "ft.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpointHost = this.getEndpoint("ft", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpointHost);
  }


  async startService2WithOptions(request: StartService2Request, runtime: $Util.RuntimeOptions): Promise<StartService2Response> {
    Util.validateModel(request);
    return $tea.cast<StartService2Response>(await this.doRequestWithAction("StartService2", "2015-02-02", "HTTPS", "POST", "AK,APP,PrivateKey,BearerToken", `/service/open`, null, request.headers, null, runtime), new StartService2Response({}));
  }

  async startService2(request: StartService2Request): Promise<StartService2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startService2WithOptions(request, runtime);
  }

  async roaGzipWithOptions(request: RoaGzipRequest, runtime: $Util.RuntimeOptions): Promise<RoaGzipResponse> {
    Util.validateModel(request);
    return $tea.cast<RoaGzipResponse>(await this.doRequestWithAction("RoaGzip", "2015-02-02", "HTTPS", "POST", "AK,PrivateKey", `/RoaGzip`, null, request.headers, null, runtime), new RoaGzipResponse({}));
  }

  async roaGzip(request: RoaGzipRequest): Promise<RoaGzipResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.roaGzipWithOptions(request, runtime);
  }

  async roaCommonWithOptions(request: RoaCommonRequest, runtime: $Util.RuntimeOptions): Promise<RoaCommonResponse> {
    Util.validateModel(request);
    return $tea.cast<RoaCommonResponse>(await this.doRequestWithAction("RoaCommon", "2015-02-02", "HTTPS", "GET", "AK,PrivateKey", `/RoaCommon`, null, request.headers, null, runtime), new RoaCommonResponse({}));
  }

  async roaCommon(request: RoaCommonRequest): Promise<RoaCommonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.roaCommonWithOptions(request, runtime);
  }

  async validateAkProvenWithOptions(request: ValidateAkProvenRequest, runtime: $Util.RuntimeOptions): Promise<ValidateAkProvenResponse> {
    Util.validateModel(request);
    return $tea.cast<ValidateAkProvenResponse>(await this.doRequestWithAction("ValidateAkProven", "2015-02-02", "HTTPS", "POST", "AK,APP,PrivateKey", `/ak/proven`, null, request.headers, null, runtime), new ValidateAkProvenResponse({}));
  }

  async validateAkProven(request: ValidateAkProvenRequest): Promise<ValidateAkProvenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateAkProvenWithOptions(request, runtime);
  }

  async roaIllegalDynamicHostHttpApiWithOptions(request: RoaIllegalDynamicHostHttpApiRequest, runtime: $Util.RuntimeOptions): Promise<RoaIllegalDynamicHostHttpApiResponse> {
    Util.validateModel(request);
    return $tea.cast<RoaIllegalDynamicHostHttpApiResponse>(await this.doRequestWithAction("RoaIllegalDynamicHostHttpApi", "2015-02-02", "HTTPS", "POST", "AK", `/web/getData/dynamic/illegal`, Util.stringifyMapValue($tea.toMap(request.query)), request.headers, null, runtime), new RoaIllegalDynamicHostHttpApiResponse({}));
  }

  async roaIllegalDynamicHostHttpApi(request: RoaIllegalDynamicHostHttpApiRequest): Promise<RoaIllegalDynamicHostHttpApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.roaIllegalDynamicHostHttpApiWithOptions(request, runtime);
  }

  async roaDynamicHostHttpApiWithOptions(request: RoaDynamicHostHttpApiRequest, runtime: $Util.RuntimeOptions): Promise<RoaDynamicHostHttpApiResponse> {
    Util.validateModel(request);
    return $tea.cast<RoaDynamicHostHttpApiResponse>(await this.doRequestWithAction("RoaDynamicHostHttpApi", "2015-02-02", "HTTPS", "POST", "AK", `/web/getData/dynamic`, Util.stringifyMapValue($tea.toMap(request.query)), request.headers, null, runtime), new RoaDynamicHostHttpApiResponse({}));
  }

  async roaDynamicHostHttpApi(request: RoaDynamicHostHttpApiRequest): Promise<RoaDynamicHostHttpApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.roaDynamicHostHttpApiWithOptions(request, runtime);
  }

  async roaHttpIgnoreHttpsApiWithOptions(request: RoaHttpIgnoreHttpsApiRequest, runtime: $Util.RuntimeOptions): Promise<RoaHttpIgnoreHttpsApiResponse> {
    Util.validateModel(request);
    return $tea.cast<RoaHttpIgnoreHttpsApiResponse>(await this.doRequestWithAction("RoaHttpIgnoreHttpsApi", "2015-02-02", "HTTPS", "POST", "AK", `/ignorehttps`, null, request.headers, null, runtime), new RoaHttpIgnoreHttpsApiResponse({}));
  }

  async roaHttpIgnoreHttpsApi(request: RoaHttpIgnoreHttpsApiRequest): Promise<RoaHttpIgnoreHttpsApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.roaHttpIgnoreHttpsApiWithOptions(request, runtime);
  }

  async roaAnonymousApiWithOptions(request: RoaAnonymousApiRequest, runtime: $Util.RuntimeOptions): Promise<RoaAnonymousApiResponse> {
    Util.validateModel(request);
    return $tea.cast<RoaAnonymousApiResponse>(await this.doRequestWithAction("RoaAnonymousApi", "2015-02-02", "HTTPS", "GET", "Anonymous", `/RoaAnonymousApi`, null, request.headers, null, runtime), new RoaAnonymousApiResponse({}));
  }

  async roaAnonymousApi(request: RoaAnonymousApiRequest): Promise<RoaAnonymousApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.roaAnonymousApiWithOptions(request, runtime);
  }

  async roaHttpApiWithOptions(request: RoaHttpApiRequest, runtime: $Util.RuntimeOptions): Promise<RoaHttpApiResponse> {
    Util.validateModel(request);
    return $tea.cast<RoaHttpApiResponse>(await this.doRequestWithAction("RoaHttpApi", "2015-02-02", "HTTPS", "POST", "AK,APP", `/web/getData`, null, request.headers, null, runtime), new RoaHttpApiResponse({}));
  }

  async roaHttpApi(request: RoaHttpApiRequest): Promise<RoaHttpApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.roaHttpApiWithOptions(request, runtime);
  }

  async roaDubboApiWithOptions(request: RoaDubboApiRequest, runtime: $Util.RuntimeOptions): Promise<RoaDubboApiResponse> {
    Util.validateModel(request);
    return $tea.cast<RoaDubboApiResponse>(await this.doRequestWithAction("RoaDubboApi", "2015-02-02", "HTTPS", "GET", "AK,PrivateKey", `/RoaDubboApi`, Util.stringifyMapValue($tea.toMap(request.query)), request.headers, null, runtime), new RoaDubboApiResponse({}));
  }

  async roaDubboApi(request: RoaDubboApiRequest): Promise<RoaDubboApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.roaDubboApiWithOptions(request, runtime);
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

}
