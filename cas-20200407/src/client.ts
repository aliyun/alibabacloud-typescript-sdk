// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateCertificateRequestRequest extends $tea.Model {
  sourceIp?: string;
  productCode?: string;
  username?: string;
  phone?: string;
  email?: string;
  domain?: string;
  validateType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      productCode: 'ProductCode',
      username: 'Username',
      phone: 'Phone',
      email: 'Email',
      domain: 'Domain',
      validateType: 'ValidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      productCode: 'string',
      username: 'string',
      phone: 'string',
      email: 'string',
      domain: 'string',
      validateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateRequestResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCertificateRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCertificateRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateWithCsrRequestRequest extends $tea.Model {
  sourceIp?: string;
  csr?: string;
  productCode?: string;
  username?: string;
  phone?: string;
  email?: string;
  validateType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      csr: 'Csr',
      productCode: 'ProductCode',
      username: 'Username',
      phone: 'Phone',
      email: 'Email',
      validateType: 'ValidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      csr: 'string',
      productCode: 'string',
      username: 'string',
      phone: 'string',
      email: 'string',
      validateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateWithCsrRequestResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateWithCsrRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCertificateWithCsrRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCertificateWithCsrRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCertificateRequestRequest extends $tea.Model {
  sourceIp?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCertificateRequestResponseBody extends $tea.Model {
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

export class DeleteCertificateRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCertificateRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCertificateRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateStateRequest extends $tea.Model {
  sourceIp?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateStateResponseBody extends $tea.Model {
  type?: string;
  privateKey?: string;
  recordType?: string;
  requestId?: string;
  content?: string;
  recordDomain?: string;
  recordValue?: string;
  domain?: string;
  validateType?: string;
  uri?: string;
  certificate?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      privateKey: 'PrivateKey',
      recordType: 'RecordType',
      requestId: 'RequestId',
      content: 'Content',
      recordDomain: 'RecordDomain',
      recordValue: 'RecordValue',
      domain: 'Domain',
      validateType: 'ValidateType',
      uri: 'Uri',
      certificate: 'Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      privateKey: 'string',
      recordType: 'string',
      requestId: 'string',
      content: 'string',
      recordDomain: 'string',
      recordValue: 'string',
      domain: 'string',
      validateType: 'string',
      uri: 'string',
      certificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCertificateStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCertificateStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageStateRequest extends $tea.Model {
  sourceIp?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageStateResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  productCode?: string;
  usedCount?: number;
  issuedCount?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      productCode: 'ProductCode',
      usedCount: 'UsedCount',
      issuedCount: 'IssuedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      productCode: 'string',
      usedCount: 'number',
      issuedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePackageStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePackageStateResponseBody,
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

  async createCertificateRequestWithOptions(request: CreateCertificateRequestRequest, runtime: $Util.RuntimeOptions): Promise<CreateCertificateRequestResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCertificateRequestResponse>(await this.doRPCRequest("CreateCertificateRequest", "2020-04-07", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCertificateRequestResponse({}));
  }

  async createCertificateRequest(request: CreateCertificateRequestRequest): Promise<CreateCertificateRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateRequestWithOptions(request, runtime);
  }

  async createCertificateWithCsrRequestWithOptions(request: CreateCertificateWithCsrRequestRequest, runtime: $Util.RuntimeOptions): Promise<CreateCertificateWithCsrRequestResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCertificateWithCsrRequestResponse>(await this.doRPCRequest("CreateCertificateWithCsrRequest", "2020-04-07", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCertificateWithCsrRequestResponse({}));
  }

  async createCertificateWithCsrRequest(request: CreateCertificateWithCsrRequestRequest): Promise<CreateCertificateWithCsrRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateWithCsrRequestWithOptions(request, runtime);
  }

  async deleteCertificateRequestWithOptions(request: DeleteCertificateRequestRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCertificateRequestResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCertificateRequestResponse>(await this.doRPCRequest("DeleteCertificateRequest", "2020-04-07", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCertificateRequestResponse({}));
  }

  async deleteCertificateRequest(request: DeleteCertificateRequestRequest): Promise<DeleteCertificateRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCertificateRequestWithOptions(request, runtime);
  }

  async describeCertificateStateWithOptions(request: DescribeCertificateStateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertificateStateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCertificateStateResponse>(await this.doRPCRequest("DescribeCertificateState", "2020-04-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCertificateStateResponse({}));
  }

  async describeCertificateState(request: DescribeCertificateStateRequest): Promise<DescribeCertificateStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertificateStateWithOptions(request, runtime);
  }

  async describePackageStateWithOptions(request: DescribePackageStateRequest, runtime: $Util.RuntimeOptions): Promise<DescribePackageStateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePackageStateResponse>(await this.doRPCRequest("DescribePackageState", "2020-04-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePackageStateResponse({}));
  }

  async describePackageState(request: DescribePackageStateRequest): Promise<DescribePackageStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePackageStateWithOptions(request, runtime);
  }

}
