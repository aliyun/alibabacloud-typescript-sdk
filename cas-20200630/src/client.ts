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
   * Assigns the certificate quota to a subordinate certificate authority (CA) instance.
   * 
   * @remarks
   * ## QPS limit
   * This API operation is limited to 10 queries per second (QPS) per user. If you exceed this limit, the system throttles your API calls, which can affect your business. Plan your calls accordingly.
   * 
   * @param request - AssignCertificateCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignCertificateCountResponse
   */
  async assignCertificateCountWithOptions(request: $_model.AssignCertificateCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssignCertificateCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certTotalCount)) {
      query["CertTotalCount"] = request.certTotalCount;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignCertificateCount",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssignCertificateCountResponse>(await this.callApi(params, req, runtime), new $_model.AssignCertificateCountResponse({}));
  }

  /**
   * Assigns the certificate quota to a subordinate certificate authority (CA) instance.
   * 
   * @remarks
   * ## QPS limit
   * This API operation is limited to 10 queries per second (QPS) per user. If you exceed this limit, the system throttles your API calls, which can affect your business. Plan your calls accordingly.
   * 
   * @param request - AssignCertificateCountRequest
   * @returns AssignCertificateCountResponse
   */
  async assignCertificateCount(request: $_model.AssignCertificateCountRequest): Promise<$_model.AssignCertificateCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignCertificateCountWithOptions(request, runtime);
  }

  /**
   * Issues a client certificate by using a system-generated certificate signing request (CSR). You must create a root CA certificate and a subordinate CA certificate before calling this operation.
   * 
   * @remarks
   * Before you call this operation, you must create a root CA certificate by calling [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) and a subordinate CA certificate by calling [CreateSubCACertificate](https://help.aliyun.com/document_detail/465959.html). Only subordinate CA certificates can issue client certificates.
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 calls per second per user. Calls that exceed this limit are throttled, which can impact your business. We recommend that you call this operation at a reasonable rate.
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

    if (!$dara.isNull(request.aliasName)) {
      query["AliasName"] = request.aliasName;
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

    if (!$dara.isNull(request.customIdentifier)) {
      query["CustomIdentifier"] = request.customIdentifier;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.years)) {
      query["Years"] = request.years;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
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
   * Issues a client certificate by using a system-generated certificate signing request (CSR). You must create a root CA certificate and a subordinate CA certificate before calling this operation.
   * 
   * @remarks
   * Before you call this operation, you must create a root CA certificate by calling [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) and a subordinate CA certificate by calling [CreateSubCACertificate](https://help.aliyun.com/document_detail/465959.html). Only subordinate CA certificates can issue client certificates.
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 calls per second per user. Calls that exceed this limit are throttled, which can impact your business. We recommend that you call this operation at a reasonable rate.
   * 
   * @param request - CreateClientCertificateRequest
   * @returns CreateClientCertificateResponse
   */
  async createClientCertificate(request: $_model.CreateClientCertificateRequest): Promise<$_model.CreateClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClientCertificateWithOptions(request, runtime);
  }

  /**
   * Issues a client certificate by using a custom certificate signing request (CSR).
   * 
   * @remarks
   * Before you call this operation, you must create a root CA certificate by calling [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) and a subordinate CA certificate by calling [CreateSubCACertificate](https://help.aliyun.com/document_detail/465959.html). Only subordinate CA certificates can issue client certificates.
   * ## QPS limit
   * This operation is limited to 10 queries per second (QPS) per user. If you exceed this limit, the system throttles your API calls, which may affect your business. We recommend that you plan your calls to avoid being throttled.
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

    if (!$dara.isNull(request.customIdentifier)) {
      query["CustomIdentifier"] = request.customIdentifier;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
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
   * Issues a client certificate by using a custom certificate signing request (CSR).
   * 
   * @remarks
   * Before you call this operation, you must create a root CA certificate by calling [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) and a subordinate CA certificate by calling [CreateSubCACertificate](https://help.aliyun.com/document_detail/465959.html). Only subordinate CA certificates can issue client certificates.
   * ## QPS limit
   * This operation is limited to 10 queries per second (QPS) per user. If you exceed this limit, the system throttles your API calls, which may affect your business. We recommend that you plan your calls to avoid being throttled.
   * 
   * @param request - CreateClientCertificateWithCsrRequest
   * @returns CreateClientCertificateWithCsrResponse
   */
  async createClientCertificateWithCsr(request: $_model.CreateClientCertificateWithCsrRequest): Promise<$_model.CreateClientCertificateWithCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClientCertificateWithCsrWithOptions(request, runtime);
  }

  /**
   * Issues a custom digital certificate with specified subject, subject alternative names (SANs), key usage, and extended key usage attributes.
   * 
   * @remarks
   * By default, the certificate subject is retrieved from the Certificate Signing Request (CSR). If you specify a certificate subject, the subject from the CSR is ignored and the specified subject is used to issue the certificate.
   * You must specify the key usage or extended key usage based on your scenario. The following examples show common scenarios:
   * - Server-side authentication certificate
   * Key usage: digitalSignature, keyEncipherment
   * Extended key usage: serverAuth
   * - Client authentication certificate
   * Key usage: digitalSignature, keyEncipherment
   * Extended key usage: clientAuth
   * - mTLS mutual authentication certificate
   * Key usage: digitalSignature, keyEncipherment
   * Extended key usage: serverAuth, clientAuth
   * - Email signing certificate
   * Key usage: digitalSignature, contentCommitment
   * Extended key usage: emailProtection
   * Note: Compliance CAs are managed by third-party authorities and do not support this operation.
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.validity)) {
      query["Validity"] = request.validity;
    }

    if (!$dara.isNull(request.customIdentifier)) {
      query["customIdentifier"] = request.customIdentifier;
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
   * Issues a custom digital certificate with specified subject, subject alternative names (SANs), key usage, and extended key usage attributes.
   * 
   * @remarks
   * By default, the certificate subject is retrieved from the Certificate Signing Request (CSR). If you specify a certificate subject, the subject from the CSR is ignored and the specified subject is used to issue the certificate.
   * You must specify the key usage or extended key usage based on your scenario. The following examples show common scenarios:
   * - Server-side authentication certificate
   * Key usage: digitalSignature, keyEncipherment
   * Extended key usage: serverAuth
   * - Client authentication certificate
   * Key usage: digitalSignature, keyEncipherment
   * Extended key usage: clientAuth
   * - mTLS mutual authentication certificate
   * Key usage: digitalSignature, keyEncipherment
   * Extended key usage: serverAuth, clientAuth
   * - Email signing certificate
   * Key usage: digitalSignature, contentCommitment
   * Extended key usage: emailProtection
   * Note: Compliance CAs are managed by third-party authorities and do not support this operation.
   * 
   * @param request - CreateCustomCertificateRequest
   * @returns CreateCustomCertificateResponse
   */
  async createCustomCertificate(request: $_model.CreateCustomCertificateRequest): Promise<$_model.CreateCustomCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomCertificateWithOptions(request, runtime);
  }

  /**
   * Create and issue an external subordinate CA certificate using a CSR and API parameters.
   * 
   * @remarks
   * ## Request
   * - Creates an external subordinate CA certificate from a certificate signing request (CSR) and optional API pass-through parameters.
   * - The required `InstanceId` parameter specifies the instance ID of the external subordinate CA.
   * - The `Csr` parameter must contain a valid certificate signing request.
   * - The `Validity` parameter specifies the certificate\\"s validity period and accepts values in either relative or absolute time formats.
   * - The `ApiPassthrough` parameter lets you override information in the CSR, such as subject information, or add certificate extensions.
   * - Note: For end-entity CA certificates, set the `pathLenConstraint` parameter to 0.
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

    if (!$dara.isNull(request.certMaxTime)) {
      query["CertMaxTime"] = request.certMaxTime;
    }

    if (!$dara.isNull(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
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
   * Create and issue an external subordinate CA certificate using a CSR and API parameters.
   * 
   * @remarks
   * ## Request
   * - Creates an external subordinate CA certificate from a certificate signing request (CSR) and optional API pass-through parameters.
   * - The required `InstanceId` parameter specifies the instance ID of the external subordinate CA.
   * - The `Csr` parameter must contain a valid certificate signing request.
   * - The `Validity` parameter specifies the certificate\\"s validity period and accepts values in either relative or absolute time formats.
   * - The `ApiPassthrough` parameter lets you override information in the CSR, such as subject information, or add certificate extensions.
   * - Note: For end-entity CA certificates, set the `pathLenConstraint` parameter to 0.
   * 
   * @param request - CreateExternalCACertificateRequest
   * @returns CreateExternalCACertificateResponse
   */
  async createExternalCACertificate(request: $_model.CreateExternalCACertificateRequest): Promise<$_model.CreateExternalCACertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExternalCACertificateWithOptions(request, runtime);
  }

  /**
   * Revokes a client certificate or a server certificate issued by a private certificate authority (CA).
   * 
   * @remarks
   * After a client or server certificate is revoked, the client or server where the certificate is installed cannot establish HTTPS connections with other devices.
   * After a client or server certificate is revoked, you can call [DeleteClientCertificate](https://help.aliyun.com/document_detail/465981.html) to permanently delete the certificate.
   * ## QPS limit
   * The limit on queries per second (QPS) for this operation is 10 per user. If you exceed this limit, API calls are throttled, which can affect your business. Plan your API calls accordingly.
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
   * Revokes a client certificate or a server certificate issued by a private certificate authority (CA).
   * 
   * @remarks
   * After a client or server certificate is revoked, the client or server where the certificate is installed cannot establish HTTPS connections with other devices.
   * After a client or server certificate is revoked, you can call [DeleteClientCertificate](https://help.aliyun.com/document_detail/465981.html) to permanently delete the certificate.
   * ## QPS limit
   * The limit on queries per second (QPS) for this operation is 10 per user. If you exceed this limit, API calls are throttled, which can affect your business. Plan your API calls accordingly.
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
   * This operation creates a self-signed root CA certificate. A root CA certificate is the starting point of a private trust chain within an enterprise. After you create a root CA certificate, you can use it to issue intermediate CA certificates. You can then use the intermediate CA certificates to issue client and server-side certificates.
   * Before calling this operation, purchase a private root CA in the [SSL Certificate Service console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). Otherwise, the call fails. For more information, see [Purchase a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 calls per second per user. If you exceed the limit, API calls are throttled, which may affect your business. Call the API at a reasonable rate.
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
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
   * This operation creates a self-signed root CA certificate. A root CA certificate is the starting point of a private trust chain within an enterprise. After you create a root CA certificate, you can use it to issue intermediate CA certificates. You can then use the intermediate CA certificates to issue client and server-side certificates.
   * Before calling this operation, purchase a private root CA in the [SSL Certificate Service console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). Otherwise, the call fails. For more information, see [Purchase a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 calls per second per user. If you exceed the limit, API calls are throttled, which may affect your business. Call the API at a reasonable rate.
   * 
   * @param request - CreateRootCACertificateRequest
   * @returns CreateRootCACertificateResponse
   */
  async createRootCACertificate(request: $_model.CreateRootCACertificateRequest): Promise<$_model.CreateRootCACertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRootCACertificateWithOptions(request, runtime);
  }

  /**
   * Issues a server certificate by using a system-generated certificate signing request (CSR).
   * 
   * @remarks
   * Before you call this operation, you must call [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) to create a root certificate authority (CA) certificate and [CreateSubCACertificate](https://help.aliyun.com/document_detail/465975.html) to create a subordinate CA certificate. Only a subordinate CA certificate can issue a server certificate.
   * ## QPS limits
   * The queries per second (QPS) limit for this operation is 10 calls per second for each user. If you exceed this limit, the system throttles your API calls, which can affect your business. Plan your calls accordingly.
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

    if (!$dara.isNull(request.customIdentifier)) {
      query["CustomIdentifier"] = request.customIdentifier;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
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
   * Issues a server certificate by using a system-generated certificate signing request (CSR).
   * 
   * @remarks
   * Before you call this operation, you must call [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) to create a root certificate authority (CA) certificate and [CreateSubCACertificate](https://help.aliyun.com/document_detail/465975.html) to create a subordinate CA certificate. Only a subordinate CA certificate can issue a server certificate.
   * ## QPS limits
   * The queries per second (QPS) limit for this operation is 10 calls per second for each user. If you exceed this limit, the system throttles your API calls, which can affect your business. Plan your calls accordingly.
   * 
   * @param request - CreateServerCertificateRequest
   * @returns CreateServerCertificateResponse
   */
  async createServerCertificate(request: $_model.CreateServerCertificateRequest): Promise<$_model.CreateServerCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServerCertificateWithOptions(request, runtime);
  }

  /**
   * Issues a server certificate by using a custom certificate signing request (CSR).
   * 
   * @remarks
   * Before you call this operation, you must call [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) to create a root CA certificate and [CreateSubCACertificate](https://help.aliyun.com/document_detail/465959.html) to create a subordinate CA certificate. Server-side certificates can be issued only by subordinate CA certificates.
   * ## Limits
   * This operation has a queries per second (QPS) limit of 10 requests per user. If you exceed this limit, rate limiting is triggered, which may affect your business. Call this operation only as needed.
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

    if (!$dara.isNull(request.customIdentifier)) {
      query["CustomIdentifier"] = request.customIdentifier;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
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
   * Issues a server certificate by using a custom certificate signing request (CSR).
   * 
   * @remarks
   * Before you call this operation, you must call [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) to create a root CA certificate and [CreateSubCACertificate](https://help.aliyun.com/document_detail/465959.html) to create a subordinate CA certificate. Server-side certificates can be issued only by subordinate CA certificates.
   * ## Limits
   * This operation has a queries per second (QPS) limit of 10 requests per user. If you exceed this limit, rate limiting is triggered, which may affect your business. Call this operation only as needed.
   * 
   * @param request - CreateServerCertificateWithCsrRequest
   * @returns CreateServerCertificateWithCsrResponse
   */
  async createServerCertificateWithCsr(request: $_model.CreateServerCertificateWithCsrRequest): Promise<$_model.CreateServerCertificateWithCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServerCertificateWithCsrWithOptions(request, runtime);
  }

  /**
   * Creates a subordinate certificate authority (CA) certificate under an existing root CA.
   * 
   * @remarks
   * This operation issues an intermediate CA certificate from an existing root CA certificate. You can use the intermediate CA certificate to issue client and server certificates.
   * Before calling this operation, you must call the [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) operation to create a root CA certificate.
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 calls per user. Calls that exceed this limit are throttled. This may affect your business. Plan your calls accordingly.
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

    if (!$dara.isNull(request.certMaxTime)) {
      query["CertMaxTime"] = request.certMaxTime;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.years)) {
      query["Years"] = request.years;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
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
   * Creates a subordinate certificate authority (CA) certificate under an existing root CA.
   * 
   * @remarks
   * This operation issues an intermediate CA certificate from an existing root CA certificate. You can use the intermediate CA certificate to issue client and server certificates.
   * Before calling this operation, you must call the [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) operation to create a root CA certificate.
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 calls per user. Calls that exceed this limit are throttled. This may affect your business. Plan your calls accordingly.
   * 
   * @param request - CreateSubCACertificateRequest
   * @returns CreateSubCACertificateResponse
   */
  async createSubCACertificate(request: $_model.CreateSubCACertificateRequest): Promise<$_model.CreateSubCACertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSubCACertificateWithOptions(request, runtime);
  }

  /**
   * Deletes a revoked client certificate or server certificate. Only revoked certificates can be deleted.
   * 
   * @remarks
   * Before you call this operation, you must call [CreateRevokeClientCertificate](https://help.aliyun.com/document_detail/465972.html) to revoke the client or server-side certificate.
   * ## QPS limit
   * This operation supports up to 10 queries per second (QPS) for each user. If you exceed the limit, API calls are throttled. This may affect your business. Plan your calls accordingly.
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
   * Deletes a revoked client certificate or server certificate. Only revoked certificates can be deleted.
   * 
   * @remarks
   * Before you call this operation, you must call [CreateRevokeClientCertificate](https://help.aliyun.com/document_detail/465972.html) to revoke the client or server-side certificate.
   * ## QPS limit
   * This operation supports up to 10 queries per second (QPS) for each user. If you exceed the limit, API calls are throttled. This may affect your business. Plan your calls accordingly.
   * 
   * @param request - DeleteClientCertificateRequest
   * @returns DeleteClientCertificateResponse
   */
  async deleteClientCertificate(request: $_model.DeleteClientCertificateRequest): Promise<$_model.DeleteClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClientCertificateWithOptions(request, runtime);
  }

  /**
   * Retrieves information about a certificate authority (CA) certificate.
   * 
   * @remarks
   * You can call this operation to query the details of a root or subordinate CA certificate by its unique identifier. The details include the serial number, subject information, and certificate content.
   * Before you call this operation, you must create a root CA certificate by calling [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) and a subordinate CA certificate by calling [CreateSubCACertificate](https://help.aliyun.com/document_detail/465959.html).
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 calls per second for each user. If you exceed the limit, API calls are throttled, which can affect your business. Plan your calls accordingly.
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
   * Retrieves information about a certificate authority (CA) certificate.
   * 
   * @remarks
   * You can call this operation to query the details of a root or subordinate CA certificate by its unique identifier. The details include the serial number, subject information, and certificate content.
   * Before you call this operation, you must create a root CA certificate by calling [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) and a subordinate CA certificate by calling [CreateSubCACertificate](https://help.aliyun.com/document_detail/465959.html).
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 calls per second for each user. If you exceed the limit, API calls are throttled, which can affect your business. Plan your calls accordingly.
   * 
   * @param request - DescribeCACertificateRequest
   * @returns DescribeCACertificateResponse
   */
  async describeCACertificate(request: $_model.DescribeCACertificateRequest): Promise<$_model.DescribeCACertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCACertificateWithOptions(request, runtime);
  }

  /**
   * Queries the number of certificate authority (CA) certificates that you created.
   * 
   * @remarks
   * This operation queries the number of CA certificates that you have created, including root CA certificates and subordinate CA certificates.
   * ## QPS limit
   * Each user is limited to 10 queries per second (QPS) for this API operation. If you exceed the limit, your API calls are throttled. This may affect your business. Plan your calls accordingly.
   * 
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
   * Queries the number of certificate authority (CA) certificates that you created.
   * 
   * @remarks
   * This operation queries the number of CA certificates that you have created, including root CA certificates and subordinate CA certificates.
   * ## QPS limit
   * Each user is limited to 10 queries per second (QPS) for this API operation. If you exceed the limit, your API calls are throttled. This may affect your business. Plan your calls accordingly.
   * @returns DescribeCACertificateCountResponse
   */
  async describeCACertificateCount(): Promise<$_model.DescribeCACertificateCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCACertificateCountWithOptions(runtime);
  }

  /**
   * Queries all root and subordinate certificate authority (CA) certificates.
   * 
   * @remarks
   * You can call this operation to query the details of all your root and intermediate CA certificates by page. The details include the unique identifier, serial number, subject information, and content of each certificate.
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 for each user. If you exceed the limit, API calls are throttled. This may affect your business. We recommend that you call this operation a reasonable number of times.
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
   * Queries all root and subordinate certificate authority (CA) certificates.
   * 
   * @remarks
   * You can call this operation to query the details of all your root and intermediate CA certificates by page. The details include the unique identifier, serial number, subject information, and content of each certificate.
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 for each user. If you exceed the limit, API calls are throttled. This may affect your business. We recommend that you call this operation a reasonable number of times.
   * 
   * @param request - DescribeCACertificateListRequest
   * @returns DescribeCACertificateListResponse
   */
  async describeCACertificateList(request: $_model.DescribeCACertificateListRequest): Promise<$_model.DescribeCACertificateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCACertificateListWithOptions(request, runtime);
  }

  /**
   * Queries the encrypted private key of a client certificate or server certificate.
   * 
   * @remarks
   * This API applies only to certificates that are issued from a system-generated Certificate Signing Request (CSR). You can use this API to retrieve the encrypted private key of a client certificate or a server-side certificate. Before you call this API, you must have issued a client or server-side certificate by calling one of the following APIs:
   * - [CreateClientCertificate](https://help.aliyun.com/document_detail/465967.html)
   * - [CreateServerCertificate](https://help.aliyun.com/document_detail/465975.html)
   * To keep the private key secure during transmission, this API uses a password that you set to encrypt the private key. The API then returns the encrypted private key. After you retrieve the encrypted private key, you can decrypt it using one of the following methods:
   * - If the certificate uses the RSA encryption algorithm, run the `openssl rsa -in <encrypted_private_key_file> -passin pass:<private_key_password> -out <decrypted_private_key_file>` command to decrypt the private key. You must run this command on a computer that has [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) installed.
   * - If the certificate uses the ECC encryption algorithm, run the `openssl ec -in <encrypted_private_key_file> -passin pass:<private_key_password> -out <decrypted_private_key_file>` command to decrypt the private key. You must run this command on a computer that has [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) installed.
   * - If the certificate uses the SM2 encryption algorithm, run the `openssl ec -in <encrypted_private_key_file> -passin pass:<private_key_password> -out <decrypted_private_key_file>` command to decrypt the private key. You must run this command on a computer that has [BabaSSL](https://github.com/BabaSSL/BabaSSL) installed.
   * > You can call [DescribeClientCertificate](https://help.aliyun.com/document_detail/465985.html) to query the encryption algorithm of the client or server-side certificate.
   * ## QPS limit
   * This API has a queries per second (QPS) limit of 10 for each user. If you exceed this limit, your API calls are throttled. Throttling can affect your business. Plan your calls accordingly.
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
   * Queries the encrypted private key of a client certificate or server certificate.
   * 
   * @remarks
   * This API applies only to certificates that are issued from a system-generated Certificate Signing Request (CSR). You can use this API to retrieve the encrypted private key of a client certificate or a server-side certificate. Before you call this API, you must have issued a client or server-side certificate by calling one of the following APIs:
   * - [CreateClientCertificate](https://help.aliyun.com/document_detail/465967.html)
   * - [CreateServerCertificate](https://help.aliyun.com/document_detail/465975.html)
   * To keep the private key secure during transmission, this API uses a password that you set to encrypt the private key. The API then returns the encrypted private key. After you retrieve the encrypted private key, you can decrypt it using one of the following methods:
   * - If the certificate uses the RSA encryption algorithm, run the `openssl rsa -in <encrypted_private_key_file> -passin pass:<private_key_password> -out <decrypted_private_key_file>` command to decrypt the private key. You must run this command on a computer that has [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) installed.
   * - If the certificate uses the ECC encryption algorithm, run the `openssl ec -in <encrypted_private_key_file> -passin pass:<private_key_password> -out <decrypted_private_key_file>` command to decrypt the private key. You must run this command on a computer that has [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) installed.
   * - If the certificate uses the SM2 encryption algorithm, run the `openssl ec -in <encrypted_private_key_file> -passin pass:<private_key_password> -out <decrypted_private_key_file>` command to decrypt the private key. You must run this command on a computer that has [BabaSSL](https://github.com/BabaSSL/BabaSSL) installed.
   * > You can call [DescribeClientCertificate](https://help.aliyun.com/document_detail/465985.html) to query the encryption algorithm of the client or server-side certificate.
   * ## QPS limit
   * This API has a queries per second (QPS) limit of 10 for each user. If you exceed this limit, your API calls are throttled. Throttling can affect your business. Plan your calls accordingly.
   * 
   * @param request - DescribeCertificatePrivateKeyRequest
   * @returns DescribeCertificatePrivateKeyResponse
   */
  async describeCertificatePrivateKey(request: $_model.DescribeCertificatePrivateKeyRequest): Promise<$_model.DescribeCertificatePrivateKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCertificatePrivateKeyWithOptions(request, runtime);
  }

  /**
   * Retrieves a client certificate or server certificate by its unique identifier.
   * 
   * @remarks
   * You can call this operation to query the details of a client certificate or a server-side certificate by its unique identifier. The details include the serial number, subject, content, and status of the certificate.
   * Before you call this operation, you must create a client certificate or a server-side certificate.
   * To create a client certificate by calling an API, see the following topics:
   * - [CreateClientCertificate](https://help.aliyun.com/document_detail/465967.html)
   * - [CreateClientCertificateWithCsr](https://help.aliyun.com/document_detail/465970.html)
   * To create a server-side certificate by calling an API, see the following topics:
   * - [CreateServerCertificate](https://help.aliyun.com/document_detail/465975.html)
   * - [CreateServerCertificateWithCsr](https://help.aliyun.com/document_detail/465979.html)
   * ## Limits
   * The queries per second (QPS) limit for this API call is 10 per user. If you exceed this limit, throttling is triggered, which may affect your business. Plan your calls accordingly.
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
   * Retrieves a client certificate or server certificate by its unique identifier.
   * 
   * @remarks
   * You can call this operation to query the details of a client certificate or a server-side certificate by its unique identifier. The details include the serial number, subject, content, and status of the certificate.
   * Before you call this operation, you must create a client certificate or a server-side certificate.
   * To create a client certificate by calling an API, see the following topics:
   * - [CreateClientCertificate](https://help.aliyun.com/document_detail/465967.html)
   * - [CreateClientCertificateWithCsr](https://help.aliyun.com/document_detail/465970.html)
   * To create a server-side certificate by calling an API, see the following topics:
   * - [CreateServerCertificate](https://help.aliyun.com/document_detail/465975.html)
   * - [CreateServerCertificateWithCsr](https://help.aliyun.com/document_detail/465979.html)
   * ## Limits
   * The queries per second (QPS) limit for this API call is 10 per user. If you exceed this limit, throttling is triggered, which may affect your business. Plan your calls accordingly.
   * 
   * @param request - DescribeClientCertificateRequest
   * @returns DescribeClientCertificateResponse
   */
  async describeClientCertificate(request: $_model.DescribeClientCertificateRequest): Promise<$_model.DescribeClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClientCertificateWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of multiple client or server certificates by serial number.
   * 
   * @remarks
   * # Usage
   * Retrieves the details of multiple client or server certificates by serial number. The response includes each certificate\\"s serial number, subject information, content, and status.
   * Before calling this operation, ensure you have created a client certificate or a server certificate.
   * To create a client certificate, see:
   * - [CreateClientCertificate](https://help.aliyun.com/document_detail/330873.html)
   * - [CreateClientCertificateWithCsr](https://help.aliyun.com/document_detail/330875.html)
   * To create a server certificate, see:
   * - [CreateServerCertificate](https://help.aliyun.com/document_detail/330877.html)
   * - [CreateServerCertificateWithCsr](https://help.aliyun.com/document_detail/330878.html)
   * # QPS limit
   * The QPS limit for this operation is 10 calls per second per account. Exceeding this limit triggers throttling, which can impact your business. Plan your calls accordingly.
   * 
   * @deprecated OpenAPI DescribeClientCertificateForSerialNumber is deprecated, please use cas::2020-06-30::DescribeClientCertificate instead.
   * 
   * @param request - DescribeClientCertificateForSerialNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClientCertificateForSerialNumberResponse
   */
  async describeClientCertificateForSerialNumberWithOptions(request: $_model.DescribeClientCertificateForSerialNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClientCertificateForSerialNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClientCertificateForSerialNumber",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClientCertificateForSerialNumberResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClientCertificateForSerialNumberResponse({}));
  }

  /**
   * Retrieves the details of multiple client or server certificates by serial number.
   * 
   * @remarks
   * # Usage
   * Retrieves the details of multiple client or server certificates by serial number. The response includes each certificate\\"s serial number, subject information, content, and status.
   * Before calling this operation, ensure you have created a client certificate or a server certificate.
   * To create a client certificate, see:
   * - [CreateClientCertificate](https://help.aliyun.com/document_detail/330873.html)
   * - [CreateClientCertificateWithCsr](https://help.aliyun.com/document_detail/330875.html)
   * To create a server certificate, see:
   * - [CreateServerCertificate](https://help.aliyun.com/document_detail/330877.html)
   * - [CreateServerCertificateWithCsr](https://help.aliyun.com/document_detail/330878.html)
   * # QPS limit
   * The QPS limit for this operation is 10 calls per second per account. Exceeding this limit triggers throttling, which can impact your business. Plan your calls accordingly.
   * 
   * @deprecated OpenAPI DescribeClientCertificateForSerialNumber is deprecated, please use cas::2020-06-30::DescribeClientCertificate instead.
   * 
   * @param request - DescribeClientCertificateForSerialNumberRequest
   * @returns DescribeClientCertificateForSerialNumberResponse
   */
  // Deprecated
  async describeClientCertificateForSerialNumber(request: $_model.DescribeClientCertificateForSerialNumberRequest): Promise<$_model.DescribeClientCertificateForSerialNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClientCertificateForSerialNumberWithOptions(request, runtime);
  }

  /**
   * Queries the status of a client certificate or server certificate by its unique identifier.
   * 
   * @remarks
   * This operation queries the status of multiple client or server-side certificates in a batch using their unique identifiers. For example, you can check whether a certificate is revoked.
   * ## QPS limits
   * This operation is limited to 10 queries per second (QPS) for each user. API calls that exceed this limit are throttled, which may affect your business. We recommend that you call this operation at a reasonable rate.
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
   * Queries the status of a client certificate or server certificate by its unique identifier.
   * 
   * @remarks
   * This operation queries the status of multiple client or server-side certificates in a batch using their unique identifiers. For example, you can check whether a certificate is revoked.
   * ## QPS limits
   * This operation is limited to 10 queries per second (QPS) for each user. API calls that exceed this limit are throttled, which may affect your business. We recommend that you call this operation at a reasonable rate.
   * 
   * @param request - DescribeClientCertificateStatusRequest
   * @returns DescribeClientCertificateStatusResponse
   */
  async describeClientCertificateStatus(request: $_model.DescribeClientCertificateStatusRequest): Promise<$_model.DescribeClientCertificateStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClientCertificateStatusWithOptions(request, runtime);
  }

  /**
   * Queries the status of client and server-side certificates using their serial numbers.
   * 
   * @remarks
   * This operation queries the status of one or more client or server certificates by their serial numbers. For example, you can check whether a certificate is revoked.
   * ## QPS limit
   * You can make up to 10 API calls per second per account. Exceeding this limit triggers throttling, which can impact your business. Plan your calls accordingly.
   * 
   * @param request - DescribeClientCertificateStatusForSerialNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClientCertificateStatusForSerialNumberResponse
   */
  async describeClientCertificateStatusForSerialNumberWithOptions(request: $_model.DescribeClientCertificateStatusForSerialNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClientCertificateStatusForSerialNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClientCertificateStatusForSerialNumber",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClientCertificateStatusForSerialNumberResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClientCertificateStatusForSerialNumberResponse({}));
  }

  /**
   * Queries the status of client and server-side certificates using their serial numbers.
   * 
   * @remarks
   * This operation queries the status of one or more client or server certificates by their serial numbers. For example, you can check whether a certificate is revoked.
   * ## QPS limit
   * You can make up to 10 API calls per second per account. Exceeding this limit triggers throttling, which can impact your business. Plan your calls accordingly.
   * 
   * @param request - DescribeClientCertificateStatusForSerialNumberRequest
   * @returns DescribeClientCertificateStatusForSerialNumberResponse
   */
  async describeClientCertificateStatusForSerialNumber(request: $_model.DescribeClientCertificateStatusForSerialNumberRequest): Promise<$_model.DescribeClientCertificateStatusForSerialNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClientCertificateStatusForSerialNumberWithOptions(request, runtime);
  }

  /**
   * Returns all your certification authority (CA) certificates. These include certificates generated by Private CA and imported external certificates.
   * 
   * @remarks
   * This operation performs a paged query to retrieve the details of all your CA certificates, including root and subordinate CA certificates. These details include the unique identifier, serial number, subject information, and certificate content.
   * ## QPS limit
   * The queries per second (QPS) limit for a single user is 10. The system throttles API calls that exceed this limit, which may affect your business. To prevent throttling, call this operation within the stated limit.
   * 
   * @param request - DescribePcaAndExternalCACertificateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePcaAndExternalCACertificateListResponse
   */
  async describePcaAndExternalCACertificateListWithOptions(request: $_model.DescribePcaAndExternalCACertificateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePcaAndExternalCACertificateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.identifiers)) {
      query["Identifiers"] = request.identifiers;
    }

    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePcaAndExternalCACertificateList",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePcaAndExternalCACertificateListResponse>(await this.callApi(params, req, runtime), new $_model.DescribePcaAndExternalCACertificateListResponse({}));
  }

  /**
   * Returns all your certification authority (CA) certificates. These include certificates generated by Private CA and imported external certificates.
   * 
   * @remarks
   * This operation performs a paged query to retrieve the details of all your CA certificates, including root and subordinate CA certificates. These details include the unique identifier, serial number, subject information, and certificate content.
   * ## QPS limit
   * The queries per second (QPS) limit for a single user is 10. The system throttles API calls that exceed this limit, which may affect your business. To prevent throttling, call this operation within the stated limit.
   * 
   * @param request - DescribePcaAndExternalCACertificateListRequest
   * @returns DescribePcaAndExternalCACertificateListResponse
   */
  async describePcaAndExternalCACertificateList(request: $_model.DescribePcaAndExternalCACertificateListRequest): Promise<$_model.DescribePcaAndExternalCACertificateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePcaAndExternalCACertificateListWithOptions(request, runtime);
  }

  /**
   * Queries the status of a private certificate authority (CA) instance, including the remaining certificate quota.
   * 
   * @remarks
   * Use this operation to query the status of a private CA instance by its ID. The status information includes the instance\\"s status, the total number of certificates it can issue, and the number of certificates already issued.
   * Before you call this operation, purchase a private CA in the [CAS console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Purchase a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## QPS limits
   * This operation has a queries per second (QPS) limit of 10 for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this operation at a reasonable rate.
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
   * Queries the status of a private certificate authority (CA) instance, including the remaining certificate quota.
   * 
   * @remarks
   * Use this operation to query the status of a private CA instance by its ID. The status information includes the instance\\"s status, the total number of certificates it can issue, and the number of certificates already issued.
   * Before you call this operation, purchase a private CA in the [CAS console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Purchase a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## QPS limits
   * This operation has a queries per second (QPS) limit of 10 for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this operation at a reasonable rate.
   * 
   * @param request - GetCAInstanceStatusRequest
   * @returns GetCAInstanceStatusResponse
   */
  async getCAInstanceStatus(request: $_model.GetCAInstanceStatusRequest): Promise<$_model.GetCAInstanceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCAInstanceStatusWithOptions(request, runtime);
  }

  /**
   * Obtain the CRL URL of a CA
   * 
   * @remarks
   * This API is used to query the status information of a private CA instance that you purchased through the SSL Certificates Service console by using the ID of the private CA instance. For example, the status of the CA instance, the number of certificates contained, the number of issued certificates, and so on.
   * Before calling this API, you must have purchased a private CA through the [Certificate Management Service console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Purchase a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## QPS Limit
   * The per-user QPS limit for this API is 10 calls per second. If the limit is exceeded, API calls will be throttled, which may affect your business. Please call the API appropriately.
   * 
   * @param request - GetCaInstanceCrlAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCaInstanceCrlAddressResponse
   */
  async getCaInstanceCrlAddressWithOptions(request: $_model.GetCaInstanceCrlAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCaInstanceCrlAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caIdentifier)) {
      query["CaIdentifier"] = request.caIdentifier;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCaInstanceCrlAddress",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCaInstanceCrlAddressResponse>(await this.callApi(params, req, runtime), new $_model.GetCaInstanceCrlAddressResponse({}));
  }

  /**
   * Obtain the CRL URL of a CA
   * 
   * @remarks
   * This API is used to query the status information of a private CA instance that you purchased through the SSL Certificates Service console by using the ID of the private CA instance. For example, the status of the CA instance, the number of certificates contained, the number of issued certificates, and so on.
   * Before calling this API, you must have purchased a private CA through the [Certificate Management Service console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Purchase a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## QPS Limit
   * The per-user QPS limit for this API is 10 calls per second. If the limit is exceeded, API calls will be throttled, which may affect your business. Please call the API appropriately.
   * 
   * @param request - GetCaInstanceCrlAddressRequest
   * @returns GetCaInstanceCrlAddressResponse
   */
  async getCaInstanceCrlAddress(request: $_model.GetCaInstanceCrlAddressRequest): Promise<$_model.GetCaInstanceCrlAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCaInstanceCrlAddressWithOptions(request, runtime);
  }

  /**
   * Queries the end-entity instances under a private certificate authority (CA).
   * 
   * @remarks
   * This operation queries the status of a private Certificate Authority (CA) instance by its ID. It returns details for a private CA instance that you purchased in the Certificate Management Service (CAS) console. These details include the instance status, the number of certificates it contains, and the number of issued certificates.
   * Before calling this operation, purchase a private CA from the [CAS console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Purchase a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## QPS limits
   * The queries per second (QPS) limit for this operation is 10 calls per second for each user. If you exceed the limit, API calls are throttled, which may affect your business. Plan your calls accordingly.
   * 
   * @param request - ListAllEndEntityInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllEndEntityInstanceResponse
   */
  async listAllEndEntityInstanceWithOptions(request: $_model.ListAllEndEntityInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllEndEntityInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.recursiveChildren)) {
      query["RecursiveChildren"] = request.recursiveChildren;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllEndEntityInstance",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllEndEntityInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ListAllEndEntityInstanceResponse({}));
  }

  /**
   * Queries the end-entity instances under a private certificate authority (CA).
   * 
   * @remarks
   * This operation queries the status of a private Certificate Authority (CA) instance by its ID. It returns details for a private CA instance that you purchased in the Certificate Management Service (CAS) console. These details include the instance status, the number of certificates it contains, and the number of issued certificates.
   * Before calling this operation, purchase a private CA from the [CAS console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Purchase a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## QPS limits
   * The queries per second (QPS) limit for this operation is 10 calls per second for each user. If you exceed the limit, API calls are throttled, which may affect your business. Plan your calls accordingly.
   * 
   * @param request - ListAllEndEntityInstanceRequest
   * @returns ListAllEndEntityInstanceResponse
   */
  async listAllEndEntityInstance(request: $_model.ListAllEndEntityInstanceRequest): Promise<$_model.ListAllEndEntityInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAllEndEntityInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the operation logs of a certificate authority (CA) certificate, such as issuance and revocation events.
   * 
   * @remarks
   * You can use this API to query the operation logs for a Certificate Authority (CA) certificate. These logs record operations, such as certificate creation and status changes, for both root and subordinate CA certificates.
   * This API is limited to 10 queries per second (QPS) per user. API calls that exceed this limit are throttled. This can impact your business. Ensure that you call the API within this limit.
   * 
   * @param request - ListCACertificateLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCACertificateLogResponse
   */
  async listCACertificateLogWithOptions(request: $_model.ListCACertificateLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCACertificateLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCACertificateLog",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCACertificateLogResponse>(await this.callApi(params, req, runtime), new $_model.ListCACertificateLogResponse({}));
  }

  /**
   * Queries the operation logs of a certificate authority (CA) certificate, such as issuance and revocation events.
   * 
   * @remarks
   * You can use this API to query the operation logs for a Certificate Authority (CA) certificate. These logs record operations, such as certificate creation and status changes, for both root and subordinate CA certificates.
   * This API is limited to 10 queries per second (QPS) per user. API calls that exceed this limit are throttled. This can impact your business. Ensure that you call the API within this limit.
   * 
   * @param request - ListCACertificateLogRequest
   * @returns ListCACertificateLogResponse
   */
  async listCACertificateLog(request: $_model.ListCACertificateLogRequest): Promise<$_model.ListCACertificateLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCACertificateLogWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of certificates.
   * 
   * @remarks
   * The QPS limit for this API is 10 per user. If you exceed this limit, your API calls will be throttled. To avoid impacting your business, please plan your calls accordingly.
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

    if (!$dara.isNull(request.parentIdentifier)) {
      query["ParentIdentifier"] = request.parentIdentifier;
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
   * Retrieves a list of certificates.
   * 
   * @remarks
   * The QPS limit for this API is 10 per user. If you exceed this limit, your API calls will be throttled. To avoid impacting your business, please plan your calls accordingly.
   * 
   * @param request - ListCertRequest
   * @returns ListCertResponse
   */
  async listCert(request: $_model.ListCertRequest): Promise<$_model.ListCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCertWithOptions(request, runtime);
  }

  /**
   * Lists all client certificates and server certificates issued by a private certificate authority (CA).
   * 
   * @remarks
   * This API performs a paged query to retrieve the details of all client and server-side certificates that you have created. These details include the unique identifier, serial number, subject information, content, and status of each certificate.
   * ## QPS limit
   * The QPS limit for a single user is 10 calls per second. If you exceed this limit, your API calls are throttled, which may affect your business. Call this API at a reasonable rate.
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
   * Lists all client certificates and server certificates issued by a private certificate authority (CA).
   * 
   * @remarks
   * This API performs a paged query to retrieve the details of all client and server-side certificates that you have created. These details include the unique identifier, serial number, subject information, content, and status of each certificate.
   * ## QPS limit
   * The QPS limit for a single user is 10 calls per second. If you exceed this limit, your API calls are throttled, which may affect your business. Call this API at a reasonable rate.
   * 
   * @param request - ListClientCertificateRequest
   * @returns ListClientCertificateResponse
   */
  async listClientCertificate(request: $_model.ListClientCertificateRequest): Promise<$_model.ListClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClientCertificateWithOptions(request, runtime);
  }

  /**
   * Lists private certificate authority (CA) certificates.
   * 
   * @remarks
   * This operation lists CA certificates, including root and subordinate CA certificates.
   * This operation has a limit of 10 queries per second (QPS) for each user. If you exceed the limit, API calls are throttled, which may affect your business. Call this operation at a reasonable rate.
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
   * Lists private certificate authority (CA) certificates.
   * 
   * @remarks
   * This operation lists CA certificates, including root and subordinate CA certificates.
   * This operation has a limit of 10 queries per second (QPS) for each user. If you exceed the limit, API calls are throttled, which may affect your business. Call this operation at a reasonable rate.
   * 
   * @param request - ListPcaCaCertificateRequest
   * @returns ListPcaCaCertificateResponse
   */
  async listPcaCaCertificate(request: $_model.ListPcaCaCertificateRequest): Promise<$_model.ListPcaCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPcaCaCertificateWithOptions(request, runtime);
  }

  /**
   * Queries all revoked client certificates and server certificates.
   * 
   * @remarks
   * Performs a paged query to retrieve the details of all revoked client and server-side certificates, such as the unique identifier, serial number, and revocation date.
   * ## QPS limit
   * The queries per second (QPS) limit for this API is 10 for each user. If you exceed this limit, API calls are throttled, which may affect your business. We recommend that you call this API at a reasonable rate.
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
   * Queries all revoked client certificates and server certificates.
   * 
   * @remarks
   * Performs a paged query to retrieve the details of all revoked client and server-side certificates, such as the unique identifier, serial number, and revocation date.
   * ## QPS limit
   * The queries per second (QPS) limit for this API is 10 for each user. If you exceed this limit, API calls are throttled, which may affect your business. We recommend that you call this API at a reasonable rate.
   * 
   * @param request - ListRevokeCertificateRequest
   * @returns ListRevokeCertificateResponse
   */
  async listRevokeCertificate(request: $_model.ListRevokeCertificateRequest): Promise<$_model.ListRevokeCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRevokeCertificateWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are attached to Certificate Management Service resources.
   * 
   * @remarks
   * Before you call this operation, you must purchase a private CA in the [Certificate Management Service console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Purchase a private CA](https://help.aliyun.com/document_detail/208553.html).
   * You can call this operation up to 10 times per second per Alibaba Cloud account. If the number of calls per second exceeds this limit, throttling is triggered. This may affect your business. We recommend that you plan your calls accordingly.
   * ## QPS limit
   * You can call this operation up to 10 times per second for each Alibaba Cloud account. If the number of calls per second exceeds this limit, throttling is triggered, which may affect your business. We recommend that you plan your calls accordingly.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags that are attached to Certificate Management Service resources.
   * 
   * @remarks
   * Before you call this operation, you must purchase a private CA in the [Certificate Management Service console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Purchase a private CA](https://help.aliyun.com/document_detail/208553.html).
   * You can call this operation up to 10 times per second per Alibaba Cloud account. If the number of calls per second exceeds this limit, throttling is triggered. This may affect your business. We recommend that you plan your calls accordingly.
   * ## QPS limit
   * You can call this operation up to 10 times per second for each Alibaba Cloud account. If the number of calls per second exceeds this limit, throttling is triggered, which may affect your business. We recommend that you plan your calls accordingly.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Moves a Certificate Management Service resource to a different resource group.
   * 
   * @remarks
   * This operation queries the status information of a private CA instance that you purchased in the Certificate Management Service (CAS) console. You can query by the private CA instance ID to retrieve information such as the status of the CA instance, the number of certificates it contains, and the number of issued certificates.
   * Before you call this operation, you must purchase a private CA in the [CAS console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Purchase a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## QPS limit
   * This operation is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this operation within the specified limit.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: $_model.MoveResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveResourceGroup",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.MoveResourceGroupResponse({}));
  }

  /**
   * Moves a Certificate Management Service resource to a different resource group.
   * 
   * @remarks
   * This operation queries the status information of a private CA instance that you purchased in the Certificate Management Service (CAS) console. You can query by the private CA instance ID to retrieve information such as the status of the CA instance, the number of certificates it contains, and the number of issued certificates.
   * Before you call this operation, you must purchase a private CA in the [CAS console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Purchase a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## QPS limit
   * This operation is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this operation within the specified limit.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Attaches tags to one or more Certificate Management Service resources.
   * 
   * @remarks
   * This operation adds tags to one or more resources. You can add tags to private CA instances that you purchased in the Certificate Management Service (CAS) console.
   * Before calling this operation, purchase a private CA in the [CAS console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Purchase a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## QPS limit
   * This operation is limited to 10 queries per second (QPS) per user. If you exceed this limit, API calls are throttled, which may affect your business. We recommend that you call this operation at a reasonable rate.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Attaches tags to one or more Certificate Management Service resources.
   * 
   * @remarks
   * This operation adds tags to one or more resources. You can add tags to private CA instances that you purchased in the Certificate Management Service (CAS) console.
   * Before calling this operation, purchase a private CA in the [CAS console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Purchase a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## QPS limit
   * This operation is limited to 10 queries per second (QPS) per user. If you exceed this limit, API calls are throttled, which may affect your business. We recommend that you call this operation at a reasonable rate.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from one or more Certificate Management Service resources.
   * 
   * @remarks
   * This operation queries status information for a private Certificate Authority (CA) instance that you purchased in the Certificate Management Service (CAS) console. You can use the private CA instance ID to retrieve information such as the instance status, the number of certificates it contains, and the number of certificates issued.
   * Before you call this operation, you must purchase a private CA from the [CAS console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Purchase a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 calls per second per user. If you exceed this limit, API calls are throttled. This may affect your business. Plan your calls accordingly.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Removes tags from one or more Certificate Management Service resources.
   * 
   * @remarks
   * This operation queries status information for a private Certificate Authority (CA) instance that you purchased in the Certificate Management Service (CAS) console. You can use the private CA instance ID to retrieve information such as the instance status, the number of certificates it contains, and the number of certificates issued.
   * Before you call this operation, you must purchase a private CA from the [CAS console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Purchase a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 calls per second per user. If you exceed this limit, API calls are throttled. This may affect your business. Plan your calls accordingly.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Changes the status of a root or subordinate certificate authority (CA) certificate, such as revoking or disabling an active CA.
   * 
   * @remarks
   * When you create a CA certificate, its status is ISSUE by default. You can call this API operation to change the status of a CA certificate from ISSUE to REVOKE. A CA certificate in the ISSUE state can be used to issue certificates. A CA certificate in the REVOKE state cannot be used to issue certificates, and all certificates issued by this CA certificate become invalid.
   * Before you call this API operation, create a root CA certificate by calling [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) and an intermediate CA certificate by calling [CreateSubCACertificate](https://help.aliyun.com/document_detail/465959.html).
   * ## QPS limit
   * This operation is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled. This may affect your business. Plan your calls accordingly.
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
   * Changes the status of a root or subordinate certificate authority (CA) certificate, such as revoking or disabling an active CA.
   * 
   * @remarks
   * When you create a CA certificate, its status is ISSUE by default. You can call this API operation to change the status of a CA certificate from ISSUE to REVOKE. A CA certificate in the ISSUE state can be used to issue certificates. A CA certificate in the REVOKE state cannot be used to issue certificates, and all certificates issued by this CA certificate become invalid.
   * Before you call this API operation, create a root CA certificate by calling [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) and an intermediate CA certificate by calling [CreateSubCACertificate](https://help.aliyun.com/document_detail/465959.html).
   * ## QPS limit
   * This operation is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled. This may affect your business. Plan your calls accordingly.
   * 
   * @param request - UpdateCACertificateStatusRequest
   * @returns UpdateCACertificateStatusResponse
   */
  async updateCACertificateStatus(request: $_model.UpdateCACertificateStatusRequest): Promise<$_model.UpdateCACertificateStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCACertificateStatusWithOptions(request, runtime);
  }

  /**
   * Updates the properties of a private CA certificate, such as the export status.
   * 
   * @remarks
   * When a Certificate Authority (CA) certificate is created, its status is Normal by default. You can call this API operation to change the status of a CA certificate to Revoked. A CA certificate in the Normal status can be used to issue certificates. A revoked CA certificate cannot be used to issue certificates, and all certificates previously issued by it become invalid.
   * Before you call this API operation, you must create a root CA certificate by calling [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) and a subordinate CA certificate by calling [CreateSubCACertificate](https://help.aliyun.com/document_detail/465959.html).
   * ## QPS limits
   * This API operation is limited to 10 queries per second (QPS) per user. If you exceed this limit, API calls are throttled, which may affect your business. Call this API operation at a reasonable rate.
   * 
   * @param request - UpdatePcaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePcaCertificateResponse
   */
  async updatePcaCertificateWithOptions(request: $_model.UpdatePcaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePcaCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePcaCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePcaCertificateResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePcaCertificateResponse({}));
  }

  /**
   * Updates the properties of a private CA certificate, such as the export status.
   * 
   * @remarks
   * When a Certificate Authority (CA) certificate is created, its status is Normal by default. You can call this API operation to change the status of a CA certificate to Revoked. A CA certificate in the Normal status can be used to issue certificates. A revoked CA certificate cannot be used to issue certificates, and all certificates previously issued by it become invalid.
   * Before you call this API operation, you must create a root CA certificate by calling [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) and a subordinate CA certificate by calling [CreateSubCACertificate](https://help.aliyun.com/document_detail/465959.html).
   * ## QPS limits
   * This API operation is limited to 10 queries per second (QPS) per user. If you exceed this limit, API calls are throttled, which may affect your business. Call this API operation at a reasonable rate.
   * 
   * @param request - UpdatePcaCertificateRequest
   * @returns UpdatePcaCertificateResponse
   */
  async updatePcaCertificate(request: $_model.UpdatePcaCertificateRequest): Promise<$_model.UpdatePcaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePcaCertificateWithOptions(request, runtime);
  }

  /**
   * Uploads a private CA certificate to Certificate Management Service for centralized management.
   * 
   * @remarks
   * This API operation uploads a PCA certificate to a certificate repository.
   * ## QPS limit
   * This operation has a queries per second (QPS) limit of 10 calls per second for each user. If you exceed the limit, your API calls are throttled. Throttling may affect your business. We recommend that you call this operation at a reasonable rate.
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
   * Uploads a private CA certificate to Certificate Management Service for centralized management.
   * 
   * @remarks
   * This API operation uploads a PCA certificate to a certificate repository.
   * ## QPS limit
   * This operation has a queries per second (QPS) limit of 10 calls per second for each user. If you exceed the limit, your API calls are throttled. Throttling may affect your business. We recommend that you call this operation at a reasonable rate.
   * 
   * @param request - UploadPcaCertToCasRequest
   * @returns UploadPcaCertToCasResponse
   */
  async uploadPcaCertToCas(request: $_model.UploadPcaCertToCasRequest): Promise<$_model.UploadPcaCertToCasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadPcaCertToCasWithOptions(request, runtime);
  }

}
