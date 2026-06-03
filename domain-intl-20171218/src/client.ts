// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("domain-intl", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AcknowledgeTaskResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AcknowledgeTaskResultResponse
   */
  async acknowledgeTaskResultWithOptions(request: $_model.AcknowledgeTaskResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AcknowledgeTaskResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.taskDetailNo)) {
      query["TaskDetailNo"] = request.taskDetailNo;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AcknowledgeTaskResult",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AcknowledgeTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.AcknowledgeTaskResultResponse({}));
  }

  /**
   * @param request - AcknowledgeTaskResultRequest
   * @returns AcknowledgeTaskResultResponse
   */
  async acknowledgeTaskResult(request: $_model.AcknowledgeTaskResultRequest): Promise<$_model.AcknowledgeTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.acknowledgeTaskResultWithOptions(request, runtime);
  }

  /**
   * @param request - BatchFuzzyMatchDomainSensitiveWordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchFuzzyMatchDomainSensitiveWordResponse
   */
  async batchFuzzyMatchDomainSensitiveWordWithOptions(request: $_model.BatchFuzzyMatchDomainSensitiveWordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchFuzzyMatchDomainSensitiveWordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchFuzzyMatchDomainSensitiveWord",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchFuzzyMatchDomainSensitiveWordResponse>(await this.callApi(params, req, runtime), new $_model.BatchFuzzyMatchDomainSensitiveWordResponse({}));
  }

  /**
   * @param request - BatchFuzzyMatchDomainSensitiveWordRequest
   * @returns BatchFuzzyMatchDomainSensitiveWordResponse
   */
  async batchFuzzyMatchDomainSensitiveWord(request: $_model.BatchFuzzyMatchDomainSensitiveWordRequest): Promise<$_model.BatchFuzzyMatchDomainSensitiveWordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchFuzzyMatchDomainSensitiveWordWithOptions(request, runtime);
  }

  /**
   * @param request - CancelDomainVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelDomainVerificationResponse
   */
  async cancelDomainVerificationWithOptions(request: $_model.CancelDomainVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelDomainVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelDomainVerification",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelDomainVerificationResponse>(await this.callApi(params, req, runtime), new $_model.CancelDomainVerificationResponse({}));
  }

  /**
   * @param request - CancelDomainVerificationRequest
   * @returns CancelDomainVerificationResponse
   */
  async cancelDomainVerification(request: $_model.CancelDomainVerificationRequest): Promise<$_model.CancelDomainVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelDomainVerificationWithOptions(request, runtime);
  }

  /**
   * @param request - CancelTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelTaskResponse
   */
  async cancelTaskWithOptions(request: $_model.CancelTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.taskNo)) {
      query["TaskNo"] = request.taskNo;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelTask",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelTaskResponse({}));
  }

  /**
   * @param request - CancelTaskRequest
   * @returns CancelTaskResponse
   */
  async cancelTask(request: $_model.CancelTaskRequest): Promise<$_model.CancelTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelTaskWithOptions(request, runtime);
  }

  /**
   * @param request - CheckDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDomainResponse
   */
  async checkDomainWithOptions(request: $_model.CheckDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.feeCommand)) {
      query["FeeCommand"] = request.feeCommand;
    }

    if (!$dara.isNull(request.feeCurrency)) {
      query["FeeCurrency"] = request.feeCurrency;
    }

    if (!$dara.isNull(request.feePeriod)) {
      query["FeePeriod"] = request.feePeriod;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckDomain",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDomainResponse>(await this.callApi(params, req, runtime), new $_model.CheckDomainResponse({}));
  }

  /**
   * @param request - CheckDomainRequest
   * @returns CheckDomainResponse
   */
  async checkDomain(request: $_model.CheckDomainRequest): Promise<$_model.CheckDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDomainWithOptions(request, runtime);
  }

  /**
   * @param request - CheckDomainSunriseClaimRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDomainSunriseClaimResponse
   */
  async checkDomainSunriseClaimWithOptions(request: $_model.CheckDomainSunriseClaimRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDomainSunriseClaimResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckDomainSunriseClaim",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDomainSunriseClaimResponse>(await this.callApi(params, req, runtime), new $_model.CheckDomainSunriseClaimResponse({}));
  }

  /**
   * @param request - CheckDomainSunriseClaimRequest
   * @returns CheckDomainSunriseClaimResponse
   */
  async checkDomainSunriseClaim(request: $_model.CheckDomainSunriseClaimRequest): Promise<$_model.CheckDomainSunriseClaimResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDomainSunriseClaimWithOptions(request, runtime);
  }

  /**
   * @param request - CheckTransferInFeasibilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckTransferInFeasibilityResponse
   */
  async checkTransferInFeasibilityWithOptions(request: $_model.CheckTransferInFeasibilityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckTransferInFeasibilityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.transferAuthorizationCode)) {
      query["TransferAuthorizationCode"] = request.transferAuthorizationCode;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckTransferInFeasibility",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckTransferInFeasibilityResponse>(await this.callApi(params, req, runtime), new $_model.CheckTransferInFeasibilityResponse({}));
  }

  /**
   * @param request - CheckTransferInFeasibilityRequest
   * @returns CheckTransferInFeasibilityResponse
   */
  async checkTransferInFeasibility(request: $_model.CheckTransferInFeasibilityRequest): Promise<$_model.CheckTransferInFeasibilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkTransferInFeasibilityWithOptions(request, runtime);
  }

  /**
   * @param request - ConfirmTransferInEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmTransferInEmailResponse
   */
  async confirmTransferInEmailWithOptions(request: $_model.ConfirmTransferInEmailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfirmTransferInEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfirmTransferInEmail",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfirmTransferInEmailResponse>(await this.callApi(params, req, runtime), new $_model.ConfirmTransferInEmailResponse({}));
  }

  /**
   * @param request - ConfirmTransferInEmailRequest
   * @returns ConfirmTransferInEmailResponse
   */
  async confirmTransferInEmail(request: $_model.ConfirmTransferInEmailRequest): Promise<$_model.ConfirmTransferInEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.confirmTransferInEmailWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteEmailVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEmailVerificationResponse
   */
  async deleteEmailVerificationWithOptions(request: $_model.DeleteEmailVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEmailVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEmailVerification",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEmailVerificationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEmailVerificationResponse({}));
  }

  /**
   * @param request - DeleteEmailVerificationRequest
   * @returns DeleteEmailVerificationResponse
   */
  async deleteEmailVerification(request: $_model.DeleteEmailVerificationRequest): Promise<$_model.DeleteEmailVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEmailVerificationWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteRegistrantProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRegistrantProfileResponse
   */
  async deleteRegistrantProfileWithOptions(request: $_model.DeleteRegistrantProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRegistrantProfileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRegistrantProfile",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRegistrantProfileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRegistrantProfileResponse({}));
  }

  /**
   * @param request - DeleteRegistrantProfileRequest
   * @returns DeleteRegistrantProfileResponse
   */
  async deleteRegistrantProfile(request: $_model.DeleteRegistrantProfileRequest): Promise<$_model.DeleteRegistrantProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRegistrantProfileWithOptions(request, runtime);
  }

  /**
   * @param request - EmailVerifiedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EmailVerifiedResponse
   */
  async emailVerifiedWithOptions(request: $_model.EmailVerifiedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EmailVerifiedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EmailVerified",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EmailVerifiedResponse>(await this.callApi(params, req, runtime), new $_model.EmailVerifiedResponse({}));
  }

  /**
   * @param request - EmailVerifiedRequest
   * @returns EmailVerifiedResponse
   */
  async emailVerified(request: $_model.EmailVerifiedRequest): Promise<$_model.EmailVerifiedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.emailVerifiedWithOptions(request, runtime);
  }

  /**
   * @param request - FuzzyMatchDomainSensitiveWordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FuzzyMatchDomainSensitiveWordResponse
   */
  async fuzzyMatchDomainSensitiveWordWithOptions(request: $_model.FuzzyMatchDomainSensitiveWordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FuzzyMatchDomainSensitiveWordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FuzzyMatchDomainSensitiveWord",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FuzzyMatchDomainSensitiveWordResponse>(await this.callApi(params, req, runtime), new $_model.FuzzyMatchDomainSensitiveWordResponse({}));
  }

  /**
   * @param request - FuzzyMatchDomainSensitiveWordRequest
   * @returns FuzzyMatchDomainSensitiveWordResponse
   */
  async fuzzyMatchDomainSensitiveWord(request: $_model.FuzzyMatchDomainSensitiveWordRequest): Promise<$_model.FuzzyMatchDomainSensitiveWordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fuzzyMatchDomainSensitiveWordWithOptions(request, runtime);
  }

  /**
   * @param request - ListEmailVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEmailVerificationResponse
   */
  async listEmailVerificationWithOptions(request: $_model.ListEmailVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEmailVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginCreateTime)) {
      query["BeginCreateTime"] = request.beginCreateTime;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.endCreateTime)) {
      query["EndCreateTime"] = request.endCreateTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.verificationStatus)) {
      query["VerificationStatus"] = request.verificationStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEmailVerification",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEmailVerificationResponse>(await this.callApi(params, req, runtime), new $_model.ListEmailVerificationResponse({}));
  }

  /**
   * @param request - ListEmailVerificationRequest
   * @returns ListEmailVerificationResponse
   */
  async listEmailVerification(request: $_model.ListEmailVerificationRequest): Promise<$_model.ListEmailVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEmailVerificationWithOptions(request, runtime);
  }

  /**
   * @param request - LookupTmchNoticeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LookupTmchNoticeResponse
   */
  async lookupTmchNoticeWithOptions(request: $_model.LookupTmchNoticeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LookupTmchNoticeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.claimKey)) {
      query["ClaimKey"] = request.claimKey;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LookupTmchNotice",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LookupTmchNoticeResponse>(await this.callApi(params, req, runtime), new $_model.LookupTmchNoticeResponse({}));
  }

  /**
   * @param request - LookupTmchNoticeRequest
   * @returns LookupTmchNoticeResponse
   */
  async lookupTmchNotice(request: $_model.LookupTmchNoticeRequest): Promise<$_model.LookupTmchNoticeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lookupTmchNoticeWithOptions(request, runtime);
  }

  /**
   * @param request - PollTaskResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PollTaskResultResponse
   */
  async pollTaskResultWithOptions(request: $_model.PollTaskResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PollTaskResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskNo)) {
      query["TaskNo"] = request.taskNo;
    }

    if (!$dara.isNull(request.taskResultStatus)) {
      query["TaskResultStatus"] = request.taskResultStatus;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PollTaskResult",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PollTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.PollTaskResultResponse({}));
  }

  /**
   * @param request - PollTaskResultRequest
   * @returns PollTaskResultResponse
   */
  async pollTaskResult(request: $_model.PollTaskResultRequest): Promise<$_model.PollTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pollTaskResultWithOptions(request, runtime);
  }

  /**
   * @param request - QueryArtExtensionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryArtExtensionResponse
   */
  async queryArtExtensionWithOptions(request: $_model.QueryArtExtensionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryArtExtensionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryArtExtension",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryArtExtensionResponse>(await this.callApi(params, req, runtime), new $_model.QueryArtExtensionResponse({}));
  }

  /**
   * @param request - QueryArtExtensionRequest
   * @returns QueryArtExtensionResponse
   */
  async queryArtExtension(request: $_model.QueryArtExtensionRequest): Promise<$_model.QueryArtExtensionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryArtExtensionWithOptions(request, runtime);
  }

  /**
   * @param request - QueryChangeLogListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryChangeLogListResponse
   */
  async queryChangeLogListWithOptions(request: $_model.QueryChangeLogListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryChangeLogListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryChangeLogList",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryChangeLogListResponse>(await this.callApi(params, req, runtime), new $_model.QueryChangeLogListResponse({}));
  }

  /**
   * @param request - QueryChangeLogListRequest
   * @returns QueryChangeLogListResponse
   */
  async queryChangeLogList(request: $_model.QueryChangeLogListRequest): Promise<$_model.QueryChangeLogListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryChangeLogListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryContactInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryContactInfoResponse
   */
  async queryContactInfoWithOptions(request: $_model.QueryContactInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryContactInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactType)) {
      query["ContactType"] = request.contactType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryContactInfo",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryContactInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryContactInfoResponse({}));
  }

  /**
   * @param request - QueryContactInfoRequest
   * @returns QueryContactInfoResponse
   */
  async queryContactInfo(request: $_model.QueryContactInfoRequest): Promise<$_model.QueryContactInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryContactInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDSRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDSRecordResponse
   */
  async queryDSRecordWithOptions(request: $_model.QueryDSRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDSRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDSRecord",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDSRecordResponse>(await this.callApi(params, req, runtime), new $_model.QueryDSRecordResponse({}));
  }

  /**
   * @param request - QueryDSRecordRequest
   * @returns QueryDSRecordResponse
   */
  async queryDSRecord(request: $_model.QueryDSRecordRequest): Promise<$_model.QueryDSRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDSRecordWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDnsHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDnsHostResponse
   */
  async queryDnsHostWithOptions(request: $_model.QueryDnsHostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDnsHostResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDnsHost",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDnsHostResponse>(await this.callApi(params, req, runtime), new $_model.QueryDnsHostResponse({}));
  }

  /**
   * @param request - QueryDnsHostRequest
   * @returns QueryDnsHostResponse
   */
  async queryDnsHost(request: $_model.QueryDnsHostRequest): Promise<$_model.QueryDnsHostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDnsHostWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDomainByDomainNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainByDomainNameResponse
   */
  async queryDomainByDomainNameWithOptions(request: $_model.QueryDomainByDomainNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDomainByDomainNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDomainByDomainName",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDomainByDomainNameResponse>(await this.callApi(params, req, runtime), new $_model.QueryDomainByDomainNameResponse({}));
  }

  /**
   * @param request - QueryDomainByDomainNameRequest
   * @returns QueryDomainByDomainNameResponse
   */
  async queryDomainByDomainName(request: $_model.QueryDomainByDomainNameRequest): Promise<$_model.QueryDomainByDomainNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDomainByDomainNameWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDomainByInstanceIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainByInstanceIdResponse
   */
  async queryDomainByInstanceIdWithOptions(request: $_model.QueryDomainByInstanceIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDomainByInstanceIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDomainByInstanceId",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDomainByInstanceIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryDomainByInstanceIdResponse({}));
  }

  /**
   * @param request - QueryDomainByInstanceIdRequest
   * @returns QueryDomainByInstanceIdResponse
   */
  async queryDomainByInstanceId(request: $_model.QueryDomainByInstanceIdRequest): Promise<$_model.QueryDomainByInstanceIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDomainByInstanceIdWithOptions(request, runtime);
  }

  /**
   * Queries a list of domain names.
   * 
   * @param request - QueryDomainListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainListResponse
   */
  async queryDomainListWithOptions(request: $_model.QueryDomainListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDomainListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ccompany)) {
      query["Ccompany"] = request.ccompany;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endExpirationDate)) {
      query["EndExpirationDate"] = request.endExpirationDate;
    }

    if (!$dara.isNull(request.endRegistrationDate)) {
      query["EndRegistrationDate"] = request.endRegistrationDate;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.orderByType)) {
      query["OrderByType"] = request.orderByType;
    }

    if (!$dara.isNull(request.orderKeyType)) {
      query["OrderKeyType"] = request.orderKeyType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productDomainType)) {
      query["ProductDomainType"] = request.productDomainType;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.startExpirationDate)) {
      query["StartExpirationDate"] = request.startExpirationDate;
    }

    if (!$dara.isNull(request.startRegistrationDate)) {
      query["StartRegistrationDate"] = request.startRegistrationDate;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDomainList",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDomainListResponse>(await this.callApi(params, req, runtime), new $_model.QueryDomainListResponse({}));
  }

  /**
   * Queries a list of domain names.
   * 
   * @param request - QueryDomainListRequest
   * @returns QueryDomainListResponse
   */
  async queryDomainList(request: $_model.QueryDomainListRequest): Promise<$_model.QueryDomainListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDomainListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDomainRealNameVerificationInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainRealNameVerificationInfoResponse
   */
  async queryDomainRealNameVerificationInfoWithOptions(request: $_model.QueryDomainRealNameVerificationInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDomainRealNameVerificationInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.fetchImage)) {
      query["FetchImage"] = request.fetchImage;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDomainRealNameVerificationInfo",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDomainRealNameVerificationInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryDomainRealNameVerificationInfoResponse({}));
  }

  /**
   * @param request - QueryDomainRealNameVerificationInfoRequest
   * @returns QueryDomainRealNameVerificationInfoResponse
   */
  async queryDomainRealNameVerificationInfo(request: $_model.QueryDomainRealNameVerificationInfoRequest): Promise<$_model.QueryDomainRealNameVerificationInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDomainRealNameVerificationInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryEnsAssociationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEnsAssociationResponse
   */
  async queryEnsAssociationWithOptions(request: $_model.QueryEnsAssociationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEnsAssociationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEnsAssociation",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEnsAssociationResponse>(await this.callApi(params, req, runtime), new $_model.QueryEnsAssociationResponse({}));
  }

  /**
   * @param request - QueryEnsAssociationRequest
   * @returns QueryEnsAssociationResponse
   */
  async queryEnsAssociation(request: $_model.QueryEnsAssociationRequest): Promise<$_model.QueryEnsAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEnsAssociationWithOptions(request, runtime);
  }

  /**
   * @param request - QueryFailReasonForDomainRealNameVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFailReasonForDomainRealNameVerificationResponse
   */
  async queryFailReasonForDomainRealNameVerificationWithOptions(request: $_model.QueryFailReasonForDomainRealNameVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFailReasonForDomainRealNameVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.realNameVerificationAction)) {
      query["RealNameVerificationAction"] = request.realNameVerificationAction;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFailReasonForDomainRealNameVerification",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFailReasonForDomainRealNameVerificationResponse>(await this.callApi(params, req, runtime), new $_model.QueryFailReasonForDomainRealNameVerificationResponse({}));
  }

  /**
   * @param request - QueryFailReasonForDomainRealNameVerificationRequest
   * @returns QueryFailReasonForDomainRealNameVerificationResponse
   */
  async queryFailReasonForDomainRealNameVerification(request: $_model.QueryFailReasonForDomainRealNameVerificationRequest): Promise<$_model.QueryFailReasonForDomainRealNameVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFailReasonForDomainRealNameVerificationWithOptions(request, runtime);
  }

  /**
   * @param request - QueryFailReasonForRegistrantProfileRealNameVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFailReasonForRegistrantProfileRealNameVerificationResponse
   */
  async queryFailReasonForRegistrantProfileRealNameVerificationWithOptions(request: $_model.QueryFailReasonForRegistrantProfileRealNameVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFailReasonForRegistrantProfileRealNameVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.registrantProfileID)) {
      query["RegistrantProfileID"] = request.registrantProfileID;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFailReasonForRegistrantProfileRealNameVerification",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFailReasonForRegistrantProfileRealNameVerificationResponse>(await this.callApi(params, req, runtime), new $_model.QueryFailReasonForRegistrantProfileRealNameVerificationResponse({}));
  }

  /**
   * @param request - QueryFailReasonForRegistrantProfileRealNameVerificationRequest
   * @returns QueryFailReasonForRegistrantProfileRealNameVerificationResponse
   */
  async queryFailReasonForRegistrantProfileRealNameVerification(request: $_model.QueryFailReasonForRegistrantProfileRealNameVerificationRequest): Promise<$_model.QueryFailReasonForRegistrantProfileRealNameVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFailReasonForRegistrantProfileRealNameVerificationWithOptions(request, runtime);
  }

  /**
   * @param request - QueryLocalEnsAssociationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryLocalEnsAssociationResponse
   */
  async queryLocalEnsAssociationWithOptions(request: $_model.QueryLocalEnsAssociationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryLocalEnsAssociationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryLocalEnsAssociation",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryLocalEnsAssociationResponse>(await this.callApi(params, req, runtime), new $_model.QueryLocalEnsAssociationResponse({}));
  }

  /**
   * @param request - QueryLocalEnsAssociationRequest
   * @returns QueryLocalEnsAssociationResponse
   */
  async queryLocalEnsAssociation(request: $_model.QueryLocalEnsAssociationRequest): Promise<$_model.QueryLocalEnsAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryLocalEnsAssociationWithOptions(request, runtime);
  }

  /**
   * @param request - QueryRegistrantProfileRealNameVerificationInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRegistrantProfileRealNameVerificationInfoResponse
   */
  async queryRegistrantProfileRealNameVerificationInfoWithOptions(request: $_model.QueryRegistrantProfileRealNameVerificationInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRegistrantProfileRealNameVerificationInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fetchImage)) {
      query["FetchImage"] = request.fetchImage;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRegistrantProfileRealNameVerificationInfo",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRegistrantProfileRealNameVerificationInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryRegistrantProfileRealNameVerificationInfoResponse({}));
  }

  /**
   * @param request - QueryRegistrantProfileRealNameVerificationInfoRequest
   * @returns QueryRegistrantProfileRealNameVerificationInfoResponse
   */
  async queryRegistrantProfileRealNameVerificationInfo(request: $_model.QueryRegistrantProfileRealNameVerificationInfoRequest): Promise<$_model.QueryRegistrantProfileRealNameVerificationInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRegistrantProfileRealNameVerificationInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryRegistrantProfilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRegistrantProfilesResponse
   */
  async queryRegistrantProfilesWithOptions(request: $_model.QueryRegistrantProfilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRegistrantProfilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defaultRegistrantProfile)) {
      query["DefaultRegistrantProfile"] = request.defaultRegistrantProfile;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.realNameStatus)) {
      query["RealNameStatus"] = request.realNameStatus;
    }

    if (!$dara.isNull(request.registrantOrganization)) {
      query["RegistrantOrganization"] = request.registrantOrganization;
    }

    if (!$dara.isNull(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!$dara.isNull(request.registrantProfileType)) {
      query["RegistrantProfileType"] = request.registrantProfileType;
    }

    if (!$dara.isNull(request.registrantType)) {
      query["RegistrantType"] = request.registrantType;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRegistrantProfiles",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRegistrantProfilesResponse>(await this.callApi(params, req, runtime), new $_model.QueryRegistrantProfilesResponse({}));
  }

  /**
   * @param request - QueryRegistrantProfilesRequest
   * @returns QueryRegistrantProfilesResponse
   */
  async queryRegistrantProfiles(request: $_model.QueryRegistrantProfilesRequest): Promise<$_model.QueryRegistrantProfilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRegistrantProfilesWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTaskDetailHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskDetailHistoryResponse
   */
  async queryTaskDetailHistoryWithOptions(request: $_model.QueryTaskDetailHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTaskDetailHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainNameCursor)) {
      query["DomainNameCursor"] = request.domainNameCursor;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskDetailNoCursor)) {
      query["TaskDetailNoCursor"] = request.taskDetailNoCursor;
    }

    if (!$dara.isNull(request.taskNo)) {
      query["TaskNo"] = request.taskNo;
    }

    if (!$dara.isNull(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTaskDetailHistory",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTaskDetailHistoryResponse>(await this.callApi(params, req, runtime), new $_model.QueryTaskDetailHistoryResponse({}));
  }

  /**
   * @param request - QueryTaskDetailHistoryRequest
   * @returns QueryTaskDetailHistoryResponse
   */
  async queryTaskDetailHistory(request: $_model.QueryTaskDetailHistoryRequest): Promise<$_model.QueryTaskDetailHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTaskDetailHistoryWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTaskDetailListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskDetailListResponse
   */
  async queryTaskDetailListWithOptions(request: $_model.QueryTaskDetailListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTaskDetailListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskNo)) {
      query["TaskNo"] = request.taskNo;
    }

    if (!$dara.isNull(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTaskDetailList",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTaskDetailListResponse>(await this.callApi(params, req, runtime), new $_model.QueryTaskDetailListResponse({}));
  }

  /**
   * @param request - QueryTaskDetailListRequest
   * @returns QueryTaskDetailListResponse
   */
  async queryTaskDetailList(request: $_model.QueryTaskDetailListRequest): Promise<$_model.QueryTaskDetailListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTaskDetailListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTaskInfoHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskInfoHistoryResponse
   */
  async queryTaskInfoHistoryWithOptions(request: $_model.QueryTaskInfoHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTaskInfoHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginCreateTime)) {
      query["BeginCreateTime"] = request.beginCreateTime;
    }

    if (!$dara.isNull(request.createTimeCursor)) {
      query["CreateTimeCursor"] = request.createTimeCursor;
    }

    if (!$dara.isNull(request.endCreateTime)) {
      query["EndCreateTime"] = request.endCreateTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskNoCursor)) {
      query["TaskNoCursor"] = request.taskNoCursor;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTaskInfoHistory",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTaskInfoHistoryResponse>(await this.callApi(params, req, runtime), new $_model.QueryTaskInfoHistoryResponse({}));
  }

  /**
   * @param request - QueryTaskInfoHistoryRequest
   * @returns QueryTaskInfoHistoryResponse
   */
  async queryTaskInfoHistory(request: $_model.QueryTaskInfoHistoryRequest): Promise<$_model.QueryTaskInfoHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTaskInfoHistoryWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskListResponse
   */
  async queryTaskListWithOptions(request: $_model.QueryTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTaskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginCreateTime)) {
      query["BeginCreateTime"] = request.beginCreateTime;
    }

    if (!$dara.isNull(request.endCreateTime)) {
      query["EndCreateTime"] = request.endCreateTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTaskList",
      version: "2017-12-18",
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
   * @param request - QueryTaskListRequest
   * @returns QueryTaskListResponse
   */
  async queryTaskList(request: $_model.QueryTaskListRequest): Promise<$_model.QueryTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTaskListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTransferInByInstanceIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTransferInByInstanceIdResponse
   */
  async queryTransferInByInstanceIdWithOptions(request: $_model.QueryTransferInByInstanceIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTransferInByInstanceIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTransferInByInstanceId",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTransferInByInstanceIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryTransferInByInstanceIdResponse({}));
  }

  /**
   * @param request - QueryTransferInByInstanceIdRequest
   * @returns QueryTransferInByInstanceIdResponse
   */
  async queryTransferInByInstanceId(request: $_model.QueryTransferInByInstanceIdRequest): Promise<$_model.QueryTransferInByInstanceIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTransferInByInstanceIdWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTransferInListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTransferInListResponse
   */
  async queryTransferInListWithOptions(request: $_model.QueryTransferInListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTransferInListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.simpleTransferInStatus)) {
      query["SimpleTransferInStatus"] = request.simpleTransferInStatus;
    }

    if (!$dara.isNull(request.submissionEndDate)) {
      query["SubmissionEndDate"] = request.submissionEndDate;
    }

    if (!$dara.isNull(request.submissionStartDate)) {
      query["SubmissionStartDate"] = request.submissionStartDate;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTransferInList",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTransferInListResponse>(await this.callApi(params, req, runtime), new $_model.QueryTransferInListResponse({}));
  }

  /**
   * @param request - QueryTransferInListRequest
   * @returns QueryTransferInListResponse
   */
  async queryTransferInList(request: $_model.QueryTransferInListRequest): Promise<$_model.QueryTransferInListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTransferInListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTransferOutInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTransferOutInfoResponse
   */
  async queryTransferOutInfoWithOptions(request: $_model.QueryTransferOutInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTransferOutInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTransferOutInfo",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTransferOutInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryTransferOutInfoResponse({}));
  }

  /**
   * @param request - QueryTransferOutInfoRequest
   * @returns QueryTransferOutInfoResponse
   */
  async queryTransferOutInfo(request: $_model.QueryTransferOutInfoRequest): Promise<$_model.QueryTransferOutInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTransferOutInfoWithOptions(request, runtime);
  }

  /**
   * @param request - RegistrantProfileRealNameVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegistrantProfileRealNameVerificationResponse
   */
  async registrantProfileRealNameVerificationWithOptions(request: $_model.RegistrantProfileRealNameVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegistrantProfileRealNameVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityCredentialNo)) {
      query["IdentityCredentialNo"] = request.identityCredentialNo;
    }

    if (!$dara.isNull(request.identityCredentialType)) {
      query["IdentityCredentialType"] = request.identityCredentialType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.registrantProfileID)) {
      query["RegistrantProfileID"] = request.registrantProfileID;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identityCredential)) {
      body["IdentityCredential"] = request.identityCredential;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegistrantProfileRealNameVerification",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegistrantProfileRealNameVerificationResponse>(await this.callApi(params, req, runtime), new $_model.RegistrantProfileRealNameVerificationResponse({}));
  }

  /**
   * @param request - RegistrantProfileRealNameVerificationRequest
   * @returns RegistrantProfileRealNameVerificationResponse
   */
  async registrantProfileRealNameVerification(request: $_model.RegistrantProfileRealNameVerificationRequest): Promise<$_model.RegistrantProfileRealNameVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registrantProfileRealNameVerificationWithOptions(request, runtime);
  }

  /**
   * @param request - ResendEmailVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResendEmailVerificationResponse
   */
  async resendEmailVerificationWithOptions(request: $_model.ResendEmailVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResendEmailVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResendEmailVerification",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResendEmailVerificationResponse>(await this.callApi(params, req, runtime), new $_model.ResendEmailVerificationResponse({}));
  }

  /**
   * @param request - ResendEmailVerificationRequest
   * @returns ResendEmailVerificationResponse
   */
  async resendEmailVerification(request: $_model.ResendEmailVerificationRequest): Promise<$_model.ResendEmailVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resendEmailVerificationWithOptions(request, runtime);
  }

  /**
   * @param request - SaveBatchTaskForCreatingOrderActivateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForCreatingOrderActivateResponse
   */
  async saveBatchTaskForCreatingOrderActivateWithOptions(request: $_model.SaveBatchTaskForCreatingOrderActivateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveBatchTaskForCreatingOrderActivateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.orderActivateParam)) {
      query["OrderActivateParam"] = request.orderActivateParam;
    }

    if (!$dara.isNull(request.promotionNo)) {
      query["PromotionNo"] = request.promotionNo;
    }

    if (!$dara.isNull(request.useCoupon)) {
      query["UseCoupon"] = request.useCoupon;
    }

    if (!$dara.isNull(request.usePromotion)) {
      query["UsePromotion"] = request.usePromotion;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveBatchTaskForCreatingOrderActivate",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveBatchTaskForCreatingOrderActivateResponse>(await this.callApi(params, req, runtime), new $_model.SaveBatchTaskForCreatingOrderActivateResponse({}));
  }

  /**
   * @param request - SaveBatchTaskForCreatingOrderActivateRequest
   * @returns SaveBatchTaskForCreatingOrderActivateResponse
   */
  async saveBatchTaskForCreatingOrderActivate(request: $_model.SaveBatchTaskForCreatingOrderActivateRequest): Promise<$_model.SaveBatchTaskForCreatingOrderActivateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderActivateWithOptions(request, runtime);
  }

  /**
   * @param request - SaveBatchTaskForCreatingOrderRedeemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForCreatingOrderRedeemResponse
   */
  async saveBatchTaskForCreatingOrderRedeemWithOptions(request: $_model.SaveBatchTaskForCreatingOrderRedeemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveBatchTaskForCreatingOrderRedeemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.orderRedeemParam)) {
      query["OrderRedeemParam"] = request.orderRedeemParam;
    }

    if (!$dara.isNull(request.promotionNo)) {
      query["PromotionNo"] = request.promotionNo;
    }

    if (!$dara.isNull(request.useCoupon)) {
      query["UseCoupon"] = request.useCoupon;
    }

    if (!$dara.isNull(request.usePromotion)) {
      query["UsePromotion"] = request.usePromotion;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveBatchTaskForCreatingOrderRedeem",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveBatchTaskForCreatingOrderRedeemResponse>(await this.callApi(params, req, runtime), new $_model.SaveBatchTaskForCreatingOrderRedeemResponse({}));
  }

  /**
   * @param request - SaveBatchTaskForCreatingOrderRedeemRequest
   * @returns SaveBatchTaskForCreatingOrderRedeemResponse
   */
  async saveBatchTaskForCreatingOrderRedeem(request: $_model.SaveBatchTaskForCreatingOrderRedeemRequest): Promise<$_model.SaveBatchTaskForCreatingOrderRedeemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderRedeemWithOptions(request, runtime);
  }

  /**
   * @param request - SaveBatchTaskForCreatingOrderRenewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForCreatingOrderRenewResponse
   */
  async saveBatchTaskForCreatingOrderRenewWithOptions(request: $_model.SaveBatchTaskForCreatingOrderRenewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveBatchTaskForCreatingOrderRenewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.orderRenewParam)) {
      query["OrderRenewParam"] = request.orderRenewParam;
    }

    if (!$dara.isNull(request.promotionNo)) {
      query["PromotionNo"] = request.promotionNo;
    }

    if (!$dara.isNull(request.useCoupon)) {
      query["UseCoupon"] = request.useCoupon;
    }

    if (!$dara.isNull(request.usePromotion)) {
      query["UsePromotion"] = request.usePromotion;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveBatchTaskForCreatingOrderRenew",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveBatchTaskForCreatingOrderRenewResponse>(await this.callApi(params, req, runtime), new $_model.SaveBatchTaskForCreatingOrderRenewResponse({}));
  }

  /**
   * @param request - SaveBatchTaskForCreatingOrderRenewRequest
   * @returns SaveBatchTaskForCreatingOrderRenewResponse
   */
  async saveBatchTaskForCreatingOrderRenew(request: $_model.SaveBatchTaskForCreatingOrderRenewRequest): Promise<$_model.SaveBatchTaskForCreatingOrderRenewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderRenewWithOptions(request, runtime);
  }

  /**
   * @param request - SaveBatchTaskForCreatingOrderTransferRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForCreatingOrderTransferResponse
   */
  async saveBatchTaskForCreatingOrderTransferWithOptions(request: $_model.SaveBatchTaskForCreatingOrderTransferRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveBatchTaskForCreatingOrderTransferResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.orderTransferParam)) {
      query["OrderTransferParam"] = request.orderTransferParam;
    }

    if (!$dara.isNull(request.promotionNo)) {
      query["PromotionNo"] = request.promotionNo;
    }

    if (!$dara.isNull(request.useCoupon)) {
      query["UseCoupon"] = request.useCoupon;
    }

    if (!$dara.isNull(request.usePromotion)) {
      query["UsePromotion"] = request.usePromotion;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveBatchTaskForCreatingOrderTransfer",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveBatchTaskForCreatingOrderTransferResponse>(await this.callApi(params, req, runtime), new $_model.SaveBatchTaskForCreatingOrderTransferResponse({}));
  }

  /**
   * @param request - SaveBatchTaskForCreatingOrderTransferRequest
   * @returns SaveBatchTaskForCreatingOrderTransferResponse
   */
  async saveBatchTaskForCreatingOrderTransfer(request: $_model.SaveBatchTaskForCreatingOrderTransferRequest): Promise<$_model.SaveBatchTaskForCreatingOrderTransferResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveBatchTaskForCreatingOrderTransferWithOptions(request, runtime);
  }

  /**
   * @param request - SaveBatchTaskForDomainNameProxyServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForDomainNameProxyServiceResponse
   */
  async saveBatchTaskForDomainNameProxyServiceWithOptions(request: $_model.SaveBatchTaskForDomainNameProxyServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveBatchTaskForDomainNameProxyServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveBatchTaskForDomainNameProxyService",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveBatchTaskForDomainNameProxyServiceResponse>(await this.callApi(params, req, runtime), new $_model.SaveBatchTaskForDomainNameProxyServiceResponse({}));
  }

  /**
   * @param request - SaveBatchTaskForDomainNameProxyServiceRequest
   * @returns SaveBatchTaskForDomainNameProxyServiceResponse
   */
  async saveBatchTaskForDomainNameProxyService(request: $_model.SaveBatchTaskForDomainNameProxyServiceRequest): Promise<$_model.SaveBatchTaskForDomainNameProxyServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveBatchTaskForDomainNameProxyServiceWithOptions(request, runtime);
  }

  /**
   * @param request - SaveBatchTaskForModifyingDomainDnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForModifyingDomainDnsResponse
   */
  async saveBatchTaskForModifyingDomainDnsWithOptions(request: $_model.SaveBatchTaskForModifyingDomainDnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveBatchTaskForModifyingDomainDnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunDns)) {
      query["AliyunDns"] = request.aliyunDns;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainNameServer)) {
      query["DomainNameServer"] = request.domainNameServer;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveBatchTaskForModifyingDomainDns",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveBatchTaskForModifyingDomainDnsResponse>(await this.callApi(params, req, runtime), new $_model.SaveBatchTaskForModifyingDomainDnsResponse({}));
  }

  /**
   * @param request - SaveBatchTaskForModifyingDomainDnsRequest
   * @returns SaveBatchTaskForModifyingDomainDnsResponse
   */
  async saveBatchTaskForModifyingDomainDns(request: $_model.SaveBatchTaskForModifyingDomainDnsRequest): Promise<$_model.SaveBatchTaskForModifyingDomainDnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveBatchTaskForModifyingDomainDnsWithOptions(request, runtime);
  }

  /**
   * 国际站删除抢注批量接口
   * 
   * @param request - SaveBatchTaskForReserveDropListDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForReserveDropListDomainResponse
   */
  async saveBatchTaskForReserveDropListDomainWithOptions(request: $_model.SaveBatchTaskForReserveDropListDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveBatchTaskForReserveDropListDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactTemplateId)) {
      query["ContactTemplateId"] = request.contactTemplateId;
    }

    if (!$dara.isNull(request.domains)) {
      query["Domains"] = request.domains;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveBatchTaskForReserveDropListDomain",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveBatchTaskForReserveDropListDomainResponse>(await this.callApi(params, req, runtime), new $_model.SaveBatchTaskForReserveDropListDomainResponse({}));
  }

  /**
   * 国际站删除抢注批量接口
   * 
   * @param request - SaveBatchTaskForReserveDropListDomainRequest
   * @returns SaveBatchTaskForReserveDropListDomainResponse
   */
  async saveBatchTaskForReserveDropListDomain(request: $_model.SaveBatchTaskForReserveDropListDomainRequest): Promise<$_model.SaveBatchTaskForReserveDropListDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveBatchTaskForReserveDropListDomainWithOptions(request, runtime);
  }

  /**
   * @param request - SaveBatchTaskForTransferProhibitionLockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForTransferProhibitionLockResponse
   */
  async saveBatchTaskForTransferProhibitionLockWithOptions(request: $_model.SaveBatchTaskForTransferProhibitionLockRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveBatchTaskForTransferProhibitionLockResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveBatchTaskForTransferProhibitionLock",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveBatchTaskForTransferProhibitionLockResponse>(await this.callApi(params, req, runtime), new $_model.SaveBatchTaskForTransferProhibitionLockResponse({}));
  }

  /**
   * @param request - SaveBatchTaskForTransferProhibitionLockRequest
   * @returns SaveBatchTaskForTransferProhibitionLockResponse
   */
  async saveBatchTaskForTransferProhibitionLock(request: $_model.SaveBatchTaskForTransferProhibitionLockRequest): Promise<$_model.SaveBatchTaskForTransferProhibitionLockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveBatchTaskForTransferProhibitionLockWithOptions(request, runtime);
  }

  /**
   * @param request - SaveBatchTaskForUpdateProhibitionLockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForUpdateProhibitionLockResponse
   */
  async saveBatchTaskForUpdateProhibitionLockWithOptions(request: $_model.SaveBatchTaskForUpdateProhibitionLockRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveBatchTaskForUpdateProhibitionLockResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveBatchTaskForUpdateProhibitionLock",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveBatchTaskForUpdateProhibitionLockResponse>(await this.callApi(params, req, runtime), new $_model.SaveBatchTaskForUpdateProhibitionLockResponse({}));
  }

  /**
   * @param request - SaveBatchTaskForUpdateProhibitionLockRequest
   * @returns SaveBatchTaskForUpdateProhibitionLockResponse
   */
  async saveBatchTaskForUpdateProhibitionLock(request: $_model.SaveBatchTaskForUpdateProhibitionLockRequest): Promise<$_model.SaveBatchTaskForUpdateProhibitionLockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveBatchTaskForUpdateProhibitionLockWithOptions(request, runtime);
  }

  /**
   * @param request - SaveBatchTaskForUpdatingContactInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForUpdatingContactInfoResponse
   */
  async saveBatchTaskForUpdatingContactInfoWithOptions(request: $_model.SaveBatchTaskForUpdatingContactInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveBatchTaskForUpdatingContactInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addTransferLock)) {
      query["AddTransferLock"] = request.addTransferLock;
    }

    if (!$dara.isNull(request.contactType)) {
      query["ContactType"] = request.contactType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveBatchTaskForUpdatingContactInfo",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveBatchTaskForUpdatingContactInfoResponse>(await this.callApi(params, req, runtime), new $_model.SaveBatchTaskForUpdatingContactInfoResponse({}));
  }

  /**
   * @param request - SaveBatchTaskForUpdatingContactInfoRequest
   * @returns SaveBatchTaskForUpdatingContactInfoResponse
   */
  async saveBatchTaskForUpdatingContactInfo(request: $_model.SaveBatchTaskForUpdatingContactInfoRequest): Promise<$_model.SaveBatchTaskForUpdatingContactInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveBatchTaskForUpdatingContactInfoWithOptions(request, runtime);
  }

  /**
   * @param request - SaveBatchTaskForUpdatingContactInfoByNewContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveBatchTaskForUpdatingContactInfoByNewContactResponse
   */
  async saveBatchTaskForUpdatingContactInfoByNewContactWithOptions(request: $_model.SaveBatchTaskForUpdatingContactInfoByNewContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveBatchTaskForUpdatingContactInfoByNewContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.contactType)) {
      query["ContactType"] = request.contactType;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.postalCode)) {
      query["PostalCode"] = request.postalCode;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    if (!$dara.isNull(request.registrantName)) {
      query["RegistrantName"] = request.registrantName;
    }

    if (!$dara.isNull(request.registrantOrganization)) {
      query["RegistrantOrganization"] = request.registrantOrganization;
    }

    if (!$dara.isNull(request.telArea)) {
      query["TelArea"] = request.telArea;
    }

    if (!$dara.isNull(request.telExt)) {
      query["TelExt"] = request.telExt;
    }

    if (!$dara.isNull(request.telephone)) {
      query["Telephone"] = request.telephone;
    }

    if (!$dara.isNull(request.transferOutProhibited)) {
      query["TransferOutProhibited"] = request.transferOutProhibited;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveBatchTaskForUpdatingContactInfoByNewContact",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveBatchTaskForUpdatingContactInfoByNewContactResponse>(await this.callApi(params, req, runtime), new $_model.SaveBatchTaskForUpdatingContactInfoByNewContactResponse({}));
  }

  /**
   * @param request - SaveBatchTaskForUpdatingContactInfoByNewContactRequest
   * @returns SaveBatchTaskForUpdatingContactInfoByNewContactResponse
   */
  async saveBatchTaskForUpdatingContactInfoByNewContact(request: $_model.SaveBatchTaskForUpdatingContactInfoByNewContactRequest): Promise<$_model.SaveBatchTaskForUpdatingContactInfoByNewContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveBatchTaskForUpdatingContactInfoByNewContactWithOptions(request, runtime);
  }

  /**
   * @param request - SaveRegistrantProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveRegistrantProfileResponse
   */
  async saveRegistrantProfileWithOptions(request: $_model.SaveRegistrantProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveRegistrantProfileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.defaultRegistrantProfile)) {
      query["DefaultRegistrantProfile"] = request.defaultRegistrantProfile;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.postalCode)) {
      query["PostalCode"] = request.postalCode;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    if (!$dara.isNull(request.registrantName)) {
      query["RegistrantName"] = request.registrantName;
    }

    if (!$dara.isNull(request.registrantOrganization)) {
      query["RegistrantOrganization"] = request.registrantOrganization;
    }

    if (!$dara.isNull(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!$dara.isNull(request.registrantProfileType)) {
      query["RegistrantProfileType"] = request.registrantProfileType;
    }

    if (!$dara.isNull(request.registrantType)) {
      query["RegistrantType"] = request.registrantType;
    }

    if (!$dara.isNull(request.telArea)) {
      query["TelArea"] = request.telArea;
    }

    if (!$dara.isNull(request.telExt)) {
      query["TelExt"] = request.telExt;
    }

    if (!$dara.isNull(request.telephone)) {
      query["Telephone"] = request.telephone;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveRegistrantProfile",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveRegistrantProfileResponse>(await this.callApi(params, req, runtime), new $_model.SaveRegistrantProfileResponse({}));
  }

  /**
   * @param request - SaveRegistrantProfileRequest
   * @returns SaveRegistrantProfileResponse
   */
  async saveRegistrantProfile(request: $_model.SaveRegistrantProfileRequest): Promise<$_model.SaveRegistrantProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveRegistrantProfileWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForAddingDSRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForAddingDSRecordResponse
   */
  async saveSingleTaskForAddingDSRecordWithOptions(request: $_model.SaveSingleTaskForAddingDSRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForAddingDSRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!$dara.isNull(request.digestType)) {
      query["DigestType"] = request.digestType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.keyTag)) {
      query["KeyTag"] = request.keyTag;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForAddingDSRecord",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForAddingDSRecordResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForAddingDSRecordResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForAddingDSRecordRequest
   * @returns SaveSingleTaskForAddingDSRecordResponse
   */
  async saveSingleTaskForAddingDSRecord(request: $_model.SaveSingleTaskForAddingDSRecordRequest): Promise<$_model.SaveSingleTaskForAddingDSRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForAddingDSRecordWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForApprovingTransferOutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForApprovingTransferOutResponse
   */
  async saveSingleTaskForApprovingTransferOutWithOptions(request: $_model.SaveSingleTaskForApprovingTransferOutRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForApprovingTransferOutResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForApprovingTransferOut",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForApprovingTransferOutResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForApprovingTransferOutResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForApprovingTransferOutRequest
   * @returns SaveSingleTaskForApprovingTransferOutResponse
   */
  async saveSingleTaskForApprovingTransferOut(request: $_model.SaveSingleTaskForApprovingTransferOutRequest): Promise<$_model.SaveSingleTaskForApprovingTransferOutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForApprovingTransferOutWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForAssociatingEnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForAssociatingEnsResponse
   */
  async saveSingleTaskForAssociatingEnsWithOptions(request: $_model.SaveSingleTaskForAssociatingEnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForAssociatingEnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForAssociatingEns",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForAssociatingEnsResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForAssociatingEnsResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForAssociatingEnsRequest
   * @returns SaveSingleTaskForAssociatingEnsResponse
   */
  async saveSingleTaskForAssociatingEns(request: $_model.SaveSingleTaskForAssociatingEnsRequest): Promise<$_model.SaveSingleTaskForAssociatingEnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForAssociatingEnsWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForCancelingTransferInRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForCancelingTransferInResponse
   */
  async saveSingleTaskForCancelingTransferInWithOptions(request: $_model.SaveSingleTaskForCancelingTransferInRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForCancelingTransferInResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForCancelingTransferIn",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForCancelingTransferInResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForCancelingTransferInResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForCancelingTransferInRequest
   * @returns SaveSingleTaskForCancelingTransferInResponse
   */
  async saveSingleTaskForCancelingTransferIn(request: $_model.SaveSingleTaskForCancelingTransferInRequest): Promise<$_model.SaveSingleTaskForCancelingTransferInResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForCancelingTransferInWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForCancelingTransferOutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForCancelingTransferOutResponse
   */
  async saveSingleTaskForCancelingTransferOutWithOptions(request: $_model.SaveSingleTaskForCancelingTransferOutRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForCancelingTransferOutResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForCancelingTransferOut",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForCancelingTransferOutResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForCancelingTransferOutResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForCancelingTransferOutRequest
   * @returns SaveSingleTaskForCancelingTransferOutResponse
   */
  async saveSingleTaskForCancelingTransferOut(request: $_model.SaveSingleTaskForCancelingTransferOutRequest): Promise<$_model.SaveSingleTaskForCancelingTransferOutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForCancelingTransferOutWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForCreatingDnsHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForCreatingDnsHostResponse
   */
  async saveSingleTaskForCreatingDnsHostWithOptions(request: $_model.SaveSingleTaskForCreatingDnsHostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForCreatingDnsHostResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dnsName)) {
      query["DnsName"] = request.dnsName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForCreatingDnsHost",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForCreatingDnsHostResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForCreatingDnsHostResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForCreatingDnsHostRequest
   * @returns SaveSingleTaskForCreatingDnsHostResponse
   */
  async saveSingleTaskForCreatingDnsHost(request: $_model.SaveSingleTaskForCreatingDnsHostRequest): Promise<$_model.SaveSingleTaskForCreatingDnsHostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingDnsHostWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForCreatingOrderActivateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForCreatingOrderActivateResponse
   */
  async saveSingleTaskForCreatingOrderActivateWithOptions(request: $_model.SaveSingleTaskForCreatingOrderActivateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForCreatingOrderActivateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.aliyunDns)) {
      query["AliyunDns"] = request.aliyunDns;
    }

    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.dns1)) {
      query["Dns1"] = request.dns1;
    }

    if (!$dara.isNull(request.dns2)) {
      query["Dns2"] = request.dns2;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.enableDomainProxy)) {
      query["EnableDomainProxy"] = request.enableDomainProxy;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.permitPremiumActivation)) {
      query["PermitPremiumActivation"] = request.permitPremiumActivation;
    }

    if (!$dara.isNull(request.postalCode)) {
      query["PostalCode"] = request.postalCode;
    }

    if (!$dara.isNull(request.promotionNo)) {
      query["PromotionNo"] = request.promotionNo;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    if (!$dara.isNull(request.registrantName)) {
      query["RegistrantName"] = request.registrantName;
    }

    if (!$dara.isNull(request.registrantOrganization)) {
      query["RegistrantOrganization"] = request.registrantOrganization;
    }

    if (!$dara.isNull(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!$dara.isNull(request.registrantType)) {
      query["RegistrantType"] = request.registrantType;
    }

    if (!$dara.isNull(request.subscriptionDuration)) {
      query["SubscriptionDuration"] = request.subscriptionDuration;
    }

    if (!$dara.isNull(request.telArea)) {
      query["TelArea"] = request.telArea;
    }

    if (!$dara.isNull(request.telExt)) {
      query["TelExt"] = request.telExt;
    }

    if (!$dara.isNull(request.telephone)) {
      query["Telephone"] = request.telephone;
    }

    if (!$dara.isNull(request.trademarkDomainActivation)) {
      query["TrademarkDomainActivation"] = request.trademarkDomainActivation;
    }

    if (!$dara.isNull(request.useCoupon)) {
      query["UseCoupon"] = request.useCoupon;
    }

    if (!$dara.isNull(request.usePromotion)) {
      query["UsePromotion"] = request.usePromotion;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForCreatingOrderActivate",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForCreatingOrderActivateResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForCreatingOrderActivateResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForCreatingOrderActivateRequest
   * @returns SaveSingleTaskForCreatingOrderActivateResponse
   */
  async saveSingleTaskForCreatingOrderActivate(request: $_model.SaveSingleTaskForCreatingOrderActivateRequest): Promise<$_model.SaveSingleTaskForCreatingOrderActivateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderActivateWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForCreatingOrderRedeemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForCreatingOrderRedeemResponse
   */
  async saveSingleTaskForCreatingOrderRedeemWithOptions(request: $_model.SaveSingleTaskForCreatingOrderRedeemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForCreatingOrderRedeemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.currentExpirationDate)) {
      query["CurrentExpirationDate"] = request.currentExpirationDate;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.promotionNo)) {
      query["PromotionNo"] = request.promotionNo;
    }

    if (!$dara.isNull(request.useCoupon)) {
      query["UseCoupon"] = request.useCoupon;
    }

    if (!$dara.isNull(request.usePromotion)) {
      query["UsePromotion"] = request.usePromotion;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForCreatingOrderRedeem",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForCreatingOrderRedeemResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForCreatingOrderRedeemResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForCreatingOrderRedeemRequest
   * @returns SaveSingleTaskForCreatingOrderRedeemResponse
   */
  async saveSingleTaskForCreatingOrderRedeem(request: $_model.SaveSingleTaskForCreatingOrderRedeemRequest): Promise<$_model.SaveSingleTaskForCreatingOrderRedeemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderRedeemWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForCreatingOrderRenewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForCreatingOrderRenewResponse
   */
  async saveSingleTaskForCreatingOrderRenewWithOptions(request: $_model.SaveSingleTaskForCreatingOrderRenewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForCreatingOrderRenewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.currentExpirationDate)) {
      query["CurrentExpirationDate"] = request.currentExpirationDate;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.promotionNo)) {
      query["PromotionNo"] = request.promotionNo;
    }

    if (!$dara.isNull(request.subscriptionDuration)) {
      query["SubscriptionDuration"] = request.subscriptionDuration;
    }

    if (!$dara.isNull(request.useCoupon)) {
      query["UseCoupon"] = request.useCoupon;
    }

    if (!$dara.isNull(request.usePromotion)) {
      query["UsePromotion"] = request.usePromotion;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForCreatingOrderRenew",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForCreatingOrderRenewResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForCreatingOrderRenewResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForCreatingOrderRenewRequest
   * @returns SaveSingleTaskForCreatingOrderRenewResponse
   */
  async saveSingleTaskForCreatingOrderRenew(request: $_model.SaveSingleTaskForCreatingOrderRenewRequest): Promise<$_model.SaveSingleTaskForCreatingOrderRenewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderRenewWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForCreatingOrderTransferRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForCreatingOrderTransferResponse
   */
  async saveSingleTaskForCreatingOrderTransferWithOptions(request: $_model.SaveSingleTaskForCreatingOrderTransferRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForCreatingOrderTransferResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationCode)) {
      query["AuthorizationCode"] = request.authorizationCode;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.permitPremiumTransfer)) {
      query["PermitPremiumTransfer"] = request.permitPremiumTransfer;
    }

    if (!$dara.isNull(request.promotionNo)) {
      query["PromotionNo"] = request.promotionNo;
    }

    if (!$dara.isNull(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!$dara.isNull(request.useCoupon)) {
      query["UseCoupon"] = request.useCoupon;
    }

    if (!$dara.isNull(request.usePromotion)) {
      query["UsePromotion"] = request.usePromotion;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForCreatingOrderTransfer",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForCreatingOrderTransferResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForCreatingOrderTransferResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForCreatingOrderTransferRequest
   * @returns SaveSingleTaskForCreatingOrderTransferResponse
   */
  async saveSingleTaskForCreatingOrderTransfer(request: $_model.SaveSingleTaskForCreatingOrderTransferRequest): Promise<$_model.SaveSingleTaskForCreatingOrderTransferResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForCreatingOrderTransferWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForDeletingDSRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForDeletingDSRecordResponse
   */
  async saveSingleTaskForDeletingDSRecordWithOptions(request: $_model.SaveSingleTaskForDeletingDSRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForDeletingDSRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.keyTag)) {
      query["KeyTag"] = request.keyTag;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForDeletingDSRecord",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForDeletingDSRecordResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForDeletingDSRecordResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForDeletingDSRecordRequest
   * @returns SaveSingleTaskForDeletingDSRecordResponse
   */
  async saveSingleTaskForDeletingDSRecord(request: $_model.SaveSingleTaskForDeletingDSRecordRequest): Promise<$_model.SaveSingleTaskForDeletingDSRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForDeletingDSRecordWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForDeletingDnsHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForDeletingDnsHostResponse
   */
  async saveSingleTaskForDeletingDnsHostWithOptions(request: $_model.SaveSingleTaskForDeletingDnsHostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForDeletingDnsHostResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dnsName)) {
      query["DnsName"] = request.dnsName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForDeletingDnsHost",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForDeletingDnsHostResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForDeletingDnsHostResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForDeletingDnsHostRequest
   * @returns SaveSingleTaskForDeletingDnsHostResponse
   */
  async saveSingleTaskForDeletingDnsHost(request: $_model.SaveSingleTaskForDeletingDnsHostRequest): Promise<$_model.SaveSingleTaskForDeletingDnsHostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForDeletingDnsHostWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForDisassociatingEnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForDisassociatingEnsResponse
   */
  async saveSingleTaskForDisassociatingEnsWithOptions(request: $_model.SaveSingleTaskForDisassociatingEnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForDisassociatingEnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForDisassociatingEns",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForDisassociatingEnsResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForDisassociatingEnsResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForDisassociatingEnsRequest
   * @returns SaveSingleTaskForDisassociatingEnsResponse
   */
  async saveSingleTaskForDisassociatingEns(request: $_model.SaveSingleTaskForDisassociatingEnsRequest): Promise<$_model.SaveSingleTaskForDisassociatingEnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForDisassociatingEnsWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForDomainNameProxyServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForDomainNameProxyServiceResponse
   */
  async saveSingleTaskForDomainNameProxyServiceWithOptions(request: $_model.SaveSingleTaskForDomainNameProxyServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForDomainNameProxyServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForDomainNameProxyService",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForDomainNameProxyServiceResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForDomainNameProxyServiceResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForDomainNameProxyServiceRequest
   * @returns SaveSingleTaskForDomainNameProxyServiceResponse
   */
  async saveSingleTaskForDomainNameProxyService(request: $_model.SaveSingleTaskForDomainNameProxyServiceRequest): Promise<$_model.SaveSingleTaskForDomainNameProxyServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForDomainNameProxyServiceWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForModifyingDSRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForModifyingDSRecordResponse
   */
  async saveSingleTaskForModifyingDSRecordWithOptions(request: $_model.SaveSingleTaskForModifyingDSRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForModifyingDSRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!$dara.isNull(request.digestType)) {
      query["DigestType"] = request.digestType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.keyTag)) {
      query["KeyTag"] = request.keyTag;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForModifyingDSRecord",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForModifyingDSRecordResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForModifyingDSRecordResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForModifyingDSRecordRequest
   * @returns SaveSingleTaskForModifyingDSRecordResponse
   */
  async saveSingleTaskForModifyingDSRecord(request: $_model.SaveSingleTaskForModifyingDSRecordRequest): Promise<$_model.SaveSingleTaskForModifyingDSRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForModifyingDSRecordWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForModifyingDnsHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForModifyingDnsHostResponse
   */
  async saveSingleTaskForModifyingDnsHostWithOptions(request: $_model.SaveSingleTaskForModifyingDnsHostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForModifyingDnsHostResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dnsName)) {
      query["DnsName"] = request.dnsName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForModifyingDnsHost",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForModifyingDnsHostResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForModifyingDnsHostResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForModifyingDnsHostRequest
   * @returns SaveSingleTaskForModifyingDnsHostResponse
   */
  async saveSingleTaskForModifyingDnsHost(request: $_model.SaveSingleTaskForModifyingDnsHostRequest): Promise<$_model.SaveSingleTaskForModifyingDnsHostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForModifyingDnsHostWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForQueryingTransferAuthorizationCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForQueryingTransferAuthorizationCodeResponse
   */
  async saveSingleTaskForQueryingTransferAuthorizationCodeWithOptions(request: $_model.SaveSingleTaskForQueryingTransferAuthorizationCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForQueryingTransferAuthorizationCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForQueryingTransferAuthorizationCode",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForQueryingTransferAuthorizationCodeResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForQueryingTransferAuthorizationCodeResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForQueryingTransferAuthorizationCodeRequest
   * @returns SaveSingleTaskForQueryingTransferAuthorizationCodeResponse
   */
  async saveSingleTaskForQueryingTransferAuthorizationCode(request: $_model.SaveSingleTaskForQueryingTransferAuthorizationCodeRequest): Promise<$_model.SaveSingleTaskForQueryingTransferAuthorizationCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForQueryingTransferAuthorizationCodeWithOptions(request, runtime);
  }

  /**
   * 单笔抢注批量接口
   * 
   * @param request - SaveSingleTaskForReserveDropListDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForReserveDropListDomainResponse
   */
  async saveSingleTaskForReserveDropListDomainWithOptions(request: $_model.SaveSingleTaskForReserveDropListDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForReserveDropListDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactTemplateId)) {
      query["ContactTemplateId"] = request.contactTemplateId;
    }

    if (!$dara.isNull(request.dns1)) {
      query["Dns1"] = request.dns1;
    }

    if (!$dara.isNull(request.dns2)) {
      query["Dns2"] = request.dns2;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForReserveDropListDomain",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForReserveDropListDomainResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForReserveDropListDomainResponse({}));
  }

  /**
   * 单笔抢注批量接口
   * 
   * @param request - SaveSingleTaskForReserveDropListDomainRequest
   * @returns SaveSingleTaskForReserveDropListDomainResponse
   */
  async saveSingleTaskForReserveDropListDomain(request: $_model.SaveSingleTaskForReserveDropListDomainRequest): Promise<$_model.SaveSingleTaskForReserveDropListDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForReserveDropListDomainWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForSaveArtExtensionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForSaveArtExtensionResponse
   */
  async saveSingleTaskForSaveArtExtensionWithOptions(request: $_model.SaveSingleTaskForSaveArtExtensionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForSaveArtExtensionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dateOrPeriod)) {
      query["DateOrPeriod"] = request.dateOrPeriod;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.features)) {
      query["Features"] = request.features;
    }

    if (!$dara.isNull(request.inscriptionsAndMarkings)) {
      query["InscriptionsAndMarkings"] = request.inscriptionsAndMarkings;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maker)) {
      query["Maker"] = request.maker;
    }

    if (!$dara.isNull(request.materialsAndTechniques)) {
      query["MaterialsAndTechniques"] = request.materialsAndTechniques;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.reference)) {
      query["Reference"] = request.reference;
    }

    if (!$dara.isNull(request.subject)) {
      query["Subject"] = request.subject;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForSaveArtExtension",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForSaveArtExtensionResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForSaveArtExtensionResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForSaveArtExtensionRequest
   * @returns SaveSingleTaskForSaveArtExtensionResponse
   */
  async saveSingleTaskForSaveArtExtension(request: $_model.SaveSingleTaskForSaveArtExtensionRequest): Promise<$_model.SaveSingleTaskForSaveArtExtensionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForSaveArtExtensionWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForSynchronizingDSRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForSynchronizingDSRecordResponse
   */
  async saveSingleTaskForSynchronizingDSRecordWithOptions(request: $_model.SaveSingleTaskForSynchronizingDSRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForSynchronizingDSRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForSynchronizingDSRecord",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForSynchronizingDSRecordResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForSynchronizingDSRecordResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForSynchronizingDSRecordRequest
   * @returns SaveSingleTaskForSynchronizingDSRecordResponse
   */
  async saveSingleTaskForSynchronizingDSRecord(request: $_model.SaveSingleTaskForSynchronizingDSRecordRequest): Promise<$_model.SaveSingleTaskForSynchronizingDSRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForSynchronizingDSRecordWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForSynchronizingDnsHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForSynchronizingDnsHostResponse
   */
  async saveSingleTaskForSynchronizingDnsHostWithOptions(request: $_model.SaveSingleTaskForSynchronizingDnsHostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForSynchronizingDnsHostResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForSynchronizingDnsHost",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForSynchronizingDnsHostResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForSynchronizingDnsHostResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForSynchronizingDnsHostRequest
   * @returns SaveSingleTaskForSynchronizingDnsHostResponse
   */
  async saveSingleTaskForSynchronizingDnsHost(request: $_model.SaveSingleTaskForSynchronizingDnsHostRequest): Promise<$_model.SaveSingleTaskForSynchronizingDnsHostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForSynchronizingDnsHostWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForTransferProhibitionLockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForTransferProhibitionLockResponse
   */
  async saveSingleTaskForTransferProhibitionLockWithOptions(request: $_model.SaveSingleTaskForTransferProhibitionLockRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForTransferProhibitionLockResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForTransferProhibitionLock",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForTransferProhibitionLockResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForTransferProhibitionLockResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForTransferProhibitionLockRequest
   * @returns SaveSingleTaskForTransferProhibitionLockResponse
   */
  async saveSingleTaskForTransferProhibitionLock(request: $_model.SaveSingleTaskForTransferProhibitionLockRequest): Promise<$_model.SaveSingleTaskForTransferProhibitionLockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForTransferProhibitionLockWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForUpdateProhibitionLockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForUpdateProhibitionLockResponse
   */
  async saveSingleTaskForUpdateProhibitionLockWithOptions(request: $_model.SaveSingleTaskForUpdateProhibitionLockRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForUpdateProhibitionLockResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForUpdateProhibitionLock",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForUpdateProhibitionLockResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForUpdateProhibitionLockResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForUpdateProhibitionLockRequest
   * @returns SaveSingleTaskForUpdateProhibitionLockResponse
   */
  async saveSingleTaskForUpdateProhibitionLock(request: $_model.SaveSingleTaskForUpdateProhibitionLockRequest): Promise<$_model.SaveSingleTaskForUpdateProhibitionLockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForUpdateProhibitionLockWithOptions(request, runtime);
  }

  /**
   * @param request - SaveSingleTaskForUpdatingContactInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSingleTaskForUpdatingContactInfoResponse
   */
  async saveSingleTaskForUpdatingContactInfoWithOptions(request: $_model.SaveSingleTaskForUpdatingContactInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSingleTaskForUpdatingContactInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addTransferLock)) {
      query["AddTransferLock"] = request.addTransferLock;
    }

    if (!$dara.isNull(request.contactType)) {
      query["ContactType"] = request.contactType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSingleTaskForUpdatingContactInfo",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSingleTaskForUpdatingContactInfoResponse>(await this.callApi(params, req, runtime), new $_model.SaveSingleTaskForUpdatingContactInfoResponse({}));
  }

  /**
   * @param request - SaveSingleTaskForUpdatingContactInfoRequest
   * @returns SaveSingleTaskForUpdatingContactInfoResponse
   */
  async saveSingleTaskForUpdatingContactInfo(request: $_model.SaveSingleTaskForUpdatingContactInfoRequest): Promise<$_model.SaveSingleTaskForUpdatingContactInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSingleTaskForUpdatingContactInfoWithOptions(request, runtime);
  }

  /**
   * @param request - SaveTaskForSubmittingDomainDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTaskForSubmittingDomainDeleteResponse
   */
  async saveTaskForSubmittingDomainDeleteWithOptions(request: $_model.SaveTaskForSubmittingDomainDeleteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveTaskForSubmittingDomainDeleteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveTaskForSubmittingDomainDelete",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveTaskForSubmittingDomainDeleteResponse>(await this.callApi(params, req, runtime), new $_model.SaveTaskForSubmittingDomainDeleteResponse({}));
  }

  /**
   * @param request - SaveTaskForSubmittingDomainDeleteRequest
   * @returns SaveTaskForSubmittingDomainDeleteResponse
   */
  async saveTaskForSubmittingDomainDelete(request: $_model.SaveTaskForSubmittingDomainDeleteRequest): Promise<$_model.SaveTaskForSubmittingDomainDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveTaskForSubmittingDomainDeleteWithOptions(request, runtime);
  }

  /**
   * @param request - SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse
   */
  async saveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialWithOptions(request: $_model.SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.identityCredentialNo)) {
      query["IdentityCredentialNo"] = request.identityCredentialNo;
    }

    if (!$dara.isNull(request.identityCredentialType)) {
      query["IdentityCredentialType"] = request.identityCredentialType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identityCredential)) {
      body["IdentityCredential"] = request.identityCredential;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredential",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse>(await this.callApi(params, req, runtime), new $_model.SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse({}));
  }

  /**
   * @param request - SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest
   * @returns SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse
   */
  async saveTaskForSubmittingDomainRealNameVerificationByIdentityCredential(request: $_model.SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest): Promise<$_model.SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialWithOptions(request, runtime);
  }

  /**
   * @param request - SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse
   */
  async saveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDWithOptions(request: $_model.SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileID",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse>(await this.callApi(params, req, runtime), new $_model.SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse({}));
  }

  /**
   * @param request - SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest
   * @returns SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse
   */
  async saveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileID(request: $_model.SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest): Promise<$_model.SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDWithOptions(request, runtime);
  }

  /**
   * @param request - SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse
   */
  async saveTaskForUpdatingRegistrantInfoByIdentityCredentialWithOptions(request: $_model.SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.identityCredentialNo)) {
      query["IdentityCredentialNo"] = request.identityCredentialNo;
    }

    if (!$dara.isNull(request.identityCredentialType)) {
      query["IdentityCredentialType"] = request.identityCredentialType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.postalCode)) {
      query["PostalCode"] = request.postalCode;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    if (!$dara.isNull(request.registrantName)) {
      query["RegistrantName"] = request.registrantName;
    }

    if (!$dara.isNull(request.registrantOrganization)) {
      query["RegistrantOrganization"] = request.registrantOrganization;
    }

    if (!$dara.isNull(request.registrantType)) {
      query["RegistrantType"] = request.registrantType;
    }

    if (!$dara.isNull(request.telArea)) {
      query["TelArea"] = request.telArea;
    }

    if (!$dara.isNull(request.telExt)) {
      query["TelExt"] = request.telExt;
    }

    if (!$dara.isNull(request.telephone)) {
      query["Telephone"] = request.telephone;
    }

    if (!$dara.isNull(request.transferOutProhibited)) {
      query["TransferOutProhibited"] = request.transferOutProhibited;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identityCredential)) {
      body["IdentityCredential"] = request.identityCredential;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveTaskForUpdatingRegistrantInfoByIdentityCredential",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse>(await this.callApi(params, req, runtime), new $_model.SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse({}));
  }

  /**
   * @param request - SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest
   * @returns SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse
   */
  async saveTaskForUpdatingRegistrantInfoByIdentityCredential(request: $_model.SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest): Promise<$_model.SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveTaskForUpdatingRegistrantInfoByIdentityCredentialWithOptions(request, runtime);
  }

  /**
   * @param request - SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse
   */
  async saveTaskForUpdatingRegistrantInfoByRegistrantProfileIDWithOptions(request: $_model.SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.registrantProfileId)) {
      query["RegistrantProfileId"] = request.registrantProfileId;
    }

    if (!$dara.isNull(request.transferOutProhibited)) {
      query["TransferOutProhibited"] = request.transferOutProhibited;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveTaskForUpdatingRegistrantInfoByRegistrantProfileID",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse>(await this.callApi(params, req, runtime), new $_model.SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse({}));
  }

  /**
   * @param request - SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest
   * @returns SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse
   */
  async saveTaskForUpdatingRegistrantInfoByRegistrantProfileID(request: $_model.SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest): Promise<$_model.SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveTaskForUpdatingRegistrantInfoByRegistrantProfileIDWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitEmailVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitEmailVerificationResponse
   */
  async submitEmailVerificationWithOptions(request: $_model.SubmitEmailVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitEmailVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sendIfExist)) {
      query["SendIfExist"] = request.sendIfExist;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitEmailVerification",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitEmailVerificationResponse>(await this.callApi(params, req, runtime), new $_model.SubmitEmailVerificationResponse({}));
  }

  /**
   * @param request - SubmitEmailVerificationRequest
   * @returns SubmitEmailVerificationResponse
   */
  async submitEmailVerification(request: $_model.SubmitEmailVerificationRequest): Promise<$_model.SubmitEmailVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitEmailVerificationWithOptions(request, runtime);
  }

  /**
   * @param request - TransferInCheckMailTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferInCheckMailTokenResponse
   */
  async transferInCheckMailTokenWithOptions(request: $_model.TransferInCheckMailTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferInCheckMailTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferInCheckMailToken",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferInCheckMailTokenResponse>(await this.callApi(params, req, runtime), new $_model.TransferInCheckMailTokenResponse({}));
  }

  /**
   * @param request - TransferInCheckMailTokenRequest
   * @returns TransferInCheckMailTokenResponse
   */
  async transferInCheckMailToken(request: $_model.TransferInCheckMailTokenRequest): Promise<$_model.TransferInCheckMailTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferInCheckMailTokenWithOptions(request, runtime);
  }

  /**
   * @param request - TransferInReenterTransferAuthorizationCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferInReenterTransferAuthorizationCodeResponse
   */
  async transferInReenterTransferAuthorizationCodeWithOptions(request: $_model.TransferInReenterTransferAuthorizationCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferInReenterTransferAuthorizationCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.transferAuthorizationCode)) {
      query["TransferAuthorizationCode"] = request.transferAuthorizationCode;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferInReenterTransferAuthorizationCode",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferInReenterTransferAuthorizationCodeResponse>(await this.callApi(params, req, runtime), new $_model.TransferInReenterTransferAuthorizationCodeResponse({}));
  }

  /**
   * @param request - TransferInReenterTransferAuthorizationCodeRequest
   * @returns TransferInReenterTransferAuthorizationCodeResponse
   */
  async transferInReenterTransferAuthorizationCode(request: $_model.TransferInReenterTransferAuthorizationCodeRequest): Promise<$_model.TransferInReenterTransferAuthorizationCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferInReenterTransferAuthorizationCodeWithOptions(request, runtime);
  }

  /**
   * @param request - TransferInRefetchWhoisEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferInRefetchWhoisEmailResponse
   */
  async transferInRefetchWhoisEmailWithOptions(request: $_model.TransferInRefetchWhoisEmailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferInRefetchWhoisEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferInRefetchWhoisEmail",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferInRefetchWhoisEmailResponse>(await this.callApi(params, req, runtime), new $_model.TransferInRefetchWhoisEmailResponse({}));
  }

  /**
   * @param request - TransferInRefetchWhoisEmailRequest
   * @returns TransferInRefetchWhoisEmailResponse
   */
  async transferInRefetchWhoisEmail(request: $_model.TransferInRefetchWhoisEmailRequest): Promise<$_model.TransferInRefetchWhoisEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferInRefetchWhoisEmailWithOptions(request, runtime);
  }

  /**
   * @param request - TransferInResendMailTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferInResendMailTokenResponse
   */
  async transferInResendMailTokenWithOptions(request: $_model.TransferInResendMailTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferInResendMailTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferInResendMailToken",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferInResendMailTokenResponse>(await this.callApi(params, req, runtime), new $_model.TransferInResendMailTokenResponse({}));
  }

  /**
   * @param request - TransferInResendMailTokenRequest
   * @returns TransferInResendMailTokenResponse
   */
  async transferInResendMailToken(request: $_model.TransferInResendMailTokenRequest): Promise<$_model.TransferInResendMailTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferInResendMailTokenWithOptions(request, runtime);
  }

  /**
   * @param request - VerifyContactFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyContactFieldResponse
   */
  async verifyContactFieldWithOptions(request: $_model.VerifyContactFieldRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyContactFieldResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.postalCode)) {
      query["PostalCode"] = request.postalCode;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    if (!$dara.isNull(request.registrantName)) {
      query["RegistrantName"] = request.registrantName;
    }

    if (!$dara.isNull(request.registrantOrganization)) {
      query["RegistrantOrganization"] = request.registrantOrganization;
    }

    if (!$dara.isNull(request.registrantType)) {
      query["RegistrantType"] = request.registrantType;
    }

    if (!$dara.isNull(request.telArea)) {
      query["TelArea"] = request.telArea;
    }

    if (!$dara.isNull(request.telExt)) {
      query["TelExt"] = request.telExt;
    }

    if (!$dara.isNull(request.telephone)) {
      query["Telephone"] = request.telephone;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyContactField",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyContactFieldResponse>(await this.callApi(params, req, runtime), new $_model.VerifyContactFieldResponse({}));
  }

  /**
   * @param request - VerifyContactFieldRequest
   * @returns VerifyContactFieldResponse
   */
  async verifyContactField(request: $_model.VerifyContactFieldRequest): Promise<$_model.VerifyContactFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyContactFieldWithOptions(request, runtime);
  }

  /**
   * @param request - VerifyEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyEmailResponse
   */
  async verifyEmailWithOptions(request: $_model.VerifyEmailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyEmail",
      version: "2017-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyEmailResponse>(await this.callApi(params, req, runtime), new $_model.VerifyEmailResponse({}));
  }

  /**
   * @param request - VerifyEmailRequest
   * @returns VerifyEmailResponse
   */
  async verifyEmail(request: $_model.VerifyEmailRequest): Promise<$_model.VerifyEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyEmailWithOptions(request, runtime);
  }

}
