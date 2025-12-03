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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("governance", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Applies an account baseline to multiple existing resource accounts at a time.
   * 
   * @remarks
   * You can call this operation to apply an account baseline to existing resource accounts.
   * Accounts are enrolled in the account factory in asynchronous mode. After a resource account is created, an account baseline is applied to the account. You can call the [GetEnrolledAccount](https://help.aliyun.com/document_detail/609062.html) operation to query the details of the account enrolled in the account factory and check whether the account baseline is applied to the account.
   * 
   * @param request - BatchEnrollAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchEnrollAccountsResponse
   */
  async batchEnrollAccountsWithOptions(request: $_model.BatchEnrollAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchEnrollAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accounts)) {
      query["Accounts"] = request.accounts;
    }

    if (!$dara.isNull(request.baselineId)) {
      query["BaselineId"] = request.baselineId;
    }

    if (!$dara.isNull(request.baselineItems)) {
      query["BaselineItems"] = request.baselineItems;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchEnrollAccounts",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchEnrollAccountsResponse>(await this.callApi(params, req, runtime), new $_model.BatchEnrollAccountsResponse({}));
  }

  /**
   * Applies an account baseline to multiple existing resource accounts at a time.
   * 
   * @remarks
   * You can call this operation to apply an account baseline to existing resource accounts.
   * Accounts are enrolled in the account factory in asynchronous mode. After a resource account is created, an account baseline is applied to the account. You can call the [GetEnrolledAccount](https://help.aliyun.com/document_detail/609062.html) operation to query the details of the account enrolled in the account factory and check whether the account baseline is applied to the account.
   * 
   * @param request - BatchEnrollAccountsRequest
   * @returns BatchEnrollAccountsResponse
   */
  async batchEnrollAccounts(request: $_model.BatchEnrollAccountsRequest): Promise<$_model.BatchEnrollAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchEnrollAccountsWithOptions(request, runtime);
  }

  /**
   * Creates a baseline of the account factory.
   * 
   * @param request - CreateAccountFactoryBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountFactoryBaselineResponse
   */
  async createAccountFactoryBaselineWithOptions(request: $_model.CreateAccountFactoryBaselineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccountFactoryBaselineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baselineItems)) {
      query["BaselineItems"] = request.baselineItems;
    }

    if (!$dara.isNull(request.baselineName)) {
      query["BaselineName"] = request.baselineName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccountFactoryBaseline",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccountFactoryBaselineResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccountFactoryBaselineResponse({}));
  }

  /**
   * Creates a baseline of the account factory.
   * 
   * @param request - CreateAccountFactoryBaselineRequest
   * @returns CreateAccountFactoryBaselineResponse
   */
  async createAccountFactoryBaseline(request: $_model.CreateAccountFactoryBaselineRequest): Promise<$_model.CreateAccountFactoryBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountFactoryBaselineWithOptions(request, runtime);
  }

  /**
   * Deletes an account factory baseline.
   * 
   * @param request - DeleteAccountFactoryBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccountFactoryBaselineResponse
   */
  async deleteAccountFactoryBaselineWithOptions(request: $_model.DeleteAccountFactoryBaselineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccountFactoryBaselineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baselineId)) {
      query["BaselineId"] = request.baselineId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccountFactoryBaseline",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccountFactoryBaselineResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccountFactoryBaselineResponse({}));
  }

  /**
   * Deletes an account factory baseline.
   * 
   * @param request - DeleteAccountFactoryBaselineRequest
   * @returns DeleteAccountFactoryBaselineResponse
   */
  async deleteAccountFactoryBaseline(request: $_model.DeleteAccountFactoryBaselineRequest): Promise<$_model.DeleteAccountFactoryBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountFactoryBaselineWithOptions(request, runtime);
  }

  /**
   * Enrolls an account. You can create a new account or manage an existing account in the account factory.
   * 
   * @remarks
   * You can call this API operation to create a new account or manage an existing account and apply the account baseline to the account.
   * Accounts are created in asynchronous mode. After you create an account, you can apply the account baseline to the account. You can call the [GetEnrolledAccount API](~~GetEnrolledAccount~~) operation to view the details about the account to obtain the result of applying the account baseline to the account.
   * 
   * @param tmpReq - EnrollAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnrollAccountResponse
   */
  async enrollAccountWithOptions(tmpReq: $_model.EnrollAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnrollAccountResponse> {
    tmpReq.validate();
    let request = new $_model.EnrollAccountShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accountNamePrefix)) {
      query["AccountNamePrefix"] = request.accountNamePrefix;
    }

    if (!$dara.isNull(request.accountUid)) {
      query["AccountUid"] = request.accountUid;
    }

    if (!$dara.isNull(request.baselineId)) {
      query["BaselineId"] = request.baselineId;
    }

    if (!$dara.isNull(request.baselineItems)) {
      query["BaselineItems"] = request.baselineItems;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.payerAccountUid)) {
      query["PayerAccountUid"] = request.payerAccountUid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellAccountType)) {
      query["ResellAccountType"] = request.resellAccountType;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnrollAccount",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnrollAccountResponse>(await this.callApi(params, req, runtime), new $_model.EnrollAccountResponse({}));
  }

  /**
   * Enrolls an account. You can create a new account or manage an existing account in the account factory.
   * 
   * @remarks
   * You can call this API operation to create a new account or manage an existing account and apply the account baseline to the account.
   * Accounts are created in asynchronous mode. After you create an account, you can apply the account baseline to the account. You can call the [GetEnrolledAccount API](~~GetEnrolledAccount~~) operation to view the details about the account to obtain the result of applying the account baseline to the account.
   * 
   * @param request - EnrollAccountRequest
   * @returns EnrollAccountResponse
   */
  async enrollAccount(request: $_model.EnrollAccountRequest): Promise<$_model.EnrollAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enrollAccountWithOptions(request, runtime);
  }

  /**
   * Obtains the details of an account factory baseline.
   * 
   * @param request - GetAccountFactoryBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountFactoryBaselineResponse
   */
  async getAccountFactoryBaselineWithOptions(request: $_model.GetAccountFactoryBaselineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountFactoryBaselineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baselineId)) {
      query["BaselineId"] = request.baselineId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountFactoryBaseline",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccountFactoryBaselineResponse>(await this.callApi(params, req, runtime), new $_model.GetAccountFactoryBaselineResponse({}));
  }

  /**
   * Obtains the details of an account factory baseline.
   * 
   * @param request - GetAccountFactoryBaselineRequest
   * @returns GetAccountFactoryBaselineResponse
   */
  async getAccountFactoryBaseline(request: $_model.GetAccountFactoryBaselineRequest): Promise<$_model.GetAccountFactoryBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountFactoryBaselineWithOptions(request, runtime);
  }

  /**
   * Queries the details about an account that is enrolled in the account factory.
   * 
   * @param request - GetEnrolledAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnrolledAccountResponse
   */
  async getEnrolledAccountWithOptions(request: $_model.GetEnrolledAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEnrolledAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountUid)) {
      query["AccountUid"] = request.accountUid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEnrolledAccount",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEnrolledAccountResponse>(await this.callApi(params, req, runtime), new $_model.GetEnrolledAccountResponse({}));
  }

  /**
   * Queries the details about an account that is enrolled in the account factory.
   * 
   * @param request - GetEnrolledAccountRequest
   * @returns GetEnrolledAccountResponse
   */
  async getEnrolledAccount(request: $_model.GetEnrolledAccountRequest): Promise<$_model.GetEnrolledAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEnrolledAccountWithOptions(request, runtime);
  }

  /**
   * Queries a list of baseline items that are supported by the account factory of Cloud Governance Center (CGC).
   * 
   * @param request - ListAccountFactoryBaselineItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccountFactoryBaselineItemsResponse
   */
  async listAccountFactoryBaselineItemsWithOptions(request: $_model.ListAccountFactoryBaselineItemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccountFactoryBaselineItemsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.names)) {
      query["Names"] = request.names;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.versions)) {
      query["Versions"] = request.versions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccountFactoryBaselineItems",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccountFactoryBaselineItemsResponse>(await this.callApi(params, req, runtime), new $_model.ListAccountFactoryBaselineItemsResponse({}));
  }

  /**
   * Queries a list of baseline items that are supported by the account factory of Cloud Governance Center (CGC).
   * 
   * @param request - ListAccountFactoryBaselineItemsRequest
   * @returns ListAccountFactoryBaselineItemsResponse
   */
  async listAccountFactoryBaselineItems(request: $_model.ListAccountFactoryBaselineItemsRequest): Promise<$_model.ListAccountFactoryBaselineItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccountFactoryBaselineItemsWithOptions(request, runtime);
  }

  /**
   * Obtains a list of baselines in the account factory.
   * 
   * @param request - ListAccountFactoryBaselinesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccountFactoryBaselinesResponse
   */
  async listAccountFactoryBaselinesWithOptions(request: $_model.ListAccountFactoryBaselinesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccountFactoryBaselinesResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccountFactoryBaselines",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccountFactoryBaselinesResponse>(await this.callApi(params, req, runtime), new $_model.ListAccountFactoryBaselinesResponse({}));
  }

  /**
   * Obtains a list of baselines in the account factory.
   * 
   * @param request - ListAccountFactoryBaselinesRequest
   * @returns ListAccountFactoryBaselinesResponse
   */
  async listAccountFactoryBaselines(request: $_model.ListAccountFactoryBaselinesRequest): Promise<$_model.ListAccountFactoryBaselinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccountFactoryBaselinesWithOptions(request, runtime);
  }

  /**
   * Queries a list of accounts that are enrolled in the account factory.
   * 
   * @param request - ListEnrolledAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnrolledAccountsResponse
   */
  async listEnrolledAccountsWithOptions(request: $_model.ListEnrolledAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnrolledAccountsResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnrolledAccounts",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnrolledAccountsResponse>(await this.callApi(params, req, runtime), new $_model.ListEnrolledAccountsResponse({}));
  }

  /**
   * Queries a list of accounts that are enrolled in the account factory.
   * 
   * @param request - ListEnrolledAccountsRequest
   * @returns ListEnrolledAccountsResponse
   */
  async listEnrolledAccounts(request: $_model.ListEnrolledAccountsRequest): Promise<$_model.ListEnrolledAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnrolledAccountsWithOptions(request, runtime);
  }

  /**
   * Queries all available information about check items in a governance maturity check, including the name, ID, description, stage, resource metadata, and fixing guide.
   * 
   * @param request - ListEvaluationMetadataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEvaluationMetadataResponse
   */
  async listEvaluationMetadataWithOptions(request: $_model.ListEvaluationMetadataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEvaluationMetadataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.lensCode)) {
      query["LensCode"] = request.lensCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topicCode)) {
      query["TopicCode"] = request.topicCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEvaluationMetadata",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEvaluationMetadataResponse>(await this.callApi(params, req, runtime), new $_model.ListEvaluationMetadataResponse({}));
  }

  /**
   * Queries all available information about check items in a governance maturity check, including the name, ID, description, stage, resource metadata, and fixing guide.
   * 
   * @param request - ListEvaluationMetadataRequest
   * @returns ListEvaluationMetadataResponse
   */
  async listEvaluationMetadata(request: $_model.ListEvaluationMetadataRequest): Promise<$_model.ListEvaluationMetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEvaluationMetadataWithOptions(request, runtime);
  }

  /**
   * Queries the non-compliant resource information of a check item, including the name, ID, category, type, region, and related metadata of non-compliant resources.
   * 
   * @param request - ListEvaluationMetricDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEvaluationMetricDetailsResponse
   */
  async listEvaluationMetricDetailsWithOptions(request: $_model.ListEvaluationMetricDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEvaluationMetricDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.date)) {
      query["Date"] = request.date;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEvaluationMetricDetails",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEvaluationMetricDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ListEvaluationMetricDetailsResponse({}));
  }

  /**
   * Queries the non-compliant resource information of a check item, including the name, ID, category, type, region, and related metadata of non-compliant resources.
   * 
   * @param request - ListEvaluationMetricDetailsRequest
   * @returns ListEvaluationMetricDetailsResponse
   */
  async listEvaluationMetricDetails(request: $_model.ListEvaluationMetricDetailsRequest): Promise<$_model.ListEvaluationMetricDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEvaluationMetricDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the result and status of a governance check.
   * 
   * @param request - ListEvaluationResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEvaluationResultsResponse
   */
  async listEvaluationResultsWithOptions(request: $_model.ListEvaluationResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEvaluationResultsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.lensCode)) {
      query["LensCode"] = request.lensCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.topicCode)) {
      query["TopicCode"] = request.topicCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEvaluationResults",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEvaluationResultsResponse>(await this.callApi(params, req, runtime), new $_model.ListEvaluationResultsResponse({}));
  }

  /**
   * Queries the result and status of a governance check.
   * 
   * @param request - ListEvaluationResultsRequest
   * @returns ListEvaluationResultsResponse
   */
  async listEvaluationResults(request: $_model.ListEvaluationResultsRequest): Promise<$_model.ListEvaluationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * Queries the historical scores of a governance maturity check.
   * 
   * @param request - ListEvaluationScoreHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEvaluationScoreHistoryResponse
   */
  async listEvaluationScoreHistoryWithOptions(request: $_model.ListEvaluationScoreHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEvaluationScoreHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEvaluationScoreHistory",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEvaluationScoreHistoryResponse>(await this.callApi(params, req, runtime), new $_model.ListEvaluationScoreHistoryResponse({}));
  }

  /**
   * Queries the historical scores of a governance maturity check.
   * 
   * @param request - ListEvaluationScoreHistoryRequest
   * @returns ListEvaluationScoreHistoryResponse
   */
  async listEvaluationScoreHistory(request: $_model.ListEvaluationScoreHistoryRequest): Promise<$_model.ListEvaluationScoreHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEvaluationScoreHistoryWithOptions(request, runtime);
  }

  /**
   * Performs a governance maturity check.
   * 
   * @param tmpReq - RunEvaluationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunEvaluationResponse
   */
  async runEvaluationWithOptions(tmpReq: $_model.RunEvaluationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunEvaluationResponse> {
    tmpReq.validate();
    let request = new $_model.RunEvaluationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.metricIds)) {
      request.metricIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metricIds, "MetricIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.metricIdsShrink)) {
      query["MetricIds"] = request.metricIdsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunEvaluation",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunEvaluationResponse>(await this.callApi(params, req, runtime), new $_model.RunEvaluationResponse({}));
  }

  /**
   * Performs a governance maturity check.
   * 
   * @param request - RunEvaluationRequest
   * @returns RunEvaluationResponse
   */
  async runEvaluation(request: $_model.RunEvaluationRequest): Promise<$_model.RunEvaluationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runEvaluationWithOptions(request, runtime);
  }

  /**
   * Updates a baseline of the account factory.
   * 
   * @param request - UpdateAccountFactoryBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAccountFactoryBaselineResponse
   */
  async updateAccountFactoryBaselineWithOptions(request: $_model.UpdateAccountFactoryBaselineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAccountFactoryBaselineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baselineId)) {
      query["BaselineId"] = request.baselineId;
    }

    if (!$dara.isNull(request.baselineItems)) {
      query["BaselineItems"] = request.baselineItems;
    }

    if (!$dara.isNull(request.baselineName)) {
      query["BaselineName"] = request.baselineName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAccountFactoryBaseline",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAccountFactoryBaselineResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAccountFactoryBaselineResponse({}));
  }

  /**
   * Updates a baseline of the account factory.
   * 
   * @param request - UpdateAccountFactoryBaselineRequest
   * @returns UpdateAccountFactoryBaselineResponse
   */
  async updateAccountFactoryBaseline(request: $_model.UpdateAccountFactoryBaselineRequest): Promise<$_model.UpdateAccountFactoryBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAccountFactoryBaselineWithOptions(request, runtime);
  }

}
