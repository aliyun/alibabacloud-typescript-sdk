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
   * Revokes an issued certificate and cancels the application order of the certificate.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Revokes an issued certificate and cancels the application order of the certificate.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CancelCertificateForPackageRequestRequest
   * @returns CancelCertificateForPackageRequestResponse
   */
  async cancelCertificateForPackageRequest(request: $_model.CancelCertificateForPackageRequestRequest): Promise<$_model.CancelCertificateForPackageRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelCertificateForPackageRequestWithOptions(request, runtime);
  }

  /**
   * Cancels a certificate application order that is in the pending validation or being reviewed state.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Cancels a certificate application order that is in the pending validation or being reviewed state.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CancelOrderRequestRequest
   * @returns CancelOrderRequestResponse
   */
  async cancelOrderRequest(request: $_model.CancelOrderRequestRequest): Promise<$_model.CancelOrderRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelOrderRequestWithOptions(request, runtime);
  }

  /**
   * Submits a certificate application.
   * 
   * @remarks
   *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455800.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * *   After you call this operation to submit a certificate application and the certificate is issued, the certificate quota provided by the resource plan that you purchased is consumed. When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate that you want to apply for.
   * *   After you call this operation to submit a certificate application, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required for domain name ownership verification and manually complete the verification. Then, your certificate application is reviewed by the certificate authority (CA). If you use the Domain Name System (DNS) verification method, you must complete the verification on your DNS service provider system. If you use the file verification method, you must complete the verification on the DNS server.
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
   * Submits a certificate application.
   * 
   * @remarks
   *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455800.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * *   After you call this operation to submit a certificate application and the certificate is issued, the certificate quota provided by the resource plan that you purchased is consumed. When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate that you want to apply for.
   * *   After you call this operation to submit a certificate application, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required for domain name ownership verification and manually complete the verification. Then, your certificate application is reviewed by the certificate authority (CA). If you use the Domain Name System (DNS) verification method, you must complete the verification on your DNS service provider system. If you use the file verification method, you must complete the verification on the DNS server.
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
   *   You can call this operation to apply for only DV certificates. If you want to apply for an organization validated (OV) or extended validation (EV) certificate, we recommend that you call the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html) operation. This operation allows you to apply for certificates of all specifications and specify the method to generate a certificate signing request (CSR) file.
   * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455803.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * *   When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate.
   * *   After you call this operation to submit a certificate application, Certificate Management Service automatically creates a CSR file for your application and consumes the certificate quota in the certificate resource plans of the specified specifications that you purchased. After you call this operation, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required to complete domain name verification, and manually complete the verification. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on your DNS server. Then, the certificate authority (CA) will review your certificate application.
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
   *   You can call this operation to apply for only DV certificates. If you want to apply for an organization validated (OV) or extended validation (EV) certificate, we recommend that you call the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html) operation. This operation allows you to apply for certificates of all specifications and specify the method to generate a certificate signing request (CSR) file.
   * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455803.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * *   When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate.
   * *   After you call this operation to submit a certificate application, Certificate Management Service automatically creates a CSR file for your application and consumes the certificate quota in the certificate resource plans of the specified specifications that you purchased. After you call this operation, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required to complete domain name verification, and manually complete the verification. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on your DNS server. Then, the certificate authority (CA) will review your certificate application.
   * 
   * @param request - CreateCertificateRequestRequest
   * @returns CreateCertificateRequestResponse
   */
  async createCertificateRequest(request: $_model.CreateCertificateRequestRequest): Promise<$_model.CreateCertificateRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCertificateRequestWithOptions(request, runtime);
  }

  /**
   * Purchases, applies for, and issues a domain validated (DV) certificate by using a custom certificate signing request (CSR) file. You can use extended certificate services to purchase and apply for a DV certificate with a few clicks.
   * 
   * @remarks
   *   You can use this operation to apply for only a domain validated (DV) certificate. You cannot use this operation to apply for an organization validated (OV) certificate. We recommend that you use the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html) operation to apply for a certificate. You can use the CreateCertificateForPackageRequest operation to apply for certificates of all types and specify the CSR generation method.
   * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455803.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * *   When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate that you want to apply for.
   * *   After you call this operation to submit a certificate application, the certificate quota of the required specifications that you purchased is consumed. After you call this operation, you must call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required for domain name ownership verification and manually complete the verification. Then, your certificate application is reviewed by the certificate authority (CA). If you use the Domain Name System (DNS) verification method, you must complete the verification on your DNS service provider system. If you use the file verification method, you must complete the verification on the DNS server.
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
   * Purchases, applies for, and issues a domain validated (DV) certificate by using a custom certificate signing request (CSR) file. You can use extended certificate services to purchase and apply for a DV certificate with a few clicks.
   * 
   * @remarks
   *   You can use this operation to apply for only a domain validated (DV) certificate. You cannot use this operation to apply for an organization validated (OV) certificate. We recommend that you use the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html) operation to apply for a certificate. You can use the CreateCertificateForPackageRequest operation to apply for certificates of all types and specify the CSR generation method.
   * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455803.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * *   When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate that you want to apply for.
   * *   After you call this operation to submit a certificate application, the certificate quota of the required specifications that you purchased is consumed. After you call this operation, you must call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required for domain name ownership verification and manually complete the verification. Then, your certificate application is reviewed by the certificate authority (CA). If you use the Domain Name System (DNS) verification method, you must complete the verification on your DNS service provider system. If you use the file verification method, you must complete the verification on the DNS server.
   * 
   * @param request - CreateCertificateWithCsrRequestRequest
   * @returns CreateCertificateWithCsrRequestResponse
   */
  async createCertificateWithCsrRequest(request: $_model.CreateCertificateWithCsrRequestRequest): Promise<$_model.CreateCertificateWithCsrRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCertificateWithCsrRequestWithOptions(request, runtime);
  }

  /**
   * Creates a certificate signing request (CSR). A CSR file contains the information about an SSL certificate that you want to apply for. The information includes the domain names that you want to bind to the certificate and the name and the geographical location of the certificate holder. When you submit a certificate application to a certificate authority (CA), you must provide a CSR. After the CA approves your certificate application, the CA uses the private key of the root CA to sign your CSR and generates a public key file. The public key file is the SSL certificate that the CA issues to you. The private key of the SSL certificate is generated when you create the CSR.
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
   * Creates a certificate signing request (CSR). A CSR file contains the information about an SSL certificate that you want to apply for. The information includes the domain names that you want to bind to the certificate and the name and the geographical location of the certificate holder. When you submit a certificate application to a certificate authority (CA), you must provide a CSR. After the CA approves your certificate application, the CA uses the private key of the root CA to sign your CSR and generates a public key file. The public key file is the SSL certificate that the CA issues to you. The private key of the SSL certificate is generated when you create the CSR.
   * 
   * @param request - CreateCsrRequest
   * @returns CreateCsrResponse
   */
  async createCsr(request: $_model.CreateCsrRequest): Promise<$_model.CreateCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCsrWithOptions(request, runtime);
  }

  /**
   * Creates a certificate deployment task. After an SSL certificate is issued, you can create a certificate deployment task to immediately deploy the certificate to an Alibaba Cloud service or deploy the certificate to the service at a specific point in time. Then, the certificate can implement trusted identity authentication and ensure the security of data transmission for your website hosted on the service.
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
   * Creates a certificate deployment task. After an SSL certificate is issued, you can create a certificate deployment task to immediately deploy the certificate to an Alibaba Cloud service or deploy the certificate to the service at a specific point in time. Then, the certificate can implement trusted identity authentication and ensure the security of data transmission for your website hosted on the service.
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
   * Decrypts a certificate in a certificate repository.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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

    if (!$dara.isNull(request.messageType)) {
      query["MessageType"] = request.messageType;
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
   * Decrypts a certificate in a certificate repository.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DecryptRequest
   * @returns DecryptResponse
   */
  async decrypt(request: $_model.DecryptRequest): Promise<$_model.DecryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.decryptWithOptions(request, runtime);
  }

  /**
   * Deletes an order in which the application for a domain validated (DV) certificate failed.
   * 
   * @remarks
   * You can call this operation to delete a certificate application order only in the following scenarios:
   * *   The status of the order is **review failed**. You have called the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to query the status of the certificate application order and the value of the **Type** parameter is **verify_fail**.
   * *   The status of the order is **pending application**. You have called the [CancelOrderRequest](https://help.aliyun.com/document_detail/455299.html) operation to cancel a certificate application order whose status is pending review or being reviewed. The status of the certificate application order that is canceled in this case changes to **pending application**.
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
   * Deletes an order in which the application for a domain validated (DV) certificate failed.
   * 
   * @remarks
   * You can call this operation to delete a certificate application order only in the following scenarios:
   * *   The status of the order is **review failed**. You have called the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to query the status of the certificate application order and the value of the **Type** parameter is **verify_fail**.
   * *   The status of the order is **pending application**. You have called the [CancelOrderRequest](https://help.aliyun.com/document_detail/455299.html) operation to cancel a certificate application order whose status is pending review or being reviewed. The status of the certificate application order that is canceled in this case changes to **pending application**.
   * 
   * @param request - DeleteCertificateRequestRequest
   * @returns DeleteCertificateRequestResponse
   */
  async deleteCertificateRequest(request: $_model.DeleteCertificateRequestRequest): Promise<$_model.DeleteCertificateRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCertificateRequestWithOptions(request, runtime);
  }

  /**
   * Deletes a certificate signing request (CSR) file.
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
   * Deletes a certificate signing request (CSR) file.
   * 
   * @param request - DeleteCsrRequest
   * @returns DeleteCsrResponse
   */
  async deleteCsr(request: $_model.DeleteCsrRequest): Promise<$_model.DeleteCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCsrWithOptions(request, runtime);
  }

  /**
   * Deletes a deployment task.
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
   * Deletes a deployment task.
   * 
   * @param request - DeleteDeploymentJobRequest
   * @returns DeleteDeploymentJobResponse
   */
  async deleteDeploymentJob(request: $_model.DeleteDeploymentJobRequest): Promise<$_model.DeleteDeploymentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDeploymentJobWithOptions(request, runtime);
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
   * Deletes an expired or uploaded certificate.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Deletes an expired or uploaded certificate.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteUserCertificateRequest
   * @returns DeleteUserCertificateResponse
   */
  async deleteUserCertificate(request: $_model.DeleteUserCertificateRequest): Promise<$_model.DeleteUserCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserCertificateWithOptions(request, runtime);
  }

  /**
   * Deletes the worker of a deployment task.
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
   * Deletes the worker of a deployment task.
   * 
   * @param request - DeleteWorkerResourceRequest
   * @returns DeleteWorkerResourceResponse
   */
  async deleteWorkerResource(request: $_model.DeleteWorkerResourceRequest): Promise<$_model.DeleteWorkerResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWorkerResourceWithOptions(request, runtime);
  }

  /**
   * Queries the status of a specified certificate application order.
   * 
   * @remarks
   * If you do not complete the verification of the domain name ownership after you submit a certificate application, you can call this operation to obtain the information that is required to complete the verification. You can complete the verification of the domain name ownership based on the data returned. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on the DNS server.
   * The certificate authority (CA) reviews your certificate application only after you complete the verification of the domain name ownership. After the CA approves your certificate application, the CA issues the certificate. If a certificate is issued, you can call this operation to obtain the CA certificate and private key of the certificate.
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
   * Queries the status of a specified certificate application order.
   * 
   * @remarks
   * If you do not complete the verification of the domain name ownership after you submit a certificate application, you can call this operation to obtain the information that is required to complete the verification. You can complete the verification of the domain name ownership based on the data returned. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on the DNS server.
   * The certificate authority (CA) reviews your certificate application only after you complete the verification of the domain name ownership. After the CA approves your certificate application, the CA issues the certificate. If a certificate is issued, you can call this operation to obtain the CA certificate and private key of the certificate.
   * 
   * @param request - DescribeCertificateStateRequest
   * @returns DescribeCertificateStateResponse
   */
  async describeCertificateState(request: $_model.DescribeCertificateStateRequest): Promise<$_model.DescribeCertificateStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCertificateStateWithOptions(request, runtime);
  }

  /**
   * Queries the number of third-party cloud resources on which you deployed certificates by using a multi-cloud deployment task.
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
   * Queries the number of third-party cloud resources on which you deployed certificates by using a multi-cloud deployment task.
   * 
   * @param request - DescribeCloudResourceStatusRequest
   * @returns DescribeCloudResourceStatusResponse
   */
  async describeCloudResourceStatus(request: $_model.DescribeCloudResourceStatusRequest): Promise<$_model.DescribeCloudResourceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudResourceStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of a deployment task. You can call the CreateDeploymentJob operation to create a deployment task and obtain the ID of the task.
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
   * Queries the details of a deployment task. You can call the CreateDeploymentJob operation to create a deployment task and obtain the ID of the task.
   * 
   * @param request - DescribeDeploymentJobRequest
   * @returns DescribeDeploymentJobResponse
   */
  async describeDeploymentJob(request: $_model.DescribeDeploymentJobRequest): Promise<$_model.DescribeDeploymentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeploymentJobWithOptions(request, runtime);
  }

  /**
   * Queries the number of worker tasks in a deployment task.
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
   * Queries the number of worker tasks in a deployment task.
   * 
   * @param request - DescribeDeploymentJobStatusRequest
   * @returns DescribeDeploymentJobStatusResponse
   */
  async describeDeploymentJobStatus(request: $_model.DescribeDeploymentJobStatusRequest): Promise<$_model.DescribeDeploymentJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeploymentJobStatusWithOptions(request, runtime);
  }

  /**
   * Queries the quota for domain validated (DV) certificates that you purchase and the quota usage.
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
   * Queries the quota for domain validated (DV) certificates that you purchase and the quota usage.
   * 
   * @param request - DescribePackageStateRequest
   * @returns DescribePackageStateResponse
   */
  async describePackageState(request: $_model.DescribePackageStateRequest): Promise<$_model.DescribePackageStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePackageStateWithOptions(request, runtime);
  }

  /**
   * Encrypts a certificate in a certificate repository.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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

    if (!$dara.isNull(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!$dara.isNull(request.plaintext)) {
      query["Plaintext"] = request.plaintext;
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
   * Encrypts a certificate in a certificate repository.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - EncryptRequest
   * @returns EncryptResponse
   */
  async encrypt(request: $_model.EncryptRequest): Promise<$_model.EncryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.encryptWithOptions(request, runtime);
  }

  /**
   * Queries the quota for certificate repositories.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetCertWarehouseQuotaRequest
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
   * Queries the quota for certificate repositories.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * @returns GetCertWarehouseQuotaResponse
   */
  async getCertWarehouseQuota(): Promise<$_model.GetCertWarehouseQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCertWarehouseQuotaWithOptions(runtime);
  }

  /**
   * Obtains the content of a certificate signing request (CSR) file.
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
   * Obtains the content of a certificate signing request (CSR) file.
   * 
   * @param request - GetCsrDetailRequest
   * @returns GetCsrDetailResponse
   */
  async getCsrDetail(request: $_model.GetCsrDetailRequest): Promise<$_model.GetCsrDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCsrDetailWithOptions(request, runtime);
  }

  /**
   * Queries the details of a certificate.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Queries the details of a certificate.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetUserCertificateDetailRequest
   * @returns GetUserCertificateDetailResponse
   */
  async getUserCertificateDetail(request: $_model.GetUserCertificateDetailRequest): Promise<$_model.GetUserCertificateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserCertificateDetailWithOptions(request, runtime);
  }

  /**
   * Queries the certificates in a certificate repository.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Queries the certificates in a certificate repository.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListCertRequest
   * @returns ListCertResponse
   */
  async listCert(request: $_model.ListCertRequest): Promise<$_model.ListCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCertWithOptions(request, runtime);
  }

  /**
   * Queries certificate repositories.
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
   * Queries certificate repositories.
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
   * Queries a list of AccessKey pairs for multi-cloud deployment.
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
   * Queries a list of AccessKey pairs for multi-cloud deployment.
   * 
   * @param request - ListCloudAccessRequest
   * @returns ListCloudAccessResponse
   */
  async listCloudAccess(request: $_model.ListCloudAccessRequest): Promise<$_model.ListCloudAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudAccessWithOptions(request, runtime);
  }

  /**
   * Queries the certificate resources of a cloud service provider and cloud services.
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
   * Queries the certificate resources of a cloud service provider and cloud services.
   * 
   * @param request - ListCloudResourcesRequest
   * @returns ListCloudResourcesResponse
   */
  async listCloudResources(request: $_model.ListCloudResourcesRequest): Promise<$_model.ListCloudResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudResourcesWithOptions(request, runtime);
  }

  /**
   * Queries a list of contacts.
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
   * Queries a list of contacts.
   * 
   * @param request - ListContactRequest
   * @returns ListContactResponse
   */
  async listContact(request: $_model.ListContactRequest): Promise<$_model.ListContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContactWithOptions(request, runtime);
  }

  /**
   * Queries certificate signing requests (CSRs).
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
   * Queries certificate signing requests (CSRs).
   * 
   * @param request - ListCsrRequest
   * @returns ListCsrResponse
   */
  async listCsr(request: $_model.ListCsrRequest): Promise<$_model.ListCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCsrWithOptions(request, runtime);
  }

  /**
   * Queries a list of deployment tasks that are created.
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
   * Queries a list of deployment tasks that are created.
   * 
   * @param request - ListDeploymentJobRequest
   * @returns ListDeploymentJobResponse
   */
  async listDeploymentJob(request: $_model.ListDeploymentJobRequest): Promise<$_model.ListDeploymentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeploymentJobWithOptions(request, runtime);
  }

  /**
   * Queries the basic information about a deployment task. After you create a deployment task, you can call this operation to obtain the basic information about the deployment task, including the instance ID, type, and name of the certificate.
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
   * Queries the basic information about a deployment task. After you create a deployment task, you can call this operation to obtain the basic information about the deployment task, including the instance ID, type, and name of the certificate.
   * 
   * @param request - ListDeploymentJobCertRequest
   * @returns ListDeploymentJobCertResponse
   */
  async listDeploymentJobCert(request: $_model.ListDeploymentJobCertRequest): Promise<$_model.ListDeploymentJobCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeploymentJobCertWithOptions(request, runtime);
  }

  /**
   * Queries the cloud resources of cloud services in a deployment task.
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
   * Queries the cloud resources of cloud services in a deployment task.
   * 
   * @param request - ListDeploymentJobResourceRequest
   * @returns ListDeploymentJobResourceResponse
   */
  async listDeploymentJobResource(request: $_model.ListDeploymentJobResourceRequest): Promise<$_model.ListDeploymentJobResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeploymentJobResourceWithOptions(request, runtime);
  }

  /**
   * Queries the certificates or certificate orders of users.
   * 
   * @remarks
   * You can call the ListUserCertificateOrder operation to query the certificates or certificate orders of users. If you set OrderType to CERT or UPLOAD, certificates are returned. If you set OrderType to CPACK or BUY, certificate orders are returned.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Queries the certificates or certificate orders of users.
   * 
   * @remarks
   * You can call the ListUserCertificateOrder operation to query the certificates or certificate orders of users. If you set OrderType to CERT or UPLOAD, certificates are returned. If you set OrderType to CPACK or BUY, certificate orders are returned.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListUserCertificateOrderRequest
   * @returns ListUserCertificateOrderResponse
   */
  async listUserCertificateOrder(request: $_model.ListUserCertificateOrderRequest): Promise<$_model.ListUserCertificateOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserCertificateOrderWithOptions(request, runtime);
  }

  /**
   * Queries the details about the worker tasks of a deployment task. Alibaba Cloud allows you to deploy multiple certificates at a time. Therefore, a deployment task may include multiple worker tasks in multiple cloud services. A worker task refers to a task that deploys a certificate to a cloud resource in a cloud service.
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
   * Queries the details about the worker tasks of a deployment task. Alibaba Cloud allows you to deploy multiple certificates at a time. Therefore, a deployment task may include multiple worker tasks in multiple cloud services. A worker task refers to a task that deploys a certificate to a cloud resource in a cloud service.
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
   * Submits a renewal application for an issued certificate.
   * 
   * @remarks
   * You can call the RenewCertificateOrderForPackageRequest operation to submit a renewal application for a certificate only when the order of the certificate is in the expiring state. After the renewal is complete, a new certificate order whose status is pending application is generated. You must submit a certificate application for the new certificate order and install the new certificate after the new certificate is issued.
   * >  You can call the [DescribeCertificateState](https://help.aliyun.com/document_detail/164111.html) operation to query the status of a certificate application order. If the value of the **Type** response parameter is **certificate**, the certificate is issued.
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
   * Submits a renewal application for an issued certificate.
   * 
   * @remarks
   * You can call the RenewCertificateOrderForPackageRequest operation to submit a renewal application for a certificate only when the order of the certificate is in the expiring state. After the renewal is complete, a new certificate order whose status is pending application is generated. You must submit a certificate application for the new certificate order and install the new certificate after the new certificate is issued.
   * >  You can call the [DescribeCertificateState](https://help.aliyun.com/document_detail/164111.html) operation to query the status of a certificate application order. If the value of the **Type** response parameter is **certificate**, the certificate is issued.
   * 
   * @param request - RenewCertificateOrderForPackageRequestRequest
   * @returns RenewCertificateOrderForPackageRequestResponse
   */
  async renewCertificateOrderForPackageRequest(request: $_model.RenewCertificateOrderForPackageRequestRequest): Promise<$_model.RenewCertificateOrderForPackageRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewCertificateOrderForPackageRequestWithOptions(request, runtime);
  }

  /**
   * Signs a private certificate in a certificate application repository.
   * 
   * @remarks
   * You can call the Sign operation to sign a private certificate in a certificate application repository.
   * ### Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!$dara.isNull(request.signingAlgorithm)) {
      query["SigningAlgorithm"] = request.signingAlgorithm;
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
   * Signs a private certificate in a certificate application repository.
   * 
   * @remarks
   * You can call the Sign operation to sign a private certificate in a certificate application repository.
   * ### Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SignRequest
   * @returns SignResponse
   */
  async sign(request: $_model.SignRequest): Promise<$_model.SignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.signWithOptions(request, runtime);
  }

  /**
   * Updates the private key of a certificate signing request (CSR).
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
   * Updates the private key of a certificate signing request (CSR).
   * 
   * @param request - UpdateCsrRequest
   * @returns UpdateCsrResponse
   */
  async updateCsr(request: $_model.UpdateCsrRequest): Promise<$_model.UpdateCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCsrWithOptions(request, runtime);
  }

  /**
   * Updates a deployment task.
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
   * Updates a deployment task.
   * 
   * @param request - UpdateDeploymentJobRequest
   * @returns UpdateDeploymentJobResponse
   */
  async updateDeploymentJob(request: $_model.UpdateDeploymentJobRequest): Promise<$_model.UpdateDeploymentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDeploymentJobWithOptions(request, runtime);
  }

  /**
   * Updates the status of a deployment task.
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
   * Updates the status of a deployment task.
   * 
   * @param request - UpdateDeploymentJobStatusRequest
   * @returns UpdateDeploymentJobStatusResponse
   */
  async updateDeploymentJobStatus(request: $_model.UpdateDeploymentJobStatusRequest): Promise<$_model.UpdateDeploymentJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDeploymentJobStatusWithOptions(request, runtime);
  }

  /**
   * Rolls back or executes a worker task in a deployment task.
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
   * Rolls back or executes a worker task in a deployment task.
   * 
   * @param request - UpdateWorkerResourceStatusRequest
   * @returns UpdateWorkerResourceStatusResponse
   */
  async updateWorkerResourceStatus(request: $_model.UpdateWorkerResourceStatusRequest): Promise<$_model.UpdateWorkerResourceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkerResourceStatusWithOptions(request, runtime);
  }

  /**
   * Uploads a certificate signing request (CSR) file
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
   * Uploads a certificate signing request (CSR) file
   * 
   * @param request - UploadCsrRequest
   * @returns UploadCsrResponse
   */
  async uploadCsr(request: $_model.UploadCsrRequest): Promise<$_model.UploadCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadCsrWithOptions(request, runtime);
  }

  /**
   * Uploads a certificate.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Uploads a certificate.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UploadUserCertificateRequest
   * @returns UploadUserCertificateResponse
   */
  async uploadUserCertificate(request: $_model.UploadUserCertificateRequest): Promise<$_model.UploadUserCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadUserCertificateWithOptions(request, runtime);
  }

  /**
   * Verifies the signature of a private certificate in a certificate application repository.
   * 
   * @remarks
   * You can call the Verify operation to verify the signature of a private certificate in a certificate application repository.
   * ### Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Verifies the signature of a private certificate in a certificate application repository.
   * 
   * @remarks
   * You can call the Verify operation to verify the signature of a private certificate in a certificate application repository.
   * ### Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - VerifyRequest
   * @returns VerifyResponse
   */
  async verify(request: $_model.VerifyRequest): Promise<$_model.VerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyWithOptions(request, runtime);
  }

}
