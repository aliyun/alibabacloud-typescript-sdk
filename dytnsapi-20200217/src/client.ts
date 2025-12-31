// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
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
   * 身份证三要素
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
   * 身份证三要素
   * 
   * @param request - CertNoThreeElementVerificationRequest
   * @returns CertNoThreeElementVerificationResponse
   */
  async certNoThreeElementVerification(request: $_model.CertNoThreeElementVerificationRequest): Promise<$_model.CertNoThreeElementVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.certNoThreeElementVerificationWithOptions(request, runtime);
  }

  /**
   * 身份证二要素认证
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
   * 身份证二要素认证
   * 
   * @param request - CertNoTwoElementVerificationRequest
   * @returns CertNoTwoElementVerificationResponse
   */
  async certNoTwoElementVerification(request: $_model.CertNoTwoElementVerificationRequest): Promise<$_model.CertNoTwoElementVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.certNoTwoElementVerificationWithOptions(request, runtime);
  }

  /**
   * Verifies whether the enterprise name, the business license number, and the name and ID card of the legal representative belong to the same enterprise. The verification is successful only when the preceding four elements belong to the same enterprise and the business status of the enterprise is Active.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the billing of services related to four-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0, 1, or 2.
   * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
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
   * Verifies whether the enterprise name, the business license number, and the name and ID card of the legal representative belong to the same enterprise. The verification is successful only when the preceding four elements belong to the same enterprise and the business status of the enterprise is Active.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the billing of services related to four-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0, 1, or 2.
   * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * 
   * @param request - CompanyFourElementsVerificationRequest
   * @returns CompanyFourElementsVerificationResponse
   */
  async companyFourElementsVerification(request: $_model.CompanyFourElementsVerificationRequest): Promise<$_model.CompanyFourElementsVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.companyFourElementsVerificationWithOptions(request, runtime);
  }

  /**
   * Verifies whether the enterprise name, the business license number, and the name of the legal representative belong to the same enterprise. The verification is successful only when the three elements belong to the same enterprise and the business status of the enterprise is Active.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the billing of services related to three-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0, 1, or 2.
   * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
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
   * Verifies whether the enterprise name, the business license number, and the name of the legal representative belong to the same enterprise. The verification is successful only when the three elements belong to the same enterprise and the business status of the enterprise is Active.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the billing of services related to three-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0, 1, or 2.
   * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * 
   * @param request - CompanyThreeElementsVerificationRequest
   * @returns CompanyThreeElementsVerificationResponse
   */
  async companyThreeElementsVerification(request: $_model.CompanyThreeElementsVerificationRequest): Promise<$_model.CompanyThreeElementsVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.companyThreeElementsVerificationWithOptions(request, runtime);
  }

  /**
   * Verifies whether the enterprise name and the business license number belong to the same enterprise. The verification is successful only when the two elements belong to the same enterprise and the business status of the enterprise is Active.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the billing of services related to two-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0 or 1.
   * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
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
   * Verifies whether the enterprise name and the business license number belong to the same enterprise. The verification is successful only when the two elements belong to the same enterprise and the business status of the enterprise is Active.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the billing of services related to two-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0 or 1.
   * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * 
   * @param request - CompanyTwoElementsVerificationRequest
   * @returns CompanyTwoElementsVerificationResponse
   */
  async companyTwoElementsVerification(request: $_model.CompanyTwoElementsVerificationRequest): Promise<$_model.CompanyTwoElementsVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.companyTwoElementsVerificationWithOptions(request, runtime);
  }

  /**
   * 预警联系人删除
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
   * 预警联系人删除
   * 
   * @param request - DeleteContactsRequest
   * @returns DeleteContactsResponse
   */
  async deleteContacts(request: $_model.DeleteContactsRequest): Promise<$_model.DeleteContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContactsWithOptions(request, runtime);
  }

  /**
   * Predicts whether a phone number is a nonexistent number by using AI algorithms.
   * 
   * @remarks
   *   You can call this operation to verify whether a phone number is a nonexistent number. When you call this operation to verify a number, the system charges you CNY 0.01 per verification based on the number of verifications. **Before you call this operation, make sure that you are familiar with the billing of Cell Phone Number Service.**
   * *   You are charged only if the value of Code is OK and the value of Status is not UNKNOWN.
   * *   The prediction is not strictly accurate because Cell Phone Number Service predicts the nonexistent number probability by using AI algorithms. The accuracy rate of the prediction and the recall rate of empty numbers are about 95%. **Pay attention to this point when you call this operation**.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * ### [](#)Authorization information
   * By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
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
   * Predicts whether a phone number is a nonexistent number by using AI algorithms.
   * 
   * @remarks
   *   You can call this operation to verify whether a phone number is a nonexistent number. When you call this operation to verify a number, the system charges you CNY 0.01 per verification based on the number of verifications. **Before you call this operation, make sure that you are familiar with the billing of Cell Phone Number Service.**
   * *   You are charged only if the value of Code is OK and the value of Status is not UNKNOWN.
   * *   The prediction is not strictly accurate because Cell Phone Number Service predicts the nonexistent number probability by using AI algorithms. The accuracy rate of the prediction and the recall rate of empty numbers are about 95%. **Pay attention to this point when you call this operation**.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * ### [](#)Authorization information
   * By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
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
   * 号码分析实时查询蚂蚁
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
   * 号码分析实时查询蚂蚁
   * 
   * @param request - DescribePhoneNumberAnalysisRequest
   * @returns DescribePhoneNumberAnalysisResponse
   */
  async describePhoneNumberAnalysis(request: $_model.DescribePhoneNumberAnalysisRequest): Promise<$_model.DescribePhoneNumberAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePhoneNumberAnalysisWithOptions(request, runtime);
  }

  /**
   * Obtains the analysis results of a phone number.
   * 
   * @remarks
   * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the Labels page, find the label that you want to use, click Activate Now, enter the required information, and then submit your application. After your application is approved, you can use the label. Before you call this operation, make sure that you are familiar with the billing of Cell Phone Number Service.
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
   * Obtains the analysis results of a phone number.
   * 
   * @remarks
   * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the Labels page, find the label that you want to use, click Activate Now, enter the required information, and then submit your application. After your application is approved, you can use the label. Before you call this operation, make sure that you are familiar with the billing of Cell Phone Number Service.
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
   * Queries the carrier, registration location, and mobile number portability information of a phone number.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 2,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
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
   * Queries the carrier, registration location, and mobile number portability information of a phone number.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 2,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
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
   * Queries the usage period of a phone number of a user.
   * 
   * @remarks
   *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * ### [](#qps)QPS limits
   * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Queries the usage period of a phone number of a user.
   * 
   * @remarks
   *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * ### [](#qps)QPS limits
   * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePhoneNumberOnlineTimeRequest
   * @returns DescribePhoneNumberOnlineTimeResponse
   */
  async describePhoneNumberOnlineTime(request: $_model.DescribePhoneNumberOnlineTimeRequest): Promise<$_model.DescribePhoneNumberOnlineTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePhoneNumberOnlineTimeWithOptions(request, runtime);
  }

  /**
   * Queries the attribute information about a phone number, including the registration province, registration city, basic carrier (such as China Mobile, China Unicom, China Telecom, or China Broadnet), reseller of mobile communications services (such as Alibaba Communications), mobile number portability, and the number segment to which the phone number belongs.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154008.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   You can call this operation to obtain the carrier, registration location, and mobile number portability information about a phone number. You can query phone numbers in **plaintext** and phone numbers that are encrypted by using **MD5** and **SHA256**.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
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
   * Queries the attribute information about a phone number, including the registration province, registration city, basic carrier (such as China Mobile, China Unicom, China Telecom, or China Broadnet), reseller of mobile communications services (such as Alibaba Communications), mobile number portability, and the number segment to which the phone number belongs.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154008.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   You can call this operation to obtain the carrier, registration location, and mobile number portability information about a phone number. You can query phone numbers in **plaintext** and phone numbers that are encrypted by using **MD5** and **SHA256**.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
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
   * Verifies whether a phone number is a reassigned phone number by calling this operation.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   You are charged for phone number verifications only if the value of Code is OK and the value of VerifyResult is not 0.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ## [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * ## [](#)Authorization information
   * By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
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
   * Verifies whether a phone number is a reassigned phone number by calling this operation.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   You are charged for phone number verifications only if the value of Code is OK and the value of VerifyResult is not 0.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ## [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * ## [](#)Authorization information
   * By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * 
   * @param request - DescribePhoneTwiceTelVerifyRequest
   * @returns DescribePhoneTwiceTelVerifyResponse
   */
  async describePhoneTwiceTelVerify(request: $_model.DescribePhoneTwiceTelVerifyRequest): Promise<$_model.DescribePhoneTwiceTelVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePhoneTwiceTelVerifyWithOptions(request, runtime);
  }

  /**
   * 获取UAID申请Token所需的签名字段
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
   * 获取UAID申请Token所需的签名字段
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
   * Filters invalid phone numbers.
   * 
   * @remarks
   * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Filters invalid phone numbers.
   * 
   * @remarks
   * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - InvalidPhoneNumberFilterRequest
   * @returns InvalidPhoneNumberFilterResponse
   */
  async invalidPhoneNumberFilter(request: $_model.InvalidPhoneNumberFilterRequest): Promise<$_model.InvalidPhoneNumberFilterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.invalidPhoneNumberFilterWithOptions(request, runtime);
  }

  /**
   * 预警联系人查询
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
   * 预警联系人查询
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
   * Encrypts the original phone number into a virtual number that starts with 140. Cell Phone Number Service integrates the communications services provided by Alibaba Cloud. This allows you to initiate a call by using a virtual number that starts with 140.
   * 
   * @remarks
   * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Encrypts the original phone number into a virtual number that starts with 140. Cell Phone Number Service integrates the communications services provided by Alibaba Cloud. This allows you to initiate a call by using a virtual number that starts with 140.
   * 
   * @remarks
   * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberEncryptRequest
   * @returns PhoneNumberEncryptResponse
   */
  async phoneNumberEncrypt(request: $_model.PhoneNumberEncryptRequest): Promise<$_model.PhoneNumberEncryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.phoneNumberEncryptWithOptions(request, runtime);
  }

  /**
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberStatusForAccountRequest
   * @returns PhoneNumberStatusForAccountResponse
   */
  async phoneNumberStatusForAccount(request: $_model.PhoneNumberStatusForAccountRequest): Promise<$_model.PhoneNumberStatusForAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.phoneNumberStatusForAccountWithOptions(request, runtime);
  }

  /**
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberStatusForPublicRequest
   * @returns PhoneNumberStatusForPublicResponse
   */
  async phoneNumberStatusForPublic(request: $_model.PhoneNumberStatusForPublicRequest): Promise<$_model.PhoneNumberStatusForPublicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.phoneNumberStatusForPublicWithOptions(request, runtime);
  }

  /**
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberStatusForRealRequest
   * @returns PhoneNumberStatusForRealResponse
   */
  async phoneNumberStatusForReal(request: $_model.PhoneNumberStatusForRealRequest): Promise<$_model.PhoneNumberStatusForRealResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.phoneNumberStatusForRealWithOptions(request, runtime);
  }

  /**
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberStatusForSmsRequest
   * @returns PhoneNumberStatusForSmsResponse
   */
  async phoneNumberStatusForSms(request: $_model.PhoneNumberStatusForSmsRequest): Promise<$_model.PhoneNumberStatusForSmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.phoneNumberStatusForSmsWithOptions(request, runtime);
  }

  /**
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * 套餐包类型信息查询
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
   * 套餐包类型信息查询
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
   * Queries information about tags.
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
   * Queries information about tags.
   * 
   * @param request - QueryTagInfoBySelectionRequest
   * @returns QueryTagInfoBySelectionResponse
   */
  async queryTagInfoBySelection(request: $_model.QueryTagInfoBySelectionRequest): Promise<$_model.QueryTagInfoBySelectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTagInfoBySelectionWithOptions(request, runtime);
  }

  /**
   * Queries a list of tags by page.
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
   * Queries a list of tags by page.
   * 
   * @param request - QueryTagListPageRequest
   * @returns QueryTagListPageResponse
   */
  async queryTagListPage(request: $_model.QueryTagListPageRequest): Promise<$_model.QueryTagListPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTagListPageWithOptions(request, runtime);
  }

  /**
   * 查询离线任务列表
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
   * 查询离线任务列表
   * 
   * @param request - QueryTaskListRequest
   * @returns QueryTaskListResponse
   */
  async queryTaskList(request: $_model.QueryTaskListRequest): Promise<$_model.QueryTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTaskListWithOptions(request, runtime);
  }

  /**
   * Queries the usage statistics based on tag IDs.
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
   * Queries the usage statistics based on tag IDs.
   * 
   * @param request - QueryUsageStatisticsByTagIdRequest
   * @returns QueryUsageStatisticsByTagIdResponse
   */
  async queryUsageStatisticsByTagId(request: $_model.QueryUsageStatisticsByTagIdRequest): Promise<$_model.QueryUsageStatisticsByTagIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUsageStatisticsByTagIdWithOptions(request, runtime);
  }

  /**
   * 预警联系人保存
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
   * 预警联系人保存
   * 
   * @param request - SaveContactsRequest
   * @returns SaveContactsResponse
   */
  async saveContacts(request: $_model.SaveContactsRequest): Promise<$_model.SaveContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveContactsWithOptions(request, runtime);
  }

  /**
   * Verifies whether the name, phone number, and ID card number entered by a user belong to the same user.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * *   You are charged only if the value of Code is OK and the value of IsConsistent is not 2.
   * ### [](#qps)QPS limits
   * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Verifies whether the name, phone number, and ID card number entered by a user belong to the same user.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * *   You are charged only if the value of Code is OK and the value of IsConsistent is not 2.
   * ### [](#qps)QPS limits
   * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ThreeElementsVerificationRequest
   * @returns ThreeElementsVerificationResponse
   */
  async threeElementsVerification(request: $_model.ThreeElementsVerificationRequest): Promise<$_model.ThreeElementsVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.threeElementsVerificationWithOptions(request, runtime);
  }

  /**
   * Verifies whether the name and phone number entered by a user belong to the same user.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * *   You are charged only if the value of Code is OK and the value of IsConsistent is not 2.
   * ### [](#qps)QPS limits
   * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * Verifies whether the name and phone number entered by a user belong to the same user.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * *   You are charged only if the value of Code is OK and the value of IsConsistent is not 2.
   * ### [](#qps)QPS limits
   * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * 获取UAID
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
   * 获取UAID
   * 
   * @param request - UAIDVerificationRequest
   * @returns UAIDVerificationResponse
   */
  async uAIDVerification(request: $_model.UAIDVerificationRequest): Promise<$_model.UAIDVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uAIDVerificationWithOptions(request, runtime);
  }

  /**
   * 预警联系人更新
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
   * 预警联系人更新
   * 
   * @param request - UpdateContactsRequest
   * @returns UpdateContactsResponse
   */
  async updateContacts(request: $_model.UpdateContactsRequest): Promise<$_model.UpdateContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateContactsWithOptions(request, runtime);
  }

}
