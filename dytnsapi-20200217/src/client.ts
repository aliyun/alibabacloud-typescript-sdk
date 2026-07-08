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
      'us-west-1': "dytnsapi.aliyuncs.com",
      'us-east-1': "dytnsapi.aliyuncs.com",
      'me-east-1': "dytnsapi.aliyuncs.com",
      'eu-west-1': "dytnsapi.aliyuncs.com",
      'eu-central-1': "dytnsapi.aliyuncs.com",
      'cn-zhangjiakou': "dytnsapi.aliyuncs.com",
      'cn-wulanchabu': "dytnsapi.aliyuncs.com",
      'cn-shenzhen-finance-1': "dytnsapi.aliyuncs.com",
      'cn-shenzhen': "dytnsapi.aliyuncs.com",
      'cn-shanghai-finance-1': "dytnsapi.aliyuncs.com",
      'cn-shanghai': "dytnsapi.aliyuncs.com",
      'cn-qingdao': "dytnsapi.aliyuncs.com",
      'cn-huhehaote': "dytnsapi.aliyuncs.com",
      'cn-hongkong': "dytnsapi.aliyuncs.com",
      'cn-hangzhou-finance': "dytnsapi.aliyuncs.com",
      'cn-hangzhou': "dytnsapi.aliyuncs.com",
      'cn-chengdu': "dytnsapi.aliyuncs.com",
      'cn-beijing-finance-1': "dytnsapi.aliyuncs.com",
      'cn-beijing': "dytnsapi.aliyuncs.com",
      'ap-southeast-5': "dytnsapi.aliyuncs.com",
      'ap-southeast-3': "dytnsapi.aliyuncs.com",
      'ap-southeast-1': "dytnsapi.aliyuncs.com",
      'ap-northeast-1': "dytnsapi.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dytnsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Three-element (name, ID card number, and ID card photo) verification. Used to compare whether the three pieces of information (the name and ID card number filled in by the user and the uploaded portrait photo) belong to the same user.
   * 
   * @remarks
   * - Before using this API, log on to the Cell Phone Number Service console, go to the Tag Square page, find the corresponding tag, click Apply to Activate, fill in the application materials, and use the tag after the application is approved.
   * - Before using this API, make sure that you have fully understood the [Cell Phone Number Service pricing](https://help.aliyun.com/document_detail/154751.html).
   * - Billing applies only when the API return value is Code="OK". Other return results are not billed.
   * - For the verifiable scope, see [ID Card Three Elements Verification](https://help.aliyun.com/document_detail/2844379.html).
   * ### QPS limit
   * - The per-user QPS limit for this API is 200 calls per second. If you exceed the limit, API calls are throttled, which may affect your business. Call the API reasonably.
   * 
   * @param request - CertNoThreeElementVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CertNoThreeElementVerificationResponse
   */
  async certNoThreeElementVerificationWithOptions(request: $_model.CertNoThreeElementVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CertNoThreeElementVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.certNo)) {
      query["CertNo"] = request.certNo;
    }

    if (!$dara.isNull(request.certPicture)) {
      query["CertPicture"] = request.certPicture;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CertNoThreeElementVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CertNoThreeElementVerificationResponse>(await this.callApi(params, req, runtime), new $_model.CertNoThreeElementVerificationResponse({}));
  }

  /**
   * Three-element (name, ID card number, and ID card photo) verification. Used to compare whether the three pieces of information (the name and ID card number filled in by the user and the uploaded portrait photo) belong to the same user.
   * 
   * @remarks
   * - Before using this API, log on to the Cell Phone Number Service console, go to the Tag Square page, find the corresponding tag, click Apply to Activate, fill in the application materials, and use the tag after the application is approved.
   * - Before using this API, make sure that you have fully understood the [Cell Phone Number Service pricing](https://help.aliyun.com/document_detail/154751.html).
   * - Billing applies only when the API return value is Code="OK". Other return results are not billed.
   * - For the verifiable scope, see [ID Card Three Elements Verification](https://help.aliyun.com/document_detail/2844379.html).
   * ### QPS limit
   * - The per-user QPS limit for this API is 200 calls per second. If you exceed the limit, API calls are throttled, which may affect your business. Call the API reasonably.
   * 
   * @param request - CertNoThreeElementVerificationRequest
   * @returns CertNoThreeElementVerificationResponse
   */
  async certNoThreeElementVerification(request: $_model.CertNoThreeElementVerificationRequest): Promise<$_model.CertNoThreeElementVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.certNoThreeElementVerificationWithOptions(request, runtime);
  }

  /**
   * Two-element (name and ID card number) verification. Used to verify whether the name and ID card number entered by a user belong to the same person.
   * 
   * @remarks
   * - Before using this operation, make sure that you have fully understood the pricing of Cell Phone Number Service.
   * - Before using this operation, log on to the Cell Phone Number Service console. On the Tag Marketplace page, find the desired tag, click Apply to Activate, and fill in the application information. You can use the operation only after your application is approved.
   * - The operation is charged when the response contains Code="OK" and IsConsistent != 2. Other response results are not charged.
   * ## QPS Limit
   * The per-user QPS limit of this operation is 200 calls per second. If the limit is exceeded, the API calls are throttled, which may affect your business. Call the operation properly.
   * 
   * @param request - CertNoTwoElementVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CertNoTwoElementVerificationResponse
   */
  async certNoTwoElementVerificationWithOptions(request: $_model.CertNoTwoElementVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CertNoTwoElementVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.certNo)) {
      query["CertNo"] = request.certNo;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CertNoTwoElementVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CertNoTwoElementVerificationResponse>(await this.callApi(params, req, runtime), new $_model.CertNoTwoElementVerificationResponse({}));
  }

  /**
   * Two-element (name and ID card number) verification. Used to verify whether the name and ID card number entered by a user belong to the same person.
   * 
   * @remarks
   * - Before using this operation, make sure that you have fully understood the pricing of Cell Phone Number Service.
   * - Before using this operation, log on to the Cell Phone Number Service console. On the Tag Marketplace page, find the desired tag, click Apply to Activate, and fill in the application information. You can use the operation only after your application is approved.
   * - The operation is charged when the response contains Code="OK" and IsConsistent != 2. Other response results are not charged.
   * ## QPS Limit
   * The per-user QPS limit of this operation is 200 calls per second. If the limit is exceeded, the API calls are throttled, which may affect your business. Call the operation properly.
   * 
   * @param request - CertNoTwoElementVerificationRequest
   * @returns CertNoTwoElementVerificationResponse
   */
  async certNoTwoElementVerification(request: $_model.CertNoTwoElementVerificationRequest): Promise<$_model.CertNoTwoElementVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.certNoTwoElementVerificationWithOptions(request, runtime);
  }

  /**
   * Verifies the enterprise name, enterprise certificate number, enterprise legal person name, and enterprise legal person ID card number. All four items must be consistent and the enterprise\\"s operating status must be active for verification to pass.
   * 
   * @remarks
   * - Before you use this API, make sure that you fully understand the billing method and prices of the Enterprise Four-Element Verification product. For billing details, see [Product Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * - Billing applies when VerifyResult returns true/false and ReasonCode is 0, 1, or 2 in the response. Billing does not apply in other cases.
   * - Before you use this API, log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC&lang=zh), go to the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply to Activate**, and submit your application. You can use the API after the application is approved.
   * ### QPS limit
   * The per-user QPS limit for this API is 200 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call the API appropriately.
   * 
   * @param request - CompanyFourElementsVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompanyFourElementsVerificationResponse
   */
  async companyFourElementsVerificationWithOptions(request: $_model.CompanyFourElementsVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompanyFourElementsVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.epCertName)) {
      query["EpCertName"] = request.epCertName;
    }

    if (!$dara.isNull(request.epCertNo)) {
      query["EpCertNo"] = request.epCertNo;
    }

    if (!$dara.isNull(request.legalPersonCertName)) {
      query["LegalPersonCertName"] = request.legalPersonCertName;
    }

    if (!$dara.isNull(request.legalPersonCertNo)) {
      query["LegalPersonCertNo"] = request.legalPersonCertNo;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompanyFourElementsVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompanyFourElementsVerificationResponse>(await this.callApi(params, req, runtime), new $_model.CompanyFourElementsVerificationResponse({}));
  }

  /**
   * Verifies the enterprise name, enterprise certificate number, enterprise legal person name, and enterprise legal person ID card number. All four items must be consistent and the enterprise\\"s operating status must be active for verification to pass.
   * 
   * @remarks
   * - Before you use this API, make sure that you fully understand the billing method and prices of the Enterprise Four-Element Verification product. For billing details, see [Product Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * - Billing applies when VerifyResult returns true/false and ReasonCode is 0, 1, or 2 in the response. Billing does not apply in other cases.
   * - Before you use this API, log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC&lang=zh), go to the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply to Activate**, and submit your application. You can use the API after the application is approved.
   * ### QPS limit
   * The per-user QPS limit for this API is 200 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call the API appropriately.
   * 
   * @param request - CompanyFourElementsVerificationRequest
   * @returns CompanyFourElementsVerificationResponse
   */
  async companyFourElementsVerification(request: $_model.CompanyFourElementsVerificationRequest): Promise<$_model.CompanyFourElementsVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.companyFourElementsVerificationWithOptions(request, runtime);
  }

  /**
   * Used to verify a company name, company certificate number, and the name of the company\\"s legal representative. Verification passes only when all three are consistent and the company\\"s operating status is in business.
   * 
   * @remarks
   * - Before you use this API, make sure that you have fully understood the billing method and pricing of the Three-Element Company Verification product. For billing details, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * - In the returned result, charges apply when VerifyResult is true/false and ReasonCode is 0/1/2. No charges apply in other cases.
   * - Before you use this API, log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC&lang=zh), go to the [Tag Plaza](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply for Activation**, and submit the application materials. You can use the API after the application is approved.
   * ### QPS limit
   * The per-user QPS limit for this API is 200 calls per second. Requests that exceed this limit are throttled, which may affect your business. Call this API at a reasonable rate.
   * 
   * @param request - CompanyThreeElementsVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompanyThreeElementsVerificationResponse
   */
  async companyThreeElementsVerificationWithOptions(request: $_model.CompanyThreeElementsVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompanyThreeElementsVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.epCertName)) {
      query["EpCertName"] = request.epCertName;
    }

    if (!$dara.isNull(request.epCertNo)) {
      query["EpCertNo"] = request.epCertNo;
    }

    if (!$dara.isNull(request.legalPersonCertName)) {
      query["LegalPersonCertName"] = request.legalPersonCertName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompanyThreeElementsVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompanyThreeElementsVerificationResponse>(await this.callApi(params, req, runtime), new $_model.CompanyThreeElementsVerificationResponse({}));
  }

  /**
   * Used to verify a company name, company certificate number, and the name of the company\\"s legal representative. Verification passes only when all three are consistent and the company\\"s operating status is in business.
   * 
   * @remarks
   * - Before you use this API, make sure that you have fully understood the billing method and pricing of the Three-Element Company Verification product. For billing details, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * - In the returned result, charges apply when VerifyResult is true/false and ReasonCode is 0/1/2. No charges apply in other cases.
   * - Before you use this API, log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC&lang=zh), go to the [Tag Plaza](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply for Activation**, and submit the application materials. You can use the API after the application is approved.
   * ### QPS limit
   * The per-user QPS limit for this API is 200 calls per second. Requests that exceed this limit are throttled, which may affect your business. Call this API at a reasonable rate.
   * 
   * @param request - CompanyThreeElementsVerificationRequest
   * @returns CompanyThreeElementsVerificationResponse
   */
  async companyThreeElementsVerification(request: $_model.CompanyThreeElementsVerificationRequest): Promise<$_model.CompanyThreeElementsVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.companyThreeElementsVerificationWithOptions(request, runtime);
  }

  /**
   * Used to verify the enterprise name and enterprise certificate number. The name and certificate must be fully consistent, and the enterprise must be in operating status for the verification to pass.
   * 
   * @remarks
   * - Before you use this API, make sure that you fully understand the billing methods and pricing of the Enterprise Two-Element Verification product. For billing details, see [Product billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * - Billing applies when Code=OK and ReasonCode=0/1/3 in the returned result. Other cases are not billed.
   * - Before you use this API, log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC&lang=zh), find the corresponding tag on the [Tag Plaza](https://dytns.console.aliyun.com/analysis/square) page, click **Apply to Activate**, and fill in the application materials. After the application is approved, you can use the API.
   * ### QPS limit
   * The single-user QPS limit for this API is 200 times/second. If the limit is exceeded, API calls will be throttled, which may affect your business. Please call the API reasonably.
   * 
   * @param request - CompanyTwoElementsVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompanyTwoElementsVerificationResponse
   */
  async companyTwoElementsVerificationWithOptions(request: $_model.CompanyTwoElementsVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompanyTwoElementsVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.epCertName)) {
      query["EpCertName"] = request.epCertName;
    }

    if (!$dara.isNull(request.epCertNo)) {
      query["EpCertNo"] = request.epCertNo;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompanyTwoElementsVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompanyTwoElementsVerificationResponse>(await this.callApi(params, req, runtime), new $_model.CompanyTwoElementsVerificationResponse({}));
  }

  /**
   * Used to verify the enterprise name and enterprise certificate number. The name and certificate must be fully consistent, and the enterprise must be in operating status for the verification to pass.
   * 
   * @remarks
   * - Before you use this API, make sure that you fully understand the billing methods and pricing of the Enterprise Two-Element Verification product. For billing details, see [Product billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * - Billing applies when Code=OK and ReasonCode=0/1/3 in the returned result. Other cases are not billed.
   * - Before you use this API, log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC&lang=zh), find the corresponding tag on the [Tag Plaza](https://dytns.console.aliyun.com/analysis/square) page, click **Apply to Activate**, and fill in the application materials. After the application is approved, you can use the API.
   * ### QPS limit
   * The single-user QPS limit for this API is 200 times/second. If the limit is exceeded, API calls will be throttled, which may affect your business. Please call the API reasonably.
   * 
   * @param request - CompanyTwoElementsVerificationRequest
   * @returns CompanyTwoElementsVerificationResponse
   */
  async companyTwoElementsVerification(request: $_model.CompanyTwoElementsVerificationRequest): Promise<$_model.CompanyTwoElementsVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.companyTwoElementsVerificationWithOptions(request, runtime);
  }

  /**
   * Deletes a contact.
   * 
   * @remarks
   * - Make sure you have activated Phone Number Identity Service before calling this operation.
   * 
   * @param request - DeleteContactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContactsResponse
   */
  async deleteContactsWithOptions(request: $_model.DeleteContactsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContactsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteContacts",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContactsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContactsResponse({}));
  }

  /**
   * Deletes a contact.
   * 
   * @remarks
   * - Make sure you have activated Phone Number Identity Service before calling this operation.
   * 
   * @param request - DeleteContactsRequest
   * @returns DeleteContactsResponse
   */
  async deleteContacts(request: $_model.DeleteContactsRequest): Promise<$_model.DeleteContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContactsWithOptions(request, runtime);
  }

  /**
   * Predicts whether a phone number is invalid by using AI algorithms.
   * 
   * @remarks
   * - 本接口用于验证号码是否为空号。发起调用该接口验证号码请求时，系统会根据验证次数计费，标准价为0.01元/次。**请确保在使用该接口前，已充分了解本产品的收费方式和价格。**
   * - 当返回结果中：Code="OK" 且 Status != UNKNOWN 时计费，其他情况不计费。 
   * - 由于本产品通过AI算法预测手机号的空号概率，所以无法做到100%准确。当前评估的准确率和召回率约为95%左右。**调用时请注意差别**。
   * - 使用本接口前，请登录号码百科控制台，在[标签广场](https://dytns.console.aliyun.com/analysis/square)页面，找到对应的标签，单击**申请开通**，填写申请资料，审批通过后即可使用。
   * ### QPS限制
   * 本接口的单用户QPS限制为100次/秒。超过限制，API调用会被限流，这可能会影响您的业务，请合理调用。
   * ### 授权信息
   * 默认仅限阿里云账号使用本接口，RAM用户只有在被授予了相关API操作权限后方可使用。具体请参见[为RAM用户授权](https://help.aliyun.com/document_detail/154006.html)。
   * 
   * @param request - DescribeEmptyNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEmptyNumberResponse
   */
  async describeEmptyNumberWithOptions(request: $_model.DescribeEmptyNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEmptyNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEmptyNumber",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEmptyNumberResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEmptyNumberResponse({}));
  }

  /**
   * Predicts whether a phone number is invalid by using AI algorithms.
   * 
   * @remarks
   * - 本接口用于验证号码是否为空号。发起调用该接口验证号码请求时，系统会根据验证次数计费，标准价为0.01元/次。**请确保在使用该接口前，已充分了解本产品的收费方式和价格。**
   * - 当返回结果中：Code="OK" 且 Status != UNKNOWN 时计费，其他情况不计费。 
   * - 由于本产品通过AI算法预测手机号的空号概率，所以无法做到100%准确。当前评估的准确率和召回率约为95%左右。**调用时请注意差别**。
   * - 使用本接口前，请登录号码百科控制台，在[标签广场](https://dytns.console.aliyun.com/analysis/square)页面，找到对应的标签，单击**申请开通**，填写申请资料，审批通过后即可使用。
   * ### QPS限制
   * 本接口的单用户QPS限制为100次/秒。超过限制，API调用会被限流，这可能会影响您的业务，请合理调用。
   * ### 授权信息
   * 默认仅限阿里云账号使用本接口，RAM用户只有在被授予了相关API操作权限后方可使用。具体请参见[为RAM用户授权](https://help.aliyun.com/document_detail/154006.html)。
   * 
   * @param request - DescribeEmptyNumberRequest
   * @returns DescribeEmptyNumberResponse
   */
  async describeEmptyNumber(request: $_model.DescribeEmptyNumberRequest): Promise<$_model.DescribeEmptyNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEmptyNumberWithOptions(request, runtime);
  }

  /**
   * 号码归属地查询v2
   * 
   * @param request - DescribeMobileOperatorAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMobileOperatorAttributeResponse
   */
  async describeMobileOperatorAttributeWithOptions(request: $_model.DescribeMobileOperatorAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMobileOperatorAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMobileOperatorAttribute",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMobileOperatorAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMobileOperatorAttributeResponse({}));
  }

  /**
   * 号码归属地查询v2
   * 
   * @param request - DescribeMobileOperatorAttributeRequest
   * @returns DescribeMobileOperatorAttributeResponse
   */
  async describeMobileOperatorAttribute(request: $_model.DescribeMobileOperatorAttributeRequest): Promise<$_model.DescribeMobileOperatorAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMobileOperatorAttributeWithOptions(request, runtime);
  }

  /**
   * Obtains the result returned by phone number analysis.
   * 
   * @remarks
   * - Before you use this API, log on to the Phone Number Service console, go to the [Tag Plaza](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply to Activate**, fill in the application materials, and then use the API after the application is approved.
   * - Before you use this API, make sure that you fully understand the [billing](https://help.aliyun.com/document_detail/154008.html) of Phone Number Service.
   * ### QPS limit
   * The QPS limit of this API is 1,000 calls per second per user. If the limit is exceeded, API calls are throttled, which may affect your business. Make calls properly.
   * ### Authorization information
   * By default, only Alibaba Cloud accounts can use this API. RAM users can use this API only after they are granted the related API operation permissions. For more information, see [Authorize a RAM user](https://help.aliyun.com/document_detail/154006.html).
   * 
   * @param request - DescribePhoneNumberAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneNumberAnalysisResponse
   */
  async describePhoneNumberAnalysisWithOptions(request: $_model.DescribePhoneNumberAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePhoneNumberAnalysisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.numberType)) {
      query["NumberType"] = request.numberType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.rate)) {
      query["Rate"] = request.rate;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePhoneNumberAnalysis",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePhoneNumberAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.DescribePhoneNumberAnalysisResponse({}));
  }

  /**
   * Obtains the result returned by phone number analysis.
   * 
   * @remarks
   * - Before you use this API, log on to the Phone Number Service console, go to the [Tag Plaza](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply to Activate**, fill in the application materials, and then use the API after the application is approved.
   * - Before you use this API, make sure that you fully understand the [billing](https://help.aliyun.com/document_detail/154008.html) of Phone Number Service.
   * ### QPS limit
   * The QPS limit of this API is 1,000 calls per second per user. If the limit is exceeded, API calls are throttled, which may affect your business. Make calls properly.
   * ### Authorization information
   * By default, only Alibaba Cloud accounts can use this API. RAM users can use this API only after they are granted the related API operation permissions. For more information, see [Authorize a RAM user](https://help.aliyun.com/document_detail/154006.html).
   * 
   * @param request - DescribePhoneNumberAnalysisRequest
   * @returns DescribePhoneNumberAnalysisResponse
   */
  async describePhoneNumberAnalysis(request: $_model.DescribePhoneNumberAnalysisRequest): Promise<$_model.DescribePhoneNumberAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePhoneNumberAnalysisWithOptions(request, runtime);
  }

  /**
   * Get the phone number analysis result.
   * 
   * @remarks
   * Before using this operation, log on to the Cell Phone Number Service console, go to the Tag Square page, find the corresponding tag, click Apply to activate, and fill in the application materials. You can use the operation after the application is approved.
   * Make sure that you fully understand the billing of the Cell Phone Number Service before you use this operation.
   * 
   * @param request - DescribePhoneNumberAnalysisAIRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneNumberAnalysisAIResponse
   */
  async describePhoneNumberAnalysisAIWithOptions(request: $_model.DescribePhoneNumberAnalysisAIRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePhoneNumberAnalysisAIResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.modelConfig)) {
      query["ModelConfig"] = request.modelConfig;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.rate)) {
      query["Rate"] = request.rate;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePhoneNumberAnalysisAI",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePhoneNumberAnalysisAIResponse>(await this.callApi(params, req, runtime), new $_model.DescribePhoneNumberAnalysisAIResponse({}));
  }

  /**
   * Get the phone number analysis result.
   * 
   * @remarks
   * Before using this operation, log on to the Cell Phone Number Service console, go to the Tag Square page, find the corresponding tag, click Apply to activate, and fill in the application materials. You can use the operation after the application is approved.
   * Make sure that you fully understand the billing of the Cell Phone Number Service before you use this operation.
   * 
   * @param request - DescribePhoneNumberAnalysisAIRequest
   * @returns DescribePhoneNumberAnalysisAIResponse
   */
  async describePhoneNumberAnalysisAI(request: $_model.DescribePhoneNumberAnalysisAIRequest): Promise<$_model.DescribePhoneNumberAnalysisAIResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePhoneNumberAnalysisAIWithOptions(request, runtime);
  }

  /**
   * 号码分析服务pai供应商批量查询接口
   * 
   * @param request - DescribePhoneNumberAnalysisPaiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneNumberAnalysisPaiResponse
   */
  async describePhoneNumberAnalysisPaiWithOptions(request: $_model.DescribePhoneNumberAnalysisPaiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePhoneNumberAnalysisPaiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.modelConfig)) {
      query["ModelConfig"] = request.modelConfig;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.rate)) {
      query["Rate"] = request.rate;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePhoneNumberAnalysisPai",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePhoneNumberAnalysisPaiResponse>(await this.callApi(params, req, runtime), new $_model.DescribePhoneNumberAnalysisPaiResponse({}));
  }

  /**
   * 号码分析服务pai供应商批量查询接口
   * 
   * @param request - DescribePhoneNumberAnalysisPaiRequest
   * @returns DescribePhoneNumberAnalysisPaiResponse
   */
  async describePhoneNumberAnalysisPai(request: $_model.DescribePhoneNumberAnalysisPaiRequest): Promise<$_model.DescribePhoneNumberAnalysisPaiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePhoneNumberAnalysisPaiWithOptions(request, runtime);
  }

  /**
   * 泛行业人群筛选
   * 
   * @param request - DescribePhoneNumberAnalysisTransparentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneNumberAnalysisTransparentResponse
   */
  async describePhoneNumberAnalysisTransparentWithOptions(request: $_model.DescribePhoneNumberAnalysisTransparentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePhoneNumberAnalysisTransparentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.numberType)) {
      query["NumberType"] = request.numberType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePhoneNumberAnalysisTransparent",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePhoneNumberAnalysisTransparentResponse>(await this.callApi(params, req, runtime), new $_model.DescribePhoneNumberAnalysisTransparentResponse({}));
  }

  /**
   * 泛行业人群筛选
   * 
   * @param request - DescribePhoneNumberAnalysisTransparentRequest
   * @returns DescribePhoneNumberAnalysisTransparentResponse
   */
  async describePhoneNumberAnalysisTransparent(request: $_model.DescribePhoneNumberAnalysisTransparentRequest): Promise<$_model.DescribePhoneNumberAnalysisTransparentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePhoneNumberAnalysisTransparentWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DescribePhoneNumberAttribute is deprecated, please use Dytnsapi::2020-02-17::DescribePhoneNumberOperatorAttribute instead.
   * 
   * @param request - DescribePhoneNumberAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneNumberAttributeResponse
   */
  async describePhoneNumberAttributeWithOptions(request: $_model.DescribePhoneNumberAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePhoneNumberAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePhoneNumberAttribute",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePhoneNumberAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribePhoneNumberAttributeResponse({}));
  }

  /**
   * @deprecated OpenAPI DescribePhoneNumberAttribute is deprecated, please use Dytnsapi::2020-02-17::DescribePhoneNumberOperatorAttribute instead.
   * 
   * @param request - DescribePhoneNumberAttributeRequest
   * @returns DescribePhoneNumberAttributeResponse
   */
  // Deprecated
  async describePhoneNumberAttribute(request: $_model.DescribePhoneNumberAttributeRequest): Promise<$_model.DescribePhoneNumberAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePhoneNumberAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the duration for which a mobile user has been registered on the carrier\\"s network.
   * 
   * @remarks
   * - Before using this API, log on to the Cell Phone Number Service console, go to the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply for Activation**, fill in the application materials, and use the API after the application is approved.
   * - Make sure that you fully understand the [product pricing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service before using this API.
   * ### QPS limit
   * The per-user QPS limit for this API is 200 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this API at a reasonable rate.
   * 
   * @param request - DescribePhoneNumberOnlineTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneNumberOnlineTimeResponse
   */
  async describePhoneNumberOnlineTimeWithOptions(request: $_model.DescribePhoneNumberOnlineTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePhoneNumberOnlineTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.carrier)) {
      query["Carrier"] = request.carrier;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePhoneNumberOnlineTime",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePhoneNumberOnlineTimeResponse>(await this.callApi(params, req, runtime), new $_model.DescribePhoneNumberOnlineTimeResponse({}));
  }

  /**
   * Queries the duration for which a mobile user has been registered on the carrier\\"s network.
   * 
   * @remarks
   * - Before using this API, log on to the Cell Phone Number Service console, go to the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply for Activation**, fill in the application materials, and use the API after the application is approved.
   * - Make sure that you fully understand the [product pricing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service before using this API.
   * ### QPS limit
   * The per-user QPS limit for this API is 200 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this API at a reasonable rate.
   * 
   * @param request - DescribePhoneNumberOnlineTimeRequest
   * @returns DescribePhoneNumberOnlineTimeResponse
   */
  async describePhoneNumberOnlineTime(request: $_model.DescribePhoneNumberOnlineTimeRequest): Promise<$_model.DescribePhoneNumberOnlineTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePhoneNumberOnlineTimeWithOptions(request, runtime);
  }

  /**
   * Queries the carrier information of a phone number, including the province, city, basic carrier (China Mobile, China Unicom, China Telecom, or China Broadnet), mobile virtual network operator (such as Alibaba Cloud Communication), whether the number has been ported, and the number segment.
   * 
   * @remarks
   * - Before you use this API, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154008.html) of Cell Phone Number Service.
   * - By default, only Alibaba Cloud accounts can use this API. RAM users can use this API only after they are granted the required permissions. For more information, see [Grant permissions to a RAM user](https://help.aliyun.com/document_detail/154006.html).
   * - This API is used to obtain the current carrier, location, and number portability information of a phone number. The API supports queries for **plaintext**, **MD5**, and **SHA256** encrypted phone numbers.
   * - Before you use this API, log on to the Cell Phone Number Service console, go to the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply for Activation**, and submit the application materials. You can use the API after your application is approved.
   * ### QPS limit
   * The QPS limit per user for this API is 2,000 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Make calls reasonably.
   * 
   * @param request - DescribePhoneNumberOperatorAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneNumberOperatorAttributeResponse
   */
  async describePhoneNumberOperatorAttributeWithOptions(request: $_model.DescribePhoneNumberOperatorAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePhoneNumberOperatorAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.flowName)) {
      query["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resultCount)) {
      query["ResultCount"] = request.resultCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePhoneNumberOperatorAttribute",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePhoneNumberOperatorAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribePhoneNumberOperatorAttributeResponse({}));
  }

  /**
   * Queries the carrier information of a phone number, including the province, city, basic carrier (China Mobile, China Unicom, China Telecom, or China Broadnet), mobile virtual network operator (such as Alibaba Cloud Communication), whether the number has been ported, and the number segment.
   * 
   * @remarks
   * - Before you use this API, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154008.html) of Cell Phone Number Service.
   * - By default, only Alibaba Cloud accounts can use this API. RAM users can use this API only after they are granted the required permissions. For more information, see [Grant permissions to a RAM user](https://help.aliyun.com/document_detail/154006.html).
   * - This API is used to obtain the current carrier, location, and number portability information of a phone number. The API supports queries for **plaintext**, **MD5**, and **SHA256** encrypted phone numbers.
   * - Before you use this API, log on to the Cell Phone Number Service console, go to the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply for Activation**, and submit the application materials. You can use the API after your application is approved.
   * ### QPS limit
   * The QPS limit per user for this API is 2,000 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Make calls reasonably.
   * 
   * @param request - DescribePhoneNumberOperatorAttributeRequest
   * @returns DescribePhoneNumberOperatorAttributeResponse
   */
  async describePhoneNumberOperatorAttribute(request: $_model.DescribePhoneNumberOperatorAttributeRequest): Promise<$_model.DescribePhoneNumberOperatorAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePhoneNumberOperatorAttributeWithOptions(request, runtime);
  }

  /**
   * 号码归属服务(包年包月客户专用)
   * 
   * @param request - DescribePhoneNumberOperatorAttributeAnnualRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneNumberOperatorAttributeAnnualResponse
   */
  async describePhoneNumberOperatorAttributeAnnualWithOptions(request: $_model.DescribePhoneNumberOperatorAttributeAnnualRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePhoneNumberOperatorAttributeAnnualResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePhoneNumberOperatorAttributeAnnual",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePhoneNumberOperatorAttributeAnnualResponse>(await this.callApi(params, req, runtime), new $_model.DescribePhoneNumberOperatorAttributeAnnualResponse({}));
  }

  /**
   * 号码归属服务(包年包月客户专用)
   * 
   * @param request - DescribePhoneNumberOperatorAttributeAnnualRequest
   * @returns DescribePhoneNumberOperatorAttributeAnnualResponse
   */
  async describePhoneNumberOperatorAttributeAnnual(request: $_model.DescribePhoneNumberOperatorAttributeAnnualRequest): Promise<$_model.DescribePhoneNumberOperatorAttributeAnnualResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePhoneNumberOperatorAttributeAnnualWithOptions(request, runtime);
  }

  /**
   * 号码归属服务(包年包月客户专用)
   * 
   * @param request - DescribePhoneNumberOperatorAttributeAnnualUseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneNumberOperatorAttributeAnnualUseResponse
   */
  async describePhoneNumberOperatorAttributeAnnualUseWithOptions(request: $_model.DescribePhoneNumberOperatorAttributeAnnualUseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePhoneNumberOperatorAttributeAnnualUseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePhoneNumberOperatorAttributeAnnualUse",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePhoneNumberOperatorAttributeAnnualUseResponse>(await this.callApi(params, req, runtime), new $_model.DescribePhoneNumberOperatorAttributeAnnualUseResponse({}));
  }

  /**
   * 号码归属服务(包年包月客户专用)
   * 
   * @param request - DescribePhoneNumberOperatorAttributeAnnualUseRequest
   * @returns DescribePhoneNumberOperatorAttributeAnnualUseResponse
   */
  async describePhoneNumberOperatorAttributeAnnualUse(request: $_model.DescribePhoneNumberOperatorAttributeAnnualUseRequest): Promise<$_model.DescribePhoneNumberOperatorAttributeAnnualUseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePhoneNumberOperatorAttributeAnnualUseWithOptions(request, runtime);
  }

  /**
   * 风险用户评分
   * 
   * @param request - DescribePhoneNumberRiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneNumberRiskResponse
   */
  async describePhoneNumberRiskWithOptions(request: $_model.DescribePhoneNumberRiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePhoneNumberRiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePhoneNumberRisk",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePhoneNumberRiskResponse>(await this.callApi(params, req, runtime), new $_model.DescribePhoneNumberRiskResponse({}));
  }

  /**
   * 风险用户评分
   * 
   * @param request - DescribePhoneNumberRiskRequest
   * @returns DescribePhoneNumberRiskResponse
   */
  async describePhoneNumberRisk(request: $_model.DescribePhoneNumberRiskRequest): Promise<$_model.DescribePhoneNumberRiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePhoneNumberRiskWithOptions(request, runtime);
  }

  /**
   * Quickly verify in a single request if a mobile phone number is a carrier\\"s secondary number assignment.
   * 
   * @remarks
   * - Before you use this API, make sure you understand the [pricing](https://help.aliyun.com/document_detail/154751.html) for Phone Number Verification Service.
   * - You are charged only when the API response returns `Code="OK"` and `VerifyResult` is not `0`. No charge is incurred in any other case.
   * - Before you use this API, log in to the Phone Number Verification Service console. On the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the tag you need, click **Request Activation**, and complete the application form. You can use the API once your application is approved.
   * ## QPS limits
   * The QPS limit is 100 per user. If you exceed this limit, the system throttles your API calls, which may affect your business. Plan your API calls accordingly.
   * ## Authorization
   * By default, only an Alibaba Cloud account can call this API. A RAM user must be granted the required permissions to call the API. For more information, see [Grant permissions to a RAM user](https://help.aliyun.com/document_detail/154006.html).
   * 
   * @param request - DescribePhoneTwiceTelVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneTwiceTelVerifyResponse
   */
  async describePhoneTwiceTelVerifyWithOptions(request: $_model.DescribePhoneTwiceTelVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePhoneTwiceTelVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePhoneTwiceTelVerify",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePhoneTwiceTelVerifyResponse>(await this.callApi(params, req, runtime), new $_model.DescribePhoneTwiceTelVerifyResponse({}));
  }

  /**
   * Quickly verify in a single request if a mobile phone number is a carrier\\"s secondary number assignment.
   * 
   * @remarks
   * - Before you use this API, make sure you understand the [pricing](https://help.aliyun.com/document_detail/154751.html) for Phone Number Verification Service.
   * - You are charged only when the API response returns `Code="OK"` and `VerifyResult` is not `0`. No charge is incurred in any other case.
   * - Before you use this API, log in to the Phone Number Verification Service console. On the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the tag you need, click **Request Activation**, and complete the application form. You can use the API once your application is approved.
   * ## QPS limits
   * The QPS limit is 100 per user. If you exceed this limit, the system throttles your API calls, which may affect your business. Plan your API calls accordingly.
   * ## Authorization
   * By default, only an Alibaba Cloud account can call this API. A RAM user must be granted the required permissions to call the API. For more information, see [Grant permissions to a RAM user](https://help.aliyun.com/document_detail/154006.html).
   * 
   * @param request - DescribePhoneTwiceTelVerifyRequest
   * @returns DescribePhoneTwiceTelVerifyResponse
   */
  async describePhoneTwiceTelVerify(request: $_model.DescribePhoneTwiceTelVerifyRequest): Promise<$_model.DescribePhoneTwiceTelVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePhoneTwiceTelVerifyWithOptions(request, runtime);
  }

  /**
   * This API only provides the signing functionality for acquiring an authorization token during UAID retrieval from the three-network operators.
   * 
   * @remarks
   * This API provides only the **signing function for obtaining an authorization token** as part of the UAID retrieval process for China\\"s three major operators.
   * - To generate the other parameters required to obtain the authorization token, refer to the respective operator\\"s documentation.
   * - To request the authorization token, refer to the respective operator\\"s documentation. Note that the request must be sent from the user\\"s mobile device over a cellular network.
   * - After obtaining the authorization token, call the [UAIDVerification](~~UAIDVerification~~) API to complete the UAID retrieval.
   * ### How to request an authorization token
   * >Notice: 
   * When you request an authorization token, the client or H5 page must be connected to a cellular network.
   * #### China Mobile (CM)
   * Protocol: HTTPS + application/json
   * Method: POST
   * URL: https\\://msg.cmpassport.com/h5/getMobile
   * ##### Request parameters
   * Request example:
   * `{ "traceId": "mfawsxtcmyplwzpayzzvdvbsowxmkynr", "appId": "300011580392", "sign": "2c61b3c58ffbeed97461e31be4fd931a", "msgId": "redbyxsdetddwaaffajcwwapspykftzx", "expandParams": "", "businessType": "3", "version": "1.0", "timestamp": "20201125101540980" }`
   * Parameter description:
   * - `version`: Use `1.0`.
   * - `timestamp`: The request timestamp, with millisecond precision. This value and its format must match the `Time` input parameter for this API.
   * - `appId`: Use `300011580392`.
   * - `businessType`: Use `3`.
   * - `traceId`: The trace ID. This value must match this API\\"s `OutId` input parameter.
   * - `sign`: Obtained by calling this API.
   * - `msgId`: A unique message identifier.
   * ##### Response parameters
   * Response example:
   * `{ "header": { "appId": "300011580392", "msgId": "redbyxsdetddwaaffajcwwapspykftzx", "timestamp": "20201125101607932" }, "body": { "resultCode": "103000", "expandParams": "", "resultDesc": "成功", "token": "H5HTTPS4187AE9743AFCB14F8D99B9D65ED9E01" } }`
   * Retrieve the `token` from the response `body`.
   * #### China Unicom (CU)
   * Obtain the token in two steps.
   * ##### Step 1: Obtain the authurl
   * Send a request to the portal server to get the authentication server address (`authurl`).
   * Protocol: HTTPS + application/json
   * Method: GET
   * URL: https\\://nisportal.10010.com:9001/api
   * ###### Request parameters
   * Request examples:
   * JSON request: `?appid=1554778161153`
   * JSONP request: `?appid=1554778161153&callback=callbackFunction`
   * Parameter description:
   * - `appid`: Use 1554778161153.
   * - `callback`: The name of the JSONP callback function. This parameter is required only for JSONP requests.
   * ###### Response parameters
   * Response examples:
   * JSON response:
   * `{"authurl": "https://enrichgw.10010.com/d93222629f52ec79"}`
   * JSONP response:
   * `callbackFunction({"authurl":"https://enrichgw.10010.com/d93222629f52ec79"})`
   * Retrieve the `authurl` from the response.
   * ##### Step 2: Obtain the token
   * Protocol: HTTPS + application/json
   * Method: GET
   * URL: The authurl from Step 1, with /api appended.
   * Request URL example: `https://enrichgw.10010.com/d93222629f52ec79/api`
   * ###### Request parameters
   * Request examples:
   * JSON request: `?appid=1554778161153`
   * JSONP request: `?appid=1554778161153&callback=callbackFunction`
   * Parameter description:
   * - `appid`: Use 1554778161153.
   * - `callback`: The name of the JSONP callback function. This parameter is required only for JSONP requests.
   * ###### Response parameters
   * Response examples:
   * JSON response:
   * `{ "province": "1", "code": "7nHS1nggx2WP613750206700RN6oiRN1" }`
   * JSONP response:
   * `callbackFunction({"province":"1","code":"7nHS3Dnkd1BS701851092400RN6oiRN1"})`
   * Retrieve the `code` from the response.
   * #### China Telecom (CT)
   * Protocol: HTTPS + application/x-www-form-urlencoded;charset=UTF-8
   * Method: GET
   * URL: https\\://id6.me/gw/preuniq.do
   * ##### Request parameters
   * Request example:
   * `?clientType=30100&appId=9390188202&format=json&sign=D63C166FA19E1996EF********09C6A5397C10B4&paramKey=1D7C25EB8B0B8B4CB3CF8DC60628F6549********786B0AF1FEF93FA1335057A35BF5F0B39A3867EAA9BE14B3898********8B01DE34965060445B6E1F66401D714650E4AB161CD6DCF4A72********3B856F22A192B8B0C39D7A55B961062E68C89C928894F119B25********7C548355FE9DB82852EB93C939F2200B48CD17&paramStr=140********95AF8E138B94754CB4CF83BA6FB********52B258BFDFD38BF233&version=1.1`
   * Parameter description:
   * - `appId`: Use `9390188202`.
   * - `clientType`: The client type. This value must match the `ClientType` input parameter for this API.
   * - `format`: Use `json` or `jsonp`.
   * - `version`: Use `1.1`.
   * - `sign`: Obtained by calling this API.
   * - `paramKey`: The ciphertext of key A. Key A is a 16-character random string generated by the client. To generate paramKey, encrypt key A using the RSA algorithm and the China Telecom public key. The padding mode is `RSA/ECB/PKCS1Padding`. Download the [China Telecom RSA public key](https://id.189.cn/source/files/API.pem).
   * - `paramStr`: The ciphertext of a parameter string. This string contains `timeStamp` (a Unix timestamp with millisecond precision, for example `1697791988302`, that corresponds to the value of the `Time` parameter of this API) and `callback` (the name of the JSONP callback function, required only when `format` is set to `jsonp`). To generate `paramStr`, encrypt the string using AES with key A. The padding mode is `AES/CBC/PKCS5Padding`, and the initialization vector is `0000000000000000`.
   * ##### Response parameters
   * Response example:
   * `callback?result=10000&msg=success&data=a35336711c70456cb883f4f224e9a259`
   * The `data` parameter contains the ciphertext of the business result. To get the result, decrypt the data value using key A, the `AES/CBC/PKCS5Padding` mode, and an initialization vector of `0000000000000000`.
   * Decrypted business result example:
   * `{"accessCode": "H5HTTPS4187AE9743AFCB14F8D99B9D65ED9E01"}`
   * Retrieve the `accessCode` from the decrypted result.
   * 
   * @param request - GetUAIDApplyTokenSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUAIDApplyTokenSignResponse
   */
  async getUAIDApplyTokenSignWithOptions(request: $_model.GetUAIDApplyTokenSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUAIDApplyTokenSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.carrier)) {
      query["Carrier"] = request.carrier;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.format)) {
      query["Format"] = request.format;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.paramKey)) {
      query["ParamKey"] = request.paramKey;
    }

    if (!$dara.isNull(request.paramStr)) {
      query["ParamStr"] = request.paramStr;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.time)) {
      query["Time"] = request.time;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUAIDApplyTokenSign",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUAIDApplyTokenSignResponse>(await this.callApi(params, req, runtime), new $_model.GetUAIDApplyTokenSignResponse({}));
  }

  /**
   * This API only provides the signing functionality for acquiring an authorization token during UAID retrieval from the three-network operators.
   * 
   * @remarks
   * This API provides only the **signing function for obtaining an authorization token** as part of the UAID retrieval process for China\\"s three major operators.
   * - To generate the other parameters required to obtain the authorization token, refer to the respective operator\\"s documentation.
   * - To request the authorization token, refer to the respective operator\\"s documentation. Note that the request must be sent from the user\\"s mobile device over a cellular network.
   * - After obtaining the authorization token, call the [UAIDVerification](~~UAIDVerification~~) API to complete the UAID retrieval.
   * ### How to request an authorization token
   * >Notice: 
   * When you request an authorization token, the client or H5 page must be connected to a cellular network.
   * #### China Mobile (CM)
   * Protocol: HTTPS + application/json
   * Method: POST
   * URL: https\\://msg.cmpassport.com/h5/getMobile
   * ##### Request parameters
   * Request example:
   * `{ "traceId": "mfawsxtcmyplwzpayzzvdvbsowxmkynr", "appId": "300011580392", "sign": "2c61b3c58ffbeed97461e31be4fd931a", "msgId": "redbyxsdetddwaaffajcwwapspykftzx", "expandParams": "", "businessType": "3", "version": "1.0", "timestamp": "20201125101540980" }`
   * Parameter description:
   * - `version`: Use `1.0`.
   * - `timestamp`: The request timestamp, with millisecond precision. This value and its format must match the `Time` input parameter for this API.
   * - `appId`: Use `300011580392`.
   * - `businessType`: Use `3`.
   * - `traceId`: The trace ID. This value must match this API\\"s `OutId` input parameter.
   * - `sign`: Obtained by calling this API.
   * - `msgId`: A unique message identifier.
   * ##### Response parameters
   * Response example:
   * `{ "header": { "appId": "300011580392", "msgId": "redbyxsdetddwaaffajcwwapspykftzx", "timestamp": "20201125101607932" }, "body": { "resultCode": "103000", "expandParams": "", "resultDesc": "成功", "token": "H5HTTPS4187AE9743AFCB14F8D99B9D65ED9E01" } }`
   * Retrieve the `token` from the response `body`.
   * #### China Unicom (CU)
   * Obtain the token in two steps.
   * ##### Step 1: Obtain the authurl
   * Send a request to the portal server to get the authentication server address (`authurl`).
   * Protocol: HTTPS + application/json
   * Method: GET
   * URL: https\\://nisportal.10010.com:9001/api
   * ###### Request parameters
   * Request examples:
   * JSON request: `?appid=1554778161153`
   * JSONP request: `?appid=1554778161153&callback=callbackFunction`
   * Parameter description:
   * - `appid`: Use 1554778161153.
   * - `callback`: The name of the JSONP callback function. This parameter is required only for JSONP requests.
   * ###### Response parameters
   * Response examples:
   * JSON response:
   * `{"authurl": "https://enrichgw.10010.com/d93222629f52ec79"}`
   * JSONP response:
   * `callbackFunction({"authurl":"https://enrichgw.10010.com/d93222629f52ec79"})`
   * Retrieve the `authurl` from the response.
   * ##### Step 2: Obtain the token
   * Protocol: HTTPS + application/json
   * Method: GET
   * URL: The authurl from Step 1, with /api appended.
   * Request URL example: `https://enrichgw.10010.com/d93222629f52ec79/api`
   * ###### Request parameters
   * Request examples:
   * JSON request: `?appid=1554778161153`
   * JSONP request: `?appid=1554778161153&callback=callbackFunction`
   * Parameter description:
   * - `appid`: Use 1554778161153.
   * - `callback`: The name of the JSONP callback function. This parameter is required only for JSONP requests.
   * ###### Response parameters
   * Response examples:
   * JSON response:
   * `{ "province": "1", "code": "7nHS1nggx2WP613750206700RN6oiRN1" }`
   * JSONP response:
   * `callbackFunction({"province":"1","code":"7nHS3Dnkd1BS701851092400RN6oiRN1"})`
   * Retrieve the `code` from the response.
   * #### China Telecom (CT)
   * Protocol: HTTPS + application/x-www-form-urlencoded;charset=UTF-8
   * Method: GET
   * URL: https\\://id6.me/gw/preuniq.do
   * ##### Request parameters
   * Request example:
   * `?clientType=30100&appId=9390188202&format=json&sign=D63C166FA19E1996EF********09C6A5397C10B4&paramKey=1D7C25EB8B0B8B4CB3CF8DC60628F6549********786B0AF1FEF93FA1335057A35BF5F0B39A3867EAA9BE14B3898********8B01DE34965060445B6E1F66401D714650E4AB161CD6DCF4A72********3B856F22A192B8B0C39D7A55B961062E68C89C928894F119B25********7C548355FE9DB82852EB93C939F2200B48CD17&paramStr=140********95AF8E138B94754CB4CF83BA6FB********52B258BFDFD38BF233&version=1.1`
   * Parameter description:
   * - `appId`: Use `9390188202`.
   * - `clientType`: The client type. This value must match the `ClientType` input parameter for this API.
   * - `format`: Use `json` or `jsonp`.
   * - `version`: Use `1.1`.
   * - `sign`: Obtained by calling this API.
   * - `paramKey`: The ciphertext of key A. Key A is a 16-character random string generated by the client. To generate paramKey, encrypt key A using the RSA algorithm and the China Telecom public key. The padding mode is `RSA/ECB/PKCS1Padding`. Download the [China Telecom RSA public key](https://id.189.cn/source/files/API.pem).
   * - `paramStr`: The ciphertext of a parameter string. This string contains `timeStamp` (a Unix timestamp with millisecond precision, for example `1697791988302`, that corresponds to the value of the `Time` parameter of this API) and `callback` (the name of the JSONP callback function, required only when `format` is set to `jsonp`). To generate `paramStr`, encrypt the string using AES with key A. The padding mode is `AES/CBC/PKCS5Padding`, and the initialization vector is `0000000000000000`.
   * ##### Response parameters
   * Response example:
   * `callback?result=10000&msg=success&data=a35336711c70456cb883f4f224e9a259`
   * The `data` parameter contains the ciphertext of the business result. To get the result, decrypt the data value using key A, the `AES/CBC/PKCS5Padding` mode, and an initialization vector of `0000000000000000`.
   * Decrypted business result example:
   * `{"accessCode": "H5HTTPS4187AE9743AFCB14F8D99B9D65ED9E01"}`
   * Retrieve the `accessCode` from the decrypted result.
   * 
   * @param request - GetUAIDApplyTokenSignRequest
   * @returns GetUAIDApplyTokenSignResponse
   */
  async getUAIDApplyTokenSign(request: $_model.GetUAIDApplyTokenSignRequest): Promise<$_model.GetUAIDApplyTokenSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUAIDApplyTokenSignWithOptions(request, runtime);
  }

  /**
   * 获取号码采集服务申请Token所需的签名字段
   * 
   * @param request - GetUAIDConversionSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUAIDConversionSignResponse
   */
  async getUAIDConversionSignWithOptions(request: $_model.GetUAIDConversionSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUAIDConversionSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.carrier)) {
      query["Carrier"] = request.carrier;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.format)) {
      query["Format"] = request.format;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.paramKey)) {
      query["ParamKey"] = request.paramKey;
    }

    if (!$dara.isNull(request.paramStr)) {
      query["ParamStr"] = request.paramStr;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.time)) {
      query["Time"] = request.time;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUAIDConversionSign",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUAIDConversionSignResponse>(await this.callApi(params, req, runtime), new $_model.GetUAIDConversionSignResponse({}));
  }

  /**
   * 获取号码采集服务申请Token所需的签名字段
   * 
   * @param request - GetUAIDConversionSignRequest
   * @returns GetUAIDConversionSignResponse
   */
  async getUAIDConversionSign(request: $_model.GetUAIDConversionSignRequest): Promise<$_model.GetUAIDConversionSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUAIDConversionSignWithOptions(request, runtime);
  }

  /**
   * Verifies whether a name, phone number, and ID number belonged to the same user at a specific point in time.
   * 
   * @remarks
   * ## Usage notes
   * - Before you use this API, ensure you understand its [pricing](https://help.aliyun.com/zh/cpns/product-overview/pricing-of-cpns).
   * - Before you use this API, log on to the Phone Number Intelligence console and apply for the required tag on the [Tag Plaza](https://dytns.console.aliyun.com/analysis/square) page.
   * - You are charged for a call only when the response returns `Code=\\"OK\\"` and `IsConsistent != 0`. No charges are incurred for any other results.
   * - Verification of China Broadcasting Network numbers (numbers with the 192 prefix) is not supported. If you provide a number with the 192 prefix, an HTTP 400 error is returned.
   * - Due to number portability, the actual carrier may differ from the current carrier of record. You can use the `Carrier` parameter to route the query to a specific carrier.
   * - The queries per second (QPS) limit per user is 200. Requests that exceed this limit are throttled.
   * - In the authorization information, the action is `dytns:HistoryThreeElementsVerification`, the access level is Read, and the resource type is All Resources.
   * 
   * @param request - HistoryThreeElementsVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HistoryThreeElementsVerificationResponse
   */
  async historyThreeElementsVerificationWithOptions(request: $_model.HistoryThreeElementsVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.HistoryThreeElementsVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.carrier)) {
      query["Carrier"] = request.carrier;
    }

    if (!$dara.isNull(request.certCode)) {
      query["CertCode"] = request.certCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.verificationTime)) {
      query["VerificationTime"] = request.verificationTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HistoryThreeElementsVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HistoryThreeElementsVerificationResponse>(await this.callApi(params, req, runtime), new $_model.HistoryThreeElementsVerificationResponse({}));
  }

  /**
   * Verifies whether a name, phone number, and ID number belonged to the same user at a specific point in time.
   * 
   * @remarks
   * ## Usage notes
   * - Before you use this API, ensure you understand its [pricing](https://help.aliyun.com/zh/cpns/product-overview/pricing-of-cpns).
   * - Before you use this API, log on to the Phone Number Intelligence console and apply for the required tag on the [Tag Plaza](https://dytns.console.aliyun.com/analysis/square) page.
   * - You are charged for a call only when the response returns `Code=\\"OK\\"` and `IsConsistent != 0`. No charges are incurred for any other results.
   * - Verification of China Broadcasting Network numbers (numbers with the 192 prefix) is not supported. If you provide a number with the 192 prefix, an HTTP 400 error is returned.
   * - Due to number portability, the actual carrier may differ from the current carrier of record. You can use the `Carrier` parameter to route the query to a specific carrier.
   * - The queries per second (QPS) limit per user is 200. Requests that exceed this limit are throttled.
   * - In the authorization information, the action is `dytns:HistoryThreeElementsVerification`, the access level is Read, and the resource type is All Resources.
   * 
   * @param request - HistoryThreeElementsVerificationRequest
   * @returns HistoryThreeElementsVerificationResponse
   */
  async historyThreeElementsVerification(request: $_model.HistoryThreeElementsVerificationRequest): Promise<$_model.HistoryThreeElementsVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.historyThreeElementsVerificationWithOptions(request, runtime);
  }

  /**
   * Performs invalid phone number filtering operations.
   * 
   * @remarks
   * Before you call this operation, log on to the Cell Phone Number Service console. On the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply for Activation**, and submit the application materials. You can use this operation after the application is approved.
   * ### QPS limit
   * The QPS limit per user for this operation is 1,000 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call the operation at a reasonable frequency.
   * 
   * @param request - InvalidPhoneNumberFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvalidPhoneNumberFilterResponse
   */
  async invalidPhoneNumberFilterWithOptions(request: $_model.InvalidPhoneNumberFilterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InvalidPhoneNumberFilterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvalidPhoneNumberFilter",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvalidPhoneNumberFilterResponse>(await this.callApi(params, req, runtime), new $_model.InvalidPhoneNumberFilterResponse({}));
  }

  /**
   * Performs invalid phone number filtering operations.
   * 
   * @remarks
   * Before you call this operation, log on to the Cell Phone Number Service console. On the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply for Activation**, and submit the application materials. You can use this operation after the application is approved.
   * ### QPS limit
   * The QPS limit per user for this operation is 1,000 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call the operation at a reasonable frequency.
   * 
   * @param request - InvalidPhoneNumberFilterRequest
   * @returns InvalidPhoneNumberFilterResponse
   */
  async invalidPhoneNumberFilter(request: $_model.InvalidPhoneNumberFilterRequest): Promise<$_model.InvalidPhoneNumberFilterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.invalidPhoneNumberFilterWithOptions(request, runtime);
  }

  /**
   * Lists the alert contacts for Number Encyclopedia.
   * 
   * @remarks
   * - Before using this API, ensure that you have activated Number Encyclopedia.
   * 
   * @param request - ListContactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContactsResponse
   */
  async listContactsWithOptions(request: $_model.ListContactsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContactsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListContacts",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContactsResponse>(await this.callApi(params, req, runtime), new $_model.ListContactsResponse({}));
  }

  /**
   * Lists the alert contacts for Number Encyclopedia.
   * 
   * @remarks
   * - Before using this API, ensure that you have activated Number Encyclopedia.
   * 
   * @param request - ListContactsRequest
   * @returns ListContactsResponse
   */
  async listContacts(request: $_model.ListContactsRequest): Promise<$_model.ListContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContactsWithOptions(request, runtime);
  }

  /**
   * @param request - PhoneNumberConvertServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PhoneNumberConvertServiceResponse
   */
  async phoneNumberConvertServiceWithOptions(request: $_model.PhoneNumberConvertServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PhoneNumberConvertServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PhoneNumberConvertService",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PhoneNumberConvertServiceResponse>(await this.callApi(params, req, runtime), new $_model.PhoneNumberConvertServiceResponse({}));
  }

  /**
   * @param request - PhoneNumberConvertServiceRequest
   * @returns PhoneNumberConvertServiceResponse
   */
  async phoneNumberConvertService(request: $_model.PhoneNumberConvertServiceRequest): Promise<$_model.PhoneNumberConvertServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.phoneNumberConvertServiceWithOptions(request, runtime);
  }

  /**
   * Encrypts an original phone number into a virtual phone number that starts with 140. By integrating with Alibaba Cloud communication services, you can use the encrypted 140 phone number to initiate voice calls, achieving the effect of a virtual phone number call.
   * 
   * @remarks
   * Before you use this API, log on to the Cell Phone Number Service console, go to the [Tag Plaza](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply for Activation**, and fill in the application materials. You can use this API after the application is approved.
   * ### QPS limit
   * The per-user QPS limit of this API is 1,000 calls per second. If the number of API calls exceeds the limit, the calls will be throttled, which may affect your business. Call the API properly.
   * 
   * @param request - PhoneNumberEncryptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PhoneNumberEncryptResponse
   */
  async phoneNumberEncryptWithOptions(request: $_model.PhoneNumberEncryptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PhoneNumberEncryptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PhoneNumberEncrypt",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PhoneNumberEncryptResponse>(await this.callApi(params, req, runtime), new $_model.PhoneNumberEncryptResponse({}));
  }

  /**
   * Encrypts an original phone number into a virtual phone number that starts with 140. By integrating with Alibaba Cloud communication services, you can use the encrypted 140 phone number to initiate voice calls, achieving the effect of a virtual phone number call.
   * 
   * @remarks
   * Before you use this API, log on to the Cell Phone Number Service console, go to the [Tag Plaza](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply for Activation**, and fill in the application materials. You can use this API after the application is approved.
   * ### QPS limit
   * The per-user QPS limit of this API is 1,000 calls per second. If the number of API calls exceeds the limit, the calls will be throttled, which may affect your business. Call the API properly.
   * 
   * @param request - PhoneNumberEncryptRequest
   * @returns PhoneNumberEncryptResponse
   */
  async phoneNumberEncrypt(request: $_model.PhoneNumberEncryptRequest): Promise<$_model.PhoneNumberEncryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.phoneNumberEncryptWithOptions(request, runtime);
  }

  /**
   * Retrieves the real-time network status of a mobile phone number, such as active, shutdown, or non-existent. You can query numbers that are in plaintext or hashed using MD5 or SHA256.
   * 
   * @remarks
   * - **Before you use this operation, make sure that you fully understand the [pricing](https://help.aliyun.com/document_detail/154751.html) of Phone Number Intelligence.**
   * - By default, only an Alibaba Cloud account can call this operation. A RAM user can call this operation only after receiving the required permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * - Before you use this operation, log on to the Phone Number Intelligence console. On the [Tag Plaza](https://dytns.console.aliyun.com/analysis/square) page, find the required tag, click **Apply**, and then submit the required information. You can use this operation once your application is approved.
   * - The phone number status query feature supports numbers from China Telecom, China Unicom, and China Mobile. This feature does not support numbers from China Broadnet. If you call this operation to query a China Broadnet number, the API returns the error code `OperatorLimit`, which indicates that the query is prohibited by the carrier.
   * ### QPS limit
   * This operation has a queries per second (QPS) limit of 300 per user. If you exceed this limit, your API calls are throttled, which may affect your services. We recommend that you call this operation at a reasonable frequency.
   * 
   * @param request - PhoneNumberStatusForAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PhoneNumberStatusForAccountResponse
   */
  async phoneNumberStatusForAccountWithOptions(request: $_model.PhoneNumberStatusForAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PhoneNumberStatusForAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PhoneNumberStatusForAccount",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PhoneNumberStatusForAccountResponse>(await this.callApi(params, req, runtime), new $_model.PhoneNumberStatusForAccountResponse({}));
  }

  /**
   * Retrieves the real-time network status of a mobile phone number, such as active, shutdown, or non-existent. You can query numbers that are in plaintext or hashed using MD5 or SHA256.
   * 
   * @remarks
   * - **Before you use this operation, make sure that you fully understand the [pricing](https://help.aliyun.com/document_detail/154751.html) of Phone Number Intelligence.**
   * - By default, only an Alibaba Cloud account can call this operation. A RAM user can call this operation only after receiving the required permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * - Before you use this operation, log on to the Phone Number Intelligence console. On the [Tag Plaza](https://dytns.console.aliyun.com/analysis/square) page, find the required tag, click **Apply**, and then submit the required information. You can use this operation once your application is approved.
   * - The phone number status query feature supports numbers from China Telecom, China Unicom, and China Mobile. This feature does not support numbers from China Broadnet. If you call this operation to query a China Broadnet number, the API returns the error code `OperatorLimit`, which indicates that the query is prohibited by the carrier.
   * ### QPS limit
   * This operation has a queries per second (QPS) limit of 300 per user. If you exceed this limit, your API calls are throttled, which may affect your services. We recommend that you call this operation at a reasonable frequency.
   * 
   * @param request - PhoneNumberStatusForAccountRequest
   * @returns PhoneNumberStatusForAccountResponse
   */
  async phoneNumberStatusForAccount(request: $_model.PhoneNumberStatusForAccountRequest): Promise<$_model.PhoneNumberStatusForAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.phoneNumberStatusForAccountWithOptions(request, runtime);
  }

  /**
   * Queries the real-time status of a mobile phone number to determine whether it is in service, suspended, or non-existent. This operation supports queries for plaintext numbers or numbers encrypted with MD5 or SHA256.
   * 
   * @remarks
   * - **Before you call this operation, make sure that you fully understand the [pricing](https://help.aliyun.com/document_detail/154751.html) of Phone Number Intelligence.**
   * - By default, only an Alibaba Cloud account can call this operation. A RAM user must be granted the required permissions before calling this operation. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * - Before calling this operation, log on to the Phone Number Intelligence console. On the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the required tag, click **Apply**, and submit your application. You can use the operation after your application is approved.
   * - The number status query feature supports numbers from China Telecom, China Unicom, and China Mobile, but does not support numbers from China Broadnet. If you call this operation to query the status of a China Broadnet number, the `OperatorLimit` error code is returned, which indicates that the query is prohibited by the carrier.
   * ### QPS limit
   * The queries per second (QPS) limit for each user is 300. API calls that exceed this limit are throttled. To avoid business disruptions, plan your calls accordingly.
   * 
   * @param request - PhoneNumberStatusForPublicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PhoneNumberStatusForPublicResponse
   */
  async phoneNumberStatusForPublicWithOptions(request: $_model.PhoneNumberStatusForPublicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PhoneNumberStatusForPublicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PhoneNumberStatusForPublic",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PhoneNumberStatusForPublicResponse>(await this.callApi(params, req, runtime), new $_model.PhoneNumberStatusForPublicResponse({}));
  }

  /**
   * Queries the real-time status of a mobile phone number to determine whether it is in service, suspended, or non-existent. This operation supports queries for plaintext numbers or numbers encrypted with MD5 or SHA256.
   * 
   * @remarks
   * - **Before you call this operation, make sure that you fully understand the [pricing](https://help.aliyun.com/document_detail/154751.html) of Phone Number Intelligence.**
   * - By default, only an Alibaba Cloud account can call this operation. A RAM user must be granted the required permissions before calling this operation. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * - Before calling this operation, log on to the Phone Number Intelligence console. On the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the required tag, click **Apply**, and submit your application. You can use the operation after your application is approved.
   * - The number status query feature supports numbers from China Telecom, China Unicom, and China Mobile, but does not support numbers from China Broadnet. If you call this operation to query the status of a China Broadnet number, the `OperatorLimit` error code is returned, which indicates that the query is prohibited by the carrier.
   * ### QPS limit
   * The queries per second (QPS) limit for each user is 300. API calls that exceed this limit are throttled. To avoid business disruptions, plan your calls accordingly.
   * 
   * @param request - PhoneNumberStatusForPublicRequest
   * @returns PhoneNumberStatusForPublicResponse
   */
  async phoneNumberStatusForPublic(request: $_model.PhoneNumberStatusForPublicRequest): Promise<$_model.PhoneNumberStatusForPublicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.phoneNumberStatusForPublicWithOptions(request, runtime);
  }

  /**
   * Queries the real-time status of a mobile phone number, such as normal, suspended, or not in service. This operation supports queries for phone numbers that are in plaintext or encrypted by using MD5, SHA256, or SM3.
   * 
   * @remarks
   * - **Before calling this operation, ensure you fully understand the [pricing](https://help.aliyun.com/document_detail/154751.html) of Phone Number Intelligence.**
   * - By default, only an Alibaba Cloud account can call this operation. To allow a RAM user to call this operation, you must first grant the required permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * - Before you call this operation, log on to the Phone Number Intelligence console. On the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the required tag, click **Request Activation**, and then submit your application. You can call this operation only after your application is approved.
   * - This operation supports phone numbers from China Telecom, China Unicom, and China Mobile. Numbers from China Broadnet are not supported. If you call this operation to query a China Broadnet number, the API returns the error code `OperatorLimit` and an error message indicating that the query is restricted by the carrier.
   * ### QPS limit
   * The QPS limit for this operation is 300 queries per second (QPS) per user. The system throttles calls that exceed this limit, which may affect your business. Plan your calls accordingly.
   * 
   * @param request - PhoneNumberStatusForRealRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PhoneNumberStatusForRealResponse
   */
  async phoneNumberStatusForRealWithOptions(request: $_model.PhoneNumberStatusForRealRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PhoneNumberStatusForRealResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PhoneNumberStatusForReal",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PhoneNumberStatusForRealResponse>(await this.callApi(params, req, runtime), new $_model.PhoneNumberStatusForRealResponse({}));
  }

  /**
   * Queries the real-time status of a mobile phone number, such as normal, suspended, or not in service. This operation supports queries for phone numbers that are in plaintext or encrypted by using MD5, SHA256, or SM3.
   * 
   * @remarks
   * - **Before calling this operation, ensure you fully understand the [pricing](https://help.aliyun.com/document_detail/154751.html) of Phone Number Intelligence.**
   * - By default, only an Alibaba Cloud account can call this operation. To allow a RAM user to call this operation, you must first grant the required permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * - Before you call this operation, log on to the Phone Number Intelligence console. On the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the required tag, click **Request Activation**, and then submit your application. You can call this operation only after your application is approved.
   * - This operation supports phone numbers from China Telecom, China Unicom, and China Mobile. Numbers from China Broadnet are not supported. If you call this operation to query a China Broadnet number, the API returns the error code `OperatorLimit` and an error message indicating that the query is restricted by the carrier.
   * ### QPS limit
   * The QPS limit for this operation is 300 queries per second (QPS) per user. The system throttles calls that exceed this limit, which may affect your business. Plan your calls accordingly.
   * 
   * @param request - PhoneNumberStatusForRealRequest
   * @returns PhoneNumberStatusForRealResponse
   */
  async phoneNumberStatusForReal(request: $_model.PhoneNumberStatusForRealRequest): Promise<$_model.PhoneNumberStatusForRealResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.phoneNumberStatusForRealWithOptions(request, runtime);
  }

  /**
   * Retrieves the real-time network status of a phone number, such as active, shutdown, or non-existent. This operation supports queries for numbers in plaintext or numbers encrypted by using MD5, SHA256, or SM3.
   * 
   * @remarks
   * - **Before you call this operation, make sure you understand the [Product Pricing](https://help.aliyun.com/document_detail/154751.html) of Phone Number Pedia**.
   * - By default, only an Alibaba Cloud account can call this operation. A RAM user can call this operation only after being granted the required permissions. For more information, see [Grant permissions to a RAM user](https://help.aliyun.com/document_detail/154006.html).
   * - Before calling this operation, log on to the Phone Number Pedia console. On the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the required tag, click **Request Activation**, and then complete the application form. You can use this operation only after your application is approved.
   * - This feature supports phone numbers from China Telecom, China Unicom, and China Mobile, but does not support phone numbers from China Broadnet. If you call this operation to query the status of a China Broadnet number, the `OperatorLimit` error code and the "The number is limited by the operator." message are returned.
   * ### QPS limit
   * This operation is limited to 300 queries per second (QPS) for each user. Calls that exceed this limit are throttled, which may affect your business. Plan your calls accordingly.
   * 
   * @param request - PhoneNumberStatusForSmsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PhoneNumberStatusForSmsResponse
   */
  async phoneNumberStatusForSmsWithOptions(request: $_model.PhoneNumberStatusForSmsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PhoneNumberStatusForSmsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PhoneNumberStatusForSms",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PhoneNumberStatusForSmsResponse>(await this.callApi(params, req, runtime), new $_model.PhoneNumberStatusForSmsResponse({}));
  }

  /**
   * Retrieves the real-time network status of a phone number, such as active, shutdown, or non-existent. This operation supports queries for numbers in plaintext or numbers encrypted by using MD5, SHA256, or SM3.
   * 
   * @remarks
   * - **Before you call this operation, make sure you understand the [Product Pricing](https://help.aliyun.com/document_detail/154751.html) of Phone Number Pedia**.
   * - By default, only an Alibaba Cloud account can call this operation. A RAM user can call this operation only after being granted the required permissions. For more information, see [Grant permissions to a RAM user](https://help.aliyun.com/document_detail/154006.html).
   * - Before calling this operation, log on to the Phone Number Pedia console. On the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the required tag, click **Request Activation**, and then complete the application form. You can use this operation only after your application is approved.
   * - This feature supports phone numbers from China Telecom, China Unicom, and China Mobile, but does not support phone numbers from China Broadnet. If you call this operation to query the status of a China Broadnet number, the `OperatorLimit` error code and the "The number is limited by the operator." message are returned.
   * ### QPS limit
   * This operation is limited to 300 queries per second (QPS) for each user. Calls that exceed this limit are throttled, which may affect your business. Plan your calls accordingly.
   * 
   * @param request - PhoneNumberStatusForSmsRequest
   * @returns PhoneNumberStatusForSmsResponse
   */
  async phoneNumberStatusForSms(request: $_model.PhoneNumberStatusForSmsRequest): Promise<$_model.PhoneNumberStatusForSmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.phoneNumberStatusForSmsWithOptions(request, runtime);
  }

  /**
   * Queries the real-time network status of a mobile phone number, such as normal, shutdown, or non-existent. This operation supports queries for numbers in plaintext and numbers encrypted by using MD5, SHA256, or SM3.
   * 
   * @remarks
   * - **Before you use this API, make sure that you understand the [pricing](https://help.aliyun.com/document_detail/154751.html) of Phone Number Encyclopedia**.
   * - By default, only Alibaba Cloud accounts can call this API. To allow a RAM user to do so, you must grant them the required permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * - Before you use this API, log in to the Phone Number Encyclopedia console. On the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the required tag, click **Apply for Access**, and then complete the application form. You can call this API after your application is approved.
   * - This feature supports phone numbers from China Telecom, China Unicom, and China Mobile, but not from China Broadnet. If you query a China Broadnet number, the `OperatorLimit` error code and an error message are returned: The number is limited by the operator.
   * ### QPS limit
   * The QPS limit for a single user is 300 queries per second. If you exceed this limit, the system throttles your API calls, which may impact your business. To avoid interruptions, call this API at a reasonable rate.
   * 
   * @param request - PhoneNumberStatusForVoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PhoneNumberStatusForVoiceResponse
   */
  async phoneNumberStatusForVoiceWithOptions(request: $_model.PhoneNumberStatusForVoiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PhoneNumberStatusForVoiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PhoneNumberStatusForVoice",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PhoneNumberStatusForVoiceResponse>(await this.callApi(params, req, runtime), new $_model.PhoneNumberStatusForVoiceResponse({}));
  }

  /**
   * Queries the real-time network status of a mobile phone number, such as normal, shutdown, or non-existent. This operation supports queries for numbers in plaintext and numbers encrypted by using MD5, SHA256, or SM3.
   * 
   * @remarks
   * - **Before you use this API, make sure that you understand the [pricing](https://help.aliyun.com/document_detail/154751.html) of Phone Number Encyclopedia**.
   * - By default, only Alibaba Cloud accounts can call this API. To allow a RAM user to do so, you must grant them the required permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * - Before you use this API, log in to the Phone Number Encyclopedia console. On the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the required tag, click **Apply for Access**, and then complete the application form. You can call this API after your application is approved.
   * - This feature supports phone numbers from China Telecom, China Unicom, and China Mobile, but not from China Broadnet. If you query a China Broadnet number, the `OperatorLimit` error code and an error message are returned: The number is limited by the operator.
   * ### QPS limit
   * The QPS limit for a single user is 300 queries per second. If you exceed this limit, the system throttles your API calls, which may impact your business. To avoid interruptions, call this API at a reasonable rate.
   * 
   * @param request - PhoneNumberStatusForVoiceRequest
   * @returns PhoneNumberStatusForVoiceResponse
   */
  async phoneNumberStatusForVoice(request: $_model.PhoneNumberStatusForVoiceRequest): Promise<$_model.PhoneNumberStatusForVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.phoneNumberStatusForVoiceWithOptions(request, runtime);
  }

  /**
   * Queries available authorization codes.
   * 
   * @param request - QueryAvailableAuthCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAvailableAuthCodeResponse
   */
  async queryAvailableAuthCodeWithOptions(request: $_model.QueryAvailableAuthCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAvailableAuthCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAvailableAuthCode",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAvailableAuthCodeResponse>(await this.callApi(params, req, runtime), new $_model.QueryAvailableAuthCodeResponse({}));
  }

  /**
   * Queries available authorization codes.
   * 
   * @param request - QueryAvailableAuthCodeRequest
   * @returns QueryAvailableAuthCodeResponse
   */
  async queryAvailableAuthCode(request: $_model.QueryAvailableAuthCodeRequest): Promise<$_model.QueryAvailableAuthCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAvailableAuthCodeWithOptions(request, runtime);
  }

  /**
   * Queries package type information.
   * 
   * @param request - QueryPackageTypeInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPackageTypeInfoResponse
   */
  async queryPackageTypeInfoWithOptions(request: $_model.QueryPackageTypeInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPackageTypeInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.productName)) {
      query["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPackageTypeInfo",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPackageTypeInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryPackageTypeInfoResponse({}));
  }

  /**
   * Queries package type information.
   * 
   * @param request - QueryPackageTypeInfoRequest
   * @returns QueryPackageTypeInfoResponse
   */
  async queryPackageTypeInfo(request: $_model.QueryPackageTypeInfoRequest): Promise<$_model.QueryPackageTypeInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPackageTypeInfoWithOptions(request, runtime);
  }

  /**
   * 在网时长专用接口
   * 
   * @param request - QueryPhoneNumberOnlineTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPhoneNumberOnlineTimeResponse
   */
  async queryPhoneNumberOnlineTimeWithOptions(request: $_model.QueryPhoneNumberOnlineTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPhoneNumberOnlineTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPhoneNumberOnlineTime",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPhoneNumberOnlineTimeResponse>(await this.callApi(params, req, runtime), new $_model.QueryPhoneNumberOnlineTimeResponse({}));
  }

  /**
   * 在网时长专用接口
   * 
   * @param request - QueryPhoneNumberOnlineTimeRequest
   * @returns QueryPhoneNumberOnlineTimeResponse
   */
  async queryPhoneNumberOnlineTime(request: $_model.QueryPhoneNumberOnlineTimeRequest): Promise<$_model.QueryPhoneNumberOnlineTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPhoneNumberOnlineTimeWithOptions(request, runtime);
  }

  /**
   * 二次号携号转网号码查询
   * 
   * @param request - QueryPhoneTwiceTelVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPhoneTwiceTelVerifyResponse
   */
  async queryPhoneTwiceTelVerifyWithOptions(request: $_model.QueryPhoneTwiceTelVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPhoneTwiceTelVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPhoneTwiceTelVerify",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPhoneTwiceTelVerifyResponse>(await this.callApi(params, req, runtime), new $_model.QueryPhoneTwiceTelVerifyResponse({}));
  }

  /**
   * 二次号携号转网号码查询
   * 
   * @param request - QueryPhoneTwiceTelVerifyRequest
   * @returns QueryPhoneTwiceTelVerifyResponse
   */
  async queryPhoneTwiceTelVerify(request: $_model.QueryPhoneTwiceTelVerifyRequest): Promise<$_model.QueryPhoneTwiceTelVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPhoneTwiceTelVerifyWithOptions(request, runtime);
  }

  /**
   * Queries tag application rules.
   * 
   * @param request - QueryTagApplyRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTagApplyRuleResponse
   */
  async queryTagApplyRuleWithOptions(request: $_model.QueryTagApplyRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTagApplyRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTagApplyRule",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTagApplyRuleResponse>(await this.callApi(params, req, runtime), new $_model.QueryTagApplyRuleResponse({}));
  }

  /**
   * Queries tag application rules.
   * 
   * @param request - QueryTagApplyRuleRequest
   * @returns QueryTagApplyRuleResponse
   */
  async queryTagApplyRule(request: $_model.QueryTagApplyRuleRequest): Promise<$_model.QueryTagApplyRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTagApplyRuleWithOptions(request, runtime);
  }

  /**
   * Queries tag information.
   * 
   * @param request - QueryTagInfoBySelectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTagInfoBySelectionResponse
   */
  async queryTagInfoBySelectionWithOptions(request: $_model.QueryTagInfoBySelectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTagInfoBySelectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.industryId)) {
      query["IndustryId"] = request.industryId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTagInfoBySelection",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTagInfoBySelectionResponse>(await this.callApi(params, req, runtime), new $_model.QueryTagInfoBySelectionResponse({}));
  }

  /**
   * Queries tag information.
   * 
   * @param request - QueryTagInfoBySelectionRequest
   * @returns QueryTagInfoBySelectionResponse
   */
  async queryTagInfoBySelection(request: $_model.QueryTagInfoBySelectionRequest): Promise<$_model.QueryTagInfoBySelectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTagInfoBySelectionWithOptions(request, runtime);
  }

  /**
   * Queries the tag list by page.
   * 
   * @param request - QueryTagListPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTagListPageResponse
   */
  async queryTagListPageWithOptions(request: $_model.QueryTagListPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTagListPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTagListPage",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTagListPageResponse>(await this.callApi(params, req, runtime), new $_model.QueryTagListPageResponse({}));
  }

  /**
   * Queries the tag list by page.
   * 
   * @param request - QueryTagListPageRequest
   * @returns QueryTagListPageResponse
   */
  async queryTagListPage(request: $_model.QueryTagListPageRequest): Promise<$_model.QueryTagListPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTagListPageWithOptions(request, runtime);
  }

  /**
   * Queries a list of offline tasks.
   * 
   * @param tmpReq - QueryTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskListResponse
   */
  async queryTaskListWithOptions(tmpReq: $_model.QueryTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTaskListResponse> {
    tmpReq.validate();
    let request = new $_model.QueryTaskListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.result)) {
      request.resultShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.result, "Result", "json");
    }

    if (!$dara.isNull(tmpReq.taskType)) {
      request.taskTypeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskType, "TaskType", "json");
    }

    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resultShrink)) {
      query["Result"] = request.resultShrink;
    }

    if (!$dara.isNull(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskTypeShrink)) {
      query["TaskType"] = request.taskTypeShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTaskList",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTaskListResponse>(await this.callApi(params, req, runtime), new $_model.QueryTaskListResponse({}));
  }

  /**
   * Queries a list of offline tasks.
   * 
   * @param request - QueryTaskListRequest
   * @returns QueryTaskListResponse
   */
  async queryTaskList(request: $_model.QueryTaskListRequest): Promise<$_model.QueryTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTaskListWithOptions(request, runtime);
  }

  /**
   * Queries usage statistics by tag ID.
   * 
   * @param request - QueryUsageStatisticsByTagIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUsageStatisticsByTagIdResponse
   */
  async queryUsageStatisticsByTagIdWithOptions(request: $_model.QueryUsageStatisticsByTagIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUsageStatisticsByTagIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUsageStatisticsByTagId",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUsageStatisticsByTagIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryUsageStatisticsByTagIdResponse({}));
  }

  /**
   * Queries usage statistics by tag ID.
   * 
   * @param request - QueryUsageStatisticsByTagIdRequest
   * @returns QueryUsageStatisticsByTagIdResponse
   */
  async queryUsageStatisticsByTagId(request: $_model.QueryUsageStatisticsByTagIdRequest): Promise<$_model.QueryUsageStatisticsByTagIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUsageStatisticsByTagIdWithOptions(request, runtime);
  }

  /**
   * Saves an alert contact.
   * 
   * @remarks
   * - Before you call this operation, ensure you have activated Phone Number Intelligence.
   * 
   * @param request - SaveContactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveContactsResponse
   */
  async saveContactsWithOptions(request: $_model.SaveContactsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveContactsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.contactEmail)) {
      query["ContactEmail"] = request.contactEmail;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.contactPhone)) {
      query["ContactPhone"] = request.contactPhone;
    }

    if (!$dara.isNull(request.mailStatus)) {
      query["MailStatus"] = request.mailStatus;
    }

    if (!$dara.isNull(request.openStatusWarning)) {
      query["OpenStatusWarning"] = request.openStatusWarning;
    }

    if (!$dara.isNull(request.opentAttributionWarning)) {
      query["OpentAttributionWarning"] = request.opentAttributionWarning;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneStatus)) {
      query["PhoneStatus"] = request.phoneStatus;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveContacts",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveContactsResponse>(await this.callApi(params, req, runtime), new $_model.SaveContactsResponse({}));
  }

  /**
   * Saves an alert contact.
   * 
   * @remarks
   * - Before you call this operation, ensure you have activated Phone Number Intelligence.
   * 
   * @param request - SaveContactsRequest
   * @returns SaveContactsResponse
   */
  async saveContacts(request: $_model.SaveContactsRequest): Promise<$_model.SaveContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveContactsWithOptions(request, runtime);
  }

  /**
   * Verification of three elements (name, mobile phone number, and ID card number). Used to verify whether the name, mobile phone number, and ID card number entered by a user belong to the same user.
   * 
   * @remarks
   * - Before you call this API, make sure that you have fully understood the [pricing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * - Before you call this API, log on to the Cell Phone Number Service console, go to the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply for Activation**, fill in the application materials, and call the API after the application is approved.
   * - Billing applies when the API returns Code=\\"OK\\" and IsConsistent != 2. Other return results are not billed.
   * - The verification of virtual carrier numbers is not supported. Virtual carrier numbers refer to numbers that start with 170, 171, 162, or 165.
   * ### QPS limit
   * The QPS limit per user for this API is 200 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call the API in a reasonable manner.
   * 
   * @param request - ThreeElementsVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ThreeElementsVerificationResponse
   */
  async threeElementsVerificationWithOptions(request: $_model.ThreeElementsVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ThreeElementsVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.certCode)) {
      query["CertCode"] = request.certCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ThreeElementsVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ThreeElementsVerificationResponse>(await this.callApi(params, req, runtime), new $_model.ThreeElementsVerificationResponse({}));
  }

  /**
   * Verification of three elements (name, mobile phone number, and ID card number). Used to verify whether the name, mobile phone number, and ID card number entered by a user belong to the same user.
   * 
   * @remarks
   * - Before you call this API, make sure that you have fully understood the [pricing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * - Before you call this API, log on to the Cell Phone Number Service console, go to the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply for Activation**, fill in the application materials, and call the API after the application is approved.
   * - Billing applies when the API returns Code=\\"OK\\" and IsConsistent != 2. Other return results are not billed.
   * - The verification of virtual carrier numbers is not supported. Virtual carrier numbers refer to numbers that start with 170, 171, 162, or 165.
   * ### QPS limit
   * The QPS limit per user for this API is 200 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call the API in a reasonable manner.
   * 
   * @param request - ThreeElementsVerificationRequest
   * @returns ThreeElementsVerificationResponse
   */
  async threeElementsVerification(request: $_model.ThreeElementsVerificationRequest): Promise<$_model.ThreeElementsVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.threeElementsVerificationWithOptions(request, runtime);
  }

  /**
   * Two-element (name and phone number) verification. Used to compare whether the name and phone number entered by the user belong to the same user.
   * 
   * @remarks
   * - Before using this API, ensure that you fully understand the [product pricing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * - Before using this API, log on to the Cell Phone Number Service console, go to the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply to Enable**, fill in the application materials, and use it after the approval.
   * - Billing is applied when the API returns Code="OK" and IsConsistent != 2. Other return results are not billed.
   * - MVNO number verification is not supported. MVNO numbers refer to numbers starting with 170, 171, 162, and 165.
   * ### QPS limit
   * The per-user QPS limit of this API is 200 times/second. If the limit is exceeded, API calls will be throttled, which may affect your business. Please call the API reasonably.
   * 
   * @param request - TwoElementsVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TwoElementsVerificationResponse
   */
  async twoElementsVerificationWithOptions(request: $_model.TwoElementsVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TwoElementsVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TwoElementsVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TwoElementsVerificationResponse>(await this.callApi(params, req, runtime), new $_model.TwoElementsVerificationResponse({}));
  }

  /**
   * Two-element (name and phone number) verification. Used to compare whether the name and phone number entered by the user belong to the same user.
   * 
   * @remarks
   * - Before using this API, ensure that you fully understand the [product pricing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * - Before using this API, log on to the Cell Phone Number Service console, go to the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, find the corresponding tag, click **Apply to Enable**, fill in the application materials, and use it after the approval.
   * - Billing is applied when the API returns Code="OK" and IsConsistent != 2. Other return results are not billed.
   * - MVNO number verification is not supported. MVNO numbers refer to numbers starting with 170, 171, 162, and 165.
   * ### QPS limit
   * The per-user QPS limit of this API is 200 times/second. If the limit is exceeded, API calls will be throttled, which may affect your business. Please call the API reasonably.
   * 
   * @param request - TwoElementsVerificationRequest
   * @returns TwoElementsVerificationResponse
   */
  async twoElementsVerification(request: $_model.TwoElementsVerificationRequest): Promise<$_model.TwoElementsVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.twoElementsVerificationWithOptions(request, runtime);
  }

  /**
   * UAID采集
   * 
   * @param request - UAIDCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UAIDCollectionResponse
   */
  async uAIDCollectionWithOptions(request: $_model.UAIDCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UAIDCollectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.carrier)) {
      query["Carrier"] = request.carrier;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.userGrantId)) {
      query["UserGrantId"] = request.userGrantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UAIDCollection",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UAIDCollectionResponse>(await this.callApi(params, req, runtime), new $_model.UAIDCollectionResponse({}));
  }

  /**
   * UAID采集
   * 
   * @param request - UAIDCollectionRequest
   * @returns UAIDCollectionResponse
   */
  async uAIDCollection(request: $_model.UAIDCollectionRequest): Promise<$_model.UAIDCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uAIDCollectionWithOptions(request, runtime);
  }

  /**
   * uaid号码转换服务
   * 
   * @param request - UAIDConversionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UAIDConversionResponse
   */
  async uAIDConversionWithOptions(request: $_model.UAIDConversionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UAIDConversionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.carrier)) {
      query["Carrier"] = request.carrier;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.uaidList)) {
      query["UaidList"] = request.uaidList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UAIDConversion",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UAIDConversionResponse>(await this.callApi(params, req, runtime), new $_model.UAIDConversionResponse({}));
  }

  /**
   * uaid号码转换服务
   * 
   * @param request - UAIDConversionRequest
   * @returns UAIDConversionResponse
   */
  async uAIDConversion(request: $_model.UAIDConversionRequest): Promise<$_model.UAIDConversionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uAIDConversionWithOptions(request, runtime);
  }

  /**
   * Obtains a UAID based on the carrier authorization token.
   * For information about how to obtain the authorization token and its signature, see the GetUAIDApplyTokenSign API documentation.
   * A UAID is 64 characters in length. The first 32 characters describe the device information, and the last 32 characters describe the phone number information.
   * 
   * @remarks
   * Before you call this API, make sure that you have fully understood the billing method and [pricing](https://www.aliyun.com/price/product#/dytns/detail/dytns_penqbag_public_cn) of Cell Phone Number Service.  
   * Obtains a UAID based on the carrier authorization token.  
   * For information about how to obtain the authorization token and its signature, see the GetUAIDApplyTokenSign API documentation.
   * 
   * @param request - UAIDVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UAIDVerificationResponse
   */
  async uAIDVerificationWithOptions(request: $_model.UAIDVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UAIDVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.carrier)) {
      query["Carrier"] = request.carrier;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.userGrantId)) {
      query["UserGrantId"] = request.userGrantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UAIDVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UAIDVerificationResponse>(await this.callApi(params, req, runtime), new $_model.UAIDVerificationResponse({}));
  }

  /**
   * Obtains a UAID based on the carrier authorization token.
   * For information about how to obtain the authorization token and its signature, see the GetUAIDApplyTokenSign API documentation.
   * A UAID is 64 characters in length. The first 32 characters describe the device information, and the last 32 characters describe the phone number information.
   * 
   * @remarks
   * Before you call this API, make sure that you have fully understood the billing method and [pricing](https://www.aliyun.com/price/product#/dytns/detail/dytns_penqbag_public_cn) of Cell Phone Number Service.  
   * Obtains a UAID based on the carrier authorization token.  
   * For information about how to obtain the authorization token and its signature, see the GetUAIDApplyTokenSign API documentation.
   * 
   * @param request - UAIDVerificationRequest
   * @returns UAIDVerificationResponse
   */
  async uAIDVerification(request: $_model.UAIDVerificationRequest): Promise<$_model.UAIDVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uAIDVerificationWithOptions(request, runtime);
  }

  /**
   * Updates an alert contact.
   * 
   * @remarks
   * - Ensure that you have activated the Phone Number Information Service before calling this operation.
   * 
   * @param request - UpdateContactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContactsResponse
   */
  async updateContactsWithOptions(request: $_model.UpdateContactsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContactsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactEmail)) {
      query["ContactEmail"] = request.contactEmail;
    }

    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.contactPhone)) {
      query["ContactPhone"] = request.contactPhone;
    }

    if (!$dara.isNull(request.mailStatus)) {
      query["MailStatus"] = request.mailStatus;
    }

    if (!$dara.isNull(request.openStatusWarning)) {
      query["OpenStatusWarning"] = request.openStatusWarning;
    }

    if (!$dara.isNull(request.opentAttributionWarning)) {
      query["OpentAttributionWarning"] = request.opentAttributionWarning;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneStatus)) {
      query["PhoneStatus"] = request.phoneStatus;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateContacts",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContactsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContactsResponse({}));
  }

  /**
   * Updates an alert contact.
   * 
   * @remarks
   * - Ensure that you have activated the Phone Number Information Service before calling this operation.
   * 
   * @param request - UpdateContactsRequest
   * @returns UpdateContactsResponse
   */
  async updateContacts(request: $_model.UpdateContactsRequest): Promise<$_model.UpdateContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateContactsWithOptions(request, runtime);
  }

  /**
   * 虚商三要素
   * 
   * @param request - VirtualThreeElementsVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VirtualThreeElementsVerificationResponse
   */
  async virtualThreeElementsVerificationWithOptions(request: $_model.VirtualThreeElementsVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VirtualThreeElementsVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.certCode)) {
      query["CertCode"] = request.certCode;
    }

    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VirtualThreeElementsVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VirtualThreeElementsVerificationResponse>(await this.callApi(params, req, runtime), new $_model.VirtualThreeElementsVerificationResponse({}));
  }

  /**
   * 虚商三要素
   * 
   * @param request - VirtualThreeElementsVerificationRequest
   * @returns VirtualThreeElementsVerificationResponse
   */
  async virtualThreeElementsVerification(request: $_model.VirtualThreeElementsVerificationRequest): Promise<$_model.VirtualThreeElementsVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.virtualThreeElementsVerificationWithOptions(request, runtime);
  }

}
