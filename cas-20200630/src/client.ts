// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "cas.aliyuncs.com",
      'ap-northeast-2-pop': "cas.aliyuncs.com",
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
      'cn-huhehaote-nebula-1': "cas.aliyuncs.com",
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
      'cn-wulanchabu': "cas.aliyuncs.com",
      'cn-yushanfang': "cas.aliyuncs.com",
      'cn-zhangbei': "cas.aliyuncs.com",
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
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Issues a client certificate by using a system-generated certificate signing request (CSR) file.
   * 
   * @remarks
   * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](~~CreateRootCACertificate~~) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](~~CreateRootCACertificate~~) operation. Only intermediate CA certificates can issue client certificates.
   * ## QPS limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClientCertificateResponse
   */
  async createClientCertificateWithOptions(request: $_model.CreateClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClientCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.afterTime)) {
      query["AfterTime"] = request.afterTime;
    }

    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.beforeTime)) {
      query["BeforeTime"] = request.beforeTime;
    }

    if (!$dara.isNull(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.days)) {
      query["Days"] = request.days;
    }

    if (!$dara.isNull(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
    }

    if (!$dara.isNull(request.immediately)) {
      query["Immediately"] = request.immediately;
    }

    if (!$dara.isNull(request.locality)) {
      query["Locality"] = request.locality;
    }

    if (!$dara.isNull(request.months)) {
      query["Months"] = request.months;
    }

    if (!$dara.isNull(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!$dara.isNull(request.organizationUnit)) {
      query["OrganizationUnit"] = request.organizationUnit;
    }

    if (!$dara.isNull(request.parentIdentifier)) {
      query["ParentIdentifier"] = request.parentIdentifier;
    }

    if (!$dara.isNull(request.sanType)) {
      query["SanType"] = request.sanType;
    }

    if (!$dara.isNull(request.sanValue)) {
      query["SanValue"] = request.sanValue;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.years)) {
      query["Years"] = request.years;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.CreateClientCertificateResponse({}));
  }

  /**
   * Issues a client certificate by using a system-generated certificate signing request (CSR) file.
   * 
   * @remarks
   * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](~~CreateRootCACertificate~~) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](~~CreateRootCACertificate~~) operation. Only intermediate CA certificates can issue client certificates.
   * ## QPS limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateClientCertificateRequest
   * @returns CreateClientCertificateResponse
   */
  async createClientCertificate(request: $_model.CreateClientCertificateRequest): Promise<$_model.CreateClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClientCertificateWithOptions(request, runtime);
  }

  /**
   * Issues a client certificate by using a custom certificate signing request (CSR) file.
   * 
   * @remarks
   * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](https://help.aliyun.com/document_detail/328093.html) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](https://help.aliyun.com/document_detail/328094.html) operation. Only intermediate CA certificates can be used to issue client certificates.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateClientCertificateWithCsrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClientCertificateWithCsrResponse
   */
  async createClientCertificateWithCsrWithOptions(request: $_model.CreateClientCertificateWithCsrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClientCertificateWithCsrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.afterTime)) {
      query["AfterTime"] = request.afterTime;
    }

    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.beforeTime)) {
      query["BeforeTime"] = request.beforeTime;
    }

    if (!$dara.isNull(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!$dara.isNull(request.days)) {
      query["Days"] = request.days;
    }

    if (!$dara.isNull(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
    }

    if (!$dara.isNull(request.immediately)) {
      query["Immediately"] = request.immediately;
    }

    if (!$dara.isNull(request.locality)) {
      query["Locality"] = request.locality;
    }

    if (!$dara.isNull(request.months)) {
      query["Months"] = request.months;
    }

    if (!$dara.isNull(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!$dara.isNull(request.organizationUnit)) {
      query["OrganizationUnit"] = request.organizationUnit;
    }

    if (!$dara.isNull(request.parentIdentifier)) {
      query["ParentIdentifier"] = request.parentIdentifier;
    }

    if (!$dara.isNull(request.sanType)) {
      query["SanType"] = request.sanType;
    }

    if (!$dara.isNull(request.sanValue)) {
      query["SanValue"] = request.sanValue;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.years)) {
      query["Years"] = request.years;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClientCertificateWithCsr",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClientCertificateWithCsrResponse>(await this.callApi(params, req, runtime), new $_model.CreateClientCertificateWithCsrResponse({}));
  }

  /**
   * Issues a client certificate by using a custom certificate signing request (CSR) file.
   * 
   * @remarks
   * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](https://help.aliyun.com/document_detail/328093.html) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](https://help.aliyun.com/document_detail/328094.html) operation. Only intermediate CA certificates can be used to issue client certificates.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateClientCertificateWithCsrRequest
   * @returns CreateClientCertificateWithCsrResponse
   */
  async createClientCertificateWithCsr(request: $_model.CreateClientCertificateWithCsrRequest): Promise<$_model.CreateClientCertificateWithCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClientCertificateWithCsrWithOptions(request, runtime);
  }

  /**
   * Issues a certificate based on the specified key usage, extended key usage, and name and alias of the entity that uses the certificate.
   * 
   * @remarks
   * By default, the name of the entity is obtained from the certificate signing request (CSR) of the certificate that you want to issue. If you specify a different name for the entity, the name of the entity in the CSR becomes invalid. The specified name is used to issue the certificate.
   * You must specify the key usage and extended key usage based on the certificate type. The following list describes common certificate types:
   * *   Server certificate
   * Key usage: digitalSignature or keyEncipherment
   * Extended key usage: serverAuth
   * *   Client certificate
   * Key usage: digitalSignature or keyEncipherment
   * Extended key usage: clientAuth
   * *   Mutual Transport Layer Security (TLS) authentication certificate
   * Key usage: digitalSignature or keyEncipherment
   * Extended key usage: serverAuth or clientAuth
   * *   Email certificate
   * Key usage: digitalSignature or contentCommitment
   * Extended key usage: emailProtection
   * Note: Compliant certificate authorities (CAs) are managed by third-party authorities. This operation is not supported for compliant CAs.
   * 
   * @param request - CreateCustomCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomCertificateResponse
   */
  async createCustomCertificateWithOptions(request: $_model.CreateCustomCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiPassthrough)) {
      query["ApiPassthrough"] = request.apiPassthrough;
    }

    if (!$dara.isNull(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!$dara.isNull(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
    }

    if (!$dara.isNull(request.immediately)) {
      query["Immediately"] = request.immediately;
    }

    if (!$dara.isNull(request.parentIdentifier)) {
      query["ParentIdentifier"] = request.parentIdentifier;
    }

    if (!$dara.isNull(request.validity)) {
      query["Validity"] = request.validity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomCertificateResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomCertificateResponse({}));
  }

  /**
   * Issues a certificate based on the specified key usage, extended key usage, and name and alias of the entity that uses the certificate.
   * 
   * @remarks
   * By default, the name of the entity is obtained from the certificate signing request (CSR) of the certificate that you want to issue. If you specify a different name for the entity, the name of the entity in the CSR becomes invalid. The specified name is used to issue the certificate.
   * You must specify the key usage and extended key usage based on the certificate type. The following list describes common certificate types:
   * *   Server certificate
   * Key usage: digitalSignature or keyEncipherment
   * Extended key usage: serverAuth
   * *   Client certificate
   * Key usage: digitalSignature or keyEncipherment
   * Extended key usage: clientAuth
   * *   Mutual Transport Layer Security (TLS) authentication certificate
   * Key usage: digitalSignature or keyEncipherment
   * Extended key usage: serverAuth or clientAuth
   * *   Email certificate
   * Key usage: digitalSignature or contentCommitment
   * Extended key usage: emailProtection
   * Note: Compliant certificate authorities (CAs) are managed by third-party authorities. This operation is not supported for compliant CAs.
   * 
   * @param request - CreateCustomCertificateRequest
   * @returns CreateCustomCertificateResponse
   */
  async createCustomCertificate(request: $_model.CreateCustomCertificateRequest): Promise<$_model.CreateCustomCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomCertificateWithOptions(request, runtime);
  }

  /**
   * 创建外部子CA证书
   * 
   * @param tmpReq - CreateExternalCACertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExternalCACertificateResponse
   */
  async createExternalCACertificateWithOptions(tmpReq: $_model.CreateExternalCACertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExternalCACertificateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateExternalCACertificateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.apiPassthrough)) {
      request.apiPassthroughShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.apiPassthrough, "ApiPassthrough", "json");
    }

    let query = { };
    if (!$dara.isNull(request.apiPassthroughShrink)) {
      query["ApiPassthrough"] = request.apiPassthroughShrink;
    }

    if (!$dara.isNull(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.validity)) {
      query["Validity"] = request.validity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExternalCACertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExternalCACertificateResponse>(await this.callApi(params, req, runtime), new $_model.CreateExternalCACertificateResponse({}));
  }

  /**
   * 创建外部子CA证书
   * 
   * @param request - CreateExternalCACertificateRequest
   * @returns CreateExternalCACertificateResponse
   */
  async createExternalCACertificate(request: $_model.CreateExternalCACertificateRequest): Promise<$_model.CreateExternalCACertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExternalCACertificateWithOptions(request, runtime);
  }

  /**
   * Revokes a client certificate or a server certificate.
   * 
   * @remarks
   * After a client certificate or a server certificate is revoked, the client or the server on which the certificate is installed cannot establish HTTPS connections with other devices.
   * After a client certificate or a server certificate is revoked, you can call the [DeleteClientCertificate](https://help.aliyun.com/document_detail/330880.html) operation to permanently delete the certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateRevokeClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRevokeClientCertificateResponse
   */
  async createRevokeClientCertificateWithOptions(request: $_model.CreateRevokeClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRevokeClientCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRevokeClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRevokeClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.CreateRevokeClientCertificateResponse({}));
  }

  /**
   * Revokes a client certificate or a server certificate.
   * 
   * @remarks
   * After a client certificate or a server certificate is revoked, the client or the server on which the certificate is installed cannot establish HTTPS connections with other devices.
   * After a client certificate or a server certificate is revoked, you can call the [DeleteClientCertificate](https://help.aliyun.com/document_detail/330880.html) operation to permanently delete the certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateRevokeClientCertificateRequest
   * @returns CreateRevokeClientCertificateResponse
   */
  async createRevokeClientCertificate(request: $_model.CreateRevokeClientCertificateRequest): Promise<$_model.CreateRevokeClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRevokeClientCertificateWithOptions(request, runtime);
  }

  /**
   * Creates a root certificate authority (CA) certificate.
   * 
   * @remarks
   * You can call the CreateRootCACertificate operation to create a self-signed root CA certificate. A root CA certificate is the trust anchor in a chain of trust for private certificates that are used within an enterprise. You must create a root CA certificate before you can use the root CA certificate to issue intermediate CA certificates. Then, you can use the intermediate CA certificates to issue client certificates and server certificates.
   * Before you call this operation, make sure that you have purchased a private root CA instance by using the [Certificate Management Service console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Create a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateRootCACertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRootCACertificateResponse
   */
  async createRootCACertificateWithOptions(request: $_model.CreateRootCACertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRootCACertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!$dara.isNull(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!$dara.isNull(request.locality)) {
      query["Locality"] = request.locality;
    }

    if (!$dara.isNull(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!$dara.isNull(request.organizationUnit)) {
      query["OrganizationUnit"] = request.organizationUnit;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.years)) {
      query["Years"] = request.years;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRootCACertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRootCACertificateResponse>(await this.callApi(params, req, runtime), new $_model.CreateRootCACertificateResponse({}));
  }

  /**
   * Creates a root certificate authority (CA) certificate.
   * 
   * @remarks
   * You can call the CreateRootCACertificate operation to create a self-signed root CA certificate. A root CA certificate is the trust anchor in a chain of trust for private certificates that are used within an enterprise. You must create a root CA certificate before you can use the root CA certificate to issue intermediate CA certificates. Then, you can use the intermediate CA certificates to issue client certificates and server certificates.
   * Before you call this operation, make sure that you have purchased a private root CA instance by using the [Certificate Management Service console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Create a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateRootCACertificateRequest
   * @returns CreateRootCACertificateResponse
   */
  async createRootCACertificate(request: $_model.CreateRootCACertificateRequest): Promise<$_model.CreateRootCACertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRootCACertificateWithOptions(request, runtime);
  }

  /**
   * Issues a server certificate by using a system-generated certificate signing request (CSR) file.
   * 
   * @remarks
   * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](https://help.aliyun.com/document_detail/328093.html) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](https://help.aliyun.com/document_detail/328094.html) operation. Only intermediate CA certificates can be used to issue server certificates.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateServerCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServerCertificateResponse
   */
  async createServerCertificateWithOptions(request: $_model.CreateServerCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServerCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.afterTime)) {
      query["AfterTime"] = request.afterTime;
    }

    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.beforeTime)) {
      query["BeforeTime"] = request.beforeTime;
    }

    if (!$dara.isNull(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.days)) {
      query["Days"] = request.days;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
    }

    if (!$dara.isNull(request.immediately)) {
      query["Immediately"] = request.immediately;
    }

    if (!$dara.isNull(request.locality)) {
      query["Locality"] = request.locality;
    }

    if (!$dara.isNull(request.months)) {
      query["Months"] = request.months;
    }

    if (!$dara.isNull(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!$dara.isNull(request.organizationUnit)) {
      query["OrganizationUnit"] = request.organizationUnit;
    }

    if (!$dara.isNull(request.parentIdentifier)) {
      query["ParentIdentifier"] = request.parentIdentifier;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.years)) {
      query["Years"] = request.years;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServerCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServerCertificateResponse>(await this.callApi(params, req, runtime), new $_model.CreateServerCertificateResponse({}));
  }

  /**
   * Issues a server certificate by using a system-generated certificate signing request (CSR) file.
   * 
   * @remarks
   * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](https://help.aliyun.com/document_detail/328093.html) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](https://help.aliyun.com/document_detail/328094.html) operation. Only intermediate CA certificates can be used to issue server certificates.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateServerCertificateRequest
   * @returns CreateServerCertificateResponse
   */
  async createServerCertificate(request: $_model.CreateServerCertificateRequest): Promise<$_model.CreateServerCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServerCertificateWithOptions(request, runtime);
  }

  /**
   * Issues a server certificate by using a custom certificate signing request (CSR) file.
   * 
   * @remarks
   * ## Usage notes
   * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](https://help.aliyun.com/document_detail/328093.html) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](https://help.aliyun.com/document_detail/328094.html) operation. Only intermediate CA certificates can be used to issue server certificates.
   * 
   * @param request - CreateServerCertificateWithCsrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServerCertificateWithCsrResponse
   */
  async createServerCertificateWithCsrWithOptions(request: $_model.CreateServerCertificateWithCsrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServerCertificateWithCsrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.afterTime)) {
      query["AfterTime"] = request.afterTime;
    }

    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.beforeTime)) {
      query["BeforeTime"] = request.beforeTime;
    }

    if (!$dara.isNull(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!$dara.isNull(request.days)) {
      query["Days"] = request.days;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
    }

    if (!$dara.isNull(request.immediately)) {
      query["Immediately"] = request.immediately;
    }

    if (!$dara.isNull(request.locality)) {
      query["Locality"] = request.locality;
    }

    if (!$dara.isNull(request.months)) {
      query["Months"] = request.months;
    }

    if (!$dara.isNull(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!$dara.isNull(request.organizationUnit)) {
      query["OrganizationUnit"] = request.organizationUnit;
    }

    if (!$dara.isNull(request.parentIdentifier)) {
      query["ParentIdentifier"] = request.parentIdentifier;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.years)) {
      query["Years"] = request.years;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServerCertificateWithCsr",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServerCertificateWithCsrResponse>(await this.callApi(params, req, runtime), new $_model.CreateServerCertificateWithCsrResponse({}));
  }

  /**
   * Issues a server certificate by using a custom certificate signing request (CSR) file.
   * 
   * @remarks
   * ## Usage notes
   * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](https://help.aliyun.com/document_detail/328093.html) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](https://help.aliyun.com/document_detail/328094.html) operation. Only intermediate CA certificates can be used to issue server certificates.
   * 
   * @param request - CreateServerCertificateWithCsrRequest
   * @returns CreateServerCertificateWithCsrResponse
   */
  async createServerCertificateWithCsr(request: $_model.CreateServerCertificateWithCsrRequest): Promise<$_model.CreateServerCertificateWithCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServerCertificateWithCsrWithOptions(request, runtime);
  }

  /**
   * Creates an intermediate certificate authority (CA) certificate.
   * 
   * @remarks
   * You can call this operation to issue an intermediate certificate authority (CA) certificate by using an existing root CA certificate. Intermediate CA certificates can be used to issue client certificates and server certificates.
   * Before you call this operation, make sure that you have issued a root CA certificate by calling the [CreateRootCACertificate] operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateSubCACertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSubCACertificateResponse
   */
  async createSubCACertificateWithOptions(request: $_model.CreateSubCACertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSubCACertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!$dara.isNull(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!$dara.isNull(request.crlDay)) {
      query["CrlDay"] = request.crlDay;
    }

    if (!$dara.isNull(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
    }

    if (!$dara.isNull(request.extendedKeyUsages)) {
      query["ExtendedKeyUsages"] = request.extendedKeyUsages;
    }

    if (!$dara.isNull(request.locality)) {
      query["Locality"] = request.locality;
    }

    if (!$dara.isNull(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!$dara.isNull(request.organizationUnit)) {
      query["OrganizationUnit"] = request.organizationUnit;
    }

    if (!$dara.isNull(request.parentIdentifier)) {
      query["ParentIdentifier"] = request.parentIdentifier;
    }

    if (!$dara.isNull(request.pathLenConstraint)) {
      query["PathLenConstraint"] = request.pathLenConstraint;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.years)) {
      query["Years"] = request.years;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSubCACertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSubCACertificateResponse>(await this.callApi(params, req, runtime), new $_model.CreateSubCACertificateResponse({}));
  }

  /**
   * Creates an intermediate certificate authority (CA) certificate.
   * 
   * @remarks
   * You can call this operation to issue an intermediate certificate authority (CA) certificate by using an existing root CA certificate. Intermediate CA certificates can be used to issue client certificates and server certificates.
   * Before you call this operation, make sure that you have issued a root CA certificate by calling the [CreateRootCACertificate] operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateSubCACertificateRequest
   * @returns CreateSubCACertificateResponse
   */
  async createSubCACertificate(request: $_model.CreateSubCACertificateRequest): Promise<$_model.CreateSubCACertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSubCACertificateWithOptions(request, runtime);
  }

  /**
   * Deletes a client certificate or a server certificate that is revoked.
   * 
   * @remarks
   * Before you call this operation, you must call the [CreateRevokeClientCertificate](https://help.aliyun.com/document_detail/330876.html) operation to revoke a client certificate or a server certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClientCertificateResponse
   */
  async deleteClientCertificateWithOptions(request: $_model.DeleteClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClientCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClientCertificateResponse({}));
  }

  /**
   * Deletes a client certificate or a server certificate that is revoked.
   * 
   * @remarks
   * Before you call this operation, you must call the [CreateRevokeClientCertificate](https://help.aliyun.com/document_detail/330876.html) operation to revoke a client certificate or a server certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteClientCertificateRequest
   * @returns DeleteClientCertificateResponse
   */
  async deleteClientCertificate(request: $_model.DeleteClientCertificateRequest): Promise<$_model.DeleteClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClientCertificateWithOptions(request, runtime);
  }

  /**
   * Queries the details about a root certificate authority (CA) certificate or an intermediate CA certificate.
   * 
   * @remarks
   * You can call the DescribeCACertificate operation to query the details about a root CA certificate or an intermediate CA certificate by using the unique identifier of the root CA certificate or intermediate CA certificate. The details include the serial number, user information, and content of a CA certificate.
   * Before you call this operation, make sure that you have created a root CA by calling the [CreateRootCACertificate] operation or an intermediate CA certificate by calling the [CreateSubCACertificate] operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCACertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCACertificateResponse
   */
  async describeCACertificateWithOptions(request: $_model.DescribeCACertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCACertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCACertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCACertificateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCACertificateResponse({}));
  }

  /**
   * Queries the details about a root certificate authority (CA) certificate or an intermediate CA certificate.
   * 
   * @remarks
   * You can call the DescribeCACertificate operation to query the details about a root CA certificate or an intermediate CA certificate by using the unique identifier of the root CA certificate or intermediate CA certificate. The details include the serial number, user information, and content of a CA certificate.
   * Before you call this operation, make sure that you have created a root CA by calling the [CreateRootCACertificate] operation or an intermediate CA certificate by calling the [CreateSubCACertificate] operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCACertificateRequest
   * @returns DescribeCACertificateResponse
   */
  async describeCACertificate(request: $_model.DescribeCACertificateRequest): Promise<$_model.DescribeCACertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCACertificateWithOptions(request, runtime);
  }

  /**
   * Queries the number of certificate authority (CA) certificates that you create.
   * 
   * @remarks
   * You can call the DescribeCACertificateCount operation to query the number of created CA certificates, which includes root CA certificates and intermediate CA certificates.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCACertificateCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCACertificateCountResponse
   */
  async describeCACertificateCountWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCACertificateCountResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCACertificateCount",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCACertificateCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCACertificateCountResponse({}));
  }

  /**
   * Queries the number of certificate authority (CA) certificates that you create.
   * 
   * @remarks
   * You can call the DescribeCACertificateCount operation to query the number of created CA certificates, which includes root CA certificates and intermediate CA certificates.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * @returns DescribeCACertificateCountResponse
   */
  async describeCACertificateCount(): Promise<$_model.DescribeCACertificateCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCACertificateCountWithOptions(runtime);
  }

  /**
   * Queries the details about all root certificate authority (CA) certificates and intermediate CA certificates.
   * 
   * @remarks
   * You can call the DescribeCACertificateList operation to perform a paged query of the details about all CA certificates that you create. The details include the unique identifier, serial number, user information, and content of each root CA certificate or intermediate CA certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCACertificateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCACertificateListResponse
   */
  async describeCACertificateListWithOptions(request: $_model.DescribeCACertificateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCACertificateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caStatus)) {
      query["CaStatus"] = request.caStatus;
    }

    if (!$dara.isNull(request.certType)) {
      query["CertType"] = request.certType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.issuerType)) {
      query["IssuerType"] = request.issuerType;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    if (!$dara.isNull(request.validStatus)) {
      query["ValidStatus"] = request.validStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCACertificateList",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCACertificateListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCACertificateListResponse({}));
  }

  /**
   * Queries the details about all root certificate authority (CA) certificates and intermediate CA certificates.
   * 
   * @remarks
   * You can call the DescribeCACertificateList operation to perform a paged query of the details about all CA certificates that you create. The details include the unique identifier, serial number, user information, and content of each root CA certificate or intermediate CA certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCACertificateListRequest
   * @returns DescribeCACertificateListResponse
   */
  async describeCACertificateList(request: $_model.DescribeCACertificateListRequest): Promise<$_model.DescribeCACertificateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCACertificateListWithOptions(request, runtime);
  }

  /**
   * Queries the encrypted private key of a client certificate or a server certificate.
   * 
   * @remarks
   * ## Usage notes
   * You can call the DescribeCertificatePrivateKey operation to obtain the encrypted private key of a client certificate or a server certificate. The certificate is issued based on a system-generated certificate signing request (CSR). Before you call this operation, make sure that you have issued a client certificate or a server certificate by calling the following operation:
   * *   [CreateClientCertificate](https://help.aliyun.com/document_detail/330873.html)
   * *   [CreateServerCertificate](https://help.aliyun.com/document_detail/330877.html)
   * To ensure the security of private key transmission, the DescribeCertificatePrivateKey operation encrypts the private key by using the private key password that you specify and returns the encrypted private key. The private key password is a string that is used to encrypt the private key. After you obtain the encrypted private key of the certificate, you can use the following methods to decrypt the private key:
   * *   If the encryption algorithm of the certificate is RSA, you must run the `openssl rsa -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
   * *   If the encryption algorithm of the certificate is ECC, you must run the `openssl ec -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
   * *   If the encryption algorithm of the certificate is SM2, you must run the `openssl ec -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
   * >  You can call the [DescribeClientCertificate] operation to query the encryption algorithm type of a client certificate or a server certificate.
   * ## Limits
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCertificatePrivateKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCertificatePrivateKeyResponse
   */
  async describeCertificatePrivateKeyWithOptions(request: $_model.DescribeCertificatePrivateKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCertificatePrivateKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.encryptedCode)) {
      query["EncryptedCode"] = request.encryptedCode;
    }

    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCertificatePrivateKey",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCertificatePrivateKeyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCertificatePrivateKeyResponse({}));
  }

  /**
   * Queries the encrypted private key of a client certificate or a server certificate.
   * 
   * @remarks
   * ## Usage notes
   * You can call the DescribeCertificatePrivateKey operation to obtain the encrypted private key of a client certificate or a server certificate. The certificate is issued based on a system-generated certificate signing request (CSR). Before you call this operation, make sure that you have issued a client certificate or a server certificate by calling the following operation:
   * *   [CreateClientCertificate](https://help.aliyun.com/document_detail/330873.html)
   * *   [CreateServerCertificate](https://help.aliyun.com/document_detail/330877.html)
   * To ensure the security of private key transmission, the DescribeCertificatePrivateKey operation encrypts the private key by using the private key password that you specify and returns the encrypted private key. The private key password is a string that is used to encrypt the private key. After you obtain the encrypted private key of the certificate, you can use the following methods to decrypt the private key:
   * *   If the encryption algorithm of the certificate is RSA, you must run the `openssl rsa -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
   * *   If the encryption algorithm of the certificate is ECC, you must run the `openssl ec -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
   * *   If the encryption algorithm of the certificate is SM2, you must run the `openssl ec -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
   * >  You can call the [DescribeClientCertificate] operation to query the encryption algorithm type of a client certificate or a server certificate.
   * ## Limits
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCertificatePrivateKeyRequest
   * @returns DescribeCertificatePrivateKeyResponse
   */
  async describeCertificatePrivateKey(request: $_model.DescribeCertificatePrivateKeyRequest): Promise<$_model.DescribeCertificatePrivateKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCertificatePrivateKeyWithOptions(request, runtime);
  }

  /**
   * Queries the details about a client certificate or a server certificate by using the unique identifier of the certificate.
   * 
   * @remarks
   * You can call the DescribeClientCertificate operation to query the details about a client certificate or a server certificate by using the unique identifier of the certificate. The details include the serial number, user information, content, and status of each certificate.
   * Before you call this operation, make sure that you have created a client certificate or a server certificate.
   * For more information about how to call an operation to create a client certificate, see the following topics:
   * *   [CreateClientCertificate](https://help.aliyun.com/document_detail/330873.html)
   * *   [CreateClientCertificateWithCsr](https://help.aliyun.com/document_detail/330875.html)
   * For more information about how to call an operation to create a server certificate, see the following topics:
   * *   [CreateServerCertificate](https://help.aliyun.com/document_detail/330877.html)
   * *   [CreateServerCertificateWithCsr](https://help.aliyun.com/document_detail/330878.html)
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClientCertificateResponse
   */
  async describeClientCertificateWithOptions(request: $_model.DescribeClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClientCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClientCertificateResponse({}));
  }

  /**
   * Queries the details about a client certificate or a server certificate by using the unique identifier of the certificate.
   * 
   * @remarks
   * You can call the DescribeClientCertificate operation to query the details about a client certificate or a server certificate by using the unique identifier of the certificate. The details include the serial number, user information, content, and status of each certificate.
   * Before you call this operation, make sure that you have created a client certificate or a server certificate.
   * For more information about how to call an operation to create a client certificate, see the following topics:
   * *   [CreateClientCertificate](https://help.aliyun.com/document_detail/330873.html)
   * *   [CreateClientCertificateWithCsr](https://help.aliyun.com/document_detail/330875.html)
   * For more information about how to call an operation to create a server certificate, see the following topics:
   * *   [CreateServerCertificate](https://help.aliyun.com/document_detail/330877.html)
   * *   [CreateServerCertificateWithCsr](https://help.aliyun.com/document_detail/330878.html)
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeClientCertificateRequest
   * @returns DescribeClientCertificateResponse
   */
  async describeClientCertificate(request: $_model.DescribeClientCertificateRequest): Promise<$_model.DescribeClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClientCertificateWithOptions(request, runtime);
  }

  /**
   * Queries the status information about client certificates and server certificates by using the unique identifiers of the certificates.
   * 
   * @remarks
   * You can call the DescribeClientCertificateStatus operation to query the status information about multiple client certificates or server certificates at a time by using the unique identifiers of the certificates. For example, you can check whether a certificate is revoked.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeClientCertificateStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClientCertificateStatusResponse
   */
  async describeClientCertificateStatusWithOptions(request: $_model.DescribeClientCertificateStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClientCertificateStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClientCertificateStatus",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClientCertificateStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClientCertificateStatusResponse({}));
  }

  /**
   * Queries the status information about client certificates and server certificates by using the unique identifiers of the certificates.
   * 
   * @remarks
   * You can call the DescribeClientCertificateStatus operation to query the status information about multiple client certificates or server certificates at a time by using the unique identifiers of the certificates. For example, you can check whether a certificate is revoked.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeClientCertificateStatusRequest
   * @returns DescribeClientCertificateStatusResponse
   */
  async describeClientCertificateStatus(request: $_model.DescribeClientCertificateStatusRequest): Promise<$_model.DescribeClientCertificateStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClientCertificateStatusWithOptions(request, runtime);
  }

  /**
   * Queries the status information about a private root certificate authority (CA) instance or a private intermediate CA instance that you purchase by using the Certificate Management Service console.
   * 
   * @remarks
   * ## Usage notes
   * You can call the GetCAInstanceStatus operation to query the status information of a private CA instance by using the ID of the instance. The instance is purchased by using the SSL Certificates Service console. The status information includes the status of the private CA instance, the number of certificates that can be issued by using the private CA instance, and the number of issued certificates.
   * Before you call this operation, make sure that you have purchased a private CA by using the [SSL Certificates Service console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Create a private CA](https://help.aliyun.com/document_detail/208553.html).
   * 
   * @param request - GetCAInstanceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCAInstanceStatusResponse
   */
  async getCAInstanceStatusWithOptions(request: $_model.GetCAInstanceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCAInstanceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCAInstanceStatus",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCAInstanceStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetCAInstanceStatusResponse({}));
  }

  /**
   * Queries the status information about a private root certificate authority (CA) instance or a private intermediate CA instance that you purchase by using the Certificate Management Service console.
   * 
   * @remarks
   * ## Usage notes
   * You can call the GetCAInstanceStatus operation to query the status information of a private CA instance by using the ID of the instance. The instance is purchased by using the SSL Certificates Service console. The status information includes the status of the private CA instance, the number of certificates that can be issued by using the private CA instance, and the number of issued certificates.
   * Before you call this operation, make sure that you have purchased a private CA by using the [SSL Certificates Service console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Create a private CA](https://help.aliyun.com/document_detail/208553.html).
   * 
   * @param request - GetCAInstanceStatusRequest
   * @returns GetCAInstanceStatusResponse
   */
  async getCAInstanceStatus(request: $_model.GetCAInstanceStatusRequest): Promise<$_model.GetCAInstanceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCAInstanceStatusWithOptions(request, runtime);
  }

  /**
   * 获取证书列表
   * 
   * @param request - ListCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCertResponse
   */
  async listCertWithOptions(request: $_model.ListCertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.afterDate)) {
      query["AfterDate"] = request.afterDate;
    }

    if (!$dara.isNull(request.beforeDate)) {
      query["BeforeDate"] = request.beforeDate;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceUuid)) {
      query["InstanceUuid"] = request.instanceUuid;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCert",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCertResponse>(await this.callApi(params, req, runtime), new $_model.ListCertResponse({}));
  }

  /**
   * 获取证书列表
   * 
   * @param request - ListCertRequest
   * @returns ListCertResponse
   */
  async listCert(request: $_model.ListCertRequest): Promise<$_model.ListCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCertWithOptions(request, runtime);
  }

  /**
   * Queries the details about all client certificates and server certificates.
   * 
   * @remarks
   * You can call the ListClientCertificate operation to perform a paged query of the details about all client certificates and server certificates that you create. The details include the unique identifier, serial number, user information, content, and status of each certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClientCertificateResponse
   */
  async listClientCertificateWithOptions(request: $_model.ListClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClientCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.ListClientCertificateResponse({}));
  }

  /**
   * Queries the details about all client certificates and server certificates.
   * 
   * @remarks
   * You can call the ListClientCertificate operation to perform a paged query of the details about all client certificates and server certificates that you create. The details include the unique identifier, serial number, user information, content, and status of each certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListClientCertificateRequest
   * @returns ListClientCertificateResponse
   */
  async listClientCertificate(request: $_model.ListClientCertificateRequest): Promise<$_model.ListClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClientCertificateWithOptions(request, runtime);
  }

  /**
   * 查询私有CA机构证书
   * 
   * @param request - ListPcaCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPcaCaCertificateResponse
   */
  async listPcaCaCertificateWithOptions(request: $_model.ListPcaCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPcaCaCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPcaCaCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPcaCaCertificateResponse>(await this.callApi(params, req, runtime), new $_model.ListPcaCaCertificateResponse({}));
  }

  /**
   * 查询私有CA机构证书
   * 
   * @param request - ListPcaCaCertificateRequest
   * @returns ListPcaCaCertificateResponse
   */
  async listPcaCaCertificate(request: $_model.ListPcaCaCertificateRequest): Promise<$_model.ListPcaCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPcaCaCertificateWithOptions(request, runtime);
  }

  /**
   * Queries the details about all client certificates and server certificates that are revoked.
   * 
   * @remarks
   * You can call the ListRevokeCertificate operation to perform a paged query of the details about all revoked client certificates and server certificates. The details include the unique identifier, serial number, and revocation date of each certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListRevokeCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRevokeCertificateResponse
   */
  async listRevokeCertificateWithOptions(request: $_model.ListRevokeCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRevokeCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRevokeCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRevokeCertificateResponse>(await this.callApi(params, req, runtime), new $_model.ListRevokeCertificateResponse({}));
  }

  /**
   * Queries the details about all client certificates and server certificates that are revoked.
   * 
   * @remarks
   * You can call the ListRevokeCertificate operation to perform a paged query of the details about all revoked client certificates and server certificates. The details include the unique identifier, serial number, and revocation date of each certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListRevokeCertificateRequest
   * @returns ListRevokeCertificateResponse
   */
  async listRevokeCertificate(request: $_model.ListRevokeCertificateRequest): Promise<$_model.ListRevokeCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRevokeCertificateWithOptions(request, runtime);
  }

  /**
   * Changes the status of a root certificate authority (CA) certificate or an intermediate CA certificate from ISSUE to REVOKE.
   * 
   * @remarks
   * After a CA certificate is created, the CA certificate is in the ISSUE state by default. You can call the UpdateCACertificateStatus operation to change the status of a CA certificate from ISSUE to REVOKE. If a CA certificate is in the ISSUE state, the CA certificate can be used to issue certificates. If a CA certificate is in the REVOKE state, the CA certificate cannot be used to issue certificates, and the certificates that are issued from the CA certificate become invalid.
   * Before you call this operation, make sure that you have created a root CA by calling the [CreateRootCACertificate] operation or an intermediate CA certificate by calling the [CreateSubCACertificate] operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateCACertificateStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCACertificateStatusResponse
   */
  async updateCACertificateStatusWithOptions(request: $_model.UpdateCACertificateStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCACertificateStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCACertificateStatus",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCACertificateStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCACertificateStatusResponse({}));
  }

  /**
   * Changes the status of a root certificate authority (CA) certificate or an intermediate CA certificate from ISSUE to REVOKE.
   * 
   * @remarks
   * After a CA certificate is created, the CA certificate is in the ISSUE state by default. You can call the UpdateCACertificateStatus operation to change the status of a CA certificate from ISSUE to REVOKE. If a CA certificate is in the ISSUE state, the CA certificate can be used to issue certificates. If a CA certificate is in the REVOKE state, the CA certificate cannot be used to issue certificates, and the certificates that are issued from the CA certificate become invalid.
   * Before you call this operation, make sure that you have created a root CA by calling the [CreateRootCACertificate] operation or an intermediate CA certificate by calling the [CreateSubCACertificate] operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateCACertificateStatusRequest
   * @returns UpdateCACertificateStatusResponse
   */
  async updateCACertificateStatus(request: $_model.UpdateCACertificateStatusRequest): Promise<$_model.UpdateCACertificateStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCACertificateStatusWithOptions(request, runtime);
  }

  /**
   * 上传pca证书到SSL上传证书
   * 
   * @param request - UploadPcaCertToCasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadPcaCertToCasResponse
   */
  async uploadPcaCertToCasWithOptions(request: $_model.UploadPcaCertToCasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadPcaCertToCasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadPcaCertToCas",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadPcaCertToCasResponse>(await this.callApi(params, req, runtime), new $_model.UploadPcaCertToCasResponse({}));
  }

  /**
   * 上传pca证书到SSL上传证书
   * 
   * @param request - UploadPcaCertToCasRequest
   * @returns UploadPcaCertToCasResponse
   */
  async uploadPcaCertToCas(request: $_model.UploadPcaCertToCasRequest): Promise<$_model.UploadPcaCertToCasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadPcaCertToCasWithOptions(request, runtime);
  }

}
