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
      'me-east-1': "cas.me-east-1.aliyuncs.com",
      'eu-central-1': "cas.eu-central-1.aliyuncs.com",
      'ap-southeast-2': "cas.ap-southeast-2.aliyuncs.com",
      'ap-southeast-1': "cas.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "cas.ap-south-1.aliyuncs.com",
      'ap-northeast-1': "cas.ap-northeast-1.aliyuncs.com",
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
   * Adds an AccessKey for authorization.
   * 
   * @remarks
   * The single-user QPS limit for this API is 100 queries per second (QPS). Calls that exceed this limit are throttled, which can affect your business operations. Call this API at a reasonable rate to avoid throttling.
   * 
   * @param request - AddCloudAccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCloudAccessResponse
   */
  async addCloudAccessWithOptions(request: $_model.AddCloudAccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddCloudAccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cloudName)) {
      query["CloudName"] = request.cloudName;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    if (!$dara.isNull(request.secretKey)) {
      query["SecretKey"] = request.secretKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCloudAccess",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCloudAccessResponse>(await this.callApi(params, req, runtime), new $_model.AddCloudAccessResponse({}));
  }

  /**
   * Adds an AccessKey for authorization.
   * 
   * @remarks
   * The single-user QPS limit for this API is 100 queries per second (QPS). Calls that exceed this limit are throttled, which can affect your business operations. Call this API at a reasonable rate to avoid throttling.
   * 
   * @param request - AddCloudAccessRequest
   * @returns AddCloudAccessResponse
   */
  async addCloudAccess(request: $_model.AddCloudAccessRequest): Promise<$_model.AddCloudAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCloudAccessWithOptions(request, runtime);
  }

  /**
   * Applies for a certificate.
   * 
   * @param request - ApplyCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyCertificateResponse
   */
  async applyCertificateWithOptions(request: $_model.ApplyCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyCertificate",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyCertificateResponse>(await this.callApi(params, req, runtime), new $_model.ApplyCertificateResponse({}));
  }

  /**
   * Applies for a certificate.
   * 
   * @param request - ApplyCertificateRequest
   * @returns ApplyCertificateResponse
   */
  async applyCertificate(request: $_model.ApplyCertificateRequest): Promise<$_model.ApplyCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyCertificateWithOptions(request, runtime);
  }

  /**
   * Updates the notification status in batches
   * 
   * @remarks
   * After a CA certificate is created, it is in the normal issuance state by default. You can call this operation to change the status of a CA certificate from normal issuance to revoked. In the normal issuance state, the CA certificate can be used to issue certificates. In the revoked state, the CA certificate cannot be used to issue certificates, and the certificates that have been issued by the CA certificate also become invalid accordingly.
   * Before you call this operation, you must have called [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) to create a root CA certificate and called [CreateSubCACertificate](https://help.aliyun.com/document_detail/465959.html) to create a sub CA certificate.
   * ## QPS limit
   * The QPS limit per user for this operation is 10 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation properly.
   * 
   * @param request - BatchUpdateNoticeStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUpdateNoticeStatusResponse
   */
  async batchUpdateNoticeStatusWithOptions(request: $_model.BatchUpdateNoticeStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUpdateNoticeStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.noticeBiz)) {
      query["NoticeBiz"] = request.noticeBiz;
    }

    if (!$dara.isNull(request.noticeStatus)) {
      query["NoticeStatus"] = request.noticeStatus;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUpdateNoticeStatus",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchUpdateNoticeStatusResponse>(await this.callApi(params, req, runtime), new $_model.BatchUpdateNoticeStatusResponse({}));
  }

  /**
   * Updates the notification status in batches
   * 
   * @remarks
   * After a CA certificate is created, it is in the normal issuance state by default. You can call this operation to change the status of a CA certificate from normal issuance to revoked. In the normal issuance state, the CA certificate can be used to issue certificates. In the revoked state, the CA certificate cannot be used to issue certificates, and the certificates that have been issued by the CA certificate also become invalid accordingly.
   * Before you call this operation, you must have called [CreateRootCACertificate](https://help.aliyun.com/document_detail/465962.html) to create a root CA certificate and called [CreateSubCACertificate](https://help.aliyun.com/document_detail/465959.html) to create a sub CA certificate.
   * ## QPS limit
   * The QPS limit per user for this operation is 10 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation properly.
   * 
   * @param request - BatchUpdateNoticeStatusRequest
   * @returns BatchUpdateNoticeStatusResponse
   */
  async batchUpdateNoticeStatus(request: $_model.BatchUpdateNoticeStatusRequest): Promise<$_model.BatchUpdateNoticeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUpdateNoticeStatusWithOptions(request, runtime);
  }

  /**
   * Revokes an issued certificate or cancels a pending certificate order and restores the quota.
   * 
   * @remarks
   * This API has a limit of 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled. This can affect your business. Call the API at a reasonable rate.
   * 
   * @param request - CancelCertificateForPackageRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelCertificateForPackageRequestResponse
   */
  async cancelCertificateForPackageRequestWithOptions(request: $_model.CancelCertificateForPackageRequestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelCertificateForPackageRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelCertificateForPackageRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelCertificateForPackageRequestResponse>(await this.callApi(params, req, runtime), new $_model.CancelCertificateForPackageRequestResponse({}));
  }

  /**
   * Revokes an issued certificate or cancels a pending certificate order and restores the quota.
   * 
   * @remarks
   * This API has a limit of 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled. This can affect your business. Call the API at a reasonable rate.
   * 
   * @param request - CancelCertificateForPackageRequestRequest
   * @returns CancelCertificateForPackageRequestResponse
   */
  async cancelCertificateForPackageRequest(request: $_model.CancelCertificateForPackageRequestRequest): Promise<$_model.CancelCertificateForPackageRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelCertificateForPackageRequestWithOptions(request, runtime);
  }

  /**
   * Cancels a certificate application order that is pending domain verification or under review.
   * 
   * @remarks
   * This API is limited to 100 queries per second (QPS) for each user. API calls that exceed this limit are throttled. Because this can impact your business, you should call this API at a reasonable rate.
   * 
   * @param request - CancelOrderRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelOrderRequestResponse
   */
  async cancelOrderRequestWithOptions(request: $_model.CancelOrderRequestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelOrderRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelOrderRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelOrderRequestResponse>(await this.callApi(params, req, runtime), new $_model.CancelOrderRequestResponse({}));
  }

  /**
   * Cancels a certificate application order that is pending domain verification or under review.
   * 
   * @remarks
   * This API is limited to 100 queries per second (QPS) for each user. API calls that exceed this limit are throttled. Because this can impact your business, you should call this API at a reasonable rate.
   * 
   * @param request - CancelOrderRequestRequest
   * @returns CancelOrderRequestResponse
   */
  async cancelOrderRequest(request: $_model.CancelOrderRequestRequest): Promise<$_model.CancelOrderRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelOrderRequestWithOptions(request, runtime);
  }

  /**
   * Revokes a certificate application.
   * 
   * @param request - CancelPendingCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelPendingCertificateResponse
   */
  async cancelPendingCertificateWithOptions(request: $_model.CancelPendingCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelPendingCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelPendingCertificate",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelPendingCertificateResponse>(await this.callApi(params, req, runtime), new $_model.CancelPendingCertificateResponse({}));
  }

  /**
   * Revokes a certificate application.
   * 
   * @param request - CancelPendingCertificateRequest
   * @returns CancelPendingCertificateResponse
   */
  async cancelPendingCertificate(request: $_model.CancelPendingCertificateRequest): Promise<$_model.CancelPendingCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelPendingCertificateWithOptions(request, runtime);
  }

  /**
   * Submits a certificate application by using a purchased certificate package quota.
   * 
   * @remarks
   * - Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455800.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * - After you call this operation to submit a certificate application and the certificate is issued, the certificate quota provided by the resource plan that you purchased is consumed. When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate that you want to apply for.
   * - After you call this operation to submit a certificate application, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required for domain name ownership verification and manually complete the verification. Then, your certificate application is reviewed by the certificate authority (CA). If you use the Domain Name System (DNS) verification method, you must complete the verification on your DNS service provider system. If you use the file verification method, you must complete the verification on the DNS server.
   * 
   * @param request - CreateCertificateForPackageRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCertificateForPackageRequestResponse
   */
  async createCertificateForPackageRequestWithOptions(request: $_model.CreateCertificateForPackageRequestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCertificateForPackageRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.companyName)) {
      query["CompanyName"] = request.companyName;
    }

    if (!$dara.isNull(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.validateType)) {
      query["ValidateType"] = request.validateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCertificateForPackageRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCertificateForPackageRequestResponse>(await this.callApi(params, req, runtime), new $_model.CreateCertificateForPackageRequestResponse({}));
  }

  /**
   * Submits a certificate application by using a purchased certificate package quota.
   * 
   * @remarks
   * - Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455800.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * - After you call this operation to submit a certificate application and the certificate is issued, the certificate quota provided by the resource plan that you purchased is consumed. When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate that you want to apply for.
   * - After you call this operation to submit a certificate application, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required for domain name ownership verification and manually complete the verification. Then, your certificate application is reviewed by the certificate authority (CA). If you use the Domain Name System (DNS) verification method, you must complete the verification on your DNS service provider system. If you use the file verification method, you must complete the verification on the DNS server.
   * 
   * @param request - CreateCertificateForPackageRequestRequest
   * @returns CreateCertificateForPackageRequestResponse
   */
  async createCertificateForPackageRequest(request: $_model.CreateCertificateForPackageRequestRequest): Promise<$_model.CreateCertificateForPackageRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCertificateForPackageRequestWithOptions(request, runtime);
  }

  /**
   * Purchases, applies for, and issues a domain validated (DV) certificate by using extended certificate services.
   * 
   * @remarks
   * - You can call this operation to apply for only DV certificates. If you want to apply for an organization validated (OV) or extended validation (EV) certificate, we recommend that you call the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html) operation. This operation allows you to apply for certificates of all specifications and specify the method to generate a certificate signing request (CSR) file.
   * - Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455803.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * - When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate.
   * - After you call this operation to submit a certificate application, Certificate Management Service automatically creates a CSR file for your application and consumes the certificate quota in the certificate resource plans of the specified specifications that you purchased. After you call this operation, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required to complete domain name verification, and manually complete the verification. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on your DNS server. Then, the certificate authority (CA) will review your certificate application.
   * 
   * @param request - CreateCertificateRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCertificateRequestResponse
   */
  async createCertificateRequestWithOptions(request: $_model.CreateCertificateRequestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCertificateRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.validateType)) {
      query["ValidateType"] = request.validateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCertificateRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCertificateRequestResponse>(await this.callApi(params, req, runtime), new $_model.CreateCertificateRequestResponse({}));
  }

  /**
   * Purchases, applies for, and issues a domain validated (DV) certificate by using extended certificate services.
   * 
   * @remarks
   * - You can call this operation to apply for only DV certificates. If you want to apply for an organization validated (OV) or extended validation (EV) certificate, we recommend that you call the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html) operation. This operation allows you to apply for certificates of all specifications and specify the method to generate a certificate signing request (CSR) file.
   * - Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455803.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * - When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate.
   * - After you call this operation to submit a certificate application, Certificate Management Service automatically creates a CSR file for your application and consumes the certificate quota in the certificate resource plans of the specified specifications that you purchased. After you call this operation, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required to complete domain name verification, and manually complete the verification. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on your DNS server. Then, the certificate authority (CA) will review your certificate application.
   * 
   * @param request - CreateCertificateRequestRequest
   * @returns CreateCertificateRequestResponse
   */
  async createCertificateRequest(request: $_model.CreateCertificateRequestRequest): Promise<$_model.CreateCertificateRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCertificateRequestWithOptions(request, runtime);
  }

  /**
   * Purchases, applies for, and issues a domain validated (DV) certificate by using a custom certificate signing request (CSR) file.
   * 
   * @remarks
   * - You can use this operation to apply for only a domain validated (DV) certificate. You cannot use this operation to apply for an organization validated (OV) certificate. We recommend that you use the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html) operation to apply for a certificate. You can use the CreateCertificateForPackageRequest operation to apply for certificates of all types and specify the CSR generation method.
   * - Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455803.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * - When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate that you want to apply for.
   * - After you call this operation to submit a certificate application, the certificate quota of the required specifications that you purchased is consumed. After you call this operation, you must call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required for domain name ownership verification and manually complete the verification. Then, your certificate application is reviewed by the certificate authority (CA). If you use the Domain Name System (DNS) verification method, you must complete the verification on your DNS service provider system. If you use the file verification method, you must complete the verification on the DNS server.
   * 
   * @param request - CreateCertificateWithCsrRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCertificateWithCsrRequestResponse
   */
  async createCertificateWithCsrRequestWithOptions(request: $_model.CreateCertificateWithCsrRequestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCertificateWithCsrRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.validateType)) {
      query["ValidateType"] = request.validateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCertificateWithCsrRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCertificateWithCsrRequestResponse>(await this.callApi(params, req, runtime), new $_model.CreateCertificateWithCsrRequestResponse({}));
  }

  /**
   * Purchases, applies for, and issues a domain validated (DV) certificate by using a custom certificate signing request (CSR) file.
   * 
   * @remarks
   * - You can use this operation to apply for only a domain validated (DV) certificate. You cannot use this operation to apply for an organization validated (OV) certificate. We recommend that you use the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html) operation to apply for a certificate. You can use the CreateCertificateForPackageRequest operation to apply for certificates of all types and specify the CSR generation method.
   * - Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455803.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * - When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate that you want to apply for.
   * - After you call this operation to submit a certificate application, the certificate quota of the required specifications that you purchased is consumed. After you call this operation, you must call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required for domain name ownership verification and manually complete the verification. Then, your certificate application is reviewed by the certificate authority (CA). If you use the Domain Name System (DNS) verification method, you must complete the verification on your DNS service provider system. If you use the file verification method, you must complete the verification on the DNS server.
   * 
   * @param request - CreateCertificateWithCsrRequestRequest
   * @returns CreateCertificateWithCsrRequestResponse
   */
  async createCertificateWithCsrRequest(request: $_model.CreateCertificateWithCsrRequestRequest): Promise<$_model.CreateCertificateWithCsrRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCertificateWithCsrRequestWithOptions(request, runtime);
  }

  /**
   * Creates a company.
   * 
   * @param request - CreateCompanyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCompanyResponse
   */
  async createCompanyWithOptions(request: $_model.CreateCompanyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCompanyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.companyAddress)) {
      query["CompanyAddress"] = request.companyAddress;
    }

    if (!$dara.isNull(request.companyCode)) {
      query["CompanyCode"] = request.companyCode;
    }

    if (!$dara.isNull(request.companyEmail)) {
      query["CompanyEmail"] = request.companyEmail;
    }

    if (!$dara.isNull(request.companyName)) {
      query["CompanyName"] = request.companyName;
    }

    if (!$dara.isNull(request.companyPhone)) {
      query["CompanyPhone"] = request.companyPhone;
    }

    if (!$dara.isNull(request.companyType)) {
      query["CompanyType"] = request.companyType;
    }

    if (!$dara.isNull(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!$dara.isNull(request.department)) {
      query["Department"] = request.department;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.postCode)) {
      query["PostCode"] = request.postCode;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCompany",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCompanyResponse>(await this.callApi(params, req, runtime), new $_model.CreateCompanyResponse({}));
  }

  /**
   * Creates a company.
   * 
   * @param request - CreateCompanyRequest
   * @returns CreateCompanyResponse
   */
  async createCompany(request: $_model.CreateCompanyRequest): Promise<$_model.CreateCompanyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCompanyWithOptions(request, runtime);
  }

  /**
   * Creates a certificate application contact.
   * 
   * @param request - CreateContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContactResponse
   */
  async createContactWithOptions(request: $_model.CreateContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.idcard)) {
      query["Idcard"] = request.idcard;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.webhooks)) {
      query["Webhooks"] = request.webhooks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateContact",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateContactResponse>(await this.callApi(params, req, runtime), new $_model.CreateContactResponse({}));
  }

  /**
   * Creates a certificate application contact.
   * 
   * @param request - CreateContactRequest
   * @returns CreateContactResponse
   */
  async createContact(request: $_model.CreateContactRequest): Promise<$_model.CreateContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createContactWithOptions(request, runtime);
  }

  /**
   * Creates a certificate signing request (CSR) that contains information about an SSL certificate to apply for, such as the domain names and the certificate holder. You must provide a CSR when you submit a certificate application to a certificate authority (CA).
   * 
   * @param request - CreateCsrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCsrResponse
   */
  async createCsrWithOptions(request: $_model.CreateCsrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCsrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!$dara.isNull(request.corpName)) {
      query["CorpName"] = request.corpName;
    }

    if (!$dara.isNull(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!$dara.isNull(request.department)) {
      query["Department"] = request.department;
    }

    if (!$dara.isNull(request.keySize)) {
      query["KeySize"] = request.keySize;
    }

    if (!$dara.isNull(request.locality)) {
      query["Locality"] = request.locality;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    if (!$dara.isNull(request.sans)) {
      query["Sans"] = request.sans;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCsr",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCsrResponse>(await this.callApi(params, req, runtime), new $_model.CreateCsrResponse({}));
  }

  /**
   * Creates a certificate signing request (CSR) that contains information about an SSL certificate to apply for, such as the domain names and the certificate holder. You must provide a CSR when you submit a certificate application to a certificate authority (CA).
   * 
   * @param request - CreateCsrRequest
   * @returns CreateCsrResponse
   */
  async createCsr(request: $_model.CreateCsrRequest): Promise<$_model.CreateCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCsrWithOptions(request, runtime);
  }

  /**
   * Creates a certificate deployment task to deploy an SSL certificate to one or more Alibaba Cloud services immediately or at a scheduled time.
   * 
   * @remarks
   * After the task creation is completed, the task will be in the editing state. You need to call the UpdateDeploymentJobStatus interface to change the status to the pending state, otherwise the task will not be executed.
   * 
   * @param request - CreateDeploymentJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeploymentJobResponse
   */
  async createDeploymentJobWithOptions(request: $_model.CreateDeploymentJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDeploymentJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certIds)) {
      query["CertIds"] = request.certIds;
    }

    if (!$dara.isNull(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.scheduleTime)) {
      query["ScheduleTime"] = request.scheduleTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDeploymentJob",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDeploymentJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateDeploymentJobResponse({}));
  }

  /**
   * Creates a certificate deployment task to deploy an SSL certificate to one or more Alibaba Cloud services immediately or at a scheduled time.
   * 
   * @remarks
   * After the task creation is completed, the task will be in the editing state. You need to call the UpdateDeploymentJobStatus interface to change the status to the pending state, otherwise the task will not be executed.
   * 
   * @param request - CreateDeploymentJobRequest
   * @returns CreateDeploymentJobResponse
   */
  async createDeploymentJob(request: $_model.CreateDeploymentJobRequest): Promise<$_model.CreateDeploymentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDeploymentJobWithOptions(request, runtime);
  }

  /**
   * Issues a single client certificate from the general user certificate repository.
   * 
   * @remarks
   * This API is limited to 10 QPS per user. Exceeding this limit triggers throttling, which can affect your business. Call this API at a reasonable rate to avoid disruption.
   * 
   * @param request - CreateWHClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWHClientCertificateResponse
   */
  async createWHClientCertificateWithOptions(request: $_model.CreateWHClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWHClientCertificateResponse> {
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
      action: "CreateWHClientCertificate",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWHClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.CreateWHClientCertificateResponse({}));
  }

  /**
   * Issues a single client certificate from the general user certificate repository.
   * 
   * @remarks
   * This API is limited to 10 QPS per user. Exceeding this limit triggers throttling, which can affect your business. Call this API at a reasonable rate to avoid disruption.
   * 
   * @param request - CreateWHClientCertificateRequest
   * @returns CreateWHClientCertificateResponse
   */
  async createWHClientCertificate(request: $_model.CreateWHClientCertificateRequest): Promise<$_model.CreateWHClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWHClientCertificateWithOptions(request, runtime);
  }

  /**
   * Creates a certificate warehouse.
   * 
   * @param request - CreateWarehouseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWarehouseResponse
   */
  async createWarehouseWithOptions(request: $_model.CreateWarehouseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWarehouseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.biz)) {
      query["Biz"] = request.biz;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWarehouse",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWarehouseResponse>(await this.callApi(params, req, runtime), new $_model.CreateWarehouseResponse({}));
  }

  /**
   * Creates a certificate warehouse.
   * 
   * @param request - CreateWarehouseRequest
   * @returns CreateWarehouseResponse
   */
  async createWarehouse(request: $_model.CreateWarehouseRequest): Promise<$_model.CreateWarehouseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWarehouseWithOptions(request, runtime);
  }

  /**
   * Decrypts data that was encrypted by using a certificate in a certificate application repository.
   * 
   * @remarks
   * The queries per second (QPS) limit for this API operation is 10 per user. If you exceed the limit, API calls are throttled, which may affect your business. Call this operation at a reasonable rate.
   * 
   * @param request - DecryptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DecryptResponse
   */
  async decryptWithOptions(request: $_model.DecryptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DecryptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    if (!$dara.isNull(request.customIdentifier)) {
      query["CustomIdentifier"] = request.customIdentifier;
    }

    if (!$dara.isNull(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!$dara.isNull(request.warehouseId)) {
      query["WarehouseId"] = request.warehouseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Decrypt",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DecryptResponse>(await this.callApi(params, req, runtime), new $_model.DecryptResponse({}));
  }

  /**
   * Decrypts data that was encrypted by using a certificate in a certificate application repository.
   * 
   * @remarks
   * The queries per second (QPS) limit for this API operation is 10 per user. If you exceed the limit, API calls are throttled, which may affect your business. Call this operation at a reasonable rate.
   * 
   * @param request - DecryptRequest
   * @returns DecryptResponse
   */
  async decrypt(request: $_model.DecryptRequest): Promise<$_model.DecryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.decryptWithOptions(request, runtime);
  }

  /**
   * Deletes a failed domain validated (DV) certificate application order.
   * 
   * @remarks
   * You can call this operation to delete a certificate application order only in the following scenarios:
   * - The status of the order is **review failed**. You have called the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to query the status of the certificate application order and the value of the **Type** parameter is **verify_fail**.
   * - The status of the order is **pending application**. You have called the [CancelOrderRequest](https://help.aliyun.com/document_detail/455299.html) operation to cancel a certificate application order whose status is pending review or being reviewed. The status of the certificate application order that is canceled in this case changes to **pending application**.
   * 
   * @param request - DeleteCertificateRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCertificateRequestResponse
   */
  async deleteCertificateRequestWithOptions(request: $_model.DeleteCertificateRequestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCertificateRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCertificateRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCertificateRequestResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCertificateRequestResponse({}));
  }

  /**
   * Deletes a failed domain validated (DV) certificate application order.
   * 
   * @remarks
   * You can call this operation to delete a certificate application order only in the following scenarios:
   * - The status of the order is **review failed**. You have called the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to query the status of the certificate application order and the value of the **Type** parameter is **verify_fail**.
   * - The status of the order is **pending application**. You have called the [CancelOrderRequest](https://help.aliyun.com/document_detail/455299.html) operation to cancel a certificate application order whose status is pending review or being reviewed. The status of the certificate application order that is canceled in this case changes to **pending application**.
   * 
   * @param request - DeleteCertificateRequestRequest
   * @returns DeleteCertificateRequestResponse
   */
  async deleteCertificateRequest(request: $_model.DeleteCertificateRequestRequest): Promise<$_model.DeleteCertificateRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCertificateRequestWithOptions(request, runtime);
  }

  /**
   * Deletes an access key.
   * 
   * @remarks
   * This operation is limited to 100 queries per second (QPS) per user. API calls that exceed this limit are throttled, which can impact your business.
   * 
   * @param request - DeleteCloudAccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudAccessResponse
   */
  async deleteCloudAccessWithOptions(request: $_model.DeleteCloudAccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudAccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessId)) {
      query["AccessId"] = request.accessId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudAccess",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudAccessResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudAccessResponse({}));
  }

  /**
   * Deletes an access key.
   * 
   * @remarks
   * This operation is limited to 100 queries per second (QPS) per user. API calls that exceed this limit are throttled, which can impact your business.
   * 
   * @param request - DeleteCloudAccessRequest
   * @returns DeleteCloudAccessResponse
   */
  async deleteCloudAccess(request: $_model.DeleteCloudAccessRequest): Promise<$_model.DeleteCloudAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudAccessWithOptions(request, runtime);
  }

  /**
   * Deletes a company.
   * 
   * @param request - DeleteCompanyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCompanyResponse
   */
  async deleteCompanyWithOptions(request: $_model.DeleteCompanyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCompanyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.companyId)) {
      query["CompanyId"] = request.companyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCompany",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCompanyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCompanyResponse({}));
  }

  /**
   * Deletes a company.
   * 
   * @param request - DeleteCompanyRequest
   * @returns DeleteCompanyResponse
   */
  async deleteCompany(request: $_model.DeleteCompanyRequest): Promise<$_model.DeleteCompanyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCompanyWithOptions(request, runtime);
  }

  /**
   * Deletes a contact.
   * 
   * @param request - DeleteContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContactResponse
   */
  async deleteContactWithOptions(request: $_model.DeleteContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteContact",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContactResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContactResponse({}));
  }

  /**
   * Deletes a contact.
   * 
   * @param request - DeleteContactRequest
   * @returns DeleteContactResponse
   */
  async deleteContact(request: $_model.DeleteContactRequest): Promise<$_model.DeleteContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContactWithOptions(request, runtime);
  }

  /**
   * Deletes a certificate signing request (CSR).
   * 
   * @param request - DeleteCsrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCsrResponse
   */
  async deleteCsrWithOptions(request: $_model.DeleteCsrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCsrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.csrId)) {
      query["CsrId"] = request.csrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCsr",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCsrResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCsrResponse({}));
  }

  /**
   * Deletes a certificate signing request (CSR).
   * 
   * @param request - DeleteCsrRequest
   * @returns DeleteCsrResponse
   */
  async deleteCsr(request: $_model.DeleteCsrRequest): Promise<$_model.DeleteCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCsrWithOptions(request, runtime);
  }

  /**
   * Deletes a certificate deployment task.
   * 
   * @param request - DeleteDeploymentJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeploymentJobResponse
   */
  async deleteDeploymentJobWithOptions(request: $_model.DeleteDeploymentJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDeploymentJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDeploymentJob",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDeploymentJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDeploymentJobResponse({}));
  }

  /**
   * Deletes a certificate deployment task.
   * 
   * @param request - DeleteDeploymentJobRequest
   * @returns DeleteDeploymentJobResponse
   */
  async deleteDeploymentJob(request: $_model.DeleteDeploymentJobRequest): Promise<$_model.DeleteDeploymentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDeploymentJobWithOptions(request, runtime);
  }

  /**
   * Deletes a Certificate Management Service instance.
   * 
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: $_model.DeleteInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * Deletes a Certificate Management Service instance.
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a private certificate from a certificate application repository.
   * 
   * @remarks
   * You can call the DeletePCACert operation to delete a private certificate from a certificate application repository.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeletePCACertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePCACertResponse
   */
  async deletePCACertWithOptions(request: $_model.DeletePCACertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePCACertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePCACert",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePCACertResponse>(await this.callApi(params, req, runtime), new $_model.DeletePCACertResponse({}));
  }

  /**
   * Deletes a private certificate from a certificate application repository.
   * 
   * @remarks
   * You can call the DeletePCACert operation to delete a private certificate from a certificate application repository.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeletePCACertRequest
   * @returns DeletePCACertResponse
   */
  async deletePCACert(request: $_model.DeletePCACertRequest): Promise<$_model.DeletePCACertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePCACertWithOptions(request, runtime);
  }

  /**
   * Deletes an expired, revoked, or manually uploaded certificate from Certificate Management Service.
   * 
   * @remarks
   * This operation is limited to 100 queries per second (QPS) per user. API calls exceeding this limit are throttled, which can impact your business. We recommend calling this operation at a reasonable rate to avoid this.
   * 
   * @param request - DeleteUserCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserCertificateResponse
   */
  async deleteUserCertificateWithOptions(request: $_model.DeleteUserCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserCertificate",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserCertificateResponse({}));
  }

  /**
   * Deletes an expired, revoked, or manually uploaded certificate from Certificate Management Service.
   * 
   * @remarks
   * This operation is limited to 100 queries per second (QPS) per user. API calls exceeding this limit are throttled, which can impact your business. We recommend calling this operation at a reasonable rate to avoid this.
   * 
   * @param request - DeleteUserCertificateRequest
   * @returns DeleteUserCertificateResponse
   */
  async deleteUserCertificate(request: $_model.DeleteUserCertificateRequest): Promise<$_model.DeleteUserCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserCertificateWithOptions(request, runtime);
  }

  /**
   * Deletes a certificate warehouse.
   * 
   * @remarks
   * This operation deletes a certificate warehouse.
   * ### QPS limit
   * This operation has a QPS limit of 10 requests per second per user. Exceeding this limit causes subsequent API calls to be throttled, which can impact your services. To ensure service availability, call this operation at a reasonable rate.
   * 
   * @param request - DeleteWarehouseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWarehouseResponse
   */
  async deleteWarehouseWithOptions(request: $_model.DeleteWarehouseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWarehouseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.warehouseInstanceId)) {
      query["WarehouseInstanceId"] = request.warehouseInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWarehouse",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWarehouseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWarehouseResponse({}));
  }

  /**
   * Deletes a certificate warehouse.
   * 
   * @remarks
   * This operation deletes a certificate warehouse.
   * ### QPS limit
   * This operation has a QPS limit of 10 requests per second per user. Exceeding this limit causes subsequent API calls to be throttled, which can impact your services. To ensure service availability, call this operation at a reasonable rate.
   * 
   * @param request - DeleteWarehouseRequest
   * @returns DeleteWarehouseResponse
   */
  async deleteWarehouse(request: $_model.DeleteWarehouseRequest): Promise<$_model.DeleteWarehouseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWarehouseWithOptions(request, runtime);
  }

  /**
   * Deletes a worker task from a certificate deployment task.
   * 
   * @param request - DeleteWorkerResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkerResourceResponse
   */
  async deleteWorkerResourceWithOptions(request: $_model.DeleteWorkerResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkerResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.workerId)) {
      query["WorkerId"] = request.workerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkerResource",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkerResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkerResourceResponse({}));
  }

  /**
   * Deletes a worker task from a certificate deployment task.
   * 
   * @param request - DeleteWorkerResourceRequest
   * @returns DeleteWorkerResourceResponse
   */
  async deleteWorkerResource(request: $_model.DeleteWorkerResourceRequest): Promise<$_model.DeleteWorkerResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWorkerResourceWithOptions(request, runtime);
  }

  /**
   * Queries the status of a certificate application order, such as domain validation progress.
   * 
   * @remarks
   * If you have not completed domain ownership validation after submitting a certificate request, you can call this operation to obtain the information required to complete domain validation. Using the returned domain validation information, you can complete domain validation on the DNS management platform (DNS validation method) or on the domain server (file validation method).
   * Your certificate request will enter the CA center review stage only after you complete domain validation. After the CA center approves your certificate request, a certificate will be issued to you. If the certificate has been issued, you can call this operation to obtain the issued certificate file and private key content.
   * <props="china">
   * For the complete process of requesting a certificate using the resource plan API, see [Process of requesting a certificate using API operations](https://help.aliyun.com/document_detail/204741.html).
   * 
   * @param request - DescribeCertificateStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCertificateStateResponse
   */
  async describeCertificateStateWithOptions(request: $_model.DescribeCertificateStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCertificateStateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCertificateState",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCertificateStateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCertificateStateResponse({}));
  }

  /**
   * Queries the status of a certificate application order, such as domain validation progress.
   * 
   * @remarks
   * If you have not completed domain ownership validation after submitting a certificate request, you can call this operation to obtain the information required to complete domain validation. Using the returned domain validation information, you can complete domain validation on the DNS management platform (DNS validation method) or on the domain server (file validation method).
   * Your certificate request will enter the CA center review stage only after you complete domain validation. After the CA center approves your certificate request, a certificate will be issued to you. If the certificate has been issued, you can call this operation to obtain the issued certificate file and private key content.
   * <props="china">
   * For the complete process of requesting a certificate using the resource plan API, see [Process of requesting a certificate using API operations](https://help.aliyun.com/document_detail/204741.html).
   * 
   * @param request - DescribeCertificateStateRequest
   * @returns DescribeCertificateStateResponse
   */
  async describeCertificateState(request: $_model.DescribeCertificateStateRequest): Promise<$_model.DescribeCertificateStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCertificateStateWithOptions(request, runtime);
  }

  /**
   * Queries the number of cloud resources on which certificates were deployed by using a multi-cloud deployment task.
   * 
   * @param request - DescribeCloudResourceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudResourceStatusResponse
   */
  async describeCloudResourceStatusWithOptions(request: $_model.DescribeCloudResourceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudResourceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudResourceStatus",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudResourceStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudResourceStatusResponse({}));
  }

  /**
   * Queries the number of cloud resources on which certificates were deployed by using a multi-cloud deployment task.
   * 
   * @param request - DescribeCloudResourceStatusRequest
   * @returns DescribeCloudResourceStatusResponse
   */
  async describeCloudResourceStatus(request: $_model.DescribeCloudResourceStatusRequest): Promise<$_model.DescribeCloudResourceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudResourceStatusWithOptions(request, runtime);
  }

  /**
   * Retrieves information about a certificate deployment task, including the task status, target resources, and certificates.
   * 
   * @param request - DescribeDeploymentJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeploymentJobResponse
   */
  async describeDeploymentJobWithOptions(request: $_model.DescribeDeploymentJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeploymentJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeploymentJob",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeploymentJobResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeploymentJobResponse({}));
  }

  /**
   * Retrieves information about a certificate deployment task, including the task status, target resources, and certificates.
   * 
   * @param request - DescribeDeploymentJobRequest
   * @returns DescribeDeploymentJobResponse
   */
  async describeDeploymentJob(request: $_model.DescribeDeploymentJobRequest): Promise<$_model.DescribeDeploymentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeploymentJobWithOptions(request, runtime);
  }

  /**
   * Queries the execution status summary of a certificate deployment task, including the number of succeeded and failed workers.
   * 
   * @param request - DescribeDeploymentJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeploymentJobStatusResponse
   */
  async describeDeploymentJobStatusWithOptions(request: $_model.DescribeDeploymentJobStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeploymentJobStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeploymentJobStatus",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeploymentJobStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeploymentJobStatusResponse({}));
  }

  /**
   * Queries the execution status summary of a certificate deployment task, including the number of succeeded and failed workers.
   * 
   * @param request - DescribeDeploymentJobStatusRequest
   * @returns DescribeDeploymentJobStatusResponse
   */
  async describeDeploymentJobStatus(request: $_model.DescribeDeploymentJobStatusRequest): Promise<$_model.DescribeDeploymentJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeploymentJobStatusWithOptions(request, runtime);
  }

  /**
   * Queries the quota and usage of domain validated (DV) certificate packages.
   * 
   * @param request - DescribePackageStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePackageStateResponse
   */
  async describePackageStateWithOptions(request: $_model.DescribePackageStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePackageStateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePackageState",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePackageStateResponse>(await this.callApi(params, req, runtime), new $_model.DescribePackageStateResponse({}));
  }

  /**
   * Queries the quota and usage of domain validated (DV) certificate packages.
   * 
   * @param request - DescribePackageStateRequest
   * @returns DescribePackageStateResponse
   */
  async describePackageState(request: $_model.DescribePackageStateRequest): Promise<$_model.DescribePackageStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePackageStateWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a certificate stored in a certificate warehouse.
   * 
   * @param request - DescribeWarehouseCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWarehouseCertResponse
   */
  async describeWarehouseCertWithOptions(request: $_model.DescribeWarehouseCertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWarehouseCertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWarehouseCert",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWarehouseCertResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWarehouseCertResponse({}));
  }

  /**
   * Retrieves the details of a certificate stored in a certificate warehouse.
   * 
   * @param request - DescribeWarehouseCertRequest
   * @returns DescribeWarehouseCertResponse
   */
  async describeWarehouseCert(request: $_model.DescribeWarehouseCertRequest): Promise<$_model.DescribeWarehouseCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWarehouseCertWithOptions(request, runtime);
  }

  /**
   * Encrypts data by using a certificate in a certificate application repository.
   * 
   * @remarks
   * The queries per second (QPS) limit for a single user is 10. If you exceed this limit, API calls are throttled, which may affect your business. To prevent this, call this operation at a reasonable rate.
   * 
   * @param request - EncryptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EncryptResponse
   */
  async encryptWithOptions(request: $_model.EncryptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EncryptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.customIdentifier)) {
      query["CustomIdentifier"] = request.customIdentifier;
    }

    if (!$dara.isNull(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!$dara.isNull(request.plaintext)) {
      query["Plaintext"] = request.plaintext;
    }

    if (!$dara.isNull(request.warehouseId)) {
      query["WarehouseId"] = request.warehouseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Encrypt",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EncryptResponse>(await this.callApi(params, req, runtime), new $_model.EncryptResponse({}));
  }

  /**
   * Encrypts data by using a certificate in a certificate application repository.
   * 
   * @remarks
   * The queries per second (QPS) limit for a single user is 10. If you exceed this limit, API calls are throttled, which may affect your business. To prevent this, call this operation at a reasonable rate.
   * 
   * @param request - EncryptRequest
   * @returns EncryptResponse
   */
  async encrypt(request: $_model.EncryptRequest): Promise<$_model.EncryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.encryptWithOptions(request, runtime);
  }

  /**
   * Queries the number of assets.
   * 
   * @remarks
   * Queries the number of CA certificates (including root CA certificates and subordinate CA certificates) that you have created.
   * ## QPS limit
   * The China single-user QPS limit for this API is 10 calls per second. If this limit is exceeded, the API calls are throttled, which may affect your business. Call this API appropriately.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAssetCountResponse
   */
  async getAssetCountWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetAssetCountResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetAssetCount",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAssetCountResponse>(await this.callApi(params, req, runtime), new $_model.GetAssetCountResponse({}));
  }

  /**
   * Queries the number of assets.
   * 
   * @remarks
   * Queries the number of CA certificates (including root CA certificates and subordinate CA certificates) that you have created.
   * ## QPS limit
   * The China single-user QPS limit for this API is 10 calls per second. If this limit is exceeded, the API calls are throttled, which may affect your business. Call this API appropriately.
   * @returns GetAssetCountResponse
   */
  async getAssetCount(): Promise<$_model.GetAssetCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAssetCountWithOptions(runtime);
  }

  /**
   * Queries the remaining quota for certificate application repository operations.
   * 
   * @remarks
   * The queries per second (QPS) limit for this operation is 10 calls per second for each user. If you exceed the limit, your API calls are throttled. This may impact your business. Call this operation at a reasonable rate.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCertWarehouseQuotaResponse
   */
  async getCertWarehouseQuotaWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetCertWarehouseQuotaResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetCertWarehouseQuota",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCertWarehouseQuotaResponse>(await this.callApi(params, req, runtime), new $_model.GetCertWarehouseQuotaResponse({}));
  }

  /**
   * Queries the remaining quota for certificate application repository operations.
   * 
   * @remarks
   * The queries per second (QPS) limit for this operation is 10 calls per second for each user. If you exceed the limit, your API calls are throttled. This may impact your business. Call this operation at a reasonable rate.
   * @returns GetCertWarehouseQuotaResponse
   */
  async getCertWarehouseQuota(): Promise<$_model.GetCertWarehouseQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCertWarehouseQuotaWithOptions(runtime);
  }

  /**
   * Retrieves certificate details, excluding the certificate body and private key.
   * 
   * @param request - GetCertificateDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCertificateDetailResponse
   */
  async getCertificateDetailWithOptions(request: $_model.GetCertificateDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCertificateDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCertificateDetail",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCertificateDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetCertificateDetailResponse({}));
  }

  /**
   * Retrieves certificate details, excluding the certificate body and private key.
   * 
   * @param request - GetCertificateDetailRequest
   * @returns GetCertificateDetailResponse
   */
  async getCertificateDetail(request: $_model.GetCertificateDetailRequest): Promise<$_model.GetCertificateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCertificateDetailWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a company.
   * 
   * @param request - GetCompanyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCompanyResponse
   */
  async getCompanyWithOptions(request: $_model.GetCompanyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCompanyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.companyId)) {
      query["CompanyId"] = request.companyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCompany",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCompanyResponse>(await this.callApi(params, req, runtime), new $_model.GetCompanyResponse({}));
  }

  /**
   * Retrieves the details of a company.
   * 
   * @param request - GetCompanyRequest
   * @returns GetCompanyResponse
   */
  async getCompany(request: $_model.GetCompanyRequest): Promise<$_model.GetCompanyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCompanyWithOptions(request, runtime);
  }

  /**
   * Retrieves a contact.
   * 
   * @param request - GetContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContactResponse
   */
  async getContactWithOptions(request: $_model.GetContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContact",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContactResponse>(await this.callApi(params, req, runtime), new $_model.GetContactResponse({}));
  }

  /**
   * Retrieves a contact.
   * 
   * @param request - GetContactRequest
   * @returns GetContactResponse
   */
  async getContact(request: $_model.GetContactRequest): Promise<$_model.GetContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getContactWithOptions(request, runtime);
  }

  /**
   * Queries the content of a certificate signing request (CSR).
   * 
   * @param request - GetCsrDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCsrDetailResponse
   */
  async getCsrDetailWithOptions(request: $_model.GetCsrDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCsrDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.csrId)) {
      query["CsrId"] = request.csrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCsrDetail",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCsrDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetCsrDetailResponse({}));
  }

  /**
   * Queries the content of a certificate signing request (CSR).
   * 
   * @param request - GetCsrDetailRequest
   * @returns GetCsrDetailResponse
   */
  async getCsrDetail(request: $_model.GetCsrDetailRequest): Promise<$_model.GetCsrDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCsrDetailWithOptions(request, runtime);
  }

  /**
   * Queries the details of an instance.
   * 
   * @param request - GetInstanceDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceDetailResponse
   */
  async getInstanceDetailWithOptions(request: $_model.GetInstanceDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceDetail",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceDetailResponse({}));
  }

  /**
   * Queries the details of an instance.
   * 
   * @param request - GetInstanceDetailRequest
   * @returns GetInstanceDetailResponse
   */
  async getInstanceDetail(request: $_model.GetInstanceDetailRequest): Promise<$_model.GetInstanceDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceDetailWithOptions(request, runtime);
  }

  /**
   * Queries the summary statistics of Certificate Management Service instances, such as certificate counts by status.
   * 
   * @param request - GetInstanceSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceSummaryResponse
   */
  async getInstanceSummaryWithOptions(request: $_model.GetInstanceSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceSummary",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceSummaryResponse({}));
  }

  /**
   * Queries the summary statistics of Certificate Management Service instances, such as certificate counts by status.
   * 
   * @param request - GetInstanceSummaryRequest
   * @returns GetInstanceSummaryResponse
   */
  async getInstanceSummary(request: $_model.GetInstanceSummaryRequest): Promise<$_model.GetInstanceSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceSummaryWithOptions(request, runtime);
  }

  /**
   * Retrieves the resources that match a certificate.
   * 
   * @remarks
   * 本接口用于通过私有 CA 实例的 ID，查询您通过 SSL 证书服务控制台购买的私有 CA 实例的状态信息，例如，CA 实例的状态、包含的证书数量、已签发的证书数量等。
   * 调用本接口前，您必须已经通过[数字证书管理服务控制台](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist)购买了私有 CA。具体操作，请参见[购买私有 CA](https://help.aliyun.com/document_detail/208553.html)。
   * ## QPS 限制
   * 本接口的单用户 QPS 限制为 10 次/秒。超过限制，API 调用将会被限流，这可能影响您的业务，请合理调用。
   * 
   * @param request - GetMatchedResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMatchedResourcesResponse
   */
  async getMatchedResourcesWithOptions(request: $_model.GetMatchedResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMatchedResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certIds)) {
      query["CertIds"] = request.certIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceScope)) {
      query["ResourceScope"] = request.resourceScope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMatchedResources",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMatchedResourcesResponse>(await this.callApi(params, req, runtime), new $_model.GetMatchedResourcesResponse({}));
  }

  /**
   * Retrieves the resources that match a certificate.
   * 
   * @remarks
   * 本接口用于通过私有 CA 实例的 ID，查询您通过 SSL 证书服务控制台购买的私有 CA 实例的状态信息，例如，CA 实例的状态、包含的证书数量、已签发的证书数量等。
   * 调用本接口前，您必须已经通过[数字证书管理服务控制台](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist)购买了私有 CA。具体操作，请参见[购买私有 CA](https://help.aliyun.com/document_detail/208553.html)。
   * ## QPS 限制
   * 本接口的单用户 QPS 限制为 10 次/秒。超过限制，API 调用将会被限流，这可能影响您的业务，请合理调用。
   * 
   * @param request - GetMatchedResourcesRequest
   * @returns GetMatchedResourcesResponse
   */
  async getMatchedResources(request: $_model.GetMatchedResourcesRequest): Promise<$_model.GetMatchedResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMatchedResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the number of assets with certificate-related risks, such as expired or soon-to-expire certificates.
   * 
   * @remarks
   * This operation queries the number of created Certificate Authority (CA) certificates, including root and subordinate CA certificates.
   * ## QPS limits
   * The queries per second (QPS) limit for a single user is 10 calls per second. If you exceed this limit, API calls are rate-limited, which may affect your business. We recommend that you call this operation at a reasonable frequency.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRiskCountResponse
   */
  async getRiskCountWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetRiskCountResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetRiskCount",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRiskCountResponse>(await this.callApi(params, req, runtime), new $_model.GetRiskCountResponse({}));
  }

  /**
   * Queries the number of assets with certificate-related risks, such as expired or soon-to-expire certificates.
   * 
   * @remarks
   * This operation queries the number of created Certificate Authority (CA) certificates, including root and subordinate CA certificates.
   * ## QPS limits
   * The queries per second (QPS) limit for a single user is 10 calls per second. If you exceed this limit, API calls are rate-limited, which may affect your business. We recommend that you call this operation at a reasonable frequency.
   * @returns GetRiskCountResponse
   */
  async getRiskCount(): Promise<$_model.GetRiskCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRiskCountWithOptions(runtime);
  }

  /**
   * Queries the processing result and status of a submitted certificate application.
   * 
   * @param request - GetTaskAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskAttributeResponse
   */
  async getTaskAttributeWithOptions(request: $_model.GetTaskAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskAttribute",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskAttributeResponse({}));
  }

  /**
   * Queries the processing result and status of a submitted certificate application.
   * 
   * @param request - GetTaskAttributeRequest
   * @returns GetTaskAttributeResponse
   */
  async getTaskAttribute(request: $_model.GetTaskAttributeRequest): Promise<$_model.GetTaskAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskAttributeWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a certificate, including basic information and public/private key content. You can use this operation to download the certificate content and private key.
   * 
   * @remarks
   * The China single-user queries per second (QPS) limit for this operation is 100. If this limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately.
   * 
   * @param request - GetUserCertificateDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserCertificateDetailResponse
   */
  async getUserCertificateDetailWithOptions(request: $_model.GetUserCertificateDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserCertificateDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certFilter)) {
      query["CertFilter"] = request.certFilter;
    }

    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserCertificateDetail",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserCertificateDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetUserCertificateDetailResponse({}));
  }

  /**
   * Retrieves the details of a certificate, including basic information and public/private key content. You can use this operation to download the certificate content and private key.
   * 
   * @remarks
   * The China single-user queries per second (QPS) limit for this operation is 100. If this limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately.
   * 
   * @param request - GetUserCertificateDetailRequest
   * @returns GetUserCertificateDetailResponse
   */
  async getUserCertificateDetail(request: $_model.GetUserCertificateDetailRequest): Promise<$_model.GetUserCertificateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserCertificateDetailWithOptions(request, runtime);
  }

  /**
   * Queries the resource statistics list of cloud services.
   * 
   * @remarks
   * Queries the number of CA certificates (including root CA certificates and subordinate CA certificates) that you have created.
   * ## QPS limit
   * The China single-user QPS limit for this operation is 10 calls per second. If this limit is exceeded, the API calls are throttled, which may affect your business. Call this operation as needed.
   * 
   * @param request - ListAssetCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAssetCountResponse
   */
  async listAssetCountWithOptions(request: $_model.ListAssetCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAssetCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAssetCount",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAssetCountResponse>(await this.callApi(params, req, runtime), new $_model.ListAssetCountResponse({}));
  }

  /**
   * Queries the resource statistics list of cloud services.
   * 
   * @remarks
   * Queries the number of CA certificates (including root CA certificates and subordinate CA certificates) that you have created.
   * ## QPS limit
   * The China single-user QPS limit for this operation is 10 calls per second. If this limit is exceeded, the API calls are throttled, which may affect your business. Call this operation as needed.
   * 
   * @param request - ListAssetCountRequest
   * @returns ListAssetCountResponse
   */
  async listAssetCount(request: $_model.ListAssetCountRequest): Promise<$_model.ListAssetCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAssetCountWithOptions(request, runtime);
  }

  /**
   * This API queries certificates in the certificate store.
   * 
   * @remarks
   * The single-user QPS limit for this API is 10. Calls exceeding this limit are throttled, which may impact your business. Plan your API calls accordingly.
   * 
   * @param request - ListCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCertResponse
   */
  async listCertWithOptions(request: $_model.ListCertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certType)) {
      query["CertType"] = request.certType;
    }

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

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.warehouseId)) {
      query["WarehouseId"] = request.warehouseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCert",
      version: "2020-04-07",
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
   * This API queries certificates in the certificate store.
   * 
   * @remarks
   * The single-user QPS limit for this API is 10. Calls exceeding this limit are throttled, which may impact your business. Plan your API calls accordingly.
   * 
   * @param request - ListCertRequest
   * @returns ListCertResponse
   */
  async listCert(request: $_model.ListCertRequest): Promise<$_model.ListCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCertWithOptions(request, runtime);
  }

  /**
   * Queries the certificate application repositories in your account.
   * 
   * @remarks
   * You can call the ListCertWarehouse operation to query certificate repositories.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListCertWarehouseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCertWarehouseResponse
   */
  async listCertWarehouseWithOptions(request: $_model.ListCertWarehouseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCertWarehouseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCertWarehouse",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCertWarehouseResponse>(await this.callApi(params, req, runtime), new $_model.ListCertWarehouseResponse({}));
  }

  /**
   * Queries the certificate application repositories in your account.
   * 
   * @remarks
   * You can call the ListCertWarehouse operation to query certificate repositories.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListCertWarehouseRequest
   * @returns ListCertWarehouseResponse
   */
  async listCertWarehouse(request: $_model.ListCertWarehouseRequest): Promise<$_model.ListCertWarehouseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCertWarehouseWithOptions(request, runtime);
  }

  /**
   * Queries the certificates managed by Certificate Management Service.
   * 
   * @param request - ListCertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCertificatesResponse
   */
  async listCertificatesWithOptions(request: $_model.ListCertificatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCertificatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificateSource)) {
      query["CertificateSource"] = request.certificateSource;
    }

    if (!$dara.isNull(request.certificateStatus)) {
      query["CertificateStatus"] = request.certificateStatus;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
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
      action: "ListCertificates",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCertificatesResponse>(await this.callApi(params, req, runtime), new $_model.ListCertificatesResponse({}));
  }

  /**
   * Queries the certificates managed by Certificate Management Service.
   * 
   * @param request - ListCertificatesRequest
   * @returns ListCertificatesResponse
   */
  async listCertificates(request: $_model.ListCertificatesRequest): Promise<$_model.ListCertificatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCertificatesWithOptions(request, runtime);
  }

  /**
   * Queries the AccessKey pairs that are configured for multi-cloud certificate deployment.
   * 
   * @param request - ListCloudAccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudAccessResponse
   */
  async listCloudAccessWithOptions(request: $_model.ListCloudAccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloudAccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cloudName)) {
      query["CloudName"] = request.cloudName;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudAccess",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloudAccessResponse>(await this.callApi(params, req, runtime), new $_model.ListCloudAccessResponse({}));
  }

  /**
   * Queries the AccessKey pairs that are configured for multi-cloud certificate deployment.
   * 
   * @param request - ListCloudAccessRequest
   * @returns ListCloudAccessResponse
   */
  async listCloudAccess(request: $_model.ListCloudAccessRequest): Promise<$_model.ListCloudAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudAccessWithOptions(request, runtime);
  }

  /**
   * Queries the cloud resources on which certificates are deployed, such as Server Load Balancer (SLB) instances and CDN domains.
   * 
   * @param tmpReq - ListCloudResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudResourcesResponse
   */
  async listCloudResourcesWithOptions(tmpReq: $_model.ListCloudResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloudResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.ListCloudResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.certIds)) {
      request.certIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.certIds, "CertIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.certIdsShrink)) {
      query["CertIds"] = request.certIdsShrink;
    }

    if (!$dara.isNull(request.cloudName)) {
      query["CloudName"] = request.cloudName;
    }

    if (!$dara.isNull(request.cloudProduct)) {
      query["CloudProduct"] = request.cloudProduct;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudResources",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloudResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListCloudResourcesResponse({}));
  }

  /**
   * Queries the cloud resources on which certificates are deployed, such as Server Load Balancer (SLB) instances and CDN domains.
   * 
   * @param request - ListCloudResourcesRequest
   * @returns ListCloudResourcesResponse
   */
  async listCloudResources(request: $_model.ListCloudResourcesRequest): Promise<$_model.ListCloudResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudResourcesWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of companies.
   * 
   * @param request - ListCompaniesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCompaniesResponse
   */
  async listCompaniesWithOptions(request: $_model.ListCompaniesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCompaniesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.companyId)) {
      query["CompanyId"] = request.companyId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCompanies",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCompaniesResponse>(await this.callApi(params, req, runtime), new $_model.ListCompaniesResponse({}));
  }

  /**
   * Retrieves a list of companies.
   * 
   * @param request - ListCompaniesRequest
   * @returns ListCompaniesResponse
   */
  async listCompanies(request: $_model.ListCompaniesRequest): Promise<$_model.ListCompaniesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCompaniesWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of contacts.
   * 
   * @param request - ListContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContactResponse
   */
  async listContactWithOptions(request: $_model.ListContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListContact",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContactResponse>(await this.callApi(params, req, runtime), new $_model.ListContactResponse({}));
  }

  /**
   * Retrieves a list of contacts.
   * 
   * @param request - ListContactRequest
   * @returns ListContactResponse
   */
  async listContact(request: $_model.ListContactRequest): Promise<$_model.ListContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContactWithOptions(request, runtime);
  }

  /**
   * Queries the certificate signing requests (CSRs) in your account.
   * 
   * @param request - ListCsrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCsrResponse
   */
  async listCsrWithOptions(request: $_model.ListCsrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCsrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
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
      action: "ListCsr",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCsrResponse>(await this.callApi(params, req, runtime), new $_model.ListCsrResponse({}));
  }

  /**
   * Queries the certificate signing requests (CSRs) in your account.
   * 
   * @param request - ListCsrRequest
   * @returns ListCsrResponse
   */
  async listCsr(request: $_model.ListCsrRequest): Promise<$_model.ListCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCsrWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of deployment tasks after you create a deployment task.
   * 
   * @param request - ListDeploymentJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentJobResponse
   */
  async listDeploymentJobWithOptions(request: $_model.ListDeploymentJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeploymentJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeploymentJob",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeploymentJobResponse>(await this.callApi(params, req, runtime), new $_model.ListDeploymentJobResponse({}));
  }

  /**
   * Retrieves a list of deployment tasks after you create a deployment task.
   * 
   * @param request - ListDeploymentJobRequest
   * @returns ListDeploymentJobResponse
   */
  async listDeploymentJob(request: $_model.ListDeploymentJobRequest): Promise<$_model.ListDeploymentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeploymentJobWithOptions(request, runtime);
  }

  /**
   * Queries the certificates associated with a deployment task, such as the certificate instance ID, type, and name.
   * 
   * @param request - ListDeploymentJobCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentJobCertResponse
   */
  async listDeploymentJobCertWithOptions(request: $_model.ListDeploymentJobCertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeploymentJobCertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeploymentJobCert",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeploymentJobCertResponse>(await this.callApi(params, req, runtime), new $_model.ListDeploymentJobCertResponse({}));
  }

  /**
   * Queries the certificates associated with a deployment task, such as the certificate instance ID, type, and name.
   * 
   * @param request - ListDeploymentJobCertRequest
   * @returns ListDeploymentJobCertResponse
   */
  async listDeploymentJobCert(request: $_model.ListDeploymentJobCertRequest): Promise<$_model.ListDeploymentJobCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeploymentJobCertWithOptions(request, runtime);
  }

  /**
   * Queries the cloud resources associated with a deployment task. An empty list indicates that the resources are invalid and must be re-associated.
   * 
   * @param request - ListDeploymentJobResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentJobResourceResponse
   */
  async listDeploymentJobResourceWithOptions(request: $_model.ListDeploymentJobResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeploymentJobResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeploymentJobResource",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeploymentJobResourceResponse>(await this.callApi(params, req, runtime), new $_model.ListDeploymentJobResourceResponse({}));
  }

  /**
   * Queries the cloud resources associated with a deployment task. An empty list indicates that the resources are invalid and must be re-associated.
   * 
   * @param request - ListDeploymentJobResourceRequest
   * @returns ListDeploymentJobResourceResponse
   */
  async listDeploymentJobResource(request: $_model.ListDeploymentJobResourceRequest): Promise<$_model.ListDeploymentJobResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeploymentJobResourceWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of instances.
   * 
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brand)) {
      query["Brand"] = request.brand;
    }

    if (!$dara.isNull(request.certificateStatus)) {
      query["CertificateStatus"] = request.certificateStatus;
    }

    if (!$dara.isNull(request.certificateType)) {
      query["CertificateType"] = request.certificateType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * Retrieves a list of instances.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the list of user certificates or orders.
   * 
   * @remarks
   * This operation is used to query the list of user certificates or orders. If OrderType is set to CERT or UPLOAD, the certificate list is queried. If OrderType is set to CPACK or BUY, the order list is queried.
   * ## QPS limit
   * The single-user QPS limit for this operation is 10 calls per second. If this limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately.
   * 
   * @param request - ListUserCertificateOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserCertificateOrderResponse
   */
  async listUserCertificateOrderWithOptions(request: $_model.ListUserCertificateOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserCertificateOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserCertificateOrder",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserCertificateOrderResponse>(await this.callApi(params, req, runtime), new $_model.ListUserCertificateOrderResponse({}));
  }

  /**
   * Queries the list of user certificates or orders.
   * 
   * @remarks
   * This operation is used to query the list of user certificates or orders. If OrderType is set to CERT or UPLOAD, the certificate list is queried. If OrderType is set to CPACK or BUY, the order list is queried.
   * ## QPS limit
   * The single-user QPS limit for this operation is 10 calls per second. If this limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately.
   * 
   * @param request - ListUserCertificateOrderRequest
   * @returns ListUserCertificateOrderResponse
   */
  async listUserCertificateOrder(request: $_model.ListUserCertificateOrderRequest): Promise<$_model.ListUserCertificateOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserCertificateOrderWithOptions(request, runtime);
  }

  /**
   * Lists warehouses.
   * 
   * @remarks
   * This operation lists your warehouses.
   * ### QPS limit
   * This operation has a per-user QPS limit of 10 requests per second. Calls exceeding this limit are throttled, which can affect your business.
   * 
   * @param tmpReq - ListWarehouseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWarehouseResponse
   */
  async listWarehouseWithOptions(tmpReq: $_model.ListWarehouseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWarehouseResponse> {
    tmpReq.validate();
    let request = new $_model.ListWarehouseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.warehouseInstanceIds)) {
      request.warehouseInstanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.warehouseInstanceIds, "WarehouseInstanceIds", "json");
    }

    if (!$dara.isNull(tmpReq.warehouseTypes)) {
      request.warehouseTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.warehouseTypes, "WarehouseTypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.warehouseInstanceIdsShrink)) {
      query["WarehouseInstanceIds"] = request.warehouseInstanceIdsShrink;
    }

    if (!$dara.isNull(request.warehouseTypesShrink)) {
      query["WarehouseTypes"] = request.warehouseTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWarehouse",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWarehouseResponse>(await this.callApi(params, req, runtime), new $_model.ListWarehouseResponse({}));
  }

  /**
   * Lists warehouses.
   * 
   * @remarks
   * This operation lists your warehouses.
   * ### QPS limit
   * This operation has a per-user QPS limit of 10 requests per second. Calls exceeding this limit are throttled, which can affect your business.
   * 
   * @param request - ListWarehouseRequest
   * @returns ListWarehouseResponse
   */
  async listWarehouse(request: $_model.ListWarehouseRequest): Promise<$_model.ListWarehouseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWarehouseWithOptions(request, runtime);
  }

  /**
   * Queries the worker tasks of a deployment task. Each worker task deploys a certificate to a specific cloud resource in a cloud service.
   * 
   * @param request - ListWorkerResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkerResourceResponse
   */
  async listWorkerResourceWithOptions(request: $_model.ListWorkerResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkerResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cloudProduct)) {
      query["CloudProduct"] = request.cloudProduct;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkerResource",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkerResourceResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkerResourceResponse({}));
  }

  /**
   * Queries the worker tasks of a deployment task. Each worker task deploys a certificate to a specific cloud resource in a cloud service.
   * 
   * @param request - ListWorkerResourceRequest
   * @returns ListWorkerResourceResponse
   */
  async listWorkerResource(request: $_model.ListWorkerResourceRequest): Promise<$_model.ListWorkerResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkerResourceWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which a certificate or certificate order belongs.
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
      version: "2020-04-07",
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
   * Changes the resource group to which a certificate or certificate order belongs.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Refunds an instance within 7 days.
   * 
   * @param request - RefundInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefundInstanceResponse
   */
  async refundInstanceWithOptions(request: $_model.RefundInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefundInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefundInstance",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefundInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RefundInstanceResponse({}));
  }

  /**
   * Refunds an instance within 7 days.
   * 
   * @param request - RefundInstanceRequest
   * @returns RefundInstanceResponse
   */
  async refundInstance(request: $_model.RefundInstanceRequest): Promise<$_model.RefundInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refundInstanceWithOptions(request, runtime);
  }

  /**
   * Submits a renewal application for an issued SSL certificate.
   * 
   * @remarks
   * You can call the RenewCertificateOrderForPackageRequest operation to submit a renewal application for a certificate only when the order of the certificate is in the expiring state. After the renewal is complete, a new certificate order whose status is pending application is generated. You must submit a certificate application for the new certificate order and install the new certificate after the new certificate is issued.
   * > You can call the [DescribeCertificateState](https://help.aliyun.com/document_detail/164111.html) operation to query the status of a certificate application order. If the value of the **Type** response parameter is **certificate**, the certificate is issued.
   * 
   * @param request - RenewCertificateOrderForPackageRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewCertificateOrderForPackageRequestResponse
   */
  async renewCertificateOrderForPackageRequestWithOptions(request: $_model.RenewCertificateOrderForPackageRequestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewCertificateOrderForPackageRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewCertificateOrderForPackageRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewCertificateOrderForPackageRequestResponse>(await this.callApi(params, req, runtime), new $_model.RenewCertificateOrderForPackageRequestResponse({}));
  }

  /**
   * Submits a renewal application for an issued SSL certificate.
   * 
   * @remarks
   * You can call the RenewCertificateOrderForPackageRequest operation to submit a renewal application for a certificate only when the order of the certificate is in the expiring state. After the renewal is complete, a new certificate order whose status is pending application is generated. You must submit a certificate application for the new certificate order and install the new certificate after the new certificate is issued.
   * > You can call the [DescribeCertificateState](https://help.aliyun.com/document_detail/164111.html) operation to query the status of a certificate application order. If the value of the **Type** response parameter is **certificate**, the certificate is issued.
   * 
   * @param request - RenewCertificateOrderForPackageRequestRequest
   * @returns RenewCertificateOrderForPackageRequestResponse
   */
  async renewCertificateOrderForPackageRequest(request: $_model.RenewCertificateOrderForPackageRequestRequest): Promise<$_model.RenewCertificateOrderForPackageRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewCertificateOrderForPackageRequestWithOptions(request, runtime);
  }

  /**
   * Revokes a certificate.
   * 
   * @param request - RevokeCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeCertificateResponse
   */
  async revokeCertificateWithOptions(request: $_model.RevokeCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeCertificate",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeCertificateResponse>(await this.callApi(params, req, runtime), new $_model.RevokeCertificateResponse({}));
  }

  /**
   * Revokes a certificate.
   * 
   * @param request - RevokeCertificateRequest
   * @returns RevokeCertificateResponse
   */
  async revokeCertificate(request: $_model.RevokeCertificateRequest): Promise<$_model.RevokeCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeCertificateWithOptions(request, runtime);
  }

  /**
   * Revokes a client certificate from the certificate repository.
   * 
   * @remarks
   * The rate limit for this API is 10 queries per second (QPS) per user. If you exceed this limit, subsequent API calls will be throttled, which can disrupt your services. We recommend that you call this API at a reasonable rate.
   * 
   * @param request - RevokeWHClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeWHClientCertificateResponse
   */
  async revokeWHClientCertificateWithOptions(request: $_model.RevokeWHClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeWHClientCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeWHClientCertificate",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeWHClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.RevokeWHClientCertificateResponse({}));
  }

  /**
   * Revokes a client certificate from the certificate repository.
   * 
   * @remarks
   * The rate limit for this API is 10 queries per second (QPS) per user. If you exceed this limit, subsequent API calls will be throttled, which can disrupt your services. We recommend that you call this API at a reasonable rate.
   * 
   * @param request - RevokeWHClientCertificateRequest
   * @returns RevokeWHClientCertificateResponse
   */
  async revokeWHClientCertificate(request: $_model.RevokeWHClientCertificateRequest): Promise<$_model.RevokeWHClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeWHClientCertificateWithOptions(request, runtime);
  }

  /**
   * This operation creates a digital signature with a PCA certificate from a certificate repository.
   * 
   * @remarks
   * This operation creates a digital signature with a PCA certificate from a certificate repository.
   * ### QPS limit
   * This operation supports up to 1,000 queries per second (QPS) for a single user. If you exceed this limit, the system throttles your API calls, which can impact your business. Plan your API calls accordingly.
   * 
   * @param request - SignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SignResponse
   */
  async signWithOptions(request: $_model.SignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.customIdentifier)) {
      query["CustomIdentifier"] = request.customIdentifier;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!$dara.isNull(request.signingAlgorithm)) {
      query["SigningAlgorithm"] = request.signingAlgorithm;
    }

    if (!$dara.isNull(request.warehouseId)) {
      query["WarehouseId"] = request.warehouseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Sign",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SignResponse>(await this.callApi(params, req, runtime), new $_model.SignResponse({}));
  }

  /**
   * This operation creates a digital signature with a PCA certificate from a certificate repository.
   * 
   * @remarks
   * This operation creates a digital signature with a PCA certificate from a certificate repository.
   * ### QPS limit
   * This operation supports up to 1,000 queries per second (QPS) for a single user. If you exceed this limit, the system throttles your API calls, which can impact your business. Plan your API calls accordingly.
   * 
   * @param request - SignRequest
   * @returns SignResponse
   */
  async sign(request: $_model.SignRequest): Promise<$_model.SignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.signWithOptions(request, runtime);
  }

  /**
   * Updates company information.
   * 
   * @param request - UpdateCompanyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCompanyResponse
   */
  async updateCompanyWithOptions(request: $_model.UpdateCompanyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCompanyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.companyAddress)) {
      query["CompanyAddress"] = request.companyAddress;
    }

    if (!$dara.isNull(request.companyCode)) {
      query["CompanyCode"] = request.companyCode;
    }

    if (!$dara.isNull(request.companyEmail)) {
      query["CompanyEmail"] = request.companyEmail;
    }

    if (!$dara.isNull(request.companyId)) {
      query["CompanyId"] = request.companyId;
    }

    if (!$dara.isNull(request.companyName)) {
      query["CompanyName"] = request.companyName;
    }

    if (!$dara.isNull(request.companyPhone)) {
      query["CompanyPhone"] = request.companyPhone;
    }

    if (!$dara.isNull(request.companyType)) {
      query["CompanyType"] = request.companyType;
    }

    if (!$dara.isNull(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!$dara.isNull(request.department)) {
      query["Department"] = request.department;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.postCode)) {
      query["PostCode"] = request.postCode;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCompany",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCompanyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCompanyResponse({}));
  }

  /**
   * Updates company information.
   * 
   * @param request - UpdateCompanyRequest
   * @returns UpdateCompanyResponse
   */
  async updateCompany(request: $_model.UpdateCompanyRequest): Promise<$_model.UpdateCompanyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCompanyWithOptions(request, runtime);
  }

  /**
   * Updates a contact.
   * 
   * @param request - UpdateContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContactResponse
   */
  async updateContactWithOptions(request: $_model.UpdateContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.idcard)) {
      query["Idcard"] = request.idcard;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.webhooks)) {
      query["Webhooks"] = request.webhooks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateContact",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContactResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContactResponse({}));
  }

  /**
   * Updates a contact.
   * 
   * @param request - UpdateContactRequest
   * @returns UpdateContactResponse
   */
  async updateContact(request: $_model.UpdateContactRequest): Promise<$_model.UpdateContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateContactWithOptions(request, runtime);
  }

  /**
   * Uploads the private key corresponding to a CSR if the private key was not provided when the local CSR was uploaded.
   * 
   * @param request - UpdateCsrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCsrResponse
   */
  async updateCsrWithOptions(request: $_model.UpdateCsrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCsrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.csrId)) {
      query["CsrId"] = request.csrId;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCsr",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCsrResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCsrResponse({}));
  }

  /**
   * Uploads the private key corresponding to a CSR if the private key was not provided when the local CSR was uploaded.
   * 
   * @param request - UpdateCsrRequest
   * @returns UpdateCsrResponse
   */
  async updateCsr(request: $_model.UpdateCsrRequest): Promise<$_model.UpdateCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCsrWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of a certificate deployment task, such as the certificates or target resources.
   * 
   * @param request - UpdateDeploymentJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeploymentJobResponse
   */
  async updateDeploymentJobWithOptions(request: $_model.UpdateDeploymentJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDeploymentJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certIds)) {
      query["CertIds"] = request.certIds;
    }

    if (!$dara.isNull(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.scheduleTime)) {
      query["ScheduleTime"] = request.scheduleTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDeploymentJob",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDeploymentJobResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDeploymentJobResponse({}));
  }

  /**
   * Updates the configuration of a certificate deployment task, such as the certificates or target resources.
   * 
   * @param request - UpdateDeploymentJobRequest
   * @returns UpdateDeploymentJobResponse
   */
  async updateDeploymentJob(request: $_model.UpdateDeploymentJobRequest): Promise<$_model.UpdateDeploymentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDeploymentJobWithOptions(request, runtime);
  }

  /**
   * Updates the status of a certificate deployment task, such as changing from editing to pending execution.
   * 
   * @param request - UpdateDeploymentJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeploymentJobStatusResponse
   */
  async updateDeploymentJobStatusWithOptions(request: $_model.UpdateDeploymentJobStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDeploymentJobStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDeploymentJobStatus",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDeploymentJobStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDeploymentJobStatusResponse({}));
  }

  /**
   * Updates the status of a certificate deployment task, such as changing from editing to pending execution.
   * 
   * @param request - UpdateDeploymentJobStatusRequest
   * @returns UpdateDeploymentJobStatusResponse
   */
  async updateDeploymentJobStatus(request: $_model.UpdateDeploymentJobStatusRequest): Promise<$_model.UpdateDeploymentJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDeploymentJobStatusWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of a Certificate Management Service instance.
   * 
   * @param request - UpdateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(request: $_model.UpdateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoReissue)) {
      query["AutoReissue"] = request.autoReissue;
    }

    if (!$dara.isNull(request.certificateName)) {
      query["CertificateName"] = request.certificateName;
    }

    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.companyId)) {
      query["CompanyId"] = request.companyId;
    }

    if (!$dara.isNull(request.contactIdList)) {
      query["ContactIdList"] = request.contactIdList;
    }

    if (!$dara.isNull(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!$dara.isNull(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.generateCsrMethod)) {
      query["GenerateCsrMethod"] = request.generateCsrMethod;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyAlgorithm)) {
      query["KeyAlgorithm"] = request.keyAlgorithm;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.validationMethod)) {
      query["ValidationMethod"] = request.validationMethod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceResponse({}));
  }

  /**
   * Updates the configuration of a Certificate Management Service instance.
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceWithOptions(request, runtime);
  }

  /**
   * Rolls back or re-executes a worker task in a certificate deployment task.
   * 
   * @param request - UpdateWorkerResourceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkerResourceStatusResponse
   */
  async updateWorkerResourceStatusWithOptions(request: $_model.UpdateWorkerResourceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkerResourceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.workerId)) {
      query["WorkerId"] = request.workerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkerResourceStatus",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkerResourceStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkerResourceStatusResponse({}));
  }

  /**
   * Rolls back or re-executes a worker task in a certificate deployment task.
   * 
   * @param request - UpdateWorkerResourceStatusRequest
   * @returns UpdateWorkerResourceStatusResponse
   */
  async updateWorkerResourceStatus(request: $_model.UpdateWorkerResourceStatusRequest): Promise<$_model.UpdateWorkerResourceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkerResourceStatusWithOptions(request, runtime);
  }

  /**
   * Uploads an existing certificate signing request (CSR) to Certificate Management Service. After the upload, you can use the CSR to apply for certificates.
   * 
   * @param request - UploadCsrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadCsrResponse
   */
  async uploadCsrWithOptions(request: $_model.UploadCsrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadCsrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadCsr",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadCsrResponse>(await this.callApi(params, req, runtime), new $_model.UploadCsrResponse({}));
  }

  /**
   * Uploads an existing certificate signing request (CSR) to Certificate Management Service. After the upload, you can use the CSR to apply for certificates.
   * 
   * @param request - UploadCsrRequest
   * @returns UploadCsrResponse
   */
  async uploadCsr(request: $_model.UploadCsrRequest): Promise<$_model.UploadCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadCsrWithOptions(request, runtime);
  }

  /**
   * Uploads a PCA certificate to a certificate warehouse.
   * 
   * @remarks
   * Use this operation to upload a PCA certificate to a certificate warehouse.
   * ## QPS limit
   * The QPS limit for this operation is 10 requests per second per user. Exceeding this limit triggers throttling, which can affect your business.
   * 
   * @param request - UploadPCACertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadPCACertResponse
   */
  async uploadPCACertWithOptions(request: $_model.UploadPCACertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadPCACertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cert)) {
      query["Cert"] = request.cert;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!$dara.isNull(request.warehouseId)) {
      query["WarehouseId"] = request.warehouseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadPCACert",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadPCACertResponse>(await this.callApi(params, req, runtime), new $_model.UploadPCACertResponse({}));
  }

  /**
   * Uploads a PCA certificate to a certificate warehouse.
   * 
   * @remarks
   * Use this operation to upload a PCA certificate to a certificate warehouse.
   * ## QPS limit
   * The QPS limit for this operation is 10 requests per second per user. Exceeding this limit triggers throttling, which can affect your business.
   * 
   * @param request - UploadPCACertRequest
   * @returns UploadPCACertResponse
   */
  async uploadPCACert(request: $_model.UploadPCACertRequest): Promise<$_model.UploadPCACertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadPCACertWithOptions(request, runtime);
  }

  /**
   * Uploads a certificate and its private key to Certificate Management Service. Both SM and non-SM certificates are supported.
   * 
   * @remarks
   * The queries per second (QPS) limit for this operation is 100 for each user. If you exceed this limit, API calls are throttled. This may affect your business. Plan your calls accordingly.
   * 
   * @param request - UploadUserCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadUserCertificateResponse
   */
  async uploadUserCertificateWithOptions(request: $_model.UploadUserCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadUserCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cert)) {
      query["Cert"] = request.cert;
    }

    if (!$dara.isNull(request.encryptCert)) {
      query["EncryptCert"] = request.encryptCert;
    }

    if (!$dara.isNull(request.encryptPrivateKey)) {
      query["EncryptPrivateKey"] = request.encryptPrivateKey;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.signCert)) {
      query["SignCert"] = request.signCert;
    }

    if (!$dara.isNull(request.signPrivateKey)) {
      query["SignPrivateKey"] = request.signPrivateKey;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadUserCertificate",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadUserCertificateResponse>(await this.callApi(params, req, runtime), new $_model.UploadUserCertificateResponse({}));
  }

  /**
   * Uploads a certificate and its private key to Certificate Management Service. Both SM and non-SM certificates are supported.
   * 
   * @remarks
   * The queries per second (QPS) limit for this operation is 100 for each user. If you exceed this limit, API calls are throttled. This may affect your business. Plan your calls accordingly.
   * 
   * @param request - UploadUserCertificateRequest
   * @returns UploadUserCertificateResponse
   */
  async uploadUserCertificate(request: $_model.UploadUserCertificateRequest): Promise<$_model.UploadUserCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadUserCertificateWithOptions(request, runtime);
  }

  /**
   * Verifies a data signature by using a private certificate in a certificate application repository.
   * 
   * @remarks
   * This API verifies the signatures of PCA certificates and SSL certificates in the certificate repository.
   * ### QPS limits
   * The queries per second (QPS) limit for this API is 1,000 for a single user. For your specific QPS limit, refer to the certificate repository. If you exceed this limit, API calls are throttled, which may affect your business. Plan your API calls accordingly.
   * 
   * @param request - VerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyResponse
   */
  async verifyWithOptions(request: $_model.VerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.customIdentifier)) {
      query["CustomIdentifier"] = request.customIdentifier;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!$dara.isNull(request.signatureValue)) {
      query["SignatureValue"] = request.signatureValue;
    }

    if (!$dara.isNull(request.signingAlgorithm)) {
      query["SigningAlgorithm"] = request.signingAlgorithm;
    }

    if (!$dara.isNull(request.warehouseId)) {
      query["WarehouseId"] = request.warehouseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Verify",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyResponse>(await this.callApi(params, req, runtime), new $_model.VerifyResponse({}));
  }

  /**
   * Verifies a data signature by using a private certificate in a certificate application repository.
   * 
   * @remarks
   * This API verifies the signatures of PCA certificates and SSL certificates in the certificate repository.
   * ### QPS limits
   * The queries per second (QPS) limit for this API is 1,000 for a single user. For your specific QPS limit, refer to the certificate repository. If you exceed this limit, API calls are throttled, which may affect your business. Plan your API calls accordingly.
   * 
   * @param request - VerifyRequest
   * @returns VerifyResponse
   */
  async verify(request: $_model.VerifyRequest): Promise<$_model.VerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyWithOptions(request, runtime);
  }

}
