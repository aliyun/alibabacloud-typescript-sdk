// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateDVOrderAuditRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  domain?: string;
  domainVerifyType?: string;
  username?: string;
  email?: string;
  mobile?: string;
  province?: string;
  city?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      domain: 'Domain',
      domainVerifyType: 'DomainVerifyType',
      username: 'Username',
      email: 'Email',
      mobile: 'Mobile',
      province: 'Province',
      city: 'City',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      domain: 'string',
      domainVerifyType: 'string',
      username: 'string',
      email: 'string',
      mobile: 'string',
      province: 'string',
      city: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDVOrderAuditResponseBody extends $tea.Model {
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

export class CreateDVOrderAuditResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDVOrderAuditResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDVOrderAuditResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserCertificateRequest extends $tea.Model {
  name?: string;
  cert?: string;
  key?: string;
  sourceIp?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      cert: 'Cert',
      key: 'Key',
      sourceIp: 'SourceIp',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      cert: 'string',
      key: 'string',
      sourceIp: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserCertificateResponseBody extends $tea.Model {
  requestId?: string;
  certId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certId: 'CertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUserCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUserCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserCertificateRequest extends $tea.Model {
  certId?: number;
  sourceIp?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      sourceIp: 'SourceIp',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
      sourceIp: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserCertificateResponseBody extends $tea.Model {
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

export class DeleteUserCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDVOrderResultRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDVOrderResultResponseBody extends $tea.Model {
  orderStatus?: string;
  checkName?: string;
  privateKey?: string;
  requestId?: string;
  checkType?: string;
  checkValue?: string;
  certificate?: string;
  static names(): { [key: string]: string } {
    return {
      orderStatus: 'OrderStatus',
      checkName: 'CheckName',
      privateKey: 'PrivateKey',
      requestId: 'RequestId',
      checkType: 'CheckType',
      checkValue: 'CheckValue',
      certificate: 'Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderStatus: 'string',
      checkName: 'string',
      privateKey: 'string',
      requestId: 'string',
      checkType: 'string',
      checkValue: 'string',
      certificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDVOrderResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDVOrderResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDVOrderResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderInstanceListRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  startIndex?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      startIndex: 'StartIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      startIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderInstanceListResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  orderList?: DescribeOrderInstanceListResponseBodyOrderList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      orderList: 'OrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      orderList: { 'type': 'array', 'itemType': DescribeOrderInstanceListResponseBodyOrderList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderInstanceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOrderInstanceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOrderInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserCertificateDetailRequest extends $tea.Model {
  certId?: number;
  sourceIp?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      sourceIp: 'SourceIp',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
      sourceIp: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserCertificateDetailResponseBody extends $tea.Model {
  fingerprint?: string;
  requestId?: string;
  issuer?: string;
  expired?: boolean;
  orgName?: string;
  city?: string;
  endDate?: string;
  province?: string;
  buyInAliyun?: boolean;
  common?: string;
  name?: string;
  startDate?: string;
  sans?: string;
  country?: string;
  cert?: string;
  id?: number;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      fingerprint: 'Fingerprint',
      requestId: 'RequestId',
      issuer: 'Issuer',
      expired: 'Expired',
      orgName: 'OrgName',
      city: 'City',
      endDate: 'EndDate',
      province: 'Province',
      buyInAliyun: 'BuyInAliyun',
      common: 'Common',
      name: 'Name',
      startDate: 'StartDate',
      sans: 'Sans',
      country: 'Country',
      cert: 'Cert',
      id: 'Id',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerprint: 'string',
      requestId: 'string',
      issuer: 'string',
      expired: 'boolean',
      orgName: 'string',
      city: 'string',
      endDate: 'string',
      province: 'string',
      buyInAliyun: 'boolean',
      common: 'string',
      name: 'string',
      startDate: 'string',
      sans: 'string',
      country: 'string',
      cert: 'string',
      id: 'number',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserCertificateDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserCertificateDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserCertificateDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserCertificateListRequest extends $tea.Model {
  showSize?: number;
  currentPage?: number;
  sourceIp?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      showSize: 'ShowSize',
      currentPage: 'CurrentPage',
      sourceIp: 'SourceIp',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showSize: 'number',
      currentPage: 'number',
      sourceIp: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserCertificateListResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  currentPage?: number;
  certificateList?: DescribeUserCertificateListResponseBodyCertificateList[];
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      certificateList: 'CertificateList',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      currentPage: 'number',
      certificateList: { 'type': 'array', 'itemType': DescribeUserCertificateListResponseBodyCertificateList },
      showSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserCertificateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserCertificateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserCertificateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderInstanceListResponseBodyOrderList extends $tea.Model {
  status?: string;
  certType?: string;
  instanceId?: string;
  source?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      certType: 'CertType',
      instanceId: 'InstanceId',
      source: 'Source',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      certType: 'string',
      instanceId: 'string',
      source: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserCertificateListResponseBodyCertificateList extends $tea.Model {
  startDate?: string;
  province?: string;
  sans?: string;
  common?: string;
  id?: number;
  country?: string;
  issuer?: string;
  buyInAliyun?: boolean;
  endDate?: string;
  expired?: boolean;
  fingerprint?: string;
  name?: string;
  city?: string;
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      startDate: 'startDate',
      province: 'province',
      sans: 'sans',
      common: 'common',
      id: 'id',
      country: 'country',
      issuer: 'issuer',
      buyInAliyun: 'buyInAliyun',
      endDate: 'endDate',
      expired: 'expired',
      fingerprint: 'fingerprint',
      name: 'name',
      city: 'city',
      orgName: 'orgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startDate: 'string',
      province: 'string',
      sans: 'string',
      common: 'string',
      id: 'number',
      country: 'string',
      issuer: 'string',
      buyInAliyun: 'boolean',
      endDate: 'string',
      expired: 'boolean',
      fingerprint: 'string',
      name: 'string',
      city: 'string',
      orgName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "cas.aliyuncs.com",
      'ap-northeast-2-pop': "cas.aliyuncs.com",
      'ap-southeast-1': "cas.aliyuncs.com",
      'ap-southeast-3': "cas.aliyuncs.com",
      'ap-southeast-5': "cas.aliyuncs.com",
      'cn-beijing': "cas.aliyuncs.com",
      'cn-beijing-finance-1': "cas.aliyuncs.com",
      'cn-beijing-finance-pop': "cas.aliyuncs.com",
      'cn-beijing-gov-1': "cas.aliyuncs.com",
      'cn-beijing-nu16-b01': "cas.aliyuncs.com",
      'cn-chengdu': "cas.aliyuncs.com",
      'cn-edge-1': "cas.aliyuncs.com",
      'cn-fujian': "cas.aliyuncs.com",
      'cn-haidian-cm12-c01': "cas.aliyuncs.com",
      'cn-hangzhou-bj-b01': "cas.aliyuncs.com",
      'cn-hangzhou-finance': "cas.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "cas.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "cas.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "cas.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "cas.aliyuncs.com",
      'cn-hangzhou-test-306': "cas.aliyuncs.com",
      'cn-hongkong': "cas.aliyuncs.com",
      'cn-hongkong-finance-pop': "cas.aliyuncs.com",
      'cn-huhehaote': "cas.aliyuncs.com",
      'cn-north-2-gov-1': "cas.aliyuncs.com",
      'cn-qingdao': "cas.aliyuncs.com",
      'cn-qingdao-nebula': "cas.aliyuncs.com",
      'cn-shanghai': "cas.aliyuncs.com",
      'cn-shanghai-et15-b01': "cas.aliyuncs.com",
      'cn-shanghai-et2-b01': "cas.aliyuncs.com",
      'cn-shanghai-finance-1': "cas.aliyuncs.com",
      'cn-shanghai-inner': "cas.aliyuncs.com",
      'cn-shanghai-internal-test-1': "cas.aliyuncs.com",
      'cn-shenzhen': "cas.aliyuncs.com",
      'cn-shenzhen-finance-1': "cas.aliyuncs.com",
      'cn-shenzhen-inner': "cas.aliyuncs.com",
      'cn-shenzhen-st4-d01': "cas.aliyuncs.com",
      'cn-shenzhen-su18-b01': "cas.aliyuncs.com",
      'cn-wuhan': "cas.aliyuncs.com",
      'cn-yushanfang': "cas.aliyuncs.com",
      'cn-zhangbei-na61-b01': "cas.aliyuncs.com",
      'cn-zhangjiakou': "cas.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "cas.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "cas.aliyuncs.com",
      'eu-west-1': "cas.aliyuncs.com",
      'eu-west-1-oxs': "cas.aliyuncs.com",
      'rus-west-1-pop': "cas.aliyuncs.com",
      'us-east-1': "cas.aliyuncs.com",
      'us-west-1': "cas.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createDVOrderAuditWithOptions(request: CreateDVOrderAuditRequest, runtime: $Util.RuntimeOptions): Promise<CreateDVOrderAuditResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDVOrderAuditResponse>(await this.doRPCRequest("CreateDVOrderAudit", "2018-07-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDVOrderAuditResponse({}));
  }

  async createDVOrderAudit(request: CreateDVOrderAuditRequest): Promise<CreateDVOrderAuditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDVOrderAuditWithOptions(request, runtime);
  }

  async createUserCertificateWithOptions(request: CreateUserCertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUserCertificateResponse>(await this.doRPCRequest("CreateUserCertificate", "2018-07-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUserCertificateResponse({}));
  }

  async createUserCertificate(request: CreateUserCertificateRequest): Promise<CreateUserCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserCertificateWithOptions(request, runtime);
  }

  async deleteUserCertificateWithOptions(request: DeleteUserCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserCertificateResponse>(await this.doRPCRequest("DeleteUserCertificate", "2018-07-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserCertificateResponse({}));
  }

  async deleteUserCertificate(request: DeleteUserCertificateRequest): Promise<DeleteUserCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserCertificateWithOptions(request, runtime);
  }

  async describeDVOrderResultWithOptions(request: DescribeDVOrderResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDVOrderResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDVOrderResultResponse>(await this.doRPCRequest("DescribeDVOrderResult", "2018-07-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDVOrderResultResponse({}));
  }

  async describeDVOrderResult(request: DescribeDVOrderResultRequest): Promise<DescribeDVOrderResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDVOrderResultWithOptions(request, runtime);
  }

  async describeOrderInstanceListWithOptions(request: DescribeOrderInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOrderInstanceListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOrderInstanceListResponse>(await this.doRPCRequest("DescribeOrderInstanceList", "2018-07-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOrderInstanceListResponse({}));
  }

  async describeOrderInstanceList(request: DescribeOrderInstanceListRequest): Promise<DescribeOrderInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOrderInstanceListWithOptions(request, runtime);
  }

  async describeUserCertificateDetailWithOptions(request: DescribeUserCertificateDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserCertificateDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserCertificateDetailResponse>(await this.doRPCRequest("DescribeUserCertificateDetail", "2018-07-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserCertificateDetailResponse({}));
  }

  async describeUserCertificateDetail(request: DescribeUserCertificateDetailRequest): Promise<DescribeUserCertificateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserCertificateDetailWithOptions(request, runtime);
  }

  async describeUserCertificateListWithOptions(request: DescribeUserCertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserCertificateListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserCertificateListResponse>(await this.doRPCRequest("DescribeUserCertificateList", "2018-07-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserCertificateListResponse({}));
  }

  async describeUserCertificateList(request: DescribeUserCertificateListRequest): Promise<DescribeUserCertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserCertificateListWithOptions(request, runtime);
  }

}
