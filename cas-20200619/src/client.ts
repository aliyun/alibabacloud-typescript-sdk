// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateSSLCertificateRequest extends $tea.Model {
  certificate?: string;
  privateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      privateKey: 'PrivateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      privateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSSLCertificateResponseBody extends $tea.Model {
  certIdentifier?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSSLCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSSLCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSSLCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSSLCertificateWithNameRequest extends $tea.Model {
  certName?: string;
  certificate?: string;
  privateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certificate: 'Certificate',
      privateKey: 'PrivateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certificate: 'string',
      privateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSSLCertificateWithNameResponseBody extends $tea.Model {
  certIdentifier?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSSLCertificateWithNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSSLCertificateWithNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSSLCertificateWithNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSSLCertificateRequest extends $tea.Model {
  certIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSSLCertificateResponseBody extends $tea.Model {
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

export class DeleteSSLCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSSLCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSSLCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificateCountRequest extends $tea.Model {
  searchValue?: string;
  static names(): { [key: string]: string } {
    return {
      searchValue: 'SearchValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificateCountResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificateCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSSLCertificateCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSSLCertificateCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificateListRequest extends $tea.Model {
  currentPage?: number;
  searchValue?: string;
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      searchValue: 'SearchValue',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      searchValue: 'string',
      showSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificateListResponseBody extends $tea.Model {
  certMetaList?: DescribeSSLCertificateListResponseBodyCertMetaList[];
  currentPage?: number;
  pageCount?: number;
  requestId?: string;
  showSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certMetaList: 'CertMetaList',
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certMetaList: { 'type': 'array', 'itemType': DescribeSSLCertificateListResponseBodyCertMetaList },
      currentPage: 'number',
      pageCount: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSSLCertificateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSSLCertificateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificateMatchDomainListRequest extends $tea.Model {
  algorithm?: string;
  currentPage?: number;
  domain?: string;
  matchType?: string;
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      currentPage: 'CurrentPage',
      domain: 'Domain',
      matchType: 'MatchType',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      currentPage: 'number',
      domain: 'string',
      matchType: 'string',
      showSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificateMatchDomainListResponseBody extends $tea.Model {
  certMetaList?: DescribeSSLCertificateMatchDomainListResponseBodyCertMetaList[];
  currentPage?: number;
  pageCount?: number;
  requestId?: string;
  showSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certMetaList: 'CertMetaList',
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certMetaList: { 'type': 'array', 'itemType': DescribeSSLCertificateMatchDomainListResponseBodyCertMetaList },
      currentPage: 'number',
      pageCount: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificateMatchDomainListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSSLCertificateMatchDomainListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSSLCertificateMatchDomainListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificatePrivateKeyRequest extends $tea.Model {
  certIdentifier?: string;
  encryptedCode?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      encryptedCode: 'EncryptedCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      encryptedCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificatePrivateKeyResponseBody extends $tea.Model {
  encryptPrivateKey?: string;
  requestId?: string;
  signPrivateKey?: string;
  x509PrivateKey?: string;
  static names(): { [key: string]: string } {
    return {
      encryptPrivateKey: 'EncryptPrivateKey',
      requestId: 'RequestId',
      signPrivateKey: 'SignPrivateKey',
      x509PrivateKey: 'X509PrivateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptPrivateKey: 'string',
      requestId: 'string',
      signPrivateKey: 'string',
      x509PrivateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificatePrivateKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSSLCertificatePrivateKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSSLCertificatePrivateKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificatePublicKeyDetailRequest extends $tea.Model {
  certIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificatePublicKeyDetailResponseBody extends $tea.Model {
  certificateInfo?: DescribeSSLCertificatePublicKeyDetailResponseBodyCertificateInfo;
  encryptCertificate?: string;
  requestId?: string;
  signCertificate?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      certificateInfo: 'CertificateInfo',
      encryptCertificate: 'EncryptCertificate',
      requestId: 'RequestId',
      signCertificate: 'SignCertificate',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateInfo: DescribeSSLCertificatePublicKeyDetailResponseBodyCertificateInfo,
      encryptCertificate: 'string',
      requestId: 'string',
      signCertificate: 'string',
      x509Certificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificatePublicKeyDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSSLCertificatePublicKeyDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSSLCertificatePublicKeyDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadSSLCertificateRequest extends $tea.Model {
  certName?: string;
  certificate?: string;
  encryptCertificate?: string;
  encryptPrivateKey?: string;
  privateKey?: string;
  signCertificate?: string;
  signPrivateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certificate: 'Certificate',
      encryptCertificate: 'EncryptCertificate',
      encryptPrivateKey: 'EncryptPrivateKey',
      privateKey: 'PrivateKey',
      signCertificate: 'SignCertificate',
      signPrivateKey: 'SignPrivateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certificate: 'string',
      encryptCertificate: 'string',
      encryptPrivateKey: 'string',
      privateKey: 'string',
      signCertificate: 'string',
      signPrivateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadSSLCertificateResponseBody extends $tea.Model {
  certIdentifier?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadSSLCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadSSLCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadSSLCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificateListResponseBodyCertMetaList extends $tea.Model {
  afterDate?: number;
  algorithm?: string;
  beforeDate?: number;
  certIdentifier?: string;
  certName?: string;
  commonName?: string;
  issuer?: string;
  keySize?: number;
  md5?: string;
  sans?: string;
  serialNo?: string;
  sha2?: string;
  signAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      commonName: 'CommonName',
      issuer: 'Issuer',
      keySize: 'KeySize',
      md5: 'Md5',
      sans: 'Sans',
      serialNo: 'SerialNo',
      sha2: 'Sha2',
      signAlgorithm: 'SignAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      algorithm: 'string',
      beforeDate: 'number',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      issuer: 'string',
      keySize: 'number',
      md5: 'string',
      sans: 'string',
      serialNo: 'string',
      sha2: 'string',
      signAlgorithm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificateMatchDomainListResponseBodyCertMetaList extends $tea.Model {
  afterDate?: number;
  algorithm?: string;
  beforeDate?: number;
  certIdentifier?: string;
  certName?: string;
  commonName?: string;
  domainMatchCert?: boolean;
  issuer?: string;
  keySize?: number;
  md5?: string;
  sans?: string;
  serialNo?: string;
  sha2?: string;
  signAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      commonName: 'CommonName',
      domainMatchCert: 'DomainMatchCert',
      issuer: 'Issuer',
      keySize: 'KeySize',
      md5: 'Md5',
      sans: 'Sans',
      serialNo: 'SerialNo',
      sha2: 'Sha2',
      signAlgorithm: 'SignAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      algorithm: 'string',
      beforeDate: 'number',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      domainMatchCert: 'boolean',
      issuer: 'string',
      keySize: 'number',
      md5: 'string',
      sans: 'string',
      serialNo: 'string',
      sha2: 'string',
      signAlgorithm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSSLCertificatePublicKeyDetailResponseBodyCertificateInfo extends $tea.Model {
  afterDate?: number;
  algorithm?: string;
  beforeDate?: number;
  certIdentifier?: string;
  certName?: string;
  commonName?: string;
  issuer?: string;
  keySize?: number;
  md5?: string;
  sans?: string;
  serialNo?: string;
  sha2?: string;
  signAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      commonName: 'CommonName',
      issuer: 'Issuer',
      keySize: 'KeySize',
      md5: 'Md5',
      sans: 'Sans',
      serialNo: 'SerialNo',
      sha2: 'Sha2',
      signAlgorithm: 'SignAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      algorithm: 'string',
      beforeDate: 'number',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      issuer: 'string',
      keySize: 'number',
      md5: 'string',
      sans: 'string',
      serialNo: 'string',
      sha2: 'string',
      signAlgorithm: 'string',
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

  async createSSLCertificateWithOptions(request: CreateSSLCertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateSSLCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificate)) {
      query["Certificate"] = request.certificate;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSSLCertificate",
      version: "2020-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSSLCertificateResponse>(await this.callApi(params, req, runtime), new CreateSSLCertificateResponse({}));
  }

  async createSSLCertificate(request: CreateSSLCertificateRequest): Promise<CreateSSLCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSSLCertificateWithOptions(request, runtime);
  }

  async createSSLCertificateWithNameWithOptions(request: CreateSSLCertificateWithNameRequest, runtime: $Util.RuntimeOptions): Promise<CreateSSLCertificateWithNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.certificate)) {
      query["Certificate"] = request.certificate;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSSLCertificateWithName",
      version: "2020-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSSLCertificateWithNameResponse>(await this.callApi(params, req, runtime), new CreateSSLCertificateWithNameResponse({}));
  }

  async createSSLCertificateWithName(request: CreateSSLCertificateWithNameRequest): Promise<CreateSSLCertificateWithNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSSLCertificateWithNameWithOptions(request, runtime);
  }

  async deleteSSLCertificateWithOptions(request: DeleteSSLCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSSLCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSSLCertificate",
      version: "2020-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSSLCertificateResponse>(await this.callApi(params, req, runtime), new DeleteSSLCertificateResponse({}));
  }

  async deleteSSLCertificate(request: DeleteSSLCertificateRequest): Promise<DeleteSSLCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSSLCertificateWithOptions(request, runtime);
  }

  async describeSSLCertificateCountWithOptions(request: DescribeSSLCertificateCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSSLCertificateCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.searchValue)) {
      query["SearchValue"] = request.searchValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSSLCertificateCount",
      version: "2020-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSSLCertificateCountResponse>(await this.callApi(params, req, runtime), new DescribeSSLCertificateCountResponse({}));
  }

  async describeSSLCertificateCount(request: DescribeSSLCertificateCountRequest): Promise<DescribeSSLCertificateCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSSLCertificateCountWithOptions(request, runtime);
  }

  async describeSSLCertificateListWithOptions(request: DescribeSSLCertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSSLCertificateListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.searchValue)) {
      query["SearchValue"] = request.searchValue;
    }

    if (!Util.isUnset(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSSLCertificateList",
      version: "2020-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSSLCertificateListResponse>(await this.callApi(params, req, runtime), new DescribeSSLCertificateListResponse({}));
  }

  async describeSSLCertificateList(request: DescribeSSLCertificateListRequest): Promise<DescribeSSLCertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSSLCertificateListWithOptions(request, runtime);
  }

  async describeSSLCertificateMatchDomainListWithOptions(request: DescribeSSLCertificateMatchDomainListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSSLCertificateMatchDomainListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.matchType)) {
      query["MatchType"] = request.matchType;
    }

    if (!Util.isUnset(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSSLCertificateMatchDomainList",
      version: "2020-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSSLCertificateMatchDomainListResponse>(await this.callApi(params, req, runtime), new DescribeSSLCertificateMatchDomainListResponse({}));
  }

  async describeSSLCertificateMatchDomainList(request: DescribeSSLCertificateMatchDomainListRequest): Promise<DescribeSSLCertificateMatchDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSSLCertificateMatchDomainListWithOptions(request, runtime);
  }

  async describeSSLCertificatePrivateKeyWithOptions(request: DescribeSSLCertificatePrivateKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSSLCertificatePrivateKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!Util.isUnset(request.encryptedCode)) {
      query["EncryptedCode"] = request.encryptedCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSSLCertificatePrivateKey",
      version: "2020-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSSLCertificatePrivateKeyResponse>(await this.callApi(params, req, runtime), new DescribeSSLCertificatePrivateKeyResponse({}));
  }

  async describeSSLCertificatePrivateKey(request: DescribeSSLCertificatePrivateKeyRequest): Promise<DescribeSSLCertificatePrivateKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSSLCertificatePrivateKeyWithOptions(request, runtime);
  }

  async describeSSLCertificatePublicKeyDetailWithOptions(request: DescribeSSLCertificatePublicKeyDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSSLCertificatePublicKeyDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSSLCertificatePublicKeyDetail",
      version: "2020-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSSLCertificatePublicKeyDetailResponse>(await this.callApi(params, req, runtime), new DescribeSSLCertificatePublicKeyDetailResponse({}));
  }

  async describeSSLCertificatePublicKeyDetail(request: DescribeSSLCertificatePublicKeyDetailRequest): Promise<DescribeSSLCertificatePublicKeyDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSSLCertificatePublicKeyDetailWithOptions(request, runtime);
  }

  async uploadSSLCertificateWithOptions(request: UploadSSLCertificateRequest, runtime: $Util.RuntimeOptions): Promise<UploadSSLCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.certificate)) {
      query["Certificate"] = request.certificate;
    }

    if (!Util.isUnset(request.encryptCertificate)) {
      query["EncryptCertificate"] = request.encryptCertificate;
    }

    if (!Util.isUnset(request.encryptPrivateKey)) {
      query["EncryptPrivateKey"] = request.encryptPrivateKey;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.signCertificate)) {
      query["SignCertificate"] = request.signCertificate;
    }

    if (!Util.isUnset(request.signPrivateKey)) {
      query["SignPrivateKey"] = request.signPrivateKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadSSLCertificate",
      version: "2020-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadSSLCertificateResponse>(await this.callApi(params, req, runtime), new UploadSSLCertificateResponse({}));
  }

  async uploadSSLCertificate(request: UploadSSLCertificateRequest): Promise<UploadSSLCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadSSLCertificateWithOptions(request, runtime);
  }

}
